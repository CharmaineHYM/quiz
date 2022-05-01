<template>
  <div class="scoreView">
    <h1 class="result_title">Result</h1>
    <div v-if="!data.length">
      <Spinner />
    </div>
    <div class="check" v-else>
    <div class="correct list"><p>Correct Answer:</p> <p>{{ correctAnswer }}</p></div>
    <div class="incorrect list"><p>Incorrect Answer:</p> <p>{{ incorrectAnswer }}</p></div>
    <div class="empty list"><p>Empty:</p> <p>{{ empty }}</p></div>
    </div>
    <router-link :to="{ name: 'home'}" class="btn restart">Restart</router-link>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
export default {
  props: ["answers"],
  components: { Spinner },
  data(){
    return{
      correctAnswer:0,
      incorrectAnswer: 0,
      empty: 0,
      data: []
    }
  },
  mounted(){
      fetch('https://my-json-server.typicode.com/CharmaineHYM/quiz-database/quizes')
        .then(res => res.json())
        .then(data => {
            this.data = data
        })
        .then(() => {
          for(let i=0; i<this.answers.length; i++){
            let question = this.data[i]
            let choices = question.choices
            let correctAns = function(){
              return question.correctAnswer
            }
            console.log(correctAns)
            if(this.answers[i] === ''){
              this.empty++
            }
            if(choices[correctAns()] === this.answers[i]){
                this.correctAnswer++
            }
            if(!(choices[correctAns()] === this.answers[i]) && !(this.answers[i] === '')){
              this.incorrectAnswer++
            }     
           }
        })
        .catch(err => console.log(err.message))

          
}
}

</script>

<style>
  .result_title{
    margin-top: 0;
    text-transform: uppercase;
  }

  .check{
    width: 80%;
  }

  .list{
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 0 1rem;
  }

  .correct{
    color: rgb(8, 198, 8);
  }
  .incorrect{
    color: rgb(220, 12, 12);
  }
  .empty{
    color: rgb(167, 79, 249);
  }

  .restart{
    margin-top: 2rem;
  }
</style>