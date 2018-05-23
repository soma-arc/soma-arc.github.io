<template>
  <div class="panel-parent">
    <div class="row" v-for="sp in slicedProjects">
      <project-card v-for="project in sp" :project="project"/>
    </div>
  </div>
</template>

<script>
import ProjectCard from './projectCard.vue';
const PROJECTS_DATA = require('./projectsData.json');

export default {
    data: function() {
        return {
        }
    },
    computed: {
        slicedProjects: function() {
            const list = []
            let innerList = []
            let index = 0;

            for (const project of PROJECTS_DATA.projectList) {
                if (index % 3 === 0) {
                    innerList = []
                }
                innerList.push(project);
                if (index % 3 === 2) {
                    list.push(innerList);
                }
                index++;
            }
            if (index % 3 !== 0) {
                list.push(innerList);
            }
            return list;
        },
    },
    components: {
        ProjectCard
    }
}
</script>

<style>
.row {
    width: 90%;
}

</style>
