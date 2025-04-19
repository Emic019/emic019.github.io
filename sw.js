/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","bb0b567cbd7ed5856c080b70fa0a4d99"],["/about/index.html","6787b3b6dd99ef2ead022971c4fb2ba9"],["/archives/2024/07/index.html","07a7ca23fe1c44586a4117dc7a865f48"],["/archives/2024/07/page/2/index.html","9261d401db7a83fc3a2af15b86fef15c"],["/archives/2024/07/page/3/index.html","a639c12653419c8ff01a92c512fd5b99"],["/archives/2024/07/page/4/index.html","c8371d942da04d5d9a7625cee9fdc1fe"],["/archives/2024/07/page/5/index.html","248cc6021a1df4f8d923bd08b850f84e"],["/archives/2024/07/page/6/index.html","153cb10a74c1fb40d42c1bc544f21813"],["/archives/2024/08/index.html","6cacde0fc75d6b31392e20e2a1d7f6ae"],["/archives/2024/09/index.html","2738bd4ec63be2d22e33a0f0195ced47"],["/archives/2024/10/index.html","b439b125fa881e36affd6790a9775a22"],["/archives/2024/11/index.html","f7a84592048acb9c2bd7dfa325a84fce"],["/archives/2024/12/index.html","49bac91819b4076173ecc7d4566ad7ef"],["/archives/2024/index.html","a7e523771fd1d9069d4c73eea8d1708f"],["/archives/2024/page/2/index.html","cceae206efa233e7c6550880eeb47a12"],["/archives/2024/page/3/index.html","02c1062e93033eeab58374c9bfba051b"],["/archives/2024/page/4/index.html","f42aa8a2e3a9f1e4df90ca9378e027d4"],["/archives/2024/page/5/index.html","c46b38eb837f58f6ede82c4dbcbab57e"],["/archives/2024/page/6/index.html","d59dc7eb3790b4f32f53d30175b24ca9"],["/archives/2024/page/7/index.html","c650d4b97a8fff7ee3d77fb5ad7ca720"],["/archives/2024/page/8/index.html","4953f491d28a4c19e02d7d02f6fa37fc"],["/archives/2024/page/9/index.html","e534b39608dee6bdb37f638ed50cd3e8"],["/archives/2025/02/index.html","c2f0ea9c735e00b3639fd43d8342d323"],["/archives/2025/03/index.html","e04fa6f91336adefeefb137dfa6d7db0"],["/archives/2025/04/index.html","3c30b810285d8995f4e66138d19af114"],["/archives/2025/index.html","f467ce77be2649f653203a8446c95015"],["/archives/2025/page/2/index.html","4ff3353557bd723b4b2db60b729edc61"],["/archives/index.html","969c48930e8527bc25c2c96be3a3f390"],["/archives/page/10/index.html","2a501c9395823565918b614cc32ca2e7"],["/archives/page/2/index.html","5ddc65269c0f13a6f6239e76ef642666"],["/archives/page/3/index.html","d2fbcafe8f4478b76e425c332ec40914"],["/archives/page/4/index.html","d4d2c6a3e0fe02addfafdb43a3d2cb23"],["/archives/page/5/index.html","ae251a60c52d4a7c6eedcb7e2db0a3c5"],["/archives/page/6/index.html","8e5e81d4eeddcc61c3099c3455401fae"],["/archives/page/7/index.html","0baa2d5f58f708b4bc9fcea9a20a3256"],["/archives/page/8/index.html","f5572a6babb3d774329f5e75e6f04351"],["/archives/page/9/index.html","0b3c4b4a219ce11c21bf3a313a411c55"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","7cb9e04b015d6cb4f8d5712241b5d15d"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","fc178d7447ceafdd86c43431eadee244"],["/categories/与敌同行/index.html","81d736a80dc6bc36656718a096793f02"],["/categories/与敌同行/page/2/index.html","f16bae806578964a61b063bf679d0b02"],["/categories/与敌同行/page/3/index.html","7c8126543b7b8a7feea5c85957dc0884"],["/categories/与敌同行/page/4/index.html","7673e0b8de61698cd85f43434d23f531"],["/categories/与敌同行/第一卷-双镜/index.html","73d89164790257e259a3e69d46fcf078"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","4002c9b770716330c10c88aae7715b30"],["/categories/与敌同行/第二卷-信天游/index.html","137555c02390d0bc59fc2706ab104ec3"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","563ed1094e53fa3b3598cb30e085dc04"],["/categories/嘲鸟之歌/index.html","3af453ea459781fe67a6046c7f35d9ef"],["/categories/失落的应许之地/index.html","8add30d16ff3101bf929af8970f555ea"],["/categories/失落的应许之地/page/2/index.html","17e9c7f0e2a63932d84490f6a317f3bd"],["/categories/月照天山雪/index.html","3d1b5c6d85e957c2e048a53faf9d81ba"],["/categories/月照天山雪/page/2/index.html","83858f0d9d4270d9ca20c0457f663d17"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","4aa7d260785770bb2be80730e4a01930"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","3f52e18dc91ee9dd80f4d895de81a291"],["/categories/狂飙，乱飙，发飙/index.html","ed6c080055f198d6f19f700f26329dcb"],["/categories/短篇/index.html","42ce787914b9c6c541a592ba6cf19a07"],["/categories/破戒/index.html","cf3c92a05126034272a103e9848c3ca5"],["/categories/繁城之下/index.html","df8f2d5e7978b8197f2008eb197776ba"],["/categories/长夜漫漫路迢迢/index.html","2ec09e26593fcfd1d8d4505ccd059a71"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","ee3e37969aadcf21602893dc7f337f71"],["/css/modify.css","4f884181e06ed8d5d625470bd7f7ef34"],["/css/var.css","42568b9ab7be255756d68e783002b7eb"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","25679747a903e9f7fbcd456ac9fa19d3"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","ce34acd10313086cf5296f99c9360ab2"],["/page/3/index.html","0770a2e2aa5565973391079c03360525"],["/page/4/index.html","d520b1673221a93d81151e60470ff6da"],["/page/5/index.html","9731f36ee0023a19ba08cf498950ca87"],["/page/6/index.html","217d2b1a8c374aa66dcfc32cd03268d3"],["/page/7/index.html","401a56f38267330c66c92d4189b7db4e"],["/page/8/index.html","28733d2c431f4ec363fe138cb9135700"],["/posts/1083795192/index.html","37d51bdd962631ec28e92ced3f231888"],["/posts/1099216759/index.html","d15a3412bad4151ae0ff1aac88400ae7"],["/posts/1104021264/index.html","84ea411f9826da9842588b35f4cf42b4"],["/posts/1195093070/index.html","c601c1b683858de9dfaf94697ad67d7b"],["/posts/12506394/index.html","486b34842054c820f2734ccd1bb16fab"],["/posts/1315809802/index.html","9ac2bfe9fde443e50592bd9ee16a6253"],["/posts/1329165323/index.html","d071380a2c0e04a25ade4e86f6467c51"],["/posts/1378666774/index.html","c159243522db2e73fcec6999e53198fd"],["/posts/1407316490/index.html","7544d07768a037563401543af705d3a4"],["/posts/1434824932/index.html","b955ba49c8919e2569fb1f3f130ec7f0"],["/posts/1445707477/index.html","4c0a6ce78b5126a97a8390cdc8fc4c0f"],["/posts/1465373355/index.html","0bcba3ced6d9390bcf6133a0d9253d96"],["/posts/1681850936/index.html","d67eb8c5710ae2aceb7c8142a8aa88b5"],["/posts/1688557772/index.html","e57112f35bd00019f82c1a430b37b28a"],["/posts/1710373156/index.html","25f02778a1ee038051c64a346e4dcd2f"],["/posts/1720998546/index.html","50c26e81f96444393457d5a2c9fe389d"],["/posts/173005120/index.html","e4ac70d68f73abe4b3337527823b48bb"],["/posts/1766000773/index.html","394fe80c7fd684bb5488df942a354442"],["/posts/1988799958/index.html","0d567dcf2ee7566180f418267457f959"],["/posts/2192148155/index.html","1c8893618d1dc42db3627a2fa524c5a3"],["/posts/2229302539/index.html","049defaf76ee8b6a6fbec49daa7a3be5"],["/posts/2492968201/index.html","a47476eaa830e869aead2463fc5000ba"],["/posts/2949714254/index.html","4fad6b9882c40c4586c3ea03f5ab190c"],["/posts/3002318373/index.html","1a28ee633cf4fc38e192b1f70366efdf"],["/posts/3076558902/index.html","a3cc80ed5aee472d482d554c097b4927"],["/posts/3147359483/index.html","a2a0282d8251e198e092f450e9e01b2a"],["/posts/3191465731/index.html","fcf8c97487a221afbf9f143d1f2015b3"],["/posts/320179123/index.html","fb457b2cf5aa3e50c016cf189e106104"],["/posts/3459697331/index.html","be12d277ca2844ed1e7a40fc0bd1c17b"],["/posts/3489395119/index.html","2001a4d0e0c4eedeb832d28498b33bf0"],["/posts/3525870963/index.html","ae2a8fd126d82f0ef96e7386603af6ef"],["/posts/3640780602/index.html","7721c513e1303b0ef7f2c80ac123d683"],["/posts/3679626959/index.html","98c95ff694514b7dc13ea409d9cf51d3"],["/posts/3699598685/index.html","d792ef231f2da45f0c8371c91219c2c2"],["/posts/3712900673/index.html","950197b97b09726f586a36315a3ac94f"],["/posts/3770599674/index.html","d1b4ab6be67eff29826bbf8fd671e236"],["/posts/3935350387/index.html","c5697f9a29bbccebc5a2a97f3f2cf4a4"],["/posts/3948778863/index.html","e9ac6662339646b854fd1413b8c448fd"],["/posts/403803703/index.html","dfc130913aa549e744d2187b66de8567"],["/posts/4041933047/index.html","cc85259c5346773fb76a4f3c66c5a1e8"],["/posts/411074811/index.html","3cd68ee5786233387f36d39a46e3a97a"],["/posts/4113963045/index.html","d703987bca4d3587ee6a8669e6993643"],["/posts/4163174813/index.html","80881149b63578b7ff01004cc0f6a1f4"],["/posts/4185022581/index.html","e1363d942a4d3eebff0a95166fc37927"],["/posts/4192746113/index.html","3142765585c3e504dce1757479c6a7e4"],["/posts/741067372/index.html","a5ae90f3c50d1b8cfa713c58d550e4dc"],["/posts/888354975/index.html","4b998d9a91963ea3235ce11f4d63ff67"],["/style.css","d6ee7e071878bf1bed7f6faeadef024f"],["/sw-register.js","b6bbbfd2f04ae9781549b86eab8898fb"],["/tags/index.html","389aa74d66d4ffcc795ac9e98f98c120"],["/tags/冰与火之歌/index.html","4a5b41a81a128509bf0f68410f4ca5cb"],["/tags/冰与火之歌/page/2/index.html","d2a824c4b8ac4b5a1c786a1c7278a64b"],["/tags/指珊/index.html","b7cd0edb9a8dafec398673ddfc70a233"],["/tags/指珊/page/2/index.html","98c4ba52bf30b3d0bb9a2b38d864d403"],["/tags/摸鱼之作/index.html","1c420e972a8810196018aea04bee9eaf"],["/tags/日常/index.html","800a969bf3fe179c90233e93cae8711f"],["/tags/柠梨/index.html","d30ac909d189fe061a6f1553d2359a8e"],["/tags/柠梨/page/2/index.html","3938e8d095a5e7b685be1c0ed4f2fff5"],["/tags/柠梨/page/3/index.html","2d91a26673f60c2dcbbe098bc901fdc5"],["/tags/柠梨/page/4/index.html","004871f0f5166558215ea329e789b3dc"],["/tags/柠梨/page/5/index.html","df374ae5c3f9e758f56bb2098819ce13"],["/tags/柠梨/page/6/index.html","30364fd8ac3e2b3e66b7a8b5136722c0"],["/tags/狂飙/index.html","876d0a383c9bcd0379edf621b8d5c138"],["/tags/镛武侠/index.html","79098cb09c47b5dd4fdadd2074ccec34"]];
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
