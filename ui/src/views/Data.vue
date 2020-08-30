<template>
  <div class="home">
      <Header />
      <Ticket />
  </div>
</template>

<script>
import Header from '@/components/organisms/Header'
import Ticket from '../components/organisms/Ticket'
export default {
    name: 'Data',
    components:{
        Ticket,
        Header
    }
}
</script>

<style>
.home{
  width: 100%;
  background-color: #F9F79C;
}
</style>