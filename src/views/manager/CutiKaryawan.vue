<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Deklarasi variabel reaktif
const nama = ref('');
const startDate = ref('');
const endDate = ref('');
const totalCuti = ref('');
const keterangan = ref('');
const status = ref('');


const router = useRouter();

const addCutiKaryawan = () => {
    console.log(nama.value, startDate.value, endDate.value, totalCuti.value, keterangan.value, status.value);
    nama.value = '';
    startDate.value = '';
    endDate.value = '';
    totalCuti.value = '';
    keterangan.value = '';
    status.value = '';

    alert('Data Cuti Karyawan berhasil ditambahkan!');

    // Redirect to Karyawan page
    router.push('/manager/karyawan');
};
</script>

<template>
    <div>
        <h1 class="text-2xl font-semibold">Kelola Cuti Karyawan</h1>
        <form @submit.prevent="addCutiKaryawan">
            <div class="space-y-12">
                <div class="border-b border-gray-900/10 pb-12">
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-6">
                            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nama Karyawan</label>
                            <div class="mt-2">
                                <select id="name" name="name" v-model="nama"
                                    class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option value="Jane Cooper">Jane Cooper</option>
                                    <option value="Cody Fisher">Cody Fisher</option>
                                    <option value="Esther Howard">Esther Howard</option>
                                </select>
                            </div>
                        </div>
                        <div class="sm:col-span-6">
                            <label for="date" class="block text-sm font-medium leading-6 text-gray-900">Tanggal Awal Cuti</label>
                            <div class="mt-2">
                                <input type="date" name="date" id="startDate" v-model="startDate"
                                    class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>
                        <div class="sm:col-span-6">
                            <label for="date" class="block text-sm font-medium leading-6 text-gray-900">Tanggal Akhir Cuti</label>
                            <div class="mt-2">
                                <input type="date" name="date" id="endDate" v-model="endDate"
                                    class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>
                       <!--Jumlah Cuti berdasarkan total dari tanggal awal dan tanggal akhir-->
                        <div class="sm:col-span-6">
                            <label for="date" class="block text-sm font-medium leading-6 text-gray-900">Jumlah Cuti</label>
                            <div class="mt-2">
                                <input type="text" name="date" id="totalCuti" v-model="totalCuti"
                                    class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>
                        <!--/Jumlah Cuti berdasarkan total dari tanggal awal dan tanggal akhir-->
                        <div class="sm:col-span-6">
                            <label for="date" class="block text-sm font-medium leading-6 text-gray-900">Keterangan</label>
                            <div class="mt-2">
                                <textarea id="keterangan" name="keterangan" rows="3" v-model="keterangan"
                                    class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>
                        <!--Status Cuti-->
                        <div class="sm:col-span-6">
                            <label for="status" class="block text-sm font-medium leading-6 text-gray-900">Status Cuti</label>
                            <div class="mt-2">
                                <select id="status" name="status" v-model="status"
                                    class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option value="Disetujui">Disetujui</option>
                                    <option value="Ditolak">Ditolak</option>
                                </select>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="submit"
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
            </div>
        </form>
    </div>
</template>