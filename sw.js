/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7162ee66af4694dd7fd1dbdacdd97623"],["/about/index.html","c7711550af1656246fb7f6e3109f0b6f"],["/archives/2024/07/index.html","f0f02905b14ff491b52a5529d8351f86"],["/archives/2024/07/page/2/index.html","c5c4149973fb8827a0dac563b0c8706a"],["/archives/2024/07/page/3/index.html","9508fc624d7afc35477000f0c1335541"],["/archives/2024/07/page/4/index.html","255eb700f273c876b17dda9e1d26c001"],["/archives/2024/07/page/5/index.html","4f9aae2bcabb12d358a2352d2b484bec"],["/archives/2024/07/page/6/index.html","56bb98d49bd1b88d16d909e1f8030801"],["/archives/2024/08/index.html","05f841f819e88e14d1556ee5e11e244d"],["/archives/2024/09/index.html","7e8c6e47436eed55eb35da74ab1dbe89"],["/archives/2024/10/index.html","c8bc5ddac724a21f9c2d5c61cb750f78"],["/archives/2024/11/index.html","fd12bc2243d5df8c9736643d483d423e"],["/archives/2024/12/index.html","d73b712babaa324d4e2ab154d3785717"],["/archives/2024/index.html","f598db3780225fe9bdf698d521bc45fb"],["/archives/2024/page/2/index.html","f656b1da7e53c917ae999220550c171c"],["/archives/2024/page/3/index.html","15eea3d855f02f92e8ad2e6cd300d933"],["/archives/2024/page/4/index.html","3b075d65c7d7af8c38da785ef457f209"],["/archives/2024/page/5/index.html","dfed9a6e537ac1b66f6a7fcc609693e5"],["/archives/2024/page/6/index.html","2a74708c516267f97b17957207e0e5f5"],["/archives/2024/page/7/index.html","89bdfbbcfd46bb886b1254f303914a9f"],["/archives/2024/page/8/index.html","0374c0f99d59a0ff85cc9b394d332b12"],["/archives/2024/page/9/index.html","e65d3454eba156d4ed8a6f29fdba4e20"],["/archives/2025/02/index.html","3cb1c2aaa41d08555b9005c9ce79c49a"],["/archives/2025/index.html","ab58aae45e4f52409218f0738cd13ae0"],["/archives/index.html","70db58b5459e85d84a4128935d300c83"],["/archives/page/2/index.html","e6f08c6d6fae9730af7d0b29b3d81986"],["/archives/page/3/index.html","862104990f1c3e21876908f6d61e88e3"],["/archives/page/4/index.html","0195402bdbaefaf5c1e925cb221f981e"],["/archives/page/5/index.html","981c2ce206a8311228abfb42d37db0db"],["/archives/page/6/index.html","b3fbd67648585d508d85c5058e1a770d"],["/archives/page/7/index.html","8af917d7a2ef19b78011640ec1c72636"],["/archives/page/8/index.html","4014993e29ef1d2b33b5090ce5cd6c1b"],["/archives/page/9/index.html","6aa71ae2a56dd2f7468acdd2787ecb9d"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.png","c24e009c5fe94aad43ef9796f0cf1d54"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","b1dc149919290d7e80eaa0295a363397"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","ef7ea5514cd1502a3b8a09932b4cef8d"],["/categories/与敌同行/index.html","184e6b26cf83ddcc9ae95f0fd8e7cf93"],["/categories/与敌同行/page/2/index.html","1386232a99d79239737e764ebb5503fe"],["/categories/与敌同行/page/3/index.html","76376d8c673db2a493207c7eb829b657"],["/categories/与敌同行/page/4/index.html","098799a255d9aff3c3a637fefded49ac"],["/categories/与敌同行/第一卷-双镜/index.html","18cc5a9f19df3a958486405d3ebd67ed"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","0f1d0825fd7bbbaf678fc02380fc57c5"],["/categories/与敌同行/第二卷-信天游/index.html","3dc3ff421e4d6dcc78bdb51c05a94b5f"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","72e9a9725acd333bd0ac413100c846aa"],["/categories/千千万万遍/index.html","753959a01ef5467917fc3a64a108cdc5"],["/categories/失落的应许之地/index.html","1274df55877a879882919b9b343d8b83"],["/categories/月照天山雪/index.html","46108195352dc831e3c3be7ad51136c9"],["/categories/月照天山雪/page/2/index.html","04540aca166c7cfc7ee886fdfb9363aa"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","85d727ad1523354115315ec58a66200a"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","71bad3865eedf74a5e7f10ea2056f87c"],["/categories/狂飙，乱飙，发飙/index.html","d38479b5c1590eb0463dbad9b02950c0"],["/categories/短篇/index.html","b610dd4e8a033f570fb73f24d62fd62a"],["/categories/破戒/index.html","121128ffad8c8ad8342edde534564599"],["/categories/繁城之下/index.html","5ac4e2b83df1319fe5ac44517dd3c92a"],["/categories/长夜漫漫路迢迢/index.html","17c6875f6fd83e7964755558fbae40ce"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","db3a89956eba4d127f4aab5a444aba93"],["/css/modify.css","4aa7cf2bd50e24e48aa7aa98bfd6713d"],["/css/var.css","3dd845baa4d6b126c53d394f79248d02"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/img/wallpaper01.jpg","3af061aeb66c8904f2b1d2a72d8c7617"],["/img/wallpaper02.jpg","2ccf4a5eab2c87108b569cc012ccada2"],["/img/wallpaper03.jpg","f8a085e5f26352591b7ff639eb5a0dac"],["/img/wallpaper04.jpg","4985254e30803a1c1d2cad0cb7c773ee"],["/index.html","ae5f697495dcda3ecb3ebb1f09d5dead"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","90762a039e1b67836b4db8e4b768b106"],["/page/3/index.html","c8435f86ee75c3638cd2746bb20d9b87"],["/page/4/index.html","2e1455f0619a01e238f9ce744b1b18a4"],["/page/5/index.html","17c68ef55addd938fb925f66dacb1f3f"],["/page/6/index.html","b41acaffe5abf8c7f3b007979900fc4c"],["/page/7/index.html","06c097f91d1b62a8769074dfac9fbf14"],["/page/8/index.html","1fa06b6fd038fc547dab9eb4ffb200f3"],["/page/9/index.html","0760664857911e96b9ee920c28dc5ba2"],["/posts/1083795192/index.html","0a67d976d9bb4ec588dfcdf3058943d1"],["/posts/1099216759/index.html","b825c47d9938b222692c4dec2b130781"],["/posts/1195093070/index.html","af9b153fe13c864300d3e30c40bfbb4f"],["/posts/12506394/index.html","bfec9358d18280ffcc19652ebea5cc84"],["/posts/1315809802/index.html","4bfd52c02164e6382096d78e6f134497"],["/posts/1329165323/index.html","e164191610c36bc21d18e69b16b84812"],["/posts/1378666774/index.html","fe5844d306fff262dda041829fadd9a2"],["/posts/1407316490/index.html","114dc94f8a100bda990629e25e5b77f3"],["/posts/1434824932/index.html","f7ded34d1a39df717dbac2576712e726"],["/posts/1445707477/index.html","96fdbffde751a5bfcf8dc2df0c1577ac"],["/posts/1465373355/index.html","318ee0220cc79dc2c26c87f1654db0a2"],["/posts/1681850936/index.html","fdcec4edeb0a32de9dc292a0719da886"],["/posts/1710373156/index.html","7b64d33fdda0cd0c88c5f96f25d27e47"],["/posts/1720998546/index.html","a02445adaceaf321790c39bc8550af4d"],["/posts/173005120/index.html","48597010d4cbe3d268edfb24eb74bf89"],["/posts/1766000773/index.html","e0dc476800689bd57a38f3986c6aeb92"],["/posts/1988799958/index.html","4045dce3255975dd54af8c7ba7aa06e4"],["/posts/2192148155/index.html","388d744f7a6334b002dce91d94d20094"],["/posts/2229302539/index.html","3d946d4698a29b321a7e5ce52ff6c029"],["/posts/2492968201/index.html","cce61b0b018a8136021315e1015f08d7"],["/posts/2949714254/index.html","5d7870efd47a5a00449d198a8cc1acb1"],["/posts/3002318373/index.html","543736d3872d3f3e40f7b8f1c0c3cd7b"],["/posts/3076558902/index.html","3a713b186970007da30dacf7f13b6d26"],["/posts/3147359483/index.html","cbdf22473b249296e2e4a27fd3637717"],["/posts/3191465731/index.html","789e656485c2137a52481721d8be6702"],["/posts/320179123/index.html","c3a1c5f257b653a7f47638465a4841f1"],["/posts/3459697331/index.html","1172955a67d30de0e937cf432cde919b"],["/posts/3489395119/index.html","cdcc02b2f12465d4f59624e705c7d10b"],["/posts/3525870963/index.html","6dc9c1d58669a4dd59d278d8b2948378"],["/posts/3640780602/index.html","846974b75c4d336a9e728c001276cadc"],["/posts/3679626959/index.html","3fbf6c95dfcb5c168262449677d76389"],["/posts/3699598685/index.html","e07aeee21d2bb03fcc4b99b61e313815"],["/posts/3712900673/index.html","f930a0206c89a68f670c69d8a61724ac"],["/posts/3770599674/index.html","3c0e51f10ef2776c2a68d1b27296aa11"],["/posts/3935350387/index.html","d386a63f60e7371cd063f880d5c0c6b0"],["/posts/3948778863/index.html","07510a35ffb2cef228b07b1b4fc403b5"],["/posts/403803703/index.html","5b0094c4fb0c09f302f0b4378297c3e1"],["/posts/4041933047/index.html","3ba026cedc7075be381296a9bf69c710"],["/posts/411074811/index.html","229cc9820d7d1baeabfce1d90bb25b85"],["/posts/4113963045/index.html","72407887586ab0889bacd7ce9cde1c7a"],["/posts/4163174813/index.html","b90d844194b28fdbce0ebdc599b5e702"],["/posts/4192746113/index.html","76550837b00bd23edfac45ee7c65bea6"],["/posts/741067372/index.html","01494599f5a3d82422e903a9de96213b"],["/posts/888354975/index.html","86f1c8b79ceb9caacf70a585d756c098"],["/scripts/modify.js","bdd37c6b732f4f689eb0608b74480780"],["/style.css","91643d426a0b868a332361bb627be5fc"],["/sw-register.js","842e4d9375f9ad98980d31994b14f42a"],["/tags/index.html","add1d924718b40d815358b10bcb0ebf9"],["/tags/冰与火之歌/index.html","190b5f3ccbcf16f211add1ace3c6e59b"],["/tags/冰与火之歌/page/2/index.html","95de06b597568248798d148de5a2fa9e"],["/tags/指珊/index.html","b1fb8ea3eac4dcb09504df05c30eb583"],["/tags/指珊/page/2/index.html","607aff150424d70196cae972b897dfc6"],["/tags/摸鱼之作/index.html","eec206ac3ca52625665cec6e7c6f4330"],["/tags/日常/index.html","2096c2ab1a6ac60e9909c962f214c797"],["/tags/柠梨/index.html","ef2e92c6b034addd977c9e3e4fd523a3"],["/tags/柠梨/page/2/index.html","23c7c2c40a852e5266995818dddeb3cf"],["/tags/柠梨/page/3/index.html","a84bb73463e34b4961069895fbfe53e1"],["/tags/柠梨/page/4/index.html","3e4ca71811d60d97bfad05366089386a"],["/tags/柠梨/page/5/index.html","98f9fdb004bd82c816abeabbfe711ca6"],["/tags/狂飙/index.html","5255c26b0c38e8ac09182061ef22e335"],["/tags/镛武侠/index.html","ef92c10bd0c8d27240b9f2394e7b0987"]];
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
