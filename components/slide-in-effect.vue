<template>
    <div ref="wrapper">
        <slot />
    </div>
</template>
<script setup>
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    gsap.registerPlugin(ScrollTrigger)

    const props = defineProps({
        offset: {
            type: Number,
            default: 25
        },
        start: {
            type: Number,
            default: 80
        },
        duration: {
            type: Number,
            default: 1
        }
    })

    const wrapper = ref(null)

    onMounted(() => {
        gsap.fromTo(wrapper.value, 
            {
                yPercent: props.offset,
                opacity: 0
            },
            {
                ease: 'power4',
                yPercent: 0,
                scale: 1,
                opacity: 1,
                duration: props.duration,
                scrollTrigger: {
                    trigger: wrapper.value,
                    start: `top ${props.start}%`,
                }
            }
        )
    })
</script>
<style lang="">
    
</style>