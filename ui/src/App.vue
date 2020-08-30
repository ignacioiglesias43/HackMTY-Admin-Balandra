<template>
  <v-app>
    <router-view />>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  data: () => ({
    //
  }),
  created(){
    this.chargeLight()
  },
  methods:{
    ...mapActions(['chargeLight'])
  }
};
</script>
