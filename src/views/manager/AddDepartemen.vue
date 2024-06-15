<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const nama = ref('');
const deskripsi = ref('');

const addDepartemen = () => {
    console.log(nama.value, deskripsi.value);
    // Tambahkan departemen baru ke data (ini hanya contoh, di aplikasi sebenarnya harus menggunakan API call)
    alert('Departemen berhasil ditambahkan!');

    // Redirect ke halaman Departemen
    const router = useRouter();
    router.push('/manager/departemen');
};
</script>

<template>
    <div>
        <h1 class="text-2xl font-semibold">Tambah Departemen</h1>
        <form @submit.prevent="addDepartemen">
            <div class="space-y-12">
                <div class="border-b border-gray-900/10 pb-12">
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-6">
                            <label for="nama" class="block text-sm font-medium leading-6 text-gray-900">Nama Departemen</label>
                            <div class="mt-2">
                                <input type="text" name="nama" id="nama" v-model="nama"
                                    class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>
                        <div class="sm:col-span-6">
                            <label for="deskripsi" class="block text-sm font-medium leading-6 text-gray-900">Deskripsi</label>
                            <div class="mt-2">
                                <textarea id="deskripsi" name="deskripsi" rows="3" v-model="deskripsi"
                                    class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
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
