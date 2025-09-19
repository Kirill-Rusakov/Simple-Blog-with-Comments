import React, { useState } from 'react'
import axios from 'axios'

function AddCommentForm({ articleId, onCommentAdded }) {
    const [formData, setFormData] = useState({
        author_name: '',
        content: ''
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            await axios.post(`/api/articles/${articleId}/comments`, formData)
            setFormData({ author_name: '', content: '' })
            onCommentAdded()
        } catch (error) {
            console.error('Error adding comment:', error)
            alert('Ошибка при добавлении комментария')
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="card mb-4">
            <div className="card-header">
                <h5 className="mb-0">Добавить комментарий</h5>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="author_name" className="form-label">
                                Ваше имя
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="author_name"
                                name="author_name"
                                value={formData.author_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">
                            Комментарий
                        </label>
                        <textarea
                            className="form-control"
                            id="content"
                            name="content"
                            rows="3"
                            value={formData.content}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2"></span>
                                Отправка...
                            </>
                        ) : (
                            'Отправить комментарий'
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCommentForm