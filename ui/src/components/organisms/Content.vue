<template>
  <v-container
    class="content">
    <ReserveBox />
  </v-container>
</template>

<script>
import ReserveBox from '../molecules/ReserveBox'
export default {
    name: 'Content',
    components:{
        ReserveBox
    }
}
</script>

<style>
.content{
    
}
</style>