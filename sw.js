/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","87079128fdff6bb13bc4b83f1c9af41c"],["/2024/07/08/月照天山雪（2）/index.html","059ab4d6575050b4d747be2539138fe8"],["/2024/07/08/阅读须知/index.html","96468056ae08669d9581b3a06ef3754e"],["/2024/07/09/同床异梦/index.html","ec65ce08f5f455b88c6969cfb4d3caf5"],["/2024/07/09/月照天山雪（3）/index.html","6f02c71aa0d3179e281e84d6631782cb"],["/2024/07/09/月照天山雪（4）/index.html","ba879e886d396d3dc51a6ab67bfe770d"],["/2024/07/09/月照天山雪（5）/index.html","e092768aa15b504279c6c9d4fd0c0784"],["/2024/07/10/ceshi/index.html","c489d5c1b54ea546704a2f5eac883ecc"],["/2024/07/10/一千零一夜/index.html","b8c5bef6ed0d324a523f8b5ede7b38c5"],["/2024/07/10/风雪夜归人/index.html","1d3928631f4cd5e7404c5349dc6d517e"],["/2024/07/12/与敌同行（1-1）/index.html","a561c48a3f13c16634300a457375e365"],["/2024/07/12/与敌同行（1-2）/index.html","772c8747b2e9fe39add7b8df17d195d6"],["/2024/07/12/与敌同行（1-3）/index.html","b48cfdd49a42fea49c93200e70a72def"],["/2024/07/12/与敌同行（1-4）/index.html","c5ed28af1080a29e3512b3dc892eacd7"],["/2024/07/12/与敌同行（1-5）/index.html","2b866e0e8d8df1582aaac0fd1a164291"],["/2024/07/12/与敌同行（1-6）/index.html","06851ceea361180224625aee26581f14"],["/2024/07/12/与敌同行（1-7）/index.html","72340835ae3eac5561a0117d6994693c"],["/2024/07/12/与敌同行（1-8）/index.html","65305ef469c74e6283303db1f184f9d5"],["/2024/07/12/与敌同行（1-9）/index.html","392595259f304df6b69c57f22ff12387"],["/2024/07/12/与敌同行（2-1）/index.html","7eb98a6643eb393d043e795dea4e859e"],["/2024/07/12/与敌同行（2-2）/index.html","3c559a4967980d654bd83ab0b78e32d3"],["/2024/07/12/孤独地狱（上）/index.html","67daacb942f837b7d1eff89e1a6c9240"],["/2024/07/12/孤独地狱（下）/index.html","1d4d81f824fbaae379ed582463c47088"],["/2024/07/12/玉生烟/index.html","5965c7692bfca2b1f717972e3521d367"],["/2024/07/12/知更鸟颂歌（1）/index.html","3ab7e867ccccaa02b2e9bd2d5527f05b"],["/2024/07/12/知更鸟颂歌（2）/index.html","9d6956b1088b756c2f8da3677093f715"],["/2024/07/28/与敌同行（2-3）/index.html","db2d26d6e83211751fff5db466f64317"],["/2024/07/28/知更鸟颂歌（3）/index.html","a44738edf0395e9734342f2641d41608"],["/2024/07/28/知更鸟颂歌（4）/index.html","1f0c154789855dd0100f4713cdf8eed6"],["/2024/07/28/知更鸟颂歌（5）/index.html","3bbf855cee26223cc6c77177f101d18f"],["/2024/08/24/与敌同行（2-4）/index.html","51a296ef19caccdccfc578aba7342732"],["/2024/09/02/与敌同行（2-5）/index.html","5e9fd984a407599a31ec6be4fe492338"],["/2024/09/02/与敌同行（2-6）/index.html","0567b4ba750a4a46b3f832485a64d72f"],["/2024/09/15/与敌同行（2-7）/index.html","ca83cec9f69024cc6d2adbf7c1b89297"],["/2024/10/03/失落的应许之地（1）/index.html","bf167581a52847d39abddde226a4dba6"],["/archives/2024/07/index.html","c1fc7fdf4aa372f4145e8b38cdf688e9"],["/archives/2024/07/page/2/index.html","a5842ef140bc9c367220cfa46c2c6f73"],["/archives/2024/07/page/3/index.html","92c169bb4926e5be2fbfed20bccbcc87"],["/archives/2024/07/page/4/index.html","3084e1bf9db052d32ea549cd32b01128"],["/archives/2024/07/page/5/index.html","08d9d0733aa361f827ee4560236b62c9"],["/archives/2024/07/page/6/index.html","3a2ffc996b1cf2520d7f20a7e535f96b"],["/archives/2024/08/index.html","725b75b6530bbe112a5b64f6927744bc"],["/archives/2024/09/index.html","293006eccde67c1a2cc6d470447da155"],["/archives/2024/10/index.html","a381a138d98edf5df5c9e28fb5a551cd"],["/archives/2024/index.html","b6a3c0dc76469428d95c84cf54b34f59"],["/archives/2024/page/2/index.html","d74ff4a04f15d7fbe73a3ac1baac483e"],["/archives/2024/page/3/index.html","7842bdcc8eb03c30b66761d3600b814e"],["/archives/2024/page/4/index.html","0c25f5e33c64965c65221a540cb53281"],["/archives/2024/page/5/index.html","d3eb3fc1b27fdc15b781be05d80f4314"],["/archives/2024/page/6/index.html","0472bff605c3e884f129d457186644f9"],["/archives/2024/page/7/index.html","db1a3d2aee1970df41d60ec17de4a93d"],["/archives/index.html","6e25f47e21480f98b74e4c90123ddb24"],["/archives/page/2/index.html","cc6aacee7f20623520e905eb00304a85"],["/archives/page/3/index.html","4074e4e0810a16cddd476b1e9a8abd76"],["/archives/page/4/index.html","73891a2645526e63aa2f92db27eea897"],["/archives/page/5/index.html","82ebaf863ded66ed5a59114664461920"],["/archives/page/6/index.html","e1333cc94a7120e13a9d9eb02de78afa"],["/archives/page/7/index.html","34b89427d6062ad5762a39f23089a39a"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","2c9ea2ee58644f21ce3bea12ee1dbe48"],["/categories/与敌同行（梨综）/index.html","7f4307f800eca24f9e2b7c0d8bc0854c"],["/categories/与敌同行（梨综）/page/2/index.html","308b2d32adbf7b78c57ee6d4153002ab"],["/categories/与敌同行（梨综）/page/3/index.html","5ead62ef8f8cc773aa54db59de7814cd"],["/categories/与敌同行（梨综）/page/4/index.html","1991014138981fe8761a245bc700eef5"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","bc0801232f90556722de91be4d40bf03"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","8d189ae0b0ff30d3e1d50bcfe0ece8d0"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","3e659dd6f82dc7c9e50496a9c82d5b55"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","ff34da0211b11df4e81186934b86c17b"],["/categories/失落的应许之地/index.html","828d8560d26e7013878cab5e3fc6c7d7"],["/categories/失落的应许之地/别和数据聊感情/index.html","ed517d9c4a649dfbdfc75a0b964289c8"],["/categories/月照天山雪/index.html","a49617fe543882587b5c2fccb2b045ff"],["/categories/月照天山雪/page/2/index.html","09e22b392340b7c5ad79c0554d95b227"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","9b497af178dba146af524d53acba614c"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","ba3afd554277b065a63ee69f58d051b2"],["/categories/狂飙，乱飙，发飙/index.html","62e6d307e1ee8a0fa13613d632710754"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","dd5931157271af1505c7894f410841b4"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","d4b342391b8ab5d94ffc19fea7e1e1fd"],["/categories/知更鸟颂歌/index.html","f166a07c4d3931ce43ea00b3586286e4"],["/categories/知更鸟颂歌/序曲/index.html","45f75adcc736e5a6dc39f907515661e7"],["/categories/知更鸟颂歌/颂歌组曲/index.html","4b5e6dfb3dddbe8996e7057624995f61"],["/categories/短篇/index.html","458f4d59924eddbf414fcdf59c4b0320"],["/categories/短篇/同床异梦（指珊）/index.html","8459a4e6b37b4187827b5e060b4a28a1"],["/categories/短篇/玉生烟/index.html","2bafb462740fe5d3ce6818c5a39c04d1"],["/categories/短篇/风雪夜归人（陆直）/index.html","49a4c08e7dc6e56d3710ee54a28a97c4"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","5982636106c89a5efad6b93413e734c6"],["/css/noscript.css","9f77f67a1aa9d9cc145c1fdf74b446fc"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","ea4857cd6d8205f78443b5fb506f8305"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","c16ba29f8d6e207bb861917e60dab8dd"],["/page/3/index.html","0349a6d99a35a1afb9110dc301c8834c"],["/page/4/index.html","475b2982020c6cc1dc612657218563da"],["/page/5/index.html","14d02a0f0fa3436e1c29e1a897b4ac2b"],["/page/6/index.html","f40cfbb4a199f4a50bd11fe0c2b0e076"],["/page/7/index.html","059b7aa2b9a9a668ea4ce903c0f8234b"],["/style.css","df330def49313b59a7b3caf6c2d9c3dd"],["/sw-register.js","21f1401688e7f35c6040aa14c73262f5"],["/tags/index.html","2b3755542ec6e5791db2f84841eb6d56"],["/tags/冰与火之歌/index.html","1d5f39eb264f53b5cad9cb8c0043a8ae"],["/tags/冰与火之歌/page/2/index.html","bbf00c5c512d537248ae2600aa9db69e"],["/tags/摸鱼之作/index.html","331968c7d117980e96528058d21f3a42"],["/tags/日常/index.html","e13c19a35dff6cae95c8b994027ba5b3"],["/tags/柠梨/index.html","c7c574b47f75245e1ac95859da81ebba"],["/tags/柠梨/page/2/index.html","bedbf512abae1eb5071f05666bf37dc2"],["/tags/柠梨/page/3/index.html","7270d4fc3644192e2f78abeeea45b86b"],["/tags/柠梨/page/4/index.html","887d1f1b68cadc9bd9d6d78d9569a5a2"],["/tags/狂飙/index.html","f10394b4b65842be04db616af4f82452"],["/tags/镛武侠/index.html","fac0f44f7c6adcd58a261635aa45a6b9"]];
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
