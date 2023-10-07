<template>
  <div class="navbar">
    <div class="wrapper">
      <div class="left">
        <div class="item">
          <img src="@/assets/img/en.png" alt="" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </div>
        <div class="item">
          <span>USD</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </div>
        <div class="item">
          <RouterLink class="link" to="products"> Men </RouterLink>
        </div>
        <div class="item">
          <RouterLink class="link" to="products"> Women </RouterLink>
        </div>
        <div class="item">
          <RouterLink class="link" to="products"> Children </RouterLink>
        </div>
        <div class="item">
          <RouterLink class="link" to="products"> Accessories </RouterLink>
        </div>
      </div>
      <div class="center">
        <RouterLink class="link" to="/"> SARKIESTORE </RouterLink>
      </div>
      <div class="right">
        <div class="item">
          <RouterLink class="link" to="/"> Homepage </RouterLink>
        </div>
        <div class="item">
          <RouterLink class="link" to="/about"> About </RouterLink>
        </div>
        <div class="item">
          <RouterLink class="link" to="/contact"> Contact </RouterLink>
        </div>
        <div class="item">
          <RouterLink class="link" to="/products"> Stores </RouterLink>
        </div>
        <div class="icons">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
          <RouterLink to="/login">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
              />
            </svg>
          </RouterLink>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
            />
          </svg>
          <div class="cartIcon" @click="isOpenFn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
            <span>{{ quantity.length }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="open" v-if="isOpen">
      <CartVue />
    </div>
  </div>
</template>

<script>
import CartVue from "@/components/Client/CartVue";

export default {
  name: "NavbarVue",
  components: {
    CartVue,
  },
  data: () => {
    return {
      isOpen: false,
    };
  },
  computed: {
    quantity: function () {
      return this.$store.state.client.CartStore.cart;
    },
  },
  methods: {
    isOpenFn: function () {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 80px;

  .wrapper {
    padding: 10px 30px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .link {
      color: #000;
      text-decoration: none;
    }

    .item {
      display: flex;
      align-items: center;
      font-size: 18px;
      gap: 5px;
    }

    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;

      svg {
        width: 16px;
      }
    }

    .center {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      letter-spacing: 2px;
    }

    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;

      .icons {
        display: flex;
        gap: 15px;
        cursor: pointer;

        svg {
          width: 18px;
          fill: #777;
        }

        .cartIcon {
          position: relative;

          span {
            font-size: 12px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #2879fe;
            color: white;
            position: absolute;
            right: -10px;
            top: -10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
