<template>
<div class="container my-sm-5 p-0 bg-sec-light">
    <div id="content">
            <div class="bg-white p-2 border" id="hotels">
                <div class="hotel py-2 px-2 pb-4 border-bottom" :key="room.ID" v-for="room in this.$store.state.roomList">
                    <div class="row">
                        <div class="col-lg-3"> <img :src="room.room_image" > </div>
                        <div class="col-lg-9">
                            <div class="d-md-flex align-items-md-center">
                                <div class="name"> Room number: {{room.room_number}}</div>
                                <div class="ms-auto code text-uppercase"><span class="fas fa-comment-dollar money fs-5">{{room.pricePerNight}} SEK</span></div>
                            </div>
                            <div class="rating"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star"></span> <!-- Book now Enquiry -->
                            </div>
                            <div class="d-flex flex-column tags pt-1">
                                <div>Number of extra beds: {{room.extra_beds}}</div>
                                <div>Double bed: {{ room.kingSizeBed ? "Yes" : "No" }}</div>
                                <div><i class="fas fa-smoking-ban fs-3 mt-3 smoke"></i>  </div>
                                <div><i class="fas fa-wifi fs-3 mt-3 "></i> </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end mt-1">
                        <button
                        style="color: white;"
                        type="button"
                        class="btn btn-dark text-uppercase"
                        @click="showModal(room.ID)"
                        >
                        book room
                        </button>
                        <Modal
                            v-show="isModalVisible"
                            @close="closeModal"
                        >
                            <template v-slot:header>
                                <ul>
                                     <li v-for="error in errors" :key="error.id">{{error}}</li>
                                </ul>
                                <div class="mb-3">
                                    <label for="guestEmailInput" class="form-label"> Your Email address if you want to save your booking</label>
                                    <input type="email" class="form-control" v-model="email" id="guestEmailInput" placeholder="example@gmail.com">
                                </div>
                            </template>
                   
                            <template v-slot:body>
                                <div>
                                    <h5 class="border-bottom border-info">Booking details</h5>
                                </div>
                                <div>
                                    Check in: {{this.$store.state.dateStart}}
                                </div>
                                <div>
                                    Check out: {{this.$store.state.dateEnd}}
                                </div>
                                <div>
                                    Number of people: {{this.$store.state.numberOfpeople}}
                                </div>
                                <div class="border-bottom border-info" >
                                    Number of beds: {{this.$store.state.numberOfBeds}}
                                </div>
                                <div>
                                    <button @click="book()" class=" btn-info mt-3">
                                    Book room
                                    </button>
                                </div>
                            </template>

                            <template v-slot:footer>
                                footer
                            </template>
                          </Modal>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../../router/index'
import Modal from '../Modal.vue'
import { mapMutations } from "vuex";

export default{
    name: 'RoomList',
    components:{
        Modal,
    },
    data(){
        return{
            isModalVisible: false,
            email: '',
            errors: [],
        }
    },
    methods: {
        closeModal(){
          this.isModalVisible = false;
      },
       ...mapMutations(['setRoomId']),
            showModal(id){
                this.setRoomId(id)
                this.isModalVisible = true;
            },
            book(){
                this.errors.splice(0)

        //eslint-disable-next-line
        if(this.email.length > 40 || !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(this.email))){
          this.errors.push("Email Is Not Valid");

        }if(this.email.length == 0){
          this.errors.splice(0)
          console.log(this.email)
          axios.post("http://localhost:888/api/bookings", {
          checkIn : this.$store.state.dateStart,
          checkOut :  this.$store.state.dateEnd,
          room_id: this.$store.state.roomId,
          number_of_people : this.$store.state.numberOfpeople,
          email : this.email,

        }).then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
      
      router.push('/')
      alert("Your booking has been successfull!");
        }
        else{
          this.errors.splice(0)
          console.log(this.email)
          axios.post("http://localhost:888/api/bookings", {
          checkIn : this.$store.state.dateStart,
          checkOut :  this.$store.state.dateEnd,
          room_id: this.$store.state.roomId,
          number_of_people : this.$store.state.numberOfpeople,
          email : this.email,
          
        }).then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
        });
        router.push('/')
        alert("Your booking has been successfull!");
            }
        }
    },
    mounted() {
      let getFontAwesome = document.createElement('script')
      getFontAwesome.setAttribute('src', 'https://kit.fontawesome.com/744c1016da.js')
      document.head.appendChild(getFontAwesome)
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&family=Poppins&display=swap');

body {
    background-color: #eee
}

.smoke{
    color: red;
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