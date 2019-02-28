<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-responsive :aspect-ratio="16/9">
        <v-img :src="require('./assets/wallpaper.jpg')" />
      </v-responsive>
      <Welcome />
      <CoreSkills />
      <FeaturedWorks />
      <FeaturedPosts />
    </v-content>

    <v-footer>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import Welcome from './components/Welcome'
import CoreSkills from './components/CoreSkills'
import FeaturedWorks from './components/FeaturedWorks'
import FeaturedPosts from './components/FeaturedPosts'

export default {
  name: 'App',
  components: {
    Welcome,
    CoreSkills,
    FeaturedWorks,
    FeaturedPosts
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
