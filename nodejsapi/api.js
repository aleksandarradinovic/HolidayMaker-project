var Db = require('./dboperations');
var hotels = require('./Classes/hotels');
const dboperations = require('./dboperations');


var express = require('express');
var cors = require('cors');
const { Int } = require('mssql');
const { request, response } = require('express');
var app = express();
var router = express.Router();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next)=>{
    console.log('request is done');
    next();
});

router.route("/hotel").get((request,response)=> {

    let hotelId = request.query.hotelId;
    let number_of_beds = request.query.number_of_beds;
    let checkIn = request.query.checkIn;
    let checkOut = request.query.checkOut;

    Db.getRooms(hotelId, checkIn, checkOut, number_of_beds).then(result => {
        response.json(result);
    })
})

router.route("/checkdate").get((request,response)=> {

    let ID = request.query.ID;
    let room_id = request.query.room_id;
    let checkIn = request.query.checkIn;
    let checkOut = request.query.checkOut;

    Db.checkAvaible(ID, room_id, checkIn, checkOut).then(result => {
        response.json(result);
    })
})

router.route("/:hotel_city").get((request,response)=> {
   
    Db.getHotels(request.params.hotel_city).then(result => {
        response.json(result);
    })
})

router.route("/bookings/:email").get((request,response)=> {
   
    Db.getBookingList(request.params.email).then(result => {
        response.json(result);
    })
})

router.route("/bookingsdelete/:bookingId").delete((request,response)=> {
   
    Db.deleteBooking(request.params.bookingId).then(result => {
        response.json(result);
    })
})

router.route("/description/:hotel_description_id").get((request,response)=> {
    Db.getDescription(request.params.hotel_description_id).then(result => {
        response.json(result);
    })
})

router.route("/singlebooking/:bookingId").get((request, response)=>{
    Db.getSingleBooking(request.params.bookingId).then(result =>{
        response.json(result);
    })
})

router.route("/modifiedbooking").put((request,response)=> {

    let booking = {...request.body}

    Db.modifiedBooking(booking).then(result => {
        response.status(201).json(result)
    })
})

router.route("/bookings").post((request,response)=> {

    let bookings = {...request.body}

    Db.addBooking(bookings).then(result => {
        response.status(201).json(result)
    })
})

var port = process.env.PORT || 888;
app.listen(port, () => 
console.log('Hotels API os running at ', port ));



