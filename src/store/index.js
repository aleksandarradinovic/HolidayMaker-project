import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    hotelList: [],
    roomList: [],
    hotelDescription: [],
    chosenDestination: '',
    roomId: null,
    hotelId: null,
    hotelDescriptionId: null,
    dateStart: null,
    dateEnd: null,
    numberOfpeople: null,
    numberOfBeds: null,
    eMail : null,
    bookingList: [],
    singleBooking: [],
    bookingId: null,
    avaiblelist: [],
  },
  
  mutations: {
    setAvaible(state, result){
        state.avaiblelist = result
    },
    setHotelList(state,result){
      state.hotelList = result;
    },
    setSingleBooking(state, result){
      state.singleBooking = result
    },
    setBookingId(state, result){
      state.bookingId = result
    },
    setBookingList(state,result){
      state.bookingList = result
    },
    setEmail(state, data){
      state.eMail = data;
    },
    setRoomList(state, result){
      state.roomList = result;
    },
    setRoomId(state, data){
      state.roomId = data;
    },
    setChosenDestination(state, data){
      state.chosenDestination = data;
    },
    setDateStart(state, data){
      state.dateStart = data;
    },
    setDateEnd(state, data){
      state.dateEnd = data;
    },
    setNumberOfPeople(state, data){
      state.numberOfpeople = data;
    },
    setNumberOfBeds(state, data){
      state.numberOfBeds = data;
    },
    setDescription(state, result){
      state.hotelDescription = result;
    }
  },

  actions: {
      async fetchHotels(context,chosenDestination){
      let result = await axios.get('http://localhost:888/api/' + chosenDestination)
      console.warn(result.data)
      context.commit("setHotelList", result.data[0])
    },
     async fetchRooms(context, id){
       let result = await axios.get('http://localhost:888/api/hotel',{
         params : {
           hotelId : id,
           number_of_beds : this.state.numberOfBeds,
           checkIn : this.state.dateStart,
           checkOut : this.state.dateEnd
         }
      })
      console.warn(result.data)
      context.commit("setRoomList", result.data[0])
    },
    async checkAvaible(context){
      let result = await axios.get('http://localhost:888/api/checkdate', {
        params: {
          ID : this.state.bookingId,
          room_id : this.state.roomId,
          checkIn : this.state.dateStart,
          checkOut : this.state.dateEnd,
      }
     })
     console.warn(result.data)
     context.commit("setAvaible", result.data[0])
   },
    async fetchHotelDescription(context, hotelDescriptionId){
      let result = await axios.get('http://localhost:888/api/description/' + hotelDescriptionId)
      console.warn(result.data)
      context.commit("setDescription", result.data[0])
    },
    async getBookingList(context, email){
      let result = await axios.get('http://localhost:888/api/bookings/' + email)
      console.warn(result.data)
      context.commit("setBookingList", result.data[0])
    },
    async getChosenBooking(context, bookingId){
      let result = await axios.get('http://localhost:888/api/singlebooking/' + bookingId)
      console.warn(result.data)
      context.commit("setSingleBooking", result.data[0])
      
    },
    async deleteBooking(context, bookingId){
      let result = await axios.delete('http://localhost:888/api/bookingsdelete/' + bookingId)
        console.warn(result.data)
        context.commit("setSingleBooking", result.data[0])
    }

  },
  
  modules: {
  }
})
