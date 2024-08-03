/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","570bfff5267fed121ff96d5b3f47ea81"],["/2024/07/08/月照天山雪（2）/index.html","ede02cc7b4c1cffdc605fcd7f1f774c4"],["/2024/07/08/阅读须知/index.html","27e2c5e8320b97eb58de75903655e9a6"],["/2024/07/09/同床异梦/index.html","5f8c44d98cc386ab074162065364311f"],["/2024/07/09/月照天山雪（3）/index.html","87e2dfa0cc91041a451d0f79091701b5"],["/2024/07/09/月照天山雪（4）/index.html","a5cf76afd0c5a08b84994a2bd2bc0935"],["/2024/07/09/月照天山雪（5）/index.html","4c3c1e7a461f8db55daf3d0d9e0ae1d3"],["/2024/07/10/ceshi/index.html","093b7c32b146cf8229dc5202c5b342cd"],["/2024/07/10/一千零一夜/index.html","5e3d7ce8f58e036673bb4fcd704a2023"],["/2024/07/10/风雪夜归人/index.html","5e8ac4a8677f837202e8a69d4115c3df"],["/2024/07/12/与敌同行（1-1）/index.html","4984b4de6694a5b3afc51424af74f6e0"],["/2024/07/12/与敌同行（1-2）/index.html","01bb594f2ce57ddde2e26f84fe91fc5d"],["/2024/07/12/与敌同行（1-3）/index.html","cf64e00fe27e60580f06e8bdc0cd2f38"],["/2024/07/12/与敌同行（1-4）/index.html","5bba3bf4d1e4fc4d3d26e4553c76b372"],["/2024/07/12/与敌同行（1-5）/index.html","d3e25fcf6c9abac3f57a77f8fde37511"],["/2024/07/12/与敌同行（1-6）/index.html","250ae2d7d0bd0ce57a897d86d80011ca"],["/2024/07/12/与敌同行（1-7）/index.html","c672cac96d86d1f50aec33ba72afcd43"],["/2024/07/12/与敌同行（1-8）/index.html","34740908aba9b04fd24ea1c7fd7918be"],["/2024/07/12/与敌同行（1-9）/index.html","8cd8f12865f77a25db43dc02039b5d7d"],["/2024/07/12/与敌同行（2-1）/index.html","06bfa7a38d2b6b84513a1e5118eb4b85"],["/2024/07/12/与敌同行（2-2）/index.html","1182718edff64f2f2a85d8611f38632c"],["/2024/07/12/孤独地狱（上）/index.html","4a0d3ad04b2781d5be2542fa6969ee37"],["/2024/07/12/孤独地狱（下）/index.html","1be1dbad8afb9927587ca81f8dbf74eb"],["/2024/07/12/玉生烟/index.html","21fedba785ec2c2de607e7c4180a22c6"],["/2024/07/12/知更鸟颂歌（1）/index.html","8296c9ee0b98fea0c06068529874a8fb"],["/2024/07/12/知更鸟颂歌（2）/index.html","641fa4a7b5bf840f880fff9666d7f6e0"],["/2024/07/28/与敌同行（2-3）/index.html","dec75c2641fab122edfefe1dd83729b6"],["/2024/07/28/知更鸟颂歌（3）/index.html","2e72ab78df7c5121bb949e9ce357d13e"],["/2024/07/28/知更鸟颂歌（4）/index.html","67d8ebc2845902888223363eb92440f1"],["/2024/07/28/知更鸟颂歌（5）/index.html","4f8801cecf7ca430a25fe3a53738e055"],["/archives/2024/07/index.html","4b4ed0c4295c25b5ea5476947c1ae2e8"],["/archives/2024/07/page/2/index.html","0a5a2b7d82f6587384b91ac30d3fbd5d"],["/archives/2024/07/page/3/index.html","b22ec24f008e70f169c3bf8baad9a04f"],["/archives/2024/07/page/4/index.html","43462c4bb0a51b903d86934fccc34a32"],["/archives/2024/07/page/5/index.html","347f1c42e34ca2c4a9f58d1dc5c473f0"],["/archives/2024/07/page/6/index.html","07cabf34f270d35fd7b488224e43026c"],["/archives/2024/index.html","258dd1a468e8073cdf93e73569675fd1"],["/archives/2024/page/2/index.html","09fbecb53f756d83fe6bc7d0d4f64009"],["/archives/2024/page/3/index.html","0fd1917003b578ce0bca66ab4adb7a8d"],["/archives/2024/page/4/index.html","57e9f3268490c0775649f2375f664bf1"],["/archives/2024/page/5/index.html","a37f8db462a27795cc6f2f36eb8a4cdc"],["/archives/2024/page/6/index.html","955526173ea2b80a8c324b2b4bac81c1"],["/archives/index.html","081cae93227e65c919d0d44611c2968c"],["/archives/page/2/index.html","3c29131a5993c18814a574a3a32bcd5d"],["/archives/page/3/index.html","48976ed538477bd29e73badad8bcb153"],["/archives/page/4/index.html","72470a2b31880742255c669f643a958c"],["/archives/page/5/index.html","da12dbb1a48c4f1b735af57d991cd186"],["/archives/page/6/index.html","c7d53ea705cf43bb464a5f60928374d7"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","35aa861e0ccb110f9fc95a7ab2ba2fdd"],["/categories/与敌同行（梨综）/index.html","9c9f74fdfbeb6703fb4fe23e8e7a7a6d"],["/categories/与敌同行（梨综）/page/2/index.html","b9866c83b1f8477cadd1f8090ba7d764"],["/categories/与敌同行（梨综）/page/3/index.html","5d2e516eb8ac402e8143418cd7ce8249"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","f678eb0ae6223937709fbba67654442a"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","78e4ba9c9010daa503a4f30129953168"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","2a047705ea21eee4c643f8598dddcc83"],["/categories/月照天山雪/index.html","9246524eec5d6c7bcd2111c76a6aa380"],["/categories/月照天山雪/page/2/index.html","2862aecc0adbb20db37f08fb81c0bfb3"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","11937f943b333dcf504dddcbc51935c0"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","0abc7b900af3bef19fd03990ffa1fcb0"],["/categories/狂飙，乱飙，发飙/index.html","572959a64f4e29b929a9661f0831a61d"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","a23c1674e446f3c8e942fa9947f9e09c"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","972dfb6832aa0cef9b2325d1430d4a62"],["/categories/知更鸟颂歌/index.html","3c93873cad07f00d0d8e6676a9f31c71"],["/categories/知更鸟颂歌/序曲/index.html","a9fc26a3425087e7baaa6dd919041e5c"],["/categories/知更鸟颂歌/颂歌组曲/index.html","25c2dab8a694a1f945cc994c4133991d"],["/categories/短篇/index.html","4baedbbee896d47344827fba3a60bb2b"],["/categories/短篇/同床异梦（指珊）/index.html","e969fcc4467a14dc3308a3f6b6321a48"],["/categories/短篇/玉生烟/index.html","40e38e07525105db97b52d51f93c3b92"],["/categories/短篇/风雪夜归人（陆直）/index.html","88b5fdb9809b2ad81d462285526cee7d"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","ad7a77adaf5ecaa08a47970d56d92f5e"],["/css/noscript.css","43ad8e4cfe852e81cdc8fed7065c2861"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","c53618e226e8ccc1eb0d15ee2780ddee"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","64039cae5fadbbb2d007d394c795e539"],["/page/3/index.html","924d0cbefcb312d8c8e163161d8be843"],["/page/4/index.html","c4b77f1fe3c1a5e2f57d129d9e99cb54"],["/page/5/index.html","1f2337cd664bec1062e3c56f449473f4"],["/page/6/index.html","0f0f63cbbc46ba31ba684f37ec6172b9"],["/style.css","4ce2a47e0decd49d3596a24119a05062"],["/sw-register.js","0f205f18af3bd635186ecb86c253b462"],["/tags/index.html","67a2c951f3021d0642f074f438d491ef"],["/tags/冰与火之歌/index.html","c5428171a4fd7ffe86b8cd4e034f3c46"],["/tags/冰与火之歌/page/2/index.html","c1e63cf30a79f3c33a73421a78ebeb5f"],["/tags/摸鱼之作/index.html","78a3475aaae9583cf1e7bc2fa757e856"],["/tags/日常/index.html","2ef7ce7a58f20e307b3e8840256ee706"],["/tags/柠梨/index.html","2f13e5963ca09e9eec3012387c7af88c"],["/tags/柠梨/page/2/index.html","375e9e3ce4fc908b2629f8e8bcde7706"],["/tags/柠梨/page/3/index.html","baf157dc471be3f1ab73283bbbd69d52"],["/tags/狂飙/index.html","82c247f9751c4d30d8996decca88c185"],["/tags/镛武侠/index.html","1dbed3375dd38bc4083e74f465a36fe2"]];
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
