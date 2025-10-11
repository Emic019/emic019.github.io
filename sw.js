/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","117297e656a2ae28a11b9af6373bf8f7"],["/about/index.html","3ba9fca7ecb4cf48c99acbcd62860a57"],["/archives/2024/07/index.html","e980bb9a90d45a9719cb777a6db96835"],["/archives/2024/07/page/2/index.html","4c3b500aab93f9331ffda1a3bdd79d07"],["/archives/2024/07/page/3/index.html","5d542dcbfe6d5a1329f2252059619827"],["/archives/2024/07/page/4/index.html","6b5b68c49543a47097c76e4b1981f495"],["/archives/2024/07/page/5/index.html","d490a26940ef4aed1d1e22d065c17587"],["/archives/2024/07/page/6/index.html","2fce34398f25e28f58c33bd9dc4152c1"],["/archives/2024/08/index.html","242f9104fb0042527779fa9d83bc7b43"],["/archives/2024/09/index.html","72302eaaeaed722b4b33bdd7f0da768f"],["/archives/2024/10/index.html","6b3961230dc64f4bacb6dabf3697e6e0"],["/archives/2024/11/index.html","1c054a3f8baf2372a56107219f7577b7"],["/archives/2024/12/index.html","ecb2b4b886cdb0debad1d7da7f625e79"],["/archives/2024/index.html","e99cf594943f6418022ee2b12c3041f9"],["/archives/2024/page/2/index.html","427a45dad2d2ff8e9165f78c61f53122"],["/archives/2024/page/3/index.html","d580da64ebdce46aa6e6914bf15957c3"],["/archives/2024/page/4/index.html","2012d016422c1dc06a1331854ba8f7d2"],["/archives/2024/page/5/index.html","f69145ef879f73380132c687222d6130"],["/archives/2024/page/6/index.html","e6cc02034b252c0de638619a37464de3"],["/archives/2024/page/7/index.html","8ac0495f83509fa442037db9385f0168"],["/archives/2024/page/8/index.html","334f8f2b842473444861a58d0997e568"],["/archives/2024/page/9/index.html","2e560fa6a017ccb184063ac324a35c05"],["/archives/2025/02/index.html","57f157a913637492879242e9c7abf3bb"],["/archives/2025/03/index.html","6c7b29036b6e252156b5786b8b3c7bab"],["/archives/2025/04/index.html","fe8ccf11a31c7819ca5b74e7ce08e091"],["/archives/2025/05/index.html","19b5093608fbbb84920a31e3f757922f"],["/archives/2025/05/page/2/index.html","608761f9da741d7c16acee4c5114b772"],["/archives/2025/06/index.html","0de872178015591e158c1008614cff08"],["/archives/2025/08/index.html","0d283f01dfac9ddf245f2a3c7aea912d"],["/archives/2025/08/page/2/index.html","f2c08b5a7f9a1b5747080dd820384bf3"],["/archives/2025/09/index.html","a992c41c428ab57ad5627e374fa07666"],["/archives/2025/10/index.html","8ccc5743421854e7727d3362da9adfac"],["/archives/2025/index.html","16d0a65a4c25e8ef2bdcc12341d8fb97"],["/archives/2025/page/2/index.html","0d49879280c251920e595d966d1ed1fe"],["/archives/2025/page/3/index.html","5b0f4a60097894432d5998fafa9d720e"],["/archives/2025/page/4/index.html","272bfd84c83bb1e1372726522585cf51"],["/archives/2025/page/5/index.html","05bf72592da517a3c0025f05448f8f71"],["/archives/2025/page/6/index.html","c309a9792e4c1622ba10e7cdac4eb051"],["/archives/index.html","d21f750f5d7f76516f75a17c759a70e4"],["/archives/page/10/index.html","c6524ae76a22979dccea27d477d7f202"],["/archives/page/11/index.html","f2050198f5f8176d155d26385963c119"],["/archives/page/12/index.html","5ee84cc73b7e8f4e8abf6695170ed69d"],["/archives/page/13/index.html","d73afc18dfedf5ab87aec2c6974ee234"],["/archives/page/14/index.html","33eef8ba1d8aa2d658250c707ac81c2c"],["/archives/page/2/index.html","47eb1d3bb57069b704e5e064ea6fb740"],["/archives/page/3/index.html","c8789943bc9a326911168ca162356886"],["/archives/page/4/index.html","03ddd29ce140e20749370e667d1e61ef"],["/archives/page/5/index.html","e5e1d4ef20738592446e242d97929d97"],["/archives/page/6/index.html","d12632fe22e3b1917fc2ffa0ded7301f"],["/archives/page/7/index.html","9c476a34ff4b16005f1a38286be96119"],["/archives/page/8/index.html","efd8dd90cd9b5be8bdc858f3ea8a3814"],["/archives/page/9/index.html","e2c3a79f82f313705e19a6eb94f80a42"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/sny3.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/sny4.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/sny5.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","2e02334e23b5c486590145cc403cce81"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/sny1.jpg","92158f93aff91b4ea1b1ff8059f2e953"],["/assets/cover/sny2.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/sny3.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/sny4.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","91bb2aa4523f6e336add358cec66ddc4"],["/categories/index.html","9249fa945ee8c63816600b1cbae321d8"],["/categories/与敌同行/index.html","91afe05cad645e73ac3bcdbd7d497477"],["/categories/与敌同行/page/2/index.html","74548977c4fc917ed7647985ee23202c"],["/categories/与敌同行/page/3/index.html","06cf2997a39f9a074bd496e492e4399c"],["/categories/与敌同行/page/4/index.html","62d715a57e612a7c92d14ecf70e81dc3"],["/categories/与敌同行/第一卷-双镜/index.html","b2b34b385adb7f59134c9a96ad969e6b"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","b304b4da70c2767f7105766c04aa2319"],["/categories/与敌同行/第二卷-信天游/index.html","27c8f6898c1538ced65f3bc2f83a3bce"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","00de562db076e26c086771bcbf500687"],["/categories/乐园/index.html","bfdac827d0401c635c1c19727ddcdac9"],["/categories/乐园/page/2/index.html","eb222e90a2943398ddb03a7b9af1fbf4"],["/categories/乐园/page/3/index.html","b07d12d691125f548b97e5305c560413"],["/categories/嘲鸟之歌/index.html","96ed512bb0e4cc2fa5968530aa04f445"],["/categories/失落的应许之地/index.html","9b2ae742d4565d578604077a1fda4d48"],["/categories/失落的应许之地/page/2/index.html","7dceb98b2c809da351e7387f3354e28b"],["/categories/失落的应许之地/page/3/index.html","07fa73bc82ec415f250d3f62229a7ad3"],["/categories/月照天山雪/index.html","09a1e023ea991bf34e1b6ae6193a5243"],["/categories/月照天山雪/page/2/index.html","5b8417a82b82a65baaa05f5c0bcc6037"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","4cd8baf4d67ad062dc17aac509934679"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","c77a4634581f4551b53705da8d273532"],["/categories/狂飙，乱飙，发飙/index.html","c08881d3ae013a26f41e7804e4889835"],["/categories/短篇/index.html","aee78ea52de78704bae0c96cfa3ae567"],["/categories/繁城之下/index.html","de966b533e2f4cb3636f4c70166a4c9b"],["/categories/长夜漫漫路迢迢/index.html","e5d15111923c2a4df2019cf8ab07ab36"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b45ff3aeb2cef79464b4124bf3e701b4"],["/css/modify.css","eeb36ec70801603f1631e29679f41316"],["/css/var.css","f45e4278b41c8d5681ed3876da3d23a5"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","685bb10960e5b1d9cdee797b274b861f"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","dde3b945fb86f80f853a4b176fdac03e"],["/page/11/index.html","7770fba191faf36206031496e7119ab3"],["/page/12/index.html","91606e4d4654ba5176b0bbf21bba9ad6"],["/page/2/index.html","a595790e22565814e079e0f8a82f2f13"],["/page/3/index.html","a0943b68cd2e0be285b2e10ee470ff07"],["/page/4/index.html","d64503de43d1f5f06dbac44405e9211c"],["/page/5/index.html","e58fc45074aecce362415899db19f579"],["/page/6/index.html","7e8050d7724be5160f7a67cc14ce6e44"],["/page/7/index.html","ceeeea26a12cd220fcadbe4e91e157ee"],["/page/8/index.html","2beb7f23fe2b9fd3662341c9522acbb2"],["/page/9/index.html","84cc715f75572892810020f736b95089"],["/posts/103655302/index.html","67c0ce52aa7e7e5ba151f2f4ccbc65c3"],["/posts/1083795192/index.html","e93781be796c9cfe54e5d5a8c8a902f5"],["/posts/1099216759/index.html","6960691a2fb70c2753d1b385194923b0"],["/posts/1104021264/index.html","32e52856f9facd8bb5cd1ebd9ca02a28"],["/posts/1195093070/index.html","1a8d2318aa352354c50bde24d725522f"],["/posts/12506394/index.html","9ff4eb1949f0a4aa8aba921571837e0b"],["/posts/1272692100/index.html","809660e9c6542675d118cc5d1d7c4188"],["/posts/1304356361/index.html","3fa9a3c8d89d6c02ccabea4e9356787c"],["/posts/1315809802/index.html","79f32c72bfe2a7deff9142f568817d4c"],["/posts/1329165323/index.html","2102e27cba3f12b2e2745b0b3381fcc7"],["/posts/1378666774/index.html","a902a9a1d65abd5012ac08d21d5e2c09"],["/posts/1400613118/index.html","b486262450fb8d7defadfbf2a2c7f7e3"],["/posts/1407316490/index.html","87831dff886e93a68874bfdd05279d35"],["/posts/1434824932/index.html","b7ac95c831e18744c99969aed4b6f7b9"],["/posts/1445707477/index.html","b31fda947919bd1c5c302e52b42f452a"],["/posts/1465373355/index.html","002bcd4c6ad96b090ce0823cda9b2879"],["/posts/1500385898/index.html","4430e22e50447e5c6132d1e1586af31f"],["/posts/1681850936/index.html","f2c60b3b0536ddf46316651cec54b934"],["/posts/1688557772/index.html","98c424999ed78400d22e1b49c907acaa"],["/posts/1710373156/index.html","5a93595ead117d6e9696ced42e068f2e"],["/posts/1720998546/index.html","64da28fe7972c90ab30d2982e9349ba1"],["/posts/173005120/index.html","5450ebb0ba66a0c12c2fce2a5e9a50fe"],["/posts/1758837205/index.html","92a29306d39253a5c90ae8d13caa167c"],["/posts/1766000773/index.html","dfa758a5c1e3fd2f77ba79ba43b60b88"],["/posts/1845581652/index.html","f7729c8baf63131338f9ccae00613318"],["/posts/1988799958/index.html","30f1742513b6487609eda79eae7029ae"],["/posts/2080722358/index.html","1ef17bd7a4a0bfa9b176101818d78f5f"],["/posts/2192148155/index.html","0023732a3090f34a915ff161095ff727"],["/posts/2229302539/index.html","3be414be1b650d3824afb34833f5cb3b"],["/posts/2492968201/index.html","7265426759f8e8073d007185da02c186"],["/posts/2531300956/index.html","a5f5a1ea38301b839b29727d3714942d"],["/posts/2869217975/index.html","78dbba9ae55b38ee4808ae839dcb1a17"],["/posts/2888068877/index.html","b626a653100e9fac5cd59b2a90784bf0"],["/posts/2949714254/index.html","66cca9fd5a6ee110dde58c754b56641e"],["/posts/3002318373/index.html","5ecb0ac88970aa1385f1c96035d38bc3"],["/posts/3076558902/index.html","81185553121f461f51e067e1a6bec847"],["/posts/3147359483/index.html","62a8cfd5482e41a350c1bacc0fd1caf5"],["/posts/3191465731/index.html","2d0a40d9b99655fe3d40ec38e220e6a2"],["/posts/3197223139/index.html","f6f5201a7bf53efe426f74698a56b6e5"],["/posts/320179123/index.html","15a366f125fe319c3879f075303584ac"],["/posts/3300469459/index.html","05d800cbcf37024421cb700baf55b2b1"],["/posts/330870226/index.html","66d40f473865f27525f3318bc252a794"],["/posts/345507944/index.html","4c82d74a8611aebeee2198297cc92311"],["/posts/3459697331/index.html","55a578df58900c076194db74b06edf41"],["/posts/3489395119/index.html","7e6ddbac8a0fc78dd619f92f24dc70b1"],["/posts/3525870963/index.html","267a2180cace667db22da6cea223bf30"],["/posts/3591144765/index.html","cf58a36cdb34a3ebf80ff1bd6dfbe15d"],["/posts/3602722865/index.html","8a883fde6ee75e8f6670663a1800b01e"],["/posts/3640780602/index.html","1b7d5e795066f056f7dba53ecb6a2bac"],["/posts/3679626959/index.html","1624de2561ba056df8b13f58c026f0f6"],["/posts/3699598685/index.html","06dd98910d6fa35a497fe0440806d6d1"],["/posts/3712900673/index.html","562cde22b6081fe0f31505ac66f8bd86"],["/posts/3770599674/index.html","76fa19652be4ee41495d1defa39c647f"],["/posts/3788666127/index.html","4f0db93e52b809c1454fb6f333e0f8c5"],["/posts/3935350387/index.html","c83e0e4bf7391e6ff1acbb84ce3352b9"],["/posts/3948778863/index.html","4a431f6f8c80fcb28dad97698f4e0dbb"],["/posts/403803703/index.html","6556bc3f382214031945904c9125ad16"],["/posts/4041933047/index.html","ecf44173b54649cca62d1ba44c96be67"],["/posts/4083669729/index.html","15e874c5c935e415ea76c442480e6615"],["/posts/4110582124/index.html","a906c38e8c1f8e0037094281c6b1ac38"],["/posts/411074811/index.html","b668099c7d77bb6ad3b9438ceb466714"],["/posts/4113963045/index.html","8b21c27c4c2c5ec1d02972db180b57d9"],["/posts/4163174813/index.html","4f05ddb8bb9d664be1218333162f71a8"],["/posts/4185022581/index.html","0a1b16941de6359490a3364ee93dc60f"],["/posts/4192746113/index.html","db3b109cdba1481d1e2eea45e3458373"],["/posts/597050941/index.html","68fef00cf084025295cc2356667f081c"],["/posts/719776913/index.html","22dcc00ac0d5a9dfe86f4064da203cb1"],["/posts/741067372/index.html","73256bfe435c9e5a001dde9beaff94bf"],["/posts/776340048/index.html","4fbe0fa9ed567956a6c76b53b5f38365"],["/posts/888354975/index.html","a622043d564b4a7a464f817be1f5b49c"],["/style.css","a9a88126ae348a63499a21c74d984b60"],["/sw-register.js","14f2e211b191f5f5915d464f97b20df7"],["/tags/index.html","44dec19c2dd7446f9d459b632451d8a9"],["/tags/中国往事/index.html","a04ff0440e78c67fe6ab9eda0a9cc174"],["/tags/中国往事/page/2/index.html","d114ba79d38b0a74ce0118d5b1c705ee"],["/tags/中国往事/page/3/index.html","521ad2a58a66258f109a7d69404e1800"],["/tags/中国往事/page/4/index.html","576a924830fa8f9a81c3e06898e30490"],["/tags/冰与火之歌/index.html","58503d4c4fca9a153b42f013eb980d3b"],["/tags/冰与火之歌/page/2/index.html","9f7e993a70a201a53bf22bcae7a005de"],["/tags/拍案惊奇/index.html","02bc68907f2f44165591c33dd5918c17"],["/tags/指珊/index.html","ebcac37940cd17d649cdb20067c1f9d8"],["/tags/指珊/page/2/index.html","2df621d03282b17b8a15bbc93e83a690"],["/tags/摸鱼之作/index.html","7e893fd93dab34ec70b766abd97440d6"],["/tags/日常/index.html","0e818798d381577ded4a28d410e19d2a"],["/tags/日月凌空/index.html","f9396041a764916dd305f124b4ac1f2b"],["/tags/柠梨/index.html","02daa14e0c520b977cd41679310ab651"],["/tags/柠梨/page/10/index.html","b5cf09cfc7c063e18f0e0f35387956cc"],["/tags/柠梨/page/2/index.html","33566052d1e9124393c760d9a0784ec7"],["/tags/柠梨/page/3/index.html","ad57211eedc6fe3ae0310e2399e92404"],["/tags/柠梨/page/4/index.html","3b05968be312727d7446939414941dbe"],["/tags/柠梨/page/5/index.html","7224b90f8b75f1b8404c396c8a5f5105"],["/tags/柠梨/page/6/index.html","6d92400e17c9786ce0346585328449ee"],["/tags/柠梨/page/7/index.html","00c70138cfdeafc12d66610416631c81"],["/tags/柠梨/page/8/index.html","d92bd5483713470e0b9d419f6c6a9bbe"],["/tags/柠梨/page/9/index.html","a08a231783fff5feea74f23e3184a385"],["/tags/残酷法则/index.html","0990f358723bde9b8771fbaafbbb9cd8"],["/tags/残酷法则/page/2/index.html","93144a327055d512bd9c86d98483b997"],["/tags/残酷法则/page/3/index.html","f991e10c9feeb6039c427c89f28ddec3"],["/tags/爱，青春与死亡/index.html","0414eb7f072dbbf9c4c14060d3149524"],["/tags/狂飙/index.html","08cbc90fcf05170e118bdb04e31cb3d7"],["/tags/都市传说/index.html","93b1061e789794aacda96087fb97397b"],["/tags/都市传说/page/2/index.html","89dbf35018448863619fe985facf678e"],["/tags/都市传说/page/3/index.html","b49be8d91fd3dccd82d388d3480332fd"],["/tags/镛武侠/index.html","134caef1b58ab435fe90bbdf2fa2e07a"]];
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
