/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","dd973a640f4f193c3f222100f3673e38"],["/about/index.html","025c94b2e1e268f7456c31a1ff616d69"],["/archives/2024/07/index.html","1b71eb8b01474e2b06aa9daa1ea33eae"],["/archives/2024/07/page/2/index.html","9f9631466b88fbaf6af6e06c24070969"],["/archives/2024/07/page/3/index.html","74b4cadb2d619e610453b759cc83733b"],["/archives/2024/07/page/4/index.html","51aa164a0d31a7a57440cc7f52c93de1"],["/archives/2024/07/page/5/index.html","fd035ab107980a75975b7dab9388feea"],["/archives/2024/07/page/6/index.html","54020aa31578e293a20e57d1d0551e2b"],["/archives/2024/08/index.html","0a9afd80f9beca01208fd1a5ec609377"],["/archives/2024/09/index.html","9f1c431354c3984700c03c285e236c94"],["/archives/2024/10/index.html","bd8fe1693cba2cc3c0c57f0d08719788"],["/archives/2024/11/index.html","db3196d27d235d02cbc280dae5669083"],["/archives/2024/12/index.html","f4d01e1a66669bbb3fc3718e683cd83f"],["/archives/2024/index.html","4050b69935cfbcc183a39d9cd1b321f4"],["/archives/2024/page/2/index.html","3a5e14564c928d9ce6d372c5b4dad3b4"],["/archives/2024/page/3/index.html","854eba06550eff094e7f23de421e2299"],["/archives/2024/page/4/index.html","5e6d94a93c7c37a55f00c6ffc1da6857"],["/archives/2024/page/5/index.html","216efe741dc419f452e893cfcc9896d7"],["/archives/2024/page/6/index.html","2f9a8c61578d7489aec2904db0e0bb88"],["/archives/2024/page/7/index.html","405b55f9a2f0350c94066c5311baf558"],["/archives/2024/page/8/index.html","819a7ab51783c695ebe5cea9494efbed"],["/archives/2024/page/9/index.html","8af88cc01c22de177d5142c8f960fd52"],["/archives/index.html","74e7c58c2d395722988e8928e573bc19"],["/archives/page/2/index.html","8aaa1cdcb974df99b918224fbf86a169"],["/archives/page/3/index.html","091e41e2bad153f43cb632793cb6a40c"],["/archives/page/4/index.html","e1cdac83923661fc04ffedeaa16a82fb"],["/archives/page/5/index.html","6056ab4775a983141526bff866625780"],["/archives/page/6/index.html","a3dc3780775634d859b6da26a58a423d"],["/archives/page/7/index.html","6e46c4e62ecac6204dc8fee2f68234e4"],["/archives/page/8/index.html","3f57f30071c14e40a0e8298ee294eaca"],["/archives/page/9/index.html","c3c75da97004c6a6032892283d75ac70"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/其他/1.png","ec9fb4992df6a15e3ff859846f328d41"],["/assets/其他/3.jpg","be06d26a745a9a9996041fa01cdd1603"],["/assets/其他/4.jpg","21c68f2ac68d06ba3c8382317920b373"],["/assets/冰火/1.jpg","5d11951bc575fd9cca23d8e809e87727"],["/assets/冰火/10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/冰火/11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/冰火/12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/冰火/13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/冰火/14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/冰火/15.jpg","bb10d8889caaa772fcef5afc1311998c"],["/assets/冰火/16.jpg","bc3f8df7f9b0b2b0996c150b43122d20"],["/assets/冰火/17.jpg","ac8245c2522aa34a86a99ef6b6234eb8"],["/assets/冰火/2.jpg","568f924a8db5c61cc7a1ed60b483a088"],["/assets/冰火/3.jpg","cf93aebacaa007eca28ea6ae5ee4f5ca"],["/assets/冰火/4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/冰火/5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/冰火/6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/冰火/7.jpg","da39687e3dc6420f289fa4d34f691b1b"],["/assets/冰火/8.jpg","3231596eebac86ab2ed3f0ad6f8e817d"],["/assets/冰火/9.jpg","60414fb9fd49ea51a7426adf3536f238"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/assets/应许之地/1.jpg","386b34c194ee098e06e59baa29ce0cb9"],["/assets/应许之地/10.jpg","a13abeeca1b06e998487f7ea083f1168"],["/assets/应许之地/11.jpg","5c27c7ac237522ef009c3b4058933cdf"],["/assets/应许之地/12.jpg","b073469fb7d5410399f2ef7e01dcec6e"],["/assets/应许之地/13.jpg","a2485cc34286c2918e33a8392cf7d93c"],["/assets/应许之地/14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/应许之地/15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/应许之地/16.jpg","d7e182fcd04df710489c62120931a107"],["/assets/应许之地/2.jpg","409b484d8207f5bb6c5a4dda1b44a50b"],["/assets/应许之地/3.jpg","9a751c2d1c371aa78569f2755f114d17"],["/assets/应许之地/4.jpg","86a258c50aea229fc01317712c76126c"],["/assets/应许之地/5.jpg","358b27d5789b80e5f7365adf7bd1a806"],["/assets/应许之地/6.jpg","90d65f60764fc1dbdd76ac760bfe15a4"],["/assets/应许之地/7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/应许之地/8.jpg","5eb1bfa402b10735e6b80c6e84a5b6e9"],["/assets/应许之地/9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","ae4e1d30dbf673ab85c4821ad81d0367"],["/categories/index.html","d8acebf880d9a69bd7a1d12bc52aedff"],["/categories/与敌同行（梨综）/index.html","f0d7fa34ed936b42c86c446567cc6618"],["/categories/与敌同行（梨综）/page/2/index.html","6bb528d4cc763808285c18029fc502d1"],["/categories/与敌同行（梨综）/page/3/index.html","61277e91904da9c134660c891a2ae703"],["/categories/与敌同行（梨综）/page/4/index.html","898eb76c9f79353fd298b88f373f0415"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","ed5db88845d1993270bdbf07eeba9342"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","e6775bae19488147d892c01d3465eb4a"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","0be0d37408fea41b2e28a2265ca7e6ae"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","6c7c9b64ce6ef87abea516d814c23ad0"],["/categories/千千万万遍（指珊）/index.html","1804444fae4e31aff732b9a8db201a4c"],["/categories/千千万万遍（指珊）/page/2/index.html","8e5a3b2c6b3d6e444ac640ea4242c47f"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","973c89280202ebbed82e7b59a89b68d2"],["/categories/千千万万遍（指珊）/同床异梦/index.html","039c5eac6829512b236ff35ec9612256"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","8c3a209a0a44cc9417e23e88f8bba28f"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","62c048bf868b338d0110ca32e5e213db"],["/categories/失落的应许之地/index.html","39450ebb6cc463b3fa01583943c2367c"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","055dddc85e0218150bb9ff6bd4c29cdf"],["/categories/失落的应许之地/神明的游戏（刘正毅）/index.html","7076ddeace11b084c56a18970b72aafd"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","8e005768613d4a2c50b8e2b2b6e105e3"],["/categories/月照天山雪/index.html","d4cfa81222c67a3cc289e79724fffafc"],["/categories/月照天山雪/page/2/index.html","5796018e841f27238e96dd642c310929"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","e02249cf577fa8a0f7d0695a52f797ed"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","25f2dbd6860252a68ca18b20200366e7"],["/categories/狂飙，乱飙，发飙/index.html","4eeb58a02d4d7e4d686175cf92ed0349"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","fbd25355d6dd85e1286606f6278e2bb8"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","f2bec99273ab059a228c56192bc114a8"],["/categories/短篇/index.html","cfcdfe1f32c579db54a84fa8b4a79f14"],["/categories/短篇/玉生烟/index.html","0ac138e48bdf3fbd71f7513fa9a8766d"],["/categories/短篇/破戒（马魁）/index.html","4d5aa538734ebf45402808208a3a6ebb"],["/categories/繁城之下/index.html","e17813a640aab4856cfa3bb0f2e87ea1"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","4a33592000efd3fac24e3715a43ce859"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","baba1cfd85c8c96f38109c91f1e37368"],["/css/custom.css","28dfea6cb81cabc5059544782947d511"],["/css/gitalk.css","d27124780e5eea099c3f6dca224341f5"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/highlight-dark.css","c1c007e6a94bdcbd5cb1572aa148af6a"],["/css/highlight.css","8272b2f3867397dd34ee9ce3e29e4113"],["/css/main.css","c9253dc6f192d77fc74c3fcda488cc88"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/wallpaper01.jpg","3af061aeb66c8904f2b1d2a72d8c7617"],["/img/wallpaper02.jpg","2ccf4a5eab2c87108b569cc012ccada2"],["/img/wallpaper03.jpg","f8a085e5f26352591b7ff639eb5a0dac"],["/img/wallpaper04.jpg","4985254e30803a1c1d2cad0cb7c773ee"],["/index.html","8b36eeef23e2453cf29a4d63917d24de"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","64967f06b08bfdce36e95acc8c2ebd3b"],["/page/2/index.html","9f397ee849e8c700cff382d312681ea1"],["/page/3/index.html","968ed0dab27f7a61346aa26f1f1d8b6d"],["/page/4/index.html","1eab90a51861f3bc7f11acbedf30550e"],["/page/5/index.html","58dec30595a1c5802444348c8f3c3a1a"],["/page/6/index.html","7fc5a68fdbd59afee6bea236a442dc54"],["/page/7/index.html","cebf1613a847647111a88a03f27b1913"],["/page/8/index.html","23e00709312039f054aab02f751ec3df"],["/page/9/index.html","71351b866a1ea5d6a8e3a7caace29476"],["/posts/1083795192/index.html","be537da672d346a11a8f9bb44f910cc7"],["/posts/1099216759/index.html","7b639222b9d7253f300ae9ae13fe6439"],["/posts/1195093070/index.html","c7981f3936ea665ead47826af56ebb81"],["/posts/12506394/index.html","da3a43915a557c9605f89eab71330df3"],["/posts/1315809802/index.html","17502c60e9925ca44e0824142e50b907"],["/posts/1329165323/index.html","81469bd9b8c833424a5b3383afa762ed"],["/posts/1378666774/index.html","5febc0605b26c7be25fff01fa28a9edd"],["/posts/1407316490/index.html","cacd4cb6c1b33881b5f04a60fa7a63d0"],["/posts/1434824932/index.html","1bff2aba582fa9554d36bada4f3ec6e7"],["/posts/1445707477/index.html","e2fbc5cdc1299c7d47f3f5d7d7d04710"],["/posts/1465373355/index.html","07117b1b272428244331776f1f1363a5"],["/posts/1681850936/index.html","c44b52a9b424d4a45fb1944c3262343b"],["/posts/1710373156/index.html","83646d20069fb5fe65a0abcd177c29a6"],["/posts/1720998546/index.html","30366ffd7f79ea6d2bf655965f5285ea"],["/posts/173005120/index.html","caa76378123c00b9155ad6cd49c8948f"],["/posts/1988799958/index.html","7dc0ac1f1b1fb5713a2ed77fde7bd2e2"],["/posts/2192148155/index.html","4d7c9138080668f7ebb2abaf044b6561"],["/posts/2229302539/index.html","5f6728ac191ea590a6ef81966f2a4e71"],["/posts/2492968201/index.html","487d767ec00ff20242536e15c5a64924"],["/posts/2817232307/index.html","7116242f4f39af564cb8dfc1eb0936dd"],["/posts/2949714254/index.html","f3448b2e81f428ea27c1878d9e506dd1"],["/posts/3002318373/index.html","055879013dc2acd0f1dd47a85883870a"],["/posts/3076558902/index.html","ccff0d8744ca54d5d28029625fcf4a5e"],["/posts/3147359483/index.html","f3ab81b8aefd8a83764d08c2ea49955e"],["/posts/3191465731/index.html","0cc1c2c80eca9470f4e8869f403583bb"],["/posts/3459697331/index.html","1602f7610c2c3beb1f2b5885add54b97"],["/posts/3489395119/index.html","cdb555bd1ff7d7bbfe7782d2486e27a9"],["/posts/3525870963/index.html","ba394fd145651f54e38c9eea5b557967"],["/posts/3640780602/index.html","bba1105401461d8a2ab993ceb4f066c4"],["/posts/3699598685/index.html","fb0b8a92dd5f5ade9d467a0787eec150"],["/posts/3712900673/index.html","f1489088b10d260ed77140f92a06333b"],["/posts/3770599674/index.html","7a9a1cd09498706d6250fff34336516e"],["/posts/3935350387/index.html","c09cd88b3bcff173bba9f38304659f11"],["/posts/3948778863/index.html","d6ea0669d0875cf7867e29f977f7bb2f"],["/posts/403803703/index.html","ce71d3cfa4c2fa16c4739adfbe8f3197"],["/posts/4041933047/index.html","580f1cdfb1e323e6480d3a79852a576f"],["/posts/411074811/index.html","74da15e58507946be18a97b2c79025f1"],["/posts/4113963045/index.html","6fa5999995782a9fc7e3df41cf5e3297"],["/posts/4163174813/index.html","864708b7e0bbec29fe4b67bef05fbc8c"],["/posts/4192746113/index.html","174e5064d561b233b9327d95e6078b67"],["/posts/741067372/index.html","49f8066059b89951b6f6324a72f56e81"],["/posts/888354975/index.html","2b8c1619c7752956865cb46d0558c436"],["/style.css","214a5d0efac474d3c8926c5e938e454e"],["/sw-register.js","6611cb31849770ec8b25630df3c9aa21"],["/tags/index.html","79d6f688c3430a90dad0691c1d60ad66"],["/tags/冰与火之歌/index.html","0b56e7c614d117927a6cf2196c464233"],["/tags/冰与火之歌/page/2/index.html","4ac4d7e9fbf2c93cccab78508b27dd4f"],["/tags/摸鱼之作/index.html","5a10eaa9578e4066c648819f04db87cf"],["/tags/日常/index.html","955308375d2790314d7fde7a8b16d1e7"],["/tags/柠梨/index.html","40510356c6521c49aa5bab7390f378ed"],["/tags/柠梨/page/2/index.html","eddcad2d71131c926ac7b754c707f63a"],["/tags/柠梨/page/3/index.html","00e91cfcd30d6676b03b7b0231ec3bfa"],["/tags/柠梨/page/4/index.html","a3bf149d0aa14ff23549cfebb1d155f3"],["/tags/柠梨/page/5/index.html","9beb77f451cabd19eedf3af42d24c77c"],["/tags/狂飙/index.html","6c287579bcedc0d3659ae27faa8590e7"],["/tags/镛武侠/index.html","c6e7f2af2cce8292e26b91b99d1cfffb"]];
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
