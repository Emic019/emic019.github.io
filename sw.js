/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2d9b3d24d5baa396e64847edbc975127"],["/about/index.html","a621685ea11f35585243d328b8cca0ff"],["/archives/2024/07/index.html","f16b6aa1fc33dd83f91b43aae7822b7e"],["/archives/2024/07/page/2/index.html","007f6be3f55477109568a4f38e358846"],["/archives/2024/07/page/3/index.html","863eb01a284f42b73c63e803e1803704"],["/archives/2024/07/page/4/index.html","97e0712df82ada2d71c2fe6f850a7bc4"],["/archives/2024/07/page/5/index.html","5f409c54ac4512236981a2335dc5a446"],["/archives/2024/07/page/6/index.html","8c7809c4d86550c6bfed88eda126a215"],["/archives/2024/08/index.html","d6a69d61fe99967cfe78280df3fc660e"],["/archives/2024/09/index.html","1e81f52289716ab7b6cfb00e1d2cb162"],["/archives/2024/10/index.html","c5d1ed50d453a50b9d749d27f71d6327"],["/archives/2024/11/index.html","4bbec1527f23ce43d6daa890f8fb0fd6"],["/archives/2024/12/index.html","9fef7dc1cbd3664e21cc89f27d9fc2cb"],["/archives/2024/index.html","416f60481e63370c4b95cbd7dadaff3e"],["/archives/2024/page/2/index.html","4c73d2797b47cc0bdb95c96602c284f8"],["/archives/2024/page/3/index.html","62b6f10e4f24243267aff92c8b9e26ee"],["/archives/2024/page/4/index.html","b84824da0bac1f546400a6e537a88349"],["/archives/2024/page/5/index.html","3f851836331afe8fab372a10223e7a2d"],["/archives/2024/page/6/index.html","bcf5315a5ce67704e60b370fac4b2152"],["/archives/2024/page/7/index.html","b8b6d51a175d7bc422c5e8bdfe23dd61"],["/archives/2024/page/8/index.html","85435abe18e0290cbaa4cc551cf6ce92"],["/archives/2024/page/9/index.html","00d597d7bf507bbb10b4587a44956f25"],["/archives/index.html","e34aac03916a2def5c46a0566f2017a3"],["/archives/page/2/index.html","e95398e6fd69999b5cd6be18c65c7838"],["/archives/page/3/index.html","5e79708f325913dcddcd4fff5bfc71c5"],["/archives/page/4/index.html","3816e463f3e44e97c9604162159ef214"],["/archives/page/5/index.html","aa94b516d84ff2286e03dd5a1ed62c07"],["/archives/page/6/index.html","6b23b5ce4b78dbf3b671583f7975bb92"],["/archives/page/7/index.html","bfcb9e108a1de5989af94a28b7d01317"],["/archives/page/8/index.html","982cc1ae01106a12ebf82493db86d174"],["/archives/page/9/index.html","7fffdfd6784e8853877d8949559a603e"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/其他/1.png","ec9fb4992df6a15e3ff859846f328d41"],["/assets/其他/3.jpg","be06d26a745a9a9996041fa01cdd1603"],["/assets/其他/4.jpg","21c68f2ac68d06ba3c8382317920b373"],["/assets/冰火/1.jpg","5d11951bc575fd9cca23d8e809e87727"],["/assets/冰火/10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/冰火/11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/冰火/12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/冰火/13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/冰火/14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/冰火/15.jpg","bb10d8889caaa772fcef5afc1311998c"],["/assets/冰火/16.jpg","bc3f8df7f9b0b2b0996c150b43122d20"],["/assets/冰火/17.jpg","ac8245c2522aa34a86a99ef6b6234eb8"],["/assets/冰火/2.jpg","568f924a8db5c61cc7a1ed60b483a088"],["/assets/冰火/3.jpg","cf93aebacaa007eca28ea6ae5ee4f5ca"],["/assets/冰火/4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/冰火/5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/冰火/6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/冰火/7.jpg","da39687e3dc6420f289fa4d34f691b1b"],["/assets/冰火/8.jpg","3231596eebac86ab2ed3f0ad6f8e817d"],["/assets/冰火/9.jpg","60414fb9fd49ea51a7426adf3536f238"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/assets/应许之地/1.jpg","386b34c194ee098e06e59baa29ce0cb9"],["/assets/应许之地/10.jpg","a13abeeca1b06e998487f7ea083f1168"],["/assets/应许之地/11.jpg","5c27c7ac237522ef009c3b4058933cdf"],["/assets/应许之地/12.jpg","b073469fb7d5410399f2ef7e01dcec6e"],["/assets/应许之地/13.jpg","a2485cc34286c2918e33a8392cf7d93c"],["/assets/应许之地/14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/应许之地/15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/应许之地/16.jpg","d7e182fcd04df710489c62120931a107"],["/assets/应许之地/2.jpg","409b484d8207f5bb6c5a4dda1b44a50b"],["/assets/应许之地/3.jpg","9a751c2d1c371aa78569f2755f114d17"],["/assets/应许之地/4.jpg","86a258c50aea229fc01317712c76126c"],["/assets/应许之地/5.jpg","358b27d5789b80e5f7365adf7bd1a806"],["/assets/应许之地/6.jpg","90d65f60764fc1dbdd76ac760bfe15a4"],["/assets/应许之地/7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/应许之地/8.jpg","5eb1bfa402b10735e6b80c6e84a5b6e9"],["/assets/应许之地/9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","ae4e1d30dbf673ab85c4821ad81d0367"],["/categories/index.html","0286f0786876bf20eeb2d8226eb68817"],["/categories/与敌同行（梨综）/index.html","b1e56ba656eedd22be1dcb90ee40fa58"],["/categories/与敌同行（梨综）/page/2/index.html","6cbe4ef80a2037710e0d527c1b2e5218"],["/categories/与敌同行（梨综）/page/3/index.html","2350971d1a855a819c768117d256d926"],["/categories/与敌同行（梨综）/page/4/index.html","7f79a447e35ffac26c2f9fe636d36c9e"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","d83719ba9e703c2269c8888ce8ac4401"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","867034008e15b8850e25b8e5a4423ad0"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","a431f80e2e69374c79b5382b8535d2ed"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","4fac80ef3f05eafbb7979a1821b2696a"],["/categories/千千万万遍（指珊）/index.html","1300cfe150ba0918c743cc79999546e1"],["/categories/千千万万遍（指珊）/page/2/index.html","0e5db804e54173de9718d60fc1a46325"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","a1b3d365f74ae19d56a06275e97b248c"],["/categories/千千万万遍（指珊）/同床异梦/index.html","aee619bad605bc9560771922430f74c3"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","fc3a45ce99a2d6c2c27057a3b04cfa58"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","02409d941711e16a8da6a1cde77e3812"],["/categories/失落的应许之地/index.html","9fa2ef3be72613b61b11b62096897a27"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","ff637c3243c95e679eefb7935c6addc3"],["/categories/失落的应许之地/神明的游戏（刘正毅）/index.html","bd16dbe119b009d22ef2899213e50e94"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","7e76d49b8e05ab3e1cd5a9186e8bd4d6"],["/categories/月照天山雪/index.html","abed9f7dd0f63bad08ecffc7be4bebd9"],["/categories/月照天山雪/page/2/index.html","c210e3fe194cf4611d335ee9f2132ce9"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","fd83c7fc36d94149552c1d2508391f97"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","77dfbee64ce4e4765bfe3c464077953f"],["/categories/狂飙，乱飙，发飙/index.html","2d264635cb816bb4b3a17dbfe81a3268"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","c97db98dce4a2fd04d37333e67e05e55"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","6d359f4c98b0d7ff0453e14849a163ec"],["/categories/短篇/index.html","f3af76a359592814736675ee39133cf9"],["/categories/短篇/玉生烟/index.html","0ee7ac10c5bc2cd6d25dd84910731365"],["/categories/短篇/破戒（马魁）/index.html","2a808b03250dc672593cc48d1383862d"],["/categories/繁城之下/index.html","1effcfc2546ee0eab1fc2eed564ada6b"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","b2611a211018cf5d9a73ff629c959ed9"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","afa09ef03a10ff67cc3b76a10d77823d"],["/css/custom.css","475aca3d476bc9e51a151d925a08366b"],["/css/gitalk.css","ba0a6171be3994d6f1c8f8c2631c848a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/highlight-dark.css","9192a6b76442242b779cb3aa840462d1"],["/css/highlight.css","6954c7e8264ce0390850441c7a357063"],["/css/main.css","cb4b5363115c8133c74e4696c6cba246"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/wallpaper01.jpg","3af061aeb66c8904f2b1d2a72d8c7617"],["/img/wallpaper02.jpg","2ccf4a5eab2c87108b569cc012ccada2"],["/img/wallpaper03.jpg","f8a085e5f26352591b7ff639eb5a0dac"],["/img/wallpaper04.jpg","4985254e30803a1c1d2cad0cb7c773ee"],["/index.html","48c1e843991a0d6e6406dee26f43591e"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","594e13ed829208218dd025d2a623a993"],["/page/2/index.html","8896378fdc8a1e2c12878642feb2ab68"],["/page/3/index.html","b54a4451cbcbee8d2ea72c43a673a5fe"],["/page/4/index.html","3feacc88750b3c5368512e84e5c40542"],["/page/5/index.html","30cc3bdbdba6bd5f2f5a375eec156ce6"],["/page/6/index.html","7183ce97c93b11996e8ebe049fa5cc40"],["/page/7/index.html","d30a0d2bc470c8228c04b8255c4cd70a"],["/page/8/index.html","c700c278680dab78e830ce53fe197c05"],["/page/9/index.html","28effeb1763e84645a12423a45cf4917"],["/posts/1083795192/index.html","8d7754b45b80d1daede2a0fbbdb63523"],["/posts/1099216759/index.html","ea6704d983b5cc8bee91387d69aad19b"],["/posts/1195093070/index.html","c2be9bb066fddb0b455faaac85786da4"],["/posts/12506394/index.html","064bf83e2058b04b26542ddfed3f09a6"],["/posts/1315809802/index.html","1e80dc77783960d95774171841b1a545"],["/posts/1329165323/index.html","559f8a98e2dc84528dece6f2e5f37c8d"],["/posts/1378666774/index.html","77ea79bf2e5b74ef79a8896355255996"],["/posts/1407316490/index.html","fee6add80a9ec5a14551789df3b0c531"],["/posts/1434824932/index.html","2c3c1fdbd69dffea7590b57c8bd9a170"],["/posts/1445707477/index.html","69235756c553c025eb2f4f5e20abca56"],["/posts/1465373355/index.html","433f61d5ba72e3aebc94a7393d351e62"],["/posts/1681850936/index.html","d6b8f905ce45dc58dfefb4e8da9b48df"],["/posts/1710373156/index.html","e9ca6ca8904f19ef7ecdf839b45c2fb9"],["/posts/1720998546/index.html","8841cdbb60991d97aa183ae6e4ea73bb"],["/posts/173005120/index.html","1afb19062013323fedfe24943fdecfbd"],["/posts/1988799958/index.html","ecf924bcc2956900727e56914eefb7e7"],["/posts/2192148155/index.html","82ced2484a0e5129a835c7bfdc6784c3"],["/posts/2229302539/index.html","af34eb8bcd5006aa87ff245058a72cbf"],["/posts/2492968201/index.html","becf9bc616cac2097822cf476cee868d"],["/posts/2817232307/index.html","b68b7a341922b192733ec475a2d89888"],["/posts/2949714254/index.html","3ad0e965295898c2b402aa6411ed0526"],["/posts/3002318373/index.html","3cb42569cde163df000d4f708c1e2fba"],["/posts/3076558902/index.html","6a2613d03fccb6b56394113e2ff16a52"],["/posts/3147359483/index.html","22436c3d7518abd90f8614279a4a7044"],["/posts/3191465731/index.html","232e88724e53884888e4f01e22f2028f"],["/posts/3459697331/index.html","b4804296c77208102a4d338ce3f9b5e8"],["/posts/3489395119/index.html","401e142595171885d5550f1281d193d6"],["/posts/3525870963/index.html","cba942b01f81849a7775e5b2d09411d6"],["/posts/3640780602/index.html","a2ef887e45aa1c36ffa912ed6f180d3d"],["/posts/3699598685/index.html","f90226e17b96f52e61d51bdba362bb9e"],["/posts/3712900673/index.html","a61489c26618e0cae7220326246cf2a9"],["/posts/3770599674/index.html","27cd389b16500c6ddbd5e9e20a616127"],["/posts/3935350387/index.html","43b64e4b4ce90efbe900f16583da24be"],["/posts/3948778863/index.html","588bf5fcfd74c3ce71437a6bf26fcbd2"],["/posts/403803703/index.html","e7e75d63518776aea8129f7057f29563"],["/posts/4041933047/index.html","112f4d02b3a38fe473208e46a540948d"],["/posts/411074811/index.html","1dc5b56c3e9f333694c143236a29d533"],["/posts/4113963045/index.html","e896631a0686abae1aab6dbd0f4a6970"],["/posts/4163174813/index.html","12c15c2efe0df42670c096295f1f6a18"],["/posts/4192746113/index.html","9bf11be7925c3f1db6cc5dd4ab90d0b8"],["/posts/741067372/index.html","80283c1ede984e7859d32160c2b452d0"],["/posts/888354975/index.html","d773f73e6e0d792cba0038ca6e5a1a4f"],["/style.css","1cd309502bec58999bba974fdc5feb33"],["/sw-register.js","417d9e58299dfb093b907f74a0708744"],["/tags/index.html","824cebcc2851002d19961a6a36b00e58"],["/tags/冰与火之歌/index.html","18276fedaa03aa40516ac00cf03a93ea"],["/tags/冰与火之歌/page/2/index.html","80959b2be585dd6010ab6d2532227875"],["/tags/摸鱼之作/index.html","a11a489954f0bea6b36e9523fb1d90a4"],["/tags/日常/index.html","01996ddcb085937de1031790b9ec5bf4"],["/tags/柠梨/index.html","e0d94cb5af09bc5bc40aec4c3b727746"],["/tags/柠梨/page/2/index.html","310c9ca53fc265f018b81e661e64b864"],["/tags/柠梨/page/3/index.html","900a3aa5892cf2447ac135cc7f3d81e2"],["/tags/柠梨/page/4/index.html","e0b4445fa25b44e1f7d1a95f9487364d"],["/tags/柠梨/page/5/index.html","9effe228140518839ccb47716e1bae75"],["/tags/狂飙/index.html","31e648fbdcf1da842a53494f410c89db"],["/tags/镛武侠/index.html","1cda53b448ac2fa9bdfa8af884d42823"]];
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
