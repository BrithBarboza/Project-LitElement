## 📍1. ¿Qué es LitElement?

Es una clase (de programación orientada a objetos) base para la creación de Custom Elements.
Creado por el equipo de Polymer (Google).

### ¿Por qué necesito LitElement?

Realmente no lo necesitas. Pero sí tendremos varios beneficios:

- Data-binding: Permite tener varios componentes y pasarle alguna propiedad del componente hijo al padre.
- Sistema de templates reactivos: Cuando las variables de un componente se actualizan, de forma automática se puede actualizar el componente.
- Constructable stylesheets: Puedo compartir el código scc de uno a otro componente manteniendo un buen performance y sin que este se quede colgado.
- Sincronización entre propiedades y atributos de la etiqueta del componente.
- Solo ocupa un 6,6 Kb.

### ¿Dónde puedo usarlo?

**Es Javascript** lo puedes utilizar donde lo necesites, por su característica de Web Component, como por ejemplo: Angular, React, VUE, Polymer, Ionic, Esbelt, etc.

### Rendimiento

Lit-HTML ofrece rendimiento mayor que cualquiera de los frameworks más populares.

*LitElement usa Lit-HTML como motor de plantillas.*

## 📍2. ¿Qué diferencia hay entre LitElement y Polymer?

LitElement es la evolución de Polymer. Se han centrado en lo que se puede desarrollar con JS.
Puedo desarrollar componentes en LitElement y luego reutilizarlo en mis otros proyectos como un componente más.


## 📍3. Términos

- ShadowRoot: Es la raíz del pequeño componente que creamos en el archivo. Está encapsulado en el shadowDOM.
- 