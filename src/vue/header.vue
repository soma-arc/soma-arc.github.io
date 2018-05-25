<template>
  <header>
    <h1 class="site-title select-disabled">
      soma-arc.net
    </h1>
    <div class="site-navigation">
      <ul class="header-buttons">
        <li class="button-elem">
          <v-link class="v-link-button" href="/">About</v-link>
        </li>
        <li class="button-elem">
          <v-link class="v-link-button" href="/projects">Projects</v-link>
        </li>
        <li class="button-elem">
          <v-link class="v-link-button" href="/activity">Publications / Activities</v-link>
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
    background-color: #1a2227;
}

.site-title {
    text-align: center;
}

.select-disabled {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    cursor: default;
}

.site-navigation {
    text-align: center;
}

.header-buttons {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.button-elem {
    list-style:none;
    margin: 0px 10px 0px 10px;
}

.v-link-button {
    display: block;
}
</style>
