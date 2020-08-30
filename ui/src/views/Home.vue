<template>
  <div class="home">
    <Header />
    <Content />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/organisms/Header'
import Content from '@/components/organisms/Content'


export default {
  name: 'Home',
  components: {
    Header,
    Content
  }
}
</script>

<style scoped>
.home{
  width: 100%;
}
</style>