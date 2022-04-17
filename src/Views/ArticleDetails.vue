<template>
    
    <div>

    <Navbar />
    <ArticleDetail />
    
  
 </div>
</template>

<script>
import Navbar from './components/Navbar'
import ArticleDetail from './components/ArticleDetail'

export default {
    name: 'ArticleDetails',
  components : {
   
     Navbar,
     ArticleDetail,
   } ,
}
 
</script>