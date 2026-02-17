/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c433ed1a85f933ac9334e303810b5cca"],["/about/index.html","95664a8134497fb3620ce24dce5b5279"],["/archives/2024/07/index.html","284ee285cad905507ead4a692d529c8a"],["/archives/2024/07/page/2/index.html","a56bf8ca3f1ca6ca4b4da41ed5a9544b"],["/archives/2024/07/page/3/index.html","3447cd62a385b5684af876e29804c403"],["/archives/2024/07/page/4/index.html","197fc822208458b478f6aba63238fdea"],["/archives/2024/07/page/5/index.html","957df94be33c4772796d6d5a86a7633a"],["/archives/2024/07/page/6/index.html","361240fe2658ea636afbf09ac3161ed9"],["/archives/2024/08/index.html","731a31b483c85c58a39de90b7c01aaf9"],["/archives/2024/09/index.html","c8eac7c5c2303d680542df0556d572ac"],["/archives/2024/10/index.html","18c67a53eed9b66a967caebc11a3a16b"],["/archives/2024/11/index.html","bbfdfa647d9bb76ebcf213865e1dba0a"],["/archives/2024/12/index.html","df36674e4596cfb84b4125b0d261f679"],["/archives/2024/index.html","0eee5a3deddc7385a29c03fb95b4ec3f"],["/archives/2024/page/2/index.html","4128957d95d3ebdeaed99f49c9acb39f"],["/archives/2024/page/3/index.html","cac2debe71391b6438c0efdd107db13d"],["/archives/2024/page/4/index.html","eb26ca1ee2bd360cdd6811004f488c91"],["/archives/2024/page/5/index.html","6a87712421ca7caef7eaabf0411df28b"],["/archives/2024/page/6/index.html","f105b3a36bab1c14b9df99b5dd24156c"],["/archives/2024/page/7/index.html","598a3849e7bf11e9f5129b914257691a"],["/archives/2024/page/8/index.html","16a387482d3dc5f5e5fbcf919623e8e5"],["/archives/2024/page/9/index.html","84acabe574035cc9686bd3d2d9760ede"],["/archives/2025/02/index.html","ee6271614e7b67ce84204709cc67e83d"],["/archives/2025/03/index.html","f5fb2d0fda92ea818805ce137fc048e9"],["/archives/2025/04/index.html","780df49dc7a3475bca19d2cf868cdd41"],["/archives/2025/05/index.html","37d654ef9426c106e5b3c157c8ee3cea"],["/archives/2025/05/page/2/index.html","6433f14640fa5209f71ad2469cc8e708"],["/archives/2025/06/index.html","dabb5c58e90f1a02cb61079b325f142c"],["/archives/2025/08/index.html","e80dd76296b27f17a5da3ffa11e040ea"],["/archives/2025/08/page/2/index.html","8be7cb6aa694ded3723bd67e11e9cd29"],["/archives/2025/09/index.html","65e193d29e1ad5e1bf2923a62e07386c"],["/archives/2025/10/index.html","fa06d56159e7b3156df7e9805f570901"],["/archives/2025/11/index.html","a3ae1f78a2dddee18fce33fe5bdd2039"],["/archives/2025/12/index.html","cff7e6dd0dce2ceb1b6ae4cf034bbfb3"],["/archives/2025/index.html","fe0ac15163addeeeb2bdacb55942a65c"],["/archives/2025/page/2/index.html","15aba412d345dbd815bb81486da02f23"],["/archives/2025/page/3/index.html","109b2488cffdf3eb851ffd00f8304e5a"],["/archives/2025/page/4/index.html","30a081ac578a45d0cf28e51cf1f8cc13"],["/archives/2025/page/5/index.html","da596c214134238fd60552413f3d6861"],["/archives/2025/page/6/index.html","5c3911fcc5edf6a85319205e9d64f5e3"],["/archives/2025/page/7/index.html","7bb18b45b2368db4db5a53e0b610e7aa"],["/archives/2025/page/8/index.html","365bd693bd112f94e32dd216a613ba7b"],["/archives/2026/01/index.html","b3698399b037f01078d679cac9326a1d"],["/archives/2026/02/index.html","58fdeb4d6930283df8c2c02623ae5016"],["/archives/2026/index.html","3cc5aab6a6335c18cd744604918b1bb8"],["/archives/2026/page/2/index.html","9b2fc97687dfe8a06aa2e73fdc1ea2ec"],["/archives/index.html","d14276c56feaefccf34fbee985ac0d43"],["/archives/page/10/index.html","f3da591cb16e58b9bf889981a0d85b83"],["/archives/page/11/index.html","06b576d2da1c3c57e2bf151cd2cf5600"],["/archives/page/12/index.html","ccd1d6d3b7fcd4beca51773d8178cb27"],["/archives/page/13/index.html","66029538cd5bcb39934fcad338a30b28"],["/archives/page/14/index.html","0491f3b14f859c301fcbf827e32c277b"],["/archives/page/15/index.html","b8179ebc0a1d214c43edcb74fa6e82f6"],["/archives/page/16/index.html","249caa659fac8f7c73bc3b5609f3636e"],["/archives/page/17/index.html","075036c8d37340ca2a552648e1d5150a"],["/archives/page/2/index.html","1a93326e35905406f966d3dc84b4a7b1"],["/archives/page/3/index.html","76fdf86d46fe04a87937bb19a81578a5"],["/archives/page/4/index.html","fec0d0abe179e2f87cc0a0ea702372d3"],["/archives/page/5/index.html","d755f12a642e3311816733de8130364a"],["/archives/page/6/index.html","2738fc4a2e052d1b1a8690e282fa7a14"],["/archives/page/7/index.html","1f8cbbd2f3a79448fc3e71d15d8a932f"],["/archives/page/8/index.html","275082a95ab9063d411c04de708f43e5"],["/archives/page/9/index.html","01b8ec9b0db6ed592a543d5da151ee89"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/jybhj.jpg","855051bdb32dac6b6b2214b662e3f784"],["/assets/banner/lhj.jpg","343b0999baaaa6e0fdd600c03f2102e4"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/sny3.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/sny4.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/sny5.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/sny6.jpg","12f4fac008c279f4a1f41506995d038e"],["/assets/banner/sny7.jpg","bf0d0ce9dfe8b32ea465559b903bac87"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","2a063a3149fdf13438fdf50883e2d45c"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/jybhj.jpg","f074da0cdf315a64a5d3e8aa3896fea1"],["/assets/cover/lhj.jpg","1afecd1268dc0d9779d5231b84bfbb19"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short2.jpg","84a851e0be682a3a37a2a3fc5165efc2"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/sny1.jpg","92158f93aff91b4ea1b1ff8059f2e953"],["/assets/cover/sny2.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/sny3.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/sny4.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/sny6.jpg","0e1b91307940debd8b8cf90e3517268d"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","bacb33b53ff2c3d1f312761306863b9a"],["/categories/index.html","add5e95f57a885f96d923d1da39a1748"],["/categories/与敌同行/index.html","111e9d97db3cb8d619288a3096a87b87"],["/categories/与敌同行/page/2/index.html","9dbba2d799d70321ff8f40f5cf2a4fd4"],["/categories/与敌同行/page/3/index.html","5aca7387999b9125b966f4a140c57be7"],["/categories/与敌同行/page/4/index.html","564786431aff2397720b0fc454561819"],["/categories/与敌同行/第一卷-双镜/index.html","abf0feb5bc6c24757d6436c8c0fbb7d5"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","c3b3617b1acb286c37a431b1a5a39a9a"],["/categories/与敌同行/第二卷-信天游/index.html","56ac3c5f017e71ff758c8d2962842a60"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","14dcbf46c1e18e843025f592a40ad06d"],["/categories/乐园/index.html","4ca1a9fffb27017d285fad38387bdb8a"],["/categories/乐园/page/2/index.html","35bb001213346368897e10d4f4e7c039"],["/categories/乐园/page/3/index.html","0da8b5786a8c891d56d02d805107151b"],["/categories/乐园/page/4/index.html","ebae5da2f024edd487d8eb2a014d1e48"],["/categories/嘲鸟之歌/index.html","a464b90f49104442a537b3c56427934d"],["/categories/失落的应许之地/index.html","33ef02a865b978b20c1d249d67749074"],["/categories/失落的应许之地/page/2/index.html","17c485ed9cae41a2541a4a63baf45e98"],["/categories/失落的应许之地/page/3/index.html","8ace4f7921073db3613fa5b450948a3f"],["/categories/月照天山雪/index.html","9d634e435928bb648e23ac2cf389557a"],["/categories/月照天山雪/page/2/index.html","108acc89238484c711437da1f0adf68d"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","3a24c44d6925edcd7f7ec818ca1f03ec"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","0aa5a6a864fb7f0878304e17aef4fa2e"],["/categories/狂飙，乱飙，发飙/index.html","a4cf8fccf3b2010fb7720f9ef435dada"],["/categories/短篇/index.html","3b24d90b25a392b5681f424779eada3d"],["/categories/繁城之下/index.html","39d1c4a9cb19a9b98dcfb8ac3770e8dd"],["/categories/繁城之下/page/2/index.html","ae0fef1f57a8dedf558cee40f72573ff"],["/categories/繁城之下/page/3/index.html","7a433a9201eb0b0e61f211d3d24351a1"],["/categories/长夜漫漫路迢迢/index.html","904cef596534d341d9789133aaef6a1d"],["/css/custom.css","99e8d01aedca264a71b75f7b06a2f64c"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","9b792a4f5065f7a0c9cbf9c1d5191429"],["/css/modify.css","0f73a9cea9030f3d3f3070a0739f727d"],["/css/var.css","6bf0b919c41390852907416d04fccd20"],["/css/wiki.css","2618435a6e1e43f5ee969a69712fc9d6"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/footer.jpg","ec252cde7c6d58359def0368b1a9a882"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","1106757e3a76626768e97e3630766316"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/theme.jpg","6fa6f8ecfe50d0b57187af9bf83254e8"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","91f2f6f1d6bc75a9b97f9da0d94b5652"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/js/wiki.js","193ff94ce980e356f33402874cddee33"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","366116b85d8ce8185f3a97eaaa26c0c4"],["/page/11/index.html","ba243ff9f91f008e1b4b6c9fb1c2933d"],["/page/12/index.html","02cfe6412b1cf00e971ec4d0957aa245"],["/page/13/index.html","bc4297b96ceba97dc693acf14c24e5a1"],["/page/14/index.html","4aa97f091d8641197e492824d221d509"],["/page/15/index.html","9f605ab9e65bc23054f13a3471951ff3"],["/page/2/index.html","e8a7381838cfc27f7c8b0f02f810665c"],["/page/3/index.html","cd4872c519233e8b132169362009894c"],["/page/4/index.html","f5badac55ccd1d33a6f02ff4a56db4e8"],["/page/5/index.html","9a06ad0da79d25a2a9ada2f7a8848c48"],["/page/6/index.html","6a902dd78268a0053d8993627efeccd6"],["/page/7/index.html","4cea51d77dbaa9e64ff24d4d0ca1ba92"],["/page/8/index.html","58e47efb949aaa4c2db086592ebc6135"],["/page/9/index.html","85760c7c58aad559c3fc87349806cf05"],["/posts/103655302/index.html","051112bf572dabcbdd508d3406d390c1"],["/posts/1083795192/index.html","015a1ba5655ce4fb723b9b8b1ad553cd"],["/posts/1099216759/index.html","a95cfa9bd359e1f3e346a22ca86f6823"],["/posts/1104021264/index.html","b020cfe17da491a8c850c640a04897ab"],["/posts/1195093070/index.html","de50aa760511a24895106d09a3eb54df"],["/posts/12506394/index.html","04738fc30939c857902898faf7762bf3"],["/posts/1272692100/index.html","5ffcb472bb2a8716540ee74abba89433"],["/posts/1304356361/index.html","7aff3c012bce03b4b1a3bd373c3c065d"],["/posts/1315809802/index.html","8b9d7f9ba06d03300667ee27fc671e4c"],["/posts/1329165323/index.html","c9c63640e821d56301e36c1797b46b78"],["/posts/1378666774/index.html","cb591975d051be785ab860bbf8ba13d9"],["/posts/1400613118/index.html","f62e524b3a05d254986d00036ca1ad86"],["/posts/1407316490/index.html","8aaa89dfa13ee412534b4c889d3e987c"],["/posts/1434824932/index.html","3006c82166c9db8f0539b8ff0701e1b6"],["/posts/1445707477/index.html","92f0a3b73ff767c9f43d52b007f95d47"],["/posts/1465373355/index.html","fd268fa4a692aff1127168c8ec9b0379"],["/posts/1500385898/index.html","578393633ccedef036487ab09edfb26d"],["/posts/1681850936/index.html","9c675b65d2cd1d31ceda294742df6959"],["/posts/1688557772/index.html","5b6667c1a553b7f2c022d30a22a7b4b2"],["/posts/1710373156/index.html","a0eadec50b1529e6e24a22365f8de316"],["/posts/1720998546/index.html","781caaf595c6862df7de265e1f717010"],["/posts/173005120/index.html","9dc2a2e5b83b0f4b2d56bbe69a828421"],["/posts/1758837205/index.html","a4efa1f8dbcf46b246109c98b3e58447"],["/posts/1766000773/index.html","f321ef817a1566cde84eea26a59cbc00"],["/posts/1771063266/index.html","9c6c2e6d0ebde2e85aa4a725a88a9402"],["/posts/1843191030/index.html","d1e66e5b6094f52d84f59b242a12c10c"],["/posts/1845581652/index.html","56e2ef335bf64cea037c32633f56e918"],["/posts/1859941397/index.html","dd57d1e514ea88215ea90fc01afb2216"],["/posts/1988799958/index.html","bb82805bfe0d4220edc8e999494c0569"],["/posts/2080722358/index.html","8aacf5986ada64ab58a1a58df30efe93"],["/posts/2142008032/index.html","c96b0a51cd1d790739d5889579dddd7c"],["/posts/2192148155/index.html","3147d53fc44e0d5839d4e6ed7937c083"],["/posts/2229302539/index.html","0e17b7570689d20199d420c487eae1ac"],["/posts/2278904638/index.html","7446a52fe5fb6135bd6d7f3bb662bf79"],["/posts/2303668433/index.html","458bcaccf0829cd3decf949d243f179e"],["/posts/2492968201/index.html","a667ed3ea00e4035ed7c686e556a9755"],["/posts/2531300956/index.html","f20fe0019fac712547bdb4d2a97fb045"],["/posts/2616893247/index.html","f105a29a960010885fa2fd841abf4233"],["/posts/263262350/index.html","052af9d653a6d5d99d12c0e0288b5cd8"],["/posts/2700096901/index.html","3352bd9b91ff829b40de013e3b47720f"],["/posts/2869217975/index.html","4a7e28d6b8a8260eb77362f300c43fd5"],["/posts/2888068877/index.html","c3e21f0c32ed42a1d7340a01eacb4549"],["/posts/2949714254/index.html","6ec194f89eb484183524a8fea381458e"],["/posts/3002318373/index.html","696efb2f56889cbea7d0c9d32824e129"],["/posts/3076558902/index.html","efc0d6481c951b106e8ae78c5b199b71"],["/posts/3147359483/index.html","9376a6508f696c45887e04d59dedf9ee"],["/posts/3191465731/index.html","560f0787d59866474c2a8fd1ccb4bf7a"],["/posts/3197223139/index.html","899dd39854dfd341f48c4f43eb9b3880"],["/posts/320179123/index.html","9ff1363e61418cf24b4ec8edfd161b69"],["/posts/3300469459/index.html","db242598d8f15afe6c164e8bbaae98ed"],["/posts/330870226/index.html","a32c1b62fb03723eec18df1c70456482"],["/posts/345507944/index.html","7a983afb071f26ebbc8099ce0abb8164"],["/posts/3459697331/index.html","9e0846b7d0dbde191ca34d8a4da447fc"],["/posts/3489395119/index.html","97ac2def5fab0b018968794cce45f671"],["/posts/3509330055/index.html","06b9675880a786a8b40a1759213dab2d"],["/posts/3525870963/index.html","83b4fba1ce677b4e237ec846518fb50d"],["/posts/3591144765/index.html","da7fc1b04bb231961f6037b15fb61b33"],["/posts/3602722865/index.html","d38a958b9b1d61c0dcc3c65c54decea3"],["/posts/3640780602/index.html","b3bcd2458aa9303d1fb5eaf3508dca32"],["/posts/3679626959/index.html","8a6ead8826188fd093512dfd9d919498"],["/posts/3699598685/index.html","12e085d68da3199b4a4895d6d1973929"],["/posts/3712900673/index.html","8e3495c955584e9009dab84e1bca02b1"],["/posts/3770599674/index.html","6803cdeb245cd8397d965880a3070f9c"],["/posts/3788666127/index.html","dc425ee2186e1dc8c799870bae44448f"],["/posts/3935350387/index.html","fa9c65870c3aac9b5368155edd4d37b5"],["/posts/3948778863/index.html","4e3fb8ed3f9cc5fde72d3219a71c45a9"],["/posts/403803703/index.html","d4272d4676bb4aaddb2095f4de639017"],["/posts/4041933047/index.html","98b3c6933fb564c8cb6e18aeb7e5c759"],["/posts/4083669729/index.html","4cd778eee1b15a44028a01ef32dac83a"],["/posts/4110582124/index.html","b7021dea712e111787e7d52cd29b22ff"],["/posts/411074811/index.html","65107c4a4ba8e9d88b70f8d423e89cb7"],["/posts/4113963045/index.html","72e384e0f88125ccbffce515700ac4cd"],["/posts/4158435381/index.html","9f135434c275426717652670f661b240"],["/posts/4163174813/index.html","e6ca8da962ed3b7f5910c661058a5873"],["/posts/4185022581/index.html","b4268cb73a9143850b87ab1cd757b3e1"],["/posts/4192746113/index.html","a163334bd65ff03aaced8e76a97b5369"],["/posts/486850400/index.html","fae54b4d9cbddd82e6f4ef6487ee9137"],["/posts/591853658/index.html","0aaff2869c1d636879521c48d80eeed6"],["/posts/597050941/index.html","bcfce7ca13ef24d429305af3c532a9d4"],["/posts/719776913/index.html","18eb3c2bf1aa7a7ec089d01dc6a0a1ad"],["/posts/741067372/index.html","e48130ddd3a728d4d729dcdaea3d6497"],["/posts/754695723/index.html","065f6230e7b63f7882c9d1317b241266"],["/posts/776340048/index.html","fcd49594be03c4ea75d6e013c0fcf6c8"],["/posts/838031284/index.html","28f27cf86458dbea2919697365117194"],["/posts/888354975/index.html","d14bfd1a1d2a8aa96be625df8a50fb0b"],["/style.css","30b31b27bcc6a5805d290bb427673459"],["/sw-register.js","0549f3418e678d0a87e1a4d654a1f214"],["/tags/index.html","6e4bacf3393fa93049d6a2352f7f7875"],["/tags/中国往事/index.html","a05c6449555fb14604ae3c68a9a6c1ae"],["/tags/中国往事/page/2/index.html","9045f741bd666c4036ddcb40ca763da8"],["/tags/中国往事/page/3/index.html","4453a972a4d0210b50c94e3823bd206c"],["/tags/中国往事/page/4/index.html","ff9ffc491e8959b1a9675dad76f0f1d8"],["/tags/冰与火之歌/index.html","5ebc085eac73e616bcb7dc4a7bf33008"],["/tags/冰与火之歌/page/2/index.html","bbe61156e035d72e4030d06ebde9998e"],["/tags/拍案惊奇/index.html","5bc6f20071f43f7fba6212fb1be18fa4"],["/tags/拍案惊奇/page/2/index.html","c177284118ea4911860407b885e34e8e"],["/tags/拍案惊奇/page/3/index.html","98de11d5722683f0d176b51f28f64496"],["/tags/指珊/index.html","8eb23ba2eb662486c523271fb4d3797f"],["/tags/指珊/page/2/index.html","a98bbd44bb40d1af0d353b23e9d6899e"],["/tags/摸鱼之作/index.html","a327a1a93e82221b4b6c9d2fe4b2d43d"],["/tags/日常/index.html","7d416b095606bf82d113f5de094962b1"],["/tags/日月凌空/index.html","ba1ae8ea167dc67ad6139b95629ea318"],["/tags/柠梨/index.html","78e28cadddb7a78f0ffd7b4550e1d66f"],["/tags/柠梨/page/10/index.html","4d3432ebe3400a23f96df1a886c5bc25"],["/tags/柠梨/page/11/index.html","2da864c583e999510a4ca5ddcba6d1e1"],["/tags/柠梨/page/12/index.html","b514be0281a00d86a0fc5250f0c1e72d"],["/tags/柠梨/page/13/index.html","71c8e17a14309df4d50b217102fa6ee1"],["/tags/柠梨/page/2/index.html","b36bbaba80534a28c05e4cb6d5988e11"],["/tags/柠梨/page/3/index.html","05b0945e2eaea31d92de493f05f7459c"],["/tags/柠梨/page/4/index.html","edd1672ff90882dc2e90ed6da88eec7b"],["/tags/柠梨/page/5/index.html","5537eff4bd19eabd7a4e9256413fff43"],["/tags/柠梨/page/6/index.html","115f57aca36013e0ece093b1605ef116"],["/tags/柠梨/page/7/index.html","2836098cab5abc4fccb5e192409e8add"],["/tags/柠梨/page/8/index.html","0841c2d36855c34d1989118384e5b1f1"],["/tags/柠梨/page/9/index.html","042a8afa115aa805e46ae25135fd364e"],["/tags/残酷法则/index.html","3c4f3803d503255aa9fe5b7d565201ce"],["/tags/残酷法则/page/2/index.html","1740472cfea8c309beca202ae7bb597d"],["/tags/残酷法则/page/3/index.html","21422dd237146844cd63f1d71b25f505"],["/tags/爱，青春与死亡/index.html","ad5fbc9e606aee3463ff51f37f6d505d"],["/tags/狂飙/index.html","562cc0b4b1819112124ec11c352427d8"],["/tags/都市传说/index.html","4d30e1062743f4d85be58007f367edbe"],["/tags/都市传说/page/2/index.html","b78f6c0d7e4ac7695afeddf2b40beb79"],["/tags/都市传说/page/3/index.html","753d914ba14e2ee5d5f040b3ef1978d3"],["/tags/都市传说/page/4/index.html","1b8f9f52e1a028484a6f77cf1328442a"],["/tags/都市传说/page/5/index.html","5fc18d4a5b323776be9724db5ac8eec0"],["/tags/镛武侠/index.html","a684263211c9a3c7931dfc47f1c99ca5"],["/wiki/index.html","875483e838c5201506152ab94e4c9b96"]];
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
