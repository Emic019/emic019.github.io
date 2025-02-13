/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","99dbdfb1447d0d4650e02a3d607ad933"],["/about/index.html","4755272e98d80bdf15ab0940d8377973"],["/archives/2024/07/index.html","7501e655f2ea0feb6abde3163b32964c"],["/archives/2024/07/page/2/index.html","01183d278d4727210d60f51a6f87d262"],["/archives/2024/07/page/3/index.html","58823165ae3879f5c0326089494f5460"],["/archives/2024/07/page/4/index.html","a77c7a8e9cd8c55ec9e19a30f0f2ea6f"],["/archives/2024/07/page/5/index.html","350636e231e74b8b30d9fd06527aeb3a"],["/archives/2024/07/page/6/index.html","ab1e991bbe1137ca046b50627a8eeb58"],["/archives/2024/08/index.html","0d14ea51f3afdd47b50000590a502a8e"],["/archives/2024/09/index.html","8494308f37e519e6756f1a6de8d8e3f7"],["/archives/2024/10/index.html","acdbbf46b506ad38cf348e5d96d768a4"],["/archives/2024/11/index.html","c41fa06b306d755a603c5b72227a1851"],["/archives/2024/12/index.html","a57eb8ca1e2417144f2484ea6bb190c8"],["/archives/2024/index.html","64288edb1787f198b7b4811d1852026a"],["/archives/2024/page/2/index.html","8b6f0cd26d0cd59f8714beb402bc9534"],["/archives/2024/page/3/index.html","ec7fde5ce9bec50b0a72c14b28265491"],["/archives/2024/page/4/index.html","bf2dd0484f4a0f43c326f62adf861dae"],["/archives/2024/page/5/index.html","580758f1caf665b34b62f60dab153018"],["/archives/2024/page/6/index.html","66eeaf0526cce9ba2bc5b888bea1fd94"],["/archives/2024/page/7/index.html","99385450073b97a9b97ccb8d81143376"],["/archives/2024/page/8/index.html","b3303e708fa42af8ed0444bcfd1e5e7b"],["/archives/2024/page/9/index.html","05f6fb6d915f721319e0910a99bd8ae0"],["/archives/index.html","c37b8a3ea490b564f33af3896ac16a29"],["/archives/page/2/index.html","6790707bb71858d6284db8003aad7299"],["/archives/page/3/index.html","85814b2893d628b20eb7124bcebcdd53"],["/archives/page/4/index.html","4fca6c721a2a649973effb825a533509"],["/archives/page/5/index.html","40d47628155da3d9f5255cdd1262db4b"],["/archives/page/6/index.html","97e9d226414abcd035dd5e4af6999085"],["/archives/page/7/index.html","e68e8db0cd700fab02b6ecc7bd5e60e2"],["/archives/page/8/index.html","5884a52a3d890683db82110dd2024e73"],["/archives/page/9/index.html","2e23f3971da3ffe82d0e4c01b37eddf7"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/其他/4.jpg","21c68f2ac68d06ba3c8382317920b373"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bootstrap/css/bootstrap-grid.css","406d3d919b450d110b993f86d8e21c38"],["/bootstrap/css/bootstrap-grid.min.css","5d2e05b792fd25996b945a07ab7f8514"],["/bootstrap/css/bootstrap-reboot.css","f3c0ad460d9584dbdea307271df75422"],["/bootstrap/css/bootstrap-reboot.min.css","5b8269058564886b9052fd828dd28841"],["/bootstrap/css/bootstrap.css","bb46d20032f1e326a1ea08967bf2b19e"],["/bootstrap/css/bootstrap.min.css","d44328cee87c2b405213893ba35eaf78"],["/bootstrap/js/bootstrap.bundle.js","d38ecc48a4303501a23f4b3518c189ce"],["/bootstrap/js/bootstrap.bundle.min.js","90146f01d8a2028ed6f2c3d2fba4ac9b"],["/bootstrap/js/bootstrap.js","1b215257de24e3d5dd9e1774604349ed"],["/bootstrap/js/bootstrap.min.js","99e3544139e4735274587a831002ebae"],["/bundle.js","ae4e1d30dbf673ab85c4821ad81d0367"],["/categories/index.html","94b5879fb2b4a9c313acd1fa0be8ea1a"],["/categories/与敌同行（梨综）/index.html","a99de49e6de3e8097243610d4d78a9de"],["/categories/与敌同行（梨综）/page/2/index.html","dec30d007bae93a7cf7ed978325781c0"],["/categories/与敌同行（梨综）/page/3/index.html","1356783271dfd93179e370188440fc79"],["/categories/与敌同行（梨综）/page/4/index.html","50fec0357c53cc28314cfd4acb79c988"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","c527b9c6390d6b4b73c1abbdbcf5fc33"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","aaef6d292c2dcde71ffabce03aabbbef"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","51d023d366632333728e7bbc201f361a"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","e44be149dbb302740a3552cec3a0cba3"],["/categories/千千万万遍（指珊）/index.html","cef95ff2c87d16ab3ebbd5eda85ce994"],["/categories/千千万万遍（指珊）/page/2/index.html","825f864efc5134efd3c0a195db77fb2b"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","7e04264a54db1c98187664b21b40bd7e"],["/categories/千千万万遍（指珊）/同床异梦/index.html","e09020b913e1feedecb4614c64cf8e23"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","2f69218f7f7fa9df72f94a6bc9528b3a"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","7da51a1a5ef2202545b17ba17bd4824c"],["/categories/失落的应许之地/index.html","9fb66d02a1ed405fe3e63c4a7ca40f31"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","755bb503e43426fd68c7e995dec34763"],["/categories/失落的应许之地/神明的游戏（刘正毅）/index.html","a403b778a3c46d3582d74685e6f8ff92"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","0f2f7c542d1e4b2f0da43a51c7959402"],["/categories/月照天山雪/index.html","0969757c79f535ce755981b009ca18c6"],["/categories/月照天山雪/page/2/index.html","fff2fa3da74a2fa51871dc84bec2498b"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","7ef57ef57a58217e4b1ceb0ecc7bc5eb"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","ae5b5a4574d15ea96430b03e08b78812"],["/categories/狂飙，乱飙，发飙/index.html","749f828b34e14099d6ac817d13b07a82"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","36dc5479d7d87e3fcf73d3e685e9eea2"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","60276cf9d6df2d241d78ff182c5c8642"],["/categories/短篇/index.html","c56a9d5ff8b9755aa61cde47f3ab0d7b"],["/categories/短篇/玉生烟/index.html","2b2d0a296998156ca8b729aa614b39eb"],["/categories/短篇/破戒（马魁）/index.html","5acd6d98d791db73b6ffa36929988dd8"],["/categories/繁城之下/index.html","86ecb05acc4f3603eaeb30b695b1efdd"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","bdbd22419077a7c5318829303160890f"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","124a84ec277a8a849e1a84e6fea38ca5"],["/css/custom.css","f48638daf6790d603c206ef5c5985745"],["/css/gitalk.css","25286d4a1e5157e6b8907c96e663447e"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/highlight-dark.css","1faf535a6b0e9eb9b0733482125fef79"],["/css/highlight.css","c28851466fcf6075bcfa534514ad905f"],["/css/main.css","ee2b8576393925afeb6ad4f7980a28f9"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","60d082b0a0ace6963bc73de2ce4d117c"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","4e51798269f8fa7ddefc7a27c4760ef5"],["/page/2/index.html","00433c5ea9430574ad82da21a31471f8"],["/page/3/index.html","ffd4a5aa2bb7ef82f033e0562e9186fd"],["/page/4/index.html","4a401099e5ddf83c073c777ba208d647"],["/page/5/index.html","d2b45b1be5141b21c9a320b99abc43ce"],["/page/6/index.html","0678124b0b689dbaa7a3493d7d48082e"],["/page/7/index.html","e2bc9e7f4ec4aa89b9a788f1419b8fdf"],["/page/8/index.html","4e7b6349e584a124ae5d70283eb568a0"],["/page/9/index.html","543785cf5c050db0de294edb87dbc6ec"],["/posts/1083795192/index.html","a68144dcdaf34710210d7ed7a4162b4d"],["/posts/1099216759/index.html","80f458009f95f926d116a6bc9e4c16bd"],["/posts/1195093070/index.html","ee2bf58131e53ebf83acd7ec11534410"],["/posts/12506394/index.html","96c18ef89540ae9aa3a67ca0087ee7b8"],["/posts/1315809802/index.html","3d3a88ea88748e364407e018e0307a3b"],["/posts/1329165323/index.html","b684e45d9cf25971c41f5bf86cf886cb"],["/posts/1378666774/index.html","491ddc03344f8a27d3eea5dbe10c1b08"],["/posts/1407316490/index.html","b3f724a3b09bc2fcbec7d381809855da"],["/posts/1434824932/index.html","5411c451f89b1021722719709bcbd931"],["/posts/1445707477/index.html","bc394ed1903bdff53404b1dcaae12ab1"],["/posts/1465373355/index.html","aa2c09825a9dc691699796fe86c75ce1"],["/posts/1681850936/index.html","fb50e370dc0b9a42995337c5c399361a"],["/posts/1710373156/index.html","4d6a1de646234f6b57dafbc04d3cfe44"],["/posts/1720998546/index.html","f1caf38dc9886373fad3d3955fb7ca23"],["/posts/173005120/index.html","b050a802657e8fbc468e1238a43f0a58"],["/posts/1988799958/index.html","1e2d1715cf5383bda8da3f190b0e6084"],["/posts/2192148155/index.html","bbb3d8ca4cf530a662b7090c19b39b9e"],["/posts/2229302539/index.html","3febcb223cd8136eb13b336ae2004443"],["/posts/2492968201/index.html","8ad0acae4fff17dd314279274a17fedb"],["/posts/2817232307/index.html","cbe8993f8993b40b1192d94f7cce7de1"],["/posts/2949714254/index.html","92c3e67d643593dd0a521e4463df9ce4"],["/posts/3002318373/index.html","67819c85c6467501c5e4f4ee5b9bb7c8"],["/posts/3076558902/index.html","a984a4a482d1312164360e7ea0283f8f"],["/posts/3147359483/index.html","990e166d8ce6d434de40b5a3097299a6"],["/posts/3191465731/index.html","89de3f9307b4759336554ee40fbdfc9c"],["/posts/3459697331/index.html","5d5e8264d18e4cba297f5a929e938784"],["/posts/3489395119/index.html","d6383195373789a0e5b1ee562b9ecd27"],["/posts/3525870963/index.html","8b6545d015196f19c8807907fbdc186b"],["/posts/3640780602/index.html","395dbe5c5bff17ae4b309e671b3193b9"],["/posts/3699598685/index.html","6c8fc672c91cfe7d929e8bc5f971057e"],["/posts/3712900673/index.html","b6537ed2e275f71fc82f0aadd27f2e9b"],["/posts/3770599674/index.html","afcdb8f83ecfd6996701463a380b71ce"],["/posts/3935350387/index.html","aec2c2c31bf57cbbece2b8f1d73bba81"],["/posts/3948778863/index.html","8495b19e0d6fa0476ce763af1cc5e21e"],["/posts/403803703/index.html","e73ca1e719fd0bf37ed83b990ecc362d"],["/posts/4041933047/index.html","f750c92aeb22603888f2452134a017dc"],["/posts/411074811/index.html","d33c8a242969f81dd9b4106428cce5c1"],["/posts/4113963045/index.html","a8d3c0996a81a107249f9447b74b01f7"],["/posts/4163174813/index.html","6b4e2f61d1f9544a8325d889279d7a54"],["/posts/4192746113/index.html","2e400427f0eb4584751bf7d1a42d6bd3"],["/posts/741067372/index.html","c1baaa5a0fc4d6823643b9dddcb6f09a"],["/posts/888354975/index.html","b631c1b3fadd77d26b7982e801230144"],["/style.css","3338e773597c7f61a4fa3a5258465efc"],["/sw-register.js","99c865274f67cadae8f3dca32a957f93"],["/tags/index.html","8ff808c9687ee54a8dc9084aac100a06"],["/tags/冰与火之歌/index.html","ec9e7af626731c9e61b31b805bec7fd3"],["/tags/冰与火之歌/page/2/index.html","778a3c7db4fb10d60999d1a8ccc6c90b"],["/tags/摸鱼之作/index.html","9913e6065c30b1fc717377e22453319b"],["/tags/日常/index.html","e02b95db37172fed93e79a6c216ac775"],["/tags/柠梨/index.html","e61860c58d68cea000f456fa270be865"],["/tags/柠梨/page/2/index.html","8b754b01bf1c26b353d49258e4d7053c"],["/tags/柠梨/page/3/index.html","6630e7622889653eeb4278abddfbd46b"],["/tags/柠梨/page/4/index.html","d2eb8ae356ba3e02b6f35cd262997789"],["/tags/柠梨/page/5/index.html","871b914d22d4b00392f1a7f6146839b6"],["/tags/狂飙/index.html","5e4257b33f4cb19c368ca62ad90e9161"],["/tags/镛武侠/index.html","3d706da65c5e16fea49a6895c7f4cc1e"]];
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
