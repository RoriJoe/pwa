<template>
<div>
  <v-app>
    <!-- header -->
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue"
      dark
      app
      fixed
      flat>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <span class="hidden-sm-and-down">PWA</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y min-width="150">
        <v-btn icon slot="activator">
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile @click="onClick()">
            <v-list-tile-action>
              <v-icon color="#a6a6a6">mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ 'Notif' }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-menu offset-y min-width="150">
        <v-btn icon large slot="activator">
          <v-avatar size="25px" tile>
            <img
              src="./assets/logo.svg"
              alt="Vuetify">
          </v-avatar>
        </v-btn>
        <v-list>
          <v-list-tile @click="onClick()">
            <v-list-tile-action>
              <v-icon color="#a6a6a6">person_pin</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ 'Profile' }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <!-- main -->
    <v-content>
      <router-view/>
    </v-content>

    <!-- footer -->
    <v-footer
      app
      fixed
      height="auto">
      <v-layout
        justify-center
        row
        wrap>
        <v-flex
          blue
          py-3
          text-xs-center
          white--text
          xs12>
          &copy; {{ new Date().getFullYear() }} Asrori | <strong>Made With <v-icon small color="pink">favorite</v-icon></strong>
        </v-flex>
      </v-layout>
    </v-footer>

    <!-- detect offline mode -->
    <detect-network v-on:detected-condition="detected" />
    <Snackbar/>
  </v-app>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import detectNetwork from 'v-offline'
import Snackbar from '@/components/Snackbar'

export default {
  name: 'App',
  components: {
    'detect-network': detectNetwork,
    Snackbar
  },
  data () {
    return {
      snackbarsss: false
    }
  },
  methods: {
    ...mapActions([
      'setSnackbar',
      'setOffline',
      'setOnline'
    ]),
    detected (status) {
      if (status === false) {
        this.snackbarsss = true
        this.setOffline()
        this.setSnackbar({
          show: true,
          msg: 'Connection internet not available !'
        })
      } else {
        this.setOnline()
      }
    },
    onClick () {
      console.log('onClick')
    }
  }
}
</script>
