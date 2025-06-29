/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d4fb1a760e28b4f082348f187d33b9ea"],["/about/index.html","d6db2e8dd13a849778f0c0ea8deaae66"],["/archives/2024/07/index.html","629cff65d3d83a98d5f984acc3322664"],["/archives/2024/07/page/2/index.html","67e46284f78068961d460bce7e7cd1fd"],["/archives/2024/07/page/3/index.html","ea0426d2aeeba9b17980c980229faa64"],["/archives/2024/07/page/4/index.html","7fd0e4d76b52dc7751fab88674b4e62f"],["/archives/2024/07/page/5/index.html","2b92e583c4397744e2e2d1883f632108"],["/archives/2024/07/page/6/index.html","5334cfb7edeb7f7f74581818d621c21c"],["/archives/2024/08/index.html","3038d1d3008e8ffcd33b44c29071e9c1"],["/archives/2024/09/index.html","a0f24c4ad9a10e238b76fd52d00ed415"],["/archives/2024/10/index.html","59dc62be9e6bc5cfd911480359d2cd9a"],["/archives/2024/11/index.html","05331f2ce5169dad4259d992cb57f0f2"],["/archives/2024/12/index.html","46ac3d5c037ba178c1312e4cc3b94794"],["/archives/2024/index.html","98ba9c7f216f58f06966b5db73e038f1"],["/archives/2024/page/2/index.html","779038f91d4de8dd3409ac918eea4ff4"],["/archives/2024/page/3/index.html","b93d2c59de36f170e78bf48579bedc8f"],["/archives/2024/page/4/index.html","cfb94dcb934e168c8d87db61480778a9"],["/archives/2024/page/5/index.html","119cf850e261c8c55f17b19c0995513a"],["/archives/2024/page/6/index.html","3e21fc2e6741e9e89aea2d57c792f2ae"],["/archives/2024/page/7/index.html","3d55b769630802ec84aea7c9519dae38"],["/archives/2024/page/8/index.html","1fce980aba0a0d11155cfb9a47cbec8a"],["/archives/2024/page/9/index.html","5ba9aa86881df83cf960d35f7753feac"],["/archives/2025/02/index.html","f65ad966f1e2af800cc0c383d2f38b70"],["/archives/2025/03/index.html","4c4582e649f054070426cb1c042a58fc"],["/archives/2025/04/index.html","fcebf186496d045613ac8859c49dc7ed"],["/archives/2025/05/index.html","4655e15d8728f61875d9f1bda861c613"],["/archives/2025/05/page/2/index.html","d7dd85ac186acfa55b52d22e20e50c5a"],["/archives/2025/06/index.html","ece868f8e748b322edb8cb3ad19a9860"],["/archives/2025/index.html","7f0e874813077cb14b44c0c97b9075ee"],["/archives/2025/page/2/index.html","8d0f1f6037f64f9107c118e7065b8bf1"],["/archives/2025/page/3/index.html","f8ea68eccca7f89255aba8eacbccaab8"],["/archives/index.html","3c2e29dc870557fd91b9d245625cb422"],["/archives/page/10/index.html","4df11895f2b247d580134018d2329db2"],["/archives/page/11/index.html","a6fb718b0969136201250c2a4e1394f6"],["/archives/page/2/index.html","8a4833ee222b4f4f71c836c6b432debf"],["/archives/page/3/index.html","83dc2e0e7b70565a51aa083325cfcd55"],["/archives/page/4/index.html","7f66f564e0fa17532ce1fb13c697f594"],["/archives/page/5/index.html","14268e38b421eb2204f80f4d858f9ffa"],["/archives/page/6/index.html","e9bdacdfb8266e887d6dafb0cac50556"],["/archives/page/7/index.html","5ca05f191c76dee2b1245ea709d76251"],["/archives/page/8/index.html","ace13f019e0840c2fc33042c61862ace"],["/archives/page/9/index.html","b9678f693d667cc7f4f776b9a38ecd3d"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","7cb9e04b015d6cb4f8d5712241b5d15d"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","ecca4f5ecb487916bb3ba39c98cec00b"],["/categories/与敌同行/index.html","fb5f0050475536ffc4c3cf660d8fd7be"],["/categories/与敌同行/page/2/index.html","eec3e672750a7abdc44bcc7ba15ac9c3"],["/categories/与敌同行/page/3/index.html","a0bb0170d919e1fb2b1d3360dbee5108"],["/categories/与敌同行/page/4/index.html","0574fbbb014387b05c0745f4ac76d765"],["/categories/与敌同行/第一卷-双镜/index.html","7815998e6690d064c7425c30c6e6de7e"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","71f4cfe39520cb130e31ea6968a44ce2"],["/categories/与敌同行/第二卷-信天游/index.html","307d83eb1252e0d13d1a259cfc3ac553"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","7f2ad6c457e664bc737875dbac627f5c"],["/categories/嘲鸟之歌/index.html","52c74207529d7cc5d38e66fbd0d1ec00"],["/categories/失落的应许之地/index.html","8ee744a295e22681e0202daf0dc2f2e9"],["/categories/失落的应许之地/page/2/index.html","28f7659cc58893652babf5f688789498"],["/categories/失落的应许之地/page/3/index.html","c47aa00ca788e599cb029675ae442112"],["/categories/月照天山雪/index.html","08a032c0815170ec68818b0f42de997c"],["/categories/月照天山雪/page/2/index.html","1537ddfe9e97ba1b51f1cdd118660397"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","ca562c0c0a7184e8f508068c655054e4"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","bcc82ea3041a18ee6dedfbf3b3eb3343"],["/categories/狂飙，乱飙，发飙/index.html","d2fae7cab9c24b8f3d822b2867071a7b"],["/categories/短篇/index.html","52b9ac0efd753a32b0c65b642ad568a5"],["/categories/破戒/index.html","ef8ee0e70a9162340d17bfb745183d46"],["/categories/繁城之下/index.html","9eb7e7fffcadd5ae5f66e086d36200e0"],["/categories/长夜漫漫路迢迢/index.html","d6744fc807f25eef0ec926631d46d027"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","0508c573c697d97797568980bf27c91b"],["/css/modify.css","f8156e0b19d6d934fa51079ef2fa7881"],["/css/var.css","1a10ac55375c45920c3bcc0da4133889"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","e01dd14a7c5092a1cc7f948cded6efb0"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","a65b6d0e1462c4f32165d52144b660f6"],["/page/3/index.html","01bd9e7b4cbb21eafa8ce1bb109dddaa"],["/page/4/index.html","3c864783574c4a585c1030e92f629754"],["/page/5/index.html","691ed52debfa8c8189ecfd5fb3df6c51"],["/page/6/index.html","43ddbe5dd4f6947d178a2e8957491ce8"],["/page/7/index.html","2c168373c1c8cac5bafa3936f15a41da"],["/page/8/index.html","e1b0fe66311f7a70ebf22578066060ff"],["/page/9/index.html","64acbfd025f519c1c2ca8ee2208bd846"],["/posts/1083795192/index.html","6558aba9a5d72db3df62f057c7f479f7"],["/posts/1099216759/index.html","7790d91a2c1c86b8ba6ef8edc8eba3bd"],["/posts/1104021264/index.html","97befef63c1c18a7590957b023b27600"],["/posts/1195093070/index.html","2e9ed5e0e0a0872dde236d9d8ed41a0b"],["/posts/12506394/index.html","fcfb90de01ab131ad1ead19181112da1"],["/posts/1304356361/index.html","80ed3983dbb3d1289233b1fc78739b14"],["/posts/1315809802/index.html","882aebd5b81169287dcbaf6c0bd7b770"],["/posts/1329165323/index.html","90a1d4451b1d7feaeed1da4497e86e3d"],["/posts/1378666774/index.html","302565f98cb523f5154f93a2fc2d23d0"],["/posts/1400613118/index.html","9a269ddb061dfdfbf4523b300f580953"],["/posts/1407316490/index.html","e237ab906e83c86a17da08a1a5fb95b7"],["/posts/1434824932/index.html","5ffbae6105133a240d20838915c561be"],["/posts/1445707477/index.html","42b73d81b10e3922f85ee1ea9178aa0d"],["/posts/1465373355/index.html","fc2d65aba50fb6ad534e4e6d017c0cfb"],["/posts/1681850936/index.html","dafbe6caaf71ff0b4ca98229cd9671fc"],["/posts/1688557772/index.html","62d481c5f18b779aab05dafaa5f83c37"],["/posts/1710373156/index.html","38e9a46741e8ca51a0c0853c273e30d0"],["/posts/1720998546/index.html","ad79413032880d1c3c2cba5722e0edc9"],["/posts/173005120/index.html","4479ee2c5d5aad78e8f7d15dfc7fd688"],["/posts/1766000773/index.html","1072e4d1778521c741ad109b932a30a3"],["/posts/1845581652/index.html","0fcd654f9c72119dc7985acb90bff68e"],["/posts/1988799958/index.html","5ede9b20fc3500996809e8da02db8a0e"],["/posts/2192148155/index.html","a3c3acc81a86a9c28d11e0ed6f74b10c"],["/posts/2229302539/index.html","b7b8ce31a97470eb7d5908df8f94313d"],["/posts/2492968201/index.html","a3bcde813765fd49ad0a97c1bfbee8e5"],["/posts/2531300956/index.html","7ee156c8fd30e268659660b480f50bcc"],["/posts/2949714254/index.html","1acbded778a8575d69f3cf74ee903186"],["/posts/3002318373/index.html","8befdd95315a63c329a56dbd927643de"],["/posts/3076558902/index.html","bcec7cc48b7832c1aa3d35e72d8c58ee"],["/posts/3147359483/index.html","0d4f573868cc88e34db7c6f696e89b67"],["/posts/3191465731/index.html","cb09929b299c34d197cd29937888de8d"],["/posts/320179123/index.html","7815ffd88e1ec1375364d59b3f2de018"],["/posts/3459697331/index.html","923b37d804e131de5ed96399355351ca"],["/posts/3489395119/index.html","64c08e06a381db5573829050b9c9e9d0"],["/posts/3525870963/index.html","b1657b25ef93f1f371739e982a124433"],["/posts/3602722865/index.html","142f2c1172e0a2fb1a794bde900b43c2"],["/posts/3640780602/index.html","861e1d2469d805b85cc73e3a37e0cc32"],["/posts/3679626959/index.html","9f5b243554c33be51cfaed829255e94a"],["/posts/3699598685/index.html","8e8f36ebaaf2cc2ff8def8f852d2a6c3"],["/posts/3712900673/index.html","d1487f5803737c8ef148249c0ee59ca5"],["/posts/3770599674/index.html","5210d38451742db9a662019b051e460d"],["/posts/3935350387/index.html","f6d7f99107db107a2b7b0da23686cd7c"],["/posts/3948778863/index.html","f62e0e70c6b4d0ea06b9663cef060e21"],["/posts/403803703/index.html","78bc7d2a55110f786cc0eda043f876f5"],["/posts/4041933047/index.html","95c0cf91b644515f8527d26c7ddf05a3"],["/posts/411074811/index.html","e323771e0abad11a52d03f5c014ca1dc"],["/posts/4113963045/index.html","a6898b4a3b0fdcb7a4885fc22b559727"],["/posts/4163174813/index.html","c8ec6f3738b87eca4e796e504424b69f"],["/posts/4185022581/index.html","b89122fef4e04de2f4fc1d715b952a98"],["/posts/4192746113/index.html","e41fbebc5420e2a296166a42ae898860"],["/posts/719776913/index.html","66e874570ce3bace7ee2df74f7e896a7"],["/posts/741067372/index.html","00dee31f9497ad9a66ffa72a736ee3ca"],["/posts/776340048/index.html","d613c52d3351bb72f6393d1bc643efcb"],["/posts/888354975/index.html","66691624564f92f08d526b4818178569"],["/style.css","ff3bf06b61b04a5fb2554748f7cb2c91"],["/sw-register.js","de10dfc6037b7ee737c8c0f6ec6b34da"],["/tags/index.html","7d834701c213ae78ddb4cd9ad53568e0"],["/tags/冰与火之歌/index.html","97924a34aebd39f3f28d0407d7a42bb5"],["/tags/冰与火之歌/page/2/index.html","1197ea4c34b3e773db18e7aa3e4517ff"],["/tags/指珊/index.html","c2ae31fa47306aa843dae35b011d3d86"],["/tags/指珊/page/2/index.html","d252b7801fc34fba51a23cab7424411a"],["/tags/摸鱼之作/index.html","8366f1f5ec805af5fb953f6898195e87"],["/tags/日常/index.html","4e50da0e42f0d68c46afbd30a3f5e753"],["/tags/柠梨/index.html","f099c72409898a3782ecb37688c7c4f6"],["/tags/柠梨/page/2/index.html","ab30264ee64cfaea4d36eef7e164234f"],["/tags/柠梨/page/3/index.html","663bbf14333ba824795fc974e94f7566"],["/tags/柠梨/page/4/index.html","9df4c67b9adfcd8411ccc74d16094aa2"],["/tags/柠梨/page/5/index.html","16afa5a555191c68b3508484206c67fe"],["/tags/柠梨/page/6/index.html","4a7501f104749b91d6b752d5b735ce13"],["/tags/柠梨/page/7/index.html","ffd9352095528c2881c5ffb6c3f692ea"],["/tags/狂飙/index.html","a00b75bb8cb91f2178e0bfe79b1db410"],["/tags/镛武侠/index.html","234a6f0beb2cde7086768cd7d9d6f3b5"]];
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
