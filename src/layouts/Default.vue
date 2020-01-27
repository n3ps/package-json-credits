<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<style>
  body {
    font-family: 'Abel', sans-serif;
    background: #000;
    color: #ddd;
  }
  a {
    border-bottom: 1px dashed;
  }
  a:hover {
    cursor: pointer;
    border-bottom-style: solid;
  }
  h2 {
    font-weight: 700;
    font-size: 18px;
  }
  .logo {
    width: auto;
    height: 128px;
  }
  .smallcaps {
    font-variant: small-caps;
  }
  .max-w-600 {
    max-width: 800px;
  }
  .opacity-80 {
    opacity: 0.8;
  }
  .wrapper {
    position: relative;
    margin-top: 0;
    animation: 20s crawl 2s linear;
  }
  @keyframes crawl {
    0% {
      margin-top: 0;
    }
    100% {
      margin-top: -100%;
    }
  }
  @media screen and (min-width: 640px) {
    html {
      font-size: 22px;
    }
  }
</style>
