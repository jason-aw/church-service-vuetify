<template>
  <div class="schedule-section" :class="disabled ? 'disabled' : ''">
    <div class="date-section">
      {{ formattedDate }}
    </div>
    <div class="cards-section">
      <ServiceCard v-for="(e) in data" :data="e" :disabled="disabled"/>
    </div>
  </div>
</template>

<script src="./js/public-service-schedule.js"></script>

<style lang="scss" scoped>

.schedule-section {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  border-radius: 12px;
  padding: 20px;

  .date-section {
    font-size: 20px;
  }

  .cards-section {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
}

.disabled {
  opacity: 0.5;
}
</style>