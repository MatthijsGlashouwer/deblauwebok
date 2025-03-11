# Docker Setup for De Blauwe Bok

This document provides instructions on how to use the Docker configuration for the De Blauwe Bok application.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd deblauwebok
   ```

2. Configure your environment variables:
   ```
   cp .env.example .env
   ```
   
   Make sure to update the necessary variables in the `.env` file, particularly the database settings:
   ```
   DB_CONNECTION=mysql
   DB_HOST=database
   DB_PORT=3306
   DB_DATABASE=laravel
   DB_USERNAME=root
   DB_PASSWORD=secret
   ```

3. Build and start the Docker containers:
   ```
   docker-compose up -d
   ```

4. Generate an application key:
   ```
   docker-compose exec app php artisan key:generate
   ```

5. Run database migrations:
   ```
   docker-compose exec app php artisan migrate
   ```

6. The application should now be available at http://localhost:8000

## Container Structure

This Docker setup includes the following containers:

- **app**: Contains PHP 8.2, Nginx, and Node.js to run the Laravel application
- **database**: MySQL 8.0 database server

## Useful Commands

- Access the application container:
  ```
  docker-compose exec app bash
  ```

- Run Artisan commands:
  ```
  docker-compose exec app php artisan <command>
  ```

- View logs:
  ```
  docker-compose logs -f
  ```

- Stop containers:
  ```
  docker-compose down
  ```

## Customizing the Setup

### Using PostgreSQL Instead of MySQL

To use PostgreSQL instead of MySQL, modify the `docker-compose.yml` file by replacing the database service with:

```yaml
database:
  image: postgres:14
  container_name: deblauwebok-db
  restart: unless-stopped
  ports:
    - "5432:5432"
  environment:
    - POSTGRES_DB=${DB_DATABASE:-laravel}
    - POSTGRES_USER=${DB_USERNAME:-postgres}
    - POSTGRES_PASSWORD=${DB_PASSWORD:-secret}
  volumes:
    - deblauwebok-postgres-data:/var/lib/postgresql/data
  networks:
    - deblauwebok-network
```

And update your `.env` file accordingly:

```
DB_CONNECTION=pgsql
DB_HOST=database
DB_PORT=5432
DB_DATABASE=laravel
DB_USERNAME=postgres
DB_PASSWORD=secret
```

### Using SQLite

If you prefer to use SQLite (as indicated in your `.env.example`), modify your `.env` file:

```
DB_CONNECTION=sqlite
```

And remove the `database` service from the `docker-compose.yml` file along with any dependencies on it.

## Production Deployment

For production environments, make the following changes:

1. Update the `.env` file:
   ```
   APP_ENV=production
   APP_DEBUG=false
   ```

2. Build the production image:
   ```
   docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
   ```

3. Make sure to implement proper security measures for production deployments. 