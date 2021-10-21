<template>
  <div id="home-page" class="full-height p-4">
    <div class="container pt-3">
      <div class="row pb-5">
        <div class="col-lg-6">
        </div>
        <div class="col-lg-6">
          <div class="text-center mb-3 divStyling">
            <h1 class="display-1">{{title}}</h1>
            <h3 class="display-6">Visit you dreamplace</h3>
          </div>
          <Searchform></Searchform>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Searchform from '../components/Searchform.vue'
export default {
  name: 'Home',
  data() {
    return {
      title: 'Explore the world',
      isModalVisible : false,
    }
  },
  components: {
    Searchform,
  },
}
</script>

<style scoped>

#home-page{
  background-color: #92D2F2;
  background: url('../assets/mypic.jpg') no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.divStyling{
  background: linear-gradient(
    to right, 
    hsl(300 100% 62%), 
    hsl( 10 100% 59%)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.display-1, .display-6{
  font-size: 5vmin;
  line-height: 1.1;
  color: rgb(211, 81, 200);
}

</style>
