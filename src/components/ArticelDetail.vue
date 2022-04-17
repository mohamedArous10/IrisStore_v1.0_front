<template>
<div class="product">
 <div class="img_side">

    <img class="image" src="@/assets/cappuche.png" alt="" >

 </div>

 <div class="text_side">
      <h1> Product name</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> Natus numquam libero distinctio eaque facilis, <br>
      voluptatem facere vitae, corporis culpa hic, <br>sint rem quia repellat commodi! Magni molestiae ab quis obcaecati!<br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> Natus numquam libero distinctio eaque facilis, <br>
      voluptatem facere vitae, corporis culpa hic, <br>sint rem quia repellat commodi! Magni molestiae ab quis obcaecati!</p>
      <div class="position">
       <div class="auth__area">
                    <button class="signup__btn">Comander</button>
        </div>

          <div class="inpute_side">
             <input class="inpute" type="number" placeholder="Quantity" >
          </div>
      </div>
 </div>

</div>
</template>

<script>



export default {
  name: 'ArticelDetail',
   
}
 
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@500&family=Montserrat:ital@1&family=Poppins:wght@300;400;500;600;700&display=swap');

.img_side{
    width:50%;
    position:absolute;
    
}
.text_side{
    float:right;
    width:55%;
    color:#1a3969;
    position:relative;
    margin-top:7em;
    font-family: 'Montserrat', sans-serif;
    

}
.text_side > h1{
  font-size: 5em;
}
.text_side > p{
  padding-top: 50px;
  font-size: 1.3em;
}
.inpute_side{
  margin-left: -18.25em;
  margin-top: 1.5em;
}
.inpute {
   border: 0px;
   border-radius: 4px;
   background-color: #1a3969;
   opacity: 0.7;
   color: #fff;
   height: 37px;
  width: 19.85em;
  margin-top: 0;
  padding-top: 0px;
}
.inpute::placeholder{
  color:#fff;
  padding-left: 100px;
}
.signup__btn{
  
   border-radius: 4px;
   background-color: #1a3969;
   opacity: 0.85;
   color: #fff;
   height: 37px;
  width: 20em;
  margin-top: 5em;
}
.auth__area{
  margin-left: 5em;
  
}

.position{
  display: flex;
  flex-direction: row;
}

</style>
