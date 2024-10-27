/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","1301ad73be0a7a2926c417f72bddd150"],["/2024/07/08/月照天山雪（2）/index.html","745875f35c8005d3f993a2321bec5fb1"],["/2024/07/08/阅读须知/index.html","75e7f6735c2b0d3336a13200f665a9f0"],["/2024/07/09/同床异梦/index.html","dbc6fb2f816dba3dfb189338bb4b8486"],["/2024/07/09/月照天山雪（3）/index.html","d89f3e71e71d55b1175f225f2a544399"],["/2024/07/09/月照天山雪（4）/index.html","54fa58cb569dfcf5e77a037ef49e3f71"],["/2024/07/09/月照天山雪（5）/index.html","d036e7959f8bd4c616088e26febed523"],["/2024/07/10/ceshi/index.html","c6c4ebc1fa6e4b0cee94776afe501ba6"],["/2024/07/10/一千零一夜/index.html","15aa636a020ba5a03bc6906c0bdfdb17"],["/2024/07/10/风雪夜归人/index.html","67580efb0d35336ec73c230b7d3c5d9b"],["/2024/07/12/与敌同行（1-1）/index.html","83020b3ab25b67b9a96bb68aa9e7ec50"],["/2024/07/12/与敌同行（1-2）/index.html","bd75dfa15f987efa386f7579e1efce4d"],["/2024/07/12/与敌同行（1-3）/index.html","8730e314cf887065c8dc09f8c5d58cbc"],["/2024/07/12/与敌同行（1-4）/index.html","da9e9e73849a27f97368de217e0dd52c"],["/2024/07/12/与敌同行（1-5）/index.html","c7eb89ee7d2b332bef3746d4b67c7385"],["/2024/07/12/与敌同行（1-6）/index.html","b8ee9a3e94d27301eca92a8e1805b515"],["/2024/07/12/与敌同行（1-7）/index.html","69c1cba5f0e62663d835c367185dc526"],["/2024/07/12/与敌同行（1-8）/index.html","ed401e6cf8790ab36f80a31dd9ebeef6"],["/2024/07/12/与敌同行（1-9）/index.html","4437484a7df42c6790bdcadfd4dfe399"],["/2024/07/12/与敌同行（2-1）/index.html","0b9eaf4e700974945660e3e2d954fa90"],["/2024/07/12/与敌同行（2-2）/index.html","13140044612974ea4bf76308ca602238"],["/2024/07/12/孤独地狱（上）/index.html","5a040f432dceac0d638b786db5671bcd"],["/2024/07/12/孤独地狱（下）/index.html","b2ba82ca4f5ee971e8a77d4172c32895"],["/2024/07/12/玉生烟/index.html","f433cb9d0e03f16f943fd731fcd6cbfb"],["/2024/07/12/知更鸟颂歌（1）/index.html","47a4e8749aa03515cbf3c94fadeb5c20"],["/2024/07/12/知更鸟颂歌（2）/index.html","c1e041ee00bc1b47e9f7412255621e66"],["/2024/07/28/与敌同行（2-3）/index.html","d9251466bf50ee8b42ec243d7a1928c2"],["/2024/07/28/知更鸟颂歌（3）/index.html","1f25959189b329dd6d00b79283beac13"],["/2024/07/28/知更鸟颂歌（4）/index.html","1803c69ab507550bba01d6f74c42ef02"],["/2024/07/28/知更鸟颂歌（5）/index.html","c6539b3d7565358fad5a4a5e9ef7d531"],["/2024/08/24/与敌同行（2-4）/index.html","86997788013f3c59366ec0f8e75e4fbc"],["/2024/09/02/与敌同行（2-5）/index.html","0b3596ffc54a99248cd1bab128d2c4b3"],["/2024/09/02/与敌同行（2-6）/index.html","535505159eb6b2c47a7cb40a3c4109bc"],["/2024/09/15/与敌同行（2-7）/index.html","63b5e60526279dff90f366b3725325d8"],["/2024/10/03/失落的应许之地（1）/index.html","55144665a14c1b03135554785d2c0cd1"],["/2024/10/27/与敌同行（2-8）/index.html","00319d8f3b9a606c3ab26f439891f4c0"],["/archives/2024/07/index.html","054dcab60a2629fcc679a7388998ac31"],["/archives/2024/07/page/2/index.html","53fd024fe77cfd8706dd0c8ab556428f"],["/archives/2024/07/page/3/index.html","d906b68affa2f833942f59003ca80b96"],["/archives/2024/07/page/4/index.html","c28aa8771f4e7ba490f10b1f2f831064"],["/archives/2024/07/page/5/index.html","1ea7b6fa7737b3708304bb21df6053d6"],["/archives/2024/07/page/6/index.html","a32f0dbceabe1e7c84dba156bee1aff1"],["/archives/2024/08/index.html","cd8a2e09f6f09d5f0083a3f3c7550e24"],["/archives/2024/09/index.html","28f4293791f4939a98571f61deb341eb"],["/archives/2024/10/index.html","f60775ca3dd113f4af5e4107fae84db6"],["/archives/2024/index.html","875443e4cc94c82075a7b90d298c27a6"],["/archives/2024/page/2/index.html","7d3fe821a2dfad4924cb7f98f605ca1c"],["/archives/2024/page/3/index.html","52b55cbf2282f6055927d8a1e3279049"],["/archives/2024/page/4/index.html","0c0d68a04f331de3cc92a8c4027036b9"],["/archives/2024/page/5/index.html","aee671446e34c9785a9e8dea2991ffca"],["/archives/2024/page/6/index.html","46953a365094d44e3b07794e299d64f5"],["/archives/2024/page/7/index.html","54dc9df48fb9e332c78db2afb1e4514e"],["/archives/2024/page/8/index.html","a13afa5981e423a0ee1058147b044dc9"],["/archives/index.html","376e74943867db784d2227da7bc596a0"],["/archives/page/2/index.html","0c22cfe646b4f647582da2983ff5752b"],["/archives/page/3/index.html","575dc06734f17e58899fa6aa1ef3d136"],["/archives/page/4/index.html","411748cd33b96a499811c2b19eed3f90"],["/archives/page/5/index.html","8f82292579fd84f312d5c5b87757a0e0"],["/archives/page/6/index.html","c17f48bd0bd82cba0ba62d4b857c1e3d"],["/archives/page/7/index.html","91a47f0162aa8e510c612d0ae8357634"],["/archives/page/8/index.html","f95a1f8657e1259dc8584eaaf37975c3"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","e44b80d5171fed8593b56c18f61df331"],["/categories/与敌同行（梨综）/index.html","528fae441e51b79fd25031370766f267"],["/categories/与敌同行（梨综）/page/2/index.html","0ea7723eecf92489cd92ca2ec57b8e7c"],["/categories/与敌同行（梨综）/page/3/index.html","56be10270e0282d5a4db4c9c106341a9"],["/categories/与敌同行（梨综）/page/4/index.html","1e23004dc75eac112a34748d0607aa4b"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","25059e7767a2b278ff8bd2af785a780f"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","4226b4e06149ca3501eb7402817d6eea"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","497d6c0f2f0005aad40bd77e4eec068d"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","bd6acf80045536670b5ef28d83a91201"],["/categories/失落的应许之地/index.html","46f56174d2bb555f57f2b60321e0de95"],["/categories/失落的应许之地/别和数据聊感情/index.html","391d7602e877fb42da27823eb272b649"],["/categories/月照天山雪/index.html","319b1284e91e8e27d3a7fbe6f8b704d3"],["/categories/月照天山雪/page/2/index.html","98646569ea64514422330389ca9df024"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","e43e2a4b27a90274e6fe03b2f85fc9f5"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","895369b14b81b6f09c3b78f69352f01c"],["/categories/狂飙，乱飙，发飙/index.html","00ed48b29c97c352ee74eecca30414cc"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","9b244bd46704b7b389ee561068f8a6d9"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","7d8aa7245f6a2e02f0685e5a3858d425"],["/categories/知更鸟颂歌/index.html","1f5f9cb73c40d25d4e206075eeb86a08"],["/categories/知更鸟颂歌/序曲/index.html","e4b23be328b017365c63e2bcb9839d5f"],["/categories/知更鸟颂歌/颂歌组曲/index.html","7e956b2fc25efce8abbbe3b1c14b2ad7"],["/categories/短篇/index.html","8f7a0fd31526302d9430fc178cb7940a"],["/categories/短篇/同床异梦（指珊）/index.html","7fa70127d48d92c1219f1c5ab62ed366"],["/categories/短篇/玉生烟/index.html","7f87763d1f1cd64810b0e80d37989316"],["/categories/短篇/风雪夜归人（陆直）/index.html","45b0b2da4f454dbfcac6799ac3a0bec5"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","5982636106c89a5efad6b93413e734c6"],["/css/noscript.css","9f77f67a1aa9d9cc145c1fdf74b446fc"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","b0dba96ed27e373320475d1dc12a70ec"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","f3e41a9b1437b770329dc84ef7eca642"],["/page/3/index.html","308fba5b100e99c101f69f9ff29470c4"],["/page/4/index.html","89e3409bd0d31baba83c218589037d72"],["/page/5/index.html","5b95ac178bb36dec5b53ac89500073bf"],["/page/6/index.html","e7d6e00efbf363da8f716ad89e17a33a"],["/page/7/index.html","6636d586b6ba7033e38c9b6d3c3736b2"],["/page/8/index.html","2f3442f885c86e6db653d2d2b6199ad2"],["/style.css","cf5246045cf29dfa5f334f539fcfb6f0"],["/sw-register.js","7c389c5a995b06c143726e88b22616f3"],["/tags/index.html","1a4bb407b2e6d3497d62cf2b8641b053"],["/tags/冰与火之歌/index.html","64e68d4e86f9e249f35abf9c870592f4"],["/tags/冰与火之歌/page/2/index.html","393dc6ab24b2e5224e3741ba84ef9cc3"],["/tags/摸鱼之作/index.html","9f78052f18f5332800c8b6ca0071b444"],["/tags/日常/index.html","704a327d9edbed2755d7444ace5914c6"],["/tags/柠梨/index.html","0f2dde8f6424632f47b908f9a1238cd6"],["/tags/柠梨/page/2/index.html","c6a93b5cefb5a85ae826c4ba22379150"],["/tags/柠梨/page/3/index.html","9d8b569f13384a0d92da760af1bc8031"],["/tags/柠梨/page/4/index.html","5d5cae2c4d8b42d369dc6b55d662fe3f"],["/tags/狂飙/index.html","608b21a96b7a36904b91c1974addd9eb"],["/tags/镛武侠/index.html","39496ac5408754e1fc26e276117cf7d1"]];
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
