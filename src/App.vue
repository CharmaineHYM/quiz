<template>
  <router-view class="router"/>
</template>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url(https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.router{
  margin: 100px auto;
  max-width: 680px;
  min-height: 450px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  color: #fff;
}

.router::after{
  content: '';
  position: absolute;
  width: 95%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  border-radius: 20px;
  background-color: #6f6f6f3b;
  background: linear-gradient(251deg, #2c3e50 -53%, rgba(255, 255, 255, 0) 65%);
  backdrop-filter: blur(30px);
  box-shadow: rgba(6, 6, 6, 0.2) 0px 7px 29px 0px;
}

.router::before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: .05;
  z-index: -1;
  background-color: #fff;
}

.btn{
  border: none;
  background-color: #2c3e50;
  padding: .5rem 3rem;
  color: #fff;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 2px;
  transition: background 300ms ease-in-out,
              transform 500ms ease-in-out;
}

.btn:hover{
  background-color: #416080;
  transform: scale(1.1);
}
</style>
