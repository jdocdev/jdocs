---
sidebar_position: 5
---

# Atributos y Funciones en PHP: Abstracción en Clases

Los atributos (propiedades) y funciones (métodos) de una clase en PHP son los componentes fundamentales que permiten representar entidades del mundo real. Juntos forman parte del principio de abstracción, uno de los pilares de la programación orientada a objetos (POO).

---

## 1. ¿Qué es la Abstracción?

La abstracción consiste en ocultar los detalles complejos y mostrar únicamente las funcionalidades esenciales de un objeto. En términos de POO, esto se logra definiendo clases con atributos y métodos que describen el comportamiento relevante de la entidad que representan.

Por ejemplo:

    - Una clase Coche puede tener atributos como marca y modelo, y métodos como encender() o acelerar(), sin exponer los detalles internos de cómo funciona el motor.

## 2. Atributos de Clase

### 2.1 ¿Qué son los Atributos?

Los atributos son variables que se definen dentro de una clase y almacenan datos específicos del objeto.

    ```php
    class Coche {
        public $marca;
        public $modelo;
        private $velocidad;
    }
    ```

### 2.2 Modificadores de Acceso

Los modificadores de acceso controlan la visibilidad de los atributos y métodos de una clase.

    - **public**: El atributo es accesible desde cualquier parte del código.
    - **private**: Solo es accesible dentro de la misma clase.
    - **protected**: Accesible dentro de la clase y sus subclases.

    ```php
    class Coche {
        public $marca;           // Accesible desde fuera de la clase
        private $velocidad;      // Solo accesible desde dentro de la clase
        protected $motor;        // Accesible desde la clase y sus subclases

        public function setVelocidad($velocidad) {
            $this->velocidad = $velocidad; // Modifica atributo privado
        }

        public function getVelocidad() {
            return $this->velocidad; // Retorna atributo privado
        }
    }
    ```

## 3. Métodos de una Clase

Los métodos son funciones definidas dentro de una clase que representan acciones o comportamientos.

    ```php
    class Coche {
        public $marca;
        public $modelo;

        public function encender() {
            echo "El coche está encendido";
        }

        public function acelerar() {
            echo "El coche está acelerando";
        }
    }
    ```

### Relación con la Abstracción

Los métodos permiten interactuar con los atributos sin exponer directamente cómo se implementan. Esto es un ejemplo de abstracción: el usuario solo llama a acelerar(), sin preocuparse de cómo se realiza.

## 4. Ejemplo Práctico

    ```php
    <?php
    class Coche {
        public $marca;
        public $modelo;
        private $velocidad = 0;

        public function __construct($marca, $modelo) {
            $this->marca = $marca;
            $this->modelo = $modelo;
        }

        public function encender() {
            echo "El coche $this->marca $this->modelo está encendido.<br>";
        }

        public function acelerar($incremento) {
            $this->velocidad += $incremento;
            echo "El coche ahora va a $this->velocidad km/h.<br>";
        }

        public function getVelocidad() {
            return $this->velocidad;
        }
    }

    // Crear una instancia
    $coche = new Coche("Toyota", "Corolla");

    // Usar métodos
    $coche->encender();
    $coche->acelerar(20);
    echo "Velocidad actual: " . $coche->getVelocidad() . " km/h";
    ?>
    ```

Resultado:

    ```php
    El coche Toyota Corolla está encendido.
    El coche ahora va a 20 km/h.
    Velocidad actual: 20 km/h.
    ```

## 5. Relación con POO

### Abstracción en la Práctica

La abstracción se logra definiendo solo los atributos y métodos relevantes. El ejemplo anterior:

    Oculta detalles internos como la implementación del cálculo de velocidad (private $velocidad).
    Expone métodos accesibles como acelerar() y getVelocidad() para interactuar con el objeto.


---

**Documentado por:** [JuanDavid_Dev](https://www.youtube.com/@juandavid_dev)  
**Rol:** Administrador  
**Fecha:** 01/12/2024  
**Última actualización:** 01/12/2024

---