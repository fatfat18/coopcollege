<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;



class contactUs extends Controller
{
    public function update(Request $request){
        \App\Models\contactUs::where('idcontactUs','1')->update($request->all());
        return ['msg'=>"Successfuly updated contacts"];
    }

    public function display(){
        return \App\Models\contactUs::where('idcontactUs','1')->get();
    }

   

}
