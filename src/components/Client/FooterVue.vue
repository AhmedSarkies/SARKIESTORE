<template>
  <div class="footer">
    <div class="top">
      <div class="item">
        <h1>Categories</h1>
        <span>Men</span>
        <span>Women</span>
        <span>Children</span>
        <span>Accessories</span>
        <span>New Arrivals</span>
      </div>
      <div class="item">
        <h1>Links</h1>
        <span>FAQ</span>
        <span>Pages</span>
        <span>Stores</span>
        <span>Compare</span>
        <span>Cookies</span>
      </div>
      <div class="item">
        <h1>About</h1>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
      </div>
      <div class="item">
        <h1>Contact</h1>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <span class="logo">SARKIESTORE</span>
        <span class="copyright">
          &copy; Copyright 2023. All Rights Reserved
        </span>
      </div>
      <div class="right">
        <img src="@/assets/img/payment.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterVue",
};
</script>

<style lang="scss" scoped>
.footer {
  margin: 100px 200px 20px 200px;

  .top {
    display: flex;
    gap: 50px;

    .item {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 10px;
      text-align: justify;
      font-size: 14px;

      h1 {
        font-size: 18px;
        font-weight: 500;
        color: #555;
      }
      span {
        color: gray;
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;

    .left {
      display: flex;
      align-items: center;

      .logo {
        color: #2879fe;
        font-weight: bold;
        font-size: 24px;
      }

      .copyright {
        margin-left: 20px;
        font-size: 12px;
        color: gray;
      }
    }

    .right {
      img {
        height: 50px;
      }
    }
  }
}
</style>
