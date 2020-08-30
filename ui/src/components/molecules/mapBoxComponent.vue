<template>
  <MglMap
    :accessToken="token"
    :mapStyle="style"
    :center="center"
    :zoom="zoom"
    :attributionControl="false">
    <slot />
  </MglMap>
</template>

<script>
import { MglMap } from "vue-mapbox";
import Mapbox from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default {
  props: ["center"],
  data() {
    return {
      token:
        "pk.eyJ1IjoiY2hhaWRlejEzIiwiYSI6ImNrZWc5MzFhbDE5OWUyeHM0MWw3OWFnenoifQ.to8bU00Ll8q7XXo06GXhwA",
      style: "mapbox://styles/chaidez13/ckeg9inwd107z19lr93oyczqy",
      zoom: 18,
    };
  },
  components: {
    MglMap,
  },
  created() {
    this.mapbox = Mapbox;
  },
  methods: {
  },
};
</script>

<style></style>
