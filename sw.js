/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","57de37661f56daf74755fa8275fa1274"],["/2024/07/08/月照天山雪（2）/index.html","2106871bd5e84ccabdf8ba0781f97d7b"],["/2024/07/08/阅读须知/index.html","ea2d030c3c4971203f6182c4b80e5a75"],["/2024/07/09/同床异梦/index.html","b03bce5f76348872f75e3a40fa85d593"],["/2024/07/09/月照天山雪（3）/index.html","a3f9afa1b64207185419be09623dfbcc"],["/2024/07/09/月照天山雪（4）/index.html","764e91f12ee24e7e18bd1a466e70fe59"],["/2024/07/09/月照天山雪（5）/index.html","f18bb5ee722d9db91a5f82f5388b2e83"],["/2024/07/10/ceshi/index.html","981c19ba11e1770e24314df2c505f71c"],["/2024/07/10/一千零一夜/index.html","67df0976139b8bb522875dc0188ebc04"],["/2024/07/10/风雪夜归人/index.html","6a5e25e4d6ccd1095764c2917fedb775"],["/2024/07/12/与敌同行（1-1）/index.html","3a77a145643b459dbb234461e90351fe"],["/2024/07/12/与敌同行（1-2）/index.html","9ff6a3a49457d5748dd1026c851b3f0a"],["/2024/07/12/与敌同行（1-3）/index.html","8e3a8a92f57f91a2871075e6ddf0ef01"],["/2024/07/12/与敌同行（1-4）/index.html","f3c9f0c2d436872f8ddd2d8cda6c22ad"],["/2024/07/12/与敌同行（1-5）/index.html","fbb497577de908453eb34528bc2e3efb"],["/2024/07/12/与敌同行（1-6）/index.html","bdf3a956d8f10d1d4e4d2c638cb38916"],["/2024/07/12/与敌同行（1-7）/index.html","7c1b928b79b7a7358439f5f6319120ab"],["/2024/07/12/与敌同行（1-8）/index.html","ce9f06a645f4c9ede965a0128360b025"],["/2024/07/12/与敌同行（1-9）/index.html","761078dfe6692d4a41b3d53036196839"],["/2024/07/12/与敌同行（2-1）/index.html","656515fcc5fcf87613a3b77769b4f72c"],["/2024/07/12/与敌同行（2-2）/index.html","522c1fa12d31a576791f2dfe88dfab6b"],["/2024/07/12/孤独地狱（上）/index.html","9f1fb057bc055006d1f053206ce168b0"],["/2024/07/12/孤独地狱（下）/index.html","5df6bf5c07f42d63680971cc4f6dfadd"],["/2024/07/12/玉生烟/index.html","8ff37bf3444d1582c9e1d0887e30715e"],["/2024/07/12/知更鸟颂歌（1）/index.html","014b19f0b3147b5551fa5c910059e4ce"],["/2024/07/12/知更鸟颂歌（2）/index.html","024fbeff67bbbfea6dfe6e21d64145f7"],["/2024/07/28/与敌同行（2-3）/index.html","94bcbac999cae9dedccae73ecc79b0af"],["/2024/07/28/知更鸟颂歌（3）/index.html","7ac3b4860a9526a04107f7f514a7721d"],["/2024/07/28/知更鸟颂歌（4）/index.html","c5eb47f14698a5fd3dbdc4930d9c60ca"],["/2024/07/28/知更鸟颂歌（5）/index.html","ed4a6341bb9aa6f83e22d4474fc32c67"],["/2024/08/24/与敌同行（2-4）/index.html","465e2f6c45e5193d589b28ffe05ed405"],["/2024/09/02/与敌同行（2-5）/index.html","4c86f2baafa34dd6f3fec68e1b6e387b"],["/2024/09/02/与敌同行（2-6）/index.html","57947cb5da24acfc6b6fa6b1c2fe5fd3"],["/2024/09/15/与敌同行（2-7）/index.html","f95396fe0afd7c873e1fb4485cef38d4"],["/2024/10/03/失落的应许之地（1）/index.html","6a798d94ba6fd9e8e7609e1eb8dad75a"],["/2024/10/27/与敌同行（2-8）/index.html","5d86b369e16be3b4352988745c52422a"],["/2024/11/09/失落的应许之地（2）/index.html","05b646ab632e6ce4be1b0e9588ef3b56"],["/2024/11/09/破戒/index.html","e5254d9a65d745be8edc398ceeffd4e7"],["/2024/12/07/少年游（1）/index.html","bcc1ca12dea468cfb56314878a41e3e3"],["/archives/2024/07/index.html","5153e68a195d6f4ac0ac810225b2e7e6"],["/archives/2024/07/page/2/index.html","896bf38a76eb7a906cefcb422f73afcd"],["/archives/2024/07/page/3/index.html","19ac1c7a3d7b670ac449a8a75e954c89"],["/archives/2024/07/page/4/index.html","762dce9127fc9298c27f25e97e5bcd2d"],["/archives/2024/07/page/5/index.html","897758c408cf82315f117afed54d844d"],["/archives/2024/07/page/6/index.html","a2ab0074ce55ecefd09c59afaa028715"],["/archives/2024/08/index.html","0d9f91cc68b82a962fdf8a08692d54b2"],["/archives/2024/09/index.html","491237cc6b70a8f29ed38de3adcbb846"],["/archives/2024/10/index.html","b51c65a042c0dd95e095cb41371e71bc"],["/archives/2024/11/index.html","ef4e5371ed47dc89f71e64ea0e2bc65b"],["/archives/2024/12/index.html","f6a74b55fa9761604a8533e8bd89e2c0"],["/archives/2024/index.html","399e5aa7a5cb6e4c4c4a6abe13e191c7"],["/archives/2024/page/2/index.html","d37542709caf433f4f50f21e584b65b0"],["/archives/2024/page/3/index.html","6432de4c976c79d37fc08eec10ce6e5a"],["/archives/2024/page/4/index.html","0277fc00c526a9bd1bd6dc401a0728d5"],["/archives/2024/page/5/index.html","e0d02615410e6d826244024727e4d5c7"],["/archives/2024/page/6/index.html","7d8642e074922184793781ace07e7e4d"],["/archives/2024/page/7/index.html","f10d9beac6edc42ce49ae63fcfba9133"],["/archives/2024/page/8/index.html","d5da86e05c21a22161ea41bb2cbf7b38"],["/archives/index.html","15e709d9a2d37f876d651e83f79bad63"],["/archives/page/2/index.html","ca40d99f0f2fa5e3f75a2fc36f8f88b1"],["/archives/page/3/index.html","524d2f6ca20d13a15224b4059437a533"],["/archives/page/4/index.html","0bb62e9403c8fc96913d223ff6ff589b"],["/archives/page/5/index.html","3f2638f1682a2d6c04c73f7515069a4e"],["/archives/page/6/index.html","21c0200fb881b408a60c9e726cbd4f09"],["/archives/page/7/index.html","31a2dd51ce3245c0070b8e8defa33e0e"],["/archives/page/8/index.html","b8ff6a48599a85166457538717992471"],["/assets/别和数据聊感情.html","2087996b96ac7a8f35a120582e40bd86"],["/bundle.js","31bd3c3bd8dfc446504c325b650e8e49"],["/categories/index.html","abd2c32f4d5272c1f9699b51424e9930"],["/categories/与敌同行（梨综）/index.html","bc8f34fd3524461d50dd2a3cfb73fc66"],["/categories/与敌同行（梨综）/page/2/index.html","89df1bc0bd3ae099c549bb1c8b292699"],["/categories/与敌同行（梨综）/page/3/index.html","82cee680935574de0e4a8e4039f81537"],["/categories/与敌同行（梨综）/page/4/index.html","58c89a95eb46f911f7ee4f1178f95744"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","47bf42e7932e1658620d288beaed6943"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","ec23a424139cd60419d8178c650ff56f"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","f3c9cd1e9ae199ed68c3c2a6c4c51af9"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","8cbe156206213abe4944ed4f7c22a91e"],["/categories/千千万万遍（指珊）/index.html","f24d00b3bf839c35460225936b6921d4"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","e519c9317454f3fc523ad25fc41e8d7c"],["/categories/失落的应许之地/index.html","c61c03fcea922d0ef40b6d4aaf9beec4"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","228432256dded7537d462021758a4f26"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","b24ea6321f006ad72886749f6315b4b5"],["/categories/月照天山雪/index.html","666d4c84fe74666b48b675e8d6ed4131"],["/categories/月照天山雪/page/2/index.html","0860d6e1ceb491219474c0ece9963da6"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","ec335dee15f9951f4a9b15b26bf8fbcd"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","57e57d8dffeaf05dae1afb8585e8ffb8"],["/categories/狂飙，乱飙，发飙/index.html","d20cd988e2ec1b54d1e6a37630968270"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","cc23a449ecf1928a00a32530f9743d88"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","ec179d88252a53ece6ba1b9afb7ae769"],["/categories/知更鸟颂歌/index.html","58cc6c46655a2f3125a7f0f5cad106ee"],["/categories/知更鸟颂歌/颂歌组曲/index.html","efb0728a91f15c8239fcce46d4cf8c69"],["/categories/短篇/index.html","072f1ae5f4a27c45bbf59b4ab4fa2cfe"],["/categories/短篇/同床异梦（指珊）/index.html","c660fdf7bbd4661431c0e1772a9dd3ec"],["/categories/短篇/玉生烟/index.html","543f87730f6d58b90758458141c6fa53"],["/categories/短篇/破戒（马魁）/index.html","ed1dbdcd509a19c713e93b9a822869f2"],["/categories/繁城之下/index.html","ee533e6e6110ed700f36f5a05c4b94bd"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","0812645703cc8f27899a7d80402c636d"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","82c602f52479319b31220c338c13062d"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","8b6c4a534fbf9f85c27edf49033cfcb0"],["/css/noscript.css","1f0b9a380a8a33e96cdaa753a1a09beb"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","34f73a70ca92e43b40f41f77fd16729a"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","e6d18708763ed326389b9637d537bb13"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/page/2/index.html","b2fcd9e0b18f3d2d0b3b5bf3ae4b39ad"],["/page/3/index.html","8cb314078f64e9e205cfb07d705daad6"],["/page/4/index.html","0c86805aa82da04b96ee3ec5a27b21f4"],["/page/5/index.html","9680ff1eeeb5ebd07b8be0d1e42d4b09"],["/page/6/index.html","dd5be244b8b559a5ee0d0393cd249026"],["/page/7/index.html","e46f87e20222ed2dfc44f6d406abb93d"],["/page/8/index.html","94c51555ffb8e4045a3a84b46ac0fa41"],["/style.css","fb1d17c89b0403e816922d17afc9b275"],["/sw-register.js","8f58448afe8911664df61d58e715b3ad"],["/tags/index.html","8bedf157f3a3620d82d6976c82064d21"],["/tags/冰与火之歌/index.html","25a5bbb4f41df34aee355caa4afaec7e"],["/tags/冰与火之歌/page/2/index.html","b73e6ef1fca6ad5f3de8c0e761c48291"],["/tags/摸鱼之作/index.html","7560d5f4831d95d4239a244f0491607a"],["/tags/日常/index.html","c3b8d7d402c24e751f2deca56927d26e"],["/tags/柠梨/index.html","8cee9da6dd004571f0cd4ca658f5a83f"],["/tags/柠梨/page/2/index.html","27b31dada6f1bcbc32211923adbb4c97"],["/tags/柠梨/page/3/index.html","a5fdf0f1edebfc883c4ea6e1b5b6c234"],["/tags/柠梨/page/4/index.html","abaa29a59a41dd26be8df6209b0c11af"],["/tags/柠梨/page/5/index.html","78458786fb48c67dc97064aac67dedeb"],["/tags/狂飙/index.html","07afa6cf7475f8ed1b33cde9841b0941"],["/tags/镛武侠/index.html","682c2b0b0470b79ac848eb7337483a56"]];
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
