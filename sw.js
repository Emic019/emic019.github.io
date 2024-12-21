/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2024/07/index.html","0148a3f4d280a6aac7dfd0819ae0c2e8"],["/archives/2024/07/page/2/index.html","520e7677f673effb4e45735ebd324dc1"],["/archives/2024/07/page/3/index.html","5652f0684a184ab1a2e2c7e20d518f18"],["/archives/2024/07/page/4/index.html","cf28ef7af7325b0ca4028380a98c4697"],["/archives/2024/07/page/5/index.html","a00b9250ce827b20d8337a0824828924"],["/archives/2024/07/page/6/index.html","f5efcdbf2992eae3046360b2213940ed"],["/archives/2024/08/index.html","b5fb70c7b9b0641c7d34ba17d1769c71"],["/archives/2024/09/index.html","bcefeb9f84f96fe7aca8aef48bf6cd70"],["/archives/2024/10/index.html","1ffb3ec9a45d31eeb2fa1e3702d3646b"],["/archives/2024/11/index.html","33de903f41447d61c82df5d46a093dc2"],["/archives/2024/12/index.html","c9033b64a955843a4d128efbf219b2aa"],["/archives/2024/index.html","7db55ef69a16a5eb3f5d24f426fabb03"],["/archives/2024/page/2/index.html","0bd491451827de223fe5768f6d8e544a"],["/archives/2024/page/3/index.html","683f73083eb7c6dbe3acf3dff4ba397c"],["/archives/2024/page/4/index.html","a7f59ae6a8914028525b399554543f28"],["/archives/2024/page/5/index.html","aa27e3441b60c49f052e7a50160a3c69"],["/archives/2024/page/6/index.html","97cf942f9e328287ff2e6f0aa0b781d9"],["/archives/2024/page/7/index.html","553ae4326d5718cb032c0ee38f798ba5"],["/archives/2024/page/8/index.html","fc6b02ab04d9745f613e9a3890e5f2cc"],["/archives/2024/page/9/index.html","a30d0163196b23f6e9f5306c921d69ad"],["/archives/index.html","b0997dbb2d5d01643647ad12e0a24a1a"],["/archives/page/2/index.html","d392be746df6af1a58c95c97aaba8a91"],["/archives/page/3/index.html","5156d7b813ffeb67df06b76ed4ccd504"],["/archives/page/4/index.html","5456227056f2aaa721a8001966b18ed2"],["/archives/page/5/index.html","71e4ba27c1785890580d25b9df5ba1b5"],["/archives/page/6/index.html","ee81838096ccd8e7db7aa257ef018dd5"],["/archives/page/7/index.html","98c477d78f09b730b0e76caf14c23a0c"],["/archives/page/8/index.html","e9fef93ac1427746fa3fa2e5b4523daf"],["/archives/page/9/index.html","3a9a7133ba02cb97204fe18aedb0c71b"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/别和数据聊感情.html","2087996b96ac7a8f35a120582e40bd86"],["/bundle.js","31bd3c3bd8dfc446504c325b650e8e49"],["/categories/index.html","7c9daf796077e3e69fe0a96099b9cc12"],["/categories/与敌同行（梨综）/index.html","df4b77af65a38982f92e5c01bb6ca570"],["/categories/与敌同行（梨综）/page/2/index.html","3081b9386318d9a8339312eb7b574482"],["/categories/与敌同行（梨综）/page/3/index.html","988e3bbaea05a91ee87452782ef91c81"],["/categories/与敌同行（梨综）/page/4/index.html","955ef84aff40f8bb4cd2b0100c5a6e95"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","ffe56ce06ee7bb502f8dc1df39019263"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","63a8da9225fc655cfab7b26cfe47d3c8"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","d0d6c8622569c89b3b4fc24cd98b8049"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","53ab9a9aa6a5caa1a30aff84a0782d77"],["/categories/千千万万遍（指珊）/index.html","078eb13e79225d46a39bd946ec1c1357"],["/categories/千千万万遍（指珊）/page/2/index.html","fe2b4b011f5767601691eb386c6b01ec"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","287712f2e8facc5dad1fc6212d8f82d2"],["/categories/千千万万遍（指珊）/同床异梦/index.html","c51a43510a92bd1142772c8b2531e74e"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","886f13fb187735f537b32301c4c787c3"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","dbac011277a70f02fe8db69e4327a956"],["/categories/失落的应许之地/index.html","203a97040a1a2b5d57648ed7a438f208"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","300ec6c2b780474d335b309780a86b33"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","b44f281637f0115ca5ab825601fac931"],["/categories/月照天山雪/index.html","9d90989960875dc42d01f6d6d56c4ff8"],["/categories/月照天山雪/page/2/index.html","d48726c2351823126dba579c68e7164a"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","2064a1f53b8c076973be92f83b57d95d"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","8385b906ecdbd1f57f78508a961a719a"],["/categories/狂飙，乱飙，发飙/index.html","d6e3b945e927be300a895f8a45a6a3d0"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","3bf4ad4061029102ae735f07b3590fe6"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","85f1a3c67b5a3f5c3896c9c9c0467393"],["/categories/短篇/index.html","4be0ffd31d5814e973de957190a1b14f"],["/categories/短篇/玉生烟/index.html","f9b50f0f9c47e85c8a7e791e53bd94cd"],["/categories/短篇/破戒（马魁）/index.html","5ea794c25ec4e8043565b9fe31a59e47"],["/categories/繁城之下/index.html","aa0b4caefa7a89896934475c2580bdda"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","c3942d0355ebe00d0e266e23d354f74b"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","6f424aa6c1ed65cb9a3bb07282415f0e"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","65c81729a66b032866de8fe89273e1c6"],["/css/noscript.css","39fd37f17221c557c330f62037d59247"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","6fcde615c93538e6946f50cd768089f3"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","e6d18708763ed326389b9637d537bb13"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/page/2/index.html","4c392022eb3f00ab423ff0783412af77"],["/page/3/index.html","df6a128d6e67afdc90ad99dc66e87d25"],["/page/4/index.html","6131f47efca4f5d118adb76db34dce45"],["/page/5/index.html","e6bcc62e647cd2db0bfcb0c3c338d2d8"],["/page/6/index.html","ac50fb3439d4ad17297eade0710de936"],["/page/7/index.html","a9bf9358b7e7f5bf5b534be4123549cb"],["/page/8/index.html","e9fb79948abb365428d9a86a10e25d52"],["/page/9/index.html","9335495ff1e1fe897874cfd4d5baa452"],["/posts/1083795192/index.html","c1a13d96504570dd639cc0362cf924fc"],["/posts/1099216759/index.html","d6f2a5292a7f5e139a4d7e7268c3ee17"],["/posts/1195093070/index.html","830bdb0901b38efa4cfe2ed8324f30da"],["/posts/12506394/index.html","e0ebcfa505844337bf221c6405825f4e"],["/posts/1315809802/index.html","4b41397c1bdf7ad69481ab7b5e09e649"],["/posts/1329165323/index.html","ee060944f5d43d1e96ac7ef35813b4dc"],["/posts/1378666774/index.html","6ed4263919e67b73e53884a168b48786"],["/posts/1407316490/index.html","a84ba92f06a41809b5249c9b50357e2b"],["/posts/1434824932/index.html","fe3c3c4b8bb2f59ee53b0084b18a03aa"],["/posts/1445707477/index.html","f001650e04acfc344324ec5f89794d24"],["/posts/1465373355/index.html","a06597808ec0d6b49ae134f3cc298638"],["/posts/1681850936/index.html","bb877ba7ec4f77130a900dca4ee37690"],["/posts/1710373156/index.html","5fc39963e45e647abfb6d1551ae3e7c1"],["/posts/1720998546/index.html","ef4c2caa9e2ec31c973f95209846019d"],["/posts/173005120/index.html","ed690eb151340912d49955447220549f"],["/posts/1988799958/index.html","d52a7d6c1440986cf1b43c4775e89926"],["/posts/2192148155/index.html","07cf7fe7820f3d8392d57f9313bbf52d"],["/posts/2229302539/index.html","50f1e29e536d834dd628e44bbe59a42d"],["/posts/2492968201/index.html","229db2e4c9bb1f6529ae5103d0c96d13"],["/posts/2817232307/index.html","42fe4a29d83b0b41eaf6d60689ece607"],["/posts/2949714254/index.html","381cb8079512309763d647377377655e"],["/posts/3002318373/index.html","2ae42cb47ebd5a3150e459d477e207b5"],["/posts/3076558902/index.html","633e82ef852620ec86d0755a3608ad9f"],["/posts/3147359483/index.html","f4bf55a2c6c02d45a59d1892966034b9"],["/posts/3459697331/index.html","8f96220930e86f7b2d1adfdcfa344872"],["/posts/3489395119/index.html","48f1f370b79906e74c4b35def1f2a0a0"],["/posts/3525870963/index.html","c6533d4039b813abc9ee8d2cf3bef95b"],["/posts/3640780602/index.html","fff8e3b5367c7676a987066ed015038c"],["/posts/3699598685/index.html","40eecb9016c929e4858f8c38adc85290"],["/posts/3712900673/index.html","c666991a8879532573972bab52b20b3d"],["/posts/3770599674/index.html","ef2dfb91ecfd9053f8431a5d711b17e0"],["/posts/3935350387/index.html","6ffcc2b1698050f7c0b82589e4b1dcbe"],["/posts/3948778863/index.html","9e1b26b5ecab0a0907fee3bd957b6fd0"],["/posts/403803703/index.html","be67f500177d0222b84f2f3489603f86"],["/posts/4041933047/index.html","1432d49b0ca4df8b536734b2cbeb104c"],["/posts/411074811/index.html","218f00f74521cf1305e90ec012a3f8c3"],["/posts/4113963045/index.html","d2a2afa0eb7f341af9d0c40ef00a7cbf"],["/posts/4163174813/index.html","737766c1642d6625c9ad45a85cd113a8"],["/posts/4192746113/index.html","88a6b445387aa04dd575779990ebe165"],["/posts/741067372/index.html","89ab79be043b7aba246bd976d13d367b"],["/posts/888354975/index.html","5e255e3443fd339a39036a10ebb4205b"],["/style.css","71e622237828e9f190a37610b54cf34c"],["/sw-register.js","5a2469b877ddefc1d6277bfdb394ed2b"],["/tags/index.html","814a7fa000d58c93ef2ffb5c02350a6e"],["/tags/冰与火之歌/index.html","a46f1df9b5740ea04759ed07bd46cfb1"],["/tags/冰与火之歌/page/2/index.html","35a0cdab9ccd4859a0d5ddcab19ac7df"],["/tags/摸鱼之作/index.html","d4432d5dc9df27960994b3a674fe3c1e"],["/tags/日常/index.html","ff1952e74186cde49877003821d7bfd9"],["/tags/柠梨/index.html","443e8c293c81fe065217890cdcda024b"],["/tags/柠梨/page/2/index.html","462a26542910c930ccca1e3d6653b572"],["/tags/柠梨/page/3/index.html","817e757bc826ddb57467f4965bdf1a43"],["/tags/柠梨/page/4/index.html","5a77d80230f498f44986e2c3f55ae244"],["/tags/柠梨/page/5/index.html","8bf7efbe499da6404efc51d361805032"],["/tags/狂飙/index.html","4b71653b146f8204d4838b61a10524fb"],["/tags/镛武侠/index.html","611c897c779f6a2c7b083eeabec8a80d"]];
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
