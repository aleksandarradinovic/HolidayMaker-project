<template>
 <div>
  <div><button @click="homepage()" class="searchHotelsbtn">New Search</button></div> 
    <HotelListByCity />
 </div>    
</template>

<script>
import router from '../router/index'
import HotelListByCity from '../components/Lists/HotelList.vue'

export default{
  components: {
    HotelListByCity,
  },

  methods: {
    homepage() {
      this.$store.state.chosenDestination = '';
      this.$store.state.dateStart = '';
      this.$store.state.dateEnd = '';
      this.$store.state.numberOfpeople = null;
      this.$store.state.numberOfBeds = null;
      router.push('/')
    }
  }
}
</script>

<style scoped>
.searchHotelsbtn{
  background-color: rgba(255, 255, 255, 0.5);
  margin-top: 30px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border: 1px solid lightblue;
}

.searchHotelsbtn:focus{
  color: aqua;
}
#hotel-page{
  background-color: #92D2F2;
  background: url('../assets/mypic.jpg') no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>