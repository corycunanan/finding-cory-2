<template>
  <v-container fluid>
    <v-layout
      text-xs-center
      wrap
      class="mb-5 mt-5"
    >
      <v-flex xs12>
        <h1 class="display-2">Hi I'm Cory Cunanan</h1>
      </v-flex>
    </v-layout>

    <v-layout class="mb-5">
      <v-flex xs3 offset-xs2>
        <v-img src="https://via.placeholder.com/150" /> 
      </v-flex>
      <v-flex xs5>
        <p class="ml-5 subheading font-weight-regular">
          I’m currently a junior undergraduate at the University of California, Irvine. I’m majoring in Informatics with a specialization in Human-Computer Interaction and minoring in Digital Arts. Other areas of interest include project management, writing, and software design.
        </p>
      </v-flex>
    </v-layout>

    <v-layout class="mb-5">
      <v-flex xs6 offset-xs3>
        <blockquote class="blockquote">
          My passion for creative expression and fascination with technology have led me to my current interest in user experience design. My design process is supplemented by a background in graphic design and previous experience as a web developer. I’m constantly motivated by opportunities to improve not only the world around me, but also myself.
        </blockquote>
      </v-flex>
    </v-layout>

    <v-layout class="mb-5">
        <v-flex xs5 offset-xs2>
            <p class="mr-5 subheading font-weight-regular">
              During my free time, I love playing the ukulele and producing music in FL Studio. (Check out my Soundcloud!) When searching for inspiration and yearning for solid writing, I read and compile articles online. In addition, I occasionally edit and publish videos for my friends. I'm also a huge fan of board games and competitive Super Smash Bros.
            </p>
        </v-flex>
        <v-flex xs3>
            <v-img src="https://via.placeholder.com/150" /> 
        </v-flex>
    </v-layout>

    <v-layout class="mb-5">
        <v-flex xs3 offset-xs2>
            <v-img src="https://via.placeholder.com/150" /> 
        </v-flex>
        <v-flex xs5>
            <p class="ml-5 subheading font-weight-regular">
                View portfolio to see the processes and deliberations behind my most recent works. My blog includes my thoughts, opinions, and mental processes in design, lifestyle, media, and other fields. Feel free to contact me. I'd love to hear your feedback or get involved with your latest project.
            </p>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped lang="less">
.blockquote {
  border-left: 10px solid #FFCC68;
  padding: 0 16px;
}
</style>

<script>
  export default {
    data: () => ({})
  }
</script>

<style>

</style>
