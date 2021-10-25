var config = require('./dbconfig');
const sql = require('mssql');


async function getHotels(chosenDestination) {
    try{
        let pool = await sql.connect(config);
        let hotels = await pool.request()
        .input('input_parameter', sql.VarChar, chosenDestination)
        .query("SELECT hotels.ID, hotels.hotel_name, hotels.hotel_description_id ,hotels.hotel_city,hotels.hotel_adress, hotels.hotel_zip_code, hotels.hotel_image, min(room.pricePerNight) as minprice from hotels, room where hotels.hotel_city = @input_parameter and hotels.ID = room.hotel_ID group by hotels.ID, hotels.hotel_name, hotels.hotel_description_id, hotels.hotel_city,hotels.hotel_adress, hotels.hotel_zip_code, hotels.hotel_image")
        return hotels.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function deleteBooking(bookingId) {
    try{
        let pool = await sql.connect(config);
        let bookingdeleted = await pool.request()
        .input('input_parameter', sql.Int, bookingId)
        .query("delete from RoomBooking where ID = @input_parameter")
        return bookingdeleted.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getBookingList(email) {
    try{
        let pool = await sql.connect(config);
        let bookingList = await pool.request()
        .input('eMail', sql.NVarChar, email)
        .query("select * from RoomBooking where email = @eMail" )
        return bookingList.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getSingleBooking(bookingId) {
    try{
        let pool = await sql.connect(config);
        let singleBooking = await pool.request()
        .input('bookingId', sql.Int, bookingId)
        .query("select * from RoomBooking where ID = @bookingId" )
        return singleBooking.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getRooms(hotelId, checkIn, checkOut, number_of_beds) {
    try{
        let pool = await sql.connect(config);
        let roomsP = await pool.request()
        .input('hotelId', sql.Int, hotelId)
        .input('checkIn', sql.DateTime, checkIn)
        .input('checkOut', sql.DateTime, checkOut)
        .input('bedNumber', sql.Int, number_of_beds)
        .query("SELECT * FROM room where  hotel_ID = @hotelId AND ID NOT IN (select room_id from RoomBooking WHERE checkIn  BETWEEN @checkIn AND @checkOut AND checkOut BETWEEN @checkIn AND @checkOut)")
        return roomsP.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function checkAvaible(ID, room_id, checkIn, checkOut) {
    try{
        let pool = await sql.connect(config);
        let avaiableRoom = await pool.request()
        .input('bookingId', sql.Int, ID)
        .input('roomId', sql.Int, room_id)
        .input('checkIn', sql.DateTime, checkIn)
        .input('checkOut', sql.DateTime, checkOut)
        .query(" SELECT * FROM RoomBooking where room_id = @roomId AND checkIn <= @checkOut and checkOut >= @checkIn  AND ID != @bookingId")
        return avaiableRoom.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getDescription(hotelDescriptionId) {
    try{
        let pool = await sql.connect(config);
        let hotelDescription = await pool.request()
        .input('input_parameter', sql.Int, hotelDescriptionId)
        .query("select * from hotel_description where ID = @input_parameter")
        return hotelDescription.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function addBooking(bookings) {
    try{
        let pool = await sql.connect(config);
        let insertBooking = await pool.request()
        .input('checkIn', sql.DateTime, bookings.checkIn)
        .input('checkOut', sql.DateTime, bookings.checkOut)
        .input('room_id', sql.Int, bookings.room_id)
        .input('email', sql.VarChar, bookings.email)
        .input('number_of_people', sql.Int, bookings.number_of_people)
        .execute("INSERTDATA");
        return insertBooking.recordsets
    }
    catch (error) {
        console.log(error);
    }
}

async function modifiedBooking(booking) {
    try{
        let pool = await sql.connect(config);
        let BookingModified = await pool.request()
        .input('bookingId', sql.Int, booking.ID)
        .input('checkIn', sql.DateTime, booking.checkIn)
        .input('checkOut', sql.DateTime, booking.checkOut)
        .input('room_id', sql.Int, booking.room_id)
        .input('email', sql.VarChar, booking.email)
        .input('number_of_people', sql.Int, booking.number_of_people)
        .query('UPDATE RoomBooking SET room_id = @room_id, number_of_people = @number_of_people, email = @email, checkIn = @checkIn, checkOut = @checkOut WHERE ID = @bookingId' )
        return BookingModified.recordsets
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = {
    getHotels: getHotels,
    getRooms : getRooms,
    getDescription : getDescription,
    getBookingList : getBookingList,
    addBooking : addBooking,
    getSingleBooking : getSingleBooking,
    deleteBooking : deleteBooking,
    modifiedBooking : modifiedBooking,
    checkAvaible : checkAvaible,
}