/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7d3c7e9130dcfaeabf69c104de3be18f"],["/about/index.html","68153f3b2cf358287ab6c6ea442db414"],["/archives/2024/07/index.html","dcb7b499ee6be42da75ffabf5d271662"],["/archives/2024/07/page/2/index.html","eb8f56b8cf1728188eb60a11f06077c3"],["/archives/2024/07/page/3/index.html","83a66e83ab2a32f46ad748aac711e75f"],["/archives/2024/07/page/4/index.html","7e36babe59972f615310060a8f86169f"],["/archives/2024/07/page/5/index.html","78abf08f7126a00cb83873cbada45a80"],["/archives/2024/07/page/6/index.html","3733a30d6453543e9336b8b0bd847f6e"],["/archives/2024/08/index.html","b5d7d87b0069f4050f4285f70b26eb3b"],["/archives/2024/09/index.html","cd330847772e49a3ecffc1dfea71d397"],["/archives/2024/10/index.html","248ba1cfe08bf7fbd67e94998a274f9b"],["/archives/2024/11/index.html","9a5edb9f653234da38a51df7b5dcc6de"],["/archives/2024/12/index.html","154ec205a76230a0bce7f345e519c86c"],["/archives/2024/index.html","42ab9ce778fb60f67fb068e097e17977"],["/archives/2024/page/2/index.html","6279f9dc2521c13897d3612ec9b3997c"],["/archives/2024/page/3/index.html","23bde724aa48404ea2ea204767781f40"],["/archives/2024/page/4/index.html","416cca824731af8067ea5f29df509cca"],["/archives/2024/page/5/index.html","1d7822d350f4abf7330ae8983d5116e2"],["/archives/2024/page/6/index.html","d4ec622c8eeeda97bd851b6f6b965f19"],["/archives/2024/page/7/index.html","b929e70609f155ecb06413c65fae697d"],["/archives/2024/page/8/index.html","975cda49c050232fb63f2133a24dff5b"],["/archives/2024/page/9/index.html","ea1febf48055afeb045fc31c6b302528"],["/archives/index.html","287431ebb861d66873dfcce730e54491"],["/archives/page/2/index.html","e26f66cd717de4cf645114f5b92fd94f"],["/archives/page/3/index.html","d465519fd4846bb8936c2655a75794b5"],["/archives/page/4/index.html","84fa0b519cf3671d2dd28b894f5a69b6"],["/archives/page/5/index.html","197994b8611380d6645c9f68b369d707"],["/archives/page/6/index.html","5641d847f6c979663dfb1230ee4c7bf4"],["/archives/page/7/index.html","4977ab9687c8d33ff05b6c25f7cfac71"],["/archives/page/8/index.html","07d2e1b3169d6a9680370a14c5507bc0"],["/archives/page/9/index.html","31ffe07fc9df776efaa1875431336b10"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/其他/4.jpg","21c68f2ac68d06ba3c8382317920b373"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bundle.js","ae4e1d30dbf673ab85c4821ad81d0367"],["/categories/index.html","fca41e91a88b29417ff2af3c1eddf611"],["/categories/与敌同行（梨综）/index.html","4054b8bb1c1078172f6bca03778e70ad"],["/categories/与敌同行（梨综）/page/2/index.html","90ac4eb3a610a8f01320a9032fdca223"],["/categories/与敌同行（梨综）/page/3/index.html","1f6482b4a1d3bf4352c81f52a52c10e2"],["/categories/与敌同行（梨综）/page/4/index.html","61f58996d56ff8780e3ee540aa9a134a"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","6816ea651037425210672599834402eb"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","7b90447c1dcbf755be9e869bcba1b086"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","6770a009d1351567326bf4e553661224"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","2e78f93bb4e0e917f98d073438736178"],["/categories/千千万万遍（指珊）/index.html","67d982f24f4b26c13110fa840b877259"],["/categories/千千万万遍（指珊）/page/2/index.html","f6d31143481286318f268e7beb920560"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","eb50343f42be2d822a7f9a8c16215b4a"],["/categories/千千万万遍（指珊）/同床异梦/index.html","148b956ee1abc2f144e33dab3352b8ca"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","6417fbd45792143992c9f38ada7c61bd"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","9149036904d5b95c8910b083be946e26"],["/categories/失落的应许之地/index.html","f42b4d871887dcab7a035015f8fb14c6"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","712a4871384d348106d99b48df647097"],["/categories/失落的应许之地/神明的游戏（刘正毅）/index.html","10b90802130386c80da0534e3b9a9965"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","846ed06838ebff7f9600030e2ae63421"],["/categories/月照天山雪/index.html","0f493e23417652364e3b8aa9e699989b"],["/categories/月照天山雪/page/2/index.html","c59e7f36df859feab23a40fb280560c1"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","96da9d86088bcdbe0f1e9ce80a0da15e"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","6248bc551be976bbdd041917f4b534d5"],["/categories/狂飙，乱飙，发飙/index.html","ee188e439a590a7b072d0332e424fa4e"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","796522f3e17d6a145fe628688a7b49af"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","61c7394c25fe23b7996f1f3ba5e805c2"],["/categories/短篇/index.html","03b5b108b9afce04f8f7633c8ae9a31a"],["/categories/短篇/玉生烟/index.html","d486a20a574f595dcef0279e805ce048"],["/categories/短篇/破戒（马魁）/index.html","b6013e228763266e0018fe27fcb589fe"],["/categories/繁城之下/index.html","d72d041c865ecc2292ef01bd6a785e85"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","ebf9197a7962188ce787fab492fd580c"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","fc0073c5d47a99ef82d2e45a88a04636"],["/css/custom.css","f9dde3418e56433d63328d5407c4613d"],["/css/gitalk.css","ef24a6bc7bbb3e646cb8b74914e0493e"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/highlight-dark.css","87115586e9e18379eea1d8bdbbba061b"],["/css/highlight.css","ee4f1c09b09d02278b32956e74c675ed"],["/css/main.css","9f081e942ce2355a426b699567e10abf"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","197de89803c48c7f339e3b6536ae8767"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","88764e1413afcd3129542316fe2fcf0f"],["/page/2/index.html","f8c745142f31b02db2e241870203be1f"],["/page/3/index.html","609ea28449b6518dd6a3ea28600e3e77"],["/page/4/index.html","6162cf2754f4482b1b7887350698cf71"],["/page/5/index.html","38d508231f0183f6f7420dc469487dbe"],["/page/6/index.html","a75a33e8856b166a02ed9767f8eb7669"],["/page/7/index.html","60081fcacc6fcc8d696f02c54f5c2d33"],["/page/8/index.html","5ae363407c7db91d7fcac25a4f0076f5"],["/page/9/index.html","8a65b9b0dee86b27e0bef007ef92093b"],["/posts/1083795192/index.html","0e1d4e80b8565104fa7ddb280bf94555"],["/posts/1099216759/index.html","0f9dc90c8535d19b95de5704ce9b90ac"],["/posts/1195093070/index.html","a800d74d1146f2bd3e04d39b1d96744c"],["/posts/12506394/index.html","8fc6317b9d1eba397b75ae9c21a90726"],["/posts/1315809802/index.html","4a4fad520167b7c56c3463d241a867cd"],["/posts/1329165323/index.html","101f8cafcbfb8570ded146b490019ea9"],["/posts/1378666774/index.html","bec3edba2f927b6e414dd0087edcda1e"],["/posts/1407316490/index.html","df69d3d4d10c2e743d1ad5545d7d4944"],["/posts/1434824932/index.html","572171973212140c14ba2e2d723846d7"],["/posts/1445707477/index.html","85c0d35c79e26c064f58f3095c1f913e"],["/posts/1465373355/index.html","e6cf7c1368e41e92c5ca411a6367e5bd"],["/posts/1681850936/index.html","8e0780db5c0863112413486185beb165"],["/posts/1710373156/index.html","aa284c61f37899a43cea9c39d32acd70"],["/posts/1720998546/index.html","3b80011e46baa9aa44aa6b9593c63f11"],["/posts/173005120/index.html","af1e183c2f999541174bf7bbec276862"],["/posts/1988799958/index.html","557f7d6160a3be8fbbc751e3c059851f"],["/posts/2192148155/index.html","4715c720399333af8c3b540d05b05803"],["/posts/2229302539/index.html","04e6dcec10e66e8c68b1f323ba4dbed0"],["/posts/2492968201/index.html","fea04a35fc32a63a19fa7ead941059d2"],["/posts/2817232307/index.html","9b473e57406fb3cf531e3f2a62d92881"],["/posts/2949714254/index.html","088ed68578040435f68eaf6c65e9812b"],["/posts/3002318373/index.html","6165573dd76a813c57c5981aa11b3928"],["/posts/3076558902/index.html","84f7f55cc851c92d0ee2be82f1410dba"],["/posts/3147359483/index.html","5702949c2c9716983ea9aad9693275f8"],["/posts/3191465731/index.html","37b7fd665731afec399fdb70cfcee0b5"],["/posts/3459697331/index.html","94cea20126f05627e010c4d9c9f60a1c"],["/posts/3489395119/index.html","df850220c1eaaf24791681c818bd5c34"],["/posts/3525870963/index.html","7b16935e759c51dd9a5dd11c6d61080f"],["/posts/3640780602/index.html","37012bc214b496de2e23c08b26fe8c5b"],["/posts/3699598685/index.html","ac7a8c812fddffe97fdbef10c8c33386"],["/posts/3712900673/index.html","1498a86f7d8ff235c015e54832145c35"],["/posts/3770599674/index.html","a42832e00d886742cd687831216ae3e4"],["/posts/3935350387/index.html","6fcec2d7acf6e003432a9152890f9314"],["/posts/3948778863/index.html","b64353493ffe28a11b663d59b19fe4e8"],["/posts/403803703/index.html","6769b30da7f758674f9707b165bf3849"],["/posts/4041933047/index.html","d9e8473b36d8080aa5ab802a4f75ebe4"],["/posts/411074811/index.html","99547f27f6017724d23e619fe39e6352"],["/posts/4113963045/index.html","dc53f5bda70d4bb20172a1891f72dd36"],["/posts/4163174813/index.html","3953526f05ee3a1d30bf5c1117559bea"],["/posts/4192746113/index.html","24bf31392b6b793d9bf06772855876c3"],["/posts/741067372/index.html","777f12a63a60645e72ff981fd93adb9e"],["/posts/888354975/index.html","e5992716dbb752da2e3c47fa0ec09a74"],["/style.css","7ec0273dbc4188742c00195b5508ee16"],["/sw-register.js","bc7b56d63be8ead10c0b2c3c48f90d81"],["/tags/index.html","9f4f277eb30607ed8b1c1b7428a6b1c0"],["/tags/冰与火之歌/index.html","55aeeca6064cf8253d8200a1a085ba5e"],["/tags/冰与火之歌/page/2/index.html","6a79f27de3f2d79bb168167029abf9f7"],["/tags/摸鱼之作/index.html","5fe1c91d60ebb1aefe6f04d015a1d177"],["/tags/日常/index.html","8b5a9d40e69d8a302fb6177b4ab4e55c"],["/tags/柠梨/index.html","3ce917455a0a8003d50c050d47ed2b44"],["/tags/柠梨/page/2/index.html","9eb0c19eb48c995756d702cc7828a962"],["/tags/柠梨/page/3/index.html","e49204136a7546ca93e7d76a66e6482e"],["/tags/柠梨/page/4/index.html","8d4b4ca5ae3c54ee67faa00a621e45f9"],["/tags/柠梨/page/5/index.html","c5a7f240e90a7da074d2958f90530c54"],["/tags/狂飙/index.html","0e5a2a856623962e3c2a6dc66432e186"],["/tags/镛武侠/index.html","d1792dd60728111957077b81e481b628"]];
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
