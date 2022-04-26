<template>
  <div class="home">
    <h1 class="title">{{ title }}</h1>
    <p class="instruction">{{ text }}</p>
     <router-link class="btn start" :to="{ name: 'Questions', params: { id: this.id } }">Start</router-link>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data(){
    return{
      title: "CSS Quiz for beginner",
      text: "The test contains 5 questions with no time limit.",
      id: 1
    }
  }
 
}
</script>

<style>
  .title{
    margin-bottom: .5rem;
    text-transform: uppercase;
  }
  .instruction{
    margin-top: 0;
  }

  .start{
     margin-top: 2rem;
  }
</style>
