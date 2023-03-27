<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class trainingCalendar extends Controller
{
    public function store(Request $request){

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

    public function display(){
        return \App\Models\trainingCalendar::with('events')->get();
    }
   
}
