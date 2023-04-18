<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Image;

use Illuminate\Http\Request;

class partner extends Controller
{
    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'partnerName' => 'required',
            'file'  => 'required|image|mimes:jpeg,png,jpg,gif,svg'
        ]);
 
        if ($validator->fails()) {
            return $validator->errors();
        }
       
        $filename=base64_encode(now().$request->file('file')->getClientOriginalName()).'.'.$request->file('file')->getClientOriginalExtension(); 

        $img = Image::make($request->file('file'))->resize(1080, 720, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });
        
        $img->save(storage_path('/app/public/partner/'.$filename), 50);   

        $data =\App\Models\images::create(['ImageUrl'=> \URL::to('/').Storage::url('partner/'.$filename), 'imagesInfo'=> $filename]);

        \App\Models\partner::create(['partnerName'=>$request->partnerName, 'ImagesId'=>$data->id ]);

        return ['msg'=>"Successfuly saved partner."];
    }




    public function update(Request $request){

        $validator = Validator::make($request->all(), [
            'idPartner' => 'required'
        ]);
 
        if ($validator->fails()) {
            return $validator->errors();
        }

        \App\Models\partner::where('idPartner', $request->idPartner)->update(['status'=> $request->status,'partnerName' => $request->partnerName]);

        return ['msg'=>"Successfuly deleted partner."];
    }

    public function display(){
        return \App\Models\partner::where('Status', 1)->with('image')->get();
    }


    public function delete(Request $request){

        $validator = Validator::make($request->all(), [
            'idPartner' => 'required|exists:partners,idPartner',
        ],[
            'idPartner.exists'=>"idPartner does not exist."
        ]);
 
        if ($validator->fails()) {
            return $validator->errors();
        }


        $data= \App\Models\partner::where('idPartner', $request->idPartner)->with('image')->first();

        Storage::disk('public')->delete('partner/'.$data->image->imagesInfo);
        
       
        \App\Models\partner::where('idPartner', $data->idPartner)->delete();

        \App\Models\images::where('imagesId', $data->ImagesId)->delete();

        return ['msg'=> "successfully deleted"];

    }
}
