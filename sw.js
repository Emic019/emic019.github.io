/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d3bef22bafbc2d17b0d0006e0d12b2f2"],["/about/index.html","9ad1f66d4ce565119766d7c99f4c187f"],["/archives/2024/07/index.html","f8e3d706b4642c0ae29344ccd7e9f80a"],["/archives/2024/07/page/2/index.html","c2dc3f1923fd524e325ed9f24b5534cf"],["/archives/2024/07/page/3/index.html","c2a5c3921fcbf79caca2d1726e3a68a6"],["/archives/2024/07/page/4/index.html","821bfae6d754f731b24cf39c23b43d41"],["/archives/2024/07/page/5/index.html","d02577e3eddf19190cf4028c58c73652"],["/archives/2024/07/page/6/index.html","6766e886ac79fb9d65f8495c8cc16d6a"],["/archives/2024/08/index.html","0e5004f1f0610cafeac47b19cafe6a79"],["/archives/2024/09/index.html","84d8b35add72335840b38a7d88d0f8a8"],["/archives/2024/10/index.html","6275b796ba5fdb83a3bafdff8adbfd97"],["/archives/2024/11/index.html","34695604b3acb6599dc0cbaf5f93e1f6"],["/archives/2024/12/index.html","9a28f18cf2912a93e3776471613a4aa7"],["/archives/2024/index.html","c4891ad99eab21814d8830506b7a7d7c"],["/archives/2024/page/2/index.html","a0c3ff2b0a04d6943c3520558e0291c4"],["/archives/2024/page/3/index.html","6ecd44ceaddd295ddd5809688a2ed7ff"],["/archives/2024/page/4/index.html","acfe182ac0442c514467c2baf1c33552"],["/archives/2024/page/5/index.html","0da48b3380e598cbf39e92d2f55d6020"],["/archives/2024/page/6/index.html","1268e5b2df911e9df1fb8a45b4dddcaf"],["/archives/2024/page/7/index.html","082dc1a095c1012326b2c72743e3a2c8"],["/archives/2024/page/8/index.html","a04bd4594f69065f7e486eeedd422441"],["/archives/2024/page/9/index.html","f853d81e1d4fc9ddd6df06b33de3b1b2"],["/archives/2025/02/index.html","af3520e6546fe5abd042b680facd466a"],["/archives/2025/03/index.html","eb1cee411a81bc2111e965270a491017"],["/archives/2025/04/index.html","426da890a566b81a3b3ab4e82dcb81fb"],["/archives/2025/05/index.html","3a1151db8824e731a81ceabf93b46908"],["/archives/2025/05/page/2/index.html","afdbeeed063c2c4d2c9e304ca2e9e7eb"],["/archives/2025/06/index.html","96de2675dd9df187ba07fba77fd64699"],["/archives/2025/index.html","e25e180fc8754f3a057ed540873921d5"],["/archives/2025/page/2/index.html","01739bf00fe10ee9ea01786617e80753"],["/archives/2025/page/3/index.html","04258aa55218f6bd1fa37070de9ccafa"],["/archives/index.html","1301a1a14a24d053219e57e9b57a42ed"],["/archives/page/10/index.html","2e545bbfccea3d67b3798daf0cd74785"],["/archives/page/11/index.html","9d214f03a052559aaf13ea081728ca0c"],["/archives/page/2/index.html","532d5fba52ae1f5f5d596da72b547eca"],["/archives/page/3/index.html","e6d972bbc2a3784dd3b56f4498cbd2b6"],["/archives/page/4/index.html","88ec1edfec2124396c9aadbae0e36a5e"],["/archives/page/5/index.html","a46d3d68010fd8a518f7dbe66ab6a8da"],["/archives/page/6/index.html","ee10831af821dbb00084132b99afa831"],["/archives/page/7/index.html","650996f100d4c18a184fa29fc8d0524d"],["/archives/page/8/index.html","ab5470b2280965b683ef18d33bb8b88b"],["/archives/page/9/index.html","97b5b761cfb051d4a4b15a1cb235186b"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","bdfdd56ec4b7c8b243a0ffcb736e0e7e"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","a3532e2a6353c44067dde89593cde86d"],["/categories/与敌同行/index.html","8d79265eef97f288670f1e432ee36cd5"],["/categories/与敌同行/page/2/index.html","6fe766373b98dfa5867d7707376d8a1c"],["/categories/与敌同行/page/3/index.html","23c69291374b0d4259e9baf02d8eb50c"],["/categories/与敌同行/page/4/index.html","9dd983e11a963b05961f9d9b428a2b4a"],["/categories/与敌同行/第一卷-双镜/index.html","940b6f658351b873cc87695757c4cde9"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","6fc6b35ec493eb4c44a2f3418e5c43ff"],["/categories/与敌同行/第二卷-信天游/index.html","75569bff41545642daa72df54be8b07f"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","b3c6da012691e00c5686b484db7e1b9a"],["/categories/嘲鸟之歌/index.html","6b0e3c2996c3a44c17a238e47dac1f31"],["/categories/失落的应许之地/index.html","e1821b9c2849b36894574139ff07c177"],["/categories/失落的应许之地/page/2/index.html","61baf2ee8673898f9f6eda259e9ac8e3"],["/categories/失落的应许之地/page/3/index.html","77c527b576d45ab1e81e17e900025a72"],["/categories/月照天山雪/index.html","e9cac2f85299b5f3705cfcd7a42a9c9a"],["/categories/月照天山雪/page/2/index.html","6f6d80eda28edec04a2c43d65d51c953"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","2bf5d1c3b5d8eac2df32b0f97c168dc1"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","3daf01b30b4effaaa6cc72494d4812e2"],["/categories/狂飙，乱飙，发飙/index.html","89cd0601661b287a466308b708c25920"],["/categories/短篇/index.html","ca830b3f58e22be88087f45122011f96"],["/categories/破戒/index.html","38e1f20d6ed408a6f14a5cb699aae8ba"],["/categories/繁城之下/index.html","ae6eef7d9875f985a89d4bfde8aad0d6"],["/categories/长夜漫漫路迢迢/index.html","f90d2f2a29f57e2ceed737e159a9ff72"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","0508c573c697d97797568980bf27c91b"],["/css/modify.css","f8156e0b19d6d934fa51079ef2fa7881"],["/css/var.css","1a10ac55375c45920c3bcc0da4133889"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","d3be22a5ae78886a5946f3e6c12e110c"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/2/index.html","11907acdd79d0157f76a0f7ddafad776"],["/page/3/index.html","4f53e08cf5e2b75c44db3c36801feeb6"],["/page/4/index.html","508b461915eeb4f6c5e9ee3efce76dfa"],["/page/5/index.html","179f6d68eb0102ba985803500905b07f"],["/page/6/index.html","11e466f6970daaca7bbcd8f316c0a45b"],["/page/7/index.html","92cd9dc49d6cefe6270d0b1872aed7fa"],["/page/8/index.html","908b8571ded65c8f0f06fdb772c65213"],["/page/9/index.html","32d82ec1faceca5b0ea856db7f29bb73"],["/posts/1083795192/index.html","83b69e58a8d7bf36a00a6123278b4ec1"],["/posts/1099216759/index.html","68b72beab85bf79f15e4ef0211b05d34"],["/posts/1104021264/index.html","8cf31da6b74118e83ffb37cbe16379e1"],["/posts/1195093070/index.html","64f9628c929ba363dac1346b247cc761"],["/posts/12506394/index.html","52e88da197b190ed7ec9559e3c1f8cfa"],["/posts/1304356361/index.html","58f9b95863ed9c92cbb6784cf836cc69"],["/posts/1315809802/index.html","bd018e4ab1b2eb34ed2d059b4264215c"],["/posts/1329165323/index.html","8fd39e9c1b94e6f127d4a27490b3f1d1"],["/posts/1378666774/index.html","1a2ccc73306afef112c718ecb30e112c"],["/posts/1400613118/index.html","9ea577d89f5973b21410763cea179dff"],["/posts/1407316490/index.html","5fe748280be10329c71cea9a1cf74d53"],["/posts/1434824932/index.html","24952f60bc9424567fdddef3887e951c"],["/posts/1445707477/index.html","57e81651471d55d831d4a33acd4d3d61"],["/posts/1465373355/index.html","ac779e371eb7dc0c75c7914977c0d93b"],["/posts/1681850936/index.html","046d1acc8870eaefdb0955affac94eaa"],["/posts/1688557772/index.html","6b1e002f1cd3f56bf2197858af861ff0"],["/posts/1710373156/index.html","b78b47ec0432aaa3018a2d3a040fa4e6"],["/posts/1720998546/index.html","082d53e55d0611ca07c3592c00615ee4"],["/posts/173005120/index.html","47e840a59e23bdd981422f99b924ae6b"],["/posts/1766000773/index.html","304a16fc8693f1e4b3c410ea4f41771a"],["/posts/1845581652/index.html","61065a1cf92cb982d82c4e1a0627ee96"],["/posts/1988799958/index.html","f02244861fef164acdbd6537c1a23afd"],["/posts/2192148155/index.html","931fae56d8f6efb0e14bfe73e98ad007"],["/posts/2229302539/index.html","a6f4c353624e2a548cf8736e8a49d84e"],["/posts/2492968201/index.html","f9b9ad14fc48a23a8fc93aa7a071aec9"],["/posts/2531300956/index.html","7bb1312ecd455683bb05cc835722228a"],["/posts/2949714254/index.html","0f2e36547c46e078a5b550713dd98495"],["/posts/3002318373/index.html","f2b162767544224dae25c7145cb69d42"],["/posts/3076558902/index.html","ad1dc5dc7291d420ffdde5d282e9197e"],["/posts/3147359483/index.html","477b6e69e7ab5527f1d07cf3daee24f3"],["/posts/3191465731/index.html","30820d6276c067d4a989b82e254ce793"],["/posts/320179123/index.html","40a81fbe4400f62729e2e8e518e0dbf8"],["/posts/3459697331/index.html","25791d5d9b15d85a532fc948e887be84"],["/posts/3489395119/index.html","2a9e54d5aad762483afe83f63681ce6c"],["/posts/3525870963/index.html","2e7bd74ab02140404cd7f9f15223f506"],["/posts/3602722865/index.html","43e7afd39aeb0bef69c5832f8516c195"],["/posts/3640780602/index.html","c1ba1cdc1060662ce7f0ec3f1ab258a9"],["/posts/3679626959/index.html","b39ed877d44e1bfd6f0e9e76e7ede914"],["/posts/3699598685/index.html","b5667bc5f51501226c060655b5a49a1b"],["/posts/3712900673/index.html","04e8ea996f1cea70c94563ac12640e24"],["/posts/3770599674/index.html","32cc1e5a02e50cc79074ba8f0265fa63"],["/posts/3935350387/index.html","8b3761e50ab03b4c442ac3440aeb608a"],["/posts/3948778863/index.html","820b0a5cf267dacec1e830f3055e9e74"],["/posts/403803703/index.html","ebb13e240afed389c0f6d68b6ead37d1"],["/posts/4041933047/index.html","7613efb4f96a3a38f3dec490b6cde4f5"],["/posts/411074811/index.html","806e02091070be346e3f8c4495f369e9"],["/posts/4113963045/index.html","73853a5376413f18e5328abe6d7e699f"],["/posts/4163174813/index.html","0735b2d9bf75b95d1500c634472769ba"],["/posts/4185022581/index.html","50621f2cd33ade1795217eba1674ca1d"],["/posts/4192746113/index.html","41fd991562c7ede7980a868c3a2306ec"],["/posts/719776913/index.html","9489d6307d7e901421bc0a978e902806"],["/posts/741067372/index.html","22f60d306c2d2ed0192accf84af725cb"],["/posts/776340048/index.html","ca26bf36dd469c534da67c6f7b585dc5"],["/posts/888354975/index.html","20e200d6a2ba27fee16b47e944d36022"],["/style.css","de9ec0dd55a7fe3d307f09978606b903"],["/sw-register.js","2e2fd0913bc67c72e56b7f1ce310709e"],["/tags/index.html","333be376b9e647b17ebe5d6656930f4c"],["/tags/冰与火之歌/index.html","af44fbc1c634da7b134c8cf378a65aec"],["/tags/冰与火之歌/page/2/index.html","3e9a16e2584f0106ec25ef13ec3c8482"],["/tags/指珊/index.html","37d0cf22fd250bf51cc216f3c20f7c5b"],["/tags/指珊/page/2/index.html","daeef2e67ecd588c093e0dbe9b8b4a0d"],["/tags/摸鱼之作/index.html","26e9dc6ab8f205d79078759d0b7fefe4"],["/tags/日常/index.html","9fce3902382f5ff7465a59bec96e5f8c"],["/tags/柠梨/index.html","606baebb8304d87a8bb7b68483bc8b40"],["/tags/柠梨/page/2/index.html","2df7d8bd6bc5dd9c7fb211a6e09f90e2"],["/tags/柠梨/page/3/index.html","ea26697a6509694dcae36311b6b5099c"],["/tags/柠梨/page/4/index.html","2076bc94226d6636ce74016e40c9e02b"],["/tags/柠梨/page/5/index.html","37029af6d00790cc6f1d6806fe7afaef"],["/tags/柠梨/page/6/index.html","06875a55b8e20d9898c90567338dd483"],["/tags/柠梨/page/7/index.html","8fc3f45402bee7e396345643e76acc10"],["/tags/狂飙/index.html","dc817546ed88f77bd6a809ffea203aff"],["/tags/镛武侠/index.html","4f8ae59329f41ba412c4a4a9c2472b23"]];
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
