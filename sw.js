/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5291c844cc76d94617d97adf9e24a2bc"],["/about/index.html","965760ad164a2b33826a887a217b7005"],["/archives/2024/07/index.html","1d1b5ce8f8a6175bd3aa49aefb9fca31"],["/archives/2024/07/page/2/index.html","a274428bd1923d33eeaaae1d1cd39933"],["/archives/2024/07/page/3/index.html","1b9b12d0083111eeea339565de0a73a4"],["/archives/2024/07/page/4/index.html","e08d14c993b6aa452db9e32b2a71de97"],["/archives/2024/07/page/5/index.html","c14b5750986a687a6062deac13b50630"],["/archives/2024/07/page/6/index.html","8543814344500e1d9a977c1da2041ebb"],["/archives/2024/08/index.html","8dd44db08c06cd94b0d96b2ff71e74fe"],["/archives/2024/09/index.html","aade50a260922fed1ed95505f94bea4e"],["/archives/2024/10/index.html","033c80b25cfb15221083fe2839ddc727"],["/archives/2024/11/index.html","b4ee874fdafcdc63713f6d84c2bb8b8f"],["/archives/2024/12/index.html","3244a76c42d0989cce66880ff8c08cca"],["/archives/2024/index.html","4fce2cab0131d8efcebfc232b4fb3bb2"],["/archives/2024/page/2/index.html","5ff47f7a188d5c1c4edef32e1acc2f7b"],["/archives/2024/page/3/index.html","e9728f9e91ceadfe688ffc21673a1563"],["/archives/2024/page/4/index.html","c1210853cbdcd55117f8830e30c23c0e"],["/archives/2024/page/5/index.html","c24822188628b43fb2809964df2a8a02"],["/archives/2024/page/6/index.html","acc64ca5ba617ad61ec390bfe4c4a2d5"],["/archives/2024/page/7/index.html","6fdc02f6989f1b4579b4158e32f6d852"],["/archives/2024/page/8/index.html","4152f3e8110bbca8f7e7e293159df855"],["/archives/2024/page/9/index.html","4cb96e96427236838db2df13d241b0c9"],["/archives/2025/02/index.html","41cefca0589189c6fba719ea05abd4da"],["/archives/2025/03/index.html","7dedde3608f67cfc3ece4000351dd7d1"],["/archives/2025/04/index.html","9373973902ccc1deedcaa82ee2eab8ce"],["/archives/2025/05/index.html","e0877225f59b9053f8123c85bf5465cd"],["/archives/2025/05/page/2/index.html","4ac0fb5e419f519fa6e4bfa4cf87bf92"],["/archives/2025/index.html","6f1e8b1315edf5f02c22302079fc0681"],["/archives/2025/page/2/index.html","de34da7faef8647d1c300e2d6e08e991"],["/archives/2025/page/3/index.html","84593aa137aae3eaeb95045235571f2f"],["/archives/index.html","4aec55e324005c5bb93d05e716003a1a"],["/archives/page/10/index.html","58c75b09fd8f1fea00c1c3b59f073eee"],["/archives/page/11/index.html","9cc1507aaf38d61851efcfdd0a70ec15"],["/archives/page/2/index.html","ee8d8bf80ef95487d9df6706a5400e8c"],["/archives/page/3/index.html","2627afdfabb299b4523a1b28c34c2c18"],["/archives/page/4/index.html","f81b4e12fd025573ffcbd1af0ec5111d"],["/archives/page/5/index.html","107b5b1b9e2ed2389dbda9de12e5e612"],["/archives/page/6/index.html","c1e6ba34e5a5a07edf6f748be54ec232"],["/archives/page/7/index.html","adf724c63abddfc82503d9dc1cb8f5c2"],["/archives/page/8/index.html","e3163ad53d7b0323ec4696637cca35ce"],["/archives/page/9/index.html","4f751c6ecd9c9946ed3b0f2527f4dd87"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","7cb9e04b015d6cb4f8d5712241b5d15d"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","9c3e41d0cdd87f45081966608b29ff0e"],["/categories/与敌同行/index.html","06f8502eb331f9be2307b2be3574dae1"],["/categories/与敌同行/page/2/index.html","28891966ca963b818d8dd40b028db5de"],["/categories/与敌同行/page/3/index.html","b10f51ea03c1e511e58c2af60dbf99f4"],["/categories/与敌同行/page/4/index.html","cce479ca3962f08b501ca8ddface174d"],["/categories/与敌同行/第一卷-双镜/index.html","81143d695359c9914141d0e7a8f8b82d"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","16a35c583a51ca11c8f6b7a7b98e70cd"],["/categories/与敌同行/第二卷-信天游/index.html","95a42433c220dbeb39f2a045bcd5fb0d"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","fda3772b51278005d3f602567c86dad2"],["/categories/嘲鸟之歌/index.html","a8a7ac2163c6ec182aa9a09c600aba8f"],["/categories/失落的应许之地/index.html","7c1ccf33ccf0ca5b0b4e5dd4acf1c8dd"],["/categories/失落的应许之地/page/2/index.html","0db742a89e1e85963b239efd46b09b17"],["/categories/失落的应许之地/page/3/index.html","2611a663062c5e349f202c910a9c5582"],["/categories/月照天山雪/index.html","41d986d11880a85308db599ea13d676a"],["/categories/月照天山雪/page/2/index.html","d2658036310ccbc9d90dacb2e239706d"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","e4e947985f486c462db12467190eb1e9"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","947d4ad951c1f48d68aeee30db549cc8"],["/categories/狂飙，乱飙，发飙/index.html","e42c2e06ff5bc845cf1ebcf131da7965"],["/categories/短篇/index.html","3ac95bed362c0840c2a426ccd889e56c"],["/categories/破戒/index.html","e9b0125282f3ffa040536a39e9adf9f5"],["/categories/繁城之下/index.html","76e72093cd954b3f2faf057cc157000b"],["/categories/长夜漫漫路迢迢/index.html","0915da7013d5cf3b5be71ce93be9e0ba"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","ae41d76f28c0de40a6cca87235e32068"],["/css/modify.css","c1c185a1d10d58c269e0141e5dcf0891"],["/css/var.css","df22320af544fd2992b027b6971a2b61"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","7e447b01c4a6a8f936d689bc978d50a2"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","85d3d51da24cb4a86b323068f0510ca4"],["/page/3/index.html","181fda68e8e35b90343d9a7105d1c4db"],["/page/4/index.html","318ecad31c15647a08556803d7bd6611"],["/page/5/index.html","81a14dbe1dffebe7b0602a666801673b"],["/page/6/index.html","e356304eb8473c0acd79469d9067b64f"],["/page/7/index.html","59b36e5acfca71f32964a2fa24b277e8"],["/page/8/index.html","ea897c1788fae3faf31b5ee00f058e1a"],["/page/9/index.html","ecb7ee06d2a17639ab71d68b95b23cfc"],["/posts/1083795192/index.html","b2782f3488b547636644dd8d20e2ee58"],["/posts/1099216759/index.html","ffeadf427080bd45d85a1af8c1378638"],["/posts/1104021264/index.html","9674e87619543a069d152587d0bb4ad1"],["/posts/1195093070/index.html","0ff735881fb7265eff265c8e1fd5597a"],["/posts/12506394/index.html","3fcc0682eee602a63da13f07d1be4ccf"],["/posts/1304356361/index.html","6da71d60e85e19034bfe27c1a58cbd8c"],["/posts/1315809802/index.html","eb5dd9005615dade1ba28aae33b113c1"],["/posts/1329165323/index.html","33ab2e93d300f5f4e52c3c3a1c487948"],["/posts/1378666774/index.html","be96d378410a6dc0fad15460ab16abff"],["/posts/1400613118/index.html","afc8e533ae9ea9fee306b47d88a7aa0d"],["/posts/1407316490/index.html","88433f38569db626d51c68b3ef6cc8fb"],["/posts/1434824932/index.html","0b04e7df62108a66a803ad79b7e51750"],["/posts/1445707477/index.html","f971c48304a761cf88123720f7fc8fd5"],["/posts/1465373355/index.html","896ab1cb732208a612add23bf1826115"],["/posts/1681850936/index.html","219b961eb5e415727d6650ab28ff4053"],["/posts/1688557772/index.html","213ce53046e0c1045796221c3620ed5a"],["/posts/1710373156/index.html","773bf4bc6fd10e49fbd2dc1be5d48c1a"],["/posts/1720998546/index.html","6e9239e95c70966b3c0e8bb8c752c0af"],["/posts/173005120/index.html","50715fcc90cf1b01dd532a0cf48708e8"],["/posts/1766000773/index.html","ff0ff63ccb81321efc9cda1d61b79038"],["/posts/1845581652/index.html","6d238877dd5ea248eef7b9f33933c5ae"],["/posts/1988799958/index.html","393408267907327a6c2f1625bdf46af8"],["/posts/2192148155/index.html","352a263f82212398bca6cc5b8b14da17"],["/posts/2229302539/index.html","004204a81cf7f90f92847baac2a438de"],["/posts/2492968201/index.html","fb1ff8ff0a11a7d12edf93266e913f07"],["/posts/2949714254/index.html","07805f39626d3da9fafcba0bd9f6e33f"],["/posts/3002318373/index.html","a3a1aba233cbf2678ebe9f6a088bc162"],["/posts/3076558902/index.html","c1a6d373dfe1965aeb4ba03ed5173236"],["/posts/3147359483/index.html","6b5680db5fa361ca3ca1aa0d79f2e4bf"],["/posts/3191465731/index.html","ed74e9c1d99e2931c0972169c967e64b"],["/posts/320179123/index.html","645726694beb5b3fdd6161215385380a"],["/posts/3459697331/index.html","e51a9401a8b85486064e211348b94361"],["/posts/3489395119/index.html","eba8bc8087dac357b1b92d0f968759d1"],["/posts/3525870963/index.html","3fa337c953d8665ab441b66e7df2d077"],["/posts/3602722865/index.html","0ad7e4e0768b213ece8f98db82713200"],["/posts/3640780602/index.html","c5a346a84242280a5751a24585439d73"],["/posts/3679626959/index.html","0a36822a36cbc1244eaac1e3a8be61d8"],["/posts/3699598685/index.html","540df8470b3d53b28e2bdee92834cf8f"],["/posts/3712900673/index.html","fd1c1fc90c5f98f2b9a156297a76d194"],["/posts/3770599674/index.html","647c814993952431ac1854b7ea43252d"],["/posts/3935350387/index.html","5829e5fbe95771ae52f0c56da50ff559"],["/posts/3948778863/index.html","bc647f9afaa5a3f5afb611ee30e37e4f"],["/posts/403803703/index.html","5310bf4f1ddae5ceb4b8a165ea7ee7e3"],["/posts/4041933047/index.html","49a99deef73890fbff2258a9dd28c322"],["/posts/411074811/index.html","2b347a9d234cfeffb8ca5d5c50e01612"],["/posts/4113963045/index.html","f5dc452fdd9f18a7f0b6d881528101e4"],["/posts/4163174813/index.html","06dfdd640a090429cf5656f25883b729"],["/posts/4185022581/index.html","579ea85d5995afc868d44f1b84bbc2a1"],["/posts/4192746113/index.html","bcdcf7c9ce85624a79f9ed2840a95e8f"],["/posts/719776913/index.html","3008253ab4b9451105fa2ef47c782591"],["/posts/741067372/index.html","16182a71454f4fe848d4be88355dfce4"],["/posts/776340048/index.html","590b9eb1e5ffcca9d6c7d9481a01de2e"],["/posts/888354975/index.html","d86253d011d0c6f61bd1e38551553d05"],["/style.css","fcdce9cb900309c46ee3f62f318b6fb0"],["/sw-register.js","62d8ee9d2d32f5014143d530c599620b"],["/tags/index.html","24842f5a3e96b4e68c2030f85a74d537"],["/tags/冰与火之歌/index.html","0c15ddd881fd37157b8b63f699dca607"],["/tags/冰与火之歌/page/2/index.html","ef578b9c722cfb40629ef1371f2e1702"],["/tags/指珊/index.html","8c3c734d4eae75e962d2ba5ddfaf296e"],["/tags/指珊/page/2/index.html","6297e8068025aabf9c42d54669465111"],["/tags/摸鱼之作/index.html","5482b264543477f724b3b118276dfd02"],["/tags/日常/index.html","14d0c77a552cc71be359688adb0533df"],["/tags/柠梨/index.html","b937e5e90bbdf04b33c803a3e1d9ed8b"],["/tags/柠梨/page/2/index.html","2fb07142190b09f89e4ecb0fb1656e9e"],["/tags/柠梨/page/3/index.html","523bc05603e53dc0ec8371d1b52f6cef"],["/tags/柠梨/page/4/index.html","354765a2751a6c7539f5124ed4fb82bc"],["/tags/柠梨/page/5/index.html","083f58550383f694e88f9b9186c056e1"],["/tags/柠梨/page/6/index.html","7d7ed32e38048e6f2db892245bafd875"],["/tags/柠梨/page/7/index.html","59246beeb89e1d74bd47a12b63a936d3"],["/tags/狂飙/index.html","c151ddf06680a35c7543a9c0a3710d1e"],["/tags/镛武侠/index.html","bee2037fc7b7df2631b45e13205105d2"]];
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
