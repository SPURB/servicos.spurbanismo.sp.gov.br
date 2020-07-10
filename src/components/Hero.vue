<template>
  <div class="hero">
    <hero-logo :collapse="collapse" />
    <div>{{ headline }}</div>
  </div>
</template>
<script>
import HeroLogo from './HeroLogo.vue'

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
  setup (props) {
    console.log('collapse from hero, collapse: ' + props.collapse)
  }
}
</script>