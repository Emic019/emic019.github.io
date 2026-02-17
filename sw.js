/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","994f48973d8f74fed9785b3d43ca5576"],["/about/index.html","ecf55694beb59b5941e842d81cef92fe"],["/archives/2024/07/index.html","e25a8a1b5948fcdf421b30a10e1173d6"],["/archives/2024/07/page/2/index.html","4aae0fd250f03dd2a2d9af443dec5b5b"],["/archives/2024/07/page/3/index.html","72f5c8eb6bfa6a09b4a4fdd8c5ee06b4"],["/archives/2024/07/page/4/index.html","a6b8acd233159a39a66932c607497b15"],["/archives/2024/07/page/5/index.html","82cf306a6074201de79e0d806ff23e32"],["/archives/2024/07/page/6/index.html","8c68aa6b59630253682ac21323188315"],["/archives/2024/08/index.html","8b6fe97d3aee48b0c9ad8e8a9ebedc0e"],["/archives/2024/09/index.html","fb9e6fb5b75be59ce91658fef5c198dd"],["/archives/2024/10/index.html","f0574eefc0da21864995ea276d694e8b"],["/archives/2024/11/index.html","9a571a2e54447838783d1805bbbafffc"],["/archives/2024/12/index.html","73bd6043a5e4c01fd41aeedff51cf1ae"],["/archives/2024/index.html","e6a93df17dbfe96d3e2f3718c3b9c565"],["/archives/2024/page/2/index.html","9fd49530a3efa19e7ebc0d1e1e7adc68"],["/archives/2024/page/3/index.html","aaeeb48b9ae4f7880af51e68f0dbb873"],["/archives/2024/page/4/index.html","7d9e1e0953aad2c5d7786f4b5b2a0f60"],["/archives/2024/page/5/index.html","1d57c6076e1e7bf862fc8c4f89e50c30"],["/archives/2024/page/6/index.html","d91bb7770ab6ec1db120528119ee3c34"],["/archives/2024/page/7/index.html","41ab1dce3d8ad67464dddf9a7a3ff852"],["/archives/2024/page/8/index.html","fec94b60b66ef7ee59eeafc162380c7f"],["/archives/2024/page/9/index.html","0020e34ed6028f36c38bd8a01f178aaa"],["/archives/2025/02/index.html","02942b81d2697c31cbc8a072fe7c0a70"],["/archives/2025/03/index.html","c680c4ca501e2c1b7fcc4e6e0591f493"],["/archives/2025/04/index.html","1437f67750929e0eae78b2e1a56bc1fb"],["/archives/2025/05/index.html","ec6c7254aa4e54d629532a07e0a6e7a6"],["/archives/2025/05/page/2/index.html","46e77928e15aaea4cae2f42c970a00ad"],["/archives/2025/06/index.html","a49ad66f8ebb38757abb5ac269ce4e1d"],["/archives/2025/08/index.html","6a1a759d0e179c6e772193c76e1caead"],["/archives/2025/08/page/2/index.html","7a193309cb0e7679d45386d103c39d81"],["/archives/2025/09/index.html","5d0d69abbbbb34268e0b4ab2caa3112e"],["/archives/2025/10/index.html","7ea31bf26e98e313ae23a7ea7becdf52"],["/archives/2025/11/index.html","4995e219dc70b572b1fd8edbfef0005b"],["/archives/2025/12/index.html","a7afedf71da1d206f718dfbc6beb3bfb"],["/archives/2025/index.html","1e4bb9379d24c3a17cffcf8604db31ae"],["/archives/2025/page/2/index.html","197bd785cf8865bdcf8ee07b91a6c6ee"],["/archives/2025/page/3/index.html","8378622400ff936b44bc8b7f32cccbab"],["/archives/2025/page/4/index.html","c920c687b1d0b4ab6a24d9d529a3dcb5"],["/archives/2025/page/5/index.html","9c7d6d51ed5f2bee66f60ad0325b5261"],["/archives/2025/page/6/index.html","09bae351e9305e1334eda8132a42901b"],["/archives/2025/page/7/index.html","9c196afa992e30b811fa1d0ff8b1aab1"],["/archives/2025/page/8/index.html","9e9ee97f524ed47d55e074b4da808ff7"],["/archives/2026/01/index.html","77fc2c4510da3298603b73d66e8bdafd"],["/archives/2026/02/index.html","96b9d37ec39d5429142ff2ebf5c02c54"],["/archives/2026/index.html","a772c66b61975d33a5d75baf06d1e497"],["/archives/2026/page/2/index.html","899acb593bba28dd508d3e9285601567"],["/archives/index.html","c549d2fe84f040cc19c12721242b48ce"],["/archives/page/10/index.html","629ca15073d4765b0290dbbedc3d45fd"],["/archives/page/11/index.html","77a2d20a821ec52ac0dce9fe77474d74"],["/archives/page/12/index.html","e0ff4a329c0da81861a3196d66b0e4ad"],["/archives/page/13/index.html","68a46874e0da3f9a93f14eb846dedbb7"],["/archives/page/14/index.html","c83a6ff8fe11cccbeb6380f8b2638644"],["/archives/page/15/index.html","2a1a0e08015f24b83bff910766d71175"],["/archives/page/16/index.html","2a79cfcf30d52af0bb6d847d94baa47b"],["/archives/page/17/index.html","cd6a00e9b178c59ae57faf0c8258f24a"],["/archives/page/2/index.html","fab585105471fdde0da413f95a09ec10"],["/archives/page/3/index.html","2119b87108f59f54152ff94c7a8a0591"],["/archives/page/4/index.html","a021a2f0323717c5a9c2bb8548a425dc"],["/archives/page/5/index.html","1ec9e1ca03cd5fb1696be8e90e8ce2ca"],["/archives/page/6/index.html","d7c64acfb88d45e33868e92a4ded8b82"],["/archives/page/7/index.html","114dd423ecf37455bf652fc654cc5cc0"],["/archives/page/8/index.html","88da356aed35fb3746e9e76b99ae1a55"],["/archives/page/9/index.html","ce062b3b974d2222b25b5e8738c28c6e"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/jybhj.jpg","855051bdb32dac6b6b2214b662e3f784"],["/assets/banner/lhj.jpg","343b0999baaaa6e0fdd600c03f2102e4"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/sny3.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/sny4.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/sny5.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/sny6.jpg","12f4fac008c279f4a1f41506995d038e"],["/assets/banner/sny7.jpg","bf0d0ce9dfe8b32ea465559b903bac87"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","72fdc325b222bf4a0026dc4728e3adde"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/jybhj.jpg","f074da0cdf315a64a5d3e8aa3896fea1"],["/assets/cover/lhj.jpg","1afecd1268dc0d9779d5231b84bfbb19"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short2.jpg","84a851e0be682a3a37a2a3fc5165efc2"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/sny1.jpg","92158f93aff91b4ea1b1ff8059f2e953"],["/assets/cover/sny2.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/sny3.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/sny4.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/sny6.jpg","0e1b91307940debd8b8cf90e3517268d"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","bacb33b53ff2c3d1f312761306863b9a"],["/categories/index.html","cde8c2949d3c17fdd630b242e5661844"],["/categories/与敌同行/index.html","e739e8e646ed4c8766ce3ed70445abc6"],["/categories/与敌同行/page/2/index.html","281e5e5adb61be8ed15a59608a5e6ba5"],["/categories/与敌同行/page/3/index.html","4834dd9363fa3b301f778e6549fbc93c"],["/categories/与敌同行/page/4/index.html","e44a381b3a34f3fded3c5715bd88efbb"],["/categories/与敌同行/第一卷-双镜/index.html","a2a92b5e00dd6b35ca970212bc0e4637"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","522a7164db80cdcf830ac255c436aefa"],["/categories/与敌同行/第二卷-信天游/index.html","cbc09f1582b1962017966823fc2c4f9a"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","ed6316733fe59d97499bf4d495365eae"],["/categories/乐园/index.html","910175aca88e1202aaef8059bbdea280"],["/categories/乐园/page/2/index.html","d111d96bb1be9965157ecec6af6bf51a"],["/categories/乐园/page/3/index.html","79c6c3e2a83a4dff896039d8e889b9a1"],["/categories/乐园/page/4/index.html","df5a2a36b021279f1dee2b2d3a874b11"],["/categories/嘲鸟之歌/index.html","dd65fd4db2c16a6d713a2d8344a185d1"],["/categories/失落的应许之地/index.html","83eba689cba9dcdc403c154b944b5510"],["/categories/失落的应许之地/page/2/index.html","d64505e8ca7c19904c31828b678f833a"],["/categories/失落的应许之地/page/3/index.html","f5e69918693fd01b93db377353a4c454"],["/categories/月照天山雪/index.html","5964f1db890cb638663667256ecedf76"],["/categories/月照天山雪/page/2/index.html","28e8fde1ac14f6d5ea101abdf81b44b4"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","fabc860550b456f5099de8860f9652cc"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","fe65cd166f75d1c653fc6a7f26392eb0"],["/categories/狂飙，乱飙，发飙/index.html","0a4ef420bc429040bae7a079aa387f0b"],["/categories/短篇/index.html","bd1cdaefc14d50a49036585321f5380e"],["/categories/繁城之下/index.html","5e8df6b65740aaa8a6b97b9cc7223a52"],["/categories/繁城之下/page/2/index.html","2bc0119d1a637cc3c5eef45b04653161"],["/categories/繁城之下/page/3/index.html","80ee40c069e7b0b8cc08d178e7a944dd"],["/categories/长夜漫漫路迢迢/index.html","753b01969c0da34a2c728f4d4174ceab"],["/css/custom.css","c06414e2411f10fe3158e972d9046c1a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","8178d1d9dcf65d21f45295973c4b5f5c"],["/css/modify.css","06724df919411fbd2fdab883f582a5c9"],["/css/var.css","f600c8a947416d6492e7b76975dfea59"],["/css/wiki.css","f49e103e4c5ceb91e113da2d13613f6e"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/footer.jpg","ec252cde7c6d58359def0368b1a9a882"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","1106757e3a76626768e97e3630766316"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/theme.jpg","6fa6f8ecfe50d0b57187af9bf83254e8"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","e7d7aeff35a1864fb482907b560df2dd"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/js/wiki.js","193ff94ce980e356f33402874cddee33"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","9e13257d3f59efe8b91e28a99086bc4c"],["/page/11/index.html","f367f9dc623cea9a6acf5d9925d4c9a8"],["/page/12/index.html","e5b0f40949e6a3b10f3725153724b808"],["/page/13/index.html","4d71d51246f92c231418dbe895a38d2c"],["/page/14/index.html","69fccdac85b3686a1ed02028880a0489"],["/page/15/index.html","691c6607e6f8dc9eea83b3926442eec0"],["/page/2/index.html","e5a18974f27578313dfcda98085ec0a1"],["/page/3/index.html","9158baef7459aa3fa482d33bb9cbbf0b"],["/page/4/index.html","513bb674e098821efa3fffe7bebebcdc"],["/page/5/index.html","f807e9a862ba7d910b6f51079e44a0c4"],["/page/6/index.html","40441301c679bf759fa84249902eac70"],["/page/7/index.html","2544d2d9395168c964cdefc5e38ef9d1"],["/page/8/index.html","7c69b47dc037f1352450690e7c480a14"],["/page/9/index.html","fe7f68fc40493b81962962226eb4bc49"],["/posts/103655302/index.html","17815ffb115976d65f48641adec8197f"],["/posts/1083795192/index.html","f0f83b71c413ec40367d5a862d814bd9"],["/posts/1099216759/index.html","4dcbc5a7b8d3c187a6e06a01e6daba9d"],["/posts/1104021264/index.html","83be1ae6cf4a74a0dbee513d6e6a2773"],["/posts/1195093070/index.html","d0effc4ffd814ad397738da9e4f99dff"],["/posts/12506394/index.html","dfeb98c50bac2b1d617f59881c48871b"],["/posts/1272692100/index.html","43a1a3ba9e73e68c43e8f2ce5e945dce"],["/posts/1304356361/index.html","366144348e6a96871b603e2ac28d14ee"],["/posts/1315809802/index.html","deca61f8f7c93f053f665408a7791430"],["/posts/1329165323/index.html","6089642d4af87bfbd4561fc73fbfc2e5"],["/posts/1378666774/index.html","131c24b63b2446ba20c3fe5850bad678"],["/posts/1400613118/index.html","e68923a386bc781da087792b6b9d926f"],["/posts/1407316490/index.html","fc69e38841f26916d6822bd9988caf7e"],["/posts/1434824932/index.html","d957785594236ca10a02f2d933d11fbe"],["/posts/1445707477/index.html","09f8fc4da654beaa59250b112e1ee829"],["/posts/1465373355/index.html","7309c7a1330a8a00cd2ec5ae4b376355"],["/posts/1500385898/index.html","4e8623e7bb94b902c6635e8377cfc2af"],["/posts/1681850936/index.html","f2b2121da71c21beabb9c0d4a6374514"],["/posts/1688557772/index.html","e729d0976bb6056ace2c4deab88f473f"],["/posts/1710373156/index.html","5b92d65f675635415c38442b9d5592cf"],["/posts/1720998546/index.html","adcc4854cb07ea027615bfff9834453b"],["/posts/173005120/index.html","43fd4b9dc1157166010d5f2bc115e6f4"],["/posts/1758837205/index.html","b19fea9c67ea14c5b9f4ac86097de48f"],["/posts/1766000773/index.html","2733f34ebffed7c29590ea97732e78b9"],["/posts/1771063266/index.html","63627989f8ec2e80cf4c3e01ad23e29a"],["/posts/1843191030/index.html","984513f9064eb519f6ca1b25d12b533e"],["/posts/1845581652/index.html","489de84e62954dc26552a4a267430598"],["/posts/1859941397/index.html","278c47fe11622c470721af0c88295f0a"],["/posts/1988799958/index.html","3a8080705f52c842750d903914d39de3"],["/posts/2080722358/index.html","95f15b557bf753b6111e4759fcac7f49"],["/posts/2142008032/index.html","d8103ca611e7704acb0915e89743f42d"],["/posts/2192148155/index.html","c6a0fd0d2a6a34451ddaeac2e11e24ec"],["/posts/2229302539/index.html","1ef810589ba8289531d1f21935c63d5d"],["/posts/2278904638/index.html","c3800af1b41d9383db63086fe8964a80"],["/posts/2303668433/index.html","42ad7217777206c0a0eb762a64e948ec"],["/posts/2492968201/index.html","ada2e0f822506428f1573edb3c35fa6d"],["/posts/2531300956/index.html","44e87644dd27a086bb40770e2b81b551"],["/posts/2616893247/index.html","049c40c5445461bab2cb3d9a1190af6b"],["/posts/263262350/index.html","a9b8828b7ae4063fe08252158ea9da87"],["/posts/2700096901/index.html","fd732612ba7039fadf477db5f8256346"],["/posts/2869217975/index.html","998274130ff43fe50bf7a27980362c86"],["/posts/2888068877/index.html","8dab219764d4efe76e614781889d0bcf"],["/posts/2949714254/index.html","43601b0617a2d07df006ba04b439d507"],["/posts/3002318373/index.html","37f2c7312fddfbd148c6e199f6f25c82"],["/posts/3076558902/index.html","9e2d27a00f9a77246f977300c3d6ae68"],["/posts/3147359483/index.html","4ff9716bda66a87c65b78910e48e8227"],["/posts/3191465731/index.html","9c548b5fd11ee0a13886ff2764349305"],["/posts/3197223139/index.html","8ec818190db057b634c323fcc9eeb108"],["/posts/320179123/index.html","158039a65475a48050feca7bd739f495"],["/posts/3300469459/index.html","c6b400920135cba3f5cc4061f8f411d6"],["/posts/330870226/index.html","7160654b0ff184d54a1edb8499e683b9"],["/posts/345507944/index.html","d0540c20b2e9d85b9148f0edc889f967"],["/posts/3459697331/index.html","88363623bf8dda5fc1f05bb513cc8ca3"],["/posts/3489395119/index.html","acfae93c990db062d434904df861cb0f"],["/posts/3509330055/index.html","8886cffefe1e3781beb56d24c14890ca"],["/posts/3525870963/index.html","6d66e3fe24ed13ae4f6749e9f5e24d63"],["/posts/3591144765/index.html","773d7361befaa55ac20c2976fe4677b7"],["/posts/3602722865/index.html","a0ead86ad273429414a8799c1e3e0023"],["/posts/3640780602/index.html","b5eda39d7d0ce5835fcf441edb387870"],["/posts/3679626959/index.html","4bc27b14967837a8c203762f11883679"],["/posts/3699598685/index.html","4bbfbef7560c0f95db95d36886efeca9"],["/posts/3712900673/index.html","d07831e5c166f9d9cd40443e62ba31e0"],["/posts/3770599674/index.html","caa75f21206b181da0f6e47d959796db"],["/posts/3788666127/index.html","ca4938fde32c1a529b9f745eec75eb2e"],["/posts/3935350387/index.html","923cb11a78ad45abce2878e677b5dc88"],["/posts/3948778863/index.html","f4221496e73f166f936076e74a45cd4a"],["/posts/403803703/index.html","152c10706c7e43513b5e4f403a5b1ed5"],["/posts/4041933047/index.html","079d3b829e1bab7d588141153e41b539"],["/posts/4083669729/index.html","f63e0f3ecf7b095b797eb574f9c2791d"],["/posts/4110582124/index.html","102271735c996bba98760f1122f23cef"],["/posts/411074811/index.html","12c32c182d05886f532720e769f660d7"],["/posts/4113963045/index.html","c6960ed5acd26562864ff94ea34c82ae"],["/posts/4158435381/index.html","e3b97d2b0383cf2f0b44a3b3bd34ca38"],["/posts/4163174813/index.html","05856a860845001874885912d3383868"],["/posts/4185022581/index.html","a29d572ac4806f2d5f5846e0add463ea"],["/posts/4192746113/index.html","27573bcd70f3747b1a08e74b11b04dd1"],["/posts/486850400/index.html","c2dd82c0c1ff2d980036b12932dac3aa"],["/posts/591853658/index.html","7ae21e14d5dfd7993b11b77001888262"],["/posts/597050941/index.html","fc29cd2fb06d9079f3745c9ba3dff9ae"],["/posts/719776913/index.html","6ee347c410d3138937d2610629744622"],["/posts/741067372/index.html","ab669674559b9d161f5e870e46443077"],["/posts/754695723/index.html","2927a1a6504713eccecd8644dc04e178"],["/posts/776340048/index.html","98710c3d39b6fa15b3cb059ce79ec244"],["/posts/838031284/index.html","5e56f050543cd0c78155a56a5c42e6dc"],["/posts/888354975/index.html","d341391614124eb3ddb480e9422b15c0"],["/style.css","7c79420c556332f4da5dfbf1c6984a78"],["/sw-register.js","20902f7ff8b94e88a106d7b3274ecf9c"],["/tags/index.html","cab31c041af49ee92d866bac186bbe8e"],["/tags/中国往事/index.html","7c65aa34ba9bddce90ae6cc81e973245"],["/tags/中国往事/page/2/index.html","2b119ad71edf4e3846d7827862905b2d"],["/tags/中国往事/page/3/index.html","86aec09394db584044947a21bb9dc239"],["/tags/中国往事/page/4/index.html","65d4d5acf605dc16811656b7cd6ad4cb"],["/tags/冰与火之歌/index.html","63fbbe6c4da5a424691ab6d3b8068577"],["/tags/冰与火之歌/page/2/index.html","2c2b6b89df2921a4cdc28c8c323357b6"],["/tags/拍案惊奇/index.html","564050bd5bd92a943ec0fb781ab97618"],["/tags/拍案惊奇/page/2/index.html","e777a3949177738e98881a4cd4d6da9a"],["/tags/拍案惊奇/page/3/index.html","90f39817e49234d673c5283d22d2e963"],["/tags/指珊/index.html","ea7e22d960c270c8f8902b629223f719"],["/tags/指珊/page/2/index.html","bb4d6b908c1c445c98ff5934885d00e1"],["/tags/摸鱼之作/index.html","87ee07de1ec44fcbf67bb83690ed446b"],["/tags/日常/index.html","393aebe4e82526fedf17eaa0e3315fd0"],["/tags/日月凌空/index.html","562fcda0fb1df9dbc870a58f80a09f84"],["/tags/柠梨/index.html","4fbbbd0fabd0c56bec92f4db9adca458"],["/tags/柠梨/page/10/index.html","0417c616adfa15d643d3a0ab0e1496e3"],["/tags/柠梨/page/11/index.html","8e396a3fafe8d5f85775f0d027e4cf18"],["/tags/柠梨/page/12/index.html","664f700f88b99d12f70a4772a7fb9f90"],["/tags/柠梨/page/13/index.html","c998e58b7164a169bb8e7ca9c9b2cf02"],["/tags/柠梨/page/2/index.html","ee51e66e7ec7d4d75e16cb450b17e512"],["/tags/柠梨/page/3/index.html","39f2b9e93afc450eacfc10cdb382001a"],["/tags/柠梨/page/4/index.html","fb75684d98b8f458904e892fe75b965c"],["/tags/柠梨/page/5/index.html","cdfe52605ecf25044e334fbc87b86685"],["/tags/柠梨/page/6/index.html","dfaf084ec643873e5f4c2b2ede8bd1a6"],["/tags/柠梨/page/7/index.html","4fab53df321171e50ad74a0e2ba7cdea"],["/tags/柠梨/page/8/index.html","6543ff21227989efa4254f856856d2d5"],["/tags/柠梨/page/9/index.html","0045ee9f54d711473c5628076b6cefc5"],["/tags/残酷法则/index.html","19c0699886bc3aa7d344410c5b9f0437"],["/tags/残酷法则/page/2/index.html","c2b2799e777c72051595f1a1b09f7d2f"],["/tags/残酷法则/page/3/index.html","509d3c0a7f7d3cafa18a9f498f7b77af"],["/tags/爱，青春与死亡/index.html","24bfc7a7df150a802b70d05e626ab5a8"],["/tags/狂飙/index.html","888c105ef73ea5f53a4d73aa5c4f54fb"],["/tags/都市传说/index.html","db7b469ba279642103c902c1a68d3ac2"],["/tags/都市传说/page/2/index.html","ee0484a161254bd490c6fad49736cc5b"],["/tags/都市传说/page/3/index.html","91426220da8382e82ecdf320931f695e"],["/tags/都市传说/page/4/index.html","0db3795b3f5265f8ad9344c27afa4cbb"],["/tags/都市传说/page/5/index.html","34a39b881dc746fc1071ca8837758343"],["/tags/镛武侠/index.html","02e188e42ceba3e1faaff1c593e66adb"],["/wiki/index.html","82d0b5763b39e529ec4e124b28ba31b0"]];
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
