<template>
    <div>
        <ProductForm :formTitle="'Insert Product'" :submitBtn="'Insert'" />
    </div>
</template>

<script>
import ProductForm from './ProductForm.vue'
import Button from '../Button.vue'

export default {
    name:'ProductInsert',
    components: {
        ProductForm,
        Button
    }    
}
</script>

<style scoped>

</style>