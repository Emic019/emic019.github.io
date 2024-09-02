/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","e3ffc32186b94411b7b26e6faded9681"],["/2024/07/08/月照天山雪（2）/index.html","62caa711b7c9ad2b61b864a0d046a968"],["/2024/07/08/阅读须知/index.html","d6fe392a28d62a54e6b9288b2652be41"],["/2024/07/09/同床异梦/index.html","b090f7720d67844e5cfd6ae10f5117fa"],["/2024/07/09/月照天山雪（3）/index.html","f21f8f181279c4683d15f163252acc1a"],["/2024/07/09/月照天山雪（4）/index.html","f3dcfcb1fa874ec7cb453b1564f6e9e6"],["/2024/07/09/月照天山雪（5）/index.html","a3e768702971de32123e5ef71c97b4b0"],["/2024/07/10/ceshi/index.html","a28dbd25c906b47dbbc2e57d1feaba84"],["/2024/07/10/一千零一夜/index.html","329797950db69f766435088812018d74"],["/2024/07/10/风雪夜归人/index.html","d6ba13f5644ca80b3e37640706658873"],["/2024/07/12/与敌同行（1-1）/index.html","bef438f191c06203d20a175a117aea99"],["/2024/07/12/与敌同行（1-2）/index.html","abca11b2dfaffc94df94260882d5cb76"],["/2024/07/12/与敌同行（1-3）/index.html","68714346ea474ff6131dc63408d34f55"],["/2024/07/12/与敌同行（1-4）/index.html","e47e35c3bd75be05254058bf8244c8a2"],["/2024/07/12/与敌同行（1-5）/index.html","5aead4175e66669b71e393b881f572ea"],["/2024/07/12/与敌同行（1-6）/index.html","331b21519edb8eefeb6110dbebdeaf39"],["/2024/07/12/与敌同行（1-7）/index.html","2fcc7cffe62f9b4e43d327318d096381"],["/2024/07/12/与敌同行（1-8）/index.html","da53ea2e77ea92fe81deda23ccdbf145"],["/2024/07/12/与敌同行（1-9）/index.html","a3bdfbd0cdc993c97dc3757746df90ba"],["/2024/07/12/与敌同行（2-1）/index.html","20da72f0dddacb517f159f4b2dcd9cea"],["/2024/07/12/与敌同行（2-2）/index.html","81d20db68349d6fb8f4203a9eb83857e"],["/2024/07/12/孤独地狱（上）/index.html","1f52a409191dcb2bb52ec761e74af4c8"],["/2024/07/12/孤独地狱（下）/index.html","7c34a6433dc44dee56cc27f005d1a6e3"],["/2024/07/12/玉生烟/index.html","fb27a343e0544ab94cdf076dcc164a03"],["/2024/07/12/知更鸟颂歌（1）/index.html","4434137faa3c12ebc1dcf47650cfb248"],["/2024/07/12/知更鸟颂歌（2）/index.html","2a236bf19a026523378b792e10b7350c"],["/2024/07/28/与敌同行（2-3）/index.html","cb8f977bd6f5c2aa4dbbefd7da2cfc01"],["/2024/07/28/知更鸟颂歌（3）/index.html","c53d73fe4f052a960a51e49d6c1deb95"],["/2024/07/28/知更鸟颂歌（4）/index.html","add87f24f2dad213c62ba6cc26396c19"],["/2024/07/28/知更鸟颂歌（5）/index.html","27775564ff2894c3765e2e8d03151247"],["/2024/08/24/与敌同行（2-4）/index.html","0c0408a1fd39b75e08b4dd475985227c"],["/2024/09/02/与敌同行（2-5）/index.html","6c435db4d113536fc8bb5ef2b4fe5272"],["/2024/09/02/与敌同行（2-6）/index.html","0ed003b79a19238230a54e49d4a9b05b"],["/archives/2024/07/index.html","86a293109c93a0cb5f3c6f8f2ac15f41"],["/archives/2024/07/page/2/index.html","ce5598735eac510b65a502ce19f2ada8"],["/archives/2024/07/page/3/index.html","f2a70bf78e20adf317ddd40de512f621"],["/archives/2024/07/page/4/index.html","1f2bbc0916d1846dd1f9d6bc7b90d20c"],["/archives/2024/07/page/5/index.html","bbb4a95dcfd920125866c622f458514a"],["/archives/2024/07/page/6/index.html","3e47ac1c25e9a784a5613fdc497c0e6e"],["/archives/2024/08/index.html","7c86a2e48cf6c1de42526f8ac5607087"],["/archives/2024/09/index.html","429e5a698641baf5652593ff4aa80615"],["/archives/2024/index.html","ee80eed301d6b760d4ba8387c61a6cc0"],["/archives/2024/page/2/index.html","eb10ae4466becf670f63cb332e3a27f9"],["/archives/2024/page/3/index.html","ca96fb03cabf93287798c58d84b5e4b0"],["/archives/2024/page/4/index.html","e79d0c3fd27c38fa0de6ac37862a1d64"],["/archives/2024/page/5/index.html","d91347e9307a662fffeb1be693761165"],["/archives/2024/page/6/index.html","370d440317b9b265a128abd2eca80b49"],["/archives/2024/page/7/index.html","f353636000c5005600be32ca05c251c6"],["/archives/index.html","6e9e851a761057afb5765bcb47ea3a7e"],["/archives/page/2/index.html","1dcf13798542a3274193e56bf3ae0cb0"],["/archives/page/3/index.html","4a540fbb5552ef157a4e53f5eb1c167e"],["/archives/page/4/index.html","c83e8c48c71a2f220beb42b5bffd35e3"],["/archives/page/5/index.html","e42202b19030e7b0c6558c6c70b28a36"],["/archives/page/6/index.html","f8a88a69e44296ae4722283d51ed20a0"],["/archives/page/7/index.html","4f8536e81c77abc41e1873742d609d6b"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","7cc1d81a7cf843c849d3d0935c2dd86a"],["/categories/与敌同行（梨综）/index.html","ce09a5acf49b82e13809671c376981d3"],["/categories/与敌同行（梨综）/page/2/index.html","062db478e59fd0d26109c6a9131c63e9"],["/categories/与敌同行（梨综）/page/3/index.html","379fa3bf6fe779b892e9066de2b1da05"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","4cedac2ca33e9d6ca047f05d6141eb5e"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","ffe4c77051782698cab42099ed8c5a6f"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","4ab9e1132b5c122e5a7c177705cde3e4"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","720e3420da59a330aff81e782d437e60"],["/categories/月照天山雪/index.html","2e3192f0360f1aaedcce3c40016458f3"],["/categories/月照天山雪/page/2/index.html","a5ce791e4349af452bd91adc93153495"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","fbefdcc6809bcf6d22ef5520eba7eb66"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","bf71e68d791af7478e6cecd419c132f9"],["/categories/狂飙，乱飙，发飙/index.html","10e41e329139f63dd1e50774a6a148f1"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","fb2851f24b806779d8aa9643bccfc669"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","1656aa56be9eee1b033349a02d48247b"],["/categories/知更鸟颂歌/index.html","5f92a4fafaa49c8d7175ea9287910a51"],["/categories/知更鸟颂歌/序曲/index.html","5dadf3607a5596f414e122d0c764d772"],["/categories/知更鸟颂歌/颂歌组曲/index.html","14e84c84f4d49d7a141516d0e4869566"],["/categories/短篇/index.html","a86ed45d00dbf024e3c8a93465e8f71d"],["/categories/短篇/同床异梦（指珊）/index.html","e81565a6594e01e01affdec012d43646"],["/categories/短篇/玉生烟/index.html","14d8a48d16dd96c0a41ef6f21b538895"],["/categories/短篇/风雪夜归人（陆直）/index.html","b83a87c9141c3b9be9d4e224e76c74e5"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","aab36cd468a52c2ed1cfbe3c1f4821eb"],["/css/noscript.css","b61c3e29d7fbff18ca4812f4ee70873a"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","be264b42231bb3de338a809f3a7f3895"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","8c1638f2ac93b68aa07fd4b4f9ffa149"],["/page/3/index.html","0bf16231b2cbc7c2d36d0f41bf4fbff2"],["/page/4/index.html","0fd58ed1c8a555de359fe99a4b7a2bef"],["/page/5/index.html","c56eb660a846d8080f3fd9de2a6d1122"],["/page/6/index.html","da686882e4c3fb11f8d2b3ca9005c114"],["/page/7/index.html","f8fbaebe00a9c43ae1dd4451b03744a2"],["/style.css","83de57f7deea9c6cdfaba7c4eb338a97"],["/sw-register.js","5b33fe86e010777d5a17c02ccef343a1"],["/tags/index.html","d6ecde3936d237a39bfe88d9459523dd"],["/tags/冰与火之歌/index.html","4fe8d22d2a82c43e084d44dec0d70764"],["/tags/冰与火之歌/page/2/index.html","272b405fd1897b74d47c20d44a803978"],["/tags/摸鱼之作/index.html","07b1c08e55cbb863a8ae992f7ab87f73"],["/tags/日常/index.html","1889e5551d735efc0193a9df4b13e415"],["/tags/柠梨/index.html","3758e324eb735cb95949bfd47c81c21d"],["/tags/柠梨/page/2/index.html","44f28ec81bcdd0f9b67d8823245e0899"],["/tags/柠梨/page/3/index.html","79ac5a5e84faecad8659d44664bb2ee6"],["/tags/狂飙/index.html","f46a417d4eb337a7fe1244523ecbb938"],["/tags/镛武侠/index.html","3e7a95abb2e92359c5d5230795abd09c"]];
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
