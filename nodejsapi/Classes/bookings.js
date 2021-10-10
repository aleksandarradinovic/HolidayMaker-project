class Bookings {
    constructor(Id, RoomID, CheckInDate, CheckOutDate, CustomerEmail){
        this.Id = Id;
        this.RoomID = RoomID;
        this.CheckInDate = CheckInDate;
        this.CheckOutDate = CheckOutDate;
        this.CustomerEmail = CustomerEmail;
    }
}

module.exports = Bookings;