<template>
  <li class='list-item' :style="{ backgroundColor: background }">
    <a :href="path">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
    </a>
  </li>
</template>
<script>
export default {
  name: 'ListItem',
  props: {
    name: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    background: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {  
  display: flex;
  height: 25%;
  text-align: left;
  align-items: center;
  padding: 0 15px;

  background-color: #005249;

  a {
    color: #fff;
    text-decoration: none;

    h3 {
      font-size: 2rem;
      margin-bottom: 15px;
    }
  }
}
</style>