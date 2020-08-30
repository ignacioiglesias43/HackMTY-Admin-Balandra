<template>
  <div class="map-container">
    <mapBoxComponent :center="center">
      <MglNavigationControl position="bottom-right" />
      <MglGeolocateControl position="bottom-right" />
      <MglMarker
        v-for="(item, index) in places"
        v-bind:key="index"
        :coordinates=[item.long,item.lat]
        color="#17a2b8"
        @click="clickMarker(item)"
      />
    </mapBoxComponent>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
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
      places: [
        { id: 0, long: -110.325315, lat: 24.321845 },
        { id: 1, long: -110.3252, lat: 24.321874 },
        { id: 2, long: -110.325085, lat: 24.321901 },
        { id: 3, long: -110.324959, lat: 24.321911 },
        { id: 4, long: -110.324862, lat: 24.321928 },
        { id: 5, long: -110.324768, lat: 24.321916 },
        { id: 6, long: -110.324637, lat: 24.321926 },
        { id: 7, long: -110.324503, lat: 24.321926 },
        { id: 8, long: -110.324411, lat: 24.321913 },
        { id: 9, long: -110.324326, lat: 24.321903 },
        { id: 10, long: -110.324248, lat: 24.321877 },
        { id: 11, long: -110.324177, lat: 24.321848 },
        { id: 12, long: -110.3241, lat: 24.321811 },
        { id: 13, long: -110.324024, lat: 24.321785 },
        { id: 14, long: -110.323934, lat: 24.321737 },
        { id: 15, long: -110.323842, lat: 24.321695 },
        { id: 16, long: -110.32375, lat: 24.321653 },
        { id: 17, long: -110.323656, lat: 24.321603 },
        { id: 18, long: -110.323586, lat: 24.321565 },
        { id: 19, long: -110.323511, lat: 24.321525 },
        { id: 20, long: -110.323441, lat: 24.321483 },
        { id: 21, long: -110.323367, lat: 24.32143 },
        { id: 22, long: -110.323294, lat: 24.32138 },
      ],
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
    this.mapbox = Mapbox;
  },
  methods: {
    clickMarker(item){
      console.log(item)
    }
  },
  computed: {},
};
</script>

<style scoped>
.map-container {
  height: 50vh;
}
</style>
