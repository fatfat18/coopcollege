<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;

use Illuminate\Http\Request;

class bod extends Controller
{
    public function store(Request $request){

        Storage::disk('public')->put('BOD/1.txt', "df");

        $data = \App\Models\images::create(['ImageUrl'=> Storage::url('BOD/1.txt'), 'imagesInfo'=>'this is  info' ]);

        \App\Models\BOD::create([
            'ImagesId'=>$data->id,  
            'Prefix'=>$request->Prefix, 
            'Fname'=>$request->Fname, 
            'Lname'=>$request->Lname, 
            'Suffix'=>$request->Suffix, 
            'Position'=>$request->Position, 
            'startDate'=>$request->startDate, 
            'endDate'=>$request->endDate, 
            'Address'=>$request->Address, 
            'coopId'=>542
        ]);

        return ['msg'=>"Successfuly saved bod."];

    }


    public function update(Request $request){
        \App\Models\BOD::where('idBOD', $request->idBOD)->update($request->all());

        return ['msg'=>"successfuly update bod"];
    }


    public function display(){
        return \App\Models\BOD::where('Status', 1)->with('image')->get();
    }
}
