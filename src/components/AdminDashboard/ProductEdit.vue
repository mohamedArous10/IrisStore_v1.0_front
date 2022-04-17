<template>
    <div>
        <ProductForm :formTitle="'Insert Product'" :submitBtn="'update'" />
        <Button :textBtn="Delete" />
    </div>
</template>

<script>
import ProductForm from './ProductForm.vue'
import Button from '../Button.vue'

export default {
    name:'ProductUpdate',
    components: {
        ProductForm,
        Button
    }    
}
</script>

<style scoped>

</style>