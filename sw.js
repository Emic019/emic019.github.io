/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3ec14f23adeffdc859521cbe57464bd2"],["/about/index.html","efbc86ce2358ff2f9250e6fbc5a5d55c"],["/archives/2024/07/index.html","4e093c71b378483c34c464caa124d290"],["/archives/2024/07/page/2/index.html","ef3887dae2a87098f3c57ad1e4d91cb8"],["/archives/2024/07/page/3/index.html","cff9439b117c7e5b2d06684058057716"],["/archives/2024/07/page/4/index.html","60ebcc71311741e6f44c398f0c13f1da"],["/archives/2024/07/page/5/index.html","71b04befa1d8ff7f383cafab343368c3"],["/archives/2024/07/page/6/index.html","0d04a1a15235d0a58399e09b719dedb8"],["/archives/2024/08/index.html","af8e236968797e98f187e9679435b8a5"],["/archives/2024/09/index.html","b24a60ac856b5589ac00b2b151e0c0b7"],["/archives/2024/10/index.html","b32a02a40acf2be7d535070887cfdd27"],["/archives/2024/11/index.html","7f7ea0dcfd41183ddc917ea9ef8394eb"],["/archives/2024/12/index.html","b5703028e7f18a3f9fb1f80aaaa37c79"],["/archives/2024/index.html","da155f42da45bfd02411b72a8b63c509"],["/archives/2024/page/2/index.html","d2c7ada372dce59c2f3ac2f74d0175c6"],["/archives/2024/page/3/index.html","c999be4c11594942c35e11295cb07f9c"],["/archives/2024/page/4/index.html","94d68edc257bc4aac20aa753ad5c26f0"],["/archives/2024/page/5/index.html","af8606a624bf13ddd56531c2c00bfcf1"],["/archives/2024/page/6/index.html","fb567fcf104f8bbffb635aa7d3a6cacb"],["/archives/2024/page/7/index.html","38bc2af109c54d9fe81801e17d57af6e"],["/archives/2024/page/8/index.html","dffb135195ae34ae06fdf84dd123b1ec"],["/archives/2024/page/9/index.html","dcfd8118ba385c929e003d29b7a8168d"],["/archives/2025/02/index.html","96f3abee160f652205154247bd3be6cf"],["/archives/2025/03/index.html","f7667c70560dd1c9aea43b840aa4b370"],["/archives/2025/04/index.html","1428144c43b206ff97bcef3dd4122a54"],["/archives/2025/05/index.html","8694758197cc804c17fd0d8475a066ff"],["/archives/2025/index.html","b12942d716d91b0254188a1c98a09937"],["/archives/2025/page/2/index.html","a39f7e12b1cac52b3300392a62d615d8"],["/archives/2025/page/3/index.html","351c06f3f540205093affbc88c8a062a"],["/archives/index.html","c1c91baeabea85a17c5bd2fc4b029be5"],["/archives/page/10/index.html","09b3ecb8bf87a14fb4dc1f4b12376684"],["/archives/page/11/index.html","905468b0ad546c80fbe1a8c04e40012a"],["/archives/page/2/index.html","1c82bd30139b8aa8a2e653f83dec59c7"],["/archives/page/3/index.html","96a1393cf6686d7faa2a13d86f00b824"],["/archives/page/4/index.html","562e186e1fee977ef8ad156a0483e36a"],["/archives/page/5/index.html","9281259370a3d24c3723d27be221e260"],["/archives/page/6/index.html","0f93c1589cc007baed5492ae9ce880d9"],["/archives/page/7/index.html","f2c0767b297810b0b55bd2205444a000"],["/archives/page/8/index.html","4587d424461f9fe76f789b714bf500e7"],["/archives/page/9/index.html","c438b29f866ee08de583d8f28f6ad499"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","bdfdd56ec4b7c8b243a0ffcb736e0e7e"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","b32e1a14eb7cb1a35a3159cddfda7119"],["/categories/与敌同行/index.html","1e6214e644e4eab9dbe2241908c68433"],["/categories/与敌同行/page/2/index.html","42c364d7e5870f3bd1c1efd5b2bee555"],["/categories/与敌同行/page/3/index.html","7bbb5da8df311e833e89623669db7a34"],["/categories/与敌同行/page/4/index.html","a89e5cea4b55d78789d8ba137e39124c"],["/categories/与敌同行/第一卷-双镜/index.html","22f441539f81efddd739ad23928dd275"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","9e17a98b02f2d120a0b66d9ecce9442b"],["/categories/与敌同行/第二卷-信天游/index.html","745f35353559dae30912acd4b8d4f625"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","a3bcbd2be846da322173e40fd47b30c4"],["/categories/嘲鸟之歌/index.html","4667c0788c8845bb0863f025ba8be939"],["/categories/失落的应许之地/index.html","836b0e80eb7f15244864bbc6f11c217e"],["/categories/失落的应许之地/page/2/index.html","a1ca8f043d158c1ea3ae4ce20bbf58b6"],["/categories/失落的应许之地/page/3/index.html","8f8eeb5869e0009cf94bb06755c272c4"],["/categories/月照天山雪/index.html","13308ba897911af23f75fb34452406b4"],["/categories/月照天山雪/page/2/index.html","b586307e396e2bf1082cdd3c07d4e6a1"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","5113bfdfa3429444a5c19ff8c605e41c"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","c1616992752473f715d7e03c509cd643"],["/categories/狂飙，乱飙，发飙/index.html","cbce114fa6952b49f94e955839f2d1f9"],["/categories/短篇/index.html","344d2338b3d57c1f52856a507cd03f4e"],["/categories/破戒/index.html","49cc1ddafd6cbb85933e9ed6cb550376"],["/categories/繁城之下/index.html","a3cba0ebd41750445d23d4cafacb1702"],["/categories/长夜漫漫路迢迢/index.html","a9d113245f1061a030fbcfa58edef9bd"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","0a0f86499995826bf6ac2d01110fefda"],["/css/modify.css","a1434785e6b707e609db578fc72ca378"],["/css/var.css","d0e8c04dc209258a0bdead73a0b25f36"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","ec9098a20956d45b37f8579f8664b5fa"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","a1855187041653d1027d5238cb7b8696"],["/page/3/index.html","e83335a50659f1068e2f9b392e9f2f16"],["/page/4/index.html","4805580b62a63a3efa1773e54ff57a3b"],["/page/5/index.html","809d9c6199ce2e4d3956187f345f9f81"],["/page/6/index.html","6cde58339e49f6c579403f211074f51f"],["/page/7/index.html","8faa69028da87da2921b738070f10650"],["/page/8/index.html","a4cf4541c3bfa5d2dd7bc04b95c02b51"],["/page/9/index.html","565ef00025b7f5471717ca59b5401ad5"],["/posts/1083795192/index.html","a0895cbb4bcb15d38227cf5619ff694d"],["/posts/1099216759/index.html","0dc924f15e5087cfacccdbc73df6d768"],["/posts/1104021264/index.html","e6ff0a2a6300cdab35d90dea0e8167fb"],["/posts/1195093070/index.html","6251a6f1a16e57c97daaa01dd8e0f936"],["/posts/12506394/index.html","2b466a9b7612ac28e234faf2ea7d03e6"],["/posts/1315809802/index.html","cec0bb1fb08ddfcc15f8e43a01e2dbf1"],["/posts/1329165323/index.html","bac041de4adcb8eb382cf77c9007d071"],["/posts/1378666774/index.html","945a48a107c27270ffc8fc78328f5b45"],["/posts/1400613118/index.html","85772ce425087732ca1d9b59aa5a18cf"],["/posts/1407316490/index.html","a0b4bf68f22ab205b1266af821f01c29"],["/posts/1434824932/index.html","2f12290f92a95da0840b436c7f42ad40"],["/posts/1445707477/index.html","e66a4ae5529e4762a7ecaa6033bbcd69"],["/posts/1465373355/index.html","9b488a1a0a42861006cc59f3fb0eb740"],["/posts/1681850936/index.html","81c752276f2cc0a890ab08f5754a19ab"],["/posts/1688557772/index.html","d985c764ea2de9d1dc18a5a8ab3e5d57"],["/posts/1710373156/index.html","6ec9adc1db050df958892c742c9644fd"],["/posts/1720998546/index.html","5fb6b8d6d15396b1e599671953524cd6"],["/posts/173005120/index.html","f4686a6d5d1f6371698defe1c717aee5"],["/posts/1766000773/index.html","ce968f89847f023189d0b9bc9ac3229d"],["/posts/1845581652/index.html","72e04a8f9d65ed3da76cb81ffc9b447a"],["/posts/1988799958/index.html","4f07f601b053dbdb9ebe24cd5148e5d3"],["/posts/2192148155/index.html","d76a5d57d29bd5ebbb38bc724a300bb3"],["/posts/2229302539/index.html","873d326a48d39a5059d44a55d0930a4a"],["/posts/2492968201/index.html","74755697920338d2354e33e8771a74a2"],["/posts/2949714254/index.html","ad95d69053419ac4e9dc11aef4695d10"],["/posts/3002318373/index.html","c680389869366c6e0295ec573dc528c2"],["/posts/3076558902/index.html","546836014cef39a77d685703a7eeca82"],["/posts/3147359483/index.html","f35a90cc6d65249c07387f74bbd274d8"],["/posts/3191465731/index.html","b42d29e2ddce8ae8c4ee3add21c28849"],["/posts/320179123/index.html","af7616199a86291ea78eec1246f2f254"],["/posts/3459697331/index.html","e008d5889553b821989a21b7058b8a0d"],["/posts/3489395119/index.html","d69a733186baf85a12a611b429107e3b"],["/posts/3525870963/index.html","9f1d2f5685c4f7ee36365d77a337da65"],["/posts/3602722865/index.html","baeef6d6405ede6560bb378005cb52a7"],["/posts/3640780602/index.html","b39cf04dd5a474cc91edb801d7fe95cc"],["/posts/3679626959/index.html","0ede486716764b5a36f42e06885d49ff"],["/posts/3699598685/index.html","5db61ce5a429769c6ac8fd4ed0c55231"],["/posts/3712900673/index.html","f278ef1d97fecc97f364825fa5785ab9"],["/posts/3770599674/index.html","18bb09b4f1b242c2ff5a72bc276e05f5"],["/posts/3935350387/index.html","bdd42cecf0475e099bac581539355d93"],["/posts/3948778863/index.html","c33b7f29d786ae0ef05cf437f4ab3621"],["/posts/403803703/index.html","f5685c2cb7723357b45d5c6de294a43d"],["/posts/4041933047/index.html","d54d1639f00fdd0ea8592c53e7ceb4cc"],["/posts/411074811/index.html","d31976161ef0d1abbf111e257182cfcf"],["/posts/4113963045/index.html","7f0160da8575aab182e59195274d5394"],["/posts/4163174813/index.html","151fcc4c688bc23a1ff5137a94f1ab12"],["/posts/4185022581/index.html","2a7419af40962df29b66b14dd8f9f17a"],["/posts/4192746113/index.html","233a3f003882b14a6d82184256090e90"],["/posts/719776913/index.html","9df687e1705bc851d26bb061fae9da7a"],["/posts/741067372/index.html","9b028ce1ad1b03c0cbf0844a773771c9"],["/posts/776340048/index.html","644cf1e1e908cbe92c5fde2b10197201"],["/posts/888354975/index.html","83eec6be36f87bffebb1b294cb0fb0fa"],["/style.css","c2e9b5eff56b92a24f6f6234087a1e01"],["/sw-register.js","2c36828c069b1d525ba9c4125e6f59cb"],["/tags/index.html","5b790a706d5e0d4998642b2a1652a95d"],["/tags/冰与火之歌/index.html","148bc7f49df0673cb91df4f31964156d"],["/tags/冰与火之歌/page/2/index.html","710e83b4d059ef6d9240e95ec0f33e0a"],["/tags/指珊/index.html","6d740fcca64c03a03ac6da07dcefa7ad"],["/tags/指珊/page/2/index.html","a85212d2761874fd3572fa18d42e313a"],["/tags/摸鱼之作/index.html","7101787ff94c80bebbdf3e2ff53c3ab9"],["/tags/日常/index.html","0385b6d9d0b660abaf3d8973edce5caa"],["/tags/柠梨/index.html","3194f804d9aea70c9358c9486ebbde58"],["/tags/柠梨/page/2/index.html","20858bec49d5677eca3864b2b5e1b191"],["/tags/柠梨/page/3/index.html","76eada093bf3b00ba6a71bf263fb0559"],["/tags/柠梨/page/4/index.html","292e855379148913ea6f335b37758c1f"],["/tags/柠梨/page/5/index.html","1100cac2cd5084a54b9673bc44199457"],["/tags/柠梨/page/6/index.html","6a5b84e6dd4e4a8b6e5363691df2e052"],["/tags/柠梨/page/7/index.html","212f392cefb3cd9f2672463561518538"],["/tags/狂飙/index.html","97d188cbf4de78fcbb74a67ffb5eb22d"],["/tags/镛武侠/index.html","a38ebe6f15b8540bfd286b70422a46e3"]];
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
