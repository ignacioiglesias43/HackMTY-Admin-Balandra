<template>
  <div>
    <v-btn @click="less">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    {{ quantityShow }}
    <v-btn @click="more">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "PersonQuantity",
  props: ["quantity"],
  methods: {
    less() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
    more() {
      if (this.quantity < 11) {
        this.quantity++;
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
