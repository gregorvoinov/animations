<template>
  <div>
    <preloader :isLoaded="loaded" @close="preloaderDone"/>
    <TopNavigation class="z-50" :showNavi="startAni" />
    <NuxtPage :showHeader="startAni"/>
  </div>
</template>
<script setup> 
  import Lenis from '@studio-freight/lenis'

  const loaded = ref(false)
  const startAni = ref(false)
  
  onMounted(() => {
    const lenis = new Lenis()
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)

    //fake onload header image and font should be loaded
    setTimeout(() => {
      loaded.value = true
    }, 1000)
  })

  function preloaderDone(){
    startAni.value = true
  }

</script>
