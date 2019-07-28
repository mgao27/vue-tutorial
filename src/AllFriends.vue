<template>
    <div id="all-friends">
        <h2>All Friends</h2>
        <div v-for="(friend, index) in friends" :key="index"> <!--v-bind makes the index the key-->
            <span @click="unfriend(friend.name)">{{ friend.name }}</span>
        </div>
    </div>
</template>


<script>
export default {
    name: 'AllFriends',
    props: ['friends'],  //receive the props from App.vue
    data() {
        return{
           
        }
    },
    methods: {
        unfriend(name){
            this.$emit('delete',{ name: name})
        }
    }
}
</script>

<style>

</style>
