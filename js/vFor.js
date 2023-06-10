const arreglo = [
    { nombre: 'Michael', apellido: 'Garcia' },
    { nombre: 'Cami', apellido: 'Bolañoz' },
    { nombre: 'Xavier', apellido: 'Paez' },
    { nombre: 'Pablo', apellido: 'Suntaxi' },
    { nombre: 'Mika', apellido: 'Gamez' },
    { nombre: 'Fer', apellido: 'Mosquera' },
    { nombre: 'Romi', apellido: 'Ramirez' },
    { nombre: 'Axel', apellido: 'Flores' },
    { nombre: 'Joss', apellido: 'Rodriguez' },
    { nombre: 'Aly', apellido: 'Pris' }
]

console.log(arreglo)

const app = Vue.createApp({
    data() {
        return {
            miarreglo: arreglo,
            nombre: 'Mika'
        }
    },

    methods: {
        agregarEstudiante(event) {
            console.log('Vamos a agregar')
            console.log(this.nombre)
            console.log(event)
            console.log(event.charCode)
            if (event.charCode == '13') {
                console.log('Presiono Enter')
                const nuevoEstudiante={
                    nombre:'Nuevo',
                    apellido:'Nuevo Apellido'
                }
                this.miarreglo.unshift(nuevoEstudiante)
            } else {
                console.log('No es enter')
            }
        },
        agregarEstudiante2(){
            console.log('Vamos a agregar')
            const nuevoEstudiante={
                nombre:this.nombre,
                apellido:'Nuevo Apellido'
            }
            this.miarreglo.unshift(nuevoEstudiante)
        }
    }

})

//se crea un identificador entre comillas con un numeral obligatorio y un nombre cualquiera
app.mount('#myApp2')


