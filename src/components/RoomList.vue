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
                        <div class="d-flex justify-content-end mt-1">
                        <button
                        style="color: white;"
                        type="button"
                        class="btn btn-dark text-uppercase"
                        @click="showModal(room.ID)"
                        >
                        book room
                        </button>
                                            <Bookmodal
                        v-show="isModalVisible"
                        @close="closeModalb()"
                            
                        />
                    </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bookmodal from './Bookmodal.vue'
import { mapMutations } from "vuex";

export default{
    name: 'RoomList',
    components:{
        Bookmodal,
    },
    data(){
        return{
            isModalVisible: false,
        }
    },
    methods: {
        closeModalb(){
          this.isModalVisible = false;
      },
       ...mapMutations(['setRoomId']),
       showModal(id){
           this.setRoomId(id)
          this.isModalVisible = true;
       }
        // book(){
        //     console.log("Number of rooms from store", this.$store.state.numberOfBeds)
        //   console.log("Number of people from store",this.$store.state.numberOfpeople);
        // }
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