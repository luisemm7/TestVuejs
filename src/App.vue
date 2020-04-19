<template>
  <div id="app">
    
    <h1>Hola</h1>

    <nav>
      <ul>
        <li>

          <router-link to="/test">
            Test
          </router-link>

         <!-- lo de arriba es como un href pero de vue
              <a href="#">Test</a> --> 

        </li>

        <li>

          <router-link to="/">
            Users
          </router-link>

          <!-- <a href="#">User</a> -->

        </li>
      </ul>
    </nav>

     
    <hr>
    <router-view></router-view>
    
  </div>
</template>

<script>

//importamos los archivos para que los muestre
import test from './components/test.vue';
import user from "./components/user";

export default {
  name: 'App',
  components: {
    test,
    user
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
