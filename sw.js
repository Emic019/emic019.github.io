/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","cd5e710d1740e992488af0fd6df2c955"],["/2024/07/08/月照天山雪（2）/index.html","bade507d47205c0f4f90ab25de1f1288"],["/2024/07/08/阅读须知/index.html","b178d06808d685803a38b5ee14c5eb5a"],["/2024/07/09/同床异梦/index.html","1b5433414e9ca99a66e46c5b07528cb4"],["/2024/07/09/月照天山雪（3）/index.html","c53a835201a6233fe43518b74761abaf"],["/2024/07/09/月照天山雪（4）/index.html","0f8d41ce354100b7035cd89e88e7778c"],["/2024/07/09/月照天山雪（5）/index.html","9998ab88d17d38e3049d645c1a044c9e"],["/2024/07/10/ceshi/index.html","77b8962e6479a8856250e645b013b1f5"],["/2024/07/10/一千零一夜/index.html","717b5934c0655144c2fa2fecab114559"],["/2024/07/10/风雪夜归人/index.html","8e0f9649ac498e5a303816250464ce65"],["/2024/07/12/与敌同行（1-1）/index.html","4e3507f10d3bd9aad3b417ed58b5c679"],["/2024/07/12/与敌同行（1-2）/index.html","8236d2465c5b5a760c5be7c8a3b5876d"],["/2024/07/12/与敌同行（1-3）/index.html","69e71caa0e95535b07dea6a52e2e9476"],["/2024/07/12/与敌同行（1-4）/index.html","70158daad4695e0671b15297a99e2729"],["/2024/07/12/与敌同行（1-5）/index.html","2103f29f651c9d4c2932367734584018"],["/2024/07/12/与敌同行（1-6）/index.html","8ca3559771f4b34fd788c8fe9cd5ac9a"],["/2024/07/12/与敌同行（1-7）/index.html","bb5c851cd6a9bec30db880fb547cff42"],["/2024/07/12/与敌同行（1-8）/index.html","cdd85f5ddbc43122bf4f07a2814107d3"],["/2024/07/12/与敌同行（1-9）/index.html","c56d65b0761c8954c50b9ad5fa78b772"],["/2024/07/12/与敌同行（2-1）/index.html","ee1e8326d0844df5d99efd86a0e44f95"],["/2024/07/12/与敌同行（2-2）/index.html","6ea3d877da9b0ac2effa1d7fac328d87"],["/2024/07/12/孤独地狱（上）/index.html","0456a75ff86b4c7d8e12dd6b46362eec"],["/2024/07/12/孤独地狱（下）/index.html","e14f8c692d70b285f614977cd2a9669e"],["/2024/07/12/玉生烟/index.html","4ccf2c859b4710720a3ece891ee23fe8"],["/2024/07/12/知更鸟颂歌（1）/index.html","361ae3128e69d1defb0e58f9e72ba19c"],["/2024/07/12/知更鸟颂歌（2）/index.html","0f5762f15f1386de7611c44280ac621c"],["/2024/07/28/与敌同行（2-3）/index.html","6d849ac6c4be024f325c1203426afdae"],["/2024/07/28/知更鸟颂歌（3）/index.html","a51dd179289c3527ba3b603c9d45fb41"],["/2024/07/28/知更鸟颂歌（4）/index.html","8d885960301d56745acccde0751bc622"],["/2024/07/28/知更鸟颂歌（5）/index.html","8598d2ca3fa843da7bab97b05881f5b5"],["/2024/08/24/与敌同行（2-4）/index.html","67508f79340c3c503069c938524a34c1"],["/2024/09/02/与敌同行（2-5）/index.html","83e42549ae526b017a86ca8b5fd03831"],["/2024/09/02/与敌同行（2-6）/index.html","d158dfdc0b1959a0bc10493dab8d8fab"],["/2024/09/15/与敌同行（2-7）/index.html","8e8bc25d58c41af7fe4a551dc1139fd9"],["/2024/10/03/失落的应许之地（1）/index.html","4045609d25193dd93ead6975465b827b"],["/2024/10/27/与敌同行（2-8）/index.html","3c899255de06470e14c8d028380610fd"],["/2024/11/09/失落的应许之地（2）/index.html","45e9894484ab1d25779f1109ddad2fdb"],["/2024/11/09/破戒/index.html","c2a3356bf0de2474f7b2716f1f3258bb"],["/2024/12/07/少年游（1）/index.html","7762af384970c7dbb008ba430a555af1"],["/2024/12/07/长夜漫漫路迢迢（1）/index.html","03eb8e2c0f91dc715df7f1a8213519f9"],["/archives/2024/07/index.html","26e07c5e3a3ab887fe839e50b2d8fc9a"],["/archives/2024/07/page/2/index.html","b0d4b8032b3245a9f8898f73c699a1c3"],["/archives/2024/07/page/3/index.html","c081b241177dae3736f6d22a4530774d"],["/archives/2024/07/page/4/index.html","0d1a21bbb9eec2f09b0f5a94da6cc269"],["/archives/2024/07/page/5/index.html","f91668a766a25f040039b6e913b94ecc"],["/archives/2024/07/page/6/index.html","664e4b6a402e138884032f974154ddfe"],["/archives/2024/08/index.html","312734e693d19bbc3e175e944bd53d87"],["/archives/2024/09/index.html","686f114573890162b3814063e9923248"],["/archives/2024/10/index.html","f68035812f5ae7645b2fad7a4abf63f9"],["/archives/2024/11/index.html","41e6a41cf3f52ec9289d725685b71265"],["/archives/2024/12/index.html","b41b5a23d6a2a3fc2370d13ef2914a70"],["/archives/2024/index.html","a97a1304f9791f9a813de06840e78009"],["/archives/2024/page/2/index.html","cdeaf7b73e5fb53317453797a2327aab"],["/archives/2024/page/3/index.html","28b9253b4011aab63d1c798161f5be48"],["/archives/2024/page/4/index.html","1fa3f21bd62e90886d618bed034528e9"],["/archives/2024/page/5/index.html","37969bab3f37c7d0e4f5bd17c088b867"],["/archives/2024/page/6/index.html","2a95ca671858b74808c76feefba80e20"],["/archives/2024/page/7/index.html","f06c0137e0571871ef63e0ed4f0c1fa5"],["/archives/2024/page/8/index.html","45852fdec683d023d6ef50f8085a7250"],["/archives/index.html","a050b76412adb1843874e0a2de61d95c"],["/archives/page/2/index.html","00b8ca3a801074526c206b80ece10670"],["/archives/page/3/index.html","031b68eedf965e7cc61511b1da14e606"],["/archives/page/4/index.html","55c28bc269dd245271f0d94e2a28ddea"],["/archives/page/5/index.html","9959cd361af1cda444170a74456862ef"],["/archives/page/6/index.html","072e1960883f0d0abf25fa3b6b8cf697"],["/archives/page/7/index.html","ee8c22dc99cf38699237be8e661370ac"],["/archives/page/8/index.html","e6b60983a0f6710a01e262932d1458c3"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","31bd3c3bd8dfc446504c325b650e8e49"],["/categories/index.html","b4a0d5360f9bcadd1e36b3dd72722de8"],["/categories/与敌同行（梨综）/index.html","6031af31d57d9a2fa195b3ecfb6ffed0"],["/categories/与敌同行（梨综）/page/2/index.html","dc81252465012a8a351ee2e04cca53b9"],["/categories/与敌同行（梨综）/page/3/index.html","0e01160d6645d0f81ab4cbbad7dbebad"],["/categories/与敌同行（梨综）/page/4/index.html","a48002004b9132a4dd0b8ccf6590ec5e"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","7335b33bac761de5d88b54ad2cd47210"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","69d93f86de79f61baa8a564f1afe1bb5"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","8f3cb9eb0faecf35b3a31eb6e235b13b"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","e377e53e982cdc77969ca7d5c591b306"],["/categories/千千万万遍（指珊）/index.html","2dcc781ed8b0559039697295abb4a73d"],["/categories/千千万万遍（指珊）/page/2/index.html","9d79c8db204f23455fc109d390491bb9"],["/categories/千千万万遍（指珊）/同床异梦/index.html","7737eb2bbb5526796ccea982fdf77544"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","07136524897027776895c9de92ca0c96"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","4981065e9ae80f8e53232d9b35fe4e96"],["/categories/失落的应许之地/index.html","ff45b59b5d15309a390558bad2467057"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","63cb2d16785d2b947da5a80ccb71b90c"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","3c5636ec5aab641ce11f96a656269310"],["/categories/月照天山雪/index.html","cf586a0a762ada527a551cb6130cf2ff"],["/categories/月照天山雪/page/2/index.html","21bba5ce64488874c8c8c22ef38e49fc"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","bae14327881f6ee26568ce6cf35ef4e7"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","00ba65e35a90b139d222fb68a2c60427"],["/categories/狂飙，乱飙，发飙/index.html","91091836e2b28b93c155e51a3b97afc2"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","5273e4bb916a05a24b4cb8e69c860117"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","9249b72f2540b072f7f789cf5c3b66e0"],["/categories/短篇/index.html","78ef3ff9dab007e2d0eb06d5a7ab3983"],["/categories/短篇/玉生烟/index.html","9ecfb740fa0872aa3d89a6c6223d7509"],["/categories/短篇/破戒（马魁）/index.html","96af92abc171b202767db87a982fb014"],["/categories/繁城之下/index.html","198317329f125fb6f9447c534147d9b8"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","0adbd19b0323381d1a2760ef30257663"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","431143f34115c2344973dcdbcc54a440"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","8b6c4a534fbf9f85c27edf49033cfcb0"],["/css/noscript.css","1f0b9a380a8a33e96cdaa753a1a09beb"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","215c72bc608676d100808a389df6f790"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","e6d18708763ed326389b9637d537bb13"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/page/2/index.html","ca2a6584e724091752a44086a8a4ab61"],["/page/3/index.html","43f5d22452d0c51a550ab3ed6fe5d2bd"],["/page/4/index.html","0df5b931afaa3c69677d86e5fadf1a78"],["/page/5/index.html","d616f7ba7e4108ac04029647f76fd8cd"],["/page/6/index.html","fd732d235f016ece514d5453832f4d9a"],["/page/7/index.html","832f8d65beb0ad12091a69fcd4ba0033"],["/page/8/index.html","352e53e6eeecbdedc683d7ecf286b3c0"],["/style.css","e77f5ec7234a6ffe158834ae894b06ad"],["/sw-register.js","e2d173251cef29b94ced90935debd196"],["/tags/index.html","4dd806f6c293a0c821b6fe9988e5803e"],["/tags/冰与火之歌/index.html","de03fa11d7a45bc238f97a2547a63cb0"],["/tags/冰与火之歌/page/2/index.html","a88b1f040b739515152949fad50d06ee"],["/tags/摸鱼之作/index.html","86c095d608bed006ca4d258715ccc3ba"],["/tags/日常/index.html","2d7722e87ea3f0edf34977e6437f9c70"],["/tags/柠梨/index.html","f8dd15b0744be815ac0ffbbe71742ec6"],["/tags/柠梨/page/2/index.html","87e0343e2102484644f0e45e33d9ccdf"],["/tags/柠梨/page/3/index.html","31df70c61af77576a0a2876c346db394"],["/tags/柠梨/page/4/index.html","e883d3e4eae96b34647e6d79d80d3649"],["/tags/柠梨/page/5/index.html","64d307b64e8e61dc9e7e5f7ceb03e77d"],["/tags/狂飙/index.html","bd3a5eed941fbc0fd8ac104ec860e2b6"],["/tags/镛武侠/index.html","c1a8797d36391a130b017e6793965302"]];
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
