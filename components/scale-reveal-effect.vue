<template>
    <div ref="wrapper" class="overflow-hidden relative">
        <slot />
    </div>
</template>
<script setup>
    import { useSlots } from 'vue'
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    gsap.registerPlugin(ScrollTrigger)
    const wrapper = ref(null)
    onMounted(() => {
        const slots = useSlots()
        //get first node
        const el1 = wrapper.value.children[0]
        const el2 = wrapper.value.children[1]

        console.log(el1)
        // console.log(el2.classList.add('hidden'))

        gsap.fromTo(el2, 
            {
                yPercent: -100,
                scale: 0.8,
                opacity: 0
            },
            {
                yPercent: 0,
                scale: 1,
                scrollTrigger: {
                    transformOrigin:'bottom center',
                    trigger: el2,
                    start: "center 70%",
                    end: "bottom 20%",
                    scrub: 0,
                    onEnter: self => {
                        el2.style.opacity = 1
                    },
                    onLeaveBack: self => {
                        el2.style.opacity = 0
                    },
                }
            }
        )
    })
</script>
<style lang="">
    
</style>