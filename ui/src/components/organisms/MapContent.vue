<template>
  <div class="map-container">
    <mapBoxComponent :center="center">
      <MglNavigationControl position="bottom-right" />
      <MglGeolocateControl position="bottom-right" />
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
import { mapState } from "vuex";
import mapBoxComponent from "../molecules/mapBoxComponent";
import {
  MglNavigationControl,
  MglGeolocateControl,
  MglMarker,
} from "vue-mapbox";

export default {
  name: "mapComponent",
  data() {
    return {
      places: [],
      reservations: [],
      center: [-110.324411, 24.321483],
    };
  },
  components: {
    mapBoxComponent,
    MglNavigationControl,
    MglGeolocateControl,
    MglMarker,
  },
  created() {
    this.chargePlaces();
    this.mapbox = Mapbox;
  },
  methods: {
    getColor(item) {
      return item.status == 0
        ? "#a7fa98"
        : item.status == 1
        ? "#f0f"
        : "#7a7a7a";
    },
    clickMarker(item) {
      console.log(item);
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
      this.checkDispon();
    },
    checkDispon: async function() {
      await axios
        .get("http://localhost:3000/reservations/")
        .then((response) => {
          console.log(response.data.reservations);
          response.data.reservations.forEach((e) => {
            console.log(JSON.stringify(e));
          });
        });
    },
  },
  computed: {
    ...mapState(["day", "timeIn", "timeOut", "stateLight"]),
  },
};
</script>

<style scoped>
.map-container {
  height: 50vh;
}
</style>
