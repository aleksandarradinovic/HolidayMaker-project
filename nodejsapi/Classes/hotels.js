class hotels{
    constructor(ID, hotel_name, hotel_adress, hotel_city, hotel_zip_code, hotel_description_id, hotel_image, minprice){

        this.ID = ID;
        this.hotel_name = hotel_name;
        this.hotel_adress = hotel_adress;
        this.hotel_city = hotel_city;
        this.hotel_zip_code = hotel_zip_code;
        this.hotel_description_id = hotel_description_id;
        this.hotel_image = hotel_image;
        this.minprice = minprice;
    }
}

module.exports = {
    hotels
}