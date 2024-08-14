<template>
  <div class="card" :class="disabled ? 'disabled' : ''">
    <div class="card-header">
      {{ data.serviceType }}
    </div>
    <div class="card-content">
      <div class="card-content-row" v-for="(value, key, index) in data.serviceData">
        <div>{{ key }}</div>
        <div>{{ value }}</div>
      </div>
    </div>
  </div>
</template>

<script src="./js/service-card.js"></script>

<style lang="scss" scoped>

.card {
  border-radius: 8px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, $gky-blue 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;

  transition: background-color 0.2s ease-in;

  &-header {
    font-weight: bold;
    font-size: 24px;
  }

  &-content {
    font-size: 14px;
    display: grid;
    grid-template-columns: auto minmax(auto, 200px);
    grid-gap: 4px 8px;

    &-row {
      display: contents;
      & div:first-of-type {
        font-weight: bold;
      }
    }
  }

  &:not(.disabled):hover {
    background-color: #f2f2f2;
  }
}
</style>