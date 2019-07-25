<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <div>{{singleMovie}}</div>
            </v-flex>
        </v-layout>


        <v-layout>


        </v-layout>


        <v-container fluid>
            <v-layout wrap>
                <v-flex pa-1>
                    <v-card dark >
                        <v-card-text>{{singleMovie.Title}} ({{singleMovie.Year}})</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout wrap>
                <v-flex pa-1>
                    <v-card dark color="green darken-3">
                        <v-img
                                aspect-ratio="1"
                                :src=singleMovie.Poster
                        ></v-img>
                        <v-card-text>I'm a Flex that will grow and shrink (default behavior)</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex pa-1>
                    <v-card dark color="green darken-1">
                        <v-card-text>I'm a Flex that will grow and shrink (default behavior)</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex grow pa-1>
                    <v-card dark color="green lighten-1">
                        <v-card-text>I'm a Flex with a lot of content that will NOT shrink when the content is wider than the available width in the row. Try resizing the window</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout wrap>
                <v-flex pa-1>
                    <v-card dark color="green darken-4">
                        <v-card-text>I'm a Flex that will grow and shrink (default behavior)</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex shrink pa-1>
                    <v-card dark color="green darken-3">
                        <v-card-text>I'm a Flex that will NOT grow</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout wrap>
                <v-flex grow-shrink-0 pa-1>
                    <v-card dark color="green">
                        <v-card-text>I'm a Flex that will NOT grow OR shrink</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex grow-shrink-0 pa-1>
                    <v-card dark color="green lighten-1">
                        <v-card-text>I'm a Flex that will NOT grow OR shrink</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'MovieDetail',
    props: ['id'],
    data () {
      return {
        singleMovie: ''
      }
    },
    mounted () {
      axios
          .get('http://www.omdbapi.com/?apikey=5491a007&i='+this.$route.params.id+'&Content-Type=application/json')
          .then(response => {
            this.singleMovie = response.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
</script>

<style scoped></style>
