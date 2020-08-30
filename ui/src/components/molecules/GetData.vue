<template>
  <v-container class="aux-ctn">
<<<<<<< HEAD
    <h1>Continuar con el Registro</h1>
    <hr style="padding: .5%" color=5a8030>
    <v-form ref="form" style="margin: 4% 0%">
=======
    <v-form ref="form">
      <h4>{{ selected }}</h4>
>>>>>>> dda0fa42e16398ae1bec13e6b50cc0df14c43477
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
<<<<<<< HEAD
          <v-spacer></v-spacer>
          <v-btn class="btn-access acept" color="#5a8030" dark>Aceptar</v-btn>
          <v-btn class="btn-access acept" color="#5a8030" dark @click="goBack">Cancelar</v-btn>
=======
        <v-spacer></v-spacer>
        <v-btn class="mr-5" @click="sendData">Aceptar</v-btn>
        <v-btn @click="goBack">Cancelar</v-btn>
>>>>>>> dda0fa42e16398ae1bec13e6b50cc0df14c43477
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data: () => ({
    nameAux: null,
    emailAux: null,
    selected: null,
  }),
  methods: {
    goBack() {
      this.$router.push({ path: "/" });
    },
    sendData() {
      var bodyFormData = new FormData();
      bodyFormData.append("userId", "0");
      bodyFormData.append("placeId", this.placeSelected.placeId);
      bodyFormData.append("parkingId", "0");
      bodyFormData.append("adults", this.qtn);
      bodyFormData.append("date", this.day);
      bodyFormData.append("arrival", this.timeIn);
      bodyFormData.append("departure", this.timeOut);

      if (this.selected != null) {
        axios({
          method: "post",
          url: "http://localhost:3000/reservations/",
          data: bodyFormData,
        })
          .then(console.log("Registrado con exito"))
          .catch((er) => console.log(er));
      }
    },
  },
  computed: {
    ...mapState(["day", "placeSelected", "timeIn", "timeOut", "car", "qtn"]),
  },
  watch: {
    placeSelected: function(newPS) {
      this.selected = "Usted ha seleccionado la " + newPS.name;
    },
  },
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
<<<<<<< HEAD
.btn-ctn{
  margin: 5% 0% 0%;
  display: flex;
  justify-content: space-between;
=======
.btn-ctn {
  margin: 5px 10px;
>>>>>>> dda0fa42e16398ae1bec13e6b50cc0df14c43477
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
