/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","791264d5a80a53db2b66c7ca9b97adb7"],["/2024/07/08/月照天山雪（2）/index.html","19d0f1d8ea71878911eb35e8d78903a3"],["/2024/07/08/阅读须知/index.html","a077ee65495fa50b156cdb8f25244863"],["/2024/07/09/同床异梦/index.html","a5323816aefad15c8d9495c0636bfe8b"],["/2024/07/09/月照天山雪（3）/index.html","9bf0bd0b88815c6c7cf3c9e23e1d4a5b"],["/2024/07/09/月照天山雪（4）/index.html","14c32b11e29454dc7805540a58fc6e1a"],["/2024/07/09/月照天山雪（5）/index.html","4e8764bf5e3d20d67fe343b9d05c0596"],["/2024/07/10/ceshi/index.html","b923a8aa6b9b895d7888487d30f77822"],["/2024/07/10/一千零一夜/index.html","8c428e0dd84cc98c67534f00969d0bd3"],["/2024/07/10/风雪夜归人/index.html","7b0c3c79a4c8fe8e2ffbf88b71c19af4"],["/2024/07/12/与敌同行（1-1）/index.html","a50433313de160732727ff60f39509dc"],["/2024/07/12/与敌同行（1-2）/index.html","277ed54dce5876a90604b10e6689a1a4"],["/2024/07/12/与敌同行（1-3）/index.html","929835b39d866461b6eaa549157774c5"],["/2024/07/12/与敌同行（1-4）/index.html","a210c079ddee57272ea8a9221208366b"],["/2024/07/12/与敌同行（1-5）/index.html","ad4b64f7912557ce1d7dd6f6e44e6492"],["/2024/07/12/与敌同行（1-6）/index.html","aa51bdfcf8cd28eeeaf3f2ab84e7f61e"],["/2024/07/12/与敌同行（1-7）/index.html","711d676ec71ec403fa65057bd539ee26"],["/2024/07/12/与敌同行（1-8）/index.html","0dafec41a77957b88707a36352809a38"],["/2024/07/12/与敌同行（1-9）/index.html","ce5bccbb76c157d1f30ba725c273f418"],["/2024/07/12/与敌同行（2-1）/index.html","85d0b1082e41f6ce354037ae7d0eba6d"],["/2024/07/12/与敌同行（2-2）/index.html","3332999f38e1a4f679f954cb953834cb"],["/2024/07/12/孤独地狱（上）/index.html","ba3be0a30457ff667f171b79d8f40cf8"],["/2024/07/12/孤独地狱（下）/index.html","cee36b86621eafcfaa8521299b147b36"],["/2024/07/12/玉生烟/index.html","f34b286f55988f7bb96d765a2f67584c"],["/2024/07/12/知更鸟颂歌（1）/index.html","303bbb97286bdf25b1f8afd8587401a8"],["/2024/07/12/知更鸟颂歌（2）/index.html","efa47a62b1a7b6f0f5dc722476ac90eb"],["/2024/07/28/与敌同行（2-3）/index.html","e122c23e4b078f4a83132b005d485815"],["/2024/07/28/知更鸟颂歌（3）/index.html","34156a71b38264e01a51c05f976f6d2e"],["/2024/07/28/知更鸟颂歌（4）/index.html","b9e40d70511389673bf8130f7e943017"],["/2024/07/28/知更鸟颂歌（5）/index.html","0fb37460a3c7d6a4fe540d225f9e0c17"],["/2024/08/24/与敌同行（2-4）/index.html","c43c202750d8a62f29598257c8b02683"],["/2024/09/02/与敌同行（2-5）/index.html","ea997a5d60c15d4e6883d0aaba9d2c06"],["/2024/09/02/与敌同行（2-6）/index.html","26d1949717d00e433b44585708f6e9d9"],["/2024/09/15/与敌同行（2-7）/index.html","9feb578af268eda582424ecaa9a55ce5"],["/2024/10/03/失落的应许之地（1）/index.html","4c9423dbdbcd910bb6ddca8a84617096"],["/2024/10/27/与敌同行（2-8）/index.html","b24bef1c1725c2ec509be11d907e7632"],["/2024/11/09/失落的应许之地（2）/index.html","4abb2b47fc4eeee90c503934cfc04c1f"],["/2024/11/09/破戒/index.html","169a4698218d9f7450fe76e57d0c1d72"],["/2024/12/07/少年游（1）/index.html","e3bfc9d10ae3716ca1b8b54f7f64d511"],["/archives/2024/07/index.html","d61347408a4a965647094d24f5d1c2cc"],["/archives/2024/07/page/2/index.html","b385885e7ef9f36425604e4a4d8efdd7"],["/archives/2024/07/page/3/index.html","8802df23c6e0d3ddf209299807baee46"],["/archives/2024/07/page/4/index.html","3a07a0ee3fcc5942d8e45e5f34e28145"],["/archives/2024/07/page/5/index.html","ef9e64bcad6585e39dd55329339bcd4f"],["/archives/2024/07/page/6/index.html","326491997aea75c268086c64acb6add7"],["/archives/2024/08/index.html","6d59be8cf9a821855694958d578e6db1"],["/archives/2024/09/index.html","41d5639913f0a9f1dc990ef196b8bac5"],["/archives/2024/10/index.html","1a1c12833d5b36a04c503840035bbf7f"],["/archives/2024/11/index.html","bb3c3e9a9016d733469ffea809c85ab1"],["/archives/2024/12/index.html","b0e88ecad14e37ee625e5cebe24bd230"],["/archives/2024/index.html","f9462286faa264b37757dd7795dd4772"],["/archives/2024/page/2/index.html","bbc0c4b9e79431270068568ecc28a9c4"],["/archives/2024/page/3/index.html","2808f6e93c98031b75b268e8f9ce1a3f"],["/archives/2024/page/4/index.html","fc6ecd5e4f632005a5f00f1307b93692"],["/archives/2024/page/5/index.html","bcdd34c16097b81f2ca6ecf3d44e5627"],["/archives/2024/page/6/index.html","5794db31f14576c82ebcb2bf3775528f"],["/archives/2024/page/7/index.html","9088574887abb060c3fcab346ebee1fd"],["/archives/2024/page/8/index.html","35b8b3e3b5a1519803bc840cf53dcbfb"],["/archives/index.html","713159dd4c3ea2986275acabdcdad3b5"],["/archives/page/2/index.html","6ab297b1c09b1d79471c9b3c2ba87edb"],["/archives/page/3/index.html","3b50aa088adb906d13fd35b1fca98e80"],["/archives/page/4/index.html","6cbe53b61f028e4bd8fe7d6f0645ba9e"],["/archives/page/5/index.html","f0db180ced9709e240140545a57b5863"],["/archives/page/6/index.html","77db8c612a1f5d85a2223c1cf0619ac6"],["/archives/page/7/index.html","6d8154413dd6ae51b032bbc8f87c550a"],["/archives/page/8/index.html","db361e66ac2c583192af1ce0790e03a1"],["/assets/别和数据聊感情.html","2087996b96ac7a8f35a120582e40bd86"],["/bundle.js","23b0ab2bb70f50267c84963f46decfb5"],["/categories/index.html","1b6b68ea56ba4fa4e74c31e0b83684f5"],["/categories/与敌同行（梨综）/index.html","674bffcb9cfaab7d5c11e651947d35c1"],["/categories/与敌同行（梨综）/page/2/index.html","13f838f507d4a5822bd38550ce1616a3"],["/categories/与敌同行（梨综）/page/3/index.html","7aed6de9e0bde9aa1a769bb01844c6cd"],["/categories/与敌同行（梨综）/page/4/index.html","5f6d4518d59b5c8d1c5f16266d3068dc"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","281aa69d5db299b4566126230e541671"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","b18473d3b347f5755b61af2b121c5d7a"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","d27d10e41fe0a523b9eb29a0487e0119"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","dfddddf54e0b480b4a26bba32c46521b"],["/categories/失落的应许之地/index.html","b80eb2a1c1c4da1d0851acefa698dc92"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","deeab55b60ab8223bf37145ca3ccbe91"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","7c848aac9a30af994860e8651b347dec"],["/categories/月照天山雪/index.html","08bc10b39ea9b50b2d0b96c346970761"],["/categories/月照天山雪/page/2/index.html","7819aa8553067bdaac9971f556a56df7"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","28967e4cafddfb3ab1a039c5d717f639"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","798e377b07bbdcf9bf09fd11f8d36568"],["/categories/狂飙，乱飙，发飙/index.html","bf2b687e45ef22e1532f6f0a64fc5940"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","3838a6fcb7556ae5cd3edc9c816fa35f"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","c3b25523e851177e5acaf818271e1836"],["/categories/知更鸟颂歌/index.html","1011e0ebf14e88beebc6b029212152fc"],["/categories/知更鸟颂歌/序曲/index.html","c48429dba3ef96308bae7dfb75bc7404"],["/categories/知更鸟颂歌/颂歌组曲/index.html","c789181cf868e6b786110e59a5b3c64a"],["/categories/短篇/index.html","ee090bec43600731d72929a3e85aa0ce"],["/categories/短篇/同床异梦（指珊）/index.html","c2a6df78d4f94731130c85f44494ec69"],["/categories/短篇/玉生烟/index.html","19b521e054ee3bc7c474798820945f71"],["/categories/短篇/破戒（马魁）/index.html","eb274dc50ebfe6d6d1fb7d02a7e9fce5"],["/categories/繁城之下/index.html","209adf803b861026d3dc85da6fc6e85d"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","7b12b35a58cf7574c01d009992ad92f1"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","9d2e751320cbefa4ef789c46df252187"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","4ecd026ce8be2645d67e9f315927b3a4"],["/css/noscript.css","acd6aee282ecaf60aa6083da2c94da3c"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","386127d01214cc099356ff58021fa6af"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","e6d18708763ed326389b9637d537bb13"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/page/2/index.html","a903069fdeecb5afaad9621f83655c7c"],["/page/3/index.html","96caba0f7b6f053c6c92f21d752a4816"],["/page/4/index.html","909b2bb1c4d0fe3d0e5fe3435590e12b"],["/page/5/index.html","d47fcfdc55b4a668ec1f7c96eb949497"],["/page/6/index.html","3c670d589dd3912c1d02ac58e6de38da"],["/page/7/index.html","d9c08ca508ba429fd5aacc1dc62d37fb"],["/page/8/index.html","25ab913aad638e0de4012513726cf352"],["/style.css","d4d5952e5ebc95df4e13ad0d5928ea13"],["/sw-register.js","63eb75fada1fe754bcae73cb506bc768"],["/tags/index.html","b4906cedd516594f70812a249ddd99ba"],["/tags/冰与火之歌/index.html","21517fcaf21ed12ac4bc256d9f42e423"],["/tags/冰与火之歌/page/2/index.html","ffdf076e3b54dae26139447f7a497a1c"],["/tags/摸鱼之作/index.html","c80ba4c9834363e46c702d1573b3422d"],["/tags/日常/index.html","65241132449b848a3666af0c6a7e8bad"],["/tags/柠梨/index.html","7b4e52a931b53a77298a9642152d815f"],["/tags/柠梨/page/2/index.html","1494b8e7488929ee639d722baf95cc44"],["/tags/柠梨/page/3/index.html","c9d265bf878118b1af6c5b59f8140402"],["/tags/柠梨/page/4/index.html","a47b177eed498302da80d42a3576b80d"],["/tags/柠梨/page/5/index.html","24ac115d7b840566284ef3e677d31698"],["/tags/狂飙/index.html","1545d81f76a08145a02e8d5e6c9d7890"],["/tags/镛武侠/index.html","723b9b6565c09411d46744a706b3719f"]];
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
