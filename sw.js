/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","cd0437fa199e4744468f8a0f7b1caf97"],["/2024/07/08/月照天山雪（2）/index.html","26464b36d7e662246a07bfb732462d9c"],["/2024/07/08/阅读须知/index.html","11536046f22a627f4fabe9092182a8d9"],["/2024/07/09/同床异梦/index.html","8c88c55ffafd34a9112301316108a822"],["/2024/07/09/月照天山雪（3）/index.html","8f6b7ee66517c330bbf2cbc9bb36ec5b"],["/2024/07/09/月照天山雪（4）/index.html","6fda7ff858bec5d0a0e938a080755a55"],["/2024/07/09/月照天山雪（5）/index.html","fbf3373870b0c9c2267fc0bed2c68e3a"],["/2024/07/10/ceshi/index.html","1dc45d339100bee919fdc9344510a849"],["/2024/07/10/一千零一夜/index.html","af89a2dd9c8d9bf0350470a68d74e7b0"],["/2024/07/10/风雪夜归人/index.html","b3a595f0dd722e81d025002dbfda5e34"],["/2024/07/12/与敌同行（1-1）/index.html","f5dfa3406798e532b224807857afe7c3"],["/2024/07/12/与敌同行（1-2）/index.html","a2f51656446e03558d7142f871993f3b"],["/2024/07/12/与敌同行（1-3）/index.html","93ae16394f5023bba4c1bcc75612ee3a"],["/2024/07/12/与敌同行（1-4）/index.html","a673e689f6130264785818e653cb672a"],["/2024/07/12/与敌同行（1-5）/index.html","9a652c69ad669b460f9f1464b153639d"],["/2024/07/12/与敌同行（1-6）/index.html","3437df300cb5cad62125042d47c10308"],["/2024/07/12/与敌同行（1-7）/index.html","a5c317c182226278efa1a71f53e2ca32"],["/2024/07/12/与敌同行（1-8）/index.html","d60cf6f6edd017e669baaf5fecbef728"],["/2024/07/12/与敌同行（1-9）/index.html","5ba42976f2ffb8a77ac1e9fdd6c6f17d"],["/2024/07/12/与敌同行（2-1）/index.html","0c9fa019525752bb80e31f8c8839f1e0"],["/2024/07/12/与敌同行（2-2）/index.html","5c4b9c11ce93b4b067a4d756115cc522"],["/2024/07/12/孤独地狱（上）/index.html","4fcc854ee7632825ae32c5e0a77dd4fd"],["/2024/07/12/孤独地狱（下）/index.html","8c785b1dd9251ef6345d73699e8d5ef6"],["/2024/07/12/玉生烟/index.html","86e2135cb7f2f1f9c65bcca04fe62a44"],["/2024/07/12/知更鸟颂歌（1）/index.html","78f23de1fd10b535b4a6464f226b63d2"],["/2024/07/12/知更鸟颂歌（2）/index.html","fc55fffd8f84f9814bf022d338887353"],["/2024/07/28/与敌同行（2-3）/index.html","1ba6b3728dabdc0bb50c29f5b669623a"],["/2024/07/28/知更鸟颂歌（3）/index.html","9b403efd0116008eff0fd291b38eed79"],["/2024/07/28/知更鸟颂歌（4）/index.html","968baac0b306b87d3ab75f92d392d812"],["/2024/07/28/知更鸟颂歌（5）/index.html","a676ecea9e0d9bcc4ece856982371bf0"],["/2024/08/24/与敌同行（2-4）/index.html","ad71d6a59bdb22d8768ccc9df347e600"],["/2024/09/02/与敌同行（2-5）/index.html","36f72f255883c9940cfc2555e0d188e2"],["/2024/09/02/与敌同行（2-6）/index.html","b9da72c9dd607c5d787f551d28ecf5e9"],["/2024/09/15/与敌同行（2-7）/index.html","c4f5f355d15946dd57a245e68e1aba96"],["/2024/10/03/失落的应许之地（1）/index.html","c16f7e0e0630ec0c4d6466c1ece9c543"],["/2024/10/27/与敌同行（2-8）/index.html","5722296b44abbed450dc9b7914104db8"],["/2024/11/09/失落的应许之地（2）/index.html","d58cdd81e4889f60a14ab117b5b7d3dc"],["/2024/11/09/破戒/index.html","da1987b3f7d9cc6009b6514aa59ee7c2"],["/archives/2024/07/index.html","b24abf711839eb650a1be0c0853d69de"],["/archives/2024/07/page/2/index.html","b8430ebe1a2bc57c668c1392310c2eb5"],["/archives/2024/07/page/3/index.html","7f724be1ef71434d8c7114587b9b7039"],["/archives/2024/07/page/4/index.html","d718e73a32488ea94f6c622c66c1a4d8"],["/archives/2024/07/page/5/index.html","b4aded90ea07b5bfddb2041bd12cad78"],["/archives/2024/07/page/6/index.html","a13d4ea1a01ba0c82321af938968c220"],["/archives/2024/08/index.html","fa09022492c00a48fa3326629266dc8e"],["/archives/2024/09/index.html","7b126272d88995da9b529dbc5c6119a1"],["/archives/2024/10/index.html","bc61a254c5bad78e1b87449603a0cd60"],["/archives/2024/11/index.html","5dc92639883ac57e95945d68575cad16"],["/archives/2024/index.html","5f834b1e4707ed87f9e4f9cd6c7d5be4"],["/archives/2024/page/2/index.html","6c7baca846c620bf4b5f01a5eba6bc43"],["/archives/2024/page/3/index.html","0825da895f95d8f0b424b15fe7eec652"],["/archives/2024/page/4/index.html","7982b5fc14893a7164c4d71e54d07dc5"],["/archives/2024/page/5/index.html","b5b89255b380b53455829ddab7130538"],["/archives/2024/page/6/index.html","e6f743ff53801c593562a681d6c65476"],["/archives/2024/page/7/index.html","ccd4ea7f2970f6adf79644cb459cf30c"],["/archives/2024/page/8/index.html","7cad23bf376ce297d3c72bb0fdb0c9a4"],["/archives/index.html","0b6a8e54dc65e3644c79b6c0cbcd52e5"],["/archives/page/2/index.html","72764ee2ce7351c05cfd872352325ede"],["/archives/page/3/index.html","ae30e292bc25562e1d28eb3fb0b1dd0e"],["/archives/page/4/index.html","41118c50bab02d4d7dcac58903d673fa"],["/archives/page/5/index.html","e97cd5e29cbc541e695fda8d16fe8274"],["/archives/page/6/index.html","dedc3c2e8ac7e5fbd937bc1c0e417d5a"],["/archives/page/7/index.html","1b0c0eca45c6b9288d1c5e5d6a9a34cf"],["/archives/page/8/index.html","74bc9ee4c4b607c905e25361c63e59e1"],["/assets/别和数据聊感情.html","2087996b96ac7a8f35a120582e40bd86"],["/bundle.js","6f0360baa8e8e1f859c2e3a01705f1a2"],["/categories/index.html","064f5e70fb8bc3d44836141cbe365873"],["/categories/与敌同行（梨综）/index.html","e55f07b787f8afee6d8510a202b1b2ee"],["/categories/与敌同行（梨综）/page/2/index.html","468604d87b8ef772ef5f8e8c4ee81cd7"],["/categories/与敌同行（梨综）/page/3/index.html","75a87e8ff17391e7d51657faea25274d"],["/categories/与敌同行（梨综）/page/4/index.html","e394767b2161a6f76c60c20509bd0219"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","d2d023c4643da41f801bebc62f9d9cef"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","0184926c3015c952e1e4ab90eb85d597"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","7d120c494169ad545f9215ca6e1dc309"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","5d67b0c395b906f11d63c01e49b253d4"],["/categories/失落的应许之地/index.html","03829637b923a9d7cb7e083746795198"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","43e4f4c27af1bd63839337c7db88ed63"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","84d91d4356c22fc497671c8510bae0cf"],["/categories/月照天山雪/index.html","fee6182c60a00eb14242c98e31cf208e"],["/categories/月照天山雪/page/2/index.html","65167fd18ce43eefb393de49c915693d"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","d8e40f97cc862b0706ba378d9fb92409"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","d81450213bc5ca0919ca72cbab6f91a8"],["/categories/狂飙，乱飙，发飙/index.html","521b34266fc43100969ee05a04684aeb"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","bc483fa590563b1618cce750a0cbcb11"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","b579f986c4baaa695897295f8b305733"],["/categories/知更鸟颂歌/index.html","a968154623269798fe8e586378a14bf7"],["/categories/知更鸟颂歌/序曲/index.html","f80b6c0fd0a5ef9db724a65fc5756ec7"],["/categories/知更鸟颂歌/颂歌组曲/index.html","b63270d9becd790f60eedf0939f58160"],["/categories/短篇/index.html","5b7c9a9fcae4b4014de992781548fbde"],["/categories/短篇/同床异梦（指珊）/index.html","3f61ca466fdfe3c07f5dacdb03f474f8"],["/categories/短篇/玉生烟/index.html","cc2e82e79dfadcbed4d79740000b6c73"],["/categories/短篇/破戒（马魁）/index.html","3332f13fb617a2f880f73ad7682d7f6a"],["/categories/短篇/风雪夜归人（陆直）/index.html","b06e75fd3f0cd1d97d19da14179185a3"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","0fd943e7cbb809f04a113c2b3683a053"],["/css/noscript.css","f0d6538eef354c08017ce5a977aef97f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","f16072822d8f0b5131122c230296ed58"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","214d6fc6fd3c31239373c55769d35222"],["/page/3/index.html","c3b98ef84362a2a78d4d5766fef2f9cf"],["/page/4/index.html","ad7d3637e1811b016bb3e5607dc0e319"],["/page/5/index.html","19b965a8ed255ee74271cd8f0a48f1cc"],["/page/6/index.html","60de60adbb24b55d3b1dc62d588011ca"],["/page/7/index.html","5c45469189f774cd03269d18041dc3d5"],["/page/8/index.html","6d80fbf475c5f442ecf822b0a000ec03"],["/style.css","9d169cbf441a4aa03506b0165313f1dd"],["/sw-register.js","9db0741a8876e529a6627a13360d8f59"],["/tags/index.html","ce068b67cafc8ed70ae95dd03194cf75"],["/tags/冰与火之歌/index.html","77c2112436e7294c2628ddaa98c6cca8"],["/tags/冰与火之歌/page/2/index.html","8f451f79fd94de44975151a2ee93dfa8"],["/tags/摸鱼之作/index.html","5805e86302ce50dae30eddedcddaf717"],["/tags/日常/index.html","7632edbc9c113b0d8323ef427a50be47"],["/tags/柠梨/index.html","92da695b5e6a1f3d633e2864747a7884"],["/tags/柠梨/page/2/index.html","d183197bc2d527873b49eff361d08565"],["/tags/柠梨/page/3/index.html","c590147942644e4052172cb71a269abb"],["/tags/柠梨/page/4/index.html","781396b2d1ea87841b843e3074654101"],["/tags/狂飙/index.html","94ad15888055f7453aeaa06248730acb"],["/tags/镛武侠/index.html","767505878f614dda13474015495e446f"]];
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
