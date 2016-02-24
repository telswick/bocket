<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/



/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    Route::get('/', function () {
    	return view('welcome');
	});

    // Adding routes for bookmarks
    Route::resource('bookmarks', 'BookmarksController', [
        'only' => ['index', 'show']
    ]);   

    // Adding routes for tags
    Route::resource('tags', 'TagsController', [
        'only' => ['index', 'show']
    ]);   



});


// Question: what is the difference between ['web'] and 'web' groups?

Route::group(['middleware' => 'web'], function () {
    Route::auth();

    Route::get('/home', 'HomeController@index');


    // Adding routes for bookmarks
    Route::resource('bookmarks', 'BookmarksController', [
        'except' => ['create', 'edit']
    ]);

    // Adding routes for tags
    Route::resource('tags', 'TagsController', [
        'except' => ['create', 'edit']
    ]);

});


Route::group(['middleware' => 'web'], function () {
    Route::auth();

    Route::get('/home', 'HomeController@index');
});
