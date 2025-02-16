/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a600879668197949f537457bd4406ed4"],["/about/index.html","9a3b7456358896bb30f2bb7a07b2f8c6"],["/archives/2024/07/index.html","e7a497a10b14b30491291807069bd5ec"],["/archives/2024/07/page/2/index.html","0052cb7b1e3070e00d1af7c2a7ed6c7d"],["/archives/2024/07/page/3/index.html","01375bfa6761eecdbb9fbe1e84fe9add"],["/archives/2024/07/page/4/index.html","8ce9ac379ad8e7a3458f9f6be28661f1"],["/archives/2024/07/page/5/index.html","5fc0fc06a65d0b7495e1bdb72a0570db"],["/archives/2024/07/page/6/index.html","de990b4d50ac3c3ed417e592aa869685"],["/archives/2024/08/index.html","f32630bd567b8dc6e851c80620101b74"],["/archives/2024/09/index.html","5031df31c6c34452162051e0842b0432"],["/archives/2024/10/index.html","34708f47ff6ce4307e052ba58d4f9482"],["/archives/2024/11/index.html","82ebd3bcd25774daa3728082596a7d62"],["/archives/2024/12/index.html","afc1afaa52986721ca93ac1f25f9dafb"],["/archives/2024/index.html","1e541848640357173f419b996d76e1c2"],["/archives/2024/page/2/index.html","3fc2eabe13f811b196d060216cd99696"],["/archives/2024/page/3/index.html","c9f9a4aac210c2d449ecd96a7526a06a"],["/archives/2024/page/4/index.html","2924b2db170657080f28d19d5efca9ca"],["/archives/2024/page/5/index.html","908086ee71e2670017c03b7934e0ed19"],["/archives/2024/page/6/index.html","a9bbd91bd7d7b19aa6a60a010f537601"],["/archives/2024/page/7/index.html","2c72a8baad5dcb16c622c410d6bb18a4"],["/archives/2024/page/8/index.html","58631b800e78fae7ec09deef044c29de"],["/archives/2024/page/9/index.html","ce9074dbb2fb4aad2809dce744f990d2"],["/archives/index.html","9d37b2aac0ccf36438c860f9cc89cb5f"],["/archives/page/2/index.html","43f255fb2845b29e251d660872a89f6e"],["/archives/page/3/index.html","7ae167abd33b8fc9684751d33f67d6bd"],["/archives/page/4/index.html","6d1d01f5abe255164d8250e67c4086f5"],["/archives/page/5/index.html","9dbc91fb041cd01e55de62be23115770"],["/archives/page/6/index.html","2ddb712c18b3525a468e5ee692f6178f"],["/archives/page/7/index.html","858865351b6a613ee8ecb98207273c2f"],["/archives/page/8/index.html","b6e3b2c3d6c5234486b9e79d4387eec9"],["/archives/page/9/index.html","57ed20c49f9bd64365420f14821d5217"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.png","c24e009c5fe94aad43ef9796f0cf1d54"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","a109d552bbbdac56d7a00fd921b85760"],["/categories/与敌同行（梨综）/index.html","f6ec5d010eaf50ced8f381e361d741a0"],["/categories/与敌同行（梨综）/page/2/index.html","be8388e607594f9beccd09211d95616d"],["/categories/与敌同行（梨综）/page/3/index.html","36aa72d08a83aec17ee401212320c385"],["/categories/与敌同行（梨综）/page/4/index.html","1a2e48188da87153dacb66223ec2accc"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","8adb9af3767fe1ca2a47cbc651aa4f42"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","d86155397bab899a6b0f16a735237292"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","f48b5ffe0ad5cab96080b2b686eb1d07"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","3a87935d5d66b2b22c21f77160ece688"],["/categories/千千万万遍/index.html","047ff8a46edff06a5ebb78c97a2df22a"],["/categories/千千万万遍（指珊）/index.html","7dc140b4ff9c47a3aa93122866bb88e3"],["/categories/千千万万遍（指珊）/page/2/index.html","bacee39aaf890a922de366ec0621aead"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","f13d8816510eccfbc594c5a31c5f37e8"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","7440db6cb960b87cd39437784148ea9b"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","1b29d2933fcfd4d8d9e2ac09c4f5595c"],["/categories/失落的应许之地/index.html","b779b17555c9505effdb7f9afb19df7a"],["/categories/月照天山雪/index.html","0ea10988b32f0e3c5a5e25745ba5ecb4"],["/categories/月照天山雪/page/2/index.html","622399830854f28aa8279dc777525c51"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","32dc01baac9f97d7b74af34f70fb919a"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","9ae9ba37353a85990ef024b078b5c645"],["/categories/狂飙，乱飙，发飙/index.html","cc5aa23c34acfa95ef9c63a9d7a951af"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","6a6c9128451e314a603bf17d5575327e"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","804b4ca42d60aa9c376b9cb0fc6a12c8"],["/categories/短篇/index.html","1efd9ecd73b35e5db88d5eaab1d919ed"],["/categories/短篇/玉生烟/index.html","0b6a95e3f73cbf47302ded8d932b835a"],["/categories/破戒/index.html","96853f4b377cd9080496032d676bb599"],["/categories/繁城之下/index.html","b1f1775ba97026a56ba70420ed069843"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","bfa21e2593a593dc98ddd2fa40405d33"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","333c7f0741bf790b26a3dfc695caaadc"],["/css/custom.css","872ed5033713ed796baf581710e36e83"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","444f87686f7e9f0604d2c9388f7ec6e1"],["/css/modify.css","26e0a2787a41139e8fb83e971ca262e0"],["/css/var.css","df561672f23f2461ca1fcaf3fab9d902"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/img/wallpaper01.jpg","3af061aeb66c8904f2b1d2a72d8c7617"],["/img/wallpaper02.jpg","2ccf4a5eab2c87108b569cc012ccada2"],["/img/wallpaper03.jpg","f8a085e5f26352591b7ff639eb5a0dac"],["/img/wallpaper04.jpg","4985254e30803a1c1d2cad0cb7c773ee"],["/index.html","e4fff10861c07a00ae24c790368c5933"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","f4490dd3c7c82d19287bfa579db463da"],["/page/3/index.html","2a03c658b93d39c9012b8d1c12ef68b5"],["/page/4/index.html","fc8362a61770890cb2389b59f8b47c66"],["/page/5/index.html","61f6cb3316694b5c282e8c2499ba261d"],["/page/6/index.html","bcf424c14fb28ef57130dcf092a44cb7"],["/page/7/index.html","c0526c9e509bc082a46e79a2ad047718"],["/page/8/index.html","15a2f006fc10825cb4a9d67ce250c21a"],["/page/9/index.html","2ecfde8fa342468f184f2052661e6cb2"],["/posts/1083795192/index.html","a3c4555b996304382dec7fd98c85e323"],["/posts/1099216759/index.html","690bf172b3d28a9320fd46548282382e"],["/posts/1195093070/index.html","9ca39a8d8961c4147141cb970eb1f8a3"],["/posts/12506394/index.html","3a515b5a529ab2e0db242c0591b35527"],["/posts/1315809802/index.html","43f4387c041775b0258e423d929397dc"],["/posts/1329165323/index.html","74ff94c6cfae991d13bfba123fdad9ed"],["/posts/1378666774/index.html","afc3b353c7fcaa4f7defb0e9709f8d71"],["/posts/1407316490/index.html","da9acbf95656e34e268e3ba3797233e3"],["/posts/1434824932/index.html","9d5dfcb02b76eb5b213c3046e5aaddc7"],["/posts/1445707477/index.html","b2a4309e02ec7adfa32297a0be4e3cde"],["/posts/1465373355/index.html","0bac47f0438dec552da6f0cfec4f1c7e"],["/posts/1681850936/index.html","d440aebe01b89c04142fd42ffc2dcc4f"],["/posts/1710373156/index.html","e28140a6e3d366fdf7c46c174ebf1c52"],["/posts/1720998546/index.html","6807721eb0536d67de0430711530d63e"],["/posts/173005120/index.html","9b0bc8c8de646206df2a43a9d7e3ff99"],["/posts/1988799958/index.html","63579c46ebeabe72595642f34f8e1c63"],["/posts/2192148155/index.html","ce23710ee8a342e3febce2305bd19015"],["/posts/2229302539/index.html","042bc632f5216478b6c366aaa98fb93f"],["/posts/2492968201/index.html","52c09dc0911be990bcd5568e0755f839"],["/posts/2817232307/index.html","639c8a51ebd6fdafa8762661ecae1f8a"],["/posts/2949714254/index.html","66d814a0c705bad0056e6ba57e499216"],["/posts/3002318373/index.html","76ae2006589999914978a2920719ccd8"],["/posts/3076558902/index.html","77034b6199f7a41cc13c30f4d7eb0820"],["/posts/3147359483/index.html","ea6ec6de443abc32d67806dea9935ae0"],["/posts/3191465731/index.html","2349e2f79828d3e57adda2919fbde14d"],["/posts/3459697331/index.html","78d964b6c97a23e99510a8cf9bfd800c"],["/posts/3489395119/index.html","0abc68b9720b3a8ecca700b96402f577"],["/posts/3525870963/index.html","7bb9240f47978f8e009c01c3730dcb4f"],["/posts/3640780602/index.html","de26f38d53d1647afe0b2be1b1ed610a"],["/posts/3699598685/index.html","5488ad7f941c50ec50ad621b1f9a128c"],["/posts/3712900673/index.html","cf27fe6b4c9942e69750fe8478ef8e79"],["/posts/3770599674/index.html","3df6bf883bc0c3d0ead896ffaed7502a"],["/posts/3935350387/index.html","69c8abc03d337c3012ef6d8d7de463e6"],["/posts/3948778863/index.html","9b61a9f189cf6c85acf0c2e4f4d333e0"],["/posts/403803703/index.html","781bc810c1dbfefbdbce30c40157b466"],["/posts/4041933047/index.html","7bac4d33e962e8136f0ac201da31eebe"],["/posts/411074811/index.html","3158a994c0d14a94defe7e4050f38bb0"],["/posts/4113963045/index.html","e23878af30d66c9899f3724143048652"],["/posts/4163174813/index.html","59255d2049aa0b0508b00659db708467"],["/posts/4192746113/index.html","33314bfe8d0666b580602c0f65b84973"],["/posts/741067372/index.html","c461f19d022c13892c7c6780c84ee314"],["/posts/888354975/index.html","18eddda42c6a6100077d39da645e6156"],["/style.css","ca6330ffea2597dc9c83790f64ed2a6a"],["/sw-register.js","f45d1a616d4e1cb1adfbeb4b33a5bab3"],["/tags/index.html","800ee75dffc188f76130008cb98f9d00"],["/tags/冰与火之歌/index.html","9073d65c59eac5b05fcc3276f0fb5e63"],["/tags/冰与火之歌/page/2/index.html","26ce17000e58da50de912435f4f4551d"],["/tags/指珊/index.html","2d16623585cc1dfe69dcc1e39ba4ba9a"],["/tags/摸鱼之作/index.html","5361bc83709717eec095f965010eecfe"],["/tags/日常/index.html","db7da7a2bd256da3b4892af3da7aae0f"],["/tags/柠梨/index.html","76bc6602a6844022fe96ed97af3ff857"],["/tags/柠梨/page/2/index.html","b7c1e4a2a88a2b3b0842929309ee2840"],["/tags/柠梨/page/3/index.html","8077882a079b6379107ccf8651f44c62"],["/tags/柠梨/page/4/index.html","9777ab8ef422ea9be85c3aa67f1e2b60"],["/tags/柠梨/page/5/index.html","84b38ec86a0d8bbc87b3226b6b8b4447"],["/tags/狂飙/index.html","69ba68fc27d04416a9b4de1edc1e0c24"],["/tags/镛武侠/index.html","22004cc098647c3a5db5e2fea15e8e61"]];
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
