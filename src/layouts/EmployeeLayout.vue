<script setup>
import { ref } from 'vue';
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'

const isSidebarOpen = ref(true);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

</script>

<template>
    <div class="flex h-screen overflow-hidden">
        <Sidebar :isOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header @toggle-sidebar="toggleSidebar" />
            <main>
                <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>