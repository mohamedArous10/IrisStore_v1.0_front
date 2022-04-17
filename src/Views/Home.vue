<template>
    
    <div>

    <Navbar />
    <Header />
    <CardsList />
  
 </div>
</template>

<script>
import Navbar from './components/Navbar'
import Header from './components/Header'
import CardsList from '../components/CardsList.vue'
export default {
    name: 'Home',
  components : {
   
     Navbar,
     Header,
     
    CardsList,
   } ,
}
 
</script>