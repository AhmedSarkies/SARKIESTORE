<template>
  <div class="categories">
    <div class="col">
      <div class="row">
        <img
          src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=copress&cs=tinysrgb&w=1600"
        />
        <RouterLink class="link button" to="/products"> Sale </RouterLink>
      </div>
      <div class="row">
        <img
          src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=copress&cs=tinysrgb&w=1600"
        />
        <RouterLink class="link button" to="/products"> Women </RouterLink>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <img
          src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=copress&cs=tinysrgb&w=1600"
        />
        <RouterLink class="link button" to="/products"> New Season </RouterLink>
      </div>
    </div>
    <div class="col col-l">
      <div class="row">
        <div class="col">
          <div class="row">
            <img
              src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=copress&cs=tinysrgb&w=1600"
            />
            <RouterLink class="link button" to="/products"> Men </RouterLink>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <img
              src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=copress&cs=tinysrgb&w=1600"
            />
            <RouterLink class="link button" to="/products">
              Accessories
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="row">
        <img
          src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=copress&cs=tinysrgb&w=1600"
        />
        <RouterLink class="link button" to="/products"> Shoes </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesVue",
};
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  height: 80vh;
  gap: 10px;
  margin: 10px;

  .col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .col-l {
    flex: 2;
  }

  .row {
    flex: 1;
    display: flex;
    gap: 10px;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .button {
      position: absolute;
      min-width: 100px;
      width: fit-content;
      height: 50px;
      padding: 10px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      color: #000;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #2879fe;
        color: white;
        transition: all 0.3s ease;
      }
    }
  }
}
</style>
