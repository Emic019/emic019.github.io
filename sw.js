/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","74dbb5f1539337f9b6c83e6f4a2869f4"],["/2024/07/08/月照天山雪（2）/index.html","4e18ea8c24e022cbe41a035c9bd8a12b"],["/2024/07/08/阅读须知/index.html","80bd2c6170f72dab8d6125fe7e8c5d3d"],["/2024/07/09/同床异梦/index.html","c48bf43f5e09ace1703a792ff82bef56"],["/2024/07/09/月照天山雪（3）/index.html","de9d446098c638443fa4bd5bfba24786"],["/2024/07/09/月照天山雪（4）/index.html","385a9b74cc88eb2d55ece6ec84137189"],["/2024/07/09/月照天山雪（5）/index.html","64fa9d8f2eceb1607bd63001a34b7452"],["/2024/07/10/ceshi/index.html","75c0b3911a7bcbef98c0d76d902bd2bc"],["/2024/07/10/一千零一夜/index.html","c278c4925809b0caf7bae42bd6dc08e2"],["/2024/07/10/风雪夜归人/index.html","ead650f9f27ad55a22301e86188f0f2c"],["/2024/07/12/与敌同行（1-1）/index.html","9ff5a7606aeedfb1955c8f7d2b3159b3"],["/2024/07/12/与敌同行（1-2）/index.html","16696cdf561e7fe7c8fe8dbe7a178077"],["/2024/07/12/与敌同行（1-3）/index.html","ac7abc5de1a0353463c147fe042dc7c3"],["/2024/07/12/与敌同行（1-4）/index.html","85f5bd77c2cba6f51ef5b94dea42e6b8"],["/2024/07/12/与敌同行（1-5）/index.html","e8d7895e08324a2e2b51dd3decc067dd"],["/2024/07/12/与敌同行（1-6）/index.html","eaedc313e4137f9be07911ca1448ff84"],["/2024/07/12/与敌同行（1-7）/index.html","4b4d12b5393785586af40ab07d10e65f"],["/2024/07/12/与敌同行（1-8）/index.html","965693539ea00b88bcb26686e6fe509c"],["/2024/07/12/与敌同行（1-9）/index.html","fe848ab57b0184a270d16672273e92e8"],["/2024/07/12/与敌同行（2-1）/index.html","30c2b6f10235e4b66a203212a46e7e25"],["/2024/07/12/与敌同行（2-2）/index.html","2cd3133276bfbe087c68806df0762d68"],["/2024/07/12/孤独地狱（上）/index.html","193aef7708336291db747ada5b6cffbe"],["/2024/07/12/孤独地狱（下）/index.html","726c0daa3bc6ad65af04d20225208374"],["/2024/07/12/玉生烟/index.html","10dbd847ac4dde42319df9a346f75a5a"],["/2024/07/12/知更鸟颂歌（1）/index.html","6a0360efe90897a493a8e7bb055b5174"],["/2024/07/12/知更鸟颂歌（2）/index.html","ad76c4eeb1679fd9934b809151cf1d59"],["/2024/07/28/与敌同行（2-3）/index.html","5e263e12be8136fe6bc3a40d1bb63c68"],["/2024/07/28/知更鸟颂歌（3）/index.html","2820c2d481c9181aa7cacea9961f3bee"],["/2024/07/28/知更鸟颂歌（4）/index.html","5e33305dac50b7dd2cffba3fc108d9fb"],["/2024/07/28/知更鸟颂歌（5）/index.html","43bef31b00b5f9d8c5756840ca8eac4f"],["/2024/08/24/与敌同行（2-4）/index.html","8d03f9ef254e0cc21b645b9b03833267"],["/2024/09/02/与敌同行（2-5）/index.html","6559b848ef35a2852d05aec0938701a3"],["/2024/09/02/与敌同行（2-6）/index.html","4606dd5687ab2af3b504698441b9681f"],["/2024/09/15/与敌同行（2-7）/index.html","ca829d51b1b4ca8f79135c266a61a3c2"],["/2024/10/03/失落的应许之地（1）/index.html","0c8e324aea86ac8baab0de18ba2cd5b3"],["/2024/10/27/与敌同行（2-8）/index.html","ce87c1ecb281a0e3b87fd55ae2cc27e3"],["/2024/11/09/失落的应许之地（2）/index.html","561acfb3d69ef1e27d922f734ddfafd2"],["/2024/11/09/破戒/index.html","4f476d80d3c5ce1ac0b79a565ce6074c"],["/2024/12/07/少年游（1）/index.html","992543a6cbdfa4b8f4a294b06929a8be"],["/archives/2024/07/index.html","5c070d928b115ee303a43c8f11953461"],["/archives/2024/07/page/2/index.html","acfadc450d15445316f330d32929c845"],["/archives/2024/07/page/3/index.html","f72524c2c9673a4feb9d2b91ad3cb8d3"],["/archives/2024/07/page/4/index.html","48ce0669cb6a1df219cdc11886f0595b"],["/archives/2024/07/page/5/index.html","b8026bb7f147a11c084eeb973ef6b3d5"],["/archives/2024/07/page/6/index.html","f1d1679feb2456f8e2e312da07e586c4"],["/archives/2024/08/index.html","49a3438f84a5887d041d8462134268cd"],["/archives/2024/09/index.html","ebc8d2271c66785a3af21347765f0177"],["/archives/2024/10/index.html","234970e82e60787fa44f375cd66196cd"],["/archives/2024/11/index.html","8b3e69430671447114e9e69a61863fe4"],["/archives/2024/12/index.html","b0331cb1822fb05aa8c27db9e16b4e6a"],["/archives/2024/index.html","b872006503c41ee3cdaf0170a76c7514"],["/archives/2024/page/2/index.html","2d47568d6961022f172e35dab5fb1732"],["/archives/2024/page/3/index.html","04a355a510a254d6f875eaab503d1144"],["/archives/2024/page/4/index.html","75c978fd4dfd8c9c5b6dc93e29c7d219"],["/archives/2024/page/5/index.html","412c6014505263e6d2924b1a2ba3d22a"],["/archives/2024/page/6/index.html","5db8655e28fa55d388632a57232ff243"],["/archives/2024/page/7/index.html","5f77ed80ea4d516cf4eea8e7b2b7e347"],["/archives/2024/page/8/index.html","51348da8ca01887823e76d52e4fdedcd"],["/archives/index.html","317e0da1d3aa7f9d3cd9cdd11da78f6f"],["/archives/page/2/index.html","5d53cfc70c7f132e86b827f3807dfe80"],["/archives/page/3/index.html","40ded3fecbfa604a05099d595dfcec29"],["/archives/page/4/index.html","c1aa2fe1f61b4c9a83e7e31f87fc972f"],["/archives/page/5/index.html","23da8ba6dc654252d5b59ae2f97d8c30"],["/archives/page/6/index.html","3d5bd570f17c85de69c18ac2b624e063"],["/archives/page/7/index.html","52eba18cb9f14b03e763ca5e97a47add"],["/archives/page/8/index.html","e495c7b46749a562ebbcdc539a77bd87"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","85a1acaca7b5b7f24afcc02f63cbcfad"],["/categories/index.html","9f3db6d69a4b04cc798906c9e6aebaa2"],["/categories/与敌同行（梨综）/index.html","1b4c0d3745ee7c70aefb62cc8f18683c"],["/categories/与敌同行（梨综）/page/2/index.html","8d75a5d8213f038414e148642cd21307"],["/categories/与敌同行（梨综）/page/3/index.html","5a08405e1ff26490efad57cb7aed5f57"],["/categories/与敌同行（梨综）/page/4/index.html","cc6e101eb474701c51d7600641561a4b"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","e13d0f6c211f7b1345471060c764da34"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","c5b7c4e217daf88f3d6f105ea7ede8fc"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","9e5697d1ca46e6f95bcd3c225f1f1a7f"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","27364e0506c51dfae67fdb7b6743fdef"],["/categories/失落的应许之地/index.html","5d3087d0ea2efaa753ec67aa049f8a8c"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","c90b4919e1fffff70a733c8a9fdeee47"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","188912a352b2974fc35d874ab7a7bbd3"],["/categories/月照天山雪/index.html","fec1cf3f4901d654eef5031e8077fab1"],["/categories/月照天山雪/page/2/index.html","24442b1339920aac06e84656c099a191"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","9ff458e3645613ca3dd56d04ddf2ea8e"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","035810bd2dbfc40e5e1b3fa4bb5a97f7"],["/categories/狂飙，乱飙，发飙/index.html","fb40ac43f0bb48db0fa9844889fa11b3"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","ad4e87020a1125a8150c1e4124bf2cfb"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","07d284c7f6f136659c0ef5869ccb9320"],["/categories/知更鸟颂歌/index.html","ec3bd76ea6050eae00a181be0d68a91d"],["/categories/知更鸟颂歌/序曲/index.html","e3cd7e64bc8a98ce3b31274af9399a00"],["/categories/知更鸟颂歌/颂歌组曲/index.html","6383d46d43fb1c1fc7da948e7a62874c"],["/categories/短篇/index.html","1434f439347e0ffa59558a4f297fd797"],["/categories/短篇/同床异梦（指珊）/index.html","0b4655a870508365fe4c6a2e0ce2b669"],["/categories/短篇/玉生烟/index.html","6d4d996fa3c37a03086c22fc4666e951"],["/categories/短篇/破戒（马魁）/index.html","833f2f2abf505ed84282f42d31e9dc49"],["/categories/繁城之下/index.html","d22a732ba3770f1673656d4f056e020a"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","55c877ea81c1c3cd73b90d178427e0af"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","7e491dce31182dfc1bf790b039b7aae4"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","5c4ddc7fa456824e251c1031b2ee23b7"],["/css/noscript.css","8643e0f667d2af216cabb28166d08742"],["/css/sweetalert.css","71a8bade089ab1350cd828362d88618a"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","218829660c1e7d1437d3c28d5a950a81"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/js/welcome.js","41b932893de5726ec7a241af7a924373"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","e6d18708763ed326389b9637d537bb13"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/page/2/index.html","cb5a3395d267ecdec1130f0f2845d963"],["/page/3/index.html","1b221848b459119231f21a762f22cf0d"],["/page/4/index.html","218308afa17bead2f52901075ea7bce9"],["/page/5/index.html","9a1a579c419f798e9c84de5da48efd0e"],["/page/6/index.html","da1b19a0ca96a119baecd4583966dc69"],["/page/7/index.html","ce7e1f05b1b6d861972d9c371ea2af58"],["/page/8/index.html","23043405553c3ded105f4d3d610afb02"],["/style.css","27d56b40d6f0d52577e7623b83586dd8"],["/sw-register.js","810f42a3d91586e7f0b4bc92a76ad1cd"],["/tags/index.html","bcc1c1659f4b334d3074c54fa847c71b"],["/tags/冰与火之歌/index.html","f711bef2b8c598664b1b6e51279cb9f0"],["/tags/冰与火之歌/page/2/index.html","426efa983e96631ec2437e2b5ecca5ee"],["/tags/摸鱼之作/index.html","aa251bebbcb386306563bda7fa5a3ee3"],["/tags/日常/index.html","733dcd1f98d522cd5ec48007effbc810"],["/tags/柠梨/index.html","c95600c9df6b995d2133f78291d5c3ca"],["/tags/柠梨/page/2/index.html","3f36410aa6e38fe0b39ff98160732998"],["/tags/柠梨/page/3/index.html","483c02cbca02795312f0f32b798c12f1"],["/tags/柠梨/page/4/index.html","fe48ebba12f8cd6583d43345fc23320b"],["/tags/柠梨/page/5/index.html","3eea6d35af0c4c05dab1be107078d934"],["/tags/狂飙/index.html","8db374e8225813d0bc5445e993c46d0a"],["/tags/镛武侠/index.html","6de9a7e84f0aec376c429834185d22c4"]];
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
