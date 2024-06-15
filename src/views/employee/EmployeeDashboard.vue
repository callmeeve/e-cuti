<script setup>
import { ref, computed } from 'vue';
import { ChevronBackOutline, ChevronForwardOutline } from '@vicons/ionicons5';

const data = ref([
    {
        id: 1,
        tanggalPengajuan: '2021-10-01',
        tanggalMulaiCuti: '2021-10-10',
        tanggalSelesaiCuti: '2021-10-15',
        status: 'Disetujui',
    },
    {
        id: 2,
        tanggalPengajuan: '2021-10-02',
        tanggalMulaiCuti: '2021-10-20',
        tanggalSelesaiCuti: '2021-10-25',
        status: 'Ditolak',
    },
    {
        id: 3,
        tanggalPengajuan: '2021-10-03',
        tanggalMulaiCuti: '2021-10-30',
        tanggalSelesaiCuti: '2021-11-05',
        status: 'Menunggu Persetujuan',
    },
    {
        id: 4,
        tanggalPengajuan: '2021-10-04',
        tanggalMulaiCuti: '2021-11-10',
        tanggalSelesaiCuti: '2021-11-15',
        status: 'Menunggu Persetujuan',
    },
    {
        id: 5,
        tanggalPengajuan: '2021-10-05',
        tanggalMulaiCuti: '2021-11-20',
        tanggalSelesaiCuti: '2021-11-25',
        status: 'Menunggu Persetujuan',
    },
]);

const currentPage = ref(1);
const itemsPerPage = ref(3);

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);
const endIndex = computed(() => startIndex.value + itemsPerPage.value);

const paginatedData = computed(() => data.value.slice(startIndex.value, endIndex.value));

const totalPages = computed(() => Math.ceil(data.value.length / itemsPerPage.value));

const setPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};
</script>

<template>
    <h1 class="text-2xl font-semibold">Employee Dashboard</h1>
    <p class="mb-5">Selamat datang di E-Cuti Pegawai. Silakan pilih menu yang tersedia.</p>
    <!--Tabel Cuti yang berisi tanggal pengajuan untuk mengetahui cuti disetujui atau tidak-->
    <div class="flex flex-col mt-5">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow-sm overflow-hidden border border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tanggal Pengajuan</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tanggal Mulai Cuti</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tanggal Selesai Cuti</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="item in paginatedData" :key="item.id">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm font-medium text-gray-900">
                                        {{ item.tanggalPengajuan }}
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">{{ item.tanggalMulaiCuti }}</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">{{ item.tanggalSelesaiCuti }}</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">{{ item.status }}</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="mt-4 flex justify-end">
                    <button @click="setPage(currentPage - 1)" :disabled="currentPage === 1"
                        class="px-3 py-1.5 bg-indigo-500 rounded-md">
                        <ChevronBackOutline class="w-6 h-6 text-gray-200" />
                    </button>
                    <button @click="setPage(currentPage + 1)" :disabled="currentPage === totalPages"
                        class="px-3 py-1.5 bg-indigo-500 rounded-md ml-2">
                        <ChevronForwardOutline class="w-6 h-6 text-gray-200" />
                    </button>
                </div>  
            </div>
        </div>
    </div>
    
</template>