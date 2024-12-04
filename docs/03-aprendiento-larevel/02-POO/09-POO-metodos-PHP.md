---
sidebar_position: 9
---

# Métodos en PHP

Los métodos son funciones que pertenecen a una clase. Cuando una función se declara dentro de una clase, automáticamente pasa a ser conocida como un método. Los métodos son fundamentales para la Programación Orientada a Objetos (POO), ya que permiten encapsular la lógica dentro de las clases y operar sobre los atributos de la misma. Este concepto está estrechamente relacionado con el principio de abstracción.

---

## 1. ¿Qué es un Método?

Un método es una función que se define dentro de una clase. Se utiliza para realizar operaciones específicas relacionadas con los datos y la lógica de la clase. Los métodos pueden ser llamados desde:

1. Dentro de la misma clase.
2. Desde una instancia de la clase.

Ejemplo Básico:

    ```php
    <?php
    class Calculadora {
        // Método que suma dos números
        public function sumar($a, $b) {
            return $a + $b;
        }
    }

    // Crear una instancia de la clase
    $calculadora = new Calculadora();

    // Llamar al método sumar desde la instancia
    echo $calculadora->sumar(5, 3); // 8
    ?>
    ```

## 2. Forma de Invocar Métodos

### 2.1 Desde Dentro de la Clase

Un método puede ser invocado desde otro método dentro de la misma clase utilizando la palabra clave $this.

    ```php
    <?php
    class Saludo {
        private $nombre;

        public function __construct($nombre) {
            $this->nombre = $nombre;
        }

        public function saludar() {
            return "Hola, " . $this->nombre;
        }

        public function despedirse() {
            return $this->saludar() . ". ¡Adiós!";
        }
    }

    $persona = new Saludo("María");
    echo $persona->despedirse(); // "Hola, María. ¡Adiós!"
    ?>
    ```
En este ejemplo, el método despedirse() llama al método saludar() desde dentro de la clase utilizando $this.

### 2.2 Desde una Instancia de la Clase

Cuando un objeto es creado a partir de una clase, puedes invocar métodos públicos usando la sintaxis:

```php
$instancia->nombreDelMetodo();
```

## 3. Modificadores de Acceso en Métodos

Los métodos pueden tener diferentes niveles de acceso, definidos por los modificadores public, private y protected.

- **public**: El método puede ser accedido desde cualquier parte del código.
- **private**: El método solo puede ser accedido desde dentro de la misma clase.
- **protected**: El método puede ser accedido desde la clase y sus clases derivadas (herencia).

Ejemplo con Diferentes Modificadores de Acceso:

    ```php
    <?php
    class Ejemplo {
        public function metodoPublico() {
            return "Método público";
        }

        private function metodoPrivado() {
            return "Método privado";
        }

        protected function metodoProtegido() {
            return "Método protegido";
        }

        public function probarMetodos() {
            // Acceso permitido dentro de la clase
            echo $this->metodoPublico();
            echo $this->metodoPrivado();
            echo $this->metodoProtegido();
        }
    }

    $ejemplo = new Ejemplo();
    echo $ejemplo->metodoPublico(); // "Método público"
    // echo $ejemplo->metodoPrivado(); // Error
    // echo $ejemplo->metodoProtegido(); // Error
    ```

## 4. Métodos Estáticos

Los métodos estáticos no requieren una instancia de la clase para ser llamados. En su lugar, se acceden directamente desde la clase utilizando el operador de resolución de ámbito (::).

Ejemplo de Método Estático:

    ```php
    <?php
    class Matematica {
        public static function sumar($a, $b) {
            return $a + $b;
        }
    }

    echo Matematica::sumar(10, 20); // 30
    ?>
    ```

## 5. Relación con la Abstracción

La abstracción en POO consiste en ocultar los detalles complejos de implementación y mostrar solo las funcionalidades esenciales de un objeto. Los métodos son una parte crucial de este principio, ya que permiten a los objetos interactuar sin exponer directamente sus atributos.

Ejemplo de Abstracción con Métodos:

    ```php
    <?php
    class Coche {
        private $encendido = false;

        public function arrancar() {
            $this->encendido = true;
            return "El coche ha arrancado.";
        }

        public function estado() {
            return $this->encendido ? "Encendido" : "Apagado";
        }
    }

    $coche = new Coche();
    echo $coche->estado();     // "Apagado"
    echo $coche->arrancar();   // "El coche ha arrancado."
    echo $coche->estado();     // "Encendido"
    ?>
    ```

En este ejemplo, los métodos arrancar() y estado() abstraen la lógica de cómo se gestiona el estado del coche internamente.




---

**Documentado por:** [JuanDavid_Dev](https://www.youtube.com/@juandavid_dev)  
**Rol:** Administrador  
**Fecha:** 04/12/2024  
**Última actualización:** 04/12/2024

---