---
sidebar_position: 7
---

# Tipado de Datos en PHP

El tipado en PHP permite especificar el tipo de datos que se espera en variables, atributos, parámetros y valores de retorno. Esto ayuda a garantizar la consistencia en la estructura y el comportamiento del código, minimizando errores y mejorando la legibilidad y mantenimiento del mismo.

---

## 1. ¿Qué es el Tipado en PHP?

El tipado en PHP permite declarar explícitamente qué tipo de datos se espera en una variable o método. Esto garantiza que:

- El tipo de dato no cambie durante la ejecución del programa.
- Los desarrolladores reciban errores claros si se proporciona un tipo de dato incorrecto.
- Se promueva la escritura de código más robusto y seguro.

Ejemplo Básico de Tipado:

    ```php
    class Persona {
        public string $nombre; // Solo acepta cadenas
        public int $edad;      // Solo acepta enteros

        public function __construct(string $nombre, int $edad) {
            $this->nombre = $nombre;
            $this->edad = $edad;
        }
    }

    $persona = new Persona("Juan", 30); // Correcto
    // $persona = new Persona("Juan", "treinta"); // Genera un error
    ```

## 2. Tipos de Datos Soportados

PHP soporta los siguientes tipos de datos en el tipado:

- **Primitivos**: int, float, string, bool.
- **Compuestos**: array, object, callable, iterable.
- **Especiales**: mixed, void, null.
- **Clases/Interfaces**: Se puede especificar el nombre de una clase o interfaz como tipo.
- **Union Types**: Permiten aceptar múltiples tipos (disponible desde PHP 8).

Ejemplo de Union Types:

    ```php
    class Producto {
        public int|string $codigo; // Puede ser un entero o una cadena

        public function __construct(int|string $codigo) {
            $this->codigo = $codigo;
        }
    }

    $producto1 = new Producto(123);
    $producto2 = new Producto("ABC123");
    ```

## 3. Tipado en Métodos

### 3.1 Tipado de Parámetros

Puedes especificar el tipo de dato esperado en los parámetros de un método.

    ```php
    class Calculadora {
        public function sumar(int $a, int $b): int {
            return $a + $b;
        }
    }

    $calc = new Calculadora();
    echo $calc->sumar(5, 10); // Correcto
    // echo $calc->sumar(5, "10"); // Genera un error
    ```

### 3.2 Tipado de Retorno

Además del tipado en los parámetros, puedes definir el tipo de dato que un método debe devolver.

    ```php
    class Usuario {
        private string $nombre;

        public function setNombre(string $nombre): void {
            $this->nombre = $nombre;
        }

        public function getNombre(): string {
            return $this->nombre;
        }
    }

    $usuario = new Usuario();
    $usuario->setNombre("Ana");
    echo $usuario->getNombre(); // Retorna un string
    ```

## 4. Tipado Estricto vs Laxo

PHP permite trabajar en modo estricto o laxo en cuanto al tipado:

- **Modo Laxo (Predeterminado)**: PHP intentará convertir los valores automáticamente si no coinciden con el tipo esperado.
- **Modo Estricto**: Se debe usar el tipo exacto; de lo contrario, se genera un error.

### Activar el Modo Estricto

Para habilitar el modo estricto, agrega la siguiente línea al inicio del archivo PHP:

    ```php
    declare(strict_types=1);

    function sumar(int $a, int $b): int {
        return $a + $b;
    }

    echo sumar(5, "10"); // En modo estricto, genera un error
    ```

## 5. Beneficios del Tipado en POO

- **Prevención de Errores**: Reduce errores comunes relacionados con tipos de datos incorrectos.
- **Legibilidad**: Hace que el código sea más comprensible para otros desarrolladores.
- **Robustez**: Garantiza que los métodos y atributos sean utilizados correctamente.
- **Compatibilidad**: Facilita la integración con herramientas modernas de análisis estático y pruebas automatizadas.

## 6. Casos Avanzados

### 6.1 Tipado con Clases/Interfaces

Se puede especificar una clase o interfaz como tipo en los parámetros o valores de retorno.

    ```php
    interface Autenticable {
        public function autenticar(): bool;
    }

    class Usuario implements Autenticable {
        public function autenticar(): bool {
            return true;
        }
    }

    function procesarAutenticacion(Autenticable $entidad): bool {
        return $entidad->autenticar();
    }

    $usuario = new Usuario();
    echo procesarAutenticacion($usuario); // Retorna true
    ```

### 6.2 Uso de mixed

El tipo mixed (PHP 8.0+) permite aceptar cualquier tipo de dato.

    ```php
    function procesar(mixed $dato): void {
        var_dump($dato);
    }

    procesar("cadena");
    procesar(123);
    procesar([1, 2, 3]);
    ```

## 7. Consideraciones y Buenas Prácticas

- **Utiliza Tipado Siempre que Sea Posible**: Mejora la calidad y consistencia del código.
- **Combina con Modo Estricto**: Activa strict_types en proyectos críticos para evitar conversiones implícitas.
- **Usa Tipado en Atributos**: Desde PHP 7.4, puedes declarar tipos en atributos para mayor seguridad.
- **Valida Datos en Métodos**: Si el dato es opcional o flexible, valida explícitamente dentro del método.


---

**Documentado por:** [JuanDavid_Dev](https://www.youtube.com/@juandavid_dev)  
**Rol:** Administrador  
**Fecha:** 01/12/2024  
**Última actualización:** 01/12/2024

---