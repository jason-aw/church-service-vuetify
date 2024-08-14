import { ref } from "vue";
import { VTextField } from "vuetify/components";

export default {
  name: "EditOnClickTextField",
  components: [VTextField],
  props: {
    modelValue: String,
    label: String,
  },
  emits: ["onUpdate:model-value"],
  setup(props, { emit }) {
    const modelValue = ref(props.modelValue);
    const editing = ref(false);

    const onClick = () => {
      editing.value = !editing.value;
    };

    const onClickOutside = () => {
      editing.value = false;
    };

    const update = (value) => {
      modelValue.value = value
      emit("onUpdate:model-value", value);
    };

    return {
      modelValue,
      editing,
      update,
      onClick,
      onClickOutside,
    };
  },
};
