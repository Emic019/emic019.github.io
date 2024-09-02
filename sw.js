/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","bd39276f3742bea412699b85da027d64"],["/2024/07/08/月照天山雪（2）/index.html","6ae640e0a8a66aba6d734eb67f8227cb"],["/2024/07/08/阅读须知/index.html","7451d2f030b74d4817b515c64bbbcaf1"],["/2024/07/09/同床异梦/index.html","193cb4f0b66d3cd76ce5172af45c31df"],["/2024/07/09/月照天山雪（3）/index.html","efbc05394bd9e8335814f31e661455e3"],["/2024/07/09/月照天山雪（4）/index.html","a5ef92b9dbc1c0e5633f59b26ec1b311"],["/2024/07/09/月照天山雪（5）/index.html","6aa1ee6539d801b217b381c7f8d2641a"],["/2024/07/10/ceshi/index.html","d1d075725565b23bbafab0e92a8369ee"],["/2024/07/10/一千零一夜/index.html","3debcd28d08221765fdec39bd4e427ab"],["/2024/07/10/风雪夜归人/index.html","40de9aca7ab086c34a5c5c8c01f9d3f7"],["/2024/07/12/与敌同行（1-1）/index.html","87dd2d3e92ff7914d6155d712d38ae33"],["/2024/07/12/与敌同行（1-2）/index.html","4fb18a6ee9a04987e12d4935bc164a9c"],["/2024/07/12/与敌同行（1-3）/index.html","2fa4971429bdfd28e9a13feff850e918"],["/2024/07/12/与敌同行（1-4）/index.html","a56a6a2a627f32ad93f80b1493c6c037"],["/2024/07/12/与敌同行（1-5）/index.html","1f93f40b0adb92f62414e8670322e3c3"],["/2024/07/12/与敌同行（1-6）/index.html","247d94baf67ca38dd377b11726738a1a"],["/2024/07/12/与敌同行（1-7）/index.html","37a54cc3fc72245bfe81bb1626199326"],["/2024/07/12/与敌同行（1-8）/index.html","3af5c3570c971f10d0a65420f8dd0cdb"],["/2024/07/12/与敌同行（1-9）/index.html","46c5dae0bc848f3e3b71935da6a1e2d1"],["/2024/07/12/与敌同行（2-1）/index.html","910e172f0cc8bc62e1c286664c9ebd9d"],["/2024/07/12/与敌同行（2-2）/index.html","c09daa30b91933594961e2cde0208baa"],["/2024/07/12/孤独地狱（上）/index.html","2877383038c3b0ea8d38374abb97d819"],["/2024/07/12/孤独地狱（下）/index.html","3fb2b381f0651f6df904cdc7a26aeb1e"],["/2024/07/12/玉生烟/index.html","6653d70252fc01b7c3350d61fcd0cde3"],["/2024/07/12/知更鸟颂歌（1）/index.html","b598dc6d05d21131c0f1dfeb65c98f9d"],["/2024/07/12/知更鸟颂歌（2）/index.html","51496e4236f3ca499bc4cb042220a66b"],["/2024/07/28/与敌同行（2-3）/index.html","af26e74107a4a918ebce14c229605bea"],["/2024/07/28/知更鸟颂歌（3）/index.html","e0f51be59a7560cfdfdb56809f7d8048"],["/2024/07/28/知更鸟颂歌（4）/index.html","318fa0ce7623507661b493102e63b682"],["/2024/07/28/知更鸟颂歌（5）/index.html","9bcd5e4308f5187225bf3b40ed8d832d"],["/2024/08/24/与敌同行（2-4）/index.html","d9ff94211c1790cc923d2ddb840c9573"],["/2024/09/02/与敌同行（2-5）/index.html","e79521a5fb8fbb6f2234ecc13ef04141"],["/2024/09/02/与敌同行（2-6）/index.html","b4519b5e303eea9c2f6a8e1e26476d22"],["/archives/2024/07/index.html","f9c6bf8feecc77bad9c456896b96a523"],["/archives/2024/07/page/2/index.html","6f68e6ab2e616ae7cd5c64e1fdeb1856"],["/archives/2024/07/page/3/index.html","3c5b6660546183c1e83707f6b79cf8b3"],["/archives/2024/07/page/4/index.html","a3080a152e3ec840a66e3a1becdd08af"],["/archives/2024/07/page/5/index.html","0b7ab596a6bb97e60b476cf5cd0dfc4f"],["/archives/2024/07/page/6/index.html","09634154da3d5a8cd160966f72022b5e"],["/archives/2024/08/index.html","9a16873c2f003a56f84187a1ff028b89"],["/archives/2024/09/index.html","346c704262c5aa05b7e622e27b6f8fb3"],["/archives/2024/index.html","8d6889a09f34d0e53a3eb1f84ce78ecb"],["/archives/2024/page/2/index.html","2230c2f7794ebba635827124202ffa0e"],["/archives/2024/page/3/index.html","8e69bb2353603f1a14a7d2cafb3e002f"],["/archives/2024/page/4/index.html","57a87b41c2e416307883c6890142a2ab"],["/archives/2024/page/5/index.html","c1d3881175bb7bb352227f180a8809a2"],["/archives/2024/page/6/index.html","5f38d1d1feb5889108231153d5997b7c"],["/archives/2024/page/7/index.html","c456689d79f4f2c5700323f7e63986d9"],["/archives/index.html","31e9469e08755684a0e85677f45aff49"],["/archives/page/2/index.html","302f43168abe6ecb449814651e7178b6"],["/archives/page/3/index.html","916ab8c8ebf76d1e56955e50091d1ab2"],["/archives/page/4/index.html","d4cbe943c94775771eff6fcedbef1250"],["/archives/page/5/index.html","343f4bfa709191382c8a9f5f500cfad5"],["/archives/page/6/index.html","992dc0c9fa9bca227175c69bff5148eb"],["/archives/page/7/index.html","665c165ef647a89a9683cb2d894abfbc"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","2251099891ed5e55a28adfb8b2aeb49f"],["/categories/与敌同行（梨综）/index.html","0d22027681e227f76f362c19d0b9ecb5"],["/categories/与敌同行（梨综）/page/2/index.html","d0d48d4df6df73063698af2fe1cd408f"],["/categories/与敌同行（梨综）/page/3/index.html","a56f6f45abf6a749702b22c61257bc23"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","27fa966509c0da7167fca6e1faa9a562"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","5f59d4a9ce0a3a2d874e1ba6f33373c8"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","b93f6f01a96b8a4c26c829f1ce22c12c"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","0fe1c084dda3f0d768c94503e8f9ec46"],["/categories/月照天山雪/index.html","01eb702ed43468eb594013fd57199800"],["/categories/月照天山雪/page/2/index.html","4471cab8ca96de3ce752b205f61b4e82"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","71479f5117dccc86ea19235bbac8b7bb"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","1453996fd200b06b55fee25c5a155958"],["/categories/狂飙，乱飙，发飙/index.html","1191e11a6e17dd0a3af38ff75bf26f20"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","209b77c6f0e11df6c52d9a4dad0508f2"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","007f01a186c3a2a2ee1ec8f6af6b636e"],["/categories/知更鸟颂歌/index.html","68bbd37a1d38853cc30099343a1f8385"],["/categories/知更鸟颂歌/序曲/index.html","6d957cb19cf3c89fcf770d5119fb411b"],["/categories/知更鸟颂歌/颂歌组曲/index.html","1989088a913bcefea36affbb12eafdcb"],["/categories/短篇/index.html","257baf1ed3284f8d7a2f9d2fac40741c"],["/categories/短篇/同床异梦（指珊）/index.html","fab5ae3a9a62858e0c7f8b7782b5eb39"],["/categories/短篇/玉生烟/index.html","4c61177d196847329bbb406125feb7a9"],["/categories/短篇/风雪夜归人（陆直）/index.html","d0bf0c40aa76f081c3ad84d58171546b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","fd849a76648c391ab63aaeab35e0f7d1"],["/css/noscript.css","a29f803b084146258fe1827f14f1c71e"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","c1f31714b5dfee81a3d8d0194bfac2de"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","4844b43bb9d3775a1a0403a3e01311a2"],["/page/3/index.html","566f7ab9c32bc7307833af7ce99560ad"],["/page/4/index.html","2117de46be6beb3e1737002bc034ad57"],["/page/5/index.html","574885b6ae88a2cf3eee03829b3305d9"],["/page/6/index.html","6a3b84c647d11bdf3b4b3d5f9e21d08c"],["/page/7/index.html","67264db440d564c0bfb936a89fee3891"],["/style.css","030212aa6ad98ca6b424d77b66d1002c"],["/sw-register.js","cb53da46d762d7bb41da7dcf8c2d2836"],["/tags/index.html","f7fa1250d5c3edca99df3c8405fea387"],["/tags/冰与火之歌/index.html","16880dae97e905b8a801ff40ed246f52"],["/tags/冰与火之歌/page/2/index.html","a78ecf37f71dbd81885083c34cd5c30a"],["/tags/摸鱼之作/index.html","dbb40982a2ff8fb3cbd47d2b402c370a"],["/tags/日常/index.html","52dbf322457eb62e481fc9f7448eec76"],["/tags/柠梨/index.html","9af235a07dc7472034620c3f659449a0"],["/tags/柠梨/page/2/index.html","47676ae276fb0c268f666252bb34f0a3"],["/tags/柠梨/page/3/index.html","0146bdde3e329677f7482d3a49a0c097"],["/tags/狂飙/index.html","f0ea132cce0f35ac4f69051eac2cc49f"],["/tags/镛武侠/index.html","97286f663c050f97c993eeadd0eb21e3"]];
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
