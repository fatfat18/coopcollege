<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;

use Illuminate\Http\Request;

class partner extends Controller
{
    public function store(Request $request){

        Storage::disk('public')->put('partner/1.txt', "fsfsd");

        $data = \App\Models\images::create(['ImageUrl'=> Storage::url('partner/1.txt'), 'imagesInfo'=>'this is  info' ]);

        \App\Models\partner::create(['partnerName'=>$request->partnerName, 'ImagesId'=>$data->id ]);

        return ['msg'=>"Successfuly saved partner."];

    }

    public function display(){
        return \App\Models\partner::with('image')->get();
    }
}
