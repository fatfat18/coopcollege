<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class news extends Controller

{
    public function storeNews(Request $request){
        \App\Models\newsContext::create($request->all());

        return ['msg'=>"successfuly news info."];
    }

    public function updateNews(){
        // somethings here
    }


    public function deleteNews(){
        // somethings here
    }

    public function displayNews(){
        return \App\Models\newsContext::get();
    }


}
