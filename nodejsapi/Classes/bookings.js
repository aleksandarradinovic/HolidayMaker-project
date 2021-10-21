class bookings {
    constructor(checkIn_date, checkOut_date, guest_id, room_id){
        
        this.checkIn_date = checkIn_date;
        this.checkOut_date = checkOut_date;
        this.guest_id = guest_id;
        this.room_id = room_id;
    }
}

module.exports = bookings;