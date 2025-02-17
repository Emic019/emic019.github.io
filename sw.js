/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ff7b1059d7cd3f232228dd3b43974db7"],["/about/index.html","7fdd41c8fd423bc41117da4770d3d3b1"],["/archives/2024/07/index.html","adf59a4bfa6bb9fde5f2b7fabdf7ba8a"],["/archives/2024/07/page/2/index.html","837cc102b3fb976fde0c6a46ad7aef8f"],["/archives/2024/07/page/3/index.html","1fdaa4b19f91d18c12c80cb1c5c94b69"],["/archives/2024/07/page/4/index.html","21a17b8d237b913e55951a630fdfe295"],["/archives/2024/07/page/5/index.html","bf17016d08e6d342cb136cb1c3b610db"],["/archives/2024/07/page/6/index.html","716d137abe6e24f5e2cb64ea22710f7a"],["/archives/2024/08/index.html","7bb2841a68724f531ce5bd843c0688e2"],["/archives/2024/09/index.html","a72587c280548d94bd58708570aa5b4f"],["/archives/2024/10/index.html","a6c70bf4a90c0cddb2ca1b1456ac83fd"],["/archives/2024/11/index.html","cde03203e588eb3dec6c01ca0bea0f25"],["/archives/2024/12/index.html","9644d72b8c6238b6dda72cfd293dfb31"],["/archives/2024/index.html","0fe7cadf5d54a17a5e764b63584892b1"],["/archives/2024/page/2/index.html","f99875a06b73aeb50c19bbde8c117862"],["/archives/2024/page/3/index.html","9910a118185236b623cfaf0da2b33873"],["/archives/2024/page/4/index.html","2ef895e5198b2492d4fb26976f607f03"],["/archives/2024/page/5/index.html","fdf8f82f162405638cb0a19dd59b3840"],["/archives/2024/page/6/index.html","eedcf5a1f40660f2e461cd1508fddd9e"],["/archives/2024/page/7/index.html","84baf044f0b7dbcd6cd129321f9b673e"],["/archives/2024/page/8/index.html","7ddb568198b8a25e87e352b04de45ce8"],["/archives/2024/page/9/index.html","ae77f75e860518beaece39cfd57bad32"],["/archives/2025/02/index.html","537e9769b69b1587cb31bbbab6115030"],["/archives/2025/index.html","4a7962bedc0f315bb32d634f4213294c"],["/archives/index.html","32905138fd2ea492998aa880cd5617bf"],["/archives/page/2/index.html","997a07efd2f0c2640790b70756ea6cd2"],["/archives/page/3/index.html","977dd35ff0c1ed9f85e298089332b12f"],["/archives/page/4/index.html","98984f0e3789d9811003e89005fcd742"],["/archives/page/5/index.html","a8a07e2b73f175f46b212d120f5063de"],["/archives/page/6/index.html","1ccfe8f5bb9f75e2279a91a4bfae7c18"],["/archives/page/7/index.html","523790baca012ee50b3a4bb062c19c31"],["/archives/page/8/index.html","3df811b41ec3307c2330139efef483bd"],["/archives/page/9/index.html","7f31689d7f394064568e89e00cbec2b6"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.png","c24e009c5fe94aad43ef9796f0cf1d54"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","6089783333972f599fe9f49f7975811f"],["/categories/与敌同行/index.html","dff1da2ba297a7c5e945a38955b87cf1"],["/categories/与敌同行/page/2/index.html","9082e0e91099afff4c7d5163da20eab7"],["/categories/与敌同行/page/3/index.html","a2557082d1a52b152589dc4f53ea408a"],["/categories/与敌同行/page/4/index.html","d8c259cb6ecb085e76f81a602da1e5ea"],["/categories/与敌同行/第一卷-双镜/index.html","1ce5b27ccb663bc493155a7511085672"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","09f050160f1db610aaafa4289ce9d0db"],["/categories/与敌同行/第二卷-信天游/index.html","a333f2160acdcdfb995affe3ed8bdae3"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","adaabc9ebba4664206466799d1f6b46f"],["/categories/嘲鸟之歌/index.html","c924cee961a81c3a35e8804ed06418a3"],["/categories/失落的应许之地/index.html","2fe958475d9c794a1596c7402ea52427"],["/categories/月照天山雪/index.html","ef1106b91f5a10537af1feb837bacfb2"],["/categories/月照天山雪/page/2/index.html","ec23c724f44c4f0bb6acbf0e499b4400"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","734d4dd4ce92398dc21f8aa2f01b25a0"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","df49d508c6168c064ba7992c4f490928"],["/categories/狂飙，乱飙，发飙/index.html","06c2d676558252a5f8889e4e3c67c590"],["/categories/短篇/index.html","a796e7a2c08f7f38f179b6554c13dc07"],["/categories/破戒/index.html","03559b635d34f17bbd3aa996f8e87d23"],["/categories/繁城之下/index.html","a1a8d10d90f0a7d199e60206c2e6e830"],["/categories/长夜漫漫路迢迢/index.html","54af4ffeef0aa3063994eafe3975f311"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","6f62fa9e399e9675f1459e9d7291b6ee"],["/css/modify.css","808682eaa575c1ea218d924d75ddec15"],["/css/var.css","62f73ea80c609356aa192bac1cad4995"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","ba3516c1c5aefb77586561a9ee49264f"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","d5221587ecc2703bfaf38fc4f9b5d64f"],["/page/3/index.html","fa87e872c76653e04938f112c58bc69d"],["/page/4/index.html","e201b0ef54b9e664b0827f02f4820738"],["/page/5/index.html","56b2a9971606f1f2704199cb3acbb7de"],["/page/6/index.html","69342eae86f965a6c279d8ee862ada55"],["/page/7/index.html","73c3cdc064cc4eb96220c902a6b194d6"],["/page/8/index.html","dfb55fc3270e9124e2e4b069b220bb5f"],["/page/9/index.html","9fef6f0b9bd9e78e5e2a74e2f5df0ce2"],["/posts/1083795192/index.html","e36ea5040ad36739589f7c5d1245197d"],["/posts/1099216759/index.html","9d46943e3d10b232352905d5e6aa533d"],["/posts/1195093070/index.html","c6460cf2e04bee67ed341a80cb5f0934"],["/posts/12506394/index.html","a7b04124a15c76017feca4a8c218e2e9"],["/posts/1315809802/index.html","2afe6f4ee84cad1d3b7829471c222e07"],["/posts/1329165323/index.html","1e3f494050c0e1d91a9d2657b3f5f4e1"],["/posts/1378666774/index.html","c91b70aeda1c6426fae225aadc135b1d"],["/posts/1407316490/index.html","8a80c4266684860020a637b33c5807f8"],["/posts/1434824932/index.html","aae50aac317b4ca34c2eb0a5ebd0b6d4"],["/posts/1445707477/index.html","f1b27f069472db81492dcaa25b2ed9ef"],["/posts/1465373355/index.html","93e2dbdb784ed330cbb4881c83dfe1a7"],["/posts/1681850936/index.html","3ff4bc1c59d9ac4198392cb3add07a9a"],["/posts/1710373156/index.html","3359bc4b472eb4381e0802bf23817a1f"],["/posts/1720998546/index.html","faad9cd0dc032b8414ee1ff6466e7174"],["/posts/173005120/index.html","942a3bb3f9f4e38ac783c6106f67ac3b"],["/posts/1766000773/index.html","7799151339fd8caea7dc61c44676afe7"],["/posts/1988799958/index.html","3c7537ccfe278914d7292b1074b57900"],["/posts/2192148155/index.html","1a09727a2aada1352580a8f1ea03bb7e"],["/posts/2229302539/index.html","e2bed5f36d0c29029c11fbffab8f5585"],["/posts/2492968201/index.html","c47217e4a817990415312df8d404086a"],["/posts/2949714254/index.html","6c3dd73d9a31c3743cadc1430e8bb935"],["/posts/3002318373/index.html","ebe3408f3739096d81108e5f0642d30a"],["/posts/3076558902/index.html","2d0387dee12a273efe0d9bdc31cdc851"],["/posts/3147359483/index.html","cd243dfbaf0f519ec490e1946341aa31"],["/posts/3191465731/index.html","9ea8de0c48902b222f88f33e3ef44351"],["/posts/320179123/index.html","bbd5bd8b2452d9b70bbfb00ed3f0f0c1"],["/posts/3459697331/index.html","b792dbae3a89e797365fc7ca044ed9b2"],["/posts/3489395119/index.html","253ec6022f486c9f8185d3c10490d85c"],["/posts/3525870963/index.html","e2e249b16514784ff0bf6d23d7449623"],["/posts/3640780602/index.html","8eea3ea19c4ccb46901e97ffa44fbaf4"],["/posts/3679626959/index.html","12ff08d7be2679e6ecbfe2d195ed14da"],["/posts/3699598685/index.html","109c743788cf74c45b1465a5abbd1b98"],["/posts/3712900673/index.html","460189eb5c69db0119d690540b01f8ad"],["/posts/3770599674/index.html","96d89a31c116e99565bf1fadca61a6d2"],["/posts/3935350387/index.html","ea26bdf594b757074712eb6afee3da68"],["/posts/3948778863/index.html","67fc23f3cf9ea53d1d7a66bdcc8177b7"],["/posts/403803703/index.html","03142f5ccdc3a9cf6262e3f3dfac658a"],["/posts/4041933047/index.html","1d496562f29b09df8edd77528905cdb9"],["/posts/411074811/index.html","05a1dbe3650c059333fdeab941a84e67"],["/posts/4113963045/index.html","78dd2f2bc7d4efca28dcc8832e7924f4"],["/posts/4163174813/index.html","cfb6e43ce0f36f4e30c5b2e5df9b3a4a"],["/posts/4192746113/index.html","941077239a06a62303c868a635eab164"],["/posts/741067372/index.html","69fdedcbe8bd6471138a9b0132062682"],["/posts/888354975/index.html","f9a5b8b270ba34e5660b444b6286ec83"],["/style.css","3e8d7d39b63faa37284b0c150c7676e0"],["/sw-register.js","51c64afc5b40c596522bdd5b07ede713"],["/tags/index.html","4d1195c0e6fd17cbd3daef0c0456e237"],["/tags/冰与火之歌/index.html","aad95912d154423a6f06ad743c35a567"],["/tags/冰与火之歌/page/2/index.html","c9724859e103c3e69b31b195886493f3"],["/tags/指珊/index.html","da33a300a93a1dbb3c8576fde3832f9c"],["/tags/指珊/page/2/index.html","9a2a1a5386aa17390681a5d12fb39f80"],["/tags/摸鱼之作/index.html","0f4a5cefcc969cca1baf166ff0275376"],["/tags/日常/index.html","113cccbd3e2c6d6a9f503e240708ae48"],["/tags/柠梨/index.html","ec85c5d7ca9510184148193c0ee2505b"],["/tags/柠梨/page/2/index.html","22c69b60b2ab5fe62a1a6f1cbd2f2d55"],["/tags/柠梨/page/3/index.html","0a09902f97845c0d5d1e2687accdeef4"],["/tags/柠梨/page/4/index.html","9a46d4fe035311b0064e1e1637c34c29"],["/tags/柠梨/page/5/index.html","f53f08b5d53dcdc3ffdd1f4f177717b1"],["/tags/狂飙/index.html","fee25d186e26f6dbef7267cbf5f2791b"],["/tags/镛武侠/index.html","8cf80412408a5812c76290afc3cea854"]];
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
