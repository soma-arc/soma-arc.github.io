<template>
  <div id="root">
    <header-content/>
    <keep-alive>
      <transition name="component-fade" mode="out-in">
        <component v-bind:is="viewComponent"></component>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
import HeaderContent from './header.vue';
import ProjectsPanel from './projectsPanel.vue';
import HomePanel from './homePanel.vue';
import GalleryPanel from './galleryPanel.vue';
import AboutPanel from './aboutPanel.vue';
import Routes from './routes.js';

export default {
    props: ['currentRoute'],
    data: function() {
        return {
            view: 'home-panel'
        }
    },
    components: { HeaderContent,
                  ProjectsPanel,
                  HomePanel,
                  GalleryPanel,
                  AboutPanel
                },
    computed: {
        viewComponent: function() {
            return Routes[this.currentRoute];
        }
    }
}
</script>

<style>
#root {
    display: flex;
    flex-direction: column;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}

.panel-parent {
    display: flex;
    flex-direction: column;
    align-items:center;
}

</style>
