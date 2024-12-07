/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","bdfea2463d34ab106fd9e7ca79df7078"],["/2024/07/08/月照天山雪（2）/index.html","cdb44fdb9c3e63a9d5acfb680eaa8d8b"],["/2024/07/08/阅读须知/index.html","fedee12c480e814c890108f09be25653"],["/2024/07/09/同床异梦/index.html","ade898f87091687fddcb18941c4847a1"],["/2024/07/09/月照天山雪（3）/index.html","bfffe7f352e310eff985f0503f3090d8"],["/2024/07/09/月照天山雪（4）/index.html","ca092dac79ee725e7917c2542c3ce4fd"],["/2024/07/09/月照天山雪（5）/index.html","8bd078eaef7abd16229b9fe476a527f0"],["/2024/07/10/ceshi/index.html","7ff353bd36ecc15b132b3c3476aad037"],["/2024/07/10/一千零一夜/index.html","b8f3d54379e80a5a8d5f41a3fb2ce497"],["/2024/07/10/风雪夜归人/index.html","46956d45eec62bac0fbf87766282095d"],["/2024/07/12/与敌同行（1-1）/index.html","2a3523ea6ca9be9595051baf75c3b589"],["/2024/07/12/与敌同行（1-2）/index.html","c6eb512cd59d9690f7ef93678bf393c3"],["/2024/07/12/与敌同行（1-3）/index.html","fbe5c85ca9550fe39c074d3e232bc3f1"],["/2024/07/12/与敌同行（1-4）/index.html","823aea07a5a37a43439cff7fb1c96886"],["/2024/07/12/与敌同行（1-5）/index.html","e730fde2b17b8a7701bbb8c8271b17c5"],["/2024/07/12/与敌同行（1-6）/index.html","5d5cfbd78fd1ec8828d04a5f9603f924"],["/2024/07/12/与敌同行（1-7）/index.html","1ccc329fda115f043568d4b6119240e2"],["/2024/07/12/与敌同行（1-8）/index.html","5f493b83574f6882a931ed26d4b6b4a3"],["/2024/07/12/与敌同行（1-9）/index.html","008daa688aab6199d68478bba4e3fdd5"],["/2024/07/12/与敌同行（2-1）/index.html","3f054cd118f00053cd5aa4da48bb6b61"],["/2024/07/12/与敌同行（2-2）/index.html","b2c5dccd21013e24d4dec8f899d1e92c"],["/2024/07/12/孤独地狱（上）/index.html","995ebcdf18ad16454064a6539cd0c248"],["/2024/07/12/孤独地狱（下）/index.html","08c164d91d3cadb01d5921d84ea47666"],["/2024/07/12/玉生烟/index.html","b22050171815cfdeb8108742d26e047f"],["/2024/07/12/知更鸟颂歌（1）/index.html","dbc66e296ed72f070a4ea3b7ded42a49"],["/2024/07/12/知更鸟颂歌（2）/index.html","7c44d61e3ad13a0eb8b227770b35b395"],["/2024/07/28/与敌同行（2-3）/index.html","87962d174e556cb8cf3e872ae686107a"],["/2024/07/28/知更鸟颂歌（3）/index.html","391b6527183670d0335c85d617fe036d"],["/2024/07/28/知更鸟颂歌（4）/index.html","8e99772dc6a2c8dd454532ac6414ac09"],["/2024/07/28/知更鸟颂歌（5）/index.html","4b108ef2b51c98a6a3888f2b09de9e12"],["/2024/08/24/与敌同行（2-4）/index.html","32597d3beb91bc811c63d811e1e72550"],["/2024/09/02/与敌同行（2-5）/index.html","4f7170b01ef44891534e57eb2dd8cf37"],["/2024/09/02/与敌同行（2-6）/index.html","4ba47265ef62203981b084736e03aae6"],["/2024/09/15/与敌同行（2-7）/index.html","47913f65ef0d1bbf63216448af3f18d6"],["/2024/10/03/失落的应许之地（1）/index.html","1c03091aa7e988f737438f0574c895db"],["/2024/10/27/与敌同行（2-8）/index.html","733663aa7484a9a9850493a0c9cc9ed5"],["/2024/11/09/失落的应许之地（2）/index.html","48456edb33272d18d99b9e55a8364e34"],["/2024/11/09/破戒/index.html","2f56b594831731e38e8061b737b55826"],["/2024/12/07/少年游（1）/index.html","e0b905e16743ee362356cea6cd5eed12"],["/archives/2024/07/index.html","7a0981254a6e59e7fcd3bcbfb1f563c9"],["/archives/2024/07/page/2/index.html","699ce62096eae5bb950a89485af45c90"],["/archives/2024/07/page/3/index.html","69278180d275f42c920024677c8e4488"],["/archives/2024/07/page/4/index.html","f4c4ea3bbda2141507cbed991101b669"],["/archives/2024/07/page/5/index.html","6af2c0ed9b44208126a5d2c85cd10604"],["/archives/2024/07/page/6/index.html","83042b607cb6edffbd0dc3c1c1b79d5c"],["/archives/2024/08/index.html","c87576714497e077d3ba24c1d5a09e48"],["/archives/2024/09/index.html","79f548c8d816db4f4ef1d2e93ce1077e"],["/archives/2024/10/index.html","a199089fcacd123ff6f0c2db34285336"],["/archives/2024/11/index.html","d64812bbd42cbc01d2af7d418ec10662"],["/archives/2024/12/index.html","11f576fe0b0bfec183b3826cbbd9496c"],["/archives/2024/index.html","3019093e9032b19c9179825820df436d"],["/archives/2024/page/2/index.html","f52944ec2bd3a79c32a8991a19a39fa6"],["/archives/2024/page/3/index.html","4cbb5da20f8d11830c07f0b7139e90e2"],["/archives/2024/page/4/index.html","b80cacb31b293320671de658b87f6475"],["/archives/2024/page/5/index.html","24140d95b24671152fb1dc1374ade4d7"],["/archives/2024/page/6/index.html","b017d741dba14f05e90db642b306ecda"],["/archives/2024/page/7/index.html","0e54bc3cf84015eca208324d0917fc87"],["/archives/2024/page/8/index.html","67c5c90b3b704c2e813d46cb8237ce04"],["/archives/index.html","f236fae646dedb0488c080fb2d15359f"],["/archives/page/2/index.html","4e422c972ae139c1ebca9901d2c854dc"],["/archives/page/3/index.html","f0d3e490c2c735967a99e54a79d96666"],["/archives/page/4/index.html","cf87e779fbaca783ac63f096553f9bd5"],["/archives/page/5/index.html","abd679fd9b2ab7beae9a829d87244d78"],["/archives/page/6/index.html","59211d008de78d85a82f4cbd6c39ca02"],["/archives/page/7/index.html","2625efe8c0bd5320c7c6676cd1ed7964"],["/archives/page/8/index.html","72b5e03f97e8347633bb96105be0f7eb"],["/assets/别和数据聊感情.html","2087996b96ac7a8f35a120582e40bd86"],["/bundle.js","23b0ab2bb70f50267c84963f46decfb5"],["/categories/index.html","6a515b90da0b288f53594d7becf68a20"],["/categories/与敌同行（梨综）/index.html","7040d4c15df251beb36475690e14dc6f"],["/categories/与敌同行（梨综）/page/2/index.html","e51e64c11d95b53d4958d12590a05237"],["/categories/与敌同行（梨综）/page/3/index.html","f66b41663da4ab890e305ffb714acd78"],["/categories/与敌同行（梨综）/page/4/index.html","2e8bd44f1cbe5a6b839094416de9f44d"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","32d0c429a8a22e993ad69e1d61411419"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","e5698853e46aa0ba5369b72a5012d073"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","0d5f429a2e439b2a1d9c85c33be644f2"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","8778cd75846b207c1a649785e207d1d4"],["/categories/失落的应许之地/index.html","7bc7c19286e5f6b055074a5aed1d9bb1"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","337afec9d400815239924e746ef34ef6"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","eda2514b7ec640c596965dab68789445"],["/categories/月照天山雪/index.html","60cfbecae491db1b5a85d0c857517bdd"],["/categories/月照天山雪/page/2/index.html","3db2f7d99d90ab862c1e34e4d16d306a"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","b8224f4cf5bed50e3fa1f3ed7a439215"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","f0fde44b39e339b3f17f4f0dbdfb69b9"],["/categories/狂飙，乱飙，发飙/index.html","bdeb465884c1c25eecc4c4a5cb9d1957"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","fceed4a5b54251224cc3de01a07839b7"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","6be5abc9287cad1c9cecbed42b865956"],["/categories/知更鸟颂歌/index.html","a0a1e9b913fe235e0fcf7b008ca18d15"],["/categories/知更鸟颂歌/序曲/index.html","840579d858b21b2b7b19b1e491c818f9"],["/categories/知更鸟颂歌/颂歌组曲/index.html","c4502435025a302a51b7361bdd12aa9a"],["/categories/短篇/index.html","03a303ac0a0f3a9470e871da77d0d3b9"],["/categories/短篇/同床异梦（指珊）/index.html","517a5d82b3b0124be954dc8d4d3626af"],["/categories/短篇/玉生烟/index.html","7f6e78def19f14bc24c7e106f2b4eac4"],["/categories/短篇/破戒（马魁）/index.html","5ad46223b80115ab8586a1a2f812bdb7"],["/categories/繁城之下/index.html","48f9e4110e902de2838c2c00fcf642cb"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","915ef2646bf0ac47a89b43193b17eaca"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","b56f7df6d626cd34244d87bff21be2b5"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","3d0247f58f74aaa278026426b58f104a"],["/css/noscript.css","d5cf3eda8c7ea845c8cec7e82e58b065"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","ad0b51b7eff8096bc493a54b9ef17f58"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","e6d18708763ed326389b9637d537bb13"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/page/2/index.html","6ba869b41ab2fb72cbf3fbeb8c9c1825"],["/page/3/index.html","17e79105d6c96fe7e5eb81806bc5053e"],["/page/4/index.html","4bbb8befeb299155cb7fc8ac656aa507"],["/page/5/index.html","1ead557537e256f86ea965715f3a019d"],["/page/6/index.html","3a2277fe51d68acdf1fd9689f66a3ff5"],["/page/7/index.html","3e816e0e62300b701c0b9082c100a222"],["/page/8/index.html","f9625b3873941d501becdadb4b9f03c8"],["/style.css","c990ea791b74fea3f1aaca39e463a80a"],["/sw-register.js","f66fb44b98e252c99615a5a6301f208b"],["/tags/index.html","ab2b5d3de4cef7385436b75857de3b3f"],["/tags/冰与火之歌/index.html","d47de335187f53bb2806c1b1ab2b3d1c"],["/tags/冰与火之歌/page/2/index.html","bfcaeeeec835d0f89503568a7aaf076d"],["/tags/摸鱼之作/index.html","7d5879d3e0467ec024d3c13552af39fb"],["/tags/日常/index.html","04a2f622f3d967355a1ae2e239abb242"],["/tags/柠梨/index.html","31d203f435d4c7b1acebd88ef56fd7ed"],["/tags/柠梨/page/2/index.html","ac884c1ccc0721242caa7f518657d360"],["/tags/柠梨/page/3/index.html","7b4a51caa3c0f97d7554822e7d48f0fc"],["/tags/柠梨/page/4/index.html","dff68991e95a762d4159fe1a81b32e68"],["/tags/柠梨/page/5/index.html","57768273abcadf5b8282ee0f0b735a0e"],["/tags/狂飙/index.html","85e3694211e843ee584dc986f68bf262"],["/tags/镛武侠/index.html","f7e69f05bc62a96bd9f33147a90081ef"]];
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
