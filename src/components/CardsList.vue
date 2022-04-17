<template>
    <div class="container">
        <div class="Cards">
            <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />
            <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />
            <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />
            <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />


             <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />
            <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />
            <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />
            <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />


             <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />
            <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />
            <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />
            <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />



             <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />
            <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />
            <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />
            <Cards :imgUrl="'https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913'" />

        </div>
    </div>
</template>

<script>
import Cards from './Cards.vue'

export default {
    name: 'CardsList',
    components: {
        Cards,
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        width:100%;
        margin-top: 5em;
    }

    .Cards {
        display: grid;
        justify-content: center;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 2em;
        grid-row-gap: 18em;

    }
</style>
