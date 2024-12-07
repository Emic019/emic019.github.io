/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","74769b65bebf9c539b4cf7583a9c8338"],["/2024/07/08/月照天山雪（2）/index.html","96f588c3785cbc2d19b811959faaa50e"],["/2024/07/08/阅读须知/index.html","5d043e8a2ac3dc987dee853544f57d86"],["/2024/07/09/同床异梦/index.html","63634ddb26db322b6c4cf562651ebd2e"],["/2024/07/09/月照天山雪（3）/index.html","85a39b3325ab250e56d3e9a70d91e6b9"],["/2024/07/09/月照天山雪（4）/index.html","2d0e3913224a08eca3af3492a2e2c25b"],["/2024/07/09/月照天山雪（5）/index.html","ce9b4a888504ec1442004effd45dff46"],["/2024/07/10/ceshi/index.html","502ee91dfab6e13f970a51d95feae5e9"],["/2024/07/10/一千零一夜/index.html","5f804a34897ac3fbad9f5b09be112982"],["/2024/07/10/风雪夜归人/index.html","8452ee51dc9eef5bbef6d03e563219dd"],["/2024/07/12/与敌同行（1-1）/index.html","ec04a8bcfbc17e31a7363693cb67003a"],["/2024/07/12/与敌同行（1-2）/index.html","a2229f31bd0b46c37bd07e56765bbe4a"],["/2024/07/12/与敌同行（1-3）/index.html","e0ac29ffc2e81fbbec143b3d08cdff7d"],["/2024/07/12/与敌同行（1-4）/index.html","72278e54c436110a174e2b7edcba14e2"],["/2024/07/12/与敌同行（1-5）/index.html","6130e9ce4b61f391a4bdbdaacc97491a"],["/2024/07/12/与敌同行（1-6）/index.html","be99ab01f491e2112f4e39da2db1aff3"],["/2024/07/12/与敌同行（1-7）/index.html","541193b370842654790d8895077d7758"],["/2024/07/12/与敌同行（1-8）/index.html","92cd482f6442224c1c20ac003304b804"],["/2024/07/12/与敌同行（1-9）/index.html","8bb9821c7324ac034c90d781ccf5b5d9"],["/2024/07/12/与敌同行（2-1）/index.html","d89cce880d6b651cb4cce1f118e60d88"],["/2024/07/12/与敌同行（2-2）/index.html","d7e5adbf26f0fccabcfc9cb199b62c21"],["/2024/07/12/孤独地狱（上）/index.html","f5d90b5b5cb743fcd8307be13b278651"],["/2024/07/12/孤独地狱（下）/index.html","b58db15f57a6597be7b5a6f6f4ab7e48"],["/2024/07/12/玉生烟/index.html","b19b2c9298f7a6918120ee443010808f"],["/2024/07/12/知更鸟颂歌（1）/index.html","b08fafa3444c17a59bc7a8e39b4a0f9d"],["/2024/07/12/知更鸟颂歌（2）/index.html","24b752ca4a57f25d394b51ba88baa235"],["/2024/07/28/与敌同行（2-3）/index.html","287abf8f97945bfe71db5764373f22b0"],["/2024/07/28/知更鸟颂歌（3）/index.html","1b95acdbe667ba77ce0bbec35f5e8034"],["/2024/07/28/知更鸟颂歌（4）/index.html","238496e06da0b7c3acb0e81474854a54"],["/2024/07/28/知更鸟颂歌（5）/index.html","18679c2a7c7c12c3fee4d4cce60c5d64"],["/2024/08/24/与敌同行（2-4）/index.html","a59cdf0aaae8c4b51f316547c9629911"],["/2024/09/02/与敌同行（2-5）/index.html","7f4bf6517bdc82d70bbe90bb77cc41c7"],["/2024/09/02/与敌同行（2-6）/index.html","a01e1c6848517fd7a18657c0db9b1f58"],["/2024/09/15/与敌同行（2-7）/index.html","a1bf06967916757904289f78a6d8648a"],["/2024/10/03/失落的应许之地（1）/index.html","7ae577ce79612a2b5fbce828ef0806ab"],["/2024/10/27/与敌同行（2-8）/index.html","ce97bcf743cca81f026efbe657edeee1"],["/2024/11/09/失落的应许之地（2）/index.html","9c731c0ba5f78af403bd355ef63b509b"],["/2024/11/09/破戒/index.html","d73da1fe00cbef483aa1bdd5cfecf239"],["/2024/12/07/少年游（1）/index.html","58de0a99253f8ca4fe2a8a5909ce7c13"],["/archives/2024/07/index.html","5926d32136feb059cb63b4fcd2d8f270"],["/archives/2024/07/page/2/index.html","f4f2e3fa31cff3216faa7d3749ae2a35"],["/archives/2024/07/page/3/index.html","97d48641a39fb9fdcedac5a76d0672a3"],["/archives/2024/07/page/4/index.html","033af455812e3f41a3a8cd538a18fa63"],["/archives/2024/07/page/5/index.html","dd8d6af3343909383865dcfa26498adf"],["/archives/2024/07/page/6/index.html","d914ac01dcb6ef2ae55fe7eaacabf81f"],["/archives/2024/08/index.html","5a92fddefc93ec4985444ca9bcb12504"],["/archives/2024/09/index.html","9521c711f7aca583c0c88ca292c0bb7b"],["/archives/2024/10/index.html","3f1efb95d3da77b390c9bf13171d977b"],["/archives/2024/11/index.html","bb52bc8a8af8996cf85085ad74264b17"],["/archives/2024/12/index.html","11bd30a2a7c380d022f924cddcdf433e"],["/archives/2024/index.html","e27634de8434dea1abb85abe7621276b"],["/archives/2024/page/2/index.html","826c69c5b6a410ee3303fa5e05f765ed"],["/archives/2024/page/3/index.html","212f745bdd4996af2432bc96dadae292"],["/archives/2024/page/4/index.html","62dae762ac7788ad6fcd7266099c8fda"],["/archives/2024/page/5/index.html","d684b8adad91b858fb26f4fdb8da6958"],["/archives/2024/page/6/index.html","6e3028c6c5f5c4b394b617ce8d38d418"],["/archives/2024/page/7/index.html","1a144fcebeee9d8236c30736628da870"],["/archives/2024/page/8/index.html","cea668078bde581d68381193c8583c4c"],["/archives/index.html","cf6bbacf36e3e8c04367aaab9a0b1324"],["/archives/page/2/index.html","bfb382828373ab7e3beb05cb2292ca5f"],["/archives/page/3/index.html","9f959c80bc1e17a73916e38595a5d919"],["/archives/page/4/index.html","9ea22ef717d91feeb0f113fc62925038"],["/archives/page/5/index.html","8ceb4b5d4824cf42b6d86ff96003fd97"],["/archives/page/6/index.html","beff8f996434a7a8e9831a84e0d2a9ef"],["/archives/page/7/index.html","bca44e5a565c19c18449b898f20bcc3e"],["/archives/page/8/index.html","99f646eb4e37859b14d0483abe7f6d16"],["/assets/别和数据聊感情.html","2087996b96ac7a8f35a120582e40bd86"],["/bundle.js","31bd3c3bd8dfc446504c325b650e8e49"],["/categories/index.html","e07e550414a550c356b38d679dc8e305"],["/categories/与敌同行（梨综）/index.html","844483ad4182c3aec786d26f20d85f48"],["/categories/与敌同行（梨综）/page/2/index.html","c4775072539bc07e1fc0194c4fe87d44"],["/categories/与敌同行（梨综）/page/3/index.html","ba6f783ca3835aac147cc2ae7dbb78ab"],["/categories/与敌同行（梨综）/page/4/index.html","95bae4888482ed8bcfcd7a9c06dcc63e"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","f8449003b3d80ca22b1dc20064756f8f"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","be7d6817239b46edd7ad5e12da2cf214"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","9ae5ea833c44f6ea8ce56f6162ef426b"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","a8565763d3904f73751b07d6e4f018a4"],["/categories/失落的应许之地/index.html","4b4e2d63cf1a83ba07c1013670aacef1"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","5052ec385d26a0917c6602e410a8a74d"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","434262133ac4b5794cb3d8ffed51da61"],["/categories/月照天山雪/index.html","86c06ad646547a331882a1107f102674"],["/categories/月照天山雪/page/2/index.html","66e4f9ad37ce31c82cb6edbdfb755483"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","9f3ded67574e54600446d6524e324f1f"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","30027375fb6808f29e93b0858e4a42fc"],["/categories/狂飙，乱飙，发飙/index.html","6402bde47f41b23f340dc1d3885e7628"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","fddaa2524d7225e677aa82b8321ff747"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","7930c76509be32968b2605e1fe50d87f"],["/categories/知更鸟颂歌/index.html","3bbc1a29c35cece2b015cd8f9f246c83"],["/categories/知更鸟颂歌/序曲/index.html","f97e21025881fe3289e56643f7bb4e89"],["/categories/知更鸟颂歌/颂歌组曲/index.html","c79f0fc0f89e1232b1750b8319429fb1"],["/categories/短篇/index.html","763a13beaba4ba67582f6888b644cbbe"],["/categories/短篇/同床异梦（指珊）/index.html","a69477ea16f82eb9fb3aceea0c7190b4"],["/categories/短篇/玉生烟/index.html","c71bd085c2c28afd1b0ce030b9f84e76"],["/categories/短篇/破戒（马魁）/index.html","5ed8e284484140bf94a58ebdf95e1f99"],["/categories/繁城之下/index.html","b1d01fe36d7df1a304ff8d43b4981044"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","5986373c2e351ac2011244668a3f86db"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","1f086a6fdfad1d450a3522b5f98cb6ab"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","6413ea605d9539353e2ca1797229bc60"],["/css/noscript.css","11df0fc4692307135d39cf0ddb4dbbca"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","8120fce0511364a09f2bf33edc356e7e"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","e6d18708763ed326389b9637d537bb13"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/page/2/index.html","3f36be2fc70914a0491a482edad34bad"],["/page/3/index.html","fbf961be86a04253a48bf83d39efc804"],["/page/4/index.html","6337ac391d8b9dce68afcdb80878fa10"],["/page/5/index.html","823592a0a01f7d22d1a66e47abc83163"],["/page/6/index.html","9730fa3db8684ad6fce586cee16e913b"],["/page/7/index.html","554d6ec3a96fdcbb8b763b2f352282ce"],["/page/8/index.html","716315518a2b3ddf52c3d80020017482"],["/style.css","0e19e595f0d2f6b07f253f741937bd4a"],["/sw-register.js","c2a8aa2f30868a3065fa576348835829"],["/tags/index.html","c63bde9709d64905417d70b7181a6854"],["/tags/冰与火之歌/index.html","7e3199e22b9a129db7d0dbb4ea74ee33"],["/tags/冰与火之歌/page/2/index.html","c462d15f1a71b6a05a54671f1c886474"],["/tags/摸鱼之作/index.html","c859e3f1d333dd2ef0fc95d4e649b5ea"],["/tags/日常/index.html","750d6d8e68f07b3229407a71282b1e65"],["/tags/柠梨/index.html","23e3323f898641e14cdad85fc64fde58"],["/tags/柠梨/page/2/index.html","32bd851fd1d1ba7ffd8ea3335d5b40ad"],["/tags/柠梨/page/3/index.html","aa8ed96bd606b3c327a8aad9b46e4a1c"],["/tags/柠梨/page/4/index.html","bb7583ebe762627ccccc103b3be7d55f"],["/tags/柠梨/page/5/index.html","ddade71734108b42782704d1c7e8cddf"],["/tags/狂飙/index.html","3035086b5a7d932d0ea4cff23d8a67a2"],["/tags/镛武侠/index.html","18aa24fb8961b3519603bd7ce605524e"]];
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
