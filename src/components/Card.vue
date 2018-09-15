<template>
  <div class="card">
    <div class="card__body">
      <div class="card__pic">
        <img class="card__img" :src="beer.image_url" :alt="beer.name"> 
      </div>
      <div class="card__main">
        <div class="card__header">
          {{ beer.name }}
        </div>
        <div class="card__description">
          {{ beer.description }}
        </div>
      </div>
    </div>
    <div class="card__fav"></div>
  </div>
</template>

<script>
export default {
  props: [ 'beer' ],
  components: { }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Mukta+Malar|Open+Sans');
.card {
  height: 320px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 1px 5px 20px -7px rgba(0, 0, 0, 0.4);
  font-family: 'Mukta Malar', sans-serif;
}
.card__body {
  display: flex;
  padding: 30px 25px;
}
.card__pic {
  width: 155px;
  box-sizing: border-box;
}
.card__img {
  max-height: 255px;
}
.card__main {
  width: 320px;
  padding: 0 8px;
  box-sizing: border-box;
}
.card__header {
  font-size: 20px;
}
.card__description {
  height: 195px;
  overflow: hidden;
  padding: 16px 0 0;
  font-size: 16px;
  text-align: left;
}
</style>