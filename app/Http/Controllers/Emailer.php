<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;

use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;


class Emailer extends Controller
{
    //
    public function sendWelcomeEmail(Request $request)
    {
      

        try {
            // Your code that may throw an exception goes here
        
    
            //$userEmail = 'syncocovers@gmail.com'; // Replace with the actual email
            Mail::to($request->email)->send(new WelcomeMail());
            // Additional logic and response handling
        
            // Alternatively, any other code that might throw an exception
            // ...

            return response()->json(['message' => 'Email Sent Succesfully.'], 200);
        
            // If an exception is thrown, the code below the exception won't be executed
        } catch (Exception $e) {
            // Handle the exception
        
            // Log the exception
            \Log::error('Exception caught: ' . $e->getMessage());
        
            // Return a response, redirect, or perform any other actions
            // For example, you might want to notify the user about the error
            return response()->json(['error' => 'An error occurred. Please try again later.'], 500);
        }
    }
}
