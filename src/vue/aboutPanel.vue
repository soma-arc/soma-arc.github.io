<template>
  <div class="panel-parent">
    <div id="about-panel">
      <h3></h3>
      <h3>Links</h3>
      <ul class="about-links">
        <li>GitHub <a href="https://github.com/soma-arc">https://github.com/soma-arc</a></li>
        <li>Facebook</li>
        <li>Shadertoy</li>
        <li>Hatena Blog</li>
        <li>Twitter</li>
        <li>Other activities and publications</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #about-panel {
      width: 50%;
  }
  .about-links {
      justify-content: start;
      flex-direction: column;
      text-align: left;
      align-items: flex-start;
      list-style: circle;
  }
</style>
