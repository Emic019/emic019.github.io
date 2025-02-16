/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ed65d84691329384cf13b1e5d1857461"],["/about/index.html","d9ea1def0a7cd2c7d63e5c0b2a41d789"],["/archives/2024/07/index.html","80bf1c9f0d8792a85dfc60987292edcb"],["/archives/2024/07/page/2/index.html","52c70ff1f82e9a6cc8d4993214e902f9"],["/archives/2024/07/page/3/index.html","6f227d7f7ac3180844cb53987763c596"],["/archives/2024/07/page/4/index.html","dbeffbae9317f1521e6b81aa68dfbd4a"],["/archives/2024/07/page/5/index.html","2773bc556b3b10a2c420c8792a18f769"],["/archives/2024/07/page/6/index.html","27f60bd4bd81fd8e37f1fe91d9c4f92a"],["/archives/2024/08/index.html","d126da6714cc9a858e2bf94ac3889bd0"],["/archives/2024/09/index.html","7c77666286e58cd477b311002d8b913b"],["/archives/2024/10/index.html","8e54676c825196897635165d11238e7f"],["/archives/2024/11/index.html","9edc4dc89f11e84f838f0fa9f3e71155"],["/archives/2024/12/index.html","a6a30975715e24e6b6aad463a130d538"],["/archives/2024/index.html","59652c81a484265ee3ec96162758f42e"],["/archives/2024/page/2/index.html","c36d57fca4f7ea9b9050b69ae32da9fe"],["/archives/2024/page/3/index.html","32613c22b85975f98ddeaf21e1ba5cc9"],["/archives/2024/page/4/index.html","597ec2d52e6e14aaa6e25066e049b845"],["/archives/2024/page/5/index.html","86cf80517041216ff53fd958e8f1ea74"],["/archives/2024/page/6/index.html","a28cf47f70870d91f57aa78b7e358de5"],["/archives/2024/page/7/index.html","4e47bd613b755a4a127024256c407a2f"],["/archives/2024/page/8/index.html","f26a514881c77b797baabe2f063698f8"],["/archives/2024/page/9/index.html","e83415d2bc42b503455877038a65c219"],["/archives/2025/02/index.html","62ce9f002a5155c6a8c031aaa86c1ee4"],["/archives/2025/index.html","aa14f9d92abdaf548e77309573d1b07c"],["/archives/index.html","b151bf32bb55a4fa25d75d70fba6de49"],["/archives/page/2/index.html","91797a7d268a737f398643e4496ce066"],["/archives/page/3/index.html","739fc5a3d4ac38c3852189d8d4f67378"],["/archives/page/4/index.html","ec719c523865fdab275e20ca48bbc7fe"],["/archives/page/5/index.html","570c55b47999a3524a2e65ef9f70fbaf"],["/archives/page/6/index.html","a710979e740420dd555490695349df8c"],["/archives/page/7/index.html","6392c9a48c513125f933f4d4559185f5"],["/archives/page/8/index.html","4098868443637c3febef0c2a4590b7da"],["/archives/page/9/index.html","2303e27a6bb6b8f9212cd215d413ed9a"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.png","c24e009c5fe94aad43ef9796f0cf1d54"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","aa331ef051cbec3236334cb41b1076f1"],["/categories/与敌同行/index.html","eb4e3317783650a9ec777d4e1c840169"],["/categories/与敌同行/page/2/index.html","ff5f65432ee6662ad04cee3ff3d29d77"],["/categories/与敌同行/page/3/index.html","85632b0e9eae1957bd1c5fd81ee5a982"],["/categories/与敌同行/page/4/index.html","2910b274d7374c8b3f8b46d9c63cc5fc"],["/categories/与敌同行/第一卷-双镜/index.html","37c5616af488c959ce48facaf2ab7c24"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","8d2ca2923edf0cee19fc0d40aa6c6a19"],["/categories/与敌同行/第二卷-信天游/index.html","5cb4947b503fa700ce76c0938dd311af"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","3574815423c4613e903225d0bb257e3d"],["/categories/千千万万遍/index.html","a463d46f16f762587aeed3fb3167e1f3"],["/categories/失落的应许之地/index.html","58fded396ae5fb8236b99ff7bd16be06"],["/categories/月照天山雪/index.html","13c49eea43b6613387fa6c2fe2040584"],["/categories/月照天山雪/page/2/index.html","1c8bc53b6c65847c0995974d9c795701"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","febe2d4b764a2e634c9e5efcb52a5e68"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","479c1972daf0df8760abcae40d7555db"],["/categories/狂飙，乱飙，发飙/index.html","0f773876542b710ce84b9d0d979f47eb"],["/categories/短篇/index.html","f629edf7729ded866b98107a9256801b"],["/categories/破戒/index.html","1d200d8e357e0756dbf5d137028fc342"],["/categories/繁城之下/index.html","e84fa1c10b5bd760403757145b99c307"],["/categories/长夜漫漫路迢迢/index.html","8a2f91e8d682147ee5dfe8e497e1dde6"],["/css/custom.css","2ee3bcdf6a52350b0a6787baa216364c"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","88160fc6fa992fd5ad7179d8d228ef78"],["/css/modify.css","9b4dcc97417d69a2292bed657a005d94"],["/css/var.css","1f26bec949252782595f65d44ea4cf35"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/img/wallpaper01.jpg","3af061aeb66c8904f2b1d2a72d8c7617"],["/img/wallpaper02.jpg","2ccf4a5eab2c87108b569cc012ccada2"],["/img/wallpaper03.jpg","f8a085e5f26352591b7ff639eb5a0dac"],["/img/wallpaper04.jpg","4985254e30803a1c1d2cad0cb7c773ee"],["/index.html","501961ce32561a321488eea6fbbdca4b"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","daf46300b9eb1e45bc31d2a44371fc78"],["/page/3/index.html","2232dbc3ee3dd89b5c8cd36a9e4a4751"],["/page/4/index.html","dcba2f471704edb7c899599e4dcf8d12"],["/page/5/index.html","2ecc12a5ac2d62374280fdd202db9f1a"],["/page/6/index.html","7449a3723a18237c6d0edb4a576161ed"],["/page/7/index.html","a0784c98a1d71fd17820dda5a614e462"],["/page/8/index.html","0283559342cfd54abc5a5ccfee19e978"],["/page/9/index.html","f44f722bc45cee096ca1846f6085cd35"],["/posts/1083795192/index.html","7df90f337283738e278a9ce23c002a73"],["/posts/1099216759/index.html","83117efe2da4db25da53be89095c96dc"],["/posts/1195093070/index.html","ba6dda739a90aa1d03a0424c6143ece4"],["/posts/12506394/index.html","7722e819a23865a4a07c3cd946808ede"],["/posts/1315809802/index.html","a25d2e1acb7a257d1910fcf2eed2704b"],["/posts/1329165323/index.html","599a4f772c16e4f968fd938bb6909ea1"],["/posts/1378666774/index.html","8b4e10dbd559feb877243cf04d6f4d78"],["/posts/1407316490/index.html","0060e545317572013312ed64cdb090a9"],["/posts/1434824932/index.html","e2554b42e6b4e1f12b384cfd603bc7b8"],["/posts/1445707477/index.html","24c6b132839840f93e08d084a2605e53"],["/posts/1465373355/index.html","d5dd1e04e0ef264944a669b3b4f78662"],["/posts/1681850936/index.html","d9f5947ac04efffa8d65e421f55c2f13"],["/posts/1710373156/index.html","5880eec4d88c02baf944d817346a5e24"],["/posts/1720998546/index.html","1705bf882dd3456cc34785ce42b8d6d4"],["/posts/173005120/index.html","3d79d4f6974cd3c9a5efa10d8b35ed87"],["/posts/1988799958/index.html","9e3ff8be00facd5a41b889f444d10ed4"],["/posts/2192148155/index.html","3bda00c4199be0b5a37aacfd7e5cb6f5"],["/posts/2229302539/index.html","fe21d1838781d8561186176fd5546201"],["/posts/2492968201/index.html","6550069794dd16bf24aa4886052b0b9c"],["/posts/2949714254/index.html","295912f7878da173f1078edb3450c1e3"],["/posts/3002318373/index.html","60d8c8785862083e7277e56bceb7863f"],["/posts/3076558902/index.html","dd04552a6705f81f927ff21ed62473d8"],["/posts/3147359483/index.html","d6f1fc0d38c29ec189757feb8d51ba3e"],["/posts/3191465731/index.html","e8f67251dfdf4809e61199c940a7f75b"],["/posts/320179123/index.html","185ae40d78a18d47e9ac1a1bf6c89950"],["/posts/3459697331/index.html","7fc7578a3f115abd5c034ed21a4b594c"],["/posts/3489395119/index.html","b0dc6c933d6a31032d32e2860ca83bd7"],["/posts/3525870963/index.html","e61c3fb7e41e466db042ca00f43b50ac"],["/posts/3640780602/index.html","6cf0ab0593f1c7d11a97e30ac1c41093"],["/posts/3679626959/index.html","ae519136825b702c13d8a20f254a00dc"],["/posts/3699598685/index.html","280be7ea60b37f31740fe23aa2cefc28"],["/posts/3712900673/index.html","726fadee63d610ecdc2552ff92a5f1c4"],["/posts/3770599674/index.html","46ff40245de20566db4fdf1b643731c9"],["/posts/3935350387/index.html","78c760e4adde6a98325c9fd832264ed3"],["/posts/3948778863/index.html","9d22d24fca652e29ee9ed85fadb4370d"],["/posts/403803703/index.html","767c54bfe1eed3c2662fe576e40abe3e"],["/posts/4041933047/index.html","26a581215f9bf3d6e452a089a8e604ba"],["/posts/411074811/index.html","83a465c7517301d006d2973f7d3d664a"],["/posts/4113963045/index.html","205067f09642bff63d6c4bb333b79192"],["/posts/4163174813/index.html","be5e11525863e3ed1037e5dfadf4b015"],["/posts/4192746113/index.html","df46ef7ade377caf6d049770f203339b"],["/posts/741067372/index.html","0cc9e7d7d8e75f0770831edcb2b920d3"],["/posts/888354975/index.html","1a73c9bced56bdfff369a446e8e6429d"],["/style.css","b2fc0f83e9dac099a787fbed214140dc"],["/sw-register.js","e0fe59bf2cfb39795006adb83fc0f248"],["/tags/index.html","aa1092586b448df7970c048ca5cebcb0"],["/tags/冰与火之歌/index.html","e07d05427205d3b5c9204a3d9f23bf45"],["/tags/冰与火之歌/page/2/index.html","120781c8709b03dd957ec3230901e0af"],["/tags/指珊/index.html","e4a3c662418680d2e1f37e8a74d40660"],["/tags/指珊/page/2/index.html","10c3b005f56a798c9733815d3c9f26b1"],["/tags/摸鱼之作/index.html","2eaf783ef049769f99224f5ce4c39c34"],["/tags/日常/index.html","5961b218c8c24496834f19f2d1513104"],["/tags/柠梨/index.html","7ece310be1dcc73e5c0239ea3bcfa5c1"],["/tags/柠梨/page/2/index.html","2ea0c7ee1e2f123a20d1c293797f5ca2"],["/tags/柠梨/page/3/index.html","c9dbadabbf67c6ff6e6d952d30458d99"],["/tags/柠梨/page/4/index.html","25b0ab34a0ede98b4e493bb49af3186d"],["/tags/柠梨/page/5/index.html","e34279a0d37ce8a777c47424fe9a9720"],["/tags/狂飙/index.html","a142e817e9a7739a8ae4f8513066645d"],["/tags/镛武侠/index.html","5272c0b2b9fcd0202c8e227bfd36bc8c"]];
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
