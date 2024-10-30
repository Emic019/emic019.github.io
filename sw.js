/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","a32b0deb2d8f607f6e748c6b3b64b524"],["/2024/07/08/月照天山雪（2）/index.html","5c29f9f8bbbd72faf68e00dba0e41917"],["/2024/07/08/阅读须知/index.html","ae69e2f54f6f5f7d86fde356bd6c3545"],["/2024/07/09/同床异梦/index.html","8ec22fe7ab76679df8314e5a896ae70a"],["/2024/07/09/月照天山雪（3）/index.html","1cbdc59f91e93571324d3f3489d89e60"],["/2024/07/09/月照天山雪（4）/index.html","463e47b870f4aa96166b4e5c15c6e188"],["/2024/07/09/月照天山雪（5）/index.html","c58756feafb9acc300aa4421c65029f4"],["/2024/07/10/ceshi/index.html","56f7f28da368aa804f6c060647d8021f"],["/2024/07/10/一千零一夜/index.html","ebeb1b4adada03e725115dc830979391"],["/2024/07/10/风雪夜归人/index.html","d971dc3a814ead5fe72a02e697fa95cc"],["/2024/07/12/与敌同行（1-1）/index.html","c88ec4804b5bf72d8b036e8eb9e80eca"],["/2024/07/12/与敌同行（1-2）/index.html","c0704c6574379a59e163000eef841ffd"],["/2024/07/12/与敌同行（1-3）/index.html","d8e691ab7378c9f82e4a5bb0c6477d04"],["/2024/07/12/与敌同行（1-4）/index.html","9b75b6cb1c3c4b5da37d4e62f63af96b"],["/2024/07/12/与敌同行（1-5）/index.html","29022a76ed7557243bad4494fb69d68d"],["/2024/07/12/与敌同行（1-6）/index.html","606a4f025c84d6422a645424c61b3ded"],["/2024/07/12/与敌同行（1-7）/index.html","db06cbfe564e1dfd3e131c342797df5d"],["/2024/07/12/与敌同行（1-8）/index.html","f554f6131971fbcf4ff7c0ad0c9a1b76"],["/2024/07/12/与敌同行（1-9）/index.html","d90cdf16558ed41ff3c5209387144323"],["/2024/07/12/与敌同行（2-1）/index.html","808e8dca85cf219f427f215cc0c8886e"],["/2024/07/12/与敌同行（2-2）/index.html","858d972d6cac7d2c366d0966ee3561cc"],["/2024/07/12/孤独地狱（上）/index.html","d33127511ecea1ae32d93a0ddcc9cb4f"],["/2024/07/12/孤独地狱（下）/index.html","66d57c18a212f50ee3abce281a687afe"],["/2024/07/12/玉生烟/index.html","a2873504b64cddb7985805c7e7590207"],["/2024/07/12/知更鸟颂歌（1）/index.html","b44cc45ea5fb2d845080d8d6c526a0ca"],["/2024/07/12/知更鸟颂歌（2）/index.html","576bf349db29546b6eaf5549253fae03"],["/2024/07/28/与敌同行（2-3）/index.html","4563bc51de6b1829635f5bdb62b5b3de"],["/2024/07/28/知更鸟颂歌（3）/index.html","97afeaab421ba54cdd69185eac9bc07a"],["/2024/07/28/知更鸟颂歌（4）/index.html","646cdeea1c234657f45bb694d776909b"],["/2024/07/28/知更鸟颂歌（5）/index.html","4f9371d7d01ee5984cf5dae042025b68"],["/2024/08/24/与敌同行（2-4）/index.html","802bd6b5e6f3da097e002b8c88aeedf9"],["/2024/09/02/与敌同行（2-5）/index.html","6aec73f4addbbf7dba898a5c6fb9613b"],["/2024/09/02/与敌同行（2-6）/index.html","de7eec70c842e5893666e551e6a79719"],["/2024/09/15/与敌同行（2-7）/index.html","f3ac859e13b5bdcd5f307e31493d73ff"],["/2024/10/03/失落的应许之地（1）/index.html","db8d635fdf31aebf7d16d81cd4b14872"],["/2024/10/27/与敌同行（2-8）/index.html","f0cc30c91f00ad7ad3141f8b32e06bc1"],["/archives/2024/07/index.html","8df507e117a453d5ea4fd1fbc51c8a00"],["/archives/2024/07/page/2/index.html","0a1427d7a2d5f6fdb41a29fd42f12b69"],["/archives/2024/07/page/3/index.html","20697f7766f25c739a9be3b4d1ac51ae"],["/archives/2024/07/page/4/index.html","d21de8e15764df4597589c0c4f38fc0f"],["/archives/2024/07/page/5/index.html","6f59a606b1c25e91fe22f7286063bd23"],["/archives/2024/07/page/6/index.html","16161fe55213832f9ed19db1e6526f8c"],["/archives/2024/08/index.html","8b141af230f4e4174c4f154d7e917e18"],["/archives/2024/09/index.html","55dc07323a23f1db7982e49245eae346"],["/archives/2024/10/index.html","4ce9e3a813dd8980ea81f1152069bbc4"],["/archives/2024/index.html","b37a5de54d97e413090561689b4b6016"],["/archives/2024/page/2/index.html","58ae87a3583caa7e68d448748e74a355"],["/archives/2024/page/3/index.html","5ef0af91ba5d2832428be221dc84ec06"],["/archives/2024/page/4/index.html","134436397391bb3ee70bab2d7e7022c3"],["/archives/2024/page/5/index.html","3cb1c1e942c32c606d2c706f6d74546b"],["/archives/2024/page/6/index.html","b95d511b8b11ba06aa1ddffee33f6cc2"],["/archives/2024/page/7/index.html","9ccbc0858356510d5f647279db45c66e"],["/archives/2024/page/8/index.html","e37e9d4fc1a7945ebf5fb4e0efd2e28f"],["/archives/index.html","422820a0e80cc39a0ae375cf0502003f"],["/archives/page/2/index.html","8414c40b82ee982bdc1a008b7895b01f"],["/archives/page/3/index.html","a99d4ab9eb1351850b32b284579192f6"],["/archives/page/4/index.html","33614d6363c1c1344f2585065045cf3e"],["/archives/page/5/index.html","9411ebc6be19786fe70c03e7db29e2ac"],["/archives/page/6/index.html","c97aa8546f6a75bf07e48afa80b1da51"],["/archives/page/7/index.html","8b6eca6d814b320869f426da0d3e9d42"],["/archives/page/8/index.html","d33147f8ed5a602a52e18148ba76fed1"],["/assets/别和数据聊感情.html","3bfa82a5f1fe2df4f12e088ce97a7bc8"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","20513bb27748c9f442bc494e0fc95342"],["/categories/与敌同行（梨综）/index.html","b95391013442b56ef521e7316d692f62"],["/categories/与敌同行（梨综）/page/2/index.html","3b3d7d526b30339252c4876280faa1a2"],["/categories/与敌同行（梨综）/page/3/index.html","208d86461436aed5a0b9ff83d39afa41"],["/categories/与敌同行（梨综）/page/4/index.html","0cf109dc8ff4eaf368cba8627a82746e"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","64f19ed978e5071f3f88e53193fd8a2a"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","f8bfdeb25b4cc29859cfe8fc6ac2a2ce"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","65f7b9d34f8527e6632f0a6db2b4b6db"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","56957a260fe147061f9001d199e6718b"],["/categories/失落的应许之地/index.html","c25047e6229acee8b1942850336d75eb"],["/categories/失落的应许之地/别和数据聊感情/index.html","fffccb4066f94336fff5210de6b5526d"],["/categories/月照天山雪/index.html","62390289708c41d5d88f18a2da885d7b"],["/categories/月照天山雪/page/2/index.html","4a1b49153793241d95c4b4b4ed92e7e9"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","653052c240dcc11f4e702bfc5e02cfb2"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","e2091e3d6ecab6fcda1e1ee6181a2513"],["/categories/狂飙，乱飙，发飙/index.html","bb73ca6a36b1f19b6ebafb0ecbabe32b"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","099a5fc213293bfd79b3120435074bc6"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","bb3c641fbf3bd70765efa1a848e391a9"],["/categories/知更鸟颂歌/index.html","56d49dc9126a0a1d5e1e45ebc802862a"],["/categories/知更鸟颂歌/序曲/index.html","bf39a05e08acdedb640583e5dc24a8ea"],["/categories/知更鸟颂歌/颂歌组曲/index.html","108fb156c0819413208884bd10afa968"],["/categories/短篇/index.html","ed1b1a8e5ca1fba129fff917c18daf3b"],["/categories/短篇/同床异梦（指珊）/index.html","fde31a6f1fe9bec268185ec7a502c804"],["/categories/短篇/玉生烟/index.html","8b89c1af2657cbbf063b2e48c4bb9273"],["/categories/短篇/风雪夜归人（陆直）/index.html","af9ed3d7996e954c4a8f66beb2c1339d"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","9483ebf38bbc81b7ed25b50fd7b249b2"],["/css/noscript.css","6ff36857dd21395beaa905255de7b0b9"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","95e4c21892bebf437e23dca445d44afc"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","69f7475b5384627f7058c50e5dc01cd1"],["/page/3/index.html","88215613820b896fe2dd3ca53fcfadfc"],["/page/4/index.html","ba7db5419306523749cb5c63b4c0baff"],["/page/5/index.html","99ae1c803567d2f5e8235de725bdf109"],["/page/6/index.html","508c08a4995b9c78874e9b7d626c0193"],["/page/7/index.html","976363da59caccad8fe5e32334bff21f"],["/page/8/index.html","13ef9b38ee27003f875466c0d2c4393a"],["/style.css","eee84772c7e18200399f6afd5fd13ef7"],["/sw-register.js","cdf61c2e355282ee59653bf81ca8c939"],["/tags/index.html","15d57f6469933f278e24ab42c6944a44"],["/tags/冰与火之歌/index.html","ad8e9df230a9a5d115ce14e1fc045d48"],["/tags/冰与火之歌/page/2/index.html","6ea120dc68170a09e4a5bb8c948bbc07"],["/tags/摸鱼之作/index.html","743ea46a62c62ceae8700bc70e9f0262"],["/tags/日常/index.html","e9cfbcd944c5055252f4f481b3129b60"],["/tags/柠梨/index.html","b731e2766db610d2db11a87a0e8dca0d"],["/tags/柠梨/page/2/index.html","e0857c9ca7e972ebffda7bc91c2bbdf6"],["/tags/柠梨/page/3/index.html","f4cecc523a82634ba591afb5cab5775a"],["/tags/柠梨/page/4/index.html","d2a17a94afbc6f0b82553d7e0b63ae18"],["/tags/狂飙/index.html","858d46ccff9c377b543bac113b705d5d"],["/tags/镛武侠/index.html","d23d1e5a0b0d95afc75c9971bc096c9c"]];
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
