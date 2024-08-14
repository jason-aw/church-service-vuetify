import EditOnClickTextField from "@/components/EditOnClickTextField.vue";
import { VDataTable } from "vuetify/components";

export default {
  name: "InsertSchedulePage",
  components: {
    EditOnClickTextField,
    VDataTable,
  },
  setup() {
    const test = ref("testing");
    const items = [
      {
        wl: "WL 1",
        singer: "Singer 1",
        piano: "Piano 1",
        keyboard: "Keyboard 1",
        guitar: "Guitar 1",
        bass: "Bass 1",
        drum: "Drums 1",
        multimedia: "Multimedia 1",
        sound: "Sound 1",
        usher: "Usher 1",
        week: "minggu 1",
      },
      {
        wl: "WL 2",
        singer: "Singer 2",
        piano: "Piano 2",
        keyboard: "Keyboard 2",
        guitar: "Guitar 2",
        bass: "Bass 2",
        drum: "Drums 2",
        multimedia: "Multimedia 2",
        sound: "Sound 2",
        usher: "Usher 2",
        week: "minggu 2",
      },
      {
        wl: "WL 3",
        singer: "Singer 3",
        piano: "Piano 3",
        keyboard: "Keyboard 3",
        guitar: "Guitar 3",
        bass: "Bass 3",
        drum: "Drums 3",
        multimedia: "Multimedia 3",
        sound: "Sound 3",
        usher: "Usher 3",
        week: "minggu 3",
      },
      {
        wl: "WL 4",
        singer: "Singer 4",
        piano: "Piano 4",
        keyboard: "Keyboard 4",
        guitar: "Guitar 4",
        bass: "Bass 4",
        drum: "Drums 4",
        multimedia: "Multimedia 4",
        sound: "Sound 4",
        usher: "Usher 4",
        week: "minggu 4",
      },
    ];
    const headers = [
      { title: "WL", key: "wl", sortable: false },
      { title: "Singer", key: "singer", sortable: false },
      { title: "Piano", key: "piano", sortable: false },
      { title: "Keyboard", key: "keyboard", sortable: false },
      { title: "Guitar", key: "guitar", sortable: false },
      { title: "Bass", key: "bass", sortable: false },
      { title: "Drum", key: "drum", sortable: false },
      { title: "Multimedia", key: "multimedia", sortable: false },
      { title: "Sound", key: "sound", sortable: false },
      { title: "Usher", key: "usher", sortable: false },
      { title: "Week", key: "week", sortable: false },
    ];
    return {
      test,
      headers,
      items,
    };
  },
};
