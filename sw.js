/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","222199f74d80ab237647617270eaac5b"],["/2024/07/08/月照天山雪（2）/index.html","e74d486de65c39d12d5136289d2d8975"],["/2024/07/08/阅读须知/index.html","f9ab03aa0e723774d0b86ad067154a85"],["/2024/07/09/同床异梦/index.html","c3fbacecac06c79f8720c10dee2c640a"],["/2024/07/09/月照天山雪（3）/index.html","b43480a078dec674c6df3b8b1d418201"],["/2024/07/09/月照天山雪（4）/index.html","25cf895f71b2c1707864006a264914b6"],["/2024/07/09/月照天山雪（5）/index.html","f065545d40274e1263ddb705bcb4670c"],["/2024/07/10/ceshi/index.html","31f1154d7a370923b72f708b82edf53e"],["/2024/07/10/一千零一夜/index.html","866bc44eea2084ee4a4db845ea50d4a9"],["/2024/07/10/风雪夜归人/index.html","6760a19b43f2ec6401772ec56d1d5a72"],["/2024/07/12/与敌同行（1-1）/index.html","1882176649448d038c5a09e188ddad78"],["/2024/07/12/与敌同行（1-2）/index.html","7da7f93e3c2d93487cfca017c25bac0f"],["/2024/07/12/与敌同行（1-3）/index.html","feb2a60239ece6ea2b30b72eff9f3089"],["/2024/07/12/与敌同行（1-4）/index.html","c9d9dc405fea1aa8741824b50d9ecde7"],["/2024/07/12/与敌同行（1-5）/index.html","fc58bd9fce1636346ac5ed35723dd131"],["/2024/07/12/与敌同行（1-6）/index.html","8a935a2f811a233444ceb03da29c795d"],["/2024/07/12/与敌同行（1-7）/index.html","6efe0a64bc29fb014c2f6567defcef4a"],["/2024/07/12/与敌同行（1-8）/index.html","79621a9c0e6e3d823dd2f01246314028"],["/2024/07/12/与敌同行（1-9）/index.html","92d91406162b8357c8dc8d432d27ed64"],["/2024/07/12/与敌同行（2-1）/index.html","33594fa5846b40e17d049e28baf0ac9f"],["/2024/07/12/与敌同行（2-2）/index.html","407eb6417a4966f23e83b106a008521d"],["/2024/07/12/孤独地狱（上）/index.html","98e083d997fb2dcc00d8113be0bc2a34"],["/2024/07/12/孤独地狱（下）/index.html","fb7d19cd55ff0f4c735a8fa9b52c0d4b"],["/2024/07/12/玉生烟/index.html","9fd2bc892eec123464f040f8268ed47f"],["/2024/07/12/知更鸟颂歌（1）/index.html","9bc811a4e58db65fcd7c00f1a24c629d"],["/2024/07/12/知更鸟颂歌（2）/index.html","10d74f17431eec2d48cb530432e6f3f1"],["/2024/07/28/与敌同行（2-3）/index.html","e041e09e6862970666e3498678710365"],["/2024/07/28/知更鸟颂歌（3）/index.html","fdade3950e2a4c3c97bb80a082b81b9d"],["/2024/07/28/知更鸟颂歌（4）/index.html","c715f649ed15d8dc5baf9d54daa095d1"],["/2024/07/28/知更鸟颂歌（5）/index.html","4cbcd0f7d076fb17f87bdee0dbd4118c"],["/2024/08/24/与敌同行（2-4）/index.html","110099a4c19846b42009f7d17cea9a97"],["/2024/09/02/与敌同行（2-5）/index.html","cb46016b2356a5418eda9976ef7e22e8"],["/2024/09/02/与敌同行（2-6）/index.html","98886e797b0084c8a1d4f0d2a0ec6ee1"],["/2024/09/15/与敌同行（2-7）/index.html","e5fef6373341978e20613f5eb300b0e9"],["/2024/10/03/失落的应许之地（1）/index.html","4b5b2e4f6ed4b0f85c98ce16f622c72d"],["/2024/10/27/与敌同行（2-8）/index.html","6e6ec3317220390550691b2d2e46fe3e"],["/2024/11/09/失落的应许之地（2）/index.html","55275939c87df9232dbf1b25a18fed6c"],["/2024/11/09/破戒/index.html","c76022f3aca068bd7a37acbd57c5d0a7"],["/2024/12/07/少年游（1）/index.html","fc60a6fa9e859030828656dc36578bea"],["/archives/2024/07/index.html","65e1b1d1af2344f17a230b230a497dfe"],["/archives/2024/07/page/2/index.html","10fde598de1b8c07c647e672965f082a"],["/archives/2024/07/page/3/index.html","35075303077e42230ba305567a6e9245"],["/archives/2024/07/page/4/index.html","01bb8ebe2006c1ad983d51e01dd4799f"],["/archives/2024/07/page/5/index.html","119f5c03d05fad8777990d7b5de5aed0"],["/archives/2024/07/page/6/index.html","04646aa903dd9f6021205b6cc1a509d6"],["/archives/2024/08/index.html","cbe1114c04f38dac46fa91b4614538fa"],["/archives/2024/09/index.html","cf75aef040160792b53da8dded2dbacf"],["/archives/2024/10/index.html","07919399e798e1dafd2f07ebe28746b4"],["/archives/2024/11/index.html","9712406274c119ad27528f6f3df28d59"],["/archives/2024/12/index.html","98cc59a49dcbeeb7fddcadc39ed0a35d"],["/archives/2024/index.html","bc0516ee7272dc6a75f7708d956ef1b4"],["/archives/2024/page/2/index.html","38fc86b9a4ee789f52e2e04318388c1c"],["/archives/2024/page/3/index.html","2f680d3c384fc008feee4cd5dcff730a"],["/archives/2024/page/4/index.html","aabc6408c79d4452c7b1493754f1d7dd"],["/archives/2024/page/5/index.html","926c34511725664ef46dc5b10e93382a"],["/archives/2024/page/6/index.html","37c95032337e48bad3ff1c5d9ca7bbba"],["/archives/2024/page/7/index.html","b1edd9a7ef4b39b1707c5e37bdb6aaca"],["/archives/2024/page/8/index.html","149c492864f973a762dfd5514e45df68"],["/archives/index.html","b3ff3a06718bcbb055e7786c0c2a23e8"],["/archives/page/2/index.html","598a29412c35d761e96bde8325269e3d"],["/archives/page/3/index.html","5ddd78dba4bce49e6fbb9055682e27f8"],["/archives/page/4/index.html","891e49dfca4726cefbb8e85c5a3e92cd"],["/archives/page/5/index.html","725429d76e9bb570e33be5e201558368"],["/archives/page/6/index.html","eb387208fe8fa6f8acadbf47937e217b"],["/archives/page/7/index.html","f3a617d53b510278e8115e75cc3f1b62"],["/archives/page/8/index.html","eb2edf32e118e9e398bf0bc7955fe30b"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","6f0360baa8e8e1f859c2e3a01705f1a2"],["/categories/index.html","4f28c157c291a740483fb454ae1a9bcb"],["/categories/与敌同行（梨综）/index.html","ec82bd2e0f8d6fe22468161bec2c10ba"],["/categories/与敌同行（梨综）/page/2/index.html","1b6f44df61a890817998dacbf665c13e"],["/categories/与敌同行（梨综）/page/3/index.html","24be546af0755953823662bcac4624d7"],["/categories/与敌同行（梨综）/page/4/index.html","d1ce73ee6b2a5c82a95a12404d237e5e"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","93530053d74a7c180f02985c70df3b33"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","070d2f243ed9c42c0690acbafd29eda4"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","5b068a97f1bc903dd14437ac306fbc90"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","2ab03c96307709ea8b221b8ffb7b44ea"],["/categories/失落的应许之地/index.html","01bdf5182094f6d031defd796500865f"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","3ee4a6832f556b762820e3be5a7dd3b4"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","c82762aa668db7fe66dccb34df0c57b6"],["/categories/月照天山雪/index.html","dd7d68362e4b2eaf2920fdf4413cfbdb"],["/categories/月照天山雪/page/2/index.html","c5768e463642893949c97936741dbaf0"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","8ba92cc53b8dda08a693e51a2f42961e"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","5400bc7007974930d20d89e75b7ef526"],["/categories/狂飙，乱飙，发飙/index.html","86aace1b188d4860d06abfdb4b967ca5"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","6c9d48fbb8dd96b8712262ffd733430e"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","557ae9b279de27845b3d3ea060aa0689"],["/categories/知更鸟颂歌/index.html","1eb360e9477a481cb27daa3d5d3f646e"],["/categories/知更鸟颂歌/序曲/index.html","40bc6c45dfcca3f93848988c1590cab0"],["/categories/知更鸟颂歌/颂歌组曲/index.html","357160b50ebbbc0855cc6751a51568dd"],["/categories/短篇/index.html","78d366f964bdcb7980d517f293c7770b"],["/categories/短篇/同床异梦（指珊）/index.html","60fa228d609de54d8053fc40e6f09730"],["/categories/短篇/玉生烟/index.html","5aa2d2e79c622484a7b182b4842d9dac"],["/categories/短篇/破戒（马魁）/index.html","ac2ece61665061dd1b5d8991f601b144"],["/categories/终不似少年游/index.html","2bafe4cb47b1a97a7149a7d939d94df9"],["/categories/终不似少年游/少年游（上）/index.html","e7731fbef562df264cfd2c4b94e0784c"],["/categories/终不似少年游/风雪夜归人（忠直）/index.html","4cc78496b7593c959dbccc89b594c1b7"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","5c4ddc7fa456824e251c1031b2ee23b7"],["/css/noscript.css","8643e0f667d2af216cabb28166d08742"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","29ba62c72b33d346c460b38e98f28da6"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","e63852530e0af59581566f5b16d0b2fb"],["/page/3/index.html","a2ee77b471f216915b0b68f92f810519"],["/page/4/index.html","587c30258289a1fdf52ecb014fdea3ec"],["/page/5/index.html","8792dfbc38bf5bc37b73272d80b918c3"],["/page/6/index.html","32e3e5d0c540b6536b33f4528e3b5622"],["/page/7/index.html","c6ad8ded6ad12d3f7cf987bfdc0c6f22"],["/page/8/index.html","935b4803648e5a4a27e86180a894dc42"],["/style.css","6781bdaadda7b7e0a2106e4791cb30c6"],["/sw-register.js","642bcbdcc102bd243108fc9058185043"],["/tags/index.html","308ef218d58016faea31f88e20013092"],["/tags/冰与火之歌/index.html","474d4b038ff7453c46af9d8066f464ed"],["/tags/冰与火之歌/page/2/index.html","fc5a57f6d1aed088fa65b45dfddbc1ad"],["/tags/摸鱼之作/index.html","44d2c719d5cea146b49b18fd4f585ea7"],["/tags/日常/index.html","f2c4d8fcd10c24a08763a3a9864c4e56"],["/tags/柠梨/index.html","697ef74b891de7705a304ab37987f910"],["/tags/柠梨/page/2/index.html","de31441a12cf42f67a85c27df8e1e0a9"],["/tags/柠梨/page/3/index.html","d41c4887bf3c2ea4c3008bea8ad5d31c"],["/tags/柠梨/page/4/index.html","164e51b82f7de6c7a57337ac355f556a"],["/tags/柠梨/page/5/index.html","33f12e81cf72c7c23d34974e4bb53909"],["/tags/狂飙/index.html","f2151562d03ff84460903121d4f69b65"],["/tags/镛武侠/index.html","6b6b9f2e0859b6bdd2b33c2dd411605e"]];
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
