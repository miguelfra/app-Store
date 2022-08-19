<template>
  <div>
    <h1 class="d-flex justify-center">Edit Item</h1>
    <Form :modeNewItem="false" :itemId="item" />
  </div>
</template>

<script>
import Form from "../components/Form.vue";
import axios from 'axios'
export default {
    data: () => ({
        item: {}
    }),
  components: { Form },
  methods: {
    async GetItem(){
        const {id} = this.$route.params;
         const res = await  axios.get(`http://localhost:3000/api/store/${id}`);
         this.item = res.data;
    }
  },

  mounted(){
    this.GetItem()
  }
};
</script>

<style>
</style>