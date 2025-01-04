<template>
  <footer class="footer">
    <span class="footer__title h5">Test Task, 2022</span>
    <div class="footer__block">
      <a
        href="tel:5183632171"
        class="footer__phone text"
        >518-363-2171</a
      >
      <p class="footer__address text">91 Park St. Fairhope, AL 36532</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
  padding: 31px 48px;
  @include flex($jc: space-between);
  background-color: $color-background;

  &__block {
    @include flex($fd: column, $ai: start, $gap: 4px);
  }

  &__phone {
    text-decoration: underline;
  }
}

@media screen and (max-width: 700px) {
  .footer {
    padding: 12px;
  }
}
</style>
