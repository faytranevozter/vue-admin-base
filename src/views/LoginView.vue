<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import AppButton from '../components/AppButton.vue';
import { useDarkModeStore } from '../stores/darkmodeStore';
import { useAuthStore } from '../stores/authStore';
import router from '../router';

const authStore = useAuthStore();

const darkmodeStore = useDarkModeStore();
const { dark } = storeToRefs(darkmodeStore);

const inputUsername = ref('');
const inputPassword = ref('');

if (authStore.isLogin) {
  router.push({ name: 'dashboard' });
}

const handleSubmit = async () => {
  if (inputUsername.value !== '' && inputPassword.value !== '') {
    authStore.saveUserdata(
      {
        name: 'Someone',
        email: 'someone@gmail.com',
        id: 1234,
      },
      'my-token'
    );

    router.push({ name: 'dashboard' });
  }
};
</script>

<template>
  <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    <div
      class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
    >
      <div class="flex flex-col overflow-y-auto md:flex-row">
        <div class="h-32 md:h-auto md:w-1/2">
          <img
            aria-hidden="true"
            class="object-cover w-full h-full dark:hidden"
            src="../assets/img/login-office-light.jpeg"
            alt="Office"
          />
          <img
            aria-hidden="true"
            class="hidden object-cover w-full h-full dark:block"
            src="../assets/img/login-office-dark.jpeg"
            alt="Office"
          />
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div class="w-full">
            <h1
              class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
            >
              Login
            </h1>
            <form @submit.prevent="handleSubmit">
              <label class="block text-sm">
                <span class="text-gray-700 dark:text-gray-400">Email</span>
                <input
                  v-model="inputUsername"
                  type="text"
                  name="username"
                  class="form-input mt-1"
                  placeholder="Email"
                  autocomplete="username"
                />
                <span class="text-xs text-red-600 dark:text-red-400"></span>
              </label>
              <label class="block mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">Password</span>
                <input
                  v-model="inputPassword"
                  type="password"
                  name="password"
                  class="form-input mt-1"
                  autocomplete="current-password"
                />
              </label>

              <AppButton class="w-full mt-4" type="submit">Log in</AppButton>
            </form>

            <p class="mt-4">
              <a
                class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                href="#"
              >
                Forgot your password?
              </a>
            </p>
            <p class="mt-1">
              <a
                class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                href="#"
              >
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- dark theme toggler -->
  <div
    class="fixed grid place-items-center w-10 h-10 right-3 bottom-3 border dark:border-gray-700 rounded shadow-sm text-primary-600 dark:text-primary-300 bg-white dark:bg-gray-800"
  >
    <button
      class="rounded-md focus:outline-none focus:ring-4 focus:ring-primary-500/25 dark:focus:ring-gray-300/25"
      x-data
      @click="darkmodeStore.toggle"
      aria-label="Toggle color mode"
    >
      <template v-if="!dark">
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          ></path>
        </svg>
      </template>
      <template v-else>
        <svg
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
      </template>
    </button>
  </div>
</template>
