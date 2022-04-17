<template>
    <div class="container">
        <form>
                    <h1>Sign up </h1>

                <Form  :placeHolder="'fullname'"  class="inputWidth" :inputType="'text'" />
                 <Form  :placeHolder="'email'"  class="inputWidth" :inputType="'email'" />
                <Form  :placeHolder="'phone'"  class="inputWidth" :inputType="'phone'" />
                <Form  :placeHolder="'address'"  class="inputWidth" :inputType="'text'" />
               
                <Form :placeHolder="'password'"  :inputType="'password'" />
                
                <Button :textBtn="'Signup'" style="width:192%" />
        </form>
    </div>
</template>

<script>

import Form from '../components/Form.vue'
import Button from '../components/Button.vue'

export default {
    name: 'SignupForm',
    components: {
        Form,
        Button
    },

computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.message = data.message;
              this.successful = true;
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
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
     padding:5em;
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