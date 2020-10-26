<template>
  <div class="TimerContainer">
    <div class="loading-bar">
      <div
        class="percentage"
        v-bind:class="{ red: isRed, yellow: isYellow, lessGreen: isLessGreen }"
        :style="{ width: percent + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: { timer: { type: Number, required: true } },
  data() {
    return {
      timerCount: this.timer,
      timerCountTot: this.timer,
    }
  },
  computed: {
    isShow() {
      return this.timerCount > 0
    },
    isRed() {
      return this.percent <= 10 || this.timerCount <= 1
    },
    isYellow() {
      return this.percent <= 20
    },
    isLessGreen() {
      return this.percent <= 50
    },
    percent() {
      let percent = (this.timerCount / this.timerCountTot) * 100
      return this.timerCount > 1 ? percent : 100
    },
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--
          }, 1000)
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
}
</script>
<style lang="scss" scoped>
.TimerContainer {
  display: flex;
  justify-content: center;
  font-size: 8rem;
  color: #555;
}

.loading-bar {
  position: relative;
  width: 400px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba($color: #000, $alpha: 0.4), 0 -1px 1px #fff,
    0 1px 0 #fff;

  .percentage {
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    display: block;
    height: 100%;
    border-radius: 15px;
    background-color: #a5df41;
    background-size: 30px 30px;
    background-image: linear-gradient(
      135deg,
      rgba($color: #fff, $alpha: 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba($color: #fff, $alpha: 0.15) 50%,
      rgba($color: #fff, $alpha: 0.15) 75%,
      transparent 75%,
      transparent
    );
    animation: animate-stripes 3s linear infinite;
  }

  .lessGreen {
    background-color: #cfdf41;
  }

  .yellow {
    background-color: #dfc741;
  }

  .red {
    background-color: red;
  }
}

@keyframes animate-stripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 0;
  }
}
</style>
