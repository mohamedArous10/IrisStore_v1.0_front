<template>
    <div class="container">
        <form>
                <h1> Log in </h1>
                 <Form v-model="email" :placeHolder="'email'"  class="inputWidth" :inputType="'email'" />
                <Form v-model="password"  :placeHolder="'password'"  :inputType="'password'" />
                <Button :textBtn="'Login'" style="width:192%" />
        </form>
    </div>
</template>

<script>

import Form from '../components/Form.vue'
import Button from '../components/Button.vue'
import axios from 'axios';

export default {
    name: 'LoginForm',
    components: {
        Form,
        Button
    },
   computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.email && this.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/profile');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@500&family=Montserrat:ital@1&family=Poppins:wght@300;400;500;600;700&display=swap');

 form {
     padding:12em;
 }


.container {
                font-family: 'Montserrat', sans-serif;

    display: flex;
    justify-content: center;
    box-shadow: 3px -1px 32px 7px rgba(0,0,0,0.2);
        -webkit-box-shadow: 3px -1px 32px 7px rgba(0,0,0,0.2);
        -moz-box-shadow: 3px -1px 32px 7px rgba(0,0,0,0.2);
}

 .inputWidth {
     width:25em;
 }


</style>