/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2d5330222f6ea2283c3a3be808f8f7e8"],["/about/index.html","d768a136605bf052a844b52339756310"],["/archives/2024/07/index.html","cdcc7c7ac472cab6793a0ccbc63d22ee"],["/archives/2024/07/page/2/index.html","c320c681a3afc797d9cf6bda73c7d839"],["/archives/2024/07/page/3/index.html","9cccb20cb2f6302169d2ef2f08a3c806"],["/archives/2024/07/page/4/index.html","bce812180b79dd7da870179c0dc1a148"],["/archives/2024/07/page/5/index.html","6325091e14cdd69488707593afcfecb2"],["/archives/2024/07/page/6/index.html","552c9479dd29b0f0f888055c95b408d4"],["/archives/2024/08/index.html","a2303c8f9cddd632b65a2f67b9a6d287"],["/archives/2024/09/index.html","f54828811fa0bbc9b65e5dccab087494"],["/archives/2024/10/index.html","b190e191af94e12c4179536654059557"],["/archives/2024/11/index.html","43bbc2942cd4c3da561ee8cf3977d548"],["/archives/2024/12/index.html","d82b7d502585a6d100a9e958920a3df9"],["/archives/2024/index.html","b5da18eb0ce5d9af4d287df53b98cdcb"],["/archives/2024/page/2/index.html","41e101d5caa61047fae934942172e64d"],["/archives/2024/page/3/index.html","0f95d9ac0026cf7692cf8ae2b8e00d36"],["/archives/2024/page/4/index.html","06f1eb780d448e912608498889537544"],["/archives/2024/page/5/index.html","4e683f970a1f290e928dc4b8efe7bfb7"],["/archives/2024/page/6/index.html","09aa35ae9333a8928b77c4602b8faaa6"],["/archives/2024/page/7/index.html","c8f9037855bd87114e859b8ccc0108a9"],["/archives/2024/page/8/index.html","8db0c81c6e2ece2c98612169c685e9ae"],["/archives/2024/page/9/index.html","a673ab7d99ed88ed988e10521b688f32"],["/archives/index.html","d11c806682c3bac21a468122267e26ad"],["/archives/page/2/index.html","dcce5c09e28f1193b5947c562803b60e"],["/archives/page/3/index.html","839a38ff10d65c4808eb1e19f827f34a"],["/archives/page/4/index.html","b806a1bdbd08ef3b3fbf86d7ed1658cd"],["/archives/page/5/index.html","0d9149f98cab5c71b0bfb7055465d727"],["/archives/page/6/index.html","45449f57386c187cab608215b94763dd"],["/archives/page/7/index.html","f5f10c42081d10956137a38ed11edf6f"],["/archives/page/8/index.html","3ced2fb4470fbdad9cb17891893356ad"],["/archives/page/9/index.html","c8d2c144ef8a74b7b3f558036bc90e4b"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/其他/4.jpg","21c68f2ac68d06ba3c8382317920b373"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bundle.js","ae4e1d30dbf673ab85c4821ad81d0367"],["/categories/index.html","fae64fca9427bb268327134936972eae"],["/categories/与敌同行（梨综）/index.html","42aa5d6500f62b5a0b19ef55bd1a910f"],["/categories/与敌同行（梨综）/page/2/index.html","7d5e462b64ed1828e1bcef6337af5ec7"],["/categories/与敌同行（梨综）/page/3/index.html","b46ccce1fbaf6734f7c797b967f30bef"],["/categories/与敌同行（梨综）/page/4/index.html","5d178319eda55b5e7b4fe1648d1c7d0e"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","7399f472c944cf084d243acc9aaf44c6"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","4e6365d0af3b80015914e63b329d910b"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","d44df491e4ce779fd01b2b08911b2a33"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","3f2dd541ac4ab72b2bd7d22a1f76bd48"],["/categories/千千万万遍（指珊）/index.html","13d48d3db95dd20710286aa243998173"],["/categories/千千万万遍（指珊）/page/2/index.html","7a5a94154e2dfced3289de33a1ccde7e"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","8494b24d02634cdb7b1af5ceaa570a56"],["/categories/千千万万遍（指珊）/同床异梦/index.html","8b2775bd1e124f595285ae64b2bdd449"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","93eb16e0642f2dc5bca275afe1973da7"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","78a5c9c5f6eb61fae989aef1e525b88d"],["/categories/失落的应许之地/index.html","5d05d57c8d008f3adf08099b33634143"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","d92dd3c19495851056a4d7ba3f1643a3"],["/categories/失落的应许之地/神明的游戏（刘正毅）/index.html","da1c3cef3bc5e385c7c539977ceb1e9d"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","5004d95647e49f8ccc346af8325dde32"],["/categories/月照天山雪/index.html","29be918e487498ce76812cfe599b616f"],["/categories/月照天山雪/page/2/index.html","c51bca0b19a55ec592cbb3d6749daf86"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","6f11e61c74056c942f16272438b18e98"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","0f33255239b8f55ee9b0da7a1ce16e29"],["/categories/狂飙，乱飙，发飙/index.html","3b691f219d3d5ab65a453e85d5375dd0"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","a6bfc4007559bb0277437a3b9a54ba33"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","43274dd5db1adaa48a17a21da9cfe803"],["/categories/短篇/index.html","ce7d949c1266103b96dd88b017eef157"],["/categories/短篇/玉生烟/index.html","0f911cf046c2fdec97e7dbaa4e3af78d"],["/categories/短篇/破戒（马魁）/index.html","823fdd19c1d0ffe0b397f00f30e31026"],["/categories/繁城之下/index.html","e9ee1abfe7b17f8a1fdac1b082f5a03b"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","9431273779898aa2d5ff3ba33316b2ec"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","cf4d396d46595dd80f19215ec041536a"],["/css/custom.css","7bc1ed99bdfae3e6a8633c9b90e6ee9f"],["/css/gitalk.css","e83d32b91bb80540ae375c4c7d453aa7"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/highlight-dark.css","b0303badaa63663d30849828bd2558b1"],["/css/highlight.css","7c660cab9d244cfa7d822ed37f12a015"],["/css/main.css","5e9c6ac1bd907a0c3c5eb34675ebbcfd"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","987a775dfabdfe82ac2c5171dbb4c1ed"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","4a0577c92b00cccaf15279567f52b725"],["/page/2/index.html","6008e160ebb15e574bb81946c187fe68"],["/page/3/index.html","f6d626e55e43e6084da4ac3855004454"],["/page/4/index.html","527118e367b35b0097a76aa145728a37"],["/page/5/index.html","b7fe7f4ee1122ea51ea44648ca9631ff"],["/page/6/index.html","3d13d259bbd0a8e6d3b04f364a090496"],["/page/7/index.html","b34de796cafe6177bd665e38d899469b"],["/page/8/index.html","06e8abcc8620b6ba595fe183005f95e4"],["/page/9/index.html","314bca08081ecd683059d1968b7ea8f4"],["/posts/1083795192/index.html","b5a4d3db28982482d33609fd766e1073"],["/posts/1099216759/index.html","5d43afaeb9b15a1c4be32f3a1f12fcd3"],["/posts/1195093070/index.html","64f34c1caefc72b0b4f2bc29aba138f1"],["/posts/12506394/index.html","9455e23f8082bf09b81c4f7f7113cdce"],["/posts/1315809802/index.html","f62f8e576d7c887a8106df23906ad220"],["/posts/1329165323/index.html","d74d21b918e59544b6b03e560264a937"],["/posts/1378666774/index.html","07bd337849277be1d3ab1bac2b080cdd"],["/posts/1407316490/index.html","a06b1c506eeca8d392b7ad1dd21a6e1a"],["/posts/1434824932/index.html","8fc4d883d59cf355b06cd1bf26749a68"],["/posts/1445707477/index.html","fa5a6a55b28483e2198d36ad312dc8f8"],["/posts/1465373355/index.html","a13a4c00ad455324e1acd9d3dd26c60e"],["/posts/1681850936/index.html","760e6e9a20c4723561008e2a212b89b3"],["/posts/1710373156/index.html","4afc0beac68a279e87c523a7f8cd4732"],["/posts/1720998546/index.html","d68a448a8a28a1acf81992853573928f"],["/posts/173005120/index.html","8e0bcbe77d2208d069120bbc639003de"],["/posts/1988799958/index.html","cee23c824ab398083e672d951596b051"],["/posts/2192148155/index.html","a3df6947a64a982b9dcf66908696690f"],["/posts/2229302539/index.html","b72d628e159f650c953450fa8de980db"],["/posts/2492968201/index.html","84c50289be40eff0539835ebe1f062c7"],["/posts/2817232307/index.html","56b1e6621197a218b6862d60e7d7455e"],["/posts/2949714254/index.html","a7a308060b02a8880df6a7ab2d1de061"],["/posts/3002318373/index.html","e57812eabe6cab685d9a0b0fd6b89bca"],["/posts/3076558902/index.html","beccc4c74794fe1ae25a0bf1cd051370"],["/posts/3147359483/index.html","2ab30c68afdd3bb024bacae12eb93585"],["/posts/3191465731/index.html","55392fdd6cdc3b20dd990734b23cb60f"],["/posts/3459697331/index.html","d75edcd721376d5e2af5bda84726b229"],["/posts/3489395119/index.html","834af06d1ca97aeb857cc55988908550"],["/posts/3525870963/index.html","7e0137fa748591d35d0180258dc26d81"],["/posts/3640780602/index.html","a9ed80b58d8a1933be8fe337c1d93436"],["/posts/3699598685/index.html","598051ce3927a4e7c2b17d697637a080"],["/posts/3712900673/index.html","098931f299dfbab0f6ca8cc09d70e6ef"],["/posts/3770599674/index.html","8332b9d4a7d6accbe45df9bccd2cc859"],["/posts/3935350387/index.html","0fd2aeeb8845f85fa8a5c4911a606e4d"],["/posts/3948778863/index.html","1df8ccac28e86c58bd4cb05750c1a1fb"],["/posts/403803703/index.html","20dd2728a319d13185a6ee6674fc544a"],["/posts/4041933047/index.html","4a58c77d060d1d3d60c1ab4e0bad0217"],["/posts/411074811/index.html","5818ce2cd151619b1993e8ea49a4ff51"],["/posts/4113963045/index.html","eacc87cc48b493b330de7211833c839c"],["/posts/4163174813/index.html","d540dd94f54553cb64289ada45cc0ab7"],["/posts/4192746113/index.html","98eb434f374c39b1456940be9e5f40be"],["/posts/741067372/index.html","8631f8d32ba02c31a4ce875b026e4ffa"],["/posts/888354975/index.html","4348b74298301821f5647a93e202d614"],["/style.css","002b5f22b18074461059d4378465764b"],["/sw-register.js","7d25daf9ba57e08719506e202c37bd91"],["/tags/index.html","9c204484e1e398bb43959c9159b8aae3"],["/tags/冰与火之歌/index.html","0e8996ab428f784be333ba69fe86036b"],["/tags/冰与火之歌/page/2/index.html","e555fcab3ac67adecfc9e11cedf8d95f"],["/tags/摸鱼之作/index.html","b62d97e5555a3619d3d1f15516a1ab5b"],["/tags/日常/index.html","27ecc972274dc365b650ed3869ad690e"],["/tags/柠梨/index.html","5bb45af32a09e379dee2271ca2655f9c"],["/tags/柠梨/page/2/index.html","7ee5ee2494176dbea88c780a0feb941f"],["/tags/柠梨/page/3/index.html","74aeeb8700932bae849b901665f6767b"],["/tags/柠梨/page/4/index.html","8e18646e804de665106ff392f5c1a0e6"],["/tags/柠梨/page/5/index.html","17fe42a8e8fbd1592429312e53951676"],["/tags/狂飙/index.html","4497616bad60f8600bbb026a36e0c0b0"],["/tags/镛武侠/index.html","c6904adfc752e70ca276209523196c48"]];
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
