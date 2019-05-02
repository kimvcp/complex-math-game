<template>
    <div class="gameHeader" >
        <Timer 
            :timer="currentTimer"
            :state="timerState"
        />
        <b-modal ref="my-modal" hide-footer centered title="You have run out of time!">
           <template slot="modal-header" class="d-block center;"> 
              <h4>Correct : {{numCorrect}}</h4>
              <h4>Incorrect : {{numIncorrect}}</h4>
              <h4>Total : {{numTotal}}</h4><br>
          </template>
          <template>
            <div
              v-for=" (question,index) in resultQuestions"
              v-bind:key="index"
              class="center"
             > 
            Question {{index+1}}: {{question.question}}
            </div>
        </template>
          <b-button class="mt-3" variant="info" size="lg" block @click="goHome">Save the result</b-button>
        </b-modal>
    </div>
</template>

<script>
import Timer from "../Timer.vue";
import APIService from "../../APIService";
export default {
    name: "GameHeader",
    components: {
        Timer
    },
    // props pass by the parent
     props: [   
        'numCorrect',
        'numIncorrect',
        'numTotal',
        'tableNumber',
        'resultQuestions'
        ],
    // attributes of the class
    data() {
    return {
      timerState: "stopped",
      currentTimer: 60,
      ticker: undefined,
      laps: [],
      highScore: [],
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
        seconds: this.currentTimer
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
      }, 50);
    }, 
    // Country roads take me home.. to the place I belong
    goHome() {
      this.$router.push('/') 
    },

    // update the high score if possible
    toggleModal() {
      this.$refs['my-modal'].toggle('#toggle-btn')
      const preHighScore = JSON.parse(JSON.stringify(this.highScore))[0].highscore
      if(this.numCorrect > preHighScore){
        APIService.postHighScore(this.tableNumber,this.numCorrect)
      }
    }
  },
  // called at the time the page created
  async created() {
    this.start()
    try {
        this.highScore = await APIService.getHighScore(this.tableNumber);
      } catch (err) {
        this.err = err.message;
      }
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
    .center { 
      border: 2px solid lightgray;
      padding: 5px;
      margin: 10px
}
</style>

