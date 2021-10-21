<template>
    <div id="bookinghotelform" class="border p-3 p-md-5 bg-white rounded shadow">
         <div class="form-controll">
           <div class="d-flex justify-content-end mt-1">
                        <button
                        type="button"
                        class="btn"
                        @click="showModal()"
                        >
                        See bookings <i class="fas fa-list-alt"></i>
                        </button>
                        <Modal
                            v-show="isModalVisible"
                            @close="closeModal"
                          >
                            <template v-slot:header>
                              <div class="mb-3">
                                  <label for="eMailInput" class="form-label">Email address</label>
                                  <input placeholder="example@gmail.com" type="email" v-model="email" class="form-control" id="eMailInput" aria-describedby="emailHelp">
                                  <div id="emailHelp" class="form-text">Type in your email to see your bookings</div>
                                  <button type="button" @click="listBookings(email)" class="searchHotelsbtn">See List</button>
                              </div>
                              <div me-4>
                               <label>Logged in as: {{this.$store.state.eMail}}</label>
                               <div>
                                  <ul>
                                    <li v-for="error in emailErrors" :key="error.id">{{ error }}</li>
                                  </ul>
                                </div>
                              </div> 
                              
                            </template>

                            <template v-slot:body>
                                <Listingbookings />
                            </template>

                            <template v-slot:footer>
                              footer from home.
                            </template>
                          </Modal>
                    </div>
           <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors" :key="error.id">{{ error }}</li>
              </ul>
            </p>
          <div class="LblDiv">
            <label>Choose destination</label>
            <Dropdown id="city" name="city" @change="saveDestination($event.target.value)" :options="cityDestination"></Dropdown>
          </div>
          <div class="mt-3">
            <Datepicker />
          </div>
          <div class="row mt-3">
              <div>
              <label >How many guests</label>
              <Dropdown id="guests" name="guests" @change="saveGuests($event.target.value)" :options="numberOfPeople"></Dropdown>
            </div>
            <div>
              <label >How many beds</label>
              <Dropdown id="beds" name="beds" @change="saveBeds($event.target.value)" :options="numberOfBeds" ></Dropdown>
             </div>
          </div>
          <div>
            <button @click="showHotels(this.$store.state.chosenDestination)" type="button" class="searchHotelsbtn">Search</button>
          </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
import router from '../router/index'

import Dropdown from './Dropdown.vue'
import Datepicker from './Datepicker.vue'

import Modal from './Modal.vue'
import Listingbookings from './Lists/BookingsList.vue'

export default{
    name: 'Searchform',
      data() {
        return{
          isModalVisible: false,
          dateStart: '',
          email: '',
          loggedInEmail:'',
          dateEnd:'',
          errors: [],
          emailErrors: [],
          cityDestination: {
            'Stockholm': 'Stockholm',
            'Barcelona': 'Barcelona',
            'Budva': 'Budva'
          },
          numberOfPeople: {
            1:1, 2:2, 3:3, 4:4,
          },
          numberOfBeds: {
            1:1, 2:2, 3:3, 4:4,
          },
        }
      },
      components: {
        Dropdown,
        Datepicker,
        Modal,
        Listingbookings,
      },

      methods: {
        showModal(){
          this.isModalVisible = true;
    },
    closeModal(){
          this.isModalVisible = false;
          this.$store.state.bookingList.splice(0);
      },
      ...mapMutations(['setEmail']),
      ...mapActions(['getBookingList']),
      listBookings(email){
        this.emailErrors.splice(0)

        if(email.length == 0){
          this.emailErrors.push('Your email is to short')
        }
        if(email.length > 50){
          this.emailErrors.push('Your email is to long')
        }
        //eslint-disable-next-line
         if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(email))) {
        this.emailErrors.push("Email Is Not Valid");
        }else{
          this.emailErrors.splice(0)
          this.setEmail(email);
          this.getBookingList(email);
        }
      },

        ...mapActions(['fetchHotels']),
        showHotels(chosenDestination){

      if (this.$store.state.numberOfpeople == null || this.$store.state.numberOfBeds == null || this.$store.state.dateStart == '' || this.$store.state.dateEnd == '' || this.$store.state.chosenDestination == '') {
        this.errors.splice(0);
        if(this.$store.state.numberOfpeople == null){
          this.errors.push('Number of people required')
        }
        if(this.$store.state.numberOfBeds == null){
          this.errors.push('Number of beds required')
        }
        if(this.$store.state.dateStart == ''){
          this.errors.push('check in date required')
        }
        if(this.$store.state.dateEnd == ''){
          this.errors.push('check out date required')
        }
        if(this.$store.state.chosenDestination == ''){
          this.errors.push('select chozen destination')
        }
        if(this.$store.state.numberOfpeople > this.$store.state.numberOfBeds )
        this.errors.push('Select so many beds for so many person')
        }else {
          this.fetchHotels(chosenDestination);
          router.push("/hotels/" + chosenDestination)
        }
        },
        ...mapMutations(['setChosenDestination']),
        saveDestination(value){
          this.setChosenDestination(value)
          console.log(this.$store.state.chosenDestination, "From store")
          console.log("Selected city: ", value)
        },
        ...mapMutations(['setNumberOfPeople']),
        saveGuests(value){
          this.setNumberOfPeople(value);
          console.log("Number of people from store",this.$store.state.numberOfpeople);
        },
        ...mapMutations(['setNumberOfBeds']),
        saveBeds(value){
          this.setNumberOfBeds(value);
          console.log("Number of rooms from store", this.$store.state.numberOfBeds)
        }
    }
}
</script>

<style scoped>
.searchHotelsbtn{
  background-color: rgba(255, 255, 255, 0.5);
  margin-top: 5px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border: 1px solid lightblue;
}

.searchHotelsbtn:focus{
  color: aqua;
}

.form-control{
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid lightblue;
  padding: 5px;
  border-radius: 0px 10px 0px 10px;
  transition: 0.4s;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}

#start, #end, .form-control:focus{
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 10px 0 10px 0;
}

.btn{
  font-size: 2.5vmin;
  color: rgb(26, 136, 139);
}

#start, #end{
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid lightblue;
  margin: 10px;
  padding: 5px;
  border-radius: 0px 10px 0px 10px;
}

</style>