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
async function getRooms(hotelId) {
    try{
        let pool = await sql.connect(config);
        let rooms = await pool.request()
        .input('input_parameter', sql.Int, hotelId)
        .query("select * from room where hotel_ID = @input_parameter")
        return rooms.recordsets;
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

module.exports = {
    getHotels: getHotels,
    getRooms : getRooms,
    getDescription : getDescription
}