const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
   proxy:{
     '/api/user/register':{
       target:'http://localhost:3000'
     },
     '/api/user/login':{
      target:'http://localhost:3000'
    }
   }
  }
})
