<template>
    <div class="gameHeader" >
        <Timer
            :timer="currentTimer"
            :state="timerState"
        />
        <h5>Correct : {{ numCorrect }}</h5>
        <h5>Incorrect : {{numIncorrect}}</h5>
        <h5>Total : {{numTotal}}</h5>
    </div>
</template>

<script>
import Timer from "./Timer.vue";
export default {
    name: "GameHeader",
    components: {
        Timer
    },
     props: [   
        'numCorrect',
        'numIncorrect',
        'numTotal'
        ],
    data() {
    return {
      timerState: "stopped",
      currentTimer: 60,
      ticker: undefined,
      laps: [],
      latestLap: "",
      snackbar: false
    };
  },
  methods: {
    start() {
      if (this.timerState !== "running") {
        this.tick();
        this.timerState = "running";
      }
    },
    lap() {
      this.laps.push({
        seconds: this.currentTimer,
      })
      console.log(this.latestLap);
    },
    pause() {
      window.clearInterval(this.ticker);
      this.timerState = "paused";
    },
    stop() {
      window.clearInterval(this.ticker);
      this.currentTimer = 60;
      this.timerState = "stopped";
    },
    tick() {
        this.ticker = setInterval(() => {
        this.currentTimer--;
          if(this.currentTimer === 0){
            this.stop()
            alert()
      }
      }, 50);
    },
  },
  created() {
    this.start()
  },   
};

</script>

<style scoped>
    .gameHeader{
        background: lightgray;
        text-align: center;
        color: gray;
        padding: 15px;
    }
</style>

