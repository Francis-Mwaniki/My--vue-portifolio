<template>
  <section class="relative mb-20 mr-9">
    <div
      class="
        container
        flex flex-col-reverse
        lg:flex-row
        mt-14
        lg:mt-28
        gap-12
        mr-6
        ml-4
      "
    >
      <!-- content -->
      <div class="flex flex-1 flex-col items-center lg:items-start">
        <h2
          class="
            text-bookmark-blue text-3xl
            md:text-4
            lg:text-5xl
            text-center
            lg:text-left
            mb-6
          "
        >
          About Me..
          <h3 class="mb-1 border-b items-baseline">
            FRANCIS MWANIKI
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 inline-block border-0 no-underline items-center"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </h3>
        </h2>
        <p class="text-black text-lg text-center lg:text-left mb-6 font-sofia">
          I'm a fronted developer,passionate about web and software development
          always coachable and ready to deliver optimumly.
        </p>
        <div class="flex justify-center flex-wrap gap-6">
          <button
            type="button"
            class="btn btn-purple hover:bg-bookmark-white hover:text-black"
          >
            <a href="mailto:francismwaniki@630.gmail.com">Hire Me</a>
          </button>
          <router-link :to="{ name: 'resume' }">
            <button
              type="button"
              class="btn btn-white hover:bg-bookmark-purple hover:text-white"
            >
              Read Resume
            </button>
          </router-link>
        </div>
      </div>
      <!-- Image -->
      <div class="flex flex-1 mb-10 justify-center md:mb-5 lg:mb-0 z-10">
        <img
          src="@/assets/PRO.png"
          alt="logo"
          class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-md"
        />
      </div>
    </div>
    <!-- rounded rectangle -->
    <div
      class="
        hidden
        md:block
        overflow-hidden
        bg-bookmark-purple
        rounded-l-full
        absolute
        h-80
        lg:w-1/5
        top-32
        right-0
        lg:-bottom-28 lg:-right-7
      "
    ></div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style>
</style>