<template>
    <v-card
            max-width="332"
            class="mx-auto"
    >
        <v-container
                class="pa-2"
                fluid
                grid-list-md
        >
            <v-layout column>

                <v-flex
                        v-for="(item, i) in items"
                        :key="i"
                >
                    <v-card
                            :color="item.color"
                            dark
                    >
                        <v-list-item three-line>
                            <v-list-item-content class="align-self-start">
                                <v-list-item-title
                                        class="headline mb-2"
                                        v-text="item.title"
                                ></v-list-item-title>

                                <v-list-item-subtitle v-text="item.artist"></v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-avatar
                                    size="125"
                                    tile
                            >
                                <v-img :src="item.src"></v-img>
                            </v-list-item-avatar>
                        </v-list-item>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Deneme",
    data () {
      return {
        wholeResponse: [],
        loading: true,
       items: [
        {
         color: '#1F7087',
         src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
         title: 'Supermodel',
         artist: 'Foster the People',
        },
        {
         color: '#952175',
         src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
         title: 'Halcyon Days',
         artist: 'Ellie Goulding',
        },
       ],
       lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      }
    },
    mounted () {
      axios
          .get('http://www.omdbapi.com/?s=indiana&apikey=5491a007&page=1&type=movie&Content-Type=application/json')
          .then(response => {
            this.wholeResponse = response.data.Search
            this.loading = false
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
</script>

<style scoped>

</style>
