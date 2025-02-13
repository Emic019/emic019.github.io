/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e87bb62ae19e0908aaf500133b79df41"],["/about/index.html","1bf6c214b68824f9e65efe862da46654"],["/archives/2024/07/index.html","0effce8ede4c5f015ac47183e506f965"],["/archives/2024/07/page/2/index.html","ae72f7ef55aba5656157f1ee54e3ab30"],["/archives/2024/07/page/3/index.html","8362f169af6fc923792019f10f96973c"],["/archives/2024/07/page/4/index.html","f3338545d5a4a6db132c6e4d2e06a093"],["/archives/2024/07/page/5/index.html","d8d64df3ca3957930922c7865e5ca748"],["/archives/2024/07/page/6/index.html","b83969ae5254fc23693a3eba6c187cc8"],["/archives/2024/08/index.html","c7a95dcf1d4da7181c645311cb00d083"],["/archives/2024/09/index.html","9e42d29a9990176786a6821e38741889"],["/archives/2024/10/index.html","dc7dd608c562eeff05bdeb073efd2bde"],["/archives/2024/11/index.html","19b5f20faa5f88239c89c0383f246ebb"],["/archives/2024/12/index.html","b0785a4d93f60c9453e9ff74db9e9bc4"],["/archives/2024/index.html","0d01613873464bb045a5f65da32b0aaf"],["/archives/2024/page/2/index.html","2c31c82a9100254c38b454c8c068d08d"],["/archives/2024/page/3/index.html","7cf70c7db69e2cf5b38a94837f54b8d3"],["/archives/2024/page/4/index.html","45ad880c16be31228b7eaafd23d81560"],["/archives/2024/page/5/index.html","761a83ffde623eb48c82cd77766bc935"],["/archives/2024/page/6/index.html","d7a7e1a1a4ed0fd4f0741b5983507584"],["/archives/2024/page/7/index.html","151f8c0d60a5a85600c9fe0e4bc43cde"],["/archives/2024/page/8/index.html","5ad5f045d09891df2b9570bf757ada83"],["/archives/2024/page/9/index.html","62e6f19a5888b4e045e3226ba756ef62"],["/archives/index.html","273d2b2af8e7562e952ffa41c30371ec"],["/archives/page/2/index.html","bdc73c3340adf0faf321bf6c4e853011"],["/archives/page/3/index.html","ff5553f3a939e71557649c24f479b78b"],["/archives/page/4/index.html","6c04c27175053c8e35649dc78e345e76"],["/archives/page/5/index.html","0a0946465942572a97c0b2a4b2f1726f"],["/archives/page/6/index.html","2861f44128a84e417cfbdc7a56334054"],["/archives/page/7/index.html","912c62d80ba4887e11d46a8d1cf1ffe6"],["/archives/page/8/index.html","1e5b5dbd1454591e858e85775a736a29"],["/archives/page/9/index.html","2c878e2d2c6c37936f38ac7c20cf7adf"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/其他/4.jpg","21c68f2ac68d06ba3c8382317920b373"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bundle.js","ae4e1d30dbf673ab85c4821ad81d0367"],["/categories/index.html","6639989a2567ef985c8353316a839bc2"],["/categories/与敌同行（梨综）/index.html","853918eceaa604fba08e43e3f14e91a4"],["/categories/与敌同行（梨综）/page/2/index.html","737b50b66d34de6a4b052b7e493fbd5e"],["/categories/与敌同行（梨综）/page/3/index.html","b29cbfd31914c4f4accdc9bd29ef9c03"],["/categories/与敌同行（梨综）/page/4/index.html","f8f01438d1327fbc87a0429fdfd327f0"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","cd7644aba74d60e1df75b86672dc6545"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","7be5dcde990ed335cac3537286c065ef"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","cad6c61926784901605436c2b8032c93"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","6d721ddada5657da4356b0c3933876da"],["/categories/千千万万遍（指珊）/index.html","c1b7a5c95c0bb6c9d658c6d8ba5cedb3"],["/categories/千千万万遍（指珊）/page/2/index.html","6aa2f8e86d10ff70ce6eea665454e0e0"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","84fc4a7e1889f0b504c20b712a356b98"],["/categories/千千万万遍（指珊）/同床异梦/index.html","2c8969baac9f6a730b76803ab29f7379"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","403b7d9f5952873613a9b1fa5e0aa607"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","2917c6fa2300d8ab4dd193dc88b98f61"],["/categories/失落的应许之地/index.html","924d1893a476ac7a9db99a8dd2b11ce7"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","bd39477becd179640a1c52c857823bdc"],["/categories/失落的应许之地/神明的游戏（刘正毅）/index.html","77ed28c07c5de71a18486d03a40a2ea4"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","ab979bcaa7359628c0cc53a5bdcece5e"],["/categories/月照天山雪/index.html","a4be02268865b0a10858b2951c46fb5d"],["/categories/月照天山雪/page/2/index.html","bdf8b9aa6c35ba08b7b25aba1f856ef9"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","bcd6459993c9948304fd02197a50769b"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","31cec0c7d6d2fc77a57f13ca75335442"],["/categories/狂飙，乱飙，发飙/index.html","d9cea6aa14e77b97c359800f81c35670"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","4d18ca060b079d62aa493740168599d6"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","89af4c6851fc3bb7965552056aaf9ec2"],["/categories/短篇/index.html","1a26a1004a52b3c24f32f131587e4bd5"],["/categories/短篇/玉生烟/index.html","3746dc631d56766dc311600b1f1f3d53"],["/categories/短篇/破戒（马魁）/index.html","fbbd7965e3071001bd4a08b49970f5f8"],["/categories/繁城之下/index.html","89b542dfc02b967f5eb2f714de475f5a"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","04702d3745f66ce05f19a53c7caa46be"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","fabe60245ef9ebba7973e1e556b0c495"],["/css/custom.css","1e8f8b32aaa78b4fb2d44105d34dce9b"],["/css/gitalk.css","3027964c408a6e13446f97d0e5aafd12"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/highlight-dark.css","9060703405eb0d17ba7ef4bbbb97d75d"],["/css/highlight.css","d20f1a155b63175deac89b49e0657979"],["/css/main.css","6729da8250812d6eb95a38f2867e3394"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","53cd088d3620c5affe7b9494b820b902"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","9862b7bd3e5ca78ec69f5cad035186f2"],["/page/2/index.html","0a19a867a9654c5bfdf37433bb67bd0f"],["/page/3/index.html","13b1d1e3867343a1aa9641d65015bcb5"],["/page/4/index.html","d24b87f631d26614864a667eb3e0d6f9"],["/page/5/index.html","1a2ba9ce6c175611a189f6be0696e93c"],["/page/6/index.html","2ba2fbec99e7b870181b640f416a8c41"],["/page/7/index.html","79802ed53ef2c4eb07c9d916813d22e4"],["/page/8/index.html","5cc023943aafceb8afb2b35ab8149290"],["/page/9/index.html","9622c0238fea13281964187a0b06b30d"],["/posts/1083795192/index.html","598adc48560efc7d52035c8cbe797bfa"],["/posts/1099216759/index.html","0c69808a2837ebfbfbe7610eaad0469a"],["/posts/1195093070/index.html","80e291c273a84d3724ec732a82af121e"],["/posts/12506394/index.html","5d0a13364072a9425d15eae821a47abd"],["/posts/1315809802/index.html","8e91e9982572dcbad032ef21602ead0c"],["/posts/1329165323/index.html","2243dc37a62e8a0f5593044077918843"],["/posts/1378666774/index.html","66c510fe0b624d66c22bf42e0cf25d59"],["/posts/1407316490/index.html","8f410b063d9819b79520fc2022b3aaaa"],["/posts/1434824932/index.html","4274e1243c1f9a22af20eced45124168"],["/posts/1445707477/index.html","da6c055652b691bc809c0dd80846e856"],["/posts/1465373355/index.html","5daea8e83a861917e853e775c5ca58e5"],["/posts/1681850936/index.html","40d4fbffdbf2209829c794fd5e897d5e"],["/posts/1710373156/index.html","c1fd00c25ba47b3b54d0211a4997d669"],["/posts/1720998546/index.html","87c0628310cb4af3078e665363923185"],["/posts/173005120/index.html","10164624b41e6b9709706d56e64c05ed"],["/posts/1988799958/index.html","d2923b27f2dd1fdab9ddc5fdd1a3620b"],["/posts/2192148155/index.html","5bc2a4b976a5bf0533e006c68e6cd634"],["/posts/2229302539/index.html","92aff21176a01e01418cc6bdb7cc0c00"],["/posts/2492968201/index.html","7f2224c6ec9c20fc65733e0e30eb8969"],["/posts/2817232307/index.html","227b4538bb1d2993cbaba32f398e5548"],["/posts/2949714254/index.html","1c8c9f1ced96618b433febb4158a750f"],["/posts/3002318373/index.html","26d5bc4538d2f18339248a8c3a1cb59d"],["/posts/3076558902/index.html","f1ccb105fade4c32f6695334ecded98a"],["/posts/3147359483/index.html","ca5cbe2990de71b72aeb29a80adca97c"],["/posts/3191465731/index.html","c3dc0a4129a63947972c032b2969e877"],["/posts/3459697331/index.html","d479b9dc36907d723219208d4d6cca70"],["/posts/3489395119/index.html","ca66c1529488e97adf11a0463bc753f0"],["/posts/3525870963/index.html","733a556b98be570ed9e9eb57155d2e22"],["/posts/3640780602/index.html","6f166466f0e1ee663ed1857097c52983"],["/posts/3699598685/index.html","37d73319e14e1d077d0d263f169b8bed"],["/posts/3712900673/index.html","a59ad98edde37e29c28528bcdb4d4516"],["/posts/3770599674/index.html","01395fb4aed1f199b2d83573e98b6ea4"],["/posts/3935350387/index.html","f59e1426fcdd7e38942ed7180c576027"],["/posts/3948778863/index.html","c347a9693b29fd473e869ba819cd7797"],["/posts/403803703/index.html","e88c6a28a20e7287ed1659160be4bbf1"],["/posts/4041933047/index.html","8ff8bfee9a7046fa7f2ed336f9d3ef78"],["/posts/411074811/index.html","d6a44409ac234fc811baeb9c4804d7fe"],["/posts/4113963045/index.html","94d9bff79aad953bc53e440f321a4e40"],["/posts/4163174813/index.html","aaee7b6c724cd164b78228f423e43a4f"],["/posts/4192746113/index.html","6c27fc5219dfb9b80f2d8bfe2b3c3bcc"],["/posts/741067372/index.html","8587e5ddf6f1a9919f2ad54f73686b9c"],["/posts/888354975/index.html","76bb3042932ac65e4705f2524a61c630"],["/style.css","e53ef27855ca44ae1cfc69cce2476464"],["/sw-register.js","5c609580b832efe138deaccaf2c6bb9c"],["/tags/index.html","a2f72236b77628450c67e46d428f16e7"],["/tags/冰与火之歌/index.html","64ea8aa81dca6ded304733bced63e030"],["/tags/冰与火之歌/page/2/index.html","9c066b48ef0e955de81fc2893b688502"],["/tags/摸鱼之作/index.html","04dc48fec67dfab48f1a95aa180a862f"],["/tags/日常/index.html","8355ce31211b2a51076044d45cbb7117"],["/tags/柠梨/index.html","3de8ddbe422673502886c1156f1ed35a"],["/tags/柠梨/page/2/index.html","2e0a6ff13d6732a4da7db3ee8d0120cf"],["/tags/柠梨/page/3/index.html","a509848577a435f8d43a21bb6328b400"],["/tags/柠梨/page/4/index.html","3b22dfb04e6976c9f1ea83721bd7dba7"],["/tags/柠梨/page/5/index.html","a536aae51aa8f279fd4a59b23a5e09c5"],["/tags/狂飙/index.html","28e87dcbb873565c8c54ff5c6cc06a3d"],["/tags/镛武侠/index.html","d00b4ad7d145b98dd329ede112a2b2d1"]];
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
