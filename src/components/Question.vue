<template>
  <div v-if="quiz.show">
  <h1>{{ quiz.question }}</h1>
  <div class="choices" v-for="choice in quiz.choices" :key="choice">
      <button>{{ choice }}</button>
  </div>
  </div>
</template>

<script>
export default {
    props:['quiz'],
    data(){
        return{
            answered: 1
        }
    }
}
</script>

<style>

</style>