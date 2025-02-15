/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","29b1450bcb11084a34a316b7d3a9a179"],["/about/index.html","05dcaec132edd8aa301143711fe225ff"],["/archives/2024/07/index.html","f9ba70785762e7e5be5bf1f358f358c3"],["/archives/2024/07/page/2/index.html","b73472e998c0eeb959b88aec0a53335b"],["/archives/2024/07/page/3/index.html","81cc2f0cd20e327a2c5a20d2cf5a7740"],["/archives/2024/07/page/4/index.html","eb6c87d4d43808e174fb8d4c2026486d"],["/archives/2024/07/page/5/index.html","353316bf096d4648200fe4534a4008e0"],["/archives/2024/07/page/6/index.html","d88e7cc47f311467698151b7b6c90c93"],["/archives/2024/08/index.html","72a5383bb9de67450b3ff2f8410e69ff"],["/archives/2024/09/index.html","596a93cae76bb157b384e6b66c63653a"],["/archives/2024/10/index.html","c7516af3b258e32c7ad8db6685293e5a"],["/archives/2024/11/index.html","e9e657febb8a0c6c8f2ff9bb28698184"],["/archives/2024/12/index.html","645772418ca7a0bdeb4a6d6e8c0ec7db"],["/archives/2024/index.html","f670d18fbdc1be6c9da49d127c577a8d"],["/archives/2024/page/2/index.html","d875dcdbaf8db60a5866a4dea56498cd"],["/archives/2024/page/3/index.html","ee95b8c92fbbbb1e20597a3170729e9b"],["/archives/2024/page/4/index.html","bcaa3dbbc4b4f64bedce7498cc53d513"],["/archives/2024/page/5/index.html","9c072f27805021edeac79d47c0f2482a"],["/archives/2024/page/6/index.html","043339d0925d633be058902f94ef8acf"],["/archives/2024/page/7/index.html","062b90a456d9574ea63a60723db449c5"],["/archives/2024/page/8/index.html","d1ae4e5336ce06bb41565ba6971c424a"],["/archives/2024/page/9/index.html","c182c68113b716813b549bed85b075cf"],["/archives/index.html","cc4a26ef6b2f93a591f5f2cde6c1d695"],["/archives/page/2/index.html","c842d6fa98d21eda23aadbc179c12061"],["/archives/page/3/index.html","030f20a99f0626f3a632c56df6dc4644"],["/archives/page/4/index.html","16945b0b7808d875be1eadd4fd359478"],["/archives/page/5/index.html","b52657308d7f8d0b45a6bf0510ec9845"],["/archives/page/6/index.html","1c13be49185cb47c9099d005a9d8e4dc"],["/archives/page/7/index.html","4953b59bd103b62556c369ad55018452"],["/archives/page/8/index.html","6b697a3cecd7330484ae26595b1e7e09"],["/archives/page/9/index.html","80d0b60f9bdfff3b2a2e838ffae73f9a"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/其他/4.jpg","21c68f2ac68d06ba3c8382317920b373"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","ad0f9623bca72771d17dd37858b46441"],["/categories/与敌同行（梨综）/index.html","69296ee927be0d84f9e4c559cefa5bd5"],["/categories/与敌同行（梨综）/page/2/index.html","6377f4eb51e404419da9758bab3037ce"],["/categories/与敌同行（梨综）/page/3/index.html","df35713e1f74674250dac8b1f11d45a1"],["/categories/与敌同行（梨综）/page/4/index.html","81039c86fbc681628148c98f137eaaea"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","a761b04b2685b08aef7976533d3dd8c4"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","aed09e5774ec7f4aae20c2c6568ce04f"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","7807deb4fcc24ec2e85d407881614240"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","a575f9f6e2f99ef774c1330b428fd941"],["/categories/千千万万遍（指珊）/index.html","a495f518a2ba59cd1eae32d379471dc3"],["/categories/千千万万遍（指珊）/page/2/index.html","87e19493b269bd9af0a167545fd61fc6"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","0c22391cc2b1169d37edcb41affdde9a"],["/categories/千千万万遍（指珊）/同床异梦/index.html","83f463e895842822f664f88eb9c9b810"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","5fb379293f732618650f606972ddaf0b"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","c86fabd2909da1894410070c48dd9795"],["/categories/失落的应许之地/index.html","6fb40e67ccf35393028c67e13cdb8312"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","0b14bf61df7542b88737829785e22b33"],["/categories/失落的应许之地/神明的游戏（刘正毅）/index.html","dcb37e7f6c39391a5a259aa27c90143c"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","b3256ad638b740748f3bf552a69567e7"],["/categories/月照天山雪/index.html","964b7f71dd3f23521ed7cf0e8d96c889"],["/categories/月照天山雪/page/2/index.html","b311a45d2918c0b07a195448143944d5"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","6caa20bf63ec18512390141637c431f5"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","94e3331ef8ff2d0a4bdcf72631467d65"],["/categories/狂飙，乱飙，发飙/index.html","cb1790fe8ef45c3819daf33f055837db"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","412414ccc8b3d858f03c211bc6546a1a"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","b61af8db5258652b3b64a6ab529b6384"],["/categories/短篇/index.html","dbef5fbfaa25c495f288e85ef04191fc"],["/categories/短篇/玉生烟/index.html","fcee6e8f4b6ee27d75f078a3067979e1"],["/categories/短篇/破戒（马魁）/index.html","69d68f604cfc03c670da0fff15de819b"],["/categories/繁城之下/index.html","d20710ca755cb32627ac7f59ec14d194"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","7f8cb6f7209eb6cd51ee7471a1fde38a"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","59b2ec420242ab2d3d4938c065e8ac85"],["/css/custom.css","2eadb0b955474baaccb0168af5fcb254"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","788b842956aa47f1fd000d98d608e5b4"],["/css/var.css","f3b54a7c99b97deecb7066cb8e85df9c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","34d3718a74d245fda29ac30a731ea4ea"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","355c2bce8fc68d1924c95ebbf59e064a"],["/page/3/index.html","67bdf243b44067f6828121c0fdcd2b2b"],["/page/4/index.html","84d275a40a7e244a80fec47cfe333680"],["/page/5/index.html","676139d3b8a60c91256a54403840b7a1"],["/page/6/index.html","df408825bb7182c63398de16b873533e"],["/page/7/index.html","6f687b8feddac7fe90aa77465b7bee52"],["/page/8/index.html","6aaac24efdb5616cc33bf4c2804c874c"],["/page/9/index.html","11d57e64a0cf684a8ae2cf3bb1918392"],["/posts/1083795192/index.html","789d8eca990cafedc62902b9fb84a929"],["/posts/1099216759/index.html","53281f7928afa1d42a20d57e5dafc3ba"],["/posts/1195093070/index.html","0de7ac2f0414ee78b2a1d83a7253e559"],["/posts/12506394/index.html","e760623171e059e8b924d4c8456c7c80"],["/posts/1315809802/index.html","9e61af0f6931c3a658b077239c287876"],["/posts/1329165323/index.html","fdf4fe5a6455393170c8dc02ba09b8de"],["/posts/1378666774/index.html","3e4159eead584d9d4c75f43cc6af28a5"],["/posts/1407316490/index.html","b58238f4ea52cd01d62ff4edc5b3f73a"],["/posts/1434824932/index.html","a0504a1fcba0bdec8508410675e863e8"],["/posts/1445707477/index.html","137fa0f9568c7fc478038f39581a5a26"],["/posts/1465373355/index.html","803f8cfa167b50c6f9b35ff2f75b5088"],["/posts/1681850936/index.html","a408e8c8100916a5cd650b514e1339b9"],["/posts/1710373156/index.html","8e32e5604df01ae35af8e899d026c07a"],["/posts/1720998546/index.html","a9bad08e4227d771e1896efb4e553c2e"],["/posts/173005120/index.html","0da1d0e57f8341071ddb991a148cb80e"],["/posts/1988799958/index.html","c7821f7f96cacf69255facce4b014082"],["/posts/2192148155/index.html","0eed6df7331076be837691844d35aa7e"],["/posts/2229302539/index.html","2ec12d5b88cbce838beff70efee140e9"],["/posts/2492968201/index.html","828735e96f1fa8bd3e61374be50801a9"],["/posts/2817232307/index.html","23fd434141a20b3b1ea83b5834c362b8"],["/posts/2949714254/index.html","530bf0c2391b59d4b320b5c6eab98fb8"],["/posts/3002318373/index.html","10ee37250b1bcff936c8f3bba2ac9457"],["/posts/3076558902/index.html","6ba17cc3aef4f3058f357809b247227e"],["/posts/3147359483/index.html","93698cfcd0ef604d6ac5c1e3e393b8b3"],["/posts/3191465731/index.html","bc5417376d74722c2631c1ea2e124955"],["/posts/3459697331/index.html","30070e7ef3c173bceaa2af7aae4aa044"],["/posts/3489395119/index.html","71616b646dcc2c494cbefdd6d8a06204"],["/posts/3525870963/index.html","c30b656db12ae85621eaa29811b9315b"],["/posts/3640780602/index.html","50f68e6f38ae3915bf7089d578e4665b"],["/posts/3699598685/index.html","5dec8b00ac543cce4f9b3cb45d742399"],["/posts/3712900673/index.html","0d5bfebdc6d95daefe8026f49a6e3b3a"],["/posts/3770599674/index.html","23071d3682d1201a96966ff802513df8"],["/posts/3935350387/index.html","d50c40f5a8d2e72933739edddd6253a5"],["/posts/3948778863/index.html","f8b12e31af3c5ac889f4ac6cd44af0f5"],["/posts/403803703/index.html","95685b7a41dca0a6159446a064a36c3f"],["/posts/4041933047/index.html","332790a1b3758b47b9fc2778a60cea8d"],["/posts/411074811/index.html","786433fc82aa2438de93123f35f93fb9"],["/posts/4113963045/index.html","943df0449633883fe992b928cd6bef45"],["/posts/4163174813/index.html","74c922294bce51913f87148853223988"],["/posts/4192746113/index.html","a20b2c97f53403790848cbca46a2e012"],["/posts/741067372/index.html","9d5e2dc65d40cb84e2cd61c700225abc"],["/posts/888354975/index.html","06c27e5d5ce8ce61ddb4b6108d041a72"],["/style.css","6a9e2107c5f2ebf3733059096e4b8598"],["/sw-register.js","886c28efd7a525cbbc1a75d529054f48"],["/tags/index.html","ef17c13fb2f2e8c08ee7e106bf0381c0"],["/tags/冰与火之歌/index.html","fd607b2e4831485c1285750d6da3ec1e"],["/tags/冰与火之歌/page/2/index.html","a8834c7c9830559781fb727c59dccec3"],["/tags/摸鱼之作/index.html","9a7123a42b10daef7ecc6995855b8f73"],["/tags/日常/index.html","ed47b31ed13e5372084ef76748c49ad6"],["/tags/柠梨/index.html","91827e8e0c7463649098a7306bb60f69"],["/tags/柠梨/page/2/index.html","c192aa580f8b44de959f6c359c75ba74"],["/tags/柠梨/page/3/index.html","4fd9664898452ed4179dc99a8a966daf"],["/tags/柠梨/page/4/index.html","ee3c79c8d52ab22fe1bc6a41ef95ba07"],["/tags/柠梨/page/5/index.html","8f55699c2fa6b7b8e514589dbca8f7b3"],["/tags/狂飙/index.html","e1fb7062368929e7d6690c54c45f333a"],["/tags/镛武侠/index.html","9bf24bbecef416d2eec457851c841ee2"]];
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
