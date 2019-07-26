<template>
  <v-container class="search-back">
    <v-container fluid>
      <v-layout wrap>
        <v-flex pa-1>
          <v-card dark>
            <v-card-title class="subheading">{{singleMovie.Title}} ({{singleMovie.Year}}) <v-spacer></v-spacer>  {{singleMovie.imdbRating}}/10</v-card-title>
            <v-card-text>
              {{ secondsToHms(singleMovie.Runtime) }} | {{singleMovie.Genre}} | {{singleMovie.Released}} ({{singleMovie.Country}})
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex pa-1>
          <v-card max-width="300" class="mx-auto" color="green darken-1">
            <v-img :src=singleMovie.Poster >  <v-spacer></v-spacer> </v-img>
            <v-card-text>{{singleMovie.Plot}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex pa-1>
          <v-card>
            <v-card-text>
              Director : {{ singleMovie.Director }} <v-spacer></v-spacer> Writers : {{singleMovie.Writer}}  <v-spacer></v-spacer> Stars : {{singleMovie.Actors}}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex grow-shrink-0 pa-1 v-for="(rating,index) in singleMovie.Ratings" :key="index">
          <v-card dark color="green">
            <v-card-text>{{rating.Source}}  <v-spacer></v-spacer> {{rating.Value}} </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <div>Language : {{ singleMovie.Language }}</div>
        <div>Awards : {{ singleMovie.Awards }}</div>
        <div>Website : {{ singleMovie.Website }}</div>
        <div>Metascore : {{ singleMovie.Metascore }}</div>
        <div>imdbVotes : {{ singleMovie.imdbVotes }}</div>
        <div>production : {{ singleMovie.Production }}</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MovieDetail',
  props: ['id'],
  data() {
    return {
      singleMovie: ''
    }
  },
  mounted() {
    axios
      .get('http://www.omdbapi.com/?apikey=5491a007&i='+this.$route.params.id+'&Content-Type=application/json')
      .then(response => {
        this.singleMovie = response.data
      })
      .catch(error => {
        console.log(error)
      });
  },
  methods: {
 secondsToHms(d) {
      let runtime = d.split(" ")[0];
      d = Number(d);
      let h = Math.floor((runtime % 3600) / 60);
      let m = Math.floor((runtime % 3600) % 60);

      let hDisplay = h > 0 ? h + "h " : "";
      let mDisplay = m > 0 ? m + "min" : "";
      return hDisplay + mDisplay;
    }
  }
};
</script>

<style scoped>
.search-back{
  background: url("../assets/bg.jpg") no-repeat center fixed;
  background-size: cover;
}
</style>
