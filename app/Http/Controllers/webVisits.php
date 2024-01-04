<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class webVisits extends Controller
{
    //
    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'City'=> 'required', 
            'Country'=> 'required',
            'IpAdd'=> 'required', 
    
        ]);
 
        if ($validator->fails()) {
            return $validator->errors();
        }


        $data = \App\Models\webVisits::create([
            'Country' => $request->Country, 
            'City' => $request->City, 
            'IpAdd' => $request->IpAdd,
            
        ]);


        return ['msg'=>"successfuly saved web visitors info."];
    }

    public function display()
    {
        // Perform the query with GROUP BY
        $results = \App\Models\webVisits::groupBy('Country')
            ->select('Country', DB::raw('COUNT(*) as count'))
            ->orderByDesc('count')
            ->get();

        // Pass the results to a view or return them as a JSON response
        return response()->json(['results' => $results]);
        // Or return response()->json(['results' => $results]);
    }

   

}
