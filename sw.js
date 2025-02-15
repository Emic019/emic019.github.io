/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f064ce5a647bea09967420555f208d40"],["/about/index.html","898843efa908bcc802f24b6dc7486723"],["/archives/2024/07/index.html","918f50052ebf361a6ac1e05d2e3c2f2f"],["/archives/2024/07/page/2/index.html","71124b25710188b8a3b4ae6ed8f42b09"],["/archives/2024/07/page/3/index.html","4d63d6de3fd2d8d7f0c19f8c0cb739ba"],["/archives/2024/07/page/4/index.html","ae3fa9db8a7263123cb4250fe9bf7511"],["/archives/2024/07/page/5/index.html","a3bb78be8f5c58354c06c70dcc25b700"],["/archives/2024/07/page/6/index.html","9c611dc51cff073ce393debd4db8d855"],["/archives/2024/08/index.html","bdb0cc912aeb02a90a03e59c3d510922"],["/archives/2024/09/index.html","261897fc0bd433217a7d3fe71db1ba9a"],["/archives/2024/10/index.html","926b1593cb8da0a57c8c8dc92088fd8a"],["/archives/2024/11/index.html","d8c241970816b7d09aab9faec6dbeacd"],["/archives/2024/12/index.html","2008f6ec785caa824b46038da551e536"],["/archives/2024/index.html","5872256a2be0113ccbac581d6fca2b25"],["/archives/2024/page/2/index.html","f44759eaadc9d4d113b746fe24ab8c23"],["/archives/2024/page/3/index.html","510975df3fedc3732094254a1414e57a"],["/archives/2024/page/4/index.html","1e0e3add6ad16d8df2ce10dcff8cc9e0"],["/archives/2024/page/5/index.html","8313b6b12c83c6460829b15ad220bd0e"],["/archives/2024/page/6/index.html","ee70dc60d74130de655f91d7bbbc009c"],["/archives/2024/page/7/index.html","8c698c238943b04de9de6ba9279d61ad"],["/archives/2024/page/8/index.html","e92c9ba1c12cc80282cc5f2934c51922"],["/archives/2024/page/9/index.html","4d0d998fd0145215a6153a6ef0de1ccf"],["/archives/index.html","ed19948e67bd35b0d43c10c41b319c6f"],["/archives/page/2/index.html","a8a778216f41aea9dc9fbf1f959b2966"],["/archives/page/3/index.html","b5f3e7719f2e868e373263b8d7989bcd"],["/archives/page/4/index.html","6b3bfd59c54edad7abfa33d861c570af"],["/archives/page/5/index.html","059b7206515801e65700f810fae77000"],["/archives/page/6/index.html","fc8cfdf2c7f377b13b101e40a96368b3"],["/archives/page/7/index.html","55f8b9bfa8a70d7f33a3a1e35d26a6d9"],["/archives/page/8/index.html","dae78a50e4620b96fa98034bfd2283af"],["/archives/page/9/index.html","39d8c9d3e12c6de79c6f2e24b0c92206"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/其他/4.jpg","21c68f2ac68d06ba3c8382317920b373"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","38b4c9bce6684c882c440c8c891948d7"],["/categories/与敌同行（梨综）/index.html","da3f6423a022acc90f175a8f73c9844a"],["/categories/与敌同行（梨综）/page/2/index.html","61bbf6581d7e304ff2c9c7bed12729ea"],["/categories/与敌同行（梨综）/page/3/index.html","8f290660c8cf3bd5923654c3a1d5fada"],["/categories/与敌同行（梨综）/page/4/index.html","d7d1b7e14fa6e2bb229b2caf685c274d"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","51e74d18693e1acf4068f6d9f9f5c693"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","7b067a22c6fb8833690ae42bc2a009e0"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","c596672a74b7c7ff3d7005bb9abd0b7e"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","c5068dbcc4d1c7ef472bc1902aa7bdf5"],["/categories/千千万万遍（指珊）/index.html","3f11eb0226329f727db475f9f770f5ec"],["/categories/千千万万遍（指珊）/page/2/index.html","2ea83eddf6b5a86ed3ee0df36ad178f3"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","c8889b344147c97b16f5c50d9c4988a3"],["/categories/千千万万遍（指珊）/同床异梦/index.html","6881cdbf2983ea61d3633770e96a4937"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","c177d91d5ec1a1ea4b7be7cc8bcdb9e9"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","a843431517a4506fe5efb71721973fb5"],["/categories/失落的应许之地/index.html","dd6c859c497985765666cd537502ac24"],["/categories/月照天山雪/index.html","b6dfbc2b602846b1f24aaeddaea74d88"],["/categories/月照天山雪/page/2/index.html","f9c4642ddc51df9074fd03cbe766dfd3"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","4592768bae9d29c4e232cba445f9208e"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","f172a1e2689bfd2f18b321e1bef048c6"],["/categories/狂飙，乱飙，发飙/index.html","6eafb2b68d862c1b71a1ec1eeee71da0"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","1dec3ff4ed2599a7cf27f599758c2131"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","5ce610fcc08b2051f0d76814883eff5f"],["/categories/短篇/index.html","a66e469d71e65b0b31a8ad7efa52cb5d"],["/categories/短篇/玉生烟/index.html","4b3b25eb53bd1b2d6584aa5cc312cdb3"],["/categories/短篇/破戒（马魁）/index.html","8ce37debbec05d571f4897dab6a6878f"],["/categories/繁城之下/index.html","d4f36b176ae33e2843a6d83f43c4f2ad"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","7688d0c194195123c1db7b2dbb0e7fe4"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","afb4399876a3905ba917d80c473807bc"],["/css/custom.css","9a0de890dcba0fb4413b4c2f196faab9"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","19aee7d334ea70aa12725552b849abee"],["/css/var.css","92c84cf26bf81fda68dbb72c258b98b5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","fb3cc8f880510d7e3aaaefefa032bf6f"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","e2a09041491961b94fe16ef781a30440"],["/page/3/index.html","b941c406d19f2c7ae9db265d14cab4be"],["/page/4/index.html","c382aa0fee472ebbb2d17dfc1ae4549c"],["/page/5/index.html","879df356f4b86bb553e81b3c88d43014"],["/page/6/index.html","c355f5aff3a3ca0b1ee0224e68969a01"],["/page/7/index.html","4e72ced92eadedb7f6994f033179458c"],["/page/8/index.html","de9619e8416ea216d4ec1a4dcc4dd142"],["/page/9/index.html","c8137feefd10fee3208f290dbfbf97cc"],["/posts/1083795192/index.html","a099752fa66697ea3c0f049ee7976559"],["/posts/1099216759/index.html","08d28f99e364176481686dd621e9a105"],["/posts/1195093070/index.html","453585944549307193a0d4a906493a5e"],["/posts/12506394/index.html","6020fcee736b9bc6423807b63bcbc9c3"],["/posts/1315809802/index.html","79c9ead517be929f02e74931ba18c667"],["/posts/1329165323/index.html","9292e35148980e304233f19672a56611"],["/posts/1378666774/index.html","db76aee5656c32f58e1298110b0ea3d2"],["/posts/1407316490/index.html","df3fb6aae198d461eab52544dcaa5e3e"],["/posts/1434824932/index.html","f7454d80cb179ad0b0081baf9149724c"],["/posts/1445707477/index.html","6370196abb7d44180bdc393c5016c65b"],["/posts/1465373355/index.html","d592fd3c5211763152e219874a733d5c"],["/posts/1681850936/index.html","4fd2c17178936e42351d64772ad525d8"],["/posts/1710373156/index.html","74ff359fe7a188d3b3657ae6bc8e3196"],["/posts/1720998546/index.html","203db596026325019c651ad2d0c9482c"],["/posts/173005120/index.html","d2567eb187d156d049a3774cb567951e"],["/posts/1988799958/index.html","cf57d03b697e4fc5a5900c22f3b080d0"],["/posts/2192148155/index.html","93599e77829453886e5075a4e9d4a745"],["/posts/2229302539/index.html","3067930b3fcd7cd347e43c73695db1c4"],["/posts/2492968201/index.html","e975698311353f8ce228e11767833583"],["/posts/2817232307/index.html","92c625b376afb495694a77b34ec5a4d6"],["/posts/2949714254/index.html","20f9513e02986a9c75d2096013990d14"],["/posts/3002318373/index.html","cb35e3b8d50dfa1db9545da89fc329e5"],["/posts/3076558902/index.html","898125717770e22bf65cdb34e3cf5259"],["/posts/3147359483/index.html","da7b9429904ef31480b2101b878b442e"],["/posts/3191465731/index.html","db655730124fdc68c6a4998c80a53ef9"],["/posts/3459697331/index.html","6ee56348c8363edc4fb82b1fc4fb3cb7"],["/posts/3489395119/index.html","4397070b5425baa19c91f795da529376"],["/posts/3525870963/index.html","09a072df43092f69130d57cafbcbd2df"],["/posts/3640780602/index.html","0058de9c6eb69da838032c6577ea03e8"],["/posts/3699598685/index.html","3a24679157c58e6b9940498986c06618"],["/posts/3712900673/index.html","732810fd436c2d68bd431ee1b7e54052"],["/posts/3770599674/index.html","61a49feaa15b67088759703b42a7d055"],["/posts/3935350387/index.html","f591532530519fee550d955fc4e2f42e"],["/posts/3948778863/index.html","c79001122b57aa6b5dc6ee5dfede23c8"],["/posts/403803703/index.html","b5c265fc57b472a2383f36f7992b4058"],["/posts/4041933047/index.html","2831e00b3c352deb29aabdca214abab4"],["/posts/411074811/index.html","94638c4794de56d927cb6db37a3c700c"],["/posts/4113963045/index.html","be25af191d99757ab6e60289824af8f7"],["/posts/4163174813/index.html","08697430b6069822c988fc05ecef0693"],["/posts/4192746113/index.html","613611cfbe4a6b3ed055db360cafbbef"],["/posts/741067372/index.html","640e157f7f27b05310934c53cb25da58"],["/posts/888354975/index.html","64867c144d0d0dbfe88cf19ffe2aae5d"],["/style.css","b93e4ee1ac1d108f4f8ae690551e735c"],["/sw-register.js","4ad310c6a058cbb93448c39666abc076"],["/tags/index.html","7f1491dc288abcf271dca3f5c4686360"],["/tags/冰与火之歌/index.html","ca4439c96c80e23f23d01169022b747f"],["/tags/冰与火之歌/page/2/index.html","a168f3aa29065dd10e81f2b6f206d0e0"],["/tags/摸鱼之作/index.html","c8d18d000bdcb9d308f709d4ef86d148"],["/tags/日常/index.html","8b6c04946ee76ec4c1195cb21258915a"],["/tags/柠梨/index.html","dcf45f20ca6f18b0a8946759edd9a900"],["/tags/柠梨/page/2/index.html","ed526980a06c847a543e58dc1d698839"],["/tags/柠梨/page/3/index.html","f4d098bd6b3a08cd7a18b4d891c69a65"],["/tags/柠梨/page/4/index.html","ab7f69a8fb87db57e0826f3adc4052b9"],["/tags/柠梨/page/5/index.html","1cc78abf45cfaba330d60eb94b0f4bd2"],["/tags/狂飙/index.html","1d7b97d491d019c6e23fcce483301536"],["/tags/镛武侠/index.html","240dcc7deea96ec929c407b6425b8891"]];
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
