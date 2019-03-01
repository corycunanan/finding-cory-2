<template>
  <v-app>
    <v-toolbar class="cory-toolbar" absolute>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
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

<style scoped>
.cory-toolbar {
  top: 5px;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>

<style>
.v-toolbar__content {
  justify-content: center;
}
</style>

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
