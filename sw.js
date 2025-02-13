/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a19db49ca054afb9d113dc1a34880f8a"],["/about/index.html","81bd6547cf111167f5a6d8f6178edc9d"],["/archives/2024/07/index.html","b36ffa2508f9485276b0abcc5b9a908b"],["/archives/2024/07/page/2/index.html","984bd105d76cc0848680491fe0492d89"],["/archives/2024/07/page/3/index.html","219612facdec89449cd63e3356b8f344"],["/archives/2024/07/page/4/index.html","02730af5e76b49fa4619b83e3af97c33"],["/archives/2024/07/page/5/index.html","972fad59c59e1f2a66767f62467379c2"],["/archives/2024/07/page/6/index.html","1fdba66925f458b55ec22b29a3480b0c"],["/archives/2024/08/index.html","cfe9601cf435e1c365e8d54fc47f7bfc"],["/archives/2024/09/index.html","1a526f2cad22ff8cf499a9f7b26a3d1f"],["/archives/2024/10/index.html","71fd6c9fcf05930f2790aaaf50ee787c"],["/archives/2024/11/index.html","9db0fae161ae1d6e5092a6c70a5fe715"],["/archives/2024/12/index.html","3ae0d62d6a3d1844a1c6a79fa1268f2f"],["/archives/2024/index.html","b7d29978235de70133169ce708eb0db2"],["/archives/2024/page/2/index.html","7ed31f417575573a5567b4e23bfdcd73"],["/archives/2024/page/3/index.html","6319b4364829334dc7a8c1292ac31c64"],["/archives/2024/page/4/index.html","aa6605f739758725ae4824826c53990e"],["/archives/2024/page/5/index.html","c49f7b59c7cc694da6a58b92ecf23202"],["/archives/2024/page/6/index.html","9c3cac2f2a4bf4c350f495748e40b66a"],["/archives/2024/page/7/index.html","88b27cde362790d758eddf1b94b9ac69"],["/archives/2024/page/8/index.html","c781be57e983d7cc9f6ce873c50b1d94"],["/archives/2024/page/9/index.html","21c5e35fb48d411dc3dc367dccfaa9cc"],["/archives/index.html","823924584abd6c0bd37f3d89839df10b"],["/archives/page/2/index.html","1fb37bc11c13b08b31737a94a6b06c97"],["/archives/page/3/index.html","74a2d874da0e528579a04eaea08bc7b0"],["/archives/page/4/index.html","dd6677e597e45dfa4e68620e9f6739ff"],["/archives/page/5/index.html","f5ad67aa645d753a080bbaaf3ab69a9a"],["/archives/page/6/index.html","ef6f141878a71fbccf76f595190eecb1"],["/archives/page/7/index.html","ce35a24ab523db1596654ede5215ef27"],["/archives/page/8/index.html","ba761174a3aa15794a4f6056bd74a00a"],["/archives/page/9/index.html","0dfa27447cff928e0f6c6a67dd29f61b"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/其他/3.jpg","be06d26a745a9a9996041fa01cdd1603"],["/assets/其他/4.jpg","21c68f2ac68d06ba3c8382317920b373"],["/assets/冰火/1.jpg","5d11951bc575fd9cca23d8e809e87727"],["/assets/冰火/10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/冰火/11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/冰火/12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/冰火/13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/冰火/14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/冰火/15.jpg","bb10d8889caaa772fcef5afc1311998c"],["/assets/冰火/16.jpg","bc3f8df7f9b0b2b0996c150b43122d20"],["/assets/冰火/17.jpg","ac8245c2522aa34a86a99ef6b6234eb8"],["/assets/冰火/2.jpg","568f924a8db5c61cc7a1ed60b483a088"],["/assets/冰火/3.jpg","cf93aebacaa007eca28ea6ae5ee4f5ca"],["/assets/冰火/4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/冰火/5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/冰火/7.jpg","da39687e3dc6420f289fa4d34f691b1b"],["/assets/冰火/8.jpg","3231596eebac86ab2ed3f0ad6f8e817d"],["/assets/冰火/9.jpg","60414fb9fd49ea51a7426adf3536f238"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/assets/应许之地/16.jpg","d7e182fcd04df710489c62120931a107"],["/assets/应许之地/4.jpg","86a258c50aea229fc01317712c76126c"],["/assets/应许之地/5.jpg","358b27d5789b80e5f7365adf7bd1a806"],["/bundle.js","ae4e1d30dbf673ab85c4821ad81d0367"],["/categories/index.html","471ee90e863ce13fbbcc45d3ed15ecc5"],["/categories/与敌同行（梨综）/index.html","e7a5ffc541c565a01787b4883824f997"],["/categories/与敌同行（梨综）/page/2/index.html","f832435df51e65bb2532cc7c7bef8792"],["/categories/与敌同行（梨综）/page/3/index.html","23e6ac32556cda31e139e6b10b930735"],["/categories/与敌同行（梨综）/page/4/index.html","1b505841a60f679b716f6f87478c079d"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","db202042b3d3acd3db20db23b12f7d9b"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","34f5bbd3845968c013412f73f3b64d87"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","dfd5c2a42b00412b3642537c59384f02"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","634aab4b40bdccc845995e674e343596"],["/categories/千千万万遍（指珊）/index.html","a6121164f00523366ed444044778812b"],["/categories/千千万万遍（指珊）/page/2/index.html","9ecfe4afe142a7a058d3b696bfc8ae74"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","0b8a9032c3638cfac684dfe6c201791a"],["/categories/千千万万遍（指珊）/同床异梦/index.html","dd55b6a933906d1e4855023de5dd9ce1"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","43434196f24b2413b8205795510e122d"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","3ccd44896afde454fb6c97ee8aa7bad5"],["/categories/失落的应许之地/index.html","5da72f86dbf612e32296659301230300"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","6d141ef0531f3e749883c3573686c709"],["/categories/失落的应许之地/神明的游戏（刘正毅）/index.html","1043f6bacfd5d7ec1556d004d6ef7e38"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","a3a9b90b97c6d2466b83d07924fb277a"],["/categories/月照天山雪/index.html","65080af0d08152ceb5d9087b9b4ae7ac"],["/categories/月照天山雪/page/2/index.html","bec9e879ba60c4557f0afd6891a2161d"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","89d9099c8ccf919357410d7e4bfeef12"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","f49140e9f1cc193956726bb61f64bd4f"],["/categories/狂飙，乱飙，发飙/index.html","e30526d268be8c29bde867dda3d6acd8"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","e1d19f21f80cac045f0c34bc2b7398f7"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","c4cb33ca0988c8ed485798210da9208c"],["/categories/短篇/index.html","1ed663ef0e5638205b5d1b91f2a7eabd"],["/categories/短篇/玉生烟/index.html","25987aad9bd223385e0ec880ccb22b39"],["/categories/短篇/破戒（马魁）/index.html","0f32e70a77c332681ffcb4faa33d8df3"],["/categories/繁城之下/index.html","013edfdf5cdfa1e6887eea0311a21c59"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","5716fa6a9b6349fd311fe24f869dd66b"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","12191ccb360c28e4ba21e4e5a1b02b37"],["/css/custom.css","c6f9c156372043dab6af696f5b177a37"],["/css/gitalk.css","56baac3e246ffb5751a26556d8c589e1"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/highlight-dark.css","58b1e249cef26392413515293d038c38"],["/css/highlight.css","f53a64bef373935324983df0267d3a82"],["/css/main.css","95325fe10e8374e9edd4ed757af7f9f2"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","9e4b7ef482069e60889faa357d3073c3"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","421d3f23f247a7810b0e299ae4042a36"],["/page/2/index.html","449dee20e62815ebe9936a6c66410da9"],["/page/3/index.html","1beaede7ca0bd2d9dcdcdd44e3d89ba3"],["/page/4/index.html","46786df4cbe8eaad75cf2851c5396f29"],["/page/5/index.html","7b1d72f3c96d281db589df085c1986ed"],["/page/6/index.html","c7b99e1a5e33b0604c4fbc612885673c"],["/page/7/index.html","c04b679916ac0a99a62c23f7966cabac"],["/page/8/index.html","6a7bc1b949a871e61797f0993ce4dcb4"],["/page/9/index.html","33e8f470455ee2c6ee34987e58ad0c1d"],["/posts/1083795192/index.html","d030f0f4edec41eee82eacc6eadc4a8a"],["/posts/1099216759/index.html","89f30abd3bbc8534acdc9f1ad59c52a8"],["/posts/1195093070/index.html","9031bc69677656aa97b4b17cf7de28f0"],["/posts/12506394/index.html","aa75345d5ef9837f196031729bd60222"],["/posts/1315809802/index.html","fd6d360b01d2bd3490b2c7196c4b71c5"],["/posts/1329165323/index.html","d3f05e3133f76df503c0917a1ab6a379"],["/posts/1378666774/index.html","a3d952be49b1af51689522072b709720"],["/posts/1407316490/index.html","72860b44fdeef7ac74697fcc7b0c837e"],["/posts/1434824932/index.html","f877c0db4d742828b07d8fd4d7a131fc"],["/posts/1445707477/index.html","a2bcb41489e5a36ffead7162bba2f894"],["/posts/1465373355/index.html","4acb86afea1499abbbca26a4cf119f22"],["/posts/1681850936/index.html","a3a2a996062ed6efaff6a8a2c302ee8b"],["/posts/1710373156/index.html","706725beb0726be9c808116a687dfb43"],["/posts/1720998546/index.html","2ebbb179d3c4f6dab59a0381c419935c"],["/posts/173005120/index.html","bbdf74d529ad086d35b946021d95e386"],["/posts/1988799958/index.html","c249483b6e103c98b9ea0d5dd7d8dc39"],["/posts/2192148155/index.html","9de2c52c3e2bf787d3561b12e38abab9"],["/posts/2229302539/index.html","bcdf5c60c98ce9384b4965901e7f73a0"],["/posts/2492968201/index.html","7e470833fd38da28ca56eb670fe9caf6"],["/posts/2817232307/index.html","0d6d496c8e029d120042dea4f1570dfb"],["/posts/2949714254/index.html","1f252ae2afdc28ea5c0dd4af19a21376"],["/posts/3002318373/index.html","c63636e3935a74a92724e246524e3723"],["/posts/3076558902/index.html","c104e2c86060eb1b914db70f0b0039fa"],["/posts/3147359483/index.html","994d03b389d105b28c67efb74d8b079a"],["/posts/3191465731/index.html","c5f94ddec92c7eba9226f572e82a910a"],["/posts/3459697331/index.html","96a39f17bd6e548f039efc59fee21547"],["/posts/3489395119/index.html","a588e10825865be3509bd04830a4910e"],["/posts/3525870963/index.html","481377b462edf548b58bd95412ba65a5"],["/posts/3640780602/index.html","c3809532234eb7f648848fe2e891dd91"],["/posts/3699598685/index.html","a9da2dbae9aa4c149a7c044df275d963"],["/posts/3712900673/index.html","a3b16b018c5fe4282f5bd23c1b9193e8"],["/posts/3770599674/index.html","9fb2dc9119ea475193c13b63414370f4"],["/posts/3935350387/index.html","1d8f7be05b1b4ded5abc57f9da26b5e0"],["/posts/3948778863/index.html","dc2dcba2d15069cae7812e4139d8a20a"],["/posts/403803703/index.html","9ae3669d0d21c3b2fd12c119448b08d7"],["/posts/4041933047/index.html","24b2d16c18ba5939e30fed8a49f08748"],["/posts/411074811/index.html","02c22347857b1e51a5b22188859a238e"],["/posts/4113963045/index.html","13da82405462837bc970fc2a29a7c176"],["/posts/4163174813/index.html","44ba474b151cd3e3c433f9efe0ee9d2a"],["/posts/4192746113/index.html","1a1cdabab95010caa2d6e1185174dca3"],["/posts/741067372/index.html","1264aee960425abd5069877cafdfa2af"],["/posts/888354975/index.html","51b1675f3ff776496f2c019e8b95ccfd"],["/style.css","8b84b3336c24bb927be73b54c54c43d0"],["/sw-register.js","b7531495f93f5fd268148df43a68a0c3"],["/tags/index.html","bfafdb625dd4a34e5c315a410f3d76de"],["/tags/冰与火之歌/index.html","078bbecbb1feb435998c8d722ba7a6f6"],["/tags/冰与火之歌/page/2/index.html","e1397301b2a44bf418caca0aaed37bc5"],["/tags/摸鱼之作/index.html","d264c0dff08c80d545f08d78e224d055"],["/tags/日常/index.html","5a3a8a68afa60ee3f3d1012b721da307"],["/tags/柠梨/index.html","9f7965516d95c0341d570f65282c2c7e"],["/tags/柠梨/page/2/index.html","d6382d84df9351453d69fa17d5f47aa3"],["/tags/柠梨/page/3/index.html","e1ec59df929fbf2f0ae842aac29d4a23"],["/tags/柠梨/page/4/index.html","2469fba57fea5df184cff53e510cc933"],["/tags/柠梨/page/5/index.html","8a7b15a7da6e2fda27809c9481a0f47c"],["/tags/狂飙/index.html","772ef0c2bc1faa6bea46a7d299b01b00"],["/tags/镛武侠/index.html","2b8b8a86f0d86247702e9b508af9f02a"]];
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
