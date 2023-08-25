<template>
  <div class="slider">
    <div
      class="container-slider"
      :style="{ transform: ` translateX(-${currentSlide * 100}vw)` }"
    >
      <img v-for="img in image" :key="img.img" :src="img.img" alt="" />
    </div>
    <div class="icons">
      <div class="icon" @click="prevSlide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
      </div>
      <div class="icon" @click="nextSlide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderVue",
  data: () => {
    return {
      image: [
        {
          img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=copress&cs=tinysrgb&w=1600",
        },
        {
          img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=copress&cs=tinysrgb&w=1600",
        },
        {
          img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=copress&cs=tinysrgb&w=1600",
        },
      ],
      currentSlide: 0,
    };
  },
  methods: {
    prevSlide: function () {
      if (this.currentSlide === 0) {
        this.currentSlide = 2;
      } else if (this.currentSlide === 1) {
        this.currentSlide = 0;
      } else if (this.currentSlide === 2) {
        this.currentSlide = 1;
      }
    },
    nextSlide: function () {
      if (this.currentSlide === 0) {
        this.currentSlide = 1;
      } else if (this.currentSlide === 1) {
        this.currentSlide = 2;
      } else if (this.currentSlide === 2) {
        this.currentSlide = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  height: calc(100vh - 80px);
  width: 100%;
  position: relative;
  overflow: hidden;

  .container-slider {
    width: 300vw;
    height: 100%;
    display: flex;
    transition: all 1s ease;

    img {
      width: 100vw;
      height: 100%;
      object-fit: cover;
    }
  }
  .icons {
    width: fit-content;
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100px;
    gap: 10px;
    margin: auto;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border: 1px solid #999;
      cursor: pointer;
    }
  }
}
</style>
