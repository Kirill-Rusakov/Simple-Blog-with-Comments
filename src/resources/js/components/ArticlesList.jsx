import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ArticlesList() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        try {
            const response = await axios.get('/api/articles')
            setArticles(response.data)
        } catch (error) {
            console.error('Error fetching articles:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) return (
        <div className="container mt-5">
            <div className="text-center">
                <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}}>
                    <span className="visually-hidden">Загрузка...</span>
                </div>
                <p className="mt-3">Загрузка статей...</p>
            </div>
        </div>
    )

    return (
        <div className="container mt-4">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold text-dark mb-3">Все статьи</h1>
            </div>
            
            <div className="row">
                {articles.map((article, index) => (
                    <div key={article.id} className="col-lg-6 mb-4">
                        <div className="article-card card h-100">
                            <div className="card-body">
                                <h3 className="card-title">
                                    <Link to={`/article/${article.id}`}>
                                        {article.title}
                                    </Link>
                                </h3>
                                
                                <div className="article-date mb-3">
                                    <i className="far fa-calendar me-2"></i>
                                    {new Date(article.created_at).toLocaleDateString('ru-RU', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                                
                                <p className="article-excerpt">
                                    {article.content.substring(0, 150)}...
                                </p>
                            </div>
                            
                            <div className="card-footer bg-transparent d-flex justify-content-between align-items-center">
                                <Link 
                                    to={`/article/${article.id}`} 
                                    className="read-more-btn btn btn-primary"
                                >
                                    <i className="fas fa-arrow-right me-2"></i>
                                    Читать далее
                                </Link>
                                
                                <span className="comment-count">
                                    <i className="fas fa-comments me-1"></i>
                                    {article.comments?.length || 0}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {articles.length === 0 && !loading && (
                <div className="text-center mt-5">
                    <div className="alert alert-info">
                        <i className="fas fa-info-circle me-2"></i>
                        Пока нет статей. Будьте первым, кто добавит статью!
                    </div>
                </div>
            )}
        </div>
    )
}

export default ArticlesList