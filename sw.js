/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","26724d2cec165baf3c3b19b43d8dc100"],["/2024/07/08/月照天山雪（2）/index.html","6cdc7d8e09f17cfdc9aaa2a882a9f883"],["/2024/07/08/阅读须知/index.html","123f5b2fcd17824c313bbcab73ff5cdb"],["/2024/07/09/同床异梦/index.html","9b6814f1b164f589d391928608ae514b"],["/2024/07/09/月照天山雪（3）/index.html","347874aa5f0633eeb047ce19e07b2b37"],["/2024/07/09/月照天山雪（4）/index.html","6aeba66d38d509ab7e73436435e9394b"],["/2024/07/09/月照天山雪（5）/index.html","d68a09aec418795ff64ff64937ff3d18"],["/2024/07/10/ceshi/index.html","077aeb1805862ac7fa39f8c6097c27d7"],["/2024/07/10/一千零一夜/index.html","fc938be49c9ded0a7104507e6ea30ec1"],["/2024/07/10/风雪夜归人/index.html","0c272d03e3a1dc06ccc16ec5b66ba527"],["/2024/07/12/与敌同行（1-1）/index.html","0c73642cf9670a6cd22ef9b92f105cab"],["/2024/07/12/与敌同行（1-2）/index.html","d83ef53f460884400cc78f76d292ed73"],["/2024/07/12/与敌同行（1-3）/index.html","5cb711a758fb393d3e73a620b7e139b5"],["/2024/07/12/与敌同行（1-4）/index.html","196d2bbe67a319f31e8f3613c9feb378"],["/2024/07/12/与敌同行（1-5）/index.html","6733e110b689b90fef5c8b41f5e6b62c"],["/2024/07/12/与敌同行（1-6）/index.html","23df9591c88e486d976813a394e5f1b1"],["/2024/07/12/与敌同行（1-7）/index.html","4455ec731867a6f79b5a6ebff44b3200"],["/2024/07/12/与敌同行（1-8）/index.html","23140c046452d9be79745381e13369f1"],["/2024/07/12/与敌同行（1-9）/index.html","c2339d5b17edfeaba027de237265240e"],["/2024/07/12/与敌同行（2-1）/index.html","c1eeb280eb91f892f78c4c1c4c4e4b9a"],["/2024/07/12/与敌同行（2-2）/index.html","8aca5f004dc64fb21f01c31db4e1913f"],["/2024/07/12/孤独地狱（上）/index.html","45c0eee49f3bec1e696d18828b2b7ad9"],["/2024/07/12/孤独地狱（下）/index.html","18d70cce892673215cfc44bd514ee7d2"],["/2024/07/12/玉生烟/index.html","4480145e817044148672f121958b5302"],["/2024/07/12/知更鸟颂歌（1）/index.html","1df5cc9c6fa59e2e10370ee2f79204f0"],["/2024/07/12/知更鸟颂歌（2）/index.html","88fd9786189174e4a7669d8bb44d94c0"],["/2024/07/28/与敌同行（2-3）/index.html","2161e8d3f421322fd7b834b89439b1cd"],["/2024/07/28/知更鸟颂歌（3）/index.html","9120998bb2dc4d7a678a3ad8b3d0e0e9"],["/2024/07/28/知更鸟颂歌（4）/index.html","abb7f81e9e5969b109f5bd320dc7148c"],["/2024/07/28/知更鸟颂歌（5）/index.html","6324003314cb7be619e2354ab129a46e"],["/2024/08/24/与敌同行（2-4）/index.html","6b9dfcf3ab6ea0df809693f70f1ec7dd"],["/2024/09/02/与敌同行（2-5）/index.html","660cb84f917e57b77fd21a8383ed0e2c"],["/2024/09/02/与敌同行（2-6）/index.html","4c36ffe8ecbe87cd20becdee11355b1c"],["/2024/09/15/与敌同行（2-7）/index.html","99a83e60ee2724fc2e89c867027e0aa8"],["/2024/10/03/失落的应许之地（1）/index.html","e9039ad4bc17377a1a8d4b3fdb51b94c"],["/2024/10/27/与敌同行（2-8）/index.html","04949e8a8bf4fdf6fb15565c6104f72c"],["/2024/11/09/失落的应许之地（2）/index.html","70297920068ef5137cf0e2cc17d4583a"],["/2024/11/09/破戒/index.html","9b80f24657f7acb2e779767cbff778ef"],["/2024/12/07/少年游（1）/index.html","1e23c1130e213b98dc09e34ef88a0166"],["/archives/2024/07/index.html","f29705f00039333e54214361c9e101f9"],["/archives/2024/07/page/2/index.html","df2460092686a8eb6429889466daccc7"],["/archives/2024/07/page/3/index.html","59fd6601fb9facee31d90bf1a72c1f31"],["/archives/2024/07/page/4/index.html","a1f92bf976877d26ec853baaa11ff626"],["/archives/2024/07/page/5/index.html","8b25d02e939db9fe7bb31a0afdc8feee"],["/archives/2024/07/page/6/index.html","1b8d29f6e3d33ccc5a429eb3ea6bd7c0"],["/archives/2024/08/index.html","83a01e9bf59d5d0472a561495a00840c"],["/archives/2024/09/index.html","8e40535b7426985427f13e478636cd5f"],["/archives/2024/10/index.html","829fdf45203c8c6064ea51836c1d0500"],["/archives/2024/11/index.html","61dd155bd20e633795e41c159af19f76"],["/archives/2024/12/index.html","262ea477f4bf5438e6de225e66d446d7"],["/archives/2024/index.html","af51016a39226038e1f7406260eb9560"],["/archives/2024/page/2/index.html","174b65bccc3b9a4643f95ec6a17b9677"],["/archives/2024/page/3/index.html","e6767fc7cfabedaa43ec103fb8a0ffbd"],["/archives/2024/page/4/index.html","bc356e0d575163abdf864cfa32729955"],["/archives/2024/page/5/index.html","947083e8a98148933d5c44e2f5d19be4"],["/archives/2024/page/6/index.html","f297558a663766bd9733d7a4dff0d625"],["/archives/2024/page/7/index.html","2561d6ba4dd009d2a0903a6473c9d646"],["/archives/2024/page/8/index.html","bc1c4f895b835ffe1bc1d42106b2715f"],["/archives/index.html","17574948fd00c87e42ac0fbedad1d499"],["/archives/page/2/index.html","fbba2c117ad9b9db205ffdd279a94288"],["/archives/page/3/index.html","e203988c612053505cf42559a9a9b1f5"],["/archives/page/4/index.html","922ada554c559c5411320d215053d13b"],["/archives/page/5/index.html","7345be9d623bddfa1d099012d9bfc932"],["/archives/page/6/index.html","c12bd52e0fc72b0c8cd1985e1012a2b6"],["/archives/page/7/index.html","5e6626cb36ed9719f08f117960f54213"],["/archives/page/8/index.html","848bc1f28fc104b4d56741d25217a360"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","d0ef59143226c8f2f3e17fee61c5e623"],["/categories/index.html","3d8e4d2b9dc27a8a0abc6235e79b311a"],["/categories/与敌同行（梨综）/index.html","b4c33375c3265daeecd968c29daab541"],["/categories/与敌同行（梨综）/page/2/index.html","eb1be952560837536b01b5c37ee3a0c2"],["/categories/与敌同行（梨综）/page/3/index.html","1cf9a659f75dce87f502d662e8e1cd98"],["/categories/与敌同行（梨综）/page/4/index.html","58db7dc7e4ae7f13ec1166be31c2a384"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","8b125fead8c42407f44f2570c836bfbe"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","dc901fa31e0efb5bab244ea0a95b68a8"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","6373e1ca90f7995c63eec063b861baef"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","ae01bd060f78284710bf4eef85e417d1"],["/categories/失落的应许之地/index.html","4265bc77c4c15f532a5e4cfc2aed2b59"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","85bea0018f430c5f1dcd13ff95a72a4e"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","6bd1636e9e19fac15e685a5a606da9e9"],["/categories/月照天山雪/index.html","93869eb93ee0aaf99640c4004c760665"],["/categories/月照天山雪/page/2/index.html","9ffc762beb836e2b630d6aec75c4dd0c"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","432ca99b622f14e9baf34e48858a6a71"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","9816f243306ca2eb1a5912853a8429b8"],["/categories/狂飙，乱飙，发飙/index.html","f4805586b07b20eb947456c6b9fabe25"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","d202d9da4c814dcee6f6c7c6845ec076"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","85686f92f1329aa59df64ab512a819b0"],["/categories/知更鸟颂歌/index.html","2c69a2e0b51cb511d70cdb078831d94c"],["/categories/知更鸟颂歌/序曲/index.html","0e9c4c9a261bf0770c5fc77bf8507b06"],["/categories/知更鸟颂歌/颂歌组曲/index.html","2c8016c7bdd33339d279dba359d193ce"],["/categories/短篇/index.html","2e2fd28843048667b2c5f54499737483"],["/categories/短篇/同床异梦（指珊）/index.html","1f4932408fdd13602776fa18288a4f1a"],["/categories/短篇/玉生烟/index.html","dfc60d9d5a9c0d08167985e3dfa5b36d"],["/categories/短篇/破戒（马魁）/index.html","c877cb0ee4a8e49fd46f0a8bf4649ba0"],["/categories/繁城之下/index.html","d76994530a10900ee62461f6ef608ef8"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","c3fce99a1750a363d2b98bcf6791f8d1"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","690cb19bdd13e5d90f2ce45755d8fc75"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","5c4ddc7fa456824e251c1031b2ee23b7"],["/css/noscript.css","8643e0f667d2af216cabb28166d08742"],["/css/sweetalert.css","71a8bade089ab1350cd828362d88618a"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","58edea9d78e0f0613e4f0bab31a5ae1a"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/js/welcome.js","41b932893de5726ec7a241af7a924373"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","3c548eae4956db2e01fc2a73660cfc43"],["/page/3/index.html","097e7276bab337c1e0c00fee2c8c0362"],["/page/4/index.html","6f6daf62a7b01c960e051a9bd862b9a4"],["/page/5/index.html","e1ebef46c4cbf2d0e8a57e3bba79393f"],["/page/6/index.html","9df1aafb057a81e8b6778d8ac05c3d5d"],["/page/7/index.html","9164e8ef1b24ccb734472defdeca3761"],["/page/8/index.html","f51085fa25702f68ce6ca4637f6a9910"],["/style.css","8640be1ee6f88b7bacf990ada4a4a607"],["/sw-register.js","b30f30c9244c428217751c875abfc92d"],["/tags/index.html","525c0617d2d150c3d243f82bf6996a15"],["/tags/冰与火之歌/index.html","0f6ee5de6782a54f539a1e1f333bb3cc"],["/tags/冰与火之歌/page/2/index.html","c62ea789844f22df135fa38d1cfc47ad"],["/tags/摸鱼之作/index.html","08b4a68ac0d1b3e3ec1ae1b89845ce5b"],["/tags/日常/index.html","c3aa27c49b11e671e9fc5a03cc60ea0f"],["/tags/柠梨/index.html","313ea7f1b8e0a6d992b1f66cf0d539a8"],["/tags/柠梨/page/2/index.html","e5a3b6dda764031ad984a13ac23c4bcc"],["/tags/柠梨/page/3/index.html","1d8a103bc6de0aa2eee0db36e0e12995"],["/tags/柠梨/page/4/index.html","33e57a46361a2869a06631884ac2d522"],["/tags/柠梨/page/5/index.html","e13ca34ae959c007327679de2ad27f83"],["/tags/狂飙/index.html","4a9e53e81f75773cf06dac78838d46f1"],["/tags/镛武侠/index.html","bdcae22a2c8a9a4d5a0d9e2f84b6f186"]];
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
