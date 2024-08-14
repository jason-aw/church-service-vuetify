<template>
  <div class="main">
    <div class="header">
      <div class="header__current-month">
        {{ formatSelectedMonth(selectedDate) }}
      </div>
      <div class="header__icons">
        <button @click="prevMonth()">
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" size="lg" />
        </button>
        <button @click="nextMonth()">
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" size="lg" />
        </button>
      </div>
    </div>
    <PublicServiceSchedule :data="data" disabled class="weekly-section" />
    <PublicServiceSchedule :data="data" class="weekly-section" />
    <PublicServiceSchedule :data="data" disabled class="weekly-section" />
    <PublicServiceSchedule :data="data" class="weekly-section" />
    <PublicServiceSchedule :data="data" class="weekly-section" />
  </div>
</template>

<script src="./js/services-page.js"></script>

<style lang="scss" scoped>

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .header {
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    &__current-month {
      font-weight: bold;
      font-size: 36px;
      grid-column: 1 / 4;
    }

    &__icons {
      grid-column: 12;
      align-self: center;
      justify-self: end;

      display: flex;
      gap: 10px;

      & button {
        height: 40px;
        width: 40px;

        border-radius: 8px;
        background: none;

        transition: background-color 0.2s ease-in;

        border: none;

        &:hover {
          cursor: pointer;
          background-color: $gray-2;
        }

        &:active {
          background-color: $gray-3;
        }
      }
    }
  }

  .weekly-section {
    margin-top: 20px;
  }
}
</style>
