---
sidebar_position: 1
---

# Configuración del Entorno para Laravel con Docker

Esta guía te ayudará a configurar un entorno de desarrollo para Laravel utilizando Docker en un sistema Ubuntu.

---

## 1. Instalación de Docker

1. **Instalar Docker:**  
   Sigue la guía oficial para instalar Docker en Ubuntu:  
   [Guía de instalación de Docker en Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

2. **Iniciar el servicio de Docker:**
   ```bash
   sudo systemctl start docker
   ```

3. Validar el estado del servicio:
   ```bash
   sudo systemctl status docker
   ```

4. Añadir permisos al usuario (opcional):

    Si tienes problemas con permisos al usar Docker, añade tu usuario al grupo de Docker y reinicia el sistema:
    ```bash
    sudo usermod -aG docker $USER
    ```

## 2. Crear una Aplicación Laravel con Docker

1. Crear la aplicación en la ruta deseada:

    Ejecuta el siguiente comando para crear una nueva aplicación Laravel:
    ```bash
    curl -s https://laravel.build/devstagram | bash
    ```

2. Iniciar el entorno con Sail:
    Desde la raíz del proyecto, levanta los servicios de Docker utilizando Sail:
    ```bash
    ./vendor/bin/sail up
    ```

## 3. Migraciones de Base de Datos

Resulta que en versiones recientes es posible recibir un **error relacionado con SQL** al arrancar el proyecto por primera vez, esto es porque laravel en sus versiones recientes requiere de una migración de tablas para arrancar.

1. Ejecutar migraciones:

    En otra terminal, mientras la aplicación está en ejecución, ejecuta las migraciones:
    ```bash
    ./vendor/bin/sail artisan migrate
    ```

2. Revertir la última migración:

    Si necesitas deshacer la última migración:
    ```bash
    ./vendor/bin/sail artisan migrate:rollback
    ```

3. Revertir varias migraciones:

    Para revertir más de una migración hacia atrás, utiliza el parámetro --step(indica cuantos):
    ```bash
    ./vendor/bin/sail artisan migrate:rollback --step=1
    ```

4. Rehacer todas las migraciones:

    Para eliminar todas las migraciones y aplicarlas nuevamente:
    ```bash
    ./vendor/bin/sail artisan migrate:fresh
    ```






