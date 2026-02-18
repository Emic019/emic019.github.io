/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5a582e0da1f4de82f175368bbad4ba8c"],["/about/index.html","08dd0c8e7498e600422706e3d9564456"],["/archives/2024/07/index.html","db9369b7b5de6d08b1a20856c95e6af0"],["/archives/2024/07/page/2/index.html","eca5dfd40c5fb217b6bc1c22333276f3"],["/archives/2024/07/page/3/index.html","1276c44b6915bbe5fe237ba1fc3f7762"],["/archives/2024/07/page/4/index.html","ca3ec9c086f43b099e0ef48265580281"],["/archives/2024/07/page/5/index.html","f281328296793dfcda779db712b0435c"],["/archives/2024/07/page/6/index.html","9b4faaad1cce390eeb437a83f033a733"],["/archives/2024/08/index.html","e9f0894de3e9310df20ce48970e97874"],["/archives/2024/09/index.html","dc1b08a4c41c1971a9c051f0f9ea75e9"],["/archives/2024/10/index.html","afcb34c0bd1892223cc67186876d3957"],["/archives/2024/11/index.html","c043a7041f11c65dbd4faac3321329bd"],["/archives/2024/12/index.html","e50af14dd1a72cb6b8056a364bab83c9"],["/archives/2024/index.html","d45018c9f52d1ca56db296ab08a03e34"],["/archives/2024/page/2/index.html","d9e124e1d30a183ca284435f020a8afa"],["/archives/2024/page/3/index.html","df3cfe93e0f34753091c8b46775410be"],["/archives/2024/page/4/index.html","a98cecf08adcfbb46983a5b32a8625e1"],["/archives/2024/page/5/index.html","07cee78868b68472022c2a16c7bd153e"],["/archives/2024/page/6/index.html","93ba95069cd9e19044f4626aa51ce3ba"],["/archives/2024/page/7/index.html","544e1cb250fba53853e93f65d754b2b7"],["/archives/2024/page/8/index.html","22187f41fbf2f171e77dbe11f80677a9"],["/archives/2024/page/9/index.html","34ebd60e7bfdf63b6fb8b19d9b1ff2bc"],["/archives/2025/02/index.html","132f28a3b2ddb7a70ddaa75b8c7392eb"],["/archives/2025/03/index.html","4d1cc5d5db01bced1b507e1c577286ce"],["/archives/2025/04/index.html","e142e6cb7c370c8c992bf0ec8d989cc0"],["/archives/2025/05/index.html","95b76c828254824eb5367995d09671aa"],["/archives/2025/05/page/2/index.html","ad73c432d5069e4371c51097fd9830bc"],["/archives/2025/06/index.html","4bc7db91663595c22207e9ee38865f0d"],["/archives/2025/08/index.html","7da38cca16383f305b22748e6105bc52"],["/archives/2025/08/page/2/index.html","299e46cd63ea36ac490e8e274456b4dd"],["/archives/2025/09/index.html","61420bb196ea9378f5f97f7ddefdc48a"],["/archives/2025/10/index.html","13c446fc956b019fd5976b0c3f7fd221"],["/archives/2025/11/index.html","2f023a5f845a1dcea502af10baac2299"],["/archives/2025/12/index.html","c60875b15addaedbe0b979d1a4640ba7"],["/archives/2025/index.html","2773136e3e50287aa7ce4d76658d8c22"],["/archives/2025/page/2/index.html","55f10cdfd03bb95362a6862dcb870d95"],["/archives/2025/page/3/index.html","d6876ef4f48be4b3c0f81b9e61ed0418"],["/archives/2025/page/4/index.html","b5b1c56a08310eb6d1bd8c103b62cac5"],["/archives/2025/page/5/index.html","863b25f888ace56dcffd50a31ee5f882"],["/archives/2025/page/6/index.html","4808d76fdfde590ba20dc045a0341106"],["/archives/2025/page/7/index.html","415af8012be59dbc58098de9fe4ee801"],["/archives/2025/page/8/index.html","97ad500f9c081d59ed5d10039261f4b8"],["/archives/2026/01/index.html","bc127d035f539606c06a62e1f94311d3"],["/archives/2026/02/index.html","ef518032cc5800f266c3169682ad64b9"],["/archives/2026/index.html","0aff30295c1c6aab6cdfca30116e824b"],["/archives/2026/page/2/index.html","1d01be16798601f1595312cd3153b1fd"],["/archives/index.html","36b3d986160bf898d2d9d22e42d286b5"],["/archives/page/10/index.html","080ac0d4cd8b2616bb29ffd6f8c8aeeb"],["/archives/page/11/index.html","c58d125cb8305e7c932874d5e786996c"],["/archives/page/12/index.html","eab56c520f3de25cd600553222ef8620"],["/archives/page/13/index.html","44cd1627514d8cb0db940dd7e95f7b71"],["/archives/page/14/index.html","7cafc7a9138ba34de196a6ccebd3f27d"],["/archives/page/15/index.html","0f996217e54b4d74f6463833025a5feb"],["/archives/page/16/index.html","b90598e7a21873b01049e882a9fdf104"],["/archives/page/17/index.html","69b9d34e14f78cd808e7c420991271ff"],["/archives/page/2/index.html","7f4a1fafcb5609d52fbbd81b8232e9a2"],["/archives/page/3/index.html","94abd1da53c63aac6b4a47babd18d3e9"],["/archives/page/4/index.html","dde7504cc186b36ef44344b1c2b27945"],["/archives/page/5/index.html","bf254feb31d8381cff9385ec57aa4f50"],["/archives/page/6/index.html","f6911007474914c26fb86a75a0ae55f7"],["/archives/page/7/index.html","6eeb343f0def1e7864c703c9f6b7e9a3"],["/archives/page/8/index.html","06230ea6fcffd984da85537bf13c17b1"],["/archives/page/9/index.html","0124363d8310bae97af6b02e06b5d936"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/jybhj.jpg","855051bdb32dac6b6b2214b662e3f784"],["/assets/banner/lhj.jpg","343b0999baaaa6e0fdd600c03f2102e4"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/sny3.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/sny4.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/sny5.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/sny6.jpg","12f4fac008c279f4a1f41506995d038e"],["/assets/banner/sny7.jpg","bf0d0ce9dfe8b32ea465559b903bac87"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","edf0265031993ab81a1764a97da0c867"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/jybhj.jpg","f074da0cdf315a64a5d3e8aa3896fea1"],["/assets/cover/lhj.jpg","1afecd1268dc0d9779d5231b84bfbb19"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short2.jpg","84a851e0be682a3a37a2a3fc5165efc2"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/sny1.jpg","92158f93aff91b4ea1b1ff8059f2e953"],["/assets/cover/sny2.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/sny3.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/sny4.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/sny6.jpg","0e1b91307940debd8b8cf90e3517268d"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","bacb33b53ff2c3d1f312761306863b9a"],["/categories/index.html","62e8060ffd89d508be8dd3b1488b3ae6"],["/categories/与敌同行/index.html","2a8f9bf60e81bd37a66c5269633bb1e4"],["/categories/与敌同行/page/2/index.html","b72073ea40273315b1b508029032ba94"],["/categories/与敌同行/page/3/index.html","131fcf054a7305b7c2a12741a5d81dc5"],["/categories/与敌同行/page/4/index.html","5c48bbb0e694f7cba4dfbe11331274a2"],["/categories/与敌同行/第一卷-双镜/index.html","8c6639a6de107607d61e68f7da22bb37"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","ee66591db51a487cda451b58cb64b11a"],["/categories/与敌同行/第二卷-信天游/index.html","21eaa39be80a96310f47933981b8c1ec"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","ad2921a85cf3fca6b9ec44996ce6c45c"],["/categories/乐园/index.html","b8d2aef766fe108a1b14b1e95f1234c7"],["/categories/乐园/page/2/index.html","b9a59552ec4b3375d7dd2f375bab5cdf"],["/categories/乐园/page/3/index.html","aed477d25c81f1579c05888091dd27a6"],["/categories/乐园/page/4/index.html","fc6b9a2c8699a7dbb1d10fe5307a4145"],["/categories/嘲鸟之歌/index.html","956f91988d8fb5193a41a5abae288e23"],["/categories/失落的应许之地/index.html","612bcc0cc06318928de5dd85cd6d0985"],["/categories/失落的应许之地/page/2/index.html","ff084d5e9059e10e7c0aba08e24ec48e"],["/categories/失落的应许之地/page/3/index.html","c494f2a01699b3929bbf473fd87ec334"],["/categories/月照天山雪/index.html","f60d4bd755fb176cbd36fbdf206f57fd"],["/categories/月照天山雪/page/2/index.html","4746315d47b546f48b8d6fd65fc9bfce"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","7360b04ba62112515096cfb3860f994b"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","11cd9eff7f8cacad53cbdc0f2767b4ba"],["/categories/狂飙，乱飙，发飙/index.html","557bebb7dc020c903b68396fa410c2f7"],["/categories/短篇/index.html","a738286417b36718e9b19c689fafb7f1"],["/categories/繁城之下/index.html","5c416a0774e453603f1c9e80af9a66f6"],["/categories/繁城之下/page/2/index.html","e1d1465f46bd5f6f844119aa47215d5f"],["/categories/繁城之下/page/3/index.html","e39f5417754b3919cd0aa35ad5457a58"],["/categories/繁城之下/世情篇/index.html","a37d4f8e8b2aa635c65ea5eda0c5e842"],["/categories/繁城之下/世情篇/page/2/index.html","7cbdda7bfa033c6e33ae1b92439cdd05"],["/categories/繁城之下/异闻篇/index.html","05ec530c7b988eb3d60184dcfc313fae"],["/categories/长夜漫漫路迢迢/index.html","2c5cc6e1016c16f386cca9f1209c7e27"],["/css/custom.css","812839ab62fd9515366f309dd9d54597"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","7e45a6aa818144c6ca7b2430cdff5df2"],["/css/modify.css","96ac7b58241f5b7a5625ca6defe152a1"],["/css/var.css","c75f1039f6de74259d71a1e2287bda84"],["/css/wiki.css","c110ec539cda30c58d69c53c90675eda"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/footer.jpg","ec252cde7c6d58359def0368b1a9a882"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","1106757e3a76626768e97e3630766316"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/theme.jpg","6fa6f8ecfe50d0b57187af9bf83254e8"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","ac3cde6da466d3bfda1056e9bbf31a70"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/js/wiki.js","193ff94ce980e356f33402874cddee33"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","d1452b18f35800a2d5c0000af8b468b3"],["/page/11/index.html","cbd45add69be52fe145b081a456ecd3e"],["/page/12/index.html","c3172ff7ffecb063eb3d019bfce84b59"],["/page/13/index.html","ff9d7472d3ee2296c1faf89465a7a4b7"],["/page/14/index.html","c284827cb71c0d88431d81bf07a4b735"],["/page/15/index.html","ba8f69ba13972aee7e33446af93d827f"],["/page/2/index.html","eea013d09c3614bb6e68c88400688fa2"],["/page/3/index.html","9a2a7fdf5245834199f09ebecfe0260b"],["/page/4/index.html","6bec8877d8135262eb088adaf7bc84d7"],["/page/5/index.html","e2771e76786e378acbc69d3feb20e6bd"],["/page/6/index.html","a6970783a0fdeba3778114a3667d4cc4"],["/page/7/index.html","212cf6517e69cc20ae4bddbc5507dd3b"],["/page/8/index.html","bb236f3d069315afe047ffa89b4c0c6b"],["/page/9/index.html","771920394afe08a1903b970ae46889b2"],["/posts/103655302/index.html","d9cb4f659d3e5f45685e0b1b97ba4f31"],["/posts/1083795192/index.html","a1e25e9b402f8d0d8a399e0204d84f56"],["/posts/1099216759/index.html","fb98b9bca6a8f67c0dd24f681ad1d244"],["/posts/1104021264/index.html","e3616f505e76f821bba6fc40d7de8ba1"],["/posts/1195093070/index.html","b06d7bad953657f6e02c5f1c6bcbc227"],["/posts/12506394/index.html","0b313d9b2d5ec0fa3c77418d91b0a1da"],["/posts/1272692100/index.html","1fe453573cd4732cd96082630ba6bc3f"],["/posts/1304356361/index.html","6ebd3e58c839d84ac072737411fd0c0c"],["/posts/1315809802/index.html","149e7b9087825a4393a22b118c5319fc"],["/posts/1329165323/index.html","15a05024ba8804a51f8722ddfa0d3182"],["/posts/1378666774/index.html","d1dff4e0498dea6ca3077c3e286175c8"],["/posts/1400613118/index.html","7937c6f8a60334bc03000b9e6d08370d"],["/posts/1407316490/index.html","59aea8c89f78faebe2dea36d2c215cfd"],["/posts/1434824932/index.html","e6c0500adeee8e033089d24e29694623"],["/posts/1445707477/index.html","f92fe8017135f8e81523db0a352bea64"],["/posts/1465373355/index.html","701b1995fc82d04c00d2b2b19d6ac5ef"],["/posts/1500385898/index.html","8c1927b738dea490a658798d411190ca"],["/posts/1681850936/index.html","ec95afb6993b36f272530a7dde049984"],["/posts/1688557772/index.html","fb087952e185904b909b04ccbdd596eb"],["/posts/1710373156/index.html","2a3d24b03c26a819973a45b5ad8ebdbd"],["/posts/1720998546/index.html","98340009c1a4d3b34f9eb8c16981a806"],["/posts/173005120/index.html","1ae8cf851d980c884c1f1038bf64e8f3"],["/posts/1758837205/index.html","0d4847c8b32fa1afafae16c3069b34bf"],["/posts/1766000773/index.html","10b5d2fc05b91df6e56b306a9310f055"],["/posts/1771063266/index.html","0c03a17d21a625926b7bcba468e091ee"],["/posts/1843191030/index.html","93e773a1872495cbe06967c4f9242b6a"],["/posts/1845581652/index.html","e1cf80d619cf24dbe5f402f0c9dc64d1"],["/posts/1859941397/index.html","a7e734de7e9179c04f8f65b673f973fd"],["/posts/1988799958/index.html","741e3aa4cc57ee63e695538d31e1a757"],["/posts/2080722358/index.html","d5dbf7711367fcb5aaafef0c646c065e"],["/posts/2142008032/index.html","2140dfd51b9d6cbbbdfafc02fad57801"],["/posts/2192148155/index.html","93b1eeb81e99f1c220de57377680a38c"],["/posts/2229302539/index.html","2f1dbdbb5019b3f8a622fdf35e7d9f0a"],["/posts/2278904638/index.html","0613fe6889417952fcc408e566214826"],["/posts/2303668433/index.html","f44939898b6e8586f1e340cbfb47f63f"],["/posts/2492968201/index.html","c2fb994c74daac237e6adec664dbf5b4"],["/posts/2531300956/index.html","75d1ca64493df0a4c84fa04e2928906a"],["/posts/2616893247/index.html","ceb94245d4cb102d4a1b21c0a261525b"],["/posts/263262350/index.html","cdced5104ee701d510b20c476f945bd7"],["/posts/2700096901/index.html","a25bb564f2e77a506305c491dadf3d3d"],["/posts/2869217975/index.html","23794d0aedd3feae2674c17f5fe92692"],["/posts/2888068877/index.html","0956a0ff48d5a388fbb98ce299d2e67e"],["/posts/2949714254/index.html","ec99e096aaea022ec022e9977eed8244"],["/posts/3002318373/index.html","d5e4a82a3e9855616f1a6bd03924c75b"],["/posts/3076558902/index.html","efffd5c9d4b86beffdc4edbb9e8ed218"],["/posts/3147359483/index.html","b22e7f8263cd00f796b6ffecb763d5fb"],["/posts/3191465731/index.html","022b7374445632d9a2464fe8e34b689a"],["/posts/3197223139/index.html","ae1df4c5c71e9658397654853c1f0760"],["/posts/320179123/index.html","89eeb92aaa8383140e5446012c17a2a3"],["/posts/3300469459/index.html","fecb1236b22cfd1b282cef1f87c2942e"],["/posts/330870226/index.html","5fdf19d67434fb31f8cfa4bf30ca3cd4"],["/posts/345507944/index.html","80cd9d41fcb189347ef6bcfbb464e1b6"],["/posts/3459697331/index.html","088bb65026d11b251c252d0192c0e3f7"],["/posts/3489395119/index.html","eb723a9308dffc9c02f07e9fa2576dfd"],["/posts/3509330055/index.html","99fc0d969fa443f7a63738e789855bd8"],["/posts/3525870963/index.html","c26ce0541effc6034dea6a37e7d958c2"],["/posts/3591144765/index.html","36799bbc03eb432aa567622ab2b20fa1"],["/posts/3602722865/index.html","4ae19fc6de80a7766b41650160ad1622"],["/posts/3640780602/index.html","f6de57c6059ac39618e177059a957f72"],["/posts/3679626959/index.html","553b97e8b3e70dc80930c70c773b588c"],["/posts/3699598685/index.html","ec84d8d9b3f7685f70324525cd09aab5"],["/posts/3712900673/index.html","d9035f2ba2edcc5807badd2c1da6459c"],["/posts/3770599674/index.html","a9b5663926e35c718c112240af4d0093"],["/posts/3788666127/index.html","dcad427e7f86415967225cf70a97a080"],["/posts/3935350387/index.html","632398b4a38aaf752839f61968edff5e"],["/posts/3948778863/index.html","7aceb5b97b6569eed14cbee4bccc4ea7"],["/posts/403803703/index.html","212e463d08a0def383b57d73e364056e"],["/posts/4041933047/index.html","487faef2e06cb25f425e8809bc80a2eb"],["/posts/4083669729/index.html","21245193241f74368d1f3d6cbd6c2f94"],["/posts/4110582124/index.html","3aeb2aa9e8ec3d6ce6d45e2016745c25"],["/posts/411074811/index.html","2a7868bf225dece53c22701096355a45"],["/posts/4113963045/index.html","965c5dd2a34116d67ce26a2dbe100fd2"],["/posts/4158435381/index.html","f93fd2d0c618e34bd65d9f02ed4b0b0e"],["/posts/4163174813/index.html","f5cca89771bd61d7594bbb623b336071"],["/posts/4185022581/index.html","22ab28542d5e6050b2ac4c78bf63d321"],["/posts/4192746113/index.html","22f000ebd04ab83f747778feb2731f2c"],["/posts/486850400/index.html","520d341a7fd99e2489edea02d05494b6"],["/posts/591853658/index.html","687ce94962aabc0425faaa166992e536"],["/posts/597050941/index.html","db40758902244183be68cc354d74086d"],["/posts/719776913/index.html","905a8635dae5c69501661fdb6bc4add2"],["/posts/741067372/index.html","c6ee7732f8a90bb57f3ba00501e54496"],["/posts/754695723/index.html","963d19884e57b94581e16033df88a460"],["/posts/776340048/index.html","e345fc3c1038e404dc8bbee4130a97b4"],["/posts/838031284/index.html","bcffb9dad91bfbdaf8632862625210e5"],["/posts/888354975/index.html","8bfb2f8536c668afd19be64a24857fe4"],["/style.css","3bab103100fe4e830e770e4fb4907f7a"],["/sw-register.js","da99a92342438bf08f6878bf97981f18"],["/tags/index.html","6b3147ea09ca06eb773bc48738f2a0b3"],["/tags/中国往事/index.html","d75eb2cccb173c9af1c58d9e7c320248"],["/tags/中国往事/page/2/index.html","ba5193df50776f98950875c16d0a5c4a"],["/tags/中国往事/page/3/index.html","5fdfd57df73d229bde1624becd69830a"],["/tags/中国往事/page/4/index.html","7209a52fdc827839f3efc35364ad0f62"],["/tags/冰与火之歌/index.html","35c2c8c25fa4327ff0aad61e200be63e"],["/tags/冰与火之歌/page/2/index.html","e6d3a242720b1ab59ac113a0ae5be646"],["/tags/拍案惊奇/index.html","6c53ae562b85e82bb693c023dc419158"],["/tags/拍案惊奇/page/2/index.html","186a2af83c34a86cbfa8b0eb27fb19e4"],["/tags/指珊/index.html","e79b909e826e37ffa836b8542f434cf5"],["/tags/指珊/page/2/index.html","3dba7e30b2d41862e47a2f85502be4f4"],["/tags/摸鱼之作/index.html","64913f04c10128bb3013ec0213b8f645"],["/tags/日常/index.html","3ca0736a0ddb93e0f8f05ddc0d3a9aa7"],["/tags/日月凌空/index.html","44fc32d971759df34b13b7d21a3ed27e"],["/tags/柠梨/index.html","9897f220c5d9f9ae5dd9870729655259"],["/tags/柠梨/page/10/index.html","9397e1425038c147f5444729085bc5fb"],["/tags/柠梨/page/11/index.html","7576b45c27c3953ce90dd64e2bd3c4b3"],["/tags/柠梨/page/12/index.html","05b33cd2b559f27e302afcb88ebd7210"],["/tags/柠梨/page/13/index.html","c08024ce0c2bcc12b75ef151b94cd19c"],["/tags/柠梨/page/2/index.html","ff40585ef7312d60b2403f383c4052a6"],["/tags/柠梨/page/3/index.html","17e660e1b106a0ad88830c5e497fded2"],["/tags/柠梨/page/4/index.html","d8614266000a2e0dc0c32e6834736bd5"],["/tags/柠梨/page/5/index.html","eaa17f9a3526aa11c1b6b959b6c17b59"],["/tags/柠梨/page/6/index.html","0a4b279fc667d1735587c38b390c07af"],["/tags/柠梨/page/7/index.html","784d5f15b04661962a242aba78e4d9d8"],["/tags/柠梨/page/8/index.html","9ac280abb1666162afe4c23119438e14"],["/tags/柠梨/page/9/index.html","cd30b94b087375490815f3a50b48ea86"],["/tags/残酷法则/index.html","17709efadecaa1afe923c2b05b752426"],["/tags/残酷法则/page/2/index.html","785f8883bb94edd2f97f8777cd238e29"],["/tags/残酷法则/page/3/index.html","9626563cec2435cd90cd7e07a5f3bb55"],["/tags/爱，青春与死亡/index.html","acc889d3bd2b3f27dbe645b168b0094f"],["/tags/狂飙/index.html","261e9a2287ea8fce5b037395e52db5ac"],["/tags/神神鬼鬼/index.html","ed1382bc24ff3431455066400baa077e"],["/tags/都市传说/index.html","c80eb9c4ed47dc0edc1518e17e46c2d8"],["/tags/都市传说/page/2/index.html","87b7f3660748a998525e66e2c8901c07"],["/tags/都市传说/page/3/index.html","1d1c745598d62ffb1afd7a7bdaafa121"],["/tags/都市传说/page/4/index.html","08eab8122d35f3c87892c043cf035f4f"],["/tags/都市传说/page/5/index.html","c8a28b57babf94a5836b78d2680e816b"],["/tags/镛武侠/index.html","1155e555741e5ff36fdb60d04360fe83"],["/wiki/index.html","dbc069507803580d53f4538bd52e4195"]];
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
