---
sidebar_position: 1
---

# Configurar Entorno PHP con Docker (opcional)

Esta guía te ayudará a configurar un entorno de desarrollo básico para PHP utilizando Docker Compose.

Dado que Laravel suele integrarse con Docker en proyectos profesionales, configurar un entorno de desarrollo para PHP con Docker te permitirá practicar Programación Orientada a Objetos (POO) en un entorno similar al que usarás en Laravel. Además, esta configuración te ayudará a evitar los problemas comunes asociados con los entornos locales, como conflictos de versiones entre múltiples tecnologías o configuraciones inconsistentes, garantizando un flujo de trabajo más limpio y eficiente.

---

## 1. Crear el Archivo docker-compose.yml

En la raíz de tu proyecto, crea un archivo llamado **docker-compose.yml** con el siguiente contenido:

    ```bash
    services:
        php:
            container_name: php-container
            build: .
            ports:
            - "5000:5000"
            volumes:
            - .:/app
            command: php -S 0.0.0.0:5000 -t /app

    ```

        - command: Define que el contenedor debe ejecutar el servidor PHP en la ruta /app, escuchando en todas las interfaces (0.0.0.0) y en el puerto 5000.

        - volumes: Mapea tu directorio local al contenedor para que el código esté disponible dentro del contenedor en /app.

        - ports: Mapea el puerto del contenedor (5000) al puerto de tu máquina host.

        - container_name: Puedes usar el nombre que quieras para tu contenedor, si usas uno diferente tenlo presente para el resto de la guía.

## 2. Crear el Dockerfile

Crea un archivo llamado **Dockerfile** (así tal cual) en la raíz del proyecto con el siguiente contenido para definir cómo se construirá tu imagen de PHP:

    ```bash
    FROM php:8.2-cli
    # Instalar extensiones adicionales (opcional)
    RUN docker-php-ext-install pdo pdo_mysql
    ```

## 3. Construir la Imagen

Abre una terminal en el directorio donde está el Dockerfile y ejecuta el siguiente comando para construir la imagen de Docker:

    ```bash
    docker compose build
    ```

Esto creará la imagen para el contenedor PHP basada en tu Dockerfile.

## 4. Iniciar el Contenedor

Para iniciar el contenedor, ejecuta:

    ```bash
    docker compose up
    ```

Esto levantará el contenedor y estará listo para usarse. Mantén esta terminal abierta mientras desees trabajar con este contenedor.

**Nota:** En caso de querer finalizar el servicio del contenedor, usa Ctrl + C en la terminal y luego utiliza: 

    ```bash
    docker compose down
    ```

## 5. Verificar que PHP Funciona

Abre una nueva terminal y selecciona el contenedor que acabas de crear:

        ```bash
        docker exec -it php-container bash
        ```

Verifica que PHP está funcionando, esto debería devolverte la información relacionada a la versión:

        ```bash
        php -v
        ```

Crea un archivo index.php en la raíz de tu proyecto con este contenido:

        ```bash
        <?php
        echo "¡Hola desde Docker!";
        ```

Ejecuta el archivo desde el contenedor:

    ```bash
        php index.php
    ```

Si ves el mensaje ¡Hola desde Docker!, ¡tu entorno PHP con Docker Compose está funcionando correctamente! 🚀





---

**Documentado por:** [JuanDavid_Dev](https://www.youtube.com/@juandavid_dev)  
**Rol:** Administrador  
**Fecha:** 29/11/2024  
**Última actualización:** 29/11/2024

---