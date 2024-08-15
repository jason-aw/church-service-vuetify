<template>
  <VContainer class="insert-schedule-page">
    <div class="title text-h4 font-weight-light">Insert Schedule</div>
    <VRow no-gutters>
      <VCol cols="8" no-gutters>
        <EditOnClickTextField v-model="test" label="Tema" />
      </VCol>
    </VRow>
    <VRow no-gutters>
      <VChip>
        testing
      </VChip>
    </VRow>

    <VRow no-gutters>
      <VDataTable :items="items" :headers="headers" class="service-table" hide-default-footer>
        <template v-slot:item="{ item }">
          <tr class="rows">
            <td v-for="header in headers" :key="header.key">
              <div v-if="header.key == 'week'">
                {{ item.week }}
              </div>
              <div v-else>
                <VChip v-for="user in item[header.key]" 
                  :key="user.id" 
                  :color="selectedUserId == user.id ? 'primary' : ''"
                  @click="selectUser(user.id)">
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

.insert-schedule-page {
  :deep(.v-table) {
    align-items: center;
  }
  .service-table {
    
    :deep(table) {
      width: auto;
      border: 1px solid red;
    }

    :deep(tr) {
      display: flex;
      flex-direction: column;
      float: left;
    }
    
    :deep(.v-data-table__th), 
    :deep(.v-data-table__td) {
      border: 1px solid red;
      height: 48px;
      align-content: center;
      text-align: center;
      border-collapse: collapse;
      .v-data-table-header__content {
        justify-content: center;
      }
    }

    .rows > td {
      border: 1px solid red;
      height: 48px;
      border-collapse: collapse;
      display: flex;
      gap: 4px;
      justify-content: center;
      align-items: center;
    }

    :deep(thead),
    :deep(tbody) {
      float: left;
    }

    :deep(.v-data-table-footer) {
      justify-content: flex-start;
      margin-left: 15px;
      background-color: red;
    }
  }
}

</style>
