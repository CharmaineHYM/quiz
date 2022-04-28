<template>
  <div class="loading">
  <p>Loading...</p>
  <div class="spinner"></div>
  </div>
</template>

<style>
    .loading{
        text-align: center;
    }
    .loading p{
        margin-bottom: 10px;
    }
    .spinner{
        width: 100px;
        height: 10px;
        background-color: rgba(114, 114, 114, 0.44);
        border-radius: 20px;
        overflow: hidden;
        position: relative;
    }
    .spinner::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: #4B9DEA;
        animation: loading 1s ease-in-out infinite;
    }

    @keyframes loading {
        0%{
            transform: translateX(-100%);
        }
        50%{
            transform: translateX(0%);
        }100%{
            transform: translateX(100%);
        }
    }
</style>