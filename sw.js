/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","c01d06485c3ba7b814ac2acfebf69f23"],["/2024/07/08/月照天山雪（2）/index.html","62b9cad1e9786ed9c0e9e341882fdca5"],["/2024/07/08/阅读须知/index.html","12d073b593a5841d8f9a1196618af1b1"],["/2024/07/09/同床异梦/index.html","8c475e389ce71cf2ae79bf5cc08de890"],["/2024/07/09/月照天山雪（3）/index.html","ee2eeaa57cffb091bf39470121b478a9"],["/2024/07/09/月照天山雪（4）/index.html","1d52a74992fcb7da3b34c6957d08e210"],["/2024/07/09/月照天山雪（5）/index.html","29f76eb5b9570714dede8c228a6f537f"],["/2024/07/10/ceshi/index.html","600188b9a2e82c7cab6e1f3f7a150e47"],["/2024/07/10/一千零一夜/index.html","686dd95b35928b3542f777f30e110dbf"],["/2024/07/10/风雪夜归人/index.html","ac0c33adba98bba7a0687d209b54d100"],["/2024/07/12/与敌同行（1-1）/index.html","f21d0f9b9c1ce8ed3f3226e0eea121ed"],["/2024/07/12/与敌同行（1-2）/index.html","b734ddb76277e78bb6839e77db66cc9e"],["/2024/07/12/与敌同行（1-3）/index.html","a11b18f2006563fbd5c139885a9b1919"],["/2024/07/12/与敌同行（1-4）/index.html","eef495a8095722b3b65bb954d6ff0ea5"],["/2024/07/12/与敌同行（1-5）/index.html","d705567d45a2441479872ce5d83083ab"],["/2024/07/12/与敌同行（1-6）/index.html","a4165433bd74e595afe9482a2e4957c5"],["/2024/07/12/与敌同行（1-7）/index.html","8a09cd5b95b9eb38b7f72b10aa995652"],["/2024/07/12/与敌同行（1-8）/index.html","413830adc53ef02897537eac5d74a38e"],["/2024/07/12/与敌同行（1-9）/index.html","dfeb778bd3cd6f76a9c3bef8c172484d"],["/2024/07/12/与敌同行（2-1）/index.html","86642dde1234e4a04eaedd297c76b4c2"],["/2024/07/12/与敌同行（2-2）/index.html","c401d6e20fd8481d522bdafb1011130b"],["/2024/07/12/孤独地狱（上）/index.html","31894add6177a4e576fd9b87615ca614"],["/2024/07/12/孤独地狱（下）/index.html","cc563b39f2929b38f204f4e5ae11f1a0"],["/2024/07/12/玉生烟/index.html","0cbaef3513448411064ab997076f84a9"],["/2024/07/12/知更鸟颂歌（1）/index.html","79703610782c9c2deff801b6d2eb38c4"],["/2024/07/12/知更鸟颂歌（2）/index.html","492ddfc7934547a1e7d2a487d9ccc6d7"],["/2024/07/28/与敌同行（2-3）/index.html","69a7338b20245efa3465e50979f579a5"],["/2024/07/28/知更鸟颂歌（3）/index.html","e024094745a011d1e75dca830e690ede"],["/archives/2024/07/index.html","d67c1a147f9948d3dbe4301aa276f6be"],["/archives/2024/07/page/2/index.html","1c06159d1747f037e0faf136b10f8ce9"],["/archives/2024/07/page/3/index.html","f0aba821d80da42db384631e475061fe"],["/archives/2024/07/page/4/index.html","ef332e01bbf9290935fc5e047806123b"],["/archives/2024/07/page/5/index.html","5313e4ad820cb82a86f59636609136f1"],["/archives/2024/07/page/6/index.html","38fa3401ad540be3416e1ee17c848364"],["/archives/2024/index.html","5cc29ea70076afd65fb14d0eee416611"],["/archives/2024/page/2/index.html","d28c51657bacb1a49652189555e437bf"],["/archives/2024/page/3/index.html","5b80f3712c86a6344d80855c99adadc3"],["/archives/2024/page/4/index.html","95679b00a3cca775a3cc6cbf4464cf20"],["/archives/2024/page/5/index.html","dd039e5255894d9c1879e01ca9090154"],["/archives/2024/page/6/index.html","f85e29a1feb333a2825a06a09d04f617"],["/archives/index.html","1778cf2687436f2d636201d3396261e2"],["/archives/page/2/index.html","21494ad1e49d86d388e24c246f5dac8c"],["/archives/page/3/index.html","a36e0a424a87326dec0264dec6b317c9"],["/archives/page/4/index.html","526da3ba42b76709d7b1c1f840701904"],["/archives/page/5/index.html","9b092b1a641077b1a9028d0ea8f6f000"],["/archives/page/6/index.html","7d16eb169c9f6c79f1645389310c8d51"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","0d39c43ed8a13da4e0c8ae2aa40638c7"],["/categories/与敌同行（梨综）/index.html","c39bfc089efb96191fab23ec28fa42f0"],["/categories/与敌同行（梨综）/page/2/index.html","cee627eaa0bb73c9dde0102f58f5f6d0"],["/categories/与敌同行（梨综）/page/3/index.html","74458d220c51e846c42c8c86e7a35f8a"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","6a84d41d123cc1f0b917bf30f9c5afc2"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","ada8a39b52d07bf6a630d2870949418c"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","24e3afadbd8487b4158ea6d6f0241ca2"],["/categories/月照天山雪/index.html","7b1896f161f8ba448d8a95a50eff3114"],["/categories/月照天山雪/page/2/index.html","1802ef3e01d27333997df0fdd84ae9d4"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","4301a025b92da28556c578a6742c40d9"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","b71ac78d010e77b4fba7b2960dc16b51"],["/categories/狂飙，乱飙，发飙/index.html","c6ac651fd2e747420ddadedf92c81047"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","bd179435cf8cbb8d5f1c0e0cc9572314"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","1519951f5a996f83996dd1492205c58e"],["/categories/知更鸟颂歌/index.html","5432d4ad02b821c76d96bb08209d3900"],["/categories/短篇/index.html","aab6049b5b7e75f378f02b14c0508fde"],["/categories/短篇/同床异梦（指珊）/index.html","e5d9704fa230ad01ee79fd0a67667aa6"],["/categories/短篇/玉生烟/index.html","49fe8f27c147c5777abad43cfb061c1d"],["/categories/短篇/风雪夜归人（陆直）/index.html","aa67f391a07b09c3536ad6b1241f242f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","13c99087d92cd9b32ff361d6a28ae821"],["/css/noscript.css","010fb6b9cf9175be961a7bb3cd7d457b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","cfab655815f753b12febc8e7a6b5e659"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","8511d68a7d448236605139ab3cfa660b"],["/page/3/index.html","8e6c291e11b1bbb35b7e526a44e32b6d"],["/page/4/index.html","77b5aeeff88eda2d3e203fafe65149df"],["/page/5/index.html","6716c6170257a2fc1ac6fdad5d2f4fe5"],["/page/6/index.html","17284ae7d19fb4bc87f316ec0ede05fa"],["/style.css","d2a91a9e90270f94875ac1dbec33f57a"],["/sw-register.js","0285ea6e4f5e93a76b97252669b8fe0f"],["/tags/index.html","1a8b31d277e56248ac2d5226201ebd0c"],["/tags/冰与火之歌/index.html","301b6c00cab9dd8206e7c29185a3d62d"],["/tags/摸鱼之作/index.html","7852ea15bb33aac3c32955fab9813e91"],["/tags/日常/index.html","2fbc3f6133bf54efa6077902cd5f815e"],["/tags/柠梨/index.html","0ab5b7cc76cbf8bccc300bc717dd66a3"],["/tags/柠梨/page/2/index.html","8393171ed2f396518d790582fcf11bda"],["/tags/柠梨/page/3/index.html","320121bfd402ce3d34af8aed9d33711f"],["/tags/狂飙/index.html","64705f8b1451a37308301b84284d1e68"],["/tags/镛武侠/index.html","96148dac0dfb214638ff29eb759fa0a9"]];
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
