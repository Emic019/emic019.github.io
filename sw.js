/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","10ae441624d9db85d257826922abad2f"],["/2024/07/08/月照天山雪（2）/index.html","3cec6b6937a6096aead3b834acde855b"],["/2024/07/08/阅读须知/index.html","bd14086c8520fa8210c4c7e744695c6d"],["/2024/07/09/同床异梦/index.html","77aaa5de4e1a1a6baf09bb84219a31d5"],["/2024/07/09/月照天山雪（3）/index.html","e41b636bcb5266b5c93a50057c8c853c"],["/2024/07/09/月照天山雪（4）/index.html","4efa8672dff26eb37b788c3673fb9b2f"],["/2024/07/09/月照天山雪（5）/index.html","ae4321e42c71c228e95ffd181d49a933"],["/2024/07/10/ceshi/index.html","a44bc69744b10f337973913226f07a09"],["/2024/07/10/一千零一夜/index.html","ed85b7f86bd80f50aa77b26b86106451"],["/2024/07/10/风雪夜归人/index.html","118ed52c70534b31c856b9469340b089"],["/2024/07/12/与敌同行（1-1）/index.html","134fc3d56fa281cda434455c46ad7bb1"],["/2024/07/12/与敌同行（1-2）/index.html","71f76a90918a3058b9c2ec83f4c6cc27"],["/2024/07/12/与敌同行（1-3）/index.html","4dc7b422dcab121c2102feb99d36780a"],["/2024/07/12/与敌同行（1-4）/index.html","85e8ad4f1686b8e881d56427c89cd8f9"],["/2024/07/12/与敌同行（1-5）/index.html","a27e45584de4315738683af33ce40001"],["/2024/07/12/与敌同行（1-6）/index.html","096d9b1da22eb1629233192c3b8ee076"],["/2024/07/12/与敌同行（1-7）/index.html","e77e109b19f61fb4284c72481aa7e8ac"],["/2024/07/12/与敌同行（1-8）/index.html","a9deefa44bfceb3a22c7ebc0d696c32b"],["/2024/07/12/与敌同行（1-9）/index.html","1a45a8efae254f88ed820c448ec7ec08"],["/2024/07/12/与敌同行（2-1）/index.html","acd03eab8f11e6d7c4b143ffbc4764b1"],["/2024/07/12/与敌同行（2-2）/index.html","3f6bac617a38e1f531a8434e2a32f4d5"],["/2024/07/12/孤独地狱（上）/index.html","8d7a19f9b390abf8f319d43eef5b4fb3"],["/2024/07/12/孤独地狱（下）/index.html","445a24b1066ba338f2036e9d253dacc6"],["/2024/07/12/玉生烟/index.html","7e0e3240a1698cf3c807b134a7803ac2"],["/2024/07/12/知更鸟颂歌（1）/index.html","a0953bb16dd0bbaf52def779401cd2d0"],["/2024/07/12/知更鸟颂歌（2）/index.html","30f377f8a40334f9335f63d7fbfc51ea"],["/2024/07/28/与敌同行（2-3）/index.html","4348f96c235e0fa89bf76c8196760436"],["/2024/07/28/知更鸟颂歌（3）/index.html","cb30581bd47b6996a106ad33df1c48c0"],["/2024/07/28/知更鸟颂歌（4）/index.html","7669006cf814211aebc3762ff9da4450"],["/2024/07/28/知更鸟颂歌（5）/index.html","4a9ada4ce2957c88c001b1c9f0949a0d"],["/2024/08/24/与敌同行（2-4）/index.html","c7db2bf89fecdfb6b76427a6bf5723ff"],["/2024/09/02/与敌同行（2-5）/index.html","d5756f050f9c65a672087dc05e82a02d"],["/2024/09/02/与敌同行（2-6）/index.html","10408f8453943c53ea95aa174c01e318"],["/2024/09/15/与敌同行（2-7）/index.html","cd1e24fa9768fd693f2a3a35c0dfe90f"],["/2024/10/03/失落的应许之地（1）/index.html","515180a36f8bf8edbe54da2838d8d252"],["/2024/10/27/与敌同行（2-8）/index.html","d000e6114cd738f30267b7a44f08922c"],["/2024/11/09/失落的应许之地（2）/index.html","75b159cc5eabc705e8c3ebe7284f3408"],["/2024/11/09/破戒/index.html","4d82345ffbcd359839496058ad9a2879"],["/2024/12/07/少年游（1）/index.html","f5f73b7462e5775bdaddf4cf6ebef5c7"],["/2024/12/07/长夜漫漫路迢迢（1）/index.html","6888fcbda98269ecb4af5697901d743f"],["/archives/2024/07/index.html","de6ddcda469e8c8983b2817033e9c643"],["/archives/2024/07/page/2/index.html","3c129a77f01c08329e51ff44cab3d6e5"],["/archives/2024/07/page/3/index.html","75dca9860b6e69dd56a6a918d7add20f"],["/archives/2024/07/page/4/index.html","f74a04e18a78e6fd2e7e773aacaaecd5"],["/archives/2024/07/page/5/index.html","f542aafde1cf955acc65469cbe870c14"],["/archives/2024/07/page/6/index.html","0b7809346c8ad83d659687fcc95ecd21"],["/archives/2024/08/index.html","f4f8a5760250033735f48bf6a90e671a"],["/archives/2024/09/index.html","96c58c5658b53ebc5d56e130959aa012"],["/archives/2024/10/index.html","770edc122392512f6a4d3002440ed758"],["/archives/2024/11/index.html","ca474734bc7c7a0b17541e06be9828fe"],["/archives/2024/12/index.html","8301834f9ccef829de6fcfb92a949904"],["/archives/2024/index.html","8b5c1712bf1fe94810e6ae65026b2f59"],["/archives/2024/page/2/index.html","cd20bc01996f73b2d48bf00d6c45114a"],["/archives/2024/page/3/index.html","6fb2b361ac53a812b256c3419df045e1"],["/archives/2024/page/4/index.html","5cab1ff9403d0ad5080eff2806266aa6"],["/archives/2024/page/5/index.html","506fb1fd4bcdc0f3f44961a05ed13f4f"],["/archives/2024/page/6/index.html","30b0aa9e6c5e27d09d5ce94b24a6edbc"],["/archives/2024/page/7/index.html","8f77dd763a08bb6714d395970246b718"],["/archives/2024/page/8/index.html","d531491b6b7beefb1996eeb3e4931899"],["/archives/index.html","8103fc1b4475fc7f3b1d201242ecb76f"],["/archives/page/2/index.html","c0839a064cbe30552eafce30843fbcc8"],["/archives/page/3/index.html","8439dfc4f09c7860cafdf2698d760513"],["/archives/page/4/index.html","80052f3194b7665d8510ea1d62f4b6da"],["/archives/page/5/index.html","0f8f0d95ddbab757578c2ecfa93ebb6c"],["/archives/page/6/index.html","701a7cacc221ab404b8195b06c239b95"],["/archives/page/7/index.html","775f78648000ae620527b8710b305fc0"],["/archives/page/8/index.html","638197039fb5552cd9e9bbed3fb9038b"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","31bd3c3bd8dfc446504c325b650e8e49"],["/categories/index.html","d6d8cc0f2924b1e65802f8e9f363e4dd"],["/categories/与敌同行（梨综）/index.html","20b3a2ddd99f81d91588f82a402f2577"],["/categories/与敌同行（梨综）/page/2/index.html","f1500980237a9f464a94760aa137a891"],["/categories/与敌同行（梨综）/page/3/index.html","592694c432489ef00968e0fca9523218"],["/categories/与敌同行（梨综）/page/4/index.html","9ee415ab9f6bb14e5941d1719118cff0"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","f7a9bcaaab1441311b9e8c9c2b18b475"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","b941d57d1b1a83ff14053d141c7539a1"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","a60afb92cba6d7ae3431a9146a3b6b86"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","5e3b341ef70949b5678289b95c190815"],["/categories/千千万万遍（指珊）/index.html","38ea088a6a8c0bebc620af89a07937d6"],["/categories/千千万万遍（指珊）/page/2/index.html","f7358f99080200ef2934437ac9dcd1bd"],["/categories/千千万万遍（指珊）/同床异梦/index.html","d20564cbf2947d46b04a00d1864156bd"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","4b5157a5f71d30cb7aba27a3652c760b"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","21e1c4694954e8f52174d2759a434744"],["/categories/失落的应许之地/index.html","b4bf28edc92a53bf2f2dd69b4cb1135b"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","4ecd13ac085e82f30786e8b45f2834b0"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","d2a19a8edabd0547b84239b2965e9b35"],["/categories/月照天山雪/index.html","ba2f87763fe4f20e07c90ec294f98eef"],["/categories/月照天山雪/page/2/index.html","d1cafbe6bcfcf6ff061c57b352104ace"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","143898dee51f7f7100673400636099f3"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","795cb9d4d3902a250725f37b807692cb"],["/categories/狂飙，乱飙，发飙/index.html","d3204b9e228abfe55e747f261fb7402f"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","1e18d1eb0862155d9bad9f53eb2f0750"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","590e65f1c6450151eb5540c9e07ccfe3"],["/categories/短篇/index.html","3fd4f4b0b22f71f7503c9917e3f55cbd"],["/categories/短篇/玉生烟/index.html","5d1bd1910a547ec282dcdc51f014a97b"],["/categories/短篇/破戒（马魁）/index.html","49962a71b1fdb79b853f37989ef8dffb"],["/categories/繁城之下/index.html","f6feacd58d19bacf9fbe1ff03bcc9e38"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","084576b3151cbbd861cb08edc04bd87d"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","dfc13baf3d80b03f4a3ef2c260315e8e"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","8b6c4a534fbf9f85c27edf49033cfcb0"],["/css/noscript.css","1f0b9a380a8a33e96cdaa753a1a09beb"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","62efbce7c5541d62f7df5176b6773456"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","e6d18708763ed326389b9637d537bb13"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/page/2/index.html","96b61aa27745cdbde54f347017e5c955"],["/page/3/index.html","7056292e6736deb2d16ff43591e0bc55"],["/page/4/index.html","d382247a8a298f20bef8139b9de76429"],["/page/5/index.html","400078f91451269aad1306dacc039b3c"],["/page/6/index.html","5e10e5b9cb835a40b737caf0214bc189"],["/page/7/index.html","3844bc9651e99712669f0e6f6f70914a"],["/page/8/index.html","be3e8b1c65a5cfb13d605d91aa81da56"],["/style.css","2878ea4d7ada1aa66471ce787cb0d6fd"],["/sw-register.js","fc7ba22248c49a537f4163438dee1c49"],["/tags/index.html","fa44a2f29999cb0ea8001d640ca5810a"],["/tags/冰与火之歌/index.html","d943cf1d09890ede9b2eff54d310369e"],["/tags/冰与火之歌/page/2/index.html","96710390ad8a679c3069213fe29a2b4f"],["/tags/摸鱼之作/index.html","73e6773d98cde6c079ec1082513509c6"],["/tags/日常/index.html","94bc8e37ef50b00e2312504fc25561b6"],["/tags/柠梨/index.html","ffc9d0d893684646adb11ce741ec12f5"],["/tags/柠梨/page/2/index.html","b54139ebd7c0b573d30361cc4bf209d5"],["/tags/柠梨/page/3/index.html","2c8834a8747c8869565fd2bfea90621e"],["/tags/柠梨/page/4/index.html","dfb9cc8b44eb0f6f37e8331d394668df"],["/tags/柠梨/page/5/index.html","9badd1933361a64b65941b05b2cacdb1"],["/tags/狂飙/index.html","374f69d1453fe864874fdd6105b9af65"],["/tags/镛武侠/index.html","60326bf43f531dc336c70dec2cc05a08"]];
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
