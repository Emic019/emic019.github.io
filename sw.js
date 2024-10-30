/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","15435a5c5e77a1853ae5dde2b28b8df3"],["/2024/07/08/月照天山雪（2）/index.html","67c6a0c2f23b28fd8a487e108701b49d"],["/2024/07/08/阅读须知/index.html","62a31dec7994a13ca7d196b422b573fd"],["/2024/07/09/同床异梦/index.html","6bdb6d5f80c1475bfffde908378027a1"],["/2024/07/09/月照天山雪（3）/index.html","dc8769ae2e2f14c9c8aed6aa23430c9f"],["/2024/07/09/月照天山雪（4）/index.html","1c94a800e6ad792e56b0d34e8fecdf17"],["/2024/07/09/月照天山雪（5）/index.html","2368a761e75b1f769950e8a7b9e8af3a"],["/2024/07/10/ceshi/index.html","86b28722b8f94d6bd741e9e1f32b6b9c"],["/2024/07/10/一千零一夜/index.html","2df651d54235e6eae240f3b16e7e3ebb"],["/2024/07/10/风雪夜归人/index.html","ca02c3a704cc6410cbb4b7d133c66de2"],["/2024/07/12/与敌同行（1-1）/index.html","dc13116da87cc05c69a98a808d6fa0ec"],["/2024/07/12/与敌同行（1-2）/index.html","5dcb2ff7e3ba51bb42ee9612e9d0af58"],["/2024/07/12/与敌同行（1-3）/index.html","df33f457a82c35c3394a3488bb7d2f77"],["/2024/07/12/与敌同行（1-4）/index.html","ef781135e3b03da9a1180582693852a5"],["/2024/07/12/与敌同行（1-5）/index.html","8d0e27ee2eaff82709e16bdbeaf7fb6b"],["/2024/07/12/与敌同行（1-6）/index.html","861f22aeb0ddb7a29396587c56cfc784"],["/2024/07/12/与敌同行（1-7）/index.html","fa5ce6266f43653af32e52e0ebf4b5e0"],["/2024/07/12/与敌同行（1-8）/index.html","56e897c36cda186dae255c4ad7146261"],["/2024/07/12/与敌同行（1-9）/index.html","0151917dff98fe75f048cda24c9b8acf"],["/2024/07/12/与敌同行（2-1）/index.html","fab10e8084550ec9556a55ee42f37f99"],["/2024/07/12/与敌同行（2-2）/index.html","5d3f9573c254cc1c775d18a8ba007a2c"],["/2024/07/12/孤独地狱（上）/index.html","a6078c13330d172467cc2b408b120f5a"],["/2024/07/12/孤独地狱（下）/index.html","cae7be8d154446012c8814ce6f511bb3"],["/2024/07/12/玉生烟/index.html","690626455f0dd93a35bb5ef258e2af45"],["/2024/07/12/知更鸟颂歌（1）/index.html","2d85731dd80f6ec99a1d982216c0bafe"],["/2024/07/12/知更鸟颂歌（2）/index.html","d42b46be2024a39432e18bc93c00562d"],["/2024/07/28/与敌同行（2-3）/index.html","72011550117546fd2ee3d4851325c3b1"],["/2024/07/28/知更鸟颂歌（3）/index.html","7648abfc56a7cd97046ddd11a3d8c15e"],["/2024/07/28/知更鸟颂歌（4）/index.html","65761d46072c7dfafc84cb7530ee40c7"],["/2024/07/28/知更鸟颂歌（5）/index.html","ca5717733ea1bc1e1d95885ebfaa9746"],["/2024/08/24/与敌同行（2-4）/index.html","db39a6458c98b70de4685955f572d2f6"],["/2024/09/02/与敌同行（2-5）/index.html","a9955df8cfa97de66bf9632e9c9cbf29"],["/2024/09/02/与敌同行（2-6）/index.html","2ef899bb39d96c08c8566a14aec5262f"],["/2024/09/15/与敌同行（2-7）/index.html","70b87f97a38d26c974612b89d2cb3985"],["/2024/10/03/失落的应许之地（1）/index.html","82134f5b045346e515c397d29a5a7925"],["/2024/10/27/与敌同行（2-8）/index.html","fafa747cc898e928b3fa63f1b0cdaf73"],["/archives/2024/07/index.html","679a7620b724838099ce8236ac7bd014"],["/archives/2024/07/page/2/index.html","bff9d22c130a259858703ad26a5099a8"],["/archives/2024/07/page/3/index.html","a1881742e64e5f1684c599916373e422"],["/archives/2024/07/page/4/index.html","5ce8568222d2ae7d787c73e4fd351486"],["/archives/2024/07/page/5/index.html","965a01cc90833ad27c541aba36adc18b"],["/archives/2024/07/page/6/index.html","231ca27c0f7a68327e2ae2eb7734cdd3"],["/archives/2024/08/index.html","f1a01fc6bc8305c3c85a7350cc36b38b"],["/archives/2024/09/index.html","681f9808fa1982c836050708154f167a"],["/archives/2024/10/index.html","1768fea1bd91c857fb65ad3e20d98893"],["/archives/2024/index.html","84a60a8ed784617735af98c37c2d9d95"],["/archives/2024/page/2/index.html","13d3f930aa89d0dca4eea141f8cb12f0"],["/archives/2024/page/3/index.html","ae73fbe45574478877d32a125dc0a2e5"],["/archives/2024/page/4/index.html","d5fe6073ba0033d5f84a42c9a54d04cc"],["/archives/2024/page/5/index.html","5ca56be06f040fd2786339cc7a0b454e"],["/archives/2024/page/6/index.html","37844a43b0f085f44fbe134f22fb913d"],["/archives/2024/page/7/index.html","be593be0514f81f615c726593b5c7424"],["/archives/2024/page/8/index.html","cab7ebba34f88bd1b78c0e1f19ca1317"],["/archives/index.html","59d4b9e60e0b62d4bef92e041c08123c"],["/archives/page/2/index.html","7b3ca2c8d2ecd78f31272e9f52df46da"],["/archives/page/3/index.html","6a08f42a54db6e59dbfcc7055df6a90e"],["/archives/page/4/index.html","ce9b5399e43f377ff6e4d58a6bcd4fad"],["/archives/page/5/index.html","b9f72acd87ed9085ade3c925a6f8dd0f"],["/archives/page/6/index.html","65134a56e1a12cf11e6e0e29cb14e34c"],["/archives/page/7/index.html","02fb3d72dee6c023584ac9094967c3f3"],["/archives/page/8/index.html","74b477d8a486b30d62f7e63bcdd95bf7"],["/assets/别和数据聊感情.html","13db2b400c55aea9653f498b6a4084bd"],["/bundle.js","6f0360baa8e8e1f859c2e3a01705f1a2"],["/categories/index.html","a54c1b7365123d636de44d9610584f39"],["/categories/与敌同行（梨综）/index.html","9c4ed230ee6dd96a6a9d86321b516200"],["/categories/与敌同行（梨综）/page/2/index.html","436938dabcd8f5c07bee28cfd8a5c6c0"],["/categories/与敌同行（梨综）/page/3/index.html","d1cf57ea461781e43a8b40f3122e1800"],["/categories/与敌同行（梨综）/page/4/index.html","becc326b37d3c1187146e407a5b53431"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","24d272ab271621662fd15b2b70cfeefa"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","e912e99cb6ad31f590793245ac712baa"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","140f0dd1b8d4518bdd088c13604c6f79"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","d0633ec0bc1cde14aaf4d9c4ce78d48a"],["/categories/失落的应许之地/index.html","08fa76f37e85bc30ab8eb2bd63d31497"],["/categories/失落的应许之地/别和数据聊感情/index.html","40862480e281849aa2d279ea30e8f95d"],["/categories/月照天山雪/index.html","4eff33731bd42620e7c3529ff3184c7e"],["/categories/月照天山雪/page/2/index.html","1df09f048419a0448a6f6825e4595aff"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","c1f8e68bebb2ec37ba4aec8ae9b3661d"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","314c1fe842df84b158b73b9b871c18d6"],["/categories/狂飙，乱飙，发飙/index.html","d6874efdace7f85a794aef35f3d6b622"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","a1c42b0d15ed8916e62d26de131ca8f8"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","c21fc2bd6468a15e9feb66c0514a42ce"],["/categories/知更鸟颂歌/index.html","2077aff179e48cc2a917110c7d7d2fa6"],["/categories/知更鸟颂歌/序曲/index.html","ef671e8cd8c94f5df01113a7768c0067"],["/categories/知更鸟颂歌/颂歌组曲/index.html","32afb06b2ab310607d9032570d35dbaf"],["/categories/短篇/index.html","7567ec9e574c09b696c81dcc50311113"],["/categories/短篇/同床异梦（指珊）/index.html","1a1e281ab8ccb19f23c47fc25a12240f"],["/categories/短篇/玉生烟/index.html","a7a6a73a03f40d517772d0479cb6f0ab"],["/categories/短篇/风雪夜归人（陆直）/index.html","312f4801af72d61cebf9fe1b08a14626"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","8b3e992bf8c4b54483318d9fb567f339"],["/css/noscript.css","72a9a65db61804b4bd40fdeddd484635"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","ce120f47efd039be68dcc416e439f410"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","2595c61b6aaae79b916b522b88d3d5c6"],["/page/3/index.html","8906e5db700ddc28ede86f21c5370d7a"],["/page/4/index.html","6714cd4e0f3b3220ef03e0850818ec23"],["/page/5/index.html","58a2f42af211290413d1c3c964968a05"],["/page/6/index.html","73d5fb47ec4127d6fdc0b69fc40c5194"],["/page/7/index.html","dcf876ae5408a439cb273f8bea7e483d"],["/page/8/index.html","f99e044e5649665691e85b5125ff2b81"],["/style.css","ef892535bcafe65ecf0e74747aa5c737"],["/sw-register.js","9af968179710f1485cefbd5dba27b3d0"],["/tags/index.html","8fa127b71d47fdc01fc31c55946641a6"],["/tags/冰与火之歌/index.html","13225f86fba5597b68b05308cc4bd657"],["/tags/冰与火之歌/page/2/index.html","b0e339c6aa28b9e4f0b20f9bb92f864d"],["/tags/摸鱼之作/index.html","8cf6a6892b01ce59d799cd1055f6b104"],["/tags/日常/index.html","4389341a9857a40d2efbdf3515e19b8c"],["/tags/柠梨/index.html","918b88aad95bcbd5a5d7bc35992776be"],["/tags/柠梨/page/2/index.html","63d4fc2fde612243695458f473e249c9"],["/tags/柠梨/page/3/index.html","cabde7c09e62a014c798e1bf19bb3713"],["/tags/柠梨/page/4/index.html","8c3d62c23414a25416d4ed8ff6c04a2a"],["/tags/狂飙/index.html","a140ee7f20587e7472b9ff7a412dfdb2"],["/tags/镛武侠/index.html","7f4c6369900f56f2f6768519bf63432c"]];
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
