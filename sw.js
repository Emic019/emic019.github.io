/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","7579bd31ba656079972ad170d3be3148"],["/2024/07/08/月照天山雪（2）/index.html","1cb434c9ed12f47cd47f128e092ca24a"],["/2024/07/08/阅读须知/index.html","e468c4609cbd1da7399f45a2fe291dbd"],["/2024/07/09/同床异梦/index.html","b9a514b11b6ebeb2e6e7499ad666e31b"],["/2024/07/09/月照天山雪（3）/index.html","c98c5a2d35f038c68e93ae511e67fa4f"],["/2024/07/09/月照天山雪（4）/index.html","f81d948092bcdb819537d3aa1fa5a24a"],["/2024/07/09/月照天山雪（5）/index.html","022c6cf5c1a856441e622215e744997a"],["/2024/07/10/ceshi/index.html","bfcf4eb1718d2c639e447d4eb3822be5"],["/2024/07/10/一千零一夜/index.html","5e38c8a8b336e5fccd03c9585c5e73c1"],["/2024/07/10/风雪夜归人/index.html","71a0f3c27d1f4eed355ef242b659ee0a"],["/2024/07/12/与敌同行（1-1）/index.html","d077370f348dfce93dd38cfb567c02f7"],["/2024/07/12/与敌同行（1-2）/index.html","0f06fc8fbf973b843d82966f259f7594"],["/2024/07/12/与敌同行（1-3）/index.html","e67be255e693d60de5632a3107ad4fc6"],["/2024/07/12/与敌同行（1-4）/index.html","bc65b30972f3005293a6b4c5070cd02a"],["/2024/07/12/与敌同行（1-5）/index.html","53e5291e5a894385d48a5463b6fc7074"],["/2024/07/12/与敌同行（1-6）/index.html","292ddd20e196f95bb37f8433ec884c7f"],["/2024/07/12/与敌同行（1-7）/index.html","88c44cbdac801669d9db543299908aa5"],["/2024/07/12/与敌同行（1-8）/index.html","5f19c54807419ba42314a703aacf47f2"],["/2024/07/12/与敌同行（1-9）/index.html","abb6e47ffc55e0664fa8efb0acbb8d8c"],["/2024/07/12/与敌同行（2-1）/index.html","a2216ccd021b9047d6e57a22e06339eb"],["/2024/07/12/与敌同行（2-2）/index.html","7136eb620bf1388f51affe45267d171f"],["/2024/07/12/孤独地狱（上）/index.html","e7fc11e2524bca5160dad07450ed17b5"],["/2024/07/12/孤独地狱（下）/index.html","44358bf123b7252dbaa04684d5cacc4d"],["/2024/07/12/玉生烟/index.html","8f8971ee1ef853eaf68ed006a60a822d"],["/2024/07/12/知更鸟颂歌（1）/index.html","2befcc73a38d65d0e03b29ccb6f415d2"],["/2024/07/12/知更鸟颂歌（2）/index.html","044f66af9a50aaf305a74d21784bd382"],["/2024/07/28/与敌同行（2-3）/index.html","18d6f33147de69c10f5b3b4d09338a8f"],["/2024/07/28/知更鸟颂歌（3）/index.html","b4ef5f9cb1e4a42b0e3bc635d37cc489"],["/archives/2024/07/index.html","04275b3d38b18f32122a1c5287e81c13"],["/archives/2024/07/page/2/index.html","ab9825ae11ded2c76e002cc837e1e5b0"],["/archives/2024/07/page/3/index.html","7cffec26d2ac60b9da41ea6533b51850"],["/archives/2024/07/page/4/index.html","637de294e86835c57600ba7626372b26"],["/archives/2024/07/page/5/index.html","52faf70b5dcc1c676294829c82da665b"],["/archives/2024/07/page/6/index.html","61faf300fe726877934e78a38535ef5d"],["/archives/2024/index.html","e0030ff69496fe5ac7e0c5200bbac09f"],["/archives/2024/page/2/index.html","d503ad811200aeb05761a7a2f74f54c7"],["/archives/2024/page/3/index.html","95186045f8d8ed739e3a40b7523c7adf"],["/archives/2024/page/4/index.html","0dec1d9de30d65fedae7473972dfbb38"],["/archives/2024/page/5/index.html","a6156266a8aa79e748d91589595585dd"],["/archives/2024/page/6/index.html","00b13afccc6b210cfa576df579fdced3"],["/archives/index.html","df955d79ad96cf3d795c230bf3b0e109"],["/archives/page/2/index.html","3061ca0198dbc1e206bdd9f85c53b191"],["/archives/page/3/index.html","5bedad0e8082f1bde5c4d73c21660b34"],["/archives/page/4/index.html","e0cd217d927576fb93ffee070e58f1d2"],["/archives/page/5/index.html","0ee1e9f7f78b1642c8daf4bc063ad23a"],["/archives/page/6/index.html","dfc60a093429ece8eb35d945903ef9d8"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","ffaeaad8fb41e8c8056db2ec3d0c1c8f"],["/categories/与敌同行（梨综）/index.html","696b5ba7c7ec2094baff3752482340c7"],["/categories/与敌同行（梨综）/page/2/index.html","c7905e4d49e09b5f31566463c19f9cbe"],["/categories/与敌同行（梨综）/page/3/index.html","8d95da3ecdc2140d633cae80feff6f88"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","0fff9978b66eb92dd2e6c610bda47e48"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","28c48aed2f57779eecd24ff1ae5ce912"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","c71db23a42068a759f00431a1d402cd0"],["/categories/月照天山雪/index.html","a3b16be0ef221813f2229536476b6ac2"],["/categories/月照天山雪/page/2/index.html","95fbe5649b82f159429ad3e9fb836720"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","8126b7e8c9c28e3724e2a6fa6c406794"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","219fed61b365539a4658697c8aac9d7e"],["/categories/狂飙，乱飙，发飙/index.html","12ed09bd9bdd77f238d9bb3ee2672632"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","1273fea418736b1d278fe8bbbc06f892"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","0c119b2d3f85be916f934410a3f5194d"],["/categories/知更鸟颂歌/index.html","dbb5b7b32a05cddf0cfa3cb225a3b648"],["/categories/知更鸟颂歌/序章/index.html","39cad30908776982f2147597bf107719"],["/categories/知更鸟颂歌/爱情之歌/index.html","49e2009d67d73bc2fbbc8e6d2bfbaa7f"],["/categories/知更鸟颂歌/青春之歌/index.html","f9d231a8f588b8a556985396507628b0"],["/categories/短篇/index.html","a8af3561bccdd7f7d8ca0d3f1651c742"],["/categories/短篇/同床异梦（指珊）/index.html","22d62634737771cb898005cf01c0c2c9"],["/categories/短篇/玉生烟/index.html","a47598cf66b987bfdc599a9f1b04d0d7"],["/categories/短篇/风雪夜归人（陆直）/index.html","fc2b755521bdabe59defb4c8762552e6"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","75fa501ca71a019d4e0151a289a93fed"],["/css/noscript.css","ce73c2999eae8d97a43fd31849aa02c8"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","0bd6f6c7bb9102d2f70a04bc0cd97a18"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","ccf283b47859bdc1c9eff0f6109d494a"],["/page/3/index.html","ac4cce743ae25564823670c009122d8e"],["/page/4/index.html","effe3732daff6dd1bcfa64edd3767978"],["/page/5/index.html","5514b4c2ee144fcc99c34455282c31d6"],["/page/6/index.html","2feacecc8e198d88e3bc64c189b9902a"],["/style.css","e8f443ee18cc7c1e78944c7afc3337a5"],["/sw-register.js","8da8901f5044a25b7fcafeb602b39e61"],["/tags/index.html","9ab95e5a7d33935c41621c75d3f04352"],["/tags/冰与火之歌/index.html","0716b62a801d8a7f6966d1edebb7fd97"],["/tags/摸鱼之作/index.html","ddded021426ac9c1cf0fd9ea681914fc"],["/tags/日常/index.html","495ac67625b120079048d4d3fbb14918"],["/tags/柠梨/index.html","209d4d3a26f97b25ccf099cc1a5cf90e"],["/tags/柠梨/page/2/index.html","61ca86619fdd8f98b53d03d3af9196c1"],["/tags/柠梨/page/3/index.html","3fd6dfebb116e5557d9fa650f12be3d7"],["/tags/狂飙/index.html","1068412f10a7b70d3fd1733a9ae30be6"],["/tags/镛武侠/index.html","28511ddb33f471f5476c70fffd7580f0"]];
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
