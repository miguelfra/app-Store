<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link class="white--text text-h3" to="/">Store</router-link>
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-end">
        <router-link class="white--text text-h5" to="/newItem"
          >New Item</router-link
        >
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;
}
</style>
