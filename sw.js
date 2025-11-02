/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","980093f09ded2141a2ed5c9a302ce83a"],["/about/index.html","eba102969c42a70456a854987d4fc7df"],["/archives/2024/07/index.html","36fe9e416a76f2b742a1d39fe6911c3c"],["/archives/2024/07/page/2/index.html","8143c52e850ca02d6bab365f5aa47405"],["/archives/2024/07/page/3/index.html","14f40be4584c700fbbdb9e3749096ac3"],["/archives/2024/07/page/4/index.html","8658ef79632a76aba46b58fd5061c555"],["/archives/2024/07/page/5/index.html","85b16ae705b6a1173b559b065316dfab"],["/archives/2024/07/page/6/index.html","6112f62b1dabb4d0066128d7aabf8974"],["/archives/2024/08/index.html","108c80865c5cbbb4e7c06cc3767f8bf7"],["/archives/2024/09/index.html","71b06ab28d0d88535683bf42f206e6f7"],["/archives/2024/10/index.html","d60984d31959c9b3d6d328a4455235af"],["/archives/2024/11/index.html","f6330d0edd6822faf8b71cfa4739ebad"],["/archives/2024/12/index.html","530c7a7c012307d23c67acfda5bcde3b"],["/archives/2024/index.html","ae259cd7e89e338419a27f80c4e39733"],["/archives/2024/page/2/index.html","160c431f95672d3b9053dee5587275d0"],["/archives/2024/page/3/index.html","c60397a99d358d039f2de3faef20abdd"],["/archives/2024/page/4/index.html","d5686107e6111027038fd233878ab6c3"],["/archives/2024/page/5/index.html","309b227571ff756e83b310fcbe9496fe"],["/archives/2024/page/6/index.html","60521173b40972badf1c7510bfc0d797"],["/archives/2024/page/7/index.html","543376ce6b1c1dfceb74b3eb62c38e7c"],["/archives/2024/page/8/index.html","4eccb837a682d104b8642e0febb98c71"],["/archives/2024/page/9/index.html","7792a73af3c8e7350dca0e016cd5d17f"],["/archives/2025/02/index.html","85da15cf4642e39e35efc30a1b907e21"],["/archives/2025/03/index.html","2f85f573281838459a271d3040a5b348"],["/archives/2025/04/index.html","c4fd1f57ae87dab5cc71bb327a1aea79"],["/archives/2025/05/index.html","066537fb74225af0ccf24e3dd707eec2"],["/archives/2025/05/page/2/index.html","00a5e8086d46c816e2827065eab83288"],["/archives/2025/06/index.html","21cdf171b159de1fdf00719c0204c201"],["/archives/2025/08/index.html","0eff7c6b061fd162b914bea7818623d3"],["/archives/2025/08/page/2/index.html","2adc3a42e933f9a086320b7ec2188c33"],["/archives/2025/09/index.html","0d6b48366d2cbde91f754dc73f2cd256"],["/archives/2025/10/index.html","47d720d87e40deb288d810ecfb733869"],["/archives/2025/index.html","ba72f0affbf8410f58cdf5be62d2d438"],["/archives/2025/page/2/index.html","bc71f49044422429f21bf59deff5e4e6"],["/archives/2025/page/3/index.html","67a8efdcc00a4406074b748fd8a0c9f4"],["/archives/2025/page/4/index.html","9e44b3e15c8e422df93197e58275dd04"],["/archives/2025/page/5/index.html","0c465135e8e4ce83f6fd595c905de484"],["/archives/2025/page/6/index.html","01e8fac29623a73d30f828a22e5f9e24"],["/archives/2025/page/7/index.html","fcc163ff29a41e22a5945612b46d03af"],["/archives/index.html","b19e695bc212ffeb45013931c8db684b"],["/archives/page/10/index.html","b056707f24f081d29e423565900b688d"],["/archives/page/11/index.html","aab42fd1070083c17518da5713c40083"],["/archives/page/12/index.html","23379aa714940eb92e2fff6fa6018245"],["/archives/page/13/index.html","eb221b89a13b15713a8d5f73763fe3b3"],["/archives/page/14/index.html","4f12ebe3672051f1dd139c94c4b94936"],["/archives/page/15/index.html","6299ad4f1e084ae2836f2b0ff833f231"],["/archives/page/2/index.html","2880c153dad8b88d96ae62e82cdb6b56"],["/archives/page/3/index.html","4aaf8cffdd5d342e6bed3aea6f3c3e3e"],["/archives/page/4/index.html","f8cde3ffedeb0c6605caece0cf084d7a"],["/archives/page/5/index.html","b87cbb38a3762e3752a95e53c1ae1415"],["/archives/page/6/index.html","d8906d0e8db436e1f746df3c8b306441"],["/archives/page/7/index.html","eb8f9c7b7390104b300b71da12349885"],["/archives/page/8/index.html","f5019d778aa2a49c43c1eeee006e3e12"],["/archives/page/9/index.html","0bc404e9d21c9b6b7988b7bb0872531c"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/sny3.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/sny4.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/sny5.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","b698a9570ed893b798f8518c215fb6f4"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/sny1.jpg","92158f93aff91b4ea1b1ff8059f2e953"],["/assets/cover/sny2.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/sny3.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/sny4.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","91bb2aa4523f6e336add358cec66ddc4"],["/categories/index.html","7c30bc7b43b13468dc1621c0c980c7a2"],["/categories/与敌同行/index.html","02b40dcb70bfcb4514b4258d460c8f6f"],["/categories/与敌同行/page/2/index.html","33d9225b84ea149f47912d9517858214"],["/categories/与敌同行/page/3/index.html","fbc5dab981ec518729cef89c32809633"],["/categories/与敌同行/page/4/index.html","57cf8d2435833716dd5a21c612eea0b0"],["/categories/与敌同行/第一卷-双镜/index.html","e59f479ea56463bc4dcf0e27a94b8280"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","a2b0c255ac9c8dbc91ece6e071895b9e"],["/categories/与敌同行/第二卷-信天游/index.html","22c7a09cdd8d04e5fc0eb533fa9a85ab"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","9f426556405a8582bb92795c3fccd19a"],["/categories/乐园/index.html","6a09471323529ed4ec27f3fbd85dfabb"],["/categories/乐园/page/2/index.html","235a8c288720e7564661f123b9611cd7"],["/categories/乐园/page/3/index.html","d9cc80fb1f7d0f2d302b06df992c0481"],["/categories/嘲鸟之歌/index.html","9d16b7b85c85ba988ba296ea86e9bd2b"],["/categories/失落的应许之地/index.html","58bff4cf59ec2739ffb94e96ed80e388"],["/categories/失落的应许之地/page/2/index.html","d4c78d770c7adec3e7b4061e754ba945"],["/categories/失落的应许之地/page/3/index.html","7a2cdf04c502f620a2f3a2360f603f0a"],["/categories/月照天山雪/index.html","bb0c1ee5333f6e2638596a593167f518"],["/categories/月照天山雪/page/2/index.html","cf5ae914d1f805071d037bd361c8deab"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","8592f2de2c4fda405fd2cac7f188827e"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","ab83d43007ac6bef831ada87473cdd28"],["/categories/狂飙，乱飙，发飙/index.html","8b9bfd6b4460a51170907577fb5acabb"],["/categories/短篇/index.html","4b08e76d4ee9313765675fddfd12a58b"],["/categories/繁城之下/index.html","a17453c075b6ee9ea0de2bd69d0e8cc5"],["/categories/长夜漫漫路迢迢/index.html","d8d25d0bbace9424d4503225a53cabfb"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b45ff3aeb2cef79464b4124bf3e701b4"],["/css/modify.css","eeb36ec70801603f1631e29679f41316"],["/css/var.css","f45e4278b41c8d5681ed3876da3d23a5"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","294d6d81886412be7103d61a7a5a3d70"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","c43d80480a516e1a5889f514fd5c8e7a"],["/page/11/index.html","885f034ed18a0b075bea05f91731229a"],["/page/12/index.html","f82cc87a322503d3caed1dd3cc04a5bb"],["/page/13/index.html","10ca94605a094529521a3931b47cabe7"],["/page/2/index.html","0b079bfc82f9a2b43ac7617d971a261e"],["/page/3/index.html","df1fa26c23ab7e27ebc446a5158142e7"],["/page/4/index.html","c30df9abf56936b91d3900b7cdec4318"],["/page/5/index.html","aad3ee965b21614b92499d4cb3c78ceb"],["/page/6/index.html","cefde7216dbd630efa14abba2427933d"],["/page/7/index.html","1a832abcb11a8adfcd5d81feace22e47"],["/page/8/index.html","7ded781d0eb6f5a77c0f60e5d99748b2"],["/page/9/index.html","f12cee1c925efae5a6309cda2a5059f9"],["/posts/103655302/index.html","6d6621a9d1d93a4635e8ed14b1e21563"],["/posts/1083795192/index.html","a4f230bc3c656fb1ce96e5149a039f8f"],["/posts/1099216759/index.html","a7b2d5cae83aaa8d9acfd4bfd724b2fa"],["/posts/1104021264/index.html","4137520f6a97dade49362eb31e7fe880"],["/posts/1195093070/index.html","1f1b3378af1578ae6d3dad8143e5634b"],["/posts/12506394/index.html","883f4654037c03a3cfc7c1244fae164d"],["/posts/1272692100/index.html","c9810cf6185d1dd65b615c9625c47ab6"],["/posts/1304356361/index.html","4228c13ca1bdd9c439035f51025326ff"],["/posts/1315809802/index.html","1d93aefe12f1240edfee86fd24a81222"],["/posts/1329165323/index.html","4d3f89b99d0803fb4050ca5fd46061bc"],["/posts/1378666774/index.html","04ec18e8488dc4e6b6343c7309796755"],["/posts/1400613118/index.html","632be70872be940765655c953a05e841"],["/posts/1407316490/index.html","8a8b3ed0f32adbe3aa4972cc3bb3d2be"],["/posts/1434824932/index.html","aae85155bc37b5e7b2b1f92cb6a340d3"],["/posts/1445707477/index.html","472bd4509b6ea9741fea04079898edbf"],["/posts/1465373355/index.html","2ce5728935da9fc6d6f79081ed7aae77"],["/posts/1500385898/index.html","7fe8a52870fc0826c321cbae7ce5c923"],["/posts/1681850936/index.html","7ff8c8bbbc2c47987dc13658621782ea"],["/posts/1688557772/index.html","2163c356f7330d18457d8fd523f4e755"],["/posts/1710373156/index.html","6fc62b212d4481447f26f40f57b4ceaa"],["/posts/1720998546/index.html","16b9c5b9286a5bb207a0d2c5457fe15d"],["/posts/173005120/index.html","a565c46d4f618cd254a03278f4875676"],["/posts/1758837205/index.html","0653d805559f30281c5f2747c815688b"],["/posts/1766000773/index.html","f5d40f2d9bc8c9e16e9ad305f9d6883f"],["/posts/1845581652/index.html","1bc827cbbbae4164aef521ee2a08499d"],["/posts/1859941397/index.html","54dff47a4b627ab11adcffbbc1ce7d67"],["/posts/1988799958/index.html","f640e4f97fcec47668d1357ffddb382c"],["/posts/2080722358/index.html","45d9fcd6b2f00147e40130ef26463987"],["/posts/2192148155/index.html","c4e03d01987527231217a4a35167d9e8"],["/posts/2229302539/index.html","04732fa8ccb9eba113ae93238f2e1d43"],["/posts/2492968201/index.html","4231d01ddb7c6593a03e52b9afdcb72c"],["/posts/2531300956/index.html","f5a8df9063c5b6fc1c6f6a751a4e4f8c"],["/posts/2616893247/index.html","ed44c5450c5ccc26ff720b4f8ab14887"],["/posts/2869217975/index.html","0acb7be4f247f85b1f3668805793f15e"],["/posts/2888068877/index.html","7205ac35bf4072e72e0db5248218eda5"],["/posts/2949714254/index.html","5f28adc11b9ca51e5cd44c3916f00fe5"],["/posts/3002318373/index.html","55ad532059054c948250206bc3fab251"],["/posts/3076558902/index.html","9b7ed5ea7bb0a09b06c95d84acdffe22"],["/posts/3147359483/index.html","2b48d1a26a76a349fe81beb26c7f8620"],["/posts/3191465731/index.html","55f53be73a71868babb9535fe3e980a5"],["/posts/3197223139/index.html","334ae8207f9e74bd0a80ddc7643ac0c5"],["/posts/320179123/index.html","3a7186b3d377a78f0e66ef35b03839db"],["/posts/3300469459/index.html","9d7202e995bd8dfa89438642e4709c3f"],["/posts/330870226/index.html","e681507e7cbb95a21c026532fb2d6eba"],["/posts/345507944/index.html","48ac48b35eb03e24bb5de98d3571aa3d"],["/posts/3459697331/index.html","3c4a4ace85c0febfb0145d6fa918b373"],["/posts/3489395119/index.html","6b795c9b61fb0c01ab593cf315e16832"],["/posts/3525870963/index.html","19fb2c5638fc3a6c7ad72bc78cfb6ecc"],["/posts/3591144765/index.html","3c722c7243c33cd087948ef080891158"],["/posts/3602722865/index.html","63474783db6eccf468bbe7e3f0583047"],["/posts/3640780602/index.html","8429eacc2eb800f6c76048fe523cb05c"],["/posts/3679626959/index.html","a587cb876999961a48dfd94ea7d71c04"],["/posts/3699598685/index.html","586de5e1d8b0ff1ca2977e542fcff98d"],["/posts/3712900673/index.html","af7d036714e34fd6a73274935c03e90f"],["/posts/3770599674/index.html","a54476b2cc792d9d574e85e9bb46ddff"],["/posts/3788666127/index.html","680da03b6738bb24f9f039cebc965f1a"],["/posts/3935350387/index.html","a561ed1cfdd279a90276d9e203c73896"],["/posts/3948778863/index.html","776b0dbdc68ed35aef0b631ea4473062"],["/posts/403803703/index.html","f20789659b9f920ac743c77111a7e821"],["/posts/4041933047/index.html","09f80002ba35958915b238e497dfd020"],["/posts/4083669729/index.html","2affd9f72a3af5ba96a25d9f5f3dd908"],["/posts/4110582124/index.html","ebb01dbc665e11e8544b5a3703f27d92"],["/posts/411074811/index.html","c38ea86ea4eedb07855831c3293e5f3c"],["/posts/4113963045/index.html","e6384f4878b6030389d39c94c44e3cee"],["/posts/4163174813/index.html","b710b2221f516ef3d4bc67c5f4166757"],["/posts/4185022581/index.html","b7b4b16594f2ffd2db7e4dc2d9dff744"],["/posts/4192746113/index.html","df1c0fee8e859eea17808f4f551e30c8"],["/posts/591853658/index.html","dd4eacb8180f33f06691bc306f945666"],["/posts/597050941/index.html","c395d605f67ede38972bcd6ec74e999c"],["/posts/719776913/index.html","168431a07cfac3e68f406af2ac5c338d"],["/posts/741067372/index.html","23666f64539015ad878f1bba2c258a55"],["/posts/776340048/index.html","3ccb7ca7dd47333effcb804109280ede"],["/posts/888354975/index.html","6961670fa04f92a7a2b17548f7bc3e0f"],["/style.css","7412ed4f9b348c8529b5bbdaf840ca57"],["/sw-register.js","38a63bf3fc347ae4a768c11db9d4b287"],["/tags/index.html","f38640c1c548a3bbe31e79f6ddfb97de"],["/tags/中国往事/index.html","fa7f32ff55c495eb5039bc695e3fe5e1"],["/tags/中国往事/page/2/index.html","b3440506ef2432f546678d58c4375fcd"],["/tags/中国往事/page/3/index.html","7f995ae14fb66d1780509b1dec22e11a"],["/tags/中国往事/page/4/index.html","32ef5b7acfabdfb3a6efd6d6dbd943d2"],["/tags/冰与火之歌/index.html","e74d6611063a66b017fe140f0b08bae0"],["/tags/冰与火之歌/page/2/index.html","2e618b1daf5db08b8c263150349c432a"],["/tags/拍案惊奇/index.html","28d06d40fa2aa826644acec78001a07e"],["/tags/指珊/index.html","d4044aa526bc8c43815ac15e6871873b"],["/tags/指珊/page/2/index.html","05672771b6da63256bbbaae268d41897"],["/tags/摸鱼之作/index.html","a8405fdc79c94ed0a90830711cb2104c"],["/tags/日常/index.html","2af767de7154feb5c348ec66d8b8eb17"],["/tags/日月凌空/index.html","d787f790717e8f94c8b37e4f47beeaf7"],["/tags/柠梨/index.html","5880aeb9a7e646523b8f0c8bf1c68fdd"],["/tags/柠梨/page/10/index.html","707603740f1175649495cc6dcb9ba211"],["/tags/柠梨/page/11/index.html","0358ac53d44c2de48b3000a495f31bd6"],["/tags/柠梨/page/2/index.html","eb0af6195eb3cfa09d487e3952e9e9c5"],["/tags/柠梨/page/3/index.html","c55a8c175f31b8cc57a80f0b566d2979"],["/tags/柠梨/page/4/index.html","d509afbe18755d100cd4fe89540be384"],["/tags/柠梨/page/5/index.html","271e7988202e5480f650135926d20f88"],["/tags/柠梨/page/6/index.html","e9542a0069a3d85b3df2680e913654f9"],["/tags/柠梨/page/7/index.html","096a3ad2a00ac2f47eb14908979c699f"],["/tags/柠梨/page/8/index.html","924ae9f92587777864e57800637543df"],["/tags/柠梨/page/9/index.html","0ee2f0eb2fb3afac53088c68c335f425"],["/tags/残酷法则/index.html","5122a3b41a4ad85affa8f7631b7c0ffd"],["/tags/残酷法则/page/2/index.html","2273d2ecae3d0fd7d422b14b96759e10"],["/tags/残酷法则/page/3/index.html","b5294095d2280fb3ec00e76efb7a5fee"],["/tags/爱，青春与死亡/index.html","bda78820f34811ce9048bfaec875dc9b"],["/tags/狂飙/index.html","53be25325825912a515c0fd4938115eb"],["/tags/都市传说/index.html","ad7f15e748469031d88370676b065048"],["/tags/都市传说/page/2/index.html","b6761c2f32ba84667010243843fbef50"],["/tags/都市传说/page/3/index.html","e21a17924be7226fc0dbf5e26a3d09aa"],["/tags/都市传说/page/4/index.html","3196cc2ef4e771807657d0ef00c6bcd6"],["/tags/镛武侠/index.html","f20f76c7610cfc12de584f9610fc40c2"]];
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
