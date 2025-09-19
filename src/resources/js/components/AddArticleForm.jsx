import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddArticleForm() {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            await axios.post('/api/articles', formData)
            navigate('/')
        } catch (error) {
            console.error('Error creating article:', error)
            alert('Ошибка при создании статьи')
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
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title mb-0">Добавить новую статью</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">
                                        Заголовок
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="content" className="form-label">
                                        Содержание
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="content"
                                        name="content"
                                        rows="8"
                                        value={formData.content}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2"></span>
                                            Создание...
                                        </>
                                    ) : (
                                        'Создать статью'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddArticleForm