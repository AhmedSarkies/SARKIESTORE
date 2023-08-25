<template>
  <div class="product">
    <div class="left">
      <div class="images">
        <img :src="products?.imageURL" alt="" />
        <img src="@/assets/img/payment.png" alt="" />
      </div>
      <div class="mainImg">
        <img :src="products?.imageURL" alt="" />
      </div>
    </div>
    <div class="right">
      <h1>{{ products?.title }}</h1>
      <span class="price">${{ products?.price }}</span>
      <p>{{ products?.description }}</p>
      <div class="quantity">
        <button
          @click="decreaseHandler"
          :style="`${quantity === 1 ? 'opacity: 0.5' : 'opacity: 1'}`"
        >
          -
        </button>
        {{ quantity }}
        <button @click="increaseHandler">+</button>
      </div>
      <button class="add" @click="addToCart">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"
          />
        </svg>
        ADD TO CART
      </button>
      <div class="links">
        <div class="item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
            />
          </svg>
          ADD TO WISH LIST
        </div>
        <div class="item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path
              d="M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"
            />
          </svg>
          ADD TO COMPARE
        </div>
      </div>
      <div class="info">
        <span>Vendor: Polo</span>
        <span>Product Type: T-Shirt</span>
        <span>Tag: T-Shirt, Women, Top</span>
      </div>
      <hr />
      <div class="info">
        <span>DESCRIPTION</span>
        <hr />
        <span>ADDITIONAL INFORMATION</span>
        <hr />
        <span>FAQ</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductView",
  data: () => {
    return {
      loading: false,
      product: null,
      quantity: 1,
    };
  },
  computed: {
    products() {
      return this.$store.state.client.products?.find(
        (product) => product.id === this.$route.params.id
      );
    },
  },
  mounted: function () {
    this.loading = true;
    this.$store
      .dispatch("client/getProducts")
      .finally(() => (this.loading = false));
    this.cart = this.$store.state.client.CartStore.cart;
  },
  methods: {
    increaseHandler: function () {
      this.quantity = this.quantity + 1;
    },
    decreaseHandler: function () {
      this.quantity =
        this.quantity === 1 ? (this.quantity = 1) : this.quantity - 1;
    },
    addToCart: function () {
      this.cart = this.products;
      this.$store
        .dispatch("client/CartStore/addToCart", {
          product: this.cart,
          quantity: this.quantity,
        })
        .finally(() => (this.quantity = 1));
    },
  },
};
</script>
<style lang="scss" scoped>
.product {
  padding: 20px 50px;
  display: flex;
  gap: 50px;

  .left {
    flex: 1;
    display: flex;
    gap: 20px;

    .images {
      flex: 2;

      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        margin-bottom: 10px;
        cursor: pointer;
      }
    }
    .mainImg {
      flex: 6;

      img {
        width: 100%;
        max-height: 800px;
        object-fit: cover;
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .price {
      font-size: 30px;
      color: #2879fe;
      font-weight: 500;
    }

    p {
      font-size: 16px;
      font-weight: 300;
      text-align: justify;
    }

    .quantity {
      display: flex;
      align-items: center;
      gap: 10px;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border: none;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
      }
    }

    .add {
      width: 250px;
      padding: 10px;
      background-color: #2879fe;
      color: white;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      font-weight: 500;
      cursor: pointer;

      svg {
        width: 25px;
        fill: white;
      }
    }

    .links {
      display: flex;
      gap: 20px;

      .item {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #2879fe;
        font-size: 14px;
        cursor: pointer;

        svg {
          width: 20px;
          fill: #2879fe;
        }
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: gray;
      font-size: 14px;
      margin-top: 30px;

      hr {
        width: 200px;
        border: 1px solid rgb(238, 237, 237);
        margin-left: 0;
      }
    }

    hr {
      width: 100%;
      border: 1px solid rgb(238, 237, 237);
    }
  }
}
</style>
