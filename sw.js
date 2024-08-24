/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","f0595c941d9cda152161f5e61ad39d56"],["/2024/07/08/月照天山雪（2）/index.html","65c74f44b4288b1cf25b490dd12f2320"],["/2024/07/08/阅读须知/index.html","3353c483179cc0262a4033600913328e"],["/2024/07/09/同床异梦/index.html","9e7b46a770ebd0d12637fa9d909d4f75"],["/2024/07/09/月照天山雪（3）/index.html","5c798544292458019a16c5322b215127"],["/2024/07/09/月照天山雪（4）/index.html","c8bcd2029f76a358934526642f7efd70"],["/2024/07/09/月照天山雪（5）/index.html","0c225171bd7948e2a359000e06e34180"],["/2024/07/10/ceshi/index.html","a4766f3edea6a818dd736971b584613f"],["/2024/07/10/一千零一夜/index.html","60a7f7b23d1730d9d9402700d58ac0fb"],["/2024/07/10/风雪夜归人/index.html","ba21919719acd08003efedefa0f15572"],["/2024/07/12/与敌同行（1-1）/index.html","6312a864e3a4b67bf1281cbfb5d4cc89"],["/2024/07/12/与敌同行（1-2）/index.html","92ad9685a72a1d06d0f6efc635bb4349"],["/2024/07/12/与敌同行（1-3）/index.html","a621ba9f2f402f892570f7ced0a220ca"],["/2024/07/12/与敌同行（1-4）/index.html","51b835b2cdca9ed65c0b09098d30e90c"],["/2024/07/12/与敌同行（1-5）/index.html","06318ff8b4c0cb1a487367bae294a91e"],["/2024/07/12/与敌同行（1-6）/index.html","f858c46a29c2a62671b173ace3de3be5"],["/2024/07/12/与敌同行（1-7）/index.html","7ed064b89d9f0e987a521c4f94ddf939"],["/2024/07/12/与敌同行（1-8）/index.html","b9cb1a84d61445d547b76aa3540522e7"],["/2024/07/12/与敌同行（1-9）/index.html","ae294e7f5e8ba16fc09cec1c81c867a7"],["/2024/07/12/与敌同行（2-1）/index.html","56459c275c29fa8d3f8e030b627eeb36"],["/2024/07/12/与敌同行（2-2）/index.html","8d7226a07fe5cd8cf009dbdbcab5dfbb"],["/2024/07/12/孤独地狱（上）/index.html","bd5f28b64cd0e1185758d79ce9fb8dd4"],["/2024/07/12/孤独地狱（下）/index.html","a1772d6050bdd5fd4038e83ec973df7c"],["/2024/07/12/玉生烟/index.html","6a0739c47dadb83e99e729ba4478b541"],["/2024/07/12/知更鸟颂歌（1）/index.html","9c5ce13001601d470d6abf7581a57f05"],["/2024/07/12/知更鸟颂歌（2）/index.html","303c4acf6cee28126ef0a6855c3d923e"],["/2024/07/28/与敌同行（2-3）/index.html","5fcbd825d7ec6e82fc0c467b1206f867"],["/2024/07/28/知更鸟颂歌（3）/index.html","941836c580135177fbbdf706b6193d7b"],["/2024/07/28/知更鸟颂歌（4）/index.html","f7ddb8db6d0c8ad81c0e212f0d9f39b9"],["/2024/07/28/知更鸟颂歌（5）/index.html","c0d330ba0383afcb2bc5f783b519583d"],["/2024/08/24/与敌同行（2-4）/index.html","9b503f9ddf63b3eaa4babc830ea369b3"],["/archives/2024/07/index.html","152addc85448015bfad9d9fafdb4a3bc"],["/archives/2024/07/page/2/index.html","8729994009b64c5c219df28da7cbf2f1"],["/archives/2024/07/page/3/index.html","912b59b22c4b902df7ef62868b48a800"],["/archives/2024/07/page/4/index.html","a906e288de2cd6df6d9d2d20422d2bfb"],["/archives/2024/07/page/5/index.html","f17b6dd070e829892ceebef4df67b48f"],["/archives/2024/07/page/6/index.html","80fc9d39faba7ba3cd281e3f2d7bc841"],["/archives/2024/08/index.html","6e6c0a751e8a203eae52744bd685f469"],["/archives/2024/index.html","dcd9ae67a8fb52ec6955e0217afc4e05"],["/archives/2024/page/2/index.html","3002d5f5dfa96d4b18eb36909fed6e0a"],["/archives/2024/page/3/index.html","ae7bc92bba1b20b7099660f896cf441c"],["/archives/2024/page/4/index.html","8433612328b584189d0abeed22fb6b60"],["/archives/2024/page/5/index.html","3c90b5fed325e0ae1172ef8f9f33cd66"],["/archives/2024/page/6/index.html","d905ad1bbe3bcabb6b6fd2c9e28ed358"],["/archives/2024/page/7/index.html","12ac34458f137b9c8ac023397d576fee"],["/archives/index.html","aab901b4a0d7c24fc2267a4ec506583d"],["/archives/page/2/index.html","0e65960b2eebeb192ae3a3803209d71f"],["/archives/page/3/index.html","d021085d91361a30205aa876c97ecc12"],["/archives/page/4/index.html","d4d175d9d99cd4950c684207960e9d0f"],["/archives/page/5/index.html","ba115384fe2c48ab71784972e712a456"],["/archives/page/6/index.html","56370efba41a891855a0a58f4e93f8ff"],["/archives/page/7/index.html","9e013feeb09c5511d5948b44fa00c393"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","604f0c67eedaae18ac6c1fe7d2e25ead"],["/categories/与敌同行（梨综）/index.html","75342636d289382c11f2d60814467182"],["/categories/与敌同行（梨综）/page/2/index.html","2985259c0addc59fac82b9ee21db088b"],["/categories/与敌同行（梨综）/page/3/index.html","23efc44e1ab1f9938997c055ec0bf9ed"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","109ff2c90529ab5795860d4fa4ddfee2"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","9441f2dd23856e2d7ea589e2b3f527f2"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","4f1b6eaf555137466e3cbefab5ecf80b"],["/categories/月照天山雪/index.html","005975f3c4b278e8306484e99c74fb78"],["/categories/月照天山雪/page/2/index.html","b4a4173addf49fe57583f059ee42a8da"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","1dccc8c8d4a80adbf07348591843b43d"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","73f14b73b3e31f5e4b4e802b4e95005e"],["/categories/狂飙，乱飙，发飙/index.html","17c82ed0f78b7b8222c5a365b835bd04"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","0a6abc00c94bcaca41609448ae6c54a1"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","eba1534b9fd8915a493c1bb1d13187b7"],["/categories/知更鸟颂歌/index.html","dc30aad3894b8347beabab49be441936"],["/categories/知更鸟颂歌/序曲/index.html","ae036876dbb8866cc5e3ac429101c8d2"],["/categories/知更鸟颂歌/颂歌组曲/index.html","4e9ccbadd25562054988ffc80462a99a"],["/categories/短篇/index.html","7cc5147db38505e7600b6312cae424ff"],["/categories/短篇/同床异梦（指珊）/index.html","54a960833b1c2a7e0a8de5e37e12969a"],["/categories/短篇/玉生烟/index.html","b05cff441c88aaf8cb020d9f207aa586"],["/categories/短篇/风雪夜归人（陆直）/index.html","9bf4d2d370f5eb5ab09acbab5662436e"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","ad7a77adaf5ecaa08a47970d56d92f5e"],["/css/noscript.css","43ad8e4cfe852e81cdc8fed7065c2861"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","75a1d772ddad0cd82eb359c0d278fa60"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","692d9bfd7f2e4ee1c39126b7d49fc6c1"],["/page/3/index.html","bf9f443e29f5e6636decf43816a66f48"],["/page/4/index.html","2defd64dba16b98f010a4f8d3f8265d8"],["/page/5/index.html","274362f079a7d87ba199631ad1051886"],["/page/6/index.html","215f71825864cfd4ccd413e4bba21e5f"],["/page/7/index.html","3a2011b056b464f675330f10090b8db7"],["/style.css","a4484e8782484c20cdf16ea083cf71a0"],["/sw-register.js","05129f542d41f3932acb2c4290b144de"],["/tags/index.html","a59f291af8d611ad9c5bb848dadf03f0"],["/tags/冰与火之歌/index.html","4599bca5c6786ff3a673bcfd4bb78a4c"],["/tags/冰与火之歌/page/2/index.html","1dd6808dce95367387b0d063cda0d066"],["/tags/摸鱼之作/index.html","a5654187a80c348921b2228efa5bbb55"],["/tags/日常/index.html","89269bbbbda735b55afcb6845373fb80"],["/tags/柠梨/index.html","0458c33eec4f01f133c2f38700f43c40"],["/tags/柠梨/page/2/index.html","b30f1d7becc71ad4cef35d3ca50cde1f"],["/tags/柠梨/page/3/index.html","98beff1a380e69802ee15baa571647c3"],["/tags/狂飙/index.html","24e175df0fe8b24710f9625c04acd3b9"],["/tags/镛武侠/index.html","7d9ee550a02ce0af8542cbc309c8c27f"]];
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
