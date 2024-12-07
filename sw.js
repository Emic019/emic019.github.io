/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","52408787e18c695aec01109335036439"],["/2024/07/08/月照天山雪（2）/index.html","140da8471280bbe65dd15167f595fbf6"],["/2024/07/08/阅读须知/index.html","ee0a7d57b78e6711d5c184a31ff2e224"],["/2024/07/09/同床异梦/index.html","02bf6ebd539ac0db9d124377dcc910bc"],["/2024/07/09/月照天山雪（3）/index.html","c1beaf73f596a314d5fa4031c2e1eab1"],["/2024/07/09/月照天山雪（4）/index.html","64fe6368b78d1986ffe6d3cf21d51455"],["/2024/07/09/月照天山雪（5）/index.html","7aa00a227f6c87ffced4e19f7b1cff46"],["/2024/07/10/ceshi/index.html","5c9a21aaeeb66c980db45c03764720d1"],["/2024/07/10/一千零一夜/index.html","0c22c16ecc4cb52c498811980a4d2d0d"],["/2024/07/10/风雪夜归人/index.html","fffdb6e02e68815820d2e12f8a6d9bdb"],["/2024/07/12/与敌同行（1-1）/index.html","2bbc260bb44ab7a270f6cbc7edfe994a"],["/2024/07/12/与敌同行（1-2）/index.html","5a6d5082c119c5c499307f86cbbcc8d2"],["/2024/07/12/与敌同行（1-3）/index.html","c8c9268e265e1e2327648339004ae0a2"],["/2024/07/12/与敌同行（1-4）/index.html","90caa553a6c98079e8ab4f160f2d76cc"],["/2024/07/12/与敌同行（1-5）/index.html","a99f93b46d1bbeca7466a0f85d7f1dad"],["/2024/07/12/与敌同行（1-6）/index.html","c7585445126c43ad91ab4c67a8b94672"],["/2024/07/12/与敌同行（1-7）/index.html","f28bc3bb9fd28f6de8c3856ca55c1d1c"],["/2024/07/12/与敌同行（1-8）/index.html","0ff28c1ee431edd64bf19b18194c8dcc"],["/2024/07/12/与敌同行（1-9）/index.html","e075d1cd4ebca132f696fcd26ed3b1c0"],["/2024/07/12/与敌同行（2-1）/index.html","83f427e7578cdb1942a21f31ae6dfbea"],["/2024/07/12/与敌同行（2-2）/index.html","5334c79f36902bb73b23640259f39bb7"],["/2024/07/12/孤独地狱（上）/index.html","25d670b84857f501a20dfa7f13fcd81c"],["/2024/07/12/孤独地狱（下）/index.html","367c4ffe0f9c471997924d7a2de7a9e6"],["/2024/07/12/玉生烟/index.html","8efb65b899755dbc89a54d18d15834f3"],["/2024/07/12/知更鸟颂歌（1）/index.html","1815fb2d529a5d724238cb5274c9fe1f"],["/2024/07/12/知更鸟颂歌（2）/index.html","5cd788fb40f38d9b2951ad4d89f3dcf0"],["/2024/07/28/与敌同行（2-3）/index.html","7053a1e6918e77ebcc88061e64674e08"],["/2024/07/28/知更鸟颂歌（3）/index.html","bb7640ee202f0dd786370d112072041b"],["/2024/07/28/知更鸟颂歌（4）/index.html","b5caf529ed2ae04ff8cb5261890b67aa"],["/2024/07/28/知更鸟颂歌（5）/index.html","a59b82e426eb1dca7166487e7cd8b7c7"],["/2024/08/24/与敌同行（2-4）/index.html","5e3eecc25177bbc869e96948022676ed"],["/2024/09/02/与敌同行（2-5）/index.html","f39cbdd03ab249915f5e9e884973b2bd"],["/2024/09/02/与敌同行（2-6）/index.html","7f9ed8e025604525a9d935a2bf4f1aa0"],["/2024/09/15/与敌同行（2-7）/index.html","e6fe0b29097940bb4582df63237589bf"],["/2024/10/03/失落的应许之地（1）/index.html","297766f652e08f40fcb31a2129cbaf7f"],["/2024/10/27/与敌同行（2-8）/index.html","c0f3c31338757b39eeec0f7c6c68447f"],["/2024/11/09/失落的应许之地（2）/index.html","36db673ba4af0b9f74174a6c43fabfb2"],["/2024/11/09/破戒/index.html","3064e8e68ed0c2a29717fc7b9f0ae834"],["/2024/12/07/少年游（1）/index.html","8430de4b7d0e8e30b4ac238b3737c7b4"],["/archives/2024/07/index.html","4c7c93eddd85c3f4395779c445dcb3dc"],["/archives/2024/07/page/2/index.html","3e28645d444745de512b5aa633d24cfe"],["/archives/2024/07/page/3/index.html","8b24c28a3724f8e080b9a23e07eb71f5"],["/archives/2024/07/page/4/index.html","6c6746e10a1ffc5211a1e81eb77315f6"],["/archives/2024/07/page/5/index.html","d9a913360b5dea26a4ff1b637c39ddbb"],["/archives/2024/07/page/6/index.html","2762dfb65658cff49fc4384a84eb697e"],["/archives/2024/08/index.html","1d57f352ba9b4c8e8d5748e98df4eb85"],["/archives/2024/09/index.html","f9541bae653dec1ec3a548a38ad7da82"],["/archives/2024/10/index.html","2eb3b527540abd20ef02c46cb860348a"],["/archives/2024/11/index.html","e7c598d369f90ba24db1375d2d87e91a"],["/archives/2024/12/index.html","bf5cd4c9adf28a662ddeb5ec08230500"],["/archives/2024/index.html","3ed261aaf8930a2fe817d060b3472ce0"],["/archives/2024/page/2/index.html","b06d930efeba250361c702dd9221fb94"],["/archives/2024/page/3/index.html","14f20f2d69c7d327448a63d937ddf0b0"],["/archives/2024/page/4/index.html","f585fbe707ab86115897062f8231e76c"],["/archives/2024/page/5/index.html","e9afcabc31f03e6c01e9e76b6bbdc8c8"],["/archives/2024/page/6/index.html","e2a947183dd20d26d7eea394388ea70c"],["/archives/2024/page/7/index.html","399dbe79138555a646a85a1b947dd264"],["/archives/2024/page/8/index.html","330ff10598126f12aed35e217d88a542"],["/archives/index.html","5be6c1f080c96d11f53ded40a0ae395f"],["/archives/page/2/index.html","da721467fcad0c8f5ff8aa089b119f63"],["/archives/page/3/index.html","6884e982cb0a0740ac75be93f45cda1d"],["/archives/page/4/index.html","e034664f7c3fe43f3cbe84f2b27de3a7"],["/archives/page/5/index.html","9358643255154b86406e1eb66d96d33b"],["/archives/page/6/index.html","170388a3974f23766678e968f89023da"],["/archives/page/7/index.html","41f370559f97ad63dfdbcfd2348db165"],["/archives/page/8/index.html","c28c594df7dbb1ad129072000aa8f370"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","31bd3c3bd8dfc446504c325b650e8e49"],["/categories/index.html","eb80a01c18e5ec89dc7c9dac07676a0d"],["/categories/与敌同行（梨综）/index.html","dcf39a1abdf0eec4ad4ce6193d11d7c1"],["/categories/与敌同行（梨综）/page/2/index.html","e93785c7e183496220a433d743e434a8"],["/categories/与敌同行（梨综）/page/3/index.html","18766b5d486b18bdafe6d6b4f3361389"],["/categories/与敌同行（梨综）/page/4/index.html","0a0172958ffa4643731daa24a1a62673"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","a21a19cfb5de26f3c55acdcc92787f15"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","b7f3ec66932e1d14cee49e616a656f5c"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","eb2cf99b9037b0f4ca3c47b0be01d150"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","6ea793b97c72c2401e5c9ef15f76d488"],["/categories/失落的应许之地/index.html","90a2750b07c169fdb88c261cda02cd01"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","96b56529a2292c79259b0759a8c18773"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","cedfe66d1408635b709eac1d09403f0c"],["/categories/月照天山雪/index.html","a946ed31c487a3facef32008d6d2f595"],["/categories/月照天山雪/page/2/index.html","abd0a46599dce27f1588a36fee27bc4a"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","c46b208805f340998ba97eaa636f4bf6"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","f0ae0154c057751d5f263067457ff09a"],["/categories/狂飙，乱飙，发飙/index.html","bce9b343cd1ff220f33e3f29128dc7b5"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","815903e641dd7585d1abbbec18e7e050"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","59e3cebc5083c0282fcebcb2131f8b16"],["/categories/知更鸟颂歌/index.html","e2f1953f27d9e9a2545bdc81780a2dcc"],["/categories/知更鸟颂歌/序曲/index.html","5de32fccd08a6d0b54e0f84b7d099b0a"],["/categories/知更鸟颂歌/颂歌组曲/index.html","0598bb750861d036ef60e8733314150b"],["/categories/短篇/index.html","e78324f9042ea271710f8e5c4cb715b1"],["/categories/短篇/同床异梦（指珊）/index.html","01645134baafa58edf1e59b007884327"],["/categories/短篇/玉生烟/index.html","a07ad724ef6ecb0073a26ec6d494476f"],["/categories/短篇/破戒（马魁）/index.html","968146aabe93510bc757356760da1d64"],["/categories/繁城之下/index.html","e00a30aa8535ddb2b5cf66479e16e5d5"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","b6de1cd5f1649d6d235f958fa7f80322"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","e7308607ea3c9517fabd3255c69419d2"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","6413ea605d9539353e2ca1797229bc60"],["/css/noscript.css","11df0fc4692307135d39cf0ddb4dbbca"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","9301902683b540a180be30aa67e7dc8c"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","e6d18708763ed326389b9637d537bb13"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/page/2/index.html","1bb5d7b7af1d848a0dd4bc416f0abba0"],["/page/3/index.html","fd9204931bc6d94c72abd22801417f5f"],["/page/4/index.html","80d99c0e0f9e6570f8b71d9cda72ea20"],["/page/5/index.html","3232c2471de98591257e949ddcc06eb5"],["/page/6/index.html","1658f74bcef465f682bdbb6771bf3cfd"],["/page/7/index.html","3a6391e9159b727b366a92749e52e516"],["/page/8/index.html","55c2d5c72aab7f4a148bd8b071f0a651"],["/style.css","0a2d630d3999d6a6ae281151bd2ef9e0"],["/sw-register.js","4c6c949cf21126f6aa913a0b95b480bb"],["/tags/index.html","8318ade0a335e10c33a3fe388f342eca"],["/tags/冰与火之歌/index.html","2e4f4876f3acd9b8f2b3dc6f6ce878ad"],["/tags/冰与火之歌/page/2/index.html","39c9cdf738a5f3f3b4926466be849327"],["/tags/摸鱼之作/index.html","772af8e04f2151c71ffb6911d8f5f54e"],["/tags/日常/index.html","e9b0404ea88dd5390a065d2fc86a5885"],["/tags/柠梨/index.html","a19b374833249201bde81d4d3ac687e2"],["/tags/柠梨/page/2/index.html","20bee8d9df729620fce98338554fdd97"],["/tags/柠梨/page/3/index.html","188f9d95092409de79dd69f6a1ac13c5"],["/tags/柠梨/page/4/index.html","3608ff5ddde787a70a19a93bd124a9b7"],["/tags/柠梨/page/5/index.html","6ef6ce579858553b5b38df6ed874ae8d"],["/tags/狂飙/index.html","c2e28b130c55e36b3508121a5d3f2924"],["/tags/镛武侠/index.html","880d2913b53c080ccd402c0cf74eb156"]];
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
