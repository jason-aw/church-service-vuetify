import ServiceCard from "@/components/ServiceCard.vue"
import { months } from "@/config/index.js"

export default {
  name: "PublicServiceSchedule",
  components: {
    ServiceCard,
  },
  props: {
    data: Array,
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const date = props.data[0].date
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const weekOfMonth = (0 | (date.getDate() / 7)) + 1

    const formattedDate = `Minggu ${weekOfMonth}, ${day} ${months[month]} ${year}`
    return {
      formattedDate
    }
  }
}