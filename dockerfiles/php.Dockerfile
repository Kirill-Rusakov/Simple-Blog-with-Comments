FROM php:8.2-fpm-alpine

# Установка системных зависимостей
RUN apk update && apk add --no-cache \
    curl \
    libzip-dev \
    zip \
    unzip \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    oniguruma-dev \
    libxml2-dev \
    nodejs \          
    npm

# Установка PHP расширений
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath zip

# Установка Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Настройка прав доступа (пользователь www-data уже существует в образе)
RUN chown -R www-data:www-data /var/www

# Рабочая директория
WORKDIR /var/www/laravel

# Открытие порта
EXPOSE 9000

CMD ["php-fpm"]