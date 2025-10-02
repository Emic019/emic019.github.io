/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4ad10a273c1c8c22047f37c7bb2d779a"],["/about/index.html","49ec8e5c61fba2a73cd8ba3300df4461"],["/archives/2024/07/index.html","022e6c46cec9b1706b53dc3b493a3d61"],["/archives/2024/07/page/2/index.html","e293c144a7bfd89f5b2d43349c74d122"],["/archives/2024/07/page/3/index.html","eebc5fa466b88a25f698e2c769ca66c9"],["/archives/2024/07/page/4/index.html","20821dcc52204b25f39c0dcad5c1ab18"],["/archives/2024/07/page/5/index.html","147d2f00d0a911e3603b3d216ed04941"],["/archives/2024/07/page/6/index.html","dce4157821227a7f87299fa311fbb715"],["/archives/2024/08/index.html","31ab19a4932d00b795d2f49f36032ce9"],["/archives/2024/09/index.html","04541e98b668cbca03d2ebe0c4637173"],["/archives/2024/10/index.html","f87b4cb79b776f3014565133f4ba51f0"],["/archives/2024/11/index.html","c6c8473f01335150e22b7dd28580d779"],["/archives/2024/12/index.html","4f5e31acea4a2d3b93d2bb61c68f6dec"],["/archives/2024/index.html","72cd5a154e4d82bdc256b8be37e5a5ce"],["/archives/2024/page/2/index.html","3df6829e2fca9344df37171d6483bcd6"],["/archives/2024/page/3/index.html","31e1134022eb97483151f49b99ceb1ea"],["/archives/2024/page/4/index.html","44b7600d8d444a7f3b6c05661aa0a390"],["/archives/2024/page/5/index.html","4fadfa80ea40158487f062ee72f03001"],["/archives/2024/page/6/index.html","8989ac4f0d910eb44b5a15588ba9dc9f"],["/archives/2024/page/7/index.html","542c281c5a5b8741e997c663bd25083a"],["/archives/2024/page/8/index.html","7cae67025479954b2cb7b953c0580539"],["/archives/2024/page/9/index.html","215635487ce77af21618e0cfff1c4365"],["/archives/2025/02/index.html","e759c2ce444ff13562e935859ab72bf8"],["/archives/2025/03/index.html","f7985a9a12d9e1331bb4d5518948b486"],["/archives/2025/04/index.html","aa64e2e18dc2549f2b736f1402463790"],["/archives/2025/05/index.html","b0a01828f66ce5bcf77c3ed8f40fde5d"],["/archives/2025/05/page/2/index.html","f25a149c38c7c02d14ef2f0d142fe740"],["/archives/2025/06/index.html","fd77a643829c9190e07b4603d9529cc3"],["/archives/2025/08/index.html","e548abc0441bf264cc2e0f3ac02c66e0"],["/archives/2025/08/page/2/index.html","559099db5357573818c09e898fce5d7c"],["/archives/2025/09/index.html","7324b4cb0cbf18d77c9f3f55dadee959"],["/archives/2025/index.html","921b2302a08910b7868807bc9270e10f"],["/archives/2025/page/2/index.html","c6c0aeb0d0845eef497979be11be376a"],["/archives/2025/page/3/index.html","987b7af831b0eb48644257f2d4a307c9"],["/archives/2025/page/4/index.html","b6eaab446040f5aa91bc4427e0af2aa9"],["/archives/2025/page/5/index.html","138b1481bee57f645a39a4d00a833a98"],["/archives/2025/page/6/index.html","57b531ffbac529e5dca994ac91ffd0f4"],["/archives/index.html","20eaec6abdb7c8dfa814b15161504620"],["/archives/page/10/index.html","1a9632516066e497f29e00b9f4ba62de"],["/archives/page/11/index.html","320efbded3a90c13b82bc1834c3b2e38"],["/archives/page/12/index.html","02842a61a5ca5cb5796b1d3035611aa1"],["/archives/page/13/index.html","31729b8eaae5c30e8ce7a9dd4b655de3"],["/archives/page/14/index.html","7d551e3782c0b7e45a9b7aee1d96d551"],["/archives/page/2/index.html","d5649990db17f85b7465be3f86a35c77"],["/archives/page/3/index.html","c7ffeccab12f6a21f71c32d5f0040b22"],["/archives/page/4/index.html","aaec80af66ef9da3bff271e0b735a876"],["/archives/page/5/index.html","22eb31b03be5880b5036c620df82afa0"],["/archives/page/6/index.html","363b370ff0cca0d5129f765d031d3f40"],["/archives/page/7/index.html","bc46f5216dc032811fbfdc463cd358a9"],["/archives/page/8/index.html","e0e4a827efc8fe251d35d47d83ccfaab"],["/archives/page/9/index.html","39e64cd36ba3072d5b784508bd3dbcec"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short11.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","790c2083e998800b94554681df396c0c"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short16.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","91bb2aa4523f6e336add358cec66ddc4"],["/categories/index.html","a8644ec5893af3c4d872add12b0ef0ac"],["/categories/与敌同行/index.html","942b2f359842307f14ee5f18b447edff"],["/categories/与敌同行/page/2/index.html","3c33a8279d6707c5aecfa29b939d44d6"],["/categories/与敌同行/page/3/index.html","97eed27590fa0ed8b789830066861227"],["/categories/与敌同行/page/4/index.html","181dd12eaa251408d4f9943de98473b8"],["/categories/与敌同行/第一卷-双镜/index.html","b061150074e9e537efef9f46eabf4499"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","52f629e066995e50d3a9f0a0b8e4b48c"],["/categories/与敌同行/第二卷-信天游/index.html","fe597d4f9b2459afd348deb742288db9"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","1c959f781d741fa7640f1c6fd96816fc"],["/categories/乐园/index.html","65ad4b36e82d12f2be28e07285b1f96a"],["/categories/乐园/page/2/index.html","41225a4cbe7b6f5c6bece45ecd9cb1c1"],["/categories/乐园/page/3/index.html","1b4625198dbab5e5db780dde1e07da1e"],["/categories/嘲鸟之歌/index.html","5f10d5d681d10b2a0612a8b12ed925d0"],["/categories/失落的应许之地/index.html","e52cfbe9f9e7a3055cb82bccf0e68b87"],["/categories/失落的应许之地/page/2/index.html","de479fa7235799b495249cffa797c6d8"],["/categories/失落的应许之地/page/3/index.html","50b5f51edd1cd00cb361782f8fc32844"],["/categories/月照天山雪/index.html","d08b30a365eefc3f9c5dc028e43fafa7"],["/categories/月照天山雪/page/2/index.html","156ce5bb9f2765068acce9699a30d5e4"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","acea9383c18755afceb9aeac098aab21"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","0a6756df67a4694dae6f8cda323331b3"],["/categories/狂飙，乱飙，发飙/index.html","fd4d0ed4e7e5379261399530a45d283d"],["/categories/短篇/index.html","4aeaae01f5d9b3fe68004f70e06179eb"],["/categories/繁城之下/index.html","254b86bacb21935739ce566c78340240"],["/categories/长夜漫漫路迢迢/index.html","6df6e674ea1e7c9ad1735f1b34cee597"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b45ff3aeb2cef79464b4124bf3e701b4"],["/css/modify.css","eeb36ec70801603f1631e29679f41316"],["/css/var.css","f45e4278b41c8d5681ed3876da3d23a5"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","02176108e9cc1ff6ed65d694b0f964fc"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","071a18efdc653ac191722763370a82ea"],["/page/11/index.html","2e9f1df57a2063ac722d689af6be14f7"],["/page/12/index.html","7289bf3910e57d4ec8d1dd6fa1416033"],["/page/2/index.html","3370809fab27e52e5c61cc36a6955afc"],["/page/3/index.html","4cd97e86e716fb3dde0c921dea72b5d0"],["/page/4/index.html","26cd8aa179bf3c5e789231befb6f7b91"],["/page/5/index.html","f4ac6a4da68706f953e1bdd366a83465"],["/page/6/index.html","bcde1246a4d902bcb74ebf9ff8629c71"],["/page/7/index.html","27cdac4bab61a165d28ef78d2d86dbf0"],["/page/8/index.html","77d7fb581febb1ad1fd93f6691bf9792"],["/page/9/index.html","6d0dfa8b2fbfe798b339001f22606e07"],["/posts/103655302/index.html","b45225fa614641a8aa45446d22bed174"],["/posts/1083795192/index.html","7b0d295891c4d0d55c0c8fbe85448a3a"],["/posts/1099216759/index.html","a04bd35123959bb87a8d3383dfa2ab14"],["/posts/1104021264/index.html","9bbcc11efbe68983717ef54e25138035"],["/posts/1195093070/index.html","998cb3e406898f114da397ea7d2a24b1"],["/posts/12506394/index.html","0c1e93e4d89a3e379a98a71d21875f47"],["/posts/1272692100/index.html","b5b161d5c64f5fa61808894d4db16e5b"],["/posts/1304356361/index.html","4f5a0f3e481e05026b7d62166727b1b7"],["/posts/1315809802/index.html","d0c335f56b07e2c3dccf693b6547f4df"],["/posts/1329165323/index.html","822bd488ec08805ec424b230601f3c36"],["/posts/1378666774/index.html","14bda0b56c76e5f6fa77dacba26680d1"],["/posts/1400613118/index.html","92c8dc50a88bb773f4cbe4c20762de1b"],["/posts/1407316490/index.html","5714608cf349eec89d76c0fcb036ce76"],["/posts/1434824932/index.html","3372132570a42119289ca8f9650662a8"],["/posts/1445707477/index.html","44be0178a8d59ffc0bcfe24dd064200f"],["/posts/1465373355/index.html","35192a1c198c7ef0306694f5c17d270f"],["/posts/1500385898/index.html","fe4fe0b873dc344c9bff13842eef6b30"],["/posts/1681850936/index.html","a68168d42e7edfb64b61ae3ab22861e9"],["/posts/1688557772/index.html","2ebf8a716b222f9d3e829fefb46ce0c9"],["/posts/1710373156/index.html","0f26a1e6a11ddac9ced86eebcc2e7340"],["/posts/1720998546/index.html","e01689c7ba936e2d795814b9312da0be"],["/posts/173005120/index.html","2399c77b89d74f03889a05b45fc9999d"],["/posts/1766000773/index.html","cf1780c0bc4e1c07368bb91682fd7d17"],["/posts/1845581652/index.html","198f0d77cb33edc96a7261cf43b0a8d8"],["/posts/1988799958/index.html","9e0a40ab52a01516034161742519fec7"],["/posts/2080722358/index.html","5da7b59643e5e402f0571b05f078360f"],["/posts/2192148155/index.html","e5e3538a4cc3378bac551a30a2e441b0"],["/posts/2229302539/index.html","bd39efc62f4ddf4b3400ae6d8a9c84cd"],["/posts/2492968201/index.html","5c02337778a616bd280eabba28d4e301"],["/posts/2531300956/index.html","b65f7ec20891873dabef551fefb9dd01"],["/posts/2869217975/index.html","4ed339146c4e939b4d70862c9efdef12"],["/posts/2888068877/index.html","d7bf80283851fa2325624a9b7c73f0c3"],["/posts/2949714254/index.html","0a00e87cb10dc7574a9fb2fa9ed23f91"],["/posts/3002318373/index.html","bbcae94dd3b381ea1edde471476da59c"],["/posts/3076558902/index.html","413a3dd07ca18ff7b2d705ccfdb39742"],["/posts/3147359483/index.html","be00edd078626dd966338eaedf2e0d75"],["/posts/3191465731/index.html","329c0aed76351cb452c758a7542ef12e"],["/posts/320179123/index.html","9c9c576f4895643b62dab034d8072527"],["/posts/3300469459/index.html","c955e394fe61380e3acd9d937915032b"],["/posts/330870226/index.html","d2d6f8a6116c26fe0f3a2f27a92abe63"],["/posts/345507944/index.html","90944e35585d4793d5ba47c311a89738"],["/posts/3459697331/index.html","3f33d59d859d90eb367a74b022c697c9"],["/posts/3489395119/index.html","d5b223c30be34764bb3a64a50ae98475"],["/posts/3525870963/index.html","2e886202971f21e8eae2e2d72b2df0de"],["/posts/3591144765/index.html","be843e5da2fcedbf1cae63db33bcfba1"],["/posts/3602722865/index.html","3d177a423e1817cfaa6561ca3d13bf3f"],["/posts/3640780602/index.html","f99762f712c4bb95fe482cd84fd0ce8e"],["/posts/3679626959/index.html","f9c1f2b227ec310dc4ab9a1e3aabc752"],["/posts/3699598685/index.html","0f8fdfbddfda20e5633c9036d04bcda6"],["/posts/3712900673/index.html","04a8d3a1e66e4f62b01e3f01eac56822"],["/posts/3770599674/index.html","05c2911abe469fc48ad64caa26d84c04"],["/posts/3788666127/index.html","42bd174faa8ff8c5fafe933b8cfed98e"],["/posts/3935350387/index.html","bf0c3cdf8acc04cd9b0cec96006efce8"],["/posts/3948778863/index.html","036d15f6a414a259fbdf0389e1abcf1f"],["/posts/403803703/index.html","e26d1b28aaa5b30d557ad3337d1b285a"],["/posts/4041933047/index.html","705abc558fb3ddc2b4d18bdd08dd4d56"],["/posts/4083669729/index.html","6af3a6021d294cad812282f1b55640ff"],["/posts/4110582124/index.html","edbc992b47760e3ab0eb7a36eaa12d45"],["/posts/411074811/index.html","43114fa07478ad43ff9f811a618b2379"],["/posts/4113963045/index.html","826c7313002f8052eae414910045f5ed"],["/posts/4163174813/index.html","a7f2cc33f023513e68fbca07437b2fd1"],["/posts/4185022581/index.html","1dd44844b72cea0c6b1ea7fdfb989630"],["/posts/4192746113/index.html","8cef4e1be9f8e38425f0375703be3af6"],["/posts/597050941/index.html","daaa593cfaac7ea4cf45112e8202e57c"],["/posts/719776913/index.html","d504ce56878e78098fbb34c4c7d3d644"],["/posts/741067372/index.html","0917a08dc8b67ce1d96d897b5b131f72"],["/posts/776340048/index.html","37d14efef78f3905cf8eb8b435f3e744"],["/posts/888354975/index.html","9dc03a034944bf17cac32a970e175ba3"],["/style.css","2cd707600fb43da0c6d89f9a3e2a8d49"],["/sw-register.js","c7d76c232c0e414a429ee1ea2718d3bc"],["/tags/index.html","a1f3f8d7db635fd60912dd66e17a2056"],["/tags/中国往事/index.html","ed062d38681033f8835fd2f3bfcf5182"],["/tags/中国往事/page/2/index.html","c5c176ae31d821d4e27643935918483b"],["/tags/中国往事/page/3/index.html","0d0386037bcea47d8b44de84c571b9c6"],["/tags/中国往事/page/4/index.html","5e070f0810c4344229903d31ed4198fd"],["/tags/冰与火之歌/index.html","1efcd6461abdbf64270d7a38a3a668dc"],["/tags/冰与火之歌/page/2/index.html","f6312343e362ccf063f6ab618e9b8902"],["/tags/拍案惊奇/index.html","8ad4326805b34e9310750801dd54991b"],["/tags/指珊/index.html","2e6198da72972c1a4c7db0a74816cdd1"],["/tags/指珊/page/2/index.html","1ed41175f8d4e14ef4b6deecbe12ab0c"],["/tags/摸鱼之作/index.html","97dfb238e42dd6b7624781932170d34d"],["/tags/日常/index.html","bb0167ce4d2ba0da626d71598576b698"],["/tags/日月凌空/index.html","bf96b28e7ae9a3a46ff8151bf1e68b14"],["/tags/柠梨/index.html","30a9ec0462a8d1f54aa12a55ea315998"],["/tags/柠梨/page/10/index.html","38c7a0f4f8ff9fdf75953c726f3fe180"],["/tags/柠梨/page/2/index.html","541b66aee9a3afeaa395e10deed14e75"],["/tags/柠梨/page/3/index.html","7ce6b1ce57cdcf1d19eaa790a2d91e4d"],["/tags/柠梨/page/4/index.html","3827e4194fe1dacde330da1b4c38aa26"],["/tags/柠梨/page/5/index.html","b8ec6745b07dfbacaaa2c13548bd2a17"],["/tags/柠梨/page/6/index.html","5aa457e7cf492e631e7d80be9ee3fead"],["/tags/柠梨/page/7/index.html","bb57face61e092494e351c513d284507"],["/tags/柠梨/page/8/index.html","4dda604d15bf467fa2c67497f6e9688d"],["/tags/柠梨/page/9/index.html","f741f1b05c91531921b93b5fe270a095"],["/tags/残酷法则/index.html","2f9a6b709b5c097187ea08a1d86ebe5a"],["/tags/残酷法则/page/2/index.html","82bfdb0f82f7857e5ec31286ab010c34"],["/tags/残酷法则/page/3/index.html","ad4231d8557e55e8a2b6876e8d926295"],["/tags/爱，青春与死亡/index.html","0eab46660b0f876c2af9415713f6de0a"],["/tags/狂飙/index.html","0f4757e60cc5c1392722c035e5ff7064"],["/tags/都市传说/index.html","72c323ed7545566637af3c7514c098b1"],["/tags/都市传说/page/2/index.html","3e77cc771d781b700fc2458451f4c0b8"],["/tags/都市传说/page/3/index.html","bddff252298ab1727055fe60bd4efbe0"],["/tags/镛武侠/index.html","c69a5ffb046badbdcd4a6e5ecf324e18"]];
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
