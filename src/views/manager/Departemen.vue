<script setup>
import { ref } from 'vue';
import DepartemenTable from '../../components/DepartemenTable.vue';

const searchQuery = ref('');
</script>

<template>
    <div>
        <h1 class="text-2xl font-semibold">Kelola Data Departemen</h1>
        <p class="mb-5">Kelola data departemen di sini.</p>
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-5">
            <input type="text" v-model="searchQuery" placeholder="Cari departemen"
                class="px-4 py-2 border border-gray-300 rounded-md w-full lg:w-1/4 lg:mb-0 mb-5" />
            <router-link to="/manager/departemen/add"
                class="px-4 py-2 bg-white border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white">Tambah Departemen</router-link>
        </div>
        <!-- Tabel Departemen -->
        <DepartemenTable :search-query="searchQuery" />
    </div>
</template>