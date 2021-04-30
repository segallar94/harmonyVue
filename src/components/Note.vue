<template>
  <div :class="['note', noteStyle]">
     {{ noteName }}
  </div>
</template>

<script>

export default {
  name: 'Note',
  props: {
      noteName: String,
  },
  computed: {
    noteStyle() {
      if (this.noteName.includes('#') || this.noteName.includes('b')) {
        return 'black'
      }
      return 'white'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.note {
  height: calc(var(--width) * 4);
  width: var(--width);
}

.white {
  --width: 100px;
  background-color: white;
  border: 1px solid #333;
  z-index: -1;
}

.black {
  --width: 60px;
  background-color: black;
  margin-left: -30px;
  margin-right: -30px;
  z-index: 2;
  position: absolute;
}

</style>
