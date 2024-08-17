<template>
  <VContainer class="insert-schedule-page">
    <div class="title text-h4 font-weight-light">Insert Schedule</div>
    <VRow no-gutters>
      <VCol cols="8" no-gutters>
        <EditOnClickTextField v-model="test" label="Tema" />
      </VCol>
    </VRow>

    <VRow no-gutters>
      <VDataTable
        :items="items"
        :headers="headers"
        class="service-table"
        hide-default-footer
      >
        <template v-slot:headers="{ columns }">
          <tr class="table-headers">
            <template v-for="column in columns" :key="column.key">
              <th>
                {{ column.title }}
              </th>
            </template>
          </tr>
        </template>
        <template v-slot:item="{ item }">
          <tr class="table-data-rows">
            <td v-for="header in headers" :key="header.key">
              <div v-if="header.key == 'week'">
                {{ item.week }}
              </div>
              <div v-else class="users">
                <VChip
                  v-for="user in item[header.key]"
                  :key="user.id"
                  :color="selectedUserId == user.id ? 'primary' : ''"
                  @click="selectUser(user.id)"
                >
                  {{ user.name }}
                </VChip>
              </div>
            </td>
          </tr>
        </template>
      </VDataTable>
    </VRow>
  </VContainer>
</template>

<script src="./js/insert-schedule-page.js"></script>

<style lang="scss" scoped>
@use '@/styles/settings';

.insert-schedule-page {
  :deep(.v-table) {
    align-items: center;
  }
  .service-table {
    :deep(table) {
      border-top: thin solid settings.$table-border-color;
    }

    .table-data-rows {
      display: flex;
      flex-direction: column;
      float: left;
      &:hover {
        background-color: $gray-1;
        transition-duration: 100ms;
        transition-timing-function: settings.$standard-easing;
      }
      & > td {
        border-bottom: thin solid settings.$table-border-color;
        height: 48px;
        border-collapse: collapse;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .users {
          display: flex;
          gap: 4px;
        }
      }
    }

    .table-headers > th {
      height: 48px;
      border-collapse: collapse;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    :deep(thead),
    :deep(tbody) {
      float: left;
    }
  }
}
</style>
