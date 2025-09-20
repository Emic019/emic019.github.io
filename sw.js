/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","86d646dfbdd4c615f56827538334d295"],["/about/index.html","d0018983d7046d48516ed209de1d0e9c"],["/archives/2024/07/index.html","f26d0a75cb43d22a0e04176b68e3fd9d"],["/archives/2024/07/page/2/index.html","f300ff810e7684744ce3e1e893e98ce3"],["/archives/2024/07/page/3/index.html","db1a12d4f3e8e63a160e26242cd866a8"],["/archives/2024/07/page/4/index.html","c5e61bcf9ec693189b60c55f4830cdaf"],["/archives/2024/07/page/5/index.html","abbd94902b51040497cb340a8acd3f1e"],["/archives/2024/07/page/6/index.html","d16e2ffb850a16826ab7d49d65c7b7e9"],["/archives/2024/08/index.html","68b8e9a2169a6901421ec26baaed59f5"],["/archives/2024/09/index.html","cfa1c65940add8c6f3f9d1c258433932"],["/archives/2024/10/index.html","fea5071002e0fdca8c60f81065b17c37"],["/archives/2024/11/index.html","7907bb6cf9b1897182c0de0ff3bebf0e"],["/archives/2024/12/index.html","1358ecbee8781948f7ae5207b1ca9b9b"],["/archives/2024/index.html","a5f4e066432b628fcd5ecee944fda683"],["/archives/2024/page/2/index.html","7b71bfdfe0fdb1fb59de9b5daff76796"],["/archives/2024/page/3/index.html","3ee8630d81ee9b2d2d8187e0929519ef"],["/archives/2024/page/4/index.html","a72d2758f88337fca705a02f03013d68"],["/archives/2024/page/5/index.html","6d4571538971cb602c6946f5f58f507d"],["/archives/2024/page/6/index.html","008cc77efbf58c610e1b174cc4f3e186"],["/archives/2024/page/7/index.html","c424ea566de8d78c08fe087ce05100ae"],["/archives/2024/page/8/index.html","a6d3fa6f3eb23b08917a0ef4ef3b2336"],["/archives/2024/page/9/index.html","26878677793e268d5ba676939fb2dc3c"],["/archives/2025/02/index.html","733710add1d4d21941dacbbe48918655"],["/archives/2025/03/index.html","a6391042ba70c896ed38637a3e582fc2"],["/archives/2025/04/index.html","e3c93760d830e6a1bf704969fa6fffff"],["/archives/2025/05/index.html","9f8fb8fb871a432448f69e191632cf38"],["/archives/2025/05/page/2/index.html","ac0b427e0eb362463806a464403ddd4d"],["/archives/2025/06/index.html","f982fe51486a614209b3d4417ad583e5"],["/archives/2025/08/index.html","0ec76ad57bcba57c44789346378dcf8a"],["/archives/2025/08/page/2/index.html","2c77a253677496d261b32e5189a210d9"],["/archives/2025/09/index.html","9e41333fe7266ebbcec6ce3b2ccb4ac8"],["/archives/2025/index.html","420617acffe71fe09e7d43bd3ec9f73d"],["/archives/2025/page/2/index.html","ff697a7cadb34c5a71bf0d59d8c4eeda"],["/archives/2025/page/3/index.html","df54fee9b928e9aa99a61e55669d16b3"],["/archives/2025/page/4/index.html","c10cae1fc59d5812164d277de33da56a"],["/archives/2025/page/5/index.html","f4c5da453f8973d197fca1f54e4c838a"],["/archives/index.html","4b8b55e51293cbc90b7b4815678983c1"],["/archives/page/10/index.html","5739f4cb5e5d674aad0c97ed84514502"],["/archives/page/11/index.html","166a51b402fa914c23a40a215a4b0a3e"],["/archives/page/12/index.html","19c905b0f3e112cc4f66bb433f823bcc"],["/archives/page/13/index.html","1629299725c2a7957876ac73fec8efca"],["/archives/page/2/index.html","2ca1f43bc8271ed49973ab75096dddc6"],["/archives/page/3/index.html","e1508aff530306ef9cfcfa279e5da6a3"],["/archives/page/4/index.html","22a22b99c2f03bb119e443050d40ee11"],["/archives/page/5/index.html","f2e0045c4c6e5a8d3bb8c82f7b5789c0"],["/archives/page/6/index.html","3d8ef5014cbb9daa2282a891bfe3010a"],["/archives/page/7/index.html","287535e8c37affa5ecd6fb586bd9e913"],["/archives/page/8/index.html","0db99931d4ca9209dff44bb1df65a88e"],["/archives/page/9/index.html","5ffaecff9d9ff5511b7bc47ba89969be"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short11.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","ea03994b223508065a403c85f3cdd2c0"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short16.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","83c967b36966928bfe27c5ee5a248190"],["/categories/与敌同行/index.html","afb2d5625e5d53803c86c1a0e1d254cd"],["/categories/与敌同行/page/2/index.html","08af8edae01eb020f08251081d0f8121"],["/categories/与敌同行/page/3/index.html","7d38527b4a143b00626492b1a7903422"],["/categories/与敌同行/page/4/index.html","fdd5ad2482151d2073ca593f368b300a"],["/categories/与敌同行/第一卷-双镜/index.html","a688412785f59a36615c1a69de7d5151"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","d4018eb06951e2a595439fb8674a0cb0"],["/categories/与敌同行/第二卷-信天游/index.html","c37240341aa6399821ec186ac6b5c728"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","9518305d7240054b8e0eaeeda8d61679"],["/categories/乐园/index.html","87e764aacf4002af66282fae9b7bb5ac"],["/categories/乐园/page/2/index.html","2a58d2611b79d10e6388f48a4a435f88"],["/categories/嘲鸟之歌/index.html","251899c553c0344f52a5ea3350111bd0"],["/categories/失落的应许之地/index.html","813dce89770e4801dc3a13bee17818ae"],["/categories/失落的应许之地/page/2/index.html","64040d7325bc1028eb7f70acc7d21a48"],["/categories/失落的应许之地/page/3/index.html","c6e381836000f64a7e5f17850317b70e"],["/categories/月照天山雪/index.html","80cca523b3c320aa9881ab47366f8a10"],["/categories/月照天山雪/page/2/index.html","bcefd6b1ebb75148be17b8fe0fea6fc9"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","88ceba1890812c3c6412ad93ec8b8136"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","ce61430737904a9eabb0c86440cc88cc"],["/categories/狂飙，乱飙，发飙/index.html","ee67b1804b99da4201cd3867c6620f8e"],["/categories/短篇/index.html","d466d2160e2fca14b3654ece5fa624cd"],["/categories/繁城之下/index.html","652cee78cca52360dfdbe3ea78051b4d"],["/categories/长夜漫漫路迢迢/index.html","c7d81f384dbb69ac677bd4c8b3896287"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","ccd89b87b0c934e67f20acfe5fb21015"],["/css/modify.css","a895c901252207bf03f67b75190f87f6"],["/css/var.css","133f15d182e627fd6b4db4f4ef738726"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","2d8750ca10d75eb2c454079524664cf4"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","64785c5951b846742c95b2eb6a8f1c7b"],["/page/11/index.html","62bfbb7c1230fca64053fe3ca0b7685f"],["/page/2/index.html","7ec5ca85464605856da73b13124f43a0"],["/page/3/index.html","9c2a98d4ad77156fced9bf435c3d26f0"],["/page/4/index.html","a78deb908b655b0c76f61d9b1f8232d2"],["/page/5/index.html","d9065321375733ee1d6e7b6c31902a46"],["/page/6/index.html","5b2cbe1ab5bd3bdbb1dd29ccc3acf714"],["/page/7/index.html","c33c25398983d1fcfad65ad96d518c6e"],["/page/8/index.html","8d36b200975e82afb104c2e718427c84"],["/page/9/index.html","908e0c2f3a60d061f657e77448ee49e5"],["/posts/1083795192/index.html","2816983a3c5da855f425a0676869655c"],["/posts/1099216759/index.html","a24117bd56d9f1892c73e9bfe1540795"],["/posts/1104021264/index.html","1b5dc7a34ee04183a27cbb287227200d"],["/posts/1195093070/index.html","ec426afaae9d9fa424b028f52c553c1d"],["/posts/12506394/index.html","b67f59a327d98fa3eeff2bdc54b38881"],["/posts/1272692100/index.html","0829eeed708b147797093373c0fb27d9"],["/posts/1304356361/index.html","0d7e865a215f036b39d66d8583af8320"],["/posts/1315809802/index.html","2a010be3f5e5239d90827a60e72a076c"],["/posts/1329165323/index.html","749a734cfe4b4746127981c47d05cc2d"],["/posts/1378666774/index.html","f4ebe6fc2005d2b33a8b511337ef303c"],["/posts/1400613118/index.html","9e37cbaf1bbdd744c0e15560a839f2e7"],["/posts/1407316490/index.html","ef3da5cdafc9c8451c96ee932ddd226b"],["/posts/1434824932/index.html","26b92a18ed3258de5d77b04ae6cdeaf7"],["/posts/1445707477/index.html","a9e32f0d2e09b9b7c7579b50a2546ac2"],["/posts/1465373355/index.html","7d86ca7b4e35e896d4fcc652d36e4266"],["/posts/1500385898/index.html","efc596202deb69aa6cebe6a6d79df1d7"],["/posts/1681850936/index.html","f3b0f036a97d3ba6b5cc571e1c57e61c"],["/posts/1688557772/index.html","4b5517f756e4f5b9bcfe8321d232eef8"],["/posts/1710373156/index.html","83f358c3987cd70022f5b044492e5e5d"],["/posts/1720998546/index.html","3e187185ad2271d18e2b18bc44304908"],["/posts/173005120/index.html","91d94c231b93a6d86f3e9502447b426b"],["/posts/1766000773/index.html","19037e7f68580d27ceb3d4a8089a68f6"],["/posts/1845581652/index.html","2e2b1f41c86220cd85579dd15db83558"],["/posts/1988799958/index.html","e8e990f6ab3787790047c33d77df7b38"],["/posts/2080722358/index.html","6406269866842c341305ebfe31cb774d"],["/posts/2192148155/index.html","34bfbf1d4b51692b7fc027261ab221cc"],["/posts/2229302539/index.html","86a6896aea9bb5848b1c48c2dd834c88"],["/posts/2492968201/index.html","cd866285c5676136f5b98b02bd658990"],["/posts/2531300956/index.html","6bd8789762c8e0c611189e36e4965bac"],["/posts/2869217975/index.html","d7f7571d150c13f599c9becdd74220ba"],["/posts/2949714254/index.html","259f63aa511328e3653f5e1c01c56636"],["/posts/3002318373/index.html","a7290a067b66f39111d18052c153453f"],["/posts/3076558902/index.html","be26f8aeffc12ae450439cb8471c7f73"],["/posts/3147359483/index.html","676ccb290008d5899e48e56178308062"],["/posts/3191465731/index.html","9ec570ab52bcdd2bbbb5d53c9772b9d9"],["/posts/320179123/index.html","0772fbe83277e7ff6ecd4c7e490b49e0"],["/posts/3300469459/index.html","0d70aab7c16f901a1bf1d3c46ec99362"],["/posts/3459697331/index.html","859fc8b8b496753fb1f1ddcad446be3f"],["/posts/3489395119/index.html","28006ac48762390e6c9ada37148ad3fd"],["/posts/3525870963/index.html","21e7fe9dd8141c718d9009b1d62a918e"],["/posts/3591144765/index.html","ccdf897e596a8d7a929535231ba64120"],["/posts/3602722865/index.html","3c80e1e5a3e3de906584f2c7ac062331"],["/posts/3640780602/index.html","67946c7d3c57b91a0b48121c3dd979aa"],["/posts/3679626959/index.html","38a9e35b9705467d495b4776d5fe0de2"],["/posts/3699598685/index.html","5594466f16f53d94ae13ad6bd40e7fcd"],["/posts/3712900673/index.html","ef031edf615e1c5e8c2ff4120317b1ed"],["/posts/3770599674/index.html","6cbe6dab74ff59673a21e2b2e54116a7"],["/posts/3788666127/index.html","82c0fea9ef718907b6583d30b9268cb8"],["/posts/3935350387/index.html","014ed79239e54f1b9c247cbb256eb3b4"],["/posts/3948778863/index.html","0eec75fbc3b7b7e9369fffebe4e44ff9"],["/posts/403803703/index.html","361e5269528d841a301aea09f3d724a9"],["/posts/4041933047/index.html","6939918d7951345f12bfc6a08f51f476"],["/posts/4083669729/index.html","78f81cad4d1f4dc8d29401ab4535c6f8"],["/posts/4110582124/index.html","d6c19dece542d3416139389fca3c4593"],["/posts/411074811/index.html","649150760dc05375d52cff5c9c35c283"],["/posts/4113963045/index.html","5693dae5f76da4c8cc875815562cf86a"],["/posts/4163174813/index.html","5e81e65c4654e5f3faff4502dcb4fbe6"],["/posts/4185022581/index.html","4b914057d555e493818821bc4e906fe7"],["/posts/4192746113/index.html","7f79f98f9ac2d9d55372f11d62dc0d12"],["/posts/597050941/index.html","89e68167667e3717a9d45fcaca40e018"],["/posts/719776913/index.html","7f227e2c8da2b59829b790043c5e5b18"],["/posts/741067372/index.html","b5852329f3ce2734e489cbccdc9a33b6"],["/posts/776340048/index.html","5f0992e41920b20181739ac8da00c981"],["/posts/888354975/index.html","7172732074d78241b897155b4ede7266"],["/style.css","57028d7bfe7a42c30f9a05ae443c5468"],["/sw-register.js","6ab73a43d56926f94424970eb44f7856"],["/tags/index.html","e1ef4c641f93104dece77e1fff7d0838"],["/tags/冰与火之歌/index.html","44c378551693bae7c9bae9acd2841cd3"],["/tags/冰与火之歌/page/2/index.html","3e77ecf90191c0de123056d0ebc3238f"],["/tags/指珊/index.html","a8239ffdbdd2284fd3bd366fd3a01b48"],["/tags/指珊/page/2/index.html","e65b7857094cfbc663791668393ce51f"],["/tags/摸鱼之作/index.html","7bd2f504a91881be1aa76f1103a80081"],["/tags/日常/index.html","0402c9df82773f76d6512d79026d0224"],["/tags/柠梨/index.html","c0b339ec2adba5c2f2c63f674c149d77"],["/tags/柠梨/page/2/index.html","4792415f2c27f56865c5a70a9005157f"],["/tags/柠梨/page/3/index.html","03533fff868c50c913d34afc718ea01b"],["/tags/柠梨/page/4/index.html","2771bb52e2467f9e72b0da974e4770f8"],["/tags/柠梨/page/5/index.html","fb2cc0fb0858dd7576ff70b2fbe230fa"],["/tags/柠梨/page/6/index.html","e8309f4a0e4563906926d206cdc4549f"],["/tags/柠梨/page/7/index.html","5fb2fb32d7ee823193b38630d72c9158"],["/tags/柠梨/page/8/index.html","c6014242853f50e2783ddb138831d2c3"],["/tags/柠梨/page/9/index.html","9f64b801d204a6b07a08e565bdfb57bf"],["/tags/狂飙/index.html","c46ca2255427409a1149b499de1f9979"],["/tags/镛武侠/index.html","5ff4ac6da6fdf2f058ebcf207314d9a9"]];
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
