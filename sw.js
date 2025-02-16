/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8cc70b42815765e68ccc21c55cd32985"],["/about/index.html","2310a496f9d76b0d3bbfde96b262fde3"],["/archives/2024/07/index.html","19082fced4e2cb16f509e0953e1e103c"],["/archives/2024/07/page/2/index.html","69e37545d34a9db764a1f7f00de1183d"],["/archives/2024/07/page/3/index.html","a2d174f03b855aa00eff5a9ef9909e13"],["/archives/2024/07/page/4/index.html","21436f4287f11674134e41983f5ad5af"],["/archives/2024/07/page/5/index.html","7ed4bada6ef11e170b4ff1368e3708c4"],["/archives/2024/07/page/6/index.html","be581f6d585918459e4f52b6597b49f1"],["/archives/2024/08/index.html","1f89d9df227713060798b65904fe2934"],["/archives/2024/09/index.html","8430da9e6f490cd88d2e2c3e3a562e3b"],["/archives/2024/10/index.html","9d3964b6793ababcd97913e405d445c6"],["/archives/2024/11/index.html","73ee2c48f4c228d6185e72c0ca646688"],["/archives/2024/12/index.html","da5c533b7e7779a7ae040f226ee2197d"],["/archives/2024/index.html","8458f486058ffb28dfb0c58fcdaf8871"],["/archives/2024/page/2/index.html","606b5b097361bd1be89481e7855f6c93"],["/archives/2024/page/3/index.html","0933b31a2c39b5f7f0c47cf2ffb0b6ec"],["/archives/2024/page/4/index.html","c6aa4a3e0c2743701a31fb7bba069d35"],["/archives/2024/page/5/index.html","dbc60e4c78a554f8dd2c6b3f11396ae2"],["/archives/2024/page/6/index.html","e50d8df4ecad7b24a8e2ce60638ddad2"],["/archives/2024/page/7/index.html","82df04e2423122931faa35d609c9db4d"],["/archives/2024/page/8/index.html","516f92df3aee1a256ba71019be1bb590"],["/archives/2024/page/9/index.html","d3e372840bb7cec3aacae51993cacc51"],["/archives/2025/02/index.html","4c8f3b8b28f972abb63b1d4d1361e191"],["/archives/2025/index.html","b5c71ec236a009cb7584782db7b859d5"],["/archives/index.html","fef799a1f8b411c2bd2449a22041fe0e"],["/archives/page/2/index.html","9547397f2f123d55c6ab9631dfb24e67"],["/archives/page/3/index.html","eb036f771f5922701182f7812a26f7f9"],["/archives/page/4/index.html","ed20afb207af0c7f58e2271699af3fd6"],["/archives/page/5/index.html","a267d77590ac159b32eaa75738c90d71"],["/archives/page/6/index.html","ce5a4082f1fa05396906944826035d93"],["/archives/page/7/index.html","fd0c403e97df8551f5d85840f61426f9"],["/archives/page/8/index.html","a06770bbd5661db8e18b656078a88b84"],["/archives/page/9/index.html","6c05d5652b0c00167a7ebbd88688a14c"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.png","c24e009c5fe94aad43ef9796f0cf1d54"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","fc9a1993050d7c2f39399667662d5a30"],["/categories/与敌同行/index.html","5dbfc15aebc4ae41ad40ec5aec4b4d6e"],["/categories/与敌同行/page/2/index.html","2329191c1c2702f1cbcc5b505c17f3c8"],["/categories/与敌同行/page/3/index.html","e591bed15e934fc54896e67e2819b55c"],["/categories/与敌同行/page/4/index.html","2ba44fd73b077881530612e4bd5094e3"],["/categories/与敌同行/第一卷-双镜/index.html","9b608db67a6bf31af253e4b4f0f8ccd7"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","809f9b27d61125ce994cf8ffa1b69d40"],["/categories/与敌同行/第二卷-信天游/index.html","8378212575cc5236b129dacda07d30be"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","50ad09b5e7fb7741d26ca8ae90f302e3"],["/categories/千千万万遍/index.html","328a15a70fd322ef33262d8783ad0bc1"],["/categories/失落的应许之地/index.html","1a00fa8a42e372939e4fdab62b6d1051"],["/categories/月照天山雪/index.html","6c632e28b43bb1965eedba9570f9a014"],["/categories/月照天山雪/page/2/index.html","42c320e24383121b27fdc15ac942baaa"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","c8952a6e7314ec8caf0841dadd15d2b8"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","a85b4e650bffc40e4d0f060dd09d3eb4"],["/categories/狂飙，乱飙，发飙/index.html","656186c79fef8e979565b11a3b9dc554"],["/categories/短篇/index.html","92c0007ca8bf493c172b9476f8bc8853"],["/categories/破戒/index.html","b7f842b9a75b85b825f055b56124755f"],["/categories/繁城之下/index.html","902d6079ff435ce75af5208608304532"],["/categories/长夜漫漫路迢迢/index.html","ec1937786aa47edb9a92ce842c8f05c8"],["/css/custom.css","95126533a36185571ed3bd0fb5aa4188"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e6dd3dd5a877b2672dc4464da89d5d6e"],["/css/modify.css","2c8e283ef691a2bd4a31a5db92f25505"],["/css/var.css","6869022595e15ec22341a87b0c1106f0"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/img/wallpaper01.jpg","3af061aeb66c8904f2b1d2a72d8c7617"],["/img/wallpaper02.jpg","2ccf4a5eab2c87108b569cc012ccada2"],["/img/wallpaper03.jpg","f8a085e5f26352591b7ff639eb5a0dac"],["/img/wallpaper04.jpg","4985254e30803a1c1d2cad0cb7c773ee"],["/index.html","4a21a8163104f59aee42c216e5af68f2"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","594a69eabdc6e14e4005f4f224744865"],["/page/3/index.html","cc892db02a83f9541550c75c81ab6592"],["/page/4/index.html","68d2d8b6fafa24d92e6684222520da7e"],["/page/5/index.html","d29ab656886cb9012440ee72685b829d"],["/page/6/index.html","bb547e07b79c92e40be0d2631f68b377"],["/page/7/index.html","c1e9249bd98b570726072f480193b41e"],["/page/8/index.html","19f2775335db64f9cd1d9cf50ee5ea4a"],["/page/9/index.html","346dc81742b9109c3f6659cbd14fa7e9"],["/posts/1083795192/index.html","2489805340b4094793ddd8aba67367f6"],["/posts/1099216759/index.html","3ea5f8fcd8354cdeb6f5dee033177202"],["/posts/1195093070/index.html","adbe947cbe7823e7cb366cf208dc6108"],["/posts/12506394/index.html","60a319244695688294e4f4365845cf8c"],["/posts/1315809802/index.html","15c49e91d7f00ce685cca6908f4055ec"],["/posts/1329165323/index.html","02cdeb41ca877b44b489bdbb8204ef98"],["/posts/1378666774/index.html","e066756622d90ef6179d1f2ccb6e9c8f"],["/posts/1407316490/index.html","3eedfee697b4df8c806d698f4f82f38d"],["/posts/1434824932/index.html","8292f699e140660bb7ba78d43ed831d0"],["/posts/1445707477/index.html","bac04199b937531ec48e4a60546de570"],["/posts/1465373355/index.html","b31fc7da39cab1a73736af29099150e6"],["/posts/1681850936/index.html","ca31e78459fb3b4d6035cd78cb5cf094"],["/posts/1710373156/index.html","efd4896a403d210ef3e4e6905dd2b750"],["/posts/1720998546/index.html","7545cc30ec8a4cd3e213db47465c4386"],["/posts/173005120/index.html","a0b574b58b846e7ee55aef5622832bb8"],["/posts/1988799958/index.html","f846ba545caac1e94b99289bb56f4a06"],["/posts/2192148155/index.html","4d1b8156be5c567ea252777038476f96"],["/posts/2229302539/index.html","c20e9009a5331b438b3e0be129fa32a9"],["/posts/2492968201/index.html","6c821101111883d0324fec9199dabeb4"],["/posts/2949714254/index.html","eba4f8abbd2d063e50e9dc4b418fea75"],["/posts/3002318373/index.html","967baa1a58c3d47372849db1d7200249"],["/posts/3076558902/index.html","f051573e963ba22ed0a064b327cf69e3"],["/posts/3147359483/index.html","9903a8d342a3a592bcadf590ba586976"],["/posts/3191465731/index.html","7ad2c9e9edc38a90d798c10abe9cff4d"],["/posts/320179123/index.html","ef2d7d0da7423b94ccef3269d3d15e93"],["/posts/3459697331/index.html","9b81f327ecd0d9af7ed8303796034d3f"],["/posts/3489395119/index.html","5bbfe2e098e0fd89976b3b544acf32c0"],["/posts/3525870963/index.html","14404a5d0932daa152cc9c52b43caa35"],["/posts/3640780602/index.html","1b5923ebc53223f2805929eb0540d76a"],["/posts/3699598685/index.html","2b14ccfe5fad8d67b93770cfcd60338c"],["/posts/3712900673/index.html","c869169411094d8d7531ed94abca568b"],["/posts/3770599674/index.html","47d457e896d546f38e72f3b3fc1a4a1a"],["/posts/3935350387/index.html","ef4c5b8ef4713f96173e4cb265d3a6cf"],["/posts/3948778863/index.html","324662519988fe0dd82aa014bc145b8c"],["/posts/403803703/index.html","04c556858b8ff1ad4825639dc3bb0f72"],["/posts/4041933047/index.html","054fcb5963725bc3c64ca2d31f2a3b96"],["/posts/411074811/index.html","d1c0fbf24af46769f2530a6fab843405"],["/posts/4113963045/index.html","1822bdea3b0cc497348d0d18c1b54b4d"],["/posts/4163174813/index.html","dceff030577947fe24640f8487c3387d"],["/posts/4192746113/index.html","59392086aafd0f1504d323cced0c939a"],["/posts/741067372/index.html","7a3fd89a4c58e94f690d853ec3dcc739"],["/posts/888354975/index.html","e4e6e143ad645ded0e41c3c40f909300"],["/style.css","b771b1161b355a1bd58ca7b8ef14c4fc"],["/sw-register.js","0ff62207a527109c92a9c52c82623051"],["/tags/index.html","6ea8c0bb78aab36fca48baf32c677b90"],["/tags/冰与火之歌/index.html","b06550bc38b3583ee67a449219ce6080"],["/tags/冰与火之歌/page/2/index.html","7cc7c2d93fc08d1f9d333834ddf120ed"],["/tags/指珊/index.html","a68493db7aebb25903842ab7fd2d7c29"],["/tags/指珊/page/2/index.html","d2247b306441a8bd6289fbd5bf0d48ca"],["/tags/摸鱼之作/index.html","90c0fd5db493427d249619fe1865fb35"],["/tags/日常/index.html","dba0c5ff5531407105a7eee5c75a7235"],["/tags/柠梨/index.html","543cc859965bf7c70d4d827e4dd61c49"],["/tags/柠梨/page/2/index.html","6968df3de706f8a2fad056f1689077f2"],["/tags/柠梨/page/3/index.html","96dff8bfc1a601746a1f27cdd77850c9"],["/tags/柠梨/page/4/index.html","9a757bd21ab37f1f637fbc1ed73f6a18"],["/tags/柠梨/page/5/index.html","29d7972c02c4dffbce43e7cfa8677db6"],["/tags/狂飙/index.html","7faa9bb3e60783106502447c9d97d502"],["/tags/镛武侠/index.html","3d2162f74d35148daf4b9bd0966234bc"]];
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
