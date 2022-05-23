<template>
  <h1
    class="
      text-center
      font-bold
      border-b
      mb-2
      mt-2
      py-6
      px-4
      tracking-wide
      leading-4
      font-serif
    "
  >
    MY RESUME
  </h1>
  <section class="flex py-4 px-3 mt-2">
    <div
      class="
        border-l-4 border-yellow-700
        w-96
        md:w-2/3
        mx-auto
        overflow-hidden
        sm:max-w-screen-sm
        p-3
        m-4
        divide-dotted
        md:rounded-lg
        border-2
        shadow-lg
        items-center
        justify-center
        h-min
        flex-col
        md:flex-row
        text-center
        md:text-left
        bg-gradient-to-r
        from-cyan-500
        to-orange-400
      "
    >
      <div class="items-center mx-auto container gap-7">
        <h1
          class="
            border-b-2 border-slate-900
            md:text-center
            uppercase
            text-red-900
          "
        >
          Credentials
        </h1>
        <span class="md:items-baseline pb-4 pt-3">Name: {{ fullName }}</span
        ><br />
        <span class="md:items-baseline pb-4 pt-3">Email: {{ email }}</span
        ><br />
        <span class="md:items-baseline pb-4 pt-3">Phone: {{ tel }}</span
        ><br />
        <span class="md:items-baseline pb-4 pt-3">City: {{ address }}</span
        ><br />
        <span class="md:items-baseline pb-4 pt-3">Country: {{ country }}</span
        ><br />
      </div>
      <div class="">
        <h1
          class="
            border-b-2 border-slate-900
            md:text-center
            uppercase
            text-red-900
          "
        >
          Education
        </h1>
        <span class="md:items-baseline pb-4 pt-3">Campus: {{ campus }}</span
        ><br />
        <span class="md:items-baseline pb-4 pt-3">Grade: {{ gpa }}</span
        ><br />
        <span class="md:items-baseline pb-4 pt-3">Course: {{ course }}</span
        ><br />
        <span class="md:items-baseline pb-4 pt-3"
          >Year of Entry: {{ starting_year }}</span
        ><br />
        <span class="md:items-baseline pb-4 pt-3"
          >Finishing Year: {{ yearOfFinish }}</span
        ><br />
      </div>
      <div class="">
        <h1
          class="
            border-b-2 border-slate-900
            md:text-center
            uppercase
            text-red-900
          "
        >
          Experience
        </h1>
        <span class="md:items-baseline pb-4 pt-3">Company: {{ company }}</span
        ><br />
        <span class="md:items-baseline pb-4 pt-3">Period: {{ Period }}</span
        ><br />
        <span class="md:items-baseline pb-4 pt-3">Role: {{ role }}</span
        ><br />
      </div>
      <div class="">
        <h1
          class="
            border-b-2 border-slate-900
            md:text-center
            uppercase
            mx-auto
            text-red-900
          "
        >
          Skills
        </h1>
        <span class="md:items-baseline pb-4 pt-3"
          >Specialization: {{ Specialization }}</span
        ><br />
        <span class="md:items-baseline pb-4 pt-3"
          >Sects Of Skills: {{ A }}.-{{ B }}.-{{ C }}.-{{ D }}.-{{ E }}.-{{
            F
          }}</span
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      fullName: "Francis Mwaniki",
      email: "francismwaniki630@gmail.com",
      tel: "+254769983944",
      address: "Nakuru",
      country: "Kenya",
      campus: "Kabarak University",
      gpa: "previous grade B",
      course: "Business & Information Technology",
      starting_year: "Sept 7th 2020",
      yearOfFinish: "2024",
      company: "Global Internet Fortunes",
      Period: "4months",
      role: "Digital Marketer",
      Specialization: "Web Development",
      A: "HTML5",
      B: "CSS3",
      C: "JAVASCRIPT",
      D: "NODE.JS",
      E: "VUE.JS",
      F: "TAILWINDCSS",
    };
  },
};
</script>

<style>
</style>