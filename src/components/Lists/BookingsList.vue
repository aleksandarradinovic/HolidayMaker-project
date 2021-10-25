<template>
    <div class="container my-sm-5 p-0 bg-sec-light">
        <div id="content">
            <div class="bg-white p-2 border" id="hotels">
                <div class="hotel py-2 px-2 pb-4 border-bottom border-info border-1" :key="booking.ID" v-for="booking in this.$store.state.bookingList">
                    <div class="row mt-2">
                        <div class="d-md-flex align-items-md-center">
                            <div class="name">Booking number: {{booking.ID}}</div>
                        </div>
                        <div class="d-flex flex-column pt-1">
                            <div><span class="fs-6">Room id: {{booking.room_id}}</span> </div>
                            <div><span class="fs-6"> Guests:  {{booking.number_of_people}}</span></div>
                            <div><span class="fs-6"> Email:{{booking.email}}</span></div>
                            <div><span class="fs-6"> Check In Date: {{ moment(booking.checkIn).format('DD MMM YYYY') }}</span></div>
                            <div><span class="fs-6"> Check Out Date: {{ moment(booking.checkOut).format('DD MMM YYYY') }}</span></div>
                        </div>
                        <div class="d-flex justify-content-between mt-1">
                            
                            <div>
                            <button
                            v-show="isButtonVisible"
                            v-if="booking.checkIn > this.currentDate"
                            class="change-bookingBtn"
                            @click="showModal(booking.ID, booking.room_id, booking.email,booking.number_of_people,booking.checkIn,booking.checkOut)"
                            >
                            Change Booking
                            </button>
                            </div>
                            <div>
                             <button
                            class="erase-bookingBtn"
                            @click="eraseBooking(booking.ID)"
                            >
                            Cancel Booking
                            </button>
                            </div>
                             <Modal
                            v-show="isModalVisible"
                            @close="closeModal(booking.email)"
                        >
                            <template v-slot:header>
                                <div>
                                    <h2 style="color: #4AAE9B;
                                    font-weight: bold;"
                                    >
                                    Change Booking
                                    </h2>
                                </div>
                            </template>

                            <template v-slot:body>
                                <Singlebookinglist />
                            </template>

                            <template v-slot:footer>
                                
                            </template>
                          </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
import Modal from '../Modal.vue'
import {mapActions, mapMutations} from 'vuex'
import Singlebookinglist from './SinglebookingList.vue'
import moment from 'moment'

export default{
    name: 'Listingbookings',
    data(){
        return{
            isModalVisible: false,
            isButtonVisible: true,
            currentDate : new Date().toISOString().substr(0, 10)
        }
    },
    components: {
        Modal,
        Singlebookinglist,
    },

    methods: {
        ...mapActions(['getChosenBooking']),
        ...mapMutations(['setRoomId']),
        ...mapMutations(['setEmail']),
        ...mapMutations(['setBookingId']),
        ...mapMutations(['setNumberOfPeople']),
        ...mapMutations(['setDateStart']),
        ...mapMutations(['setDateEnd']),
        showModal: function(Id, roomId, eMail, guests, checkin, checkout){
            this.isModalVisible = true;
            this.setEmail(eMail)
            this.setRoomId(roomId)
            this.getChosenBooking(Id)
            this.setBookingId(Id)
            this.setNumberOfPeople(guests)
            this.setDateStart(checkin)
            this.setDateEnd(checkout)
        },

        moment: function (date) {
            return moment(date);
        },
        ...mapActions(['getBookingList']),
        closeModal: function(email){
            this.isModalVisible = false;
            this.getBookingList(email)
        },
        
        ...mapActions(['deleteBooking']),
        eraseBooking: function(Id){
            this.deleteBooking(Id)
            
            let projectIndex = this.$store.state.bookingList.findIndex(p => p.Id === this.$store.state.bookingList.Id)
            this.$store.state.bookingList.splice(projectIndex, 1)
        }
    }
    
}
</script>

<style scoped>
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

.change-bookingBtn{
  background-color: rgba(255, 255, 255, 0.5);
  color:#1fa89d;
  margin-top: 5px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border: 2px solid lightblue;
}

.change-bookingBtn:focus{
  color: aqua;
}

.erase-bookingBtn{
  background-color: rgba(255, 255, 255, 0.5);
  color:#b31832;
  margin-top: 5px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(99, 17, 17);
  padding: 1pxpx;
}

.erase-bookingBtn:focus{
  color: red;
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

span {
color: #000000;
font-weight: bold;
width: 150px;
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

.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
     max-width: 450px;
      max-height: 400px;
    background: #ffffffe1;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;

    display: flex;
    flex-direction: column;
    
    height: 100%;
    position:relative;
    margin:0 auto;
    padding:3em;
    -webkit-overflow-scrolling: touch;
  }

  .modal-header,
  .modal-footer {
    padding: 5px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #1fa89d;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #1fa89d;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>