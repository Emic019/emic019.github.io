/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","db9348e8af0446a32dbcc9953b0644fb"],["/about/index.html","2a9103482c35a7ac977a32fd7812abb5"],["/archives/2024/07/index.html","a0c92eb9937b9abba4f69036de3281ef"],["/archives/2024/07/page/2/index.html","2c05d101a4c9d7585a2519c120e80dbe"],["/archives/2024/07/page/3/index.html","72e82d2bd8a5dc9e0df52ee849d86294"],["/archives/2024/07/page/4/index.html","d12bce4f1f9cfc930e1bb25917ebe924"],["/archives/2024/07/page/5/index.html","3323cd5674bd2182888f3e483e9abb2a"],["/archives/2024/07/page/6/index.html","c04058e5960349dcc818c2e1ddb7c7ac"],["/archives/2024/08/index.html","b764257a324bfc738862a92c9f04038f"],["/archives/2024/09/index.html","5ce378f53bf9eab7cc2caf4bf0577d0b"],["/archives/2024/10/index.html","468fce6bbef2b5a7c2a7484d23c77071"],["/archives/2024/11/index.html","8909f5761f75d92d3da6a96e071a15c4"],["/archives/2024/12/index.html","95c7676fb292a131947d766531383e65"],["/archives/2024/index.html","cd5563f3686f1e3adadb9abf4d790aba"],["/archives/2024/page/2/index.html","a67207fe74c9797d5681d9736248da80"],["/archives/2024/page/3/index.html","2b445a21c28b4222d9c0945a4e7f8129"],["/archives/2024/page/4/index.html","a0e60f9c5442aad7b809bd76c64b120b"],["/archives/2024/page/5/index.html","3128f450fa6fe216d52832b5cf079ca3"],["/archives/2024/page/6/index.html","e017758b261c4a63fce857105c5d64b3"],["/archives/2024/page/7/index.html","9f6318af1e10257064c3a43917044622"],["/archives/2024/page/8/index.html","d979ba33192138749e7bc2e4043c376a"],["/archives/2024/page/9/index.html","0cb6a7f5bafc0e2251930bf3dabddf19"],["/archives/2025/02/index.html","b8c380de6f4d0c3903ef25f4a2bf0ec0"],["/archives/2025/03/index.html","adcfdcf5472984495dcb118e5e42bac3"],["/archives/2025/04/index.html","e5638be3414282a0b309c7dabdf385dc"],["/archives/2025/05/index.html","98b99a6866774165532d2b7741846bd9"],["/archives/2025/05/page/2/index.html","9c08793dcbdc52eadff70d5c3d3a8ed3"],["/archives/2025/06/index.html","d8cdb32b5ebf5be50bd4468c0cc08b0c"],["/archives/2025/08/index.html","752b1ee9484512bc5a2fbeee7da56dac"],["/archives/2025/08/page/2/index.html","1ddac5ef2976d31011d3c20f95233dbe"],["/archives/2025/09/index.html","259912a53022c39379222552b17b6811"],["/archives/2025/10/index.html","5d403b35cf1f319587c96aed76252c1d"],["/archives/2025/11/index.html","491ae8708aef457721d05e080283e75d"],["/archives/2025/index.html","2b5735bc2e278eb593e63200e0ca2a46"],["/archives/2025/page/2/index.html","2bfad888bee7889baa05d531b87b710b"],["/archives/2025/page/3/index.html","f0922e65b5332e700ba89937d1a04fa3"],["/archives/2025/page/4/index.html","7b38408bab165fc478ff691fbf891768"],["/archives/2025/page/5/index.html","0ab4e310d24ecbb543e7266f970faa96"],["/archives/2025/page/6/index.html","441302fb0747b58143c9f24d9edd0e18"],["/archives/2025/page/7/index.html","98e206fc8d5a6f2e6fe62205337302a3"],["/archives/index.html","4ce250a0713189839048558bb0ee27e4"],["/archives/page/10/index.html","7ab829c0ae2787a00285127685e0c230"],["/archives/page/11/index.html","e75269677fa6ce12decc51e3862e7573"],["/archives/page/12/index.html","f96e2dcfab5c429556a4d1296a2351cd"],["/archives/page/13/index.html","ff07746f46ba43a2817f8171ea2c15d1"],["/archives/page/14/index.html","6b43b9499b38875e64aa7562199aa09b"],["/archives/page/15/index.html","43a389436e6c5875698e04a4247bc4eb"],["/archives/page/2/index.html","6e758aecd8a90b86956c0c2daa00168b"],["/archives/page/3/index.html","b10cf612459bc839e2273f88a19e3c7e"],["/archives/page/4/index.html","e1bf28b44ff9b0879c0be425c32c4e28"],["/archives/page/5/index.html","b468217a92ebe72dbad8c0d28a48cea8"],["/archives/page/6/index.html","a8a0595767d5ecda53a57e323dfc347c"],["/archives/page/7/index.html","b17e5cdc6a589a4241ea87b3731593d7"],["/archives/page/8/index.html","9625c4f281841adb558819f394e97c8f"],["/archives/page/9/index.html","1cba0e24ba8da65e36b94b87bed7dc55"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/sny3.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/sny4.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/sny5.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","4c605e9d235269c127a5088945c40cff"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/sny1.jpg","92158f93aff91b4ea1b1ff8059f2e953"],["/assets/cover/sny2.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/sny3.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/sny4.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","91bb2aa4523f6e336add358cec66ddc4"],["/categories/index.html","147aafc0e14545be021ae080f20aba77"],["/categories/与敌同行/index.html","8cb6903e7f6e08b3e58f7d8083b680d5"],["/categories/与敌同行/page/2/index.html","459522801f5dbf3d9c6eb07b2717b4e7"],["/categories/与敌同行/page/3/index.html","233b16bf1b12d0471900322e3cc0cefd"],["/categories/与敌同行/page/4/index.html","a0fae21d20e2961505a927301f543ad9"],["/categories/与敌同行/第一卷-双镜/index.html","638416551b76be8a2817b8e9ba4362a2"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","daa386cd999d12ffd879a80390a86820"],["/categories/与敌同行/第二卷-信天游/index.html","006b268bf59a7649eb2fb9d5ac31ffc1"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","13d9f4cb319de94607305300bc1b7add"],["/categories/乐园/index.html","1415bb62b1adb16e11d588212b902808"],["/categories/乐园/page/2/index.html","f8075dcdf1c1d5761886eea465e7d081"],["/categories/乐园/page/3/index.html","66015c32d79815871202d2319aaf6e4d"],["/categories/乐园/page/4/index.html","0037f70fee89df67c42698b8347f06a7"],["/categories/嘲鸟之歌/index.html","1fba6015bd6dd23a0b23a92849b96148"],["/categories/失落的应许之地/index.html","938760e42ad70764cad6bb4ff8d1974d"],["/categories/失落的应许之地/page/2/index.html","2ac956475e1d8ea74039bf29180ee84f"],["/categories/失落的应许之地/page/3/index.html","c6ab4302484ce728329d91d945ceb9b0"],["/categories/月照天山雪/index.html","96634c7fe63bcf2032ea29d507f929f6"],["/categories/月照天山雪/page/2/index.html","695e2496c436a2f6b7a18cd9bfe96fde"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","dfce64b81f26049964b53a749b76c3fa"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","7df7139c243bb7c346a6711238b6da01"],["/categories/狂飙，乱飙，发飙/index.html","5198a02516d260b795bb80dfc2c577a5"],["/categories/短篇/index.html","d437388eda6ea1705c6ddaf536076f1e"],["/categories/繁城之下/index.html","f919efdd22b13127d15c48eaa64718f1"],["/categories/长夜漫漫路迢迢/index.html","5a2a2c2434b08c574bfe5938f341a7f8"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","2710d94be4187c9f937acc2632714da3"],["/css/modify.css","a21ffc4ad0974f1b062d1ac71712b726"],["/css/var.css","dbad4c0acd75cab2dc3872ce4625762f"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","0c1d7dd4cbe6704d4f240672f6196b85"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","ac499c029feb43d6edf1585080e99f62"],["/page/11/index.html","a7b9865f934855cfeb3bfe958a503678"],["/page/12/index.html","d4d193e27a02f69a5bf457b860010767"],["/page/13/index.html","0d51e072ee556d6d9086b80cd98f37a6"],["/page/2/index.html","be972d56ee3ca46f4b46401bfb329f47"],["/page/3/index.html","7f5381f716561f605551238732964446"],["/page/4/index.html","da0be9045ef0bfe716adbaae78bdbe8b"],["/page/5/index.html","fa7e3c112b1f067431c85a645ff0af05"],["/page/6/index.html","1b9578d3c55cf8f4ee51ae5a4f2d4d4b"],["/page/7/index.html","ccc367713de12cd8472273743e8f555a"],["/page/8/index.html","5e94d21292128cca49d5dff086f9aa4a"],["/page/9/index.html","d34c17766080ed386cb0fe76c7bfd862"],["/posts/103655302/index.html","a1304164f694818117872aeed073f4bf"],["/posts/1083795192/index.html","7771822d0b51324a386f2e9c2593d599"],["/posts/1099216759/index.html","fc9721c32425ef98dc66c92a23f26c79"],["/posts/1104021264/index.html","5325472de6291337b8868748a1607ed1"],["/posts/1195093070/index.html","eae09ec751b447bdf74986681aee0bfa"],["/posts/12506394/index.html","ae9455b7084bd4c23a57272527d39f4c"],["/posts/1272692100/index.html","7a09b80988ea3dde707e8686a1458460"],["/posts/1304356361/index.html","9268fe336979093f01ab4205f8fb6411"],["/posts/1315809802/index.html","f140a579a127897d060f698a7f09d1b6"],["/posts/1329165323/index.html","8fc6e4391563eb0771cc85e5a18aca1d"],["/posts/1378666774/index.html","2a6df3b3b3c5333f4bcd1241102da042"],["/posts/1400613118/index.html","a8a111a37fb913ecf0d92e5b19433c9a"],["/posts/1407316490/index.html","7978033b1360352d89077e92098c2a5b"],["/posts/1434824932/index.html","95e873530a807baaf3753543a278f5a7"],["/posts/1445707477/index.html","49b733e296ff6d5b0186e18e7467fc43"],["/posts/1465373355/index.html","b0d662bec78610e072c77b74c2f79af9"],["/posts/1500385898/index.html","ad1e8e67dba68b3d2be351ebad806bc8"],["/posts/1681850936/index.html","114823d7fa0bf29e11dad33f979025b1"],["/posts/1688557772/index.html","8a7f3ff090f2a62bbf50faa36a97cea4"],["/posts/1710373156/index.html","f255d439b1a16fcea26803add87384fc"],["/posts/1720998546/index.html","99cf83a2c92eed29277f952506607a72"],["/posts/173005120/index.html","40281a7f8ff0f00df91e462a75bcb609"],["/posts/1758837205/index.html","b4a050f0f12cc0765ba0b6fe5909d682"],["/posts/1766000773/index.html","cb550f56d6652ae7085b25783f210e58"],["/posts/1845581652/index.html","c0d0bd52bd2778e4279b26f15083c99e"],["/posts/1859941397/index.html","ffe3020d0b0bc5c82aac49d4cf56535f"],["/posts/1988799958/index.html","d6cd7b31afd759ec0f8d71b2e509f79a"],["/posts/2080722358/index.html","a3178f4ce631af85ea739b0195bb4684"],["/posts/2192148155/index.html","7b54a349df8078e876a5868f4777b9ee"],["/posts/2229302539/index.html","6af39160a9d05094ad9e7145c883c715"],["/posts/2303668433/index.html","e9d3697e374843d8444b7b0c901a52fc"],["/posts/2492968201/index.html","fc0c5baaa0e4cf4810d0a8f1b74d5784"],["/posts/2531300956/index.html","347dfa59775c14507351d6103de981d6"],["/posts/2616893247/index.html","cf58859d79f5767ffd98540b49a206a9"],["/posts/2869217975/index.html","dc96ac6632239db14e730891f051fb2f"],["/posts/2888068877/index.html","5afed29c71b7699dc08d0568fbd56801"],["/posts/2949714254/index.html","75b89f9ad72f4120d8e46de79dfbb55a"],["/posts/3002318373/index.html","01b7910354a2fda3b169d6b646e46507"],["/posts/3076558902/index.html","9833fefd76f28033d38af5e9e062e905"],["/posts/3147359483/index.html","64e914e6240123825781d064cf42a2a7"],["/posts/3191465731/index.html","c53b47f19a1916d98d9ddf8d9275d0ac"],["/posts/3197223139/index.html","382f6a52f4386b36e35cd3faf1b674ca"],["/posts/320179123/index.html","c00918fa49f549cf6027d4230798a048"],["/posts/3300469459/index.html","303bec420b1866b7a558db802baf7632"],["/posts/330870226/index.html","196949edb282dbb2e36b53c8cace914e"],["/posts/345507944/index.html","bf80997de9e3e156c8499c691c87d67b"],["/posts/3459697331/index.html","4ceb295a67a61688a58c5ada0f17405c"],["/posts/3489395119/index.html","94fc53ad675da9fe566bbae4081e3fc3"],["/posts/3525870963/index.html","ce4c367f641c58b3791361808fa26880"],["/posts/3591144765/index.html","4e244e99cb64ce341917715fb6a93290"],["/posts/3602722865/index.html","030b770ae69e47229a155d1176716c85"],["/posts/3640780602/index.html","b87b2338ae86a5e190f23ef979326b2c"],["/posts/3679626959/index.html","458bb7bb8749c412fdfa46354f2bc887"],["/posts/3699598685/index.html","26b8c261122123e8235bbd0871913a72"],["/posts/3712900673/index.html","34a75c5ca2be143931f90e6f0b8f31e0"],["/posts/3770599674/index.html","c3d8c7d23513e5c3eafe93c7f25fbc1a"],["/posts/3788666127/index.html","673ef0388332782d2a78ec17bc75eb5b"],["/posts/3935350387/index.html","8e178be04f581b37016bb5a22c830c1c"],["/posts/3948778863/index.html","174d078a651cfef680f19b0fb6b80c9d"],["/posts/403803703/index.html","34c4fbf262b66d937ca203fe19322a5b"],["/posts/4041933047/index.html","fe57becdc860e778385e7798935cea91"],["/posts/4083669729/index.html","1996390b6bf0060b12ae7a85f81a7fbf"],["/posts/4110582124/index.html","00558be7fdb586530d4f4f35c07abbce"],["/posts/411074811/index.html","47165eacbb8f892b91238e8aaf943824"],["/posts/4113963045/index.html","75291a6cfd2a7b2731dbe8ffc88e9726"],["/posts/4163174813/index.html","75e7ad1e27f6fa5b8442a3c2b93a10f7"],["/posts/4185022581/index.html","f84612dd124b26d3d0670c6887c4d791"],["/posts/4192746113/index.html","3913921c94a7f0303d337f576c5087bd"],["/posts/591853658/index.html","9a9a21e2037b24d99ae9ed3b51aee68d"],["/posts/597050941/index.html","80da2798cca2917124d4d0984488f7de"],["/posts/719776913/index.html","728ed2d52794c822ad6ec652a69cac7b"],["/posts/741067372/index.html","1d92d2631d11f3cec727b53c3efd946f"],["/posts/776340048/index.html","fc60d9aff07118ce846eda02f9141ce9"],["/posts/888354975/index.html","2be5ced3ebde56b694a6b4eb3e4abf05"],["/style.css","ae1ef514fb150d1170b432c13bfa6579"],["/sw-register.js","0b903aedcd3de084b272d36426d782f8"],["/tags/index.html","43e278567e71bde7ded1f8b691f28d60"],["/tags/中国往事/index.html","5917cad60ca6bdbf01b31cfcf459fa2d"],["/tags/中国往事/page/2/index.html","2359b06f53836d58687cd2abbf63d7ca"],["/tags/中国往事/page/3/index.html","5d5fea5b5f83efacd98327cc70f50ceb"],["/tags/中国往事/page/4/index.html","8d45cf114c198c1d2a88de783534b21c"],["/tags/冰与火之歌/index.html","3b86918cb5b2c1f2fabf0a37aafaa1c7"],["/tags/冰与火之歌/page/2/index.html","6501eccf9c55b07b390ffc84489b6562"],["/tags/拍案惊奇/index.html","9e75258919ac9f7e2684d1d740ebc3d7"],["/tags/指珊/index.html","14cb8054ad68c097666d732049fd5a39"],["/tags/指珊/page/2/index.html","15a62e334b893d7226f5000b58232402"],["/tags/摸鱼之作/index.html","67060323fc02c704b7298f31e37254d8"],["/tags/日常/index.html","de3945ee42131ed99019c835a68cdc7c"],["/tags/日月凌空/index.html","55d474b713216d2a23df1c4191fc9e1a"],["/tags/柠梨/index.html","53deb9cec4cee444522d734639203dd1"],["/tags/柠梨/page/10/index.html","edbc9cd22dc8f7395e0b1734b59e8f5a"],["/tags/柠梨/page/11/index.html","9214607be638dfcd4f46188220151104"],["/tags/柠梨/page/2/index.html","559771f2e6a4678636ea3254af7b900c"],["/tags/柠梨/page/3/index.html","e3112f347ab097bb473920fabd9eaa58"],["/tags/柠梨/page/4/index.html","30f75dc6734889324438e28e441d159a"],["/tags/柠梨/page/5/index.html","1ab24d14e8b8bf66484d6d576b4d43fd"],["/tags/柠梨/page/6/index.html","5a478a892d381685b6e3288fd6e4439f"],["/tags/柠梨/page/7/index.html","36729d29e104227dfb83fc6b63b40726"],["/tags/柠梨/page/8/index.html","a01aa00c654779a7ff2a9abb5b10cfcf"],["/tags/柠梨/page/9/index.html","f13f56923627f32ea22deef50d3ce7b9"],["/tags/残酷法则/index.html","be4a65f6c14b3d736711d7495b262351"],["/tags/残酷法则/page/2/index.html","8a8c0960440d836e186be3dca655f525"],["/tags/残酷法则/page/3/index.html","ca38b3c6822519b3c323bf1cee958d40"],["/tags/爱，青春与死亡/index.html","f031e43de8945e8912d98d920c77a18a"],["/tags/狂飙/index.html","af9418cb6149effa20370c2a0064ed59"],["/tags/都市传说/index.html","326f161672d7a0f222547ba9053116b2"],["/tags/都市传说/page/2/index.html","73114b56db0e75eec860a1b6f41efc74"],["/tags/都市传说/page/3/index.html","c88274f412ede9f189a28f687d87b1a7"],["/tags/都市传说/page/4/index.html","3ecc766721da91432b27f97bcb9d4efe"],["/tags/镛武侠/index.html","e9fe8adecbea2a57be8a62846ba42895"]];
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
