<template>
    <div>
        <Navbar />
        <Table class="mt-4em" :tableTitle="'Clients'" :tableHeaders="['fullname', 'email','phone']" :tableContents="[{'fullname':'oussema khlifi', 'email':'khoussemaa@gmail.com','phone':'555574426'}]"/>
        <Table class="mt-4em" :tableTitle="'Products'" :tableHeaders="['Product', 'price','discount']" :tableContents="[{'fullname':'t-shirt', 'email':'15','phone':'2'}]"/>
        <Table class="mt-4em" :tableTitle="'Commands'" :tableHeaders="['Client', 'Product','Quantity']" :tableContents="[{'fullname':'ahmed arous', 'email':'T-shirt','phone':'2'}]"/>

    </div>
</template>

<script>

import Navbar from './Navbar.vue'
import Table from './Table.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Table
  }
}
</script>

<style>
  .mt-4em {margin-top: 4em;}
</style>