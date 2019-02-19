<template>
  <v-snackbar
    v-model="snackbar.show"
    :timeout="snackbar.timeout"
    bottom="bottom">
    {{ snackbar.message }}
    <v-btn
      color="primary"
      @click="closeSnackbar"
      flat>
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['snackbar'])
  },
  methods: {
    ...mapMutations(['closeSnackbar'])
  }
}
</script>
