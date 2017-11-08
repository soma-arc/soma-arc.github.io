<template>
  <div class="panel-parent">
    <div class="grid">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
    </div>
  </div>
</template>

<script>
const Masonry = require('masonry-layout');

export default {
    mounted: function() {
        let $masonry = new Masonry('.grid', {
            itemSelector: '.grid-item',
            // use element for option
//            columnWidth: '.masonry-grid-sizer',
//            percentPosition: true
        });
    }
}
</script>

<style>
.grid {
    background: #EE1;
    width: 90%
}

.grid-item {
    width:100px;
    height: 120px;
    float: left;
    background: #D26;
    border: 2px solid #333;
    border-color: hsla(0, 0%, 0%, 0.5);
    border-radius: 5px;
}

</style>
