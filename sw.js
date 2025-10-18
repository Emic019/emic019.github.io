/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b21c4e79ee4060f8a8b7f6b99b6dbae3"],["/about/index.html","898eee3e3c5ab43740e091705f3f6de7"],["/archives/2024/07/index.html","3a859f14582cfef4a8397f0781bcc72d"],["/archives/2024/07/page/2/index.html","be4c4c3a63ed5bf7ae636a62ee022c48"],["/archives/2024/07/page/3/index.html","a0883666dc944f7f110d78e532ac218f"],["/archives/2024/07/page/4/index.html","61a54e9aaec34d3da006c7f688a26f58"],["/archives/2024/07/page/5/index.html","6b4b7f5fb2ac42b66c85803b8a19c452"],["/archives/2024/07/page/6/index.html","4a695b7addb4f7ad48f9de318e8754a2"],["/archives/2024/08/index.html","95aa63fcbaf22f86cc8f0b8f1e540565"],["/archives/2024/09/index.html","28e5de4ebcaaef43e0ba2d086e1f52ee"],["/archives/2024/10/index.html","8aed57fa145f5f1dbc27823a1f7b0034"],["/archives/2024/11/index.html","8f5f6f2a28368cc0e2343a7f83efba4c"],["/archives/2024/12/index.html","d1385bde956cc781c7ea1efce6f978f2"],["/archives/2024/index.html","5faf4472195e907a1d1dfcfd693acd6f"],["/archives/2024/page/2/index.html","2e1057cdb88e87cf651ecdb13ee279d8"],["/archives/2024/page/3/index.html","774b8d667dadd61e000c05131c55d425"],["/archives/2024/page/4/index.html","80ac0718b1968dcb187150d053f34294"],["/archives/2024/page/5/index.html","dde0778e2718bb8094537cf553439bfa"],["/archives/2024/page/6/index.html","d6604a0e00644907b38b49da7411b018"],["/archives/2024/page/7/index.html","ea456db0e649d8e28b3594d471a530e3"],["/archives/2024/page/8/index.html","81b6a2eb199acf9a9fa1cf9698b145cc"],["/archives/2024/page/9/index.html","9361e8142a458c52f3a476f3e94e5982"],["/archives/2025/02/index.html","c91b39ece3aabd5a9e1d4e5007a8f0ae"],["/archives/2025/03/index.html","c9229000c9829b6ebd8c4b24e9c7ddb1"],["/archives/2025/04/index.html","28c3db96e28af9bfb804ddcc10f81ff8"],["/archives/2025/05/index.html","daa677b340beca60dfb8e8ca99edbcc4"],["/archives/2025/05/page/2/index.html","c323318880fa645c9fc94daa4b097aa9"],["/archives/2025/06/index.html","f609a9612a8f50ae47dfe819f4010409"],["/archives/2025/08/index.html","b196df4936920104f9adfa554fe35a93"],["/archives/2025/08/page/2/index.html","243c881f2c02ebd65d9f0d2217160158"],["/archives/2025/09/index.html","c07db10c188e26b0a9a66de91b1a99f4"],["/archives/2025/10/index.html","7453f2c2eff560ce3a5af5a2e206c948"],["/archives/2025/index.html","4547a889c08bb8313673655cd55c10ae"],["/archives/2025/page/2/index.html","3710f5b6910688001cd504e47b41e5a6"],["/archives/2025/page/3/index.html","92a97ce3bb12e0d9b897aa5401041cb3"],["/archives/2025/page/4/index.html","00e4729de3dba44539cf78832759ca5a"],["/archives/2025/page/5/index.html","78127e4e136f61014f9032c04687a740"],["/archives/2025/page/6/index.html","4c017ec900c1b57212bf32a34b20e5fc"],["/archives/2025/page/7/index.html","233a46614e2cc9d8a26f6767a1a5dd50"],["/archives/index.html","4de57d5f47369c42b5020ea6cd840fd9"],["/archives/page/10/index.html","1b626f0948bc1a87ee70e87a523e3647"],["/archives/page/11/index.html","2565d0708c66a6093cd764ca75354a6b"],["/archives/page/12/index.html","14370e4a711a17fd7e513acbc254061a"],["/archives/page/13/index.html","9db309cc8976e14621ad6415e861e100"],["/archives/page/14/index.html","ea84505e38b6108d6dfefb4d18ca9629"],["/archives/page/15/index.html","978231600c62bd434bff3654a19eb126"],["/archives/page/2/index.html","3457a33fc0a05712e20a05dbedb523d3"],["/archives/page/3/index.html","8818f96c764f05c878e097774862729c"],["/archives/page/4/index.html","c6ac8ca77e8aef7de99b1165185bcd79"],["/archives/page/5/index.html","bc6d4ca812abc60a1ae8ddefc4c2d369"],["/archives/page/6/index.html","53f736c9191786168c56f8f45bba2a09"],["/archives/page/7/index.html","16f5aac5a60736b5272c78ba29bce344"],["/archives/page/8/index.html","1c790bc0e7da536be4d04d16160ccc15"],["/archives/page/9/index.html","b13eba55bfc6991bf0b1688bab33a9f6"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/sny3.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/sny4.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/sny5.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","44e0734423c4663334c5b945590691b6"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/sny1.jpg","92158f93aff91b4ea1b1ff8059f2e953"],["/assets/cover/sny2.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/sny3.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/sny4.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","91bb2aa4523f6e336add358cec66ddc4"],["/categories/index.html","ed622f5ba62aa7580b9fc28377c16bc5"],["/categories/与敌同行/index.html","387edd35bcaad260670197c0cae3064d"],["/categories/与敌同行/page/2/index.html","67fc11712b12f4325cc6921131fce92f"],["/categories/与敌同行/page/3/index.html","13cb70f5927706a08accdc3facf32fe0"],["/categories/与敌同行/page/4/index.html","6088b5da37996363b4a94c6cdad7f0cd"],["/categories/与敌同行/第一卷-双镜/index.html","42c9068adb36a4380da132bff8ece8e3"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","f8cef09470e26d534fe86f84b76db2f9"],["/categories/与敌同行/第二卷-信天游/index.html","0ef49f48cba66cb022b277ed813711d4"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","d90bdafdcd35f0360ed83eafa4f90128"],["/categories/乐园/index.html","afdfcc91049cf9c6027fd4fa8ad20703"],["/categories/乐园/page/2/index.html","cd33272735b55f7046b6b454e4b33542"],["/categories/乐园/page/3/index.html","8b17aea9940c45d0f064123a7212541b"],["/categories/嘲鸟之歌/index.html","18dc39203882fa6251326fca5302cf9b"],["/categories/失落的应许之地/index.html","d8c1ea193865dd3f75356012242b3ec2"],["/categories/失落的应许之地/page/2/index.html","f5abd95b59e295698f998da42f0cffbe"],["/categories/失落的应许之地/page/3/index.html","7fa34dce976e4cd37df9501816b0e516"],["/categories/月照天山雪/index.html","342a9dc0b851c468bebcfe565784fcbc"],["/categories/月照天山雪/page/2/index.html","4e6db4c8bbdaa198e8c20543ac6fc334"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","1928ec5672ed22e851437f7cd03609a1"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","f46114db536ed1582c8071d0ae11865f"],["/categories/狂飙，乱飙，发飙/index.html","69370bd75feafff885fab1c61e312eb4"],["/categories/短篇/index.html","0de4b14755a9930b348ddbd8b86b7186"],["/categories/繁城之下/index.html","7cf192561386a79c50cb510e94057dc5"],["/categories/长夜漫漫路迢迢/index.html","eb4ecbddbfc031733a81167b515ba2c7"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b45ff3aeb2cef79464b4124bf3e701b4"],["/css/modify.css","eeb36ec70801603f1631e29679f41316"],["/css/var.css","f45e4278b41c8d5681ed3876da3d23a5"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","fd7e67c5fe79bacf4941d09adb9d9cae"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","011ff1367c9def9898e8c073ab199bd3"],["/page/11/index.html","af06a9542dc204633c922f95a6a488da"],["/page/12/index.html","0959ce7c09ce8213bb2839c079610822"],["/page/2/index.html","a02abc50d1bc8ff97cc1197573ff2daf"],["/page/3/index.html","33d1f326a68b72a26b1ac53dfc254db8"],["/page/4/index.html","8fcbd2255aa116f0581d5dc1e5cee7c1"],["/page/5/index.html","fdb7e6663f13b277d3677f0a6ddaa21b"],["/page/6/index.html","c7659bd26a7c59db45cc6252b8cac743"],["/page/7/index.html","612b5451c1183bc498d62f7551bcd2a8"],["/page/8/index.html","7339509afea2a8428e51bb8358602274"],["/page/9/index.html","dfdfc2f597bafaaaee88492d16758fe0"],["/posts/103655302/index.html","ef4a2d12168d5d3dbc318d57b79c54de"],["/posts/1083795192/index.html","c06db7a7547a3c4ca1e2aca4e02b4596"],["/posts/1099216759/index.html","776ba87c3c7b1150422c181102002b94"],["/posts/1104021264/index.html","c4e753b6ee7d2c2efa62638cad5298f8"],["/posts/1195093070/index.html","af4f7c99c1731b74c08144d76420a349"],["/posts/12506394/index.html","e336c484b477caa16b3ff76384a82d50"],["/posts/1272692100/index.html","9d0c7a801632292e106317f304c75048"],["/posts/1304356361/index.html","69f3ad21b96db47be5d013e19f9fd916"],["/posts/1315809802/index.html","e2add57603f60369a1d112bb31bab6b4"],["/posts/1329165323/index.html","4d58e35a5811565078196238f2efb3bb"],["/posts/1378666774/index.html","9e5932a39c7c87005b172277deac7ccb"],["/posts/1400613118/index.html","d588b0c584cb600e90b75f44a6189591"],["/posts/1407316490/index.html","28c17d34282cfe08d2932effed99d1ed"],["/posts/1434824932/index.html","8e83c7a12de29ee3d9d570790dbd6586"],["/posts/1445707477/index.html","2f7bcf388f9425e0f7667a957772a484"],["/posts/1465373355/index.html","197e81708063e60b24fe88967c4642aa"],["/posts/1500385898/index.html","b0c29ace56d6156edbbfc93c2e4f44ed"],["/posts/1681850936/index.html","5cd2d0bae5fa5abb744bea11db3b048e"],["/posts/1688557772/index.html","67f12302235d202f511289ca3bf1a1c5"],["/posts/1710373156/index.html","ba9c0ede9e4bfd5dbfca2974c31cbe9f"],["/posts/1720998546/index.html","be30447eb9779dec9be613bbf5e581d1"],["/posts/173005120/index.html","d710df8bb565dd66d84394907908feea"],["/posts/1758837205/index.html","b76776a61467f4f64c868f77a46b7f5a"],["/posts/1766000773/index.html","3daca2019d847b080879c59a007a0329"],["/posts/1845581652/index.html","146295a216183c357c83897e40330742"],["/posts/1859941397/index.html","80542479db5ae6a612dc65ae99eb8ef0"],["/posts/1988799958/index.html","59579c98b59b8c67b14cc1d81c8cc338"],["/posts/2080722358/index.html","6f993e7789af323dffc8fdf32de10893"],["/posts/2192148155/index.html","72f5199d4ae942607b88a7cfe8ba62ec"],["/posts/2229302539/index.html","5b162e9c2df2edadf9d63fc63e2a3792"],["/posts/2492968201/index.html","9ae416bec742950370729e66e3418d0e"],["/posts/2531300956/index.html","f549da02f39cc1c72c936ea0a87c85fc"],["/posts/2869217975/index.html","340470c4f640d816bc24ba654f30fb59"],["/posts/2888068877/index.html","f968b5545a823fe85cf37a535fc5c1b9"],["/posts/2949714254/index.html","2622c49b3d93cbf62264a0b99b2d1ef1"],["/posts/3002318373/index.html","39b2a41df17c095f0323700f359167ed"],["/posts/3076558902/index.html","95cd1983b20793ed5d16aaeb130d3493"],["/posts/3147359483/index.html","60ef6e5ef8c27df56e5ae8c969a1f76a"],["/posts/3191465731/index.html","9477d7d84a72e78d4272e6302ace69ee"],["/posts/3197223139/index.html","a763b56f40abb91c4a701ca3169462d8"],["/posts/320179123/index.html","28b106613bdbacbbda9c0dc38c728534"],["/posts/3300469459/index.html","e80d00b750d4cf05788fb2f191dbe329"],["/posts/330870226/index.html","517a6508b986d6995705126d9326f9bf"],["/posts/345507944/index.html","b12792a95dad3e8ba5f3cc885325ba83"],["/posts/3459697331/index.html","06f5f35b134ee73f43c5fc8afd9b6d19"],["/posts/3489395119/index.html","224b072acc7bc8dbab6d95f4e6f68323"],["/posts/3525870963/index.html","598cd4bdbe5d17c2aca80f5a17f00174"],["/posts/3591144765/index.html","587d4f713580e91d68629c18eda6f551"],["/posts/3602722865/index.html","9a38a224b5ff6d65a30c191dc3ba1269"],["/posts/3640780602/index.html","def32e452f54725964fc76508c61a093"],["/posts/3679626959/index.html","6843f1fb38b273161119cdb5a948ed8a"],["/posts/3699598685/index.html","7661f4312743ca10d3ae2b3a27887ebc"],["/posts/3712900673/index.html","64c980099306744b34137213fe418b0c"],["/posts/3770599674/index.html","2a5213bd90248e4fd5ff303ff547d585"],["/posts/3788666127/index.html","9b9b37644e0f9125ad327c317691a2a7"],["/posts/3935350387/index.html","3af603735f9b4cfe0bc7e65f4976f708"],["/posts/3948778863/index.html","e597b16549f5967b69d171d62da738bb"],["/posts/403803703/index.html","f65e4ade2baedcb3fd9f7119b1d236a4"],["/posts/4041933047/index.html","3aa03dd1b0bf153d83f420674aa4a34c"],["/posts/4083669729/index.html","f61ee3897b9986d8e192ef2a023e5f58"],["/posts/4110582124/index.html","b61c7ab30ada9129c0548f10c44b228d"],["/posts/411074811/index.html","661c918c26ea4f41a4cc828c4cc18eef"],["/posts/4113963045/index.html","5b76da1c1d6865efac2af52729b653cb"],["/posts/4163174813/index.html","6a8208eba3844a236d7bcab3fe1eac7d"],["/posts/4185022581/index.html","5bd07f6f3d4e484465eae13272e5993d"],["/posts/4192746113/index.html","23365a0dfcf00571170ab0d544531b51"],["/posts/591853658/index.html","4a3a48f929dc5619057e9129b215fe89"],["/posts/597050941/index.html","186bd716735a1415620c9361bd75d694"],["/posts/719776913/index.html","a2c189f3a23c9b350b211aa11acc6354"],["/posts/741067372/index.html","0280f0e5af960d3166cb377d70b4237e"],["/posts/776340048/index.html","18b1da9b9a90b2619e5a531271dfa85c"],["/posts/888354975/index.html","5518885e682f7e1b2996ae696d4bd27b"],["/style.css","e3a24f494577e14a512b0cb6614a69d2"],["/sw-register.js","52775ae2317d1c100e4682e98224fd97"],["/tags/index.html","6b905507fe6cf8c10146ac263c25e0c2"],["/tags/中国往事/index.html","a0b56398771c7b9655dc0e0e8a200de9"],["/tags/中国往事/page/2/index.html","c5c3959ec35108690cb4759f5be1967d"],["/tags/中国往事/page/3/index.html","586569f665b3a5893e4f111dd7e66d20"],["/tags/中国往事/page/4/index.html","b293e2a25c8c88b569022d5eaf1edf5a"],["/tags/冰与火之歌/index.html","85db18aae595696d7faffa613127a7f9"],["/tags/冰与火之歌/page/2/index.html","9a1a4b56da816192c8abb5f00f0b894a"],["/tags/拍案惊奇/index.html","248d31cd3f1c3277393ef5b2d0bf15c1"],["/tags/指珊/index.html","de07b820cbadd9fd6db1c162a6fe217f"],["/tags/指珊/page/2/index.html","7dd8f58bd35ac434dd30a0edbf0d4301"],["/tags/摸鱼之作/index.html","33dbcbb6a23c31a505358d8b1dc354f1"],["/tags/日常/index.html","edfba7864af98d9075e2ac9f0dca1b36"],["/tags/日月凌空/index.html","27cb7ed56cb3e910d811926b932651e8"],["/tags/柠梨/index.html","8d31ab509e53acbf6a5e7dabc8c820ce"],["/tags/柠梨/page/10/index.html","e223bde6c2d0eda0c4f70a370fe18302"],["/tags/柠梨/page/11/index.html","410a1e58b44cb8e663c03884d619af62"],["/tags/柠梨/page/2/index.html","5933d9e40d6fe4eb33ead0f27185d561"],["/tags/柠梨/page/3/index.html","fc2e56c8bc2221b08bdb5c08199e3a03"],["/tags/柠梨/page/4/index.html","bd4483f55bcfccb25074790df2c3b8ce"],["/tags/柠梨/page/5/index.html","e046353f745ff57e18e3f3636b131b9e"],["/tags/柠梨/page/6/index.html","b371c45fc97e6f64eaa67d417c2e1dab"],["/tags/柠梨/page/7/index.html","c1ece5188f5ed581b2dfa99d022e937d"],["/tags/柠梨/page/8/index.html","b0ef12581c6b501ca7308d0eef7b5272"],["/tags/柠梨/page/9/index.html","8e3ddff1b44ed2a2428c9fb3b3ca8bad"],["/tags/残酷法则/index.html","00d9f0824bade44d1ed9163ae5bf0268"],["/tags/残酷法则/page/2/index.html","7599478d7f6c862d5930644cb3fd680e"],["/tags/残酷法则/page/3/index.html","c7b9649cff74bd39b51559027094bd8c"],["/tags/爱，青春与死亡/index.html","ecda979ffdff5ab4877b03d1d1bf9430"],["/tags/狂飙/index.html","4e70ef50fdf228287e301d842411f699"],["/tags/都市传说/index.html","1aa82bf5f492b675cf6765736ba854c8"],["/tags/都市传说/page/2/index.html","a27ed5ed37746fbd116f3d47c02acd7e"],["/tags/都市传说/page/3/index.html","145b749285f878ebee9a8fdb3617ccd0"],["/tags/镛武侠/index.html","0a154cd672f115583fb651fcb0c9539b"]];
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
