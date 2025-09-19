<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    use HasFactory;
    use SoftDeletes;

     protected $fillable = [
        'article_id',
        'author_name',
        'content'
    ];

    public function article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }
}
