/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2617e74c84db890af7c41ff8013fb93e"],["/about/index.html","110f9daf3e79286fcda86fba05063d62"],["/archives/2024/07/index.html","58445854d15fed594ca890465d540e76"],["/archives/2024/07/page/2/index.html","1e39eb456af12f387a9f770cd7219fb3"],["/archives/2024/07/page/3/index.html","350cdd7f213b533fbf07ddfb8ee1dc31"],["/archives/2024/07/page/4/index.html","4704ed283cac124c7c0ea561a6523536"],["/archives/2024/07/page/5/index.html","45c86e0c2a1c82eeb16b505714f3f6b9"],["/archives/2024/07/page/6/index.html","f8ccf8d2d983b20d1b8a471280cc4225"],["/archives/2024/08/index.html","2fab52ebacce5b77a9fff456e720264e"],["/archives/2024/09/index.html","7eb9ebb5560bf8ce788362dad64c0ed0"],["/archives/2024/10/index.html","eb55dbff60b73df5bf3cfbb28bda5002"],["/archives/2024/11/index.html","a7348691ff5df56133273db45cae99b9"],["/archives/2024/12/index.html","b22ab3b7a26837c54448fc82bdcb5988"],["/archives/2024/index.html","f1172b242c9bbb7f8456c3a902f1c944"],["/archives/2024/page/2/index.html","8bea6c5478e8f6789bc4a72f14435634"],["/archives/2024/page/3/index.html","b774202c77272fb0e250fa25502b53a8"],["/archives/2024/page/4/index.html","5f536e0ec7aca77c6e7c23ff36b23081"],["/archives/2024/page/5/index.html","7f4b841bb9fb4f599a43c0f6865e0e76"],["/archives/2024/page/6/index.html","76ea24e150bf59565a8fbbbc7dfbecd6"],["/archives/2024/page/7/index.html","b4a64a27a9650dd9bb6577def56c15fe"],["/archives/2024/page/8/index.html","113b3349e39951cff3c15df61e367a56"],["/archives/2024/page/9/index.html","d403d9094746ac602ebf76c300c8e6f8"],["/archives/2025/02/index.html","4e7051d5c4ea76c59418be42f3444281"],["/archives/2025/03/index.html","4caae3205b74971bf401c1b8f2864897"],["/archives/2025/04/index.html","8f2afd9263ef0d916db4a7739e686976"],["/archives/2025/05/index.html","297479f7c82a8cc9b0bc8f14a3d922f8"],["/archives/2025/05/page/2/index.html","18a17482c98aab9d84dfdb3eb1fdc5db"],["/archives/2025/06/index.html","ddabe58cf58dec43ee8319bc38f797fc"],["/archives/2025/08/index.html","da1c733af3fd1db41758bc19b74dd8eb"],["/archives/2025/index.html","f54146249291784c2090048bbfb7ade5"],["/archives/2025/page/2/index.html","ffde416fca57449de0dec99ca5bf6f74"],["/archives/2025/page/3/index.html","37ad38579e840e89aaccd06785135965"],["/archives/2025/page/4/index.html","8d81f755587e588f6974a64646e7727e"],["/archives/index.html","7d4e2c63d8ee5d56989e9084ce32cfba"],["/archives/page/10/index.html","e24409346c21e088b0d904b2292f650e"],["/archives/page/11/index.html","73e46eaff9cbfad0a89dbf1ea063793f"],["/archives/page/12/index.html","35686cb9a2150be9977f00610761f492"],["/archives/page/2/index.html","8cfa48b1c34d19c76623f3bf080f4ace"],["/archives/page/3/index.html","c00cbc2ad8b3e79262f85dc2d37a85a6"],["/archives/page/4/index.html","b73b2b0333f24e4973c2f4a7fe1f3a0c"],["/archives/page/5/index.html","4a6c4f01c29d35a6f0e87aa7c3c1cb10"],["/archives/page/6/index.html","7c97c82643db7aa472b87943be7094e7"],["/archives/page/7/index.html","6b5a20e5c26a0e7cf1164ab78f610566"],["/archives/page/8/index.html","87edb76d5328892b8483771b71aab0f0"],["/archives/page/9/index.html","496fe1888b4c9ba2c5a4c22894e5f63b"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short11.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ly1.jpg","c798ae9035fe2d26036e82209e0ef727"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short16.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","7cb9e04b015d6cb4f8d5712241b5d15d"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","9e208b4bcb7812f04a0c8b7df10c410e"],["/categories/与敌同行/index.html","601f8a6b52882e0f4736c97541403225"],["/categories/与敌同行/page/2/index.html","0e4c17adab158efd4de8bc68b1ea98e2"],["/categories/与敌同行/page/3/index.html","1604c5b91341ea4501871ad7a5150364"],["/categories/与敌同行/page/4/index.html","f7c439cd955827790560682c4a14de9c"],["/categories/与敌同行/第一卷-双镜/index.html","e991f8dca5ebe30a72185725e4d5bf01"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","7042b14ad85c258cab375a2c984c0ffd"],["/categories/与敌同行/第二卷-信天游/index.html","e0d36bd7d55af8eca7dc5a82b7b502a2"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","1858ebbcd6ae5e83a26c1dfd2f482743"],["/categories/乐园/index.html","11da9a164f9727df4cbb1fdd31d96146"],["/categories/嘲鸟之歌/index.html","2c34fc8c3ed3f6aac46f5a508f4fb8c8"],["/categories/失落的应许之地/index.html","103340f290117472e6d6b36e10c1cb48"],["/categories/失落的应许之地/page/2/index.html","1e0e24e6d016622533add36bd2d13444"],["/categories/失落的应许之地/page/3/index.html","7e2a100c4bce8dd1ed773452c8161e32"],["/categories/月照天山雪/index.html","c5a685596a08300efe302f73fca3743d"],["/categories/月照天山雪/page/2/index.html","52269da4527f27f11b04f2947bc45360"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","36d41cd12599e0195eab30aa25731ef3"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","4ff84f21b3779a7e737f01fda8269cc3"],["/categories/狂飙，乱飙，发飙/index.html","d3ba38e975398b9ff718fcb870440159"],["/categories/短篇/index.html","396f262e95084fe20dec13bf9ae61d79"],["/categories/破戒/index.html","314ff9c1e59c6ab588935b1407521d4e"],["/categories/繁城之下/index.html","d0d5a4f90de7b607c21a64c0095097bf"],["/categories/长夜漫漫路迢迢/index.html","72596b761f571229abf8cf4ac0d95880"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","275ac564c63c8426a15e9bc8ec67f7d7"],["/css/modify.css","823ac2f8754fa05c0dedbdbae29dbeeb"],["/css/var.css","458169e200bc80215f67ed99c1fb823a"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","7930d30af6947c246d2bff57ff5ddffb"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","d39c61812b0605e1b36f3a9e9d2666ea"],["/page/2/index.html","831566b8b25515154185fdd412909bbc"],["/page/3/index.html","8c850cabd27d0f80fbaaba0c9d82e176"],["/page/4/index.html","8ea6a7305c4c1e819b8ecf82cdb04b2c"],["/page/5/index.html","4960015cb1ffda0e64a88917d8a7d452"],["/page/6/index.html","7c3b0797f91859af6bc055b2606cdaa3"],["/page/7/index.html","2e7628192e7d1e020e81d40589b22141"],["/page/8/index.html","93e9c9227836d4b988f75a0a142e0ee8"],["/page/9/index.html","5e2e3c40432c3bd834f74317490158c2"],["/posts/1083795192/index.html","bc13634f367ce3fff7374a03ac2a922a"],["/posts/1099216759/index.html","dfe7ae3526ba6c92a9ea7b531452618e"],["/posts/1104021264/index.html","2acd6a0da9b0c97ed622bb362efd3cd4"],["/posts/1195093070/index.html","9852f82a7f4450af88469f7ed4e5ad89"],["/posts/12506394/index.html","bb6133e50b297a1e01dab7b054c5eede"],["/posts/1304356361/index.html","80e85608b66996f59e9d1bc5fc4045e6"],["/posts/1315809802/index.html","ac7e7f26fd9f4bcd4a9b7592e9318351"],["/posts/1329165323/index.html","47fac8aa1ad1e6dcd7abe030af0a6724"],["/posts/1378666774/index.html","85dd529c86c5401372d7ba27a3657e69"],["/posts/1400613118/index.html","8d1ae35229f0acaf1b6189f134db97e2"],["/posts/1407316490/index.html","176d97f74cc6a8dfff65377b40e8a9a3"],["/posts/1434824932/index.html","ea56510d07cb150c96f6c07ce4a3998b"],["/posts/1445707477/index.html","77191486e9634a3d8120c22781904c89"],["/posts/1465373355/index.html","cc47bfe979badb0e17822da0013e2047"],["/posts/1681850936/index.html","36f98d205799a4dbe9cc56965657b482"],["/posts/1688557772/index.html","9493f5c306af26116c8c30a7b607b0e1"],["/posts/1710373156/index.html","8a7783ccc5de51b6b87b16721e69187e"],["/posts/1720998546/index.html","038937320e32fff249297562efa68f1f"],["/posts/173005120/index.html","55f891e79b85c4db002d3d079f9d1c60"],["/posts/1766000773/index.html","2556b0f2e43a3cce2cb74e0ccc77cecb"],["/posts/1845581652/index.html","c6c924c6a1d7b9d3fcd3c60d64181118"],["/posts/1988799958/index.html","28765cc3d74f9e79b2de063be5fff549"],["/posts/2192148155/index.html","5569ae93f064ba96ab565dbab5e10e6f"],["/posts/2229302539/index.html","5dd5f055caaf5e2d33629cbc3827dfb0"],["/posts/2492968201/index.html","66f1127f1b7cc38888329747205f2d39"],["/posts/2531300956/index.html","edc18a0b0f3d65c8bd05ff7a18630681"],["/posts/2949714254/index.html","c7cefdbac81e12286593f825c88b04c2"],["/posts/3002318373/index.html","d2e3ee28a5cc077e40df7c4672d3b69a"],["/posts/3076558902/index.html","de3e9f32abc4e00e4bb0013468720ebd"],["/posts/3147359483/index.html","0432add80cbcb0190ba995c7823e4dee"],["/posts/3191465731/index.html","1c467ef4c9563a2d176aa702404c613e"],["/posts/320179123/index.html","0d810d54dd07acc95d9ede3d29d3106d"],["/posts/3459697331/index.html","28d54a5808a704c042fe12f6d17cb6d2"],["/posts/3489395119/index.html","5007336e03833f0ffd07480cd485f976"],["/posts/3525870963/index.html","621fce02a38f65ac94c300fa1eb2d79d"],["/posts/3591144765/index.html","214ad7fcfd58a32df40854ad918518bd"],["/posts/3602722865/index.html","42bf19587f5415213318119f6026c09a"],["/posts/3640780602/index.html","e632703799b72465be2c9fb8a1b1d025"],["/posts/3679626959/index.html","b782c10ef01412d466f02f2a56945406"],["/posts/3699598685/index.html","b1fcdc0eb60bfe87f75bd95fe9de257b"],["/posts/3712900673/index.html","20f8fbb9b213649720bea20d958b9081"],["/posts/3770599674/index.html","c7391923ed8b22e5f52e2d21489fb76f"],["/posts/3935350387/index.html","5272e6490d52a4df2459138941dc190c"],["/posts/3948778863/index.html","719ea52f202e70fe81b283de5889a67b"],["/posts/403803703/index.html","539a10d1fa2273f209102601a34d772b"],["/posts/4041933047/index.html","7031b2c56470da5730f85b130550c229"],["/posts/4110582124/index.html","8c1cf0f9a8aef7f5fb5d4b3e6306c520"],["/posts/411074811/index.html","b52ad4b8fadcc07f333e031304a47bdd"],["/posts/4113963045/index.html","938016609cbd4e8aad4bbd5bdbf9b06e"],["/posts/4163174813/index.html","06bc46d2c6c1be428e067f90baaa462a"],["/posts/4185022581/index.html","79179fe5b6026cc0f062168abf2c11c5"],["/posts/4192746113/index.html","f9afb08f6734b9f44d72b4f3ce807520"],["/posts/597050941/index.html","c794d2944a93ab1355db1b3f3417e557"],["/posts/719776913/index.html","9f94a630da7f4635118cff10052242c0"],["/posts/741067372/index.html","ec146b754319f042a7e903bf7af85b55"],["/posts/776340048/index.html","22d2f81e16093d6475118b3e8fe107b0"],["/posts/888354975/index.html","7b8c34ac84012f6240c3a3f67b9209fd"],["/style.css","fef0ad9dddeed152d4986aa7a01db4b3"],["/sw-register.js","0223037791edae48aebbc12d1735c061"],["/tags/index.html","880be7ac27089212b79de12fa900b2ab"],["/tags/冰与火之歌/index.html","8319da711e1bc02e657cbe624d9755a8"],["/tags/冰与火之歌/page/2/index.html","89b6f60bef85d2cdc80c0d24a4a4664a"],["/tags/指珊/index.html","e3f15d6a36c33b0cad7f4d57b6c3bd62"],["/tags/指珊/page/2/index.html","a65695f2f872cef103076f704e85a847"],["/tags/摸鱼之作/index.html","48807e786ae45e8b3deae469431a79be"],["/tags/日常/index.html","31e5e0c97e1207ee018ba40b67e06fc6"],["/tags/柠梨/index.html","e4f4e3944facee63c0510a65aa937749"],["/tags/柠梨/page/2/index.html","c85b18892a8c97002a4ee16cc3bd4752"],["/tags/柠梨/page/3/index.html","a7c8daa302361a99627b8dd965c95d12"],["/tags/柠梨/page/4/index.html","927bb165854d605ac7ca947502469176"],["/tags/柠梨/page/5/index.html","70424183f450a8ccf42588b3073cbe58"],["/tags/柠梨/page/6/index.html","238fc3bfa70e614e254a2d1ce3d239bb"],["/tags/柠梨/page/7/index.html","d09a7340c01946171c3da3ef502874f9"],["/tags/柠梨/page/8/index.html","bf393448b08b13ca633970ad172d1ed0"],["/tags/狂飙/index.html","b32ebc0945ac731a6b61f734d4701949"],["/tags/镛武侠/index.html","bb545a79234c3ca62e4f97226c6bde8e"]];
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
