<template>
            <HotelListByCity />
          
</template>

<script>
import router from '../router/index'
import HotelListByCity from '../components/HotelList.vue'
// import { mapActions } from "vuex";
// import Searchmodal from '../components/Searchmodal.vue'

export default{
  components: {
    HotelListByCity,
  },
  // data() {
  //       return {
  //       isModalVisible: false,
  //       }
  //   },  

  // components: {
  //     Searchmodal,
  // },

  methods: {
  //   ...mapActions(["fetchHotels"]),
  //     showModal() {
  //       this.isModalVisible = true;
  //     },
  //     closeModal() {
  //       this.isModalVisible = false;
  //     },
    homepage() {
      router.push('/')
    }
  }
}
</script>

<style scoped>
#hotel-page{
  background-color: #92D2F2;
  background: url('../assets/mypic.jpg') no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>