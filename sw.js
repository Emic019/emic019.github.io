/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2660ff19b8aefd37cc079a1811bd5e88"],["/about/index.html","2bd1f37fd8754812936f5a22f2c23769"],["/archives/2024/07/index.html","24d60e0c8a0513bd1b2d09ff61f26294"],["/archives/2024/07/page/2/index.html","e58d40dd4bffcfe182c344bcb926ccb1"],["/archives/2024/07/page/3/index.html","a34455fe37f2dae6aafd90422ad46088"],["/archives/2024/07/page/4/index.html","67c6a5638745a23cb3868d32889c2c6c"],["/archives/2024/07/page/5/index.html","44e24fc11ad11e45fc2aaf1557a11dba"],["/archives/2024/07/page/6/index.html","cc5916dd75e29865b083ac862d8297c1"],["/archives/2024/08/index.html","1145a2b437c8b23b5d29d632ed5c2e28"],["/archives/2024/09/index.html","efe8360c3c593e10023db96e57c80877"],["/archives/2024/10/index.html","5f381dc236544e81f9a2a54e3bbe030c"],["/archives/2024/11/index.html","861776773e8d2d26beba97fbc058c6db"],["/archives/2024/12/index.html","3959f170a8a9671391b49702a526a199"],["/archives/2024/index.html","c3024145aa626e5bcbebd319e1ed72bb"],["/archives/2024/page/2/index.html","90cad4adec32cf494ec6850b3d6cf1d2"],["/archives/2024/page/3/index.html","02dbaecc95f142c22297b3560223b209"],["/archives/2024/page/4/index.html","9006a4b8c7ab0aad2ae19bea577b74c6"],["/archives/2024/page/5/index.html","99b88f4af7db0c99d7f7eaf7cfec7809"],["/archives/2024/page/6/index.html","427c0aad6c351754fab1b6a589732a32"],["/archives/2024/page/7/index.html","60df8d41920f28e31f0fd89d17b826fd"],["/archives/2024/page/8/index.html","09c6d9b7d7aeec61fcfdf83ec1570501"],["/archives/2024/page/9/index.html","c0cc7e679ed66808013a3a660f42938d"],["/archives/index.html","d30ee4050216af9a35cbde2e4dac5e0e"],["/archives/page/2/index.html","573333a597e8cdcff52a8adc7434813e"],["/archives/page/3/index.html","c9e9152e6aa3081728a8cf38816a4a0a"],["/archives/page/4/index.html","71ce8bb7fa50369bbf788ee9da23f195"],["/archives/page/5/index.html","41cf1964a9a57f2e29237a06919fa492"],["/archives/page/6/index.html","3b8d7d39c28b0604d9fb03e628c68db8"],["/archives/page/7/index.html","d22f223627a569d2e77d8ff655aca00e"],["/archives/page/8/index.html","4aae9188e6a191186fcc849cfb18b1e9"],["/archives/page/9/index.html","aa5573ce853ed70026ca05864fe275eb"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/其他/4.jpg","21c68f2ac68d06ba3c8382317920b373"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bundle.js","af6b095b4fbc23b0edb1de3cb13e462b"],["/categories/index.html","5cc31ac2aa14e8dd9992f5fe98ddfeeb"],["/categories/与敌同行（梨综）/index.html","ff852c4b1d098a6d40ed257f533f50c7"],["/categories/与敌同行（梨综）/page/2/index.html","d5a767b5255504c1cb93664ee5771cd4"],["/categories/与敌同行（梨综）/page/3/index.html","268043772be1d2ff2c78b0decdf2f093"],["/categories/与敌同行（梨综）/page/4/index.html","4d6464e5a067df364811e7500f5f453d"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","6f4c60a1cfb2bed13dd2aca39e3b43bd"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","e68cfacea23defe93ab07d63cf08fe50"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","b9cd9c5a9daec06af66a201932922d02"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","37bbf7e3ba8e5e78f8e7325662a20ec0"],["/categories/千千万万遍（指珊）/index.html","a00ad1253670fb83fa2d6146e7d81fca"],["/categories/千千万万遍（指珊）/page/2/index.html","f19f71dc96bd50cd8b90bd4304f7bafb"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","7b447cf57c106a528db7c9b8c0605416"],["/categories/千千万万遍（指珊）/同床异梦/index.html","d3e644f4f0edc658064302c23d0abf6d"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","cf57ab9f829b264af8568c032163ef8e"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","4543228f6082bfdf14f8d976bdaf597a"],["/categories/失落的应许之地/index.html","84da03ce9fd093926e920e091c3332c7"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","d22a965d330452bcc18b747f55bbcd5c"],["/categories/失落的应许之地/神明的游戏（刘正毅）/index.html","cd8bd235d555dec95c1e776840a84d75"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","4c5ba1eea4a6362374b9d4274621dc76"],["/categories/月照天山雪/index.html","5a375a439c214d832f000fb83b1c0fca"],["/categories/月照天山雪/page/2/index.html","b84b1ffd44a70e69d551af09de3d9790"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","7d622e3b6bcad227113349b6b9ed3cd1"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","5edcb9d5bb0350b1e3b2122f9cf1449a"],["/categories/狂飙，乱飙，发飙/index.html","9e9afee35cdca1b2ce5bf1be64dadbb1"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","76fa7be039b27fae49b7cbcf0c8c8ff1"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","d7e739105fb0ef6dc7599c92f3da5ed1"],["/categories/短篇/index.html","03a97ffc83a16f116e63684a70049069"],["/categories/短篇/玉生烟/index.html","09dc2c7f7b942deb30ca48b06661aa3f"],["/categories/短篇/破戒（马魁）/index.html","29c18bfb24ed3f5329be5f8ea9d6bdcc"],["/categories/繁城之下/index.html","b5ffc5512419dc4276b82b6489020852"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","f21d1c98f9292bd2265cd25b1348da92"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","4669ce126e962e158a6db3469a75397e"],["/css/custom.css","20cf05dd5c8f26e343927bd653b16a72"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","986f1a6b71d6fca310b386fe53584fd5"],["/css/var.css","4315cf5ae38748dba21c1134d118f1f2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","79944f8a7d30f017d73df176d7e77843"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","a395347dc237a65d31a972a5f28f179e"],["/page/3/index.html","13f150ef3cdbca53644fd611d7549a6c"],["/page/4/index.html","bb493f8f8ecef92b4a90f5a1471c3ba3"],["/page/5/index.html","6fa5ac8c8e158c4bfde43a8ceb97d209"],["/page/6/index.html","5b34bc66fcc05b14973a671ce8e34a80"],["/page/7/index.html","a2d9b09b5954b1cde229db568f9d27d8"],["/page/8/index.html","60f46e9e485a7cddeb8545c7685eb5b0"],["/page/9/index.html","6db79d4e1daa5795e92004670f36eda9"],["/posts/1083795192/index.html","a16067c7706eb443f5543f535985660d"],["/posts/1099216759/index.html","d586b777f9bfeb910449a984ef56a03a"],["/posts/1195093070/index.html","78dc45625859afb7d973a9543341ceb6"],["/posts/12506394/index.html","c05bdb13b7a9106480935efaae2cc91c"],["/posts/1315809802/index.html","30522a9850299f6d75d165b7a129bf89"],["/posts/1329165323/index.html","0dafe269244757432a216f6160dcd65e"],["/posts/1378666774/index.html","b9c7a0b88a1130f97e99e752179cfcd1"],["/posts/1407316490/index.html","54c9ca5aafbb86fa9194205a7e3d4fbc"],["/posts/1434824932/index.html","0bd74745bb8f6dfc543efc5783c901a0"],["/posts/1445707477/index.html","027b761b0e02e50a99df4f9a26f0f522"],["/posts/1465373355/index.html","1ff4b2c9d67350daa76c16c1d8da322c"],["/posts/1681850936/index.html","e454d340664d3971ad89e7b35b45356f"],["/posts/1710373156/index.html","39584f97b36ffe59eba1dcc2a1d11662"],["/posts/1720998546/index.html","fb40fa404e7d511546a0d5a5ac6c7d06"],["/posts/173005120/index.html","da4a5a20c4e6769fed168a908010e4ea"],["/posts/1988799958/index.html","e374485f1a7c1a3558b60ab3dcd8fbb3"],["/posts/2192148155/index.html","fadd2cc00af67b550cfb08f5f23c31e6"],["/posts/2229302539/index.html","26987a328e49265f991e3de06975bc51"],["/posts/2492968201/index.html","9038614f0ae0cbcd54e50d51197c66e5"],["/posts/2817232307/index.html","d8209ee15d48094199adb831f17b294a"],["/posts/2949714254/index.html","8456e197e4977fa70859f10577c63d64"],["/posts/3002318373/index.html","7ae1861b2fc3f5fa7b8a973efd5068e1"],["/posts/3076558902/index.html","a429eabdafe04fc0213141ccca14f4a3"],["/posts/3147359483/index.html","9235447a6b9c5f4de2b8a5b94dc2394d"],["/posts/3191465731/index.html","1ad586a1fbb9d83e7d0b50a3ac2494fd"],["/posts/3459697331/index.html","5c70bd27081be7686bd81d029990bc49"],["/posts/3489395119/index.html","d190815ea15cd6ca4164d0a5d95b7e80"],["/posts/3525870963/index.html","40c14bc9f938df046b365c61759bc567"],["/posts/3640780602/index.html","904a2d0d7a5c4eb6a8d790c6027f7ee3"],["/posts/3699598685/index.html","3736ea0264dc7a30eac7d6a4ae5c245f"],["/posts/3712900673/index.html","88f1c084f70886d26cdd56edd982dc6f"],["/posts/3770599674/index.html","59100f82912db45d87b187bb0e72b8bc"],["/posts/3935350387/index.html","53d24cf4a131d83921ea8c8695e5548c"],["/posts/3948778863/index.html","4ba7fd24a407e7457226cab2c2ab0dff"],["/posts/403803703/index.html","3260eeaa5fb4d2dcad26793e118bc999"],["/posts/4041933047/index.html","97321031292c30d1d037972f252997ca"],["/posts/411074811/index.html","9cbea5dd62e8ba416c20f44e5b032238"],["/posts/4113963045/index.html","872658e7dcf8a6222caab822b00d6e4f"],["/posts/4163174813/index.html","e53515944f41043b6a0113fe5bcfd3af"],["/posts/4192746113/index.html","1b0f1e3b7e39ee0cfd6620c3cdac215b"],["/posts/741067372/index.html","40e8811901a3b9d259fde2922e4921cf"],["/posts/888354975/index.html","40351324d21158342f275dec1020ee8e"],["/style.css","f10cb23a7decf1b471955a6b467ac5ba"],["/sw-register.js","0c6227e14a4d0633a23b8b069b7f8ae5"],["/tags/index.html","35246d63234f0c2010dad6a711da92c0"],["/tags/冰与火之歌/index.html","b38e4190eeaca3a5b207f91362bf5921"],["/tags/冰与火之歌/page/2/index.html","c38b1284db73f74c42499fb092ee4faa"],["/tags/摸鱼之作/index.html","7ca29dfb26c0d08fed02f923b29f55f8"],["/tags/日常/index.html","15f966167907d6bc60cf9a7b7fb5f012"],["/tags/柠梨/index.html","9750a445c01fee7f6d1710671b42729e"],["/tags/柠梨/page/2/index.html","43dc2bcfa7a8e7fda70f1561dcf411ae"],["/tags/柠梨/page/3/index.html","3e548db61574a7000d1444682a2395d3"],["/tags/柠梨/page/4/index.html","70e27c49edc0b67432c7e687be730c9b"],["/tags/柠梨/page/5/index.html","026a6ec9e6bcc38f49660e5ad03636eb"],["/tags/狂飙/index.html","4f1c508227605c5594a528b54fddfa49"],["/tags/镛武侠/index.html","52777482e2b482d4874302b24972828a"]];
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
