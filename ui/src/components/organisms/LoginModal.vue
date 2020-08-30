<template>
  <v-dialog
    v-model="signModal.state"
    hide-backdrop
    ref="modal"
    :title="modalTitle"
    max-width="400"
    persistent
  >
    <v-card class="card-ctn">
      <v-card-title>{{modalTitle}}</v-card-title>
      <form ref="form">
        <v-text-field
          v-model="name"
          label="Full name"
          v-if="!signModal.type "
          :rules="[() => !!name || 'This field is required']"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          :rules="[() => !!password || 'This field is required']"
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="Email"
          :rules="[() => !!email || 'This field is required']"
        ></v-text-field>
      </form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="changeSM({state: false, type: false})">Cancel</v-btn>
        <v-btn>Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      email: null,
      password: null,
      name: null,
    };
  },
  methods: {
    ...mapMutations(["changeSM"]),
  },
  computed: {
    ...mapState(["signModal"]),
    modalTitle: function() {
      return this.signModal.type ? "Log In" : "Sign In";
    },
  },
};
</script>

<style>
.card-ctn {
  padding: 20px 50px 5px
}
</style>
