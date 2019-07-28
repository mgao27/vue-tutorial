<template> <!--.vue is a Component file, splits up app into diff components -->
 <!-- use template tag b/c its the root component-->
 <div id="app"> <!--one root element allowed inside template tag, which is this div-->
    <h1>{{ title }}</h1>
    <Navbar /> <!--this is the nested component Navbar.vue-->
    <AllFriends :friends="friends" @delete="deleteFriend" /> <!--vbind friends from data, passes prop to child components-->
    <!--@ is same as v-on-->
    <OnlineFriends :friends="friends" /> <!--former=the prop on child comp file, latter is the friends on this current file-->
 </div>
</template>

<script>
import Navbar from './Navbar'  //import Navbar.vue component
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'


export default {  //exported into the 'main.js' file 
  name: 'app',
  components: {
    Navbar: Navbar, //the latter represents the Navbar we just imported 
    OnlineFriends,
    AllFriends
  },
  data () { //using a function ensures each component instance has its own data object not shared by other instances
    return {
      title: 'my first App',
      friends:[  //define here so all nested components can draw from one spot
        {name: 'Mario', online: true},
        {name: 'Luigi', online: false},
        {name: 'Toad', online: true},
        {name: 'Bowser', online: false}
      ]
    }
  },
  methods:{
    deleteFriend(payload){
      console.log(payload)
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
    }
  } 
}
</script>

<style>

h1{
  color:#444;
  text-align:center;
  font-weight: normal;
}

</style>
