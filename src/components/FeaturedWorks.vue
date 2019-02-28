<template>
    <v-container fluid>
        <v-layout
            wrap
        >
            <v-flex xs8 offset-xs2>
                <h1 class="text-xs-center">Featured Works</h1>
                <v-tabs
                    grow
                    centered
                    dark
                >
                    <v-tabs-slider color="yellow"></v-tabs-slider>

                    <v-tab href="#tab-1">
                        Featured Work 1
                    </v-tab>

                    <v-tab href="#tab-2">
                        Featured Work 2
                    </v-tab>

                    <v-tab href="#tab-3">
                        Featured Work 3
                    </v-tab>

                    <v-tab-item
                    v-for="i in 3"
                    :key="i"
                    :value="'tab-' + i"
                    >
                    <v-card>
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                            aspect-ratio="2.75"
                        />

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                                <div>Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</div>
                            </div>
                        </v-card-title>
                    </v-card>
                    </v-tab-item>
                </v-tabs>
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
