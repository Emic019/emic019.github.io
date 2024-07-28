/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","5b61c4eca1589b75eef7ac17ed5a5fe4"],["/2024/07/08/月照天山雪（2）/index.html","5c174b992ea2c5b2f6f2db69e06a1d3c"],["/2024/07/08/阅读须知/index.html","dce4707c1957fd757e9f31a34bc5178d"],["/2024/07/09/同床异梦/index.html","2b441a068256b0cc7efdddd760cd3d52"],["/2024/07/09/月照天山雪（3）/index.html","dcffdb86b494d69450ad10d6759b0728"],["/2024/07/09/月照天山雪（4）/index.html","d521e97beec012f99e3836161d4fa0c2"],["/2024/07/09/月照天山雪（5）/index.html","952911cd7cbc151796e95f2b6ea6ee14"],["/2024/07/10/ceshi/index.html","96b878b382fb6f7a7ffc0956449d7807"],["/2024/07/10/一千零一夜/index.html","beb1187723a2c1a706bcc7c61bc8a305"],["/2024/07/10/风雪夜归人/index.html","bee7a43534231d8fff9770ec2a8eb0a3"],["/2024/07/12/与敌同行（1-1）/index.html","cee58bb36a5556e2b384c58053ee1ba7"],["/2024/07/12/与敌同行（1-2）/index.html","485850baa4c7b3b95b9b657b5108b632"],["/2024/07/12/与敌同行（1-3）/index.html","8d60f46e635431d8aac4f3fcc54e5de1"],["/2024/07/12/与敌同行（1-4）/index.html","10de966a725857ff8d42a1158148cc06"],["/2024/07/12/与敌同行（1-5）/index.html","92462949e9913533a2d9d0c3f427d1db"],["/2024/07/12/与敌同行（1-6）/index.html","a11291fa9c16c7c9ccd31cfba2300751"],["/2024/07/12/与敌同行（1-7）/index.html","e614e303adbe7bce3bf0ac8fd90be11c"],["/2024/07/12/与敌同行（1-8）/index.html","ec6434b475a25d9a9db5d7535e946729"],["/2024/07/12/与敌同行（1-9）/index.html","bd45e96d8f625459453bc82d9179b15a"],["/2024/07/12/与敌同行（2-1）/index.html","b21bb1a3c34ab7130986b6d42a6152c9"],["/2024/07/12/与敌同行（2-2）/index.html","09b2b04837d668bcd629772cd4ae7b7c"],["/2024/07/12/孤独地狱（上）/index.html","5f3ddb924818ba461891452c39283c60"],["/2024/07/12/孤独地狱（下）/index.html","f8597afb587107183815acf0e8234f6b"],["/2024/07/12/玉生烟/index.html","203acefdff3c566ee0163d5aa9ef35fd"],["/2024/07/12/知更鸟颂歌（1）/index.html","ae387bf6d265c2fcf5f8075922662ca5"],["/2024/07/12/知更鸟颂歌（2）/index.html","98f3e7ca28713b0ad4ae2a44710306b9"],["/2024/07/28/与敌同行（2-3）/index.html","d2fe11b4020ae096cbeb6a0239c161d6"],["/2024/07/28/知更鸟颂歌（3）/index.html","aced6353693a347d060993f6e761c2d6"],["/2024/07/28/知更鸟颂歌（4）/index.html","7d8cb7328aa9990bef1dfacdbdb086c0"],["/2024/07/28/知更鸟颂歌（5）/index.html","d70d172d9e4357f7400324a03a5d5b87"],["/archives/2024/07/index.html","aa9f824a67780c4c721111cac4e3ab62"],["/archives/2024/07/page/2/index.html","753e7a41149aeac2f12925c398d6bd06"],["/archives/2024/07/page/3/index.html","78455ab3a43e3cf0c5c4b3e6bd67a3f9"],["/archives/2024/07/page/4/index.html","6ad25a33abad9e65e4975cbec570d6ef"],["/archives/2024/07/page/5/index.html","f7e3f01c01d41ad04aed945e4fba670f"],["/archives/2024/07/page/6/index.html","14ea5229e33932899766dc8b9669d0e1"],["/archives/2024/index.html","d44c5b9ef85548576cc2b1626a174203"],["/archives/2024/page/2/index.html","60f515985f7ebbe11f7e84c08c01f15f"],["/archives/2024/page/3/index.html","4189417f9e0154dadf34de45ba23b67a"],["/archives/2024/page/4/index.html","748899b13657736c80cd10c4ee02bb24"],["/archives/2024/page/5/index.html","f561f5e8c7a3cd311dca121b04cd34a2"],["/archives/2024/page/6/index.html","b7b3380db7309d1bf581a22dd8c1f76b"],["/archives/index.html","b74cdf0660106045c9e50ca38b4ac990"],["/archives/page/2/index.html","336e2e11b86234054e63daf8bdd0f72e"],["/archives/page/3/index.html","395651e54596ca13269afdec02f755d8"],["/archives/page/4/index.html","7910942ea4260edeece46a428a1b601a"],["/archives/page/5/index.html","27e789589f35736ac4d72451eb2e5d71"],["/archives/page/6/index.html","9776142add42c85455b0e514e1361350"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","a56ccc820ecc65cc2c3b378e4c711242"],["/categories/与敌同行（梨综）/index.html","d22e6a7e244a2ad13fc0f2c833423395"],["/categories/与敌同行（梨综）/page/2/index.html","a580c028cd15daa2bc306980e714ba64"],["/categories/与敌同行（梨综）/page/3/index.html","7491d73984106ee290419d4d45b87afc"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","ca6ce168eaacfedc4d91b28a93cba6b7"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","2f7a93dbfc0bbd58c6f1180d699ca427"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","8f44b3196d8f6d326c015e6b14ded608"],["/categories/月照天山雪/index.html","c4b25e9687a5316619356334a73db689"],["/categories/月照天山雪/page/2/index.html","e7dce0b1d60a65818b5a3e6fef124924"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","320883217752f90a03578ba07db0308e"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","3d96469e4f8f1dddc342c4dd748f4df4"],["/categories/狂飙，乱飙，发飙/index.html","6039e557e1b0318dddd8e0980afb47fb"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","db2b9e802d962933e7fdb1f35df3b86f"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","1a09e8ab932534361a3c26f638a7dcf3"],["/categories/知更鸟颂歌/index.html","e31a354bab4f03e5987267243e3fb5f1"],["/categories/知更鸟颂歌/序曲/index.html","f10e1e54c51e53948fd9c4040c963b22"],["/categories/知更鸟颂歌/颂歌组曲/index.html","840d17b6220c0a943262e143702d943b"],["/categories/短篇/index.html","ad51a017f6ecbd40d275ee6aefd261c4"],["/categories/短篇/同床异梦（指珊）/index.html","8d9345dcd1beeb9aa51b0300996cf50d"],["/categories/短篇/玉生烟/index.html","076ea66305404aa3391e60bfc14e9c43"],["/categories/短篇/风雪夜归人（陆直）/index.html","dbcc75339fcecf8487a9ac5a311f69e5"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","d2543ee3c376a566bf9cb27f6355fefa"],["/css/noscript.css","825b2814e9e1319a83a44e54890a8aa4"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","80423a4cdb351b4b1b9a6d7c89d17b0d"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","2da6ca6eb328d939bc79748a69565503"],["/page/3/index.html","8833ccbbac754fc413f4d11f894fccdc"],["/page/4/index.html","fdbdfea93be6c83cc18d4b688339be22"],["/page/5/index.html","2d4d1b0667af404287b2e10a83f5d92a"],["/page/6/index.html","ba75acf9b127beaf05378da1412b70fb"],["/style.css","8531c56be6d56dcfc59edae29ee87d2c"],["/sw-register.js","6c7d9abbbd4b74008fd9456d72df03f9"],["/tags/index.html","1500f0daf97441636e6d8cbd6ec78c08"],["/tags/冰与火之歌/index.html","deed1404c3e5bd2cfa5c04cc58a91120"],["/tags/冰与火之歌/page/2/index.html","23d64c63cf3efbab3798e1c0c3b2738f"],["/tags/摸鱼之作/index.html","ea77775b59cc4c0d4249f1f9a6f9c6f3"],["/tags/日常/index.html","3d39e975a5b644e63b4b912791c324c1"],["/tags/柠梨/index.html","c13b449889478995c3e46dfa08698660"],["/tags/柠梨/page/2/index.html","db1a99b67ba0a727cb34050eebb45f66"],["/tags/柠梨/page/3/index.html","959e889193959e2db6c4cd54a5e2d8b0"],["/tags/狂飙/index.html","89cfb8ac21d1fa0c610537dec565c8e4"],["/tags/镛武侠/index.html","a4538b5152077c19a493274cfc0fdf36"]];
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
