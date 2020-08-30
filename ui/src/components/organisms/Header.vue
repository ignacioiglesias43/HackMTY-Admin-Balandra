La portada, el slider no slider

<template>
  <header id="header">
      <a href="/">
        <v-img 
            src="../../assets/logo.png"
            width=300
        ></v-img>
       </a>
          <LoginMessage />
      
  </header>
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
    #header {
        background-image: url('../../assets/portada.png');
        background-position: center;
        background-size: cover;
        padding: 2%;
    }
</style>