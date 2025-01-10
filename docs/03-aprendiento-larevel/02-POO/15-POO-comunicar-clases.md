---
sidebar_position: 15
---

# Comunicación entre Clases en PHP

La comunicación entre clases es un aspecto fundamental en la programación orientada a objetos. Permite que diferentes clases interactúen entre sí, ya sea en el mismo archivo o en archivos separados, facilitando la modularidad y reutilización del código.

---

## 1. Comunicación en el Mismo Archivo

La forma más directa de comunicación entre clases es cuando ambas se encuentran en el mismo archivo. Veamos un ejemplo práctico:

```php
<?php
class Producto {
    private $nombre;
    private $precio;

    public function __construct($nombre, $precio) {
        $this->nombre = $nombre;
        $this->precio = $precio;
    }

    public function getDetalles() {
        return [
            'nombre' => $this->nombre,
            'precio' => $this->precio
        ];
    }
}

class Carrito {
    private $productos = [];

    public function agregarProducto(Producto $producto) {
        $this->productos[] = $producto;
    }

    public function mostrarProductos() {
        foreach ($this->productos as $producto) {
            $detalles = $producto->getDetalles();
            echo "Producto: {$detalles['nombre']} - Precio: {$detalles['precio']}\n";
        }
    }
}

// Uso
$producto1 = new Producto("Laptop", 1200);
$producto2 = new Producto("Mouse", 25);

$carrito = new Carrito();
$carrito->agregarProducto($producto1);
$carrito->agregarProducto($producto2);
$carrito->mostrarProductos();
?>
```

## 2. Comunicación entre Archivos Separados

Cuando las clases están en archivos diferentes, necesitamos utilizar mecanismos de inclusión. Veamos la estructura y comunicación:

Archivo: Producto.php
```php
<?php
class Producto {
    private $nombre;
    private $precio;
    private $categoria;

    public function __construct($nombre, $precio, $categoria) {
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->categoria = $categoria;
    }

    public function getInformacion() {
        return [
            'nombre' => $this->nombre,
            'precio' => $this->precio,
            'categoria' => $this->categoria
        ];
    }
}
?>
```

Archivo: Inventario.php
```php
<?php
require_once 'Producto.php';

class Inventario {
    private $productos = [];
    private $nombreTienda;

    public function __construct($nombreTienda) {
        $this->nombreTienda = $nombreTienda;
    }

    public function registrarProducto($nombre, $precio, $categoria) {
        $producto = new Producto($nombre, $precio, $categoria);
        $this->productos[] = $producto;
        return "Producto registrado en {$this->nombreTienda}";
    }

    public function listarProductos() {
        echo "Inventario de {$this->nombreTienda}:\n";
        foreach ($this->productos as $producto) {
            $info = $producto->getInformacion();
            echo "- {$info['nombre']} ({$info['categoria']}): ${$info['precio']}\n";
        }
    }
}
?>
```

Archivo: index.php
```php
<?php
require_once 'Inventario.php';

// Uso del sistema
$tienda = new Inventario("Mi Tienda de Tecnología");
$tienda->registrarProducto("MacBook Pro", 1299.99, "Laptops");
$tienda->registrarProducto("AirPods", 199.99, "Accesorios");
$tienda->listarProductos();
?>
```

## 3. Métodos de Inclusión de Archivos

PHP proporciona varias formas de incluir archivos:

```php
// Incluye y evalúa el archivo
include 'archivo.php';

// Incluye y evalúa el archivo (genera error si no existe)
require 'archivo.php';

// Incluye y evalúa el archivo solo una vez
include_once 'archivo.php';

// Incluye y evalúa el archivo solo una vez (genera error si no existe)
require_once 'archivo.php';
```

## 4. Buenas Prácticas

- Utilizar `require_once` para archivos de clases para evitar múltiples inclusiones
- Mantener una estructura de directorios organizada para las clases
- Implementar autoloading para cargar clases automáticamente
- Usar namespaces para evitar conflictos de nombres
- Mantener una clase por archivo
- Nombrar los archivos igual que las clases que contienen

## 5. Ejemplo con Namespaces

```php
<?php
// Archivo: src/Tienda/Producto.php
namespace Tienda;

class Producto {
    // Implementación
}

// Archivo: src/Tienda/Inventario.php
namespace Tienda;

use Tienda\Producto;

class Inventario {
    // Implementación
}

// Uso
use Tienda\Inventario;
use Tienda\Producto;
?>
```

---

**Documentado por:** [JuanDavid_Dev](https://www.youtube.com/@juandavid_dev)  
**Rol:** Administrador  
**Fecha:** 10/01/2025  
**Última actualización:** 10/01/2025

---