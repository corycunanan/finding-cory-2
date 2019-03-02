<template>
  <v-container class="white-slope" fluid>
    <v-layout
      text-xs-center
      class="mb-5 mt-5"
    >
      <v-flex xs12>
        <h1 class="display-2">Hi I'm Cory Cunanan</h1>
      </v-flex>
    </v-layout>

    <div
      v-for="row in rows"
      :key="row.id"
    >
      <v-layout v-if="row.id == 2" class="mb-5">
        <v-flex sm8 offset-sm2>
          <blockquote class="blockquote">
            My passion for creative expression and fascination with technology have led me to my current interest in user experience design. My design process is supplemented by a background in graphic design and previous experience as a web developer. I’m constantly motivated by opportunities to improve not only the world around me, but also myself.
          </blockquote>
        </v-flex>
      </v-layout>

      <v-layout
        row
        class="mb-5"
        v-if="row.id % 2 == 0"
      >

        <v-flex
          xs10
          offset-xs1
          sm5
          offset-sm2
        >
          <p class="subheading font-weight-regular">
            {{row.text}}
          </p>
        </v-flex>
        <v-flex
          sm3
          class="ml-5 hidden-xs-only"
        >
          <v-img :src="row.image" /> 
        </v-flex>
      </v-layout>

      <v-layout
        row
        class="mb-5"
        v-if="row.id % 2 == 1"
      >

        <v-flex
          sm3
          :offset-sm2="row.id % 2 == 1"
          class="mr-5 hidden-xs-only"
        >
          <v-img :src="row.image" /> 
        </v-flex>
        <v-flex
          xs10
          :offset-xs1="row.id % 2 == 1"
          sm5
          offset-sm0
        >
          <p class="subheading font-weight-regular">
            {{row.text}}
          </p>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<style scoped lang="less">
.blockquote {
  border-left: 10px solid #FFCC68;
  padding: 0 16px;
}
</style>

<script>
import data from "../data/home.json";

console.log(data);

const {rows, blockquote} = data.welcome;

export default {
  data: () => ({
    rows,
    blockquote
  })
}
</script>

<style>

</style>
