<?php

namespace App\Http\Controllers;
use DateTime;
use Illuminate\Support\Facades\Storage;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class post extends Controller
{
    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'PostCatId'=> 'required',
            'idUser'=> 'required|numeric',
            'Description'=> 'required', 
            'newsTitle'=> 'required', 
            'Context'=> 'required', 
            'news_DateCreated'=> 'required|date',
            'file.*' => 'required|mimetypes:image/jpg,image/jpeg,image/bmp,image/png'
        ]);
 
        if ($validator->fails()) {
            return $validator->errors();
        }

        $data = \App\Models\post::create([
            'PostCatId'=>$request->PostCatId, 
            'idUser'=>$request->idUser, 
            'Description'=>$request->Description, 
            'newsTitle'=>$request->newsTitle, 
            'Context'=>$request->Context, 
            'news_DateCreated'=>new DateTime(), 
        ]);

        foreach ($request->file('file') as $row) {
            $filename= Storage::putFile('public/POST', $row);
            
            \App\Models\images::create(['ImageUrl'=> \URL::to('/').Storage::url($filename), 'imagesInfo'=>$row->getClientOriginalName(), 'Postid'=>$data->id ]);
        }

        return ['msg'=>"successfuly saved news info."];
    }

    public function update(Request $request){

        $validator = Validator::make($request->all(), [
            'Postid' => 'required',
        ]);
 
        if ($validator->fails()) {
            return $validator->errors();
        }

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
