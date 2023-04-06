<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;


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


        $filename= Storage::putFile('public/BOD', $request->file('file'));

        $data = \App\Models\images::create(['ImageUrl'=> \URL::to('/').Storage::url($filename), 'imagesInfo'=>$request->file('file')->getClientOriginalName() ]);

        \App\Models\BOD::create([
            'ImagesId'=>$data->id,  
            'Prefix'=>$request->Prefix ?: null, 
            'Fname'=>$request->Fname, 
            'Lname'=>$request->Lname, 
            'Suffix'=>$request->Suffix ?: null, 
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
}
