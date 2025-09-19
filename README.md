# Simple Blog with Comments

Простое и современное веб-приложение блога с системой комментариев, построенное на стеке Laravel + React.

<img width="1311" height="916" alt="Снимок экрана (137)" src="https://github.com/user-attachments/assets/ffb369d7-27f4-4ce4-9db6-efd8941f3a69" />


## Технологии

- **Backend:** Laravel 10 + PHP 8.2
- **Frontend:** React 18 + Bootstrap 5
- **Database:** MySQL 8.0
- **Web Server:** Nginx
- **Containerization:** Docker + Docker Compose

## Функционал

### Backend (REST API)
- ✅ CRUD операции для статей
- ✅ Добавление комментариев к статьям
- ✅ Миграции базы данных
- ✅ Сидеры с тестовыми данными
- ✅ Валидация данных

### Frontend
- ✅ Список статей с пагинацией
- ✅ Детальная страница статьи
- ✅ Система комментариев
- ✅ Адаптивный дизайн
- ✅ Современный UI/UX

## Установка и запуск

### Предварительные требования
- Docker и Docker Compose
- Git

### 1. Клонирование репозитория
```bash
git clone <your-repo-url>
cd blog-project
```

### 2. Настройка окружения
```bash
# Копируем файл окружения
cp .env.example .env

# Генерируем ключ приложения
docker-compose run --rm composer install
docker-compose run --rm artisan key:generate
```

### 3. Запуск контейнеров
```bash
# Запускаем все сервисы
docker-compose up -d

# Или с сборкой
docker-compose up --build -d
```

### 4. Настройка базы данных
```bash
# Выполняем миграции
docker-compose run --rm artisan migrate

# Заполняем тестовыми данными
docker-compose run --rm artisan db:seed
```

### 5. Сборка фронтенда
```bash
# Устанавливаем зависимости
docker-compose run --rm npm install

# Собираем проект
docker-compose run --rm npm run build

# Или для разработки
docker-compose run --rm npm run dev
```

## Доступ к приложению
- Основное приложение: http://localhost:8000
- PHPMyAdmin: http://localhost:8080
- MySQL: localhost:3316

## Использование API

### Получить все статьи
```bash
GET /api/articles
```

### Получить конкретную статью
```bash
GET /api/articles/{id}
```
