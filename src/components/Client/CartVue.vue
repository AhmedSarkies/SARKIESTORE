<template>
  <div class="cart">
    <h1>Products in your cart</h1>
    <div class="item" v-for="cart in totalItems" :key="cart?.id">
      <img :src="cart?.imageURL" alt="" />
      <div class="details">
        <h1>{{ cart?.title }}</h1>
        <p>{{ cart?.description?.substring(0, 100) }}</p>
        <div class="price">{{ cart?.quantity }} x ${{ cart?.price }}</div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
        class="delete"
        @click="removeItem(cart?.id)"
      >
        <path
          d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
        />
      </svg>
    </div>
    <div class="total">
      <span>SUBTOTAL</span>
      <span>${{ total.toFixed(2) }}</span>
    </div>
    <button @click="checkOut">PROCEED TO CHECKOUT</button>
    <span class="reset" @click="resetCart"> Reset Cart </span>
  </div>
</template>

<script>
export default {
  name: "CardVue",
  data: () => {
    return {
      carts: null,
      total: 0,
    };
  },
  computed: {
    totalItems() {
      return this.$store.state.client.CartStore.cart;
    },
    totalPrice() {
      return this.total.toFixed(2);
    },
  },
  mounted: function () {
    this.carts = this.totalItems;
    this.totalItems.forEach((item) => {
      this.total += item.quantity * item.price;
    });
  },
  methods: {
    checkOut: function () {
      this.$store.dispatch(
        "client/CartStore/checkOut",
        this.carts.map((el) => el)
      );
    },
    removeItem: function (id) {
      this.$store.dispatch("client/CartStore/removeItem", id);
    },
    resetCart: function () {
      this.$store.dispatch("client/CartStore/resetCart").finally(() => {
        this.total = 0;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  position: absolute;
  right: 20px;
  top: 80px;
  z-index: 999;
  width: 25%;
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 7px -5px rgba($color: #000000, $alpha: 0.5);

  h1 {
    margin-bottom: 30px;
    color: gray;
    font-weight: 400;
    font-size: 24px;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;

    img {
      width: 80px;
      height: 100px;
      object-fit: cover;
    }

    .details {
      h1 {
        font-size: 18px;
        font-weight: 500;
      }

      p {
        color: gray;
        margin-bottom: 10px;
        font-size: 14px;
      }

      .price {
        color: #2879fe;
      }
    }

    .delete {
      fill: red;
      width: 30px;
      cursor: pointer;
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 20px;
  }

  button {
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
    margin-bottom: 20px;
    cursor: pointer;
  }

  .reset {
    color: red;
    font-size: 15px;
    cursor: pointer;
  }
}
</style>
