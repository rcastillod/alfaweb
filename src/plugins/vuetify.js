import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#16294E',
                secondary: '#7DDFDF',
                accent: '#4B6894',
            },
        },
    },
});
