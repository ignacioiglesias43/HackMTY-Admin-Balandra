<template>
  <v-container class="aux-ctn">
    <v-form ref="form">
      <h4>{{ selected }}</h4>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="nameAux"
            label="Name"
            :rules="[() => !!nameAux || 'This field is required']"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="emailAux"
            label="Email"
            :rules="[() => !!emailAux || 'This field is required']"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="btn-ctn">
        <v-spacer></v-spacer>
        <v-btn class="mr-5" @click="sendData">Aceptar</v-btn>
        <v-btn @click="goBack">Cancelar</v-btn>
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
  background-color: cadetblue;
  border-radius: 20px;
  opacity: 0.8;
}
.btn-ctn {
  margin: 5px 10px;
}
</style>
