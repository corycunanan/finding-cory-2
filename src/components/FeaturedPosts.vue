<template>
    <v-container class="mb-5">
        <v-layout
            wrap
        >
            <v-flex sm8 offset-sm2>
                <h1 class="mb-5 display-2 text-xs-center">Featured Posts</h1>
                <v-layout>
                    <v-flex xs10 offset-xs1>
                        <v-card 
                            v-for="i in 4"
                            :key="`${i}`"
                            color="white darken-2"
                            class="featured-post-item mb-4"
                        >
                            <v-layout>
                                <v-flex xs7>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">Supermodel</div>
                                        </div>
                                    </v-card-title>
                                    <v-card-text>
                                        <p>Lorem Ipsum</p>
                                    </v-card-text>
                                </v-flex>
                                <v-flex xs5>
                                    <v-img
                                        src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                                        contain
                                    />
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped lang="less">
.featured-post-item {
    padding: 1rem;
    border: 1px solid #A29F9F;
    border-radius: 10px;
}
</style>

<script>
  export default {
    data: () => ({
        text: "Lorem ipsum dolor"
    })   
  }
</script>

<style>

</style>
