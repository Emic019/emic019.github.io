/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","3d28b924971a309c291c6c5031786b6a"],["/2024/07/08/月照天山雪（2）/index.html","925c2b22642f25db02417f6cde4a258a"],["/2024/07/08/阅读须知/index.html","75689e27e99e4c0c4d7c6ddb2b8b3478"],["/2024/07/09/同床异梦/index.html","c4c33eaf0d789bbb791c2cd048922a43"],["/2024/07/09/月照天山雪（3）/index.html","9c8496700cafb70ff0f09e1faa5e4270"],["/2024/07/09/月照天山雪（4）/index.html","9cceed2449bdaceae9b5fa21a66c7397"],["/2024/07/09/月照天山雪（5）/index.html","ea57d3d13d71d2a6758a83cfe7b21fcf"],["/2024/07/10/ceshi/index.html","477eb1c266bb1c2eda69611e6d3ba82d"],["/2024/07/10/一千零一夜/index.html","0fef46ae3ce20769ca38ed0e02884256"],["/2024/07/10/风雪夜归人/index.html","c88a8567ac03643cdd360876d6738773"],["/2024/07/12/与敌同行（1-1）/index.html","534b29c0434e5412a9d05e01e4331a36"],["/2024/07/12/与敌同行（1-2）/index.html","742446c7e632fc2ff699049cfcb79f38"],["/2024/07/12/与敌同行（1-3）/index.html","e1511a94eef009ae51436787455846da"],["/2024/07/12/与敌同行（1-4）/index.html","5df3d08531c5dd50440f9a6626186bdf"],["/2024/07/12/与敌同行（1-5）/index.html","6c44acd37cd4ecad1f509bdf2fd2ab1f"],["/2024/07/12/与敌同行（1-6）/index.html","3b9af9eb11faaba782e49bde73e0df74"],["/2024/07/12/与敌同行（1-7）/index.html","e0748369abb501a2a44e5293c05e1114"],["/2024/07/12/与敌同行（1-8）/index.html","2719f0f3d17afa46da6ee47838447000"],["/2024/07/12/与敌同行（1-9）/index.html","7c43198aecfff02e6dbf9fca5db9ad30"],["/2024/07/12/与敌同行（2-1）/index.html","aa96bbc88c2d47a222ea392836529fd3"],["/2024/07/12/与敌同行（2-2）/index.html","8742f232342ee7dc52fc6f2d6d2c3171"],["/2024/07/12/孤独地狱（上）/index.html","e719c3a0103e3e20715b0b8b1afe191f"],["/2024/07/12/孤独地狱（下）/index.html","44bddd7eb0e42dcc978fccb86bd3af7a"],["/2024/07/12/玉生烟/index.html","5c3a29feedb07308a0099aabb0d2cff2"],["/2024/07/12/知更鸟颂歌（1）/index.html","73fb173e117081e41095c593b49c6a2f"],["/2024/07/12/知更鸟颂歌（2）/index.html","9fc1ff9fe8147fc46bad7290205fb182"],["/2024/07/28/与敌同行（2-3）/index.html","cbe60a1e008f804e75a396469c51d013"],["/2024/07/28/知更鸟颂歌（3）/index.html","16984509f2c4f115fa2289e816e2c129"],["/2024/07/28/知更鸟颂歌（4）/index.html","99e9ba9126c0cf31aba23aa1a2e6140e"],["/2024/07/28/知更鸟颂歌（5）/index.html","457ae4d3c2ae05f685d9495849069db4"],["/2024/08/24/与敌同行（2-4）/index.html","f72d35a0628bafe0b34d6c4ab60f0912"],["/2024/09/02/与敌同行（2-5）/index.html","2f0d37f71fa92bc4f1660a5136999d38"],["/2024/09/02/与敌同行（2-6）/index.html","4917409dbada371d15ffbbdf5dda5830"],["/2024/09/15/与敌同行（2-7）/index.html","42ab4f10cd81fdc1a1779ac4bfc7923d"],["/2024/10/03/失落的应许之地（1）/index.html","94ff9b7f0f7ca997030c4f4970669038"],["/2024/10/27/与敌同行（2-8）/index.html","f2bcd6292981ad1f41eb0b759028bc27"],["/2024/11/09/失落的应许之地（2）/index.html","3d09e0f77402575c8fe42ab788b3285a"],["/2024/11/09/破戒/index.html","12e07b1faf7b66e93aab22fff9ff6b9c"],["/2024/12/07/少年游（1）/index.html","36c09fa4c107fe34a0abbb44f438fbae"],["/archives/2024/07/index.html","2910306fa4bd8ff2eb0c6b3968019166"],["/archives/2024/07/page/2/index.html","1a29573518e53ab8b0bc734ca5ed8405"],["/archives/2024/07/page/3/index.html","b5da5f0de6876583599ebc2d53e7f04f"],["/archives/2024/07/page/4/index.html","5d1f31b5c0d0fd30eedf6c6861da0f93"],["/archives/2024/07/page/5/index.html","bd2247333e9adf58bb4f31e5b5a5e2e8"],["/archives/2024/07/page/6/index.html","1f11ab2759d7d5b0caa8035fd1117133"],["/archives/2024/08/index.html","be2ea03ecf7ce27d5fc9b1b24d58b995"],["/archives/2024/09/index.html","2e6c274f8d588637897d48cbc52d7d9e"],["/archives/2024/10/index.html","0c4d8cf64c140af1345c8d963efae5e8"],["/archives/2024/11/index.html","ffe4104eb33b11aeb7379eb245f9be11"],["/archives/2024/12/index.html","117f11f60ff11ad4d221eb3f92f63c4c"],["/archives/2024/index.html","54d22f3e4f9cde52e1bc834ba2d13837"],["/archives/2024/page/2/index.html","055c8ae79ae8ee98482b315589a7e983"],["/archives/2024/page/3/index.html","594b6b856c1d5276cda286742426e314"],["/archives/2024/page/4/index.html","4ca15b5f2823a3562e2ccea9a8188cec"],["/archives/2024/page/5/index.html","63eac480a0b67cd512cebb7045563866"],["/archives/2024/page/6/index.html","abe4814efd4667a33f60caa729da2f02"],["/archives/2024/page/7/index.html","8d6f3b9c40fa063ea07ca32f0b49edf2"],["/archives/2024/page/8/index.html","9e104f03baa2fb7c26ae28731678c28e"],["/archives/index.html","52095c593bdfa91175c4211c670e8e1e"],["/archives/page/2/index.html","e530986ed80388e2ff4e86baef9ec479"],["/archives/page/3/index.html","3e4bc63b7881bc2c52eaa14f06684535"],["/archives/page/4/index.html","c073a4048b63eadb2fbb3be34b206f5e"],["/archives/page/5/index.html","0abcbe8c35cd5dca0dde2a8010ac037f"],["/archives/page/6/index.html","0c7e282887f3e5e9e08011ae9751d313"],["/archives/page/7/index.html","db43b8370a5e2921f889f94ec99b1bfd"],["/archives/page/8/index.html","35f5b6ec3f7e4d6a67c0fb24ee8a2634"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","5c8629a301958480bb71999cc5678ae6"],["/categories/index.html","d46d00d7203bed34f86b7c9cf0ddb787"],["/categories/与敌同行（梨综）/index.html","078c79bf4f1bdcd2ef5e96533669991a"],["/categories/与敌同行（梨综）/page/2/index.html","0058db91a7afac17fe1ab9cbe30a0aaa"],["/categories/与敌同行（梨综）/page/3/index.html","80f5a69917c379ba223fa6771e1e3e18"],["/categories/与敌同行（梨综）/page/4/index.html","181d1635312ee6f2716a2c976360e244"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","7f511677786acdedd74ec097e7748962"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","af4df5073667a66946659c8b8b23ae59"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","893d9cd77f908a241645fcf3374319d1"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","d3e84a0c7bdd53591fedcee1af75947a"],["/categories/失落的应许之地/index.html","0bc519d27fa9789a1d5789637de262d8"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","2b90d30f5677a6709f8c37f47bbe77ba"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","a25e10e569e494589fc97f436cf97e29"],["/categories/月照天山雪/index.html","543d3f5e7e634ee51e240af269798fd4"],["/categories/月照天山雪/page/2/index.html","7e49eca81c2c29c0597fe3435a415df5"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","d369caec6cf28b0adc2f6eaebc963c3b"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","046ccebc3527e5e8438eeb584a8f965b"],["/categories/狂飙，乱飙，发飙/index.html","4e4250cfc5b27f9a328fd35a3b08823d"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","a70e009597b2feb9abda021fb0f41a00"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","a21bd46564c9162d482b912f32f165bf"],["/categories/知更鸟颂歌/index.html","0a6eca30a896c9ce865ca2301c9f0886"],["/categories/知更鸟颂歌/序曲/index.html","52410be4ad5ab74dcdae4c86fcb433f9"],["/categories/知更鸟颂歌/颂歌组曲/index.html","ce227e7afd5ea2d585c7b3a79cd5e841"],["/categories/短篇/index.html","422d6515be72d5c9195d03c58459c362"],["/categories/短篇/同床异梦（指珊）/index.html","c8cfc02a9fe00840d13bf0ce29375813"],["/categories/短篇/玉生烟/index.html","ec42fe0e008732dddb95b76102234c95"],["/categories/短篇/破戒（马魁）/index.html","8442c1370a0d1e7da0a39b384b0ee3ed"],["/categories/繁城之下/index.html","7b4e2cd971cf5afa27fe9346e9223f77"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","90f1bb27ef46b1bd3f4fb3826cb61d23"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","d33ee7ce049113cd4929720d2bb00064"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","5c4ddc7fa456824e251c1031b2ee23b7"],["/css/noscript.css","8643e0f667d2af216cabb28166d08742"],["/css/sweetalert.css","71a8bade089ab1350cd828362d88618a"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","7c959a5be9fb95ec16f483cf5a62a8be"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/welcome.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","47b3f5f44a52f82f6dff7a91c655adf2"],["/page/3/index.html","66b4858776e42217b2239dea221a9204"],["/page/4/index.html","382dc5668ca155d04d59a0c04a11a3cf"],["/page/5/index.html","761a49c9ece0f54e8169554160597f97"],["/page/6/index.html","17c1d7f01f296ee8c38160ea78a2ecce"],["/page/7/index.html","84f770409dbaa3d2f8f7c03bb657a94e"],["/page/8/index.html","b12fe8a9ef454902e720c87b94dda99f"],["/style.css","7cb1d7b58af3fca16887f28c82bff958"],["/sw-register.js","33cefa645e02ce77b6a81c4daad21b8b"],["/tags/index.html","ea0b2792cdf866aa2e14e69f5576690a"],["/tags/冰与火之歌/index.html","4bb5941efdc7e40658bf539e3596436b"],["/tags/冰与火之歌/page/2/index.html","432696fe030db7167bf102abd9594f70"],["/tags/摸鱼之作/index.html","58409069d9bbb3874cbb0783aab145c2"],["/tags/日常/index.html","7b11e2039298bd0cfc519cf10ebc19bf"],["/tags/柠梨/index.html","d831020a32001c2ceb43965db2655b95"],["/tags/柠梨/page/2/index.html","c33c5c682e595066420c797dbe0b3f77"],["/tags/柠梨/page/3/index.html","fab511acd3b50c13fbd9374323b718e9"],["/tags/柠梨/page/4/index.html","65e5c90ec58ddd707a0ee169990d65b8"],["/tags/柠梨/page/5/index.html","e1284ac4275fdb8f5de05d67b4420117"],["/tags/狂飙/index.html","f275b48361e8e3b0035f2925817bc0eb"],["/tags/镛武侠/index.html","2ac478faa16e2f326cae2ce4adf9ffa1"]];
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
