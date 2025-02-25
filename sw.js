/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c45dcca4ba1c7a1dd94dcfcb89f1118e"],["/about/index.html","454ab9d3f73baca0f44e7fedc12aef49"],["/archives/2024/07/index.html","d06218fec3caaebe1c4cb599665c5931"],["/archives/2024/07/page/2/index.html","884597deae2c2013ec6893ba6305eed6"],["/archives/2024/07/page/3/index.html","d131c58b479a01b98e53f079b21ec26c"],["/archives/2024/07/page/4/index.html","86f27c233cfdb892e8bcc2b4c173b533"],["/archives/2024/07/page/5/index.html","d4bbc37065594d1963215a31bb27e60e"],["/archives/2024/07/page/6/index.html","ebff56b7e7af6b619aef0071975a43b2"],["/archives/2024/08/index.html","92747bf18da365a455ff669f847ac436"],["/archives/2024/09/index.html","ebf49151aa4799cfc4161ac1143e5b0f"],["/archives/2024/10/index.html","670cf9f87289ee383744d8dac6502d98"],["/archives/2024/11/index.html","eed041358ff82dcd8b093b9f294a1f96"],["/archives/2024/12/index.html","38c741c84649186237d14eabc604d603"],["/archives/2024/index.html","d89345e053876e56f8102863a1f43f4d"],["/archives/2024/page/2/index.html","839b19d9caffa3daebe994bd7d9921f9"],["/archives/2024/page/3/index.html","eb288e5a2b538bc509036ef021d59c6a"],["/archives/2024/page/4/index.html","d68a2b90098389da5792dda13424852f"],["/archives/2024/page/5/index.html","83fe89257ed5db4902b1cd98337bdca5"],["/archives/2024/page/6/index.html","1806d9e4eff28bb47a55f96fe01d8b3a"],["/archives/2024/page/7/index.html","a2ef197a49d9c6c481026d7bb9f54451"],["/archives/2024/page/8/index.html","d9e0fdc068a944cc86cbba8c5651a6b1"],["/archives/2024/page/9/index.html","631a0cb45befa951c2d6f2c7fdd897c1"],["/archives/2025/02/index.html","56ea27239c1b0e968921cfa956b8b66a"],["/archives/2025/index.html","57996b84e96d2de78d1ebb640eb7bdde"],["/archives/index.html","4b443f78ec08d21ac3dcac79d46b0c06"],["/archives/page/2/index.html","f4c9b5dbd85c218a5cf06d508a649f8b"],["/archives/page/3/index.html","4dd9436a963194bcd59595bd8f2fa289"],["/archives/page/4/index.html","db6c1bcc4606e7b51bdbf6d5825e03cf"],["/archives/page/5/index.html","a7f6c00ce99553de0511f837edd82723"],["/archives/page/6/index.html","8363794c8b1c988498c1e25141c9541f"],["/archives/page/7/index.html","ae6733828d016d97d74a857debcf43db"],["/archives/page/8/index.html","76616ee03d832ea674fce6c200339f49"],["/archives/page/9/index.html","c53866f8f848a9b47b8982746b775c66"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.png","c24e009c5fe94aad43ef9796f0cf1d54"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","7cb9e04b015d6cb4f8d5712241b5d15d"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","68cef7bffea29d6d4ccf8bc05d583fd4"],["/categories/与敌同行/index.html","01c2b91691dc6e8d19e3cf4244247acb"],["/categories/与敌同行/page/2/index.html","cb2cd166cc7a6e4fff25d5a2f41e2328"],["/categories/与敌同行/page/3/index.html","acac1eda629bc896726917c9240f85c9"],["/categories/与敌同行/page/4/index.html","5a2e6c09d3811596327c56b2c1fa8d70"],["/categories/与敌同行/第一卷-双镜/index.html","dd95970d1c86f9bc4589dd5d77859144"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","c1e2c2c842aa179bb0bf373d28c233b2"],["/categories/与敌同行/第二卷-信天游/index.html","8dcdd1c7c7b227928c151cd6695ac309"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","7c166bc6549e2ee237b635ffd5ef352d"],["/categories/嘲鸟之歌/index.html","3fe28abb1e50c2046c0ab03b4f5fbcd7"],["/categories/失落的应许之地/index.html","14f2728d5e0f65ae58f99de4e7d202ea"],["/categories/月照天山雪/index.html","a558053d756608de070f7a881f3b848e"],["/categories/月照天山雪/page/2/index.html","2c8a5e080b4b544e414c4bacf3b5d81f"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","53aadfaf4a70ed2966bad623cf490084"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","0c7c413eb88436fa2977245cf9d861d4"],["/categories/狂飙，乱飙，发飙/index.html","66f54ff75fb2b44bf294fd898dcba414"],["/categories/短篇/index.html","0c34bfce68f00e8987c1e4e1802deabc"],["/categories/破戒/index.html","c144169a83da8b63f0319e31b890ef29"],["/categories/繁城之下/index.html","deb57f9782ac604cd8014333d3f6f83a"],["/categories/长夜漫漫路迢迢/index.html","6b9dd39f64e6299e23eb7d7e76507d19"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","2f4d760123e19fceecd23fe4ab50936f"],["/css/modify.css","2f616e64a82a63c92312da01b246ec3f"],["/css/var.css","d72cd7a5a096272fe2adab78fd1f940c"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","7d718fefa038680ecfd9e2ab5b5dbf0a"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","9ab0d6c779ad17fc36b10beb2e8a849c"],["/page/3/index.html","5b51d2ed1e06e3078861f519edce4109"],["/page/4/index.html","f1c0d57b7eb91d202889b3645d722266"],["/page/5/index.html","e5f89e176872d081418a56e37f51397c"],["/page/6/index.html","cbb56fa5cefcbec9ab1f9b08f17b1843"],["/page/7/index.html","18f5da12df2081e00c137b24f4d52508"],["/page/8/index.html","d83715c29c7c7414628920e1ce3418f1"],["/posts/1083795192/index.html","390b649227b1d3af71660fb78d7c4ae5"],["/posts/1099216759/index.html","3f2dde0480af0ef76541065388b725a2"],["/posts/1195093070/index.html","f60a9697e0b98340b3e41ea24378e28d"],["/posts/12506394/index.html","dae98657127101f5103d50098e09f040"],["/posts/1315809802/index.html","378dd5b807a56ca0112e3dcb25d3d32a"],["/posts/1329165323/index.html","155748b448e35e75be5dec6e37be9679"],["/posts/1378666774/index.html","438078aea383db87d98df3a8a08de3b9"],["/posts/1407316490/index.html","1548520d699abee004fb028a63d33be0"],["/posts/1434824932/index.html","8d6d457a52aed74c4ae1f019449bcc29"],["/posts/1445707477/index.html","799b73426acb6d0354ed11f93c0c66ec"],["/posts/1465373355/index.html","09e7faadabc93af1e279165cad2d92c4"],["/posts/1681850936/index.html","9e4772f2cfefe31c697c69a55aae27e0"],["/posts/1688557772/index.html","0da0f560cb1a335cd9f546d1c73d0043"],["/posts/1710373156/index.html","e45de3ef0556f35dc721d86f09c40f4e"],["/posts/1720998546/index.html","5aab6ee916c66d38f386c1abbaa7d9ec"],["/posts/173005120/index.html","f6b6a2896f769cc78d53141f9e858b93"],["/posts/1766000773/index.html","beb9f5990a6c1da1257657263b664128"],["/posts/1988799958/index.html","b144f3f4504db8914944977ee262347d"],["/posts/2192148155/index.html","11e8004b7ab3aadb24c42acb004d9b79"],["/posts/2229302539/index.html","1fe4579be2ccfbd790620e876625b68d"],["/posts/2492968201/index.html","d4ce00310835891138ef5f735246b2f1"],["/posts/2949714254/index.html","dc8d751191d3a29034079173df23f47a"],["/posts/3002318373/index.html","aedbb3239e7c5e02ce062fda58ba86f8"],["/posts/3076558902/index.html","df290eb37546c866057a908e4abd9639"],["/posts/3147359483/index.html","b9d67c8eb88bac3b1a53f270d8943abd"],["/posts/3191465731/index.html","974d875ee4b9cb5eaf2ca72392c5c64c"],["/posts/320179123/index.html","49abf20f73854f06d26fd26de1c74147"],["/posts/3459697331/index.html","f01f900213a8d671ecec0548075a5dc5"],["/posts/3489395119/index.html","3a31015177f97e9b43d62d4724d83f1b"],["/posts/3525870963/index.html","eeb9672a7b312757fa9b1788c6634a22"],["/posts/3640780602/index.html","baa23f23a72736b5368f323a5816e5f6"],["/posts/3679626959/index.html","c9d930ddf617ff01c264c955185b46a8"],["/posts/3699598685/index.html","85ffaf485303a05bf459fba72f236125"],["/posts/3712900673/index.html","bbf8bb89683d290aea5b2cdc87055400"],["/posts/3770599674/index.html","debf889caf7dd3ba7edf07edf6e58883"],["/posts/3935350387/index.html","7a653d7d87dac13f4734eab13ff813b6"],["/posts/3948778863/index.html","c53252c0f95c2720627970d3e1555c85"],["/posts/403803703/index.html","ac842981c28e82f356f009c2ff1cdb64"],["/posts/4041933047/index.html","76c6a99d6dab09f934d07ae6c6b07117"],["/posts/411074811/index.html","a706b7c84c507ab7b9b09dd4b5db6d3f"],["/posts/4113963045/index.html","60e6be20e0be9a520c320dd3ae4baee3"],["/posts/4163174813/index.html","a0eed8ce216a93fdf8eba666e8051846"],["/posts/4192746113/index.html","bb35a1be64235324b9fc9e0ea1b210bc"],["/posts/741067372/index.html","1fcdcae69598a3e082a1e429355716d1"],["/posts/888354975/index.html","4f073cecaa6394876dd7a558a602f4ac"],["/style.css","8dc732f02e06ee6ce4939ff24dde09f6"],["/sw-register.js","dcb18b865fc8244d6f1c3d00fbbc0a01"],["/tags/index.html","e663914ec24f59615673c29501c46cef"],["/tags/冰与火之歌/index.html","3fb86bbd76594ee10a89aaebff4ab4bd"],["/tags/冰与火之歌/page/2/index.html","10ed1661204256ce82fb1d139109ed87"],["/tags/指珊/index.html","f806c9e2a4b025f31b6b64204f7f9fb8"],["/tags/指珊/page/2/index.html","fc798eba5c99664128782af02b22f813"],["/tags/摸鱼之作/index.html","fc3d7c73590695d0776a0ea12f3ab334"],["/tags/日常/index.html","c7e93eb3ca3926bd7e3578df8264a592"],["/tags/柠梨/index.html","d9cb4308babc359bdda77d9bd238f8d1"],["/tags/柠梨/page/2/index.html","9f4a86e16108e1ad5326c548a3379ba0"],["/tags/柠梨/page/3/index.html","ed895986469172c3ce696e526fbdd9e1"],["/tags/柠梨/page/4/index.html","89f145028e6078c3d8f6d0e911128ce9"],["/tags/柠梨/page/5/index.html","3c8cec80ed3a1b716a0a5da9f7adbfa3"],["/tags/狂飙/index.html","c569ffda8cc5d5b01e646dedcf076f66"],["/tags/镛武侠/index.html","f105c5411bc8cbd077a5742ab175e449"]];
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
