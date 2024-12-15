/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","27548837da016d61e6facc151e17d5fc"],["/2024/07/08/月照天山雪（2）/index.html","9c6d08e08dd4f1e3fbc0ee2778422d60"],["/2024/07/08/阅读须知/index.html","ca084b63167a609a5d30243634d152e1"],["/2024/07/09/同床异梦/index.html","e8af04c67c99ab96e0f19351ea08dade"],["/2024/07/09/月照天山雪（3）/index.html","508792b66025ca1ed38cccf8119f6957"],["/2024/07/09/月照天山雪（4）/index.html","a0bb8cec81be194a4938c1606cf172bb"],["/2024/07/09/月照天山雪（5）/index.html","8d26d2324cf2e4789bc05a7ab779be7e"],["/2024/07/10/ceshi/index.html","acbac6b5b77cd1189509f62dd95b3999"],["/2024/07/10/一千零一夜/index.html","f8e1abae86a82a19e11fa0e84f4059b3"],["/2024/07/10/风雪夜归人/index.html","915df5457d8b0dc8b1fdf252cdcffdad"],["/2024/07/12/与敌同行（1-1）/index.html","9d57a4048f5622276e8ba76822673579"],["/2024/07/12/与敌同行（1-2）/index.html","d53a5fe8d946dcb541934053f6f08bec"],["/2024/07/12/与敌同行（1-3）/index.html","4ff7fa9619c8116427097267a50d7858"],["/2024/07/12/与敌同行（1-4）/index.html","45f61cf6a5fc521c378598189988b70f"],["/2024/07/12/与敌同行（1-5）/index.html","986ecbb60b21815cddd49c10d5803509"],["/2024/07/12/与敌同行（1-6）/index.html","fb91e2935b2636c4f821468ab1b1b78d"],["/2024/07/12/与敌同行（1-7）/index.html","570cad50ae647ebfe85cf114fce2902a"],["/2024/07/12/与敌同行（1-8）/index.html","e3e49d035586547d79a0aa9eca3a0ede"],["/2024/07/12/与敌同行（1-9）/index.html","2a6d6a47ed7bbf6470e8532471a5c448"],["/2024/07/12/与敌同行（2-1）/index.html","b498604eee556fa3a849c57f9f6ccb1b"],["/2024/07/12/与敌同行（2-2）/index.html","ee8e75a9daa1493ade39e7e9834bcc10"],["/2024/07/12/孤独地狱（上）/index.html","d767820a40b2b928b719a2641953cc54"],["/2024/07/12/孤独地狱（下）/index.html","e0c1ed46c1436c846e41d86670d3101a"],["/2024/07/12/玉生烟/index.html","5ac8c10d1acbe2649046cafc3b64bb6b"],["/2024/07/12/知更鸟颂歌（1）/index.html","ab4e66788ca6586a99e59a07fea23c2d"],["/2024/07/12/知更鸟颂歌（2）/index.html","a1e6260c86b3cdffe4710b0243c89b57"],["/2024/07/28/与敌同行（2-3）/index.html","ac840ae9452b1a1216d05a8cd7703a04"],["/2024/07/28/知更鸟颂歌（3）/index.html","30a580ef884295a192860b4c394938df"],["/2024/07/28/知更鸟颂歌（4）/index.html","adff0802403f9dc558b861bb8f0a53d7"],["/2024/07/28/知更鸟颂歌（5）/index.html","b5a5c6f49cda93253ac8261277b48650"],["/2024/08/24/与敌同行（2-4）/index.html","15160f41b3efd06ac646da4c8259c0d7"],["/2024/09/02/与敌同行（2-5）/index.html","c68308dc1ef8d9d235e16f9cc8065dc2"],["/2024/09/02/与敌同行（2-6）/index.html","4122b8e12a0dc840152390f6772dd55e"],["/2024/09/15/与敌同行（2-7）/index.html","d4a1e7a9b272114230ce5f6dd8304cf3"],["/2024/10/03/失落的应许之地（1）/index.html","ee01da736d232b30976be227a59913a5"],["/2024/10/27/与敌同行（2-8）/index.html","a677543b57bb52f6cd0323bd208f2e05"],["/2024/11/09/失落的应许之地（2）/index.html","58f55767102fa19e6db1ae2550babc80"],["/2024/11/09/破戒/index.html","bf46c5aff96e7e7f629705f27d0fc1c7"],["/2024/12/07/少年游（1）/index.html","54d907910eb19f6c5879678122da6d48"],["/2024/12/07/长夜漫漫路迢迢（1）/index.html","d9dac9731dea810e65116ebac4e4652d"],["/2024/12/15/指珊摸鱼（1）/index.html","d64b2986a81d3b61a709bd203cd2c211"],["/archives/2024/07/index.html","aba38b96c2d0aeb17ebde85050d259b6"],["/archives/2024/07/page/2/index.html","0b641f84e4b0fbf3a5266cddad2f1680"],["/archives/2024/07/page/3/index.html","038d23e8efd5913154cd1c9304f6954d"],["/archives/2024/07/page/4/index.html","8bd32557ba5fbcc795760311a1bb8a8e"],["/archives/2024/07/page/5/index.html","a557198c5ddb2441d7d32ddb141c967a"],["/archives/2024/07/page/6/index.html","1900768ce90a808cc79435f25d3790f2"],["/archives/2024/08/index.html","adc8be9ced63b2474fab16e381fb98fe"],["/archives/2024/09/index.html","3edcd29ab4161ee81b1cc1f554defe3c"],["/archives/2024/10/index.html","cdb5b57e628542e9c6fcc5845352aca7"],["/archives/2024/11/index.html","e54a0ed5e582831da6efd4eadb298673"],["/archives/2024/12/index.html","742e1bbfd4d421ad7055ace6139380bb"],["/archives/2024/index.html","b0111e25f452800f6dc9f37ae4614977"],["/archives/2024/page/2/index.html","cc2ef51d4225e0c5367f1a5a7b97441a"],["/archives/2024/page/3/index.html","3198850b1664ecffa2c31e0bd230b4fa"],["/archives/2024/page/4/index.html","045f7826929d39b14a3fa53d74c4a3dc"],["/archives/2024/page/5/index.html","b92193fee6922ffa4428bb04e27d658d"],["/archives/2024/page/6/index.html","589fa6f55eb9b8dfb237e5e8d090c254"],["/archives/2024/page/7/index.html","10cfd14077e38ab341902a91e17e50c9"],["/archives/2024/page/8/index.html","545cdc393ea4af6487ff69034a90a8eb"],["/archives/2024/page/9/index.html","8ae33c41d376609f9af6e7d4cfe00f69"],["/archives/index.html","bbb34b4a9b116f95b60177bca0e6cfb1"],["/archives/page/2/index.html","631710496bd85c81c54918ca6a9f2290"],["/archives/page/3/index.html","6c47fdd498e55f1dda9e062f86999d4f"],["/archives/page/4/index.html","78c581bea47503c2203fcf3c2900d285"],["/archives/page/5/index.html","f52f5117eae03da2c36fe0f25e97cc0b"],["/archives/page/6/index.html","70221a4284b8279536e2ee0b41eee767"],["/archives/page/7/index.html","e03b0dd53c7cf3ae38b0820a24317f4b"],["/archives/page/8/index.html","2a533b9421cb906d7e50613eea3d96d5"],["/archives/page/9/index.html","551fba99bd0643525ac78b2bab42b881"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/别和数据聊感情.html","2087996b96ac7a8f35a120582e40bd86"],["/bundle.js","31bd3c3bd8dfc446504c325b650e8e49"],["/categories/index.html","d4fb7c011c3a8390de2751ca57c4bb8b"],["/categories/与敌同行（梨综）/index.html","e4c2df06276cb6936b3b87010bb06a38"],["/categories/与敌同行（梨综）/page/2/index.html","d50472466c3eefeb0b5836e6e01460ea"],["/categories/与敌同行（梨综）/page/3/index.html","4a4c0e5dceac5aff82d1d2dedd068e47"],["/categories/与敌同行（梨综）/page/4/index.html","3e7bd5529badbd7cca43e4e813165bf5"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","d246b365ef2e2a13f2f8a7c954dd2774"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","afc50c916154a042380f5a2ac79c0811"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","303be07bce61ee69a47c59018500de44"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","ed6c3b766acdb24b2a0d5cb9a3cf1e56"],["/categories/千千万万遍（指珊）/index.html","501ee7fb789834b5306997c8d8cf5900"],["/categories/千千万万遍（指珊）/page/2/index.html","08465bae1892a46cff4f30226661c22e"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","436a1063e0fec13588f1cc9d7a36ba83"],["/categories/千千万万遍（指珊）/同床异梦/index.html","cf912260b6e5d485bfee44e72e9769bc"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","37e2fc2d937060c71f36993c05d67347"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","ca78a5847728497826a5cae9b21616dc"],["/categories/失落的应许之地/index.html","647656963773de054421ff0199467e39"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","1fc0c6ed432d236e83cc641f272b7d9d"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","ec8e78c584e3b7cc585595d121fa6059"],["/categories/月照天山雪/index.html","5f63dad28db2f8d8e1750b587d826342"],["/categories/月照天山雪/page/2/index.html","e16e8697b933422f837ee118b601bc50"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","187d054e80fb37a94f0227d6cc96c19b"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","725d24183f7cebde4500621d7f61afa1"],["/categories/狂飙，乱飙，发飙/index.html","49965c839438c7a34a4b07d007f6e434"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","85480ecb6100e80501977251c4d472d4"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","0b87eeaf36d5bd748ca2cd6435ff60ce"],["/categories/短篇/index.html","f178fa56c05e7635fd4c0447994e248a"],["/categories/短篇/玉生烟/index.html","f36ddb48b33bba1f996d27f2c6a5e7aa"],["/categories/短篇/破戒（马魁）/index.html","decd99821f992dbee0728ec0e8e7ff99"],["/categories/繁城之下/index.html","81c88e9365b231a093497c651813bbcd"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","03c5a44fd21e1806928a66d56785e620"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","8a6a56256b38ef30d9824da605ef523e"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","6f8e11bcf1fb271c75fa59a0466255e9"],["/css/noscript.css","5d9b56f02e47fc063a96f740e7bb50f8"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","556ae3753e23e6623f4d6cf35b964c9d"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","e6d18708763ed326389b9637d537bb13"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/page/2/index.html","be1be4e7bb92afa7f7803bc6ebd787a5"],["/page/3/index.html","53a1fd297be6d1bf83951fdde3b31501"],["/page/4/index.html","6c5d1ae578e4cb7369ead1c8c06b1d9a"],["/page/5/index.html","01086b775f6ed67eac0dcce44b65de95"],["/page/6/index.html","23cd742073b8e0b0f1a8ab92a4f7c455"],["/page/7/index.html","453c8fca532fefd9672ebf5338d8792e"],["/page/8/index.html","555268db46ded21f8283a05aca4e8555"],["/page/9/index.html","05b68ba8b7796bacee6d6045a4f766ec"],["/style.css","cb329ccc194468d35add64ea2014da8f"],["/sw-register.js","7ce326171e0cdcabcf3068fe9d3db769"],["/tags/index.html","053524c2b077c75e000e5de06d0d84d2"],["/tags/冰与火之歌/index.html","ea616ae1b4d1d4be3f6706cee66603ef"],["/tags/冰与火之歌/page/2/index.html","fce798df6c8878af6fa8b7856116efcb"],["/tags/摸鱼之作/index.html","b83c50dba2eb0b6df33feb396f5f5a0a"],["/tags/日常/index.html","64ba7f182c7c450be2aa23532a44c01c"],["/tags/柠梨/index.html","be23688ebed5dd2b759f17bfc055420d"],["/tags/柠梨/page/2/index.html","d90fef69e19bee1c70a8e9c80bb95717"],["/tags/柠梨/page/3/index.html","2d4f89fcdc030c7bf13327ac84d67f34"],["/tags/柠梨/page/4/index.html","abdc6bec6ca5aba6c8cced672812b4ff"],["/tags/柠梨/page/5/index.html","b88c34772cb17f6c643dbc15d7f3b9d1"],["/tags/狂飙/index.html","81b0a58e391d06618fabcb3817521591"],["/tags/镛武侠/index.html","b99ea16f12bf6ee5db4770df423dc793"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
