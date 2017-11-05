<template>
  <header>
    <h1 class="site-title">
      soma-arc.net
    </h1>
    <div class="site-navigation">
      <ul>
        <li>
          <v-link href="/">Home</v-link>
        </li>
        <li>
          <v-link href="/projects">Projects</v-link>
        </li>
        <li>
          <v-link href="/garally">Garally</v-link>
        </li>
        <li>
          <v-link href="/about">About / Contact</v-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import VLink from './vLink.vue'
export default {
    components: {
        VLink
    }
}
</script>

<style>
header {
    height: 100px;
}

.site-title {
    text-align: center;
}

.site-navigation {
    text-align: center;
}

ul {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

li {
    list-style:none;
    margin: 0px 10px 0px 10px;
      
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
}
</style>
