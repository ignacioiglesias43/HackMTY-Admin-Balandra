El cuadro del aviso de recomendación de login

<template>
  <v-col class="mb-5 message-box" cols="10" md="10">
    <span class="text-box"
      >Accede a nuestra plataforma o registrate para recibir notificaciones de
      fechas disponibles y menos concurridas para mayor seguridad</span
    >
    <v-col class="btn-box" cols="12" md="12">
      <v-btn class="btn-access" color="#5a8030" dark @click="changeSM({state: true, type: false})">Sign In</v-btn>
      <v-btn class="btn-access" color="#5a8030" dark @click="changeSM({state: true, type: true})">Log In</v-btn>
    </v-col>
  </v-col>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "LoginMessage",
  methods: {
    ...mapMutations(["changeSM"]),
  },
};
</script>

<style>
.message-box {
  background-color: #017ca57e;
  font-size: 20px;
  margin: 5% 8%;
  padding: 30px 30px 0 !important;
  text-align: center;
}
.text-box {
  color: white;
}
.btn-box {
  display: flex;
  justify-content: flex-end;
}
.btn-access {
  margin: 2%;
}
.btn-access:hover {
  transition-duration: 0.4s;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.397),
    0 17px 50px 0 rgba(0, 0, 0, 0.397);
}
</style>
