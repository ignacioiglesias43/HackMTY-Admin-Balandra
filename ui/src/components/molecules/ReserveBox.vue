<template>
  <v-container>
    <h1>Reserve</h1>
    <v-form>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-menu
            ref="menuDate"
            v-model="menuDate"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Registration date"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menuDate = false"
                >Cancel</v-btn
              >
              <v-btn text color="primary" @click="$refs.menu.save(date)"
                >Ok</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-menu
            ref="menuTPI"
            v-model="menuTPI"
            :close-on-content-click="false"
            :return-value.sync="timeIn"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="timeIn"
                label="Approx. entry time"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker v-model="timeIn" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menuTPI = false"
                >Cancel</v-btn
              >
              <v-btn text color="primary" @click="$refs.menu.save(timeIn)"
                >Ok</v-btn
              >
            </v-time-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-menu
            ref="menuTPO"
            v-model="menuTPO"
            :close-on-content-click="false"
            :return-value.sync="timeOut"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="timeOut"
                label="Approx. exit time"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker v-model="timeOut" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menuTPO = false"
                >Cancel</v-btn
              >
              <v-btn text color="primary" @click="$refs.menu.save(timeOut)"
                >Ok</v-btn
              >
            </v-time-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-menu
            ref="menu"
            v-model="menuCar"
            :close-on-content-click="true"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="car"
                label="Vehicle"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in carTypes"
                :key="index"
                @click="car = item.title"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-list>
            <list-item v-for="(item, index) in persons" :key="index">
              <v-list-item-title>{{ item.nombre }}</v-list-item-title>
              {{ item.tipo }}
              <v-spacer></v-spacer>
              <v-btn color="error">Delete</v-btn>
            </list-item>
            <v-btn @click="changeAPM">Add Person</v-btn>
          </v-list>
        </v-col>
      </v-row>
    </v-form>
    <AddPersonModal />
  </v-container>
</template>

date: variable donde se guarda la fecha seleccionada por el usuario. timeIn:
variable de la fecha de entrada aproximada del usuario. timeOut: variable de la
fecha aproximada de salida del usuario. car: variable para el tipo de auto
menuDate: para abrir y cerrar el menu de la fecha. menuTPI: para abrir y cerrar
el menu de la hora de entrada. menuTPO: para abrir y cerrar el menu de la hora
de salida. menuCar: para abrir y cerrar el menu del tipo de auto.

<script>
import AddPersonModal from "./AddPersonModal";
import { mapMutations } from 'vuex'

export default {
  name: "ReserverBox",
  data: () => ({
    carTypes: [
      { title: "None" },
      { title: "Automobile" },
      { title: "Van" },
      { title: "Motorcycle" },
    ],
    persons: [],
    date: null,
    timeIn: null,
    timeOut: null,
    car: null,
    menuDate: false,
    menuTPI: false,
    menuTPO: false,
    menuCar: false,
  }),
  components:{
      AddPersonModal
  },
  methods:{
      ...mapMutations(['changeAPM'])
  }
};
</script>

<style></style>
