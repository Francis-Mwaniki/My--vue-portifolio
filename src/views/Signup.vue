<template>
  <div
    class="
     flex
      p-2
      m-1
      mx-14
      md:mr-96
      md:ml-96
      rounded-lg
      text-center
      justify-center
       align-center
       border-b
       border-orange-600 
    "
    v-show="userSigned"
      @mouseover="dismiss"
  >
  <p  class=" pr-6">{{text}}</p>
    <svg
      @click="deleteMe"
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 flex-grow "
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
     <p v-show="dismiss">Dismiss</p>
  </div>
  <section class="flex py-4 px-3 mt-3">
    <form
      @submit.prevent="handleSubmit"
      class="
        w-96
        md:w-2/3
        mx-auto
        sm:max-w-screen-sm
        p-3
        m-4
        md:rounded-lg
        border-2
        shadow-lg
        h-min
        flex-col
        md:flex-row
        justify-center
        align-center
        bg-gradient-to-r
        from-cyan-500
        to-orange-400
      "
    >
      <span class="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
      <span class="flex items-center justify-center mt-2"><h2>SignUp</h2></span>
      <div class="m-5 flex-col md:flex-row md:mx-9">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-6 inline-block p-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          />
        </svg>
        <label for="fname" class="md:mr-10 mb-7">First Name</label>
        <input
          type="text"
          name="fname"
          required
          placeholder="FirstName"
          class="
            mt-3
            py-4
            pr-5
            pl-3
            md:mx-9
            border-b-2
            outline-none
            focus:border-black
            md:pr-2 md:border-green-200
            rounded-lg
          "
          v-model="fname"
        />
      </div>
      <div class="m-5 flex-col md:flex-row md:mx-9">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-6 inline-block p-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          />
        </svg>
        <label for="lname" class="md:mr-10 mb-7">Last Name</label>
        <input
          type="text"
          name="lname"
          required
          placeholder="LastName"
          class="
            mt-3
            py-4
            pr-5
            pl-3
            md:pr-2 md:border-green-200
            rounded-lg
            md:mx-9
            border-b-2
            outline-none
            focus:border-black
          "
          v-model="lname"
        />
      </div>
      <div class="m-5 flex-col md:flex-row md:mx-9">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-6 inline-block p-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
          />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <label for="email" class="md:mr-5 mb-7">Email address</label>
        <input
          type="text"
          name="email"
          required
          placeholder="Email"
          class="
            mt-3
            py-4
            pr-5
            pl-3
            md:ml-9 md:mr-0
            border-b-2
            outline-none
            focus:border-black
            md:pr-2 md:border-green-200
            rounded-lg
          "
          v-model="email"
        />
      </div>
      <div class="m-5 flex-col md:flex-row md:mx-9">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-6 inline-block p-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
            clip-rule="evenodd"
          />
        </svg>
        <label for="password" class="md:mr-14 mb-7">Password</label>
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          class="
            mt-3
            py-4
            pr-5
            pl-3
            md:mx-8
            border-b-2
            outline-none
            focus:border-black
            md:pr-2 md:border-green-200
            rounded-lg
          "
          v-model="password"
        />
        <p class=" px-1 text-red-800 md:text-center text-left mx-3  md:ml-10 overflow-auto" v-show="passwordError">{{passwordErrorData}}</p>
      </div>
      <div class="md:mx-9 m-5 flex-col md:flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-6 inline-block p-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
            clip-rule="evenodd"
          />
        </svg>
        <label for="confirmPass" class="md:mr-10 mb-7">confirmPass</label>
        <input
          type="password"
          name="confirmPass"
          required
          placeholder="confirmPass"
          class="
            mt-3
            py-4
            pr-5
            pl-3
            md:mx-8
            border-b-2
            outline-none
            focus:border-black
            md:pr-2 md:border-green-200
            rounded-lg
          "
          v-model="confirmPassword"
        />
      </div>
      <span class="flex items-center justify-center mt-2"
        > <button type="submit" 
        :class="[
                reg_in_submission ? 'bg-gray-400 hover:bg-slate-400' : '',
              ]"
              :disabled="reg_in_submission"
         class="
            hover:bg-blue-900 hover:text-zinc-100
            bg-bookmark-blue
            text-bookmark-white
            items-center
            justify-center
            flex
            p-4
            rounded-md
            self-center
            sm:flex-row
            w-full
            md:w-32
            
          ">
       <svg
                v-if="reg_show_alert"
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            {{ reg_show_alert ? "Logging..." : "Signup" }}
          </button></span>
      <span class="flex items-center justify-center mt-2"
        ><p class="mr-2">Already have an account?</p>
        <router-link :to="{ name: 'login' }" class="text-blue-900"
          >Login</router-link
        >
      </span>
    </form>
  </section>
   <div class=" flex flex-1 justify-center align-baseline gap-5" v-show="redirect">
       <router-link :to="{ name: 'home' }" class=" p-3 mx-2 hover:border-b-2 hover:border-orange-500  hover:bg-gradient-to-r
        from-slate-400
        via-bookmark-blue
        to-purple-900 hover:text-bookmark-white hover:shadow-lg rounded-lg" >(---Go home</router-link>
         <router-link :to="{ name: 'welcome' }"  class=" p-3 mx-2 hover:border-b-2 hover:border-orange-500  hover:bg-gradient-to-r
        from-slate-400
        via-bookmark-blue
        to-purple-900 hover:text-bookmark-white hover:shadow-lg rounded-lg">See a blog--)</router-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmPassword: "",
      userSigned: false,
      users:[],
      error:'',
      text:'',
         dismiss:false,
      redirect:false,
       reg_show_alert:false,
      reg_in_submission:false,
      passwordError:false,
      passwordErrorData:"-*Password must be more than 8 characters*"
    };
  },
  methods: {
async handleSubmit() {
  if(this.password.length<8 && this.confirmPassword.length<8){
     this.passwordError=true
 }
 else{
      this.passwordError=false;
      this.reg_in_submission = true;
      this.reg_show_alert = true;
       let userSignUp = {
        firstName: this.fname,
        lastName: this.lname,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      let url='https://git.heroku.com/my-backendapp.git';
      const res = await fetch(url,{
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userSignUp),
      });
      if(res.ok){
        const data = await res.json();
        this.users =[...this.users, data];
        this.text=data.message;
         //deleting login success text
        this.dismiss=true
        //if data is true redirect to new page
        data.message?this.redirect=true:"";
        console.log(data.message)

      this.userSigned = true;
      (this.fname = ""),
        (this.lname = ""),
        (this.email = ""),
        (this.password = ""),
        (this.confirmPassword = "");

        //disable logging
      this.reg_in_submission = false;
      this.reg_show_alert = false;
        
      }else{
        const data = await res.json();
         this.error=data;
         alert(data.message)
         this.reg_in_submission = false;
          this.reg_show_alert = false;
        return`http error: ${res.status}`
      }
 }
    },
    deleteMe() {
      this.userSigned = false;
    },
  },
};
</script>

<style>
</style>