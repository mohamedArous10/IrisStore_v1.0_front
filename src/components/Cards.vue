
<template>
    <div class="card">
        <img :src=imgUrl alt="img" />
        
        <div class="description">
            <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Inventore voluptate, laborum, ipsa, sapiente voluptatum 
            </p>
        <p class="price">15D</p>
        <button class="buy_btn">Buy</button>
    </div>

    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        imgUrl: String,
    }
    
}
</script>

<style  scoped>

@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500&family=Lato:wght@900&family=Lobster&family=Montserrat:wght@500&family=Pattaya&display=swap');


    .card {
        width:15em;
        height:15em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top:3em;
        box-shadow: 3px -1px 32px 7px rgba(0,0,0,0.2);
        -webkit-box-shadow: 3px -1px 32px 7px rgba(0,0,0,0.2);
        -moz-box-shadow: 3px -1px 32px 7px rgba(0,0,0,0.2);
    }

    .card > img {
        width:15em;
        height:14em;
        background-color:rgb(182, 167, 167);
    }

    .description {
        background-color:whitesmoke;
        text-align: center;
        font-family: 'Cairo', sans-serif;

    }

    .text {
        text-align: center;
        font-size:.8em;
        color:black;
        margin-top:2.2em;
        padding:1em;
    }

    
       .price {
            font-weight: 700;
            font-size:.9em;
            text-align: center;
        }

        .buy_btn {
            border:0px;
            background-color:rgb(22, 21, 21);
            border-radius: 4px;
            color:white;
            text-align: center;
            width:15em;
            height: 2em;
            cursor:pointer;
            font-weight: 700;
            margin-bottom:2em;
        }

        .buy_btn:hover {
            background-color:rgb(161, 161, 161);
            color:black;
        }


</style>