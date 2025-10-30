/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","521237c503dee87054d85f902c28e838"],["/about/index.html","9150999bc46d7f2276b9d5e6707a432e"],["/archives/2024/07/index.html","7098213533f42c964e4eb9d99d4061c7"],["/archives/2024/07/page/2/index.html","2d5ab359f9b0a0221d35149f05e5d29f"],["/archives/2024/07/page/3/index.html","bae12b528479fd179d0fa5d88a018ad0"],["/archives/2024/07/page/4/index.html","73467e3cab6a271fee0cacc636767070"],["/archives/2024/07/page/5/index.html","f67a3cb35c5fe13d43cc7a57cd99a2ca"],["/archives/2024/07/page/6/index.html","628a26f1379910509d29fc20c300b5bc"],["/archives/2024/08/index.html","3332efcdf880c084d0634d53521829e2"],["/archives/2024/09/index.html","26c18f4363d0a78a84374a9a965b958f"],["/archives/2024/10/index.html","56cffb64823a75d1a4a142c7a5a661e5"],["/archives/2024/11/index.html","b7f7bc112bdf4378109f5ad168423d30"],["/archives/2024/12/index.html","b642138d6a692010950b66337bb5a343"],["/archives/2024/index.html","12b18dc818fb8f1e6f3e296fb266dac8"],["/archives/2024/page/2/index.html","4654c79fb068e17960193021f7df4714"],["/archives/2024/page/3/index.html","10510ccd824996ac69996c7a8e2f8bbf"],["/archives/2024/page/4/index.html","b32e429ab1c59d1055a55070b269640f"],["/archives/2024/page/5/index.html","b92c55d7df5b26ca86b7127f87271a24"],["/archives/2024/page/6/index.html","924c50dd8ccc96fde20ccd6661c41bbd"],["/archives/2024/page/7/index.html","b31b76d204977bd34a8e01d345d2fe08"],["/archives/2024/page/8/index.html","1bf34a81bba2e9a7429744715f1ea2c0"],["/archives/2024/page/9/index.html","21321ebfbefff42c109e6ab44ddf9e07"],["/archives/2025/02/index.html","64c19723ad99f2882df8e694292c6904"],["/archives/2025/03/index.html","dfc4709d1f5d41b6a7ac3e918f4a6abd"],["/archives/2025/04/index.html","703ea7f8eddfe89442d86eed2ed66c5c"],["/archives/2025/05/index.html","f100e9dd75e2f388980e959015fac6c6"],["/archives/2025/05/page/2/index.html","b7b96d52441fd4855f9ba88191b3c949"],["/archives/2025/06/index.html","d3417e26b4d3e159fae4cc6ba86e94f8"],["/archives/2025/08/index.html","5fdcd133f01a625dbede53358aeefb58"],["/archives/2025/08/page/2/index.html","fd12d4396c56cee4894c0124cfe7ad78"],["/archives/2025/09/index.html","3acbe76410f5428fe565c043f39d8413"],["/archives/2025/10/index.html","2700cd9e16ed6e9527746aaa5b3bce15"],["/archives/2025/index.html","377dac711d162c53f0405b5cd7712714"],["/archives/2025/page/2/index.html","3743d7b2022417497ace405bd7b12351"],["/archives/2025/page/3/index.html","63b8fd9d493f955b218ccfe4710d2bdf"],["/archives/2025/page/4/index.html","8f5d99a6431c40b26a6c403958eda1a5"],["/archives/2025/page/5/index.html","988ff11c34927512d577c81ff0915b4b"],["/archives/2025/page/6/index.html","cc529f30786aa74edc227538c05162b2"],["/archives/2025/page/7/index.html","0c9cfb8371436e1a9ee737e734360d48"],["/archives/index.html","5d25a0631f1199e1f38f7f54b8a918e2"],["/archives/page/10/index.html","a2c9d49b030d1c18fafbed7b98b3b7c6"],["/archives/page/11/index.html","cb0319b6ee17406a8dd66961074e0af2"],["/archives/page/12/index.html","16ecacf4ba5d6707a538306dd127d176"],["/archives/page/13/index.html","5752113a5e7fca6d64282e151d882456"],["/archives/page/14/index.html","a5fecd480186c63e11c864ac93be5334"],["/archives/page/15/index.html","ef5da9ecc06ae8ebc3ceaf8c05665aa4"],["/archives/page/2/index.html","8616b9ae81f537f567187cc9dbef5f58"],["/archives/page/3/index.html","55df745b33aba9e7609944cb2c1bd7d6"],["/archives/page/4/index.html","12d768c6eb96612588fe72341987ab73"],["/archives/page/5/index.html","f6f0743ad1647f41a9cb1202e5a15dac"],["/archives/page/6/index.html","73c7ba3e5011d687e8173085fb090f9a"],["/archives/page/7/index.html","c3a24ec549b1f20e6a597b35959f4e7c"],["/archives/page/8/index.html","2897a00adf9ada8a289d8831f4c6c91d"],["/archives/page/9/index.html","a93eb77a37c6b45f7f8606ad680bc751"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/sny3.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/sny4.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/sny5.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","0bc99f624f45ede9799d703f077131fe"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/sny1.jpg","92158f93aff91b4ea1b1ff8059f2e953"],["/assets/cover/sny2.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/sny3.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/sny4.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","91bb2aa4523f6e336add358cec66ddc4"],["/categories/index.html","f4c44e223b21c9a350c9f5a498ddd120"],["/categories/与敌同行/index.html","7abb61ec67ac82d36be05ce6a6751b19"],["/categories/与敌同行/page/2/index.html","7968308fc44f5cbabe4ccac8b6ee9b1d"],["/categories/与敌同行/page/3/index.html","88ffc7ff708c945b621dd096024a5935"],["/categories/与敌同行/page/4/index.html","92e4ebd68c3a7dc3d5fd71b3791bae9b"],["/categories/与敌同行/第一卷-双镜/index.html","c6863d653ddcb1426a4ae09f3191cb86"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","b18bc2f40e8304739fa5eef980731e28"],["/categories/与敌同行/第二卷-信天游/index.html","b6af195e3d2dba3d19c600efdd8ca7e2"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","6c7980231c5c8a107209d12522fe5cf9"],["/categories/乐园/index.html","70f549d0d50d17a53780f0d272d342d9"],["/categories/乐园/page/2/index.html","75b8b6856906c6bb0dceda9a8c6c08b5"],["/categories/乐园/page/3/index.html","3da38bbe682c62541e3da2fbe336e1d4"],["/categories/嘲鸟之歌/index.html","e9cbe3173d952a1c00c5a9ab7ff17ec1"],["/categories/失落的应许之地/index.html","ba85e07e9327f01e3a988528a1d02968"],["/categories/失落的应许之地/page/2/index.html","053d52e93dda7c21279a974f56f526fd"],["/categories/失落的应许之地/page/3/index.html","8bf6f092b22902e6ed5cbc8c872ff03f"],["/categories/月照天山雪/index.html","190605c958c2de2545b327ade86e7c71"],["/categories/月照天山雪/page/2/index.html","e2c3300e12433f929f7e4442a8f5eb2c"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","ec2e5472f354abb0a668ffc355519d04"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","a4a1ec8fcfd95e3e4409bdc2c1640a3b"],["/categories/狂飙，乱飙，发飙/index.html","b7e13a44f77dbddf8c417a81e01f91d9"],["/categories/短篇/index.html","282b3d6a12b6aaa16715952cf71f9ee6"],["/categories/繁城之下/index.html","3c2916f03a59288658d2e10c8a926adc"],["/categories/长夜漫漫路迢迢/index.html","e82448d42f6fb964c2ccef3392737256"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b45ff3aeb2cef79464b4124bf3e701b4"],["/css/modify.css","eeb36ec70801603f1631e29679f41316"],["/css/var.css","f45e4278b41c8d5681ed3876da3d23a5"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","bd792b90a89f8f07f15f7f2d52438fa6"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","ecad44fa87055bedb3be958cab76e9d6"],["/page/11/index.html","a078f8f4ce4346b99e38254682b1e87b"],["/page/12/index.html","5c1789ad09f647aeb377faa2e3f7bfc9"],["/page/13/index.html","1ec9cb9461c46e13e7275cf9174012f0"],["/page/2/index.html","105f2679bf1fade1a063200ba7c88f6d"],["/page/3/index.html","e8849dbcf9cb726a560b9181e8e87a6f"],["/page/4/index.html","7570ffff05350eb92b6cc66eb4550e96"],["/page/5/index.html","98e136ba94fdfe2454c931f5a72d9df1"],["/page/6/index.html","eb8c21984f924fd5e85510576d078c48"],["/page/7/index.html","f71df2d6816750c62103f10a4f733c6a"],["/page/8/index.html","14ae697b0e8a0bd6e2a7e96fdeb877ea"],["/page/9/index.html","cb30ca0bddb356ef37323c59bad4800c"],["/posts/103655302/index.html","77ecbf791a5b5f1bdd732eeebb9a0f4f"],["/posts/1083795192/index.html","2a91ca1fa30d8c0bf53f958e022b6832"],["/posts/1099216759/index.html","d85b8aa136ba1b761ab7f533c47865b2"],["/posts/1104021264/index.html","062904f7b882dc6824097b603e041fb3"],["/posts/1195093070/index.html","fc5d3861bfc8e7cf66fe5a1829f86b33"],["/posts/12506394/index.html","fbb1ada5301421deea968bb4efe7f2e3"],["/posts/1272692100/index.html","ef68577415dc25577c297e869e9c4086"],["/posts/1304356361/index.html","8a5cb2d53f5376a1ccf29041e9370c64"],["/posts/1315809802/index.html","3a29c49d4d9ae0ff91f262d6d03cb706"],["/posts/1329165323/index.html","6c6369d5fcb80f34cfe78042aa7da38b"],["/posts/1378666774/index.html","8bb4569240b217b81a0ebf06e2029682"],["/posts/1400613118/index.html","7cf5f980d7784454793b07238f2309da"],["/posts/1407316490/index.html","39673dfc6a2b53535cd0aeef681d995a"],["/posts/1434824932/index.html","5b1a2fbf53b4baa703bf257a16e90999"],["/posts/1445707477/index.html","3d2ea3f8670ef39f20e65d1d0bb72818"],["/posts/1465373355/index.html","1fd48df258324522c97ce60482d60458"],["/posts/1500385898/index.html","91368e6bcfcc90fce2b2192f6cc67b46"],["/posts/1681850936/index.html","3a2f39159bfc86b6381969db94b4f0e6"],["/posts/1688557772/index.html","d1e7528a198510cdeec120bce90fa888"],["/posts/1710373156/index.html","a31e01490aae1c19e7a75da76e6f9025"],["/posts/1720998546/index.html","70990fcd8fa2f35bd0ce345cea163278"],["/posts/173005120/index.html","5d1aedc1bb025d213912d5f273f2e709"],["/posts/1758837205/index.html","bfb4cde384f8701b13039e3d48ce02d5"],["/posts/1766000773/index.html","b58490b2fcd1f2d28ec7ce843761b8c6"],["/posts/1845581652/index.html","8837187578a404e48e456f707f36d0bc"],["/posts/1859941397/index.html","69be096f12a6c1ef98ccd22ec102ac83"],["/posts/1988799958/index.html","607ce3e7af2f1d9a0235930febe56e9e"],["/posts/2080722358/index.html","e44a4903233a16eea91cbf70cc2cd17c"],["/posts/2192148155/index.html","d35b1c3c88bc1983b492b2b38b94b900"],["/posts/2229302539/index.html","3d5d547814958d5c4416c46db4cc7932"],["/posts/2492968201/index.html","81643b45ed3a071689b7df6590e24c74"],["/posts/2531300956/index.html","7a480bc7e1f3f53a11f74e0581e88f8f"],["/posts/2616893247/index.html","0938a7531c602ca3c3eda329e8f3add9"],["/posts/2869217975/index.html","26b050ed8af91e8e869fedf3db3f07ae"],["/posts/2888068877/index.html","d28d38be5e2d1e3faa63c7858e3c0579"],["/posts/2949714254/index.html","8a81d717d50356b6fd699a6e93dc8141"],["/posts/3002318373/index.html","35d144a34ef117fb8f359e089cc9fce3"],["/posts/3076558902/index.html","b633c7a655e2165503cb18a45b0dbca5"],["/posts/3147359483/index.html","c3b9c727ec8b589ab32b6f2a7e4b1363"],["/posts/3191465731/index.html","5383c50f271b4d883812c9f6833fe17b"],["/posts/3197223139/index.html","4ac75e8c0437aaa3329533d75ed0fc99"],["/posts/320179123/index.html","134fae55c62509b89b6484a7c3a2dea8"],["/posts/3300469459/index.html","9357391553ac7bf9063535aab89d3f05"],["/posts/330870226/index.html","c997a86741c4bc772a219d6b9d7cf483"],["/posts/345507944/index.html","2562e59eb4b56191a8797655c07c3747"],["/posts/3459697331/index.html","bebc0841fa886c13bbed7f80cbdcae10"],["/posts/3489395119/index.html","e308bbc5154f286ad0fbc85190111ec1"],["/posts/3525870963/index.html","cffc8341df17bdef188b24006b1790aa"],["/posts/3591144765/index.html","398a12d2394fb05e90aba8e54c20b9be"],["/posts/3602722865/index.html","b337108a732a8bc70f0d6419a6efac68"],["/posts/3640780602/index.html","b5c47b07f7978399b00a792b52f990e0"],["/posts/3679626959/index.html","2ec83dd03950ed4c8832112db0c54076"],["/posts/3699598685/index.html","3d2ed890f318f4a3e54fe51fdb7e3ae1"],["/posts/3712900673/index.html","6d8d93a009230e52f99eb20a66b0184d"],["/posts/3770599674/index.html","2beb4cf624bdbc7072e9ef9e73447133"],["/posts/3788666127/index.html","ab7ba663bf1d6d71a9931b314d7f539b"],["/posts/3935350387/index.html","bb3d33afd504fd7c73c50b6824d68561"],["/posts/3948778863/index.html","e6667b5b8d18793d725bed5fda3bb1cc"],["/posts/403803703/index.html","d9aae46f28b6361c876a5b964b9f266a"],["/posts/4041933047/index.html","ce029d3461e43b20276db30e96f41f02"],["/posts/4083669729/index.html","4b46000ef29d1cab0412ed12f3d97231"],["/posts/4110582124/index.html","f6f40e1117f1a67d9a6318bdb1e23e00"],["/posts/411074811/index.html","0afc0992a07d88518c2117f76c9ac414"],["/posts/4113963045/index.html","6ae50ceff14814f742e030593a54a9c8"],["/posts/4163174813/index.html","ca58913b9dcf2aa56876101a1f5928fb"],["/posts/4185022581/index.html","92fca46c5b3b6cd6f78ddbc8578f85c7"],["/posts/4192746113/index.html","79b0cd9b11ecd08379ace8beb5afddb3"],["/posts/591853658/index.html","0a08d5696adef3b3ce107ba034ea950b"],["/posts/597050941/index.html","eab8039543cca9b0ee8a659c97b75340"],["/posts/719776913/index.html","c58c32ad41ff72f1815e4fae6fa5df8f"],["/posts/741067372/index.html","2cc716e01a1bebd0caadf1eebd7f0dec"],["/posts/776340048/index.html","5ca1773aeb7574e07b5920005a9d9521"],["/posts/888354975/index.html","ac7416422e09ee3252e85247585c9886"],["/style.css","79032c064cb87279aa426216f9c1e036"],["/sw-register.js","1c812f05612bf92cb9f8c4ce5907f70c"],["/tags/index.html","140e9982075ebac8587461d8e09deae5"],["/tags/中国往事/index.html","59a6115e060c8949ada64e841a42f7cc"],["/tags/中国往事/page/2/index.html","cf2f359c9e0deac46a4455b32e2f7411"],["/tags/中国往事/page/3/index.html","1991510240737b6b5886674fdb75abb1"],["/tags/中国往事/page/4/index.html","364810c324d71436a21f54cff44de8af"],["/tags/冰与火之歌/index.html","487d6475cad5a80d566886c268ff9567"],["/tags/冰与火之歌/page/2/index.html","6475c0f1a4cd940779f4fd4b283b843b"],["/tags/拍案惊奇/index.html","06c534dd81746aa7fb763cf77a054cfa"],["/tags/指珊/index.html","57a7547d55e704fbce3a0ec055e2e69a"],["/tags/指珊/page/2/index.html","f7ce2b4119b85c4a7a65a2028d2614b8"],["/tags/摸鱼之作/index.html","bfca6d2cc07a7e20d4b9dd63e63cb004"],["/tags/日常/index.html","282aae5b1476ababb844c8e1345db138"],["/tags/日月凌空/index.html","a6ba884541dfecd9bf03a4a514859807"],["/tags/柠梨/index.html","38545441967332c43f330aa190348fe1"],["/tags/柠梨/page/10/index.html","f3c98691dff07aff79406d5cc8cc13be"],["/tags/柠梨/page/11/index.html","4a2266fbb813894d3e08e762641a75d5"],["/tags/柠梨/page/2/index.html","9594095bd7ec339f04592d8ed71f282e"],["/tags/柠梨/page/3/index.html","ecdc95d2c9f52d2c9de0220cc7567f01"],["/tags/柠梨/page/4/index.html","c5fdae5559c82a97fc3b481b80a5642c"],["/tags/柠梨/page/5/index.html","c7cb0e57df8b5158457fbf2a3d245310"],["/tags/柠梨/page/6/index.html","a29232ea28c02ab575c40e9eafae56d2"],["/tags/柠梨/page/7/index.html","03216b0f66dd113f8278ba36d069e04e"],["/tags/柠梨/page/8/index.html","dd3e577d88a6298c3a739c32ff487394"],["/tags/柠梨/page/9/index.html","5c159731b57c448fe92b4f39bbd3bdf7"],["/tags/残酷法则/index.html","e8b4c5d9b89547faac3f72de81831339"],["/tags/残酷法则/page/2/index.html","30c80a5498a3a43ae3dea503b9a8353d"],["/tags/残酷法则/page/3/index.html","f8f696f1885f9ba46ade8cb72caa0b3a"],["/tags/爱，青春与死亡/index.html","cde571f8ca827aab683b06d9cf82e972"],["/tags/狂飙/index.html","01842287061fe4f50f1f63d14d1197e3"],["/tags/都市传说/index.html","d3a1d76e8a036bc2ccba049375f74cc2"],["/tags/都市传说/page/2/index.html","7fe879e971c6913b6e29d5086cefa44f"],["/tags/都市传说/page/3/index.html","57a52e40b0afc8af9a5f6d00690c482f"],["/tags/都市传说/page/4/index.html","464403b6e28731c4281ce63e60fb37c3"],["/tags/镛武侠/index.html","758b64e614ca6507256acf1f5874d3b8"]];
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
