---
sidebar_position: 8
---

# Constructor Property Promotion en PHP (PHP 8.0+)

PHP 8 introdujo una nueva característica que permite una forma más compacta y eficiente de declarar y asignar propiedades dentro del constructor de una clase, llamada Constructor Property Promotion. Esta nueva sintaxis reduce el código repetitivo y mejora la legibilidad, facilitando la creación de clases con múltiples atributos.

---

## 1. ¿Qué es Constructor Property Promotion?

Es una sintaxis que permite declarar propiedades de una clase directamente en el constructor y asignarles valores de forma automática. En lugar de declarar las propiedades por separado y luego asignarlas dentro del constructor, se hace todo en una sola línea.

Ejemplo:

    ```php
    <?php
    class Producto {
        // Constructor Property Promotion
        public function __construct(
            public string $nombre,
            public float $precio
        ) {}
    }

    $producto = new Producto("Laptop", 1500.00);
    echo $producto->nombre;  // "Laptop"
    ```

Este ejemplo es equivalente a la forma tradicional de declarar y asignar las propiedades, pero es mucho más compacto.

## 2. Ventajas de Constructor Property Promotion

1. **Código Más Compacto**: Reduce la cantidad de líneas necesarias para declarar y asignar valores a las propiedades.

2. **Mayor Legibilidad**: El código se vuelve más claro y fácil de entender, ya que la definición de las propiedades y su asignación se hacen en un solo paso.

3. **Menos Propenso a Errores**: Evita la duplicación de código, lo que reduce la posibilidad de errores en la asignación de valores.

## 3. Sintaxis y Uso

La sintaxis para usar Constructor Property Promotion es la siguiente:

    ```php
    public function __construct(
        public tipoDeDato $nombreAtributo,
        ...
    ) {}
    ```

### Modificadores de Acceso:

Puedes usar modificadores de acceso como public, private, protected en las propiedades promovidas. También puedes definir tipos de datos como en las propiedades tradicionales.

    ```php
    <?php
    class Usuario {
        public function __construct(
            private string $nombre,
            protected int $edad,
            public string $rol = "Usuario"
        ) {}

        public function getNombre(): string {
            return $this->nombre; // Acceso permitido dentro de la clase
        }
    }

    $usuario = new Usuario("Ana", 25, "Administrador");
    echo $usuario->rol; // Acceso público
    // echo $usuario->nombre; // Error: Propiedad privada
    ```

## 4. Limitaciones

1. **No Se Permiten Valores Predeterminados Directamente en las Propiedades**: Aunque puedes asignar valores predeterminados a los parámetros del constructor, no puedes asignar valores predeterminados directamente a las propiedades cuando las declaras.

    ```php
    class Producto {
        public function __construct(
            public string $nombre = "Desconocido", // Asignación de valor predeterminado aquí
            public float $precio = 0.0
        ) {}
    }
    ```

2. **No Puede Ser Usado para Lógica Compleja**: Si necesitas lógica adicional para inicializar los atributos, como validaciones o transformaciones, deberás hacerlo dentro del constructor tradicional.

## 5. Compatibilidad con Tipado

Puedes combinar Constructor Property Promotion con el tipado estricto de PHP para garantizar que las propiedades sean del tipo adecuado.

Ejemplo con Tipado:

    ```php
    <?php
    class Producto {
        public function __construct(
            public string $nombre,
            public float $precio
        ) {}
    }

    $producto = new Producto("Laptop", 1500.00);
    echo $producto->precio;  // 1500.00
    ```

## 6. Ejemplo Completo con Constructor Property Promotion

    ```php
    <?php
    class Empleado {
        public function __construct(
            public string $nombre,
            private float $salario,
            protected string $puesto = "Empleado"
        ) {}

        public function mostrarInformacion(): string {
            return "Nombre: $this->nombre, Puesto: $this->puesto, Salario: $this->salario";
        }
    }

    $empleado = new Empleado("Laura", 3500.50, "Gerente");
    echo $empleado->mostrarInformacion();
    ```

Resultado:

    ```
    Nombre: Laura, Puesto: Gerente, Salario: 3500.5
    ```

### Notas:

- Constructor Property Promotion es una característica poderosa que simplifica la creación de objetos en PHP, especialmente útil cuando las clases tienen muchos atributos.
- Aunque es más conciso, no reemplaza el uso de constructores tradicionales cuando se requiere lógica adicional o valores predeterminados más complejos.
- Es compatible con los modificadores de acceso y el tipado, lo que la hace muy robusta.

---

**Documentado por:** [JuanDavid_Dev](https://www.youtube.com/@juandavid_dev)  
**Rol:** Administrador  
**Fecha:** 04/12/2024  
**Última actualización:** 04/12/2024

---