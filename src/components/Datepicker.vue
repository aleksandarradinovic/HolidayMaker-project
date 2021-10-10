<template>
    <div class="form-group">
        <input  type="date" id="startDate" name="trip-start"
                        v-model="dateStart"
                        min="2021-01-01" 
                        max="2021-12-31"
                        v-bind="disabledDates"
                        @change="onChangeStartDate()"
                        >
        <input  type="date" id="endDate" name="trip-end"
                        v-model="dateEnd"
                        min="2021-01-01" 
                        max="2021-12-31"
                        @change="onChangeEndDate()"
                        >
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default{
    name: 'Datepicker',
    data() {
      return{
        dateStart: '',
        dateEnd:'',
        disabledDates: {
          to: new Date(Date.now() - 8640000)
        }
      }
    },

    methods: {
        ...mapMutations(['setDateStart']),
      onChangeStartDate(){
        console.log("Chosen start date: ",this.dateStart)
        let currentDate = new Date().toISOString().substr(0, 10)
        if(this.dateStart >= currentDate){
          this.setDateStart(this.dateStart);
          console.log("Date from store: ",this.$store.state.dateStart)
        }else{
          alert("Invalid date please choose again!")
          this.dateStart = new Date().toISOString().substr(0, 10)
        }
      },
      onChangeEndDate(){
          let currentDate = new Date().toISOString().substr(0, 10);
          console.log("Chosen end date", this.dateEnd);

          if(currentDate >= this.dateEnd || this.$store.state.dateStart >= this.dateEnd){
            alert('Invalid date please choose again!')
          }
      }
    }

}

</script>