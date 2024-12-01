---
sidebar_position: 3
---

# Clases en PHP: Definición y Reglas

En esta guía aprenderás cómo definir clases en PHP, sus reglas principales y buenas prácticas asociadas.

PHP es un lenguaje orientado a objetos, lo que significa que el uso de clases y objetos es fundamental para organizar y estructurar el código de manera eficiente.

---

## 1. ¿Qué es una Clase en PHP?

Una clase es una plantilla para crear objetos. Define las propiedades (atributos) y métodos (funciones) que los objetos basados en esta clase tendrán.

Ejemplo Básico de una Clase

    ```php
    <?php
    class MiClase {
        public $atributo = "Valor por defecto";

        public function mostrarAtributo() {
            return $this->atributo;
        }
    }

    $objeto = new MiClase();
    echo $objeto->mostrarAtributo(); // Salida: Valor por defecto
    ?>
    ```

## 2. Reglas para Definir Clases en PHP

### 2.1 Sintaxis Básica

Las clases se definen usando la palabra clave class, seguida del nombre de la clase:

    ```php
    class NombreClase {
        // Propiedades y métodos aquí
    }
    ```

### 2.2 Nombres de Clases

1. Case-Sensitive para el Uso:

    El nombre de la clase no distingue entre mayúsculas y minúsculas al ser instanciada:

    ```php
    class MiClase {}
    $obj = new miclase(); // Válido
    ```

2. Capitalización por Convención:

    Se recomienda que el nombre comience con mayúscula y siga el formato PascalCase:

    ```php
    class UsuarioActivo {}
    ```

3. Único Dentro de un Espacio de Nombres:

    No pueden existir dos clases con el mismo nombre dentro del mismo espacio de nombres:

    ```php
    class Usuario {} 
    class Usuario {} // Error: Nombre duplicado
    ```

## 3. Reglas y Buenas Prácticas

### 3.1 Encapsulamiento

Usa modificadores de acceso para proteger las propiedades y métodos:

    - public: Accesible desde cualquier parte.
    - protected: Accesible solo desde la clase y sus subclases.
    - private: Accesible solo dentro de la clase.

Ejemplo:

    ```php
    class Ejemplo {
        private $datoPrivado = "Solo interno";

        public function getDato() {
            return $this->datoPrivado;
        }
    }
    ```

### 3.2 Uso de Constructores

Define un método __construct para inicializar objetos:

    ```php
    class Usuario {
        public $nombre;

        public function __construct($nombre) {
            $this->nombre = $nombre;
        }
    }

    $obj = new Usuario("Juan");
    echo $obj->nombre; // Salida: Juan
    ```

### 3.3 Métodos y Propiedades Estáticas

Usa static para definir propiedades o métodos que pertenezcan a la clase en lugar de a instancias:

    ```php
    class Configuracion {
        public static $valorGlobal = "default";

        public static function mostrarValor() {
            return self::$valorGlobal;
        }
    }

    echo Configuracion::mostrarValor(); // Salida: default
    ```

### 3.4 Namespaces (Espacios de Nombres)

Agrupa clases para evitar conflictos de nombres:

    ```php
    namespace App\Modelos;

    class Usuario {}
    ```

Instancia con el espacio de nombres completo:

    ```php
    $usuario = new \App\Modelos\Usuario();
    ```

## 4. Reglas Adicionales

1. Una clase no puede heredar de múltiples clases (PHP no soporta herencia múltiple).
2. Los nombres de clases reservados como class, interface, trait, etc., no se pueden usar.
3. Se permite el uso de traits para compartir métodos entre clases.
4. Los métodos mágicos como __construct, __destruct, __toString, etc., tienen un comportamiento especial.

---

**Documentado por:** [JuanDavid_Dev](https://www.youtube.com/@juandavid_dev)  
**Rol:** Administrador  
**Fecha:** 01/12/2024  
**Última actualización:** 01/12/2024

---