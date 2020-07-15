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

  a {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15px;
    height: 100%;
    width: 100%;
    text-decoration: none;  
  
    &:hover {
      background-color: #4F4F4F;
      transition: ease-in-out .5s;
      box-shadow: 0px -8px 8px rgba(0, 0, 0, 0.25);
    }

    h3 {
      font-size: 2rem;
      margin-bottom: 15px;
    }

    @media (min-width: 1024px) {
      align-items: center;
      flex-direction: row;
      justify-content: space-around;

      h3, p {
        width: 50%;
      }

      h3 {
        font-size: 2.5rem;
        text-align: center;
      }
      p {
        font-size: 14pt;
      }
    }
  }
}
</style>