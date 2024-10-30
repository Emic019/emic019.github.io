/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","b4d91371e75a1047275352b0bf1cae2d"],["/2024/07/08/月照天山雪（2）/index.html","f443b0cd789df1f9b032a55e53b6f222"],["/2024/07/08/阅读须知/index.html","fad2f11087cff779521ac190ef7a64ac"],["/2024/07/09/同床异梦/index.html","da83b4c24663ccab5378dba5f9f7bb50"],["/2024/07/09/月照天山雪（3）/index.html","61d4f9852895c20ddce6c8ca083287d7"],["/2024/07/09/月照天山雪（4）/index.html","986d7c0c4e1caa4b713864f6107b09c0"],["/2024/07/09/月照天山雪（5）/index.html","6ec00830e0f5721592e8369574e77182"],["/2024/07/10/ceshi/index.html","8cfcdb23662a8ef46e7091dc7c2a58c1"],["/2024/07/10/一千零一夜/index.html","c9513438065cff5cbd1dd0af5bbd82f5"],["/2024/07/10/风雪夜归人/index.html","ff13afd2c0e2503a3a3dc1dc23603acb"],["/2024/07/12/与敌同行（1-1）/index.html","ca8c5a77f77c3e9fd3e4363e8ab6c999"],["/2024/07/12/与敌同行（1-2）/index.html","f08eb340529780d9b7d590cf83cf6a8c"],["/2024/07/12/与敌同行（1-3）/index.html","e7f16d5a2ca843e3fe9fd08a9751db5f"],["/2024/07/12/与敌同行（1-4）/index.html","e1b3690814f1d67516906a6890114963"],["/2024/07/12/与敌同行（1-5）/index.html","aa54e52361d39382aeb56398b8ddbaf0"],["/2024/07/12/与敌同行（1-6）/index.html","79b6b6dfcb51f4a25defa40e4583678c"],["/2024/07/12/与敌同行（1-7）/index.html","ba9341527ab68a24bcfd17fcd455f2c3"],["/2024/07/12/与敌同行（1-8）/index.html","81b8e5ad12069f3eb20f63f9ddf92b84"],["/2024/07/12/与敌同行（1-9）/index.html","6e9b5f522f4e405aadf1c0eb25bd0ad8"],["/2024/07/12/与敌同行（2-1）/index.html","8fcd758e4157294da94777d9e0695b02"],["/2024/07/12/与敌同行（2-2）/index.html","b393aa0f447f14bcd665425a0b10262a"],["/2024/07/12/孤独地狱（上）/index.html","0e00127045ef769a51412e48f04e3558"],["/2024/07/12/孤独地狱（下）/index.html","0e34283168655d070f0f65399fb1f442"],["/2024/07/12/玉生烟/index.html","b8e36e03a3c66b37d81bdac6194736d1"],["/2024/07/12/知更鸟颂歌（1）/index.html","2936e3fe32931e77c45b7ba7fdaf332c"],["/2024/07/12/知更鸟颂歌（2）/index.html","59c72aa873a8d7dedf1402f2f1d39148"],["/2024/07/28/与敌同行（2-3）/index.html","13916fe31655ab87c04a9ee2056e564d"],["/2024/07/28/知更鸟颂歌（3）/index.html","2e99372a2666db4d5040aee1c86d1cf2"],["/2024/07/28/知更鸟颂歌（4）/index.html","ee637246e073bb58b8304c82dd03b7e0"],["/2024/07/28/知更鸟颂歌（5）/index.html","db654a50f03b02a47b4d0702e65cc37b"],["/2024/08/24/与敌同行（2-4）/index.html","ec5e3e208054021727830bd19741f797"],["/2024/09/02/与敌同行（2-5）/index.html","5b439f608097876ad742e258e1920509"],["/2024/09/02/与敌同行（2-6）/index.html","52de7189e7c02e17a2822b265282d701"],["/2024/09/15/与敌同行（2-7）/index.html","beb55878a9826f719cd78d3d11382518"],["/2024/10/03/失落的应许之地（1）/index.html","ef2f5e6e476c030822297afb8b0b2b0c"],["/2024/10/27/与敌同行（2-8）/index.html","c8514a886d76e61568de53d2fa9db626"],["/archives/2024/07/index.html","9a7756d755fc26c41e1a47756e3f9c6a"],["/archives/2024/07/page/2/index.html","8014a24d709db53cc05d0dc4f9188cba"],["/archives/2024/07/page/3/index.html","7cf066771bf23d6c7bf0207c42a8a448"],["/archives/2024/07/page/4/index.html","1e81e4674e09491d7677a5ff75941326"],["/archives/2024/07/page/5/index.html","496d31dbed9ebc525d14695c333d7842"],["/archives/2024/07/page/6/index.html","0524522f72d8a56e6c56c8a0cc98537c"],["/archives/2024/08/index.html","36b78ed31e1fe9e81a79ae5a01b44171"],["/archives/2024/09/index.html","d15a7ac141207adc001795b01bec709a"],["/archives/2024/10/index.html","bf0633b0f74c5ee009ce730fd16ccb66"],["/archives/2024/index.html","27fbcd6d61208af09248543935734a60"],["/archives/2024/page/2/index.html","461b56b161b8498ed4468f1897ff24b6"],["/archives/2024/page/3/index.html","45889e3578bdfaa0f786119b1ee2e5a1"],["/archives/2024/page/4/index.html","14f7f3df9c2aee12262e361fe9814603"],["/archives/2024/page/5/index.html","60906cbdaa86d68944d53ab51cb5081b"],["/archives/2024/page/6/index.html","b594a454a0f76eee8a0784d1eb07379d"],["/archives/2024/page/7/index.html","b849f4c2ede89d239b15d04e862bbb89"],["/archives/2024/page/8/index.html","115027293c4764b11e346758eb77a6ca"],["/archives/index.html","63cc4c82f8315c9e6d47bad732a67c7c"],["/archives/page/2/index.html","3fa9b7319c4edee2952872aba1896cfe"],["/archives/page/3/index.html","8f5ee591837d39e9596e1a6b5dcbf5f2"],["/archives/page/4/index.html","a3f87e59893e03d5caf6aee693bc9ce2"],["/archives/page/5/index.html","283301f0c93dda357805ce70913888eb"],["/archives/page/6/index.html","615015458a70d841c144d49f6425ead9"],["/archives/page/7/index.html","712c4809a254ce0e8293467f1bb05257"],["/archives/page/8/index.html","6bfc975fc8f8effd25d46601a408dbdd"],["/assets/别和数据聊感情.html","cff990c39a95768feca97660fdfca1e2"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","c4d8a0903366b26175dd0482a419a866"],["/categories/与敌同行（梨综）/index.html","59b260256bdf9265c45a3d9f0a34d29c"],["/categories/与敌同行（梨综）/page/2/index.html","1f2f85ed873bf400bd577135fad8d57f"],["/categories/与敌同行（梨综）/page/3/index.html","972f40c490c1c8559d6460ae59ad5985"],["/categories/与敌同行（梨综）/page/4/index.html","a36ab59978be853349dfd0e70600b855"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","97c91ca6784d69aa31e90f87e4ee16cc"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","95f6f702283c9a9d6b600f99e4cd92b6"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","ba5972fcb10026e68d985f4002fe2717"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","fd498d89a34012de582fbca18c22485b"],["/categories/失落的应许之地/index.html","53ac36a4b19c6aa8194fdb184c24fca7"],["/categories/失落的应许之地/别和数据聊感情/index.html","538ad62c98ba17901320fb74ddde0537"],["/categories/月照天山雪/index.html","8d2f931c8de4590aff5f4e46c8e1df8c"],["/categories/月照天山雪/page/2/index.html","ebcdddf5d3f3a5fece58c224950d8000"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","e77ecb7422fb950fa303a816b973e1c4"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","105c4b191262c2b4e2305a666081ab7c"],["/categories/狂飙，乱飙，发飙/index.html","94368f767c0e5751b785d1998e3d3658"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","59b15250754c26a67dc55b28a971b787"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","f22a29da05c9151c2b3693cc2d44abd1"],["/categories/知更鸟颂歌/index.html","5f709b3b4d0bec28d4f3dc7f2f165cb0"],["/categories/知更鸟颂歌/序曲/index.html","31a6182cd87de7d7ded86c4c2c67aff2"],["/categories/知更鸟颂歌/颂歌组曲/index.html","2f8996a621982ede4bece03811aa9e30"],["/categories/短篇/index.html","e559755e2890af819b6385ba34a86a70"],["/categories/短篇/同床异梦（指珊）/index.html","45bfe78818856c9851eda9c6873f25b2"],["/categories/短篇/玉生烟/index.html","edbde890169a6db5446f2d1367d047c3"],["/categories/短篇/风雪夜归人（陆直）/index.html","6ff6598593315d26b7aefaf5dc44bb4c"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","96a17d708534f9dbb6f438ad4595f061"],["/css/noscript.css","c333e549c02bb7980d6ada06235cb2f4"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","a7bc6accaf3de2a72625ccd5d6950646"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","ef1ceb8347f542fb9b2acc11ac7b515a"],["/page/3/index.html","8df8f37f5f42e733767fb9fa92cd3c37"],["/page/4/index.html","75e78016621900e6496d2955cc2cabf4"],["/page/5/index.html","5acdec75f44ea01c3a307dcb53278b08"],["/page/6/index.html","420cfa838a3147f6dab80b6e654f8957"],["/page/7/index.html","e66716431d33eb2a86afcedaa1655e1d"],["/page/8/index.html","98d5b8a06a35412b45e56d8ea0cc7642"],["/style.css","ce084135bdd243af169225bd4e283d72"],["/sw-register.js","95e8350191f7517499dba39751a7df66"],["/tags/index.html","9f81cc1d1d1aa8a0b1ddbf8a81ae7855"],["/tags/冰与火之歌/index.html","3ed601f532e72ac5d658cc05ef955bb3"],["/tags/冰与火之歌/page/2/index.html","768eca211e37429c17aea5876543502d"],["/tags/摸鱼之作/index.html","064cd1f7ed1af2338ab50b82d1dd0ddb"],["/tags/日常/index.html","d05bafba87ea01a59d262c9342920035"],["/tags/柠梨/index.html","d31358207c21049f83972d514144ab49"],["/tags/柠梨/page/2/index.html","5c07435ccfbdb7ae76dabb66958e2934"],["/tags/柠梨/page/3/index.html","b6b69bf4c39be83bcdac423af152ff09"],["/tags/柠梨/page/4/index.html","184bb53ee74ff1aa6e4eec5ed1f48745"],["/tags/狂飙/index.html","045a81cb79d311fb3965d42cbf063a63"],["/tags/镛武侠/index.html","dbff1a598442a5792eb7ae514589e766"]];
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
