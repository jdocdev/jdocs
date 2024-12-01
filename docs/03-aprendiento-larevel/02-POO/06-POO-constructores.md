---
sidebar_position: 6
---

# Constructores en PHP

Los constructores son métodos especiales que se utilizan para inicializar objetos al momento de ser creados. Facilitan la asignación de valores iniciales a los atributos de una clase, simplificando la creación y configuración de objetos.

---

## 1. ¿Qué es un Constructor?

Un constructor es un método llamado automáticamente al crear una instancia de una clase con la palabra clave new. En PHP, el constructor se define con el método mágico __construct.

Ejemplo Básico:

    ```php
    <?php
    class Coche {
        public $marca;
        public $modelo;

        // Constructor
        public function __construct($marca, $modelo) {
            $this->marca = $marca;
            $this->modelo = $modelo;
        }
    }

    $coche = new Coche("Toyota", "Corolla");
    echo "Marca: $coche->marca, Modelo: $coche->modelo";
    ?>
    ```

Resultado:

    ```php
    Marca: Toyota, Modelo: Corolla
    ```

## 2. Ventajas de Usar Constructores

1. **Simplifican la Creación de Objetos:** No es necesario asignar atributos manualmente después de crear el objeto.

2. **Garantizan Valores Iniciales:** Aseguran que un objeto esté correctamente configurado desde su creación.

3. **Evitan Redundancia:** Evitan llamadas repetidas a métodos para configurar propiedades.

## 3. Características del Constructor en PHP

1. **Definición Automática:** El constructor se ejecuta automáticamente al instanciar un objeto.

2. **Parámetros:** Puede aceptar parámetros para inicializar los atributos.

3. **Sobrecarga No Permitida:** PHP no soporta la sobrecarga de constructores (solo puede haber un __construct por clase).

4. **Compatibilidad con Herencia:** Si una clase hija tiene su propio constructor, este reemplaza al de la clase padre. Sin embargo, se puede llamar al constructor de la clase padre con parent::__construct().

## 4. Ejemplo con Parámetros y Valores Predeterminados

    ```php
    <?php
    class Usuario {
        public $nombre;
        public $rol;

        public function __construct($nombre, $rol = "Usuario") {
            $this->nombre = $nombre;
            $this->rol = $rol;
        }
    }

    $admin = new Usuario("Ana López", "Administrador");
    $usuario = new Usuario("Carlos Gómez"); // Rol predeterminado

    echo "Admin: $admin->nombre, Rol: $admin->rol<br>";
    echo "Usuario: $usuario->nombre, Rol: $usuario->rol";
    ?>
    ```

Resultado:

    ```php
    Admin: Ana López, Rol: Administrador
    Usuario: Carlos Gómez, Rol: Usuario
    ```

## 5. Herencia y Constructores

Cuando una clase hereda de otra, puedes usar parent::__construct() para llamar al constructor de la clase padre.

    ```php
    <?php
    class Persona {
        public $nombre;

        public function __construct($nombre) {
            $this->nombre = $nombre;
        }
    }

    class Empleado extends Persona {
        public $puesto;

        public function __construct($nombre, $puesto) {
            parent::__construct($nombre); // Llama al constructor de Persona
            $this->puesto = $puesto;
        }
    }

    $empleado = new Empleado("Laura Gómez", "Diseñadora");
    echo "Empleado: $empleado->nombre, Puesto: $empleado->puesto";
    ?>
    ```

Resultado:

    ```php
    Empleado: Laura Gómez, Puesto: Diseñadora
    ```

## 6. Notas Importantes

1. **Uso Opcional:** Aunque el constructor es útil, no es obligatorio. Puedes definir y configurar objetos manualmente si lo prefieres.

2. **Flexibilidad con Tipado:** PHP permite usar tipado en los parámetros del constructor para mayor robustez:

    ```php
    class Producto {
        public string $nombre;
        public float $precio;

        public function __construct(string $nombre, float $precio) {
            $this->nombre = $nombre;
            $this->precio = $precio;
        }
    }

    ```


---

**Documentado por:** [JuanDavid_Dev](https://www.youtube.com/@juandavid_dev)  
**Rol:** Administrador  
**Fecha:** 01/12/2024  
**Última actualización:** 01/12/2024

---