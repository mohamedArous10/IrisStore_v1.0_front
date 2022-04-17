<template>
    <div>
        <Navbar />
        <CategoryForm :formTitle="'Insert Category'" :submitBtn="'Insert'" />
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import CategoryForm from './CategoryForm.vue'

export default {
    name:'CategoryInsert',
    components: {
        Navbar,
        CategoryForm
    }
}
</script>

<style scoped>

</style>