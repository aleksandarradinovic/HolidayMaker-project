class rooms {
    constructor( ID, room_number, PricePerNight, extra_beds, hotel_ID, RoomBooking_ID, room_image, kingSizeBed){
        
        this.ID = ID;
        this.room_number = room_number;
        this.PricePerNight = PricePerNight;
        this.hotel_ID = hotel_ID;
        this.extra_beds = extra_beds;
        this.RoomBooking_ID = RoomBooking_ID;
        this.room_image = room_image;
        this.kingSizeBed = kingSizeBed;
    }
}

module.exports = rooms;