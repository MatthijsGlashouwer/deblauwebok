<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Portfolio routes for De Blauwe Bok
Route::get('/', function () {
    return Inertia::render('dashboard');
})->name('home');

Route::get('/over-ons', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/evenementen', function () {
    return Inertia::render('events');
})->name('events');

Route::get('/evenementen/{id}', function ($id) {
    // In a real app, you would fetch the event from the database
    return Inertia::render('eventDetail', ['id' => $id]);
})->name('event.detail');

Route::get('/fotos', function () {
    return Inertia::render('gallery');
})->name('gallery');

Route::get('/nieuws', function () {
    // In a real app, you would fetch news from the database
    return Inertia::render('news');
})->name('news');

Route::get('/nieuws/{id}', function ($id) {
    // In a real app, you would fetch the news item from the database
    return Inertia::render('newsDetail', ['id' => $id]);
})->name('news.detail');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/lid-worden', function () {
    return Inertia::render('membership');
})->name('membership');

Route::get('/bestuur', function () {
    return Inertia::render('board');
})->name('board');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
