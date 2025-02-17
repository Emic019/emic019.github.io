/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ff7b1059d7cd3f232228dd3b43974db7"],["/about/index.html","72a1e1def846de4bfc4ae9ba6408afba"],["/archives/2024/07/index.html","f08af1c9ab86d2cad7e43c49f3f6e3f0"],["/archives/2024/07/page/2/index.html","fcc5328a6df29e3d0446cad35cb1ba01"],["/archives/2024/07/page/3/index.html","2f640f34be1a74d69708d450b93e139e"],["/archives/2024/07/page/4/index.html","703388b091c5b3c3786e57e908e0b1dd"],["/archives/2024/07/page/5/index.html","24ed588e5b414f3cc50ad11a59526961"],["/archives/2024/07/page/6/index.html","bdd6d6040bf9f87ed2cd61d53351399b"],["/archives/2024/08/index.html","47891e8a1bdf3a644a3b33951a4a6b4c"],["/archives/2024/09/index.html","f2edb92067f6545aa8b937a0fb325baa"],["/archives/2024/10/index.html","05f0c3f1af2c1cc8dd5b170259806c43"],["/archives/2024/11/index.html","2e83b5700adb4184cff10993fa15407b"],["/archives/2024/12/index.html","89e3a128bf93002a8953ed988dfc0c70"],["/archives/2024/index.html","374a491736dc95e0badd901e5d3660c7"],["/archives/2024/page/2/index.html","7931d617904cf9810aae11665d50dffe"],["/archives/2024/page/3/index.html","7bdc4d44d03f69f8c291a10b707b3b40"],["/archives/2024/page/4/index.html","8b29134c68f19cc7d81a083a5aaf18e6"],["/archives/2024/page/5/index.html","619d31e2ce808b04dbf0e9c010a29e4b"],["/archives/2024/page/6/index.html","b8b504178fd4bfc4006c63776d0266c5"],["/archives/2024/page/7/index.html","5a9423c5d86ef317ab422864686c3089"],["/archives/2024/page/8/index.html","d0ad625de98ab107c1295634b7e554d5"],["/archives/2024/page/9/index.html","d67af84a03d6ec901f258bfcdb09ca4f"],["/archives/2025/02/index.html","65661bb1540323175fb6b310ae4f5086"],["/archives/2025/index.html","1a5e44619cf80cf0daa06635df5f6e1e"],["/archives/index.html","74490eebb8e2d350a1bd7c343975fbd8"],["/archives/page/2/index.html","77768f798b23cb57749a02b1c42a9759"],["/archives/page/3/index.html","9516cc6bd0b8d8cb6f1ec03fdb5869f2"],["/archives/page/4/index.html","a8f4659f8bb03656dd9c8b0e4cde373b"],["/archives/page/5/index.html","a95813cc36a4c0595bdc97d890461f8a"],["/archives/page/6/index.html","805073065d16d11ff32527f8bfd20c3d"],["/archives/page/7/index.html","84735b2f72fdd59edf4f34f5e5f2f589"],["/archives/page/8/index.html","e5c0535bbd0d5cbbffa13eafdd461340"],["/archives/page/9/index.html","b4bd245bdae8851fdf66c2e61c1f71e5"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.png","c24e009c5fe94aad43ef9796f0cf1d54"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","a7773de1bbd4f5ae36d5e2ff932092b4"],["/categories/与敌同行/index.html","d58c285fb7f5cc40aebdc840176f8da0"],["/categories/与敌同行/page/2/index.html","5bd94fdd33c5a39b199d94afb86b0770"],["/categories/与敌同行/page/3/index.html","496958fab1e7d78d53cfe80a74dfea5d"],["/categories/与敌同行/page/4/index.html","754ca93cdbff2527d82a361bc5b0f2ad"],["/categories/与敌同行/第一卷-双镜/index.html","04343527361c673922ae13ed7547240e"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","fdd959b41643aaee3a74cc27eb36f933"],["/categories/与敌同行/第二卷-信天游/index.html","9f10685dbe62ebcf95513a081b371004"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","be8d087401059016692e008c1de01bc9"],["/categories/千千万万遍/index.html","d98c4584947ede1f98eb3d9c937068b4"],["/categories/失落的应许之地/index.html","bbcfe2b17230c14bab1390fe1ee9a044"],["/categories/月照天山雪/index.html","e07d9e5bd64592a921647463db0a5930"],["/categories/月照天山雪/page/2/index.html","72f86a5de30b7025df5d088ddd0e6da1"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","1e7e0060999f43a5f5f7873ea0836887"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","a37a1cb0d16e61f536e144e533ea62d9"],["/categories/狂飙，乱飙，发飙/index.html","352916d133576a305c3e349d9781724f"],["/categories/短篇/index.html","1115ede4d93bce58a560a8c87167c8af"],["/categories/破戒/index.html","9634793f10a6f614e87ec957f03fd401"],["/categories/繁城之下/index.html","a2ad327fe22669829ef184dccca5daa4"],["/categories/长夜漫漫路迢迢/index.html","d5336cea6a0f88896baeea5ee5175e7f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","db3a89956eba4d127f4aab5a444aba93"],["/css/modify.css","4aa7cf2bd50e24e48aa7aa98bfd6713d"],["/css/var.css","3dd845baa4d6b126c53d394f79248d02"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/img/wallpaper01.jpg","3af061aeb66c8904f2b1d2a72d8c7617"],["/img/wallpaper02.jpg","2ccf4a5eab2c87108b569cc012ccada2"],["/img/wallpaper03.jpg","f8a085e5f26352591b7ff639eb5a0dac"],["/img/wallpaper04.jpg","4985254e30803a1c1d2cad0cb7c773ee"],["/index.html","e0b6450bc98cc796b739660164f62785"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","5c12b2ff81febc21a74beffcfef1e2b7"],["/page/3/index.html","f13754b97133ba28c98bfb8b9f7d0995"],["/page/4/index.html","25ec5888202d7e635cfaf2064a6820b3"],["/page/5/index.html","f40377857772080f3f45f02673c8f063"],["/page/6/index.html","7d7e957ca7442d394dcd02dc98b023ad"],["/page/7/index.html","9e27e6044a3a65e02076bc6ced072fd9"],["/page/8/index.html","06c1b63b48210856d474931a70b41dda"],["/page/9/index.html","7793be19c73f734cd5df9002661ab690"],["/posts/1083795192/index.html","20dec5e9b2faa04650f867c66b032a85"],["/posts/1099216759/index.html","41b7cc2ffad72115e845aad9341f967c"],["/posts/1195093070/index.html","a960b4c77fb7b995d8c1b4dd41107849"],["/posts/12506394/index.html","5f2895bda223a9fe91599571eefb5685"],["/posts/1315809802/index.html","b2ea2652f4ab36a518842720ee4baeeb"],["/posts/1329165323/index.html","de4970c3cd9a1e5430822f22fc4cb160"],["/posts/1378666774/index.html","0ecb3479ff7e754cf8e89ad1b05fd69f"],["/posts/1407316490/index.html","e0363ab12c51eb7917e26b31dd52cf01"],["/posts/1434824932/index.html","490d02970318bf806ee0d3e65525389d"],["/posts/1445707477/index.html","0a9d3de50d36453420b0dbe5c7e355f8"],["/posts/1465373355/index.html","edb0b832e34be576389df62e8507409b"],["/posts/1681850936/index.html","1399e09349fc8381c478f5281bad1f46"],["/posts/1710373156/index.html","5f322252ef330db173056526f2458e66"],["/posts/1720998546/index.html","ec975da7909b8befd0dc59c5d7a99a2c"],["/posts/173005120/index.html","01b92e876077798ba773cbb9b8f8e4fc"],["/posts/1766000773/index.html","015363c913fda3441989a7a31c3677f2"],["/posts/1988799958/index.html","8a69e6f1a55c8e176f2dced071384770"],["/posts/2192148155/index.html","a042690ea89b0867b23fac880f7cd1dd"],["/posts/2229302539/index.html","b30ea0fbe792329d800f4307376c6647"],["/posts/2492968201/index.html","346bf7718838825468d48e08fd7eca51"],["/posts/2949714254/index.html","16d821049bafd144ec7b4e17af33ea10"],["/posts/3002318373/index.html","e954c94549c72b43947dd2c57a420ebb"],["/posts/3076558902/index.html","9568af31f4470d38af3febf40f540356"],["/posts/3147359483/index.html","e825d7d77178b5fb91b987ae43e261a0"],["/posts/3191465731/index.html","099461c884547e8a5dbc623dde28175c"],["/posts/320179123/index.html","f34b3646ea0999ebcf0a09febab758d5"],["/posts/3459697331/index.html","6887476cd2485d22477c1b39bd8f79c1"],["/posts/3489395119/index.html","14cb528fa8e79fda691b2592f248e0bb"],["/posts/3525870963/index.html","5e3f88b5bf2ff75394399c9fce2af178"],["/posts/3640780602/index.html","e6d8c2ea6d116f220c85d0496eb1f302"],["/posts/3679626959/index.html","ba4dc9413b2c72497608f74d360b5f24"],["/posts/3699598685/index.html","70da89cf15711004f8daf666e2d066d4"],["/posts/3712900673/index.html","1a8dfe55c4dd16fedd16674e477dc139"],["/posts/3770599674/index.html","224ed0a1d16b7cb5c507a4208df8809b"],["/posts/3935350387/index.html","1d55971d0b54a1839c3cae84a2a860b3"],["/posts/3948778863/index.html","802b1abc0371543ca9ffa1fbcd05e040"],["/posts/403803703/index.html","1e0563f72c79139cd1e3953b9c410d90"],["/posts/4041933047/index.html","219b55b7b6eefe3f8bd0012e61707281"],["/posts/411074811/index.html","fa0a262052b24190fb2bf3ba49e0df49"],["/posts/4113963045/index.html","cdc19866664ae46fff8fd843220a23d9"],["/posts/4163174813/index.html","36e99fbd0826fbe227aa4db2574ced5a"],["/posts/4192746113/index.html","996fb8f5a46b2db9372bf76a8774131f"],["/posts/741067372/index.html","fd21a12be3d07dccf46d6ef2a6960b20"],["/posts/888354975/index.html","dc41d7c6643fe89aa2c18f76140d2df3"],["/scripts/modify.js","bdd37c6b732f4f689eb0608b74480780"],["/style.css","91643d426a0b868a332361bb627be5fc"],["/sw-register.js","b5a0e90321fdc2ac32bc8455f497c256"],["/tags/index.html","260aee86eee2176f1e6b82135f4a6818"],["/tags/冰与火之歌/index.html","470bfbb6e471b8105f3bd3862b199816"],["/tags/冰与火之歌/page/2/index.html","32b594ad2a6ace5ab7873ceb6bd0da54"],["/tags/指珊/index.html","0b33797d28b8596fe022f961f813e26e"],["/tags/指珊/page/2/index.html","eb1f5b4eb8e7d0ffd47aefe4d4ae9a8f"],["/tags/摸鱼之作/index.html","d78b73d554d4333af25f84b6c1913b6e"],["/tags/日常/index.html","c8dc72e264d8d2e864a41fd552a4d071"],["/tags/柠梨/index.html","af19ae49cbb494f3b9c5db7d669bd75e"],["/tags/柠梨/page/2/index.html","85732b398ef7627bb9614f70d57ea73c"],["/tags/柠梨/page/3/index.html","bdd0afbc399aeeafe5dabf027a30adce"],["/tags/柠梨/page/4/index.html","fcabd5527690b3b9f1e88d0e63e2c719"],["/tags/柠梨/page/5/index.html","ce3a6fab9a6f12afece0e5f6a2a01a26"],["/tags/狂飙/index.html","7512aefec75f3be2c3ac098778e06939"],["/tags/镛武侠/index.html","05447a29907820af37a152c44483b76a"]];
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
