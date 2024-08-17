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
    const selectedUserId = ref("");
    const items = [
      {
        wl: [
          { name: "Jason", id: "1" },
          { name: "WL 2", id: "WL 2" },
        ],
        singer: [{ name: "Singer 1", id: "Singer 1" }],
        piano: [{ name: "Piano 1", id: "Piano 1" }],
        keyboard: [{ name: "Keyboard 1", id: "Keyboard 1" }],
        guitar: [{ name: "Guitar 1", id: "Guitar 1" }],
        bass: [{ name: "Bass 1", id: "Bass 1" }],
        drum: [{ name: "Jason", id: "1" }],
        multimedia: [{ name: "Multimedia 1", id: "Multimedia 1" }],
        sound: [{ name: "Sound 1", id: "Sound 1" }],
        usher: [{ name: "Usher 1", id: "Usher 1" }],
        week: "minggu 1",
      },
      {
        wl: [
          { name: "WL 2", id: "WL 2" },
        ],
        singer: [
          { name: "Singer 1", id: "Singer 1" },
          { name: "Jason", id: "1" },
        ],
        piano: [{ name: "Piano 1", id: "Piano 1" }],
        keyboard: [{ name: "Keyboard 1", id: "Keyboard 1" }],
        guitar: [{ name: "Guitar 1", id: "Guitar 1" }],
        bass: [{ name: "Jason", id: "1" }],
        drum: [{ name: "yang lain", id: "2" }],
        multimedia: [{ name: "Multimedia 1", id: "Multimedia 1" }],
        sound: [{ name: "Sound 1", id: "Sound 1" }],
        usher: [{ name: "Usher 1", id: "Usher 1" }],
        week: "minggu 2",
      },
    ];
    const headers = [
      { title: "Week", key: "week", sortable: false },
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
    ];

    const selectUser = (id) => {
      if (selectedUserId.value === id) {
        selectedUserId.value = ""
      } else {
        selectedUserId.value = id
      }
    }

    return {
      test,
      headers,
      items,
      selectedUserId,
      selectUser,
    };
  },
};
