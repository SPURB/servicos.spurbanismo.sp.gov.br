<template>
  <div :class="collapse ? 'hero hero__animation' : 'hero'">
    <hero-logo :collapse="collapse" />
    <div :class="collapse ? 'hiddenText' : ''" >{{ headline }}</div>
  </div>
</template>
<script>
import HeroLogo from './HeroLogo.vue'
import { watchEffect } from 'vue'

export default {
  name: 'Hero',
  components: {
    HeroLogo
  },
  props: {
    headline: {
      type: String,
      required: true
    },
    collapse: {
      type: Boolean,
      required: true
    }
  },
  setup ({ collapse }) {
    watchEffect(() => console.log('Hero.vue ' + collapse))
  }
  
}
</script>

<style lang="scss" scoped>
.hero {
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  
  @media (max-width: 1024px) {
    &__animation {
      width: 100%;
      transition: ease-in-out;
      animation: slider 2s ease-in-out;
      -webkit-animation-fill-mode: forwards;    
    }
  }

  > .hiddenText {
    animation: smoke 1.5s ease-in-out;
    -webkit-animation-fill-mode: forwards;    
  }
}
@keyframes smoke {
  0% { opacity: 1; }
  25% { opacity: .75; }
  50% { opacity: .50; }
  75% { opacity: .25; }
  100% { opacity: 0; height: 0;}
}

@keyframes slider {
  0% { width: 100%;}
  100% { width: 35%; }
}


</style>