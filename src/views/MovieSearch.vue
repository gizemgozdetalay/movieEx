<template>
  <v-container v-if="loading">
        <div class="text-xs-center">
            <v-progress-circular
                    indeterminate
                    :size="150"
                    :width="8"
                    color="blue">
            </v-progress-circular>
        </div>
    </v-container>
  <v-content v-else>
    <v-container fluid>
      <v-layout align-start justify-center>
        <v-flex offset-xs2 s6 sm6 md6>
          <v-text-field
            v-model="searchTerm"
            label="Search"
            placeholder="Movie"
            :append-outer-icon="'mdi-send'"
            outline
            @click:append-outer="searchMovies"
          ></v-text-field>
        </v-flex>
        <v-flex s6 sm6 md6>
          <v-btn color="red" @click="searchMovies">
            <v-icon>mdi-mouse</v-icon>
          </v-btn>
        </v-flex>

            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="(movie,index) in movies" :key="index">
                    <v-card raised="true" flat color="cyan lighten-2" class="text-xs-center ma-3">
                        <!--<v-responsive  class="pt-4">-->
                            <v-img  height="600px"
                                    :src=movie.Poster
                            ></v-img>
                        <!--</v-responsive>-->
                        <v-flex >
                            <v-card-text @click="singleMovie(movie.imdbID)">
                                <p class="subheading">{{movie.Title}}
                                    <br>
                                    ({{movie.Year}})
                                </p>
                            </v-card-text>
                        </v-flex>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>

</template>


<script>
  import axios from 'axios';

  export default {
    name: "MovieSearch",
    data: () => ({
      searchTerm: "",
      size: 'sm',
      movies: [],
      loading: true
    }),
    methods: {
      searchMovies() {
        axios.get('http://localhost:8085/movie/search?searchTerm=' + this.searchTerm).then(res => {
          console.log(res.data);
          this.movies = res.data;
        })
      },
      singleMovie(id) {
        this.$router.push('/movies/'+id)
      }
    },
    mounted() {
      axios.get('http://localhost:8085/movie/search?searchTerm=end').then(response => {
        this.movies = response.data;
        this.loading = false;
      })
    }
  }

</script>

<style scoped>

</style>
