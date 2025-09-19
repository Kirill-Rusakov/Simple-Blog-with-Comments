<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Comment;

class CommentController extends Controller
{
    public function store(Request $request, $articleId)
    {
        $validated = $request->validate([
            'author_name' => 'required|max:255',
            'content' => 'required'
        ]);
        
        $validated['article_id'] = $articleId;
        
        return Comment::create($validated);
    }
}
