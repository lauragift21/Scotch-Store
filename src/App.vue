<template>
  <div id="app">
    <div>
      <nav>
        <div class="container">
          <ul class="nav__left">

            <!-- Navigation links -->
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/admin">Admin</router-link></li>
            <li><router-link to="/cart">Cart</router-link></li>
          </ul>
        </div>
      </nav>
    </div>    
    <!-- Route Outlet -->
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

