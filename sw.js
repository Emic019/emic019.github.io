/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","0bf4d4686964442bee85dc41cbfbc69f"],["/2024/07/08/月照天山雪（2）/index.html","9e08d6762db5378b59cd6da017175029"],["/2024/07/08/阅读须知/index.html","68093ba0e2c9759ef1ab6d25f624c72c"],["/2024/07/09/同床异梦/index.html","66579ce85634f715a8202f69ff9de896"],["/2024/07/09/月照天山雪（3）/index.html","a5c6f3019e526b9c23fda8c2569e66a1"],["/2024/07/09/月照天山雪（4）/index.html","da272c136541eb64db671e9a49d5aef5"],["/2024/07/09/月照天山雪（5）/index.html","662fe7edaea839c0703ef344b032421e"],["/2024/07/10/ceshi/index.html","e47974f9d26f4d08f8e8c13512169e8f"],["/2024/07/10/一千零一夜/index.html","54ca0d38d2d59a02b34f15bd387a4204"],["/2024/07/10/风雪夜归人/index.html","5277eac730c811482ce32b715873dcb3"],["/2024/07/12/与敌同行（1-1）/index.html","2edd4d92eb12769a308886af653be007"],["/2024/07/12/与敌同行（1-2）/index.html","cd3abb4b5fd4dadfaa743122cdab6765"],["/2024/07/12/与敌同行（1-3）/index.html","a72b31e366cb021a8d06157219a00e42"],["/2024/07/12/与敌同行（1-4）/index.html","1e69b7315cc929d92d48cb23659ce3c4"],["/2024/07/12/与敌同行（1-5）/index.html","539ad95b9475efd40101e665fc5c243d"],["/2024/07/12/与敌同行（1-6）/index.html","8ae40e3d87529718475fdce17bfc2184"],["/2024/07/12/与敌同行（1-7）/index.html","81824ed9745ca4bb75192d69b08483ef"],["/2024/07/12/与敌同行（1-8）/index.html","543d365d8c8757130f1cde662a96bedf"],["/2024/07/12/与敌同行（1-9）/index.html","0c7088538c9362af42eb4b2af5408226"],["/2024/07/12/与敌同行（2-1）/index.html","46293481efc65f99a6b71151992bb995"],["/2024/07/12/与敌同行（2-2）/index.html","1393da2e81c5f9a3969dd40a392ebe79"],["/2024/07/12/孤独地狱（上）/index.html","4e1b00e1d531382e78d66a5d916ac78a"],["/2024/07/12/孤独地狱（下）/index.html","1177ea1bbf7fbe12f53b26e028cbace3"],["/2024/07/12/玉生烟/index.html","a6897793f61f7b8b543788899c45c4c3"],["/2024/07/12/知更鸟颂歌（1）/index.html","ce60d5a5ff34259b0f941956348d7ffd"],["/2024/07/12/知更鸟颂歌（2）/index.html","15396f5d3406bf33bc01156d934ab1f0"],["/2024/07/28/与敌同行（2-3）/index.html","de972461c8c99b0e031b1fcf08d0bd6d"],["/2024/07/28/知更鸟颂歌（3）/index.html","91d4ba15f5a687524c6af372cc8cd4c9"],["/2024/07/28/知更鸟颂歌（4）/index.html","cf7e65e4a07cbf536b6ddf53861b26be"],["/2024/07/28/知更鸟颂歌（5）/index.html","8c26dea730319f535498fdd16a6ff123"],["/2024/08/24/与敌同行（2-4）/index.html","42a63d10ac5bae4afa2a2c9ff48178d3"],["/2024/09/02/与敌同行（2-5）/index.html","bc81ed5d786e824c284ec5e15f0b543c"],["/2024/09/02/与敌同行（2-6）/index.html","0421741f3e1ac64c250afb08f89b7619"],["/archives/2024/07/index.html","b75a10a51980fab0201296946ca5c92b"],["/archives/2024/07/page/2/index.html","b2175954ad39697363e84265a03fcd63"],["/archives/2024/07/page/3/index.html","e6fd1b410563b65756ed85988b94f751"],["/archives/2024/07/page/4/index.html","12e28365378205f969c8fefc62ae841d"],["/archives/2024/07/page/5/index.html","371acb9add54e390dca371b9babf3e68"],["/archives/2024/07/page/6/index.html","6ba78f86e3a00a228a2bf1d5f282ca22"],["/archives/2024/08/index.html","bd1b3a113c7875143573ee261a4dc6cb"],["/archives/2024/09/index.html","e8bcec065db26af7a584d8af0c6e7a91"],["/archives/2024/index.html","7e65c9568f5431688e68e01932073565"],["/archives/2024/page/2/index.html","b0cf3be8c9d19812d97db3636f5bb5c9"],["/archives/2024/page/3/index.html","ca3dc434bfdb3eb487a10c0f1cb1ab6b"],["/archives/2024/page/4/index.html","242da9283c049229512e333e3c6098ce"],["/archives/2024/page/5/index.html","041ad69cd16bec29108d77fff7f09d2d"],["/archives/2024/page/6/index.html","466c725bae4f1eea52d9236326444c85"],["/archives/2024/page/7/index.html","99a4a697a8085b791df2ad98f419f9e3"],["/archives/index.html","6a66e3cbdca46c389d47326bde4daa5b"],["/archives/page/2/index.html","422f57392f831a97881de5cba24be657"],["/archives/page/3/index.html","be90305c595334e3fd8a0a64bbfa40c6"],["/archives/page/4/index.html","bc26c888d780b76a4050a2831c739354"],["/archives/page/5/index.html","bc20ff129dc409c965eb14b67bd422a7"],["/archives/page/6/index.html","326244349185e560828d6e8710734dc8"],["/archives/page/7/index.html","4133fc5dfc75273fc6970996d8474c3d"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","904a1648cffbdde848f3044498e99157"],["/categories/与敌同行（梨综）/index.html","9015e8e39146615f86a204b45884dddb"],["/categories/与敌同行（梨综）/page/2/index.html","c03f9ae8b857c696812bbaeac05102c2"],["/categories/与敌同行（梨综）/page/3/index.html","1800c6cb14c3fe2e9e5cfa4fee89a2aa"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","4476dd6e3a9c5f6dc8ac72485f89d74a"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","7e94a0a6b52d0b8752c0fbe8d4b429ec"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","ec605aa5b2fdc9cdff64ca787ae2c185"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","51641f0f7aa571ffa51642345b443ef8"],["/categories/月照天山雪/index.html","de2d8c5ea3bec12092ba5f014612bec3"],["/categories/月照天山雪/page/2/index.html","e91a1de4772a551e2b18b36883266897"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","d9b1cc69926467e698f2dda033d7591f"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","41762c8a402c5d2253f3193bc622d69d"],["/categories/狂飙，乱飙，发飙/index.html","6f883d37e2fc22b5a36c36da1da892ac"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","100181e851d2b86c18427fc1a743ba28"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","c853beb125a7ff5630e43ccb69f176a0"],["/categories/知更鸟颂歌/index.html","f057bd639304454de0033a08d297b8ab"],["/categories/知更鸟颂歌/序曲/index.html","7b5f4cf7669de463c8bd64ef0122745e"],["/categories/知更鸟颂歌/颂歌组曲/index.html","03e5e78900d9f2d3a6a587f16d8af6e3"],["/categories/短篇/index.html","bd8a73f283fa558e044f57d2f0c68829"],["/categories/短篇/同床异梦（指珊）/index.html","0b8df487d307caa6d80a999826381d77"],["/categories/短篇/玉生烟/index.html","8b7fff435d61727036e386de35702d09"],["/categories/短篇/风雪夜归人（陆直）/index.html","01071dd29241336c32db2fb4fd8dfc48"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","fd849a76648c391ab63aaeab35e0f7d1"],["/css/noscript.css","a29f803b084146258fe1827f14f1c71e"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","6343f6ab3338bf40896167029ed1242e"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","fdf13f8ff19e34473d46e258030b4705"],["/page/3/index.html","2891a7a26d2a363666e0e7fb3f1e5e6a"],["/page/4/index.html","ac83436a8c9f935813e25269c7d72550"],["/page/5/index.html","79d31669053f50128c381ebb1e1a74f7"],["/page/6/index.html","7e132a1cc09e1c2fe099bb01596831e0"],["/page/7/index.html","22ff67fb0b45ea2233d917fb225a8e0d"],["/style.css","c33c1be572894c077931f85e1d484336"],["/sw-register.js","0d3ae6dca1744c5c2892e411e8f4c3ba"],["/tags/index.html","6d5cb4e9b72463e6c64a8a3be331dbc7"],["/tags/冰与火之歌/index.html","29beb02c31159d37afda3f4d1bb6284f"],["/tags/冰与火之歌/page/2/index.html","91dcf9d747f864f42fd93b1fef59d4d1"],["/tags/摸鱼之作/index.html","74b966684960898daf4f7935fb981c32"],["/tags/日常/index.html","49d8ccfc99c8b73c2d081d6ea22719c5"],["/tags/柠梨/index.html","601d640784456c438fb342e245dd4f28"],["/tags/柠梨/page/2/index.html","8c77c20600b92c1ded7f2b0566d6748a"],["/tags/柠梨/page/3/index.html","288db53e9811df6ba4319ea7498cbd43"],["/tags/狂飙/index.html","a6ef86e1664ba8d93a6a4163d94e378a"],["/tags/镛武侠/index.html","4743ef380300b33e2851857172d3ebae"]];
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
