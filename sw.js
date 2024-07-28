/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","03a86e32a044b50ddef81f2097546823"],["/2024/07/08/月照天山雪（2）/index.html","5b388de64dce4b4d20422fa747c6d3cd"],["/2024/07/08/阅读须知/index.html","e0a4f5bc6e457db840bbb7e6dfdc9df1"],["/2024/07/09/同床异梦/index.html","b6a9db40e681f182854881ccab6ed358"],["/2024/07/09/月照天山雪（3）/index.html","1d030d89dc50334e20e889b35225017c"],["/2024/07/09/月照天山雪（4）/index.html","d1cfa2532f39ed822af65805b656ced2"],["/2024/07/09/月照天山雪（5）/index.html","eb2f865818007959cd19ffa7ac7ac666"],["/2024/07/10/ceshi/index.html","33e7988cc8f2d177765b31491ee93ec8"],["/2024/07/10/一千零一夜/index.html","9e67e7f6a530f95997209f34499f5404"],["/2024/07/10/风雪夜归人/index.html","ffff40684dd576aa2d63c30f2ac3ced0"],["/2024/07/12/与敌同行（1-1）/index.html","25c18467a03a97978fa6bb7442d5d5a9"],["/2024/07/12/与敌同行（1-2）/index.html","39ea2c5f5ed8b8eee4f86d8eec93cfdd"],["/2024/07/12/与敌同行（1-3）/index.html","fc329cd784e0cb8feccf73c0caa88d25"],["/2024/07/12/与敌同行（1-4）/index.html","3e7d2a56291505cdfed449cc219ffdc5"],["/2024/07/12/与敌同行（1-5）/index.html","2d9b6260597ded6439099c8b6cec4a5b"],["/2024/07/12/与敌同行（1-6）/index.html","a035dca51f82801a46c5a1ba5fbd1aab"],["/2024/07/12/与敌同行（1-7）/index.html","0ad6e01214eedda59d01ea54862016c1"],["/2024/07/12/与敌同行（1-8）/index.html","5a1c50c559d909fec052a9013845c685"],["/2024/07/12/与敌同行（1-9）/index.html","1199848056eab4f1d3b351222e2815b6"],["/2024/07/12/与敌同行（2-1）/index.html","26a5f9ce4601763571a2b397b31cf71d"],["/2024/07/12/与敌同行（2-2）/index.html","143a29ca3495abccd433e88f92e6f9f3"],["/2024/07/12/孤独地狱（上）/index.html","b0d6d9a36f0bb5e1555ee40fe6182e19"],["/2024/07/12/孤独地狱（下）/index.html","6016272c0f8c4f9c48235b06aba4feb5"],["/2024/07/12/玉生烟/index.html","930bc454e10cd050cb7adcdd5654f6a9"],["/2024/07/12/知更鸟颂歌（1）/index.html","801640658148bacef60e94727e35efac"],["/2024/07/12/知更鸟颂歌（2）/index.html","bb99c4af247e540b8a7887c3eed5dacb"],["/2024/07/28/与敌同行（2-3）/index.html","c7dd3f088079c4a34f9268451167c4ff"],["/2024/07/28/知更鸟颂歌（3）/index.html","e58c81bfbf49589d9a1f6661e61f06be"],["/2024/07/28/知更鸟颂歌（4）/index.html","33491bbc5d33158a0b0c70532f314617"],["/2024/07/28/知更鸟颂歌（5）/index.html","b58a2068a67b1e6a8ae110c11a431b05"],["/archives/2024/07/index.html","aa7e77cb18a081534d857572cf2c0485"],["/archives/2024/07/page/2/index.html","50e76d2ede56422f6693bdb3cd015cbb"],["/archives/2024/07/page/3/index.html","093111b4923bbe11343eec4598f6654a"],["/archives/2024/07/page/4/index.html","398c7ec447b9fafe499dbadafd536271"],["/archives/2024/07/page/5/index.html","dc6230b1f4f9664b20977befb50f3d11"],["/archives/2024/07/page/6/index.html","8a7eb4f1bd2f2157173561765d165531"],["/archives/2024/index.html","6f1c1284d1d561048224f17af408fc81"],["/archives/2024/page/2/index.html","48dd64ddda066e5e31375945418c20a9"],["/archives/2024/page/3/index.html","748b0e724a16aed0dde8906302fc7544"],["/archives/2024/page/4/index.html","ff83bf986abc02cd0198aaab9ecc003c"],["/archives/2024/page/5/index.html","d5c4f84c20e73b2616b643e765dce4c7"],["/archives/2024/page/6/index.html","f426825130d57b59c4202c89bcd92b32"],["/archives/index.html","89dc419db92300e87d7342d30da9fc54"],["/archives/page/2/index.html","aa3c59c8c7c8aab540669474be27e63d"],["/archives/page/3/index.html","28d4a66ef02850781d976abdca52ce4d"],["/archives/page/4/index.html","78901f6700ecabed11922669bfec87df"],["/archives/page/5/index.html","5be2032eb5d0d8ca8c245954d8581836"],["/archives/page/6/index.html","265c0806664b82ce4fdf0806ee88ab59"],["/bundle.js","b160835a60231e3dda4fba63126988a4"],["/categories/index.html","0be24cc77352163ecdb55f8516e0b3b3"],["/categories/与敌同行（梨综）/index.html","3909b67d6f4c6d349403b92f6adfb818"],["/categories/与敌同行（梨综）/page/2/index.html","7e571ce100f8d0748a84b07b998926bb"],["/categories/与敌同行（梨综）/page/3/index.html","c002bef0b41927379df63c129c304051"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","63f7f915d902d8f22c30df1f1444c3a6"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","c46e6efdecb8d002f49b0739c15647a6"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","9ae0c971e1ea55471b4dbc522b430296"],["/categories/月照天山雪/index.html","246f15e46f44555c46780289192963c4"],["/categories/月照天山雪/page/2/index.html","865692003b75116edcd52454a8f4f077"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","490e05cfbcccd26a55818a7c69c8e6f9"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","cf66ad05555046ba60c0b00e10bffdc4"],["/categories/狂飙，乱飙，发飙/index.html","df08a8ed1b1c64895132fd7ed50f75d9"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","e1f6f78320ed01d58b03c32887862bc7"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","b32f201f11e83f17ab782763bc82d1ea"],["/categories/知更鸟颂歌/index.html","2f117f729880e102a17e8254663bff8e"],["/categories/知更鸟颂歌/序曲/index.html","00dfe7d928154f309803e875c3b535e6"],["/categories/知更鸟颂歌/颂歌组曲/index.html","e0298e88d93162e4e464aee5efe14d3f"],["/categories/短篇/index.html","f7386ec69cbaff7b7b7fe75746f41701"],["/categories/短篇/同床异梦（指珊）/index.html","8b6f81c33a634f96cda25657b9d54172"],["/categories/短篇/玉生烟/index.html","28f6edcc9572c6e6f073a0ff28b872cd"],["/categories/短篇/风雪夜归人（陆直）/index.html","d47c488f69cbccf38f6cac1ab3313f44"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","cd7d144ba228a0b8e84b5f5424ad83b4"],["/css/noscript.css","22d79188a4d9b1735f2ff307346b9c78"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","208dfd44d07f8b74ac9a686fdfb84c66"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","1dc6b90f09f62d866f19ba953f659330"],["/page/3/index.html","520490e2368ce0c61b3a2b694bf19209"],["/page/4/index.html","b9e14bfa365c70c1c7d15e26f946dea8"],["/page/5/index.html","69fe3dc4dfcaec5ffc464f0f56d82653"],["/page/6/index.html","cad2a5f97fb74458bcbbb2ab47ad42ce"],["/style.css","5f41f0ff73bbd71481b0a95a7f0e7ea5"],["/sw-register.js","a3867469babe34b26e4b1ab90d88b5fd"],["/tags/index.html","c00c45700365e7960a059d7b541548e3"],["/tags/冰与火之歌/index.html","40e52dad944c00be9574671f26137a3e"],["/tags/冰与火之歌/page/2/index.html","53787d6a71d38d4c44899227cd6a2ca8"],["/tags/摸鱼之作/index.html","92ede218a0138d563a19ae383b01ded1"],["/tags/日常/index.html","d73176968a2555057b3819651a1c538b"],["/tags/柠梨/index.html","73c6880f2d176c7b725754ab5624a797"],["/tags/柠梨/page/2/index.html","d904e9a88c358374a4b0c8bcb1ab88f5"],["/tags/柠梨/page/3/index.html","d00a168480608d3c2e73fad6d43b4a9c"],["/tags/狂飙/index.html","796550938dfa5a9e6a1ab171236d31f6"],["/tags/镛武侠/index.html","0f3afe9ff687e39ba3da0c360130b4f9"]];
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
