import { computed, ref } from "vue"
import PublicServiceSchedule from "@/components/PublicServiceSchedule.vue"
import { months } from "@/config/index.js"

export default {
  name: "ServicesPage",
  components: {
    PublicServiceSchedule,
  },
  setup() {
    const data = ref([
      {
        date: new Date(),
        serviceType: "KU1",
        serviceData: {
          "Tema":
            "tema nya panjang banget banget banget banget banget banget banget banget banget banget",
          "Pengkhotbah": "xxxxxx",
          "Majelis Pendamping": "xxxxxx",
          "Liturgis": "xxxxxx",
          "Pemusik": "xxxxxx",
          "Multimedia": "xxxxxx",
          // "Streaming": "xxxxxx",
          // "Usher": "xxxxxx",
          // "Perjamuan Kudus": "xxxxxx",
        },
      },
      {
        date: new Date(),
        serviceType: "KU2",
        serviceData: {
          "Tema":
            "tema nya panjang banget banget banget banget banget banget banget banget banget banget",
          "Pengkhotbah": "xxxxxx",
          "Majelis Pendamping": "xxxxxx",
          "Liturgis": "xxxxxx",
          "Pemusik": "xxxxxx",
          "Multimedia": "xxxxxx",
          // "Streaming": "xxxxxx",
          // "Usher": "xxxxxx",
          // "Perjamuan Kudus": "xxxxxx",
        },
      },
      {
        date: new Date(),
        serviceType: "KU3",
        serviceData: {
          "Tema":
            "tema nya panjang banget banget banget banget banget banget banget banget banget banget",
          "Pengkhotbah": "xxxxxx",
          "Majelis Pendamping": "xxxxxx",
          "Liturgis": "xxxxxx",
          "Pemusik": "xxxxxx",
          "Multimedia": "xxxxxx",
          "Streaming": "xxxxxx",
          "Usher": "xxxxxx",
          "Perjamuan Kudus": "xxxxxx",
        },
      },
    ])

    const selectedDate = ref(new Date())
    const formatSelectedMonth = () => {
      const month = months[selectedDate.value.getMonth()]
      const year = selectedDate.value.getFullYear()
      return `${month} ${year}`
    }

    const prevMonth = () => {
      selectedDate.value.setMonth(selectedDate.value.getMonth() - 1)
      selectedDate.value = new Date(selectedDate.value)
    }

    const nextMonth = () => {
      selectedDate.value.setMonth(selectedDate.value.getMonth() + 1)
      selectedDate.value = new Date(selectedDate.value)
    }

    return {
      data,
      formatSelectedMonth,
      prevMonth,
      nextMonth,
      selectedDate,
    }
  },
}
