<template>
  <div class="skills">
    <h1 class="small-title">Skills</h1>
    <div class="wrapper">
      <div class="section">
        <h2 class="section-title">プログラミング言語</h2>
        <div class="section-image"><img src="@/assets/ruby_python_icon.png" class="small_icon"></div>
        <div class="section-text">
          <h3>Ruby</h3>
          <ul>
            <li>★★★★☆</li>
            <li>経験期間：2年</li>
          </ul>
          <h3>Python</h3>
          <ul>
            <li>★★☆☆☆</li>
            <li>経験期間：半年</li>
          </ul>
        </div>
      </div>
      <div class="section add_margin">
        <h2 class="section-title">フロントエンド</h2>
        <div class="section-image"><img src="@/assets/html_css_js_icon.png" class="small_icon"></div>
        <div class="section-text">
          <h3>HTML</h3>
          <ul>
            <li>★★★★☆</li>
            <li>経験期間：1.5年</li>
          </ul>
          <h3>CSS</h3>
          <ul>
            <li>★★★★☆</li>
            <li>経験期間：1.5年</li>
          </ul>
          <h3>JavaScript</h3>
          <ul>
            <li>★★★☆☆</li>
            <li>経験期間：1.5年</li>
          </ul>
        </div>
      </div>
      <div class="section">
        <h2 class="section-title">フレームワーク</h2>
        <div class="section-image"><img src="@/assets/rails_vue_icon.png" class="small_icon"></div>
        <div class="section-text">
          <h3>Ruby on Rails</h3>
          <ul>
            <li>★★★★★</li>
            <li>経験期間：1.5年</li>
          </ul>
          <h3>Vue.js</h3>
          <ul>
            <li>★★★☆☆</li>
            <li>経験期間：2ヵ月</li>
          </ul>
        </div>
      </div>
      <div class="section add_margin">
        <h2 class="section-title">AWSコンポーネント</h2>
        <div class="section-image"><img src="@/assets/aws_icon.png" class="small_icon"></div>
        <div class="section-text aws-text">
          <h3 class="aws">EC2</h3>
          <ul>
            <li>★★★★☆</li>
            <li>経験期間：1.5年</li>
          </ul>
          <h3 class="aws">RDS</h3>
          <ul>
            <li>★★★★☆</li>
            <li>経験期間：1.5年</li>
          </ul>
          <h3 class="aws">Lambda</h3>
          <ul>
            <li>★☆☆☆☆</li>
            <li>経験期間：1ヵ月</li>
          </ul>
          <h3 class="aws">Amplify</h3>
          <ul>
            <li>★★★★★</li>
            <li>経験期間：2ヵ月</li>
          </ul>
        </div>
      </div>
      <div class="section other">
        <h2 class="section-title">OSやミドルウェア、ツールなど</h2>
        <div class="section-text other_text">
          <h3>OS</h3>
          <ul>
            <li>WSL Ubuntu</li>
            <li>Amazon Linux</li>
          </ul>
          <ul>
            <li>Windows Server</li>
          </ul>
          <h3>ハイパーバイザー</h3>
          <ul>
            <li>Hyper-V</li>
            <li>Xen Server</li>
          </ul>
          <h3>ネットワーク機器</h3>
          <ul>
            <li>Cisco</li>
            <li>Arista</li>
          </ul>
          <h3>コミュニケーションツール</h3>
          <ul>
            <li>Slack</li>
          </ul>
        </div>
        <div class="section-text">
          <h3>DB</h3>
          <ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
          <ul id="disappear">
            <li></li>
          </ul>
          <h3>Webサーバー</h3>
          <ul>
            <li>Nginx</li>
            <li>IIS</li>
          </ul>
          <h3>バージョン管理(Git)</h3>
          <ul>
            <li>Github</li>
            <li>Bitbucket</li>
            <li>CodeCommit</li>
          </ul>
          <h3>エディタ</h3>
          <ul>
            <li>Visual Studio Code</li>
            <li>Atom</li>
          </ul>
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
.aws {
  margin-top: 10px;
}
.aws-text {
  margin-bottom: 40px;
}
.other {
  margin-bottom: 200px;
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
.section-text ul {
  text-align: center;
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
  .aws-text {
    margin-bottom: 100px;
  }
  .other div ul {
    margin-bottom: 20px;
  }
  .other_text {
    margin-bottom: 220px;
  }
  .other_text h3 {
    margin-top: 30px;
  }
  #disappear {
    display: none;
  }
}
</style>
