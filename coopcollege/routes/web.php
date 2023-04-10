<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\news;
use App\Http\Controllers\trainingCalendar;
use App\Http\Controllers\contactUs;
use App\Http\Controllers\post;
use App\Http\Controllers\partner;
use App\Http\Controllers\bod;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\NavBarController;

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





Route::get('/TrainingCalendarUpdate/{idTC}', function ($idTC) {
    return Inertia::render('Editor/TrainingCalendarUpdate');
})->name('TrainingCalendarUpdate');













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



// calendar
Route::post('/storeCalendarTraining',[trainingCalendar::class, 'store'] );

Route::get('/displayCalendarTraining',[trainingCalendar::class, 'display'] );

Route::put('/updateCalendarTraining',[trainingCalendar::class, 'update'] );


// contact us
Route::put('/contactUs',[contactUs::class, 'update'] );

Route::get('/displayContactUs',[contactUs::class, 'display'] );


// partner
Route::post('/partner',[partner::class, 'store'] );

Route::get('/displayPartner',[partner::class, 'display'] );

Route::post('/updatePartnerStatus',[partner::class, 'update'] );



// bod
Route::post('/storeBOD',[bod::class, 'store'] );

Route::put('/updateBOD',[bod::class, 'update'] );

Route::get('/displayBOD',[bod::class, 'display'] );



require __DIR__.'/auth.php';
