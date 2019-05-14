<template>
  <div class="works">
    <h1 class="small-title">Works</h1>
    <div class="wrapper">
      <div class="section">
        <h2 class="section-title"><div>業務効率化システム</div><div>（非公開のため一部機能のサンプル）</div></h2>
        <div class="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yRuDM5Ygnj0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
          <h2><a href="https://map-gen.work" target="_blank">実際のページへ</a></h2>
          <p><span>ツリー構造データを構築し、それに基づく計算や、</span><span>結果の出力を行う業務向けWebアプリケーションを</span><span>構築しました。</span></p>
          <p><span>ECサイトとAPIによりデータをやりとりし、</span><span>カード決済や、振込代行サービス向けのデータを</span><span>CSV出力する機能なども合わせて実装しました。</span></p>
          <p><span>また、連携先のECサイトでも、カードによる定期</span><span>購入機能の実装や、管理ページのUI/UX改善を</span><span>担当しました。</span></p>
          <p><span>上記ページは、一部機能のデモ用に構築しました。</span></p>
          <p><span>こちらのページは、Ruby on Railsを使って開発し、</span><span>AWS EC2上に構築しました。証明書には</span><span>Let's Encryptを使い、cronにより無料で</span><span>自動更新しています。</span></p>
        </div>
      </div>
      <div class="section">
        <h2 class="section-title">AWSインフラ構築</h2>
        <div class="picture">
          <img src="../assets/architecture.jpg" alt="Sample Architecture">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Works',
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
  text-align: center;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
p span {
  display: inline-block;
}
#top-image {
  background: url('../assets/top_sea.jpg') center;
  background-size: cover;
  width: 100%;
  padding-top: 40%;
}
.section div {
  display: block;
}
.picture img {
  width: 100%;
  max-width: 500px;
}
.video iframe {
  width: 100%;
  max-width: 500px;
}
</style>
