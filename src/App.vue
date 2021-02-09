<template>
  <div
    id="app"
    class="content"
    :class="{ 'content--collapsed': collapse }"
    @click="setClick"
  >
    <section class="content__load-screen" :class="collapse ? 'animation' : ''">
      <hero :collapse="collapse" :headline="about" />
      <btn-scroller-down  :collapse="collapse" v-if="!collapse"/>
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
import { reactive, toRefs, onMounted } from 'vue'
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
        case 0: case 3: return '#5CD6C9'
        case 1: case 4: return '#008375'
        case 2: return '#005249'
      }
    }
    const setIncrement = () => {
      state.count++
    }

    onMounted(() => {
      const { width } = window.screen
      const { body } = window.document

      if (width > 1024) {
        body.setAttribute('style', 'overflow:hidden')
      }
      else {
        body.setAttribute('style', 'overflow:auto')
      }
      
    })

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
      animation: minimum 1s ease-in-out;
    }
  }

  &__main-screen {
    height: 97vh;
    width: 100%;
  }

  &__btn-scroller {
    align-self: flex-end;
  }
}

@keyframes minimum {
  0% { height: 97vh;}
  100% { width: 150px }
}
</style>
