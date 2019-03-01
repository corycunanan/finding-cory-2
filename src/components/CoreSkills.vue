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
            v-for="skill in coreSkills"
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
  export default {
    data: () => ({
      coreSkills: [
        {
          text: 'User Experience (UX) Design',
          size: 'large'
        },
        {
          text: 'User Interaction (UI) Design',
          size: 'large'
        },
        {
          text: 'Web Development',
          size: 'normal'
        },
        {
          text: 'Graphic Design',
          size: 'normal'
        },
        {
          text: 'Video Editing',
          size: 'normal'
        },
        {
          text: 'Music Production',
          size: 'normal'
        },
        {
          text: 'Project Management',
          size: 'normal'
        },
        {
          text: 'Writing',
          size: 'normal'
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com'
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com'
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuetifyjs.com'
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs'
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify'
        }
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer'
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined'
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
        }

      ]
    })
  }
</script>

<style>

</style>
