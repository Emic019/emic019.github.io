/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","92471e3a0d091b24fdc0f3cc60b7777c"],["/2024/07/08/月照天山雪（2）/index.html","d94e8fbc0b548c206fa21b57903a73c8"],["/2024/07/08/阅读须知/index.html","963b85d3ca700f55adca7c987ad44712"],["/2024/07/09/同床异梦/index.html","25708a6be74dc787bf63d4bacc31f176"],["/2024/07/09/月照天山雪（3）/index.html","59f36b8eb33bea53623674bb5a8047da"],["/2024/07/09/月照天山雪（4）/index.html","4151f3edd62f5f4ab244381278b659dc"],["/2024/07/09/月照天山雪（5）/index.html","27f251bc08a2130d88e9ab4ece01a8d6"],["/2024/07/10/ceshi/index.html","6c4ae66880562a01b1367fac45d7df67"],["/2024/07/10/一千零一夜/index.html","b30b95d305b5e34fcece00e73c9675e6"],["/2024/07/10/风雪夜归人/index.html","cb480ba9cd05c677503c1c9e55600f03"],["/2024/07/12/与敌同行（1-1）/index.html","3563b3b8a32e4abdcf0ee15ba42dad03"],["/2024/07/12/与敌同行（1-2）/index.html","11b2bd5c049c907a765fc38753d9f512"],["/2024/07/12/与敌同行（1-3）/index.html","8723f907ef447e3a2a833226527d1bdf"],["/2024/07/12/与敌同行（1-4）/index.html","6d902d96735d7c980614373b6f1e8ee7"],["/2024/07/12/与敌同行（1-5）/index.html","475825de8f0e7e0523b029bfcdcc5ca6"],["/2024/07/12/与敌同行（1-6）/index.html","0f9466f62bb909b6a80d5dad985a1322"],["/2024/07/12/与敌同行（1-7）/index.html","3bb13fb68946c4d8e7a22fa8f1b1f0d5"],["/2024/07/12/与敌同行（1-8）/index.html","5f722b2901740deecf4cf587c77288f3"],["/2024/07/12/与敌同行（1-9）/index.html","696e977f38c1909efc9f5b0a094112fe"],["/2024/07/12/与敌同行（2-1）/index.html","db8c741d42fd29089459e38b960e883f"],["/2024/07/12/与敌同行（2-2）/index.html","48b650b9871cbb4ca710f420d85fdeda"],["/2024/07/12/孤独地狱（上）/index.html","6bc6620fb8f866e985475680ea8689e3"],["/2024/07/12/孤独地狱（下）/index.html","d69de0d1306327601d015f8c8fc51d02"],["/2024/07/12/玉生烟/index.html","670d8d8686ec2f9b940dba24205e1a7a"],["/2024/07/12/知更鸟颂歌（1）/index.html","51678e206456a0de206d278cf4047028"],["/2024/07/12/知更鸟颂歌（2）/index.html","9cc03b53689c8f2458df079a07864434"],["/2024/07/28/与敌同行（2-3）/index.html","613d1dd37e08f83f5d0f9996f98a2bd9"],["/2024/07/28/知更鸟颂歌（3）/index.html","0865ecd4f3d26f65200ccca0b6d39778"],["/2024/07/28/知更鸟颂歌（4）/index.html","05b5a498bf3a4507f91f405e85cd33b3"],["/2024/07/28/知更鸟颂歌（5）/index.html","b2c05ff5274c06099cbc959f9fe5905f"],["/2024/08/24/与敌同行（2-4）/index.html","5172918f577cc5afc671a3c166036c28"],["/2024/09/02/与敌同行（2-5）/index.html","9c1d74f2ecac5132e852ca4cbfecc964"],["/2024/09/02/与敌同行（2-6）/index.html","e989f072a4df2c05411db9ae072ca976"],["/2024/09/15/与敌同行（2-7）/index.html","5f0d6fa07880d40dbfe30c04aa4a9f78"],["/2024/10/03/失落的应许之地（1）/index.html","cc3451d654e02fbd5ba1ecd9fec72b95"],["/2024/10/27/与敌同行（2-8）/index.html","b87f34f1e711a07960a9f2dcc0bb5ede"],["/2024/11/09/失落的应许之地（2）/index.html","35ae3d38716103446b05b57dec111664"],["/2024/11/09/破戒/index.html","532aff96ac9640f038568df6ec14bd64"],["/2024/12/07/少年游（1）/index.html","7dad76cc68ed3037a04f44df09c2e883"],["/archives/2024/07/index.html","d0a1a1543dcb6fe20b0f77afe96240ce"],["/archives/2024/07/page/2/index.html","f10271f54d071a2f63311dda5f917c22"],["/archives/2024/07/page/3/index.html","a0078b76a891e3a34daa082b49f5b396"],["/archives/2024/07/page/4/index.html","5b67eb3ca250149583c5fad81b706d0a"],["/archives/2024/07/page/5/index.html","d28026f57458853ad4610badcccfe8d9"],["/archives/2024/07/page/6/index.html","9454bafabf35411c8c9b4401ee78f404"],["/archives/2024/08/index.html","586424b947044c318e0828f8ae49e766"],["/archives/2024/09/index.html","870c7f90e91751330dd3cb3964fa8a3c"],["/archives/2024/10/index.html","ec3a4c2125c53de0d0e2c15b53500da3"],["/archives/2024/11/index.html","7f7da6aed678d5a0535fedbf2e175ff0"],["/archives/2024/12/index.html","09122e096ef213fdabe886ac8ba1e638"],["/archives/2024/index.html","35ff20d47b0b0e1adc5f18797e32c8c8"],["/archives/2024/page/2/index.html","eafef72209931c457f060111b654e0c6"],["/archives/2024/page/3/index.html","73a7f6b34bce8a423f844b795841c205"],["/archives/2024/page/4/index.html","d2e071b790baab214034e0dd59ab728f"],["/archives/2024/page/5/index.html","fdc09d3e1a0ff90e61a965e965d636c6"],["/archives/2024/page/6/index.html","2e1afb365cfa2614657ec465d461ecaf"],["/archives/2024/page/7/index.html","4cbb8a92adc959980fe79b8c0eb2fbf9"],["/archives/2024/page/8/index.html","9b857e9837380c87b0aeb20ab1a0215f"],["/archives/index.html","2a84e0c244fe96c5107efa8c7d6b8761"],["/archives/page/2/index.html","5b0fc2bacb256614262bd35b4bcbe6a5"],["/archives/page/3/index.html","b57e78a2ab7cc0675d94383e302066b4"],["/archives/page/4/index.html","6d2e8ea53918adb338e29cfb5179901d"],["/archives/page/5/index.html","2902bc2075d187105da30abd746e95d9"],["/archives/page/6/index.html","6e1a5177326efe49a2090c516559bbe6"],["/archives/page/7/index.html","d34862ae8e4704d8e24dc43369f59963"],["/archives/page/8/index.html","4a9463315ef38b78e4a04c81e8c5ace2"],["/assets/别和数据聊感情.html","2087996b96ac7a8f35a120582e40bd86"],["/bundle.js","6f0360baa8e8e1f859c2e3a01705f1a2"],["/categories/index.html","8009b1a03b79f6d671e783eeead66f69"],["/categories/与敌同行（梨综）/index.html","5eb85bc7cc27f34c70d0b5fd82a9a74b"],["/categories/与敌同行（梨综）/page/2/index.html","a72da919f5b1592c1b9e148701b52b57"],["/categories/与敌同行（梨综）/page/3/index.html","8f289aea823e54399f23fa33b2bc4f8b"],["/categories/与敌同行（梨综）/page/4/index.html","291cb1bf1078b243d321b419e4b3425b"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","75fd909369e2da3884b70d8cd02f9711"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","97398dd62a1f3546c3c15136928528fd"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","118092fbbd017190d57e6b56704e07a3"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","3e4642d0a02112dcf74c75ff393b13c5"],["/categories/失落的应许之地/index.html","d78eb4ed6aea6eac063ecf4b5a1c9ca3"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","c10d441ec6afe6f0d940eba00f987c3d"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","9ac7783616d92a6f2f86918cdaf0076c"],["/categories/月照天山雪/index.html","fb807a1fae240b0790914d30c8b81bf7"],["/categories/月照天山雪/page/2/index.html","17c21fad20ee28b4367f602ebe02cfe8"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","7460855e60cadbc6b1cacd156f4e1067"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","612c48bd8b254811f16569a1c74f178e"],["/categories/狂飙，乱飙，发飙/index.html","f6dbc7e2aba0d7a204bc8f61add2f995"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","709487b0558c3a21e1bea6396a04833b"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","6a5506d776eba50132237ab5d9f4155c"],["/categories/知更鸟颂歌/index.html","e0f12a5fd09d678bb5c6a673b32f5d22"],["/categories/知更鸟颂歌/序曲/index.html","ac174563002925f6e25b3dcffd1ee51e"],["/categories/知更鸟颂歌/颂歌组曲/index.html","d46dc1954e8d8309f888a7a2705b0625"],["/categories/短篇/index.html","4920dfd94fd621a157492d35878682dc"],["/categories/短篇/同床异梦（指珊）/index.html","01e3eba6d96c3cab27d68050503b12d5"],["/categories/短篇/玉生烟/index.html","23b8960bc63cdea0e7a25eae32136148"],["/categories/短篇/破戒（马魁）/index.html","b650268a43bcb09421b56a21e7b1a875"],["/categories/终不似少年游/index.html","604fc74a117baac42880a92709e5c89c"],["/categories/终不似少年游/少年游（上）/index.html","3bdcad72245eb831b1555b446ec3889e"],["/categories/终不似少年游/风雪夜归人（忠直）/index.html","caed7604f16cf6383198b87c9f656c51"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","5c4ddc7fa456824e251c1031b2ee23b7"],["/css/noscript.css","8643e0f667d2af216cabb28166d08742"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","a71202ded5582a575b833a9fd42163ee"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","01847bd1e71c98a643e5373103f9a882"],["/page/3/index.html","0101b6241d973d731fb4596244b44105"],["/page/4/index.html","df5c5c36a970a12d7b3b9e1ddbbb3e19"],["/page/5/index.html","90cc2c601dbade47d7c3607a3900d669"],["/page/6/index.html","eeeb81a4db23deb2b6798c569aa7d43d"],["/page/7/index.html","982dd18b94559209d6ab37d88f186597"],["/page/8/index.html","8db1da0c6dab667a4d3ec554855b5096"],["/style.css","9a211b7b4f711874f9862c9acf11e63d"],["/sw-register.js","9498dddb386967621d0d0165f1082d81"],["/tags/index.html","a34156cc2dba447f0c82526203de5ee1"],["/tags/冰与火之歌/index.html","6cf5edc09dc880d36e4959770e7e1399"],["/tags/冰与火之歌/page/2/index.html","4b1af1d090ed4f175f38ec2aa0d22e6f"],["/tags/摸鱼之作/index.html","cea48e3c66796de31de0ec0b52cd5364"],["/tags/日常/index.html","2f3a9bab310419a137ab714b8602e01d"],["/tags/柠梨/index.html","165b66a9d770f5d7fd9c6cbda8735884"],["/tags/柠梨/page/2/index.html","7a03fcfcb6a54248e67bae947217782d"],["/tags/柠梨/page/3/index.html","479f369aac568470823dcb6e6ae608e4"],["/tags/柠梨/page/4/index.html","2875fc1b2ea041332daf0ea8c589cc99"],["/tags/柠梨/page/5/index.html","ece7da323995e0c32db446b4bd6de3c7"],["/tags/狂飙/index.html","bbe89badfbf9176476b8fa89d24055ba"],["/tags/镛武侠/index.html","ad18eebd674ab4805b1ab7d0cc9de958"]];
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
