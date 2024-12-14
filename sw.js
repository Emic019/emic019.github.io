/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","e4fa9c1ab8e5634552a8f5545f0a366f"],["/2024/07/08/月照天山雪（2）/index.html","f9b7a7e4966442ed23a4387c9fac0471"],["/2024/07/08/阅读须知/index.html","a2a1e7b3b3ba9a3814190d813822703f"],["/2024/07/09/同床异梦/index.html","a707b0e083ef5d08f9ecdd03eb26c153"],["/2024/07/09/月照天山雪（3）/index.html","454c24b088414eac815be078f8c23c8a"],["/2024/07/09/月照天山雪（4）/index.html","c3cdc37d2765c5349ba0e289ab1cf66d"],["/2024/07/09/月照天山雪（5）/index.html","6437d72fc35d6f7b6509687693a072ea"],["/2024/07/10/ceshi/index.html","a44118ab1a0c036d51a51e418d159313"],["/2024/07/10/一千零一夜/index.html","4413e18d3c83470ac96603d019086b3a"],["/2024/07/10/风雪夜归人/index.html","e4edfe2121a8fddb6f242fe2c300268b"],["/2024/07/12/与敌同行（1-1）/index.html","abd1b50b74fe99bc4a8023fba093a8c9"],["/2024/07/12/与敌同行（1-2）/index.html","b8b3791adb388f12ce534f28e18ab707"],["/2024/07/12/与敌同行（1-3）/index.html","8b29515cd8302e1f04a43520a5f4a3fb"],["/2024/07/12/与敌同行（1-4）/index.html","140c57d4ef4e5752aef8e46e5dbf7544"],["/2024/07/12/与敌同行（1-5）/index.html","6d1558295d446bf7db09a1bdbacad5d8"],["/2024/07/12/与敌同行（1-6）/index.html","cb5605a519b60ef9423ee268fcf2b87c"],["/2024/07/12/与敌同行（1-7）/index.html","cf0790d3d16502c4034b7e7fcf56b3bb"],["/2024/07/12/与敌同行（1-8）/index.html","0326515977a0d525e8e03939119a06a0"],["/2024/07/12/与敌同行（1-9）/index.html","0f1507e1606ed8335fc2efcb216f8b92"],["/2024/07/12/与敌同行（2-1）/index.html","40d30ec59285303b8279d56e2becdd57"],["/2024/07/12/与敌同行（2-2）/index.html","ec237c8befc9c54c2f7d182e27a620e9"],["/2024/07/12/孤独地狱（上）/index.html","de6b4cd3ba7f6cb5f709edabaca5bcca"],["/2024/07/12/孤独地狱（下）/index.html","79d9ed58b46702f959c4bab3bac29f64"],["/2024/07/12/玉生烟/index.html","ca502c0cd6ca05cdd148a35f9564e63b"],["/2024/07/12/知更鸟颂歌（1）/index.html","d40384fbd85dc73b9b89e0c73a9e4c78"],["/2024/07/12/知更鸟颂歌（2）/index.html","a5b5947989acd20a19bfdbb1b0b4fe30"],["/2024/07/28/与敌同行（2-3）/index.html","3eace5affab976effdf7d2d810ad322d"],["/2024/07/28/知更鸟颂歌（3）/index.html","ccc29212d69264a7bc400b24ad0496a0"],["/2024/07/28/知更鸟颂歌（4）/index.html","b8c09cde42da7e97a63121a74e06069b"],["/2024/07/28/知更鸟颂歌（5）/index.html","9cef076f7ec7bc8d18e1c6d2f78f6db7"],["/2024/08/24/与敌同行（2-4）/index.html","071a96193d4bf1ec66f5da06dfa38a45"],["/2024/09/02/与敌同行（2-5）/index.html","fe086e4f1960f8a4c8ee757327a1bbc1"],["/2024/09/02/与敌同行（2-6）/index.html","2af51860341ed9a087dbe93c5c707d72"],["/2024/09/15/与敌同行（2-7）/index.html","cab617ea7d8f0427da9354a9fc6603a6"],["/2024/10/03/失落的应许之地（1）/index.html","630a90052370f1cbca0d5a9768cf8e1c"],["/2024/10/27/与敌同行（2-8）/index.html","da0362b9919a9ff61906ad7d32eddb8e"],["/2024/11/09/失落的应许之地（2）/index.html","6411c9f1aa8c30fd957ef0a06a67aa3b"],["/2024/11/09/破戒/index.html","b5a320ae72ce5b81b1f0ce615db4bd32"],["/2024/12/07/少年游（1）/index.html","f2c8d36c6f96fac3e9ca8eb670c4f523"],["/2024/12/07/长夜漫漫路迢迢（1）/index.html","deeb6467c8b3bfa4efa9d978966df5f0"],["/archives/2024/07/index.html","88d32e8cd6434b908bbf5edcc2adaebe"],["/archives/2024/07/page/2/index.html","f38daf591bab08adc70dda27305255ed"],["/archives/2024/07/page/3/index.html","414ec5beb8c5dbd8570a0e5a2ed8fca3"],["/archives/2024/07/page/4/index.html","334a4372d29b52d700e014ee35a3f5f6"],["/archives/2024/07/page/5/index.html","dfd4736b59880815a09031fb916a06d5"],["/archives/2024/07/page/6/index.html","4ab6a374b10cd4c6b10e8abc0edeb207"],["/archives/2024/08/index.html","2f4a5bc58a63cd50addc6993983aa5a2"],["/archives/2024/09/index.html","7d422b0efd4d52f8a7a5934d6d13c229"],["/archives/2024/10/index.html","d3f016c4748a67196cc42aaf73aac84d"],["/archives/2024/11/index.html","23be475f9388fc2ee05f63e5d962d2b5"],["/archives/2024/12/index.html","cd5c864704f708401fd62940d9bc1704"],["/archives/2024/index.html","402b79255a3bb705a35b75cb569cb8a3"],["/archives/2024/page/2/index.html","6363ddfca24d70bc6231893083f1d090"],["/archives/2024/page/3/index.html","a2ee7346934d7462f0551d6c7ae545a3"],["/archives/2024/page/4/index.html","0be20517c81f335ab8fb7f5bc760f526"],["/archives/2024/page/5/index.html","bf8ab213997cbfd8622311547dcd1c65"],["/archives/2024/page/6/index.html","2655898e29af46fac05dcc6344336e3a"],["/archives/2024/page/7/index.html","4c7c39a912e0ed60f4b458a6bafd64eb"],["/archives/2024/page/8/index.html","b940c8a4ce24bcedac35248517b9de84"],["/archives/index.html","a3224c3a5ac310c492b5e636b516875d"],["/archives/page/2/index.html","8bee40a700081861868c77cdbd5cdd69"],["/archives/page/3/index.html","550acfd12c62c1db12bf39e5026a0899"],["/archives/page/4/index.html","2780da576d15038d93257d2d60afe6f6"],["/archives/page/5/index.html","9c2e55e18e082600468f6bffb342e97a"],["/archives/page/6/index.html","6421030b41df95256866be8a6031c843"],["/archives/page/7/index.html","3c4ffaaebf9c09f5ed54f66d506197ea"],["/archives/page/8/index.html","c48dcab972cf0f9b7c3a58c3390d3677"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/别和数据聊感情.html","2087996b96ac7a8f35a120582e40bd86"],["/bundle.js","31bd3c3bd8dfc446504c325b650e8e49"],["/categories/index.html","f701361b0236504bf0ae9a83a17d7642"],["/categories/与敌同行（梨综）/index.html","50d43d0fbb785e08be3709b63ea4e51e"],["/categories/与敌同行（梨综）/page/2/index.html","88d09a0bd34dacf4e76d27de8bf6b133"],["/categories/与敌同行（梨综）/page/3/index.html","a0ecce34f4a4ecccd1af14cc07086fdc"],["/categories/与敌同行（梨综）/page/4/index.html","d262211aba8b57e5c6b3fad101e6f22d"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","4909902e18758ed0b7e032cdcef3b84b"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","58b95b6efac82e45061655fe90bbc4e1"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","e0a3e815bb80858cdc63589ce157191e"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","0566b68d888345a80e4287353ac0b1d6"],["/categories/千千万万遍（指珊）/index.html","8bcd0336c0850a323dc09722ae77ab10"],["/categories/千千万万遍（指珊）/page/2/index.html","b968d03b012e0324f958ac950087be13"],["/categories/千千万万遍（指珊）/同床异梦/index.html","a58772d8de5ced9f765658946b1a2331"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","38c9a71348659a79cd7f04473de3f853"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","a57d92bcb6b717287e54b740d258a167"],["/categories/失落的应许之地/index.html","b5d72c640358b0f2a0b59487d9a86b79"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","157c592a6180b52b9501af45a56c2395"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","276c4406a28b0e75a2d07f65f2903fa1"],["/categories/月照天山雪/index.html","3b76cb880bc35836a68bb41a02ecb83c"],["/categories/月照天山雪/page/2/index.html","b60e1d90c716c71e7393e46079091e7f"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","c9dd748d30a2a636a3e6a9d318a38069"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","50874724c16efb4dc5a1e274e922beda"],["/categories/狂飙，乱飙，发飙/index.html","b3c966c739e3488260352613dda59b8c"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","a07d980b4ae7a5776dc7a7bf3ca8b70d"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","1bd0734581a43372a4f25ffb73c4cbf9"],["/categories/短篇/index.html","0a006a58723885dbcf1ba64672ff51b8"],["/categories/短篇/玉生烟/index.html","b1c1602e467036bbb320fa30e290a7d5"],["/categories/短篇/破戒（马魁）/index.html","1245177c3d6c7076bbcf7cad1169ab57"],["/categories/繁城之下/index.html","02e478b5193394f2be272a938d007e97"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","e833a426010ba3a0406f0ddc47f14b00"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","2cac66c6ca7752e1d0a1e43287b91fc0"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","951ac52b02ac7f8ee92af05e85c96307"],["/css/noscript.css","51517c404fe899f8045c2931e64fb68a"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","9b11240eaedc7e3e3ce9f3da3b12cddc"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","e6d18708763ed326389b9637d537bb13"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/page/2/index.html","9bb2e63b1520fe9b2015aa9339d5e2c2"],["/page/3/index.html","42ea5dcf67fafe4a60ef4ba5efc9163d"],["/page/4/index.html","cd664b1caf41df3f49b27618d8cc9c7b"],["/page/5/index.html","5e2689d9eab6b8af3c15bc518d97eaff"],["/page/6/index.html","d27fbe38eb707f90abd95b17771bfbe4"],["/page/7/index.html","efcbe29f33274bc560696b47d310839f"],["/page/8/index.html","ba548c7b3f2b5133e9b573901ece26f1"],["/style.css","f73b259a9f54f564bcb2440638df7731"],["/sw-register.js","a82a7fd35c920caab19d8c3435d32ca9"],["/tags/index.html","3755843160b511d5b71e546458d9a8df"],["/tags/冰与火之歌/index.html","7fb5e1d219fe6f4db6f9d2b65dff6d55"],["/tags/冰与火之歌/page/2/index.html","5e2ec78cbc54af65a88031c3f042b8c4"],["/tags/摸鱼之作/index.html","dda5da82101b22125c4f276f56007404"],["/tags/日常/index.html","85e99df4ec439964823a281ea2ac0e93"],["/tags/柠梨/index.html","ca143184a6685e52005507d3597b3a7b"],["/tags/柠梨/page/2/index.html","dd6de8e2b3da94ddc4564303e2af70e3"],["/tags/柠梨/page/3/index.html","5b972bfcfecbb0375e05ec25582e34c1"],["/tags/柠梨/page/4/index.html","70a99d18ffc90428e0efa614b0ce377f"],["/tags/柠梨/page/5/index.html","47b4fa7bfb7094dced7a047180a71f73"],["/tags/狂飙/index.html","7b745d0957d7b877e9f899432a56fd86"],["/tags/镛武侠/index.html","8aa48841c8ccb80c0771f53d2564434c"]];
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
