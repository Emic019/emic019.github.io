/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","810c595d39caea9b8757cd584e7f3270"],["/about/index.html","7ed53c0cfbf8522cecef8dd545544067"],["/archives/2024/07/index.html","3d669bee24081b1274c2a4eb6bb6420c"],["/archives/2024/07/page/2/index.html","6850a4e5daa531ea0531bea87e49f02b"],["/archives/2024/07/page/3/index.html","d1ce2cb394b77c46dd57f9bbb40167cd"],["/archives/2024/07/page/4/index.html","0ee3572224dfa4f1b9cf6a9b55d37ddf"],["/archives/2024/07/page/5/index.html","8376a9f62f9d218f4bd0d8a5a822ca90"],["/archives/2024/07/page/6/index.html","b275f9f103ddd56b9a4cadb57a02f3b7"],["/archives/2024/08/index.html","3a76bb1ef369764cfeb0ea688d428092"],["/archives/2024/09/index.html","49f0ac2695c9f0558af1257ddc14303a"],["/archives/2024/10/index.html","a17e4f48fe2efb3205acd7d743c2a7e8"],["/archives/2024/11/index.html","8bafc42514c43bdaa47fd047f3f4628b"],["/archives/2024/12/index.html","c9aa1feb1d98e586d15312233a4daa94"],["/archives/2024/index.html","13733872a4505a3e2f81c894da71ae8e"],["/archives/2024/page/2/index.html","9a94cce3d6bd0a001b5ea95dda49b9ac"],["/archives/2024/page/3/index.html","84d75c7ae6bd4913f8924c62bf8635f7"],["/archives/2024/page/4/index.html","15d05f68d7f20296239456faa00af5bb"],["/archives/2024/page/5/index.html","ccd4bdd4d75a58ccf30ed6325dcdd521"],["/archives/2024/page/6/index.html","dd03b01fb02984f18ed34abe6c5635f4"],["/archives/2024/page/7/index.html","01b85f56bbb64eecc4991aa56a591f34"],["/archives/2024/page/8/index.html","1b5eb8a70a3586a6e567b3ee5358c7be"],["/archives/2024/page/9/index.html","5754e2aa0f4bde9124c2741cc7d8ae4e"],["/archives/2025/02/index.html","1b0a9b19577e74952468b6a9a952e38e"],["/archives/2025/index.html","ab0e4f959a85a688b94a22565b71e1ed"],["/archives/index.html","859b9573f236719bda32dfe6ec7458b6"],["/archives/page/2/index.html","f7680c0ab6af0db1db4e83c80af629b7"],["/archives/page/3/index.html","f399ca78759cbbdf8f89b3ca18dda3fb"],["/archives/page/4/index.html","3a6b254395526d48eb9c24cd5c50e96f"],["/archives/page/5/index.html","64bb35256d37d50b33eb0a4bd53ecff6"],["/archives/page/6/index.html","da2bc5f6df55af06f41cf4d0b78ffac1"],["/archives/page/7/index.html","82eb96789d3e01f0010852f06908dbb5"],["/archives/page/8/index.html","7474805398cf1411c2a38005c905df50"],["/archives/page/9/index.html","800d1a2373b9f829a2f7927afd5778c1"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.png","c24e009c5fe94aad43ef9796f0cf1d54"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","4ca0ac13b7f7b86247cb243ba9e7bb87"],["/categories/与敌同行（梨综）/index.html","15eb768ea172b8ab5a7c06f9d4fd2b4d"],["/categories/与敌同行（梨综）/page/2/index.html","b948d3015ed1f24024489ca7429e0a31"],["/categories/与敌同行（梨综）/page/3/index.html","772eed01a4f7875c2ba51f5266f0d423"],["/categories/与敌同行（梨综）/page/4/index.html","2570bc5c08da51b184c995d0bc5f18d0"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","1525c633162506d97beb3615c3adc4e1"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","99b5fe03dd902e5bfdc10958e4b931de"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","902baf95f766e839a9530a5dbeb84742"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","9165494800586d39411b659e38c12dd6"],["/categories/千千万万遍/index.html","016fbfda7cae228319a142cd4313ab65"],["/categories/千千万万遍/page/2/index.html","1029a8c6754673407a810b2ccff9a39d"],["/categories/失落的应许之地/index.html","0a829910805d3c0cc33df8d7da419cd3"],["/categories/月照天山雪/index.html","0c3983cd58d7b4e95fe4e293d29f825c"],["/categories/月照天山雪/page/2/index.html","6d90b3f5d7795ecc22ec40ff2ac0d0fa"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","a5a2f16d89a93951532dd2eff828a8d1"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","a47523be85e61328c9312d609b1c6cf4"],["/categories/狂飙，乱飙，发飙/index.html","36a17546c99d310bf16f79835ef1d6be"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","5ca3892fd6ac53fcc59333685f8cfebd"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","835b0651190b8bb973ab5ca616289bac"],["/categories/短篇/index.html","678ced458fd8d4bfd0a05228369bd0cf"],["/categories/短篇/玉生烟/index.html","7b2b65221cffcbda4acfcc416d98f0d2"],["/categories/破戒/index.html","eac7a7b0ad308c21a2844bffe68172b9"],["/categories/繁城之下/index.html","50372dbb28c37c675a665fdbb4972d4d"],["/css/custom.css","0469bb61891512d847b2bebda9687638"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","2ab8bb38d823e71302a7508328658191"],["/css/modify.css","fdd07425625d048e0df45e30eac0d82b"],["/css/var.css","39c201b06954deea8320c51927d80b20"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/img/wallpaper01.jpg","3af061aeb66c8904f2b1d2a72d8c7617"],["/img/wallpaper02.jpg","2ccf4a5eab2c87108b569cc012ccada2"],["/img/wallpaper03.jpg","f8a085e5f26352591b7ff639eb5a0dac"],["/img/wallpaper04.jpg","4985254e30803a1c1d2cad0cb7c773ee"],["/index.html","7c349ef9249763369d5a12fae49787f6"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","0501e3260dada86c4249b34837971fe7"],["/page/3/index.html","5378d63efc438ef7f32c0e829bac9742"],["/page/4/index.html","ca3716fceccdbc78751fb5173afcadaf"],["/page/5/index.html","1a1c5fce849280b8c70906577c79af87"],["/page/6/index.html","270d0563360ace9e77d774f57dafe6d8"],["/page/7/index.html","e25dc4cf0d39942239eff0f76c1402ef"],["/page/8/index.html","b8077759b5e4476849b339bc8d567b1b"],["/page/9/index.html","fff15ce56ee5231f1af0af9dc28aab3c"],["/posts/1083795192/index.html","e583eaad0350be5eafb9b804373d595d"],["/posts/1099216759/index.html","996932fe938cd5ec79dd17e847afb868"],["/posts/1195093070/index.html","3ef628edde61d1a0fd734e9cc3efca42"],["/posts/12506394/index.html","ca763776ef333a8b8f6d683c9e194f0c"],["/posts/1315809802/index.html","56536db15e4dbb697c79c0f47d496f6f"],["/posts/1329165323/index.html","5f5e591d5bf4b16cb337b327ee86725a"],["/posts/1378666774/index.html","721b72a7619b4dd7aa12b34394d0e03b"],["/posts/1407316490/index.html","265ac9c8936f253ac15c6065c28cdafb"],["/posts/1434824932/index.html","d6b038079238d2a4553fd5cb6b314eca"],["/posts/1445707477/index.html","14151e61c5f37b5d277161bf133423af"],["/posts/1465373355/index.html","27544109aa7ab74209441f5e3c88317d"],["/posts/1681850936/index.html","5b2d8f5efa04533a4da51883439b0d30"],["/posts/1710373156/index.html","b26dc633d736aa6f539c3a69a1409252"],["/posts/1720998546/index.html","dac39e9564958d077226b08a38706978"],["/posts/173005120/index.html","b0b1c16bdd8fd3ad0e4c3a2328b4e902"],["/posts/1988799958/index.html","a4bfa4be7b510fd362abd9bac933f293"],["/posts/2192148155/index.html","263020a55302c2b998a1231fbb566df8"],["/posts/2229302539/index.html","d94892390bf3937850d70fb110967cef"],["/posts/2492968201/index.html","5ec2a9a37e7c2fc88b6ba5599373c7cf"],["/posts/2949714254/index.html","25eb28d546a51a5780b9b9cc14766708"],["/posts/3002318373/index.html","77b4b24b70d17612452a55c0678eb354"],["/posts/3076558902/index.html","dfe6f636c83e408b04c9eca58cce6145"],["/posts/3147359483/index.html","5218a8515276f62f2313fc72dc20c95e"],["/posts/3191465731/index.html","0fa5faca000cbbd462013c9cf98bcd85"],["/posts/320179123/index.html","fd8b1e2dc323a7eab9e622c3d7743146"],["/posts/3459697331/index.html","0cb18d469c4558101cc1680b7451975d"],["/posts/3489395119/index.html","c4c8d40d2649d35ce928b03d5756b49a"],["/posts/3525870963/index.html","28a68a1d9e67b6b8750b70ddbc615268"],["/posts/3640780602/index.html","542a4f538b412a20d448c75db94af782"],["/posts/3699598685/index.html","afcacf3ba19bee1598ff33c60cca32fa"],["/posts/3712900673/index.html","6649d1edea92baeb83e56963e6e6f66b"],["/posts/3770599674/index.html","5694c78e3a4e9205674400ae8f5b93a0"],["/posts/3935350387/index.html","154b0ca7bad9e2c7dff8a7b9ef225170"],["/posts/3948778863/index.html","45cdfc11e6d96ae971c40847b0341754"],["/posts/403803703/index.html","d210fcab0c36cdb6f806abdfaf178cf0"],["/posts/4041933047/index.html","8a8aa433b0bc58f816ed039f67b9f6bb"],["/posts/411074811/index.html","c17401b4e29bfecba07d62e29fbfaba5"],["/posts/4113963045/index.html","3c1501817a8f327896c052f437d5354f"],["/posts/4163174813/index.html","e030b721126b227284b7c7e420396abe"],["/posts/4192746113/index.html","f91d7b8d52e342eae6bd1e2c1b96f908"],["/posts/741067372/index.html","6046bf031c2bee27faa45dbf4482928b"],["/posts/888354975/index.html","4cf3cdcb5525dba9910be66c6231e6a9"],["/style.css","4d0637062b75397d20bd1347a153be99"],["/sw-register.js","bfa3343e291552483b8b60252552dfa6"],["/tags/index.html","2f78fe19b5f6f7e2ec978e644f079399"],["/tags/冰与火之歌/index.html","c78f597d64325758efdf191d72977929"],["/tags/冰与火之歌/page/2/index.html","40eebffb8e795144459895061de7ee4a"],["/tags/指珊/index.html","5c3b22cf8e3503502e8670d678cf03e6"],["/tags/指珊/page/2/index.html","8f368d0481811abc5486a9ee3eb4a80f"],["/tags/摸鱼之作/index.html","2d34818ae1efb77a70575b7dd4df7fd8"],["/tags/日常/index.html","27d96825ee2225a0fb1ef5644bda5525"],["/tags/柠梨/index.html","3356f607897a0c1459d8c1a0598d57ea"],["/tags/柠梨/page/2/index.html","7af1137e36eb5ce247f01d93e9bad55e"],["/tags/柠梨/page/3/index.html","3d7a74b5abb44608d823002cea4e609b"],["/tags/柠梨/page/4/index.html","500ba7ec330c38177ba5c5c8f4c1be2c"],["/tags/柠梨/page/5/index.html","b7eb4cd62bee5160cfc421b163fcd5b7"],["/tags/狂飙/index.html","a69b4c38c97240115f0df09ccac52975"],["/tags/镛武侠/index.html","6693c07abdd8745e8d90fecd42b75201"]];
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
