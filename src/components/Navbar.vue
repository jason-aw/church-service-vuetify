<template>
<VAppBar class="navbar" :elevation="5">
  <VAppBarTitle>
    <div class="logo-section">
      <img src="@/assets/logo-gky.png" alt="">
      <h3>
        GKY GS
      </h3>
    </div>
  </VAppBarTitle>
</VAppBar>
</template>

<script src="./js/navbar.js"></script>

<style lang="scss" scoped>
.navbar {
  .logo-section {
    display: flex;
    align-items: center;
    & img {
      height: 64px;
    }
  }
}
</style>