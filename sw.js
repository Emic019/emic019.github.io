/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","37dc3e0080a9e0e9a7d002bd461526bc"],["/about/index.html","13e39347f00ca8354306483e6b0116ac"],["/archives/2024/07/index.html","c4c962eba533b21d56a8ab62abf09d3b"],["/archives/2024/07/page/2/index.html","3dcf716c7bd8c5f196b5702c2b7fc63b"],["/archives/2024/07/page/3/index.html","51cdde12a40e0140b78d71fd6fd5feb1"],["/archives/2024/07/page/4/index.html","6a44b3cca6ee5d1dc0d348e90eb10b3a"],["/archives/2024/07/page/5/index.html","6ac54175321d64547cf08101046c9bf2"],["/archives/2024/07/page/6/index.html","24ebec4dea2ad7731a1deec2f7ce3361"],["/archives/2024/08/index.html","04da98ea5360c618de328ee30689964c"],["/archives/2024/09/index.html","c2d2c6eb0b3daccb5f44424327b20e7b"],["/archives/2024/10/index.html","072f546d1a626327fc6f7936a8f471c2"],["/archives/2024/11/index.html","8c04a2d6b7a7df1ffcc4ec4b28118f36"],["/archives/2024/12/index.html","3437b8ebc878915dbc3d7ba9f66c6f7e"],["/archives/2024/index.html","e4fde2bce507dc4ce4bf5ed5449b5343"],["/archives/2024/page/2/index.html","de9b669e6bf1a841d65076a32ef8d94d"],["/archives/2024/page/3/index.html","67575a2e937dd426047cfc57843c3fc7"],["/archives/2024/page/4/index.html","3f8ae4277f671486f14af82d1964848a"],["/archives/2024/page/5/index.html","9fbbcdf6f9d155ef2dba4e29d9538421"],["/archives/2024/page/6/index.html","0b62aa1858da4ff1a49f3cda194b91db"],["/archives/2024/page/7/index.html","519c19da1bcc67b5e321aa35a6a269b9"],["/archives/2024/page/8/index.html","184d72fc47b09ab90a2dd6dc01d78482"],["/archives/2024/page/9/index.html","31dc0d483729c86039a66cf76dda51a4"],["/archives/2025/02/index.html","6efa8870f39dc8e9a892c80975d0b32a"],["/archives/2025/03/index.html","2dfa2c257d17b5b5eb33f0af452b95fe"],["/archives/2025/index.html","1b1b1bc0c4cc2e40940486fd4bbcf83e"],["/archives/index.html","5f6aec3bb893493b8660b4989473f0fb"],["/archives/page/10/index.html","22f62bca07bbd201c8b7c232c4d03b0e"],["/archives/page/2/index.html","e8929b084bef03a8f583f01adfa913a2"],["/archives/page/3/index.html","6a3910a858dadff95af24364fe58518e"],["/archives/page/4/index.html","109409ea466fbd1c308090fa0e7267a7"],["/archives/page/5/index.html","88d502d1dd643425848a1f1b82c293ed"],["/archives/page/6/index.html","961aa5e9aa6b38c0ac2d912c7c7bb4ec"],["/archives/page/7/index.html","b45a7dda841090c8438001260847c4a3"],["/archives/page/8/index.html","486e43a4276c4c6299cb0dc42c18217b"],["/archives/page/9/index.html","ba5ecc779c729bdb21201dc38fc2f6f6"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","7cb9e04b015d6cb4f8d5712241b5d15d"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","21593b75aed40ffde8b446c9afc24901"],["/categories/与敌同行/index.html","8b70432c30c98e8b6524e0b986363ad6"],["/categories/与敌同行/page/2/index.html","c006b9cbb817bff169d5b78b3a22fd87"],["/categories/与敌同行/page/3/index.html","399cef44e3f0cfd18070d3dac383130f"],["/categories/与敌同行/page/4/index.html","434c06bdcea5a7a8d4954778a852a103"],["/categories/与敌同行/第一卷-双镜/index.html","5685f3d234a4afcfb7baa5bfeba8aa2f"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","20e23303e1479382a5229cdb3c199e14"],["/categories/与敌同行/第二卷-信天游/index.html","4976245cfeb0176f0e2d69536c337f5e"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","9db0410428626407a9ce78c1de23daba"],["/categories/嘲鸟之歌/index.html","5760f194838459898f536edfb5414e5a"],["/categories/失落的应许之地/index.html","ab08732184eb443dece29725332f87d2"],["/categories/失落的应许之地/page/2/index.html","8c7724558fb8faa60181f38cf38664d6"],["/categories/月照天山雪/index.html","1bb9c778233a0ba7c7e4bdea69880b00"],["/categories/月照天山雪/page/2/index.html","0ef987ef5de0d77cc82dba210b38e2f2"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","959899cea0ea231a0548a0f2fb57c222"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","232802eab9fc98499f7c145e827ff717"],["/categories/狂飙，乱飙，发飙/index.html","ad89e9e382100448c836720591ac6fa7"],["/categories/短篇/index.html","d2fdcf2bf56c03624cfbaa5ac1e9e051"],["/categories/破戒/index.html","8852bf8ac5109a307ac81f652d7ce824"],["/categories/繁城之下/index.html","e6a04e16897ccaf85dc2fa1aef59e28d"],["/categories/长夜漫漫路迢迢/index.html","9ea3a15ce2863194000de46a02bf26a4"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","5f32e23965498e23723f774c44d85258"],["/css/modify.css","82382601b8d45423b50fb6a1cbaeecd1"],["/css/var.css","89e8c4267994c9456ea4d72ca3086df3"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","0f9fa5078b225825fd06cb598ff53d5b"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","adc2a4a582023fdd8b766fc6ca31cac3"],["/page/3/index.html","bf78625d234e5a3c260f65b7bc5ff82b"],["/page/4/index.html","932ed4433078a962be259106b9b1c6dc"],["/page/5/index.html","bcd34b50e0915f6f1b84fa19b71031ae"],["/page/6/index.html","aa79c38cd3c0622b31b1a9a35bbd6267"],["/page/7/index.html","31b982aef59686f0988964306153eca9"],["/page/8/index.html","18fec2a7672324aaf5b30b8b79cbdd94"],["/posts/1083795192/index.html","64c8c7e67f3702c74f10539d0c7a9897"],["/posts/1099216759/index.html","3a52fb52d88be63a63b075f5177cfe28"],["/posts/1195093070/index.html","e4fa06f62b06920015670cf99b1a9b4b"],["/posts/12506394/index.html","85960fc349bcc8a8942ab24c738d957e"],["/posts/1315809802/index.html","75029f3b6a35be579f3f1d4c138ffd6e"],["/posts/1329165323/index.html","16613473906329dd1eaa65cf9f37df9f"],["/posts/1378666774/index.html","617c2c7444ea594e92cdd4aca02c7565"],["/posts/1407316490/index.html","870416ed0fa0420d464e8a10bade7cf9"],["/posts/1434824932/index.html","988c57c44ec652dd35afabdad24f5993"],["/posts/1445707477/index.html","84bfb1d5fa3eff8fd76143affd43ffd8"],["/posts/1465373355/index.html","35b754c7d5abb544d2ab1144ef6c6954"],["/posts/1681850936/index.html","873891b8d3c5210cf66e607f7a542fcb"],["/posts/1688557772/index.html","e55f25fa5573bc37d1358488f150a727"],["/posts/1710373156/index.html","111a5105b6f0ec20a7bdeec819d61ec7"],["/posts/1720998546/index.html","f04fea16760d38d9d5d78a6df9f7a18d"],["/posts/173005120/index.html","c4da4758454003546abdd40bcc520b3c"],["/posts/1766000773/index.html","8200d355a806c119529000c6135863b3"],["/posts/1988799958/index.html","8a2c62811e105d5a8edeeb91206129b2"],["/posts/2192148155/index.html","853e19b645e082a5a254f6e601f41daf"],["/posts/2229302539/index.html","71682e08e6fc09f3ac084e939540060c"],["/posts/2492968201/index.html","abc9459aaea835821f2aa4dd4d3f996c"],["/posts/2949714254/index.html","6245a64e6c2fd9df5f1d2ada4df46b42"],["/posts/3002318373/index.html","0c41105d100f9b8d82c8a38f388d9b2a"],["/posts/3076558902/index.html","f28ff1a6c098fa67d1340acacaa3467c"],["/posts/3147359483/index.html","663662a39ff7dd65a25d06856bc2e821"],["/posts/3191465731/index.html","687dd02484399b47432addf3f011ae0c"],["/posts/320179123/index.html","92040479d86d8b0e5d93a83709f1a05a"],["/posts/3459697331/index.html","83217e4a008594599649bbbf204d8c12"],["/posts/3489395119/index.html","8e36a672b80719d66d7c78b6085f3eea"],["/posts/3525870963/index.html","8393db185256d8a750e275f271ca1f2d"],["/posts/3640780602/index.html","0e5802506df0e1a902cf9b9c698972b0"],["/posts/3679626959/index.html","2d4372833bbab14880d849aedf3187bf"],["/posts/3699598685/index.html","e40c58b0ca2e0492c0acdaab6ccd6189"],["/posts/3712900673/index.html","fc3327489345a04a45f8453c85fb867e"],["/posts/3770599674/index.html","367dfc5f0eb11798f96fc7eff0940bd1"],["/posts/3935350387/index.html","7e38b538635bf5d9672c9c1650fa3b0b"],["/posts/3948778863/index.html","9c99491cf9dab44662fdde3d964ca7ab"],["/posts/403803703/index.html","d51fdb68a8a5359f993a280b72da58fc"],["/posts/4041933047/index.html","8b0869da9501239d597548a516c32e03"],["/posts/411074811/index.html","cfc182581df7efb28b25bd825d6e1e42"],["/posts/4113963045/index.html","7f4972903e11e5a808666c65b92ae1e2"],["/posts/4163174813/index.html","5a296ec20ef81cd2de7ba97de2d5df87"],["/posts/4185022581/index.html","afb530da072b45d395bcdeec0eae28de"],["/posts/4192746113/index.html","99b277ad31d7fc3a1e39bba64f82c4ca"],["/posts/741067372/index.html","a5fa681c607e8602f77dab8b77bcc4f3"],["/posts/888354975/index.html","2aa9ccc0b8c9bac37097ccb1dc4e365d"],["/style.css","6f61fbd3eb259bb9152fb6e5c6ef5f37"],["/sw-register.js","fd6085fccfe8d5bb5496fa22657edeb4"],["/tags/index.html","13d503ac7ef46dd2d0eb064a34f64073"],["/tags/冰与火之歌/index.html","7657406b687648c050a7ebe4f8b61bf5"],["/tags/冰与火之歌/page/2/index.html","aa793f4d2c2d93836eca7c094352cae5"],["/tags/指珊/index.html","a03634cdd924345cb80e8da5bf734b4a"],["/tags/指珊/page/2/index.html","5c69a7bb3db9dbe25bb1ddf9f732df83"],["/tags/摸鱼之作/index.html","c03bc9995de787f42aa5761ad30eb1d7"],["/tags/日常/index.html","c03a30099c7647946fa89923d8d35c09"],["/tags/柠梨/index.html","d97ceb241a0f43ad99f6a0d88954ed6a"],["/tags/柠梨/page/2/index.html","a64033be9ccb50ab4e0d158b5cb79de2"],["/tags/柠梨/page/3/index.html","b96f2d9eda0e15852a72878347091375"],["/tags/柠梨/page/4/index.html","a1fb94f3f78f39f146242a2250e49486"],["/tags/柠梨/page/5/index.html","7c837dcf88b2e349f9dacf44b541ba19"],["/tags/柠梨/page/6/index.html","37cb4b9275813aeb28fca20cbdea462a"],["/tags/狂飙/index.html","3ca6a0026810be8e780328d57579aae5"],["/tags/镛武侠/index.html","286ead922d8c1f03dd3a9bc7b3572fc0"]];
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
