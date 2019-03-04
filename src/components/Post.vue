<template>
  <v-container fluid>
    <v-layout
      class="mb-5 mt-5"
    >
      <v-flex xs10 offset-xs1>
        <h1 class="display-2">{{article.title}}</h1>
        <div ref="content"></div>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import data from "../data/posts.json";
import Vue from "vue";

const {posts} = data;

export default {
  methods: {
    async mountMarkdown () {
      const post = posts.find(post => post.slug === this.slug)
      const md = await import(`../data/posts/${post.url}`)
      const Markdown = Vue.extend(md.default)
      const instance = new Markdown()
      instance.$mount()
      this.$refs.content.appendChild(instance.$el)
    }
  },
  data () {
    return ({
      article: posts[0],
      slug: this.$route.params.slug
    })
  },
  mounted: function () {
    this.mountMarkdown()
  }
}
</script>

<style>

</style>
