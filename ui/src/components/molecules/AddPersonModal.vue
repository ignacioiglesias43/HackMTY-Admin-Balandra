<template>
  <div>
    <v-dialog
      v-model="addPersonModal"
      hide-backdrop
      ref="modal"
      title="Add Person"
      max-width="400"
      persistent
    >
      <v-card class="card-ctn">
        <v-row>
          <v-col cols="5">
            <span>Adulto</span>
          </v-col>
          <v-col cols="7">
            <PersonQuantity :quantity.sync="qntAdult" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <span>Niños</span>
          </v-col>
          <v-col cols="7">
            <PersonQuantity :quantity.sync="qntChild" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <span>Adultos Mayores</span>
          </v-col>
          <v-col cols="7">
            <PersonQuantity :quantity.sync="qntOld" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <span>Discapacitados</span>
          </v-col>
          <v-col cols="7">
            <PersonQuantity :quantity.sync="qntHand" />
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="changeAPM">Cancel</v-btn>
          <v-btn @click="goToMap">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import PersonQuantity from "./PersonQuantity";
import { mapMutations, mapState } from "vuex";

export default {
  name: "AddPersonModal",
  components: {
    PersonQuantity,
  },
  data: () => ({
    qntAdult: 0,
    qntChild: 0,
    qntOld: 0,
    qntHand: 0,
    qn: null,
  }),
  methods: {
    ...mapMutations(["changeAPM","changePersons"]),
    goToMap(){
        this.qn = this.qntAdult + this.qntChild + this.qntOld
        this.changePersons(this.qn)
        this.$router.push({path:'/map'})
    }
  },
  computed: {
    ...mapState(["addPersonModal"]),
  },
};
</script>

<style>
.card-ctn {
  padding: 20px 50px 5px
}
</style>
