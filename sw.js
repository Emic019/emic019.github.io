/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2024/07/index.html","f670128309a4470ee60ef2487b73b541"],["/archives/2024/07/page/2/index.html","1e68c3b00965262f437ae766a4fda335"],["/archives/2024/07/page/3/index.html","1d3f35c51073716d5819e7f19c901ff4"],["/archives/2024/07/page/4/index.html","216347746bc818ae589113cdb94377c5"],["/archives/2024/07/page/5/index.html","20bb4005d81e5d559d9ef04652187da1"],["/archives/2024/07/page/6/index.html","ef1a08b6334db55433b0eb0e2089a6f7"],["/archives/2024/08/index.html","08c4dcdf58a85a414ddc1d5f0a43e3b9"],["/archives/2024/09/index.html","a832ab99f209beb8c8863a800841c5c7"],["/archives/2024/10/index.html","d8334ada998de71cf62d57ffb0f4d783"],["/archives/2024/11/index.html","2bd8274445fdd6175c578af315e080cf"],["/archives/2024/12/index.html","18b996d01ac19f9de5a41c32a84c52a1"],["/archives/2024/index.html","000c51510b8e19fc294ef606e1c71344"],["/archives/2024/page/2/index.html","2a92fb61829bc4ac2e8ca08b6dc77349"],["/archives/2024/page/3/index.html","d0d4d6d95b616ace7c85ebb28c46c83b"],["/archives/2024/page/4/index.html","91ead156e8c0e07f011ee7bb160fe460"],["/archives/2024/page/5/index.html","da66cef5c2b41f5a2602894a79607ddd"],["/archives/2024/page/6/index.html","b069f76e36f1be8a88070882d7d89310"],["/archives/2024/page/7/index.html","ba732953d99cfaec693197305a29ab1c"],["/archives/2024/page/8/index.html","bf4c85f44ba4823bbadac41352b8cdc9"],["/archives/2024/page/9/index.html","90409f29d4fc3cf743dedc7e88275200"],["/archives/index.html","ec4e18fa2e81bb66bcc1252364992b25"],["/archives/page/2/index.html","1128db4107b727472492b2c05cc80d77"],["/archives/page/3/index.html","58cda2043b7821f2a791f9ea53282026"],["/archives/page/4/index.html","f839656a612f356e47c22fc766b17392"],["/archives/page/5/index.html","54c54aa1b01cae8c7eed9794dc56d626"],["/archives/page/6/index.html","c22aea5e85a00ac8550c0cb8ce743359"],["/archives/page/7/index.html","170fe0201e5c4115f26220347b1c412d"],["/archives/page/8/index.html","74d97c5f19d9a23fc871d7cd32a3bfe9"],["/archives/page/9/index.html","010161c884b5bbf8701bc5428912d5c4"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bundle.js","31bd3c3bd8dfc446504c325b650e8e49"],["/categories/index.html","d635d3184103c45d3995cbe0ec671884"],["/categories/与敌同行（梨综）/index.html","5ddc7b6158b58abe6a7b19c2fee4aba1"],["/categories/与敌同行（梨综）/page/2/index.html","f73898b5c15d895bc165d5af6445b6b3"],["/categories/与敌同行（梨综）/page/3/index.html","825ecc892ec3f2d920106517ced15429"],["/categories/与敌同行（梨综）/page/4/index.html","b5d68028f59cad536b0c47ddc4300850"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","ca51e55ac944ad83a3f6f19674b1eb4b"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","d8de5eb588580c0ad9d22fdf01f9c6bd"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","fab9706da0ec0bf069feb375d9da6370"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","370441af2a9664e1b399b88124cf1f21"],["/categories/千千万万遍（指珊）/index.html","6655bad159d3e429261bb2fc59929823"],["/categories/千千万万遍（指珊）/page/2/index.html","079b1b596234c898f9f5a8c9306f6cbd"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","e8ac607ee69c537c31e71b686d0298dd"],["/categories/千千万万遍（指珊）/同床异梦/index.html","05ef07cb38c5bf440a00741cb84b2050"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","1fabad9f655d6ecae50c38ebf89d5b72"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","cea8acf634e1c0ed7affb1cd42ca7a8b"],["/categories/失落的应许之地/index.html","7ab89778802ca76626d002468569f546"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","ef156f4f2d523a75e83fcf51d63e1eb3"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","6ed0273fb631fe60cd5f14b4e2cd7d8d"],["/categories/月照天山雪/index.html","25c6b037ce6135b62cf3e0f74e42cf58"],["/categories/月照天山雪/page/2/index.html","a588880e31376d6f5dd2fa4ebddc7084"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","dda31da210783dc92e68023ab0158e3e"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","f501a124220d523560d79c5fc8240582"],["/categories/狂飙，乱飙，发飙/index.html","74f3b23ead43c8ef6e2f2743f57a9525"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","f7661c74bc74b14c41127aaa9f52a1c9"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","a40afdae25b87578e388e634bb31c21b"],["/categories/短篇/index.html","8f18ef6bb79de3cc0af01c7c0315f824"],["/categories/短篇/玉生烟/index.html","e3282ef23ee6b9cad5699cb77311d451"],["/categories/短篇/破戒（马魁）/index.html","c43e17147ff36d33823cdf6142e4a962"],["/categories/繁城之下/index.html","7c8717f2a655508b52647ae00e55a4f9"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","41f94442dbded21f7f816106dfd3a7b9"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","439318674c55239f547ad5afb0891d2a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","65c81729a66b032866de8fe89273e1c6"],["/css/noscript.css","39fd37f17221c557c330f62037d59247"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","759751d5c1270a344ff52698fa8850f6"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","e6d18708763ed326389b9637d537bb13"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/page/2/index.html","af5a162645f24a08068b76e893529049"],["/page/3/index.html","1ece3e99167a9454269e9000ffb360aa"],["/page/4/index.html","2d067264e65a56c141d5794757eb1970"],["/page/5/index.html","08612195ee9eb691cb39a2e4b258c639"],["/page/6/index.html","151ac0253554e61f19a2e6bf26516466"],["/page/7/index.html","ced5cf00f11254508c112e4ec127305d"],["/page/8/index.html","e6703a2da4f2ce2781a8642e6dffa49e"],["/page/9/index.html","0c6f90bd2a09a7077d576b3172084b84"],["/posts/1083795192/index.html","bba4f9cef60a65dda22ae8142b00fe6d"],["/posts/1099216759/index.html","c81103d9ecdb64ae242e93fa87937e6a"],["/posts/1195093070/index.html","e49b9334a79020e3225bb52a6dbcfb53"],["/posts/12506394/index.html","d4163a8996741d25b0735695f5cb7ef0"],["/posts/1315809802/index.html","e183fdfe7cb32bd7de0ecb69d098270e"],["/posts/1329165323/index.html","de74e9f1b7b4aa17e20613100a77ba28"],["/posts/1378666774/index.html","5d865b37b0e81900ec1ec413b3c26e1e"],["/posts/1407316490/index.html","b9ffe52f8f9185597a7b91e717463d20"],["/posts/1434824932/index.html","4b3332690dda348ad57c30a8c524528a"],["/posts/1445707477/index.html","26d98905cdd59deddd15ec7674bb90e2"],["/posts/1465373355/index.html","2972c4bf11bb504dbf3a66dea290f4e0"],["/posts/1681850936/index.html","de2a1b1c4c6188060779ee78d07450af"],["/posts/1710373156/index.html","26060e3c14936e0253b15e57217b9140"],["/posts/1720998546/index.html","f8fdc13fcc5abcb4d3ba439f4110b1e1"],["/posts/173005120/index.html","9b5496648f41cab2560a8da3badde79b"],["/posts/1988799958/index.html","5d1c5bb5f31ce22953abe0e96edebbe4"],["/posts/2192148155/index.html","80ff201769fb7c421b36d4921348393a"],["/posts/2229302539/index.html","78d94de7179aa59638189682ff500fcc"],["/posts/2492968201/index.html","cf81c327da3ce173bf819c6ad5cb2b1d"],["/posts/2817232307/index.html","c83dde9f53ac7dc0d2d4ad779be84822"],["/posts/2949714254/index.html","c9635bbddc78c5e4d8bdce4e1e6817dc"],["/posts/3002318373/index.html","802b2d8bd45ed162e5f91d1fe1b4c07c"],["/posts/3076558902/index.html","cb17322aecbf1435863e69cabb0e0331"],["/posts/3147359483/index.html","81030c03384e6b2d64fb5a0a4f0764e1"],["/posts/3459697331/index.html","0c0e333c1b735cb287c95920a26519d1"],["/posts/3489395119/index.html","73bd7e807b80e4f1b4b35e73b5588d23"],["/posts/3525870963/index.html","85588cf1693c94613f142bb13b4784b0"],["/posts/3640780602/index.html","d0a950d0811d95587d8a439f3eea2284"],["/posts/3699598685/index.html","2c6093de0cec942ebe437b40768e10f7"],["/posts/3712900673/index.html","6934d18f3aa8419bb8d4cc666767f217"],["/posts/3770599674/index.html","2a928353ae24728bd26bd1570d9fb206"],["/posts/3935350387/index.html","bb0a650b22c27e469153a6a9b68d3999"],["/posts/3948778863/index.html","a22ff56676419010a322aa68df85d5d0"],["/posts/403803703/index.html","1fbf590a1b5fbe011dcfdbbad218c547"],["/posts/4041933047/index.html","0f9899668e13e640f00c6b1730a97bd4"],["/posts/411074811/index.html","a052fecd04277f205bc6f42eb2f7b4cc"],["/posts/4113963045/index.html","073002339812ddf1112180f88754ddf8"],["/posts/4163174813/index.html","993f7e406cfc2a55ead5d369a12b9a95"],["/posts/4192746113/index.html","98dcc736a73e400d5c27e366db207017"],["/posts/741067372/index.html","8fcedfcb4beaa9273eee50dfbef27819"],["/posts/888354975/index.html","3221ddf3e558a7b48134fda9532c78ec"],["/style.css","0c40285fe4849bfaa8c7673783cf0d2e"],["/sw-register.js","a92f5aebbfbad8359619d2bedb0dbc08"],["/tags/index.html","9ffd1ba0a3eb7cb803c47aa6a9f2cdf2"],["/tags/冰与火之歌/index.html","25df74632963558b7f4592afebe24158"],["/tags/冰与火之歌/page/2/index.html","2fc5bc3b0e7c305bfb672019189f22f9"],["/tags/摸鱼之作/index.html","10124612392b96e6fef3727bffcf6ab4"],["/tags/日常/index.html","44a2e8eb8af23ce725d9469d3320081a"],["/tags/柠梨/index.html","0a87e332b2adee9af2308d9d6b3e67d0"],["/tags/柠梨/page/2/index.html","247ceb9e75c4e3dc50c8e720c14c4455"],["/tags/柠梨/page/3/index.html","beec69a7c5b61d0c045e82e2c7979c6d"],["/tags/柠梨/page/4/index.html","0b4018f3e610efa81edec8accf80c6d7"],["/tags/柠梨/page/5/index.html","dd37e53b20c18c95a924115f6dada4b3"],["/tags/狂飙/index.html","aeba330de742947d33d5baa36f46620f"],["/tags/镛武侠/index.html","1eb7946ee5c529c1ee4df1e879a342c0"]];
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
