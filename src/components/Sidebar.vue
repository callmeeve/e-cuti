<script setup>
import { GridOutline, PersonOutline, BusinessOutline } from '@vicons/ionicons5';
import { ref, defineProps, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const route = useRoute();
const isManager = route.meta.role === 'manager'; 
const isEmployee = route.meta.role === 'employee'; 

const handleClickOutside = (event) => {
  if (!event.target.closest('.flex')) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div
    :class="['flex flex-col bg-white text-gray-800 p-4 border-r', isOpen ? 'w-64' : 'w-0 hidden', 'transition-width duration-300']">
    <h1 class="mt-2 text-2xl text-center font-semibold">E-Cuti Pegawai</h1>
    <nav v-if="isOpen" class="mt-24">
      <ul class="ml-4 space-y-6">
        <li v-if="isManager" class="font-medium">
          <router-link to="/manager/dashboard" exact active-class="text-blue-500"
            class="flex items-center text-sm hover:text-blue-500">
            <GridOutline class="w-6 h-6 mr-4" />
            Dashboard
          </router-link>
        </li>
        <li v-if="isManager" class="font-medium">
          <router-link to="/manager/karyawan" exact active-class="text-blue-500"
            class="flex items-center text-sm hover:text-blue-500">
            <PersonOutline class="w-6 h-6 mr-4" />
            Karyawan
          </router-link>
        </li>
        <li v-if="isManager" class="font-medium">
          <router-link to="/manager/departemen" exact active-class="text-blue-500"
            class="flex items-center text-sm hover:text-blue-500">
            <BusinessOutline class="w-6 h-6 mr-4" />
            Departemen
          </router-link>
        </li>
        <li v-if="isEmployee" class="font-medium">
          <router-link to="/employee/dashboard" exact active-class="text-blue-500"
            class="flex items-center text-sm hover:text-blue-500">
            <GridOutline class="w-6 h-6 mr-4" />
            Dashboard
          </router-link>
        </li>
        <li v-if="isEmployee" class="font-medium">
          <router-link to="/employee/cuti" exact active-class="text-blue-500"
            class="flex items-center text-sm hover:text-blue-500">
            <PersonOutline class="w-6 h-6 mr-4" />
            Pengajuan Cuti
          </router-link>
        </li>
        <!-- Add more employee-specific links here -->
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.transition-width {
  transition: width 0.3s;
}
</style>
