// Tutorial 1 - simple-action-creator.js

/*
  CREADOR DE ACCIONES
*/

// Comenzaremos en la introduccion hablando un poco acerca de las acciones, pero que son
// exactamente esos "CREADORES DE ACCIONES" y como ellos son enlazados a las ACCIONES!.

// It's actually so simple that a few lines of code can explain it all!

// Los CREADORES DE ACCIONES son solo funciones....
var actionCreator = function() {
    // ... que crean una accion(Yeah, El nombre CREADOR DE ACCIONES es demasiado obvio ahora) y la retornan!.
    console.log('\n\n%cLos %cCREADORES DE ACCIONES %cson solo %cfunciones%c...que %ccrean una accion%c (yeah!, el nombre %cCREADOR DE ACCION%c es demasiado obvio ahora) y la retornan!. \n\n',
    'color: silver;', 'color: tomato; font-weight: bold;', 'color: silver;',
    'color: teal; font-weight: bold;', 'color: silver;', 'color: teal; font-weight: bold;', 'color:silver;',
    'color: teal; font-weight:bold;', 'color: silver;');

    return {
        type: 'UNA_ACCION'
    }
}

// Asi que esto es todo? , ¡¡¡ SI !!!

// Como sea , una cosa a notar es el formato de la accion.
// Esto es una especie de convención en FLUX que la acción es un objeto que
// contiene una propiedad "type". Este tipo permite un manejo adicional de la
// acción. Por supuesto , La acción también puede contener otras propiedades
// para pasar los datos que desee.

// También veremos más adelante que los CREADORES DE ACCIONES  pueden realmente devolver algo que
// no sea una acción, igual que una funcion. Esto sera extremadamente de mucha utilidad para
// manejo de acciones asyncronas ( mas de esto en: dispatch-async-action.js )

// Podemos llamar a esta CREADOR de ACCION y obtener una ACCION como se esperaba:
console.log(actionCreator());

    // SALIDA: { type: 'UNA_ACCION' }
    //         Object {type: "UNA_ACCION"}

// OK, Bueno, esto funciona, pero no va a ninguna parte ...
// Lo que necesitamos es que esta acción sea enviada a alguna parte para que

// Lo que necesitamos es que esta acción se envíe a algún lugar para que cualquier
// persona interesada pueda saber que algo sucedió y podría actuar en consecuencia a lo sucedido.
// Llamamos a este proceso "Despachando una accion".

// Para despachar una accion, necesitamos... una funcion despachadora("Capitan Obvio").
// Y para que cualquier persona interesada sepa que una acción ocurrió, necesitamos
// un mecanismo para registrar "MANEJADORES". Estos "MANEJADORES" de ACCIONES en
// la aplicación de flujo tradicional se llaman tiendas 'STORES' y veremos en la siguiente
// sección cómo se llaman en Redux.

// Hasta ahora aquí está el flujo de nuestra aplicación:
//    ActionCreator -> Action

// Conoce mas acerta de ACCIONES y CREADORES DE ACCIONES aqui:
//      http://rackt.org/redux/docs/recipes/ReducingBoilerplate.html

// Dirigete al proximo tutorial :
//      02_about-state-and-meet-redux.js
