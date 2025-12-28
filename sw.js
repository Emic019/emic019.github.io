/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f4868851e2a08355fb22157c10a522b1"],["/about/index.html","e259fb38c56e4361ed28094555f5ebdc"],["/archives/2024/07/index.html","8fcce667a67e8b22a00de62b55b95072"],["/archives/2024/07/page/2/index.html","339c50586c0d95c0a6fbe601f8bce380"],["/archives/2024/07/page/3/index.html","3655d845fe54a1fd04322e2655cd4f1e"],["/archives/2024/07/page/4/index.html","5354f894f6373ff58b0080c000cb0135"],["/archives/2024/07/page/5/index.html","5e4c76d5f5afdbf857d33e2f203b36d5"],["/archives/2024/07/page/6/index.html","37e273f14a1f3df914b1d17823a17a6e"],["/archives/2024/08/index.html","82133342f74bc7c822eb6a1f5eb70cae"],["/archives/2024/09/index.html","ff5d13f35345fcc76e5c2425e9411e74"],["/archives/2024/10/index.html","7974f7ec8b2d19cb6bc0c562645128ef"],["/archives/2024/11/index.html","3a8da837b90d8387d1ea18f6dd59b740"],["/archives/2024/12/index.html","3308d91aed2a883a46f7332aac22ab6b"],["/archives/2024/index.html","5db9e00b146ecf2363bd0465b05c9ed7"],["/archives/2024/page/2/index.html","5a19298cb2e14c35235230c2973e60ee"],["/archives/2024/page/3/index.html","3d4abb632d6ebdd86105eb92ea1cda53"],["/archives/2024/page/4/index.html","95cc96e8dfc0954a81bf3bb3cd925755"],["/archives/2024/page/5/index.html","05674f51d0f35382613fe25aef05c519"],["/archives/2024/page/6/index.html","0edc1d8a9e49a28d2ce91f722ffade82"],["/archives/2024/page/7/index.html","cd78ac868460675c8a37e7a7e4adf281"],["/archives/2024/page/8/index.html","089295109a6e451dba9b5c6f09d6b72b"],["/archives/2024/page/9/index.html","4b5c6b9da92e1b0c8e0a2f66e25ef8da"],["/archives/2025/02/index.html","13c5d6f4a0a4226a1a0f85ba586ee12a"],["/archives/2025/03/index.html","02b76559b7950451f7a006f806aaece6"],["/archives/2025/04/index.html","e558b516c2e1f0157f89ac76db38d48e"],["/archives/2025/05/index.html","7630823e3d60dde7ba6b3fbf1301a355"],["/archives/2025/05/page/2/index.html","0f5f3167d3d14e93513c200c4b9baefc"],["/archives/2025/06/index.html","480f2afedfbd73335038ef2b72e1961d"],["/archives/2025/08/index.html","2a7a23846cc797b96be41a478f0f0e1e"],["/archives/2025/08/page/2/index.html","f6e1e6ee7a7c17bc54effeb7d1e7cb42"],["/archives/2025/09/index.html","072de0a198e8d90ee7af59c213564447"],["/archives/2025/10/index.html","202bb2cb5935995f08df4cc79efeb2a5"],["/archives/2025/11/index.html","df7d4e1aaab8e917136b4894080b0a7f"],["/archives/2025/12/index.html","971d7f259c70999b709ea0dcefc1a3df"],["/archives/2025/index.html","33c388c974b189797e9e908c8b973c7a"],["/archives/2025/page/2/index.html","892f0fbb78059ffc2fac62615e11cb23"],["/archives/2025/page/3/index.html","4a4a761c46a15e562c49518066b92afe"],["/archives/2025/page/4/index.html","4335b4988cc6253111a20292f0ac92f6"],["/archives/2025/page/5/index.html","ff9f8f44c089a15748d2eeb65767344d"],["/archives/2025/page/6/index.html","511097b4acc07627a2ee1962f9402bd8"],["/archives/2025/page/7/index.html","624bb4a86248c3420e72bb11a352d4a1"],["/archives/index.html","939f5f928bf3df028119df344b26207c"],["/archives/page/10/index.html","115bc9268026e92cd49335bc961e7ece"],["/archives/page/11/index.html","4fd994a97a87c4019a84e1ac9d30042e"],["/archives/page/12/index.html","478fb56b3e5882ad75da7d8439b22e3e"],["/archives/page/13/index.html","e66733283acc8a767195b80151bfe79a"],["/archives/page/14/index.html","5c6a42e4078f1b4c78ce78817e43b529"],["/archives/page/15/index.html","cfd7c920fda8ae50111fe3aaccf6d030"],["/archives/page/16/index.html","5df02215eff1dc9afadafe0aa1437800"],["/archives/page/2/index.html","2c6d6e5ee2c6b620d5b07fc96ca07cb2"],["/archives/page/3/index.html","27e45754ff3ab9fef93dbddc32898b98"],["/archives/page/4/index.html","303a443164381a7838efd4ecfdf7b688"],["/archives/page/5/index.html","4e82754c37557b742adbd591f48d99be"],["/archives/page/6/index.html","23b4137d040368a9f135f50e13e04a9a"],["/archives/page/7/index.html","6a76bcc6d4decbedef18067a48c7221d"],["/archives/page/8/index.html","c74f79ac8ce1a69b5f316a4fd671b798"],["/archives/page/9/index.html","f09e60a62b51fea9672a896f621f7981"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/sny3.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/sny4.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/sny5.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/sny6.jpg","12f4fac008c279f4a1f41506995d038e"],["/assets/banner/sny7.jpg","bf0d0ce9dfe8b32ea465559b903bac87"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","0bfe64819dae29e3893fe4be04fd50df"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/sny1.jpg","92158f93aff91b4ea1b1ff8059f2e953"],["/assets/cover/sny2.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/sny3.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/sny4.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/sny6.jpg","0e1b91307940debd8b8cf90e3517268d"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","91bb2aa4523f6e336add358cec66ddc4"],["/categories/index.html","2f65d537f3b5e5c6a0fee202275c71ff"],["/categories/与敌同行/index.html","61c7a6185e9660cf16e37eadfc295f04"],["/categories/与敌同行/page/2/index.html","d371dbc46be8fc5608b82893e1c606c4"],["/categories/与敌同行/page/3/index.html","afec801710e86c1e9094ca33a313cfa0"],["/categories/与敌同行/page/4/index.html","d36e0042c93ba70e8ef6a1898d7ce4fa"],["/categories/与敌同行/第一卷-双镜/index.html","9a4ec3707b96247fd88d2652fcdd29ca"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","257014e6e3e5b711d0fdfde8c2da2709"],["/categories/与敌同行/第二卷-信天游/index.html","16cf635daef4fab28286158f4c9ca24c"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","17a1d37e4c8e6f87de53b3419bdf012c"],["/categories/乐园/index.html","9d49eab0aff19a457382dd488d12f81a"],["/categories/乐园/page/2/index.html","d6babcc1ca919467f5584567d54529df"],["/categories/乐园/page/3/index.html","6bed87cd91b0f8a3a62e75ddf929e662"],["/categories/乐园/page/4/index.html","c25d570da281a56100013be36f91fc45"],["/categories/嘲鸟之歌/index.html","6db61e884cb35bb8194751e6dc736c8c"],["/categories/失落的应许之地/index.html","37f91dd731822932a21456ea37f83cf0"],["/categories/失落的应许之地/page/2/index.html","e0808e90ad30d9cb35ad4e18bf3c4e35"],["/categories/失落的应许之地/page/3/index.html","374a96c471d3c14bedf147c4db076e5e"],["/categories/月照天山雪/index.html","671279e7bea34fa3a6a162c9be34e735"],["/categories/月照天山雪/page/2/index.html","2ba0b16897240ffc1d69a0de9a4c7591"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","30ad4ea1d3add220dfad565e3200c4d1"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","788bf7433de8f8bb7ae405b974f3cbbb"],["/categories/狂飙，乱飙，发飙/index.html","1ab445caad4b489ee46d36e4ba01f080"],["/categories/短篇/index.html","b8577421f8eb827533afaecce31187b7"],["/categories/繁城之下/index.html","0ed47285291c9311db0475babd81b31c"],["/categories/繁城之下/page/2/index.html","0977c3d6446bc1cf9adb0152dca9bc3f"],["/categories/长夜漫漫路迢迢/index.html","746f48984ab39be19efa32653dbdfc79"],["/css/custom.css","07ce82fbcec2c029ae9fe48e499691da"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","5c968b212fa3d89927cf1e5b9f962bff"],["/css/modify.css","401ec6e7c48b478295fb4b75e5791bfd"],["/css/var.css","f6ff1fbb2761ba2f7dcbd08e6ce974a7"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","f10f4591e4071564f55d6bee8032de55"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","4a701a0d999bf7c106ecfb1e5b4e4b2f"],["/page/11/index.html","c1e0775e7e3befccd3f1b43db5331e15"],["/page/12/index.html","e16faae0eec14a93d0a62985735742a7"],["/page/13/index.html","2713a195a9bb0aab5c1e30d2edc7afd3"],["/page/2/index.html","ec073903534924da00e291e8be1471af"],["/page/3/index.html","be470166e3cebfc0a4122e7753ac0eaa"],["/page/4/index.html","7695b27640ef387551343c8cad10e298"],["/page/5/index.html","199564069cc7af769717744f306fa008"],["/page/6/index.html","9051631688a19ba3d3076fddfb7f1a35"],["/page/7/index.html","5f703635f93bdc0488cb939a3ecbece2"],["/page/8/index.html","eb796728d17eb13fa8087d3e021f75ae"],["/page/9/index.html","6187fd4b6d7caba49b9e8a9a88c45fbd"],["/posts/103655302/index.html","a8183c044fef3bd8c5961f684ecc2dc6"],["/posts/1083795192/index.html","a0fd2965dead35758cf9bc2973f0ced0"],["/posts/1099216759/index.html","3e3b87cde2f66d2e03f496efc736cb87"],["/posts/1104021264/index.html","448407ed964085426151db11358d8030"],["/posts/1195093070/index.html","bd63019b4e809de3a36601c7ba1c7f3b"],["/posts/12506394/index.html","1543a7de1203b18b2b3b7ac613990c4c"],["/posts/1272692100/index.html","c08fa790c074040f0332900dc7114bb6"],["/posts/1304356361/index.html","b89845d836d1529282b53cb0fdadcf77"],["/posts/1315809802/index.html","d3c661b63974b7247d55bdd51341630f"],["/posts/1329165323/index.html","db356e590e3e18a1ed260d05d2a6e55d"],["/posts/1378666774/index.html","56a6daacd45ed9fb2b8f015f6b03074f"],["/posts/1400613118/index.html","805cbff9cd2da7a2dfc63177d88ff979"],["/posts/1407316490/index.html","b8c46691285053789cf97afe28d13844"],["/posts/1434824932/index.html","7c204ffbce0a9410ddc7582f19f0d3dd"],["/posts/1445707477/index.html","d85fc9be23b754b9c65a6e47253b15ae"],["/posts/1465373355/index.html","56be89239f2acd3275d0b9f3bade47c8"],["/posts/1500385898/index.html","5bfa1f11206c7b3746a976e5f8ce55e1"],["/posts/1681850936/index.html","575421d89fab611224aa590fc919bb0e"],["/posts/1688557772/index.html","d9dbfd5e42a505f2700d841c04989ddc"],["/posts/1710373156/index.html","3ca78526fe6b35a23f34e0d6cd10308f"],["/posts/1720998546/index.html","d0c3e60008b2f20e91e5d97a491338ec"],["/posts/173005120/index.html","bf2581e2a248d3a379e0970376af58a7"],["/posts/1758837205/index.html","81ba8ef988e0e51cdaaf9cc6d24e1ca1"],["/posts/1766000773/index.html","dfac4f9b337bba9153d64beccf417744"],["/posts/1845581652/index.html","9a605f2004dec59054ded8cb92db7e60"],["/posts/1859941397/index.html","a7a100c73a747db5b5ec9c274501b187"],["/posts/1988799958/index.html","e48a176f17214bd9092fcfc4c4b38bb9"],["/posts/2080722358/index.html","14a770927bc04599f292cb445c49cf09"],["/posts/2192148155/index.html","debcf569ffc42340c3942d74fdfcecd6"],["/posts/2229302539/index.html","dbc20a54a6d1167198fd3f2fa1de19d2"],["/posts/2303668433/index.html","47dfe39ef5ea90ab66cbb0882bac4078"],["/posts/2492968201/index.html","cdb7bbdd7e149cf61e2360776bb99a27"],["/posts/2531300956/index.html","c52272c3cf0f5e2d01252c59722ba888"],["/posts/2616893247/index.html","d45fef8465b0a75b94e80419f93cc9fa"],["/posts/2700096901/index.html","80ef1c563f4c020fd51d68ff210e22b2"],["/posts/2869217975/index.html","e26d900c10199fb1bf25cdb16cab4f49"],["/posts/2888068877/index.html","6a8d63ba0cf7bfacb3133ea5593fe669"],["/posts/2949714254/index.html","e6c254c12324b5be8ec5a203f84d6501"],["/posts/3002318373/index.html","378bd42b033ae74537e9d52800fd231f"],["/posts/3076558902/index.html","3a7f7aa1ef619062c6b8d538b0d97cd4"],["/posts/3147359483/index.html","48e64b928d44b1042922c76ce0e7af52"],["/posts/3191465731/index.html","7b66e02d89b5931b9a75cc838909c3b0"],["/posts/3197223139/index.html","76f6530f2d16a31702a8a638e1d184ff"],["/posts/320179123/index.html","fe10bcb569505aacab33566afa33791f"],["/posts/3300469459/index.html","6c5a69b50fb6bc5c8a27e65b6e53fcf2"],["/posts/330870226/index.html","ac1120e243324156c50414dd51b665e6"],["/posts/345507944/index.html","66de75cf40617fe49403d7b9be193ca4"],["/posts/3459697331/index.html","10b79416d623bd658cca73fc1f065f03"],["/posts/3489395119/index.html","6f951ffefd6768b15aaa60d69cfca091"],["/posts/3525870963/index.html","da0da08a9f1562ddd320e6c908b96065"],["/posts/3591144765/index.html","51a565f25daa5289af4b82697bb12b20"],["/posts/3602722865/index.html","54fe22351740eea06268e0a3072a88c8"],["/posts/3640780602/index.html","d3ac9bff3817634acbeddb703051d62b"],["/posts/3679626959/index.html","e2de2657a34a6ffe905c133c0489201b"],["/posts/3699598685/index.html","9575c98efb8f7eb8c9b251d7c7346b8e"],["/posts/3712900673/index.html","cf92ceaf811f3f362b233694ee73fbc1"],["/posts/3770599674/index.html","99e32b799250f37bca7f6f1cf88cfd6e"],["/posts/3788666127/index.html","b8811ab00cc6930583974f3db551548a"],["/posts/3935350387/index.html","31e82d21cbddc1e66285cafec0463669"],["/posts/3948778863/index.html","74cdf6c5cce1059e03a6a75ac0431812"],["/posts/403803703/index.html","0cc2e8eb8be2b1cf37614cd9d1339155"],["/posts/4041933047/index.html","a96a9d7ca78daf8d61447a46039e4f3b"],["/posts/4083669729/index.html","d1178aa085872700c4c66d475370403a"],["/posts/4110582124/index.html","d0edfd460d315675aee599479c527607"],["/posts/411074811/index.html","b12706bef0edf59145a22751f86c4314"],["/posts/4113963045/index.html","6fd5913eccfe78dcac9cfa2ebe92e584"],["/posts/4158435381/index.html","1b841ad295e39b266530dadcdfe5b52d"],["/posts/4163174813/index.html","334a2c0ee0f9b9e5dcb206da99019b5b"],["/posts/4185022581/index.html","d4a5e466ea7a426a5fe367833174390c"],["/posts/4192746113/index.html","a673694d95d2a6dbe82dc38690258b47"],["/posts/591853658/index.html","5c98af84084a0c789a8ffc57eb6d90d9"],["/posts/597050941/index.html","8501e396734846e27815a1c6b31c1b43"],["/posts/719776913/index.html","56f180689121d35263b0c7ce9afa5923"],["/posts/741067372/index.html","ecb08ff64045989d776875165353073f"],["/posts/776340048/index.html","68df257f161987f5388720aaddb2df90"],["/posts/888354975/index.html","c25d0cad23ba183cf49a0520f7a2fb0f"],["/style.css","87c62293a106256365b104b014db183a"],["/sw-register.js","4c9204c2902c6b6185cd837542964e8c"],["/tags/index.html","e835fa960512695df8ae139bcd79ac10"],["/tags/中国往事/index.html","991d12926ede394746ab23ecac330c67"],["/tags/中国往事/page/2/index.html","9ba4994f0e2bd0c4ff015c73205e1695"],["/tags/中国往事/page/3/index.html","5e03243d8ad409dae1fe646683ae49a8"],["/tags/中国往事/page/4/index.html","763fa7919325e7ec84122eb0ed583ce9"],["/tags/冰与火之歌/index.html","c17bdaea3609772a74c5239e47dbe0c5"],["/tags/冰与火之歌/page/2/index.html","92b28548da9f10fab0d019a45f98c751"],["/tags/拍案惊奇/index.html","388b7129343bd992e2c53a55b00d7787"],["/tags/拍案惊奇/page/2/index.html","45aeaaaedeb8f454681e3d1307380761"],["/tags/指珊/index.html","cbfc0bcaedb56797c166d1021664a04e"],["/tags/指珊/page/2/index.html","0b163919aaac61117f310ebd5f7ef48b"],["/tags/摸鱼之作/index.html","9feba2a9e8eb3f1d26e3bf35316b3b27"],["/tags/日常/index.html","d910fc2220f91d46c1aac9d7288e3429"],["/tags/日月凌空/index.html","6717f085fbd48a250bc593ff099c8fbe"],["/tags/柠梨/index.html","b0962ab0d9e26ac78040b12a18290b7c"],["/tags/柠梨/page/10/index.html","2ebe4dd8c87c72934f0a9f3aa3629514"],["/tags/柠梨/page/11/index.html","1016c649628801f4550770c836ad938a"],["/tags/柠梨/page/2/index.html","4389f55cb6e42b482fd7840a440e9102"],["/tags/柠梨/page/3/index.html","36e67788a6d92d527e0f071a06850c4f"],["/tags/柠梨/page/4/index.html","f2ed099cec4f4ab9550b17ce0a9c2fb3"],["/tags/柠梨/page/5/index.html","1ed6a0ef840ad7f376826ac870650306"],["/tags/柠梨/page/6/index.html","b5a5f395330cf7f1c6804ef00c5630a9"],["/tags/柠梨/page/7/index.html","29901d3a68eefde8a54efaa307677dba"],["/tags/柠梨/page/8/index.html","490357ab4f0ae7ee01a60dc21c2e9a95"],["/tags/柠梨/page/9/index.html","a35f78e8a4442b3b0f0eac3f1f6fcea1"],["/tags/残酷法则/index.html","9677765313961388a47c906b4b45b3ef"],["/tags/残酷法则/page/2/index.html","05a55b811dedcde701f6fe7b50070149"],["/tags/残酷法则/page/3/index.html","58e31063934566e316acec5f292f1f86"],["/tags/爱，青春与死亡/index.html","ea909b01e99c04d6c15907f65c4f24a2"],["/tags/狂飙/index.html","4320995c4d4ee88029c2a9f0c80178a1"],["/tags/都市传说/index.html","cd169284ced5e1552153283c52314b5f"],["/tags/都市传说/page/2/index.html","5fccaf0b258b2b22d315ada5c98dd29c"],["/tags/都市传说/page/3/index.html","70042a9887d448b005211e2111716e6a"],["/tags/都市传说/page/4/index.html","07e35215e14acece54eb0c4b548737a8"],["/tags/镛武侠/index.html","ad502d02f0688fd06951b39385eebe7c"]];
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
