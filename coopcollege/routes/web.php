<?php

use App\Http\Controllers\ProfileController;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),        //ADMIN LOGIN
        'canRegister' => Route::has('register'),  //ADMIN REGISTER
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
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

Route::get('/CaseStudies', function () {
    return Inertia::render('ViewersPage/CaseStudies');
});

Route::get('/Projects', function () {
    return Inertia::render('ViewersPage/Projects');
});






require __DIR__.'/auth.php';
