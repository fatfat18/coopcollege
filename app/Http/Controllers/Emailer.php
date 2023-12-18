<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;

use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;
use App\Mail\CustomMail;


class Emailer extends Controller
{
    //
    public function sendWelcomeEmail(Request $request)
    {
      

        try {
            // Your code that may throw an exception goes here
        

            $userData = [
                'email' => $request->input('email'),
                'message' => $request->input('message'), // Replace with the actual data you want to pass
                'fullname' => $request->input('fullname'),
                // Add more data as needed
            ];
    
            $userEmail = 'patrickcd452@gmail.com'; // Replace with the actual email
            Mail::to($request->email)->send(new CustomMail($userData)); //KANI EMAIL SA USER
            // Additional logic and response handling
            Mail::to($userEmail)->send(new WelcomeMail($userData)); //KANI EMAIL SA COOPCOLLEGE ADMIN
       
            return response()->json(['message' => 'Email Sent Succesfully.'], 200);
        
            // If an exception is thrown, the code below the exception won't be executed
        } catch (Exception $e) {
            // Handle the exception
        return $e;
            // Log the exception
            \Log::error('Exception caught: ' . $e->getMessage());
        
            // Return a response, redirect, or perform any other actions
            // For example, you might want to notify the user about the error
            return response()->json(['error' => 'An error occurred. Please try again later.'], 500);
        }
    }
}
