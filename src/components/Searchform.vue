<template>
    <div id="bookinghotelform" class="border p-3 p-md-5 bg-white rounded shadow">
              <div class="form-controll">
                <div class="LblDiv">
                  <label>Choose destination</label>
                  <Dropdown id="component-dropdown" @change="saveDestination($event.target.value)" :options="cityDestination"></Dropdown>
                </div>
                <div class="mt-3">
                  <Datepicker />
                </div>
                <div class="row mt-3">
                    <div>
                    <label >How many guests</label>
                    <Dropdown id="component-dropdown" @change="saveGuests($event.target.value)" :options="numberOfPeople"></Dropdown>
                  </div>
                  <div>
                    <label >How many rooms</label>
                    <Dropdown id="component-dropdown" @change="saveRooms($event.target.value)" :options="numberOfRooms" ></Dropdown>
                  </div>
                </div>
                <div>
                  <button @click="showHotels(this.$store.state.chosenDestination)" type="button" class="searchHotelsbtn">Search</button>
                </div>
              </div>
          </div>
</template>

<script>
import router from '../router/index'
import Dropdown from './Dropdown.vue'
import {mapActions, mapMutations} from 'vuex'
import Datepicker from './Datepicker.vue'
export default{
    name: 'Searchform',
      data() {
        return{
          isModalVisible: false,
          dateStart: '',
          dateEnd:'',
          cityDestination: {
            'Stockholm': 'Stockholm',
            'Barcelona': 'Barcelona',
            'Budva': 'Budva'
          },
          numberOfPeople: {
            1:1, 2:2, 3:3, 4:4,
          },
          numberOfRooms: {
            1:1, 2:2, 3:3, 4:4,
          },
        }
      },
      components: {
        Dropdown,
        Datepicker,
      },

      methods: {
        ...mapActions(['fetchHotels']),
        showHotels(chosenDestination){
          this.fetchHotels(chosenDestination);
          router.push("/hotels")
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
        ...mapMutations(['setNumberOfRooms']),
        saveRooms(value){
          this.setNumberOfRooms(value);
          console.log("Number of rooms from store", this.$store.state.numberOfRooms)
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

#start, #end{
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid lightblue;
  margin: 10px;
  padding: 5px;
  border-radius: 0px 10px 0px 10px;
}

</style>