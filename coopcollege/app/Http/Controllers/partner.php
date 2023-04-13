<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

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
        $filename= Storage::putFile('public/partner', $request->file('file'));
      
        $data = \App\Models\images::create(['ImageUrl'=> \URL::to('/').Storage::url($filename), 'imagesInfo'=>$request->file('file')->getClientOriginalName() ]);

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

        \App\Models\partner::where('idPartner', $request->idPartner)->update(['status'=> $request->status]);

        return ['msg'=>"Successfuly deleted partner."];
    }

    public function display(){
        return \App\Models\partner::where('Status', 1)->with('image')->get();
    }
}
