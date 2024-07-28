/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","34de72c270a8d6461a3fa9f6f95c7dd7"],["/2024/07/08/月照天山雪（2）/index.html","b37315344934665afcd96ccea5ef99d5"],["/2024/07/08/阅读须知/index.html","04bd78619276e099ebb5bacbcf4dbcd6"],["/2024/07/09/同床异梦/index.html","a4ce9de53028e069ae5fefd62cccc372"],["/2024/07/09/月照天山雪（3）/index.html","ab28857116c35a93fba8a37b0e66e61f"],["/2024/07/09/月照天山雪（4）/index.html","6a808ea2224cf33c1e7225a8fcead4f1"],["/2024/07/09/月照天山雪（5）/index.html","ff5b4bef630407f1d1bfaa547fd0b62a"],["/2024/07/10/ceshi/index.html","e66104096b4d4a0b3e864826460e5b37"],["/2024/07/10/一千零一夜/index.html","19f71aedb7efe3e27973a964e2e5b082"],["/2024/07/10/风雪夜归人/index.html","d12ad88cd16cb256e689cabb226cd8fb"],["/2024/07/12/与敌同行（1-1）/index.html","9a4beb4b5185518054bfab8206feaee5"],["/2024/07/12/与敌同行（1-2）/index.html","8b55574027c606afdee18f38b0baf033"],["/2024/07/12/与敌同行（1-3）/index.html","b0fcc92b70597bf87e34174feda1ed1a"],["/2024/07/12/与敌同行（1-4）/index.html","d951cd1007268a8909fdafc85d25ea20"],["/2024/07/12/与敌同行（1-5）/index.html","85f27b65a4a16fcd9bbec855cde32f40"],["/2024/07/12/与敌同行（1-6）/index.html","6e62ddadb535b4692bd1a96fda6fe38d"],["/2024/07/12/与敌同行（1-7）/index.html","e2f48046d7c71861d9d12e2aa877ed6c"],["/2024/07/12/与敌同行（1-8）/index.html","26083274b8e1346cc1e4232c80144a25"],["/2024/07/12/与敌同行（1-9）/index.html","95dc0008cfe314164300ce0e196d4992"],["/2024/07/12/与敌同行（2-1）/index.html","9cee1a6219a672865f901db8cfb955a9"],["/2024/07/12/与敌同行（2-2）/index.html","4f1a1a4de913acdf4c61d3a355cae283"],["/2024/07/12/孤独地狱（上）/index.html","f71262e60a5bc0ca0d5fd951e98618af"],["/2024/07/12/孤独地狱（下）/index.html","6ea721c4a897b4ffebd9ac3266fa04ea"],["/2024/07/12/玉生烟/index.html","089dbf119230bb491230fbbf210d59c6"],["/2024/07/12/知更鸟颂歌（1）/index.html","65999d208e07c669d4148f9fb5ff6484"],["/2024/07/12/知更鸟颂歌（2）/index.html","fbe4c93ab50e676b1c949bab738780ef"],["/2024/07/28/与敌同行（2-3）/index.html","10639411f86cd403d7c146cef4cdff3c"],["/2024/07/28/知更鸟颂歌（3）/index.html","79347823616b2b3019d5fa98243ef8c1"],["/2024/07/28/知更鸟颂歌（4）/index.html","fe3044dd2c412cddc975f6474d8f1c65"],["/2024/07/28/知更鸟颂歌（5）/index.html","75cece169cccc3153e3653c05aa9827e"],["/archives/2024/07/index.html","91c3a7a46ab55bedb2929785470955c7"],["/archives/2024/07/page/2/index.html","7e857b47ad29df7b7453d84a1041f7cf"],["/archives/2024/07/page/3/index.html","de5a404b747345c6f87f5564eef3035b"],["/archives/2024/07/page/4/index.html","6fb598cda4d466bb4e1714ca817cd834"],["/archives/2024/07/page/5/index.html","092009d526f1ffa37c023558ea4051ae"],["/archives/2024/07/page/6/index.html","b72ee422509d0b9a83611134e6f76f47"],["/archives/2024/index.html","94a45a4d573f248e284d8326c8900015"],["/archives/2024/page/2/index.html","9433687e91b4c5e2d5906fcf2d6d25cf"],["/archives/2024/page/3/index.html","7fb94655ae1c4235cb6e10b242739884"],["/archives/2024/page/4/index.html","2eb01de703809dc42f00cabcd0b564de"],["/archives/2024/page/5/index.html","d15e822636b480239f7429f24b34f139"],["/archives/2024/page/6/index.html","623ad598c2fbccfd13c462e2e64a4adb"],["/archives/index.html","9aca1e4ad5cbca3bdebe8b456deb8c6e"],["/archives/page/2/index.html","5b03bd48592d3979f8203b493d784163"],["/archives/page/3/index.html","04acf4a487b1cf133f565fbf86ee59e6"],["/archives/page/4/index.html","81579dd88ae59689dbcda6664a154e70"],["/archives/page/5/index.html","0a7536e9703accb9880eac11c642a381"],["/archives/page/6/index.html","edcbda848c29fc3547691b20841c2a8b"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","f5c9b42556931fb5e465cffca7665477"],["/categories/与敌同行（梨综）/index.html","29bbc8f038bd81cf5684af72f942d5ad"],["/categories/与敌同行（梨综）/page/2/index.html","d13987bf39dc98bd7aecd96365e86911"],["/categories/与敌同行（梨综）/page/3/index.html","7b5cab95a842db09ee862b07e4e4d4db"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","946585e90bfb41e7057a6715ec32b30f"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","0ef90a186c367edc5d09dee497739375"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","0a81e8006ba85f0aa88899395b5682aa"],["/categories/月照天山雪/index.html","337ad35b2834b717582dc9b951d68951"],["/categories/月照天山雪/page/2/index.html","abeee9b71c6dc808ac91955a8a1927e4"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","42d77275e64beaf641516a1d32b6041b"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","747755cccfc7a68a1fedf551940e746a"],["/categories/狂飙，乱飙，发飙/index.html","4aa75f0797a53a3763fe806ab9241c59"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","a9aec8d81d90ca96e122394f22753439"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","a9f7f6b07a9ba7457d5ea8245a09d274"],["/categories/知更鸟颂歌/index.html","b2542c5ba5a10ee6239382d27a5cdb53"],["/categories/知更鸟颂歌/序曲/index.html","7b1797bce8dbe110296dfcd8eaf146c8"],["/categories/知更鸟颂歌/颂歌组曲/index.html","1447661fa68bdeecd75ce9d3a2c8695e"],["/categories/短篇/index.html","bc52833b98e9fd0df07c896965ded2dd"],["/categories/短篇/同床异梦（指珊）/index.html","7b935706f4670c3b50d8a7d2231f22b4"],["/categories/短篇/玉生烟/index.html","5b12c2fa47aafaa5dea992c18edda0a3"],["/categories/短篇/风雪夜归人（陆直）/index.html","99e52aee0328fbaeae662b00561d532f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","d2543ee3c376a566bf9cb27f6355fefa"],["/css/noscript.css","825b2814e9e1319a83a44e54890a8aa4"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","25c5dba0cd6b731b4b2296bee8ed619c"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","db31aa6bdcac3adcc2dfab8d1cc4c2f1"],["/page/3/index.html","f05fdd8020c47069d506fc894a49443e"],["/page/4/index.html","6a55ac5afdb759e6ee444e8b53b2883b"],["/page/5/index.html","7c8515df06d3c96be755abbf545d4cd8"],["/page/6/index.html","61739bf9ec4e189396beaa8d5aa04290"],["/style.css","bb001d32455308554febcdba33459773"],["/sw-register.js","138990d79a7d8a80fe3a56db82d9add0"],["/tags/index.html","0e4fef0626c5f5eb5955bd41b6e52047"],["/tags/冰与火之歌/index.html","8aab51d1b7e4d7d1d03ecb46746978bf"],["/tags/冰与火之歌/page/2/index.html","4838655737a686af506923deab713b57"],["/tags/摸鱼之作/index.html","ce4d4f649dbf5b7f66175d55e9e384c3"],["/tags/日常/index.html","2bad660d4e0497d452c5ef461f2dca94"],["/tags/柠梨/index.html","adf4a3822b84da3ac5bacc0cc0d1c112"],["/tags/柠梨/page/2/index.html","ddac4102a9d68f7d0b21c5013dadcc48"],["/tags/柠梨/page/3/index.html","ffde2a655e0320b5180937ef683a7523"],["/tags/狂飙/index.html","b9075e2dec1c399eac9455705f6052fc"],["/tags/镛武侠/index.html","b509c1cb4ac42dbb4b3bb51dd8b42b2c"]];
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
