const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: 
  //         `
  //         @import "@/assets/scss/variables.scss";
  //         @import "@/assets/scss/_globales.scss";
  //         `
  //     }
  //   }
  // }
})
