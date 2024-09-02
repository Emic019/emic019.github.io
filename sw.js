/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","025685ef34f14657dee22b9bf36cb789"],["/2024/07/08/月照天山雪（2）/index.html","16aa875639e25e3bfee2a81262898773"],["/2024/07/08/阅读须知/index.html","796fce51acb814278c73ef490db80204"],["/2024/07/09/同床异梦/index.html","4c430960d1dea6f8873aa0da40eb8e67"],["/2024/07/09/月照天山雪（3）/index.html","c20539c2c14c25f11c195f23593353f8"],["/2024/07/09/月照天山雪（4）/index.html","529de56122f1073696477095ff4e2e06"],["/2024/07/09/月照天山雪（5）/index.html","38aaef4827dbc361f4065131617ff10c"],["/2024/07/10/ceshi/index.html","48db6741ac02d4690a8b728ee429f39c"],["/2024/07/10/一千零一夜/index.html","a91b705b85a016ce6e0936b3092b4a94"],["/2024/07/10/风雪夜归人/index.html","581e20a5f153bdc1177d1debca70739e"],["/2024/07/12/与敌同行（1-1）/index.html","a0e6535faa58b374d7e8b94a5942de75"],["/2024/07/12/与敌同行（1-2）/index.html","cb8ba4535be11d3dbdab7f01382833bf"],["/2024/07/12/与敌同行（1-3）/index.html","b4517da473077f09201ae3ea9c22ce65"],["/2024/07/12/与敌同行（1-4）/index.html","7a688fe7d1b75ee45adda7e9cabd20cd"],["/2024/07/12/与敌同行（1-5）/index.html","71080d1a9d6a7bdd077d3488332f2a5e"],["/2024/07/12/与敌同行（1-6）/index.html","08331d3ab13a836540ed87fed113f5a6"],["/2024/07/12/与敌同行（1-7）/index.html","39e23fd5db3417f6b9311e06eb6bbde0"],["/2024/07/12/与敌同行（1-8）/index.html","a458cb9d104a03ae46142e29c3d56927"],["/2024/07/12/与敌同行（1-9）/index.html","b0fd1f66cfa9ec8ce20a47a9952bc54a"],["/2024/07/12/与敌同行（2-1）/index.html","c736d689c8b06ad2b2f5fe79e2988c33"],["/2024/07/12/与敌同行（2-2）/index.html","251c7ab0adbf5c20d39454c3cac9346f"],["/2024/07/12/孤独地狱（上）/index.html","51b6a76c84337046518a43e61524f080"],["/2024/07/12/孤独地狱（下）/index.html","18f9e399be40f0fda68697706e636342"],["/2024/07/12/玉生烟/index.html","8923e54ca875bed30e0ff8b5512f83a5"],["/2024/07/12/知更鸟颂歌（1）/index.html","4c555fa730e268b423b054c5999a37da"],["/2024/07/12/知更鸟颂歌（2）/index.html","e6eb0c72773c0f4ab1d497fd26d58218"],["/2024/07/28/与敌同行（2-3）/index.html","e443894b59e366730dfa746d71849f7c"],["/2024/07/28/知更鸟颂歌（3）/index.html","7bf66da42c2d88fe363952ea0988eecc"],["/2024/07/28/知更鸟颂歌（4）/index.html","1f2afe1adebd2d3cf85b88294fa2821f"],["/2024/07/28/知更鸟颂歌（5）/index.html","796b6774369758ef1f355b2c6e257f4e"],["/2024/08/24/与敌同行（2-4）/index.html","4b04f605f3c5446c041130922125aab1"],["/2024/09/02/与敌同行（2-5）/index.html","4ebd502306c5dfaef5acbfad223cb971"],["/2024/09/02/与敌同行（2-6）/index.html","f93454c96f372ec2601bf14ad6c0ae38"],["/archives/2024/07/index.html","837d75c16e6e6d6bc247864c0ce11af6"],["/archives/2024/07/page/2/index.html","6f8aeea24e40de4d26546864863e4d32"],["/archives/2024/07/page/3/index.html","e5217b90b02615bae835888ba77f410d"],["/archives/2024/07/page/4/index.html","261addcd34fef5dd48f805715fa53fcb"],["/archives/2024/07/page/5/index.html","76fac8674ed162acc4a0a91c3cc3892a"],["/archives/2024/07/page/6/index.html","ba0453b2432d288c92830a7adb7a10c7"],["/archives/2024/08/index.html","d31c7660b37069deb8e74655ec72ccc2"],["/archives/2024/09/index.html","0997f07ed8f3fdedf96c15527b5be1a2"],["/archives/2024/index.html","2b0d12836b2d1890aa25ad4e9ea317b9"],["/archives/2024/page/2/index.html","b625434ab79a2d35eaedb47675e23bd4"],["/archives/2024/page/3/index.html","65f736453838b6387bc305b799ee214c"],["/archives/2024/page/4/index.html","f5a863fac702bbfec4d77b61b0cf71c9"],["/archives/2024/page/5/index.html","bb2f54e35f9600eee3aca9deb5b673eb"],["/archives/2024/page/6/index.html","08cee75bd16b91ede698f376750189d7"],["/archives/2024/page/7/index.html","a4012578defcca6b1a4b0478c30158cf"],["/archives/index.html","7f4abb96e058152b5152cd1c2b7ab2c6"],["/archives/page/2/index.html","60435295c9b2223b8754cce55add4395"],["/archives/page/3/index.html","da29c03b641435e4c02eeac9b3a3ffc1"],["/archives/page/4/index.html","0d3ce99bb089f03034a1c777b5033372"],["/archives/page/5/index.html","6854fee170c6ee0bf86608812d72d71c"],["/archives/page/6/index.html","2d227403f111c2b49f73e3cf3720bf4e"],["/archives/page/7/index.html","65ea3e42763b369303ba195174ecf18f"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","1a513fef98e6c2af1e8dafc2ba01e2ec"],["/categories/与敌同行（梨综）/index.html","834c95e9325a59103dd874c7d4d7feba"],["/categories/与敌同行（梨综）/page/2/index.html","01a6ea96c42d83b8496f89565d1dbb71"],["/categories/与敌同行（梨综）/page/3/index.html","f1892a1f289dc4ebf3b0189393d663dc"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","a20b7dbee13aa64ae7bfe21c4798580a"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","6837bad572f1dee7cda9afc46a91d115"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","cb77d04f50eee3e3a1845f16d8c4958f"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","f0f3e66db7370ed53f2f10713cb8a5bc"],["/categories/月照天山雪/index.html","eb6206a2c0a68c5b2463349704135e83"],["/categories/月照天山雪/page/2/index.html","d260ec9051432f6381ed5c41eff9663c"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","49a4a5e79873510cb7054e5467ccf3d7"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","1195efb18545afbf5a27cca85fee5ac2"],["/categories/狂飙，乱飙，发飙/index.html","0a85e6bc2751bb3a704cb4fbb5cf6676"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","dd31762fcbaf777ad082362d27767a73"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","1f1c82efd757322d1f22282f05728bf9"],["/categories/知更鸟颂歌/index.html","3c69f24ac13d6c7dcddd4c3e4494714e"],["/categories/知更鸟颂歌/序曲/index.html","ed1251659716278e5ca0b219fb49434e"],["/categories/知更鸟颂歌/颂歌组曲/index.html","1cdb3f7543f5f32264ebf591d33ff4df"],["/categories/短篇/index.html","9811a5678bea11f6e0a40cefde6a6301"],["/categories/短篇/同床异梦（指珊）/index.html","fc432284be312eb5001a3d0cd10def34"],["/categories/短篇/玉生烟/index.html","05a8da6c59f80a708b8b58cace24496a"],["/categories/短篇/风雪夜归人（陆直）/index.html","b14af8b173cb4262493c5daf8bebb3a3"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","fd849a76648c391ab63aaeab35e0f7d1"],["/css/noscript.css","a29f803b084146258fe1827f14f1c71e"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","dcdf48143d05234fbf8cb5a0074c9012"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","219957dbfba14271d01030cb40290261"],["/page/3/index.html","5b87a3ca1bc3fe20e518c9a3e872b0ce"],["/page/4/index.html","c178e2bd30d309321fc1a97124ca7165"],["/page/5/index.html","6ca355edf0a80d0b49f0ee1c9f2d216c"],["/page/6/index.html","7c0628d6c859f956ebf65e57a0631735"],["/page/7/index.html","6d499fad248fb9e93fbd6a3963f081ab"],["/style.css","c24fbb360695f1899bc3e43f605a32c0"],["/sw-register.js","1ac930b96d07c1b6ec506b6affcc43b0"],["/tags/index.html","83ee9f9683f1d58bb82fba7b56fdd318"],["/tags/冰与火之歌/index.html","20fe954808649349517bfea654ea089f"],["/tags/冰与火之歌/page/2/index.html","36dff16649c546edd52595f8ce443bce"],["/tags/摸鱼之作/index.html","c20f7b1a0c6067dde3f556e200a3b84a"],["/tags/日常/index.html","d74a493d1cbfe16a5af9533325c99e76"],["/tags/柠梨/index.html","e67008ea9c1677320e4cbdf4313aa52d"],["/tags/柠梨/page/2/index.html","cdafc11556c4ff02729bdcc374cb358c"],["/tags/柠梨/page/3/index.html","a780452b8f9ad53fc5f584042e840e51"],["/tags/狂飙/index.html","60a0c2fb9590b91afab86d9e64c798b2"],["/tags/镛武侠/index.html","025072e669321ea8849ccd519a5de12b"]];
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
