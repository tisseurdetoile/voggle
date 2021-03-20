<template>
  <button v-on:click="$emit('msg-game-choice', this.game)">{{ game }}</button>
</template>

<script>
export default {
  props: { game: { type: String, required: true } },
  emits: ['msg-game-choice'],
}
</script>

<style scoped>
button {
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
</style>
