/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","52aeaef5409f5d5f400c8693d1df274c"],["/about/index.html","ac054b835f5f8a000a40377d5678a020"],["/archives/2024/07/index.html","99b3b137436dd26e9e9c39747ae6afa4"],["/archives/2024/07/page/2/index.html","58f967f089f3a38e01b033273ac592c6"],["/archives/2024/07/page/3/index.html","f11e9cb6ca5e49e899a0e4d2e182cab4"],["/archives/2024/07/page/4/index.html","e07598fac8e0acb2315528ddb93e044a"],["/archives/2024/07/page/5/index.html","d866a96400e6ae7c08ade17056973763"],["/archives/2024/07/page/6/index.html","9a2de3e4315a1574d155704548a7d653"],["/archives/2024/08/index.html","3929a7d8295385fe8e9a0b676a3ea7db"],["/archives/2024/09/index.html","28dbb97b6f44608d289df3ddc8703bcd"],["/archives/2024/10/index.html","753c2d90cd1db147b0ce8437aad26c24"],["/archives/2024/11/index.html","f57dd9a5ed1e923b6e1c8b59fb50b434"],["/archives/2024/12/index.html","ac33b21f4e1cc147cc9627803ab3d67d"],["/archives/2024/index.html","4c2f448dbb5e94c3a05a9f705055ec02"],["/archives/2024/page/2/index.html","c54cab6815ebc20d494ff147b1e50dcc"],["/archives/2024/page/3/index.html","5869655e031af5b8b01436c842f87bfb"],["/archives/2024/page/4/index.html","3e8e943e7cab85109e270658ebfbc7e2"],["/archives/2024/page/5/index.html","330421c5ba1d84e7130d9480e0bcd806"],["/archives/2024/page/6/index.html","7bb4c8ddf3747e570969743857d9c6cd"],["/archives/2024/page/7/index.html","645478c617699045f4b7007784b89c9a"],["/archives/2024/page/8/index.html","793a1421c2d8fa3300697b56ea382c21"],["/archives/2024/page/9/index.html","d0cdedd943b4c6627b21d2d3876b12f1"],["/archives/2025/02/index.html","144d2ee720c50b4357a8851aad105cb5"],["/archives/2025/03/index.html","b583b50233500d34477624dfb3dd7876"],["/archives/2025/04/index.html","875e32f8851e1a74e93991e4b0df8c37"],["/archives/2025/05/index.html","994e3cb0ad57972d82da2c6deed5ecb5"],["/archives/2025/index.html","e6f74293df0dc9c940427467a9873d76"],["/archives/2025/page/2/index.html","b14d99df3d858dcf9db1889782386864"],["/archives/2025/page/3/index.html","8d388d36141a5865c405e9baad014e78"],["/archives/index.html","17a5755a4d2ba1cb8983838397dd01bc"],["/archives/page/10/index.html","78ac3a6d883b93fde9f504ba7eea789c"],["/archives/page/11/index.html","116b3f7b026d6484fed7c31f0fef09de"],["/archives/page/2/index.html","30c685da4ed952ed05d06d433d03d822"],["/archives/page/3/index.html","4509146eedfbc8a7547cd19c4cb40730"],["/archives/page/4/index.html","ea60458a7964fb44b85048cf226ad6e2"],["/archives/page/5/index.html","17e25124db718f5c6cfe810190bb2977"],["/archives/page/6/index.html","f1730e7477c86d175f4bdb10e8279b56"],["/archives/page/7/index.html","852a52eafc8f53ff233722ed63d3aeb8"],["/archives/page/8/index.html","aa2f62be4fbcf3437d596f54e7e5d7e2"],["/archives/page/9/index.html","9fdc981e7e33cc0ab8c4eee9d7ec79dc"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","7cb9e04b015d6cb4f8d5712241b5d15d"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","6efe1045815d121e8ec642f2f23896ec"],["/categories/与敌同行/index.html","bcd9b54aeeac5419627753eea5cfc192"],["/categories/与敌同行/page/2/index.html","0b1ae92106b966971c0e575e83947d7b"],["/categories/与敌同行/page/3/index.html","1cd92f4af8ddd722e6158584c28b08a0"],["/categories/与敌同行/page/4/index.html","450e7b2444b6570591d95ad1392709d2"],["/categories/与敌同行/第一卷-双镜/index.html","cd8175c79e0faa0a90634b1acbd0635a"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","86017761725c11ac0cbf81cc9e073767"],["/categories/与敌同行/第二卷-信天游/index.html","4ca9151017452beddad78847a454c257"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","2b7443ab76e4fdf1a862aa857b76b4ee"],["/categories/嘲鸟之歌/index.html","cda050084341d46ed68d3cf4b2621df9"],["/categories/失落的应许之地/index.html","a066a826134cf88c4d401726472cee0f"],["/categories/失落的应许之地/page/2/index.html","8d33f30a371a5f111e573d451c35199c"],["/categories/失落的应许之地/page/3/index.html","a331a94828956b425b4c309559291fae"],["/categories/月照天山雪/index.html","bfee33d16cc843417e586a4bfaad3ba0"],["/categories/月照天山雪/page/2/index.html","aa080cbe3216291ccdee309f6af447d1"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","ae6890028f46a529a1e16a8dc06bee4e"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","8ca9ac0ae1a5acf9b0c293bc91015efc"],["/categories/狂飙，乱飙，发飙/index.html","248c2ef40f8894ebb16ae8195054e8dc"],["/categories/短篇/index.html","16513a983c3160754c5cd0a5fa9ddecd"],["/categories/破戒/index.html","2d65458cc9be8c3373b324ca2c94e525"],["/categories/繁城之下/index.html","547bc6e7988e3cb1417d9139fbd312bd"],["/categories/长夜漫漫路迢迢/index.html","09890d359d302ed38a84a02c37fd1755"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","0a0f86499995826bf6ac2d01110fefda"],["/css/modify.css","a1434785e6b707e609db578fc72ca378"],["/css/var.css","d0e8c04dc209258a0bdead73a0b25f36"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","7e243fef4e6970690ad38303663de027"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","1a410cc396ad6148932df0bd09ba55d9"],["/page/3/index.html","58376169bdd1e63ceb82f943bfa194ac"],["/page/4/index.html","784a3da332e7f8e23c05bee8f6d2309f"],["/page/5/index.html","dad378645e4e145ca9ac3c118ef740eb"],["/page/6/index.html","07af95b787cee45301c5d9fbeceb2b67"],["/page/7/index.html","9698f6d236ec5905b2d9ac2ac75f509e"],["/page/8/index.html","84347213a148146cb5923e5a4b0b0d9f"],["/page/9/index.html","da63c605b86ffd84cc40425225910e5e"],["/posts/1083795192/index.html","180e9bff77de016d4d9a9ee18df0cabc"],["/posts/1099216759/index.html","0d0e122c251d1ee8b66f1ae4f257a41f"],["/posts/1104021264/index.html","4e2df68a58488da664d808d9fbec6bc6"],["/posts/1195093070/index.html","b0cb09060f90b022712f85e51eae63bc"],["/posts/12506394/index.html","2ac3876c2163b62b0c9bcfbb0032be0c"],["/posts/1315809802/index.html","ee97fe5a4a0384c6e9ca3e036f7881b6"],["/posts/1329165323/index.html","89d512683fd71a87c4799f42ed9281ab"],["/posts/1378666774/index.html","d4ca7ad9f6818d8169d4d00ada915947"],["/posts/1400613118/index.html","8607e484807f3bfab63dcc83a2d44bf6"],["/posts/1407316490/index.html","5c17a63b0f9192dcb496ec9c5e1245ed"],["/posts/1434824932/index.html","c50886810bec58c5cdb1a13db966f639"],["/posts/1445707477/index.html","045564f751e879356b428c976e7c0637"],["/posts/1465373355/index.html","265e98b0e757ed694db760531c480d41"],["/posts/1681850936/index.html","ab92d4b2361d95532a94d38a7393a720"],["/posts/1688557772/index.html","c5cf0f0ba01be0c05435ac6a9377a69b"],["/posts/1710373156/index.html","b17be2ba1e133df148cb5fc73f2d28d3"],["/posts/1720998546/index.html","45da420950acc754bc36406df8596030"],["/posts/173005120/index.html","9924cf22698435c514e4354202f36f9d"],["/posts/1766000773/index.html","675caab9ebb852c70a5adc4a4ad94319"],["/posts/1845581652/index.html","900da611715fbb478672fe25a5213020"],["/posts/1988799958/index.html","049363ac3591ad115e1d080d32dbb1ad"],["/posts/2192148155/index.html","c4a73933d48dcc71b5480bc93e943a7b"],["/posts/2229302539/index.html","97812e636503845ab07334336e09797f"],["/posts/2492968201/index.html","a33c689dfdbfd912aa0a087d6f76c131"],["/posts/2949714254/index.html","ae6cf3eb22fc8719d88899bb9df278d0"],["/posts/3002318373/index.html","d40bb36e961b844bbbe4d256022682c4"],["/posts/3076558902/index.html","6b842e5231f30257a870750a7be02552"],["/posts/3147359483/index.html","acc1cf8f95f2cee496e295dc1e98012d"],["/posts/3191465731/index.html","4b8570dc7de301520009e08a993d5230"],["/posts/320179123/index.html","82ab6c9baa11694e94ac7b1d805b9f18"],["/posts/3459697331/index.html","7c6175372c82671e855da476dfdb6cf6"],["/posts/3489395119/index.html","7fd5bab5ac9cf0c3b57dae38a1e296c8"],["/posts/3525870963/index.html","1dedd098ae89266a7c7cc7e3313daeb6"],["/posts/3602722865/index.html","cef3dd54aed63c24ef5ca08f2547ca57"],["/posts/3640780602/index.html","776c630632b3d7ba71180258daafc20e"],["/posts/3679626959/index.html","30fdaa537a5e5d63929c30d5df9ba83a"],["/posts/3699598685/index.html","e0c6d266cc68cac2ca9009e1e470ead2"],["/posts/3712900673/index.html","9fec63e3df23610c72e10b12fc607acd"],["/posts/3770599674/index.html","0fa4ab05bb5ab50213ed0d2e28ae427c"],["/posts/3935350387/index.html","75edb976da1d78086d0cd6a9fee482fc"],["/posts/3948778863/index.html","384f6084326f17a41c661f9969e8a100"],["/posts/403803703/index.html","c92c19109e5fdaf8735f1ae98658e72b"],["/posts/4041933047/index.html","4c71e20667f73472bcdf08283bd68daf"],["/posts/411074811/index.html","6d053ae61e241d29629fa708e6c72c15"],["/posts/4113963045/index.html","f73dd747ac1c427f901d99cbaa4b68ef"],["/posts/4163174813/index.html","4d3306ce37950300df10b75251594da8"],["/posts/4185022581/index.html","b67ee28f47e4f91fdd4ca065bd58d95e"],["/posts/4192746113/index.html","38ff6ba853d906003bdb0bf706754dbd"],["/posts/719776913/index.html","00c908832d54e39b2a0b706648fe26ec"],["/posts/741067372/index.html","8cf671f8b40dcb14aa24add9d9e3bd6f"],["/posts/776340048/index.html","9daa7238d9bff199d6032c076e6080c1"],["/posts/888354975/index.html","cf27da73ee11261d8f6bb009447a023a"],["/style.css","a6ebf61436de10a0c92cd25adf7bfccd"],["/sw-register.js","69067cb7c9bb2f573108bfb403f02044"],["/tags/index.html","ebf524400c328689165a18a678f19138"],["/tags/冰与火之歌/index.html","03f2368db77d2f21aa9e75bfe99b38c2"],["/tags/冰与火之歌/page/2/index.html","c758a1749a1ee886ac7add21454b3c4d"],["/tags/指珊/index.html","e6385480ab0788ea65794d9cf6f75024"],["/tags/指珊/page/2/index.html","50927155a94250f40581914de127ec3f"],["/tags/摸鱼之作/index.html","e6edad672186f823c1a9ca3bbc110e4d"],["/tags/日常/index.html","0292df7f094b54cc346a94d724710c16"],["/tags/柠梨/index.html","ee686db73b1dbe2f856e5a2f70bcc94b"],["/tags/柠梨/page/2/index.html","703e4458e421034769f88ca714e9a2ed"],["/tags/柠梨/page/3/index.html","b213344cba2c00aa99034d9443a6b54a"],["/tags/柠梨/page/4/index.html","6cc498f97d324c89fb8a7e6bafb2e86c"],["/tags/柠梨/page/5/index.html","42fe11f5d56bad3f9679de3a2f607c2f"],["/tags/柠梨/page/6/index.html","2e879deeeee89e7cb43197cf7d2a6092"],["/tags/柠梨/page/7/index.html","d616c67ac54b29d61ee2b01b8b1c942f"],["/tags/狂飙/index.html","0f51a1fe1eb11638b1aa433e38568c27"],["/tags/镛武侠/index.html","f38c46f46cd57331c2b65b02fa7d3569"]];
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
