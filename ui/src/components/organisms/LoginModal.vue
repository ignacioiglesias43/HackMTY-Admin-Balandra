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
      <v-card-title class="headline">{{modalTitle}}</v-card-title>
      <form ref="form">
        <v-container>
          <v-row>
            <v-text-field
              v-model="name"
              prepend-icon="mdi-account"
              label="Full name"
              v-if="!signModal.type "
              :rules="[() => !!name || 'This field is required']"
            ></v-text-field>
            <v-text-field
              v-model="email"
              prepend-icon="mdi-email"
              label="Email"
              :rules="[() => !!email || 'This field is required']"
            ></v-text-field>
            <v-text-field
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="password"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              :rules="[() => !!password || 'This field is required']"
            ></v-text-field>
          </v-row>
        </v-container>
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
      showPassword: false,
    };
  },
  methods: {
    ...mapMutations(["changeSM"]),
  },
  computed: {
    ...mapState(["signModal"]),
    modalTitle: function () {
      return this.signModal.type ? "Log In" : "Sign In";
    },
  },
};
</script>

<style>
.card-ctn {
  padding: 20px 50px 5px;
}
</style>
