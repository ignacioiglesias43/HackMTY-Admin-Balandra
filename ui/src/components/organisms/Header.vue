La portada, el slider no slider

<template>
  <div>
      <v-img 
        src="../../assets/portada.jpg"
        width='100%'
        max-height="300"
    >
          <LoginMessage />
      </v-img>
  </div>
</template>

<script>
import LoginMessage from '../molecules/LoginMessage'
export default {
    name: 'Header',
    components:{
        LoginMessage
    }
}
</script>

<style>

</style>