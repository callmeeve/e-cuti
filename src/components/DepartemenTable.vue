<script setup>
import { ref, computed } from 'vue';
import { ChevronBackOutline, ChevronForwardOutline } from '@vicons/ionicons5';

// Deklarasi props
const props = defineProps({
  searchQuery: String
});

const data = ref([
    { id: 1, nama: 'HR', deskripsi: 'Human Resources' },
    { id: 2, nama: 'Engineering', deskripsi: 'Engineering Department' },
    { id: 3, nama: 'Sales', deskripsi: 'Sales Department' },
    { id: 4, nama: 'Marketing', deskripsi: 'Marketing Department' },
    { id: 5, nama: 'Finance', deskripsi: 'Finance Department' },
]);

const currentPage = ref(1);
const itemsPerPage = ref(3);

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);
const endIndex = computed(() => startIndex.value + itemsPerPage.value);

// Buat computed property untuk data yang difilter
const filteredData = computed(() => {
  if (!props.searchQuery) {
    return data.value;
  }
  return data.value.filter(item =>
    item.nama.toLowerCase().includes(props.searchQuery.toLowerCase())
  );
});

const paginatedData = computed(() => filteredData.value.slice(startIndex.value, endIndex.value));

const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage.value));

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
                                    Nama Departemen</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Deskripsi</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="item in paginatedData" :key="item.id">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm font-medium text-gray-900">
                                        {{ item.nama }}
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">{{ item.deskripsi }}</div>
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
