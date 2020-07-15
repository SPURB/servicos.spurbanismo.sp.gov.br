<template>
  <div class="btn-scroller-down" @mouseenter="hovering=true" @mouseleave="hovering=false">
    <svg class="btn-scroller-down__icon" width="80" height="52" :viewBox="`0 0 80 ${ hovering ? '40' : '52' }`" fill="none">
      <g filter="url(#filter0_d)">
        <path d="M9 6L39 36L69 6" stroke="white" stroke-width="5" />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0.232239"
          y="0.232178"
          width="79.5355"
          height="51.3033"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="1" dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'BtnScrollerDown',
  data () {
    return {
      hovering: false
    }
  },
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.btn-scroller-down {
  cursor: pointer;
  background-color: #5CD6C9;
  height: 8vh;
  justify-content: center;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  transition: all ease-in-out 0.15s;
  &:hover {
    height: 8.5vh;
    box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.20);
  }
}
</style>