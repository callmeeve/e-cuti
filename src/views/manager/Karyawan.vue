<script setup>
import { ref } from 'vue';
import CutiTable from '../../components/CutiTable.vue';

const searchQuery = ref('');

</script>

<template>
    <div>
        <h1 class="text-2xl font-semibold">Karyawan</h1>
        <p class="mb-5">Kelola data karyawan dan cuti karyawan di sini.</p>
        <div class="flex items-center justify-end gap-x-2 mt-5">
            <router-link to="/manager/karyawan/add" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Tambah
                Karyawan</router-link>
            <router-link to="/manager/karyawan/cuti"
                class="px-4 py-2 bg-white border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white">Kelola
                Cuti</router-link>
        </div>
        <!-- Tambahkan search bar -->
        <div class="mt-5">
            <input
                type="text"
                v-model="searchQuery"
                placeholder="Cari nama karyawan"
                class="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
        </div>
        <!-- Berikan prop search-query ke CutiTable -->
        <CutiTable :search-query="searchQuery" />
    </div>
</template>