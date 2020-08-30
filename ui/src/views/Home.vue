<template>
  <div class="home">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/organisms/Header'
import Content from '@/components/organisms/Content'
import Footer from '@/components/organisms/Footer'


export default {
  name: 'Home',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  background-color: #F9F79C;
}
</style>