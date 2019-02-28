<template>
    <v-container>
        <v-layout
            wrap
        >
            <v-flex xs8 offset-xs2>
                <h1 class="text-xs-center">Featured Posts</h1>
                <v-layout>
                    <v-flex xs12>
                        <v-card 
                            v-for="i in 4"
                            :key="`${i}`"
                            color="white darken-2"
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
                            <v-divider light></v-divider>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
        text: "Lorem ipsum dolor"
    })   
  }
</script>

<style>

</style>
