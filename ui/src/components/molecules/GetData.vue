<template>
  <v-container class="aux-ctn">
    <v-form ref="form">
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="nameAux"
            label="Name"
            :rules="[() => !!nameAux || 'This field is required']"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="emailAux"
            label="Email"
            :rules="[() => !!emailAux || 'This field is required']"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="cellAux"
            label="Cellphone"
            :rules="[() => !!cellAux || 'This field is required']"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="btn-ctn">
          <v-spacer></v-spacer>
          <v-btn class="mr-5">Aceptar</v-btn>
          <v-btn>Cancelar</v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    nameAux: null,
    emailAux: null,
    cellAux: null,
  }),
};
</script>

<style>
.aux-ctn {
  background-color: cadetblue;
  border-radius: 20px;
  opacity: 0.8;
}
.btn-ctn{
    margin: 5px 10px;
}
</style>
