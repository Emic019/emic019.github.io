/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","98bedc05d7b57419530e50f2d2067a2f"],["/2024/07/08/月照天山雪（2）/index.html","27c51cdec515e768de78d46b4a01b998"],["/2024/07/08/阅读须知/index.html","dff989651dd691472a25413b5c58b0dc"],["/2024/07/09/同床异梦/index.html","15a45ab24de728bdf59e61c25d1fbf4f"],["/2024/07/09/月照天山雪（3）/index.html","e750cfba6b25337935a8e3215bab5ba7"],["/2024/07/09/月照天山雪（4）/index.html","c9cb7426377021999eb72104665052a6"],["/2024/07/09/月照天山雪（5）/index.html","50df403d241215183bf543f882943201"],["/2024/07/10/ceshi/index.html","2e7c93eb383238ff6dd497576ddd10ae"],["/2024/07/10/一千零一夜/index.html","097153818d0709d92114a2c0736c38fc"],["/2024/07/10/风雪夜归人/index.html","e48def5b7b16394850bdb2cbd8a38d54"],["/2024/07/12/与敌同行（1-1）/index.html","7aa24d111cefaff0c4be768427dfafbe"],["/2024/07/12/与敌同行（1-2）/index.html","5a02ae3be3e6dd698d0bfe7ae810a682"],["/2024/07/12/与敌同行（1-3）/index.html","350aaceeb3e3100104b6a4752b47e13a"],["/2024/07/12/与敌同行（1-4）/index.html","a6c52ff879986325082dde1ad1a2d8b4"],["/2024/07/12/与敌同行（1-5）/index.html","4f6c9250253f8a13879a0513656f741c"],["/2024/07/12/与敌同行（1-6）/index.html","f9ac642d6a17414f3edd0f8903be5bfe"],["/2024/07/12/与敌同行（1-7）/index.html","51ccaf8d2fed75c45006384a647b4707"],["/2024/07/12/与敌同行（1-8）/index.html","f77a791d738323bb6b31e394648f037c"],["/2024/07/12/与敌同行（1-9）/index.html","f0c37ec9baee5855a08c6d3e1b972937"],["/2024/07/12/与敌同行（2-1）/index.html","ae16def27a3df24bae27a37eb5866fee"],["/2024/07/12/与敌同行（2-2）/index.html","5c0fd2ca53be07f49cfbbeaa9726a750"],["/2024/07/12/孤独地狱（上）/index.html","51ef2dd5d0b7d31962b91b63340f3ab6"],["/2024/07/12/孤独地狱（下）/index.html","0475eeb9b43d2e22ae6bf78290d55795"],["/2024/07/12/玉生烟/index.html","6b77fd858b39de76948672d2ad7fc8ad"],["/2024/07/12/知更鸟颂歌（1）/index.html","35d25bb3183203de6a64c7b50e7abce5"],["/2024/07/12/知更鸟颂歌（2）/index.html","94a4fdbc0fa99ee614a8e3174efa9704"],["/2024/07/28/与敌同行（2-3）/index.html","53e6b610aff771d66af2a1165fc20031"],["/2024/07/28/知更鸟颂歌（3）/index.html","79309682af7dc0c300fa80d8a81602ba"],["/2024/07/28/知更鸟颂歌（4）/index.html","014811069c27e7ef0bc863209b0e06c1"],["/2024/07/28/知更鸟颂歌（5）/index.html","c462793fe93391cfdaf6c05218404ffe"],["/2024/08/24/与敌同行（2-4）/index.html","0bee4c00715271997ad2b03894f402fd"],["/2024/09/02/与敌同行（2-5）/index.html","620790b585f85a19ce141ea79c32ebf2"],["/2024/09/02/与敌同行（2-6）/index.html","c531b69740094cdd5f4b3bc5186d2dd9"],["/2024/09/15/与敌同行（2-7）/index.html","5d12fc0ce3252a8d664a9f6c03c6aedd"],["/archives/2024/07/index.html","fdbfdec76b55b4da37828dd4cb2cefc2"],["/archives/2024/07/page/2/index.html","9b7b0f512e3282f6e7fcff7df297b065"],["/archives/2024/07/page/3/index.html","8fce04b946d05bc71df76d4e17b85886"],["/archives/2024/07/page/4/index.html","55f917cf4b3a596405ba4e2330f466d0"],["/archives/2024/07/page/5/index.html","496d51c1c976887a1a6cb26fda80a1f7"],["/archives/2024/07/page/6/index.html","ef386994ba68f80e85425dd7bc1ab1cd"],["/archives/2024/08/index.html","3ca89ccb05fe9b0575b8a977dcff42f6"],["/archives/2024/09/index.html","e9f62e43df0d3c4ed6df58a4f666e91b"],["/archives/2024/index.html","9d966495dc3c342cbac1e700f7736535"],["/archives/2024/page/2/index.html","10e1ca1ef1641893c3bbc49b3c83add5"],["/archives/2024/page/3/index.html","14da757aa7fd77b08ba22e9360152a34"],["/archives/2024/page/4/index.html","c43a8dff0eb3977be4a3dd2ffdc1e609"],["/archives/2024/page/5/index.html","5095f2b8ca398e74146ee91b7fd0ce70"],["/archives/2024/page/6/index.html","c9a213d18cbd5df9540d630edf0a333b"],["/archives/2024/page/7/index.html","4bdb0f0e5a929b8a9e31133d20691241"],["/archives/index.html","46cd186584c488b403bc8be96e098561"],["/archives/page/2/index.html","d9ca172736ed3747dfb49e0f2aea2ddd"],["/archives/page/3/index.html","bd0971818353440e69dbf10d26ecd7bd"],["/archives/page/4/index.html","1e58c0a58fc2db5db9db39d65b53afb1"],["/archives/page/5/index.html","6c106238cca9645e8336cc3f079a6e11"],["/archives/page/6/index.html","a4b369bcd2523d945e44e46db2fb769a"],["/archives/page/7/index.html","3547b56106c230cfc144d04837496672"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","b9effadc4cb0608c40c9516ef2380912"],["/categories/与敌同行（梨综）/index.html","55bbb16d97a171d11723933000403dbc"],["/categories/与敌同行（梨综）/page/2/index.html","d96ab3704c1db7de47f50de84e80269e"],["/categories/与敌同行（梨综）/page/3/index.html","8afe1499d524489818af9d20730a1353"],["/categories/与敌同行（梨综）/page/4/index.html","e209a18dd2fd38229d1c9922bddb8b55"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","09427c024f68eaf8145a2c347f3c3196"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","0bbd239f75ed64d6c47479c2148df324"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","5bbb0e800323ba4e2787eb077f95ee1e"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","5fa2d8a32338aea71438e9b032764d30"],["/categories/月照天山雪/index.html","96bec0514143d091d2c62b38da63b214"],["/categories/月照天山雪/page/2/index.html","38d7e3408b38e537817f0ef9ddfbe496"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","7ac8c0f75fc48c7e9dd234e59b2d190e"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","d6aaae7aacffa7aa74ab76fd639d4b60"],["/categories/狂飙，乱飙，发飙/index.html","2095ee877fd78789da7c98215d8d55ff"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","d65706f5126a4408ddeb4d44492a3f69"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","7c37390b075ed915f1da21c7597649af"],["/categories/知更鸟颂歌/index.html","cd28ea80212c3f92dc9786224d3ae868"],["/categories/知更鸟颂歌/序曲/index.html","3ac0743b4e846a211b4b34803bc5af4f"],["/categories/知更鸟颂歌/颂歌组曲/index.html","06652baa296df1402f3fbc6e9f327646"],["/categories/短篇/index.html","76ed42f3565e25f2b560be6506710fef"],["/categories/短篇/同床异梦（指珊）/index.html","a67a8affe6b20f62399e1293c11a5a5b"],["/categories/短篇/玉生烟/index.html","23d408ed33210ac514184eaad75bfc88"],["/categories/短篇/风雪夜归人（陆直）/index.html","7662e0cd24e21da7d18acd40bce279dd"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","fd849a76648c391ab63aaeab35e0f7d1"],["/css/noscript.css","a29f803b084146258fe1827f14f1c71e"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","90e22b98b94c90770b4cc3c250465a87"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","b657fb9ee7913741f770a5b49c2309ed"],["/page/3/index.html","9994c6ebd733ba5d9890695df6e20f41"],["/page/4/index.html","f0d85a0f1fadd4686e2ebf1bd8cdee46"],["/page/5/index.html","c8975503283cb55e2272e06ada7b19bd"],["/page/6/index.html","a512220595c82e08dbb9a5412da3a07e"],["/page/7/index.html","d07c3458eed816c9beaa68e1e6bdb9af"],["/style.css","a8db8a70b0e5cc6db0f8bebdada9c623"],["/sw-register.js","6ad8ba46796656d765ae9c3e3278f2c8"],["/tags/index.html","acae1f3de87c444590f47f0b64f6c2e2"],["/tags/冰与火之歌/index.html","b76ce9b00817d034bd7b8bf90d38dd96"],["/tags/冰与火之歌/page/2/index.html","d6c630da70ab87ea8fbc308a74dbd939"],["/tags/摸鱼之作/index.html","93914027050f3e6a14f948256766b5ce"],["/tags/日常/index.html","f46f9000cb2a133f0a54db13f29912b3"],["/tags/柠梨/index.html","8b987eb4dec7bdb24be6d7a3346e4722"],["/tags/柠梨/page/2/index.html","e3b2469ffa74e98ceb799ec4d022d5ec"],["/tags/柠梨/page/3/index.html","bab98f33b961f7da9a64c7f8cd66f026"],["/tags/柠梨/page/4/index.html","d954e226ccd548117471fb4a7e8582c0"],["/tags/狂飙/index.html","cd2e1c531d059f8290e3bf3d5c11b7a4"],["/tags/镛武侠/index.html","dc73d3da2ca348999432c35136e11c9c"]];
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
