// Import necessary modules
import { createRouter, createWebHistory } from 'vue-router';
import ManagerLayout from '../layouts/ManagerLayout.vue';
import EmployeeLayout from '../layouts/EmployeeLayout.vue';

// Import manager views
import Dashboard from '../views/manager/Dashboard.vue';
import Karyawan from '../views/manager/Karyawan.vue';
import Departemen from '../views/manager/Departemen.vue';
import AddKaryawan from '../views/manager/AddKaryawan.vue';
import CutiKaryawan from '../views/manager/CutiKaryawan.vue';
import AddDepartemen from '../views/manager/AddDepartemen.vue';

// Import employee views
import EmployeeDashboard from '../views/employee/EmployeeDashboard.vue';
import PengajuanCuti from '../views/employee/PengajuanCuti.vue';

const routes = [
  {
    path: '/manager',
    component: ManagerLayout,
    children: [
      {
        path: 'dashboard',
        name: 'ManagerDashboard',
        component: Dashboard,
        meta: {
          requiresAuth: true,
          role: 'manager',
          title: 'Manager Dashboard - E-Cuti Pegawai',
        },
      },
      {
        path: 'karyawan',
        name: 'Karyawan',
        component: Karyawan,
        meta: {
          requiresAuth: true,
          role: 'manager',
          title: 'Kelola Karyawan - E-Cuti Pegawai',
        },
      },
      {
        path: 'karyawan/add',
        name: 'AddKaryawan',
        component: AddKaryawan,
        meta: {
          requiresAuth: true,
          role: 'manager',
          title: 'Tambah Karyawan - E-Cuti Pegawai',
        },
      },
      {
        path: 'karyawan/cuti',
        name: 'CutiKaryawan',
        component: CutiKaryawan,
        meta: {
          requiresAuth: true,
          role: 'manager',
          title: 'Kelola Cuti Karyawan - E-Cuti Pegawai',
        },
      },
      {
        path: 'departemen',
        name: 'Departemen',
        component: Departemen,
        meta: {
          requiresAuth: true,
          role: 'manager',
          title: 'Kelola Departemen - E-Cuti Pegawai',
        },
      },
      {
        path: 'departemen/add',
        name: 'AddDepartemen',
        component: AddDepartemen,
        meta: {
          requiresAuth: true,
          role: 'manager',
          title: 'Tambah Departemen - E-Cuti Pegawai',
        },
      },
    ],
  },
  {
    path: '/employee',
    component: EmployeeLayout,
    children: [
      {
        path: 'dashboard',
        name: 'EmployeeDashboard',
        component: EmployeeDashboard,
        meta: {
          requiresAuth: true,
          role: 'employee',
          title: 'Employee Dashboard - E-Cuti Pegawai',
        },
      },
      {
        path: 'cuti',
        name: 'PengajuanCuti',
        component: PengajuanCuti,
        meta: {
          requiresAuth: true,
          role: 'employee',
          title: 'Pengajuan Cuti - E-Cuti Pegawai',
        },
      },
    ],
  },
  {
    path: '/unauthorized',
    name: 'Unauthorized',
    component: () => import('../views/Unauthorized.vue'),
    meta: {
      title: 'Unauthorized - E-Cuti Pegawai',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Login - E-Cuti Pegawai',
    },
  },
  // Default route to handle unauthorized access
  {
    path: '/:catchAll(.*)',
    redirect: '/unauthorized',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = true; // Replace with your actual authentication check
  const requiredRole = to.meta.role;

  document.title = to.meta.title;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/login');
    } else if (requiredRole !== 'manager' && requiredRole !== 'employee') {
      next('/unauthorized');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
