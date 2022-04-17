<template>
     <!-- navbar -->
    <nav class="navbar">

        <ul class="nav__ul">

             
                <img class="logo" src="@/assets/logo.png" alt="To_The_Next_Level">
            
            
            
            
                <div class="search_side">
                    <input type="text" placeholder="Search..">
                </div>
             

                  
                <div class="auth__area">
                    <button class="signup__btn"><a href="#team">log in</a></button>
                    <button class="signup__btn"><a href="#team">sign in</a></button>

                </div>
          

                
                   
                
        </ul>
    </nav>
</template>

<script>


export default {
  name: 'Navbar',
  
}
 
</script>

<style  >
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@500&family=Montserrat:ital@1&family=Poppins:wght@300;400;500;600;700&display=swap');

.navbar{
    background-color:#1a3969;

}
a{
    text-decoration:none;
    color:inherit;
}
.logo{
    width:5%;
    float:left;
    
}
.nav__ul{
    display:flex;
    flex-direction:row;
}

.search_side > input{
    border-radius:10px;
    width:45em;
    margin-left:14em;
    margin-top:1.5em;
    height:30px;
    border:0;
    font-family: 'Montserrat', sans-serif;
    font-weight:bold;

    }

.auth__area{
    
    justify-content:flex-end;
    width:40%;
    margin-left:15em;
    padding-left:4em;
    
}

.auth__area > button {
    margin-left:3em;
    margin-top:1.5em;
    height:30px;
    color: #1a3969;
    background-color:#ffff;
    width:80px;
    border-radius:4px;
    font-family: 'Montserrat', sans-serif;
    font-weight:bolder;
}
.auth__area > button:hover{
    background-color:#1a3969;
    color:white;
    

}


/*
.nav__ul > li:first-child{
    float:left;
}
.nav__ul > li:last-child{
    float:right;
}
*/
</style>
