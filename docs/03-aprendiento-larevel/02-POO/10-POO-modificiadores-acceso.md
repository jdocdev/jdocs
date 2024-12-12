---
sidebar_position: 9
---

# Modificadores de Acceso en PHP
Los modificadores de acceso controlan la visibilidad y el alcance de los atributos y métodos dentro de una clase. En PHP, se utilizan tres modificadores principales: public, protected y private. 

Comprender su funcionamiento es esencial para aplicar correctamente los principios de encapsulación y seguridad en la Programación Orientada a Objetos (POO).

---


## 1. public: Acceso Global

Los atributos y métodos declarados como public son accesibles desde cualquier parte del programa: dentro de la clase, desde las instancias de la clase y en las clases que heredan de ella.

Ideal para atributos y métodos que deben ser ampliamente accesibles.

Ejemplo de Uso de public:

    ```php
    <?php
    class EjemploPublic {
        public $atributo = "Valor Público";

        public function mostrarAtributo() {
            return $this->atributo;
        }
    }

    $objeto = new EjemploPublic();
    echo $objeto->atributo; // Acceso directo desde la instancia
    echo $objeto->mostrarAtributo(); // Acceso mediante un método
    ?>
    ```

Resultado:

    ```
    Valor Público
    Valor Público
    ```

## 2. protected: Acceso Restringido a la Clase y Herencia

Los atributos y métodos protected son accesibles solo dentro de la clase donde se definen y en las clases que heredan de esta. No pueden ser accedidos directamente desde una instancia de la clase.

Útil para atributos y métodos que deben compartirse en una jerarquía de clases pero no ser accesibles externamente.

Ejemplo de Uso de protected:

    ```php
    <?php
    class EjemploProtected {
        protected $atributo = "Valor Protegido";

        protected function mostrarAtributo() {
            return $this->atributo;
        }
    }

    class Herencia extends EjemploProtected {
        public function accederAtributo() {
            return $this->mostrarAtributo();
        }
    }

    $objeto = new Herencia();
    echo $objeto->accederAtributo(); // Acceso permitido mediante un método público
    // echo $objeto->atributo; // Error: acceso directo no permitido
    ?>
    ```

Resultado:

    ```
    Valor Protegido
    ```

## 3. private: Acceso Exclusivo a la Clase

Los atributos y métodos private son accesibles únicamente dentro de la clase donde se declaran. No pueden ser accedidos desde clases heredadas ni desde instancias de la clase.

Útil para datos sensibles o métodos que deben estar completamente encapsulados.

Ejemplo de Uso de private:

    ```php
    <?php
    class EjemploPrivate {
        private $atributo = "Valor Privado";

        private function mostrarAtributo() {
            return $this->atributo;
        }

        public function accederAtributo() {
            return $this->mostrarAtributo(); // Acceso permitido dentro de la clase
        }
    }

    $objeto = new EjemploPrivate();
    echo $objeto->accederAtributo(); // Acceso mediante un método público
    // echo $objeto->atributo; // Error: acceso directo no permitido
    // echo $objeto->mostrarAtributo(); // Error: acceso directo no permitido
    ?>
    ```

Resultado:

    ```
    Valor Privado
    ```

## 4. Comparación de Modificadores de Acceso

| Modificador | Dentro de la Clase | Desde Instancia | En Clases Hijas |
|-------------|---------------------|------------------|------------------|
| public      | ✔                   | ✔                | ✔                |
| protected   | ✔                   | ✘                | ✔                |
| private     | ✔                   | ✘                | ✘                |

## 5. Ejemplo Comparativo

Este ejemplo ilustra cómo funcionan los tres modificadores de acceso en una clase base y su clase derivada:


    ```php
    <?php
    class Base {
        public $publico = "Público";
        protected $protegido = "Protegido";
        private $privado = "Privado";

        public function mostrar() {
            echo $this->publico . "<br>";
            echo $this->protegido . "<br>";
            echo $this->privado . "<br>";
        }
    }

    class Derivada extends Base {
        public function mostrarHerencia() {
            echo $this->publico . "<br>";
            echo $this->protegido . "<br>";
            // echo $this->privado; // Error: no accesible
        }
    }

    $base = new Base();
    $base->mostrar();
    // $base->mostrarHerencia(); // Error: el método pertenece a la clase derivada

    $derivada = new Derivada();
    $derivada->mostrarHerencia();
    ?>
    ```
    
---

**Documentado por:** [JuanDavid_Dev](https://www.youtube.com/@juandavid_dev)  
**Rol:** Administrador  
**Fecha:** 12/12/2024  
**Última actualización:** 12/12/2024

---