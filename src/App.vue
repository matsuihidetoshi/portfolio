<template>
  <div id="app">
    <div id="top-image">
      <h1 id="title"><span>Matsui Hidetoshi's</span>&nbsp;<span>portfolio</span></h1>
    </div>
    <ul id="menu">
      <router-link to="/"><li>Go to Home</li></router-link>
      <router-link to="/skills"><li>Go to Skills</li></router-link>
      <router-link to="/works"><li>Go to Works</li></router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#top-image {
  background: url('./assets/top_sea.jpg') center;
  background-size: cover;
  width: 100%;
  padding-top: 90px;
  padding-bottom: 30px;
}
ul {
  list-style: none;
  padding-left: 0;
}
a {
  color: #444444;
}
#menu {
  margin: 5px 0 0 0;
  text-align: center;
}
#menu li {
  display: inline-block;
  background-color: #cccccc;
  padding: 10px 13% 10px 13%;
  margin: 5px 5px 0 5px;
  font-weight: bold;
  transition-duration: 0.5s;
}
#menu li:hover {
  background-color: #68d1d8;
}
#title span {
  display: inline-block;
  float: left;
  margin-left: 20px;
  color: white;
}
.small-title {
  margin: 20px 0 20px 0;
}
.section * ul {
  text-align: left;
}
.section * ul li {
  margin-bottom: 5px;
}
.section div {
  display: inline-block;
  vertical-align: top;
}
.section-image {
  width: 280px;
  overflow: hidden;
}
.section-image img {
  background-size: cover;
  height: 300px;
}
.section-text {
  height: 300px;
}
@media screen and (max-width: 480px) {
  #menu li {
    display: block;
  }
}
</style>
