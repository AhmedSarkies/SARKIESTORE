<template>
  <div>
    <div className="home">
      <NavbarVue />
      <RouterView />
      <ContactVue />
      <FooterVue />
    </div>
  </div>
</template>

<script>
import { NavbarVue, ContactVue, FooterVue } from "@/components/Client";

export default {
  name: "HomeView",
  components: {
    NavbarVue,
    ContactVue,
    FooterVue,
  },
};
</script>

<style></style>
