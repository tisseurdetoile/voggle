<template>
  <div class="dice">
    <span
      class="letter"
      v-bind:class="[{ underline: isUnderline }, textPosition]"
      >{{ letter }}</span
    >
  </div>
</template>

<script>
const undelineLetters = ['W', 'Z', 'N']
const textClassPosition = [
  'horizontal',
  'quart-clockwise',
  'quart-anticlockwise',
  'upside-down',
]

export default {
  props: { letter: { type: String, required: true } },
  computed: {
    isUnderline() {
      return undelineLetters.indexOf(this.letter) !== -1
    },
    textPosition() {
      return textClassPosition[
        Math.floor(Math.random() * textClassPosition.length)
      ]
    },
  },
}
</script>

<style scoped>
.dice {
  background-color: tomato;
  width: 104px;
  height: 104px;
  border-radius: 10%;
  line-height: 104px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.horizontal {
  transform: rotate(0deg);
}

.quart-anticlockwise {
  transform: rotate(-90deg);
}

.quart-clockwise {
  transform: rotate(90deg);
}

.upside-down {
  transform: rotate(180deg);
}

.underline {
  text-decoration: underline;
}

.dice .letter {
  font-weight: bold;
  font-size: 80px;
}
</style>
