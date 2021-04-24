<template>
  <div>
     {{ keys }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Piano',
  computed: {
    ...mapGetters(['keys']),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
