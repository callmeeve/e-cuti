<template>
  <div id="app">
    <router-view  v-if="isAuthenticated" />
    <div v-else>
      <router-view name="Login" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isAuthenticated() {
      // Example logic to determine if user is authenticated
      return true; // Replace with your authentication check
    }
  }
}
</script>