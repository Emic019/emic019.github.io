/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","436d3cbc1c46ae2a86f6082bf41495ff"],["/about/index.html","58170d464b3211f0c98ef4ce54603966"],["/archives/2024/07/index.html","4f54fa67dfa89727ed61bd24960c460b"],["/archives/2024/07/page/2/index.html","869e0ffc2e73bd72646741a22eda7289"],["/archives/2024/07/page/3/index.html","963735966a0a3aadeafa715c8fecc09a"],["/archives/2024/07/page/4/index.html","e7393d971c9423cbd0b87c580754ea05"],["/archives/2024/07/page/5/index.html","95fca55cd0e127492fb59c19b27b2fa6"],["/archives/2024/07/page/6/index.html","d09eb0d0cbe2bfadee3d0b60394e74cb"],["/archives/2024/08/index.html","138a204ec4986dfa80f6d38cfd931351"],["/archives/2024/09/index.html","5b03eb56db213b4a674262435eae7686"],["/archives/2024/10/index.html","9eccdb0fb37df37020915981299553cc"],["/archives/2024/11/index.html","afdb8c3435aaca2f948f3bd6ca50ad09"],["/archives/2024/12/index.html","aa11381728206175272b4c173331461f"],["/archives/2024/index.html","b9f2c5f3ff4ad796afd83ce557da9315"],["/archives/2024/page/2/index.html","1a7c46e0845605c796b9537921ce7d55"],["/archives/2024/page/3/index.html","bed4f58ec3d19f62f5ddaee516a794b7"],["/archives/2024/page/4/index.html","38f20590b737d30ad25ce995aa8db13c"],["/archives/2024/page/5/index.html","6bbea1f37aa5e1d04fdc11fcc063fe15"],["/archives/2024/page/6/index.html","b5a0207940d88e26d3a80b3153095cdc"],["/archives/2024/page/7/index.html","e3aefc04f8d20f3708e25f2bfc3c0543"],["/archives/2024/page/8/index.html","307183eec82ec46c7084eaf3082f75f9"],["/archives/2024/page/9/index.html","2f30c0b86beaee2d2dea99be28309b08"],["/archives/2025/02/index.html","e6d8793f09ab655029d2735d332f2a5e"],["/archives/2025/03/index.html","a14cf56f9eea4bf541cc595d30892a2f"],["/archives/2025/04/index.html","6013836581ba45738f155fc82be53c0a"],["/archives/2025/05/index.html","159d29295740590930aa18671b098d2b"],["/archives/2025/05/page/2/index.html","59cdb7a38ed16a43096bf8f5201c5e77"],["/archives/2025/06/index.html","0be994f31cdcf8aa63606b98ad14db49"],["/archives/2025/08/index.html","e0dd29b7ef4d83246e7720ed6655eb47"],["/archives/2025/index.html","2f92c9e945619fd9027bade8df30c56b"],["/archives/2025/page/2/index.html","2c0ee7e4939996cd8a6f1af636adcb11"],["/archives/2025/page/3/index.html","ea311789ffa0e3f7fad44226d048434c"],["/archives/index.html","0c5a07a6bffddcd41474395e53bb8cef"],["/archives/page/10/index.html","66e800c48e707661aad701b2667a0329"],["/archives/page/11/index.html","89891645f1fa9435c9f260951f479060"],["/archives/page/12/index.html","c110ec7f9dfe1a7865ad5c1dc325daf8"],["/archives/page/2/index.html","fb195ae6cffe8a899d75f117d0fd240e"],["/archives/page/3/index.html","0c2102ad55ff6b721b4d304221ade504"],["/archives/page/4/index.html","2d707f9bf152991c61ea3b7471cb2331"],["/archives/page/5/index.html","b833eaa34c293b69bb9887b59a3ec935"],["/archives/page/6/index.html","82135710f0fe13dfc3f4ff0655920320"],["/archives/page/7/index.html","5a4d62d74e81e769782aeff64e8b4764"],["/archives/page/8/index.html","4e002cee9bfd6659b56cfc265900b014"],["/archives/page/9/index.html","2a88d77367904e654b2ef0998e601d13"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short11.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short16.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","bdfdd56ec4b7c8b243a0ffcb736e0e7e"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","dee3d85d5a44a30bfb1e7f06e04c86a8"],["/categories/与敌同行/index.html","c7cb903c8c95a4a3997bb069d1a99d20"],["/categories/与敌同行/page/2/index.html","aa972bb837b5fa22d3d714c1244f67b1"],["/categories/与敌同行/page/3/index.html","5c5aed0e64257c684625f98f14f6b296"],["/categories/与敌同行/page/4/index.html","784b2aa0a0cc9f037e7912aa29c56ba6"],["/categories/与敌同行/第一卷-双镜/index.html","28e9f706937cac616377c0a3bb313d97"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","7451637b3a83c23350fcb4f475e4edc6"],["/categories/与敌同行/第二卷-信天游/index.html","b51f64a0d0835f0e9f8482ab77a89375"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","c1b3fac1d9255069a0fcae1fd487d4a2"],["/categories/嘲鸟之歌/index.html","3de74a2f4a374f062620f0d958d83c28"],["/categories/失落的应许之地/index.html","2babb2508d501a88e63d410341a05d41"],["/categories/失落的应许之地/page/2/index.html","7c59b05de76a03a23562d5b485265304"],["/categories/失落的应许之地/page/3/index.html","051d2e10b85d66a7c4f67676a72a5f8e"],["/categories/月照天山雪/index.html","0cb3b94ef4466d18eefb78d48833a9fb"],["/categories/月照天山雪/page/2/index.html","dd6fed6430c08823fadd23eb5be24466"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","039170f70459a624c1e04e1b147409a5"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","be47382465c8c691e07390d0ff30a34a"],["/categories/狂飙，乱飙，发飙/index.html","4e9c775922f5f1dcf918a72a1e65cfda"],["/categories/短篇/index.html","b381cb7111bd807e57cf76ea51a720a7"],["/categories/破戒/index.html","812b3b1e1dce5abdead59f284617a361"],["/categories/繁城之下/index.html","7ac7fda3dd62837a1993ad39ae528ce1"],["/categories/长夜漫漫路迢迢/index.html","4058e0f7efe83cc2f212a82fbe624ffc"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","0d547dbe9a94fe9c715893b4f8c6c01e"],["/css/modify.css","ac3b6c1e870f2c095db1fa5849d4fc01"],["/css/var.css","97fec9246cd444591a343c87a09d87aa"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","16c14bba06100211e09ad215ae19a17e"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","05784df7bbaf02a58323296359bd90be"],["/page/2/index.html","cc96e9f840ca0036dce221130f5f1671"],["/page/3/index.html","39c4660e20d88c137672d46465803aff"],["/page/4/index.html","d5b81e5cc6a3a9960cfcadd3051bd8db"],["/page/5/index.html","024e1d15b807dff1ab5c1e99ad3d2bc0"],["/page/6/index.html","82ad14de002b2d1c88d0d60e8e8c9d8e"],["/page/7/index.html","2e243247ef5f6979be0cbb951bd9a60e"],["/page/8/index.html","89f5796720e87f541f1c3ad6f829238a"],["/page/9/index.html","349e424cc581d28a41f4d412db4fc42f"],["/posts/1083795192/index.html","7d1fc7bc4da1011244d212b9af0d68ea"],["/posts/1099216759/index.html","eafd70da76c6e530c1d0e89070417102"],["/posts/1104021264/index.html","811e4f0311ad60f042652c0c83f81b32"],["/posts/1195093070/index.html","7cf4b9ab4a9e583607aea48ecee5678a"],["/posts/12506394/index.html","c808b6b736a87c243c8c12ba33798219"],["/posts/1304356361/index.html","7ad6b8a901dda8486f1f261042ed85e4"],["/posts/1315809802/index.html","5c54e53131e35477549b7f698dfe5222"],["/posts/1329165323/index.html","29b493fae1b7d92fe85c39abe88a7396"],["/posts/1378666774/index.html","ab0c2d6f0c754c1d0aacc66917385cb4"],["/posts/1400613118/index.html","554ca78cd06a333edaf992c028bb1976"],["/posts/1407316490/index.html","3474990f0347fae72b2ff0c0e7f3798f"],["/posts/1434824932/index.html","2945f6d3659ee2cb99e3503b58e956ba"],["/posts/1445707477/index.html","38f14c1a6df64492d7c5e6c87638b8d8"],["/posts/1465373355/index.html","d688e10c932716f4d00e7be98f5e857c"],["/posts/1681850936/index.html","42335e5392df0685399dcc034c1d51ab"],["/posts/1688557772/index.html","2aa69aaa62af09585dad7282fa917025"],["/posts/1710373156/index.html","93dddd7fb689a5706db90b956f7699c3"],["/posts/1720998546/index.html","1abb5154f8b582084bc590c32a2c290c"],["/posts/173005120/index.html","4e447d02c02f53618610fa7461c92f30"],["/posts/1766000773/index.html","2903de3b53f96b8c2d38183f6b5b50d6"],["/posts/1845581652/index.html","cf857dadb5cff77941a791680a0dcf57"],["/posts/1988799958/index.html","9026d826bf3c2bc0ca454905151da36b"],["/posts/2192148155/index.html","989fea52cc484959504e3dee54d66e63"],["/posts/2229302539/index.html","5e04e2589b296cf06b9e4885b9b2c7fa"],["/posts/2492968201/index.html","e7b6c513088d95c0a366b4ed7841fa5c"],["/posts/2531300956/index.html","c4be6664dd35d498a1c6ed27530f36d1"],["/posts/2949714254/index.html","9e3f9e3640adefc69d2171ebd0606754"],["/posts/3002318373/index.html","a21e249c650b086ee31787e88601c495"],["/posts/3076558902/index.html","edca5ad543292fab1ca2b258d05b1bde"],["/posts/3147359483/index.html","f06e676a36696f58276e39fd5cca8920"],["/posts/3191465731/index.html","104448d325e66f3eb00e58dd8bcc1c1c"],["/posts/320179123/index.html","096376c81f05de14b3e551fd7cbcc87e"],["/posts/3459697331/index.html","3dab58fcb2470c9fd41becb2b19394a1"],["/posts/3489395119/index.html","fcf26be20e68c45b3286ae00e3f72d22"],["/posts/3525870963/index.html","1305fc48ee6788f99bbf80e9c02f108c"],["/posts/3602722865/index.html","556e09a4f7a05b75de5fb38090855608"],["/posts/3640780602/index.html","c7dfb0d1576c74443796474a90c99b8f"],["/posts/3679626959/index.html","ecfd80e07b2e4fc686090c774956d84f"],["/posts/3699598685/index.html","8c23ae00ef8292d935afe12fe87bbc93"],["/posts/3712900673/index.html","6f7c4d5bcd0abcb83db8311bd2c05e33"],["/posts/3770599674/index.html","ef6640699a1f65e702baa42d5e70e143"],["/posts/3935350387/index.html","adac2e6a698d656fad5877188ef2080b"],["/posts/3948778863/index.html","94fd087c5d22d663abb51ae2fa29f33f"],["/posts/403803703/index.html","7280d4026ffe0b358e6ab421f664ba4a"],["/posts/4041933047/index.html","1f220ec1a01a27328c2992b5290ff89b"],["/posts/4110582124/index.html","4758caf970dfd35c15e91140354643f0"],["/posts/411074811/index.html","2a25ac7e6f3e4cf9217e0e6fef212fb5"],["/posts/4113963045/index.html","89f6759869211b4a39bedfd25955eb7f"],["/posts/4163174813/index.html","f530d990478e07163062fd8cee83c1b9"],["/posts/4185022581/index.html","f268879e752e7f56a40e09458814ec65"],["/posts/4192746113/index.html","a55b1f5e652eeebb63f3055ee0ea30e2"],["/posts/597050941/index.html","34cbeae3a0c5e5cfab3341c2801d079c"],["/posts/719776913/index.html","3060f0765644657303c95d461dc37ccf"],["/posts/741067372/index.html","3e221554542dd816262d17f41acd6c87"],["/posts/776340048/index.html","f8deb37712e27430f56022df46e97ae2"],["/posts/888354975/index.html","c0f13c9e234e32ed66a48ffd2414e10b"],["/style.css","c45cd0a0ec4546c5f10d36798dc1ce38"],["/sw-register.js","010d99e4ae8a5cc2a949da12c1cc6d84"],["/tags/index.html","c7c2590779f4931808272693347696d7"],["/tags/冰与火之歌/index.html","12404384c2130e501ca445fecd5b8a56"],["/tags/冰与火之歌/page/2/index.html","1f655327d2f523520d8fa61f3a892dff"],["/tags/指珊/index.html","7996ea7b8f23dc17f75cf5177e90b295"],["/tags/指珊/page/2/index.html","a6bedfdca9641b3b65f8c7cf98f77aee"],["/tags/摸鱼之作/index.html","78a2e1a8d2c000b7caf4c867aa11050b"],["/tags/日常/index.html","9920b1c5e63a5ccb06115a0b8d7cc5f5"],["/tags/柠梨/index.html","c147e4847a8023bdf34de5ceedee315f"],["/tags/柠梨/page/2/index.html","bd65065b77113640f8162c097ee89550"],["/tags/柠梨/page/3/index.html","d78b06ea998143cf9be96d729c0b7c47"],["/tags/柠梨/page/4/index.html","00fb2c47c21db7d1dae5a0ffbbffc12b"],["/tags/柠梨/page/5/index.html","38a7a5000d516ecfc4e59d074a81c22d"],["/tags/柠梨/page/6/index.html","f9a90f58fffe8c1bfb6f0ddac9acf499"],["/tags/柠梨/page/7/index.html","5ca05612cc1307bb4bb810020ad3f39e"],["/tags/狂飙/index.html","b3c989b8cc63bb91bf4a97a05808170b"],["/tags/镛武侠/index.html","648d3306573e653ce51fe8bfc1c237b7"]];
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
