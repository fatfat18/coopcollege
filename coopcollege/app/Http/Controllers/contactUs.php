<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;



//TEST DEBUG - WALAY SULOD ANG REQUEST
class contactUs extends Controller
{
    public function update(Request $request)
    {
        $data = $request->all();

        if (empty($data)) {
            return ['msg' => 'No data to update.'];
        }

        \App\Models\contactUs::where('idcontactUs', 1)->update($data);
        return ['msg' => 'Successfully updated contact.'];
    }
}






//CONTACTUS CONTROLLER NGA GA 500 SERVER ERROR

//class contactUs extends Controller
//{

//    public function update(Request $request){
//        \App\Models\contactUs::where('idcontactUs','1')->update($request->all());
//        return ['msg'=>"Successfuly updated contacts"];
//    }
//}
