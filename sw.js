/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b3c70c40f2fb476ce9c50b339ba93d99"],["/about/index.html","f76414a90034004e04674ae0fc0b3864"],["/archives/2024/07/index.html","51211630ecbe480209a132305911861a"],["/archives/2024/07/page/2/index.html","d9ef01735ff152488848d9cd88a4542b"],["/archives/2024/07/page/3/index.html","b2b52a0efa98391d6af02a84b796abf5"],["/archives/2024/07/page/4/index.html","1fadf67e2bd64399b1011a1a485839f3"],["/archives/2024/07/page/5/index.html","8551ea82f2ab48d2f3a74d9f287d72b9"],["/archives/2024/07/page/6/index.html","b7388bb4202f8a22c7d1b0312341057e"],["/archives/2024/08/index.html","ea74e85fe362e97adffbd871997db7a6"],["/archives/2024/09/index.html","0957b923bec47bbfb6b1edc3eb87c527"],["/archives/2024/10/index.html","de64393a2494b59ed11d2d1bfeb7c7eb"],["/archives/2024/11/index.html","19a40f98b20c4c9a10533385258c270c"],["/archives/2024/12/index.html","84ba0ff84248817fc4c6ff248a76feb8"],["/archives/2024/index.html","33845ec75b3d058587fa0dbf9e55ab65"],["/archives/2024/page/2/index.html","185266663679d037349a62d44a911946"],["/archives/2024/page/3/index.html","5e7a48053c064aa01eb688eab401f756"],["/archives/2024/page/4/index.html","d10f0cb4b15dcfd1b7210f01454a4aa1"],["/archives/2024/page/5/index.html","4de36ea53226147ff7a3e87a6dcbf61a"],["/archives/2024/page/6/index.html","15fbce7386669cc9df8249d1827f296b"],["/archives/2024/page/7/index.html","e2eb52d48afc386ecdac6dba7a317841"],["/archives/2024/page/8/index.html","eb376185a6c1e45ee5a9a50c89bc90c3"],["/archives/2024/page/9/index.html","7750f11571431fe2934c16260d7e0212"],["/archives/index.html","1d3139e20e3e3788d4f5b83b08a6b43e"],["/archives/page/2/index.html","d29bc2241b9c9075df1321301d6c0a2e"],["/archives/page/3/index.html","7f86a08234e76d443c55597ab784e1fd"],["/archives/page/4/index.html","6fdf43e7e7c6f5af4154b569a9aed42d"],["/archives/page/5/index.html","f0cf557ce218bb037d42811a097f28a0"],["/archives/page/6/index.html","3e3c72d03241a62379301ef1c91a71b8"],["/archives/page/7/index.html","8cb987ece594e7a8a48514f2b68cbd12"],["/archives/page/8/index.html","0e6b34bade01158d77febcdae34193bf"],["/archives/page/9/index.html","0fe35adb8b395294d53aaacada6e3ae8"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/其他/1.png","ec9fb4992df6a15e3ff859846f328d41"],["/assets/其他/3.jpg","be06d26a745a9a9996041fa01cdd1603"],["/assets/其他/4.jpg","21c68f2ac68d06ba3c8382317920b373"],["/assets/冰火/1.jpg","5d11951bc575fd9cca23d8e809e87727"],["/assets/冰火/10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/冰火/11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/冰火/12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/冰火/13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/冰火/14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/冰火/15.jpg","bb10d8889caaa772fcef5afc1311998c"],["/assets/冰火/16.jpg","bc3f8df7f9b0b2b0996c150b43122d20"],["/assets/冰火/17.jpg","ac8245c2522aa34a86a99ef6b6234eb8"],["/assets/冰火/2.jpg","568f924a8db5c61cc7a1ed60b483a088"],["/assets/冰火/3.jpg","cf93aebacaa007eca28ea6ae5ee4f5ca"],["/assets/冰火/4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/冰火/5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/冰火/6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/冰火/7.jpg","da39687e3dc6420f289fa4d34f691b1b"],["/assets/冰火/8.jpg","3231596eebac86ab2ed3f0ad6f8e817d"],["/assets/冰火/9.jpg","60414fb9fd49ea51a7426adf3536f238"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/assets/应许之地/1.jpg","386b34c194ee098e06e59baa29ce0cb9"],["/assets/应许之地/10.jpg","a13abeeca1b06e998487f7ea083f1168"],["/assets/应许之地/11.jpg","5c27c7ac237522ef009c3b4058933cdf"],["/assets/应许之地/12.jpg","b073469fb7d5410399f2ef7e01dcec6e"],["/assets/应许之地/13.jpg","a2485cc34286c2918e33a8392cf7d93c"],["/assets/应许之地/14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/应许之地/15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/应许之地/16.jpg","d7e182fcd04df710489c62120931a107"],["/assets/应许之地/2.jpg","409b484d8207f5bb6c5a4dda1b44a50b"],["/assets/应许之地/3.jpg","9a751c2d1c371aa78569f2755f114d17"],["/assets/应许之地/4.jpg","86a258c50aea229fc01317712c76126c"],["/assets/应许之地/5.jpg","358b27d5789b80e5f7365adf7bd1a806"],["/assets/应许之地/6.jpg","90d65f60764fc1dbdd76ac760bfe15a4"],["/assets/应许之地/7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/应许之地/8.jpg","5eb1bfa402b10735e6b80c6e84a5b6e9"],["/assets/应许之地/9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","ae4e1d30dbf673ab85c4821ad81d0367"],["/categories/index.html","020993e10cb7f6d34447435395578219"],["/categories/与敌同行（梨综）/index.html","4c2416a8770926c952f55d2eddf0f34d"],["/categories/与敌同行（梨综）/page/2/index.html","04ee7feb1d40d8860bae5034810b5ebd"],["/categories/与敌同行（梨综）/page/3/index.html","4a659a2f429893755a8d2f60aeed97b0"],["/categories/与敌同行（梨综）/page/4/index.html","5873a0b52f9dd82f9196bd95569d869b"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","30bcbe58b63b166fa19a1a14690a152a"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","02aabaf60f4f2db48801b9a2a849e908"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","f363c1548c536f811a4bb8fd1c2e5b43"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","e10f1b5d3ac4a52de1598d0a9a813a70"],["/categories/千千万万遍（指珊）/index.html","bcc51bf5ac693bbb8518133c729c8d12"],["/categories/千千万万遍（指珊）/page/2/index.html","aaefc60f4befa31a2cea6dc03ce189c9"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","c6821c4cefe0f49eacc44843d3ce9aa3"],["/categories/千千万万遍（指珊）/同床异梦/index.html","847c1f9d37a80c7b87f578a25182391c"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","689bdb054bffd480ea4f19472b644710"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","198a05e3e6427ed35013f12511b39a0d"],["/categories/失落的应许之地/index.html","452ad91783877df2ff3ccdac2116046a"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","e0dbfbe4fe1e7cd4d61dd2bf892c6809"],["/categories/失落的应许之地/神明的游戏（刘正毅）/index.html","edc50bcdb21d5d4a7c2a83d403f4357e"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","275f0cf3f5ab8b2985d565e9c8f3f3d9"],["/categories/月照天山雪/index.html","fbc701b974ac9ed942c78cc9fd57516b"],["/categories/月照天山雪/page/2/index.html","9a64ee325dc93370d6f0442820741c3f"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","8bc6e06a823547c0c1f2cfef8e94a4a1"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","5de4dc907adc693289fb432b2c3c87d4"],["/categories/狂飙，乱飙，发飙/index.html","54a8e625ae110b25d87da5c3119ec5f1"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","d8cf20e106349c93826c8d2f06ab86c4"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","b640b00c89810efb2f9cdb923d5b503c"],["/categories/短篇/index.html","31f7bc254f5ae9cd5955bb653b108267"],["/categories/短篇/玉生烟/index.html","d403c07a2cff2d465dba9a137ba679db"],["/categories/短篇/破戒（马魁）/index.html","129b29286b252917f88782c6bb76826f"],["/categories/繁城之下/index.html","e229d91c7ba99995b333d113caa2c332"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","39a8d378c08a8c9353f5f016662743ab"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","b27a0d15d8520e3a64d476a45cc37f5d"],["/css/custom.css","a83d6f76274ccb1b7ef2d669cc6ad971"],["/css/gitalk.css","38ba311b0e75f0f47733f656204e644f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/highlight-dark.css","48d37bcdade4d52eab316383564e4cb9"],["/css/highlight.css","a7858dd269f8d7df09920b7fa19d8f6c"],["/css/main.css","237aacfb48017c1cd04b77bdf940fe07"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/wallpaper01.jpg","3af061aeb66c8904f2b1d2a72d8c7617"],["/img/wallpaper02.jpg","2ccf4a5eab2c87108b569cc012ccada2"],["/img/wallpaper03.jpg","f8a085e5f26352591b7ff639eb5a0dac"],["/img/wallpaper04.jpg","4985254e30803a1c1d2cad0cb7c773ee"],["/index.html","78ca8aa44eb3d2e9c8098a013f63e9b3"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","ee15a4346525f2c9c124191901471607"],["/page/2/index.html","a181ee806e8b44dad7c2c06cb8bdf10f"],["/page/3/index.html","3ed60440b3626d4b8233c11661c56862"],["/page/4/index.html","891a1f6029a1d791b9be56d4ff53a21f"],["/page/5/index.html","9a7988fc7343f48fdfd9ce36005bc50c"],["/page/6/index.html","6f144e346f3c7704e9f5c91902b536c6"],["/page/7/index.html","deedebceacfb4c432a3a77196626b8da"],["/page/8/index.html","4b84f3e6a061ea315c0f6000842e5a55"],["/page/9/index.html","78fc4d636a0f28207a9bb06bb7ae3633"],["/posts/1083795192/index.html","8bb7ac912798227debddc8bec9472a6c"],["/posts/1099216759/index.html","dd193c013f2dd09c01bfaaf613325c2d"],["/posts/1195093070/index.html","64ff25c4a12be6f80e39fb8ec436989e"],["/posts/12506394/index.html","aff3bd215dad2bf5866562902db8f340"],["/posts/1315809802/index.html","41dd7083b05ce1787e9bfb7ab5b554ff"],["/posts/1329165323/index.html","006d201a155b64a263ba9b9a2b25a42a"],["/posts/1378666774/index.html","467908c2dd83a36d42b4ed3307a79714"],["/posts/1407316490/index.html","ace8c44f1aedcba35b64a2163dbd3537"],["/posts/1434824932/index.html","3ed78a3de770b6d0d0325daca5b1c92e"],["/posts/1445707477/index.html","744b16998e202bfdfe18efc809daea34"],["/posts/1465373355/index.html","7b7fd41ac3957fd380ac2114e4639212"],["/posts/1681850936/index.html","9420e159f612d82c90df47934b4d66da"],["/posts/1710373156/index.html","52110c115c316569eea8d35885fb94ba"],["/posts/1720998546/index.html","3bd251c51ced2d33296e59da92955579"],["/posts/173005120/index.html","570ea827debf67133eb484aec24691a7"],["/posts/1988799958/index.html","0d1824e64d5559502f4acbda1e91f1a0"],["/posts/2192148155/index.html","e737d1a7f6765528b6464b36fad9f049"],["/posts/2229302539/index.html","e24f90b24ff7a36cc564f4c7e6437633"],["/posts/2492968201/index.html","4c92aa08240a48129b4b771326aa049f"],["/posts/2817232307/index.html","bb42c8e4f650ec2f906e52dbaa077ac4"],["/posts/2949714254/index.html","02586d33d4b626f01accf5de334308fe"],["/posts/3002318373/index.html","8426fa04001738b24ede6deab0bb6fc8"],["/posts/3076558902/index.html","923b88a7eea5cb9cca9516f91d4d83fd"],["/posts/3147359483/index.html","9744226c63c1255d0e7f71f076b1163a"],["/posts/3191465731/index.html","06ea73a89f23cbcdad396ca59051e5b2"],["/posts/3459697331/index.html","e27ef1e2c4e503204ec2a8e1d511f4ef"],["/posts/3489395119/index.html","49e81c1d91886326412a52e520c034fe"],["/posts/3525870963/index.html","56dcbb10507ee197f1be32d27bf916cc"],["/posts/3640780602/index.html","e064ab1b92515e8d20437c7e6be79bfe"],["/posts/3699598685/index.html","5df04ac684240bde36e7f888f56ff94d"],["/posts/3712900673/index.html","5307046d674c880f97b3d5af4fda1020"],["/posts/3770599674/index.html","1f493799afc929a3cd3714c1b212277c"],["/posts/3935350387/index.html","c98b38b64521b6fb84da524db474e61a"],["/posts/3948778863/index.html","f4e985bd6056d3bdaab283ae8b3e59d8"],["/posts/403803703/index.html","7b84b1b458ccc5a243225df56517d51f"],["/posts/4041933047/index.html","245c90c1c92b0a7421ad3d90d10c083b"],["/posts/411074811/index.html","a18acc681d73bfa2a0f93639606fb06a"],["/posts/4113963045/index.html","b32424f4106d730332593a17988175f2"],["/posts/4163174813/index.html","18829a9d41f9a5f6cc23f244a08bf84f"],["/posts/4192746113/index.html","ce60daca0e846e988737e097ad317970"],["/posts/741067372/index.html","90cb2e2635cdb477421c4a56a3fe1a2f"],["/posts/888354975/index.html","6e33205d19847c8863be5676c1aa5cee"],["/style.css","1a11818db4af6d0083026d0b29b7d819"],["/sw-register.js","e3ff3247a4f96b0eac6b700a3c740e2f"],["/tags/index.html","3a899e886e933e0d752eabd8de42439e"],["/tags/冰与火之歌/index.html","3c6a92ed3f1ea61883337c5c8563ddf3"],["/tags/冰与火之歌/page/2/index.html","3bd46547761c646d0c781efd20d650bf"],["/tags/摸鱼之作/index.html","67e46074bedf1c4aa01250d3b796fb2a"],["/tags/日常/index.html","0630e6a6bc580f301ade21b7df193a5b"],["/tags/柠梨/index.html","3435defac68f9ff15b2443118eacd4ec"],["/tags/柠梨/page/2/index.html","79bafcd537af95a3659b8b204c2e61e9"],["/tags/柠梨/page/3/index.html","2054bc1189f5c2ff577c920fd533adac"],["/tags/柠梨/page/4/index.html","0133f9496bb3800646b26d90dfa592fa"],["/tags/柠梨/page/5/index.html","3c6aac1083d33901116066ed72b51f9f"],["/tags/狂飙/index.html","d7edb3dabcb212d823493970ca3ea17c"],["/tags/镛武侠/index.html","6e5430d69d32e550c498c7f694c29d2c"]];
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
