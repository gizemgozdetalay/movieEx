<template>
    <v-content>
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
                    <v-btn flat icon color="pink"

                           @click="searchMovies">
                        <v-icon>favorite</v-icon>
                    </v-btn>
                </v-flex>

            </v-layout>

            <v-flex xs12 md2 v-for="(movie,index) in movies" :key="index">
                <v-card flat tile color="cyan darken-2" class="white--text">
                    <v-layout>
                        <v-flex xs5>
                            <v-img
                                    :src=movie.poster
                                    height="150px"
                                    aspect-ratio="1"
                                    contain></v-img>
                        </v-flex>
                        <v-flex xs7>
                            <v-card-title primary-title>
                                <v-flex>
                                    <p class="headline">{{movie.title}}</p>
                                    <p>{{movie.type}}</p>
                                    <p>{{(movie.year)}}</p>
                                </v-flex>
                            </v-card-title>
                        </v-flex>
                    </v-layout>
                    <v-divider light></v-divider>
                    <v-card-actions class="pa-3">
                        Rate this album
                        <v-spacer></v-spacer>
                        <v-icon>star_border</v-icon>
                        <v-icon>star_border</v-icon>
                        <v-icon>star_border</v-icon>
                        <v-icon>star_border</v-icon>
                        <v-icon>star_border</v-icon>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-layout>
                <v-flex xs12 sm6 offset-sm3>
                    <v-layout row wrap>
                        <v-flex v-for="(movie,index) in movies" :key="index" xs4>
                            <v-card flat tile>
                                <v-img
                                        :src=movie.poster
                                        height="150px"
                                ></v-img>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>

</template>

<script>

  export default {
  name: "MovieSearch",
  data: () => ({
    searchTerm: "",
    size: 'sm',
    movies: [
      {poster: 'https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg'},
      {poster: 'https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg'},
      {poster: 'https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg'}
    ]
  }),
  methods: {
    searchMovies() {
      fetch('http://localhost:8085/movie/search?searchTerm=' + this.searchTerm)
        .then((res) =>  {
          this.movies = res.data;
          console.log(res);
          console.log(res.body)
        } )
        .then((data) => console.log(JSON.stringify(data)))
        .catch((err) => console.error(err))
    }
  }
}

</script>

<style scoped>

</style>
