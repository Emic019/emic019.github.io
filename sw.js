/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","f0edf176bd2fd5d2818b2efd58696731"],["/2024/07/08/月照天山雪（2）/index.html","a4f9f18c4b457c2c3837853118e16ec7"],["/2024/07/08/阅读须知/index.html","cb2c51e3ca172dd863e77d70e61bfa17"],["/2024/07/09/同床异梦/index.html","4b2a4b45a83fdae2823b82d826ff1253"],["/2024/07/09/月照天山雪（3）/index.html","7b4a788637f166db11df1367e91076e6"],["/2024/07/09/月照天山雪（4）/index.html","618bc0d3842d5194cb5f99dbf3efe7e4"],["/2024/07/09/月照天山雪（5）/index.html","13f5aebd7039ecb0e2eeb55ca55988fc"],["/2024/07/10/ceshi/index.html","4967e970b023c9059fa493ca382db427"],["/2024/07/10/一千零一夜/index.html","4877e5e2ba9d6b2d129f6da5423548dd"],["/2024/07/10/风雪夜归人/index.html","d95bca046dd865737e7ff794703a3627"],["/2024/07/12/与敌同行（1-1）/index.html","108de7c1147fe7211790096c89796e34"],["/2024/07/12/与敌同行（1-2）/index.html","6e1e0bf70ea88770bd463cdfff1475d8"],["/2024/07/12/与敌同行（1-3）/index.html","c046af62c590b9bb9272348f48f7a039"],["/2024/07/12/与敌同行（1-4）/index.html","307d41a0d4212dbed0248fa167a53840"],["/2024/07/12/与敌同行（1-5）/index.html","f023b2c697f58d929228e9ae6e73d65d"],["/2024/07/12/与敌同行（1-6）/index.html","9ad811ae372605fa140edc0aa0cf5350"],["/2024/07/12/与敌同行（1-7）/index.html","833ab57ae4a4a952a6be80eed0280412"],["/2024/07/12/与敌同行（1-8）/index.html","88de980923b24668297ce54c3ab6f9f0"],["/2024/07/12/与敌同行（1-9）/index.html","774777e08ca6fc81faf477516fb197ea"],["/2024/07/12/与敌同行（2-1）/index.html","ab1eea1412f8d2af632006e26f5c305e"],["/2024/07/12/与敌同行（2-2）/index.html","e6b793efbb87650fe97c019374637090"],["/2024/07/12/孤独地狱（上）/index.html","21a179120eea563b1d5d8acb89f9d789"],["/2024/07/12/孤独地狱（下）/index.html","95f6df555e41b13d1238973428f163bb"],["/2024/07/12/玉生烟/index.html","ce041f6740adc2a8337165afc108a15b"],["/2024/07/12/知更鸟颂歌（1）/index.html","0b5729c15fd3eac774ce95186769cb4e"],["/2024/07/12/知更鸟颂歌（2）/index.html","7175079b879a9afe0d8d00b5b9e731f7"],["/2024/07/28/与敌同行（2-3）/index.html","a433b3e932d9395f0ebbe6dc68058482"],["/2024/07/28/知更鸟颂歌（3）/index.html","3cd1d01ba848dd7a09d4cb2d633350be"],["/2024/07/28/知更鸟颂歌（4）/index.html","365e8c0f6baeff16ab8f773161d291a6"],["/2024/07/28/知更鸟颂歌（5）/index.html","32a3f67a44e1978b52290d7a9b9b00db"],["/2024/08/24/与敌同行（2-4）/index.html","b73523fb041077ff00c6f3779ff30a0e"],["/2024/09/02/与敌同行（2-5）/index.html","0617111d337b44391ffa9aef677047da"],["/2024/09/02/与敌同行（2-6）/index.html","aba66e36a5a51533feec1dac7d14e061"],["/2024/09/15/与敌同行（2-7）/index.html","b10c9579af0a322edd66887228acb263"],["/2024/10/03/失落的应许之地（1）/index.html","89adfee374e50fd318288ca37e9f4b2d"],["/2024/10/27/与敌同行（2-8）/index.html","364629152343a0666015d4753afd5b56"],["/2024/11/09/失落的应许之地（2）/index.html","67637a4d5a21b85dfb56d7c22ac88710"],["/2024/11/09/破戒/index.html","7b9c24ef9afcb618ae6c606056ed5633"],["/2024/12/07/少年游（1）/index.html","30a0c8c20df10e92481ee32e49ee295f"],["/archives/2024/07/index.html","90322aa80a7dbc1a7c6dac9bff261a7d"],["/archives/2024/07/page/2/index.html","c3c3b68f5e9c9704353ec5fa73260d3c"],["/archives/2024/07/page/3/index.html","9734f5f6bbcda6a58a696b1302609e87"],["/archives/2024/07/page/4/index.html","81ca4d0172ae8fb8d6be45c291f61ed9"],["/archives/2024/07/page/5/index.html","c71ec2ba751be2a878417f90336adc63"],["/archives/2024/07/page/6/index.html","d2ea7526fa80d67d92c03f532c3260dc"],["/archives/2024/08/index.html","aeb893c5a1c5314e390edc922f06e98d"],["/archives/2024/09/index.html","651074a18c4e774970f03a2f8471ebe9"],["/archives/2024/10/index.html","001687606b55018cc01f8fc84e1cf950"],["/archives/2024/11/index.html","adcc09a8f79581752eb25c4331eefe3e"],["/archives/2024/12/index.html","c12df9b740002cff7ecf77fb47a363f5"],["/archives/2024/index.html","7f5c82bce3992ff61dd5f98650d02faa"],["/archives/2024/page/2/index.html","906be1f093525f4c5eeda40ffd4602cc"],["/archives/2024/page/3/index.html","7f08b36462d92a1b893c274ff11c788e"],["/archives/2024/page/4/index.html","30945a6036cf36def2ba90c9be4c3a09"],["/archives/2024/page/5/index.html","77852e2e28bba24e9419d6481384a365"],["/archives/2024/page/6/index.html","f91b44b5db8d93baa54b96c1c9dc1428"],["/archives/2024/page/7/index.html","507efaa8d38ff6ff2478d0beda36d895"],["/archives/2024/page/8/index.html","d56e2a4892995b1f477199dc024fca34"],["/archives/index.html","63646cb628f37be7adb60a504fdc4186"],["/archives/page/2/index.html","06135aa05c7167d12ea2812e28dd29a8"],["/archives/page/3/index.html","5b99ed20985d0ccfc55bdabed484a246"],["/archives/page/4/index.html","10cc920f6eb8fcdebe03bf441b3c7200"],["/archives/page/5/index.html","07f644d3e964ab630aacba0b4316032c"],["/archives/page/6/index.html","1ef03e2a251df8cdc35d0ff29bf71bfe"],["/archives/page/7/index.html","4d4f9575789c4697ebe3dd8e0e75f419"],["/archives/page/8/index.html","3ededa32450cb251296a1814ac0d2a02"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","6f0360baa8e8e1f859c2e3a01705f1a2"],["/categories/index.html","7fce8a713c35e5f3c8a70db509898c90"],["/categories/与敌同行（梨综）/index.html","a6cc74dd886a6589c1a9a9b2691e2d3a"],["/categories/与敌同行（梨综）/page/2/index.html","bc197707755eda894b1ee2c54ee1d140"],["/categories/与敌同行（梨综）/page/3/index.html","76f97fa9d69d326b71b65e1ea9e6684e"],["/categories/与敌同行（梨综）/page/4/index.html","688ad9e3797371ff9a01027379e7c815"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","fc0a63f88ede16db914bb92a7e7e249d"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","3b4e798e269e7a4ba776e5dbfedb6ede"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","ed26b9ce100fe21387fe8952a5b3ba6f"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","cc229eaf35c04c103262550dc5880093"],["/categories/失落的应许之地/index.html","c60c03d5341ac22d54fa7f64230a6d1a"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","6430bd4042adaaefd1b84de16e9ffea8"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","892b77c750a2d4bb05ac5424ba1119da"],["/categories/月照天山雪/index.html","9ed3e2398a1f24137e56e942b7c73d08"],["/categories/月照天山雪/page/2/index.html","4e3b0bc7e17ba76dfac88b4f8075e683"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","288b0f07c418561ab5384f8c334b9f80"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","fc19e4bd9be9b7a10971e4889c0828cf"],["/categories/狂飙，乱飙，发飙/index.html","dd2576d991aac25a3fda8278a0224461"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","e05ca4bdfbce24c05d2314f6bc590e88"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","28169f033d0982bb8f9d9fd0421f70e2"],["/categories/知更鸟颂歌/index.html","dd73759da75f5f08909eb60a7d8bfbbf"],["/categories/知更鸟颂歌/序曲/index.html","4b465b539f5fe55af7279f5c97e278d3"],["/categories/知更鸟颂歌/颂歌组曲/index.html","ada838f693b9aaa3b23e23fa9fba4d37"],["/categories/短篇/index.html","eb834983d4dc4a838ef03f6bebcd2355"],["/categories/短篇/同床异梦（指珊）/index.html","fae61d476c78145fae2202eee49a6e53"],["/categories/短篇/玉生烟/index.html","741924b454c2e6878ffa61104bfdbf48"],["/categories/短篇/破戒（马魁）/index.html","f6cb966d08d82f751b5a57c3675c42b7"],["/categories/繁城之下/index.html","7e5010d26f0ec4b67a0edd994ce641cb"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","f4a17c319ce3162d9739e5fb86e0938a"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","3ee9159f7229d9b509c96d232e7a970a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","5c4ddc7fa456824e251c1031b2ee23b7"],["/css/noscript.css","8643e0f667d2af216cabb28166d08742"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","e8ba4fa54d2d70dd0574329f8ba2406e"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","9044ebacd58902cb9019c87f9831431a"],["/page/3/index.html","fa17efcaf082f5c0b2efc459745aff74"],["/page/4/index.html","15bc20f412d531a074649555c5f33f7f"],["/page/5/index.html","d87c77f9db4a40d47debbf89afde8686"],["/page/6/index.html","ba39ce70daa75777117dbc991559ec78"],["/page/7/index.html","79fc1f1d129dddc62aa396da30457ae7"],["/page/8/index.html","afcf3c9a98598422f5fae3350f5c3a51"],["/style.css","1166ff6767b064b15a440e513ee104e3"],["/sw-register.js","e86dd349f72156ad199680a1c3de0d9a"],["/tags/index.html","46780d5756f1603d43d11ece62773585"],["/tags/冰与火之歌/index.html","1f8fe19ca7124e256b42796c4992dbde"],["/tags/冰与火之歌/page/2/index.html","75813b5fb124b607930aaeb9739fa91a"],["/tags/摸鱼之作/index.html","b9b82dfeb2aab877b791ad3b4541dbdf"],["/tags/日常/index.html","92df656504aae442816d3b451fd9190b"],["/tags/柠梨/index.html","0b96c485658c901b51c9ab7c2c3efcea"],["/tags/柠梨/page/2/index.html","0fa842ee0f3f796d15437261f62c3ea6"],["/tags/柠梨/page/3/index.html","71b2cbd57c43da9fcee1161711c689c8"],["/tags/柠梨/page/4/index.html","5731a4ff2b39e650e0493a85fc3c3139"],["/tags/柠梨/page/5/index.html","5b374ebfdb975c2ff8ddcbaba649068a"],["/tags/狂飙/index.html","ecfeba9cc40bab4b59aca802ef30ef99"],["/tags/镛武侠/index.html","9579bca4a748a171224284984af66fe3"]];
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
