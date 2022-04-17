<template>
    <div>
        <button class="btn_command">{{textBtn}}</button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        textBtn: String
    }
}
</script>


<style scoped>
    .btn_command {
        border:0;
        border-radius: 4px;
        background-color:#1a3969;
        color:white;
        font-family: 'Montserrat', sans-serif;
        height: 4em;
        width:52%;
        cursor:pointer;

    }

    .btn_command:hover {
        background-color:orangered;
        color: white;
    }
</style>