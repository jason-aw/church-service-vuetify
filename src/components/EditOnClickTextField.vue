<template>
  <div>
    <VHover v-slot="{ isHovering, props }">
      <div class="edit-on-click" v-bind="props" v-click-outside="onClickOutside">
        <div
          v-if="!editing"
          :class="isHovering ? `cursor-text bg-grey-lighten-3 text-value` : `text-value`"
          @click="onClick"
        >
          <span>
            {{ modelValue }}
          </span>
        </div>
        <VTextField
          v-else
          variant="underlined"
          class="input-text"
          :label="label"
          :model-value="modelValue"
          @update:model-value="update"
        />
      </div>
    </VHover>
  </div>
</template>

<script src="./js/edit-on-click-text-field"></script>

<style lang="scss" scoped>
.edit-on-click {
  display: block;
  height: 48px;
  .text-value {
    padding-bottom: 5px;
    display: flex;
    align-items: end;
    height: 100%;
  }
}
</style>
