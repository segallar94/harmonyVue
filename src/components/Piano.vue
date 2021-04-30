<template>
  <div class="container">
    <div v-bind:key="note" v-for="note in keysFromStartToEnd(0,61)">
      <note :note-name="note"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Note from './Note.vue';

export default {
  name: 'Piano',
  components: {
    Note,
  },
  computed: {
    ...mapGetters(['keys']),
  },
  methods: {
    keysFromStartToEnd(start, end) {
      return this.keys.slice(start, end)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*, *::before, *::after {
  box-sizing: border-box;
}

.container {
  display: flex;
  margin: 0;
  background-color: blue;
  padding: 10px;
  justify-content: center;
  align-content: center;
}
</style>
