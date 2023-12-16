<!-- resources/views/emails/welcome.blade.php -->

{{-- <h1 style="color:darkgoldenrod">Welcome to Co-operative College of the Phillipines</h1>

Thank you for subscribing to our Newsletter. We're excited to updated you with out current news!.

@component('mail::button', ['url' => 'https://co-opcollege.ph'])
Visit Website
@endcomponent

Thanks,<br>
Co-operative College of the Philippines

 --}}


 <html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Custom Subject</title>
    <style>
        /* Your custom styles go here */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
        }

        h1 {
            color: #333333;
        }

        p {
            color: #555555;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            background-color: #3498db;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
        }

        .footer {
            margin:0;
            margin-top: 20px;
            background-color:red;
            text-align: left;
            color: #000033;
        }

        .customfooter{
            
        }
    </style>
</head>
<body>
<div class="container">
    
    <h1>A user has signed up to be part of the newsletter!</h1>
    <h3>Fullname : {{ $userData['fullname'] }}</h3>
    <h3>Email : {{ $userData['email'] }}</h3>
    <h3>Message : {{ $userData['message'] }}</h3>
  

   
</div>
</body>
</html>