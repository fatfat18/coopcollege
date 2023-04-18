<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Image;

use Illuminate\Http\Request;

class bod extends Controller
{
    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'Prefix' => 'nullable',
            'Fname' => 'required',
            'Lname' => 'required',
            'Suffix' => 'nullable',
            'Position' => 'required',
            'startDate' => 'required|date',
            'endDate' => 'required|date',
            'Address' => 'required',
            'file'  => 'required|image|mimes:jpeg,png,jpg,gif,svg'
        ]);
 
        if ($validator->fails()) {
            return $validator->errors();
        }

       
        $filename=base64_encode(now().$request->file('file')->getClientOriginalName()).'.'.$request->file('file')->getClientOriginalExtension(); 

        $img = Image::make($request->file('file'))->resize(720, 1080, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });
        
        $img->save(storage_path('/app/public/BOD/'.$filename), 50);   

        $data =\App\Models\images::create(['ImageUrl'=> \URL::to('/').Storage::url('BOD/'.$filename), 'imagesInfo'=> $filename]);

        \App\Models\BOD::create([
            'ImagesId'=>$data->id,  
            'Prefix'=>$request->Prefix , 
            'Fname'=>$request->Fname, 
            'Lname'=>$request->Lname, 
            'Suffix'=>$request->Suffix , 
            'Position'=>$request->Position, 
            'startDate'=>$request->startDate, 
            'endDate'=>$request->endDate, 
            'Address'=>$request->Address, 
            'coopId'=>542
        ]);

        return ['msg'=>"Successfuly saved bod."];

    }


    public function update(Request $request){

        $validator = Validator::make($request->all(), [
            'idBOD' => 'required',
        ]);
 
        if ($validator->fails()) {
            return $validator->errors();
        }

        \App\Models\BOD::where('idBOD', $request->idBOD)->update($request->all());

        return ['msg'=>"successfuly update bod"];
    }


    public function display(){
        return \App\Models\BOD::where('Status', 1)->with('image')->get();
    }


    public function delete(Request $request){

        $validator = Validator::make($request->all(), [
            'idBOD' => 'required|exists:b_o_d_s,idBOD',
        ],[
            'idBOD.exists'=>"idBOD does not exist."
        ]);
 
        if ($validator->fails()) {
            return $validator->errors();
        }

        $data= \App\Models\BOD::where('idBOD', $request->idBOD)->with('image')->first();

     

        Storage::disk('public')->delete('BOD/'.$data->image->imagesInfo);
        
       
        \App\Models\BOD::where('idBOD', $data->idBOD)->delete();

        \App\Models\images::where('imagesId', $data->ImagesId)->delete();

        return ['msg'=> "successfully deleted"];

    }
}
