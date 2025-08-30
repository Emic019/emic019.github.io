/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f57c6e7e3b5973e22ce329edb9cb3f64"],["/about/index.html","0eec47ba8b2c028de57e0037db8b1b59"],["/archives/2024/07/index.html","072963d0ed9c0a083522c321913ddd65"],["/archives/2024/07/page/2/index.html","99d267d4a735c15c8fa4d2fdac85c6e4"],["/archives/2024/07/page/3/index.html","8b0c88e8c3fd4450667876dd3db24bc3"],["/archives/2024/07/page/4/index.html","c7371dbbad9f57c814dee31f691c2401"],["/archives/2024/07/page/5/index.html","56a906986a540de1d4f604b9e50b8e52"],["/archives/2024/07/page/6/index.html","14e96f2065bac2382166c686181ae44b"],["/archives/2024/08/index.html","401cbb3b7a774343d456dfaafce4e0f1"],["/archives/2024/09/index.html","12a7429ef36ddd527573835ba78eeb83"],["/archives/2024/10/index.html","34ab7523b487aecce86af0e9b8757ecf"],["/archives/2024/11/index.html","9fc7b9a89c7f2aae3ae876d0debfdd38"],["/archives/2024/12/index.html","60f5bd75ad2a24dbc8ecdf370c594d3f"],["/archives/2024/index.html","0fe54062e51579df5a5bacbe25284d24"],["/archives/2024/page/2/index.html","81e50339be40515a5b742d3c1d3bae31"],["/archives/2024/page/3/index.html","a69704111262a475ac04f277e5165ff0"],["/archives/2024/page/4/index.html","68ad80ccf6d4dda832d996f668940d65"],["/archives/2024/page/5/index.html","d16ce74b0af153b60f6c85f42601b946"],["/archives/2024/page/6/index.html","1637cfc81c8105a45800c5b6370a73b3"],["/archives/2024/page/7/index.html","d5ebf311a0e2e0ac9fcf460f2dcb8129"],["/archives/2024/page/8/index.html","7591a763c23bf0d85e4d6f9cde2ac2ce"],["/archives/2024/page/9/index.html","6f465fd294f453caa7635a4cf49dbcec"],["/archives/2025/02/index.html","5c290639d8ac06609880583c95cfc1f0"],["/archives/2025/03/index.html","e144b0fabe9b2ef2aff874ca7a8ab476"],["/archives/2025/04/index.html","8c42d50e939316bde15a94c8fdde47ac"],["/archives/2025/05/index.html","8105988f6106d2628eca463ad2d99c9e"],["/archives/2025/05/page/2/index.html","47d650cdefdba89bdaacfc20262de7f9"],["/archives/2025/06/index.html","6c494e1353766e547a35b1f3d981d312"],["/archives/2025/08/index.html","e01145313201a4dcdfa6aa47e59f8935"],["/archives/2025/08/page/2/index.html","a8222da7dabab79cb3a16ecd38802c91"],["/archives/2025/index.html","3e428925a2eac776516de0e2d1c8013b"],["/archives/2025/page/2/index.html","17d10b7dd00c9b52c6dd547d864d006f"],["/archives/2025/page/3/index.html","7c4ef3b53f9dade4d1c10e69dc0f1c41"],["/archives/2025/page/4/index.html","144721be424346076d1b3f3a168d4a5e"],["/archives/2025/page/5/index.html","68c86b488b6281a148557c67e075947e"],["/archives/index.html","a07f896130510a96bfd7f166379a3744"],["/archives/page/10/index.html","77e25ac735bc88e89956ccea5efcfc6f"],["/archives/page/11/index.html","adca8970121b5520e0c0b1283047570c"],["/archives/page/12/index.html","d2478b82a61fd25b7bc7d029ac5e861d"],["/archives/page/13/index.html","ab2c3fc314c96ebb9844672bd9eed5ab"],["/archives/page/2/index.html","e46a199e18b59eda38c9a2c44ecc8aa4"],["/archives/page/3/index.html","0fc7d8d99e4e01cd62213e30d8012e9c"],["/archives/page/4/index.html","5d64f6eb65916007ceff291e3d59cfe4"],["/archives/page/5/index.html","aed24b5674147a38ecac42100f8d6773"],["/archives/page/6/index.html","62e32d7388b2d94192af04bcd08ce9be"],["/archives/page/7/index.html","89a6510d8fc347cdbbede77a82c2b7f6"],["/archives/page/8/index.html","c64ac52c0cf05dd1e1a40dc06c2e7f4f"],["/archives/page/9/index.html","623e237ef08a7f09c804d6f21aba96d0"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short11.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","ab037566965df2752398a17205aac25f"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ly1.jpg","c798ae9035fe2d26036e82209e0ef727"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short16.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","4bb4d74a2db8f43b6ef218ef09c78b58"],["/categories/与敌同行/index.html","5a2e83f84d8e93e001e04d37ef52d2d9"],["/categories/与敌同行/page/2/index.html","54cfe1140a9fcae714eb8c527bf27521"],["/categories/与敌同行/page/3/index.html","4315bb53f5cbc79cd6eac36da94d828f"],["/categories/与敌同行/page/4/index.html","b68fafa03de0e39bcffce2b4ef45c74b"],["/categories/与敌同行/第一卷-双镜/index.html","4b95e505ce08fd2791dade00bc4ffff5"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","1ac89d3b2877844a3190cf240a6455cd"],["/categories/与敌同行/第二卷-信天游/index.html","9885a7b31c82343d1bfb4e042ef1396d"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","308383486f32e63a5acaf2488e567b48"],["/categories/乐园/index.html","5f29c397c5f6c52075e76931fcc93763"],["/categories/乐园/page/2/index.html","233c586e046182c77f9308606e874dad"],["/categories/嘲鸟之歌/index.html","f795a0d3d29d33eb623b05c4c2c9bd6f"],["/categories/失落的应许之地/index.html","ed83e454d86fc2fdd7829b6e61150936"],["/categories/失落的应许之地/page/2/index.html","7573a0e2f5441d95ff7037a194912d29"],["/categories/失落的应许之地/page/3/index.html","b68bacdbf03cd5ac3cdb457e22fe2739"],["/categories/月照天山雪/index.html","1ca2abe0ec8e03193d6c40fc69ff6593"],["/categories/月照天山雪/page/2/index.html","658f9368c0b431c37ea6c0b641e1b944"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","f776f74e3b833075a2b037a55ddffc08"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","b99305bbe3c60d786adca71621e60808"],["/categories/狂飙，乱飙，发飙/index.html","6d078822631330f0f99b6b3daa1d4361"],["/categories/短篇/index.html","94664c769fd5b64e9c7860261be1c084"],["/categories/繁城之下/index.html","ce838be511e6f5cbe3abd60e02d86b10"],["/categories/长夜漫漫路迢迢/index.html","c6a3d8792de5d58446f93236087288ad"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","07fab8f165a11275c80e6ba70e2b4fe6"],["/css/modify.css","7cd18810b58224b5b6b622e029be868a"],["/css/var.css","60b777925c1b2e84a17502df9c31b975"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","2d1c37a0a7a21d33831e0d7d270487b1"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","09477f17b11ee2207ef7cb7194433e29"],["/page/11/index.html","bd2e84d530ae4334780eabf9d6f618e2"],["/page/2/index.html","eaa0acc7ea3ef686a984737002208301"],["/page/3/index.html","c929d7c8d1d1231eb1acdfa5f0414780"],["/page/4/index.html","5ba1ed1e9cd4b7e7e830ef27cafd9090"],["/page/5/index.html","ad273e395becf0d8010f56b76cec2f0e"],["/page/6/index.html","59a5331405ab26fb4d5ba1de64e56222"],["/page/7/index.html","5ecbfefaf034361f0a7bf2d578e1644a"],["/page/8/index.html","f7c42dd357df905b7949b89872b45948"],["/page/9/index.html","5898b3da70d56abcf817c2e909444378"],["/posts/1083795192/index.html","d75e2aa42a6dee83a2f7f9a57a9c760b"],["/posts/1099216759/index.html","53d0cdea01244cf326137ac852e79a4a"],["/posts/1104021264/index.html","3de970b696c376a18dd858d4264d4d46"],["/posts/1195093070/index.html","c7b655f0db905f7bc1c6e563f202a4a9"],["/posts/12506394/index.html","942aacd8522abd15459a722e7d3eb332"],["/posts/1272692100/index.html","07a7f5e5ed0ba600eb9814a1fc514c5c"],["/posts/1304356361/index.html","a24fce3689aaeef5f8e17fbad22c676f"],["/posts/1315809802/index.html","17cd8f2c45d2316912d939b1d134f2b1"],["/posts/1329165323/index.html","7b6caed81f1df4a938c1ecec5155f144"],["/posts/1378666774/index.html","74c1dbda2bc6fce1b674d108a505ed0a"],["/posts/1400613118/index.html","0c475c0789013abf10a02015334a0ffe"],["/posts/1407316490/index.html","a4814b81e22af1f9a0a100c9ec9813f5"],["/posts/1434824932/index.html","b36247e32f6787434bfadf66b63f68a2"],["/posts/1445707477/index.html","173bb664d3609d29c69d87bc3e515af7"],["/posts/1465373355/index.html","2c8fb4e42f11ffd5e84aebcd659c90ca"],["/posts/1500385898/index.html","c78398202d82e4f01fecd4e32e28161c"],["/posts/1681850936/index.html","449a2351d53506ca4a3ad60b06ad7767"],["/posts/1688557772/index.html","fe436bd6935d952dd697966d7d178fe6"],["/posts/1710373156/index.html","06ee355d4e4fdaaac8ca2a6f7746af30"],["/posts/1720998546/index.html","0099cd1a6ce1b08cff3016975b50d937"],["/posts/173005120/index.html","18ef548c09b747fc29916dcae9ba7ee3"],["/posts/1766000773/index.html","fc0bbc90d642a0226b436695f3bfe570"],["/posts/1845581652/index.html","07118ab2909f228273bbd5b759f81ead"],["/posts/1988799958/index.html","25d8ee2eb15eacdab6376d18a3ea9747"],["/posts/2080722358/index.html","a379420bdf9663984fdf328253d132c4"],["/posts/2192148155/index.html","774d34878bec1c9991b250f435f79b83"],["/posts/2229302539/index.html","4fda7e5c13e8e8bf68b629c818131852"],["/posts/2492968201/index.html","0be6d90dd29493050f92a0a83da841bd"],["/posts/2531300956/index.html","00eb705e8f89cace0ecc43445ec377d0"],["/posts/2949714254/index.html","4ee8cdad1e1c2f46ea26a0a9a21afa44"],["/posts/3002318373/index.html","3bb1e322555a2f4387dca56b5330d8b1"],["/posts/3076558902/index.html","c5f6853b56f3522776aede8908061386"],["/posts/3147359483/index.html","6268a2a34ef316c285eafdb04f2504d8"],["/posts/3191465731/index.html","446f92363ee7e0e94ef804bed71dcfd0"],["/posts/320179123/index.html","4b660abea719066cb82283bef64ff3e1"],["/posts/3300469459/index.html","a51250475320a711770f8d698e18fd82"],["/posts/3459697331/index.html","31323d798d53dd4f11593c344ddb6c64"],["/posts/3489395119/index.html","a565aeed7f9bce2ac5d13c3e584452f0"],["/posts/3525870963/index.html","6e9ed522abc8d3365c03ea84cfcb41aa"],["/posts/3591144765/index.html","a87d7959ef5c8095ac77281c5a6e4ecd"],["/posts/3602722865/index.html","f58d452e9fe99a2af5d5e9e2b9339fa1"],["/posts/3640780602/index.html","2ac66d7880c57ff13256a73056ac2bc0"],["/posts/3679626959/index.html","0f70fd56eb8306db22b585cc9e016530"],["/posts/3699598685/index.html","fef23f7638edfb9543c91e6c11cee3ff"],["/posts/3712900673/index.html","b5b5c25f432b6efba09ed3a4634627ad"],["/posts/3770599674/index.html","d5c8955d8eef7b9a35f3c695ef59bc6c"],["/posts/3788666127/index.html","e9d00a6a5ed345b1ebb0c31bdb188eb5"],["/posts/3935350387/index.html","5d7f063fe75e9492beb074973ae70c8e"],["/posts/3948778863/index.html","38a89c104fd99bf0be0d22536c9693ca"],["/posts/403803703/index.html","fa4284c41bdb34dccebacf14cb643129"],["/posts/4041933047/index.html","ebff9ba723ac04fe6cc6bc28d324d860"],["/posts/4083669729/index.html","0324a569ef581e86f3b3e0777c60e597"],["/posts/4110582124/index.html","b7dcc75ea3bab4d1f2aed1056fe55fbd"],["/posts/411074811/index.html","24a2cd3287852f622e16169861f18592"],["/posts/4113963045/index.html","2aa6f498c0b755ebb14a74386e0c922b"],["/posts/4163174813/index.html","3403e7e40fac38a8849195178e6ad54f"],["/posts/4185022581/index.html","22648c68efe78442c91bf90ed8d73b4f"],["/posts/4192746113/index.html","8f80086f459026b46afef194bf183418"],["/posts/597050941/index.html","03ad76003c3f339fd1550b597c4a3ea1"],["/posts/719776913/index.html","897f306ecb1e0828f74bde61e75ee2b3"],["/posts/741067372/index.html","067ce6d4f974b0e56712646065df93fc"],["/posts/776340048/index.html","634aa84e6961172a24ab60da126bc3a8"],["/posts/888354975/index.html","442573e69c4d817bda1526515b2c2504"],["/style.css","6fa8418a6fd8cb0172390e77f5679e44"],["/sw-register.js","ff5a2b394582d303151491d83f6c2433"],["/tags/index.html","2bebc81f9ac7dd33b6e1a837edd73120"],["/tags/冰与火之歌/index.html","f0563ef5bb6530b96114a2abadfc3bfa"],["/tags/冰与火之歌/page/2/index.html","37bc7773626c91673f699a885dcbfd52"],["/tags/指珊/index.html","d0ac0665d3aa0e74101013933a38c730"],["/tags/指珊/page/2/index.html","aaa5eebffbc930411befdd53611c65f0"],["/tags/摸鱼之作/index.html","ec0c2bcece878cfe06cd5df7ba5f4cdf"],["/tags/日常/index.html","81beda27d566e3a309d21de8edb423ee"],["/tags/柠梨/index.html","e4647d13a29fbce70153619441fbb913"],["/tags/柠梨/page/2/index.html","498a94c00ed5032c090d53d9a4cad626"],["/tags/柠梨/page/3/index.html","7c6ab4f65e68b53587f48e8f75c8774a"],["/tags/柠梨/page/4/index.html","a4a639a5a240010fac4c4eb94109e808"],["/tags/柠梨/page/5/index.html","19c3805a9557c167301b188863690d92"],["/tags/柠梨/page/6/index.html","19cfb2936710f52887f3e595d2173d07"],["/tags/柠梨/page/7/index.html","7623aedf2ce7b19881c90e813e763ca1"],["/tags/柠梨/page/8/index.html","59e1f4c92cdbe3b9fe10f18b38809ab6"],["/tags/柠梨/page/9/index.html","af61fa6b280be60ab88cbc9526ea8a63"],["/tags/狂飙/index.html","544ea8f1eb62e461c7c1bba9eeb7fa73"],["/tags/镛武侠/index.html","cc33c07e65370cb8e1f728f1a3636a34"]];
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
