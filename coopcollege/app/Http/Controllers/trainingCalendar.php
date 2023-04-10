<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class trainingCalendar extends Controller
{
    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'courseTitle' => 'required',
            'venue'=>'required',
            'month'=>'required',
            'year'=>'required'
        ]);
 
        if ($validator->fails()) {
            return $validator->errors();
        }

        $data = \App\Models\courseVenue::create([
            'courseTitle' => $request->courseTitle,
            'venue' => $request->venue
        ]);

        \App\Models\trainingCalendar::create([
            'idCV' => $data->id,
            'month' => $request->month,
            'year' => $request->year
        ]);

        return ['msg'=>'calendar event successfuly saved.'];
    }


    public function update(Request $request){

        $validator = Validator::make($request->all(), [
            'idTC' => 'required|numeric'
        ]);
 
        if ($validator->fails()) {
            return $validator->errors();
        }

        $data = \App\Models\trainingCalendar::where('idTC', $request->idTC)->first();
        $data->month = $request->month;
        $data->year = $request->year;
        $data->save();

        \App\Models\courseVenue::where('idCV', $data->idCV)->update([
            'courseTitle' => $request->courseTitle,
            'venue' => $request->venue
        ]);

        return ['msg'=>'calendar event successfuly updated.'];
    }


    public function display(){
        return \App\Models\trainingCalendar::groupBy('year','month')
        
        ->get()
        ->map(function($q){
         
            $id= \App\Models\trainingCalendar::where('year', $q->year)->where('month', $q->month)->pluck('idCV');
           
            $q['events']= \App\Models\courseVenue::whereIn('idCV', $id)->get();

            return $q;
        });
    }

    
   
}
