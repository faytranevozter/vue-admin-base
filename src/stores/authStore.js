import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('user', () => {
  const userdata = ref({
    user: {},
    token: '',
  });

  // get userdata
  const userdataStoreage = useStorage('userdata', {
    user: {},
    token: '',
  });
  userdata.value = userdataStoreage.value;

  const isLogin = computed(() => userdata.value.token !== '');

  function saveUserdata(newUserdata, token) {
    userdata.value = {
      user: newUserdata,
      token,
    };
    // usertoken.value = token;

    // update the storage
    userdataStoreage.value = userdata.value;
    // usertokenStoreage.value = usertoken.value;
  }

  function removeUserdata() {
    userdata.value = {
      user: {},
      token: '',
    };

    // update the storage
    userdataStoreage.value = userdata.value;
  }

  return { userdata, isLogin, saveUserdata, removeUserdata };
});
