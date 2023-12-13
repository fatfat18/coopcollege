<!-- resources/views/emails/welcome.blade.php -->
@component('mail::message')
# Welcome to Co-operative College of the Phillipines

Thank you for subscribing to our Newsletter. We're excited to updated you with out current news!.

@component('mail::button', ['url' => 'https://co-opcollege.ph'])
Visit Website
@endcomponent

Thanks,<br>
Co-operative College of the Philippines
@endcomponent