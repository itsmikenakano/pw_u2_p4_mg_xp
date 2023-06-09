console.log('Componente Vue')
console.log(Vue)

const app = Vue.createApp({
  // template:`
  // <h1>Hola Mundo</h1>
  // <p>Desde Vue.js</p>
  // <p>{{1+1}}</p>
  // `
  data(){
    return{
      nombre: 'Michael',
      apellido: 'Garcia',
      mensaje: 'Hola mundo 2 desde Vue.JS'
    }
  },

  methods: {
      cambiarNombre(){
        console.log('cambiar nombre')
        this.nombre = 'Xavier'
      },
      cambiarApellido(){
        console.log('cambiar apellido')
        this.apellido = 'Paez'
      }
  }
})

//se crea un identificador entre comillas con un numeral obligatorio y un nombre cualquiera
app.mount('#myApp')