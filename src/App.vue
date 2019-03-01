<template>
  <v-app>
    <v-toolbar class="cory-toolbar" absolute>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>home</v-btn>
        <v-btn flat>projects</v-btn>
        <v-btn flat>blog</v-btn>
        <v-btn flat>contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-responsive :aspect-ratio="16/9">
        <v-img :src="require('./assets/kevin-horstmann-hero.jpg')">
          <v-spacer />
          <v-layout class="hero-content mb-5">
            <v-flex xs8 offset-xs2 class="justify-left">
              <img
                height="200"
                width="180"
                :src="require('./assets/cory-logo.png')"
              />
              <h1 class="white--text ml-4">Cory Cunanan</h1>
            </v-flex>
          </v-layout>
          <v-layout class="mb-4">
              <v-flex offset-xs2>
                  <v-layout class="titles white--text justify-left">
                    <h3>UX Designer</h3>
                    <h3>Music Producer</h3>
                    <h3>Content Creator</h3>
                  </v-layout>
              </v-flex>
          </v-layout>
        </v-img>
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

<style lang="less">
.v-toolbar.cory-toolbar {
  top: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 3px 6px #000000;

  .v-btn {
    color: white;
  }

  .v-toolbar__content {
    justify-content: center;
  }
}
</style>

<style scoped lang="less">
.justify-left {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.titles {
  h3 {
    margin-right: 2rem;
  }
}

.hero-content {
  margin-top: 175px;
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
