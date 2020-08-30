<template>
  <div class="map-container">
    <h3>Has "click" sobre la zona en la que deseas estar ubicada</h3>
    <mapBoxComponent :center="center" v-if="loaded">
      <MglNavigationControl position="bottom-right" />
      <MglMarker
        v-for="(item, index) in places"
        v-bind:key="index"
        :coordinates="[item.lon, item.lat]"
        :color="getColor(item)"
        @click="clickMarker(item)"
      />
    </mapBoxComponent>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import mapBoxComponent from "../molecules/mapBoxComponent";
import { MglNavigationControl, MglMarker } from "vue-mapbox";

export default {
  name: "mapComponent",
  data() {
    return {
      places: [],
      loaded: false,
      reservations: [],
      center: [-110.324411, 24.321483],
    };
  },
  components: {
    mapBoxComponent,
    MglNavigationControl,
    MglMarker,
  },
  created() {
    this.chargePlaces();
    this.mapbox = Mapbox;
  },
  methods: {
    ...mapMutations(["changePlace"]),
    getColor(item) {
      switch (item.status) {
        case 0:
          return "#a7fa98";
        case 1:
          return "#ff0000";
        case 2:
          return "#7a7a7a";
        case 3:
          return "#91bbff";
      }
    },
    clickMarker(item) {
      if ((item.status == 3 && this.hdc) || item.status == 0) {
        this.changePlace({
          name: item.place_number,
          placeId: item.id,
        });
      }
    },
    chargePlaces: async function() {
      await axios.get("http://localhost:3000/places").then((response) => {
        this.places = response.data.places;
        switch (1) {
          case 4:
            this.places.forEach((e) => (e.status = 2));
            break;
          case 3:
            this.places.forEach((e) => {
              if (e.id % 3 == 0) e.status = 0;
              else e.status = 2;
            });
            break;
          case 2:
            this.places.forEach((e) => {
              if (e.id % 2 == 0) e.status = 2;
              else e.status = 0;
            });
            break;
          case 1:
            this.places.forEach((e) => (e.status = 0));
            break;
        }
        console.log(this.places);
      });
      if (this.places[3].status == 0) this.places[3].status = 3;
      if (this.places[4].status == 0) this.places[4].status = 3;
      if (this.places[5].status == 0) this.places[5].status = 3;
      this.checkDispon();
    },
    checkDispon: async function() {
      await axios
        .get("http://localhost:3000/reservations/")
        .then((response) => {
          console.log(response.data.reservations);
          response.data.reservations.forEach((e) => {
            if (e.date.substr(0, 10) == this.day) {
              if (e.arrival > this.timeIn && e.arrival < this.timeOut) {
                this.places.find((f) => f.id == e.Place.id).status = 1;
              }
            }
          });
        });
      this.loaded = true;
    },
  },
  computed: {
    ...mapState(["day", "timeIn", "timeOut", "stateLight", "hdc"]),
  },
};
</script>

<style scoped>
.map-container {
  height: 50vh;
  border: 0.1rem solid #B5B5B5;
  padding: 1%;
  margin: 5% 0%;
}
</style>
