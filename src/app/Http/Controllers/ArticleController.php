<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Article;

class ArticleController extends Controller
{
    public function index()
    {
        return Article::with('comments')->get();
    }

    public function show($id)
    {
        return Article::with('comments')->findOrFail($id);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required'
        ]);
        
        return Article::create($validated);
    }   
}
