<template>
  <v-app>
    <v-toolbar class="cory-toolbar" absolute>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
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
            <v-flex xs12 sm8 offset-sm2 class="justify-left">
              <v-img
                contain
                max-height="201"
                max-width="182"
                min-height="100"
                min-width="100"
                :src="require('./assets/cory-logo.png')"
                class="ml-4"
              />
              <v-layout fill-height wrap class="white--text ml-5 name">
                <v-flex xs12>
                  <h1 class="display-3">Cory</h1>
                </v-flex>
                <v-flex xs12>
                  <h1 class="display-3">Cunanan</h1>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout class="titles">
              <v-flex offset-sm2>
                  <v-layout class="ml-4 white--text justify-left">
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

    <v-footer :height="200">
      <v-layout align-center align-content-center>
        <v-img contain height="115" width="110" :src="require('./assets/cory-logo.png')" />
      </v-layout>
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

.white-slope:before {
  position: relative;
  content: " ";
  display: block;
  left: -25px;
  top: -75px;
  border-style: solid;
  border-width: 60px 100vw 0 0;
  border-color: transparent white transparent transparent;
}
</style>

<style scoped lang="less">
.justify-left {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.titles {
  margin-bottom: 6rem;
  h3 {
    margin-right: 2rem;
  }
}

.name {
  h1 {
    @media screen and (max-width: 600px) {
      font-size: 40px !important;
    }
  }
}

.hero-content {
  margin-top: 175px;
}

footer.v-footer {
  background-color: #373540;
  &:after {
    position: absolute;
    content: " ";
    display: block;
    left: 0;
    bottom: 200px;
    border-style: solid;
    border-width: 40px 100vw 0 0;
    border-color: transparent #373540 transparent transparent;
  }
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
