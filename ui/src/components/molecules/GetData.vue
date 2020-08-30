<template>
  <v-container class="aux-ctn">
    <h1>Continuar con el Registro</h1>
    <hr style="padding: .5%" color=5a8030>
    <v-form ref="form" style="margin: 4% 0%">
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="nameAux"
            prepend-icon=mdi-account-check-outline
            label="Name"
            :rules="[() => !!nameAux || 'This field is required']"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="emailAux"
            prepend-icon=mdi-email-outline
            label="Email"
            :rules="[() => !!emailAux || 'This field is required']"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="btn-ctn">
          <v-spacer></v-spacer>
          <v-btn class="btn-access acept" color="#5a8030" dark>Aceptar</v-btn>
          <v-btn class="btn-access acept" color="#5a8030" dark @click="goBack">Cancelar</v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    nameAux: null,
    emailAux: null,
  }), 
  methods:{
    goBack(){
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
.aux-ctn {
  background-color: #17769681;
  border-radius: 20px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  padding: 5%;
  width: 70%;
}
.btn-ctn{
  margin: 5% 0% 0%;
  display: flex;
  justify-content: space-between;
}
.aux-ctn h1{
  text-align:center;
  color: #ffffff;
  flex-basis: calc(33.3% - 1rem);
}
.acept{
  flex-basis: calc(33.3% - 1rem);
}

</style>
