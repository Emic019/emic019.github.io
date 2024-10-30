/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","3e7568b220daae8e2a0cc02100635c0e"],["/2024/07/08/月照天山雪（2）/index.html","3df8173b6a4d2e956c98c942f6697ee4"],["/2024/07/08/阅读须知/index.html","823c3d3c16b4a2a539a887da888d5568"],["/2024/07/09/同床异梦/index.html","a9e00d2301fdb005ba4b62ceb16e9f48"],["/2024/07/09/月照天山雪（3）/index.html","b6004b97586e0e60f8536d93e501eb62"],["/2024/07/09/月照天山雪（4）/index.html","2ceed429ec4034522bb0dd973ef1449f"],["/2024/07/09/月照天山雪（5）/index.html","2a308f4e844db82ca69b6e8c76e5fa52"],["/2024/07/10/ceshi/index.html","11ebb315b0d506454f26618970dd9e09"],["/2024/07/10/一千零一夜/index.html","c6bec8885e589045f3a695a741b7f4e2"],["/2024/07/10/风雪夜归人/index.html","fe3abd428452b0f4d6633e7251cdfef2"],["/2024/07/12/与敌同行（1-1）/index.html","394323984e785aabe8ac14d1bd812074"],["/2024/07/12/与敌同行（1-2）/index.html","eca523a583a2efc1f5e927e00f0e3dff"],["/2024/07/12/与敌同行（1-3）/index.html","bf17a978c49b0da0ca07f6947461e0f5"],["/2024/07/12/与敌同行（1-4）/index.html","fb4fe37180dff2a4a5098d37ba24c462"],["/2024/07/12/与敌同行（1-5）/index.html","ca735ac9d1d80bed392b5f1adce2372d"],["/2024/07/12/与敌同行（1-6）/index.html","f89829849819c69b945d71d7c39ee893"],["/2024/07/12/与敌同行（1-7）/index.html","5d4a9137d3f3e42e702b90b513a8e78f"],["/2024/07/12/与敌同行（1-8）/index.html","264272cae87af66e82de78c7e13ba94a"],["/2024/07/12/与敌同行（1-9）/index.html","56fbbb29f405b3ab4ec034e130b5ef14"],["/2024/07/12/与敌同行（2-1）/index.html","c46b7ee0e6df3dc726765734e6884cfb"],["/2024/07/12/与敌同行（2-2）/index.html","a7e32e3cc15336c49495a420c55397bd"],["/2024/07/12/孤独地狱（上）/index.html","8216820af25d7407e44f6cf356ca412e"],["/2024/07/12/孤独地狱（下）/index.html","4249a78f906a8bd1ed72360014d17115"],["/2024/07/12/玉生烟/index.html","4c0109df12a95ada0373b3fec5040c7c"],["/2024/07/12/知更鸟颂歌（1）/index.html","3e56802505f87b9eb1692ffe517bcd3d"],["/2024/07/12/知更鸟颂歌（2）/index.html","25ba051c496c0f5bbd7d57a096080a01"],["/2024/07/28/与敌同行（2-3）/index.html","94bf1e2937f3c8e81c26af1d40610f77"],["/2024/07/28/知更鸟颂歌（3）/index.html","b3fba6e0673a4f45c929fa56a8577a72"],["/2024/07/28/知更鸟颂歌（4）/index.html","d9e4e7d854eaa2d5924433b3ecdb8ac9"],["/2024/07/28/知更鸟颂歌（5）/index.html","aaaefa7b657ab4fcc84205ca6fb42842"],["/2024/08/24/与敌同行（2-4）/index.html","e91a0430e57a1b5a555644ec9e9366dd"],["/2024/09/02/与敌同行（2-5）/index.html","f18859e2a096425314fe842d0c4636d2"],["/2024/09/02/与敌同行（2-6）/index.html","e3528494ae1552ba36d494c920d89b3b"],["/2024/09/15/与敌同行（2-7）/index.html","45f2586f3693f5ce2b8e715c835efc6f"],["/2024/10/03/失落的应许之地（1）/index.html","50749ee302055c73618408a93f20e35e"],["/2024/10/27/与敌同行（2-8）/index.html","c72ac2b767744f55e7d4dcd286889148"],["/archives/2024/07/index.html","c5ec1f56fca4353659269ac2710adcf5"],["/archives/2024/07/page/2/index.html","9d35534cc158cc600290ad0c73861850"],["/archives/2024/07/page/3/index.html","732c8a7971111f923cfc4b58ffc06874"],["/archives/2024/07/page/4/index.html","e79100c74bdd3231ad218f1d89c841b4"],["/archives/2024/07/page/5/index.html","a53253a4ae7be6bee399889c0aee56c4"],["/archives/2024/07/page/6/index.html","4ecd2bc5fd8221ad23fda3f815459caf"],["/archives/2024/08/index.html","523fa662e3458f75962d78428f602a1b"],["/archives/2024/09/index.html","f9b55a80839946dc27b1ca34ebd23c78"],["/archives/2024/10/index.html","f47823f8f390925fe8663e2c7ad5e9c2"],["/archives/2024/index.html","a74d08144dfadca0e00429cae0221e3d"],["/archives/2024/page/2/index.html","26a3b0a85df5b9de298f080d14ae563a"],["/archives/2024/page/3/index.html","5104363a1ac3355ac60fa1c19a02e3ff"],["/archives/2024/page/4/index.html","5ff2b350b777cc1ad94d89d3d26a3a2e"],["/archives/2024/page/5/index.html","9a5e0b91a415027aedb0ce11e291e1ff"],["/archives/2024/page/6/index.html","ecbe5a9b68e76b262068ac409b4c7a78"],["/archives/2024/page/7/index.html","32dbc783d514b220ab45347500e22a9f"],["/archives/2024/page/8/index.html","5ed81ce397293f5b173955cd953acac4"],["/archives/index.html","6f3ab75a8cade4ef42695d7aec1a80cf"],["/archives/page/2/index.html","4bc91cfab2aba47feed3b83fa8c4a3ec"],["/archives/page/3/index.html","5a5978400580d59b3fef9f38115ef4fb"],["/archives/page/4/index.html","44972ec341a4b9128d8c58f2a22f8a0b"],["/archives/page/5/index.html","713040b090b58c3a75a1d65c2ba1cd73"],["/archives/page/6/index.html","252ad676842d8422b6c0b3c9733a1826"],["/archives/page/7/index.html","e7f4592204f1c82d4112847413e08945"],["/archives/page/8/index.html","179bb7e86636d5ef00dc8287e465e871"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","6f0360baa8e8e1f859c2e3a01705f1a2"],["/categories/index.html","cc254b9e4e52e2f99b66c4cddb2a16d0"],["/categories/与敌同行（梨综）/index.html","3ad2e48b11f2306c15e7184002a6de34"],["/categories/与敌同行（梨综）/page/2/index.html","b38eb46122646ea6d67e8eb5db4db297"],["/categories/与敌同行（梨综）/page/3/index.html","bf8e8c229a2270d47eaccbf681db5d8a"],["/categories/与敌同行（梨综）/page/4/index.html","ba296c21cb94d27e66e75a87dbc15a97"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","dff30145d4618303f7067e892f1b500d"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","6a486e24851869ffc713d0e9333c3033"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","c3b5959f429b2686f186065ea162b867"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","86a0ac846f60398abf39d775ba2a5eea"],["/categories/失落的应许之地/index.html","49efd0b3a89312818bad89a6c8032dd9"],["/categories/失落的应许之地/别和数据聊感情/index.html","4b4c6a431cc0620332663ca814e1a55c"],["/categories/月照天山雪/index.html","f9f8c0f1449d567d897294c9f7df4fac"],["/categories/月照天山雪/page/2/index.html","309cfeedfb3214374a978de0bc07fcfc"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","9f6ca9ab9354c0482dc3d0fb45e083b6"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","657a30907d0f3dba8595545ac8bb9947"],["/categories/狂飙，乱飙，发飙/index.html","3846fefd0b9694e295578b386666fc1e"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","0994e4e59c1de257d1d9b26c221e36dc"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","1deb46f360290c69b33b0865f5f1422d"],["/categories/知更鸟颂歌/index.html","bbd9edddaa5f1146d77d03881c3a3511"],["/categories/知更鸟颂歌/序曲/index.html","479ac102b4bcd40ad1784ff3338b5650"],["/categories/知更鸟颂歌/颂歌组曲/index.html","ff33af044e6c838fda44642425ce8e89"],["/categories/短篇/index.html","0e2a0e798bc681d760ce17797fe795b6"],["/categories/短篇/同床异梦（指珊）/index.html","df9e5309c9208bd167a5a3927fc537d4"],["/categories/短篇/玉生烟/index.html","2ca540a010c1a1bf42e679676d24c6f8"],["/categories/短篇/风雪夜归人（陆直）/index.html","5112f5ecdcc419b08650254fc6e78a0b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","8b3e992bf8c4b54483318d9fb567f339"],["/css/noscript.css","72a9a65db61804b4bd40fdeddd484635"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","254adb8993a60c1deaf44ef61b5599ee"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","fd098d1d5e9c9dec981773e36f58cede"],["/page/3/index.html","683d1b3084912bbfc2537f6febc502b4"],["/page/4/index.html","969b97e91ff7842ad372cb355267b69a"],["/page/5/index.html","8c236e9dd7bf528198dcce63c659084e"],["/page/6/index.html","68a149ccb987c9717a82ec7154e11470"],["/page/7/index.html","e537fa800e49af86c6341a5e51750d0e"],["/page/8/index.html","06a3a3d3dc8ed08f6ecae829182bcefe"],["/style.css","f54b581b76582f769cc5bf5529135f45"],["/sw-register.js","4c033f53d04e0e1ff3f76bc057cd07f5"],["/tags/index.html","446c0f13eb4f149aa84cc9023fd6b8d3"],["/tags/冰与火之歌/index.html","f28fbcd1bdf41c70ae1cdde8424123fc"],["/tags/冰与火之歌/page/2/index.html","e6463d2476780993ba47ba4c4747f2be"],["/tags/摸鱼之作/index.html","803b5dcc96b44e4f5087ae51291ddbac"],["/tags/日常/index.html","6ab48ad4ac073bc26b016add227c1fff"],["/tags/柠梨/index.html","5742e72d69176cb66b2548a396f93ae0"],["/tags/柠梨/page/2/index.html","c0264c22aa4f89f883eb505c185bb797"],["/tags/柠梨/page/3/index.html","11902458fecc990a0ea48caa7732c1c1"],["/tags/柠梨/page/4/index.html","b78ad67557520da2eb72f408f5bb486d"],["/tags/狂飙/index.html","cd2791eb5eaaa66a9c7f625230724318"],["/tags/镛武侠/index.html","068cc0ed3178779586eb7d9a2b5d7766"]];
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
