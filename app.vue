<template>
 
  <div class="">
    <section class="h-screen bg-slate-50 p-10 flex justify-center items-center">
      <TextRevealEffect :autoplay="false" :startAnimation="revealHeading">
        <h1 class="text-7xl m-auto max-w-screen-xl text-center uppercase">
                  FRASER 

          The home of luxury          yachts</h1>
      </TextRevealEffect>
    </section>
    <section>
      <div class="relative">
        <ImgRevelEffect class="aspect-video">
          <img src="img1.jpg" alt="" class="w-full h-full object-cover" >
        </ImgRevelEffect>
      </div>
    </section>
    <section class="h-screen p-10 flex justify-center items-center">
      <TextRevealEffect>
        <h1 class="text-7xl m-auto max-w-screen-xl text-center uppercase">Second of two SeaXplorer Yachts project managed by Fraser - The launch</h1>
      </TextRevealEffect>
    </section>
    <section>
      <div class="relative flex">
        <ImgRevelEffect class="aspect-square flex-1">
          <img src="img2.jpg" alt="" class="w-full h-full object-cover absolute" >
        </ImgRevelEffect>
        <ImgRevelEffect class="aspect-square flex-1" >
          <img src="img3.jpg" alt="" class="w-full h-full object-cover absolute" >
        </ImgRevelEffect>
      </div>
    </section>
    <section class="h-screen p-10 flex justify-center items-center">
      <TextRevealEffect>
        <h1 class="text-7xl m-auto max-w-screen-xl text-center uppercase">Step Aboard Another World</h1>
      </TextRevealEffect>
    </section>
    <ContactLarge />
    <section class="h-screen p-10"></section>
  </div>
</template>
<script setup>
  import Lenis from '@studio-freight/lenis'
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  const revealHeading = ref(false)
  setTimeout(() => {
    revealHeading.value = true
  }, 1000)
  
  onMounted(() => {
    const lenis = new Lenis()
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  })
</script>
