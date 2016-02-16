<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bookmark extends Model
{
    /**
     * Get the tags of the bookmark.
     */
    public function tags()
    {
        return $this->hasMany('App\Tag');
    }

    /**
     * Get the user that it (the bookmark) belongs to
     */
    public function subscribedBookmarks()
    {
        return $this->belongsTo('App\User');    // bookmark belongs to only one user?
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
