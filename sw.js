/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","f426005cbde5fa751c31b79f899ae8aa"],["/2024/07/08/月照天山雪（2）/index.html","fb37c2cf1669aa5f5591f184985421de"],["/2024/07/08/阅读须知/index.html","c624dac7451e525c3c1274cd6b6d394f"],["/2024/07/09/同床异梦/index.html","86815a030472dfe5ab5994e541732197"],["/2024/07/09/月照天山雪（3）/index.html","9e9d745a60cd6075bf40d418928c9cbb"],["/2024/07/09/月照天山雪（4）/index.html","38856b6031861f675def2e070297d329"],["/2024/07/09/月照天山雪（5）/index.html","75d751aa0fc6cbf5681f2bd18db6d276"],["/2024/07/10/ceshi/index.html","2305fa66c7d09c62b6ef29c29e626dcf"],["/2024/07/10/一千零一夜/index.html","3fdae50aadc90158a0a244f59a5d39b5"],["/2024/07/10/风雪夜归人/index.html","e91cac687b1897853c1f3608035e72f1"],["/2024/07/12/与敌同行（1-1）/index.html","792a08f4a0a521b59c7339864ac20489"],["/2024/07/12/与敌同行（1-2）/index.html","3b9bd283b4faf1c236cf41e31b9ab557"],["/2024/07/12/与敌同行（1-3）/index.html","2f7910095bea78a8f96ef9e094560b47"],["/2024/07/12/与敌同行（1-4）/index.html","2b5e6b29331d9ca79ef4bd3da07f71fe"],["/2024/07/12/与敌同行（1-5）/index.html","2fe07e0f1d2fae6940db181ba99ff964"],["/2024/07/12/与敌同行（1-6）/index.html","72098b6686fcd150a09c0d4c8f8970ed"],["/2024/07/12/与敌同行（1-7）/index.html","8e3594379c386e315b7a06c3af9c6ff0"],["/2024/07/12/与敌同行（1-8）/index.html","fb8cd00c75ae5bbef26f47a40698bd8f"],["/2024/07/12/与敌同行（1-9）/index.html","5808ddf4605adc2fca9bc43ae1f20b37"],["/2024/07/12/与敌同行（2-1）/index.html","2a33bb7d4826898517f43772393c67c4"],["/2024/07/12/与敌同行（2-2）/index.html","7f12d65392367a5fdbec9f1d0be62ef8"],["/2024/07/12/孤独地狱（上）/index.html","8168385b936fe61a5d37a16ea12c5232"],["/2024/07/12/孤独地狱（下）/index.html","5f3150e05da8785946b98b4a000877a2"],["/2024/07/12/玉生烟/index.html","0364b84db0493a4d8fab7a26206fa662"],["/2024/07/12/知更鸟颂歌（1）/index.html","88825daa6c6b5cbcf2722f0c29bdf4a7"],["/2024/07/12/知更鸟颂歌（2）/index.html","65518b1bfd94ed1a9a6fdcf8a0268d10"],["/2024/07/28/与敌同行（2-3）/index.html","5c1d833046ba3cc292d26f074a2d893f"],["/2024/07/28/知更鸟颂歌（3）/index.html","e7ab52a47504e170db1e72c0887e8741"],["/2024/07/28/知更鸟颂歌（4）/index.html","e0d3b1f4c95e80f3cd5241fbff93d2bc"],["/2024/07/28/知更鸟颂歌（5）/index.html","1c7e97c724954095f45e38d9f11de82f"],["/2024/08/24/与敌同行（2-4）/index.html","d8d184a4a3a2e9be8de5dff3187271b2"],["/2024/09/02/与敌同行（2-5）/index.html","6da61e75a28399427b1450b553a88b63"],["/2024/09/02/与敌同行（2-6）/index.html","7937797d033741990282611fe2f7486b"],["/archives/2024/07/index.html","c4f013d9492dd78942453f74026c5ffa"],["/archives/2024/07/page/2/index.html","6f06263317d4b1c9b3539aa4eb77a4f0"],["/archives/2024/07/page/3/index.html","c0337de7be11634f2a0356f645ea58b1"],["/archives/2024/07/page/4/index.html","dbf07cd36f181da6b1a828fc10e0f489"],["/archives/2024/07/page/5/index.html","03eeeb6813f2b433e1a8b223a42c26b3"],["/archives/2024/07/page/6/index.html","febb1a620c6bb0a1c8dbba5adf3cb835"],["/archives/2024/08/index.html","20de7f89005be0721383c5582dee9ca6"],["/archives/2024/09/index.html","69c9b56aec017c9f02d6aae08704929f"],["/archives/2024/index.html","65b3c9ca3bdf80586fb71b0bb056679b"],["/archives/2024/page/2/index.html","11f1c23ea34c4ae2abf30d3ba9794d80"],["/archives/2024/page/3/index.html","2b3e5bdb341b28bf9de36d5619e713de"],["/archives/2024/page/4/index.html","62ab2690e8686aba1399d57e08ec5cea"],["/archives/2024/page/5/index.html","c83ed7e32249106fcadf50f6355fd25e"],["/archives/2024/page/6/index.html","ccc19a4cff7f9a047e8ed092af97c224"],["/archives/2024/page/7/index.html","407b8dcbcff20a516725d6820b00da3e"],["/archives/index.html","2a10f3708da9d091908872bade636986"],["/archives/page/2/index.html","8b9e7966559098a49e8f5aa3882aa5d6"],["/archives/page/3/index.html","65ce1a2e4f4c95c1e9398630c1eff81f"],["/archives/page/4/index.html","2907384bbd583e0b8639045e0e887acc"],["/archives/page/5/index.html","4d8c630fe2df1b3063054662c4c5730a"],["/archives/page/6/index.html","9450b9dd42ffc7344529ec8421f4ea2d"],["/archives/page/7/index.html","8c5b07c0f6cb0392423505fef398d79e"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","c4fe6ddd76d9213bfd0419d314e8d88b"],["/categories/与敌同行（梨综）/index.html","e0b6b2af6625277494b115774c65d1d6"],["/categories/与敌同行（梨综）/page/2/index.html","27bb0acd98e561a4d615f87e7e6f2d6e"],["/categories/与敌同行（梨综）/page/3/index.html","543ce6c4b9cb62c02974792cc002ce93"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","b249d3990e325f227fd7d28fb065707d"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","8e754f57331411ed7d9631bbfc10cd87"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","023851488966b1d741deca7fc6be9a19"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","83af805972ddb2bce7041cfaee911279"],["/categories/月照天山雪/index.html","e96216fdfc97d1e58dd672e9ba92e6d7"],["/categories/月照天山雪/page/2/index.html","5ae679790a1603d3ec69fbbacb5bb55d"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","35e03196d77baaa91023900dd4c10d70"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","228c9c3b96bde2408b8f71117dfa95eb"],["/categories/狂飙，乱飙，发飙/index.html","1ee60143a41444a10d49f993497f685a"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","6384e52bebcaf7b0c04381a47a6c1a64"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","def35983a97dd303a10105f3a4521c67"],["/categories/知更鸟颂歌/index.html","1c5adceb874524906ebf8ffd15034b18"],["/categories/知更鸟颂歌/序曲/index.html","7a0daa56485e5d57a0293cf780d130f0"],["/categories/知更鸟颂歌/颂歌组曲/index.html","af62f333caf8d823f2cb520d81620e2d"],["/categories/短篇/index.html","d58abfb44da8a7c999c72019722865bc"],["/categories/短篇/同床异梦（指珊）/index.html","91199656dcb9b19ec513afdac5da7d31"],["/categories/短篇/玉生烟/index.html","85b2e115e46f6899859599302c169544"],["/categories/短篇/风雪夜归人（陆直）/index.html","5d10344131ba1f5207d8c4238a47bcc7"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","aab36cd468a52c2ed1cfbe3c1f4821eb"],["/css/noscript.css","b61c3e29d7fbff18ca4812f4ee70873a"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","0e67fb0ceed5eaefa8c27b66ac1ee87b"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","ab1a1a4ec2433e260c77d1b5db037074"],["/page/3/index.html","bd4c139709e42ba8514705648ec59358"],["/page/4/index.html","bd819deb7d412aaff4eee07affa0672c"],["/page/5/index.html","0d589fc17527b12d6ae9748a150f6b45"],["/page/6/index.html","023606e2576905f4f52a72f234be8951"],["/page/7/index.html","52373c14c663bd5b9d792d202e793720"],["/style.css","83de57f7deea9c6cdfaba7c4eb338a97"],["/sw-register.js","2869e12a2e42e10691081445d486a46f"],["/tags/index.html","3ca41bd9d09df5b1b6395943db820ff4"],["/tags/冰与火之歌/index.html","122a64ef630d32ee233e0bc593565c7b"],["/tags/冰与火之歌/page/2/index.html","4a28a96f7eb31521a5b7337846ceca17"],["/tags/摸鱼之作/index.html","67fb5668eb2b91f0e45fc52f12ecf0b5"],["/tags/日常/index.html","28edc321fbd5be55880d35903491434f"],["/tags/柠梨/index.html","96b56b47e2525ad1598fea63304b3c3b"],["/tags/柠梨/page/2/index.html","5f2ec80cafd5790e23c7276991cc4adc"],["/tags/柠梨/page/3/index.html","7d936b0f8232c1485f6500ebd5db8151"],["/tags/狂飙/index.html","92a6a18dae13dea5da55501708365eba"],["/tags/镛武侠/index.html","055efeed622c65538bf25529e7494875"]];
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
