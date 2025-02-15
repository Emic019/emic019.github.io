/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5b3292dd321570c4b69d713184beea26"],["/about/index.html","9c9ab7a6636ed5d50b3888a25d3fe76f"],["/archives/2024/07/index.html","9052f864d2a1c4af511f3798b63e44dc"],["/archives/2024/07/page/2/index.html","7d83a85da2ce889b907c4cc0e32df063"],["/archives/2024/07/page/3/index.html","c8a2ac53817f345a88626c7eae6ba6ec"],["/archives/2024/07/page/4/index.html","77d85fd655a207ea690cc5b91bf19ad4"],["/archives/2024/07/page/5/index.html","8edf0a89f6e3ed5f0364f3c71d33f2ca"],["/archives/2024/07/page/6/index.html","d4eb411fadf432bf050cad1a9d948eba"],["/archives/2024/08/index.html","9c092d9fbb1b9048b6c21bef978eed21"],["/archives/2024/09/index.html","6b0565ba1dd7a68d6a575a8f0f3cbc67"],["/archives/2024/10/index.html","dc57785b856aaa6f57fef48c673bbeee"],["/archives/2024/11/index.html","714adf348511e67ca6482eb979a289fd"],["/archives/2024/12/index.html","be5dfd07888728f4c0e930e595b301cd"],["/archives/2024/index.html","8865c1b31909637fa262d156a33c70a9"],["/archives/2024/page/2/index.html","98dfd98666fd16e71bf2acf5e8a98db6"],["/archives/2024/page/3/index.html","615d00b1a62ff8d0ce337d9f070c04fc"],["/archives/2024/page/4/index.html","5e57fb80317b6ff9f0b41fc6713c27f9"],["/archives/2024/page/5/index.html","d77767229683b442496ad5ef73bfbd6b"],["/archives/2024/page/6/index.html","9933b805f36868f668290fd603caf352"],["/archives/2024/page/7/index.html","44907e5150d0381cd9b41132ff59fdd7"],["/archives/2024/page/8/index.html","3094bd471cda0325ffad1d78b1705466"],["/archives/2024/page/9/index.html","889833132e686310ebc5c8070a9b8b85"],["/archives/index.html","28386d45329c083cd33aad64e31f9037"],["/archives/page/2/index.html","ad235786e275d277ffcc5c6ff4181443"],["/archives/page/3/index.html","5353f1b758a17705e165bcf222c7b75e"],["/archives/page/4/index.html","3650e0803a4b7f5f4b9377d957cde16b"],["/archives/page/5/index.html","709e1d25e01bd91f82700bbd487e9548"],["/archives/page/6/index.html","5d701afeedabd196cbe6a69a570d1789"],["/archives/page/7/index.html","44de5ee349c800f64f3c3b22aa6f675b"],["/archives/page/8/index.html","183d37106ba50b8711a6819742c07533"],["/archives/page/9/index.html","4c4a9aba1ef48869aa24b09cfb71daf7"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/其他/4.jpg","21c68f2ac68d06ba3c8382317920b373"],["/assets/别和数据聊感情.html","b1dc149919290d7e80eaa0295a363397"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","7e6c1131a9f358505ec35dc696aaf041"],["/categories/与敌同行（梨综）/index.html","8a19a45dcc9246d8ab0a87664e27a900"],["/categories/与敌同行（梨综）/page/2/index.html","aea58a7924481f643a064bdf21886b82"],["/categories/与敌同行（梨综）/page/3/index.html","c1d71d2ba141c0efa8d8a205006a9118"],["/categories/与敌同行（梨综）/page/4/index.html","07d56b35922f1a828d3c0f7d1d52ecd0"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","d8117b946f475e547f9032b9b9cb44cf"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","08c5f14c70aa42d5121531ee3b05f6b0"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","1f4d6cd33044dc3c5f60930e98629fe8"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","b0be9222b0e14e20430391daf234695f"],["/categories/千千万万遍（指珊）/index.html","71844d6a29451f523f982e62c7dfedf1"],["/categories/千千万万遍（指珊）/page/2/index.html","8ca497d61d5945f42cdd73a40624e7fd"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","a3e35c4b47132feab882eb032b8e808d"],["/categories/千千万万遍（指珊）/同床异梦/index.html","2131096610108f8c85e78b32d6ec9953"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","f44374b850b5c97e4d4be500f576f764"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","71f6773488c528061b5562cfc03b5e2f"],["/categories/失落的应许之地/index.html","4c2cca63bb1e56c97ab914f0bba3154e"],["/categories/月照天山雪/index.html","add9bd52f695b0979468643b0c003362"],["/categories/月照天山雪/page/2/index.html","5daa0c13d17c8839093652b4af3d3fa4"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","28ae62b475d54a69c8453b51ec5b2650"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","8808e6c0e63629d891fd59d15062af17"],["/categories/狂飙，乱飙，发飙/index.html","08a90363aa6bde436daa7b8b0eba7fd8"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","60071db29d1fd2887f756d23ead8a129"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","912b6f7a3f98896e5dcb6e0d82622275"],["/categories/短篇/index.html","433f1ff3ae72abb5c14d301c9d89697f"],["/categories/短篇/玉生烟/index.html","6089a19fc1153c206ca113b88344d82a"],["/categories/短篇/破戒（马魁）/index.html","bc923ffb5f5a4b41de76864427c2a033"],["/categories/繁城之下/index.html","1fe20e184db9f35c7a15c1a30237ddd6"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","ef83fecc35cb20ce616104dfc2606ece"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","9d763caf36040aed48e300e7c1e288cb"],["/css/custom.css","8167ff56d4d9b616d418df452c370867"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e8d19e6e7445d1dd697b79f2b0b94459"],["/css/modify.css","635de24108623f7e53494885bb2e9c23"],["/css/var.css","198a1cb0f090466b9baf42922dde1909"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","2d19b45e29213e2465f6265d4db8514c"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","515adae111aa2604971694d0adf1b01b"],["/page/3/index.html","5a1d98f10f09d682f4658ead2c9c3e9f"],["/page/4/index.html","64158a30493d4a380cd74f8296728f47"],["/page/5/index.html","3655228e81c493b5a1ddaab3e401a08a"],["/page/6/index.html","1b50347b3fe43ee970a0d8031b7e16fe"],["/page/7/index.html","60bbb765e93c8eb6c0dfbfc4b77d4806"],["/page/8/index.html","5123cbd468009d0dcfac4ca77f99b28c"],["/page/9/index.html","ba8a575ef3bcf823f373d177df526e86"],["/posts/1083795192/index.html","b07082305006e9bfb26dbb57107328cd"],["/posts/1099216759/index.html","0e767b7a2bbff86e21082fff5524dca0"],["/posts/1195093070/index.html","2db1d044cf78040ba1e34e6c6d42c755"],["/posts/12506394/index.html","1b26216a55a1b1dddb5ba6e166d166cf"],["/posts/1315809802/index.html","0158c2dd8968b8cb063af9dabf5c9551"],["/posts/1329165323/index.html","8d7aa3dcf908cc8db3d3d39fc2fab6ae"],["/posts/1378666774/index.html","4b4ce28bcbfd07256c2bd8a418c783e1"],["/posts/1407316490/index.html","91b230f97f2728e79a6b3e577b8b4a01"],["/posts/1434824932/index.html","f38a82cbe4fea5165a5d7ba06fa9374b"],["/posts/1445707477/index.html","8e91800017ff6a9929f82835beca9fdf"],["/posts/1465373355/index.html","74cf6e600cd248c2de78d0eb24a26464"],["/posts/1681850936/index.html","4e7894ad490e8dc98776b9c711faa5f1"],["/posts/1710373156/index.html","9602aa3a492c36abdb120d5932763407"],["/posts/1720998546/index.html","e52437f6588d103ee048be8dcdf39b3f"],["/posts/173005120/index.html","4237e08a9ac84956d97c0040d1cc119e"],["/posts/1988799958/index.html","39d729c479248fab6a8dbc46ecda2d6a"],["/posts/2192148155/index.html","95e0338bb11f78cd53faf9b031f31666"],["/posts/2229302539/index.html","0c52695c518ef7029b277db507c82392"],["/posts/2492968201/index.html","e4adbea8ee86430a95888585666b3b76"],["/posts/2817232307/index.html","8cb91bd9afe13bbf95e829145ce8c94c"],["/posts/2949714254/index.html","bb6895d182e0ff3dea3701476e03ea0b"],["/posts/3002318373/index.html","7de37361293e57cb0ec3abd6229ed42b"],["/posts/3076558902/index.html","2e6a70ef34bb8065f3960a21eecc1576"],["/posts/3147359483/index.html","4c9e9199ac90a18c5d9ccb966f1f8ff7"],["/posts/3191465731/index.html","f5868a90c5cbc49a78bb360eda8c3099"],["/posts/3459697331/index.html","bafdcd232e42eab47b7a82a80caa63d8"],["/posts/3489395119/index.html","321a3c35b2588fbac13f3a830a772d08"],["/posts/3525870963/index.html","cf7c9c870b675f9b9941c9629d3e8cb1"],["/posts/3640780602/index.html","e765d0b547167c099488361c2a5535fe"],["/posts/3699598685/index.html","e9ffe92589cf7e9ac15972a2ba7c9407"],["/posts/3712900673/index.html","c6f17ef660dac672d8bb9ed34411fa65"],["/posts/3770599674/index.html","2a6fb1fed3fc50fe582d2264b7a66677"],["/posts/3935350387/index.html","09a612ad8296c87a868101bbff156221"],["/posts/3948778863/index.html","64d05c77f937e80b4b4924de2355f177"],["/posts/403803703/index.html","1b30e414a4748515a4264e8256911495"],["/posts/4041933047/index.html","787f47a788ec7e5e3896efe3082eca8d"],["/posts/411074811/index.html","c8abae2c1ebef1d9e39b6333a9b56e63"],["/posts/4113963045/index.html","3bc9191c02dadea55f578cd76ba1852e"],["/posts/4163174813/index.html","aaaece185bc585a2a69acef7c990ca8a"],["/posts/4192746113/index.html","769d6e6c1a96ce22b174f0be3baf7df8"],["/posts/741067372/index.html","1fbc08367f02edec3617867873326446"],["/posts/888354975/index.html","2494862abc1f52897ea5e8580ec743ee"],["/style.css","d4cac444718c1beb6f3d2c9f90d2fb88"],["/sw-register.js","5090825be284ea56b3b5b460b9563d08"],["/tags/index.html","eea6c94f021f775f84c02dc253a0bde9"],["/tags/冰与火之歌/index.html","2dcb3c5b15d23f911b53c0fe2360da3a"],["/tags/冰与火之歌/page/2/index.html","569c219a32aed9ab24df39a806a0b5ae"],["/tags/摸鱼之作/index.html","af60ba63ee15292b116f43211905aa1e"],["/tags/日常/index.html","e397b3bbb9f0640d04a45a91f499891a"],["/tags/柠梨/index.html","0dfa8870520c64e2cc1c3f94cab0e710"],["/tags/柠梨/page/2/index.html","de3dae0d9c3977fb78eabadffcda8c08"],["/tags/柠梨/page/3/index.html","9123d3b0ed6bdae2c764521032c13416"],["/tags/柠梨/page/4/index.html","f5f1c5f854e6dafcde9596abf7551ddd"],["/tags/柠梨/page/5/index.html","9ac41e26c47bffbcf7d4750ed3a58f26"],["/tags/狂飙/index.html","7668eacf37fce4342b5f43ef91bc99dd"],["/tags/镛武侠/index.html","8265629087ba8cb8e8b513ce98f03021"]];
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
