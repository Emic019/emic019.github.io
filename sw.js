/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","181560fd74d0f3c33cd341d827b14119"],["/2024/07/08/月照天山雪（2）/index.html","6f2c6d34e4083ddbd5d19e844dd1551d"],["/2024/07/08/阅读须知/index.html","b68715b71320660b9ddd1a78b2fa3b83"],["/2024/07/09/同床异梦/index.html","fddc0cac98217814d16addba48a261e5"],["/2024/07/09/月照天山雪（3）/index.html","ad0c11e04dc366d34ffdac1cb0180c84"],["/2024/07/09/月照天山雪（4）/index.html","8d6504e64b96532bf753a2ed68fba253"],["/2024/07/09/月照天山雪（5）/index.html","1fd83d871dde2218e5483b50476d38cd"],["/2024/07/10/ceshi/index.html","b0a51d65dcd5ef41823fe43f0b21fd77"],["/2024/07/10/一千零一夜/index.html","292726bba0ccd0318bb5272c3b539503"],["/2024/07/10/风雪夜归人/index.html","360d2beeab49502ec14378b3fbf735d7"],["/2024/07/12/与敌同行（1-1）/index.html","dcd917a933210f93ff94707cce48c883"],["/2024/07/12/与敌同行（1-2）/index.html","fec65539b627b4425f51ef1b703b449b"],["/2024/07/12/与敌同行（1-3）/index.html","67cb637930f46a2093590893a511882e"],["/2024/07/12/与敌同行（1-4）/index.html","9c7fc5c83e3f820e05d884a28e6f733d"],["/2024/07/12/与敌同行（1-5）/index.html","e174c6c7f884e1d1825cf72fc075fc5f"],["/2024/07/12/与敌同行（1-6）/index.html","774941a19f2271a61394d945fba218b0"],["/2024/07/12/与敌同行（1-7）/index.html","91e95b324a8340b793bf2bc56e705ca2"],["/2024/07/12/与敌同行（1-8）/index.html","87b198b4d7ea200e0efadf98252a6545"],["/2024/07/12/与敌同行（1-9）/index.html","5cd65c549bc9ca001d051a00ab8d21d7"],["/2024/07/12/与敌同行（2-1）/index.html","cb552af19c48f422779e530436c3c8f1"],["/2024/07/12/与敌同行（2-2）/index.html","ad33ebf2c45f45abfa4472d86329c584"],["/2024/07/12/孤独地狱（上）/index.html","9e11c5e20b7a2bb1f44cf5e32cac0463"],["/2024/07/12/孤独地狱（下）/index.html","711d97c239bf0d881dbfcfd312d90d1f"],["/2024/07/12/玉生烟/index.html","26fbd2b542e2187039674530b69b587e"],["/2024/07/12/知更鸟颂歌（1）/index.html","07575673fdeba5ca2028ab340739eae9"],["/2024/07/12/知更鸟颂歌（2）/index.html","23c1a97d48efeeb79f6a2af58403829a"],["/2024/07/28/与敌同行（2-3）/index.html","60a58d7ed19669220854f5fb94fcd2ef"],["/2024/07/28/知更鸟颂歌（3）/index.html","fef7e4e7863ee52a8719306751064778"],["/2024/07/28/知更鸟颂歌（4）/index.html","f8d23c10c3bf26e5ae42811152313574"],["/2024/07/28/知更鸟颂歌（5）/index.html","0d14fa573bcad6c8451118a804784e1b"],["/2024/08/24/与敌同行（2-4）/index.html","92202aa3195a05871ba4a7c5ac43cab8"],["/2024/09/02/与敌同行（2-5）/index.html","cc45156cb59d28dbd0a3dfbabefabe17"],["/2024/09/02/与敌同行（2-6）/index.html","4e9fcb2dcb0703d1508e55ac615e2145"],["/2024/09/15/与敌同行（2-7）/index.html","73c861ffc3693e9c319572faec8cf692"],["/2024/10/03/失落的应许之地（1）/index.html","ce0d4fd171b907600d93a5c07ae8a91b"],["/2024/10/27/与敌同行（2-8）/index.html","f790dde7c3a22329e31673851fecb08c"],["/archives/2024/07/index.html","fc5630d77adc67eb32b0fc898fda4a0b"],["/archives/2024/07/page/2/index.html","f5a6371a4cf5e5abadc42541f6bb84af"],["/archives/2024/07/page/3/index.html","0055eae300a8800184bf0b2b3402f897"],["/archives/2024/07/page/4/index.html","befec62979c9ef18d5cf4ca65b5a681a"],["/archives/2024/07/page/5/index.html","7aeb093bd937b7b5cd52e0d37a4909a5"],["/archives/2024/07/page/6/index.html","5d0f0c4c1c0f1122397630e46d709355"],["/archives/2024/08/index.html","38f53d10dfb868252da2d210c60cc275"],["/archives/2024/09/index.html","9377344cdc86892c4c926e5f8a00ec60"],["/archives/2024/10/index.html","46cef094f3ebb0a5fa83b9553a2a1319"],["/archives/2024/index.html","64f36ef44c4755459babdacc7a747db4"],["/archives/2024/page/2/index.html","1b39b2beac926651d657c8629b04da52"],["/archives/2024/page/3/index.html","82efaa5557e5421956c1927ead5aa1c9"],["/archives/2024/page/4/index.html","3bbbf3526ec8927374415c2a807a87e9"],["/archives/2024/page/5/index.html","2ca740636f9ef101e4b5279254d4b1b8"],["/archives/2024/page/6/index.html","1fab8197506ab7aac842a7f87fd066db"],["/archives/2024/page/7/index.html","d681f48ec8c676dc9f2fd111444c4141"],["/archives/2024/page/8/index.html","043c2036bcb01c68c44e959dc9fc6dd4"],["/archives/index.html","297d74cb46238844a5b3370f0bdf3665"],["/archives/page/2/index.html","33f5e81546ccc4893f4b5e52a96987ed"],["/archives/page/3/index.html","72fc2911bb498f516dc87e1fad0626ca"],["/archives/page/4/index.html","cf08f49b8f8f29942e15e332c9932f2f"],["/archives/page/5/index.html","44a32cca76a56a30f75b47ff7b336107"],["/archives/page/6/index.html","074eb792e4c45fbe92df9c314f4cd748"],["/archives/page/7/index.html","90a591e854a7da2f33e4469614fd629b"],["/archives/page/8/index.html","de085bfdd7c328beeb774a6e1d4e6a25"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","6f0360baa8e8e1f859c2e3a01705f1a2"],["/categories/index.html","4624dcba85aec3d87ceedafb99afbe5b"],["/categories/与敌同行（梨综）/index.html","24214ff11537caa3db91dbce97997a9e"],["/categories/与敌同行（梨综）/page/2/index.html","5968e691d09f112ddc4d955e146e902a"],["/categories/与敌同行（梨综）/page/3/index.html","e6d8a1321c111fe979376c3780d02cb6"],["/categories/与敌同行（梨综）/page/4/index.html","ce2be45fba703baf7e11cae7eff8502b"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","6801b49ae44d2af3db8fd905883fd293"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","333608c3a9666096f18db832f6cc6e03"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","93ff34a92e01a22f8d2d902f90f9daed"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","bad74007f751383fb7ff5b249299991d"],["/categories/失落的应许之地/index.html","745abd401e54d03e3038f5c870b07dab"],["/categories/失落的应许之地/别和数据聊感情/index.html","506a8c6eef351025be9a4f928fb437f4"],["/categories/月照天山雪/index.html","c25e0f4048dbfe2215fbbe9eb85ba0cf"],["/categories/月照天山雪/page/2/index.html","a1d72a343c907a6d0b7815cb11b8ea4d"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","e276312cbfac41f55ff7872fdbf74953"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","43146b0985b6cade19aabd4e9539b9b7"],["/categories/狂飙，乱飙，发飙/index.html","cd7923e4fe0eac0b9cb2b82505c15de1"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","b16e0a6bfbace6b4ee5cf7210132cc52"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","b0856667af744501ed2d33b37da67126"],["/categories/知更鸟颂歌/index.html","18874d2f60c41739658557b278303dc0"],["/categories/知更鸟颂歌/序曲/index.html","484ff2276a50af68d011559692f0aba1"],["/categories/知更鸟颂歌/颂歌组曲/index.html","3a22cd80f4302c070e5eaacc07910625"],["/categories/短篇/index.html","a46b1ba573a519b31451e2fb51bc9d17"],["/categories/短篇/同床异梦（指珊）/index.html","558704c1080d9c620a09c912d151bb55"],["/categories/短篇/玉生烟/index.html","9912307938ba8441957cad94a76b1797"],["/categories/短篇/风雪夜归人（陆直）/index.html","d20f328ec4a188b00f5217f24d3aaf6c"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","8b3e992bf8c4b54483318d9fb567f339"],["/css/noscript.css","72a9a65db61804b4bd40fdeddd484635"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","5a404f82bcb0889e56d9985affaf3edf"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","f034f841009c0fec298ac89b36dbd55e"],["/page/3/index.html","67e3d32b9cefd2b16ab02f39dc72e1a2"],["/page/4/index.html","d91e3ae6deea18313ab23e9fb48f3c93"],["/page/5/index.html","2e7c74a998dc96eb03544321043a5bce"],["/page/6/index.html","31f3aac76687941b4f36492b7ee99af7"],["/page/7/index.html","994aa056381c06f251ad86061102ca95"],["/page/8/index.html","d852d38e7245f22719378c19a77c4a3d"],["/style.css","6e1f19dbb609508c895147365265b052"],["/sw-register.js","f7d149e07b0a6b4b782a5b44ca998e04"],["/tags/index.html","4f8fe2b796214be360b5824bdced3dc4"],["/tags/冰与火之歌/index.html","ee8538d3317131506b32038a8a32f2f7"],["/tags/冰与火之歌/page/2/index.html","6f21857b3afa6c20de3c3d3e7357c3d1"],["/tags/摸鱼之作/index.html","4d04ac636b52460a4d560f63a1ade586"],["/tags/日常/index.html","a700f6cefe57128fa9ae52694c65bc60"],["/tags/柠梨/index.html","cd7de922825d8a217d60fa6c363eef23"],["/tags/柠梨/page/2/index.html","95d8768073f4b1cd6eb9ad8cba427f45"],["/tags/柠梨/page/3/index.html","823397eccf48572c6fc111ba5b6365d5"],["/tags/柠梨/page/4/index.html","2622eaf8bbf1f317035843e18af7c508"],["/tags/狂飙/index.html","415e6e1ae4c32e8f2f16aa9cf99a3bf9"],["/tags/镛武侠/index.html","05873bc7a821452f832c70f4d40dab08"]];
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
