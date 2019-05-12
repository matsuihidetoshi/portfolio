<template>
  <div id="app">
    <div id="top-image">
      <h1 id="title"><span>Matsui Hidetoshi's</span>&nbsp;<span>Portfolio</span></h1>
    </div>
    <ul id="menu">
      <router-link to="/"><li>Home</li></router-link>
      <router-link to="/skills"><li>Skills</li></router-link>
      <router-link to="/works"><li>Works</li></router-link>
    </ul>
    <router-view/>
    <footer>
      <div id="footer_navi">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/skills">Skills</router-link></li>
          <li><router-link to="/works">Works</router-link></li>
        </ul>
      </div>
      <small>&copy; 2019 Matsui Hidetoshi.</small>
    </footer>
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
  margin-top: 0;
  text-align: left;
}
.section * ul li {
  margin-bottom: 5px;
}
.section div {
  display: inline-block;
  vertical-align: top;
}
.section-title {
  font-size: 1.2em;
  margin: 40px 0 20px;
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
  font-size: 0.9em;
}
.footer-insert {
  margin-top: 300px;
}
footer #footer_navi ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}
footer {
  margin-top: 100px;
  background-color: #956840;
  text-align: center;
}
footer #footer_navi {
  background-color: #f0f0f0;
  padding: 10px 0;
}
footer #footer_navi li {
  display: inline;
  border-left: solid 1px #333;
  margin-left: 8px;
  padding-left: 8px;
  font-size: smaller;
}
footer #footer_navi li:last-child {
  border-right: solid 1px #333;
  padding: 0 8px;
}
footer small {
  display: inline-block;
  padding: 8px 0;
  color: #fff;
}
@media screen and (max-width: 480px) {
  #menu li {
    display: block;
  }
  footer {
    margin-top: 100px;
  }
  .footer-insert {
    display: none;
  }
  .section-text {
    margin-top: 15px;
  }
}
</style>
