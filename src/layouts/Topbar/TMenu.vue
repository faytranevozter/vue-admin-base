<script setup>
import { TransitionRoot } from '@headlessui/vue';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useAuthStore } from '../../stores/authStore';
import { useDarkModeStore } from '../../stores/darkmodeStore';

const authStore = useAuthStore();

const darkmodeStore = useDarkModeStore();
const { dark } = storeToRefs(darkmodeStore);

const notifOpen = ref(false);
const profileOpen = ref(false);

const togglenotifOpen = () => {
  notifOpen.value = !notifOpen.value;
};

const toggleprofileOpen = () => {
  profileOpen.value = !profileOpen.value;
};

const closeNotif = () => {
  notifOpen.value = false;
};

const closeProfile = () => {
  profileOpen.value = false;
};
</script>

<template>
  <ul class="flex items-center flex-shrink-0 space-x-6">
    <!-- Theme toggler -->
    <li class="flex">
      <button
        class="rounded-md focus:outline-none focus:ring-4 focus:ring-primary-500/25 dark:focus:ring-gray-300/25"
        @click="darkmodeStore.toggle"
        aria-label="Toggle color mode"
      >
        <svg
          v-if="!dark"
          class="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          ></path>
        </svg>
        <svg
          v-else
          class="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </li>

    <!-- Notifications menu -->
    <li class="relative">
      <button
        class="relative align-middle rounded-md focus:outline-none focus:ring-4 focus:ring-primary-500/25 dark:focus:ring-gray-300/25"
        @click="togglenotifOpen"
        v-click-outside="closeNotif"
        @keydown.esc="closeNotif"
        aria-label="Notifications"
        aria-haspopup="true"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
          ></path>
        </svg>
        <!-- Notification badge -->
        <span
          aria-hidden="true"
          class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
        ></span>
      </button>
      <TransitionRoot
        as="ul"
        :show="notifOpen"
        leave="transition ease-in duration-150"
        leave-from="opacity-100"
        leave-to="opacity-0"
        class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
        aria-label="submenu"
      >
        <li class="flex">
          <a
            class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            href="#"
          >
            <span>Messages</span>
            <span
              class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
            >
              13
            </span>
          </a>
        </li>
        <li class="flex">
          <a
            class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            href="#"
          >
            <span>Sales</span>
            <span
              class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
            >
              2
            </span>
          </a>
        </li>
        <li class="flex">
          <a
            class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            href="#"
          >
            <span>Alerts</span>
          </a>
        </li>
      </TransitionRoot>
    </li>

    <!-- Profile menu -->
    <li class="relative">
      <button
        class="align-middle rounded-full focus:ring-4 focus:ring-primary-500/25 dark:focus:ring-gray-300/25 focus:outline-none"
        @click="toggleprofileOpen"
        v-click-outside="closeProfile"
        @keydown.esc="closeProfile"
        aria-label="Account"
        aria-haspopup="true"
      >
        <img
          class="object-cover w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
          alt=""
          aria-hidden="true"
        />
      </button>
      <TransitionRoot
        as="ul"
        :show="profileOpen"
        leave="transition ease-in duration-150"
        leave-from="opacity-100"
        leave-to="opacity-0"
        class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
        aria-label="submenu"
      >
        <li class="flex">
          <a
            class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            href="#"
          >
            <svg
              class="w-4 h-4 mr-3"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
            <span>Profile</span>
          </a>
        </li>
        <li class="flex">
          <a
            class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            href="#"
          >
            <svg
              class="w-4 h-4 mr-3"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>Settings</span>
          </a>
        </li>
        <li class="flex">
          <a
            @click="authStore.removeUserdata"
            class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            href="#"
          >
            <svg
              class="w-4 h-4 mr-3"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              ></path>
            </svg>
            <span>Log out</span>
          </a>
        </li>
      </TransitionRoot>
    </li>
  </ul>
</template>
