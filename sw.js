/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f4bc01e40de5d03057958cfb53d1d5fc"],["/about/index.html","a6a5abf6a51e857560862574c723ed1c"],["/archives/2024/07/index.html","f47d48c860f7fe3f75c179782d5b6e1f"],["/archives/2024/07/page/2/index.html","02b11bfb0f3c258175b69b4d3c8f856d"],["/archives/2024/07/page/3/index.html","ae7b08ffb4dc842058006b794bd8eb55"],["/archives/2024/07/page/4/index.html","ccdfb05701d7ba3072b82d50e31a7fbf"],["/archives/2024/07/page/5/index.html","e808d569342c9b29fbb6e055e54f6220"],["/archives/2024/07/page/6/index.html","1ed45634df0fe0e099bbad90ba59550d"],["/archives/2024/08/index.html","663526b1444c027f1379986d67dc9f31"],["/archives/2024/09/index.html","865dd8ea15085e675a03fee46ea0aa09"],["/archives/2024/10/index.html","0a341475dcab9a9d6cbf9f20d0595914"],["/archives/2024/11/index.html","04bef60226004a7edc0cc1311983669b"],["/archives/2024/12/index.html","c1c8dda8fe639a042d465ac5af00fb7b"],["/archives/2024/index.html","aed184dce33557a3c7e3a9cc7d45bbcb"],["/archives/2024/page/2/index.html","c578d630d60c4fe260cf296d158437ec"],["/archives/2024/page/3/index.html","6d5db42402067c369ccd95797a66210e"],["/archives/2024/page/4/index.html","6f7685467007b9ec0d8d1a441bf8a0b9"],["/archives/2024/page/5/index.html","f0db87935ee396b32b9ebe41c70e6206"],["/archives/2024/page/6/index.html","b55c2a50bddaa5813117032fe8d11dfb"],["/archives/2024/page/7/index.html","ffc37c1107c3cc45c3799912c623b918"],["/archives/2024/page/8/index.html","48389c7c4c7de78cb36ba7bd808f8ad1"],["/archives/2024/page/9/index.html","f57a3f5fa7a547c40245beab98cbf81d"],["/archives/2025/02/index.html","815b5e5eb9ed8cb75870fb470ce2b763"],["/archives/2025/index.html","1ab142f01949869897adc797322f182f"],["/archives/index.html","24ded7d90c716eba985901947619471f"],["/archives/page/2/index.html","00fbae52947d1bb5d11c0c7a94de9c69"],["/archives/page/3/index.html","092c616ab2a33a48061a36c3e177d99d"],["/archives/page/4/index.html","073c6067b62a9a6bf2be3f52f70fecf3"],["/archives/page/5/index.html","4afeb5dc1191e4ea500e4756fb4efe66"],["/archives/page/6/index.html","57e364ad49023794e11fb931a09c536d"],["/archives/page/7/index.html","4314fae8102bfa6938d851f8669ed083"],["/archives/page/8/index.html","973e0613bfd95bdd5940d6965f2989a5"],["/archives/page/9/index.html","3887e0d212fa1f63c18c60b6fb58a46c"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","bdfdd56ec4b7c8b243a0ffcb736e0e7e"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","9c9c3420558043c418684da322905281"],["/categories/与敌同行/index.html","0ed79e223b57e3d6e22aeaf97fc77ebf"],["/categories/与敌同行/page/2/index.html","4a8c345349a49a09b75c0f920dfd6007"],["/categories/与敌同行/page/3/index.html","e35abd6b88d55d7686713fabc7953667"],["/categories/与敌同行/page/4/index.html","b9f166e711ba24594370fd00df815e46"],["/categories/与敌同行/第一卷-双镜/index.html","cab0702238df93e8f743d0e9c27a79c9"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","78d56e4a76f85783f830d1b47d6f06e6"],["/categories/与敌同行/第二卷-信天游/index.html","ffd046de2734516bfe087326271e4dbd"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","6fa50e0ca0342f0c24191cb5504362a8"],["/categories/嘲鸟之歌/index.html","599b225d7a374829f3ba0644125cc7c6"],["/categories/失落的应许之地/index.html","d6fb4eaf2e8149411f4d6acd3ce36271"],["/categories/月照天山雪/index.html","c28014b991ddeccbeb2e137e3804caf9"],["/categories/月照天山雪/page/2/index.html","06480216e1a3df76a97dcd05889a3ca0"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","5e139fbc5cad977e0f7234ed328782ec"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","c0f986c6407131393637299582c8953b"],["/categories/狂飙，乱飙，发飙/index.html","22fbc3adffb0a6f8b784227d5ea1de6a"],["/categories/短篇/index.html","7d581505f5f312d761befc925f20c1a3"],["/categories/破戒/index.html","2d9abd1f8b61df3893e3b6ed1f6c6121"],["/categories/繁城之下/index.html","6a1d7f7f0d1976fb9f39c9423aa3182b"],["/categories/长夜漫漫路迢迢/index.html","5b0015b9592671e96259db34dd640ece"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","2f4d760123e19fceecd23fe4ab50936f"],["/css/modify.css","2f616e64a82a63c92312da01b246ec3f"],["/css/var.css","d72cd7a5a096272fe2adab78fd1f940c"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","e950616aa4a72f9f1f8ecb5474d5331c"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","4224ba6bd24af74cd970c62c0ff0b444"],["/page/3/index.html","baf965f1a7b95b86595f0b03be1768e0"],["/page/4/index.html","29e3103613046291deedbd0952b5a131"],["/page/5/index.html","26048a7fe38617c3391cfe744f91bfc1"],["/page/6/index.html","c60e371f061ef6d96ed82dfe868be380"],["/page/7/index.html","569d672aa8849061033261d6b434b68d"],["/page/8/index.html","ce8a5381d41d4ac904abdbb705e2f8c8"],["/posts/1083795192/index.html","ae2101180d0503e7cb0d84af27956f8d"],["/posts/1099216759/index.html","201410c07bbfe4c85f013bd5169fb659"],["/posts/1195093070/index.html","a9fc244f330e49914f8e63350f5b3e0a"],["/posts/12506394/index.html","4b7c5705166f87c99a2693899e179aa6"],["/posts/1315809802/index.html","7cfc6bc311d82260619788b4e0c8688d"],["/posts/1329165323/index.html","8ea75ae140354946287107ef9a32d4cf"],["/posts/1378666774/index.html","2d58f900daacb3c9114eff92c5856089"],["/posts/1407316490/index.html","75a8e32270050d7a3b0c77fc3e770e13"],["/posts/1434824932/index.html","8ac7da8e1742d695e38cd7f84829536d"],["/posts/1445707477/index.html","1471bc22bc40cae2c1417b1fa5ec4db1"],["/posts/1465373355/index.html","1a7fa1b914780247764f25abaf98dc06"],["/posts/1681850936/index.html","b707e1b7ef40994094b29f763ba09a7b"],["/posts/1688557772/index.html","72affb121119a96c621d4e72c5b29206"],["/posts/1710373156/index.html","010b2addc2de6ea7bb2844b4e5b81087"],["/posts/1720998546/index.html","ddeeba6bb5deccbbb60c9e470da38d88"],["/posts/173005120/index.html","67e8e93c58393e04b1801413664f406e"],["/posts/1766000773/index.html","71b7f4d36385d0d3c1602a84c536792b"],["/posts/1988799958/index.html","0cc0e7d702feb060814964671bf24191"],["/posts/2192148155/index.html","d3c556bbf20bb922c992d83168686792"],["/posts/2229302539/index.html","1afe6664252c5cf7e8b7d998d5ba0b7d"],["/posts/2492968201/index.html","e73772a09ec3fe6c7b46a3b0ab390e03"],["/posts/2949714254/index.html","d2008fed5f42241020ce2446a364bcc4"],["/posts/3002318373/index.html","a77eac9e1b560a481c62ee52ea18442a"],["/posts/3076558902/index.html","f648bbb66190548adb8d71984ee40e17"],["/posts/3147359483/index.html","518bba0c326af23e3b4baaec94ec6bb3"],["/posts/3191465731/index.html","abc8e7149fa241e76e306d47cb1ed2ec"],["/posts/320179123/index.html","543384f8916a05df29c90ef499abf748"],["/posts/3459697331/index.html","1de588be6e10d0a54282143769e7057b"],["/posts/3489395119/index.html","6686af523436322282adb955f82b4030"],["/posts/3525870963/index.html","acb3910bda0521e477ea66b8c338c6ef"],["/posts/3640780602/index.html","c7eee1ba6f8ba3e31fa4f13951a29f6b"],["/posts/3679626959/index.html","b7063f238dfadd3ff9e732eaf2c65e1c"],["/posts/3699598685/index.html","ad18d40c01efe7c6f4a08a5bba068f80"],["/posts/3712900673/index.html","b7191368a9e48389bffb0a59d48766e0"],["/posts/3770599674/index.html","c43aa73dca68a793f520e963d382e714"],["/posts/3935350387/index.html","e939de6ae22a921ec9fff069cc473a01"],["/posts/3948778863/index.html","a599eec5cfc3bec8ee950ecbbc697d85"],["/posts/403803703/index.html","c86bd391b08bab66b18ac87ede87e50c"],["/posts/4041933047/index.html","0dad13f6297734563d8a700c77902559"],["/posts/411074811/index.html","b47572773647be4287734c4261bec17c"],["/posts/4113963045/index.html","2698a9c649b09422766b79effee2938c"],["/posts/4163174813/index.html","d702acba8c9894fd4c3d28d489dd9ce0"],["/posts/4192746113/index.html","13ad0a583f36b56636522deafc608bbf"],["/posts/741067372/index.html","927d1b822a86717eef581191ba847a9f"],["/posts/888354975/index.html","1fa8fb9dce422f55411181f00f18737a"],["/style.css","a2a421ba34482d8928853fe0aa4321df"],["/sw-register.js","6d0b167737bfe21888978a8189ed8a48"],["/tags/index.html","8b80a8e3947c409c143b93b06508fd9c"],["/tags/冰与火之歌/index.html","3ea1f916f1af50ab3d9e71fd8e306420"],["/tags/冰与火之歌/page/2/index.html","94fdc6c0af37d2220e4b8c1e5104d07e"],["/tags/指珊/index.html","9c9446a23601f0c4072db92b56eb10bb"],["/tags/指珊/page/2/index.html","880295b12401b8868ba638c7de33e3d5"],["/tags/摸鱼之作/index.html","49918041cca4e8a6755ea8df097f858f"],["/tags/日常/index.html","5882c7c8324b649c3895e3ee01be7974"],["/tags/柠梨/index.html","b2948af888ea0be7967a545532e94e95"],["/tags/柠梨/page/2/index.html","ffa053437933dd62cf8b474a7448a1fe"],["/tags/柠梨/page/3/index.html","0dc9b967812e976471889db372666732"],["/tags/柠梨/page/4/index.html","577683b0c012005569393f8832a3f0c1"],["/tags/柠梨/page/5/index.html","a18a8a1054ec899b316a323f60772807"],["/tags/狂飙/index.html","f2182611c211f11ccddf1a943aed2624"],["/tags/镛武侠/index.html","edbef89ec907c7631fc2e4b2b2c4e828"]];
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
