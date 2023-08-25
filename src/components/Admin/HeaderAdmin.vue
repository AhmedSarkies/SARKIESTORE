<template>
  <header class="header-admin">
    <button class="nav-toggle-btn" @click="toggleNav">
      <span class="icon">
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
      </span>
    </button>
    <nav>
      <ul>
        <li :class="{ active: $route.name === 'orders' }">
          <RouterLink to="/admin/orders">Orders</RouterLink>
        </li>
        <li :class="{ active: $route.name === 'productsAdmin' }">
          <RouterLink to="/admin/productsAdmin">Products</RouterLink>
        </li>
        <li :class="{ active: $route.name === 'categoriesAdmin' }">
          <RouterLink to="/admin/categoriesAdmin">Categories</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderAdmin",
  data: () => {
    return {};
  },
  computed: {
    navVisibility() {
      return this.$store.state.admin.navVisibility;
    },
  },
  methods: {
    toggleNav: function () {
      this.$store.commit("admin/updateNavVisibility", !this.navVisibility);
    },
  },
};
</script>

<style lang="scss">
$adminHeaderWidth: 200px;

#admin-content-body {
  padding: 50px 0;
  transition: padding-left 0.5s ease-in-out;

  .nav-toggle-btn {
    position: absolute;
    top: 0;
    left: 100%;
    width: 40px;
    height: 40px;
    background-color: #333;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    .icon {
      position: relative;
      display: block;
      width: 100%;

      .line {
        position: absolute;
        display: block;
        width: 100%;
        height: 3px;
        background-color: #fff;
        transition: all 0.5s ease-in-out;

        &.line-1 {
          transform: translateY(-8px);
        }

        &.line-3 {
          transform: translateY(8px);
        }
      }
    }
  }

  &.nav-opened {
    padding-left: $adminHeaderWidth;
    transform-origin: center;
    transition: padding-left 0.5s ease-in-out;

    .line-2 {
      opacity: 0 !important;
    }

    .line-1 {
      transform: translateY(0) rotate(45deg) !important;
    }
    .line-3 {
      transform: translateY(0) rotate(-45deg) !important;
    }
  }
}

.header-admin {
  position: fixed;
  width: $adminHeaderWidth;
  top: 0;
  left: -$adminHeaderWidth;
  bottom: 0;
  background-color: #333;
  color: #fff;
  transition: left 0.5s ease-in-out;

  .nav-opened & {
    left: 0;
  }

  ul {
    li {
      font-size: 16px;

      &:hover,
      &.active {
        background-color: #000;
      }

      a {
        display: block;
        padding: 15px 20px;
        color: inherit;
        text-decoration: none;
      }
    }
  }
}
</style>
