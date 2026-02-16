/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7143cef60dd0f8f1a7c0603c706d49d4"],["/about/index.html","cdd9182276e23f4336b248db32282bb5"],["/archives/2024/07/index.html","56961602021b7d785c537d6140356cae"],["/archives/2024/07/page/2/index.html","d15d1c93113603835f8665ed6820d994"],["/archives/2024/07/page/3/index.html","51b0803172b522d47e38802f4d7cd487"],["/archives/2024/07/page/4/index.html","3bbe2bf5abb8eb04ced5eca97d5569e2"],["/archives/2024/07/page/5/index.html","821983f90f46950f1f1ea21b56eb91d8"],["/archives/2024/07/page/6/index.html","2fd580f4cf225bc370f5b4d4cf4c47fa"],["/archives/2024/08/index.html","601eefe9e42093e6e86148c38fc1bcd8"],["/archives/2024/09/index.html","83e88c65214b9b5d1604a58438c22618"],["/archives/2024/10/index.html","113563e26c0bc130cfdadf61e7ab541f"],["/archives/2024/11/index.html","67173b0d5be8547a8d3310d0b33a4cf2"],["/archives/2024/12/index.html","8f29677305936e3771c4fa24d95f194b"],["/archives/2024/index.html","a34f84016d2336a761b7924d8160f0de"],["/archives/2024/page/2/index.html","fffe8eeff9498088685cb2e405016ae3"],["/archives/2024/page/3/index.html","0d20ca9331622ce77ba36b5ee5dcd6e7"],["/archives/2024/page/4/index.html","12fe0190ff19404527f88de4a68d5b55"],["/archives/2024/page/5/index.html","cb314ed0143ccf6b22cb71e6b3687556"],["/archives/2024/page/6/index.html","5ccd5e1048189709caa4a55f1db4fd9d"],["/archives/2024/page/7/index.html","02df7f33e1ed423e92188b8328383c2c"],["/archives/2024/page/8/index.html","b5bed5fe7f3918353c7e1d038ed4e27e"],["/archives/2024/page/9/index.html","12aa1b303594bf1a8e87ae054483a191"],["/archives/2025/02/index.html","999d239fc1a2005591f943b023808fb4"],["/archives/2025/03/index.html","2aabcfb89cf2e82c60c86c0d0127a12c"],["/archives/2025/04/index.html","02248b0fa84456cd9ca6f693b4171c9b"],["/archives/2025/05/index.html","cc625cdc3b966c9a09fa1d8e39ec8569"],["/archives/2025/05/page/2/index.html","761f8a10c9f85b65f2317f393b0095bc"],["/archives/2025/06/index.html","1ac917f3d348fe8589bc1f1f3d7f277f"],["/archives/2025/08/index.html","149516bf6e9ddca0dfb58e9d22197fd9"],["/archives/2025/08/page/2/index.html","eb5cf1b7f566d2d0664ff27d71cd6fae"],["/archives/2025/09/index.html","fa68eaeb24885051431d923283bb4a0b"],["/archives/2025/10/index.html","33bbd4aab291fd6980232416d1217ac8"],["/archives/2025/11/index.html","a2f1f3094caf2085c2e560b63374ab9a"],["/archives/2025/12/index.html","281ff0db10a00ea6e29861434fe96a1c"],["/archives/2025/index.html","1a494a1b7c0ca9ad5631c19c0362f400"],["/archives/2025/page/2/index.html","279ae8dda6b997a8ce1d15323752b983"],["/archives/2025/page/3/index.html","c2e03b0d631ddc3bc3ae417c89965e04"],["/archives/2025/page/4/index.html","0f14532da1c20ca99c0d076f1264f53a"],["/archives/2025/page/5/index.html","70e3ae79f89fa14a223ca61c45e4144c"],["/archives/2025/page/6/index.html","ac39c09ee37b5e6d7a36ece7cf19a85f"],["/archives/2025/page/7/index.html","b39d759def9b86dac035369544ffd49e"],["/archives/2025/page/8/index.html","9aaf8f34cb3e72c586516b94d64c18ec"],["/archives/2026/01/index.html","7be19367934a0dffcdfb34ee6933b508"],["/archives/2026/02/index.html","4dea6580174330979c7374f379ec8627"],["/archives/2026/index.html","088f3f338b96711e0603e3ad717c2afd"],["/archives/2026/page/2/index.html","6c9d3d9de662ab8b46c9ddfbb84c76f4"],["/archives/index.html","ef8bb11887b5cd70becddb97b8e1b846"],["/archives/page/10/index.html","b2ffa68fe0671535c3e00b6ec2ac55ea"],["/archives/page/11/index.html","06b6e666d78d56b4890a944cfd320e79"],["/archives/page/12/index.html","44db96570c085b811dace3369317ad28"],["/archives/page/13/index.html","fd975b0fee80c61a5ef48748129297bb"],["/archives/page/14/index.html","32521cc4d54bb8eda6fa92d76f7ba141"],["/archives/page/15/index.html","d2e501d6ea9c4389753e12960723e449"],["/archives/page/16/index.html","a17c93b1511df6b920d770b6614bdd51"],["/archives/page/17/index.html","d3baab7ba957d46a7d7a86deb12d3630"],["/archives/page/2/index.html","e53f98fc38477fc9059457948965405c"],["/archives/page/3/index.html","61317e345a01b2de24acd436e324f125"],["/archives/page/4/index.html","3fa3933f4115eeb4422686bdab6da03d"],["/archives/page/5/index.html","23cd070e7e0853c883a76c32a5c92915"],["/archives/page/6/index.html","cef6eeefe5101d1e07a69f3030a961a4"],["/archives/page/7/index.html","ee30d24ba0a63d4608188d0e13f53b43"],["/archives/page/8/index.html","11b308c6b6b96cf00f6cc8e44a32faa9"],["/archives/page/9/index.html","4c96920774ec0539a95aa0366ab6672b"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/jybhj.jpg","855051bdb32dac6b6b2214b662e3f784"],["/assets/banner/lhj.jpg","343b0999baaaa6e0fdd600c03f2102e4"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/sny3.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/sny4.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/sny5.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/sny6.jpg","12f4fac008c279f4a1f41506995d038e"],["/assets/banner/sny7.jpg","bf0d0ce9dfe8b32ea465559b903bac87"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","cb1c8558393f44288b9661d8ed4b1800"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/jybhj.jpg","f074da0cdf315a64a5d3e8aa3896fea1"],["/assets/cover/lhj.jpg","1afecd1268dc0d9779d5231b84bfbb19"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short2.jpg","84a851e0be682a3a37a2a3fc5165efc2"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/sny1.jpg","92158f93aff91b4ea1b1ff8059f2e953"],["/assets/cover/sny2.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/sny3.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/sny4.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/sny6.jpg","0e1b91307940debd8b8cf90e3517268d"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","91bb2aa4523f6e336add358cec66ddc4"],["/categories/index.html","9ba4d21ccf082e7656bb40caee94f6da"],["/categories/与敌同行/index.html","53a267b875b3768f9e42d4451d5ae31f"],["/categories/与敌同行/page/2/index.html","3bef09c02fb4326e41be7ddbf72c3a50"],["/categories/与敌同行/page/3/index.html","dc7831a487beff411b69db50ff62905b"],["/categories/与敌同行/page/4/index.html","c67ef6e1801555457d7a0b29fe12bb74"],["/categories/与敌同行/第一卷-双镜/index.html","84377d734559daafa63fe13d5527bac3"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","e43da42206ef035f39a42577fa0a9fd3"],["/categories/与敌同行/第二卷-信天游/index.html","799fed6b4c42a68a2480408ef1f3414e"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","4ad070942df8231412839d68e392466b"],["/categories/乐园/index.html","203afee746dbf8bf6e08a6c1ccfb2b35"],["/categories/乐园/page/2/index.html","a6efdd64a326955cb9a13eb38e01d9d6"],["/categories/乐园/page/3/index.html","2fa7509b029b969015aaa07df6c38cf6"],["/categories/乐园/page/4/index.html","0c68551a482a5f8c9556cbe0827d09ec"],["/categories/嘲鸟之歌/index.html","41e537b0519cf85041682570333e9e3b"],["/categories/失落的应许之地/index.html","60c19edc558cf21d953be437d984bbeb"],["/categories/失落的应许之地/page/2/index.html","8042476b31d9019a6d64b5714d60e48f"],["/categories/失落的应许之地/page/3/index.html","762c5bae8a25c753589e3f8d92f091aa"],["/categories/月照天山雪/index.html","19303013519295a8acc545ed3de9e79d"],["/categories/月照天山雪/page/2/index.html","df9a3dabcdb47b4631a8b82af54a80ed"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","34b2662ae5201e109524c0b304c416e0"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","bd1f05d30aa9244653c32d9a47749357"],["/categories/狂飙，乱飙，发飙/index.html","f654d91c696499d0d492d1b16c120cfa"],["/categories/短篇/index.html","263f10f36f4166922c81a79282a519f8"],["/categories/繁城之下/index.html","96b4c722d77eb4257828e5961e750b31"],["/categories/繁城之下/page/2/index.html","eb64db6fcfd29e05fb64c40756fd652a"],["/categories/繁城之下/page/3/index.html","ff8cf45abfd75456375611828204e290"],["/categories/长夜漫漫路迢迢/index.html","7d990fc15e26847eb3d76478e5e8ce67"],["/css/custom.css","a02a21ce57e86d5d9f3851aee1e51656"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","2e87033f7b724865d87c0d01b58172ef"],["/css/modify.css","f263bd691acd3bc874fbf4ebdc6990de"],["/css/var.css","a3aac39f4560d79ec1ae8693f6ccadae"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/footer.jpg","ec252cde7c6d58359def0368b1a9a882"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","1106757e3a76626768e97e3630766316"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/theme.jpg","6fa6f8ecfe50d0b57187af9bf83254e8"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","dfe3c2632fe090e32e79f6592adab649"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","a6f45184899b9a259c16466eaf17a963"],["/page/11/index.html","795ec9e279ef012ede5f29269007ae02"],["/page/12/index.html","1699ecddac02b80b0d52ef8bfa88402b"],["/page/13/index.html","84796222239152f01acf5a59b1dd03d0"],["/page/14/index.html","044d865266889df5171b45a255cda9a0"],["/page/15/index.html","28db5714dacb3e92c6bd6eb4d428d923"],["/page/2/index.html","fb5875d6097e95f7987b032b812e1587"],["/page/3/index.html","194e0c4810592d7af896fffd322ca7e8"],["/page/4/index.html","62a49806db032d6495498d748a6d5e56"],["/page/5/index.html","39cad80ddcc695c103e462e15f59ea84"],["/page/6/index.html","d11c5ff480f755ac440e2cda8166bcf0"],["/page/7/index.html","7f9dc72a8eb1796cd9f897bc0bdc6fae"],["/page/8/index.html","22a1683a8e2830f4a269ab0026819e87"],["/page/9/index.html","373fb9b6a7785e22f7738d5050167071"],["/posts/103655302/index.html","af258c1b1bf000bb815039ea90272944"],["/posts/1083795192/index.html","c1cd565c6407870b5c0ab9354ff0afc5"],["/posts/1099216759/index.html","357581bbba4113eaf5e1ed6e116fc16b"],["/posts/1104021264/index.html","a1af1b44a76264fe0d98a5f37b05e590"],["/posts/1195093070/index.html","82f2de80cc6fa041b24ec37e7aa7b9cb"],["/posts/12506394/index.html","1c8b3d8dab3b82b88ba44184e2fd5169"],["/posts/1272692100/index.html","c4b68bfea6b464b3e47666e8d3195e45"],["/posts/1304356361/index.html","ac71d6d42545f83af21eb2e98e22aaed"],["/posts/1315809802/index.html","cf06b0c4f58b79f6700e8caa5ee5d20a"],["/posts/1329165323/index.html","30243a8c94f648466009316096ffadbd"],["/posts/1378666774/index.html","8fee9de3643d912a25788b616b579a7d"],["/posts/1400613118/index.html","d3d759156979d7e1f4a345ecc5c34edb"],["/posts/1407316490/index.html","07e9baa121a8377dcc21a400bf58a2d1"],["/posts/1434824932/index.html","1149c5bb2947cdffefbe1b1eb9d8a775"],["/posts/1445707477/index.html","39032bcaa68f67c5d23acc008df69f38"],["/posts/1465373355/index.html","fb1678d1cbedcfe86581b06495f95a27"],["/posts/1500385898/index.html","2ad5519f8aeda9bed463d0e9bc06dbed"],["/posts/1681850936/index.html","4e21a83f03ea3c01d09369a53cea81f1"],["/posts/1688557772/index.html","83a407fdde34f8e99a785b2ad44a5c9f"],["/posts/1710373156/index.html","bfe51ab77ab2e651da3f4b7240ca9b20"],["/posts/1720998546/index.html","d51d897a08a5b59964dad7293041eabe"],["/posts/173005120/index.html","d271967ce2b97931124cd81c109853a7"],["/posts/1758837205/index.html","68c251edf1929e4895788a487e85a088"],["/posts/1766000773/index.html","0afbfe9cb568a5b089f7a002782caf7e"],["/posts/1771063266/index.html","88be935b9240e78ebb09de21b61234b4"],["/posts/1843191030/index.html","8010004fab4aed03e0d29a97fca586f1"],["/posts/1845581652/index.html","2e8cc9fd002fd074414a94b019765b96"],["/posts/1859941397/index.html","0cc22c872f847806f34f29eedd6a4cca"],["/posts/1988799958/index.html","30811f83f2921c2c3fdc30ef3f7dc729"],["/posts/2080722358/index.html","ca3e86ecd2544878b3aff7bb84b3fac6"],["/posts/2142008032/index.html","bfdb1978f876377e1749216f8cf64929"],["/posts/2192148155/index.html","6f850e17af505e02fc75982517776b7c"],["/posts/2229302539/index.html","3ef028253884d6e50da849f719c4bb64"],["/posts/2278904638/index.html","63d81be1daccae66d8e924c7a0c1050c"],["/posts/2303668433/index.html","e7cbe3a812b6cf15a153aa482688a515"],["/posts/2492968201/index.html","bb315e21c2b6bf01b78ca8bb42dbb87e"],["/posts/2531300956/index.html","cd06301a8b3313a35553a565160f2752"],["/posts/2616893247/index.html","6341d5e4055fc11893a6e8581f54c293"],["/posts/263262350/index.html","b8d48fc420b1d320c37a3876f0637ef8"],["/posts/2700096901/index.html","863d2f1e48b1763088b67e2c05e1ec4d"],["/posts/2869217975/index.html","23b6cbc4b6c67ae0fc3d48ec82fb7dd0"],["/posts/2888068877/index.html","f014f99ac29c49838d7ca4fd74b70939"],["/posts/2949714254/index.html","45274432428ab7805b5c5e9c4bbc646a"],["/posts/3002318373/index.html","f65d185d87ffecada71c1decf3838038"],["/posts/3076558902/index.html","c473777f9b121728eaf38a6786110a26"],["/posts/3147359483/index.html","df8c74114d583234af06bf6efe646abd"],["/posts/3191465731/index.html","ccfd50454fde284a78fa5736f74c8a70"],["/posts/3197223139/index.html","9324ca66a6e1047cf5e90693e2790484"],["/posts/320179123/index.html","a06e5e35aac4d9b00d29a31a40e4ce19"],["/posts/3300469459/index.html","1b47c4ba0ad3a9e212c8cefdd2e5b4e4"],["/posts/330870226/index.html","c7c99a2415bab5a5d22048f10da49eb3"],["/posts/345507944/index.html","58d67d901f5fe8b20f0fb190020c1ba6"],["/posts/3459697331/index.html","dfacce09d9878f7f25a4faada5c465ee"],["/posts/3489395119/index.html","757853cb2bf349567d5bd3ecf1aad191"],["/posts/3509330055/index.html","e2f834048d3434565978758f7cbb442b"],["/posts/3525870963/index.html","543c81d93ef1804519dc488e6d9105c8"],["/posts/3591144765/index.html","5e24faa60e4a65f2c4808440de4a5901"],["/posts/3602722865/index.html","7f7c9f90a3b3399c0083f306008baeca"],["/posts/3640780602/index.html","b4adab9be9d3c08d7e1cb28d5c790c40"],["/posts/3679626959/index.html","6de1842d46386c44d73487a8527cc7f3"],["/posts/3699598685/index.html","d886e3419c5e10dce6d7ede6f8cf72dc"],["/posts/3712900673/index.html","538e60b610223cb0ebff5c0cf9b3db0f"],["/posts/3770599674/index.html","c4d27751b6083185c737f73f481debee"],["/posts/3788666127/index.html","55fcecd75e7b8cc0d020cdb56d13b65d"],["/posts/3935350387/index.html","7572d2966e20b5a8f1bfd3b22580f9fd"],["/posts/3948778863/index.html","2028daf2dcd2bd14c8a5337d80dc882a"],["/posts/403803703/index.html","953a74bff3de0b67b958bff59468bc4b"],["/posts/4041933047/index.html","634f353afa6cf0a9065004d50f21f085"],["/posts/4083669729/index.html","01d4f4941a26e1673c478c793ec9bc9f"],["/posts/4110582124/index.html","4ea8da5095435173fe00ea7d0dd73578"],["/posts/411074811/index.html","adc92c07bb8c97182b3da0a552089d49"],["/posts/4113963045/index.html","ea4046805076f1aa24f21d63a7d50689"],["/posts/4158435381/index.html","42e7047da58a359b42e2b2fa1624c61e"],["/posts/4163174813/index.html","5c56a8a5f4277c29773a7946b606d2f6"],["/posts/4185022581/index.html","bc7f1e815b3583ef2f41fe2fa92a3daf"],["/posts/4192746113/index.html","06375f2490f2388db423c35e100a8b6a"],["/posts/486850400/index.html","565d81a03ae4b29d96278cae0d7764ec"],["/posts/591853658/index.html","840d0040afdb3879cbaf6a5df63297e7"],["/posts/597050941/index.html","de479321dadbb060baf4a8a214810817"],["/posts/719776913/index.html","53ef52c406d37be21a5f3434428aec16"],["/posts/741067372/index.html","e80f6bb67d8323d1fbdb8501c239de72"],["/posts/754695723/index.html","e2f7ef790e457b4b609dc9a7be390b76"],["/posts/776340048/index.html","1518b5a492163f0cf51eacbc073d52a7"],["/posts/838031284/index.html","8f18d4bf58162b49a923064daccbafc7"],["/posts/888354975/index.html","881ea75b3b65d7712697a957bb6c38de"],["/style.css","1e5d7da55f78d88665e15ac4149014f0"],["/sw-register.js","83932da892eb28ed5559f2ee3b9b70a3"],["/tags/index.html","5349179a26f82ac3ca9536300406fd6b"],["/tags/中国往事/index.html","11f469d79e131e14a9651dbf2267482b"],["/tags/中国往事/page/2/index.html","02ef21a9a2ec5d543ba5ee0a0758db24"],["/tags/中国往事/page/3/index.html","e9fad6cbb89d8e9eab30e14cbe2ee248"],["/tags/中国往事/page/4/index.html","655583cbe0591272d4073cd88824bc73"],["/tags/冰与火之歌/index.html","2730ff6633925f0762a2c2675d902624"],["/tags/冰与火之歌/page/2/index.html","cd0cdabafe634b2ea4c04e3948b449e5"],["/tags/拍案惊奇/index.html","11df44587d6c884e8f301fb96b4f47af"],["/tags/拍案惊奇/page/2/index.html","66a7e46094dd80ea8de1158ceb6e1b37"],["/tags/拍案惊奇/page/3/index.html","04fee3d22e27e82d507dffec406344be"],["/tags/指珊/index.html","e09be6281f40ff36498ae8bcda24d23a"],["/tags/指珊/page/2/index.html","e3b433969fa4363fd767fa774f789cab"],["/tags/摸鱼之作/index.html","e2d1c79f6dc6b90c58a339638e0e6645"],["/tags/日常/index.html","fcbb86c267f20cfb682f2dc9b3fe5470"],["/tags/日月凌空/index.html","a1138b432243db604065aa793af671ff"],["/tags/柠梨/index.html","d8b78c9d7ecd7c79fbc3f09030b83557"],["/tags/柠梨/page/10/index.html","69986f3a2c72920c2b4f9d3fe62335ef"],["/tags/柠梨/page/11/index.html","25822dd7e6d1e87e94d39849d228ae43"],["/tags/柠梨/page/12/index.html","35b7dbdc16817fe968ad6686bc0940d5"],["/tags/柠梨/page/13/index.html","e97245da74b5ed168d0016757b13d0a1"],["/tags/柠梨/page/2/index.html","a35c4049dff4a9ff65b4385a5b8a242b"],["/tags/柠梨/page/3/index.html","5581083bae3432cddc3834f81cfc292d"],["/tags/柠梨/page/4/index.html","ee5a7ca39b29393de5cb2b1f9e001e51"],["/tags/柠梨/page/5/index.html","9810b2ce5ff6713b2dee3cfa709199e0"],["/tags/柠梨/page/6/index.html","e72834573f73477385aa14dd04bd0310"],["/tags/柠梨/page/7/index.html","ac208859e07879258592ef288aeaeb53"],["/tags/柠梨/page/8/index.html","77f1e9ece628daa212e6f99a5298c7a0"],["/tags/柠梨/page/9/index.html","f72b07378afc33d504f16b972944f55b"],["/tags/残酷法则/index.html","4f22f3a3dd8c560641353b86665365ea"],["/tags/残酷法则/page/2/index.html","3e1b7ac8ed8b1ec91ab88b4db80257b6"],["/tags/残酷法则/page/3/index.html","1a7711d2a37663e9a017ef710660f96e"],["/tags/爱，青春与死亡/index.html","3229df74c9be3438e7782c597c93280c"],["/tags/狂飙/index.html","96f3d63e0820ebe1c2f49a5a5ca1efc8"],["/tags/都市传说/index.html","a60cf3f0fb14b157b49ed91644d72615"],["/tags/都市传说/page/2/index.html","daddf46c6731339b21aeb6a19422e216"],["/tags/都市传说/page/3/index.html","e5ef5f103ad549bf3f574dee0e45d105"],["/tags/都市传说/page/4/index.html","1db8d4069ba53f30e9f5563f286ece8c"],["/tags/都市传说/page/5/index.html","9b6ef8d96b5cb86c8e4f687262eb5be9"],["/tags/镛武侠/index.html","f96c400fff29a3ade224fb2833d8b82d"]];
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
