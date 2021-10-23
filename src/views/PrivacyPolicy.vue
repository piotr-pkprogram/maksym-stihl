<template>
  <div></div>
</template>

<script>
export default {
  beforeRouteLeave(_, __, next) {
    if (this.$store.getters.isPhoneMenuOpen) {
      this.$store.commit("openClosePhoneMenu");
    }

    this.$store.commit("appearHiddenLoader", true);
    next();
  },
  created() {
    setTimeout(() => {
      this.$store.commit("appearHiddenLoader", false);
    }, 500);
  },
};
</script>

<style></style>
