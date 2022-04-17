<template>
    <div class="container">
        <form>
                <h1> {{formTitle}} </h1>
                 <Form  :placeHolder="'product name'"  class="inputWidth" :inputType="'text'" />
                  <Form  :placeHolder="'product ref'"  class="inputWidth" :inputType="'text'" />
                  <Form  :placeHolder="'product price'"  class="inputWidth" :inputType="'number'" />
                  <Form  :placeHolder="'product discount'"  class="inputWidth" :inputType="'number'" />
                  <Form  :placeHolder="'product img'"  class="inputWidth" :inputType="'file'" />
                  <Form  :placeHolder="'product category'"  class="inputWidth" :inputType="'number'" />

                <Button :textBtn=submitBtn style="width:192%" />
        </form>
    </div>
</template>

<script>

import Form from './Form.vue'
import Button from './Button'

export default {
    name: 'ProductForm',
    props: {
        formTitle: String,
        submitBtn: String
    },
    components: {
        Form,
        Button
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@500&family=Montserrat:ital@1&family=Poppins:wght@300;400;500;600;700&display=swap');

 form {
     padding:12em;
 }


.container {
                font-family: 'Montserrat', sans-serif;

    display: flex;
    justify-content: center;
    box-shadow: 3px -1px 32px 7px rgba(0,0,0,0.2);
        -webkit-box-shadow: 3px -1px 32px 7px rgba(0,0,0,0.2);
        -moz-box-shadow: 3px -1px 32px 7px rgba(0,0,0,0.2);
}

 .inputWidth {
     width:25em;
 }


</style>