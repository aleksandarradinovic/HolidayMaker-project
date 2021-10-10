import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    hotelList: [],
    roomList: [],
    hotelDescription: [],
    chosenDestination: '',
    hotelId: Number,
    hotelDescriptionId: Number,
    dateStart: '',
    dateEnd: '',
    numberOfpeople: Number,
    numberOfRooms: Number,
  },
  
  mutations: {
    setHotelList(state,result){
      state.hotelList = result;
    },
    setRoomList(state, result){
      state.roomList = result;
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
    setNumberOfRooms(state, data){
      state.numberOfRooms = data;
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
    async fetchRooms(context, hotelId){
      let result = await axios.get('http://localhost:888/api/hotel/' + hotelId)
      console.warn(result.data)
      context.commit("setRoomList", result.data[0])
    },
    async fetchHotelDescription(context, hotelDescriptionId){
      let result = await axios.get('http://localhost:888/api/description/' + hotelDescriptionId)
      console.warn(result.data)
      context.commit("setDescription", result.data[0])
    },
  },
  
  modules: {

  }
})
