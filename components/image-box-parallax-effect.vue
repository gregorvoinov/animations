<template>
    <div class="overflow-hidden" ref="wrapper">
        <slot />
    </div>
</template>
<script setup>
    import { useSlots } from 'vue'
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger'

    gsap.registerPlugin(ScrollTrigger)

   // root element
   const wrapper = ref(null)
    // img
    let img = null

    const overflowY = 200

    onMounted(() => {
        let img_height = wrapper.value.clientHeight
        const slots = useSlots()
        img = slots.default()[0].el
        img_height = img_height + overflowY
        img.style.height = `${img_height}px`
        console.log(img_height)

        gsap.to(img, {
            ease: 'power1',
            y:`-${overflowY}px`,
            scrollTrigger: {
                trigger: wrapper.value,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })
    
    
    // gsap.fromTo(img, 
    //         {
    //             yPercent: -100,
    //             scale: 1,
    //         },
    //         {
    //             yPercent: 0,
    //             scale: 1,
    //             scrollTrigger: {
    //                 transformOrigin:'bottom center',
    //                 trigger: el2,
    //                 start: "top bottom",
    //                 end: "bottom top",
    //                 scrub: 0,
    //                 onEnter: self => {
    //                     el2.style.opacity = 1
    //                 },
    //                 onLeaveBack: self => {
    //                     el2.style.opacity = 0
    //                 },
    //             }
    //         }
    //     )
    })
</script>
<style lang="">
    
</style>