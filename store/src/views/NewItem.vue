<template>
  <div>
    <h1 class="d-flex justify-center mt-5 ">New Item</h1>
  <Form :modeNewItem="true" />
  </div>
</template>

<script>
import Form from "../components/Form.vue";
export default {
  components: {Form},
};
</script> 

<style>
</style>