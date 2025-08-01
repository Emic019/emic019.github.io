/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cb11db3ad0017dbffb0397c743df9c72"],["/about/index.html","4a4c80e77b931f282688a72924688c48"],["/archives/2024/07/index.html","70f7d836031f8a819543c81df9bc501c"],["/archives/2024/07/page/2/index.html","c8a39738d3689b943b932938bf18340d"],["/archives/2024/07/page/3/index.html","6a4041ddb1c0b0016dfb991c7d624a2c"],["/archives/2024/07/page/4/index.html","283e72e61d21ee424dc61a6433edb06d"],["/archives/2024/07/page/5/index.html","d75d06d2854819150148ff12060bf981"],["/archives/2024/07/page/6/index.html","d8b8873233544fe266a15ce28334aa48"],["/archives/2024/08/index.html","21f3a6dd88a98e608f6fb68c82afb4ae"],["/archives/2024/09/index.html","dc59dfda887be5586e9c62357907ee92"],["/archives/2024/10/index.html","675fd28e943b6cea2deea0cb939ca52c"],["/archives/2024/11/index.html","3b8fb6cecb2b42753e7897ddcdbf32f8"],["/archives/2024/12/index.html","5ffb7128aae3f9eb06f71f96e171276c"],["/archives/2024/index.html","96467262007688991d87fd3c2491ed84"],["/archives/2024/page/2/index.html","d3a3d16f05a4f224808212484ec7a0bd"],["/archives/2024/page/3/index.html","c1b0daa36701c28fd336bf4a9a4146a9"],["/archives/2024/page/4/index.html","5cf0ab8f8afe57c5c42f27495f33d662"],["/archives/2024/page/5/index.html","b295017fbed4692c0abb8adc94cf03db"],["/archives/2024/page/6/index.html","cc30dc7af7d68c014630f29859dd16d8"],["/archives/2024/page/7/index.html","54135c79bd5bbc1d765383c2f922fb22"],["/archives/2024/page/8/index.html","389e27d0fc0345295c464e6349880fc7"],["/archives/2024/page/9/index.html","c7d6deae366c0241f1253607c0990845"],["/archives/2025/02/index.html","daa4dbe8452d29a85da6224c6ea088bf"],["/archives/2025/03/index.html","5e84e7e0d908ab7bb38ac02201b5bb7f"],["/archives/2025/04/index.html","e080abf304f310ed7fcb09e8fe51ef9a"],["/archives/2025/05/index.html","c3e98c0dea375142c482c0168dd35a94"],["/archives/2025/05/page/2/index.html","c1cd2b735e891bbb3e712696b2d6feab"],["/archives/2025/06/index.html","8f619c18090f0404711f085c0bd2532a"],["/archives/2025/08/index.html","91eee38431d69cbf14d74d8d41b3ef54"],["/archives/2025/index.html","7912f0a14802f6b6f0d8f300aab93c48"],["/archives/2025/page/2/index.html","1f9ef0a3d80447f5669e1960f9adef89"],["/archives/2025/page/3/index.html","738cfd7a0837a4141f7eaf4ab88f84f8"],["/archives/index.html","a9b0e04020896fe8a00a09302af83307"],["/archives/page/10/index.html","b947357e1c444c12cb7e9611a4655504"],["/archives/page/11/index.html","56dfee4e620378ad39c98b45cd1326d2"],["/archives/page/12/index.html","8167fb84301677b9b83de50f329f7bb3"],["/archives/page/2/index.html","c3e262d9c54e2fab6413bf967786f375"],["/archives/page/3/index.html","6cb6808aa60dd59a380b325957e3252a"],["/archives/page/4/index.html","1dfc61e39b1b313a84582b32e1cb57c8"],["/archives/page/5/index.html","2832fbe084c0a1c2252952936b26e195"],["/archives/page/6/index.html","f5a55f9e9d497f27db8627139e8daa2a"],["/archives/page/7/index.html","26adfe6da2e267319f370bbd386a7c10"],["/archives/page/8/index.html","5982c1a73de1ecca16850f67534653c9"],["/archives/page/9/index.html","660afb7448cce3126325f3114461c8db"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short11.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short16.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","7cb9e04b015d6cb4f8d5712241b5d15d"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","e8253900aeb948a8d76268b7bbf9543c"],["/categories/与敌同行/index.html","3847884de000b13a63958d4903efe266"],["/categories/与敌同行/page/2/index.html","3272f02b2a00d356dab3016e9cee4b61"],["/categories/与敌同行/page/3/index.html","d55ac4c1c828ff5f25c76752496acd38"],["/categories/与敌同行/page/4/index.html","e35237e06baad2c2131623c58d410180"],["/categories/与敌同行/第一卷-双镜/index.html","7e14b72b8f92231cdae9c7baf15bacf4"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","a4dc19a5c287a4989a7ab9307e13ccd4"],["/categories/与敌同行/第二卷-信天游/index.html","23359f659246aa76fae4e3984cf1af83"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","e803b231040c9400c44d2ee7f587fe59"],["/categories/嘲鸟之歌/index.html","73328d742cc3098cf08c15159be3bcb4"],["/categories/失落的应许之地/index.html","e01a79dcc6e2c880acdf66928ad29df5"],["/categories/失落的应许之地/page/2/index.html","6bcad6fdd86fb576eb110e9f6dc35eaf"],["/categories/失落的应许之地/page/3/index.html","622c69180242c75ef22eb7f5af0cae14"],["/categories/月照天山雪/index.html","40fe539282536eda2d11ba686f67b5cc"],["/categories/月照天山雪/page/2/index.html","c9732bd59a6d596c0566e4d04c535961"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","903d15c45cdb251def1bcb6449e4d949"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","1973b565275b521f28359fb9bc090bb9"],["/categories/狂飙，乱飙，发飙/index.html","e27cd340a47864c660e3b0d7fb646217"],["/categories/短篇/index.html","67d255befa2ad4194bc9a93774e8316b"],["/categories/破戒/index.html","c53ff8a723f8d49232ffe5d005e6f7c6"],["/categories/繁城之下/index.html","2724924a773777586a6f11f5a42bb4cb"],["/categories/长夜漫漫路迢迢/index.html","a219f4ba7c1db181e24d1992305a00b8"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","0d547dbe9a94fe9c715893b4f8c6c01e"],["/css/modify.css","ac3b6c1e870f2c095db1fa5849d4fc01"],["/css/var.css","97fec9246cd444591a343c87a09d87aa"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","2a051da18bf004e7e353e87188168418"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","cf41c330bfcf76a99caec3951a738a88"],["/page/2/index.html","53954b033491a42a95dd429524eda001"],["/page/3/index.html","fda522c3261e16d4dcfa934217edab0f"],["/page/4/index.html","ee3ecdb8878e78e87dcb8b7cd067b810"],["/page/5/index.html","ac8e243699c079f0c472cf7232c5574b"],["/page/6/index.html","248fd578f47338c90f0c981b91dd5685"],["/page/7/index.html","643e099af6238abdfe9f42d587208200"],["/page/8/index.html","1e85e272367ebe32b91eeb9fdaedc7c8"],["/page/9/index.html","ad797439c0f43f6f91bb2f273f1389b3"],["/posts/1083795192/index.html","ae335a54e4c64f89c2642ef6e1e1888d"],["/posts/1099216759/index.html","e08ab7f23e0222b19f1e0440025b45e7"],["/posts/1104021264/index.html","b3ef7b78b56b738f400909ffcb12e157"],["/posts/1195093070/index.html","762c898708d0492401920d93625a504a"],["/posts/12506394/index.html","2a29e9612be8dc19cf0c4d6694734ec0"],["/posts/1304356361/index.html","a89d7adabb9bcd04368a8d49be7cb927"],["/posts/1315809802/index.html","e7959b12103c29b5bae160d6229c0b28"],["/posts/1329165323/index.html","43d6e0332dbbd88fbf6de29ca1e9252e"],["/posts/1378666774/index.html","09fc0d1bb542a72e20f2644e6194a60d"],["/posts/1400613118/index.html","fd4c79fc146b1344be06871ac81bd704"],["/posts/1407316490/index.html","54b77802294b8abb29b9e3acb06f93ff"],["/posts/1434824932/index.html","fccd69f52a6d7950c79b909a9c527c93"],["/posts/1445707477/index.html","b4176183d989a6fdc54fd42c4f53414e"],["/posts/1465373355/index.html","4b7cbd73c1bed98dc993e9709bacfe47"],["/posts/1681850936/index.html","9b3bc3b972e5c86050d953a7eb8622ad"],["/posts/1688557772/index.html","b35e03611a03c6628a845df11fa738a8"],["/posts/1710373156/index.html","3c0adceb55610c1b80527282f3461500"],["/posts/1720998546/index.html","ba1059d15dce559af8a0c2922b881669"],["/posts/173005120/index.html","1dbf15d73814ac0f6e27c9d947534141"],["/posts/1766000773/index.html","8ce7d6048cbe1c19acf8226a61f6f3d9"],["/posts/1845581652/index.html","90eb66cbefdef271101fd38337da886d"],["/posts/1988799958/index.html","88ca53dcca126f28df8ebe492cb07eca"],["/posts/2192148155/index.html","4443db50dad12a27ad555cb018e125f1"],["/posts/2229302539/index.html","891dc55e1b04c54ec624ed70086e2d81"],["/posts/2492968201/index.html","97646d1d488d8e0eb391f34ff8c546e3"],["/posts/2531300956/index.html","215ac30e5b09249b9c4313c3e1a8c9ea"],["/posts/2949714254/index.html","4e11f5e3a3004c65d126dc7050729156"],["/posts/3002318373/index.html","81e83eec5537c6e47d825556c9d1cfc0"],["/posts/3076558902/index.html","0255e5c8655e6da7be85f00e7fb572db"],["/posts/3147359483/index.html","6690d53ab21ef0b0aabf9813b9c4843c"],["/posts/3191465731/index.html","3b8240c2f70c12d7a2d95f7ec7af4709"],["/posts/320179123/index.html","0c01a879a3fd2ed622faaca88adf4d1e"],["/posts/3459697331/index.html","ab46c62f26e2dc63eef91e897cc8799b"],["/posts/3489395119/index.html","aa1a4569aed933db38f8e351431ef875"],["/posts/3525870963/index.html","4a76c1b3ff6f27a79a51463bc4ab5b3e"],["/posts/3602722865/index.html","fcf84e1939cbfe09282208cbb191d286"],["/posts/3640780602/index.html","08f29d5a775564f449ccbe1215eb1e2f"],["/posts/3679626959/index.html","e159713361f1f90d9e2b3c37f0defb1b"],["/posts/3699598685/index.html","aa456a48b780029081f7151d594cc3bb"],["/posts/3712900673/index.html","7577af4cfc54aa1488b3b38daed2da96"],["/posts/3770599674/index.html","9aba85d45d5d4863ddd3a162782baea3"],["/posts/3935350387/index.html","a2a587b336429df490791f3d322498cb"],["/posts/3948778863/index.html","99e9e100f1ce8629a85945fc44c7d652"],["/posts/403803703/index.html","9fb30c423635d1596ee752f80c39f5ac"],["/posts/4041933047/index.html","8c782b10f4bf738bf13db89efe28ce33"],["/posts/4110582124/index.html","dbb2d9403fca5793d3eee85a60aaab35"],["/posts/411074811/index.html","3e3c4ea1568b0720488fab48f612749a"],["/posts/4113963045/index.html","0b1698d9f2b7773208d1c7d78ba8f064"],["/posts/4163174813/index.html","28dd6de301f8bfc253052dafc833feba"],["/posts/4185022581/index.html","a645e02834d0384b5de5541bae48e6b7"],["/posts/4192746113/index.html","d0ad407a715014bbbce98b05c3e524f2"],["/posts/597050941/index.html","9de236b06abb1e0e35e65e0b35543487"],["/posts/719776913/index.html","5ffb06bf6d4ae40f41ca77567292df82"],["/posts/741067372/index.html","6d903f0d46b61cb15f47acc05ae64e6d"],["/posts/776340048/index.html","2236e7e6820089a2faa8e73b501cc042"],["/posts/888354975/index.html","5fca44d872ad27ee88d12c2d6b2c28c4"],["/style.css","013d3ca65ef0285e920ef4b8e9b89475"],["/sw-register.js","f9fc897adb1cab4c42c21a419bf2a872"],["/tags/index.html","7388134ee84a0e33a61654e743f4a1ca"],["/tags/冰与火之歌/index.html","ebb38cfc0a932cc819fd619267715377"],["/tags/冰与火之歌/page/2/index.html","fae0695782560c82ddb59a74a02f507f"],["/tags/指珊/index.html","1aa6d5cebc09cd2f80556c966b10f2fa"],["/tags/指珊/page/2/index.html","3fb6aef7ac22978a9812716e2ae4883d"],["/tags/摸鱼之作/index.html","6d8ec7dd573af994edb89c65c57d38ea"],["/tags/日常/index.html","f519aa4610e72cb87e0877a4302fc1a4"],["/tags/柠梨/index.html","a564df40976bd033c81fd768dc42f14d"],["/tags/柠梨/page/2/index.html","b1ff438ca038d898d7cd8af1c4714219"],["/tags/柠梨/page/3/index.html","1131cd79edc2d8ca5a9d251b5a671270"],["/tags/柠梨/page/4/index.html","40bdd655d24be37abb4121af0f40405a"],["/tags/柠梨/page/5/index.html","3fd6fa27249ef6ff48cb9b5f7dbf2a9a"],["/tags/柠梨/page/6/index.html","da4d90ad9ad1b5470fa2258762257656"],["/tags/柠梨/page/7/index.html","3af4385db2ecd4fba53873c2720ad877"],["/tags/狂飙/index.html","0792b3ed3c599dd8d5b96c9173ac9427"],["/tags/镛武侠/index.html","0f721ec5538953cbc49b991879b07078"]];
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
