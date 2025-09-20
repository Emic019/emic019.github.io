/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e1556b1d8cc84a5c165c82efec9e7a44"],["/about/index.html","8a3ff449fc5322ec5c360bc6a978f36e"],["/archives/2024/07/index.html","08f8d539ce06ed6c0c2917acb71ea58e"],["/archives/2024/07/page/2/index.html","3cdc5f6eb2eb26a7836ddcc882a4ce34"],["/archives/2024/07/page/3/index.html","4469bd3023261adc077c703ede2d8b09"],["/archives/2024/07/page/4/index.html","1cb8a6c286f9e364510f9186cb22e94a"],["/archives/2024/07/page/5/index.html","a25b98e28de61ebf6eaea3d918935a05"],["/archives/2024/07/page/6/index.html","ded4140c72e807cdc9687c48947875e9"],["/archives/2024/08/index.html","f926acbe2b403a6c03bd82f098ff808c"],["/archives/2024/09/index.html","84253fab182c2dc38d4e653a05e1df55"],["/archives/2024/10/index.html","7d461523871c0bd10bc074400f7dd59f"],["/archives/2024/11/index.html","4165c25b6cbad730635471ecb06f8e94"],["/archives/2024/12/index.html","29f35dfce8412fa2923afc9b9cc649a9"],["/archives/2024/index.html","560937dcf3348c941e01087de54ab22d"],["/archives/2024/page/2/index.html","2a7129707fbc5bd5dc50cf71af829dc7"],["/archives/2024/page/3/index.html","236193d41bcee2918c554e3bdf6689de"],["/archives/2024/page/4/index.html","144def1e5d518049f1c835f28219694c"],["/archives/2024/page/5/index.html","1fc7cfadcd1d9759c4d84dd4eaaffb5d"],["/archives/2024/page/6/index.html","28caa6a7ae3021a3455e771e90161024"],["/archives/2024/page/7/index.html","53c060dd78422d330e7139dde991eb7f"],["/archives/2024/page/8/index.html","ab0571d60a0b88986c1f7c223faf2451"],["/archives/2024/page/9/index.html","0940d2f28fe87ce2ee218d04b4d06657"],["/archives/2025/02/index.html","cabb0888fefa9a9826d96bf7b959c208"],["/archives/2025/03/index.html","630dc3445d2987ab4ce3be2058506c52"],["/archives/2025/04/index.html","d1093c65086fc7221c2340ca6e8c4a54"],["/archives/2025/05/index.html","278ccde66b65d0f7a6ffa5951e8b61a9"],["/archives/2025/05/page/2/index.html","4f8fdc1b7f3cf85be46cefdab3606877"],["/archives/2025/06/index.html","098d324f0e8a2210c94165ec94cea44a"],["/archives/2025/08/index.html","0a4b48b67a55bf788a9b72cf6a42fa8f"],["/archives/2025/08/page/2/index.html","7e4d319aa006470b126c8936e6a50a4f"],["/archives/2025/09/index.html","25c3b5d2f30ad7fb5b33894c21809ae0"],["/archives/2025/index.html","bf1f45f41973b9032bbde6adc827e89a"],["/archives/2025/page/2/index.html","151ec42b75fd4b6491c8994ec09b3d19"],["/archives/2025/page/3/index.html","b033fc348930b8357873933af6a3945c"],["/archives/2025/page/4/index.html","f5cc46855fb1cdb2dc13e9d04c629fa4"],["/archives/2025/page/5/index.html","25579903c45d8ea59922eec66818343b"],["/archives/index.html","668ced4d0f36f7a3b26e8bd36fcc94b6"],["/archives/page/10/index.html","057b863137303d66ef274c5896f54412"],["/archives/page/11/index.html","34a3843efd88155ee1c95b471c1acf39"],["/archives/page/12/index.html","5d5346ad61e3eb78ef300f4f00d50689"],["/archives/page/13/index.html","4c8b61584d5d88fea892a1f51fb140d9"],["/archives/page/14/index.html","a8776b10d5ba8e5b249fd95ba747e2c5"],["/archives/page/2/index.html","7f49277c98ab8220b0776a0d8d4b0116"],["/archives/page/3/index.html","01c06b485c16e25b1db64e8b6d07e06d"],["/archives/page/4/index.html","9ca372275dde9bf8de31150eade8aa85"],["/archives/page/5/index.html","57dbb87bb2af859c56caabd36f05bcfc"],["/archives/page/6/index.html","8b5166c0e856e945da072c12877d6f96"],["/archives/page/7/index.html","4d4ef9392121e95ba6bce23701c05ab8"],["/archives/page/8/index.html","ea7e6d9c908a2032153781368402b68f"],["/archives/page/9/index.html","abb60f931982235e429090acefb964ef"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short11.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","702d96676f0201e720b045f83631d0d2"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short16.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","0fd6925c00e79198db02bf4b183f50f2"],["/categories/与敌同行/index.html","8cf8d182bb784a640de200296c7f79c0"],["/categories/与敌同行/page/2/index.html","af19f97558a5a571aba61da50cf9a88a"],["/categories/与敌同行/page/3/index.html","515f9d12906114b29fea253768df8507"],["/categories/与敌同行/page/4/index.html","596becae6e36a10a2db42af37653801d"],["/categories/与敌同行/第一卷-双镜/index.html","52eb42cd12891481bbbb29f1b0e35060"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","7ab80504d8464c09121e6b10f2b19f9b"],["/categories/与敌同行/第二卷-信天游/index.html","0956be9000f119d18e9b499c617b6516"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","e100483363de510482a04c29b22b92f7"],["/categories/乐园/index.html","86cae4614d20e92c95145deab2956378"],["/categories/乐园/page/2/index.html","cb72c8cda746b44d5c265b917c4de95a"],["/categories/嘲鸟之歌/index.html","bc6320e1e10d27f455d474a57185a4c3"],["/categories/失落的应许之地/index.html","0c7fbbbf1893c3a3d1da5a78a719ec76"],["/categories/失落的应许之地/page/2/index.html","eabc9c50a356534b855887f44f85b21c"],["/categories/失落的应许之地/page/3/index.html","ac3c8872a6aa4661604e5b2138a8f4f2"],["/categories/月照天山雪/index.html","e5f46d9d41e331949cbf99a09b783c49"],["/categories/月照天山雪/page/2/index.html","13e78553012279a9322131783d75473a"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","8ed5d2b5079eb8e286835b59c96b2b96"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","b44e06bbae7a01f5770d458afef23351"],["/categories/狂飙，乱飙，发飙/index.html","4fee4685df49aa2ffde2d8c51776ee0e"],["/categories/短篇/index.html","addaee452727a84d4dedd5d3a5fb1d2a"],["/categories/繁城之下/index.html","29e45a385a88cd538ed09309cadbf8bd"],["/categories/长夜漫漫路迢迢/index.html","6b0dc96b93ef3639cf6eb7692b56a2c4"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e32a4c9b4c71515c61793102b9338169"],["/css/modify.css","9bcb73ae7cc3a475d18aff154876338c"],["/css/var.css","b0d24834092aa9b886bdacc27d252264"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","d1f94755dd326582476ffa3348c8f1ee"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","2ad47a41e8f9d4e946e49ce19d56c939"],["/page/11/index.html","b8d89025d5f4310cf7b74b38ce9dcfb4"],["/page/2/index.html","16a6d7175711d5fdee6a692baf4a6c27"],["/page/3/index.html","1cb8bba59b57758f379d6b1b87a28aae"],["/page/4/index.html","63c468fe408ead28307ca6f2bea58b6e"],["/page/5/index.html","051144923bcda253e4d396373642e7c2"],["/page/6/index.html","39f3bf993bcf8f5a6df9d415f709cf10"],["/page/7/index.html","e208b726c1e8b1dc41e5d51918612d73"],["/page/8/index.html","078ca80f4809d1bb415bccb053c11322"],["/page/9/index.html","b344cae4b68afc2bd5711f1294ae89c9"],["/posts/1083795192/index.html","f77e581dd5ae128b794385242ddfeda3"],["/posts/1099216759/index.html","33ddda642d7167e6de6e102e971562d8"],["/posts/1104021264/index.html","5f5aede9e9628617543136c5b4498208"],["/posts/1195093070/index.html","8888e965271d78b18cc6353c09e14630"],["/posts/12506394/index.html","efc464dcc22148b7c8afd4b6c6c2f23a"],["/posts/1272692100/index.html","88910d1a5419ef7f48d763eabb7df396"],["/posts/1304356361/index.html","0d356a40268eba38e02ed05bc5442acb"],["/posts/1315809802/index.html","b74955ae220029e72c10a85f5dec6d7f"],["/posts/1329165323/index.html","2e0bc912db48d2ae00cd45c84a861eb2"],["/posts/1378666774/index.html","fd98184ec3ce61aef348eddddcfa0114"],["/posts/1400613118/index.html","5a43c35618bcac9bfaaf804338f73db1"],["/posts/1407316490/index.html","1f9edf5514ad19732cc2f6e8a21a2ac4"],["/posts/1434824932/index.html","bae27ced8ee78733dfa5d2680a76fab6"],["/posts/1445707477/index.html","ecf4c20da321eb532cda326e35cb5d2f"],["/posts/1465373355/index.html","289855bebb8429b2803a7650be694807"],["/posts/1500385898/index.html","c643bde5d71d5c6f12ad4c51d33419e9"],["/posts/1681850936/index.html","b88f451b63db10e4dcb67fcb02472b77"],["/posts/1688557772/index.html","45964de286be5a4f20c863236c7e0170"],["/posts/1710373156/index.html","c81e900f2556c9b48b22e1084791b802"],["/posts/1720998546/index.html","a62cc33bea703da3fcd5313bce1e641a"],["/posts/173005120/index.html","8c72e55885c8c38d405609b07b26092c"],["/posts/1766000773/index.html","b073f615385036719d1ebdd8e77e1926"],["/posts/1845581652/index.html","23bcd96c7c75cc4b6b94157257438f05"],["/posts/1988799958/index.html","99f852264afb3b3bdc843f3862fbfd6b"],["/posts/2080722358/index.html","bb9d609a332204da8a472d4e22f3590b"],["/posts/2192148155/index.html","0481b6ea5ce32aa2ea3550d30665c221"],["/posts/2229302539/index.html","3f76cb780d46e4bf5637c4e29c8ba06e"],["/posts/2492968201/index.html","eb013ad2f72032a7ca6c6d8810b1c267"],["/posts/2531300956/index.html","e3519e14f12315c77f2d08bb4e6ac611"],["/posts/2869217975/index.html","045bfeee78db72de8ab8db2c71e56b34"],["/posts/2888068877/index.html","6c45b97b6b398fdae926d50c3d7c6061"],["/posts/2949714254/index.html","7780234e504f4a16a5cd1e1a06e9da7f"],["/posts/3002318373/index.html","afc17dcd35b3d9aef8fc266af40560d5"],["/posts/3076558902/index.html","6d31abc9f6ca20935ed3ae6fa2f47f31"],["/posts/3147359483/index.html","8c00f1c63eb461436eb6300091086af7"],["/posts/3191465731/index.html","1bb7119017b581feeecca42b75eb40fa"],["/posts/320179123/index.html","3288c8c17c1d8ac0c25ed20c95d04437"],["/posts/3300469459/index.html","9b779491f104e61abb8769d62c107a92"],["/posts/330870226/index.html","b9bdd22b553ba094c8dbfb8eae75ce46"],["/posts/3459697331/index.html","2e27af3f5a878837d2e4167db6fc34cf"],["/posts/3489395119/index.html","25753f638a8a29887256867f6aa54014"],["/posts/3525870963/index.html","d60d78f81edbe21e54a42006e79cdc47"],["/posts/3591144765/index.html","1e3c151e5ceb4341834eb6eac5ca448f"],["/posts/3602722865/index.html","ac1dac35941ba3b5a9be5632f39b5a75"],["/posts/3640780602/index.html","6e2b32ea00474d0ee204bea6e844198f"],["/posts/3679626959/index.html","17a87a855e225a7bc4491b6d6953fb7e"],["/posts/3699598685/index.html","01d724d40c87dff3dea06915c1894312"],["/posts/3712900673/index.html","bb03aca7db911afd4f13ac7f010f7aa3"],["/posts/3770599674/index.html","1d14d515b1e97078522af56735418504"],["/posts/3788666127/index.html","f77b40c409abe9cce70876e5c6010dbc"],["/posts/3935350387/index.html","971cadcad31b9f28e2cfcc9084aa2e08"],["/posts/3948778863/index.html","8f6333935489a79850f137a52c6a4f46"],["/posts/403803703/index.html","3ab978df1e9de06c89608838523c5d6c"],["/posts/4041933047/index.html","429f1dfc111a94084ee28588899df7b1"],["/posts/4083669729/index.html","1acf1135a1856c687d944a7906ff6b74"],["/posts/4110582124/index.html","832d06d126cd8f2d507db43921d95edf"],["/posts/411074811/index.html","6ee42c9f88e89a8d48b14de3edb65f3c"],["/posts/4113963045/index.html","b24bb02c5dafa17bfdce4b1076645ff4"],["/posts/4163174813/index.html","c59c231ebcaab555e209c7b2229afb2c"],["/posts/4185022581/index.html","01a7ffbae65ec2f7c890ac64957b7fc6"],["/posts/4192746113/index.html","a078c251fb0767eabbde0c95111ff4a8"],["/posts/597050941/index.html","f9d33c50c3929e28919ee20b45fea1bf"],["/posts/719776913/index.html","8f39bfa0cd6983d41d40e5958679edfa"],["/posts/741067372/index.html","cb3d10ddf5b4d75f8aeaebd68289d521"],["/posts/776340048/index.html","50492df9067c68efa514dad782a757c9"],["/posts/888354975/index.html","1b22fa939d4f29e1b92d239809eb4884"],["/style.css","420e3d3773d3e14c7dcc8a4cffa8cf2e"],["/sw-register.js","8cefc19ab0dfad4bc27792fb1e489b49"],["/tags/index.html","4623f7a896e85d0d5c29bd6100465692"],["/tags/中国往事/index.html","e557c583d22d2b30c5f91794abf068b8"],["/tags/中国往事/page/2/index.html","5086c1e494377542a114ad3b4eefd5b5"],["/tags/中国往事/page/3/index.html","a23d7163ccc659016978469883d4ea48"],["/tags/中国往事/page/4/index.html","264f8509c6da8c13808d6ad9c35b4615"],["/tags/冰与火之歌/index.html","cc30f2371015f2eefa4445ad1e92e8c7"],["/tags/冰与火之歌/page/2/index.html","ea606cb51c98f8f45731841936670b75"],["/tags/拍案惊奇/index.html","25497f72a8fe0a8050f7d1bfa4c46300"],["/tags/指珊/index.html","8a88c9bc0655bfcd0edb92ee6e7c8107"],["/tags/指珊/page/2/index.html","8bab719a98b9f2b98ef23ceefdc27c4d"],["/tags/摸鱼之作/index.html","aa5b6268ccbf91575f4cf47008465607"],["/tags/日常/index.html","a7a45625ff10f7a3b7f410d4ebb220fc"],["/tags/日月凌空/index.html","181f19f1cd185777592407b55b3c18df"],["/tags/柠梨/index.html","d9d03eeeb832348ba1b5e1c367a0d533"],["/tags/柠梨/page/2/index.html","8510fe8006d9d679b27a594b64e6d78a"],["/tags/柠梨/page/3/index.html","4382da391d33a971644023ae72caf5ed"],["/tags/柠梨/page/4/index.html","f1290acd119df9164119348231e8535f"],["/tags/柠梨/page/5/index.html","cb0062683266191b22d761e4a305ae9f"],["/tags/柠梨/page/6/index.html","b4cbb818603a25e3d0338fa80699e589"],["/tags/柠梨/page/7/index.html","3137ae2d42b8819c0d1428f0b977176a"],["/tags/柠梨/page/8/index.html","9c051561921e7d0c920ce82f7193fcc4"],["/tags/柠梨/page/9/index.html","3282e37198c04c48a52c9699feab1a2f"],["/tags/残酷法则/index.html","eb632b1c09536efe4e0a26994b0784f0"],["/tags/残酷法则/page/2/index.html","48eacbe59115ead472e24bd6d34fc1fb"],["/tags/残酷法则/page/3/index.html","e4b1a294e10cca0d1ee30ae2ff9346ed"],["/tags/爱，青春与死亡/index.html","771e300a8a6752e10ccad9a8b35aedfa"],["/tags/狂飙/index.html","30a1945cee05aef3a55b99781eac2fe6"],["/tags/都市传说/index.html","1211891d3223957755cd31c8926286d4"],["/tags/都市传说/page/2/index.html","025187b2875ff490cf1a0559a242f7e1"],["/tags/都市传说/page/3/index.html","270abc99fb178602966c6037882ed064"],["/tags/镛武侠/index.html","3a52a07102d27bca0083694e82572a6c"]];
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
