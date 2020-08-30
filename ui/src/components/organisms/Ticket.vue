<template>
  <div>
    <qrcode-vue :value="value" :size="size" level="L"></qrcode-vue>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
export default {
  name: "Ticket",

  data: () => ({
    value:
      '{"id":1,"adults":1,"older_adults":1,"children":1,"handicapped":0,"date":"2020-08-31T00:00:00.000Z","arrival":"10:30:00","departure":"20:00:00","Parking":{"id":1,"type_of_car":"Ninguno","createdAt":"2020-08-30T08:28:22.000Z","updatedAt":"2020-08-30T08:28:22.000Z"},"Place":{"id":2,"lat":"24.321874","lon":"-110.3252","place_number":"Zona 2","palm_roof":true,"capacity":7,"handicapped_seats":0,"createdAt":"2020-08-30T08:28:22.000Z","updatedAt":"2020-08-30T08:28:22.000Z"},"User":{"id":1,"name":"Ignacio Iglesias Campoy","email":"iiglesiascampoy@gmail.com"}}',
    size: 300,
  }),
  components: {
    QrcodeVue,
  },
};
</script>

<style></style>
