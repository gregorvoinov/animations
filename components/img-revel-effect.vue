<template lang="">
    <div ref="wrapper" class=" overflow-hidden">
        <div class="w-full h-full">
            <slot/>
        </div>
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

    onMounted(() => {
        // const slots = useSlots()
        //get first node
        img = wrapper.value.querySelectorAll('img')

        gsap.fromTo(wrapper.value, 
            {
                scale: 0.8,
            },
            {
                scale: 1,
                scrollTrigger: {
                    transformOrigin:'bottom center',
                    trigger: wrapper.value,
                    start: 'top bottom',
                    end: 'top 20%',
                    scrub: 0,
                    ease: "power4"
                    // onUpdate: self => {
                    //     console.log(self.progress)
                    // }
                }
            }
        )

        gsap.fromTo(img, 
            {
                scale: 1.2,
            },
            {
                scale: 1,
                scrollTrigger: {
                    transformOrigin:'bottom center',
                    trigger: img,
                    start: 'top bottom',
                    end: 'top 20%',
                    ease: "power4",
                    scrub: 0
                }
            }
        )
    })
</script>
<style lang="">
    
</style>