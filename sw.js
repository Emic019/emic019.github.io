/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","34b4cc76e87cd1a5f88b38e9d012eaae"],["/2024/07/08/月照天山雪（2）/index.html","a485498885f45e9aee04cd1647d9b13e"],["/2024/07/08/阅读须知/index.html","8aeac9d41aaa81e333072244162057ea"],["/2024/07/09/同床异梦/index.html","6b31f6b79d09100093682920250bac8e"],["/2024/07/09/月照天山雪（3）/index.html","38e01f79f9bd57cb69ea6ba969c65a43"],["/2024/07/09/月照天山雪（4）/index.html","0ceabbcac84a7b2518d7938dc7d0e14a"],["/2024/07/09/月照天山雪（5）/index.html","67d0d580de681d0f8b59fee62245205f"],["/2024/07/10/ceshi/index.html","a47ad4785faa4efe727458e49f82a641"],["/2024/07/10/一千零一夜/index.html","c0b33b1c6badbc920c96066bec8c0b0f"],["/2024/07/10/风雪夜归人/index.html","f6f778e4b9fbdce5a97c9408568a5cd9"],["/2024/07/12/与敌同行（1-1）/index.html","e636e1eb14a4c969effb33a234d261b8"],["/2024/07/12/与敌同行（1-2）/index.html","ff91ccffb945f72aaee63f33609b8493"],["/2024/07/12/与敌同行（1-3）/index.html","ac90cb441bd71aa133ec4b74ef500e96"],["/2024/07/12/与敌同行（1-4）/index.html","8d3c3f6c7bbd660e3fb04275d0293a09"],["/2024/07/12/与敌同行（1-5）/index.html","f474ed3cb571e4209a518052f3561b49"],["/2024/07/12/与敌同行（1-6）/index.html","7d6efa43c278d53b474467b677f07978"],["/2024/07/12/与敌同行（1-7）/index.html","6aee12885f8748d5666cef8a97dfc717"],["/2024/07/12/与敌同行（1-8）/index.html","5b21bcbed3b5f6acbb124eccac1da1b1"],["/2024/07/12/与敌同行（1-9）/index.html","4b6f3ae2ec37b5e7c6b309687df22ab3"],["/2024/07/12/与敌同行（2-1）/index.html","8973252bc8f14d8ac89f78bcb6d49f62"],["/2024/07/12/与敌同行（2-2）/index.html","c501023f3fffa0f0586ef7c7565fa2ba"],["/2024/07/12/孤独地狱（上）/index.html","23aeee17e2195aa00be681795a7a1ad4"],["/2024/07/12/孤独地狱（下）/index.html","4fb944af096e7d76d749bf75e6ddf56e"],["/2024/07/12/玉生烟/index.html","024f86f17b4e8e631fc48a3d3d3fda00"],["/2024/07/12/知更鸟颂歌（1）/index.html","4adb1820a7d2ce7ae1949d3c6c834df9"],["/2024/07/12/知更鸟颂歌（2）/index.html","e007a0c9c65bc17be2730344c93a1687"],["/2024/07/28/与敌同行（2-3）/index.html","e5e2cba42dc99694ff0b287ae7b40c38"],["/2024/07/28/知更鸟颂歌（3）/index.html","45d7f8d8f46d1d85932bb6ac32674e84"],["/2024/07/28/知更鸟颂歌（4）/index.html","2b74841cb483e06a73c116f77208a9b9"],["/2024/07/28/知更鸟颂歌（5）/index.html","334002da488574d53648a4f674925214"],["/2024/08/24/与敌同行（2-4）/index.html","a47dae90ff6829daa6106a9e38be2ec3"],["/2024/09/02/与敌同行（2-5）/index.html","efd5fb96408c1cf1f9daeb36b03dd5c7"],["/2024/09/02/与敌同行（2-6）/index.html","a6957408b864cad4b76958f9c91c5b9b"],["/2024/09/15/与敌同行（2-7）/index.html","9a0f3369c231a04b8cf55cb6532799b6"],["/2024/10/03/失落的应许之地（1）/index.html","ddb5a234c7dafad191b07067143638a7"],["/2024/10/27/与敌同行（2-8）/index.html","7dd6cf0746e876d8a2deae0fa2fe0a12"],["/2024/11/09/失落的应许之地（2）/index.html","3532760f3c405bb2019563769d435d24"],["/2024/11/09/破戒/index.html","d3f265660253e04b4368f9cdfe05b2de"],["/2024/12/07/少年游（1）/index.html","d71f7bf192dc7eeb73d2e27384c760d7"],["/archives/2024/07/index.html","2ad3079870cde1fc42941022f9dc5732"],["/archives/2024/07/page/2/index.html","4c2048d2c3f54a87d714f53aac493201"],["/archives/2024/07/page/3/index.html","9206aaf7018946ae2b746127f1210e58"],["/archives/2024/07/page/4/index.html","452cd09dd02162ff32911918ac94d0db"],["/archives/2024/07/page/5/index.html","d8b23f31f7ba1efe47962151bbe8a26b"],["/archives/2024/07/page/6/index.html","23fb20c302d8297005090055fbfaed29"],["/archives/2024/08/index.html","44218949c5de14f827df878355f83686"],["/archives/2024/09/index.html","0a5252ba38591af26791816c14a2e47c"],["/archives/2024/10/index.html","4a5f5bda9a382d0714a45a2a1ac7a10e"],["/archives/2024/11/index.html","5b237af30f2daeab63f0e4f8cfe50eb6"],["/archives/2024/12/index.html","f95f938b0fbceb4eca7e2972ddce7451"],["/archives/2024/index.html","3a8e2e9930fe4278b1cefc9d8b725ad5"],["/archives/2024/page/2/index.html","521018b6c9bf8b1d4d52c5f49b65bbb3"],["/archives/2024/page/3/index.html","cafa51eca622c4a823fe3e0f5e9b713f"],["/archives/2024/page/4/index.html","7700157440d0a30e180c7807633b6f1f"],["/archives/2024/page/5/index.html","da722e99b1460377db56883662ac6184"],["/archives/2024/page/6/index.html","8e07f9cbdb4a007c49548b7d5986357d"],["/archives/2024/page/7/index.html","17fe8cd8e7b560d4652d324eaefa57ad"],["/archives/2024/page/8/index.html","0737bc1ca96b46adbee9b51ead9205be"],["/archives/index.html","91eb302736b92f73aa3f153e919fd30a"],["/archives/page/2/index.html","42ba01c43597ab73183fc748849aef13"],["/archives/page/3/index.html","c5be24772ddfe71e69ccb132d0843719"],["/archives/page/4/index.html","5cfa8f6435a9c519aabb05db03e95a76"],["/archives/page/5/index.html","52d451672309372da3e45338cda53c19"],["/archives/page/6/index.html","81ac242800ae271ebff2908046e97905"],["/archives/page/7/index.html","5cab7d55b02fa2e3bd63b3296907a361"],["/archives/page/8/index.html","74dd5d29e4b881683a4a7ce99d4b490a"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","31bd3c3bd8dfc446504c325b650e8e49"],["/categories/index.html","8a011c019ba741645737d3b5767438f9"],["/categories/与敌同行（梨综）/index.html","fa69a9f8ea1f33a73989909548c17126"],["/categories/与敌同行（梨综）/page/2/index.html","002970e7d90534f7eca61446f5c88995"],["/categories/与敌同行（梨综）/page/3/index.html","24d7ac392086afbd6b82c51b944baec8"],["/categories/与敌同行（梨综）/page/4/index.html","1bbf4a84a25be98c9b0f6a95aa3d7d26"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","3745f21b9dff9af10378cf545b72279a"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","e393c8a50f6fb6a78de92895f9dbb5df"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","d942fdcd7053b3f3b7b14cb765718008"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","99176d14f2d50f9200c2833f5c0266be"],["/categories/千千万万遍（指珊）/index.html","1f621672f144a93cd538d1e5cb2bed6e"],["/categories/千千万万遍（指珊）/page/2/index.html","02e8cd96b043a359ceed5c4eb1b76077"],["/categories/千千万万遍（指珊）/同床异梦/index.html","97c0aba9ccbd96f7268e07949250d4f3"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","e7997f31715bf9f4439cc36fb52db802"],["/categories/失落的应许之地/index.html","ec5db7023ce1c6b8459c128d22ed6f7a"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","597de11c4535fabc21e52aa6cc7d056f"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","5d8f4b9aae934da5c6285c221957a09d"],["/categories/月照天山雪/index.html","1a5723671179fc5f69dc46627d736ae9"],["/categories/月照天山雪/page/2/index.html","4ffcf7aba4dcd7fc624208d2acc9ef2d"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","40a0b3570e592bfd3a7c2166d65b13c2"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","480672caf34143c3236072a8a6233afe"],["/categories/狂飙，乱飙，发飙/index.html","d6a670908971dc823cfb307339bb9c81"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","5f03afae2db7eea2e5273e0449541872"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","e9969b47e2b049b22caf9bcdea084f28"],["/categories/短篇/index.html","4d7bd675b2317adb126de11fc956e9a6"],["/categories/短篇/玉生烟/index.html","a55e231a39abe3215bdc4b0064668668"],["/categories/短篇/破戒（马魁）/index.html","df544821d15c71ce88bdfb8605b0b4e8"],["/categories/繁城之下/index.html","9e26a7cab2847e8c7943c0baf2be4cc4"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","8fb2dc24fdfd12ad60f74eb8167191e8"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","0197372f7785bef6adedd2166659308e"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","8b6c4a534fbf9f85c27edf49033cfcb0"],["/css/noscript.css","1f0b9a380a8a33e96cdaa753a1a09beb"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","15f7304b47684b3b89b80dc1f934ee9f"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","e6d18708763ed326389b9637d537bb13"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/page/2/index.html","43b7e9dfde600be839dd6388f1ee4dc7"],["/page/3/index.html","285adc084a508ccaa01a17059730c578"],["/page/4/index.html","fd2af3043731fd7ff0fd13d6e8d04ad4"],["/page/5/index.html","320a1c842e393639e3a5c1e9b7ec8908"],["/page/6/index.html","c82c64467fd7f392f23b9ddb2ee667f5"],["/page/7/index.html","f3a694acb080797ba6f99c3b99a5f9d5"],["/page/8/index.html","52585048a3a67498d622dbabfc410cdb"],["/style.css","3d8b0b701c109f9b2ac0be888ed7c8e7"],["/sw-register.js","d268be7ce33aa5c1c9e4b33dec73471a"],["/tags/index.html","422fe10a0041e4d5a97a347f48506db4"],["/tags/冰与火之歌/index.html","bf41b5806c221772b7275c1062a57ee8"],["/tags/冰与火之歌/page/2/index.html","92aa0bb567e7a88c6b651f0b706adc56"],["/tags/摸鱼之作/index.html","080fc57ecd09195361ec8a4f08e33a7a"],["/tags/日常/index.html","18e5a21d22ada7c4be8deaef64db55b3"],["/tags/柠梨/index.html","cf1ad900918dc04a30463e2cec1300c6"],["/tags/柠梨/page/2/index.html","c01d74a575342aff89149021e03f4370"],["/tags/柠梨/page/3/index.html","b52478a761b5aa0526e41b44f14b54dd"],["/tags/柠梨/page/4/index.html","134b079eb7e9f1f268dcbe4875c8bf6b"],["/tags/柠梨/page/5/index.html","e1d071969b6c3fe0ba7763abd03fa4a2"],["/tags/狂飙/index.html","aeaa55d3593e16a33c28ec79cdf7ed32"],["/tags/镛武侠/index.html","79fef2e7aae731b5cd84421ee4787738"]];
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
