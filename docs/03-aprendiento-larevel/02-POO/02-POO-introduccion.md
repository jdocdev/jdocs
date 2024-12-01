---
sidebar_position: 2
---

# Introducción a la Programación Orientada a Objetos en PHP

La Programación Orientada a Objetos (POO) es un paradigma de programación que organiza el código en torno a clases y objetos, en lugar de depender principalmente de funciones o procedimientos. Este enfoque promueve un desarrollo más ordenado, estructurado y reutilizable.

---

## ¿Qué son las Clases y los Objetos?

- **Clase**: Es como un plano o plantilla que define la estructura y el comportamiento de un conjunto de datos. Describe las propiedades (atributos) y las acciones (métodos) que tendrán los objetos basados en esa clase.

- **Objeto**: Es una instancia de una clase. Los objetos son los datos que realmente usamos en el programa y que siguen el diseño de la clase de la que provienen.

    Ejemplo básico:
    ```php
    <?php
    // Definición de una clase
    class Persona {
        public $nombre; // Atributo

        // Método
        public function saludar() {
            return "Hola, mi nombre es " . $this->nombre;
        }
    }

    // Creación de un objeto
    $persona1 = new Persona();
    $persona1->nombre = "Juan";
    echo $persona1->saludar(); // Salida: Hola, mi nombre es Juan
    ?>
    ```
## Ventajas de la POO

- **Orden y estructura**:
    El código está organizado en clases, lo que facilita encontrar y modificar funcionalidades específicas.

- **Separación lógica del código**:
    En lugar de crear funciones dispersas en varios archivos, puedes agruparlas dentro de clases relacionadas.

- **Reutilización de código**:
    A través de la herencia, puedes extender clases existentes para evitar duplicar código.

- **Facilidad de mantenimiento**:
    Es más sencillo localizar y corregir errores, o agregar nuevas funcionalidades sin afectar otras partes del sistema.

## Principios Fundamentales de la POO

La POO se basa en cuatro principios esenciales que permiten desarrollar sistemas robustos y flexibles:

- **Abstracción**:
    Consiste en enfocarse solo en los detalles relevantes de un objeto y ocultar los irrelevantes. Por ejemplo, una clase "Vehículo" abstrae detalles comunes como ruedas y motor, pero ignora diferencias entre autos y bicicletas.

- **Encapsulamiento**:
    Limita el acceso directo a los atributos de un objeto, proporcionando métodos para manipularlos. Esto protege los datos y asegura que solo sean modificados de manera controlada.

    ```php
    <?php
    class Producto {
        private $precio;

        public function setPrecio($precio) {
            if ($precio > 0) {
                $this->precio = $precio;
            }
        }

        public function getPrecio() {
            return $this->precio;
        }
    }

    $producto = new Producto();
    $producto->setPrecio(50);
    echo $producto->getPrecio(); // Salida: 50
    ?>
    ```
- **Herencia**:
    Permite que una clase (clase hija) herede propiedades y métodos de otra clase (clase padre), facilitando la reutilización de código.

    ```php
    <?php
    class Animal {
        public function hacerSonido() {
            return "Sonido genérico";
        }
    }

    class Perro extends Animal {
        public function hacerSonido() {
            return "Ladra";
        }
    }

    $perro = new Perro();
    echo $perro->hacerSonido(); // Salida: Ladra
    ?>
    ```

- **Polimorfismo**:
    Permite que diferentes clases hijas utilicen un mismo método de manera distinta, adaptándolo a su contexto. Esto hace que el código sea más flexible y dinámico.

    ```php
    <?php
    class Figura {
        public function calcularArea() {
            return 0;
        }
    }

    class Circulo extends Figura {
        private $radio;

        public function __construct($radio) {
            $this->radio = $radio;
        }

        public function calcularArea() {
            return pi() * pow($this->radio, 2);
        }
    }

    $circulo = new Circulo(5);
    echo $circulo->calcularArea(); // Salida: 78.539816339744
    ?>
    ```

La Programación Orientada a Objetos en PHP te ayuda a estructurar el código de manera que sea ordenado, escalable y reutilizable. Aprender y aplicar conceptos como abstracción, encapsulamiento, herencia y polimorfismo te permitirá escribir código más limpio y fácil de mantener.

---

**Documentado por:** [JuanDavid_Dev](https://www.youtube.com/@juandavid_dev)  
**Rol:** Administrador  
**Fecha:** 29/11/2024  
**Última actualización:** 29/11/2024

---