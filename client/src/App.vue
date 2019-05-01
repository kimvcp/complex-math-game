<template>
  <v-app>
    <v-content>
      <Timer :timer="formattedTime" :state="timerState" @start="start" @lap="lap" @pause="pause" @stop="stop"/>
    </v-content>
  </v-app>
</template>

<script>
// import PostComponent from "./components/PostComponent.vue";
import Timer from "./components/Timer.vue";
export default {
  name: "app",
  components: {
    Timer
  },
  data() {
    return {
      timerState: "stopped",
      currentTimer: 60,
      formattedTime: "00:00:60",
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
        formattedTime: this.formatTime(this.currentTimer)
      }),
        (this.latestLap = this.formatTime(this.currentTimer));
        console.log(this.latestLap);
    },
    pause() {
      window.clearInterval(this.ticker);
      this.timerState = "paused";
    },
    stop() {
      window.clearInterval(this.ticker);
      this.currentTimer = 60;
      this.formattedTime = "00:00:60";
      this.timerState = "stopped";
    },
    tick() {
      this.ticker = setInterval(() => {
        this.currentTimer--;
        this.formattedTime = this.formatTime(this.currentTimer);
      }, 1000);
    },
    formatTime(seconds) {
      let measuredTime = new Date(null);
      measuredTime.setSeconds(seconds);
      let MHSTime = measuredTime.toISOString().substr(11, 8);
      return MHSTime;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
