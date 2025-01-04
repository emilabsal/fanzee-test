<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: $transition;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(16px);
}
</style>
