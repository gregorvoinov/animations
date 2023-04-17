<template>
    <div ref="bg" class="fixed inset-0 flex justify-center items-center z-[999] bg-navi-blue-dark overflow-hidden">
    <!-- <div ref="bg" class="fixed inset-0 flex justify-center items-center z-[999] bg-gradient-to-tr from-navi-blue to-navi-blue-dark overflow-hidden"> -->
        <div class="absolute inset-0 bg-white opacity-0" ref="whiteMask" />
        <div class="w-96 text-center">
            <div class="overflow-hidden mb-2" ref="wrapper" >
                <Logo class="w-full m-auto text-white"/>
            </div>
            <p ref="subcopy" class="text-white text-lg tracking-widest uppercase">The home of luxury yachts</p>
        </div>
    </div>
</template>
<script setup>
import gsap from 'gsap';

    const props = defineProps({
        isLoaded: {
            type: Boolean,
            default: false
        }
    })

    const bg = ref(null)
    const wrapper = ref(null)
    const subcopy = ref(null)
    let complete = ref(false)
    let whiteMask = ref(false)
    
    watch(
        () => [complete.value, props.isLoaded],
        () => {
            console.log(complete.value, props.isLoaded)
            if(complete.value === true && props.isLoaded === true) {
                play()
            }
        }
    ) 
    const emit = defineEmits(['close'])
    
    function play() {
        // gsap.to(whiteMask.value, { opacity: 1, ease:'power4', duration: 0.8})
        gsap.to(bg.value, { 
            backgroundColor: '#ffffff', ease:'power4', duration: 0.8,
            onComplete: () => {
                emit('close')
            }
        })
        gsap.to(bg.value, 
            { height: 0, ease:'power4.easeInOut', duration: 0.6, delay: 0.8, 
            onComplete: ()=> {
                
                setTimeout(()=> {
                    bg.value.remove()
                }, 800)
            }
        })

        // gsap.to(bg.value, { height: 0, ease:'power4', duration: 0.8})
        // gsap.to(bg.value, { scale: 0, opacity: 0, rotate: 45, ease:'power4', duration: 0.8})
    }

    onMounted(() => {
        
        gsap.from(wrapper.value.firstChild, {
            yPercent: 100,
            delay: 0.3,
            ease: 'power4',
            duration: 1
        })

        gsap.from(subcopy.value, {
            opacity: 0,
            delay: 1.3,
            ease: 'power2',
            duration: 1,
            onComplete: ()=> {
                complete.value = true
            }
        })
    })
</script>

<style lang="">
    
</style>