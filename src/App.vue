<template>
  <div id="app">
    <hero :collapse="collapse" :headline="about"/>
    <ul>
      <app-list-item
        v-for="(app, index) in apps"
        :key="index"
        :name="app.name"
        :description="app.description"
        :path="app.path"
      />
    </ul>
    <btn-scroller-down @click.prevent="setClick"/>
  </div>
</template>

<script>
import content from './assets/content.json'
import { reactive } from 'vue'
import Hero from './components/Hero.vue'
import AppListItem from './components/AppListItem.vue'
import BtnScrollerDown from './components/BtnScrollerDown.vue'

export default {
  name: 'App',
  components: {
    Hero,
    AppListItem,
    BtnScrollerDown
  },
  setup () {
    const { about, apps } = content
    let collapse = reactive({ collapse: false })
    const setClick = (event) => console.log(event)

    return {
      about,
      apps,
      collapse: collapse.collapse,
      setClick
    }
  }
}
</script>
<style lang="scss">
$preto: #000;
$verde: #008375;
$verde-escuro: #005249;
$verde-claro: #5CD6C9;

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Roboto', 'Segoe UI', 'Helvetica', Arial, sans-serif;
}
</style>
