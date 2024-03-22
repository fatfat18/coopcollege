<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\news;
use App\Http\Controllers\trainingCalendar;
use App\Http\Controllers\contactUs;
use App\Http\Controllers\post;
use App\Http\Controllers\partner;
use App\Http\Controllers\bod;
use App\Http\Controllers\Emailer;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\NavBarController;
use App\Http\Controllers\webVisits;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




//ROUTERS FOR ADMIN DASHBOARD
Route::get('/Posts', function () {
    return Inertia::render('Posts');
})->middleware(['auth', 'verified'])->name('Posts');

Route::get('/BoardOfTrustees', function () {
    return Inertia::render('BoardOfTrustees');
})->middleware(['auth', 'verified'])->name('BoardOfTrustees');

Route::get('/Partners', function () {
    return Inertia::render('Partners');
})->middleware(['auth', 'verified'])->name('Partners');

Route::get('/TrainingCalendar', function () {
    return Inertia::render('TrainingCalendar');
})->middleware(['auth', 'verified'])->name('TrainingCalendar');

Route::get('/Contacts', function () {
    return Inertia::render('Contacts');
})->middleware(['auth', 'verified'])->name('Contacts');






//PROFILE
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

});




//EDITORS SA ADMIN PANEL 
Route::get('/PostsEditor', function () {
    return Inertia::render('Editor/PostsEditor');
})->middleware(['auth', 'verified'])->name('PostsEditor');

Route::get('/BoardOfTrusteesEditor', function () {
    return Inertia::render('Editor/BoardOfTrusteesEditor');
})->middleware(['auth', 'verified'])->name('BoardOfTrusteesEditor');

Route::get('/PartnersEditor', function () {
    return Inertia::render('Editor/PartnersEditor');
})->middleware(['auth', 'verified'])->name('PartnersEditor');

Route::get('/TrainingCalendarEditor', function () {
    return Inertia::render('Editor/TrainingCalendarEditor');
})->middleware(['auth', 'verified'])->name('TrainingCalendarEditor');





//route with ID for update
Route::get('/TrainingCalendarUpdate/{idTC}', function ($idTC) {
    return Inertia::render('Editor/TrainingCalendarUpdate');
})->name('TrainingCalendarUpdate');

Route::get('/PostsUpdate/{Postid}', function ($Postid) {
    return Inertia::render('Editor/PostsUpdate');
})->name('PostsUpdate');

Route::get('/BoardOfTrusteesUpdate/{idBOD}', function ($idBOD) {
    return Inertia::render('Editor/BoardOfTrusteesUpdate');
})->name('BoardOfTrusteesUpdate');

Route::get('/PartnersUpdate/{idPartner}', function ($idPartner) {
    return Inertia::render('Editor/PartnersUpdate');
})->name('PartnersUpdate');


Route::get('/ViewPost/{Postid}', function ($Postid) {
    return Inertia::render('ViewPost');
})->name('ViewPost');













//ROUTES FOR VIEWERS END
Route::get('/', function () {
    return Inertia::render('ViewersPage/Home', [
        'canLogin' => Route::has('login'),        //ADMIN LOGIN
        'canRegister' => Route::has('register'),
          //ADMIN REGISTER
    ]);
})->name('Home');

Route::get('/News', function () {
    return Inertia::render('ViewersPage/News');
})->name('News');

Route::get('/AboutUs', function () {
    return Inertia::render('ViewersPage/AboutUs');
})->name('AboutUs');

Route::get('/LearnWithUs', function () {
    return Inertia::render('ViewersPage/LearnWithUs');
})->name('LearnWithUs');

Route::get('/Resources', function () {
    return Inertia::render('ViewersPage/Resources');
})->name('Resources');


Route::get('/Projects', function () {
    return Inertia::render('ViewersPage/Projects');
})->name('Projects');






Route::get('/ViewPost', function () {
    return Inertia::render('ViewPost');
});








// post
Route::post('/storePost',[post::class, 'store'] );

Route::get('/displayPost',[post::class, 'display'] );

Route::put('/updateCategory',[post::class, 'update'] );

Route::get('/postCategory',[post::class, 'postCategory'] );

Route::delete('/deleteCategory',[post::class, 'delete'] );

Route::get('/paginateDisplayPost',[post::class, 'paginateDisplay'] );





// calendar
Route::post('/storeCalendarTraining',[trainingCalendar::class, 'store'] );

Route::get('/displayCalendarTraining',[trainingCalendar::class, 'display'] );

Route::put('/updateCalendarTraining',[trainingCalendar::class, 'update'] );

Route::get('/displayCalendarTrainingAdmin',[trainingCalendar::class, 'displayAdmin'] );


Route::delete('/deleteCalendar',[trainingCalendar::class, 'delete'] );



// contact us
Route::put('/contactUs',[contactUs::class, 'update'] );

Route::get('/displayContactUs',[contactUs::class, 'display'] );


// partner
Route::post('/partner',[partner::class, 'store'] );

Route::get('/displayPartner',[partner::class, 'display'] );

Route::get('/displayPartnerAdmin',[partner::class, 'displayAdmin'] );

Route::put('/updatePartnerStatus',[partner::class, 'update'] );

Route::delete('/deletePartner',[partner::class, 'delete'] );




// bod
Route::post('/storeBOD',[bod::class, 'store'] );

Route::put('/updateBOD',[bod::class, 'update'] );

Route::get('/displayBOD',[bod::class, 'display'] );
Route::get('/displayBODAdmin',[bod::class, 'displayAdmin'] );

Route::delete('/deleteBOD',[bod::class, 'delete'] );


// mailer
Route::post('/email',[Emailer::class, 'sendWelcomeEmail'] );


// web visits counter
Route::post('/webvisits',[webVisits::class, 'store'] );
Route::get('/displaywebvisits',[webVisits::class, 'display'] );


Route::get('/api/ip', function () {
    try {
        $response = Http::get('http://ip-api.com/json/');
        return $response->json();
    } catch (\Exception $e) {
        // Handle errors
        return response()->json(['error' => 'Internal Server Error'], 500);
    }
});


require __DIR__.'/auth.php';
