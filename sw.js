/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","64a1d75447e3a0e0cb6781086875d6ff"],["/about/index.html","a16a26f21c852d242decfa1b3787a707"],["/archives/2024/07/index.html","911748b0ed39df6b178acde9b7e0dbe6"],["/archives/2024/07/page/2/index.html","336d6e29633c65452cff80e9fc434dbf"],["/archives/2024/07/page/3/index.html","f65347d20b4ecece09868b8375bae902"],["/archives/2024/07/page/4/index.html","48803dcc8bf2912375058761eeb91379"],["/archives/2024/07/page/5/index.html","d4a17b8f470f25cef05d57be35c0de03"],["/archives/2024/07/page/6/index.html","c516110a8bd7e31f362a714bac065fc8"],["/archives/2024/08/index.html","d21edfa107fde84adb317d6594c6b736"],["/archives/2024/09/index.html","7647b66b26eb2cd491d74d04dd7d7ac1"],["/archives/2024/10/index.html","e8bc79542f0412f8f1e94a20e485ddfe"],["/archives/2024/11/index.html","9fa0a5e6f0c17ebc719999f81c956896"],["/archives/2024/12/index.html","a6ee571ba1c32be9f934b19b3cffe83e"],["/archives/2024/index.html","cc030ff7d0e0054577aeaf75571e4b41"],["/archives/2024/page/2/index.html","9bcb2f6990bf9a846623b5a699f048f9"],["/archives/2024/page/3/index.html","a9fa7a230e08b13711fc2765a7adae5c"],["/archives/2024/page/4/index.html","2b958e2949ed3fdb0f453920c234b0d1"],["/archives/2024/page/5/index.html","634a66028b9daab35413e0702c828a12"],["/archives/2024/page/6/index.html","d8bcbc4ae41a30b89163efeb3329f491"],["/archives/2024/page/7/index.html","6a7e2e93feaa4ac814db74789f15b45d"],["/archives/2024/page/8/index.html","49fe8c7ce9bb8f0886ca0ca1a955ff33"],["/archives/2024/page/9/index.html","011268dc530441fae84c0360d1acf88c"],["/archives/2025/02/index.html","415b5cc3eb373eeffdb827384645a84f"],["/archives/2025/03/index.html","19ac8e1b2e7bcd1abf2f1df9f65040cf"],["/archives/2025/04/index.html","8e84cfa95013ddbe0fb802fd916d9de5"],["/archives/2025/05/index.html","5d3b44c760adaf27fa27414062df72b2"],["/archives/2025/05/page/2/index.html","6f8da73ca08d37ede057a8320e3f5620"],["/archives/2025/06/index.html","9aa2578f9ae6110d68f89845e70873c7"],["/archives/2025/08/index.html","f526e0c8a2eaf47b74caa31ad6137add"],["/archives/2025/index.html","2601717d8c0b22d3ea4ceb9b3dee05a5"],["/archives/2025/page/2/index.html","620496470589308c0c8dc05e8c6bd36b"],["/archives/2025/page/3/index.html","576bbea53b1098ce8dc123e44a2292a4"],["/archives/2025/page/4/index.html","007b71cfcbdab47dbd858c25723d7231"],["/archives/index.html","3710bfedf5d5157f8dc43e9f1ae82075"],["/archives/page/10/index.html","2c5ea55668a4d890aa1bcd415df9b473"],["/archives/page/11/index.html","1ac3fd4102250fccb33e28d43df731d3"],["/archives/page/12/index.html","46fc0ed843ab53e153e96f723a8d8126"],["/archives/page/2/index.html","e050345fe2a1ca4eef7cc85eb8c91a12"],["/archives/page/3/index.html","41a0ac1f3599fccdd2ee9404e256d5b2"],["/archives/page/4/index.html","5f5c2ff68fe76545406e5e2ae3a5359c"],["/archives/page/5/index.html","31fa95a31ac0767b0cc9d857d1191eb4"],["/archives/page/6/index.html","ccd3f2d543c2a12283a062e7ff547b54"],["/archives/page/7/index.html","04d06cb46409db6f4734b994a8a2d3c4"],["/archives/page/8/index.html","73e453ee8ff9e714e776edb22d70bcaa"],["/archives/page/9/index.html","5fbaad26c4ae5499f015d7b75eee0523"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short11.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ly1.jpg","c798ae9035fe2d26036e82209e0ef727"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short16.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","bdfdd56ec4b7c8b243a0ffcb736e0e7e"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","7b527005b2ca3b5bfd09fb59e51c94cc"],["/categories/与敌同行/index.html","e32fcd5ce3cc4d9c6e3f0d451597d25a"],["/categories/与敌同行/page/2/index.html","1af218cb1c31e4e64a3154f26961a84c"],["/categories/与敌同行/page/3/index.html","420e138aa85cad562166b8e0648dbed9"],["/categories/与敌同行/page/4/index.html","a9b6bf38d12d2db3480da95bd7ba50c3"],["/categories/与敌同行/第一卷-双镜/index.html","fbf01566c04d7c85e98a50ecda894f6d"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","3c7e98c6d499387a124388df644c12dd"],["/categories/与敌同行/第二卷-信天游/index.html","e4ce5a448b615d3bfb6689d86be1bc73"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","dbb30bf94e58daaa178e91537a04a258"],["/categories/乐园/index.html","a09a2dbe10b790459534be9dd2c6f7c5"],["/categories/嘲鸟之歌/index.html","a258894cb1ea5c47f025bb2394afe816"],["/categories/失落的应许之地/index.html","6594f2402c5ffbc9d11246f30b47ba90"],["/categories/失落的应许之地/page/2/index.html","d9bc3f029315d587b9899cead3c3734c"],["/categories/失落的应许之地/page/3/index.html","2ca7cc6e4d36598eba4387cb096b4486"],["/categories/月照天山雪/index.html","cd169ae6adfe56a5497c1ffd28014a98"],["/categories/月照天山雪/page/2/index.html","575925c6b2000330bf6ff5409c969a3a"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","b3a924d991090b2150f758886cc4b534"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","47aaaafda273b410de63d943049f425d"],["/categories/狂飙，乱飙，发飙/index.html","163717fc788a17328388fabd6b7e115b"],["/categories/短篇/index.html","7204fe6c7627224e1c59e962ed973766"],["/categories/破戒/index.html","d0c5d77fd0224630d9d5b4a0af62b64f"],["/categories/繁城之下/index.html","f49a6d7975d914138c3ccc8e71343819"],["/categories/长夜漫漫路迢迢/index.html","a50aae3af7c541b152eb41d2a2530b55"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","275ac564c63c8426a15e9bc8ec67f7d7"],["/css/modify.css","823ac2f8754fa05c0dedbdbae29dbeeb"],["/css/var.css","458169e200bc80215f67ed99c1fb823a"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","849644064417f1995b67cc1eb5801d60"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","1c7da132c955b65467a24beaadd7c031"],["/page/2/index.html","68f4a637731c4669f483b0ee23be2b5e"],["/page/3/index.html","cb7a3d686d156acb7fdc81f46eaa2e30"],["/page/4/index.html","3f48b7a37cad6284d5adf8985d3911c1"],["/page/5/index.html","f0c7b9aa8329f082d7a96fd009b0bd2c"],["/page/6/index.html","6944e0500a48692cf98828c78729782b"],["/page/7/index.html","a2efd1450b11233dbbed83ddf420c5f3"],["/page/8/index.html","4a010bd1a2c2ddf7e39955e2866d29d1"],["/page/9/index.html","4342ac2d01ddd5227d670277b20979c6"],["/posts/1083795192/index.html","58a862c34c4b8a0ba995c9dd211b5b96"],["/posts/1099216759/index.html","a925b99f520ff5118fe3b46112742122"],["/posts/1104021264/index.html","17954ae2ac17eda723402332f8ba9c76"],["/posts/1195093070/index.html","cb2f54e1113a25a1d479321016ab6399"],["/posts/12506394/index.html","bd52631e5a169d36a3454c0754014f88"],["/posts/1304356361/index.html","d3acea22beca79312e6172f1a8ee0bcc"],["/posts/1315809802/index.html","cdf2f236c3aa7b4950eae14fe223a6ff"],["/posts/1329165323/index.html","b3c3ffd8664a4ed21cfe86d57d926d96"],["/posts/1378666774/index.html","ca0efd6e792180f15f00f608798f91af"],["/posts/1400613118/index.html","a02f66d12eccb73bc47258243f543645"],["/posts/1407316490/index.html","3556d8f5e37ea38a67d78858051be808"],["/posts/1434824932/index.html","864bad5d733e40465321afee89993409"],["/posts/1445707477/index.html","e05ce592c06e94d8f4498d618b34904b"],["/posts/1465373355/index.html","55bfc14aeead7b9c8997b77d66d4ea57"],["/posts/1681850936/index.html","a57399e6e03791e700eb7d9b047c9b39"],["/posts/1688557772/index.html","3e385d6cd6d26eb684bd3b7f9558e764"],["/posts/1710373156/index.html","c20259f0218ecbb24c5f885cbeb90e66"],["/posts/1720998546/index.html","3426cc51a5f217107e8bf5f9f7d1163a"],["/posts/173005120/index.html","53e54fed74ad589b8320b5f13c6433f8"],["/posts/1766000773/index.html","da997961fc0a630de84e7988e80fe68a"],["/posts/1845581652/index.html","277a0e3a742c1559c362bb43b8c2a39d"],["/posts/1988799958/index.html","3693085e23b8f3f59b34894e7bddb366"],["/posts/2192148155/index.html","7fbc71d885b2508b48ff4d01fe99bb7a"],["/posts/2229302539/index.html","bc84b4c79acb57e13bcdd144ef79d6a0"],["/posts/2492968201/index.html","fc4fdb33f9dd1711ca219f83726f292c"],["/posts/2531300956/index.html","09c9d854244ba755bacf1b43dcc8b52c"],["/posts/2949714254/index.html","b0fdf81b4e6c7774a65ac1daa6d0159a"],["/posts/3002318373/index.html","28a6e48f9a966475cb0cb8db7a3ea65c"],["/posts/3076558902/index.html","95505bee26ac62306b56f005ea5a58a0"],["/posts/3147359483/index.html","79c123cd21079b9c87333ad372a41835"],["/posts/3191465731/index.html","145a5f230d95dc0ed872f23f3477131d"],["/posts/320179123/index.html","17c4ce62ba14788165eb2498961e191a"],["/posts/3300469459/index.html","1e1cb971df6703edc23ff124e5470a39"],["/posts/3459697331/index.html","35924751f2f92f8e2df779b741f8a9d3"],["/posts/3489395119/index.html","abcb65dfd808f47dfa7d41b53ac321e9"],["/posts/3525870963/index.html","749cf86b1046580e3e4de9a546d6af21"],["/posts/3591144765/index.html","4f401e12f657b9ce522b26c1c683600d"],["/posts/3602722865/index.html","121dd2acee6bac4dd750dc884aec7778"],["/posts/3640780602/index.html","7cef62d35383002863b0f785162c02ea"],["/posts/3679626959/index.html","8d19ba8fb13fa8afd24e489be5e136bd"],["/posts/3699598685/index.html","7ab9841167963c6a0821ddceaa1d7aeb"],["/posts/3712900673/index.html","8dd1db1d425ddb5fe0378247cd70942d"],["/posts/3770599674/index.html","821d78a1f496c0f84ca017cd5bda6af2"],["/posts/3935350387/index.html","379313039a03571010b7ab717b085ec2"],["/posts/3948778863/index.html","05dffa56d74de19c4388b8be7bc738ef"],["/posts/403803703/index.html","cdc69a01fb208bb4f619b6aba5ae2042"],["/posts/4041933047/index.html","3050d833bc36655b68d1482a26ece946"],["/posts/4110582124/index.html","19c761012578dd68ad9ce1ef1de95aab"],["/posts/411074811/index.html","98739bf093e82272590543fdc061ccca"],["/posts/4113963045/index.html","06582a58af9b20aa622e7b025b8a652e"],["/posts/4163174813/index.html","7f66549eda4348757a5c9219d1ef9c4a"],["/posts/4185022581/index.html","ec5e44abc7a279b4cac706e0342da2b3"],["/posts/4192746113/index.html","8cf0288cb75500b9248dbba35bd4a53b"],["/posts/597050941/index.html","aed746daec0a414abc2696be8d7253f1"],["/posts/719776913/index.html","477948e3a042a781651635a60ffe8c23"],["/posts/741067372/index.html","2fecb2625a9df3fa2b93a0e66f6cd948"],["/posts/776340048/index.html","cfe536c55791446fa853da783749632f"],["/posts/888354975/index.html","d54500ba7f4525c7872bb0245022b2b4"],["/style.css","191ebc5c9cc51d3c207a251f8d7c128a"],["/sw-register.js","95c87464a428ab78ac79e22ea394d68c"],["/tags/index.html","dea45958505f945695960aedfddeef32"],["/tags/冰与火之歌/index.html","01abb590dcffb32741dbab1daa36f546"],["/tags/冰与火之歌/page/2/index.html","4d93f7d2117ad4a2e2d992182f1a0bd9"],["/tags/指珊/index.html","92b4613170ada00dddd4db4d59a24d67"],["/tags/指珊/page/2/index.html","0f46b6c6933ead2bb039eefaf9d8afed"],["/tags/摸鱼之作/index.html","1c0710d8363f06a9332ea0a52dc586f6"],["/tags/日常/index.html","e4604167c7b4e400983dd4361f0aadbb"],["/tags/柠梨/index.html","d10434533e8f00222dc7b178af8fc35f"],["/tags/柠梨/page/2/index.html","63637aca722e9ae236b6786fcae101fa"],["/tags/柠梨/page/3/index.html","e8f3883268ba4e978a55b56523671c34"],["/tags/柠梨/page/4/index.html","fa23d449d7bba1df9b1839eb6296b87c"],["/tags/柠梨/page/5/index.html","3a71e3f6444ac5ea4dbada4e8a4df9a0"],["/tags/柠梨/page/6/index.html","213a636bfaffb1f3f366f0e657be67d8"],["/tags/柠梨/page/7/index.html","f68c6775c9a8c6d836ec6e02c98d7cda"],["/tags/柠梨/page/8/index.html","76e3f93f7cdb93d450852f5a470f39fb"],["/tags/狂飙/index.html","01dd47c0ea6b2f66ae56202efd5b3ab3"],["/tags/镛武侠/index.html","3f1375e512a59ccefbc03046561a5f81"]];
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
