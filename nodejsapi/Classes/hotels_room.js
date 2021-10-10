class hotels_room{
    constructor(ID, hotel_name, hotel_adress, hotel_city, hotel_zip_code, hotel_description_id, hotel_image,
        ID2, room_number, PricePerNight, room_description_ID, hotel_ID, RoomBooking_ID, room_image){

        this.ID = ID;
        this.hotel_name = hotel_name;
        this.hotel_adress = hotel_adress;
        this.hotel_city = hotel_city;
        this.hotel_zip_code = hotel_zip_code;
        this.hotel_description_id = hotel_description_id;
        this.hotel_image = hotel_image;
        this.ID2 = ID2;
        this.room_number = room_number;
        this.PricePerNight = PricePerNight;
        this.room_description_ID = room_description_ID;
        this.hotel_ID = hotel_ID;
        this.RoomBooking_ID = RoomBooking_ID;
        this.room_image = room_image;
    }
}

module.exports = {
    hotels_room
}