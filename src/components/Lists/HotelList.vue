<template>
<div class="container my-sm-5 p-0 bg-sec-light">
    <div id="content">
            <div class="bg-white p-2 border" id="hotels">
                <div class="hotel py-2 px-2 pb-4 border-bottom" :key="hotel.ID" v-for="hotel in this.$store.state.hotelList">
                    <div class="row">
                        <div class="col-lg-3"> <img :src="hotel.hotel_image" > </div>
                        <div class="col-lg-9">
                            <div class="d-md-flex align-items-md-center">
                                <div class="name">{{hotel.hotel_name}}</div>
                                <div class="ms-auto code text-uppercase"><span class="fas fa-comment-dollar fs-5">Price from: {{hotel.minprice}} SEK</span></div>
                            </div>
                            <div class="rating"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star"></span>
                            </div>
                            <div class="d-flex flex-column tags pt-1">
                                <div><span class=" fa-2x">{{hotel.hotel_city}}</span> </div>
                                <div><span class="fas fa-map-marked-alt fs-6">{{hotel.hotel_adress}}</span></div>
                                <div><span class="fas fa-map-marked-alt fs-6" >{{hotel.hotel_zip_code}}</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end mt-1">
                        <button
                        style="color: blue;"
                        type="button"
                        class="btn"
                        @click="showModal(hotel.hotel_description_id)"
                        >
                        Show Hotel Facilities
                        </button>
                        <Modal
                            v-show="isModalVisible"
                            @close="closeModal"
                        >
                            <template v-slot:header>
                            </template>
                   
                            <template v-slot:body>
                              <div v-for="item in this.$store.state.hotelDescription" :key="item.ID">
                                    <div class="p-2">
                                        <span class="fas fa-dumbbell fa-2x fs-5">{{ item.gym ? " Gym: Yes" : " Gym: No" }}</span>
                                    </div>
                                    <div class="p-2"><span class="fas fa-swimmer fa-lg fs-6">{{ item.pool ? " Swimming pool: Yes" : " Swimming pool: No" }}</span></div>
                                    <div class="p-2"><span class="fas fa-utensils fa-lg fs-6">{{ item.restaurant ? " Restaurant Yes" : " Restaurant No" }}</span></div>
                                    <div class="p-2"><span class="fas fa-wifi fa-lg fs-6">{{ item.wifi ? " Free WiFi Yes" : " Free WiFi No" }}</span></div>
                                    <div class="p-2"><span class="fas fa-coffee fa-lg fs-6">{{ item.breakfeast ? " Breakfest at hotel: Yes" : " Breakfest at hotel: No" }}</span></div>
                                </div>
                            </template>

                            <template v-slot:footer>
                            </template>
                          </Modal>
                        <button @click="getRoomList(hotel.ID, hotel.hotel_name)" class="btn btn-primary text-uppercase">Show Rooms</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import router from '../../router/index'
import Modal from '../Modal.vue'

export default{
    name: 'HotelListByCity',
    data() {
        return {
        isModalVisible: false,
        }
    },  

  components: {
      Modal,
  },


  methods: {
      ...mapActions(["fetchHotelDescription"]),
      showModal(hotelDescriptionId){
          this.fetchHotelDescription(hotelDescriptionId)
          this.isModalVisible = true;
          
      },

      closeModal(){
          this.isModalVisible = false;
      },

      ...mapActions(["fetchRooms"]),
      getRoomList(hotelId, hotel_name){
          
          this.fetchRooms(hotelId)
          router.push("/hotel/"+ hotel_name)
      }
    }
}
</script>

<style scooped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&family=Poppins&display=swap');

body {
    background-color: #eee
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif
}

.container {
    position: relative;
    min-height: 800px;
    overflow-y: auto
}

.container::-webkit-scrollbar {
    width: 6px;
}

.container::-webkit-scrollbar-thumb {
    background-color: #ffa500;
    
}



img{
  max-width: 260px;
  max-height: 170px;
}

#content {
    float: right;
    width: 82%
}

a {
    text-decoration: none;
    color: #222
}

#content .user-select-none {
    user-select: none
}



.hotel .name {
    font-size: 1.2rem;
    font-weight: 700
}

.hotel .name .city {
    font-weight: normal;
    font-size: 0.85rem
}

#filter {
    width: 200px
}

.hotel .fas,
.hotel .far {
    font-size: .8rem
}

.hotel .fas.fa-star {
    color: #ffa500
}

.hotel .tags {
    font-size: 0.8rem
}

.hotel .btn {
    width: 150px;
    border-radius: 0
}

.hotel .btn.enquiry {
    background-color: #ff761b;
    color: #fff
}

.hotel .btn.enquiry:hover {
    background-color: #fc771fef
}



@media(max-width: 1399.5px) {
    
    #content {
        float: none;
        width: 100%
    }
}

</style>