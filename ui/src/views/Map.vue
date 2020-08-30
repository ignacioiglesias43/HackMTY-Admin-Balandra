<template>
  <v-container>
    <MapComponent />
    <GetData />
  </v-container>
</template>

<script>
import MapComponent from "../components/organisms/MapContent";
import GetData from "../components/molecules/GetData"
export default {
  name: "Map",
  components: {
    MapComponent,
    GetData,
  },
};
</script>

<style>

</style>
