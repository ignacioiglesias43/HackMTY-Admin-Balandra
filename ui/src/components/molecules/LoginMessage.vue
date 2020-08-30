El cuadro del aviso de recomendación de login

<template>
  <v-col 
    class="mb-5 message-box"
    cols='12'
    md='5'
    >
      <span class="text-box">Accede a nuestra plataforma o registrate para recibir notificaciones de fechas disponibles y menos concurridas para mayor seguridad</span>
      <v-col 
        class="btn-box"

        cols='12'
        md='8'
        >
        <v-btn>Sign in</v-btn>
        <v-btn>Sign up</v-btn>
      </v-col>
  </v-col>
</template>

<script>
export default {
  name: 'LoginMessage'
}
</script>

<style>
.message-box{
 background-color: cadetblue;
 border-radius: 20px;
 opacity: 0.8;
}
.text-box{
  color: white;
}
.btn-box{
  display: flex;
  justify-content: space-between;
}
</style>