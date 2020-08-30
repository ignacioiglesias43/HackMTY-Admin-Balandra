<template>
  <div>
    <v-btn @click="$emit('update:quantity',quantityShow_--)">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    {{ quantityShow_ }}
    <v-btn @click="$emit('update:quantity',quantityShow_++)">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "PersonQuantity",
  props: ["quantity"],
  data:() => ({
    quantityShow_:null,
  }),
  created(){
    this.quantityShow_=this.quantity
  },
  methods: {
    less() {
      console.log(this.quantity)
      if (this.quantityShow_ > 0) {
        return this.quantityShow_--;
      }
    },
    more() {
      if (this.quantity_ < 11) {
        this.$emit('update:quantityShow',this.quantityShow_++);
      }
    },
  },
  computed: {
    quantityShow() {
      return this.quantity;
    },
  },
};
</script>

<style></style>
