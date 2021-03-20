<template>
  <h1>Voggle</h1>

  <div v-if="this.game == null">
    <h2>A quoi voulez vous jouer ?</h2>
    <div class="board">
      <Choice
        v-for="game in listGames"
        :key="game.id"
        :game="game"
        @msg-game-choice="gameChoice"
      ></Choice>
    </div>
  </div>

  <div v-if="this.game != null">
    <Timer :timer="180" @msg-time-up="endGame" />
    <br />
    <div class="board">
      <Dice
        v-for="diceFace in scrambleDices"
        :key="diceFace.id"
        :letter="diceFace"
      />
    </div>
  </div>
</template>

<script>
import Dice from './components/Dice'
import Timer from './components/Timer'
import Choice from './components/Choice'

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
    Choice,
  },
  data() {
    return {
      game: null,
    }
  },
  methods: {
    gameChoice(game) {
      console.log('gameChoice', game)
      this.game = game
    },
    endGame() {
      console.log('endGame')
    },
    resetGame() {
      console.log('resetGame')
      this.game = null
    },
  },
  computed: {
    // @TODO : passer dans un modules
    getDices() {
      return gameDices[this.game].dices
    },
    listGames() {
      return Object.keys(gameDices)
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

h3 {
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
.board {
  margin: 0 auto;
  width: 500px;
  display: grid;
  grid-template-columns: repeat(4, 124px);
  grid-gap: 0px;
  grid-auto-rows: minmax(120px, auto);
}
</style>
