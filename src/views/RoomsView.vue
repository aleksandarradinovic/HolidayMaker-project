<template>
    <div>
        <button class="redirectToHotels" @click="back()">Back to hotels</button>
        <RoomList />
    </div>
</template>

<script>
import RoomList from '../components/Lists/RoomList.vue'
export default{
    name: 'Hotel-room',
    components: {
        RoomList,
    },
    methods: {
        back(){
            this.$router.go(-1)
        },
    },

}

</script>

<style scoped>

.redirectToHotels{
background-color: rgba(255, 255, 255, 0.5);
  margin-top: 30px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border: 1px solid lightblue;
}

.redirectToHotels:hover{
    color: rgb(84, 196, 186)
}

</style>