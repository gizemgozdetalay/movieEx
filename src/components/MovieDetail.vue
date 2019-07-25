<template>
  <v-container class="search-back">
    <v-layout row wrap>
      <v-flex xs12>
        <div>Rated : {{singleMovie.Rated}}</div>
        <div>Language : {{singleMovie.Language}}</div>
        <div>Awards : {{singleMovie.Awards}}</div>

        <div>Ratings :{{singleMovie.Ratings}}</div>
        <div>Website : {{singleMovie.Website}}</div>
        <div>Metascore : {{singleMovie.Metascore}}</div>
        <div>imdbVotes : {{singleMovie.imdbVotes}}</div>
        <div>boxOffice : {{singleMovie.BoxOffice}}</div>
        <div>production : {{singleMovie.Production}}</div>
      </v-flex>
    </v-layout>
  <v-container fluid>
      <v-layout wrap>
        <v-flex pa-1>
          <v-card dark >
            <v-card-title class="subheading" >{{singleMovie.Title}} ({{singleMovie.Year}}) <v-spacer></v-spacer>  {{singleMovie.imdbRating}}/10</v-card-title>
            <v-card-text>{{secondsToHms(singleMovie.Runtime)}} | {{singleMovie.Genre}} | {{singleMovie.Released}} ({{singleMovie.Country}})</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex pa-1>
          <v-card dark color="green darken-3">
            <v-img :src=singleMovie.Poster></v-img>
          </v-card>
        </v-flex>
        <v-flex pa-1>
          <v-card dark color="green darken-1">
            <v-card-text> TRAILERRR... (default behavior)</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex grow pa-1>
          <v-card dark>
            <v-card-text >{{singleMovie.Plot}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex pa-1>
          <v-card dark>
            <v-card-text>Director : {{singleMovie.Director}}</v-card-text>
            <v-card-text>Writers : {{singleMovie.Writer}}</v-card-text>
            <v-card-text>Stars : {{singleMovie.Actors}}</v-card-text>
          </v-card>
        </v-flex>
            </v-layout>
            <v-layout wrap>
                <v-flex grow-shrink-0 pa-1 v-for="(rating,index) in singleMovie.Ratings" :key="index">
                    <v-card dark color="green">
                        <v-card-text>{{rating.Source}}</v-card-text>
                        <v-card-text>{{rating.Value}}</v-card-text>
                    </v-card>
                </v-flex>
                <!--<v-flex grow-shrink-0 pa-1>-->
                    <!--<v-card dark color="green">-->
                        <!--<v-card-text>I'm a Flex that will NOT grow OR shrink</v-card-text>-->
                    <!--</v-card>-->
                <!--</v-flex>-->
                <!--<v-flex grow-shrink-0 pa-1>-->
                    <!--<v-card dark color="green lighten-1">-->
                        <!--<v-card-text>I'm a Flex that will NOT grow OR shrink</v-card-text>-->
                    <!--</v-card>-->
                <!--</v-flex>-->
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
  },
  methods : {
 secondsToHms(d) {
      let runtime = d.split(" ")[0];
      d = Number(d);
      let h = Math.floor((runtime % 3600) / 60);
      let m = Math.floor((runtime % 3600) % 60);

      let hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
      let mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes ") : "";
      return hDisplay + mDisplay ;
    }
  }
}
</script>

<style scoped>
    .search-back{
        background: url("../assets/bg.jpg") no-repeat center fixed;
        background-size: cover;
    }

</style>
