<template>
 
  <div class="">
    <section class="h-screen bg-slate-50 p-10 flex justify-center items-center">
      <TextRevealEffect :autoplay="false" :startAnimation="revealHeading">
        <h1 class="text-7xl m-auto max-w-screen-xl text-center uppercase">
                  FRASER 

          The home of luxury          yachts</h1>
      </TextRevealEffect>
    </section>
    <section class="container flex flex-col gap-20">
      <div class="flex gap-5">
        <ImageBoxParallaxEffect class="flex-1 aspect-4/3">
          <img src="/img5.jpg" alt="" class="w-full h-full object-cover" >
        </ImageBoxParallaxEffect>
        <div class="flex-1">
          <h3 class="text-2xl uppercase mb-2">Monaco - Monte carlo</h3>
          <p class="mb-4">Embarking your chosen luxury charter yacht you will have time to settle in to your vessel which will be home for the next week. Your crew will show you around the facilities and give you some time to get the champagne flowing and your belongings unpacked.</p>
          <ul>
            <li>Famous Monte Carlo casino</li>
            <li>Take some time at one of the local spas</li>
            <li>Taking a stroll across the promenade in the Riviera heat</li>
            <li>Visit The Prince’s Palace of Monaco</li>
            <li>The Oceanographic Museum of Monaco</li>
          </ul>
        </div>
      </div>
      <div class="flex gap-5">
        <ImageBoxParallaxEffect class="flex-1 aspect-4/3 order-2">
          <img src="/img6.jpg" alt="" class="w-full h-full object-cover" >
        </ImageBoxParallaxEffect>
        <div class="flex-1 order-1">
          <h3 class="text-2xl uppercase mb-2">Monaco - Monte carlo</h3>
          <p class="mb-4">Embarking your chosen luxury charter yacht you will have time to settle in to your vessel which will be home for the next week. Your crew will show you around the facilities and give you some time to get the champagne flowing and your belongings unpacked.</p>
          <ul>
            <li>Famous Monte Carlo casino</li>
            <li>Take some time at one of the local spas</li>
            <li>Taking a stroll across the promenade in the Riviera heat</li>
            <li>Visit The Prince’s Palace of Monaco</li>
            <li>The Oceanographic Museum of Monaco</li>
          </ul>
        </div>
      </div>
      <div class="flex gap-5">
        <ImageBoxParallaxEffect class="flex-1 aspect-4/3">
          <img src="/img7.jpg" alt="" class="w-full h-full object-cover" >
        </ImageBoxParallaxEffect>
        <div class="flex-1">
          <h3 class="text-2xl uppercase mb-2">Monaco - Monte carlo</h3>
          <p class="mb-4">Embarking your chosen luxury charter yacht you will have time to settle in to your vessel which will be home for the next week. Your crew will show you around the facilities and give you some time to get the champagne flowing and your belongings unpacked.</p>
          <ul>
            <li>Famous Monte Carlo casino</li>
            <li>Take some time at one of the local spas</li>
            <li>Taking a stroll across the promenade in the Riviera heat</li>
            <li>Visit The Prince’s Palace of Monaco</li>
            <li>The Oceanographic Museum of Monaco</li>
          </ul>
        </div>
      </div>
      <TextRevealEffect :autoplay="false" :startAnimation="revealHeading">
        <h1 class="text-7xl m-auto max-w-screen-xl text-center uppercase">LET'S HAVE A GLANCE AT THE TOP CHARTER DESTINATIONS FOR THIS UPCOMING SUMMER 2023</h1>
      </TextRevealEffect>
      <ImageBoxParallaxEffect class="aspect-video">
        <img src="/img9.jpg" alt="" class="w-full h-full object-cover" >
      </ImageBoxParallaxEffect>
      <TextRevealEffect :autoplay="false" :startAnimation="revealHeading">
        <p class="m-auto max-w-3xl text-center uppercase">
          Famous for its magnanimous film festival, Cannes takes you back to cosmopolitan France and a continuation of the ultimate level of luxury. This popular stretch of the French Riviera is well known for being a playground for the rich and famous, so where better to mingle with a host of big names and brands.
          
          Meander down the Promenade de la Croisette to be surrounded by palm trees and stunning beaches. Indulge in some sand time to soak up some rays or continue down the walkway to see the beautiful Croisette gardens and take lunch at one of the many favorable French bistros. While in the Croisette area you can take full advantage of the high profile location and indulge in some more shopping. Visit some of your favorite boutiques for some quality pieces before stashing your new purchases on board your yacht and returning to the shore for dinner.
        </p>
      </TextRevealEffect>
    </section>
    <section>
      <div class="relative pt-40">
        <ImgRevelEffect class="aspect-video">
          <img src="/img1.jpg" alt="" class="w-full h-full object-cover" >
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
          <img src="/img2.jpg" alt="" class="w-full h-full object-cover absolute" >
        </ImgRevelEffect>
        <ImgRevelEffect class="aspect-square flex-1" >
          <img src="/img3.jpg" alt="" class="w-full h-full object-cover absolute" >
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
