<template>
    <div>
        <form class="form-group">
            <input class="form-control" :placeholder=placeHolder  :type=inputType />
   
           
        </form>
    </div>
</template>

<script>
export default {
    name:'Form',
    props: {
        placeHolder: String,
        inputType: String,
        
    }
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@500&family=Montserrat:ital@1&family=Poppins:wght@300;400;500;600;700&display=swap');
    .form-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width:100%;
    }

    .form-control {
        
        border-radius: 4px;
        border:none;
        background-color: rgba(172, 172, 172, 0.325);
        padding:1.2em;
        margin-bottom:1.2em;
    }

    .btn_command {
        border:0;
        border-radius: 4px;
        background-color:#1a3969;
        color:white;
        font-family: 'Montserrat', sans-serif;
        height: 4em;
        width:52%;

    }
    input {
        outline:none;
    }
</style>