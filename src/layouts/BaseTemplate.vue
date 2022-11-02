<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { TransitionRoot } from '@headlessui/vue';
import LSidebar from './Sidebar/LSidebar.vue';
import LSidebarBackdrop from './Sidebar/LSidebarBackdrop.vue';
import TSearchForm from './Topbar/TSearchForm.vue';
import TMenu from './Topbar/TMenu.vue';
import { useAuthStore } from '../stores/authStore';
import { storeToRefs } from 'pinia';
const isSideMenuOpen = ref(false);

const authStore = useAuthStore();
const { isLogin } = storeToRefs(authStore);

const toggleSideMenu = () => {
  isSideMenuOpen.value = !isSideMenuOpen.value;
};

const handleSideMenuOpen = () => {
  // isSideMenuOpen.value = isOpen;
};

const closeSideMenu = () => {
  setTimeout(() => {
    isSideMenuOpen.value = false;
  }, 100);
};
</script>

<template>
  <template v-if="isLogin">
    <div
      class="flex h-screen bg-gray-50 dark:bg-gray-900"
      :class="{ 'overflow-hidden': isSideMenuOpen }"
    >
      <!-- Desktop sidebar -->
      <aside
        class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
      >
        <div class="py-4 text-gray-500 dark:text-gray-400">
          <LSidebar :sideMenuHandler="handleSideMenuOpen" />
        </div>
      </aside>

      <!-- Backdrop -->
      <LSidebarBackdrop :isSideMenuOpen="isSideMenuOpen" />

      <!-- Mobile sidebar -->
      <TransitionRoot
        :show="isSideMenuOpen"
        as="aside"
        class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
        enter="transition ease-in-out duration-150"
        enter-from="opacity-0 transform -translate-x-20"
        enter-to="opacity-100"
        leave="transition ease-in-out duration-150"
        leave-from="opacity-100"
        leave-to="opacity-0 transform -translate-x-20"
        v-click-outside="closeSideMenu"
      >
        <div class="py-4 text-gray-500 dark:text-gray-400">
          <LSidebar :sideMenuHandler="handleSideMenuOpen" />
        </div>
      </TransitionRoot>

      <div class="flex flex-col flex-1">
        <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
          <div
            class="container flex items-center justify-between h-full px-6 mx-auto text-primary-600 dark:text-primary-300"
          >
            <!-- Mobile hamburger -->
            <button
              class="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:ring-4 focus:ring-primary-500/25 dark:focus:ring-gray-300/25"
              @click="toggleSideMenu"
              aria-label="Menu"
            >
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <!-- Search input -->
            <TSearchForm />

            <TMenu />
          </div>
        </header>

        <main class="h-full pb-16 overflow-y-auto">
          <RouterView />
        </main>
      </div>
    </div>
  </template>
  <template v-else>
    <RouterView />
  </template>
</template>
