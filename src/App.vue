<template>
  <div id="app">
    <div class="main">
      <MainHeader/>
      <div class="main__body">
        <ul class="beers" v-if="beers">
          <li class="beers__item" v-for="beer in beers" :key="beer.id">
            <Card :beer="beer"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { API_URL } from './consts.js'
import { makeRequest } from './utils.js'
import MainHeader from './components/MainHeader.vue'
import Card from './components/Card.vue'

export default {
  name: 'app',
  data() {
    makeRequest(API_URL)
      .then( data => {
        this.$data.beers = data;
      })

    return { 
      beers: []
    };
  },
  components: { 
    MainHeader, 
    Card 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.beers {
  list-style: none;
  padding: 0;
  margin: 0;
}
.beers__item {
  display: inline-block;
  padding: 20px 16px;
}
</style>
