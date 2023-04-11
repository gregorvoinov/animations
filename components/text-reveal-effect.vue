<template lang="">
    <slot />
</template>
<script setup>
    import { splitText } from "~/composables/split-text";
    import { useSlots } from 'vue'
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    gsap.registerPlugin(ScrollTrigger)

    const props = defineProps({
        autoplay: {
            type: Boolean,
            default: true
        },
        startAnimation: {
            type: Boolean,
            default: false
        }
    })
    // root element
    let el = null

    watch(
        () => props.startAnimation,
        () => {
            play()
        }
    )    

    onMounted(() => {
        const slots = useSlots()
        //get first node
        el = slots.default()[0].el
        //splitt text to single lines
        splitText({el, type: 'lines'})
        // hide heading
        const spans = el.querySelectorAll('span')
            gsap.set(spans, {
                yPercent: 100
            })
        if(props.autoplay) {
            // animate lines when they are scrolled into viewport
            ScrollTrigger.create({
                trigger: el,
                start: 'bottom bottom',
                onEnter: play,
            })
        }
    })

    function play() {
        const spans = el.querySelectorAll('span')
            gsap.to(spans, {
                duration: 1,
                yPercent: 0,
                ease: "power4",
                stagger: 0.1
            })
    }
</script>
<style>
    /* class is set from split-text.js */
    .split-line{
        overflow: hidden
    }
</style>