<template>
  <div class="col-sm-4">
    <div class="card fluid">
      <div class="section">
        <h3>{{ project.title }}</h3>
      </div>
      <div class="section card-content">
        <img class="caption-img"
             :src="project.captionSrc">
        <p v-html=" project.description"></p>
        <ul class="project-links">
          <li v-for="link in project.links" class="project-link-list">
            <a :href="link.url" target="_blank">{{ link.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props: ['project'],
}
</script>

<style>
.project-links {
    padding-left: 0px;
    justify-content: start;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    list-style: circle;
}

.project-link-list {
 margin-left:10px;
 list-style: circle;
}

.caption-img {
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
}

.card {
      height: 95%;
}

.card-content {
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
}
</style>
