<template>
  <v-container v-if="modeNewItem">
    <v-row justify="center">
      <v-col>
        <v-form
          class="purple lighten-1 p-10 rounded-lg white--text"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            class="white--text"
            v-model="item.article"
            :rules="articleRules"
            label="Article"
            required
          ></v-text-field>

          <v-text-field
            v-model="item.price"
            :rules="priceRules"
            label="Price"
            required
          ></v-text-field>
            <v-text-field
            v-model="item.stock"
            :rules="stockRules"
            label="Stock"
            required
          ></v-text-field>

          <div class="container">
            <v-btn
              color="success"
              class="d-flex"
              @click="addNewItem"
            >
              Create
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>

   <v-container v-else>
    <v-row justify="center">
      <v-col>
        <v-form
          class="purple lighten-1  rounded-lg white--text"
          ref="form"
          v-model="valid"
          lazy-validation
        >

          <v-text-field
            v-model="itemId.price"
            :rules="priceRules"
            label="Price"
            required
          ></v-text-field>
          
            <v-text-field
            v-model="itemId.stock"
            :rules="stockRules"
            label="Stock"
            required
          ></v-text-field>

          <div class="container">
            <v-btn
              color="success"
              class="d-flex"
              @click="editItem"
            >
              Edit
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  props: {
    modeNewItem: Boolean,
    itemId: Object
  },
  data: () => ({
    valid: true,
    item: {
        article: "",
        price: null,
        stock: null  
    },
    articleRules: [
      (v) => !!v || "Article name is required",
    ],
    
    priceRules: [
      (v) => !!v || "price is required",
    ],
    stockRules: [
        (v) => !!v || "Stock is required",
    ]
  }),

  methods: {
    editItem(){
        if(this.$refs.form.validate()){
            this.$store.dispatch('editItem', this.itemId);
            this.$alertify.success('Article Edited');
            setTimeout( () => {
              this.$router.push('/');
            }, 2000)
        } else{
            this.$alertify.error('Llena Todos los campos');
        }
    },
    addNewItem() {
        if (this.$refs.form.validate()) {
             this.$store.dispatch('newItem',this.item);
             this.$alertify.success('Article added');
             this.$router.push('/');
        } else{
            this.$alertify.error('Llena Todos los campos');
        }
    }

  }
};
</script>

<style scoped>
.container {
    display: flex;
   justify-content: end;
}

  
.v-application .purple.lighten-1{
padding: 10px ;
}

</style>
