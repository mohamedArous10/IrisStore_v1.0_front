<template>
    <div>
        <div class="sidenav">
        <a href="#">Clients</a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
        <a href="#">Commands</a>
        </div>
    </div>
</template>


<script>
export default {
    name:'Navbar'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@500&family=Montserrat:ital@1&family=Poppins:wght@300;400;500;600;700&display=swap');

.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 180px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
          font-family: 'Montserrat', sans-serif;
font-weight: 800;
cursor:pointer;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color:orangered;
}
</style>