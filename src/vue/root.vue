<template>
  <div id="root">
    <header-content/>
    <div id="works-panel">
      <div class="row" id="rr">
        <div class="col-sm-4">
          <div class="card fluid">
            <div class="section">
              <h3>SchottkyLink</h3>
            </div>
            <img class="section media"
                 src="https://placehold.it/800x600">
            <div class="section">
              <p>Content</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card fluid">
            <div class="section">
              <h3>SphairahedronExperiment</h3>
            </div>
            <img class="section media"
                 src="https://placehold.it/800x600">
            <div class="section">
              <p>Content</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card fluid">
            <div class="section">
              <h3>JosKleinExperiment</h3>
            </div>
            <img class="section media"
                 src="https://placehold.it/800x600">
            <div class="section">
              <p>Content</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="rr">
        <div class="col-sm-4">
          <div class="card fluid">
            <div class="section">
              <h3>Shaders</h3>
            </div>
            <img class="section media"
                 src="https://placehold.it/800x600">
            <div class="section">
              <p>Content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderContent from './header.vue';
export default {
    props: ['currentRoute'],
    data: function() {
        return {
        }
    },
    components: { HeaderContent }
}
</script>

<style>
#root {
    display: flex;
    flex-direction: column;
}

#works-panel {
    display: flex;
    flex-direction: column;

    align-items:center;
}

#rr {
    width: 90%;
}

</style>
