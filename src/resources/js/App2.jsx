import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ArticlesList from './components/ArticlesList'
import ArticleDetail from './components/ArticleDetail'
import AddArticleForm from './components/AddArticleForm'
import Navbar from './components/Navbar'

function App() {
    return (
        <div className="container mx-auto px-4">
            <Navbar />
            <Routes>
                <Route path="/" element={<ArticlesList />} />
                <Route path="/article/:id" element={<ArticleDetail />} />
                <Route path="/add-article" element={<AddArticleForm />} />
            </Routes>
        </div>
    )
}

export default App