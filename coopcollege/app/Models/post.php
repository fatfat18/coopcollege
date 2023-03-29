<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class post extends Model
{
    public $timestamps = false;
    protected $guarded = [];
    use HasFactory;

    public function image(){
        return $this->hasMany(images::class, 'imagesId', 'ImagesId');
    }

    public function category(){
        return $this->hasOne(postCat::class, 'PostCatId', 'PostCatId');
    }


}
