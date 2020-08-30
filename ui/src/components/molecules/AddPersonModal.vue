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
      <h5>{{message}}</h5>
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
    message: null,
  }),
  methods: {
    ...mapMutations(["changeAPM", "changePersons","changeQtn","changeHdc"]),
    goToMap() {
      var qn = this.qntAdult + this.qntChild + this.qntOld + this.qntHand;
      var max;
      switch (this.stateLight) {
        case 4:
          max = 0;
          break;
        case 3:
          max = 4;
          break;
        case 2:
          max = 6;
          break;
        case 1:
          max = 10;
          break;
      }
      this.changePersons(this.qn);
      console.log(qn)
      if(qn==0){
        this.message="At least must be one person."
      }else{
        if(qn>max)
          this.message="The number of people exceeds that allowed by the state of the pandemic."
        else{
          this.changeHdc = (this.qntHand > 0)
          this.changeAPM()
          this.changeQtn(qn)
          this.$router.push({ path: "/map" });
        }
      }
    },
  },
  computed: {
    ...mapState(["addPersonModal", "stateLight"]),
  },
};
</script>

<style>
.card-ctn {
  padding: 20px 50px 5px;
}
</style>
