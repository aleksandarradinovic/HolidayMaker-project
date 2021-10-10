<template>
    <div>
        hotel room view
        <RoomList />
    </div>
</template>

<script>
import RoomList from '../components/RoomList.vue'
export default{
    name: 'Hotel-room',
    components: {
        RoomList,
    }

}

</script>