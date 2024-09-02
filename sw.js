/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","1685c73ac89ab396b9eb213d00d01c22"],["/2024/07/08/月照天山雪（2）/index.html","dff3fbe5f853a9d44f6bd3e5a3d36353"],["/2024/07/08/阅读须知/index.html","5d7771eb68f095f0492301f0cfa8d362"],["/2024/07/09/同床异梦/index.html","527d5930013acd950217ef88ae178c8a"],["/2024/07/09/月照天山雪（3）/index.html","2b5b7d31c0797eca2f513cca319d4f8e"],["/2024/07/09/月照天山雪（4）/index.html","d0e4b414fa34311329b99889b993c4ca"],["/2024/07/09/月照天山雪（5）/index.html","f82c34d3daae0f7fd48837aaa9be096b"],["/2024/07/10/ceshi/index.html","f340076a8e03258395b11d574884ef2c"],["/2024/07/10/一千零一夜/index.html","b1dbd1cefc05e25cbd7d7a2ab53ffd7f"],["/2024/07/10/风雪夜归人/index.html","c0c04e39885c063568f013b036c65ee4"],["/2024/07/12/与敌同行（1-1）/index.html","10f53928a4b55cf651f5762a5c7fa7cf"],["/2024/07/12/与敌同行（1-2）/index.html","f581a3dd2decf7d535bacdee65039b11"],["/2024/07/12/与敌同行（1-3）/index.html","e0b0fe95800213817958f7e7cebdbe6e"],["/2024/07/12/与敌同行（1-4）/index.html","886b943d80b44a6ebb5aa75bbfb63889"],["/2024/07/12/与敌同行（1-5）/index.html","0f5c8c376697d34ac8fb3450fc89b39c"],["/2024/07/12/与敌同行（1-6）/index.html","d06685b8effb167da585f4178ed1a590"],["/2024/07/12/与敌同行（1-7）/index.html","6026a0c56971e992fe67e5bce821393c"],["/2024/07/12/与敌同行（1-8）/index.html","f18191386d90377fc0e878b286ed8cc0"],["/2024/07/12/与敌同行（1-9）/index.html","bbb7df1edc274d13412013c2f054a3b7"],["/2024/07/12/与敌同行（2-1）/index.html","da54dd26e379ca4ce9d55f2bb62e7091"],["/2024/07/12/与敌同行（2-2）/index.html","e5a54d144bb9c67e8974610aeac7f9e6"],["/2024/07/12/孤独地狱（上）/index.html","0129c57b690aca20060f1f3469f7d818"],["/2024/07/12/孤独地狱（下）/index.html","fc7f7bea93f5c2f20f60c7901c439f03"],["/2024/07/12/玉生烟/index.html","84e06f91476130a0c02e4d621531ab94"],["/2024/07/12/知更鸟颂歌（1）/index.html","b2b5dfb474b73e0eb52b37b5b49b2b81"],["/2024/07/12/知更鸟颂歌（2）/index.html","2ceea7b32448824ac861a7eec2ce7902"],["/2024/07/28/与敌同行（2-3）/index.html","38aca2f7baa364b7a417a21c978df491"],["/2024/07/28/知更鸟颂歌（3）/index.html","fa60e842aa88f9477bbdaf83539c773b"],["/2024/07/28/知更鸟颂歌（4）/index.html","8343f6bd394c715651bee8c1160b09d6"],["/2024/07/28/知更鸟颂歌（5）/index.html","63506f293b9087f52c7275b115fa460c"],["/2024/08/24/与敌同行（2-4）/index.html","69aeb589ef5e71ff29f902d6c9ab6e1a"],["/2024/09/02/与敌同行（2-5）/index.html","6fe4549a02b915483a3cc11b9e22e60f"],["/2024/09/02/与敌同行（2-6）/index.html","1783bdec17f099a18cedcffb9b87f767"],["/archives/2024/07/index.html","76d558e0bb25a5546f3a1e231a7a27d2"],["/archives/2024/07/page/2/index.html","ad685b5a431c39e0fe1ef5a7defe203c"],["/archives/2024/07/page/3/index.html","ab375462eeb6a25a9a096109c4fe6058"],["/archives/2024/07/page/4/index.html","571715645d9120433b47e830c9662598"],["/archives/2024/07/page/5/index.html","79c1efec0100e5294ff9584a2ac0e849"],["/archives/2024/07/page/6/index.html","65a4b048c42cf8f9b8b07484e5830f7a"],["/archives/2024/08/index.html","f4d6dc10f0f872634f2dce5564d78bb9"],["/archives/2024/09/index.html","32287477da9a4382613336ba86d9535a"],["/archives/2024/index.html","646a00114c4ed6a5f5481462912c16f1"],["/archives/2024/page/2/index.html","caee4c8c395ea56d1db96b61bb1d0040"],["/archives/2024/page/3/index.html","2a9d721971b0b39bbd9569a579dcf142"],["/archives/2024/page/4/index.html","aa161ffec19f02071e6e3fd6428a2a21"],["/archives/2024/page/5/index.html","60f9cfb2331cf92c2fef2610c80d2eeb"],["/archives/2024/page/6/index.html","b20bc561efe0cf7863217d691035dcc8"],["/archives/2024/page/7/index.html","583531de192e5309b433318c8971d04a"],["/archives/index.html","6a128f9240adcb986a12ca0b43d5b421"],["/archives/page/2/index.html","cb1eca684b5e1c7d0c3b7f443d6ac990"],["/archives/page/3/index.html","f6825b8d40e74ec3090df8b09075d3fb"],["/archives/page/4/index.html","f74534d17eb5a3583165110f78459466"],["/archives/page/5/index.html","17f87a0e774a7842db931ac6e7d65c40"],["/archives/page/6/index.html","3c35a06ca320f2d145c1da066ed4c439"],["/archives/page/7/index.html","91a6e7e166e4aa556f771bfde68329a3"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","1f99d587e4461e6210c823b500508b2c"],["/categories/与敌同行（梨综）/index.html","a983403ff390d1d7c551465949f32673"],["/categories/与敌同行（梨综）/page/2/index.html","f46947c8d48dbf77c5c36da4f58f2567"],["/categories/与敌同行（梨综）/page/3/index.html","739f257e1698023b15bf91bf707c6593"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","ea17761db9e9f911efa456a47af13eba"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","10f5dfc13d719852bc2277d37e85a305"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","38b394845736c917b3f236b5fddcb581"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","84869e49dbf754de1fbb7654735b5446"],["/categories/月照天山雪/index.html","217896abfc322730817f2e833c11dbce"],["/categories/月照天山雪/page/2/index.html","05fa830153eee4399c889e458cd8acf1"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","593f92a334859c09949b95a39c1de262"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","b27001c6d0e0a23c4edfe1be37bfc51e"],["/categories/狂飙，乱飙，发飙/index.html","eb90899e7f28f51b58b789702a4adf77"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","b964334298c020491097728bf885a9ba"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","5f15a824cccf11cb0e60182cb63fcbbf"],["/categories/知更鸟颂歌/index.html","9011f8c583fb2e2a69fdcc2e76e54c81"],["/categories/知更鸟颂歌/序曲/index.html","d9036d9dcc299341b0f6b34e163b34f4"],["/categories/知更鸟颂歌/颂歌组曲/index.html","3e5b5206039e85a258456d88d3035453"],["/categories/短篇/index.html","8f2ed50a64f78a9114230cd62496bbe8"],["/categories/短篇/同床异梦（指珊）/index.html","a3ebf29f3d63e546a11a63cca1ae2e91"],["/categories/短篇/玉生烟/index.html","b435cd70fa17ea1b827227e95f9a17cb"],["/categories/短篇/风雪夜归人（陆直）/index.html","8c216aeba3b8b3ed2743b7534779db22"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","ad7a77adaf5ecaa08a47970d56d92f5e"],["/css/noscript.css","43ad8e4cfe852e81cdc8fed7065c2861"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","b30995526b221a880ce501a4a6d1e8f9"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","636fa6d944d6e0e94383ef50840a131b"],["/page/3/index.html","864899dfeb7cbdd6c13d80432594d4f1"],["/page/4/index.html","d38543020fbce31781b14bbf85662cd3"],["/page/5/index.html","68320723484d27470e19849bf400b47c"],["/page/6/index.html","9b010d6f1c93673a5f3329f088c17cee"],["/page/7/index.html","29267f439edc4036da006bd2813189c0"],["/style.css","500d356704113213e21dcefb49e0c8cc"],["/sw-register.js","6908a69d85ab750da0dede806c50120e"],["/tags/index.html","08910509aef3993221104da40e8b432a"],["/tags/冰与火之歌/index.html","17203f5c0a54a964f075f86213016dc9"],["/tags/冰与火之歌/page/2/index.html","a18b86be34b9f364eb27dd331140e740"],["/tags/摸鱼之作/index.html","5b0dac824426c7101e2e01b0c769d93a"],["/tags/日常/index.html","be2f58a6a34242a5aadc6ae85c7066d4"],["/tags/柠梨/index.html","3d43161ac451d796235c8c9e2483415d"],["/tags/柠梨/page/2/index.html","5e45da024a046d3be04531e61ee62755"],["/tags/柠梨/page/3/index.html","17308ad53ac518d5138978da8f110797"],["/tags/狂飙/index.html","18bebb45918de5e47102575fee1e40cd"],["/tags/镛武侠/index.html","14bfaf6256c76056e69f03527771bd83"]];
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
