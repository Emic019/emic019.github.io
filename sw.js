/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c176b2b9e8843ec3b33f1534474de23c"],["/about/index.html","7e324502ad8e29b0c7662063f22d0697"],["/archives/2024/07/index.html","de7248daa86ce4e3911b78526a136f15"],["/archives/2024/07/page/2/index.html","f5cd990d5828a66747696601b4d951fe"],["/archives/2024/07/page/3/index.html","03ab4cda20d46b5372ec3419f35cee30"],["/archives/2024/07/page/4/index.html","933ddd154ab017d802d0fb88e1c6cc0a"],["/archives/2024/07/page/5/index.html","a26575bcab9970006bebd0fe92485474"],["/archives/2024/07/page/6/index.html","b7ef5cbd76ddfa47bfd6c305518fe8e6"],["/archives/2024/08/index.html","a2afc6712eacb0548ce6094bb10a8950"],["/archives/2024/09/index.html","e8df6d08a311dae218f709e0c60a9d7f"],["/archives/2024/10/index.html","f8b0d76906355ab0ff68772c6d14682d"],["/archives/2024/11/index.html","c624195ba0952290353d5c810a728f98"],["/archives/2024/12/index.html","9edd6a73178c9e7b41a738f05ddb30ee"],["/archives/2024/index.html","7bdd5ce7fb106b79cb70cc7c9dee1eea"],["/archives/2024/page/2/index.html","7ad54176675d4a74792b2135588ed968"],["/archives/2024/page/3/index.html","604a193d0f7bc55bea0c8f1315921dd4"],["/archives/2024/page/4/index.html","3d253ae3d78c50e70540c657d5f48b39"],["/archives/2024/page/5/index.html","8809dc6b9b17017061d584d886221eba"],["/archives/2024/page/6/index.html","25f746beae4a98c9473f7ea6eedceed3"],["/archives/2024/page/7/index.html","54dfa04b25f408271ce31eb311416c08"],["/archives/2024/page/8/index.html","6afd34c2c1c5b2bb90222ad846de3f86"],["/archives/2024/page/9/index.html","c463cf4de6eee09669bc80198cfadd51"],["/archives/index.html","23e5f4ab7d86cdbc8cc245a5037d6e48"],["/archives/page/2/index.html","942de18726563de934d524b6507d60bc"],["/archives/page/3/index.html","5f3cad40298aa81d54af16ac69200487"],["/archives/page/4/index.html","06222c95f8fa5015622ebf03bfe526f0"],["/archives/page/5/index.html","15071c1f14038f7b6326c3ec71839b22"],["/archives/page/6/index.html","47473b815a61024802c67259f1aba033"],["/archives/page/7/index.html","823a17bf500bec60c0d47ae1beca4fcc"],["/archives/page/8/index.html","d415c3d638b0d25a082f5841e9595d31"],["/archives/page/9/index.html","e3996abb6a2d41eb013cfdab19d4a692"],["/assets/01omen.png","7736a2d8efdc437eba41a849dceeb1fa"],["/assets/其他/1.png","ec9fb4992df6a15e3ff859846f328d41"],["/assets/其他/3.jpg","be06d26a745a9a9996041fa01cdd1603"],["/assets/其他/4.jpg","21c68f2ac68d06ba3c8382317920b373"],["/assets/冰火/1.jpg","5d11951bc575fd9cca23d8e809e87727"],["/assets/冰火/10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/冰火/11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/冰火/12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/冰火/13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/冰火/14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/冰火/15.jpg","bb10d8889caaa772fcef5afc1311998c"],["/assets/冰火/16.jpg","bc3f8df7f9b0b2b0996c150b43122d20"],["/assets/冰火/17.jpg","ac8245c2522aa34a86a99ef6b6234eb8"],["/assets/冰火/2.jpg","568f924a8db5c61cc7a1ed60b483a088"],["/assets/冰火/3.jpg","cf93aebacaa007eca28ea6ae5ee4f5ca"],["/assets/冰火/4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/冰火/5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/冰火/6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/冰火/7.jpg","da39687e3dc6420f289fa4d34f691b1b"],["/assets/冰火/8.jpg","3231596eebac86ab2ed3f0ad6f8e817d"],["/assets/冰火/9.jpg","60414fb9fd49ea51a7426adf3536f238"],["/assets/别和数据聊感情.html","685cdf32c865c1cfe8a71f7a9622f869"],["/assets/应许之地/1.jpg","386b34c194ee098e06e59baa29ce0cb9"],["/assets/应许之地/10.jpg","a13abeeca1b06e998487f7ea083f1168"],["/assets/应许之地/11.jpg","5c27c7ac237522ef009c3b4058933cdf"],["/assets/应许之地/12.jpg","b073469fb7d5410399f2ef7e01dcec6e"],["/assets/应许之地/13.jpg","a2485cc34286c2918e33a8392cf7d93c"],["/assets/应许之地/14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/应许之地/15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/应许之地/16.jpg","d7e182fcd04df710489c62120931a107"],["/assets/应许之地/2.jpg","409b484d8207f5bb6c5a4dda1b44a50b"],["/assets/应许之地/3.jpg","9a751c2d1c371aa78569f2755f114d17"],["/assets/应许之地/4.jpg","86a258c50aea229fc01317712c76126c"],["/assets/应许之地/5.jpg","358b27d5789b80e5f7365adf7bd1a806"],["/assets/应许之地/6.jpg","90d65f60764fc1dbdd76ac760bfe15a4"],["/assets/应许之地/7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/应许之地/8.jpg","5eb1bfa402b10735e6b80c6e84a5b6e9"],["/assets/应许之地/9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","ae4e1d30dbf673ab85c4821ad81d0367"],["/categories/index.html","b1b71059d17781fc3d1dd45a4f8a7e54"],["/categories/与敌同行（梨综）/index.html","1132bebf4e3b6b34d32bc0eef0c568e5"],["/categories/与敌同行（梨综）/page/2/index.html","f1a1a6d549fb55ee69a7c21259c84b37"],["/categories/与敌同行（梨综）/page/3/index.html","4837aba4c50974d3ea7a14a0a21b769f"],["/categories/与敌同行（梨综）/page/4/index.html","ce3fbfff27e46a8ed1ae37cf483e6100"],["/categories/与敌同行（梨综）/第一卷-双镜/index.html","68a1b48c784fbb7dd87da208e58d9929"],["/categories/与敌同行（梨综）/第一卷-双镜/page/2/index.html","168151afe9a42b39701df08847cd9462"],["/categories/与敌同行（梨综）/第二卷-信天游/index.html","d203a9704b1059ee4014d865cce95457"],["/categories/与敌同行（梨综）/第二卷-信天游/page/2/index.html","311346516f02cf3d3f574b8ea4a458f4"],["/categories/千千万万遍（指珊）/index.html","b1fbc3ec2a38beb06aa8247369d5c1b4"],["/categories/千千万万遍（指珊）/page/2/index.html","f89e104559ef495a3ffee3c1b3a00fc2"],["/categories/千千万万遍（指珊）/不正经的图图/index.html","0dcab4fac87827e925aa101c5e4f8a9b"],["/categories/千千万万遍（指珊）/同床异梦/index.html","3ab30ac5005de40364b7a61462492c3b"],["/categories/千千万万遍（指珊）/知更鸟颂歌/index.html","04073c055541197602e52ccd874961d3"],["/categories/千千万万遍（指珊）/长夜漫漫路迢迢/index.html","0745ae7e05d0e3ac97816ea4550d8374"],["/categories/失落的应许之地/index.html","d52d71fd7a316618f2eb09e3fa09daef"],["/categories/失落的应许之地/别和数据聊感情（马兆）/index.html","dbe5c444afe6f28088f9a945919bba28"],["/categories/失落的应许之地/神明的游戏（刘正毅）/index.html","1c9b22c15cfeb911ec10a6bd47a4a37b"],["/categories/失落的应许之地/走进温柔的良夜（顾卫国）/index.html","7b399147ddd714971a16ffd137462682"],["/categories/月照天山雪/index.html","9727465b51922da07cc8a55780a465e4"],["/categories/月照天山雪/page/2/index.html","bac74c3ac5fccb2e89d715359e51bf4c"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","586043b2cf4ea673ae400676a1852030"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","b79b662c59bc404bea1534b76dd7620c"],["/categories/狂飙，乱飙，发飙/index.html","1b97f38183712aa23d68cca230346d43"],["/categories/狂飙，乱飙，发飙/一千零一夜（高启盛）/index.html","69bb315577557c14bc904e9c6d38bcec"],["/categories/狂飙，乱飙，发飙/孤独地狱（高启强GB）/index.html","9830dba1dd7fb0435603d15837580af6"],["/categories/短篇/index.html","8f38378a19d7126bfd4e0141cb0cb879"],["/categories/短篇/玉生烟/index.html","19a0439cfc741318f93e7d2c80c88d74"],["/categories/短篇/破戒（马魁）/index.html","4c52440e845fead0bbb09613f50b6cb0"],["/categories/繁城之下/index.html","1b3bf3be19abc24d05c450b9453773df"],["/categories/繁城之下/少年游（宋辰GBG）/index.html","54ae83fdb173ee5a618be4b3eba366b4"],["/categories/繁城之下/风雪夜归人（忠直）/index.html","e063ef300c44a2ac9de6352cea42daa1"],["/css/custom.css","f353d4883a4800cf5e577f39ec994501"],["/css/gitalk.css","ed52122c3b7b467ca94d5da6eae15716"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/highlight-dark.css","f041d071c4193c9aa04586e31c7ef423"],["/css/highlight.css","b5a6fdebaea2929dac8eb784c7f60453"],["/css/main.css","56659dd4410165c87e37574049245864"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/index.html","b095fb84bd7e1409ffb7a2e08008b173"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","604c1876b418997280826f9ff20999a3"],["/page/2/index.html","a53e63d071fdcf6b03deb728ef13ac24"],["/page/3/index.html","9e0b9c57cc7a50a79206325c1ae58476"],["/page/4/index.html","1d3356571bffd5d6e045de89e1824b9d"],["/page/5/index.html","3a5c6be351eb5c94d610e436317731a7"],["/page/6/index.html","77314a010ac3d7ee4bcff0557f2dd027"],["/page/7/index.html","642b9370f7c0689efa1efa4a38c4017d"],["/page/8/index.html","5bbd02c624c2ba1481c9842cd0eee368"],["/page/9/index.html","d64f1766521bb99865a16a76bf405e7b"],["/posts/1083795192/index.html","a9ce61af942aace9a017c53a0f0e54ce"],["/posts/1099216759/index.html","21c0e192b09e03eec89682083cfa4655"],["/posts/1195093070/index.html","9a55ad677dd335d35ea63e2b1b08b123"],["/posts/12506394/index.html","c72468afcbb04eec81b9cf765fd5aa78"],["/posts/1315809802/index.html","f5d95cf3db3bb1a7d2a1bef4d5d15ca2"],["/posts/1329165323/index.html","adf48bc133bca5e1fdf6cb4289ec9ced"],["/posts/1378666774/index.html","48d0f091fa20f6a8f538d6ee67198fdf"],["/posts/1407316490/index.html","1dae3bd87b728813634715924852745e"],["/posts/1434824932/index.html","d6b37d4760fa4f33efcf70994605a997"],["/posts/1445707477/index.html","77f6d3e35f119830cd0f5257858fcc27"],["/posts/1465373355/index.html","b7a51462778d5d87e503ced5cfd428b3"],["/posts/1681850936/index.html","fb9a85b423ba2e2cd30099313d1a4734"],["/posts/1710373156/index.html","7bd34203bbf94910c57e1638ba49943f"],["/posts/1720998546/index.html","ed79e23e9e0fc23f81e107b8f013f8af"],["/posts/173005120/index.html","775e655bae21217e25564add6a0887a9"],["/posts/1988799958/index.html","8ae85c96b6db4b7e681faeb8108fcf50"],["/posts/2192148155/index.html","f13ffcac3a0db9237bb703191e0f1602"],["/posts/2229302539/index.html","932990008a7a47b6766d1ef609108f03"],["/posts/2492968201/index.html","5828bd72d78d72137315c846e1d92b97"],["/posts/2817232307/index.html","bd9ab25cd4956c288debe6d9fb73f6e3"],["/posts/2949714254/index.html","d1065a46183e5b913e67646d6c67e2ee"],["/posts/3002318373/index.html","f81b4e42522e6ed30dd0c9490caedfe5"],["/posts/3076558902/index.html","7ae4c0045dfdef8e4fa5cca871d132b3"],["/posts/3147359483/index.html","57ed6301a094eb44d0b9fd6b7f4f3dfd"],["/posts/3191465731/index.html","a43d74fab7d6a0b155e651541c44e87b"],["/posts/3459697331/index.html","39bd08ffcbe58ac6bb36ff92a2d8fd0e"],["/posts/3489395119/index.html","3c09bb98aab18f04419df496a1dd424b"],["/posts/3525870963/index.html","fa972cb9bf4e4f8e8b8166d6189d6479"],["/posts/3640780602/index.html","79d4219f890f0256238e1e19d771845f"],["/posts/3699598685/index.html","0324b27dbc3fc417cd39b53fd1048d63"],["/posts/3712900673/index.html","4fe3b2d64153ce69475a981275590431"],["/posts/3770599674/index.html","7fe0ad1f2c184e15eed657150a9a6c60"],["/posts/3935350387/index.html","617a423d82807309e35cbac70dd7d88b"],["/posts/3948778863/index.html","e9d4bb8dd5206d55e1e90052cb0b53d7"],["/posts/403803703/index.html","a1cd6a9129c1e59db251767219cd4a34"],["/posts/4041933047/index.html","9cce0e6faa3e8c837b3026fec3292e72"],["/posts/411074811/index.html","ac49ab4a458b9eebb285fc4e6e43eeee"],["/posts/4113963045/index.html","997eeb1fbda3cb736e4223b108959101"],["/posts/4163174813/index.html","6908a85e80bef4dc98748a748f65a34e"],["/posts/4192746113/index.html","11767f7beeac8e0ffbc64f75697f80fd"],["/posts/741067372/index.html","527dd020870ede06ef11e1daa8d6a026"],["/posts/888354975/index.html","5d4d7d1248ea696c6cffdad8c20f6b29"],["/style.css","bb94c3318167e0567e047a90e4560850"],["/sw-register.js","5379c6dbe7e90e0c28b2c83c73cf351b"],["/tags/index.html","09e6e57178f1feb98beeecdf8e29bb06"],["/tags/冰与火之歌/index.html","516bff1687d8d193dbf40c94e06df5c6"],["/tags/冰与火之歌/page/2/index.html","fafb826d46bb4a3cfb3dd7d3e2de00e3"],["/tags/摸鱼之作/index.html","9a1c5ba2b6b781e9cc219376d1833e97"],["/tags/日常/index.html","bea64627d3a18ffa7a95ebfa9745e821"],["/tags/柠梨/index.html","93d538d8f5fd96116c234fc7a94d6dcf"],["/tags/柠梨/page/2/index.html","6d9350cd21b08beb03045d36ae28f9f0"],["/tags/柠梨/page/3/index.html","e8c096f1a0f3a4f400a33962e6115a5c"],["/tags/柠梨/page/4/index.html","bf30ab7ecb1e1b32ed29d3f1429725b8"],["/tags/柠梨/page/5/index.html","a34494c8f4f5492bec4e044e57f794f9"],["/tags/狂飙/index.html","f39876ed4c19a3330f47120a44e0e1ee"],["/tags/镛武侠/index.html","19d273fbf356a338d7ba284f0cf34dcb"]];
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
