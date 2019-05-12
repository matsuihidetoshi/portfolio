<template>
  <div class="home">
    <h1 class="small-title">Home</h1>
    <div class="wrapper">
      <div class="section">
        <h2 class="section-title">自己紹介</h2>
        <div class="section-image"><img src="@/assets/profile.jpg"></div>
        <div class="section-text">
          <ul>
            <li>名前：松井英俊</li>
            <li>生年月日：1990年4月24日</li>
            <li>出身校：静岡県立浜松工業高等学校・情報技術科</li>
            <li>活動エリア：静岡県浜松市</li>
            <li>得意分野：プログラミング、Web制作</li>
            <li>好きなプログラミング言語：Ruby</li>
            <li>好きなフレームワーク：Ruby on Rails, Vue.js</li>
            <li>&nbsp;</li>
            <li>ごあいさつ：</li>
            <li>"世界中どこでも、どんなプラットフォームでも"</li>
            <li>機能し、表現することができる</li>
            <li>Webアプリケーションに魅力を感じ</li>
            <li>暇さえあればパブリッククラウドや開発言語等を</li>
            <li>活用し、制作やスキルアップに努めています。</li>
          </ul>
        </div>
      </div>
      <div class="footer-insert"></div>
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
