var Db = require('./dboperations');
var hotels = require('./Classes/hotels');
const dboperations = require('./dboperations');

// dboperations.getHotels().then(result => {
//     console.log(result);
// })

var express = require('express');
var cors = require('cors');
var app = express();
var router = express.Router();

// app.get('/', function (req, res) {
//     res.send('hello world')
//   })


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next)=>{
    console.log('middleware');
    next();
});

// router.route("/hotels").get((request,response)=> {
//     Db.getHotels().then(result => {
//         response.json(result[0]);
//     })
// })
router.route("/hotel/:ID").get((request,response)=> {
    Db.getRooms(request.params.ID).then(result => {
        response.json(result);
    })
})

router.route("/:hotel_city").get((request,response)=> {
    Db.getHotels(request.params.hotel_city).then(result => {
        response.json(result);
    })
})

router.route("/description/:hotel_description_id").get((request,response)=> {
    Db.getDescription(request.params.hotel_description_id).then(result => {
        response.json(result);
    })
})



var port = process.env.PORT || 888;
app.listen(port, () => 
console.log('Hotels API os running at ', port ));



