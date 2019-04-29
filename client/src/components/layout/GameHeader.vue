<template>
    <div class="gameHeader" >
        <Timer 
            :timer="currentTimer"
            :state="timerState"
        />
        <b-modal ref="my-modal" hide-footer centered title="You have run out of time!">
          <div class="d-block text-center">
            <h4 style="color: green">Correct : {{ numCorrect }}</h4>
            <h4 style="color: red">Incorrect : {{numIncorrect}}</h4>
            <h4 style="color: blue">Total : {{numTotal}}</h4>
          </div>
          <b-button class="mt-3" variant="default" block @click="goHome">Go back</b-button>
        </b-modal>
    </div>
</template>

<script>
import Timer from "./Timer.vue";
export default {
    name: "GameHeader",
    components: {
        Timer
    },
    // props pass by the parent
     props: [   
        'numCorrect',
        'numIncorrect',
        'numTotal'
        ],
    // attributes of the class
    data() {
    return {
      timerState: "stopped",
      currentTimer: 60,
      ticker: undefined,
      laps: [],
      latestLap: "",
      snackbar: false,
    };
  },
  methods: {

    // start the timer
    start() {
      if (this.timerState !== "running") {
        this.tick();
        this.timerState = "running";
      }
    },
    // mark the current
    lap() {
      this.laps.push({
        seconds: this.currentTimer,
      })
    },
    // pause the timer
    pause() {
      window.clearInterval(this.ticker);
      this.timerState = "paused";
    },
    // stop the timer
    stop() {
      window.clearInterval(this.ticker);
      this.currentTimer = 60;
      this.timerState = "stopped";
    },
    // count down till timer stops
    tick() {
        this.ticker = setInterval(() => {
        this.currentTimer--;
          if(this.currentTimer === 0){
            this.stop()
            this.toggleModal()
      }
      }, 1000);
    }, 
    // Country roads take me home.. to the place I belong
    goHome() {
      this.$router.push('/') 
    },
    // We pass the ID of the button that we want to return focus to
    // when the modal has hidden
    toggleModal() {
      this.$refs['my-modal'].toggle('#toggle-btn')
    }
  },
  // called at the time the page created
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

