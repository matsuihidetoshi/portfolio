<template>
  <div class="home">
    <h1 class="small-title">Home</h1>
    <div class="wrapper">
      <div class="section">
        <div class="section-image"><img src="@/assets/profile.jpg"></div>
        <div class="section-text">
          <ul>
            <li>名前：松井英俊</li>
            <li>生年月日：1990年4月24日</li>
            <li>活動エリア：静岡県浜松市</li>
            <li>得意分野：プログラミング、Web制作</li>
            <li>好きなプログラミング言語：Ruby</li>
            <li>好きなフレームワーク：Ruby on Rails, Vue.js</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
