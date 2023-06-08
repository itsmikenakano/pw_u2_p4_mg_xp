console.log('Componente Vue')
console.log(Vue)

const app = Vue.createApp({
  template:`
  <h1>Hola Mundo<h1>
  <p>Desde Vue.js<p>
  `
})

//se crea un identificador entre comillas con un numeral obligatorio y un nombre cualquiera
app.mount('#myApp')