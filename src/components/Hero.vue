<template>
  <div :class="collapse ? 'hero hero--animation' : 'hero'">
    <hero-logo :collapse="collapse" />
    <div class='hero__headline' :class="collapse ? 'hiddenText' : ''" >{{ headline }}</div>
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
  &__headline {
    line-height: 4;
  }
  @media (max-width: 1024px) {
    &--animation {
      transition: ease-in-out;
      transition-delay: 1.25s;
    }
  }

  > .hiddenText {
    animation: smoke 0.75s ease-in-out;
    animation-fill-mode: forwards;
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
</style>
