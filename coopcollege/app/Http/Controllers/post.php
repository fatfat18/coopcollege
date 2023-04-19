<?php

namespace App\Http\Controllers;
use DateTime;

use Illuminate\Support\Facades\Storage;
use Image;
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
            'news_DateCreated'=> 'nullable|date',
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

            $filename=base64_encode(now().$row->getClientOriginalName()).'.'.$row->getClientOriginalExtension(); 

            $img = Image::make($row)->resize(1080, 720, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
            
            $img->save(storage_path('/app/public/POST/'.$filename), 50);   
            
            \App\Models\images::create(['ImageUrl'=> \URL::to('/').Storage::url('POST/'.$filename), 'imagesInfo'=>$filename, 'Postid'=>$data->id ]);
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
        return \App\Models\post::with('image','category','avatar')->where('Status',1)->orderBy('Postid', 'desc')->get();
    }


    public function postCategory(){
        return \App\Models\postCat::get();
    }


    public function delete(Request $request){

        $validator = Validator::make($request->all(), [
            'Postid' => 'required|exists:posts,Postid',
        ],[
            'Postid.exists'=>"Postid does not exist."
        ]);
 
        if ($validator->fails()) {
            return $validator->errors();
        }

        foreach (\App\Models\images::where('Postid', $request->Postid)->get() as $row) {

            Storage::disk('public')->delete('POST/'.$row->imagesInfo);
        }

        \App\Models\post::where('Postid', $request->Postid)->delete();

        \App\Models\images::where('Postid', $request->Postid)->delete();

        return ['msg'=> "successfuly deleted."];
    }


    public function paginateDisplay(Request $request){
        return \App\Models\post::with('image','category','avatar')->where('Status', 1)->paginate($request->per_page);
    }





	
}
