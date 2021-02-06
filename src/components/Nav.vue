<template>
  <nav class="bg-gray-700">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="/logo.png" alt="Workflow">
            <img class="hidden lg:block h-8 w-auto h-14" src="/logo.png" alt="Workflow">
            <p class="text-white lg:tracking-widest text-2xl pl-3">АРХ<b>ИДЕЯ</b></p>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <NavRouterLink v-if="currentUser" :title="'Главная'" :to="'/'" :active="this.$route.name === 'home'"/>
              <NavRouterLink v-if="currentUser" :title="'Проекты'" :to="'/projects'" :active="this.$route.name === 'projects'"/>
              <NavRouterLink v-if="currentUser" :title="'Доска объявлений'" :to="'/ads'" :active="this.$route.name === 'ads'"/>

              <!-- Admins -->
              <NavRouterLink v-if="currentUser && (currentUser.role === roles.Admin)"
                             :title="'Admin'"
                             :to="'/admin'"
                             :active="this.$route.name === 'admin'"/>
              <!-- End Admins -->

              <NavRouterLink v-if="!currentUser" :title="'Авторизация'" :to="'/login'" :active="this.$route.name === 'login'"/>
              <NavRouterLink v-if="!currentUser" :title="'Регистрация'" :to="'/signup'" :active="this.$route.name === 'signup'"/>
            </div>
          </div>
        </div>
        <div v-if="currentUser" class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="ml-3 relative">
            <NavRouterLink v-if="currentUser" :title="'Профиль'" :to="'/profile'" :active="this.$route.name === 'profile'"/>
            <a href="#" v-if="currentUser" @click.prevent="logout"
               class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" role="menuitem">Выйти</a>

            <div
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                role="menu" aria-orientation="vertical" aria-labelledby="user-menu"
                v-show="alerts">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your
                Profile</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.
      Menu open: "block", Menu closed: "hidden"
    -->
    <div class="hidden sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
        <a href="#"
           class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
        <a href="#"
           class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
        <a href="#"
           class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
      </div>
    </div>
  </nav>
</template>
<script>

import NavRouterLink from "@/components/NavRouterLink";
import {Role} from '@/_helpers/role'
import {authenticationService} from '@/_services/authentication.service';

export default {
  data() {
    return {
      profile: false,
      alerts: false,
      currentUser: authenticationService.currentUserValue,
      roles: Role
    }
  },
  components: {
    NavRouterLink
  },
  methods: {
    logout() {
      authenticationService.logout()
    }
  },
  created() {
    console.log(this.$route)
  }
}
</script>