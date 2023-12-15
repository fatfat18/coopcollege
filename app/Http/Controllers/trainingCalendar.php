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
            'cost'=>'required',
            'objectives'=>'required',
            'month_num'=>'required|numeric',
            'month'=>'required',
            'year'=>'required|numeric'
        ]);
 
        if ($validator->fails()) {
            return $validator->errors();
        }

        $data = \App\Models\courseVenue::create([
            'courseTitle' => $request->courseTitle,
            'Objectives' => $request->objectives,
            'Venue' => $request->venue,
            'Cost' => $request->cost
        ]);

        \App\Models\trainingCalendar::create([
            'idCV' => $data->id,
            'month_num' => $request->month_num,
            'month' => $request->month,
            'year' => $request->year
        ]);

        return ['msg'=>'calendar event successfuly saved.'];
    }


    public function update(Request $request){

        $validator = Validator::make($request->all(), [
            'idTC' => 'required|numeric',
            'month' => 'required|',
            'year' => 'required|numeric'
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
        return \App\Models\trainingCalendar::groupBy('year','month')->orderBy('month_num', 'asc')
        
        ->get()
        ->map(function($q){
         
            $id= \App\Models\trainingCalendar::where('year', $q->year)->where('month', $q->month)->pluck('idCV');
           
            $q['events']= \App\Models\courseVenue::whereIn('idCV', $id)->get();

            return $q;
        });
    }

    public function displayAdmin(){
        return \App\Models\trainingCalendar::with('event')->orderBy( 'idTC','DESC')->get();
    }


    public function delete(Request $request){

        $validator = Validator::make($request->all(), [
            'idCV' => 'required|exists:training_calendars,idCV'
        ],
        [
            'idCV.exists'=> "idCV does not exist."
        ]
        );
 
        if ($validator->fails()) {
            return $validator->errors();
        }

       \App\Models\trainingCalendar::where('idCV', $request->idCV)->delete();

       \App\Models\courseVenue::where('idCV', $request->idCV)->delete();

        return ['msg'=> "Deleted successfuly"];
    }

    
   
}
