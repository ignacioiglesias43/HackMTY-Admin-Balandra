<template>
  <div v-if="loaded">
    <h1>Reservation Data</h1>
    <div class="ticket">
      <qrcode-vue :value="value" :size="size" level="L"></qrcode-vue>
      <div>
        <v-row>
          <v-col cols="3">
            {{ info.User.name }}
          </v-col>
          <v-col cols="3">
            {{ info.date.substr(0, 10) }}
          </v-col>
          <v-col cols="3">
            {{ info.User.correo }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            {{ info.arrival }}
          </v-col>
          <v-col cols="3">
            {{ info.departure }}
          </v-col>
          <v-col cols="3">
            {{ info.Place.placeNumber }}
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
import axios from "axios";

export default {
  name: "Ticket",
  props: {
    data: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    loaded: false,
    info: [],
    size: 300,
    value: null,
  }),
  components: {
    QrcodeVue,
  },
  created: async function() {
    var id = this.$props.data;
    this.value = "http://localhost:3000/reservations/" + id;
    console.log(id);
    await axios
      .get(`http://localhost:3000/reservations/${id}`)
      .then((response) => {
        this.info = response.data.reservation;
        console.log(this.info);
      });
    this.loaded = true;
  },
};
</script>

<style>
.ticket{
  display: flex;
}
</style>
