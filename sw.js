/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e5e29a0b17344d9e2e40c22757b74686"],["/about/index.html","3e7fc7e650c3ea4535072860c31a3749"],["/archives/2024/07/index.html","c67cd7a308ea32dcd067b009463f66e4"],["/archives/2024/07/page/2/index.html","f83af8e34cacff2f9b5ee0cef80ab886"],["/archives/2024/07/page/3/index.html","0275709bacc5e71a8f64f058aa48e34f"],["/archives/2024/07/page/4/index.html","7c285dbce9c4a753bfb645990d771b27"],["/archives/2024/07/page/5/index.html","2d9a43a029e075fa051b0c0693f15d97"],["/archives/2024/07/page/6/index.html","eb6a8b3420a9df38ce30bc8744eccc04"],["/archives/2024/08/index.html","c296339e9f5b5169ea24f05206706ece"],["/archives/2024/09/index.html","00aed7898235000d2590f1c6fb1a27d3"],["/archives/2024/10/index.html","8232070b4d87271c4dd4ba3c3afc9dfe"],["/archives/2024/11/index.html","5bcc89333a47dc84169c363dcb28d82b"],["/archives/2024/12/index.html","1700661e516f7353d3284da7b42b848f"],["/archives/2024/index.html","6eeb05fd935d46dd5dcf30af5522f2b4"],["/archives/2024/page/2/index.html","e90a902758f05fac21a3407866730c6d"],["/archives/2024/page/3/index.html","1bedfe1ba6768321d3bb87e4db455c65"],["/archives/2024/page/4/index.html","2b19a4b65c912a97ae63594792d7db11"],["/archives/2024/page/5/index.html","bb05aa86cbbed8767c825638fa92ed43"],["/archives/2024/page/6/index.html","470cfcd7c613f2d3881b2ebb71b8e527"],["/archives/2024/page/7/index.html","4994d1d4df454479224ae2909cd58fe3"],["/archives/2024/page/8/index.html","1b444600b78203ca0216be8e69d21464"],["/archives/2024/page/9/index.html","fd1b5f62c808ff37deb30a0a2eb963cc"],["/archives/2025/02/index.html","e63c8b3d9b207cb4a3f1a2c169f39200"],["/archives/2025/03/index.html","8ebb6e68e9ced37376a8501f3e83db99"],["/archives/2025/04/index.html","eadee3570849210c1524d21548e2e7fc"],["/archives/2025/05/index.html","472f23a149033b5ed9afd63052c91567"],["/archives/2025/05/page/2/index.html","7b357609c658e6820ca901efaf7607c0"],["/archives/2025/06/index.html","b96e1907e7b986c48e59c243d673038b"],["/archives/2025/08/index.html","fde024e440f7d6d35d0e6fe003da6c64"],["/archives/2025/08/page/2/index.html","2ffe9f5aeb62b7dad0fde5cba7cf5a26"],["/archives/2025/index.html","c0ef4a4154648865e57a2bb4cae00f3c"],["/archives/2025/page/2/index.html","f939058ec037a44153f3fbc33d3a2a4b"],["/archives/2025/page/3/index.html","a7960249e467db9004a724b26b7e0ac6"],["/archives/2025/page/4/index.html","c1cf9698f7306191a3723a27b393df62"],["/archives/2025/page/5/index.html","9645f67cd8ffe93edf0c33636857d964"],["/archives/index.html","c087bb4048c1abb401fc9afe7d0ba580"],["/archives/page/10/index.html","f1b3d4f1fd00d0f28e134957e4f217a6"],["/archives/page/11/index.html","34dd5060a56ba1880ab0063abcd3ad82"],["/archives/page/12/index.html","98de72c3dee8b3c4e22f92a4a2e9eac3"],["/archives/page/13/index.html","dafba3fdc76f5b944ecc00935337cc3f"],["/archives/page/2/index.html","0a0ddaf8cd7e2ca60e64c0c4053ff51d"],["/archives/page/3/index.html","6be0e9c85713b63552bb57f42642ab41"],["/archives/page/4/index.html","6c837805c10f8e7ded26d83d13a5c38f"],["/archives/page/5/index.html","c917879f8975aa0c525a348b36c7387c"],["/archives/page/6/index.html","9b02a21f3a58cedc9c04257fb9b37dd0"],["/archives/page/7/index.html","bb557c7b5b4a2c1ed5e397f26c5df2e7"],["/archives/page/8/index.html","683ecc369317a5efb185389ca8543bc4"],["/archives/page/9/index.html","5716e1348ddf44c2f5eaa73215f2c1fb"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short11.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","a4039a15f8a2a27c26e2e089151e6e5f"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ly1.jpg","c798ae9035fe2d26036e82209e0ef727"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short16.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","9b4a67063a18d7e8642d947f867f99ac"],["/categories/与敌同行/index.html","982c06ee7bb5a9ace5ef19447f2fdb34"],["/categories/与敌同行/page/2/index.html","e7003fe78a310db9bbdb2fb108e1a678"],["/categories/与敌同行/page/3/index.html","383d3877daeb4a807f9b03aa7f162e0b"],["/categories/与敌同行/page/4/index.html","ddd57a61a4ead85f8c6c402a24ad2bd3"],["/categories/与敌同行/第一卷-双镜/index.html","aa88feb02e6eec0b1108eda3c2e86790"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","00538445e543c2f8582afa38990ed545"],["/categories/与敌同行/第二卷-信天游/index.html","fcde98460e81fcd00ded366d0d674e10"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","3f64378e9e17103a6810a51579c00945"],["/categories/乐园/index.html","c30455054bc0d5fb6b7b55a30b4f70bc"],["/categories/乐园/page/2/index.html","ba26e033c796effb42db92f3e4eadfa6"],["/categories/嘲鸟之歌/index.html","dc9459fe4ad8412f384efb88dd589a97"],["/categories/失落的应许之地/index.html","59b80339d227550e3fbe97b8dd15dac3"],["/categories/失落的应许之地/page/2/index.html","276f5abc56f27a8b7180e1905b63046a"],["/categories/失落的应许之地/page/3/index.html","821e977072132dae380952aeceded9de"],["/categories/月照天山雪/index.html","c0c78a0820b596bc02660b49fedbd6f1"],["/categories/月照天山雪/page/2/index.html","042374bed7a103b2d6dd4dc70e6dadd0"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","297d18485d1849732dcfe6865582f8d3"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","2a8c1fa230efa280ebbeff6ce98ea786"],["/categories/狂飙，乱飙，发飙/index.html","038d7b90d98e973f0b5a89b058974ac4"],["/categories/短篇/index.html","b0323ea81c8e76f9f2a4f5dc2be22dad"],["/categories/繁城之下/index.html","5e9bf86feb55fc0512748dbbe6e74459"],["/categories/长夜漫漫路迢迢/index.html","00c8b50be7633a5ab4508683ae36c531"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","07fab8f165a11275c80e6ba70e2b4fe6"],["/css/modify.css","7cd18810b58224b5b6b622e029be868a"],["/css/var.css","60b777925c1b2e84a17502df9c31b975"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","16ec5a58cb77e027e58fa92a7a5c2e4b"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","9a1275c4cd04e5a153e83ffc3d58ae67"],["/page/11/index.html","d472c43d58b05f65305c1246ae76eda9"],["/page/2/index.html","55881cc00adf6e07d48e2212bd45aa03"],["/page/3/index.html","f2c935d45af10c8df65c60ec53a886f3"],["/page/4/index.html","c558dd3871bf802b31fc42faa3ed0cb5"],["/page/5/index.html","ddc919d6eadb844d972f2ba58f1f72b4"],["/page/6/index.html","8976545ecb2b4a01c0cec0b1ba4b858a"],["/page/7/index.html","6d4c4603899eb3b53c13ef9021a5741c"],["/page/8/index.html","7e48e609a95a7e56233210afdbb537c6"],["/page/9/index.html","f2a0900c3f1386090aeac5bfdc28dd09"],["/posts/1083795192/index.html","fc9f6518c27b21b2c33c2f91fe5c73df"],["/posts/1099216759/index.html","09407f01ff2b5d3903212e51384fdd7c"],["/posts/1104021264/index.html","0fc4e306b2c315ff60d6d05bf7fe0222"],["/posts/1195093070/index.html","eb552da12f5e4297c82a8fc0311bc234"],["/posts/12506394/index.html","d35ef194495994fc42ab07949ec4bc9c"],["/posts/1272692100/index.html","238fefed6036b33d58117d91dbfb1da2"],["/posts/1304356361/index.html","f8811749f21492d141942f93199a4e61"],["/posts/1315809802/index.html","6eaf2171635d51a7aed32241c59369d2"],["/posts/1329165323/index.html","27adc1e5f92822027fa4759fae7248bc"],["/posts/1378666774/index.html","8b58ae9a80453982412c7f6b4048afb1"],["/posts/1400613118/index.html","840c665232b1552720e725210da98808"],["/posts/1407316490/index.html","74f076a233ab70f727f7bae1685e016f"],["/posts/1434824932/index.html","28cf9c1c11b4fae35df7a8b4638b1ee2"],["/posts/1445707477/index.html","5ae00589c17c4f3be2bbae8325f9823a"],["/posts/1465373355/index.html","0a2e55c55be5e8f0e2dfb47efd30fe80"],["/posts/1500385898/index.html","9a26f5f071e01b1ac0538878376e4ce7"],["/posts/1681850936/index.html","3766308da00cf10c5560181d7458cb71"],["/posts/1688557772/index.html","f6c3abed2020232a81fccb0541d4fe08"],["/posts/1710373156/index.html","3aff9771b85745c38d88856868c5d8bd"],["/posts/1720998546/index.html","7497ee13bfd28f2e8584127e277fe4e7"],["/posts/173005120/index.html","7ec8ee7bcf9e47b7a15113018d5931ab"],["/posts/1766000773/index.html","3fe54fdc1f4384ad69bf7e696218eaa3"],["/posts/1845581652/index.html","917c8dfd31db00b472a44bff531f4b80"],["/posts/1988799958/index.html","0bcd1b02cdebf17d9dec8f37814cbefe"],["/posts/2080722358/index.html","a5eada533703a8728653ee4d77e98c9a"],["/posts/2192148155/index.html","5c9b88141de011c43136c7d6959edd89"],["/posts/2229302539/index.html","aa82d0005b23a9d241a5f9ac954e060f"],["/posts/2492968201/index.html","598a2541e3555074561d4d630de6d9e1"],["/posts/2531300956/index.html","1d1ea2f87d247cff392cc8c68763f67d"],["/posts/2949714254/index.html","e68cc06d909125e84c685f465f282fb7"],["/posts/3002318373/index.html","8f8f8be4c8b808be4540b723811ecb88"],["/posts/3076558902/index.html","60cb1a9f2f98e00508a970110bb128fa"],["/posts/3147359483/index.html","680f88111a97b37190d054b9fd5e45b9"],["/posts/3191465731/index.html","6377dc55f385e9cb1f382eff98f2396c"],["/posts/320179123/index.html","2ea32875c7a80bb05e16ada636b2b9a9"],["/posts/3300469459/index.html","bdda209264cfd8f3665f1c820380d51b"],["/posts/3459697331/index.html","93c889342bdbbb7df5fcf7024e4228f8"],["/posts/3489395119/index.html","187d6a88e227e6591478c2acfdfee670"],["/posts/3525870963/index.html","adb47e543f0112b3dc94b4cfb190361c"],["/posts/3591144765/index.html","89251a8aa4ea351a442e5f4db405e123"],["/posts/3602722865/index.html","ffca100f21bcebc3245b98c157968227"],["/posts/3640780602/index.html","88edf9fcf6cbdb586d09fddee6db7d9d"],["/posts/3679626959/index.html","dc827c1f7d2a106d7613e3ec2930a810"],["/posts/3699598685/index.html","e0fc5c1967d86d44447665815dfef0fc"],["/posts/3712900673/index.html","d52c9ec753414530e6fa5559c9871af8"],["/posts/3770599674/index.html","7a7fdad9dc1bce41dcce56bdc9209055"],["/posts/3788666127/index.html","395dfd4b19d8fbed0afc13feb3100561"],["/posts/3935350387/index.html","4abe12bcbc8f08d3892fa8b413c6a6c6"],["/posts/3948778863/index.html","8d1ac99e48ada958090dccb67cf5bed3"],["/posts/403803703/index.html","63547579db4d5004ad563fa444071309"],["/posts/4041933047/index.html","9b7330986ecbdc6371dfcaa14f9b36e2"],["/posts/4083669729/index.html","3aead08dfeb42133d4c85750746f1ced"],["/posts/4110582124/index.html","5cd63264ac316a5af8dff92a1b413425"],["/posts/411074811/index.html","f609d0496cba3dc0001c00300ff47925"],["/posts/4113963045/index.html","42256594f6a4783b89a9e80d38c83721"],["/posts/4163174813/index.html","8fdf8aac89950bdb1e36db57eaf85556"],["/posts/4185022581/index.html","fb30dfd250427c2235cbf4626327a84d"],["/posts/4192746113/index.html","3146d077f1eaebaace6ce45781187764"],["/posts/597050941/index.html","7d8de3fd4270a0356418c925254359df"],["/posts/719776913/index.html","7378d9cf6b38b59c6c9fc4d6d44c30c1"],["/posts/741067372/index.html","bd86b9288bebb7235b81798cf7a9c3b2"],["/posts/776340048/index.html","d7370da6a3ffc65c05b62a73ce29c003"],["/posts/888354975/index.html","b559a49ec4d1042c579d831db84573cc"],["/style.css","5c6767849fc588c7d0d8b89f074dff2d"],["/sw-register.js","861162b904ffdcc66fd02c13e45169b9"],["/tags/index.html","f63295ed0b1d84629fe8521e5fa256d1"],["/tags/冰与火之歌/index.html","5077f8f1ef7b80da33d46c6f45987980"],["/tags/冰与火之歌/page/2/index.html","b051ca17b151dfe2f3b36333ee205d8b"],["/tags/指珊/index.html","2592a964274b20165b9bf0116360a673"],["/tags/指珊/page/2/index.html","a5fd37601dd0c00186fe0c51c1a77de0"],["/tags/摸鱼之作/index.html","3de932c2629576e46d4afb2535ae94fa"],["/tags/日常/index.html","1a60066c0473c798e13f3ee2bb45ab0e"],["/tags/柠梨/index.html","ffaeb268b29ff5747f2afeb667341588"],["/tags/柠梨/page/2/index.html","c3e65a2abf407713e0d1c7f7d7af93e1"],["/tags/柠梨/page/3/index.html","1db97601da265149837ce7923cc5b157"],["/tags/柠梨/page/4/index.html","65ea80d71028227b68a3222175225515"],["/tags/柠梨/page/5/index.html","f1183769b4b1868de2c654a8dca029cc"],["/tags/柠梨/page/6/index.html","ccaf6b9ff06aea90a18aa7bb7ae0f6e4"],["/tags/柠梨/page/7/index.html","620346459cb700f695a23816690a628d"],["/tags/柠梨/page/8/index.html","e42b520152dff6bc794e9bba7ab09986"],["/tags/柠梨/page/9/index.html","6d78740229d561dc3f22143f8881f9d9"],["/tags/狂飙/index.html","d9e4c166038eb6f4febed879ebdcb648"],["/tags/镛武侠/index.html","8c332acacce57ff7fc6fc10a05c1534f"]];
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
