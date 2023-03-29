<?php

namespace App\Http\Controllers;
use DateTime;
use Illuminate\Support\Facades\Storage;

use Illuminate\Http\Request;

class post extends Controller
{
    public function store(Request $request){

        Storage::disk('public')->put('POST/1.txt', "df");

        $data = \App\Models\images::create(['ImageUrl'=> Storage::url('POST/1.txt'), 'imagesInfo'=>'this is  info' ]);

        \App\Models\post::create([
            'PostCatId'=>$request->PostCatId, 
            'ImagesId'=>$data->id, 
            'idUser'=>$request->idUser, 
            'Description'=>$request->Description, 
            'newsTitle'=>$request->newsTitle, 
            'Context'=>$request->Context, 
            'news_DateCreated'=>new DateTime(), 
        ]);

        return ['msg'=>"successfuly saved news info."];
    }

    public function update(Request $request){
        \App\Models\post::where('Postid', $request->Postid)->update([
            'PostCatId'=>$request->PostCatId, 
            'idUser'=>$request->idUser, 
            'Description'=>$request->Description, 
            'newsTitle'=>$request->newsTitle, 
            'Context'=>$request->Context,  
        ]);

        return ['msg'=>"successfuly updated post info."];
    }


  
    public function display(){
        return \App\Models\post::with('image','category')->where('Status',1)->get();
    }


    public function postCategory(){
        return \App\Models\postCat::get();
    }


	
}
