/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","18f26ae06eb2ba986c74672a86c2cf3a"],["/2024/07/08/月照天山雪（2）/index.html","1e941808d8a02aaf6f6b6e13743be6de"],["/2024/07/08/阅读须知/index.html","8a0677c63611c979a87fe10f7408fc86"],["/2024/07/09/同床异梦/index.html","a789bbb3938292beff914e98aa150204"],["/2024/07/09/月照天山雪（3）/index.html","efe81d66b3b06ed0506fb5638d506093"],["/2024/07/09/月照天山雪（4）/index.html","46447edf9dda49e44a0a8df7c65c8a28"],["/2024/07/09/月照天山雪（5）/index.html","55f8bca0567ea11bbf625e75ced6bda6"],["/2024/07/10/ceshi/index.html","53254a587a264fd257803fd8b4dc5b5e"],["/2024/07/10/一千零一夜/index.html","7c4de89aa367474bbcf1babff85324b9"],["/2024/07/10/风雪夜归人/index.html","45ded2739fcc349964ce8865741d6a3e"],["/2024/07/12/与敌同行（1-1）/index.html","f74447bb92dbe051206808362d1c568e"],["/2024/07/12/与敌同行（1-2）/index.html","ad4fdfd7d7d483ece2129303ac088fc4"],["/2024/07/12/与敌同行（1-3）/index.html","0771bfb780c886bbd33d1523f92e4e40"],["/2024/07/12/与敌同行（1-4）/index.html","0d6ff81e4d89479e2189a8482a968d45"],["/2024/07/12/与敌同行（1-5）/index.html","08f430ac46aea580638d5cb0f5f186f5"],["/2024/07/12/与敌同行（1-6）/index.html","0d364c79df4efb25827f9bc3333e71bf"],["/2024/07/12/与敌同行（1-7）/index.html","349c98be1ffcb0239827f5c0b49b7212"],["/2024/07/12/与敌同行（1-8）/index.html","d4db233785571c4e0ca33407921cb12d"],["/2024/07/12/与敌同行（1-9）/index.html","26f62f5c777e400c81bbb6665e68d489"],["/2024/07/12/与敌同行（2-1）/index.html","89da1c334610333659d32eae5b76c46d"],["/2024/07/12/与敌同行（2-2）/index.html","be7771c6491d8ada7f14b271e288c5a8"],["/2024/07/12/孤独地狱（上）/index.html","da51883a8ef7293b70e28e076e1aa7f0"],["/2024/07/12/孤独地狱（下）/index.html","3f50ead30b4d093c497099b72c8b1774"],["/2024/07/12/玉生烟/index.html","492640315f969fd1797250e4a5df21a5"],["/2024/07/12/知更鸟颂歌（1）/index.html","2dc4ef8cc80b366d2fde5c5e5bb080db"],["/2024/07/12/知更鸟颂歌（2）/index.html","89ab7ebf50027409cbca281fa5d2aebc"],["/2024/07/28/与敌同行（2-3）/index.html","35c0d1c611b94283e2572642df1ad17f"],["/2024/07/28/知更鸟颂歌（3）/index.html","0657117bc617676a4fe6ddcc7505038c"],["/archives/2024/07/index.html","0c366eb5fed7dd6430f41e89254a16df"],["/archives/2024/07/page/2/index.html","1d101ee9c526600129081e94c18e34c7"],["/archives/2024/07/page/3/index.html","eafd8daab46345f7d03f57455f043b67"],["/archives/2024/07/page/4/index.html","2ecdb094bb152987d57f9220a8b91030"],["/archives/2024/07/page/5/index.html","75ec07e83ac8c6935ade0a4b6b4b087c"],["/archives/2024/07/page/6/index.html","967ee707e25838b5b332e2254b43636c"],["/archives/2024/index.html","3f0b064d060ed7689d77b068dfc7ce7d"],["/archives/2024/page/2/index.html","1501fbc388bc96a53834fd92db66774d"],["/archives/2024/page/3/index.html","6fdb3793e2a6ae17744b8af6c3e32e2a"],["/archives/2024/page/4/index.html","c3692a3623187b7b5f98f39bd07d7976"],["/archives/2024/page/5/index.html","7caf9a40fb1e8bad246984a9427e82c3"],["/archives/2024/page/6/index.html","1ae0dd5d19e1ee559c7f2de704a03c06"],["/archives/index.html","19862e51229be5561c7b49af075972ee"],["/archives/page/2/index.html","41f3d1308098818c8e936c8220d5be8b"],["/archives/page/3/index.html","289d5744ec6e0e208434fc985601f1f6"],["/archives/page/4/index.html","f72b89e0d0823ab1ddd1059102d763f0"],["/archives/page/5/index.html","41e5ebe22eb96f6e3fbad0b948612141"],["/archives/page/6/index.html","e86ed0af1cf7ba1c265e4382da362736"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","9499d2217ae9537d61af6ba4565e610f"],["/categories/与敌同行（梨综）/index.html","928f43295359aea84e69097d6eb622e2"],["/categories/与敌同行（梨综）/page/2/index.html","900b0c2fb5c17f084437dd0e28d73bb5"],["/categories/与敌同行（梨综）/page/3/index.html","f8ebc9e39adde94ac1e8edc84ae66ff8"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","69a86456ecbe86f3d8e02a08c5d0ebd4"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","cbc31a77083cd73124add543704db28b"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","fa2309f17fb8112440d865f9d29df47f"],["/categories/月照天山雪/index.html","4d4e929016441905084b87dcc30061ab"],["/categories/月照天山雪/page/2/index.html","1da208f8e6d2c054258c677da8da44de"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","ba1f3b32c145e6c869596d6d98a1297f"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","2699af7d98ac6a7f4f8d2cecb6fe95e1"],["/categories/狂飙，乱飙，发飙/index.html","c75da2ecddd6f18e077e021f3fea4a6b"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","fe10710a86a9e82f2d454da1cd0dc1e2"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","1af77d1feba8bb103dbb96f9f67399b2"],["/categories/知更鸟颂歌/index.html","7bb6f08598fbc5328e28d710467ae3b8"],["/categories/知更鸟颂歌/序章/index.html","77aa820cbcffd89773ff5e20a656e936"],["/categories/知更鸟颂歌/爱情之歌/index.html","5b95025b75cdb2b89bc27dadecd45c49"],["/categories/知更鸟颂歌/青春之歌/index.html","2f0b8fba97607995ef3d6d30a2cd998e"],["/categories/短篇/index.html","ebd738cde58bb9f43f35836a9ae9e059"],["/categories/短篇/同床异梦（指珊）/index.html","ee012977f2a8e5b5706eb2bb4cee5368"],["/categories/短篇/玉生烟/index.html","d219a8ceaff5e3a95bcd5fa05d9f60da"],["/categories/短篇/风雪夜归人（陆直）/index.html","850110a6a49e4daaf292962001c37a68"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","75fa501ca71a019d4e0151a289a93fed"],["/css/noscript.css","ce73c2999eae8d97a43fd31849aa02c8"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","77b304163c232e24f1a1402a2823fc92"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","ff68d98485391884dbdf5cf0704e867a"],["/page/3/index.html","8bd1269849c46393cf8dc84bddb98fd5"],["/page/4/index.html","f9dfe908a002e4e2622ca110eebbaa5b"],["/page/5/index.html","1f89041fc242c4da93a0d5f3c4e0c248"],["/page/6/index.html","39df92a31e0edab044a3aab9e741d700"],["/style.css","adc78cd61451749c01b842739611ff26"],["/sw-register.js","dd4e421ef7f12bd336275fbf59df7c80"],["/tags/index.html","c0b31426b29d0d46ce581b68217fd591"],["/tags/冰与火之歌/index.html","01a51b3cc11d44ea612754ff5d41d1d6"],["/tags/摸鱼之作/index.html","c371910197d15a110801bf523e27f109"],["/tags/日常/index.html","f0b8fde663168dad0a37adb767fa1ce1"],["/tags/柠梨/index.html","935fa1442e3f4576c5af32ce811e04a4"],["/tags/柠梨/page/2/index.html","1696f7d85c41eb70b9b7b32191da5136"],["/tags/柠梨/page/3/index.html","ba53e081d90a88952bb55fef4500a54b"],["/tags/狂飙/index.html","dd2bcfb4636e7d12d537cf824194432d"],["/tags/镛武侠/index.html","3455167b56f7fe0de445b6bdc54fa779"]];
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
