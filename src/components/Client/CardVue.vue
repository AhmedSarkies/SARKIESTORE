<template>
  <RouterLink
    class="link"
    :to="`/product/${item.id}`"
    v-if="maxPrice ? Number(item.price) <= maxPrice : true"
  >
    <div class="card">
      <div class="image">
        <span v-if="item?.isNew">New Season</span>
        <img class="mainImg" :src="item?.imageURL" alt="" />
        <img class="secondImg" :src="item?.imageURL" alt="" />
      </div>
      <h2>{{ item?.title }}</h2>
      <div class="prices">
        <h3 class="old-price" v-if="item.oldPrice">${{ item?.oldPrice }}</h3>
        <h3 class="new-price">${{ item?.price }}</h3>
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  name: "CardVue",
  props: ["item", "maxPrice"],
};
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  color: #000;

  .card {
    width: 280px;
    display: flex;
    flex-direction: column;

    .image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      overflow: hidden;
      position: relative;

      span {
        position: absolute;
        top: 5px;
        left: 5px;
        background-color: white;
        color: teal;
        padding: 3px 5px;
        font-size: 12px;
        font-weight: 500;
        z-index: 3;
      }

      &:hover {
        .secondImg {
          z-index: 2;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
      }

      .mainImg {
        z-index: 1;
      }
    }

    h2 {
      font-size: 18px;
      font-weight: 500;
    }

    .prices {
      display: flex;
      gap: 10px;

      h3 {
        font-size: 16px;
        font-weight: 400;
      }
      .old-price {
        color: gray;
        text-decoration: line-through;
      }
    }
  }
}
</style>
