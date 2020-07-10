<template>
  <li class='list-item'>
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
    }
  }
}
</script>