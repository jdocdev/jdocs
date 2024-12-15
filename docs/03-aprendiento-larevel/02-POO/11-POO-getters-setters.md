---
sidebar_position: 11
---

# Getters y Setters en PHP

Los getters y setters son métodos utilizados para acceder y modificar los atributos de una clase respetando los principios de encapsulación en Programación Orientada a Objetos (POO). Estos métodos ofrecen una forma controlada y segura de interactuar con los atributos de un objeto, permitiendo aplicar validaciones, cálculos o transformaciones antes de acceder o modificar sus valores.

---

## 1. ¿Qué son Getters y Setters?

-   **Getter**: Un método que permite obtener el valor de un atributo privado o protegido.
    Se utiliza para encapsular el acceso directo al atributo.

-   **Setter**: Un método que permite establecer el valor de un atributo privado o protegido.
    Se utiliza para aplicar validaciones o restricciones antes de asignar el valor.

## 2. ¿Por Qué Usar Getters y Setters?

-   **Encapsulación**: Protegen los atributos sensibles, evitando accesos directos.
-   **Validaciones**: Permiten controlar los valores asignados o recuperados.
-   **Compatibilidad**: Facilitan la modificación del código sin afectar las instancias que ya usan los métodos.
-   **Mantenibilidad**: Centralizan el acceso y la modificación de atributos, simplificando el seguimiento y depuración.

## 3. Ejemplo Básico de Getters y Setters

    ```php
    <?php
    class Persona {
        private $nombre; // Atributo privado
        private $edad;

        // Getter para el nombre
        public function getNombre() {
            return $this->nombre;
        }

        // Setter para el nombre
        public function setNombre($nombre) {
            $this->nombre = $nombre;
        }

        // Getter para la edad
        public function getEdad() {
            return $this->edad;
        }

        // Setter para la edad con validación
        public function setEdad($edad) {
            if ($edad < 0) {
                throw new Exception("La edad no puede ser negativa.");
            }
            $this->edad = $edad;
        }
    }

    // Crear instancia y usar getters y setters
    $persona = new Persona();
    $persona->setNombre("Carlos"); // Asigna el nombre
    $persona->setEdad(25);         // Asigna la edad con validación

    echo "Nombre: " . $persona->getNombre() . "<br>";
    echo "Edad: " . $persona->getEdad();
    ?>
    ```

Resultado:

    ```
    Nombre: Carlos
    Edad: 25
    ```

## 4. Ventajas de Usar Getters y Setters

-   **Control de Acceso**: Evitan modificar atributos directamente desde fuera de la clase.
-   **Validaciones Integradas**: Aseguran que los valores asignados sean válidos.
-   **Flexibilidad**: Permiten cambiar la implementación interna sin afectar la interfaz pública.
-   **Código Limpio y Reutilizable**: Centralizan la lógica para acceder o modificar atributos.

## 5. Ejemplo Avanzado: Transformaciones en Getters y Setters

Los getters y setters también pueden incluir lógica adicional, como transformar datos antes de asignarlos o devolverlos.

    ```php
    <?php
    class Producto {
        private $precio;

        // Getter para el precio
        public function getPrecio() {
            // Devuelve el precio formateado como moneda
            return "$" . number_format($this->precio, 2);
        }

        // Setter para el precio con validación
        public function setPrecio($precio) {
            if ($precio < 0) {
                throw new Exception("El precio no puede ser negativo.");
            }
            $this->precio = $precio;
        }
    }

    $producto = new Producto();
    $producto->setPrecio(199.99); // Asignar precio

    echo "Precio: " . $producto->getPrecio();
    ?>
    ```

Resultado:

    ```
    Precio: $199.99
    ```

## 6. Getters y Setters con Tipado (PHP 7.4+)

Con la introducción de propiedades tipadas, puedes agregar más robustez y evitar errores de tipo en los atributos.

    ```php
    <?php
    class Usuario {
        private string $nombre;
        private int $edad;

        public function getNombre(): string {
            return $this->nombre;
        }

        public function setNombre(string $nombre): void {
            $this->nombre = $nombre;
        }

        public function getEdad(): int {
            return $this->edad;
        }

        public function setEdad(int $edad): void {
            if ($edad < 0) {
                throw new Exception("La edad no puede ser negativa.");
            }
            $this->edad = $edad;
        }
    }

    $usuario = new Usuario();
    $usuario->setNombre("María");
    $usuario->setEdad(30);

    echo "Nombre: " . $usuario->getNombre() . "<br>";
    echo "Edad: " . $usuario->getEdad();
    ?>
    ```

## 7. Alternativa: Propiedades Mágicas (**get y **set)

PHP permite usar los métodos mágicos **get y **set para gestionar atributos de forma dinámica. Sin embargo, su uso debe ser cuidadoso para evitar problemas de rendimiento o confusión.

Ejemplo:

    ```php
    <?php
    class Dinamico {
        private $datos = [];

        public function __get($nombre) {
            return $this->datos[$nombre] ?? null;
        }

        public function __set($nombre, $valor) {
            $this->datos[$nombre] = $valor;
        }
    }

    $obj = new Dinamico();
    $obj->nombre = "Luis"; // Asigna dinámicamente
    echo $obj->nombre;     // Obtiene dinámicamente
    ?>
    ```

**Nota**: Esta alternativa puede ser menos robusta que los métodos tradicionales.

---

**Documentado por:** [JuanDavid_Dev](https://www.youtube.com/@juandavid_dev)  
**Rol:** Administrador  
**Fecha:** 16/12/2024  
**Última actualización:** 16/12/2024

---
