<template>

    <div class="users">

        <h1>User component</h1>

        <ul>
            <!-- cuando hacemos el v-for le damos la variable user
                es una variable que guardara las posiciones que 
                recibiremos del arreglo users que es donde tenemos
                los usuarios agregados, por eso el deleteUser
                recibe user para saber la posicion -->
            <li v-for="user in users">

                {{user.name}} - {{user.email}} 
                <button v-on:click="deleteUser(user)"> X </button>

            </li>
        </ul>

        <!-- es muy importante la parte de v-on:submit -->
        <form v-on:submit.prevent="addUser">
            <input type="text" v-model="newUser.name" placeholder="Name">
            <input type="email" v-model="newUser.email" placeholder="Email">
            <button type="submit">
                Add
            </button>
        </form>

    </div>
  
</template>

<script>

    export default {

        data(){
            return {
                users: [ //creamos un arreglo con 3 usuariosss
                    /*
                    {
                        name: "isai", //usuario1
                        email: "isak@gmail.com",
                        contacted: false
                    },
                    {
                        name: "elmo",
                        email: "elmo@gmail.com",
                        contacted: false
                    },
                    {
                        name: "kakaroto",
                        email: "kaka@gmail.com",
                        contacted: true
                    }
                    */ 
                ],
                newUser: {} //arreglo en blanco para agregar un usuario
            }
        },
        methods: {
            /* cuando ejecutamos el formulario
               recibimos un evento e, addUser(e){ e.preventDefault();}
               lo usariamos para evitar que se recargue la pagina,
               pero con vue.js usamos el prevent arriba en el form   */
            addUser(){
                //con this.newUser podemos ver que contiene ese arreglo
                //console.log("agregando usuario", this.newUser);
                this.users.push(this.newUser); //con eso se agrega el usuario
                this.newUser = {}; //con esto limpiamos los campos, cada que se agrega un usuario
            },
            deleteUser(user) {
                //alert("eliminando")
                /* splice es para agregar o quitar un elemento */
                this.users.splice(this.users.indexOf(user), 1);

            }
        },

        created() {
            //console.log("componente creado");
            /*para obtener datos del http por eso usamos get
              y ponemos la direccion de donde obtendremos los datos*/
            this.$http.get('https://jsonplaceholder.typicode.com/users')
                .then(res => this.users = res.body);
                //.then(res => console.log(res));
        }

    }

</script>

<style lang="css">

    .users {
        background:darkgrey;
        padding: 10px;
    }

</style>