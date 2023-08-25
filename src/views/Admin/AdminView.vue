<template>
  <div id="admin-content-body" :class="{ 'nav-opened': navVisibility }">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
    <HeaderAdmin />
    <RouterView />
  </div>
</template>

<script>
import HeaderAdmin from "@/components/Admin/HeaderAdmin.vue";

export default {
  name: "AdminView",
  components: {
    HeaderAdmin,
  },
  computed: {
    navVisibility() {
      return this.$store.state.admin.navVisibility;
    },
  },
};
</script>

<style lang="scss">
body {
  font-family: "Lato", sans-serif;
}
</style>
