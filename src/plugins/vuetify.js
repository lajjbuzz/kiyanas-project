import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
const vuetify = new Vuetify({
    theme: {
      themes: {
         light: {
      primary: '#3f51b5',
      secondary: '#03a9f4',
      accent: '#2196f3',
      error: '#e91e63',
      warning: '#f44336',
      info: '#607d8b',
      success: '#009688'
        },
      },
    },
  })
export default new Vuetify({
});
