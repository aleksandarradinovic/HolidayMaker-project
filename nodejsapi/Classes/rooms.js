class rooms {
    constructor( ID, room_number, PricePerNight, room_description_ID, hotel_ID, RoomBooking_ID, room_image){
        
        this.ID = ID;
        this.room_number = room_number;
        this.PricePerNight = PricePerNight;
        this.room_description_ID = room_description_ID;
        this.hotel_ID = hotel_ID;
        this.RoomBooking_ID = RoomBooking_ID;
        this.room_image = room_image;
    }
}

module.exports = rooms;