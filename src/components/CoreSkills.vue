<template>
  <v-container fluid class="core-skills">
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex sm6 offset-sm3>
          <h1 class="mb-5 display-2">Core Skills</h1>
          <v-chip
            outline
            :class="`skill ${skill.size}`"
            v-for="skill in skills"
            :key="skill.text"
          >
            {{ skill.text }}
          </v-chip>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped lang="less">
.core-skills {
  background-color: #373540;
  color: white;
  padding: 10rem 0;

  .skill {
    border: 1px solid #BEBEBE;
    border-radius: 10px;
    color: white;
    padding: 2rem;

    &.large {
      padding: 2.5rem;
    }
  }
}
</style>

<script>
import data from "../data/skills.json";

const {skills} = data;

export default {
  data: () => ({
    skills
  })
}
</script>

<style>

</style>
