/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","e89cfbfbcc9717a1170242dc5914fbb5"],["/2024/07/08/月照天山雪（2）/index.html","0ec520ba60dede4175a895d1d57f8f17"],["/2024/07/08/阅读须知/index.html","2225f4d395d79e29f54c078faa8d0ee5"],["/2024/07/09/同床异梦/index.html","930bee9cf0bac7b852d991699d26eda9"],["/2024/07/09/月照天山雪（3）/index.html","29cbb57a8fa222d1952e9ae800b72256"],["/2024/07/09/月照天山雪（4）/index.html","1921f20043f94844129ff7e5fa17cd30"],["/2024/07/09/月照天山雪（5）/index.html","28681e57b231bad720eedc966834a3f0"],["/2024/07/10/ceshi/index.html","a336ba49ff67c4c8a1ae3ac0a8baa00c"],["/2024/07/10/一千零一夜/index.html","214f84eee2c7de7f2df0ddeacd64784c"],["/2024/07/10/风雪夜归人/index.html","2d9477225c256db56de59bc12b1a747f"],["/2024/07/12/与敌同行（1-1）/index.html","c4b9c0216c1c45bdd710ea30b6046189"],["/2024/07/12/与敌同行（1-2）/index.html","2ac77cac53fb3277cbf00cf1b7332571"],["/2024/07/12/与敌同行（1-3）/index.html","095e528a5f48d0cb6c7326462bc5fbae"],["/2024/07/12/与敌同行（1-4）/index.html","928bbe0a39362856d9972ff760285937"],["/2024/07/12/与敌同行（1-5）/index.html","7e3226d3b37688403e3ab3a7ade45abf"],["/2024/07/12/与敌同行（1-6）/index.html","43fc1bdae9910a314fa5e01c4205b405"],["/2024/07/12/与敌同行（1-7）/index.html","7a0e053426efa31a8506bcea71d43dac"],["/2024/07/12/与敌同行（1-8）/index.html","4f464024f7d632c8facd403f825dfb83"],["/2024/07/12/与敌同行（1-9）/index.html","c2afab922d5bd9ad484d803e1ee67950"],["/2024/07/12/与敌同行（2-1）/index.html","f8701d777afda994c24413ec3ca17265"],["/2024/07/12/与敌同行（2-2）/index.html","126c27020e2fe402f0091fc3c25cd2d3"],["/2024/07/12/孤独地狱（上）/index.html","d214d117e25bd15c3a91211c327d396e"],["/2024/07/12/孤独地狱（下）/index.html","9759e09b67fc6daa3cc3e13de4567878"],["/2024/07/12/玉生烟/index.html","8b03efd5ee91c48029f885ec5544a029"],["/2024/07/12/知更鸟颂歌（1）/index.html","f156415f5b63cc09bbb859e8633a08f1"],["/2024/07/12/知更鸟颂歌（2）/index.html","bef00846e6b15d59f5c5bc71bc60a6a6"],["/2024/07/28/与敌同行（2-3）/index.html","8421f7f4e79d9b4ab798404a70c202ee"],["/2024/07/28/知更鸟颂歌（3）/index.html","dadda80c6f5c4db93b4c612cd4dab483"],["/2024/07/28/知更鸟颂歌（4）/index.html","18e99224d62fe1c42527a09407623e74"],["/2024/07/28/知更鸟颂歌（5）/index.html","afa0ee92daf820d82bf7764d64ace5f8"],["/2024/08/24/与敌同行（2-4）/index.html","b8f17f1d09c1be609b2478c528f50ed6"],["/2024/09/02/与敌同行（2-5）/index.html","99a53ae343bc6c21b0a1af52746d525d"],["/2024/09/02/与敌同行（2-6）/index.html","40a4f206a72cd337de34a147b38b0861"],["/2024/09/15/与敌同行（2-7）/index.html","0aa76bb1fe4fc037b9d890eb1dd1feab"],["/2024/10/03/失落的应许之地（1）/index.html","8905ba29e4021806828a601c8438a659"],["/2024/10/27/与敌同行（2-8）/index.html","b66b6cd475cdfd3602a31aff850ea7e5"],["/2024/11/09/失落的应许之地（2）/index.html","597f43bf088321a884b766b4657daa72"],["/2024/11/09/破戒/index.html","904e56639235440990586782438aa6fc"],["/2024/12/07/少年游（1）/index.html","3361b5e011d8816364a839dca28aaad9"],["/archives/2024/07/index.html","e02a326c9ec7e54f50e1c63df0b83f34"],["/archives/2024/07/page/2/index.html","c21e9dc9c89fbace9b8c953156c0ade8"],["/archives/2024/07/page/3/index.html","bd11cbd6306856c429617aa4a8c5bdf6"],["/archives/2024/07/page/4/index.html","c6d9f265408f3bc30eac9495c1d9fc14"],["/archives/2024/07/page/5/index.html","ff2f1e333e88a59143d1f86787cca2e3"],["/archives/2024/07/page/6/index.html","8f0357be89203b6ecc25fed450517e51"],["/archives/2024/08/index.html","027e735523aab4e220630b11731fcb24"],["/archives/2024/09/index.html","6f9725ab84ef8291e49c1ec9199092e0"],["/archives/2024/10/index.html","c5a61d4d293c0e9ca0e02b6f4b635c26"],["/archives/2024/11/index.html","f46ccd5ca20642d7786585cb33ce4927"],["/archives/2024/12/index.html","26af74893af2f440f990ef2545f83a6b"],["/archives/2024/index.html","10b240a46a3b2f1b970f5d6c5be05963"],["/archives/2024/page/2/index.html","722abf6da6393b7d2d8d23e95fd44965"],["/archives/2024/page/3/index.html","f373e9a3396e3b9d353b3c71cc37f089"],["/archives/2024/page/4/index.html","281c5d76d4c8f30eded8601e5bda33e3"],["/archives/2024/page/5/index.html","09d55c087d1aa1b8731c33cc49f493ee"],["/archives/2024/page/6/index.html","412d351e04c9367e9a67c4d4c055352c"],["/archives/2024/page/7/index.html","64e340ba6474f115e93f79c128a8d4ad"],["/archives/2024/page/8/index.html","402bceb27e0cc32171ba0a4fdd7486c7"],["/archives/index.html","55dc910fab199816542a3df2caedf66a"],["/archives/page/2/index.html","645eec7e2a7f50b4cfee772bc0360bc8"],["/archives/page/3/index.html","9c59a0187667dc0517a3d0f0495a25c1"],["/archives/page/4/index.html","4e7d5ae7b739bee03fb10a5eebfae276"],["/archives/page/5/index.html","b862df150805877f0cff9f1abdb01b09"],["/archives/page/6/index.html","15c6d4cc0ccb4da0bf8db7be8d7ca8b3"],["/archives/page/7/index.html","26fed932f10e0219c5bc519e4a76b15e"],["/archives/page/8/index.html","f295d35ea31445c2a3aab63d01425438"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","6f0360baa8e8e1f859c2e3a01705f1a2"],["/categories/index.html","acb791c34ed71edb04f7d089df857b6d"],["/categories/与敌同行（梨综）/index.html","f3e1fc8f1a0603aa4825055dbc569186"],["/categories/与敌同行（梨综）/page/2/index.html","e47990c90b73f7ae92819dcd989cce2b"],["/categories/与敌同行（梨综）/page/3/index.html","a608666c4aeff9c47be5b29cfab48728"],["/categories/与敌同行（梨综）/page/4/index.html","748f5e0d23e0f18d71458149a1343697"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","31e90963de2d3d1b4a2c7fc027f56220"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","b6a6c412cf1af00fe9fe2fa021a217a4"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","5c5fa32162e777eeb27014243b8f3858"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","bd4939db1ddd05328942bb1d4a265203"],["/categories/失落的应许之地/index.html","a192521c97a0790a972c9c21e2584aac"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","05f49350d4d80bf53471a2252ba0ed0c"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","1ad724057259e153b5c9092ca3c6d44b"],["/categories/月照天山雪/index.html","8920fbd10e51e253f278d4742de6c22e"],["/categories/月照天山雪/page/2/index.html","c5b21a4cd657080426df93d70db3bcd1"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","2ba6860996db13690873436d1bf91b90"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","2cbbd1b682126a8cc3aa0cc40739dad5"],["/categories/狂飙，乱飙，发飙/index.html","7981a13cbfe832337f3ba34d4f3c1b94"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","ad46a25f4ee821c888f20479c1140b45"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","87245f016f155ae14ed34f9349100f23"],["/categories/知更鸟颂歌/index.html","fa109bb7b95d335ea9699aa171a4bb38"],["/categories/知更鸟颂歌/序曲/index.html","1d91b3c83233d020bac3f63c276f301b"],["/categories/知更鸟颂歌/颂歌组曲/index.html","73e74d8a09349886cd7138c15285e9cb"],["/categories/短篇/index.html","b6a4bcb1111f7bbaa3560218c4c3d5f6"],["/categories/短篇/同床异梦（指珊）/index.html","e092f1ae0156df410ffa845ea4c27a42"],["/categories/短篇/玉生烟/index.html","07733b19f2bbc902180480805ce14367"],["/categories/短篇/破戒（马魁）/index.html","510a1db8b3032375866b9e182f332be0"],["/categories/终不似少年游/index.html","adb95a0601c2d73cc3994bbc7796db68"],["/categories/终不似少年游/少年游（上）/index.html","32623c22d01456dc88582fb9d03ceb1e"],["/categories/终不似少年游/风雪夜归人（忠直）/index.html","31d1c12e70d4a33c7ba7b0783b04d017"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","0fd943e7cbb809f04a113c2b3683a053"],["/css/noscript.css","f0d6538eef354c08017ce5a977aef97f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","2f841818d554cac9bbc4c118ab8938bb"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","0a69e1d7643ccf9ae0204ee579cbac24"],["/page/3/index.html","9678b9ae2101dfa9913126602b0c614f"],["/page/4/index.html","473b10d4fec5e668d38853c39158423c"],["/page/5/index.html","f845a88ca039b0eba2357dd16536c51d"],["/page/6/index.html","c095918b36894411de6a1d3c481b58da"],["/page/7/index.html","fe8cf92aa84b4d53f644309d503c74f6"],["/page/8/index.html","cb237470635a6f882fd67035bccd7bcb"],["/style.css","acce0b79c4b35367e76278e854b3ea3f"],["/sw-register.js","899b273505df47548c4a8503521eed34"],["/tags/index.html","d8b1292e4517ce5ecc6d1c53060112cf"],["/tags/冰与火之歌/index.html","f8202789580b07ee5ef3efb22433e135"],["/tags/冰与火之歌/page/2/index.html","0914189b2d7db2abf77394530f968e02"],["/tags/摸鱼之作/index.html","dc5f930c52c111ef7d6472d268db6281"],["/tags/日常/index.html","3fe7f6580e764c1943e24e5dbcb9fe1d"],["/tags/柠梨/index.html","adb49e1a8cd41eaa6dbb056237d72fa3"],["/tags/柠梨/page/2/index.html","2bd2a4af83721fd2b8cc065b6fbb4551"],["/tags/柠梨/page/3/index.html","61edb5f814830bf6e1f1e86a6c023f9a"],["/tags/柠梨/page/4/index.html","4ebd45de461974921f08ee476f3401c9"],["/tags/柠梨/page/5/index.html","e2f8b0e40aaa320d4800a948ecd3ad21"],["/tags/狂飙/index.html","547e5206e27899dc8e4569e230cfb2f8"],["/tags/镛武侠/index.html","704533f594e178ed1bab7c35aa2de473"]];
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
