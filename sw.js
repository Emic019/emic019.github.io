/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4c354501b1b0e89e1e9a9244e47548b7"],["/about/index.html","7a403b5ad512a3ab2e26e90de241fbfb"],["/archives/2024/07/index.html","209210e0ff5f7ca960f91829ca4f34b2"],["/archives/2024/07/page/2/index.html","6563f5255918684766af81cf2ecf75e6"],["/archives/2024/07/page/3/index.html","85da0dd10e3864f10f5691a080df90b8"],["/archives/2024/07/page/4/index.html","ae8919afe1802ec098c8a473f246aef8"],["/archives/2024/07/page/5/index.html","bc1de223986ee009272f3805d7bc5f0d"],["/archives/2024/07/page/6/index.html","770b978fbed038b04919a693f3cc26d2"],["/archives/2024/08/index.html","6e61626647f17dcdc73296b1c7356a9d"],["/archives/2024/09/index.html","2caf8c7b65fa55433949dc471b854fb5"],["/archives/2024/10/index.html","691bcb889bcf55f59e122d8fcf2cc629"],["/archives/2024/11/index.html","6d392ce77f92bf551ba34e2ddf0cbe54"],["/archives/2024/12/index.html","3a75fd050c985ac1e97ccb562ad14091"],["/archives/2024/index.html","2facdfb0a3733750dfa04b3d0db6425a"],["/archives/2024/page/2/index.html","aab0e9dc24811c098f895e21b10dc3cb"],["/archives/2024/page/3/index.html","52b1e2f706b28a82e8eb0ce61b3bcf5b"],["/archives/2024/page/4/index.html","11f0fa7a020b22116f2045ab37b23790"],["/archives/2024/page/5/index.html","57bfce6551581696bb52b858c4c6c228"],["/archives/2024/page/6/index.html","ee5dfa789b7e5d06411937c1947442fa"],["/archives/2024/page/7/index.html","541c4438f7c4b4fa76c4565a1b926836"],["/archives/2024/page/8/index.html","021e5012a01ea45dd70c4327afea7480"],["/archives/2024/page/9/index.html","6c34c2d45c5ec2163860b94f31808911"],["/archives/2025/02/index.html","a4c8e1d5500e3cc2034e116b66bcac1c"],["/archives/2025/03/index.html","04de193ac761795b687c468076936259"],["/archives/2025/04/index.html","5d5de3497f99e78d6e820a8634320f99"],["/archives/2025/05/index.html","7367dc827cc50f733a3a1ba9702a78f1"],["/archives/2025/05/page/2/index.html","b8b6c7c20c91e04aa3e2d574bda46acf"],["/archives/2025/06/index.html","f24148f5c23621658900a677618cd7f9"],["/archives/2025/08/index.html","47dd2844f636f693c49eda8f5e0b6b37"],["/archives/2025/08/page/2/index.html","a717f328cd533552a1f9eb8146fef3c4"],["/archives/2025/09/index.html","a852801751bfd8a2f4803a01c70cb2ef"],["/archives/2025/index.html","a715824984589b5b39b57520afa146f3"],["/archives/2025/page/2/index.html","1fe601fbcdcf34e02bfdcb4fc1d7cb7c"],["/archives/2025/page/3/index.html","9777fd0801daa04504ab705c75f09a41"],["/archives/2025/page/4/index.html","d6074fc93735f9654d3428a148681c5b"],["/archives/2025/page/5/index.html","f5593d9f64d6180349bbb2f29e1a5985"],["/archives/2025/page/6/index.html","830a212e10e88053d6ce654e5f85b7ae"],["/archives/index.html","51d864db6c3c8b6fe8c688944baf92ec"],["/archives/page/10/index.html","9983a55f94e36b18618cab9d7356d1aa"],["/archives/page/11/index.html","00f25e4f3ca63b950df3efccbce73098"],["/archives/page/12/index.html","15cce8c931f10e55ff8c74370675d783"],["/archives/page/13/index.html","fc302be3bcfb93ec7ff94d93650e9979"],["/archives/page/14/index.html","05a79c9d1466911c5a07cb2bd772d59e"],["/archives/page/2/index.html","29be107aae305b3e14694dc9d4d193e0"],["/archives/page/3/index.html","03f3ecac219f46f2fc75155e5093e7f0"],["/archives/page/4/index.html","6a2a15033614b9e7261bb712109ca82e"],["/archives/page/5/index.html","ab1fb49de124ef20760c8f761e34889d"],["/archives/page/6/index.html","837dcc9d3e78449d3f11cfc00ad13206"],["/archives/page/7/index.html","b52d337450adae3926a96c7771bc4338"],["/archives/page/8/index.html","06ac4a498d983a902f3cdd383d86ab0e"],["/archives/page/9/index.html","e6f82d1082e192318b53a2696ac9bd86"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short11.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","ea7f80114409613843cf47c2e3bb1bc3"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short16.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","91bb2aa4523f6e336add358cec66ddc4"],["/categories/index.html","271859891effbc9c5c61f787ecf49a2e"],["/categories/与敌同行/index.html","3fe9118838ebbe33f8801caaa255baf1"],["/categories/与敌同行/page/2/index.html","6b27e9fccde26401de91a7e9158a6bcf"],["/categories/与敌同行/page/3/index.html","278534ff1c3c546539ece81cab3683ee"],["/categories/与敌同行/page/4/index.html","4e6ad3732fe8bc9dec55dca008a2b288"],["/categories/与敌同行/第一卷-双镜/index.html","e478cd67091c38cc63134474d39a73ef"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","69c66a58f13b2dc81c985f34a442be5b"],["/categories/与敌同行/第二卷-信天游/index.html","d36f462b65d908bdd694399ce62c7c8b"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","1b661de7959b6f77bc48b658d58bc509"],["/categories/乐园/index.html","ec8b6d398345feb6ac745f3ae6745aec"],["/categories/乐园/page/2/index.html","744e61ba32d5aba87f42fd3f4c3cf708"],["/categories/乐园/page/3/index.html","ea0da8754cea772c9e2aa3020fcc032e"],["/categories/嘲鸟之歌/index.html","cbe8b880a5d72ec309371b6ba687450a"],["/categories/失落的应许之地/index.html","c3d02b5b66802758a189492259cb6d3b"],["/categories/失落的应许之地/page/2/index.html","8aebacbaf136f04701c46417a75b5f3a"],["/categories/失落的应许之地/page/3/index.html","d10ffba139429429567febadb8182dc8"],["/categories/月照天山雪/index.html","db5fe1600da57d2c078297dceab94970"],["/categories/月照天山雪/page/2/index.html","8c27d932f024c89c6188c69482379c8b"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","fe86f230db3903ae48c0bbe92dc5f35f"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","40f1dbafc2e3a369c32c9bf2491e2693"],["/categories/狂飙，乱飙，发飙/index.html","d511550606bf73f75028fb816f73e3b5"],["/categories/短篇/index.html","9852cc7d89ab831783beb3459c916ff4"],["/categories/繁城之下/index.html","c786d739bea4e31e18ffef7425dc44da"],["/categories/长夜漫漫路迢迢/index.html","9edbb2c83cb3c92807198e7076ca926a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","87b3d6b8e06db4c2e5e51b010b43dc93"],["/css/modify.css","e1fafe89bd129541f95f689804f84d99"],["/css/var.css","d03c06954ad934b16e405b6c64f4238e"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","a052ae84f2f10fd73364d5978156c7ef"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","cc4630667ab1ffbcae5057df77c0f4db"],["/page/11/index.html","11ddaa54fcd351f00247f8e19effc98b"],["/page/12/index.html","679057565e4ea9e0d6fe4b8887b93e8b"],["/page/2/index.html","cac934eeb18df55b00558f675d1c3542"],["/page/3/index.html","0a70f2ff5f911933061a8c44becee712"],["/page/4/index.html","f399cc90ebf412f5f94d894c8f32548c"],["/page/5/index.html","57020dd2e641aba8c16dbdc5a9f303f3"],["/page/6/index.html","67f4ef096d37fc5be18f00af78e2cdf5"],["/page/7/index.html","0d47dc3069c3560c889f2370824de314"],["/page/8/index.html","17f02529f55523bbb0b530c2a114da88"],["/page/9/index.html","6635b41d3b6ddd6bcab313806afebd58"],["/posts/103655302/index.html","8f74d40e850111719d496d71da081230"],["/posts/1083795192/index.html","0a7eec1bc50f4fe242b8ceccd45abf8b"],["/posts/1099216759/index.html","6731a83177bd4f7e5dc8e7b53af6ce14"],["/posts/1104021264/index.html","e1323ddddd4a65671fed99bdd717c500"],["/posts/1195093070/index.html","7386820bc1f1c2b86a0042223423002c"],["/posts/12506394/index.html","590916c86dfc535311b769e069cd041b"],["/posts/1272692100/index.html","45c6753942a78515ef8981dd816d81a1"],["/posts/1304356361/index.html","55f51b51e11fa3002ddd197e19d8e35d"],["/posts/1315809802/index.html","4e317a0d1b474bfcc4a623f303dd7ee0"],["/posts/1329165323/index.html","a9f3b09e2d028c8f063881c1dece8332"],["/posts/1378666774/index.html","450845d4c4f26724e424c4c4758379e5"],["/posts/1400613118/index.html","0780a170eb6b062b8d0292062e968f38"],["/posts/1407316490/index.html","0ac3b54711d27dec3a111635ccad20eb"],["/posts/1434824932/index.html","5a337c5d7bf3e02590d5f2f33c5fbd7c"],["/posts/1445707477/index.html","5e442cb89f95ad8fef152e83c6b8fe71"],["/posts/1465373355/index.html","cf4f1c3c3a7b89ba217cedd337f5048c"],["/posts/1500385898/index.html","f36a2160147dc2f2f597099e049d3aac"],["/posts/1681850936/index.html","33aa691b42c3ba07798fba75eedb9f2f"],["/posts/1688557772/index.html","6274222b6a302d9c46223f6d85cc2ece"],["/posts/1710373156/index.html","1475257cb6c0888d6848e77deacbb67b"],["/posts/1720998546/index.html","f5307303c0461aad05f582f8acd1966d"],["/posts/173005120/index.html","a5d18316bf4d16b51624ac4c7ea15f6b"],["/posts/1766000773/index.html","a6d6a5f4a2b0cb247e8e62dd9123e231"],["/posts/1845581652/index.html","ea47742fe9d052d3d6bc180c813292d8"],["/posts/1988799958/index.html","6c38fda5d07c611ae8cbd44f94bbca16"],["/posts/2080722358/index.html","fb3af512da82f43bf04eacd96cce6faf"],["/posts/2192148155/index.html","cb2555cdf3918a12de1a49d0276b0f22"],["/posts/2229302539/index.html","9057c6728170c28bcc4dd16e4db96562"],["/posts/2492968201/index.html","cd06b7b5fdb5c92a9d6d1ae23f777ca9"],["/posts/2531300956/index.html","e260787c915779ae89d8cc04f356d998"],["/posts/2869217975/index.html","3ffbc1ce625dab6dffdfec95bcbec5e9"],["/posts/2888068877/index.html","73021cd43d033da8ea44e21865dc3f71"],["/posts/2949714254/index.html","029613f55aaabc20b396dca5b0607207"],["/posts/3002318373/index.html","59e794e2b65316430efea83348642928"],["/posts/3076558902/index.html","28dafc349bc7710376f93ee6214195b1"],["/posts/3147359483/index.html","9e56ddc63c98e9b4ef7665d685958077"],["/posts/3191465731/index.html","6874ccf21f8f5a681baf2692c28fa3c7"],["/posts/320179123/index.html","604493381b9879d58274d2166065e0b8"],["/posts/3300469459/index.html","429b3a65b2bec01d5cb476fdffeb31dc"],["/posts/330870226/index.html","4948ac5a84bd84251f3a69964820f1d3"],["/posts/345507944/index.html","e6e7e6f16652aa2863a5adfde4fe3a93"],["/posts/3459697331/index.html","1a2199371a1ac0626ae9dfd1c399ce66"],["/posts/3489395119/index.html","c899815165d808402f19ea8345ed6165"],["/posts/3525870963/index.html","522a7d8a75a052d98ee1691863520f46"],["/posts/3591144765/index.html","d2e743045d63f676f5195366fb19c223"],["/posts/3602722865/index.html","3ccffde4c61f66da16dcc47420bb0b38"],["/posts/3640780602/index.html","057ad6994e99a24f973c8d95e6152a91"],["/posts/3679626959/index.html","908b2b01c36049495142b5c5fab4d59c"],["/posts/3699598685/index.html","714a1407870e64661468fe657711c30a"],["/posts/3712900673/index.html","842def17281b5f0e342833612bd7e9fd"],["/posts/3770599674/index.html","4dc1ad9a8d86cc612000fd8530c12b5d"],["/posts/3788666127/index.html","8b751481b148b74a922600b27ca93ec1"],["/posts/3935350387/index.html","9a03f394542f29f64912c4fcbb150569"],["/posts/3948778863/index.html","fc8ca730888a1c0a36936e31f7cdd699"],["/posts/403803703/index.html","dada2a46c809e264438dd0a33b60836d"],["/posts/4041933047/index.html","65e687d0ff319761692202967b8629b4"],["/posts/4083669729/index.html","e836014772df3787e3778af2fb4cbc1c"],["/posts/4110582124/index.html","d77600631fe9c00a529ff72a69eeaf5a"],["/posts/411074811/index.html","d5d0827407892a202c40835d54859c00"],["/posts/4113963045/index.html","c1c00bc9095a6e64757f3e3ffbeffb8b"],["/posts/4163174813/index.html","7d141502b89c73ee56f48e8cfea04898"],["/posts/4185022581/index.html","33962eaa830e3466dd906f6befc3a067"],["/posts/4192746113/index.html","83dae26550d6e0cb9fee974cc827db65"],["/posts/597050941/index.html","841910fe293c008050b0cfbce56fa1aa"],["/posts/719776913/index.html","b052c89a90bd719d28075a07667fb7c2"],["/posts/741067372/index.html","883c4cffed1202a86ca67e29bccc0755"],["/posts/776340048/index.html","d528f9c8dc0133cf5a3546069e1a65cf"],["/posts/888354975/index.html","f8465ab8e7965f0c15e3c0c9d0326b5c"],["/style.css","c2b05d46bdd98c158ae841778f38e12b"],["/sw-register.js","0a83465ce70e4594da03c34a5e1f3553"],["/tags/index.html","1e4c27a88d90016f3c6c6bffee848d25"],["/tags/中国往事/index.html","819b74f482195d74aaacb889f58b31d1"],["/tags/中国往事/page/2/index.html","2e320919d72834d444833c3e63aaaece"],["/tags/中国往事/page/3/index.html","b94d3174e5998f9ecf3a9a3c3cd37bb4"],["/tags/中国往事/page/4/index.html","224fb827bd6c9f70f87ad01d2493ba1d"],["/tags/冰与火之歌/index.html","6d407fef8298ce458de340eafdbc51c3"],["/tags/冰与火之歌/page/2/index.html","d830bc9fabc16f0cba5e513ab4ee964e"],["/tags/拍案惊奇/index.html","5832d677fa57dc63dc6b512ebae649ef"],["/tags/指珊/index.html","a2f386f5b9d502593c54d6979511542b"],["/tags/指珊/page/2/index.html","d3c09738a747ee5280f2e536731aae0f"],["/tags/摸鱼之作/index.html","5b572dfb29788f856901fe369c3c2cd2"],["/tags/日常/index.html","6c5aba071881d2a299915fc62f8b6dc8"],["/tags/日月凌空/index.html","87641e64f04cdde8955eca260dfad3ca"],["/tags/柠梨/index.html","f4fb2a2df69b1d7f70a21d0e7101de0a"],["/tags/柠梨/page/10/index.html","3ce240e2f6db9571e89a57ee10817be6"],["/tags/柠梨/page/2/index.html","b325d3b30a96c3fde7d09588f3872e5a"],["/tags/柠梨/page/3/index.html","a65c5bc695aa79b511ad90ec4bf9d6d9"],["/tags/柠梨/page/4/index.html","87e2991dcee820f95b8c793a218d57e4"],["/tags/柠梨/page/5/index.html","91854f975a4817e6a12a8ef14637dda9"],["/tags/柠梨/page/6/index.html","c7dd6097a295c8a1ad66e4b540ab2564"],["/tags/柠梨/page/7/index.html","c3ff5c277f6f0ef5fe5e393a3be1caf7"],["/tags/柠梨/page/8/index.html","c494c88fa2168ef3bcf5e6f119d2b86d"],["/tags/柠梨/page/9/index.html","f0e2c3e0ed76d7afc2d61b618c6625bd"],["/tags/残酷法则/index.html","61715e828c797709bd7bd4134b1a9aa7"],["/tags/残酷法则/page/2/index.html","790eed05f43c404aaba5022bd8b11455"],["/tags/残酷法则/page/3/index.html","ec144b75154e993c5969e28f41126a6f"],["/tags/爱，青春与死亡/index.html","a51791f1f3a8a7994695adde62fbbb05"],["/tags/狂飙/index.html","18f156f4186679fd5a4e0c2c69a910dc"],["/tags/都市传说/index.html","3d8a85e2eb2bcd4c80f76bcb70f38c77"],["/tags/都市传说/page/2/index.html","6da04c795027fe76dc6871787ecd98bb"],["/tags/都市传说/page/3/index.html","36cef268900eca4d0493b4eaf5a81e94"],["/tags/镛武侠/index.html","5b8bdd594d97532d291c0913d83290ab"]];
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
