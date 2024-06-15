<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ChevronDown } from '@vicons/ionicons5';

const router = useRouter();

const dropdownOpen = ref(false);

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const logout = () => {
    console.log('Logout');

    // Redirect to login page
    router.push('/login');
};

</script>

<template>
    <header class="bg-white shadow p-4 flex justify-between items-center">
        <div class="flex items-center">
            <button @click="$emit('toggle-sidebar')" class="focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                    </path>
                </svg>
            </button>
            <h1 class="text-lg font-semibold ml-4">Welcome, Diana</h1>
        </div>
        <div class="relative" @click="toggleDropdown">
            <button class="flex items-center focus:outline-none">
                <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User avatar" />
                <ChevronDown class="w-4 h-4 ml-2" />
            </button>
            <div v-if="dropdownOpen"
                class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</a>
                <button @click="logout" class="w-full flex px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button>
            </div>
        </div>
    </header>
</template>
