<template> <!-- esto es como el HTML -->
<!-- todo lo ponemos dentro del div
     porque sino marca error el vue -->
    <div class="test">
        <input type="text" v-model="user.firstName">
        <!-- usamos la variable que creamos abajo -->
        <div v-html="myHtml"></div><!-- usamos v-html para que lo interprete --> 
        <!-- podemos usar v-text para que ponga solo texto
            como por ejemplo v-text="title" y mostrara lo 
            que pusimos en title -->

        <!-- usar v-if para condicionales -->

        <div v-if="showName">
            <p>{{user.firstName}}</p>
        </div>
        <div v-else>
            <p>no puedo mostrar nombre</p>
        </div>

        <hr>
            <div>
                {{ tasks[0].title }}
            </div>
            <ul>
            <li v-for="tasks in tasks">
                {{tasks.title}}
            </li>
            </ul>

            <button type="button" v-on:click="saludar(user.firstName)">
                click me
            </button>
            
        <hr>
            <!-- pondremos un text area y lo usaremos
            para que al presionar un boton haga una cosa,
            el .enter es para cuando el usuario presione enter -->

            <input type="text" v-on:keyup="typing">

        <hr>

            <input type="text" v-on:keyup.enter="typedEnter">

        <hr>
        
            {{fullName}}

        <hr>
            <!-- mostramos un mensaje desde fuera -->
            {{msg}}



    </div>
</template>

<script> //se escribe la logica de la interfaz
    export default {
        data() { //se usa para declarar datos
            return {
                title: "Hola Vuejs",
                user: {
                    firstName: "luis",
                    lastName: "trujillo"
                },
                myHtml: "<h3>es un html</h3>",
                showName: true,
                tasks: [
                    {title: "eat"},
                    {title: "dinner"},
                    {title: "lunch"}
                ]
            }
        },

        methods: { //metodos o funciones
            saludar(name){
                alert("hola! " + name)
            },

            /*sera la funcion que se ejecutara cuando el
            usuario escriba algo*/
            typing(e){
                //en consola nos muestra muchas propiedades
                console.log(e.target.value); //le decimos que nos muestre ese valor

                //En vez de usar este if usamos el .enter arriba
                //en el keyup.enter
                /*
                if (e.target.keyCode ===13){
                    //accion
                }
                */
            },
            typedEnter(a){
                console.log('Dio un enter');
            }
            
            
        },

        //ya esta fuera del metodo, y como esta dentro del export,
        //podemos decirle this y usa todo lo que tenemos.
        computed: {
                fullName(){
                    return this.user.firstName + " " + this.user.lastName;
                }
        },

        //props es para aceptar datos desde fuera
        props: {
            msg: {
                type: String,
                default: "Mensaje por defecto" 
                //si no indicamos nada en msn en App.vue 
                //se muestra este mensaje
            }
        }
    }
</script>

<style>

    .test {
        background-color: blanchedalmond;
    }

</style>