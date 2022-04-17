<template>
    <div>
        <Navbar />
        <CategoryForm :formTitle="'Update Category'" :submitBtn="'update'" />
        <Button :textBtn="'Delete'" />
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import CategoryForm from './CategoryForm.vue'
import Button from '../Button.vue'

export default {
    name:'CategoryEdit',
    components: {
        Navbar,
        CategoryForm,
        Button
    }
}
</script>

<style scoped>

</style>