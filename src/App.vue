<template>
  <div id="app" class="content">
    <section class="content__load-screen" :class="collapse ? 'animation' : ''">
      <hero :collapse="collapse" :headline="about" />
      <btn-scroller-down @click="setClick" :collapse="collapse" v-if="!collapse"/>
    </section>
    
    <section id="main-screen" class="content__main-screen">
      <ul>
        <app-list-item
          v-for="(app, index) in apps"
          :key="index"
          :name="app.name"
          :description="app.description"
          :path="app.path"
          :background="setBackground(index)"
        />
      </ul>
    </section>
  </div>
</template>

<script>
import content from './content.json'
import { reactive, toRefs, toRef } from 'vue'
import Hero from './components/Hero.vue'
import HeroLogo from './components/HeroLogo.vue'
import AppListItem from './components/AppListItem.vue'
import BtnScrollerDown from './components/BtnScrollerDown.vue'

export default {
  name: 'App',
  components: {
    Hero,
    HeroLogo,
    AppListItem,
    BtnScrollerDown
  },
  setup () {
    const { about, apps } = content
    let state = reactive({
      count: 0,
      collapse: false
    })
    const setClick = (event) => {
      state.collapse = true
    }
    const setBackground = (index) => {
      switch (index) {
        case 0: return '#5CD6C9'
        case 1: return '#008375'
        case 2: return '#005249'
        case 3: return '#5CD6C9'
      }
    }
    const setIncrement = () => {
      state.count++
    }

    return {
      about,
      apps,
      ...toRefs(state),
      setClick,
      setIncrement,
      setBackground
    }
  }
}
</script>
<style lang="scss">
$preto: #000;
$verde: #008375;
$verde-escuro: #005249;
$verde-claro: #5CD6C9;

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', 'Segoe UI', 'Helvetica', Arial, sans-serif;


  &__load-screen {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;

    &.animation {
      height: 5vh;
      padding: 15px 0;
      animation: minimum 3s ease-in-out;
    }
  }

  &__main-screen {
    height: 100vh;
    width: 100%;

    ul {
      height: 100%;
    }
  }

  &__btn-scroller {
    align-self: flex-end;
  }
}

@keyframes minimum {
  0% { height: 100vh;}
  100% { height: 5vh; }
}
</style>
