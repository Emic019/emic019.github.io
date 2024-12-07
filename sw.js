/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","ffe804bf6c1fc924d26be6a29940c27d"],["/2024/07/08/月照天山雪（2）/index.html","186288e368ef196f66d211cbb918b9c1"],["/2024/07/08/阅读须知/index.html","2c86b9fa1f856f86bb5a9800588e6a27"],["/2024/07/09/同床异梦/index.html","c2cccff0194c83227930cf9b882519b0"],["/2024/07/09/月照天山雪（3）/index.html","94540cd6978574a8b51425babed2f48a"],["/2024/07/09/月照天山雪（4）/index.html","3ff1520e14ee47161a5f93a30b4bb3a2"],["/2024/07/09/月照天山雪（5）/index.html","e04ab2c60d7dd82b488a7900a147c0d4"],["/2024/07/10/ceshi/index.html","91b672e6cd384b2ef3cfd125afdaa71a"],["/2024/07/10/一千零一夜/index.html","e311625c07ec25b03cde7a88f9a93f98"],["/2024/07/10/风雪夜归人/index.html","63e6d58d71b9d34570413195307a3c39"],["/2024/07/12/与敌同行（1-1）/index.html","72b7e5ad1413a5967ad5414f79903112"],["/2024/07/12/与敌同行（1-2）/index.html","86f6a688b6774ece501f50900f604495"],["/2024/07/12/与敌同行（1-3）/index.html","c4924c41005571fbb7797326c7b62dac"],["/2024/07/12/与敌同行（1-4）/index.html","797992e1a7b415782dcd410ee8aecd0c"],["/2024/07/12/与敌同行（1-5）/index.html","462aa9c9c4084e402b38a5ace6852eef"],["/2024/07/12/与敌同行（1-6）/index.html","c120a8f463bdfa27f743d585b307e313"],["/2024/07/12/与敌同行（1-7）/index.html","453533c27322d66e650a0b017b642ef3"],["/2024/07/12/与敌同行（1-8）/index.html","deb1676195e92d5f3cc9e42e6851480c"],["/2024/07/12/与敌同行（1-9）/index.html","50470865d90d790a4964b736ef81cab9"],["/2024/07/12/与敌同行（2-1）/index.html","ac01d955c1b7290bf18d6c251ce49bbd"],["/2024/07/12/与敌同行（2-2）/index.html","8d050a3903495164cf7ecc3db52ec0b6"],["/2024/07/12/孤独地狱（上）/index.html","1acc6368e0dc3dbd13df6d5f65332d8d"],["/2024/07/12/孤独地狱（下）/index.html","b6eab9979a1df0d40490c55fdc237aa2"],["/2024/07/12/玉生烟/index.html","8b8c32cb0e0e78fadec285e24715bd1b"],["/2024/07/12/知更鸟颂歌（1）/index.html","ba737b1d9c7461d8f09d2676c5a1210a"],["/2024/07/12/知更鸟颂歌（2）/index.html","45f707dbb035f289cb04099e4d7635a3"],["/2024/07/28/与敌同行（2-3）/index.html","c7df11ef0ab6d48dd0927cd4209da9ed"],["/2024/07/28/知更鸟颂歌（3）/index.html","efd6528eb6a2eb779737bf83b5d3a87d"],["/2024/07/28/知更鸟颂歌（4）/index.html","7045c88b201309cee88f6c9292bbb817"],["/2024/07/28/知更鸟颂歌（5）/index.html","9d1a3c05c249564f94f124f6dab7a6ee"],["/2024/08/24/与敌同行（2-4）/index.html","da85d206443d76ba7f3800bf3f2c9bae"],["/2024/09/02/与敌同行（2-5）/index.html","3cca7217414e9bf2d206e53fc7a91b82"],["/2024/09/02/与敌同行（2-6）/index.html","0b63d43acf2a9fe4a33f65ef28e79646"],["/2024/09/15/与敌同行（2-7）/index.html","f90879dce75537fc4a60aedffe7cdf69"],["/2024/10/03/失落的应许之地（1）/index.html","fe7f755ad578a771fe20c504d568cb85"],["/2024/10/27/与敌同行（2-8）/index.html","b571006e99edbc215c4a8244f2bb1e96"],["/2024/11/09/失落的应许之地（2）/index.html","49610f537ebb8e5c27dc0cc55108cb0d"],["/2024/11/09/破戒/index.html","5e955fa38a332cbe2a74353aab57ce31"],["/2024/12/07/少年游（1）/index.html","7a4d9548aac1d97e118b2ebad677da9a"],["/archives/2024/07/index.html","a3716e8fc0e8cf412bd155ef7a4caad8"],["/archives/2024/07/page/2/index.html","8492a3369f9abb79346539f289b0f4fb"],["/archives/2024/07/page/3/index.html","6037db0f79f2e8524a97650bbc92051e"],["/archives/2024/07/page/4/index.html","892338f46c894ddfa018fa3af18a84bf"],["/archives/2024/07/page/5/index.html","a6aef335c113c91e5ef923c0995d3155"],["/archives/2024/07/page/6/index.html","bfdd88faa60161e0547e90a3dfdf32bd"],["/archives/2024/08/index.html","4126879c9e7e649e34fe30c4b0a1c586"],["/archives/2024/09/index.html","c7f423a118e972622e9524dc8c44d741"],["/archives/2024/10/index.html","567bd8aef5bca3d3b011924a53dc2171"],["/archives/2024/11/index.html","f9d87e99e3a1cf57f0a6f0fc12004c54"],["/archives/2024/12/index.html","f87c85ecca5c74a99c297fbd577dfbdd"],["/archives/2024/index.html","d0a27745b3919ffef3e568d095ad5742"],["/archives/2024/page/2/index.html","d67cebb27ade5c6e96be425f24f5ddbf"],["/archives/2024/page/3/index.html","3fb2fbf19c123b94b4fe5c28bb966ec7"],["/archives/2024/page/4/index.html","adedfe7d5508c47e6ea1e512ca1a1d9e"],["/archives/2024/page/5/index.html","45ffee5d830e1522cf981144ff5db125"],["/archives/2024/page/6/index.html","a4c62c4e21aeda56650bd61faae22887"],["/archives/2024/page/7/index.html","b7b9a8f0f1c2fc968412c217f263c1e8"],["/archives/2024/page/8/index.html","7d0caa5468346840a32f78c025570995"],["/archives/index.html","5da9c214989890568d1277d726061a5c"],["/archives/page/2/index.html","12e04c0348057173edf8ee7e0b61fb33"],["/archives/page/3/index.html","10520ccdbbfe5b428be7b6d9f3c6d5d7"],["/archives/page/4/index.html","af0acaa8de62b0f650860d08fe37cc66"],["/archives/page/5/index.html","525bc12eafe0aa939e9bc9a9a6aeccdd"],["/archives/page/6/index.html","0334154f56a2feb7eaf7402f61ed1d06"],["/archives/page/7/index.html","b22066e3b246e612d1f684d9d1e77d84"],["/archives/page/8/index.html","c1c3dd3b948b53648db862e2776f501c"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","d0ef59143226c8f2f3e17fee61c5e623"],["/categories/index.html","f5b7d714c0f1d5444470c67ae5409eda"],["/categories/与敌同行（梨综）/index.html","da0def14bbde040a7a403a27eae74274"],["/categories/与敌同行（梨综）/page/2/index.html","393911d383ee2c699ba63bf5a15a1828"],["/categories/与敌同行（梨综）/page/3/index.html","b0a4773ea15042ed8361a2bf6b2ee1dc"],["/categories/与敌同行（梨综）/page/4/index.html","731485dfefd7b37b67113011f3f89a2d"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","cbf98347a84b28773054b39782cf9f28"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","8c72ad6392456c22c5574d54466c0c9d"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","b74de470dcb8266c89af00bd6a912233"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","5175b8a3e56bace858058956de2a3cf0"],["/categories/失落的应许之地/index.html","97f6fb89c20aa599eaf6feb1b152ccf6"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","1ef38efd6c989ab3e359c53c0fc47e62"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","99a1866d188531b1d6b04b95853ca36e"],["/categories/月照天山雪/index.html","a3b8a7e089b09fe909242eee25e05627"],["/categories/月照天山雪/page/2/index.html","0c56c5648ffe1e5585bb404a97ff35db"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","dbd489bc9cd4f83fc879491407a6ea13"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","5c294bbd36636b2c26b24aeb4b69c1e9"],["/categories/狂飙，乱飙，发飙/index.html","d8b67513f4bd2b08c7d5a6738f91316c"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","4f6eadd2cecb2cabdc18bb44139a082b"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","e499b012a9d1d95c52896663dc4e6976"],["/categories/知更鸟颂歌/index.html","94d674d5eba1ab9c223a08a4f8e1e9c5"],["/categories/知更鸟颂歌/序曲/index.html","acb446b4264191ef7a60bc4157528e92"],["/categories/知更鸟颂歌/颂歌组曲/index.html","9a2915e2e7d34f5b9cda3fe84b5b522c"],["/categories/短篇/index.html","0d8d29beced6e8931eebecee7b54a3bb"],["/categories/短篇/同床异梦（指珊）/index.html","b5d66e607b2cea2896103f4bec1ae172"],["/categories/短篇/玉生烟/index.html","6dbfef3f818bc60d54b3c6b0ee08d947"],["/categories/短篇/破戒（马魁）/index.html","61f5fa54cdbff75944db18c8d17ffbe1"],["/categories/繁城之下/index.html","963004efe7557497d209a2ca4d1e2b3e"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","bc210fae2a757d49aca8c2a845bde390"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","239c5420a0a3a959687f2366e4c4b4ad"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","5c4ddc7fa456824e251c1031b2ee23b7"],["/css/noscript.css","8643e0f667d2af216cabb28166d08742"],["/css/sweetalert.css","71a8bade089ab1350cd828362d88618a"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","506415b911808c1e94a7cf4c26a7fca1"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","e4fd63fca3b4a379ceeea5a5e64ecab7"],["/page/3/index.html","77b427ccea617ebe12ec2fee1792bbe8"],["/page/4/index.html","0804785bd54219dd6fe7b6dff07a13b0"],["/page/5/index.html","0ea8023a0dbb1b9cdbb85f44628389d4"],["/page/6/index.html","9bcbd62210a1f85a9878222fb38d469d"],["/page/7/index.html","05f6a85a176142f93f7e6cb1b91cf919"],["/page/8/index.html","0aac2bc2981e35d0554b7e7f46e0ba6c"],["/style.css","5580b025877106799615679411bd0589"],["/sw-register.js","752f1ba245cff3ab8c13de37637c1785"],["/tags/index.html","83a7f132ef251d1e065f6ff0addd8f3f"],["/tags/冰与火之歌/index.html","234fe3547a6721452f7f492e0a938a7a"],["/tags/冰与火之歌/page/2/index.html","f01c593a1ef2ee0125dd76af7a73e7b6"],["/tags/摸鱼之作/index.html","2e50f8f28a0cf255781631d3ca97dcf0"],["/tags/日常/index.html","98cf0f683848fc400b5f4415dbafc462"],["/tags/柠梨/index.html","30bc67f68a8cca72e267fe3d35ffe27f"],["/tags/柠梨/page/2/index.html","7313b8892e2dac8f6288cebe3111041b"],["/tags/柠梨/page/3/index.html","8ea56b66618207836d8543ab03631709"],["/tags/柠梨/page/4/index.html","fba3eb15efa43661e8468ed761946627"],["/tags/柠梨/page/5/index.html","f670948c0896470c344efdaa72a7cd58"],["/tags/狂飙/index.html","d715a61518a9a1304f3a0c07232d345b"],["/tags/镛武侠/index.html","4a38a60f867f2d80e497b79184671977"]];
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
