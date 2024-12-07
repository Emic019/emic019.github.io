/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","989b113d5a121e1c62b1d99d89f2b07f"],["/2024/07/08/月照天山雪（2）/index.html","f87196c2d0d1c92f944b34254aaa05c0"],["/2024/07/08/阅读须知/index.html","aae67f36a661b17669300129381e3cc8"],["/2024/07/09/同床异梦/index.html","1e4d50de2fe749f2f59b086943242f41"],["/2024/07/09/月照天山雪（3）/index.html","560ae23aa48332d1992dd440cdf88122"],["/2024/07/09/月照天山雪（4）/index.html","08058382c695d5ca7e3944ad2f82e888"],["/2024/07/09/月照天山雪（5）/index.html","a524caeade04cb24e60f2b9adea40e4a"],["/2024/07/10/ceshi/index.html","498b4082f620347362ad52f4a63f9475"],["/2024/07/10/一千零一夜/index.html","17800b49a92017bd9745763d55be479e"],["/2024/07/10/风雪夜归人/index.html","f5cd6d55ba720520842fad47aa873db8"],["/2024/07/12/与敌同行（1-1）/index.html","cc3311738071783b7262c80821c6ac92"],["/2024/07/12/与敌同行（1-2）/index.html","6f60a1407dab604dfb31947d579cfd8d"],["/2024/07/12/与敌同行（1-3）/index.html","614fae94d73a1f9a095a88c28497228e"],["/2024/07/12/与敌同行（1-4）/index.html","c8a07e12989a133f3e45d8d3f833ba85"],["/2024/07/12/与敌同行（1-5）/index.html","7262f256a4406d0dd11c8f5c54a4784d"],["/2024/07/12/与敌同行（1-6）/index.html","458bfc69564646ea803d2683fbbe29ef"],["/2024/07/12/与敌同行（1-7）/index.html","e5144d7d1f33274e67d40dc30b1bb5cc"],["/2024/07/12/与敌同行（1-8）/index.html","86dbf76c1527ae34572ccb116a666809"],["/2024/07/12/与敌同行（1-9）/index.html","e80ce04134cd0a6fc24a1a1fe921b1f1"],["/2024/07/12/与敌同行（2-1）/index.html","f617e5f603171fd3161e31fdefe72f8b"],["/2024/07/12/与敌同行（2-2）/index.html","dda5c25498f6bb85b771e9cce9d24b2d"],["/2024/07/12/孤独地狱（上）/index.html","0e1e0a615b38aec2d6bebe5f139046bf"],["/2024/07/12/孤独地狱（下）/index.html","dcfc31be2dd9b0854aa9865890c45b30"],["/2024/07/12/玉生烟/index.html","77f723aa6b5dfe2e7a1fa1b022eb83a6"],["/2024/07/12/知更鸟颂歌（1）/index.html","c410209b6231bacf6fe893ba8a3c02e5"],["/2024/07/12/知更鸟颂歌（2）/index.html","3cb550f382d6dd429a5dee1ad363cd78"],["/2024/07/28/与敌同行（2-3）/index.html","0cc87b2c9a9313378fb8acc151035d69"],["/2024/07/28/知更鸟颂歌（3）/index.html","6c0ce1e1d73b32ab7aaddfdc5eeff227"],["/2024/07/28/知更鸟颂歌（4）/index.html","58061571f182dbb8c67827d3901201cd"],["/2024/07/28/知更鸟颂歌（5）/index.html","559a3e37cf6c714ff496f4f4d9453a7e"],["/2024/08/24/与敌同行（2-4）/index.html","4d8d6e3af48ebc6d9212fc7f44ba8786"],["/2024/09/02/与敌同行（2-5）/index.html","003fc7233a6a5b39cce7ac8ce0c9ba1a"],["/2024/09/02/与敌同行（2-6）/index.html","dde49a3adfaf7e9c0c2d2f60c93f465d"],["/2024/09/15/与敌同行（2-7）/index.html","965d22468b2a199f14beafda5bdc4f76"],["/2024/10/03/失落的应许之地（1）/index.html","472cf65831c1ce274226184e1e39e1d4"],["/2024/10/27/与敌同行（2-8）/index.html","ab6aee089ad0a6cbd467303745dbd653"],["/2024/11/09/失落的应许之地（2）/index.html","252900d4ad0d40645515f88e5b15d95a"],["/2024/11/09/破戒/index.html","acf0d19a4e2563e026a4d3eda5144539"],["/2024/12/07/少年游（1）/index.html","549b8e690a05a19b432f25b9a1a04a1a"],["/archives/2024/07/index.html","84d8ec2970fc6335bab58fbdda0eec39"],["/archives/2024/07/page/2/index.html","8099050019bad5721a77241ee27958e9"],["/archives/2024/07/page/3/index.html","7a2ac6740cc71d286a7333bd89fcb3b2"],["/archives/2024/07/page/4/index.html","675c1603c375d17bb93ad3e14b107ce1"],["/archives/2024/07/page/5/index.html","620e08de7330bdd8b1a49e3c5f6c330b"],["/archives/2024/07/page/6/index.html","cf22eac190d4b05b656c1af3b3e16377"],["/archives/2024/08/index.html","7f7917327a617f56f01269a730c88611"],["/archives/2024/09/index.html","1134bbb5d9357959555217e0f418a905"],["/archives/2024/10/index.html","284d131756810bfe006d2a632bb69667"],["/archives/2024/11/index.html","21dae3fa972c049ae62ab6297d5af3fd"],["/archives/2024/12/index.html","1e489a15527d6b042b75af846c6ed3a1"],["/archives/2024/index.html","ddda83abdf19d090ac460419b74c4845"],["/archives/2024/page/2/index.html","a02b81098cd51fef2fcedca79ffd2b87"],["/archives/2024/page/3/index.html","43ea3d5ca413a0077ece3de9d1470695"],["/archives/2024/page/4/index.html","945d2c94855e10338d508c30448d5bb8"],["/archives/2024/page/5/index.html","2e7c33048b8904353a0d84e9e82a81b8"],["/archives/2024/page/6/index.html","80a1e81b3cdc9d8adca3b63008ed0320"],["/archives/2024/page/7/index.html","078272a724ae3c43bdbb9aad8462288b"],["/archives/2024/page/8/index.html","d41a0819f31f7c8a33af7002d877d8ca"],["/archives/index.html","01dd89fdc4d06e165e26c2349539e28d"],["/archives/page/2/index.html","5f5ac23e2eb1d760125d3434c92f3818"],["/archives/page/3/index.html","c86a4607a619ca5114f3351dcdd0877c"],["/archives/page/4/index.html","10fe868b1139ca2f618edef22f05a58d"],["/archives/page/5/index.html","5b8ee55f9563944478d03d4237fc6bbd"],["/archives/page/6/index.html","6f77b8d476a027b278e7b381e591259d"],["/archives/page/7/index.html","8f092430093aa3f32110b6272f6c2029"],["/archives/page/8/index.html","c9184a8d4ad40fbb9b4cceef64bcf029"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","6f0360baa8e8e1f859c2e3a01705f1a2"],["/categories/index.html","1737da3b9c26f1f687a8e7c5d36db3cb"],["/categories/与敌同行（梨综）/index.html","32d40fceeb5b2cdca8f64d9334370809"],["/categories/与敌同行（梨综）/page/2/index.html","df041d338ad6838149e6bf37b3b10b88"],["/categories/与敌同行（梨综）/page/3/index.html","79e13d0ee5e5d0e0c0076802884f117f"],["/categories/与敌同行（梨综）/page/4/index.html","b36a4463cdfe2ca701d088ff80e7d58d"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","1f9c188da98be411af2c707ee32d9b48"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","4b8d009d8e20126ed4d3a3c6f69c7a12"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","ab7a8ab4e5fcb042a3c2cf23b1c574ee"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","1af062a2c8a3a1f477190e5882017199"],["/categories/失落的应许之地/index.html","b9ba90019daf98fdfe0fa3bf85fa0ba0"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","1094313b66ba8fb674e3dd560990d95d"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","5ca96d720ac12690228a43628bad9937"],["/categories/月照天山雪/index.html","803d00bcb308b03e137ed3e99dc72955"],["/categories/月照天山雪/page/2/index.html","ce808db7464492ad751e4a6bf13d3751"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","8d8304485f9d393801771ed4c0d387c1"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","f5678c29fd524d7ebe3cd221d031dae3"],["/categories/狂飙，乱飙，发飙/index.html","b4f106565b1dbe79510d0c790a44e0d9"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","2c3c42cedaea9753cb789946f2035ee9"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","bec4f74670a52f7c30b26fed1cc0d6d7"],["/categories/知更鸟颂歌/index.html","70639ae41e13724dec17b4588f6722a8"],["/categories/知更鸟颂歌/序曲/index.html","211e6b4cdc9dcdbd9af265a544da38aa"],["/categories/知更鸟颂歌/颂歌组曲/index.html","82504cc77403494328940433ab0db967"],["/categories/短篇/index.html","e367954a32705b0fc5c40bc83a6278a8"],["/categories/短篇/同床异梦（指珊）/index.html","f341e4d9ec5b9ec20efde18b403f23b3"],["/categories/短篇/玉生烟/index.html","b1cc450940e9a38fbe5c769258449aa9"],["/categories/短篇/破戒（马魁）/index.html","21c97265f86e71ed3039a92f07f00c7b"],["/categories/终不似少年游/index.html","cbb24b0bc7bf0725d62d09a7c8d8912f"],["/categories/终不似少年游/少年游（上）/index.html","788fb75ef3321eb9a27dbea61872cff3"],["/categories/终不似少年游/风雪夜归人（忠直）/index.html","da65dbb5c7d13590afd23a89856c4d58"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","5c4ddc7fa456824e251c1031b2ee23b7"],["/css/noscript.css","8643e0f667d2af216cabb28166d08742"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","9e150d1596606b1b648906a9cc58152b"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","c853525b9d26da29745adf277e0ff84e"],["/page/3/index.html","61bb96ee3c3e12b527eb8b2a332bedc9"],["/page/4/index.html","0cfea66ab7172883f872556adf981622"],["/page/5/index.html","deb1a63822ebcf50fb847538650262c2"],["/page/6/index.html","005ed9d9666dcbb2717c7eeb59bd0bf9"],["/page/7/index.html","2206ba2042980ee70845acfc6993ca99"],["/page/8/index.html","125c2ba0b4291b0799fea68fbd9706ec"],["/style.css","b9a2c4a447cbe7ae8d9ffdd6237587de"],["/sw-register.js","bac044207b8bd9b9a25d231a214f074c"],["/tags/index.html","3b5c601f615e54fe24eb38d3b50d7b36"],["/tags/冰与火之歌/index.html","4fa44efc8fd97019cb883877c119f81e"],["/tags/冰与火之歌/page/2/index.html","a82fc04979c0d698124676953ecdbef5"],["/tags/摸鱼之作/index.html","db143cf7eb8c39f1a61d1add593249f8"],["/tags/日常/index.html","ef70ad538881642b6696076ae8560510"],["/tags/柠梨/index.html","8c1f0b3d3035bff4011ed74e135dc6c8"],["/tags/柠梨/page/2/index.html","11e04a2c477ef4434d50bc4576bd3521"],["/tags/柠梨/page/3/index.html","80dbde95d2df8648130c4242e9678568"],["/tags/柠梨/page/4/index.html","04de8c1de29cd29b7403e38e52506e5f"],["/tags/柠梨/page/5/index.html","b89fc6c8b4a2a00dcaea47de2ccccc9d"],["/tags/狂飙/index.html","1dd305bc7b370ce8007b2662834d654a"],["/tags/镛武侠/index.html","5dad31141c6045a3b8e241bd03197b7e"]];
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
