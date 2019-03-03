<template>
  <div>
    <Welcome />
    <CoreSkills />
    <FeaturedWorks />
    <FeaturedPosts />
  </div>
</template>

<script>
import Welcome from '../components/Welcome'
import CoreSkills from '../components/CoreSkills'
import FeaturedWorks from '../components/FeaturedWorks'
import FeaturedPosts from '../components/FeaturedPosts'

export default {
  name: 'Home',
  components: {
    Welcome,
    CoreSkills,
    FeaturedWorks,
    FeaturedPosts
  }
}
</script>
