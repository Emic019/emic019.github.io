/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","a9f8ac56d7c4597600eb8e3c0b9bff42"],["/2024/07/08/月照天山雪（2）/index.html","d596e36e66fc2f63890479676cd8c634"],["/2024/07/08/阅读须知/index.html","fe4c1fb92a11dfe02233436349f9a42e"],["/2024/07/09/同床异梦/index.html","706a68cf042817ea3d1fb0634f0f073a"],["/2024/07/09/月照天山雪（3）/index.html","51df111aa3b598d946b2c134e56471b5"],["/2024/07/09/月照天山雪（4）/index.html","412b843b305e3887fb44c7ad5f84e6ab"],["/2024/07/09/月照天山雪（5）/index.html","15d1958e954411134b2ada4320ea80e2"],["/2024/07/10/ceshi/index.html","fe2374c4d622ecbd74dc08ce47a0b0f9"],["/2024/07/10/一千零一夜/index.html","bc5527b23ad7bee24daaf7a868178152"],["/2024/07/10/风雪夜归人/index.html","24b3da6a3cc4c862d3601f0c01a1d40e"],["/2024/07/12/与敌同行（1-1）/index.html","cd3e60ad2924ef7164a6b187a7ff6848"],["/2024/07/12/与敌同行（1-2）/index.html","e84630e24866ed98a94a48ed2774f0b9"],["/2024/07/12/与敌同行（1-3）/index.html","07bb196feda83a80d8aa73aad6fa6bf3"],["/2024/07/12/与敌同行（1-4）/index.html","4fa7a5ba48ab8c7fcdac35a9e6d825f8"],["/2024/07/12/与敌同行（1-5）/index.html","356aefffefb49a91f65c46d97ab9a880"],["/2024/07/12/与敌同行（1-6）/index.html","b937a86d365224c4e125360a006734e9"],["/2024/07/12/与敌同行（1-7）/index.html","d068acd493dad4d3b42775f00433c838"],["/2024/07/12/与敌同行（1-8）/index.html","522c1ba8f73fa06f467a7e1bb441d031"],["/2024/07/12/与敌同行（1-9）/index.html","2d938900dbd493ca42c05f31f5a13e32"],["/2024/07/12/与敌同行（2-1）/index.html","49186442d12303f7f383289b130aaa71"],["/2024/07/12/与敌同行（2-2）/index.html","a0d4875d52ca798b586282cc9d31d579"],["/2024/07/12/孤独地狱（上）/index.html","f3f5283b2dd65c167c3f76940de8f484"],["/2024/07/12/孤独地狱（下）/index.html","e474a2d682d4913c01d792a6c038a425"],["/2024/07/12/玉生烟/index.html","57505cd5352af66e70d385e00e7d2728"],["/2024/07/12/知更鸟颂歌（1）/index.html","97e7df3f1e4ae1744f7241e8f4323e78"],["/2024/07/12/知更鸟颂歌（2）/index.html","b2f0bede8d99e59991ab67af2f688d1b"],["/2024/07/28/与敌同行（2-3）/index.html","1734405b33dac8f3cef9ef0cb15279c1"],["/2024/07/28/知更鸟颂歌（3）/index.html","de812f15928edf9603eba53a4b1c9a93"],["/2024/07/28/知更鸟颂歌（4）/index.html","46f4de21f0de123ee74494f415310a44"],["/2024/07/28/知更鸟颂歌（5）/index.html","402858d1bf305c39d0d790fc46012082"],["/2024/08/24/与敌同行（2-4）/index.html","a289921d21af70355ecca8ed9c2245b4"],["/2024/09/02/与敌同行（2-5）/index.html","2bdfdcfc87d4cabd2563326915e58177"],["/2024/09/02/与敌同行（2-6）/index.html","e3bc39cdd1064d717beebca40d5c4603"],["/archives/2024/07/index.html","b87263e2af955b54e29f332b6170fa35"],["/archives/2024/07/page/2/index.html","833b8070982e79ca287a8aad459a9241"],["/archives/2024/07/page/3/index.html","fc38afbbe72c051d5f7acf12caaddb86"],["/archives/2024/07/page/4/index.html","1640db9f2c715421bc00a4901f750aaa"],["/archives/2024/07/page/5/index.html","53d4da73282f9400e330745656c4c6bd"],["/archives/2024/07/page/6/index.html","312aa12c4ef593a22d10f14d6981251b"],["/archives/2024/08/index.html","c5c5e9c38edcfc651174d5a737568991"],["/archives/2024/09/index.html","3b74197e88e6cd27411903da6f3c3d76"],["/archives/2024/index.html","48b4be1267cbdbb68e1d597387602694"],["/archives/2024/page/2/index.html","4f8201dfbdc196d6e1dadf73190a7552"],["/archives/2024/page/3/index.html","1dcd5f439d175bab3fa974e2c1d92489"],["/archives/2024/page/4/index.html","8e60b43b07956bb735da08dd49cb8c03"],["/archives/2024/page/5/index.html","dfd53bafb1e985ba77d97f901986624d"],["/archives/2024/page/6/index.html","597b5a1e89ad0011516b37b0d4e78a78"],["/archives/2024/page/7/index.html","0bc57adaca11ff75941762a400e6f8e8"],["/archives/index.html","e09ac38819b78629c606537297b42c83"],["/archives/page/2/index.html","3c31df9d9ce07cb0cf4af5aaa17af9d8"],["/archives/page/3/index.html","739f85ff0547524eaf41fd54a390d265"],["/archives/page/4/index.html","7638f41d523c54607ac8552b67131ce5"],["/archives/page/5/index.html","77b62865efc45b46fba62fbba4c85df6"],["/archives/page/6/index.html","8e4de3f2d1e12b0a086a3a2739f71b89"],["/archives/page/7/index.html","17c3553670969199e4ebe9703915bc11"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","24940d8637b62b78410119d773db6a9c"],["/categories/与敌同行（梨综）/index.html","4d74bda4cb2033d371e51e7ab486eafd"],["/categories/与敌同行（梨综）/page/2/index.html","ae91d6b3d876265ba0fab3d3605918b9"],["/categories/与敌同行（梨综）/page/3/index.html","9b63912dbe298596e81f9ba63681641a"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","fd1aec44703c685ee1e81fd06bbb0250"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","9c247279440e66e5e649eb02e3df75f5"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","ea22a9d885b3d7600c929ffec9d69088"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","29bd1c726140f9a6592900b8e2ebde68"],["/categories/月照天山雪/index.html","ab5e046d4ec0cec4b10dc2fd9d405348"],["/categories/月照天山雪/page/2/index.html","0cafe1f40032a6d0f717a64bf6b225c1"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","d1e17f41ad5ccfeec62f624962792789"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","4381e2541e3ca250880debb2344d4d00"],["/categories/狂飙，乱飙，发飙/index.html","c5ac58100166bc3f4cc7c43fa4db76e9"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","755d98fecd5496bb4153bc3e57f75a23"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","b7f31ae071416b683097eeefc26058d0"],["/categories/知更鸟颂歌/index.html","4eeb3cbb90995e1e6e70a7be358994cd"],["/categories/知更鸟颂歌/序曲/index.html","14b35f57660217ab92aeb96f3581909b"],["/categories/知更鸟颂歌/颂歌组曲/index.html","e9c81f88304614454e2697230fa9a3dc"],["/categories/短篇/index.html","8469e9b160fd7df176ad3dc77aa85425"],["/categories/短篇/同床异梦（指珊）/index.html","410cf2aa06dba2f73987d4881209f013"],["/categories/短篇/玉生烟/index.html","a61ce40409e97080515cdc8db5f49d6e"],["/categories/短篇/风雪夜归人（陆直）/index.html","9b98ab11509c0ca4b0435a3c38fdb145"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","aab36cd468a52c2ed1cfbe3c1f4821eb"],["/css/noscript.css","b61c3e29d7fbff18ca4812f4ee70873a"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","02f1dc012f47eae88a3e380664c6fcb4"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","f7c1ccca205612273dc98615dc22c17c"],["/page/3/index.html","9fb179089a1dfb21ca22e2c258a67e68"],["/page/4/index.html","03fa6e87aca567af68bd83a9dba71b87"],["/page/5/index.html","2e730b7f6ad691ff2c4eeddd7c5b1c28"],["/page/6/index.html","aa02cebc689fd1dcd2ae1402dd20b755"],["/page/7/index.html","466c6d55e26488c1c0ae9ad676572961"],["/style.css","1f725b55fa8b4660070da91437c8b27f"],["/sw-register.js","42944a5cebadf55377864e8c07430f21"],["/tags/index.html","bb967a438693ab28d4911d0396997d94"],["/tags/冰与火之歌/index.html","21f8ed42e40637723ef2b8f8b4dd3642"],["/tags/冰与火之歌/page/2/index.html","ecaea435a33150f7b8447339850b8d81"],["/tags/摸鱼之作/index.html","1b017e85a64c22b0289e713e0e9e54ef"],["/tags/日常/index.html","44a0e22ef54479bf1b9b223abab385bd"],["/tags/柠梨/index.html","84b43004f930001a096ce17b82d548b2"],["/tags/柠梨/page/2/index.html","5693fddd1d5a14beec7bb44d89df755b"],["/tags/柠梨/page/3/index.html","84914ca539ac9cfe9e5df89d7bcddca9"],["/tags/狂飙/index.html","2742372e1f9430a0ab382b5b263257a8"],["/tags/镛武侠/index.html","780dbafd4101215b6c554e95c63ff11a"]];
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
