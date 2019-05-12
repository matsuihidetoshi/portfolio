<template>
  <div class="skills">
    <h1 class="small-title">Skills</h1>
    <div class="wrapper">
      <div class="section lose_margin">
        <h2 class="section-title">プログラミング言語</h2>
        <div class="section-image"><img src="@/assets/ruby_icon.png"></div>
        <div class="section-text">
          <h3>Ruby</h3>
          <ul>
            <li>★★★★☆</li>
            <li>経験年数：2年</li>
          </ul>
          <p>Ruby on Railsを使い</p>
          <p>業務効率化ツール、ECサイト、</p>
          <p>コーポレートサイトなどを構築</p>
          <p>してきました。</p>
        </div>
      </div>
      <div class="section add_margin">
        <div class="section-image"><img src="@/assets/python_icon.png" class="small_icon"></div>
        <div class="section-text">
          <h3>Python</h3>
          <ul>
            <li>★★☆☆☆</li>
            <li>経験年数：半年</li>
          </ul>
          <p>実務経験はありませんが、</p>
          <p>バックエンドとして</p>
          <p>Lambda + Pythonを採用した</p>
          <p>ServerlessアーキテクチャSPAの</p>
          <p>制作を通し、学習しています。</p>
        </div>
      </div>
      <div class="section lose_margin">
        <h2 class="section-title">フロントエンド</h2>
        <div class="section-image"><img src="@/assets/html_icon.png" class="small_icon"></div>
        <div class="section-text">
          <h3>HTML</h3>
          <ul>
            <li>自信度：★★★★☆</li>
            <li>経験年数：1.5年</li>
          </ul>
          <p>基本中の基本ですが</p>
          <p>より無駄なく、可読性の高い</p>
          <p>コーディングができるよう</p>
          <p>常に意識しています。</p>
        </div>
      </div>
      <div class="section lose_margin">
        <div class="section-image"><img src="@/assets/css_icon.png" class="small_icon"></div>
        <div class="section-text">
          <h3>CSS</h3>
          <ul>
            <li>自信度：★★★★☆</li>
            <li>経験年数：1.5年</li>
          </ul>
          <p>センス良く、効果・効率が</p>
          <p>最大限になるよう心掛けています。</p>
        </div>
      </div>
      <div class="section">
        <div class="section-image"><img src="@/assets/javascript_icon.png" class="small_icon"></div>
        <div class="section-text">
          <h3>JavaScript</h3>
          <ul>
            <li>自信度：★★★☆☆</li>
            <li>経験年数：1.5年</li>
          </ul>
          <p>jQueryのプラグインなどを使い</p>
          <p>サイトのUI/UX改善に使用して</p>
          <p>きました。最近では、新しい記法や</p>
          <p>フレームワークを取り入れ、より</p>
          <p>モダンなアプリケーション構築を</p>
          <p>目指しています。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 20px;
}
h2 {
  margin: 50px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#top-image {
  background: url('../assets/top_sea.jpg') center;
  background-size: cover;
  width: 100%;
  padding-top: 40%;
}
.small_icon {
 height: 200px;
 margin-top: 50px;
}
@media screen and (max-width: 480px) {
  .section-image img {
    height: 200px;
    overflow: hidden;
  }
  .section-text {
    height: 200px;
  }
  h3 {
    margin-top: 0;
  }
  .section {
    margin-top: 50px;
  }
  .add_margin {
    margin-bottom: 100px;
  }
  .lose_margin {
    margin-bottom: -80px;
  }
}
</style>
