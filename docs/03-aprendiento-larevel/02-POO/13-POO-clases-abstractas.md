---
sidebar_position: 13
---

# Clases Abstractas en PHP

Una clase abstracta en PHP es una clase que no puede ser instanciada directamente y está diseñada para ser extendida por otras clases. Estas clases suelen actuar como plantillas que definen una estructura base y pueden incluir métodos abstractos (sin implementación) que las clases hijas están obligadas a implementar.

---

## 1. ¿Qué es una Clase Abstracta?

Las clases abstractas son una herramienta clave en la Programación Orientada a Objetos (POO) que permite definir un conjunto de reglas o comportamientos que deben ser implementados en las clases hijas.

### Características Principales:

-   **No Instanciables:** No se puede crear un objeto directamente de una clase abstracta.
-   **Métodos Abstractos:** Puede contener métodos sin cuerpo, los cuales deben ser implementados en las clases hijas.
-   **Métodos Concretos:** También pueden tener métodos con implementación para reutilizar en las clases hijas.
-   **Estructura Base:** Actúan como una plantilla para garantizar que las subclases sigan una estructura definida.

## 2. Declaración de una Clase Abstracta

Para declarar una clase abstracta, se utiliza la palabra clave abstract.
Un método abstracto se define sin cuerpo y termina con ;.

    ```php
    <?php
    abstract class Figura {
        protected $color;

        // Constructor
        public function __construct($color) {
            $this->color = $color;
        }

        // Método concreto
        public function getColor() {
            return $this->color;
        }

        // Método abstracto (debe ser implementado por las subclases)
        abstract public function calcularArea();
    }
    ?>
    ```

## 3. Ejemplo de Uso

En el siguiente ejemplo, Figura es una clase abstracta que define un método abstracto calcularArea(). Las clases Circulo y Rectangulo extienden esta clase y proporcionan su propia implementación del método calcularArea().

    ```php
    <?php
    abstract class Figura {
        protected $color;

        public function __construct($color) {
            $this->color = $color;
        }

        public function getColor() {
            return $this->color;
        }

        abstract public function calcularArea();
    }

    class Circulo extends Figura {
        private $radio;

        public function __construct($color, $radio) {
            parent::__construct($color);
            $this->radio = $radio;
        }

        public function calcularArea() {
            return pi() * pow($this->radio, 2);
        }
    }

    class Rectangulo extends Figura {
        private $ancho;
        private $alto;

        public function __construct($color, $ancho, $alto) {
            parent::__construct($color);
            $this->ancho = $ancho;
            $this->alto = $alto;
        }

        public function calcularArea() {
            return $this->ancho * $this->alto;
        }
    }

    // Uso de las clases hijas
    $circulo = new Circulo("Rojo", 5);
    echo "Área del círculo de color " . $circulo->getColor() . ": " . $circulo->calcularArea() . "<br>";

    $rectangulo = new Rectangulo("Azul", 4, 6);
    echo "Área del rectángulo de color " . $rectangulo->getColor() . ": " . $rectangulo->calcularArea();
    ?>
    ```

Resultado:

    ```bash
    Área del círculo de color Rojo: 78.53981633974483
    Área del rectángulo de color Azul: 24
    ```

## 4. Ventajas de las Clases Abstractas

1. **Estructura Consistente:** Obligan a las clases hijas a implementar ciertos métodos, asegurando un diseño uniforme.
2. **Reutilización de Código:** Métodos concretos en la clase abstracta pueden ser reutilizados por las subclases.
3. **Polimorfismo:** Permiten trabajar con objetos de diferentes clases que comparten la misma clase base, facilitando el uso de interfaces comunes.

## 5. Diferencias entre Clases Abstractas e Interfaces

| Característica    | Clase Abstracta                          | Interfaz                                 |
| ----------------- | ---------------------------------------- | ---------------------------------------- |
| Métodos concretos | Sí                                       | No                                       |
| Herencia múltiple | No                                       | Sí (puede implementar varias interfaces) |
| Atributos         | Sí                                       | No (solo constantes)                     |
| Uso principal     | Definir estructura y comportamiento base | Definir un contrato (sin implementación) |

## 6. Reglas y Limitaciones

1. **Obligatoriedad de Implementación:** Todas las subclases deben implementar los métodos abstractos definidos en la clase base.
2. **Uso Exclusivo en Herencia:** Solo se pueden usar en clases que extienden la clase abstracta.
3. **Modificadores de Acceso:** Los métodos abstractos deben tener el mismo nivel de visibilidad en las subclases (public, protected, etc.).

## 7. Ejemplo Avanzado: Clase Abstracta y Polimorfismo

Con las clases abstractas, puedes trabajar con polimorfismo utilizando un mismo tipo para manejar diferentes objetos.

    ```php
    <?php
    abstract class Figura {
        abstract public function calcularArea();
    }

    class Triangulo extends Figura {
        private $base;
        private $altura;

        public function __construct($base, $altura) {
            $this->base = $base;
            $this->altura = $altura;
        }

        public function calcularArea() {
            return ($this->base * $this->altura) / 2;
        }
    }

    class Cuadrado extends Figura {
        private $lado;

        public function __construct($lado) {
            $this->lado = $lado;
        }

        public function calcularArea() {
            return pow($this->lado, 2);
        }
    }

    // Usar polimorfismo para manejar múltiples tipos de figuras
    function imprimirArea(Figura $figura) {
        echo "El área es: " . $figura->calcularArea() . "<br>";
    }

    $triangulo = new Triangulo(5, 10);
    $cuadrado = new Cuadrado(4);

    imprimirArea($triangulo); // Salida: El área es: 25
    imprimirArea($cuadrado);  // Salida: El área es: 16
    ?>
    ```

---

**Documentado por:** [JuanDavid_Dev](https://www.youtube.com/@juandavid_dev)  
**Rol:** Administrador  
**Fecha:** 06/01/2025  
**Última actualización:** 06/01/2025

---
