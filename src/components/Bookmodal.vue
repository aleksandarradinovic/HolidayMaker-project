<template>
    <div class="modal-backdrop">
        <div class="modal">
            <section class="modal-body">
                <slot> 
                  <ul>
                    <li v-for="error in errors" :key="error.id">{{error}}</li>
                  </ul>
                    <div class="mb-3">
                      <label for="guestEmailInput" class="form-label"> Your Email address if you want to save your booking</label>
                      <input type="email" class="form-control" v-model="email" id="guestEmailInput" placeholder="example@gmail.com">
                    </div>
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
                    
                   <button
                type="button"
                class="btn-green mt-2"
                @click="close"
                >
                Close
                </button>
                </slot>
            </section>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router/index'
export default{
    name: 'Bookmodal',
    data(){
      return {
        email: '',
        errors: [],
      }
    },
    
    methods: {
      close() {
        this.$emit('close');
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
}
</script>

<style scooped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(139, 141, 238, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .modal {
      max-width: 500px;
      max-height: 500px;
    background: #daf3edcc;
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


  .modal-footer {
    border-top: 1px solid #eeeeee;
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
</style>