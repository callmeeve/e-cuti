<script setup>
import { ref, computed } from 'vue';
import { ChevronBackOutline, ChevronForwardOutline } from '@vicons/ionicons5';

const data = ref([
    {
        id: 1,
        nama: 'Jane Cooper',
        email: 'jane@example.com',
        departemen: 'Regional Paradigm Technician',
        status: 'Aktif',
    },
    {
        id: 2,
        nama: 'Cody Fisher',
        email: 'cody@example.com',
        departemen: 'Product Directives Officer',
        status: 'Aktif',
    },
    {
        id: 3,
        nama: 'Esther Howard',
        email: 'esther@example.com',
        departemen: 'Forward Response Developer',
        status: 'Cuti',
    },
    {
        id: 4,
        nama: 'Jenny Wilson',
        email: 'jenny@example.com',
        departemen: 'Central Security Manager',
        status: 'Cuti',
    },
    {
        id: 5,
        nama: 'Kristin Watson',
        email: 'kristin@example.com',
        departemen: 'Lead Implementation Liaison',
        status: 'Aktif',
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
    <!-- Table component -->
    <div class="flex flex-col mt-5">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow-sm overflow-hidden border border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nama</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Departemen</th>
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
                                    <div class="flex flex-col">
                                        <div class="text-sm font-medium text-gray-900">
                                            {{ item.nama }}
                                        </div>
                                        <div class="text-sm text-gray-500">
                                            {{ item.email }}
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">{{ item.departemen }}</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full' :class="{
                                        'bg-green-100 text-green-800': item.status === 'Aktif',
                                        'bg-red-100 text-red-800': item.status === 'Cuti',
                                    }">
                                        {{ item.status }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- /Table component -->

    <!-- Pagination -->
    <div class="flex items-center justify-between mt-5">
        <div class="text-center text-sm text-gray-500">
            Halaman {{ currentPage }} dari {{ totalPages }}
        </div>
        <div class="flex items-center gap-x-2">
            <ChevronBackOutline @click="setPage(currentPage - 1)" :disabled="currentPage === 1"
                class="w-4 h-4 text-gray-500 cursor-pointer" />
            <ChevronForwardOutline @click="setPage(currentPage + 1)" :disabled="currentPage === totalPages"
                class="w-4 h-4 text-gray-500 cursor-pointer" />
        </div>

    </div>
    <!-- /Pagination -->
</template>