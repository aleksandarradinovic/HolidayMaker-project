<template>
    <div id="bookinghotelform" class="border p-3 p-md-5 bg-white rounded shadow">
              <div class="form-group">
                <input 
                        type="text" 
                        placeholder="Type in destination"
                        class="form-control"
                        >
                <input  type="date" id="start" name="trip-start"
                        value=""
                        min="2021-01-01" 
                        max="2021-12-31"
                        >
                <input  type="date" id="end" name="trip-end"
                        value=""
                        min="2021-01-01" 
                        max="2021-12-31"
                        >
                  <Searchmodal v-show="isModalVisible" @close="closeModal" />
                <div>
                  <button type="button" class="btn" @click="showModal">Open Modal</button>
                  
                </div>
                <div>
                  <button type="button" class="searchHotelsbtn">Search</button>
                </div>
              </div>
          </div>
</template>

<script>
import Searchmodal from './Searchmodal.vue'
export default{
    name: 'Searchform',
    data() {
      return{
        isModalVisible: false,
      }
    },
    components: {
      Searchmodal,
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
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