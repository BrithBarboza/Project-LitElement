## 📍1. ¿Qué es Web Components?

Es un **estandar de JavaScript** que incluye varias especificaciones de la W3C encaminadas al desarrollo de elementos personalizados.
No es un framework, una librería o algo externo, sino que es parte del mismo Vanilla y que las webs lo entienden.

### Elementos personalizados

**custome elements** permiten extender el HTML, creando nuevos componentes que encapsulan un aspecto y una funcionalidad.

```sh
<mi-calendario></mi-calendario>
<menu-usuario></menu-usuario>
<mi-icono icono="home"></mi-icono>
```

#### Características

- Extensibles: Puedo extender el HTML. Además puedo crear unos componentes en base a otros.
- Encapsulados: La complejidad se queda dentro, desde fuera no se puede alterar accidentalmente.
- Reutilizables: Una vez definido un elemento personalizado, lo podemos usas tantas veces como queramos en ese proyecto o el cualquier otro proyecto u ofrecerlo para que otras personas lo usen y lo extiendan también.

### ¿Cómo se hace un custom element?

```sh
<script>
// defino la clase con la que implemento el componente
class ComponenteTonto extends HTMLElement {
    constructor() {
        super();
    }
}

// asocio la clase a un nombre de componente
customElements.define(‘componente-tonto’, ComponenteTonto);
</script>
```
