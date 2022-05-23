<template>
  <h1
    class="
      text-center
      font-bold
      border-b
      mb-10
      mt-10
      py-6
      px-4
      tracking-wide
      leading-4
      font-serif
    "
  >
    SOME OF MY PROJECTS
  </h1>
  <div
    class="
      container
      ml-3
      lg:mx-auto
      grid grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-16
      max-w-screen-lg
      font-bold
    "
  >
    <!-- card1  -->
    <div
      class="
        flex flex-col
        rounded-md
        shadow-md
        md:justify-center
        items-center
         bg-gradient-to-b
        from-orange-500
        via-bookmark-blue
        to-slate-900
        text-black
         mr-7
         md:mr-0
         ml-2 md:ml-0
      "
    >
      <div class="flex flex-col p-6 items-center">
        <svg
          class="items-center justify-center flex-1 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          style="fill: #000000"
        >
          <polygon
            fill="#81c784"
            points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"
          ></polygon>
          <polygon
            fill="#455a64"
            points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"
          ></polygon>
        </svg>
        <h3 class="mb-2 mt-5 text-bookmark-white text-lg">VUE</h3>
        <p class="mb-2 text-bookmark-grey font-normal">
          Vue is the best framework ever
        </p>
      </div>
      <hr class="border-b border-bookmark-white" />
      <div class="flex p-6">
        <button
          type="button"
          class="
            btn btn-purple
            hover:bg-bookmark-white hover:text-black
            flex-1
            self-center
          "
        >
          <a
            href="https://satisfying-mailbox.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
            >Preview</a
          >
        </button>
      </div>
    </div>
    <!-- card2 -->
    <div class="flex flex-col rounded-md shadow-md  bg-gradient-to-b
        from-orange-500
        via-bookmark-blue
        to-slate-900 text-black mr-7
         md:mr-0 ml-2 md:ml-0">
      <div class="flex flex-col p-6 items-center">
        <svg
          class="items-center justify-center flex-1 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          style="fill: #000000"
        >
          <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
          <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
          <path
            fill="#FFF"
            d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
          ></path>
          <path
            fill="#EEE"
            d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
          ></path>
        </svg>
        <h3 class="mb-2 mt-5 text-bookmark-white text-lg">HTML</h3>
        <p class="mb-2 text-bookmark-grey font-normal">
          HTML is the edge of every website
        </p>
      </div>
      <div class="flex p-6">
        <button
          type="button"
          class="
            btn btn-purple
            hover:bg-bookmark-white hover:text-black
            mx-auto
          "
        >
          <a
            href="https://shut-digestion.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
            >Preview</a
          >
        </button>
      </div>
    </div>
    <!-- card3  -->
    <div class="flex flex-col rounded-md shadow-md  bg-gradient-to-b
        from-orange-500
        via-bookmark-blue
        to-slate-900
        to-slate-900text-black  mr-6 ml-2 md:ml-0
         md:mr-0">
      <div class="flex flex-col p-6 items-center">
        <svg
          class="items-center justify-center flex-1 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          style="fill: #000000"
        >
          <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
          <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
          <path
            fill="#FFF"
            d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
          ></path>
          <path
            fill="#EEE"
            d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
          ></path>
        </svg>
        <h3 class="mb-2 mt-5 text-bookmark-white text-lg">CSS</h3>
        <p class="mb-2 text-bookmark-grey font-normal">
          The king of style in the tech
        </p>
      </div>
      <div class="flex p-6">
        <button
          type="button"
          class="
            btn btn-purple
            hover:bg-bookmark-white hover:text-black
            mx-auto
          "
        >
          <a
            href="https://subsequent-dog.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
            >Preview</a
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecomendedPro",
};
</script>

<style>
</style>