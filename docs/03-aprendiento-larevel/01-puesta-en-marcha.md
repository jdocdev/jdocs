---
sidebar_position: 1
---

# Entorno de Desarrollo con Docker

Esta guía te ayudará a configurar un entorno de desarrollo para Laravel utilizando Docker.

---

**Requisitos:**

1. Habilitar Virtualización en la BIOS

    Asegúrate de que la virtualización (VT-x o AMD-V) esté habilitada en la BIOS/UEFI de tu equipo. Esto es necesario para que Docker funcione correctamente.

2. Nociones Básicas de Desarrollo

    Familiarízate con conceptos básicos como terminal, sistemas operativos, Docker y Laravel.

3. Recursos del Sistema

    - Procesador: Compatible con virtualización.
    - RAM: Se recomienda al menos 8 GB para entornos de desarrollo Dockerizados.
    - Almacenamiento: 20 GB o más libres para Docker y las imágenes necesarias.

4. Sistema Operativo Soportado

    Docker Desktop o Docker Engine está disponible para los siguientes sistemas operativos:

    - Linux: Ubuntu (recomendado), Fedora, CentOS, etc.
    - Windows: Windows 10 Pro, Enterprise o Education (Hyper-V necesario).
    - macOS: Versión 10.14 o superior.

5. Instalación de Herramientas

    Asegúrate de tener instaladas las siguientes herramientas antes de continuar:

    - Git: Para clonar repositorios o usar curl para la instalación de Laravel.
    - Editor de Texto: Como Visual Studio Code o cualquier IDE de tu elección.

---

## 1. Instalación de Docker

1. **Instalar Docker:**  
   Para instalar Docker dependera del sistema operativo que uses, y como esto tiende a cambiar recomiendo seguir la documentación oficial:  

   - [Guía de instalación oficial de Docker en Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
   - [Guía de instalación oficial de Docker en Windows](https://docs.docker.com/desktop/setup/install/windows-install/)
   - [Guía de instalación oficial de Docker en Mac OS](https://docs.docker.com/desktop/setup/install/mac-install/)

   En mi caso uso y recomiendo como sistema operativo para desarrollo de software [Ubuntu 24.04.1 LTS](https://ubuntu.com/download/desktop).

2. **Iniciar el servicio de Docker:**

    Desde una terminal ejecuta el siguiente comando:

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

    Desde una terminal ejecuta el siguiente comando para crear una nueva aplicación Laravel:
    ```bash
    curl -s https://laravel.build/myapp | bash
    ```

2. Iniciar el entorno con Sail:

    Desde la raíz del proyecto, levanta los servicios de Docker utilizando Sail:
    ```bash
    ./vendor/bin/sail up
    ```

3. Finalizar el entorno al dejar de trabajar en el proyecto usando Sail:

    Desde la raíz del proyecto, finaliza los servicios de Docker utilizando Sail:
    ```bash
    ./vendor/bin/sail down
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

## 4. Configurar un Alias para Sail

Configurar un alias para `./vendor/bin/sail` simplifica su uso en proyectos Laravel utilizando Docker. Este alias permite añadir subcomandos al final sin necesidad de escribir toda la ruta cada vez.

1. Abre el Archivo de Configuración del Shell:

    Este archivo es muy delicado, ten cuidado de no alterarlo.
    ```bash
    nano ~/.bashrc
    ```

2. Agrega el Alias:

    Al final del archivo, añade la siguiente línea:
    ```bash
    alias sail='./vendor/bin/sail'
    ```

3. Recarga la Configuración del Shell

    Guarda los cambios (en nano, presiona Ctrl + O, luego Enter, y después Ctrl + X) y recarga la configuración ejecutando el comando:
    ```bash
    source ~/.bashrc
    ```

## 4.1 Cómo Usar el Alias

Ahora puedes usar sail como si fuera el comando completo ./vendor/bin/sail, añadiendo cualquier subcomando al final. Por ejemplo:

- Levantar los contenedores:
    ```bash
    sail up 
    ```

- Detener los contenedores:
    ```bash
    sail down
    ```

- Ejecutar migraciones:
    ```bash
    sail artisan migrate
    ```

- Instalar dependencias con Composer:
    ```bash
    sail composer install
    ```

## 5. Comandos para Consultar y Gestionar el Entorno en Sail

Laravel Sail simplifica la interacción con los contenedores Docker. Aquí se describen algunos comandos esenciales para verificar las versiones de herramientas y gestionar paquetes dentro del contenedor.

### Verificar Versiones de Herramientas

Para verificar las versiones dentro del **contenedor de docker** para PHP, Node.js, npm y otros usa:

- PHP:
    ```bash
    sail php -v
    ```
    Esto muestra la versión de PHP instalada en el contenedor.

- Node.js:
    ```bash
    sail node -v
    ```
    Esto muestra la versión de Node.js instalada.

- npm:
    ```bash
    sail npm -v
    ```
    Esto muestra la versión de npm instalada.

- MySQL: Acceder al cliente MySQL para verificar la versión o interactuar con la base de datos:
    ```bash
    sail mysql
    ```
    Una vez dentro, puedes usar:

    SELECT VERSION();

### Instalación de Paquetes

Puedes instalar paquetes directamente dentro del **contenedor de docker**, por ejemplo para PHP, Node.js, y Composer.

- Instalación de Paquetes con Composer

    Ejemplo para instalar laravel/breeze:
    ```bash
    sail composer require laravel/breeze
    ```

- Instalación de Dependencias con npm

    Ejemplo para instalar un paquete como axios:
    ```bash
    sail npm install axios
    ```

### Nota Importante

- Prefijo Sail: Cualquier comando que normalmente ejecutarías de forma local (como php -v, node -v, etc.), debe tener el prefijo sail para ejecutarse dentro del contenedor.

- Acceso Directo al Contenedor: También puedes abrir una sesión dentro del contenedor con:

    ```bash
    sail shell
    ```

    Esto te permitirá usar los comandos directamente sin prefijo.

---

**Documentado por:** [JuanDavid_Dev](https://www.youtube.com/@juandavid_dev)  
**Rol:** Administrador  
**Fecha:** 28/11/2024  
**Última actualización:** 28/11/2024

---