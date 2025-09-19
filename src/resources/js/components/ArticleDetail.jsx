import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AddCommentForm from './AddCommentForm'

function ArticleDetail() {
    const { id } = useParams()
    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchArticle()
    }, [id])

    const fetchArticle = async () => {
        try {
            const response = await axios.get(`/api/articles/${id}`)
            setArticle(response.data)
        } catch (error) {
            console.error('Error fetching article:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <div className="text-center mt-5"><div className="spinner-border"></div></div>
    if (!article) return <div className="alert alert-danger text-center mt-5">Статья не найдена</div>

    return (
        <div className="container mt-4">
            <div className="card mb-4">
                <div className="card-body">
                    <h1 className="card-title">{article.title}</h1>
                    <p className="text-muted">
                        {new Date(article.created_at).toLocaleDateString()}
                    </p>
                    <div className="article-content">
                        {article.content.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>

            <AddCommentForm articleId={id} onCommentAdded={fetchArticle} />

            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0">Комментарии ({article.comments?.length || 0})</h5>
                </div>
                <div className="card-body">
                    {article.comments?.length > 0 ? (
                        <div className="list-group list-group-flush">
                            {article.comments.map(comment => (
                                <div key={comment.id} className="list-group-item">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <h6 className="mb-0">{comment.author_name}</h6>
                                        <small className="text-muted">
                                            {new Date(comment.created_at).toLocaleDateString()}
                                        </small>
                                    </div>
                                    <p className="mb-0">{comment.content}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-muted text-center">Пока нет комментариев. Будьте первым!</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ArticleDetail