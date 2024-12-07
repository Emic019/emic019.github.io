/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/月照天山雪（1）/index.html","58d4a52a0db681c6cb0f4a7ba223cf27"],["/2024/07/08/月照天山雪（2）/index.html","a2778a20ec5a6960faa554a65af74c6a"],["/2024/07/08/阅读须知/index.html","74e49b7775bb87b508906ccd4f05d43e"],["/2024/07/09/同床异梦/index.html","afa9cb2091581cc758ece3996631e001"],["/2024/07/09/月照天山雪（3）/index.html","0e0867512ed8e5b1794753cbc20b5883"],["/2024/07/09/月照天山雪（4）/index.html","a3f2f86b4c52cd9c610302b7fcee7593"],["/2024/07/09/月照天山雪（5）/index.html","e88c5395c128e96cee720bc17520befe"],["/2024/07/10/ceshi/index.html","4a6474aecd7c3bc7997ce8ec4080750f"],["/2024/07/10/一千零一夜/index.html","083b265cb4168c69f8824edb878b5c86"],["/2024/07/10/风雪夜归人/index.html","8754476a746e2c86eae0c439bc88b29c"],["/2024/07/12/与敌同行（1-1）/index.html","222410feb2aca91765ee558801b0131e"],["/2024/07/12/与敌同行（1-2）/index.html","ba37ee514bca66e4290c993ac6b504d9"],["/2024/07/12/与敌同行（1-3）/index.html","8c05314e4858c0e05996bd09ef4cc31e"],["/2024/07/12/与敌同行（1-4）/index.html","1880fc07f8420bbe0ce47e7d420d43b6"],["/2024/07/12/与敌同行（1-5）/index.html","c85e124c6764d43703f677d7a70bcb53"],["/2024/07/12/与敌同行（1-6）/index.html","9beb041118ea6acd4d7f61f78875db81"],["/2024/07/12/与敌同行（1-7）/index.html","baa39eb2db3b2118b5ec269dd1049d95"],["/2024/07/12/与敌同行（1-8）/index.html","eba0d11af73789ff60d4e6ad02ca8678"],["/2024/07/12/与敌同行（1-9）/index.html","8f5c3e06c8323d69450fd1d2daca4fee"],["/2024/07/12/与敌同行（2-1）/index.html","95fc7bb8e792c7672a957232a771d493"],["/2024/07/12/与敌同行（2-2）/index.html","fd0001af02796715e29bc1f74d991c96"],["/2024/07/12/孤独地狱（上）/index.html","464f17e88417c8d3e5f0b426b2e132ac"],["/2024/07/12/孤独地狱（下）/index.html","dc47b9fe86ce1e784b2ac6007fa5f4c1"],["/2024/07/12/玉生烟/index.html","6f09a7ffb7220d6a9fdfa79d34f15cae"],["/2024/07/12/知更鸟颂歌（1）/index.html","3298938c107409b59c9ba2134e0ae669"],["/2024/07/12/知更鸟颂歌（2）/index.html","c87c84f274e4c154625eaea8bc146687"],["/2024/07/28/与敌同行（2-3）/index.html","6c4f41dea628e896f8c5f98424348d92"],["/2024/07/28/知更鸟颂歌（3）/index.html","d4e2225310b4739a745214cc44a0f25a"],["/2024/07/28/知更鸟颂歌（4）/index.html","92eb788cc5dd23a988275d9c8e495a12"],["/2024/07/28/知更鸟颂歌（5）/index.html","aff3904830a46b40a8d645f8ac190506"],["/2024/08/24/与敌同行（2-4）/index.html","f562c4d9214d93d7a9b8041068cc8573"],["/2024/09/02/与敌同行（2-5）/index.html","0c92d849fd7d3ed954a6f68eb793fec4"],["/2024/09/02/与敌同行（2-6）/index.html","afe9f99d0f4ada6ea3cb3eb8ceadfa46"],["/2024/09/15/与敌同行（2-7）/index.html","21fba8951c16b42ca896c3bb1aaf1b5c"],["/2024/10/03/失落的应许之地（1）/index.html","b92c9cc26c18f6ea27be2b7392fbf96a"],["/2024/10/27/与敌同行（2-8）/index.html","27ed59f2d803729b8e9c8f0213387810"],["/2024/11/09/失落的应许之地（2）/index.html","0f431772731f4e725524895f2a138539"],["/2024/11/09/破戒/index.html","220376d0066b8fa19d90a60181365ba1"],["/2024/12/07/少年游（1）/index.html","1c1615f8b2ab403215bdfb7fef1d863b"],["/archives/2024/07/index.html","0e2d6ece61492335bf16e10e32a44db0"],["/archives/2024/07/page/2/index.html","d7d42b9c7760a7a2fbe844449e358485"],["/archives/2024/07/page/3/index.html","1434935f3ec37cda693523a7936a397a"],["/archives/2024/07/page/4/index.html","875339f6a36962c33681177c140b6440"],["/archives/2024/07/page/5/index.html","83565946eb288b42a012dad49d264a86"],["/archives/2024/07/page/6/index.html","ab7ba405c04dc91191be6de7fa3c44c0"],["/archives/2024/08/index.html","8e7d0e1d53156a9e065c577659e56481"],["/archives/2024/09/index.html","2c6145b1c3abfd60c38608c9a19349e9"],["/archives/2024/10/index.html","31f50f2ed2d6c3724db31705a9e687ae"],["/archives/2024/11/index.html","49df1820f882e85f518726743129e469"],["/archives/2024/12/index.html","cc70882d7b3ca4d454b14d1e709b23cf"],["/archives/2024/index.html","72f464a9b63e121bd99e547560ea6da4"],["/archives/2024/page/2/index.html","fee860fb2cca5ea24261112076a21c91"],["/archives/2024/page/3/index.html","e147fb23865f7ce4406086347cf17acb"],["/archives/2024/page/4/index.html","b6fd0b5629e19a9ff56107d40aca972f"],["/archives/2024/page/5/index.html","eba713b44b1c8157b78d5eb55e1f7766"],["/archives/2024/page/6/index.html","9c9cb2f17dc8619d932be27d67e39b36"],["/archives/2024/page/7/index.html","9c1de8e4aba5e9ff478c0aed160f3b49"],["/archives/2024/page/8/index.html","55dbc4f1fbb2bfac9cdd1dbff8c04d68"],["/archives/index.html","0e03a3d623a3e38d3c233a38f874360d"],["/archives/page/2/index.html","00c02b84759fa7fe081a59078776fe39"],["/archives/page/3/index.html","c036a40e2781ba87de4272e6e376b0b3"],["/archives/page/4/index.html","0fdac8fb708fe48717690068e7c3eb15"],["/archives/page/5/index.html","caf0ac2d6f76ff26be9a10278e179e64"],["/archives/page/6/index.html","e125a7c92c1b119c7cc80c7d3574ff6e"],["/archives/page/7/index.html","1e6d74e4a7d9ac0a45447ea22df2ec84"],["/archives/page/8/index.html","b6762bbce84843d27af8d84c44da297a"],["/assets/别和数据聊感情.html","73669e13410fb9de169e352ee225fd81"],["/bundle.js","6f0360baa8e8e1f859c2e3a01705f1a2"],["/categories/index.html","b738469c07fc359fe5ecdd5714d5721b"],["/categories/与敌同行（梨综）/index.html","f53ae9d3f0889d4b8c7b5efd7dfeef76"],["/categories/与敌同行（梨综）/page/2/index.html","2aa2a7758b4b6550cf15f2813f61a962"],["/categories/与敌同行（梨综）/page/3/index.html","3819d1245a6d7169f7b1a229125b3be8"],["/categories/与敌同行（梨综）/page/4/index.html","000a2671f8350072f1081c2eaef4e163"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","92cc86d571651dcd2c31948ba8f35c26"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","31a03823332558d80e32e0bb752c0051"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","dee39df1dfa76d45369b6c9ce32ad194"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","1e290532d6df68a3710ff37483b176d3"],["/categories/失落的应许之地/index.html","a6d6d9ec0311503df7540f8ad1410ed8"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","3a6f2b1061a363f2ae72e4343fa1af74"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","736d0d1b28cfaa71a169e06e3802e156"],["/categories/月照天山雪/index.html","6c0ea675bb7d5237e0c8805c43d51625"],["/categories/月照天山雪/page/2/index.html","4a2875576d5f98d05c0da350e2e780e1"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","d62f71a7642983c9750b6b97510d8a2a"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","7db9e9b2366760e8d5242ed17224178d"],["/categories/狂飙，乱飙，发飙/index.html","3b857c74f687f17e1b6531bfcfad959b"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","60a8f0136d46d313e222fb7483b1bfcc"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","147a95d319b118939fe56f6987b78ecd"],["/categories/知更鸟颂歌/index.html","9d525125bda0038d7081af794066d99a"],["/categories/知更鸟颂歌/序曲/index.html","ee597330226c5bfdc2a8ef45a8e217e1"],["/categories/知更鸟颂歌/颂歌组曲/index.html","82bb6883ac2e23ef3bc98c6e774ab386"],["/categories/短篇/index.html","9d37bdbcc42231f2c9bca68d20673ec7"],["/categories/短篇/同床异梦（指珊）/index.html","cb51ea4db46d5160dd29cffd87d9984f"],["/categories/短篇/玉生烟/index.html","26b3b0be039e981dfa77803ac2337346"],["/categories/短篇/破戒（马魁）/index.html","035f933ac574c53b130b6cf88f0c68f0"],["/categories/繁城之下/index.html","0967748ad10856c6b5d6ebac274d29c6"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","7c3577a6fbe4dc9c40dfebeda697a188"],["/categories/终不似少年游/index.html","81f53c6d03d831c6439715f624b74fb3"],["/categories/终不似少年游/少年游（上）/index.html","081f493e16f74d62e0c731419780efcb"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","5c4ddc7fa456824e251c1031b2ee23b7"],["/css/noscript.css","8643e0f667d2af216cabb28166d08742"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/images/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/images/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/images/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","38ab41090076f3e8248f45873af2295a"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/category.js","296ac593e8dccef14ece448416be3383"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","72ab9e537db623cb9aff0363888c6e07"],["/js/next-boot.js","9c8fd5d43294fa7845ffb736074f4461"],["/js/pjax.js","a22012de7c9dc4da10656a9670ad5331"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","b1d5198deb9c2e0f673543edc95e0c26"],["/js/third-party/search/local-search.js","4a9c4fb009f90bd987207300aa52fda5"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","9b80f1516561b619b62c21527426f66f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","df0932f6a7b2acd1bab599b27ecea396"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","470c6eb1e1f67c0e2cf97ae8299a93f1"],["/page/3/index.html","a4a17205886f31127a1abdf27bbafd56"],["/page/4/index.html","9d18c7665dcda9c8866a368e5b69e236"],["/page/5/index.html","447654700e7ed37427b58177763704a2"],["/page/6/index.html","344b288c1c475b1604e1a8e9e0fdd02c"],["/page/7/index.html","98e1b00ac2619a281df9fe366de49364"],["/page/8/index.html","6b13703bd4c851576adf6762df2163b3"],["/style.css","1764b42c85d28c3831f2cc71791dec92"],["/sw-register.js","a609e06c984363b73b2f5afcf02d7e7c"],["/tags/index.html","53564921777241c86510a68d8c61217f"],["/tags/冰与火之歌/index.html","f963341a4066ddb24fb516779c8bd3ec"],["/tags/冰与火之歌/page/2/index.html","e0a7f6fbd64e85f03a996b4702ecbc44"],["/tags/摸鱼之作/index.html","7f562ab0dce3b8c05709f5e63c064864"],["/tags/日常/index.html","e64e84615a15e4c6a2d3b7cc9c79df3a"],["/tags/柠梨/index.html","adcb70356e5298c8f5c28e4bbf217b34"],["/tags/柠梨/page/2/index.html","8ddb8036a4f7931cd0b6f5166416a399"],["/tags/柠梨/page/3/index.html","e4c54e42704001aab4ba25fbd5c4e9c7"],["/tags/柠梨/page/4/index.html","744f7c4cbe631b82a228c06d6afaf3af"],["/tags/柠梨/page/5/index.html","25461a3bd607b9e0fe17ff80d3be0946"],["/tags/狂飙/index.html","df129d74f2da11e9cca5346539fcfb9e"],["/tags/镛武侠/index.html","168ea490fb7c49148035af4f9b67141c"]];
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
