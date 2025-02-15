/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","df225b625985c59a53316a55f8d579f2"],["/about/index.html","ed8927861ad3e17167b7f3ce2861a0af"],["/archives/2024/07/index.html","a4be242e7167583860112767aa23bfdf"],["/archives/2024/07/page/2/index.html","39946a852eea28f5288acb26192d5ddb"],["/archives/2024/07/page/3/index.html","0a78be1368bc61b311285a25f41f8b42"],["/archives/2024/07/page/4/index.html","d2b673be060bf55db494112d7c8a15d7"],["/archives/2024/07/page/5/index.html","b461d8b35b31c87c45411ffa27733384"],["/archives/2024/07/page/6/index.html","17d9c0533f6b43710c74a06ec78d0e39"],["/archives/2024/08/index.html","21f523e1930101d8e170a48465ad15b5"],["/archives/2024/09/index.html","37a46a2f833d25bac4d95d2152d6fb4b"],["/archives/2024/10/index.html","3902e4a1303f7d78680e4aeca8d3d819"],["/archives/2024/11/index.html","fe5fd00226fe4e6b16a59df265197fe0"],["/archives/2024/12/index.html","41cbecc59616f625bb43d8408ff815a4"],["/archives/2024/index.html","4ce8e39d7ecc7f1a359a1d6bd0624f73"],["/archives/2024/page/2/index.html","9949d87d270201c8626b4308a5c4b264"],["/archives/2024/page/3/index.html","36f431e10aa4882d365341b300072345"],["/archives/2024/page/4/index.html","b0b269e8c49faeda23a64311c0689330"],["/archives/2024/page/5/index.html","78c938daea25f2d5006d376302116ee8"],["/archives/2024/page/6/index.html","6b0fa50b09f2ce074429ae662e054135"],["/archives/2024/page/7/index.html","fa73f59929c3ab7c375a91f10b54fc6e"],["/archives/2024/page/8/index.html","44c9ace4d084af2cf630b614ba249e9d"],["/archives/2024/page/9/index.html","1b2b28b772e0f862a9e697eac306e8b0"],["/archives/index.html","bd3e9dbe5037ad5abbd59c46bdcd7a5d"],["/archives/page/2/index.html","8974a3ff980ca86059c66b0707e5e007"],["/archives/page/3/index.html","dcc72edbbc9c0c60bedc6e4770ee12a0"],["/archives/page/4/index.html","2524e21df733aa4983d7382dadcb940d"],["/archives/page/5/index.html","170289a1a64fec81ec833021e6b4cc28"],["/archives/page/6/index.html","6c1716ab7abe347a0567662263a29c54"],["/archives/page/7/index.html","074739a7e7435bb93e3af0945e283527"],["/archives/page/8/index.html","9d3c317a552b8af374e2182a056b65e9"],["/archives/page/9/index.html","bde2dde94f4146b29668bedf9b1873dd"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/其他/4.jpg","21c68f2ac68d06ba3c8382317920b373"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","40c76322f6baf2a537a75674c197f37b"],["/categories/与敌同行（梨综）/index.html","95231724ddc865c761da6d9eb9c0f8bb"],["/categories/与敌同行（梨综）/page/2/index.html","c297c55441d7529ab5625ba36e7d96a2"],["/categories/与敌同行（梨综）/page/3/index.html","aa56262b815eabecdc0b2de310366057"],["/categories/与敌同行（梨综）/page/4/index.html","25976ccc962eb4d64b3c25af7361a0c4"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","7d93c0dd0d5c7e08fe85482c23c105ad"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","5031369f2f61e25b7bbe574a857b0386"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","7ded5093725d8974cc2042fb1774f25e"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","bc4ac6d43dd4681ea184906384d89782"],["/categories/千千万万遍（指珊）/index.html","0d56cad7fbb666bc68c3145d6a57c145"],["/categories/千千万万遍（指珊）/page/2/index.html","317499a34d31bc225359b0011c6437bc"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","d6e5c5d426994b1af4c4d8621f6be256"],["/categories/千千万万遍（指珊）/同床异梦/index.html","6c6988a7f1264910ab1d359cd0e676bb"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","dcc8e7b2f2ffd66352d370bf41814ec0"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","6245e5a114e6d36fe98de3484ff8e4f4"],["/categories/失落的应许之地/index.html","89127cee6aa7cf493c8fae5d92f639ff"],["/categories/月照天山雪/index.html","be08249a557eebae2320bc946729fbed"],["/categories/月照天山雪/page/2/index.html","57fbb3e3086b1ad82fecb3bfe2b47bc3"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","91ae7a0a10534d3c96c694736f9feceb"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","ba8c53400890e42f862ace029e03360c"],["/categories/狂飙，乱飙，发飙/index.html","55dcdb839e1af9b03cd9a0abf1fede69"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","52fa6327247c32b628e8b83787c88ac1"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","abb5b82cdd43997b16eeb79ce55d572c"],["/categories/短篇/index.html","5c66207fd7953575e0b64fbc9252cf1d"],["/categories/短篇/玉生烟/index.html","de74ff4b2d5d050036b6f8599740c127"],["/categories/短篇/破戒（马魁）/index.html","413be84d4c20a1b5ddd2efa211de684a"],["/categories/繁城之下/index.html","a211f1e16a01ee5cd85fb9eb3eba2f89"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","1fb67a2a89346c4900364d297cacbd51"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","e4e8754c09f78c7bbf1993c788a2143b"],["/css/custom.css","82d6120341596b8257583c98f20cf71e"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","6a84985b36b6ced11186e48c7f968b46"],["/css/var.css","9986b2ee198cff3810f2801b232c9fb8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","d1b894550ce93d63ff4aa7c1b85cde98"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","b096112a4967fc42274924d8761e2a2b"],["/page/3/index.html","96c8fcc5c981e7c6ad2f50d5bd816ba3"],["/page/4/index.html","9faf1c93f75a4b47463b7e3b71edddce"],["/page/5/index.html","9ddd09a670e9c9b55e9da2aedaba751f"],["/page/6/index.html","08f462368fc267e6c8e6327c0d2e83e5"],["/page/7/index.html","7c566e10eedc84fd4c6dec2b122a73d8"],["/page/8/index.html","452f07b8891aa93025a04681ce93d994"],["/page/9/index.html","27dd62a94511231547bbfe6422346dc0"],["/posts/1083795192/index.html","e6b965a7edb442e3012c60bf4f86a43f"],["/posts/1099216759/index.html","e8020dde4b4128b708781527c0510018"],["/posts/1195093070/index.html","9d69dc2c8bf7138eae4b0c9b0c2e17a8"],["/posts/12506394/index.html","ef8e67bf6ccb19a72b3089231a157f13"],["/posts/1315809802/index.html","83a500a42dc40384572b44ffb10f8b81"],["/posts/1329165323/index.html","f1d1cac21ca2d0ee0a4a98e0e6b9dc89"],["/posts/1378666774/index.html","005655fbd1f50496771e983aa63332ae"],["/posts/1407316490/index.html","e83472df31afb84aaf744690122e9143"],["/posts/1434824932/index.html","0cbb158f1bcc8b3cbd4a16fb0db4b9c2"],["/posts/1445707477/index.html","e56d5d45a5d72c06d924726bf336c3b0"],["/posts/1465373355/index.html","21206fce6547a4851d218fa988ea85b5"],["/posts/1681850936/index.html","1054966ec64e69b4cab6953153b2877b"],["/posts/1710373156/index.html","59df927c88937746d264c876ccb0aad9"],["/posts/1720998546/index.html","eceda542e7d70b0762d8d5a2fd7199ad"],["/posts/173005120/index.html","560f299031f802f35b67c7d0398a4c41"],["/posts/1988799958/index.html","a3df903837be4ecccc9b1f72ff1f0923"],["/posts/2192148155/index.html","9b3bbe8355f9c86e3fdf14ebe71224a6"],["/posts/2229302539/index.html","25629e2c52f6e2887992cb72d7ce17c0"],["/posts/2492968201/index.html","d9301a6420f3e66abec507960daa4710"],["/posts/2817232307/index.html","8d2eabbfb42bb931d5500c07a25d9644"],["/posts/2949714254/index.html","32b45bc599d00bcd9021c9f00544ddbd"],["/posts/3002318373/index.html","85e7500a3e9efdd2930a72cebe434115"],["/posts/3076558902/index.html","ad5ee2bb0fb8f6f5960d36b6437215a3"],["/posts/3147359483/index.html","4678ad44b25cd2516704fe8c6b577ff2"],["/posts/3191465731/index.html","f485c98238cbc55d14d093a509e6d30e"],["/posts/3459697331/index.html","83db82ce2626451da3f5b99c8e962b45"],["/posts/3489395119/index.html","3fc472de58a664575d6d602c12f896af"],["/posts/3525870963/index.html","01e9a2e19d15ef76846f4ef644010377"],["/posts/3640780602/index.html","04725790dda98ef7182d787f7441b57c"],["/posts/3699598685/index.html","9700e972f6f299c5e01ba03808c59064"],["/posts/3712900673/index.html","39cb3d1e7a3710c54deb2fda306e12da"],["/posts/3770599674/index.html","35464eb493a3d91857f50a90185e0bd3"],["/posts/3935350387/index.html","b9fa94ebe3995fefe7b7b91e7e74d403"],["/posts/3948778863/index.html","3206252eb188686ce653bcf55a7df6a0"],["/posts/403803703/index.html","0b6299d67bcf27c6b54625163ac276e9"],["/posts/4041933047/index.html","d7a553bfe0db4fb9af80afdc38292391"],["/posts/411074811/index.html","57f3a8869c64e711654e8a945506773c"],["/posts/4113963045/index.html","493b4dd131458f75a4750feafd3f9f3d"],["/posts/4163174813/index.html","ce31fa67b6741fa1d457b046402b9e8b"],["/posts/4192746113/index.html","728b0891328996cf7ca6b86147e9b9a7"],["/posts/741067372/index.html","40da9ca87a6dd70379405e4022875bf5"],["/posts/888354975/index.html","0c1899b9b09ed57912bcaf18ce04927b"],["/style.css","5038ee13731b31b3fa9eb9ab7bfe06f5"],["/sw-register.js","e395775517716c0acd57c13be7fe82ca"],["/tags/index.html","5cd7209b8e0475267921bb90c4f476e8"],["/tags/冰与火之歌/index.html","f2c4cb31bbfa31fe0803fbd1198c74a6"],["/tags/冰与火之歌/page/2/index.html","1c47de20ccc31c7fbb1b4e0fa5c8882f"],["/tags/摸鱼之作/index.html","ec4e5218e07c5eafede23570f42a7c2b"],["/tags/日常/index.html","db9d74b84dd7983a0f8dcfc342bdd47e"],["/tags/柠梨/index.html","e3952958ce42ce1a2d53c9ee260d3d41"],["/tags/柠梨/page/2/index.html","90ce719175b9b6b9e49a450072949706"],["/tags/柠梨/page/3/index.html","bf144b088bf3d428707914782974e88c"],["/tags/柠梨/page/4/index.html","b92c61e73c390213ecc71e607f9df68e"],["/tags/柠梨/page/5/index.html","bf112463f6301d91ab5b512f650b59ca"],["/tags/狂飙/index.html","f00a2ad5731358ceccad9b27bf380365"],["/tags/镛武侠/index.html","96f68368e3effcd7ed89e37a7535f0e2"]];
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
