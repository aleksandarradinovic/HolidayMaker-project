var Db = require('./dboperations');
var hotels = require('./Classes/hotels');
const dboperations = require('./dboperations');


var express = require('express');
var cors = require('cors');
const { Int } = require('mssql');
var app = express();
var router = express.Router();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next)=>{
    console.log('middleware');
    next();
});

router.route("/hotel").get((request,response)=> {
    
    let hotelId = request.query.hotelId;
    let checkIn = request.query.checkIn;
    let checkOut = request.query.checkOut;

    Db.getRooms(hotelId, checkIn, checkOut).then(result => {
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

router.route("/description/:hotel_description_id").get((request,response)=> {
    Db.getDescription(request.params.hotel_description_id).then(result => {
        response.json(result);
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



