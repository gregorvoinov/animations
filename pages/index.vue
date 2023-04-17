<template>
    <div class="">
      <heroBanner :showHeader="showHeader"/>
      <HighlightCopy class="my-60"/>
      <section class="container flex flex-col gap-28">
        <slideInEffect :offset="10" :duration="2">
        <div class="flex gap-5">
          <ImageBoxParallaxEffect class="flex-1 aspect-4/3">
            <img src="/img5.jpg" alt="" class="w-full h-full object-cover">
          </ImageBoxParallaxEffect>
          <!-- <slideInEffect class="flex-1" :start="70" :offset="10"> -->
            <div class="flex-1 order-1">
            <h3 class="font-austin tracking-wide  text-2xl uppercase mb-2">Monaco - Monte carlo</h3>
            <p class="mb-4">Embarking your chosen luxury charter yacht you will have time to settle in to your vessel which will be home for the next week. Your crew will show you around the facilities and give you some time to get the champagne flowing and your belongings unpacked.</p>
            <ul>
              <li>Famous Monte Carlo casino</li>
              <li>Take some time at one of the local spas</li>
              <li>Taking a stroll across the promenade in the Riviera heat</li>
              <li>Visit The Prince’s Palace of Monaco</li>
              <li>The Oceanographic Museum of Monaco</li>
            </ul>
            </div>
          <!-- </slideInEffect> -->
          </div>
        </slideInEffect>
        <!-- <slideInEffect :offset="10"> -->
        <div class="flex gap-5">
          <ImageBoxParallaxEffect class="flex-1 aspect-4/3 order-2">
            <img src="/img6.jpg" alt="" class="w-full h-full object-cover" >
          </ImageBoxParallaxEffect>
          <!-- <slideInEffect class="flex-1 order-1" :start="70" :offset="10"> -->
            <div class="flex-1 order-1">
            <h3 class="font-austin tracking-wider  text-2xl uppercase mb-2">Monaco - Monte carlo</h3>
            <p class="mb-4">Embarking your chosen luxury charter yacht you will have time to settle in to your vessel which will be home for the next week. Your crew will show you around the facilities and give you some time to get the champagne flowing and your belongings unpacked.</p>
            <ul>
              <li>Famous Monte Carlo casino</li>
              <li>Take some time at one of the local spas</li>
              <li>Taking a stroll across the promenade in the Riviera heat</li>
              <li>Visit The Prince’s Palace of Monaco</li>
              <li>The Oceanographic Museum of Monaco</li>
            </ul>
          </div>
          <!-- </slideInEffect> -->
        </div>
        <!-- </slideInEffect> -->
        <!-- <slideInEffect :offset="10"> -->
          <div class="flex gap-5">
            <ImageBoxParallaxEffect class="flex-1 aspect-4/3">
              <img src="/img7.jpg" alt="" class="w-full h-full object-cover" >
            </ImageBoxParallaxEffect>
            <!-- <slideInEffect class="flex-1" :start="70" :offset="10"> -->
              <div class="flex-1">
              <h3 class="font-austin tracking-wide  text-2xl uppercase mb-2">Monaco - Monte carlo</h3>
              <p class="mb-4">Embarking your chosen luxury charter yacht you will have time to settle in to your vessel which will be home for the next week. Your crew will show you around the facilities and give you some time to get the champagne flowing and your belongings unpacked.</p>
              <ul>
                <li>Famous Monte Carlo casino</li>
                <li>Take some time at one of the local spas</li>
                <li>Taking a stroll across the promenade in the Riviera heat</li>
                <li>Visit The Prince’s Palace of Monaco</li>
                <li>The Oceanographic Museum of Monaco</li>
              </ul>
            </div>
            <!-- </slideInEffect> -->
          </div>
        <!-- </slideInEffect> -->
        <section>
          <TextRevealEffect class="mt-40 mb-10">
            <h2 class="font-austin tracking-wide text-7xl m-auto max-w-screen-xl text-center uppercase">LET'S HAVE A GLANCE AT THE TOP CHARTER DESTINATIONS FOR THIS UPCOMING SUMMER 2023</h2>
          </TextRevealEffect>
          <ImageBoxParallaxEffect class="aspect-video mb-10">
            <img src="/img9.jpg" alt="" class="w-full h-full object-cover" >
          </ImageBoxParallaxEffect>
          <slideInEffect>
            <p class="m-auto max-w-3xl text-center leading-relaxed">
              Famous for its magnanimous film festival, Cannes takes you back to cosmopolitan France and a continuation of the ultimate level of luxury. This popular stretch of the French Riviera is well known for being a playground for the rich and famous, so where better to mingle with a host of big names and brands.
              
              Meander down the Promenade de la Croisette to be surrounded by palm trees and stunning beaches. Indulge in some sand time to soak up some rays or continue down the walkway to see the beautiful Croisette gardens and take lunch at one of the many favorable French bistros. While in the Croisette area you can take full advantage of the high profile location and indulge in some more shopping. Visit some of your favorite boutiques for some quality pieces before stashing your new purchases on board your yacht and returning to the shore for dinner.
            </p>
          </slideInEffect>
        </section>
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
          <h2 class="font-austin tracking-wide text-7xl m-auto max-w-screen-xl text-center uppercase">Second of two SeaXplorer Yachts project managed by Fraser - The launch</h2>
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
          <h2 class="font-austin tracking-wide text-7xl m-auto max-w-screen-xl text-center uppercase">Step Aboard Another World</h2>
        </TextRevealEffect>
      </section>
      <ContactLarge />
      <section class="h-screen p-10"></section>
    </div> 
  </template>
<script setup>
    const props = defineProps({
        showHeader: {
            type: Boolean,
            default: false
        }
    })
</script>
<style>
    
</style>