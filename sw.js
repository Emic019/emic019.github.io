/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","d2803108538cb4d81ebe40af1e23cd41"],["/2024/07/08/月照天山雪（2）/index.html","e661dc073ebb203b57abc28f26661ff5"],["/2024/07/08/阅读须知/index.html","0a5865a06ffa91bae189ccaff21bab01"],["/2024/07/09/同床异梦/index.html","0fdcffd4c3e7fa6b6a199dae861c7e1b"],["/2024/07/09/月照天山雪（3）/index.html","c152795c7f7e377028001df76c35df82"],["/2024/07/09/月照天山雪（4）/index.html","3cd7287da878bb4152dd11138a82b9ac"],["/2024/07/09/月照天山雪（5）/index.html","c3b97874bce8725cc28d71d85e967581"],["/2024/07/10/ceshi/index.html","541ba0f2ffe402fa20d25cc5ed4c8873"],["/2024/07/10/一千零一夜/index.html","355cf67bd209449e322df7f90f1ec090"],["/2024/07/10/风雪夜归人/index.html","b584a15dd808b5aafe505804833bea8d"],["/2024/07/12/与敌同行（1-1）/index.html","b1b57ae6c4249e79b6e581541aaab414"],["/2024/07/12/与敌同行（1-2）/index.html","2eb27b6044cd283b5724e9cffd786e52"],["/2024/07/12/与敌同行（1-3）/index.html","9643091787f24949f83c57488f3c171e"],["/2024/07/12/与敌同行（1-4）/index.html","205cf45dd2b5983be743b2f420beaa65"],["/2024/07/12/与敌同行（1-5）/index.html","95f5d7170342c2eb508a92e9a075a051"],["/2024/07/12/与敌同行（1-6）/index.html","304d62446c509b832ca2cbf8d5302781"],["/2024/07/12/与敌同行（1-7）/index.html","c48749637f32206f685f6cf2460039bc"],["/2024/07/12/与敌同行（1-8）/index.html","4bf4b0154b20b8f55b109e63e5e8985c"],["/2024/07/12/与敌同行（1-9）/index.html","a0d26c7c05d87a9b91239c96357624b7"],["/2024/07/12/与敌同行（2-1）/index.html","9d8d02aa403dd02c68c29700c800abf8"],["/2024/07/12/与敌同行（2-2）/index.html","5582da0c3cf9752beab2080aebdca2b6"],["/2024/07/12/孤独地狱（上）/index.html","52c252523cc252b658902a461145f101"],["/2024/07/12/孤独地狱（下）/index.html","7c5abfdbbe960389ff51a6b7d7ae1b31"],["/2024/07/12/玉生烟/index.html","ccf0aa3d2ee36a81c828ffde4da6512d"],["/2024/07/12/知更鸟颂歌（1）/index.html","73ad78270802db007400e1cb113a9d89"],["/2024/07/12/知更鸟颂歌（2）/index.html","acecb943829eb306126c0801e359be95"],["/2024/07/28/与敌同行（2-3）/index.html","2cd9065f40aaeae8200498a16285aca3"],["/2024/07/28/知更鸟颂歌（3）/index.html","d5fa646470ba4e61bcaea34de559377e"],["/2024/07/28/知更鸟颂歌（4）/index.html","b6e7c0be2d425857111a74cb7f2c6809"],["/2024/07/28/知更鸟颂歌（5）/index.html","1e2e77fd259a4c1fdc35f9aa96e211d6"],["/archives/2024/07/index.html","4826ff1e04cb3207e04ca7f6aff5803b"],["/archives/2024/07/page/2/index.html","40bba76e5cf6f67aeef0d6625830f664"],["/archives/2024/07/page/3/index.html","7bd3198276aee08b393f7190aee6d160"],["/archives/2024/07/page/4/index.html","73413c3b4e4ae73932bb563710135fc0"],["/archives/2024/07/page/5/index.html","42a80679c62143e8048ca1f0bccc109d"],["/archives/2024/07/page/6/index.html","7f96f59517ad8cecb8629817bf40bb64"],["/archives/2024/index.html","cb98394caa2bfbc84ad9e9da2ab1931d"],["/archives/2024/page/2/index.html","12e16c2942c6854dc78bb456b808c364"],["/archives/2024/page/3/index.html","4ea4fdf193fc403a04c0317adc6a5d90"],["/archives/2024/page/4/index.html","8bb2f7314e71d0be35431ddd66f41f4a"],["/archives/2024/page/5/index.html","bdf8733bedf0ec316b7a86d4c36fdfb3"],["/archives/2024/page/6/index.html","273f83b1ed668484b6faecb6bff375f5"],["/archives/index.html","821ac42b919cf92f617ac589c5267abf"],["/archives/page/2/index.html","29967eaf9c4e5de40f82b1fdb9dcf610"],["/archives/page/3/index.html","775e1cf6b1f76263d9fb2109eeec48b1"],["/archives/page/4/index.html","6cc1491ef9a3f8859806ef90e779097b"],["/archives/page/5/index.html","ab7698c5ba3414753eb61790c558ccde"],["/archives/page/6/index.html","cc3324a5e0e58eab31241c0178afb6bc"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","b8620a40439d21fe23011927d54f162e"],["/categories/与敌同行（梨综）/index.html","a31ccbc152decdae62a095557af92bca"],["/categories/与敌同行（梨综）/page/2/index.html","48d822bd80b64207d841d5bbd702fde2"],["/categories/与敌同行（梨综）/page/3/index.html","47c10869f8b98dc8eb684f1c1ef6b59d"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","28c0a2f721bcfefb68f30ca799df61c3"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","a0f38f643bfc81ac3277805ac924d2a4"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","7c7a58b5ebb02b1f07d2ee5d6fbe5d0a"],["/categories/月照天山雪/index.html","5573de14cdb4a955480963775cb2577d"],["/categories/月照天山雪/page/2/index.html","5b107793524dcadb57e76142b7b96f3a"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","97ed83c4c5e2ea2e8d1cb2acf408cee0"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","09068f0206db7cc6ac3faf678d6146a4"],["/categories/狂飙，乱飙，发飙/index.html","bc4b7526a2a2cc7979005fa6a64a5770"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","dc3225bdc728bd02de4133962e19435c"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","e5f5bf38aec5a4309102932bb8a0d8bf"],["/categories/知更鸟颂歌/index.html","f4c985f78cabb312d345b6fa0d59b58b"],["/categories/知更鸟颂歌/序曲/index.html","796d1e3393ecacd79553dccf932f7acd"],["/categories/知更鸟颂歌/颂歌组曲/index.html","940a06d863ea4e5e19ddb94f7fea809d"],["/categories/短篇/index.html","c2f1c2caefad98ff463305e43e7620f1"],["/categories/短篇/同床异梦（指珊）/index.html","982d8c8bff73ca3dee6ad3187fb08585"],["/categories/短篇/玉生烟/index.html","db04c1a98264dd7195d56e05b94f20f9"],["/categories/短篇/风雪夜归人（陆直）/index.html","c554ab6a4934f5d80d9c9fc380400e3a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","ad7a77adaf5ecaa08a47970d56d92f5e"],["/css/noscript.css","43ad8e4cfe852e81cdc8fed7065c2861"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","3a1d4a1448c40271577d95bc366f9e8d"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","237ccef00bbe56d4cacbaff65b698895"],["/page/3/index.html","d991ad9116f87bfb9c0e470f45d04a50"],["/page/4/index.html","439ce5b9446e95fe2433ceffb9b48146"],["/page/5/index.html","3847e552f90f50dd7afc53630312ffd0"],["/page/6/index.html","ae9c2da632ee73913a69a05035d79a77"],["/style.css","5bbb63e26665f4dd8b416c20ab7902df"],["/sw-register.js","93afaa954902911f3957939e5166da87"],["/tags/index.html","d314370ace96e1990aaa25897e6ab2d1"],["/tags/冰与火之歌/index.html","d03680942cdb5ccea7414da7548ae00e"],["/tags/冰与火之歌/page/2/index.html","d9d16dcd1156b078ab9029b958054c3c"],["/tags/摸鱼之作/index.html","b6e0ecf4e11ba5f3f1c24fe400422856"],["/tags/日常/index.html","ebfc80f108ed5e86cfb388941002dfb3"],["/tags/柠梨/index.html","c8532e07ab0a7ebcb99a321632e6a624"],["/tags/柠梨/page/2/index.html","7e15db323e7f24dc0a63c343544b086a"],["/tags/柠梨/page/3/index.html","80c2e9e2f66f0b5beff700b1beec72cf"],["/tags/狂飙/index.html","e3ccbf7cd5340b45ae2c5516bcf99eeb"],["/tags/镛武侠/index.html","0d2770b5aab7f85a478cd632a6a0b7f8"]];
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
