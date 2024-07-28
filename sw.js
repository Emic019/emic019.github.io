/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","f32ec8b0d41abfe0123ffcc43aa6c253"],["/2024/07/08/月照天山雪（2）/index.html","0f0c3eaa21ad9780e6cf2518f5ab2451"],["/2024/07/08/阅读须知/index.html","2bb1bf9810ddc5a4e4a6c645ee75ee5a"],["/2024/07/09/同床异梦/index.html","7c78717dbdaa8a683332fec81c8f929e"],["/2024/07/09/月照天山雪（3）/index.html","01b18f44c4164cebd09bff96163ca24c"],["/2024/07/09/月照天山雪（4）/index.html","48b9abda4a3efd80c6de525b3cdd638f"],["/2024/07/09/月照天山雪（5）/index.html","1bc938f4d7fcff347796b4b4ddff4bf2"],["/2024/07/10/ceshi/index.html","232b7529ddf3f28933919d91751ddd74"],["/2024/07/10/一千零一夜/index.html","b0b3a758699924561fb40596349f4772"],["/2024/07/10/风雪夜归人/index.html","bed67d006d1f9e8f7bf550b728a5eea3"],["/2024/07/12/与敌同行（1-1）/index.html","394dfe39aa3bc68cb543aa6c3fa3775d"],["/2024/07/12/与敌同行（1-2）/index.html","5721286f780623539828926583c7f581"],["/2024/07/12/与敌同行（1-3）/index.html","dcdd4984b8630e0b72f318adfcc1a899"],["/2024/07/12/与敌同行（1-4）/index.html","ae720449c409529870f3929e3738e6a4"],["/2024/07/12/与敌同行（1-5）/index.html","832a356386d10b8bf46a4540b78064c3"],["/2024/07/12/与敌同行（1-6）/index.html","710be2286f3220a91a26a92d4ea5bdb2"],["/2024/07/12/与敌同行（1-7）/index.html","ab3b2292ec6a93ae5c31503fd8bbd008"],["/2024/07/12/与敌同行（1-8）/index.html","224931c1f1b152655122e4641ca5a8a1"],["/2024/07/12/与敌同行（1-9）/index.html","3e84742524858d1a17f7ef755201e448"],["/2024/07/12/与敌同行（2-1）/index.html","95872e744bbfde431fc832244d231380"],["/2024/07/12/与敌同行（2-2）/index.html","a1d35116e74e3f3bc91c14d4ddfc522f"],["/2024/07/12/孤独地狱（上）/index.html","077808720317db4893be95f05a0a6b7d"],["/2024/07/12/孤独地狱（下）/index.html","29eeb5624e9e7cfc5a0eda3f2b373293"],["/2024/07/12/玉生烟/index.html","7aa96b3e7695e6fc05f4f0c7d054fdf2"],["/2024/07/12/知更鸟颂歌（1）/index.html","29d3a6ecfd35238599ad45619657ff15"],["/2024/07/12/知更鸟颂歌（2）/index.html","2dfe1efbe2e4b85d1d8aa30f905f080d"],["/2024/07/28/与敌同行（2-3）/index.html","e7d3d83ff36ab5c1ea7a1a32983a9cee"],["/2024/07/28/知更鸟颂歌（3）/index.html","a3b4ecbdf4e495d9950ec0aab7094e07"],["/archives/2024/07/index.html","a110fedbad6ee796cc3ee48c32f51211"],["/archives/2024/07/page/2/index.html","f73d1d26c5e61a3a87844e838cca3a89"],["/archives/2024/07/page/3/index.html","48122cde662a94b52f99d07ab18ec838"],["/archives/2024/07/page/4/index.html","8ef2b8e9001b40af928446e8402138f2"],["/archives/2024/07/page/5/index.html","9c71a44d8a55239b78b632042481ff22"],["/archives/2024/07/page/6/index.html","d8bd6908b97dbe5bb9de66ce340e322c"],["/archives/2024/index.html","14f262ec0c1ebd366ff89a45ff83dacb"],["/archives/2024/page/2/index.html","ddfa86ec9f558a7b426cb28471cf72fe"],["/archives/2024/page/3/index.html","cbcbaf9c8495c16aef8ea2bb4c23fa3c"],["/archives/2024/page/4/index.html","00db72aec51e1cd945feff7940fbd1f5"],["/archives/2024/page/5/index.html","64b8e73f1afbfbe6db4a0598546b5167"],["/archives/2024/page/6/index.html","c5b55fc5f6a66db76f90ff470a9bbf79"],["/archives/index.html","b93112ec3b4ce1ae0502efc87b240bd3"],["/archives/page/2/index.html","ecb1668783431ef0714d24a062fffa90"],["/archives/page/3/index.html","00b165038be8491369d0d6ee4528dbf3"],["/archives/page/4/index.html","1aebf072fba9f90f642f6cfdd0d2702c"],["/archives/page/5/index.html","e1945f62add871b828ae56ba3198427f"],["/archives/page/6/index.html","31e7ba31a999d1504b6e91566387d898"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","f57bd38b5cb687ccac92fbfcf1198d71"],["/categories/与敌同行（梨综）/index.html","1fe06cb163e8f4ce16c40ad15bd3b498"],["/categories/与敌同行（梨综）/page/2/index.html","ab665daa0ac14eb495adbd6a6d584774"],["/categories/与敌同行（梨综）/page/3/index.html","fd62afb826441ffbff280181d0c0a76b"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","4a433d3716a655b187febf611b920a27"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","9c45b7e696944150fc9b9fc5b052bf1e"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","8d8b43d24ad2949f2f88e91c056fc390"],["/categories/月照天山雪/index.html","3b8995b70ef344f09f6b0002cf544d10"],["/categories/月照天山雪/page/2/index.html","c8a314a54bac602319666ec1623a7623"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","cbc66a49752e49223c60be559f7e89f2"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","d355e7398cad65d36c4c2d9f63ef0495"],["/categories/狂飙，乱飙，发飙/index.html","bcd8ad604a60362f92195d1555a6f5e1"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","8777e19fef31cae01ef9e6a3b94c1ccd"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","99342ef688dccada28d210e3493d23cb"],["/categories/知更鸟颂歌/index.html","aa050235c43c7c9f05d6f954058c2a55"],["/categories/知更鸟颂歌/序曲/index.html","95d2a1de60540a1a2380ff66aeb5dc2c"],["/categories/知更鸟颂歌/颂歌组曲/index.html","71fe7fb389b527b0b2f0fb7adfa9d6bc"],["/categories/短篇/index.html","86777e5ca87a1844c2cec349994c7f27"],["/categories/短篇/同床异梦（指珊）/index.html","e3ca706e7dc4d5b4cd6f2e1fe908be14"],["/categories/短篇/玉生烟/index.html","fe88f6f24efa7777f4884c666be7bff7"],["/categories/短篇/风雪夜归人（陆直）/index.html","cd5ed55d9881e46e7036573934573eb9"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","39df6a1f6ac9be363629633ac4d4cfd2"],["/css/noscript.css","24612d2171638d56e6b36c8400dc2708"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","0b2f0edbc2b950e474268ffa7cbeda14"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","32ce1d9b15b5d62ce6fd55385d987509"],["/page/3/index.html","f90a7cfc18a379fd7a870bac01f3a33a"],["/page/4/index.html","3105df315952a32a032eafc7ba222062"],["/page/5/index.html","b653b52d4c1f6edd76577ef38dfc1999"],["/page/6/index.html","1a09e38c46bf1f805c0190d2e1697297"],["/style.css","eef65dfcf2320a4952d3751c77caa0ac"],["/sw-register.js","e2227a9e169f15cc28458bff7c3ce080"],["/tags/index.html","be20a07054a4cd7ef5e3ed3366f4f3e2"],["/tags/冰与火之歌/index.html","8d918adc1112f0743f1af4094dfdaaf5"],["/tags/摸鱼之作/index.html","ea3c91a35119fd789aab3b3947fe6fda"],["/tags/日常/index.html","5300093bf290d9f8dee3575e29b40bec"],["/tags/柠梨/index.html","f58776b8b40dc830a93d57291567f45e"],["/tags/柠梨/page/2/index.html","c4d9019a483577e6b0df88169c9d59bd"],["/tags/柠梨/page/3/index.html","fe8600f99e66a7ee4f2573ff0ebb96f1"],["/tags/狂飙/index.html","7f87aed8d41068cd83598e397ae34f34"],["/tags/镛武侠/index.html","f00f386fe5397ca349f763d6317c916d"]];
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
