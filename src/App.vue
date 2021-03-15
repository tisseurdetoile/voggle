<template>
  <h1>Voggle</h1>
  <Timer :timer="180" />
  <br />
  <div class="board">
    <Dice
      v-for="diceFace in scrambleDices"
      :key="diceFace.id"
      :letter="diceFace"
    />
  </div>
</template>

<script>
import Dice from './components/Dice'
import Timer from './components/Timer'

const gameDices = {
  boggle: {
    dices: [
      ['L', 'E', 'N', 'U', 'Y', 'G'],
      ['E', 'L', 'U', 'P', 'S', 'T'],
      ['Z', 'D', 'V', 'N', 'E', 'A'],
      ['S', 'D', 'T', 'N', 'O', 'E'],
      ['A', 'M', 'O', 'R', 'I', 'S'],
      ['F', 'X', 'R', 'A', 'O', 'I'],
      ['M', 'O', 'Q', 'A', 'B', 'J'],
      ['F', 'S', 'H', 'E', 'E', 'I'],
      ['H', 'R', 'S', 'N', 'E', 'I'],
      ['E', 'T', 'N', 'K', 'O', 'U'],
      ['T', 'A', 'R', 'I', 'L', 'B'],
      ['T', 'I', 'E', 'A', 'O', 'A'],
      ['A', 'C', 'E', 'P', 'D', 'M'],
      ['R', 'L', 'A', 'S', 'E', 'C'],
      ['U', 'L', 'I', 'W', 'E', 'R'],
      ['V', 'G', 'T', 'N', 'I', 'E'],
    ],
  },
  foggle: {
    dices: [
      ['5', '0', '6', '9', '7', '8'],
      ['6', '3', '5', '1', '2', '4'],
      ['8', '7', '6', '5', '0', '9'],
      ['4', '5', '2', '6', '3', '1'],
      ['5', '2', '6', '4', '3', '1'],
      ['1', '8', '2', '0', '9', '7'],
      ['4', '7', '8', '1', '0', '2'],
      ['9', '0', '1', '2', '4', '3'],
      ['4', '5', '2', '6', '1', '3'],
      ['4', '2', '3', '0', '9', '1'],
      ['2', '1', '4', '3', '6', '5'],
      ['6', '3', '4', '5', '7', '8'],
      ['6', '3', '4', '5', '7', '8'],
      ['6', '9', '0', '8', '7', '5'],
      ['7', '2', '9', '1', '0', '8'],
      ['7', '2', '9', '1', '0', '8'],
    ],
  },
}

export default {
  name: 'App',
  components: {
    Dice,
    Timer,
  },
  data() {
    return {
      game: 'boggle',
    }
  },
  computed: {
    // @TODO : passer dans un modules
    getDices() {
      return gameDices[this.game].dices
    },
    scrambleDices() {
      return this.getDices
        .map((rolledDice) => ({
          position: Math.random(),
          face: rolledDice[Math.floor(Math.random() * rolledDice.length)],
        }))
        .sort((dice1, dice2) => dice1.position - dice2.position)
        .map((dice) => dice.face)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.board {
  margin: 0 auto;
  width: 500px;
  display: grid;
  grid-template-columns: repeat(4, 124px);
  grid-gap: 0px;
  grid-auto-rows: minmax(120px, auto);
}
</style>
