<template>
                <div class="hotel py-2 px-2 pb-4 border-bottom border-info border-1" :key="booking.id" v-for="booking in this.$store.state.singleBooking">
                    <div class="row mt-2">
                        
                        <div class="d-md-flex align-items-md-center">
                            <div class="name">Booking number: {{booking.ID}}</div>
                        </div>
                        <div class="d-flex flex-column pt-1">
                            <div><span class="fs-6">Room id: {{booking.room_id}}</span> </div>
                            <div><span class="fs-6"> Guests:  {{booking.number_of_people}}</span></div>
                            <div><span class="fs-6"> Email:{{booking.email}}</span></div>
                            <div><span class="fs-6"> Check In Date: {{ moment(booking.checkIn).format('DD MMM YYYY') }}</span></div>
                            <div><span class="fs-6"> Check Out Date:{{ moment(booking.checkOut).format('DD MMM YYYY') }}</span></div>
                        </div>
                    </div>
                </div>
                <div class="border border-top mt-3">
                    <div class="row">
                        <div class="col-6">
                            <div>
                                <label>How many guests</label>
                                <Dropdown id="guests" name="guests" @change="saveGuests($event.target.value)" :options="numberOfPeople">{{booking.number_of_people}}</Dropdown>
                                </div>
                        </div>
                        <div class="col-6">

                            <Datepicker />
                            <div class="mt-2 ms-5">
                                <button @click="saveNewBooking()">Save changes</button>
                            </div>
                            <div class="mt-3" :key="error.id" v-for="error in msg">
                                <ul>
                                    <li>{{ error }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
import Dropdown from '../Dropdown.vue'
import Datepicker from '../Datepicker.vue'
import {mapMutations, mapActions} from 'vuex'
import axios from 'axios'
import moment from 'moment'
export default{
    name: 'Singlebookinglist',

    data(){
        return{
        numberOfPeople: {
            1:1, 2:2, 3:3, 4:4,
          },
          msg: [],

          bookingList: [],
          
          bookingObj: {
                ID : null,
                checkIn : null,
                checkOut : null,
                room_id : null,
                number_of_people : null,
                email: null, 
          },
        }
    },

    components: {
        Datepicker,
        Dropdown,
    },
    methods:{


        moment: function (date) {
      return moment(date);
        },

        ...mapMutations(['setNumberOfPeople']),
        saveGuests(value){
          this.setNumberOfPeople(value);
          console.log("FROM MODIFY BOOKING",this.$store.state.numberOfpeople);
        },
        ...mapMutations(['setNumberOfBeds']),
        saveBeds(value){
          this.setNumberOfBeds(value);
          console.log("FROM MODIFY BOOKING", this.$store.state.numberOfBeds)
        },

        ...mapActions(['checkAvaible']),
       async saveNewBooking(){
            
                 let result = await axios.get('http://localhost:888/api/checkdate', {
                    params: {
                        ID : this.$store.state.bookingId,
                        room_id : this.$store.state.roomId,
                        checkIn : this.$store.state.dateStart,
                        checkOut : this.$store.state.dateEnd,
                            }
                            })
                            console.warn(result.data)
                            this.bookingList = result.data[0]

                            if(this.bookingList.length == 0){
                                            axios.put("http://localhost:888/api/modifiedbooking", {
                                                ID : this.$store.state.bookingId,
                                                checkIn : this.$store.state.dateStart,
                                                checkOut :  this.$store.state.dateEnd,
                                                room_id : this.$store.state.roomId,
                                                number_of_people : this.$store.state.numberOfpeople,
                                                email : this.$store.state.eMail,

                                            }).then((response) => {
                                                console.log(response);
                                            }, (error) => {
                                                console.log(error);
                                            });
                                            alert('Your booking has been successfully changed!')
                                        }else{
                                            alert("The room is not avaible those dates!")
                                        }

                        },
            
    }
}

</script>