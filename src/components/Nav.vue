<template>
  <nav
  :class="isDark ? 'bg-black' : 'bg-white'"
    class="
      flex
      font-serif
      justify-between
      pt-4
      item-center
      text-white
      md:mx-auto
      mr-0
      uppercase
      bg-gradient-to-r
      from-black
      via-purple-400
      to-orange-700
    "
  >
    <div class="rounded-lg">
      <img
        src="@/assets/newlogo.png"
        alt=""
        class="p-3 rounded-lg h-24 w-28 t"
      />
    </div>
    <div
      class="
        sm:flex
        flex-1
        justify-end
        hidden
        py-4
        px-4
        mx-5
        gap-16
        items-center
        text-lg
        uppercase
      "
    >
    <!--   <button class="px-2 mb-1 dark:bg-black" @click="toggleMode">
        <div >
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 lg:flex md:flex"
              v-if="isDark === false"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 lg:flex md:flex"
              v-if="isDark === true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </div>
        </div>
      </button> -->
      <router-link
        to="/"
        class="hover:text-black hover:border-b-2 hover:border-gray-900"
        >Home</router-link
      >
      <router-link
        :to="{ name: 'projects' }"
        class="hover:text-black hover:border-b-2 hover:border-gray-900"
          >Projects</router-link
      >
      <router-link
        :to="{ name: 'signup' }"
        class="hover:text-black hover:border-b-2 hover:border-gray-900"
        >Signup</router-link
      >
      <router-link :to="{ name: 'login' }"
        ><button
          class="
            uppercase
            text-bookmark-white
            rounded-md
            bg-bookmark-blue
            py-3
            px-5
            hover:bg-bookmark-white hover:text-black
          "
        >
          Login
        </button></router-link
      >
    </div>

    <div
      class="flex sm:hidden flex-1 justify-end mt-12 mr-5 relative"
      @click="toggleMenu = !toggleMenu"
    >
      <div class="" v-if="!toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="" v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        class="
          flex-col
          absolute
          justify-center
          inline-flex
          items-center
          h-96
          text-slate-900
          w-full
          px-4
          py-6
          rounded-md
          mr-7
          top-2
          gap-7
          z-20
          bg-slate-100
        "
        v-if="toggleMenu"
      >
        <router-link
          to="/"
          class="hover:text-black hover:border-b-2 hover:border-gray-900"
          >Home</router-link
        >
        <router-link
          :to="{ name: 'projects' }"
          class="hover:text-black hover:border-b-2 hover:border-gray-900"
          >Projects</router-link
        >
        <router-link
          :to="{ name: 'signup' }"
          class="hover:text-black hover:border-b-2 hover:border-gray-900"
          >Signup</router-link
        >
        <router-link :to="{ name: 'login' }"
          ><button
            class="
              uppercase
              text-bookmark-white
              rounded-md
              bg-bookmark-blue
              py-3
              px-5
              hover:bg-bookmark-white hover:text-black hover:shadow-lg shadow-black
            "
          >
            Login
          </button></router-link
        >
      </div>
      <div class="" v-else></div>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
  name: "Nav",
  props: ["toggleMenu"],
  data() {
    return {
      isDark: false,
    };
  },
  methods: {
    toggleMode() {
      this.isDark = !this.isDark;
    },
  
  },
};
</script>
<style>
</style>