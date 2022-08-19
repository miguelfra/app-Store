<template>
    <v-btn 
      @click="deleteItem"
      color="error"
    >
      <v-icon left>
        mdi-delete
      </v-icon>
      DELETE
    </v-btn>
    
</template>

<script>
import axios from 'axios'
export default {
    props: {item: Object},
    methods: {
        deleteItem(){
        const {id} = this.item;
        this.$alertify.confirm(
        `<h3>are you sure to delete ${this.item.article}</h3>`,
        async () => {
           await axios.delete(`http://localhost:3000/api/store/${id}`)
          this.$alertify.success('Article Deleted')
          this.$router.push('/newItem');
          },
        () => this.$alertify.error('canceled')
      );


         
       }
    }
}
</script>

