---
sidebar_position: 12
---

# Herencia en PHP

La herencia es un principio fundamental de la Programación Orientada a Objetos (POO) que permite a una clase (llamada clase hija o subclase) heredar atributos y métodos de otra clase (llamada clase padre o superclase). Esto fomenta la reutilización de código y evita la duplicación de lógica al compartir funcionalidad común entre clases relacionadas.

---

## 1. ¿Qué Problema Resuelve la Herencia?

Cuando tienes dos o más clases que comparten comportamientos similares, pero tienen algunas características únicas, la herencia ayuda a reducir la duplicación de código.

Ejemplo del Problema:

    ```php
    <?php
    class Persona {
        public $nombre;
        public $edad;

        public function __construct($nombre, $edad) {
            $this->nombre = $nombre;
            $this->edad = $edad;
        }

        public function saludar() {
            return "Hola, mi nombre es $this->nombre.";
        }
    }

    class Empleado {
        public $nombre;
        public $edad;
        public $puesto;

        public function __construct($nombre, $edad, $puesto) {
            $this->nombre = $nombre;
            $this->edad = $edad;
            $this->puesto = $puesto;
        }

        public function saludar() {
            return "Hola, mi nombre es $this->nombre y soy un $this->puesto.";
        }
    }
    ?>
    ```

Problemas Identificados:

- **Duplicación de Código**: Tanto Persona como Empleado tienen los mismos atributos (nombre y edad) y un método saludar().

- **Mantenimiento Difícil**: Si hay cambios en la lógica compartida, debes modificarlos en múltiples lugares.

## 2. Solución: Herencia

Con la herencia, puedes crear una clase base (o superclase) que contenga la lógica común y luego extender esa clase para añadir características específicas en las clases derivadas.

Ejemplo Refactorizado:

    ```php
    <?php
    // Clase base (superclase)
    class Persona {
        public $nombre;
        public $edad;

        public function __construct($nombre, $edad) {
            $this->nombre = $nombre;
            $this->edad = $edad;
        }

        public function saludar() {
            return "Hola, mi nombre es $this->nombre.";
        }
    }

    // Clase hija (subclase)
    class Empleado extends Persona {
        public $puesto;

        public function __construct($nombre, $edad, $puesto) {
            parent::__construct($nombre, $edad); // Llama al constructor de la clase padre
            $this->puesto = $puesto;
        }

        public function saludar() {
            return parent::saludar() . " Soy un $this->puesto.";
        }
    }

    $persona = new Persona("Carlos", 30);
    $empleado = new Empleado("Laura", 25, "Diseñadora");

    echo $persona->saludar();  // Salida: Hola, mi nombre es Carlos.
    echo "<br>";
    echo $empleado->saludar(); // Salida: Hola, mi nombre es Laura. Soy un Diseñadora.
    ?>
    ```

## 3. Ventajas de la Herencia

- **Reutilización de Código:** Centraliza la lógica compartida en la clase base, evitando duplicación.
- **Facilidad de Mantenimiento:** Los cambios en la lógica común afectan a todas las subclases automáticamente.
- **Extensibilidad:** Las subclases pueden añadir o sobrescribir métodos para adaptar la funcionalidad.
- **Organización del Código:** Clarifica las relaciones entre clases y reduce redundancias.

## 4. Claves de la Herencia

1. **Extender una Clase:** Se usa la palabra clave extends para que una clase hija herede de una clase padre.

    ```php
    class ClaseHija extends ClasePadre {
        // Métodos y propiedades adicionales o sobrescritos
    }
    ```
2. **Uso de parent:** Para acceder a métodos o constructores de la clase padre, se utiliza parent::.
3. **Sobrescritura de Métodos:** Las clases hijas pueden redefinir métodos de la clase padre.
4. **Acceso a Atributos Protegidos:** Los atributos protected permiten que las clases hijas accedan a ellos directamente.

## 5. Reglas y Limitaciones

1. **Herencia Simple:** En PHP, una clase solo puede heredar de una única clase padre.
2. **Encapsulación:** Los atributos private de la clase padre no están accesibles en las clases hijas.
3. **Métodos Finales:** Los métodos marcados como final no pueden ser sobrescritos por subclases.
    ```php
    final public function metodoFinal() {
        // Lógica
    }
    ```
4. **Clases Finales:** Una clase marcada como final no puede ser extendida.
    ```php
    final class ClaseFinal {
        // Lógica
    }
    ```

## 6. Ejemplo Avanzado: Uso con Métodos Abstratos

Si una clase base define métodos abstractos, las subclases deben implementarlos. Esto fuerza a las subclases a definir su propia lógica para los métodos declarados.

    ```php
    <?php
    abstract class Animal {
        public $nombre;

        public function __construct($nombre) {
            $this->nombre = $nombre;
        }

        abstract public function hacerSonido(); // Método abstracto
    }

    class Perro extends Animal {
        public function hacerSonido() {
            return "Guau, guau";
        }
    }

    class Gato extends Animal {
        public function hacerSonido() {
            return "Miau, miau";
        }
    }

    $perro = new Perro("Max");
    $gato = new Gato("Luna");

    echo "$perro->nombre dice: " . $perro->hacerSonido() . "<br>";
    echo "$gato->nombre dice: " . $gato->hacerSonido();
    ?>
    ```
    
Resultado:

    ```bash
    Max dice: Guau, guau
    Luna dice: Miau, miau
    ```

---

**Documentado por:** [JuanDavid_Dev](https://www.youtube.com/@juandavid_dev)  
**Rol:** Administrador  
**Fecha:** 06/01/2025  
**Última actualización:** 06/01/2025

---
