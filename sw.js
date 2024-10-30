/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","5b4b981c85fd77976249e2374b11f1de"],["/2024/07/08/月照天山雪（2）/index.html","518d31764b09ea1986f3e3e828c16d5d"],["/2024/07/08/阅读须知/index.html","f18928a37e56f463cd6900733d710614"],["/2024/07/09/同床异梦/index.html","17c849670b1bedeff61986ddb4069247"],["/2024/07/09/月照天山雪（3）/index.html","5ec03af1acf7cfa83c24c0f267dc69c4"],["/2024/07/09/月照天山雪（4）/index.html","e77cb3eb7f2788123be1f9675299dac5"],["/2024/07/09/月照天山雪（5）/index.html","b75332c711f0a99b85170d3803593e76"],["/2024/07/10/ceshi/index.html","9529c36f4089797914bd837a5d6879c4"],["/2024/07/10/一千零一夜/index.html","ea081ab794c64fc25687ebf6dd3ff57f"],["/2024/07/10/风雪夜归人/index.html","0f090128f9796c29e7924968a846ce96"],["/2024/07/12/与敌同行（1-1）/index.html","57788baf3a15ca8f4ac1b6500198857f"],["/2024/07/12/与敌同行（1-2）/index.html","911bebd4135a3c2754e7c800488dcba9"],["/2024/07/12/与敌同行（1-3）/index.html","b2875f2b8a91de36fcb3c2d6ec0ab82e"],["/2024/07/12/与敌同行（1-4）/index.html","14b39f27e7852bc653bbcf0a674eef0a"],["/2024/07/12/与敌同行（1-5）/index.html","b855197fc6520257d8992bc136e2caf6"],["/2024/07/12/与敌同行（1-6）/index.html","06263d3a3f4ff4d436bc173e14850e93"],["/2024/07/12/与敌同行（1-7）/index.html","11e6ba6ae2d99f04cd852554bb3a5de1"],["/2024/07/12/与敌同行（1-8）/index.html","19b504cc7acef2cd28debb3ab09a7041"],["/2024/07/12/与敌同行（1-9）/index.html","60377408dfc48f2ab71cb17ec677e393"],["/2024/07/12/与敌同行（2-1）/index.html","33c3d0eee310dffa03010392ee733045"],["/2024/07/12/与敌同行（2-2）/index.html","a6a679cc3c222ffde11830de8f909d96"],["/2024/07/12/孤独地狱（上）/index.html","825058f5f007c79113809b0f2a49edd3"],["/2024/07/12/孤独地狱（下）/index.html","aadf1a204dc3c862f28eeafb758059e5"],["/2024/07/12/玉生烟/index.html","e3f008626d746a80dfdf223694a21f29"],["/2024/07/12/知更鸟颂歌（1）/index.html","5a0cc4fd9aef208d6d0fe964e16c9bb8"],["/2024/07/12/知更鸟颂歌（2）/index.html","4f328d5000397663f0632aad2f14a807"],["/2024/07/28/与敌同行（2-3）/index.html","beab5fa9164eb8a972738beb27249cd7"],["/2024/07/28/知更鸟颂歌（3）/index.html","4450e6872dfe6a3e7274c807268dba3b"],["/2024/07/28/知更鸟颂歌（4）/index.html","6fb48bbe1cc9f9915c63ebddb9fa5eb8"],["/2024/07/28/知更鸟颂歌（5）/index.html","4483d13fe141262de803d500bbbdb25f"],["/2024/08/24/与敌同行（2-4）/index.html","a77ab52fb90a696996c003f1d051bc4d"],["/2024/09/02/与敌同行（2-5）/index.html","54f43e35be6a365c6a9ee1072afadb7a"],["/2024/09/02/与敌同行（2-6）/index.html","74db073fb3b2bdc6cdf5a7847c65af8b"],["/2024/09/15/与敌同行（2-7）/index.html","414c32865abc40c8de3c7a5bb1f7eca0"],["/2024/10/03/失落的应许之地（1）/index.html","ce120b7fc8e2461d5b6b71d93817a93d"],["/2024/10/27/与敌同行（2-8）/index.html","014f15ace8540f0774f234ace8536748"],["/archives/2024/07/index.html","bc1fa629d100c281a398950fa56984dd"],["/archives/2024/07/page/2/index.html","5d43f982cca19daa3d09d71317fef435"],["/archives/2024/07/page/3/index.html","976ecc8e5c7ac03f3bc474a0d1e911ac"],["/archives/2024/07/page/4/index.html","bd29a5deb302eca1724e81dc8d335f89"],["/archives/2024/07/page/5/index.html","8c7cd92e243de90f2867f5179cb20040"],["/archives/2024/07/page/6/index.html","41b51f9debd4abab373aaa0fd32aaa12"],["/archives/2024/08/index.html","0ebd4c1a0bf09638708cab39bea17b79"],["/archives/2024/09/index.html","99520a998c22199c08913f81040cab7c"],["/archives/2024/10/index.html","3ea8d8a8d45e7752a2f22c5dae326a52"],["/archives/2024/index.html","add18ac566d7941e1e76d77f43324ec3"],["/archives/2024/page/2/index.html","c04e71479ff0980f1308efbaa6856263"],["/archives/2024/page/3/index.html","8cc42051f2685b0d1472f6e0588c5191"],["/archives/2024/page/4/index.html","704bd16acadafd5dc13679a36e127205"],["/archives/2024/page/5/index.html","bab38ca4b6aded0def3317357538916f"],["/archives/2024/page/6/index.html","f262b9b74e998341bd7b8f3aa214587b"],["/archives/2024/page/7/index.html","3fe4e88a478841c7324a49147e3ded31"],["/archives/2024/page/8/index.html","1ad1d2b4d97163ff8cb0fe1e2d472aef"],["/archives/index.html","715db024901e39abb54e8ccb4b0f9392"],["/archives/page/2/index.html","8beb5f259edbadeaefdb7427b19d6c64"],["/archives/page/3/index.html","6a47ab813e15e38adbda46b55ecd1970"],["/archives/page/4/index.html","5cda02a6ae65460f0491f149e4b7d076"],["/archives/page/5/index.html","794d2162820f6cb38203467f90cfc703"],["/archives/page/6/index.html","9a4d6337bccaab916409ead0cd3c485b"],["/archives/page/7/index.html","d2b3ca512f0aac1c10385d41d8289385"],["/archives/page/8/index.html","8f2e23fd0d3ac014c9bf3400265bb341"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","6f0360baa8e8e1f859c2e3a01705f1a2"],["/categories/index.html","a01bdee1666a335fa4140bf5985ef9c6"],["/categories/与敌同行（梨综）/index.html","2dad80f6862d22e80757ec31f6538849"],["/categories/与敌同行（梨综）/page/2/index.html","3f879d8b05fdfda0e77d854145f60775"],["/categories/与敌同行（梨综）/page/3/index.html","1b7d35a3455799777f2ad8c9d94f4350"],["/categories/与敌同行（梨综）/page/4/index.html","594b2817b5cfd60ba362f1bbc138cc27"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","081e343164e0f8291adea3f3936b9f8d"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","4c557b71262a2f9c479a3ee107c08eb4"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","ba3de7e4f91ffeed61fb54b178950079"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","ecf4ed97feee07a1abadeb11157649d1"],["/categories/失落的应许之地/index.html","154899fb7f9efc5da023b8d9b32360e2"],["/categories/失落的应许之地/别和数据聊感情/index.html","a35433df40fe8319d92c8dd226c6157f"],["/categories/月照天山雪/index.html","ea87aa6a6d212294e3663ac9d7b72a06"],["/categories/月照天山雪/page/2/index.html","e88eea376a3948256b1099c291864ce4"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","91e6ca552023c5135f648bbde05f6c74"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","baa207dda977a481029bac27d308ff1a"],["/categories/狂飙，乱飙，发飙/index.html","da5d062ac914d65dddb187979c2e1373"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","bd9e9e3ec8d0bf77a8ada2732a6035c8"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","ef4a0c7a6376ed01c0a769fdd84ae08b"],["/categories/知更鸟颂歌/index.html","84161db6fc7dcb2a354f13fc55c198d4"],["/categories/知更鸟颂歌/序曲/index.html","1b169ab105162721fc9bd4b5741ce662"],["/categories/知更鸟颂歌/颂歌组曲/index.html","840959e7311c04594ac08773f6502ffb"],["/categories/短篇/index.html","74cbce844813113eff83bcb382e43c29"],["/categories/短篇/同床异梦（指珊）/index.html","a62cade0663c1d61bda46b3812db90c1"],["/categories/短篇/玉生烟/index.html","93bd8b00ed0aac3d132cfc1cec79be83"],["/categories/短篇/风雪夜归人（陆直）/index.html","e4f686da5e448dbf477060be0a5919fd"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","8b3e992bf8c4b54483318d9fb567f339"],["/css/noscript.css","72a9a65db61804b4bd40fdeddd484635"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","e1e2d6a55ae049b1c1d4538dca4ec7fe"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","e549c2d8f9f72ec4a1de9861ffea5d9f"],["/page/3/index.html","39c85a3ad1b4c295128e811a4e7aa7f5"],["/page/4/index.html","329f62e374f89fee178bbb81f92e7631"],["/page/5/index.html","dd23be28b823dac75a82170a3a5768fb"],["/page/6/index.html","cab87b10933e0616bb0f2f14e6f69528"],["/page/7/index.html","c71c4e53cb263824703f7adeee8928e6"],["/page/8/index.html","013d1ba663f2e0f6548c6cd21ce38113"],["/style.css","b24867250035c3fa998cd66be0fd55b8"],["/sw-register.js","22e78f2d16eab9c167f756831db8506f"],["/tags/index.html","fdb913532b9cf96b4fbe1836fe38156e"],["/tags/冰与火之歌/index.html","212c90d7fb8f59221be494092c9382d2"],["/tags/冰与火之歌/page/2/index.html","0d68ad02b4a50400302dbe4cae1c6e57"],["/tags/摸鱼之作/index.html","f5375523e68fabee80d0e157d10944d3"],["/tags/日常/index.html","7176be0b342c543e3d0feac9740824d0"],["/tags/柠梨/index.html","591d4510f758cbe864252bd5208a9fbe"],["/tags/柠梨/page/2/index.html","3be0fc6d5d24c27b6f2f32d3399cab75"],["/tags/柠梨/page/3/index.html","6817b9db2ae1e7649c990c129fae2fe2"],["/tags/柠梨/page/4/index.html","edd45dd0ea3f27c850f90fec78e660fd"],["/tags/狂飙/index.html","2a7b3c5fba65cfd39e6d97137bd89dc1"],["/tags/镛武侠/index.html","a495e5bf94ab8452b397d869e57264b7"]];
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
