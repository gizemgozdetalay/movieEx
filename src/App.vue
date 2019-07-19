<template>
  <v-app>
    <v-toolbar dark color="rgba(50,98,162,0.54)" app>
      <v-toolbar-title class="headline text-uppercase">
        <span>VUE</span>
        <span class="font-weight-light">TICKET APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/home" flat>Home</v-btn>
        <v-btn to="/login" flat>Login</v-btn>
        <v-btn to="/register" flat>Register</v-btn>
        <v-btn to="/about" flat>About</v-btn>
        <v-btn to="/moviesearch" flat>Search</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
  background-image: url("./assets/blue-paper2.jpg");
}
</style>
