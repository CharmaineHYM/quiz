<template>
  <div class="scoreView">
    <div class="score_container">
    <h1 class="result_title">Result</h1>
    <div v-if="!data.length">
      <Spinner />
    </div>
    <div class="check" v-else>
    <div class="correct list"><p>Correct Answer:</p> <p>{{ correctAnswer }}</p></div>
    <div class="incorrect list"><p>Incorrect Answer:</p> <p>{{ incorrectAnswer }}</p></div>
    <div class="empty list"><p>Empty:</p> <p>{{ empty }}</p></div>
      <div v-for="quiz in data" :key="quiz.id">
            <h1>{{ quiz.question }}</h1>
            <div ref="choice_label">
         <div class="choices" v-for="choice in quiz.choices" :key="choice">
            <label class="choice_label">{{ choice }}</label> 
         </div>
         </div>
      </div>
     <router-link :to="{ name: 'home'}" class="btn restart">Restart</router-link>
    </div>
    </div>
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
            this.$refs.choice_label[i].children[correctAns()].classList.add('correct_label')
            if(this.answers[i] === ''){
              this.empty++
            }
            if(choices[correctAns()] === this.answers[i]){
                this.correctAnswer++
            }
            if(!(choices[correctAns()] === this.answers[i]) && !(this.answers[i] === '')){
              this.incorrectAnswer++
              for(let y=0; y<choices.length; y++){
                if(this.$refs.choice_label[i].children[y].innerText === this.answers[i]) 
                this.$refs.choice_label[i].children[y].classList.add('incorrect_label')
              }
            }     
           }
        })
        .catch(err => console.log(err.message))

          
}
}

</script>

<style>
  .score_container{
    overflow: scroll;
    max-height: 450px;
    max-width: 680px;
    margin: 2.5rem 2rem;
  }

  .scoreView{
    overflow: hidden;
  } 
  .scoreView .choice_label:hover{
    cursor: auto;
  }
  .result_title{
    margin-top: 0;
    text-transform: uppercase;
  }

  .list{
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 0 1rem;
  }

  .incorrect_label .choice_label{
    background-color: rgb(220, 12, 12);
    border-color: rgb(220, 12, 12);
  }

  .correct{
    color: rgb(8, 198, 8);
  }

  .correct_label .choice_label{
    background-color: rgb(8, 198, 8);
    border-color: rgb(8, 198, 8);
  }

  .incorrect{
    color: rgb(220, 12, 12);
  }

  .empty{
    color: rgb(167, 79, 249);
  }

  .choices:last-child{
    margin-bottom: 2rem;
  }

  .check{
    margin-bottom: 1rem;
  }
</style>