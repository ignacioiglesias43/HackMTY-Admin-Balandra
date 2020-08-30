<template>
  <div class="home">
    <Header />
    <MapComponent />
    <GetData />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/organisms/Header'
import MapComponent from "../components/organisms/MapContent";
import GetData from "../components/molecules/GetData"
import Footer from '@/components/organisms/Footer'

export default {
  name: "Map",
  components: {
    MapComponent,
    GetData,
    Header,
    Footer
  },
};
</script>

<style>
.home{
  width: 100%;
  background-color: #F9F79C;
}
</style>
