<template>
    <div>
    <div class="h-full">
        <!-- Table -->
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">{{tableTitle}}</h2>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                          
                            <tr>
                                <th  v-for="(tableHeader, index) in tableHeaders" class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{tableHeader}}</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr  v-for="item in tableContents">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{{item.fullname}}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{{item.email}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">{{item.phone}}</div>
                                </td>
                              
                            </tr>
                          
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


    </div>
</template>

<script>
export default {
        name:'Table',
        props: {
            tableTitle: String,
            tableHeaders: Array,
            tableContents: Array
        }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@500&family=Montserrat:ital@1&family=Poppins:wght@300;400;500;600;700&display=swap');

section {
            font-family: 'Montserrat', sans-serif;

}
</style>