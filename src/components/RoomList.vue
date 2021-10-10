<template>
<div class="container my-sm-5 p-0 bg-sec-light">
    <div id="content">
            <div class="bg-white p-2 border" id="hotels">
                <div class="hotel py-2 px-2 pb-4 border-bottom" :key="room.ID" v-for="room in this.$store.state.roomList">
                    <div class="row">
                        <div class="col-lg-3"> <img :src="room.room_image" > </div>
                        <div class="col-lg-9">
                            <div class="d-md-flex align-items-md-center">
                                <div class="name">{{room.room_number}}</div>
                                <div class="ms-auto code text-uppercase">SEK: {{room.pricePerNight}}</div>
                            </div>
                            <div class="rating"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star"></span> <!-- Book now Enquiry -->
                            </div>
                            <div class="d-flex flex-column tags pt-1">
                                <div><span class="fas fa-comment-dollar fs-5"></span>  </div>
                                <div><span class="fas fa-receipt"></span> </div>
                                <div><span class="fas fa-concierge-bell"></span></div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="d-flex justify-content-end mt-1">
                        <button @click="getRoomList(hotel.ID)" class="btn btn-primary text-uppercase">Book Now</button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: 'RoomList'
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