<template>
  <div class="login-page">
    <h1>Login</h1>
    <div class="container">
      <form
        @submit.prevent=""
        class="row justify-content-center align-items-center"
      >
        <label
          for="email"
          class="form-input-holder col-lg-6 col-md-8 col-sm-10 col-xs-12"
        >
          <input
            type="email"
            class="form-input"
            name="email"
            id="email"
            placeholder="email"
            required
          />
        </label>
        <label
          for="password"
          class="form-input-holder col-lg-6 col-md-8 col-sm-10 col-xs-12"
        >
          <input
            type="password"
            class="form-input"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </label>
        <VEButton
          class="action d-flex justify-content-center align-items-center col-lg-1 col-md-2 col-sm-3 col-xs-4"
          type="submit"
          color="info"
          >Login</VEButton
        >
      </form>
    </div>
  </div>
</template>

<script>
import VEButton from "@/components/Public/VEButton.vue";
export default {
  components: { VEButton },
  name: "LoginView",
};
</script>

<style lang="scss" scoped>
.login-page {
  background-color: #fff;
  padding-top: 25px;
  padding-bottom: 25px;

  h1 {
    text-align: center;
  }

  .container {
    .row {
      flex-direction: column;

      .form-input-holder {
        margin-bottom: 0;
        input {
          background-color: #eeeeee50;
        }
      }

      .action {
        margin-top: 15px;
      }
    }
  }
}
</style>
