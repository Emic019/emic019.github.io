/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","ec1ae6ce19b4b27bb37ad6c643aa465d"],["/2024/07/08/月照天山雪（2）/index.html","abf68504f4352d0222d6bf135b6c9830"],["/2024/07/08/阅读须知/index.html","74784afe9cc6c0884829db35ff0b24ef"],["/2024/07/09/同床异梦/index.html","5d5a3dafdd324bb542283b2b5012c540"],["/2024/07/09/月照天山雪（3）/index.html","cf7ac94f9b45bff40ea7ee0d1ae86b5c"],["/2024/07/09/月照天山雪（4）/index.html","68ec3bf1a17ca39ddadd5fee06cbb574"],["/2024/07/09/月照天山雪（5）/index.html","41535e9a527807fa9164a29d67ab4df7"],["/2024/07/10/ceshi/index.html","00356002c33e7d4ae1f34037eaafa7c5"],["/2024/07/10/一千零一夜/index.html","d7342c4e98dc42951fbc2a3f8ba2f843"],["/2024/07/10/风雪夜归人/index.html","5faa8c2adf0fe7dd98d71717284b3d21"],["/2024/07/12/与敌同行（1-1）/index.html","4d42cf7a912bfd60c7ae2752ec0b3d80"],["/2024/07/12/与敌同行（1-2）/index.html","81b2425f50a20c615bd6e12ba8d2c4b1"],["/2024/07/12/与敌同行（1-3）/index.html","8e49d3c7fca8bdc3f8410d7ecd1565bb"],["/2024/07/12/与敌同行（1-4）/index.html","8b9b31f47ad9be43c4e1feccc1d8a1f6"],["/2024/07/12/与敌同行（1-5）/index.html","1ab014e04c9c35b16a04689f7bb91b1f"],["/2024/07/12/与敌同行（1-6）/index.html","70a901cea1bc2d7181ec363cb159c7bb"],["/2024/07/12/与敌同行（1-7）/index.html","eb2038669f89f9252c4bd3ab036074bc"],["/2024/07/12/与敌同行（1-8）/index.html","c7d5cb0bbaf2dcf3604dd9d40dcfda39"],["/2024/07/12/与敌同行（1-9）/index.html","fef3f42e2610c53d113decbda992e24f"],["/2024/07/12/与敌同行（2-1）/index.html","5108467215394d784d6cc37b43d43110"],["/2024/07/12/与敌同行（2-2）/index.html","6b7c51dae0c284bc365d01ab88049529"],["/2024/07/12/孤独地狱（上）/index.html","64df11efca392e0560209f252de621b7"],["/2024/07/12/孤独地狱（下）/index.html","3474b93c9faa514bfe0a0a010e09061a"],["/2024/07/12/玉生烟/index.html","b65d135994a6b2656fdc97520c217352"],["/2024/07/12/知更鸟颂歌（1）/index.html","643f87b63920e06cd88f1bcecc358380"],["/2024/07/12/知更鸟颂歌（2）/index.html","412da66c84fa612332254d444f77a692"],["/2024/07/28/与敌同行（2-3）/index.html","8ca7ed41f356ced6aa1f8f369c002a7d"],["/2024/07/28/知更鸟颂歌（3）/index.html","4f6f1547eebd80a1d645ad217a531395"],["/2024/07/28/知更鸟颂歌（4）/index.html","124186abd08de85b933660044a267808"],["/2024/07/28/知更鸟颂歌（5）/index.html","619df17abbdeb69566674a125c0a8151"],["/2024/08/24/与敌同行（2-4）/index.html","93d6dbe722414cf695da991e2bff2559"],["/2024/09/02/与敌同行（2-5）/index.html","0493e58e468726c7159c991db4e589e8"],["/2024/09/02/与敌同行（2-6）/index.html","9489c8f4b5e837daed91a01a1ece46df"],["/2024/09/15/与敌同行（2-7）/index.html","aaf315210bfcbca87d8ea7c02d05867d"],["/2024/10/03/失落的应许之地（1）/index.html","ad5d89fc9baed8542ff8ab2e603eba20"],["/2024/10/27/与敌同行（2-8）/index.html","8ce7a285e4dd1a9ab1feb51259556461"],["/archives/2024/07/index.html","7568302d00ac1195e4925b523f9fa099"],["/archives/2024/07/page/2/index.html","9c554d37712043982d7310c665f2d82f"],["/archives/2024/07/page/3/index.html","ddcab269585f284885a68d8863ad65c0"],["/archives/2024/07/page/4/index.html","60799d6ae3be7e0a55e51fc22a3ed99c"],["/archives/2024/07/page/5/index.html","ec09c80613bb09e423070a65a0fc69e3"],["/archives/2024/07/page/6/index.html","ffe15542641cca1ac14a70673a9d68d8"],["/archives/2024/08/index.html","166ab119f364d843b3d7138ba2ac1a4d"],["/archives/2024/09/index.html","70d4255e99aeb0175defe92b333db294"],["/archives/2024/10/index.html","b75b05b59f26f4cb07f5ed4458664e09"],["/archives/2024/index.html","40145a64244969a55ed2c864f8db4232"],["/archives/2024/page/2/index.html","0bca784eb2454e3412ef3c79ff61d018"],["/archives/2024/page/3/index.html","5653b451d8eee5ff6d4b7a6101ec91d7"],["/archives/2024/page/4/index.html","ddc283262902d809032a024ef03871e9"],["/archives/2024/page/5/index.html","4bde345beceb715420cffb35b5a4e812"],["/archives/2024/page/6/index.html","7deeb37066ec473f19324741971a4869"],["/archives/2024/page/7/index.html","76bf5896daedd2d56877a7025d99d144"],["/archives/2024/page/8/index.html","afcb5f97d4b650e819186708de43b364"],["/archives/index.html","f2fb5f4aaea55d23ad844f9ad517dd53"],["/archives/page/2/index.html","edc7d17107327f3ecaeb3ed0b2ca82c7"],["/archives/page/3/index.html","47ff1766fa9f5fa2baa2181d9466228c"],["/archives/page/4/index.html","6cb17db16be7585b6e60098e7a9f60a5"],["/archives/page/5/index.html","b097d69e41cafd37be9f680379fb8705"],["/archives/page/6/index.html","62e408df497c1dd09f1375d6cbbb5118"],["/archives/page/7/index.html","0d5774d0c9d875a56392bd4fb9ec5a41"],["/archives/page/8/index.html","00c544ab54d9ba58c340e75135215add"],["/assets/别和数据聊感情.html","3bfa82a5f1fe2df4f12e088ce97a7bc8"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","a64fd172f65320fa61da5728f54521a9"],["/categories/与敌同行（梨综）/index.html","ba7763fa2e1489d803fb720bb75bc51f"],["/categories/与敌同行（梨综）/page/2/index.html","a81b37d0d06c670942f83cefe0b09ad5"],["/categories/与敌同行（梨综）/page/3/index.html","8b52d9a5ca484f2225285f149d56725a"],["/categories/与敌同行（梨综）/page/4/index.html","f838e28ff605a96bbbb103363fcfe4e1"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","67a7501d013e3a8c5533e6baa9d8242b"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","76bac4e0e4d3900463be90cadc61650a"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","3fbaa8357d334931f616a5bf4a7eb662"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","8bf8e540b3ba36ca234d0a58f43aaf22"],["/categories/失落的应许之地/index.html","f1f9eadf3fe24f85b0342738910dbe57"],["/categories/失落的应许之地/别和数据聊感情/index.html","07f3b62e1f6715d8a02aa41e44662366"],["/categories/月照天山雪/index.html","2a2495b0c17fa5484f55f5164a7bf1af"],["/categories/月照天山雪/page/2/index.html","c9853471065cc1e99124181d67e1d7a0"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","bf970d30fbca120767888a8ba1a7307d"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","065232c78a003bd79bb5458266ea1682"],["/categories/狂飙，乱飙，发飙/index.html","efdd360103b52395b07a2b5484cc1ed1"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","b3fabad300fe654f4cfbba4cebdfc790"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","94a3dd2020fc70e0968e1dec66056517"],["/categories/知更鸟颂歌/index.html","0a7fb29daedddbf475d5192cdcf1c595"],["/categories/知更鸟颂歌/序曲/index.html","c376eca59840133a768dc6905d72d4fa"],["/categories/知更鸟颂歌/颂歌组曲/index.html","0d5effdf1d6ec27f02ee832dd8ff16c2"],["/categories/短篇/index.html","4fd35a5468d50a9cda09c73b0ea7ccc7"],["/categories/短篇/同床异梦（指珊）/index.html","568e04b3ab2cb203d7523fc381ae4c90"],["/categories/短篇/玉生烟/index.html","197871f90c0f6d08fb6ca767b6b3967b"],["/categories/短篇/风雪夜归人（陆直）/index.html","bc9e2a5e480452662fe9c713812d000c"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","39b4d18a296330993d6f8031cd56d974"],["/css/noscript.css","4615116ce6851eef805d6fab2678b6b2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","cf7793b6dab5de055e343e5799ad01c6"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","236a48902cbf3eb8da5f1bb06b19e4b3"],["/page/3/index.html","b3a174bc7d8402869266251c331653b7"],["/page/4/index.html","9d47e7ba1010d6c90b1d2a0960a05cbc"],["/page/5/index.html","451088ce2e324385d96516fb3df2cc0d"],["/page/6/index.html","0216e809963ee7f9b93592fedbbafa04"],["/page/7/index.html","ddbeb67f2866c74ade68c99747c560c6"],["/page/8/index.html","1f1f60a4fa6a3b70df36119056783dfb"],["/style.css","422c7a6cb8da7e3c90f930b910fff1a2"],["/sw-register.js","2784be732972c94705cbf009bd8375f5"],["/tags/index.html","024f35c051ef99d1be1fa0713fc7659d"],["/tags/冰与火之歌/index.html","21c67021cbca032d1d016606a7b23fb5"],["/tags/冰与火之歌/page/2/index.html","ef0cd83279491e70df9d1de355dceead"],["/tags/摸鱼之作/index.html","1fa6cc7b11f35a9c3e17f1bc75511660"],["/tags/日常/index.html","4391834566f057195812d5e5e803ec4c"],["/tags/柠梨/index.html","95ee3a82f27291f2690664926a5e1af1"],["/tags/柠梨/page/2/index.html","9a56202fda6f2075f7c8d1e8e2f6952e"],["/tags/柠梨/page/3/index.html","1954f698ac010a2c37f779b63bc09e9c"],["/tags/柠梨/page/4/index.html","a50652458fa83e5cfcaa80ef26bec123"],["/tags/狂飙/index.html","f1369960d41d8307cc9cf4c02af9576f"],["/tags/镛武侠/index.html","bb380bd325a165a0a8ae7fe2501b4d81"]];
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
