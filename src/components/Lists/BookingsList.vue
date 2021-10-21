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
                            <div><span class="fs-6"> Check In Date: {{booking.checkIn}}</span></div>
                            <div><span class="fs-6"> Check Out Date: {{booking.checkOut}}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>

export default{
    name: 'Listingbookings',
    
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

span {
color: #248b7e;
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
</style>