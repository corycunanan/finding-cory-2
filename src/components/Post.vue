<template>
  <v-container fluid>
    <v-layout
      class="mb-5 mt-5"
    >
      <v-flex xs10 offset-xs1>
        <h1 class="display-2">{{article.title}}</h1>
        <markdown />
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import marked from "marked";
import data from "../data/posts.json";

const {posts} = data;

console.log(`../data/posts/${posts[0].url}`);

const markdown =  async () => await import(`../data/posts/${posts[0].url}`);

console.log(markdown)

export default {
  components: {
    markdown
  },
  data: () => ({
    article: posts[0]
  })
}
</script>

<style>

</style>
