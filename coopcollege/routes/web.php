<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\news;
use App\Http\Controllers\trainingCalendar;
use App\Http\Controllers\contactUs;
use App\Http\Controllers\partner;


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








//PROFILE CONTROLLER
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







//ROUTES FOR VIEWERS END

Route::get('/', function () {
    return Inertia::render('ViewersPage/Home', [
        'canLogin' => Route::has('login'),        //ADMIN LOGIN
        'canRegister' => Route::has('register'),  //ADMIN REGISTER
    ]);
});

Route::get('/News', function () {
    return Inertia::render('ViewersPage/News');
});

Route::get('/AboutUs', function () {
    return Inertia::render('ViewersPage/AboutUs');
});

Route::get('/LearnWithUs', function () {
    return Inertia::render('ViewersPage/LearnWithUs');
});

Route::get('/Resources', function () {
    return Inertia::render('ViewersPage/Resources');
});




Route::get('/Projects', function () {
    return Inertia::render('ViewersPage/Projects');
});


Route::get('/ViewPost', function () {
    return Inertia::render('ViewPost');
});






// post
Route::get('/news',[news::class, 'store'] );

// calendar
Route::post('/storeCalendarTraining',[trainingCalendar::class, 'store'] );

Route::get('/displayCalendarTraining',[trainingCalendar::class, 'display'] );

// contact us
Route::post('/contactUs',[contactUs::class, 'update'] );

// partner
Route::post('/partner',[partner::class, 'store'] );

Route::get('/displayPartner',[partner::class, 'display'] );


// bod



require __DIR__.'/auth.php';
