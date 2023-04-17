<template>
    <section class="h-screen flex justify-center items-end">
      <TextRevealEffect class="absolute z-20" :autoplay="false" :startAnimation="revealHeading" >
        <h1 class="font-austin tracking-wide text-9xl m-auto max-w-screen-xl text-center uppercase text-white mb-20">
                  FRASER 

          The home of luxury          yachts</h1>
      </TextRevealEffect>
      <div class="absolute z-10 inset-0 h-full bg-gradient-to-t from-black/50 to-black/0"></div>
      <ImageBoxParallaxEffect class="h-screen w-full" :overflowY="400">
      <img ref="bgImg" src="/img10.jpg" alt="" class="h-screen w-full object-cover z-0">
      </ImageBoxParallaxEffect>
    </section>
</template>
<script setup>
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  const props = defineProps({
        showHeader: {
            type: Boolean,
            default: false
        }
    })
    const revealHeading = ref(false)
    const bgImg = ref(null)

    function showHeaderAni() {
        
        gsap.fromTo(bgImg.value,
        {
            yPercent: 10,
            scale: 1.1,
        },
        {
            yPercent: 0,
            scale: 1,
            ease:'circ',
            duration: 1,
            onComplete: () => {
               
            }
        })
        setTimeout(()=> {
            revealHeading.value = true
        }, 400)
    }    

    watch(
        () => props.showHeader,
        () => {
            showHeaderAni()
        }
    )

  
</script>
<style lang="">
    
</style>