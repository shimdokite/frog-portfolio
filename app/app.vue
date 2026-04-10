<template>
  <div class="app-pond-bg min-h-screen">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style scoped>
.app-pond-bg {
  position: relative;
  overflow: hidden;
  background: linear-gradient(200deg, #0c3640 10%, #0a353e 40%, #082e36 100%);
}
</style>
