/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e27f1eaf1362b759a2227f53316f16e1"],["/about/index.html","f93b8a6113da939e3de9038c8a63d084"],["/archives/2024/07/index.html","8e608e90392f22a54f916cad06bc6aea"],["/archives/2024/07/page/2/index.html","6135a0d452b795e99899951f4392b379"],["/archives/2024/07/page/3/index.html","289d557b0364adc9ebf836da3db90013"],["/archives/2024/07/page/4/index.html","5e48c39443ed5c631c239d9426e4dc18"],["/archives/2024/07/page/5/index.html","bd3480fa401e4eae9d38b7ed64f410fd"],["/archives/2024/07/page/6/index.html","6d003510bfddbcc351ca12946ed45f00"],["/archives/2024/08/index.html","426b1aa49589cd36810fa5405826f7f6"],["/archives/2024/09/index.html","0da8c5deb1fb262a7dbe4d13358f9036"],["/archives/2024/10/index.html","d30904f891d0c7e374c9c424db13050d"],["/archives/2024/11/index.html","9ac3a06a58c6c559fc051663ca90cfb9"],["/archives/2024/12/index.html","2866dec1ea8308d38af6caf6920978c5"],["/archives/2024/index.html","f4c2595c678c0fa8af72874ffb3a8ffd"],["/archives/2024/page/2/index.html","437156fe83aa985a57cb9338e0cb3cb9"],["/archives/2024/page/3/index.html","b69668c7f626c767592c3ae26b1b6315"],["/archives/2024/page/4/index.html","1bf99c264d7184bdb0c53955aa94920f"],["/archives/2024/page/5/index.html","bbf26e39f1fdce36f853a07b0144ab35"],["/archives/2024/page/6/index.html","4d7e79691d424adadfaa1e2ca9608655"],["/archives/2024/page/7/index.html","b060b69cfe084ca1ebdfbf4eaa284c48"],["/archives/2024/page/8/index.html","c7c6be9955f7d348c885d7d9cc402879"],["/archives/2024/page/9/index.html","8a1c3bd41c968a85dea845fa6c7e24c5"],["/archives/index.html","38715abb9476af9b2620963bced0791b"],["/archives/page/2/index.html","876c83b7fe4fa3c3b787b4c8decfe593"],["/archives/page/3/index.html","230716055acff6ddb2f26181d6ab01d2"],["/archives/page/4/index.html","cb85f78df7ea9204a678c8e9d60b3493"],["/archives/page/5/index.html","f022ef0a957d28958a2e256d9bdf0073"],["/archives/page/6/index.html","49c27a2d1b96652fa24d1694a698a8ac"],["/archives/page/7/index.html","14285aaff92f06af61aef0edb719216a"],["/archives/page/8/index.html","c270b8321902163b550a021ce329d86e"],["/archives/page/9/index.html","118c9d31ae3b75456d82b7a77b859f2a"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/其他/4.jpg","21c68f2ac68d06ba3c8382317920b373"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","b044980df4ee66f3765a530a7c1b89d2"],["/categories/与敌同行（梨综）/index.html","bb56d4e67361702bf4f77e35de1b7bbc"],["/categories/与敌同行（梨综）/page/2/index.html","c1bb50fd5cc8be59e38256ae351f68d5"],["/categories/与敌同行（梨综）/page/3/index.html","b4a65e6111b0e49b0398821facddc80e"],["/categories/与敌同行（梨综）/page/4/index.html","9fbe26c337c30ae15fa33ec25431d731"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","02d1872692ef0bc34a28f03f3cf5cd7a"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","3a575d3aaa3d4fbb41f34bbf1357aaf1"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","18d89f0a9d4d69c65a3186fa3f12a293"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","b6a40a10852eed451ffe1b37af293c7f"],["/categories/千千万万遍（指珊）/index.html","dad498b654e839d059c483129cce9aba"],["/categories/千千万万遍（指珊）/page/2/index.html","46d4d31d289ba6b0aebb3b632327db14"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","e0d3d3fd6bb46ddbf9fead9ee73d75b9"],["/categories/千千万万遍（指珊）/同床异梦/index.html","838ffd130d65c27582bfea3f9a5d2e1f"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","a8f436f28d68b0d90a36268ada86f795"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","97d42b9ac2222c2c4ea6362d2098f47e"],["/categories/失落的应许之地/index.html","c5d43c760b0d33cdfb9a44afbb25f52f"],["/categories/月照天山雪/index.html","f73ac86bc052f2dc4fd6f2926b41b7a8"],["/categories/月照天山雪/page/2/index.html","cdd8bc46ebc921a3984b98ca36019532"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","3571c5932a40e44b89330c42e9e83856"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","71e635a82a5903bcef6ea7e450f2f465"],["/categories/狂飙，乱飙，发飙/index.html","c8bad2f6b5b815acf777ad518b448d41"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","59028c890d66b33e9c657014c539004c"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","cc84837c95a0b8e2c57a1769c7bbe429"],["/categories/短篇/index.html","0803e952536e284392bd5668ffcc5162"],["/categories/短篇/玉生烟/index.html","f6faff044ff3baf7e5a21f3bc88806b7"],["/categories/短篇/破戒（马魁）/index.html","4364ad95949b16e145a716107a3ed496"],["/categories/繁城之下/index.html","31656c39c9c6d96fdd2626389d1cecba"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","8bacfee959318fb79aee98a6736b524c"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","c6309121aa1fb0b644a1a28f6b6f7ba7"],["/css/custom.css","8167ff56d4d9b616d418df452c370867"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e8d19e6e7445d1dd697b79f2b0b94459"],["/css/modify.css","635de24108623f7e53494885bb2e9c23"],["/css/var.css","198a1cb0f090466b9baf42922dde1909"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","f35f23d59a30cb4dbe5f1039bb01504c"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","afe081cb8d3baf089d2c9c6309b5d91e"],["/page/3/index.html","0b1561888addc8061e2ffcada24f0950"],["/page/4/index.html","e70fc4578017ce93d885f2d7cb90e809"],["/page/5/index.html","042e6461f8afcf24a9e69350a431d9c0"],["/page/6/index.html","328c385b45bc54ad24f562b460caf2d1"],["/page/7/index.html","c645ec3ba018eef647c3822119c7fea6"],["/page/8/index.html","4d7ba6e78f0adb3b7bdd3a8b2373e835"],["/page/9/index.html","fb164b5bd50e1f2963d6bbacad36e3f3"],["/posts/1083795192/index.html","8d4a7251d4f87913348d680d5201e251"],["/posts/1099216759/index.html","9583217b3fb71dd532d34b24a435162f"],["/posts/1195093070/index.html","40e5f81f9e08d13838f12f0e8056db50"],["/posts/12506394/index.html","88092d5ec52a3833d7d08ee4241a1f50"],["/posts/1315809802/index.html","1a723d1834cc0a5b349a3d57eff75898"],["/posts/1329165323/index.html","52662b462793c4d227c72f57ddd3eaa5"],["/posts/1378666774/index.html","bbf81872278dc0f61c465fe60b93fb41"],["/posts/1407316490/index.html","39e29e686de8b2ecf803109e3869a5cf"],["/posts/1434824932/index.html","8672fab0988251aaf0e4a3ee687a4f17"],["/posts/1445707477/index.html","7d40da6556d7860f5e57ecabb74dfff0"],["/posts/1465373355/index.html","a0ab11a228dd8ed123d71a3202f2c4c9"],["/posts/1681850936/index.html","8c1319ada924b7a8239f9f0da8699a65"],["/posts/1710373156/index.html","08b25d29d3824854fa4b8be8e5766e5f"],["/posts/1720998546/index.html","715b717be08db1e8c5e2f4d22b7a25ed"],["/posts/173005120/index.html","5f17d2a738f457c5fefdf8e6842cf833"],["/posts/1988799958/index.html","db0873ebb5ea04832df461734f525f84"],["/posts/2192148155/index.html","fbfd7fdfaada94df64755bf92ecf2475"],["/posts/2229302539/index.html","609ac4f967ff457ead980e2dc7defb5a"],["/posts/2492968201/index.html","aacbb553ade06def394df22de4f2fe68"],["/posts/2817232307/index.html","dd8311960b761ea793f333fcf0a308d3"],["/posts/2949714254/index.html","c56dcf36e4b12934653a8ed1e23fb1ef"],["/posts/3002318373/index.html","af621bb7d4eddb0157d72753df5c896b"],["/posts/3076558902/index.html","ffb0556050a44fcb35e8c10ee4a6d7b6"],["/posts/3147359483/index.html","3fc3da53d7c96271beba798f265a08de"],["/posts/3191465731/index.html","d1b80ed4b76340fb3eb5c10a6f422abf"],["/posts/3459697331/index.html","3935d76c497c3c7bdac819ea27b54798"],["/posts/3489395119/index.html","8234a4a123340e06df0c3be5a008f9ce"],["/posts/3525870963/index.html","8079c72fde728b11dd7ed28711c25778"],["/posts/3640780602/index.html","34fbb94ce37b0c597036350b2f6c7b0e"],["/posts/3699598685/index.html","eae27f536c879d7ef48fdb07600da698"],["/posts/3712900673/index.html","151fd4050c89d27cc8eaa387202705b0"],["/posts/3770599674/index.html","c06166409069679be9d1fae1b38cbf0d"],["/posts/3935350387/index.html","940c9ca72f52999320e380cc9571c427"],["/posts/3948778863/index.html","e8fc46f30e3c7e5c0338462c8286b2c0"],["/posts/403803703/index.html","cc1a268e5c94434ea9110d1c87c00ae4"],["/posts/4041933047/index.html","92e1b5dd8d3b01e58c9ae24843cdf7d0"],["/posts/411074811/index.html","4b055c24517c1e9989d1de5e63dd6be7"],["/posts/4113963045/index.html","7914dce255302fb2dc7e1396690fc530"],["/posts/4163174813/index.html","783900f5efff4d1693fca320ee25bad3"],["/posts/4192746113/index.html","d9f36c6285dba80e28a4848260c1de4f"],["/posts/741067372/index.html","3a0a2c77c46621ae4cda660de99d0209"],["/posts/888354975/index.html","d011836940bd14eb393d071fd6d0f4d5"],["/style.css","71181d18ecc958eff38ba8322c7395aa"],["/sw-register.js","76d0e5c8566d505cd035a2195c719317"],["/tags/index.html","4accc8455b96c51c0c4bb745eb5014f5"],["/tags/冰与火之歌/index.html","53e6306e3e8b30e488a789094077216b"],["/tags/冰与火之歌/page/2/index.html","79bdceb4170a38c22aa85a161df8769e"],["/tags/摸鱼之作/index.html","64ad58b0d38484331a7e605607464e15"],["/tags/日常/index.html","d3939f871908a5dc6138454fdcdb7570"],["/tags/柠梨/index.html","5b3ec9829097211a9a992aa4e89f0df6"],["/tags/柠梨/page/2/index.html","7f38f195ee5b3f756926d43e215549f4"],["/tags/柠梨/page/3/index.html","6aab599cbe1dfc65cf1eac79a07c5b40"],["/tags/柠梨/page/4/index.html","3194e97d747f26b1983253b9f5bb652e"],["/tags/柠梨/page/5/index.html","a522e393cd4dd34818c775d2e818b377"],["/tags/狂飙/index.html","dea32fb8c5911ad2edde45446904f122"],["/tags/镛武侠/index.html","309bf93e0394739dec6de7adef55d5db"]];
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
