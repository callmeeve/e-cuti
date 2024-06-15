<script setup>
import KaryawanTable from '../../components/KaryawanTable.vue';
import Chart from '../../components/Chart.vue';
import ChartTwo from '../../components/ChartTwo.vue';
</script>

<template>
    <h1 class="text-2xl font-semibold">Manager Dashboard</h1>
    <p class="mb-5">Selamat datang di E-Cuti Pegawai. Silakan pilih menu yang tersedia.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-white p-4 border rounded-lg shadow-sm">
            <h2 class="text-lg font-semibold">Total Karyawan</h2>
            <p class="text-3xl font-bold">10</p>
        </div>
        <div class="bg-white p-4 border rounded-lg shadow-sm">
            <h2 class="text-lg font-semibold">Total Departemen</h2>
            <p class="text-3xl font-bold">5</p>
        </div>
        <div class="bg-white p-4 border rounded-lg shadow-sm">
            <h2 class="text-lg font-semibold">Total Cuti</h2>
            <p class="text-3xl font-bold">2</p>
        </div>
    </div>
    <div class="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <Chart />
        <ChartTwo />
        <div class="col-span-12 xl:col-span-8">
            <KaryawanTable />
        </div>
    </div>
</template>