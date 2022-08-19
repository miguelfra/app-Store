<template>
  <div>
    <v-alert
      border="right"
      
      type="error"
      elevation="2"
      color="error"
      class="height"
    >   
    <p class="error text-h4">Not found </p>

     <router-link to="/" class="text-h5  blue--text d-flex justify-center">go back to the beginning</router-link>
     </v-alert>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.height{
    width: 100vw;
    height: 100vh;
   
}
.v-sheet.v-alert:not(.v-sheet--outlined){
 margin: 0;
}
</style>