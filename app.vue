<template>
  <div class="">
    <section class="h-screen bg-slate-50 p-10">
      <TextRevealEffect :autoplay="false" :startAnimation="revealHeading">
        <h1 class="text-7xl m-auto max-w-screen-xl text-center uppercase">
                  FRASER 

          The home of luxury          yachts</h1>
      </TextRevealEffect>
    </section>
    <section class="h-screen bg-slate-200 p-10">
      <TextRevealEffect>
        <h1 class="text-7xl m-auto max-w-screen-xl text-center uppercase">Step Aboard Another World</h1>
      </TextRevealEffect>
    </section>
    <section class="h-screen bg-slate-300 p-10">
      <TextRevealEffect>
        <h1 class="text-7xl m-auto max-w-screen-xl text-center uppercase">Second of two SeaXplorer Yachts project managed by Fraser - The launch</h1>
      </TextRevealEffect>
    </section>
  </div>
</template>
<script setup>
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  const revealHeading = ref(false)
  setTimeout(() => {
    revealHeading.value = true
  }, 1000)
</script>
