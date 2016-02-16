<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    /**
     * Get the bookmark that it (the tag) belongs to
     */
    public function subscribedTags()
    {
        return $this->belongsTo('App\Bookmark');  // does a tag belong to one or many bookmarks?
    }
}
