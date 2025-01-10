---
sidebar_position: 14
---

# Métodos Estáticos en PHP

Los métodos estáticos son funciones especiales dentro de una clase que pueden ser llamadas sin necesidad de crear una instancia de la misma. Estas funciones pertenecen a la clase en sí y no a objetos específicos.

La comprensión de los métodos estáticos es fundamental para optimizar el código y crear utilidades que no requieran la instanciación de objetos.

---

## 1. Definición y Características

Los métodos estáticos se declaran utilizando la palabra clave `static` y pueden ser accedidos usando el operador de resolución de ámbito (::).

Ejemplo básico de método estático:

```php
<?php
class Matematicas {
    public static function sumar($a, $b) {
        return $a + $b;
    }
}

echo Matematicas::sumar(5, 3); // Acceso al método estático
?>
```

Resultado:
```
8
```

## 2. Propiedades Estáticas

Los métodos estáticos suelen trabajar con propiedades estáticas, que también pertenecen a la clase y no a instancias específicas.

```php
<?php
class Registro {
    private static $contador = 0;
    
    public static function incrementar() {
        self::$contador++;
        return self::$contador;
    }
    
    public static function obtenerTotal() {
        return self::$contador;
    }
}

echo Registro::incrementar(); // Salida: 1
echo Registro::incrementar(); // Salida: 2
echo Registro::obtenerTotal(); // Salida: 2
?>
```

## 3. Acceso y Uso

Los métodos estáticos pueden ser accedidos de tres formas principales:

```php
<?php
class Mensaje {
    public static function saludar() {
        return "Hola mundo";
    }
}

// 1. Usando el nombre de la clase
echo Mensaje::saludar();

// 2. Usando self dentro de la misma clase
class Ejemplo {
    public static function test() {
        return self::otroMetodo();
    }
    
    private static function otroMetodo() {
        return "Test completado";
    }
}

// 3. Usando static para late static binding
class Base {
    public static function obtenerNombre() {
        return static::class;
    }
}
?>
```

## 4. Late Static Binding

El late static binding permite que los métodos estáticos se comporten de manera polimórfica:

```php
<?php
class Padre {
    protected static $valor = "valor_padre";
    
    public static function obtenerValor() {
        return static::$valor;
    }
}

class Hijo extends Padre {
    protected static $valor = "valor_hijo";
}

echo Padre::obtenerValor(); // Salida: valor_padre
echo Hijo::obtenerValor();  // Salida: valor_hijo
?>
```

## 5. Tabla Comparativa: Métodos Estáticos vs Métodos de Instancia

| Característica | Método Estático | Método de Instancia |
|----------------|-----------------|---------------------|
| Acceso a $this | ✘ | ✔ |
| Requiere instancia | ✘ | ✔ |
| Acceso a props. estáticas | ✔ | ✔ |
| Uso de polimorfismo | Limitado | ✔ |
| Sintaxis de llamada | Clase::método() | $objeto->método() |

---

**Documentado por:** [JuanDavid_Dev](https://www.youtube.com/@juandavid_dev)  
**Rol:** Administrador  
**Fecha:** 10/01/2025  
**Última actualización:** 10/01/2025

---