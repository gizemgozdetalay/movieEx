<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex s12 sm10 md4>
          <v-card>
            <div>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="2.35"
              ></v-img>
            </div>
            <v-layout align-center justify-center>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Register</h3>
                  <div>
                    <v-card-text>
                      <v-form  ref="form">
                        <v-text-field
                          v-model="user.firstname"
                          :rules="rules.firstnameRules"
                          :counter="255"
                          label="Firstname"
                          required
                        ></v-text-field>
                        <v-text-field
                          v-model="user.lastname"
                          :rules="rules.lastnameRules"
                          :counter="255"
                          label="Lastname"
                          required
                        ></v-text-field>
                        <v-text-field
                          v-model="user.email"
                          :rules="rules.emailRules"
                          label="E-mail"
                          required
                        ></v-text-field>
                        <v-checkbox
                          v-model="user.terms"
                          :rules="[v => !!v || 'You must agree to continue!']"
                          label="Do you agree?"
                          required
                        ></v-checkbox>

                        <v-btn @click="submit">submit</v-btn>
                        <v-btn @click="clear">clear</v-btn>
                      </v-form>
                    </v-card-text>
                  </div>
                </div>
              </v-card-title>

              <!--<v-card-actions>-->
              <!--<v-btn flat color="orange">Share</v-btn>-->
              <!--<v-btn flat color="orange">Explore</v-btn>-->
              <!--</v-card-actions>-->
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {

  data: () => ({
      valid:true,
    user: {
      name: "",
      lastname: "",
      firstname: "",
      email: "",
      password: "",
      terms: false
    },
    rules : {
      firstnameRules: [
        v => !!v || 'Firstname is required',
        v => (v && v.length <= 255) || 'Name must be less than 255 characters'
      ],
      lastnameRules: [
        v => !!v || 'Lastname is required',
        v => (v && v.length <= 255) || 'Lastname must be less than 255 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\.+./.test(v) || 'E-mail must be valid'
      ]
    }
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        fetch('http://localhost:8085/user/', {
          method: 'POST',
          body:JSON.stringify({firstname:this.user.firstname,lastname:this.user.lastname, email:this.user.email}),
          headers: {
            'Content-Type': 'application/json',
          }
        }).then((res) => res.json())
          .then((data) =>  console.log(data))
          .catch((err)=> console.error(err))
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped lang="scss"></style>
