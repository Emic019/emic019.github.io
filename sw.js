/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","74a38e221c5d829b9fa73969c8813db1"],["/2024/07/08/月照天山雪（2）/index.html","dd2b3867d6a41ff0a890e17b9a606fa6"],["/2024/07/08/阅读须知/index.html","8f53a3b4b64c6e1c77708523b2ffc3bc"],["/2024/07/09/同床异梦/index.html","78919fa39685bf9d17c7abb7f364b2f8"],["/2024/07/09/月照天山雪（3）/index.html","8d9007f8e00f8a98e2c664cf4ffbf116"],["/2024/07/09/月照天山雪（4）/index.html","9edc035df7ce9d0b30ae749ba7844aa5"],["/2024/07/09/月照天山雪（5）/index.html","373d7b5f10c5e75a734eac386da8569a"],["/2024/07/10/ceshi/index.html","38b98d214b985f3736ea090dec32b76c"],["/2024/07/10/一千零一夜/index.html","ab081c2a700f825cfb8943ebf9ade4dc"],["/2024/07/10/风雪夜归人/index.html","6ce5a627211f738d4a1a2ba642d66abc"],["/2024/07/12/与敌同行（1-1）/index.html","7b95f1eb5496eaf1b64fd829b9ea7ea5"],["/2024/07/12/与敌同行（1-2）/index.html","ca675a2d35120ff0f0f62b183aa2b22f"],["/2024/07/12/与敌同行（1-3）/index.html","663f6d659773b2e42b9be5dca568d8ed"],["/2024/07/12/与敌同行（1-4）/index.html","e4100e447e8024c28624fcd78f7dba91"],["/2024/07/12/与敌同行（1-5）/index.html","de228a24460ae23d6de4a4a8e21012ed"],["/2024/07/12/与敌同行（1-6）/index.html","bf1cc3e31578f5b862580c1b80486f19"],["/2024/07/12/与敌同行（1-7）/index.html","82b9a22b330ede763733e1e319d323a2"],["/2024/07/12/与敌同行（1-8）/index.html","c064d2b702e24bb20a3a28e5eb2e3592"],["/2024/07/12/与敌同行（1-9）/index.html","20f41881cabd5b3f0d921b1cc5d2bd92"],["/2024/07/12/与敌同行（2-1）/index.html","6338e29a1d5140293a9ad0b1fe976970"],["/2024/07/12/与敌同行（2-2）/index.html","231c00872e29cd3bc78e150e5414c176"],["/2024/07/12/孤独地狱（上）/index.html","937b67c951f35799ff4a4a8028c188f6"],["/2024/07/12/孤独地狱（下）/index.html","508e9cde680939f29be3ac8cd67617b1"],["/2024/07/12/玉生烟/index.html","56875ce4ee89e55d7dafa125445190d6"],["/2024/07/12/知更鸟颂歌（1）/index.html","2567684bec6b393b19b5e815481a90c6"],["/2024/07/12/知更鸟颂歌（2）/index.html","51cd005ed722c5ae3e51297e91a78f1b"],["/2024/07/28/与敌同行（2-3）/index.html","b62c01d53b871b9b1a05b70c9b728693"],["/2024/07/28/知更鸟颂歌（3）/index.html","a255793177488d343d2156ea9b50b7b8"],["/2024/07/28/知更鸟颂歌（4）/index.html","c4d98c435fbdae63df1e19ba0d5e87fe"],["/2024/07/28/知更鸟颂歌（5）/index.html","573f2e54cf6d272a32c1ec8f4a95cee9"],["/2024/08/24/与敌同行（2-4）/index.html","45177c08235e5a6394c932899bfee618"],["/2024/09/02/与敌同行（2-5）/index.html","806af556ef4eecfd5688407997fad48e"],["/2024/09/02/与敌同行（2-6）/index.html","23bc98200fbabc1d0429d188e3081add"],["/2024/09/15/与敌同行（2-7）/index.html","0ca18f37a1478caab890bdbe6ba10650"],["/2024/10/03/失落的应许之地（1）/index.html","5d1795d685f632330a9449c1fb86a78e"],["/2024/10/27/与敌同行（2-8）/index.html","8b1d6411f373f72c349ec437da6805cf"],["/2024/11/09/失落的应许之地（2）/index.html","740bacfd639ffda30f4c946fbb28a539"],["/2024/11/09/破戒/index.html","dff5de39e6bf08f0b155f4f7d7c5cbfa"],["/2024/12/07/少年游（1）/index.html","5b9942686969d8a2faddb1b4135672cf"],["/archives/2024/07/index.html","11bb62be81c462c796d51d8abc77854f"],["/archives/2024/07/page/2/index.html","accda4d30083e3891ac848cbc3e44e49"],["/archives/2024/07/page/3/index.html","56cbdd407f3a25bddcdf7fdbae16d063"],["/archives/2024/07/page/4/index.html","6cc8a8a2d438de74861741f102309fc1"],["/archives/2024/07/page/5/index.html","737dec617b17292b2562a53f2b37844d"],["/archives/2024/07/page/6/index.html","03bf98aed723856ebb987c2cb74858b1"],["/archives/2024/08/index.html","bc1e7ab63f9ac97903749677073106ee"],["/archives/2024/09/index.html","1e6edb04efcb29db959091764f4299a1"],["/archives/2024/10/index.html","f9fd1ed2e4c78f81b39be4b72398da5e"],["/archives/2024/11/index.html","9ec0ba8339c5c78a97b3fba1448cedb7"],["/archives/2024/12/index.html","bfb5f8600b1b6dc566b02c9a72ceb181"],["/archives/2024/index.html","02796560453e7f21689b9240571e4b2d"],["/archives/2024/page/2/index.html","4ec5c800c3b1d10008187f0d1e8a6fe9"],["/archives/2024/page/3/index.html","59438cdcb58997baf3bcbba76675d986"],["/archives/2024/page/4/index.html","f276a5e0e46bd3d9e00fd1be5dd6bb86"],["/archives/2024/page/5/index.html","dbedd44e5229548af486b0f607fc6734"],["/archives/2024/page/6/index.html","138559e202414f82e59ed1dca86d2962"],["/archives/2024/page/7/index.html","850b49abc61c25c59935a41586443323"],["/archives/2024/page/8/index.html","dd66b9482afa86db83bc8d170feed361"],["/archives/index.html","4dc749411fc19b68f947516dec22634a"],["/archives/page/2/index.html","77702d19a8050137c3a3277819cfaaba"],["/archives/page/3/index.html","dc4ad824ca5380c95225fc7cb7c43343"],["/archives/page/4/index.html","6aaed6172f2740511284ac84f51f3baf"],["/archives/page/5/index.html","12e264a76cb4e8c6a3d758f14dc8517b"],["/archives/page/6/index.html","e2f46bcbfed5509556dc6f59da257649"],["/archives/page/7/index.html","f88771d5c69f2a2a8e014de46539b34d"],["/archives/page/8/index.html","b60c22eb766cd23786027984a4ba862f"],["/assets/别和数据聊感情.html","2087996b96ac7a8f35a120582e40bd86"],["/bundle.js","23b0ab2bb70f50267c84963f46decfb5"],["/categories/index.html","4d9dd1abc55f636cb892abbd68e427cf"],["/categories/与敌同行（梨综）/index.html","9c597da834c6ae59ed57d716da9f9df7"],["/categories/与敌同行（梨综）/page/2/index.html","5f60ed9c5bff3105d8abc3d9a2fe3748"],["/categories/与敌同行（梨综）/page/3/index.html","116b2519e9e63c29a1c68420af502a1c"],["/categories/与敌同行（梨综）/page/4/index.html","53b737f0ef0200335508f8e7e6828f78"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","3a9f626e9716c95ee12bf7322f6f7422"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","370f8e7f66d3556076703380c355bef8"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","db0c895dccf5da6241c29f791d128524"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","ec757f126d750af4f4aaa59ed0777aa8"],["/categories/失落的应许之地/index.html","94e32ddfc525dbeb8205c6a004bad6e7"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","fc6c5b24133529b83bb8a6ed858f5bd4"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","514959162d78900b0927c5adc4eda64a"],["/categories/月照天山雪/index.html","c3e8a863d282d7bdf1f77e6d5f561170"],["/categories/月照天山雪/page/2/index.html","7f3d821ffef7e639dd503c5ee3101c8d"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","672f53850a53569a010a19fd9686bb24"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","6c9393efad156c57917347b598fbf11a"],["/categories/狂飙，乱飙，发飙/index.html","5bd81f821caec8e804be40edd0c5075f"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","71b3218e32fa1fc484581fd6ea2950c2"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","401531add7eaae8826301ba6bb535295"],["/categories/知更鸟颂歌/index.html","b018897f67d9fe9199f697386b7a411f"],["/categories/知更鸟颂歌/序曲/index.html","535d4a68d1d064011bcfdfe00af1c352"],["/categories/知更鸟颂歌/颂歌组曲/index.html","594b96e126f75974efd947b70a123687"],["/categories/短篇/index.html","5f6c866b7d4d4bb2b8dc1cee53574971"],["/categories/短篇/同床异梦（指珊）/index.html","bf12a71585e6fccd5d4b4c8c6c73214b"],["/categories/短篇/玉生烟/index.html","c4f4d31615c7b4a017a4357ebcf5392a"],["/categories/短篇/破戒（马魁）/index.html","86a427ad88f92d9e4810ffda2762660c"],["/categories/繁城之下/index.html","05c33a2b743b1785d788d7f559ba7bf3"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","8e76afadd8269d17f47a135d59a167c7"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","52e2655d6b260591b45b6a620ffede3c"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","fde27a2b38d64c62bceb6969d8a21264"],["/css/noscript.css","2fb7952f17dc347c8135adc3804e024e"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","6059bfdbd270c34c0810d45bd254f463"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","e6d18708763ed326389b9637d537bb13"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/page/2/index.html","e7b4f0c4199f4bc2c2ce6cc70c08d78d"],["/page/3/index.html","147e7367f29b5449164cb1225622ca8a"],["/page/4/index.html","e4e1cf5434ed834dd69d54963f9f0d1d"],["/page/5/index.html","9b5096802632a7514156c59857c53890"],["/page/6/index.html","a8aa5157aeeb60b6abad7fe77e910ac3"],["/page/7/index.html","62a4b1cecfcdb946acb009df2fe72f9d"],["/page/8/index.html","9a1a9b4386426be9cf99eeeb2b396d95"],["/style.css","31745b1bd1d9cf8422ccbf24dc4a4532"],["/sw-register.js","3e172f85d3a1b78e749bce6d11aaceb9"],["/tags/index.html","fcec67a41edb1daf46917b614f7286c7"],["/tags/冰与火之歌/index.html","9e14f3717a3013d88a8e4d041d4b7b98"],["/tags/冰与火之歌/page/2/index.html","11a28a289bfe5d8dd8b9d8cc8cadff8a"],["/tags/摸鱼之作/index.html","e8f7e89009309c43dacbd76a85ab2ffe"],["/tags/日常/index.html","a1ae8002a173febf229eb5ad4d7ee6f1"],["/tags/柠梨/index.html","51487bf3ec3f84c6e3d3a327d8d649d6"],["/tags/柠梨/page/2/index.html","df8ff51276853ca32214b3a9ffcae93e"],["/tags/柠梨/page/3/index.html","a3e9a9994f23de85e7c7dc460b251be7"],["/tags/柠梨/page/4/index.html","72d0f49710e7f1f5dbeec52d5117b0ce"],["/tags/柠梨/page/5/index.html","65ca3204fd4826ce294070103b02e117"],["/tags/狂飙/index.html","42c4da23b710ad4f2166d73dd0787be2"],["/tags/镛武侠/index.html","3b2cee6be920ed936b6cecef6320fa6c"]];
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
