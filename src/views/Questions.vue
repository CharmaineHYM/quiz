<template>
    <div class="questionView">
        <div v-if="!quiz.id">
            <Spinner />
        </div>
        <form class="question" v-else>
        <h1>{{ quiz.question }}</h1>
        <div class="choices" v-for="choice in quiz.choices" :key="choice">
            <input class="choice" type="radio" :id="choice" :value="choice" v-model="selected"  @click="storeAnswer">
            <label :for="choice" class="choice_label">{{ choice }}</label>
         </div>
        <button class="btn next" @click.prevent="submitAnswer" v-if="submit">Next</button>
        <router-link :to="{ name: 'Score', params: { answers: this.answers }}" v-if="final" >
            <button @click="finalSubmit" class="btn submit">Submit</button>
        </router-link>
        </form>
    </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'

export default {
    props: ['id'],
    components: { Spinner },
    data(){
        return{
            quiz: [],
            answer: null,
            answers: [],
            q: 5,
            number: 1,
            submit: true,
            final: false,
            selected: null,
            isSelected: false
        }
    },
     methods:{
        storeAnswer(e){
            this.answer = e.target.value
            this.isSelected = true
        },
        submitAnswer(){
            if(!(this.isSelected)){
                this.answer = null
                this.isSelected = false
            }else{
                 this.isSelected = false
            }
            this.number++
            this.answers.push(this.answer)

              if(!(this.number > this.q)){
             this.$router.push('/questions/' + this.number)
             fetch('https://my-json-server.typicode.com/CharmaineHYM/quiz-database/quizes/' + this.number)
                .then(res => res.json())
                .then(data => {
                    this.quiz = data
                })
                .catch(err => console.log(err.message))
                }if(this.number === this.q){ 
                    this.submit = !this.submit
                    this.final = !this.final
                }
           },
           finalSubmit(){
                this.answers.push(this.answer)         
           }
    },
    mounted(){
        fetch('https://my-json-server.typicode.com/CharmaineHYM/quiz-database/quizes/' + this.id)
        .then(res => res.json())
        .then(data => {
            this.quiz = data
        })
        .catch(err => console.log(err.message))
    }
}
</script>

<style>
    .questionView{
        text-align: left;
    }
    .question{
        width: 90%;
    }

    input{
        display: none;
    }
    .choice_label {
        position: relative;
		font-weight: bold;
        padding: .5rem 0;
        margin: 10px 0;
        border: 1px solid #4B9DEA;
        border-radius: 10px;
        display: flex;
        align-items: center;
        padding-left: 10px;
        cursor: pointer;
        transition: background-color 300ms ease-in-out,
                    box-shadow 300ms ease-in-out;
    }

    .questionView .choice_label:hover{
        background-color: #4B9DEA;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    .questionView input[type="radio"]:checked + .choice_label{
        background-color: #4B9DEA;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    .next, .submit{
        margin: 1rem 0 2rem 0;
    }

</style>