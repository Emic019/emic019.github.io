/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7ec4416758472b61953b52c04edc6a6b"],["/about/index.html","717a5c036aea060e8d72678c93a52c97"],["/archives/2024/07/index.html","0f9ebb281053ab3accba92773257a5e8"],["/archives/2024/07/page/2/index.html","af0e52ff3b9c8bfe1c107876ac7c41ec"],["/archives/2024/07/page/3/index.html","b6cdad3f37813458a9097fd544011f34"],["/archives/2024/07/page/4/index.html","768b1b4f1fa2c8e40594c2ab1624fd5d"],["/archives/2024/07/page/5/index.html","396b5f5e9e878ec7f4b877aa43bc4aef"],["/archives/2024/07/page/6/index.html","3935549863bfa1452d7ca83c9fbcb6e5"],["/archives/2024/08/index.html","8700acbd38e40b7d425217189d8a6a5a"],["/archives/2024/09/index.html","0045d3188c50fd8a89f7e9b9f91bf477"],["/archives/2024/10/index.html","5637bfd6d69c63f60df354acc5c163f2"],["/archives/2024/11/index.html","6f5fb66e3d7da707885bdcb140c36a4e"],["/archives/2024/12/index.html","90d08e460c9c541a26ed79532b948b3a"],["/archives/2024/index.html","c58d6eb630a0d36423bb2505305a30d8"],["/archives/2024/page/2/index.html","05a1267cc0cdbcccf5a2e73259e58fc2"],["/archives/2024/page/3/index.html","0f8b03e3b69cae5e5e28bb9504ed3946"],["/archives/2024/page/4/index.html","270710d7908000fc3e60603679927efe"],["/archives/2024/page/5/index.html","2d85a4e8b08890519241ca8f7fbd1659"],["/archives/2024/page/6/index.html","2e172cc1d279aa87d977ebcbb65947aa"],["/archives/2024/page/7/index.html","1b0f5621711779cae75b94fad09c5772"],["/archives/2024/page/8/index.html","4211e47b8a7f6c1eb9f469ba9738b20c"],["/archives/2024/page/9/index.html","9e76150e2f6a452cdfdbf0383b9dc58a"],["/archives/2025/02/index.html","60a43be8cfe0f01eb5553cf133fd36fb"],["/archives/2025/03/index.html","c06daf158d01bfa26a54a442fd2789fe"],["/archives/2025/04/index.html","a40891e47fb9efdff09c7fa8230fc2af"],["/archives/2025/05/index.html","e79c4cc17a2460b0ac6343d4e41bef45"],["/archives/2025/05/page/2/index.html","300ace639aaff7439ed07c57b6248acf"],["/archives/2025/06/index.html","484c4c87dd1529cd0ca33850e47dd37d"],["/archives/2025/08/index.html","f98bca523e79cfced82883699e33659e"],["/archives/2025/08/page/2/index.html","45194ec317d430bb633ca1794b5198f7"],["/archives/2025/09/index.html","c5e52d9761e13b2ab96c09544b4b3510"],["/archives/2025/10/index.html","f06a6415a8c3cad889de15da88832809"],["/archives/2025/11/index.html","c163b3a4b3c6a268d48b6bb5cd4f66bf"],["/archives/2025/12/index.html","2da419c065f5108eac45be9412ec83ab"],["/archives/2025/index.html","defcae92bf635be13b1e97d559ea32de"],["/archives/2025/page/2/index.html","77920d3d787d02b0f07bed822f74ea13"],["/archives/2025/page/3/index.html","78b6a9063513feec118985449ce88fa3"],["/archives/2025/page/4/index.html","13746647468e76fb95b72592f567bbaa"],["/archives/2025/page/5/index.html","d197366decf688b8adcf0c54252c70b2"],["/archives/2025/page/6/index.html","a9eac9ac922df21d315bd728b9e871a1"],["/archives/2025/page/7/index.html","23e254284f81e4dac6d5a49b4c3e7bec"],["/archives/2025/page/8/index.html","5ce68f799bb7b622b60592132effcf70"],["/archives/2026/01/index.html","4c6fa2a1e6f46f57f6576bab5c6c71b1"],["/archives/2026/02/index.html","363c355ff4f025a9e9a24380841debf8"],["/archives/2026/index.html","c4f2281cccb86fc4d67cd42d5f2fdc54"],["/archives/index.html","a5c65b1fb7d93af588bab170b255eb9e"],["/archives/page/10/index.html","41908c78e9f9bbce12d9b85282d30901"],["/archives/page/11/index.html","2394f28bf3396ca065d8d2360dd383f8"],["/archives/page/12/index.html","0a24099ff75214b7f364c725096f5fd0"],["/archives/page/13/index.html","d2e396901132e555615dc11c9e9fb2dc"],["/archives/page/14/index.html","55332a23b12ce55c086507fa3986c270"],["/archives/page/15/index.html","cd4a57e5192ba5273cbcb1d5dfc8e753"],["/archives/page/16/index.html","26b019512273679b2aec3ed148020834"],["/archives/page/17/index.html","5bac5815683313fce5a3be822825565a"],["/archives/page/2/index.html","58bc07162a4513209bf761c789d96932"],["/archives/page/3/index.html","9b0936d6a7fb55c1f73be59d93256f33"],["/archives/page/4/index.html","541c1d7c7ab9ee74a0c512fd21b862e5"],["/archives/page/5/index.html","9e5b4441e3efb2ad6dd714bf98f2ac26"],["/archives/page/6/index.html","38267918ec504f51c54c79b67d6472d2"],["/archives/page/7/index.html","84b7793327a94641892e26dbc81cb960"],["/archives/page/8/index.html","3ed55b4c0ced9b40bc56c67a2d952c39"],["/archives/page/9/index.html","723896e3f422975af967c650f4173166"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/jybhj.jpg","855051bdb32dac6b6b2214b662e3f784"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/sny3.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/sny4.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/sny5.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/sny6.jpg","12f4fac008c279f4a1f41506995d038e"],["/assets/banner/sny7.jpg","bf0d0ce9dfe8b32ea465559b903bac87"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","da3686999d86f2a74f528e15fe27fdb1"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/jybhj.jpg","f074da0cdf315a64a5d3e8aa3896fea1"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/sny1.jpg","92158f93aff91b4ea1b1ff8059f2e953"],["/assets/cover/sny2.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/sny3.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/sny4.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/sny6.jpg","0e1b91307940debd8b8cf90e3517268d"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","91bb2aa4523f6e336add358cec66ddc4"],["/categories/index.html","e0ba8decf7775adbc2fae9bc2f24f483"],["/categories/与敌同行/index.html","e0386281ce94c2f0595e1d204b83ad8f"],["/categories/与敌同行/page/2/index.html","78415d000282dc1d849fa947ba0fccc1"],["/categories/与敌同行/page/3/index.html","29642367b9494703108366f4280e551f"],["/categories/与敌同行/page/4/index.html","bb5925cb82d0e34b681941530bf084a2"],["/categories/与敌同行/第一卷-双镜/index.html","c9ce2fba23f208e00a877e9aa9135fe6"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","4ce557bbd240a8d94cb616fe8b7c4b88"],["/categories/与敌同行/第二卷-信天游/index.html","ffdbc2175cae49ff8d5b61775843e086"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","f55d0568af5fc19bc1caec92aa49c900"],["/categories/乐园/index.html","cb402a1a10448b8d9c456a8e535373e4"],["/categories/乐园/page/2/index.html","a84d8b0a04e7557ee1ad30e5a084d795"],["/categories/乐园/page/3/index.html","44c5e3c61cd069afedfb9d60dfbaa156"],["/categories/乐园/page/4/index.html","1478fdd74086f2fa69747dfd82f0a7cf"],["/categories/嘲鸟之歌/index.html","282bdad1a143efce5dd1718109c50c93"],["/categories/失落的应许之地/index.html","8274df2ff4069f8420de9bc62a223d04"],["/categories/失落的应许之地/page/2/index.html","3be8e7ab48bef4326c0f16bd273eeebb"],["/categories/失落的应许之地/page/3/index.html","d5eb8811671ad01cd7802e8f332f4794"],["/categories/月照天山雪/index.html","8ed8fa00af50ea9874223019d1831b07"],["/categories/月照天山雪/page/2/index.html","6c26ab1368c6e9bb748ac5a934db182d"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","255296196c4dcdeb9a9ed1472d3f0e63"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","e941713e29740b43924745eed246a762"],["/categories/狂飙，乱飙，发飙/index.html","e1d5cdc58ef9a99fe8b7ec7abd78a4b8"],["/categories/短篇/index.html","f6aab1af361e7c7364dbc8ad3cbfb128"],["/categories/繁城之下/index.html","8fc095237b6360a3f411c850cfa36ed0"],["/categories/繁城之下/page/2/index.html","8dc84c5477b3f744e7d465ba841e3887"],["/categories/长夜漫漫路迢迢/index.html","3c1634a0b677ce8ee15ed3991cdb46fa"],["/css/custom.css","678f8307ca5749bf58ae546982e0eb4c"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e5cfaed05f1980084d4e33083a1b0767"],["/css/modify.css","8a2a8629809ee9ebf33a880d22e97494"],["/css/var.css","9968023e63a9fb6e687528acbf383e7c"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/footer.jpg","ec252cde7c6d58359def0368b1a9a882"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","1106757e3a76626768e97e3630766316"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/theme.jpg","6fa6f8ecfe50d0b57187af9bf83254e8"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","03a8fb0305375f9ec27e7391cbd3584f"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","f45b9b9369ec8928f0d115bdc76bd445"],["/page/11/index.html","45297a45f7a74290d61d73d8395f88be"],["/page/12/index.html","a8388d9c67cc7b9b93824ba927e29ada"],["/page/13/index.html","95515f62b79e598472f19950cc74b77b"],["/page/14/index.html","7413db73aa022c36868e3d51cbe45be0"],["/page/2/index.html","31cfb0549272559de09f3a4fe4fcd328"],["/page/3/index.html","98b0c5ad13317c4f3b34c73c38e3ed85"],["/page/4/index.html","880ec702d2f7e71d59b5ca4e992aca94"],["/page/5/index.html","31413326e1dd424b5e0add22b8e7da82"],["/page/6/index.html","351433e7ab650e5ba899e56c6fc24a61"],["/page/7/index.html","3ea3d70a61e650772756b16ffeb26666"],["/page/8/index.html","85d502d05225ed16db4df58388cdf0c7"],["/page/9/index.html","4357a5be60e7cfcc0b5f522cbd047143"],["/posts/103655302/index.html","b2b36188ee4d8f8c203a266f0137ad04"],["/posts/1083795192/index.html","fa82c41c076db3338d310fd422f6766c"],["/posts/1099216759/index.html","9761d32b42490fe4283fd52f9efcd3ba"],["/posts/1104021264/index.html","fef660a1d1bbcd7bd6e5b2794ec0c0b4"],["/posts/1195093070/index.html","cf77fb470574b8e9398448f0ea52f74c"],["/posts/12506394/index.html","a97bd3e1c1fbd4c6d1b8a52ad1c9e0f6"],["/posts/1272692100/index.html","823cda1d5b46f1d39d46be9d3c2a03a8"],["/posts/1304356361/index.html","80efc9cee074fcef4931c5fd397d675a"],["/posts/1315809802/index.html","7ced7926cf4e1d381ffd0aea3c1a2603"],["/posts/1329165323/index.html","71a27112261227f8241e2cdafedaac04"],["/posts/1378666774/index.html","06830df3139a18c21e6610a3a492a30a"],["/posts/1400613118/index.html","5ec1fed8e1367f33e34617813a8754bd"],["/posts/1407316490/index.html","328eb279344afbc33a472765f8890cef"],["/posts/1434824932/index.html","4cd403fdd8ca9fb18c023cd63de388ef"],["/posts/1445707477/index.html","d147b94f232eeff38a4a92390c1a192e"],["/posts/1465373355/index.html","51b3dfe2f4a6d9a5072803b85e9193ac"],["/posts/1500385898/index.html","624e3aa1bebe1b1471066519c36581b7"],["/posts/1681850936/index.html","6c122a2644109b90ffd701c2cba52473"],["/posts/1688557772/index.html","bdd44d255fc18183cc967729b8dde3ee"],["/posts/1710373156/index.html","7b32d329752459cda89fd369a7115177"],["/posts/1720998546/index.html","2faa2b22de195903f224dd063b4e5902"],["/posts/173005120/index.html","7b7b939b5d552a1219645ba261d3fde4"],["/posts/1758837205/index.html","46d908d6585fb34d449ce26fc4923329"],["/posts/1766000773/index.html","85171447d1948710acef3a2eb203ec05"],["/posts/1771063266/index.html","dc0c3bf4351d422aa69f55dda3a08e4b"],["/posts/1843191030/index.html","e68a3915b78af4e1a02e958f419302f8"],["/posts/1845581652/index.html","c10e0180bc5532d82fbee2d9ea163e42"],["/posts/1859941397/index.html","013a412637f0b5ec41dc99c52c5fc158"],["/posts/1988799958/index.html","84b31b65c8f1d55e56fdae28a5701356"],["/posts/2080722358/index.html","1d25340d0159b06dfe0e19706fcd44c5"],["/posts/2142008032/index.html","178ff9a3f283e918211123247f4a8d82"],["/posts/2192148155/index.html","20ca71e8cb812ed969d5d50870193368"],["/posts/2229302539/index.html","1a051f1f86349da37cfc36f63da42aac"],["/posts/2278904638/index.html","968b7d7a0e5c18943c08ce7d14cec5cd"],["/posts/2303668433/index.html","d8758e16981428b569f5ff6a625d5da6"],["/posts/2492968201/index.html","00529d95d8c3b6b450d429acc0eff1fe"],["/posts/2531300956/index.html","b4aa6d0fff67a23af5617657180f9ae2"],["/posts/2616893247/index.html","8ee36af3669aad3f82e5ef61a993d413"],["/posts/2700096901/index.html","beeb4280050069c994634af2477879d6"],["/posts/2869217975/index.html","9c01031d470a54b6255ee98f710d888f"],["/posts/2888068877/index.html","7e6908232061ce1d9d658e5a77cc5d6e"],["/posts/2949714254/index.html","16cb74a52f048c490e38a8c6cae74e10"],["/posts/3002318373/index.html","8ad20d49de9a6d8a21be4769024d12a3"],["/posts/3076558902/index.html","993822816625c7e3ef997e14f389659c"],["/posts/3147359483/index.html","31abc033e44865100cee0caca9b69fec"],["/posts/3191465731/index.html","79329639483f9baafff37d4b9e5c5e7e"],["/posts/3197223139/index.html","a1c1d0b9ccfb836181b877d4037e7961"],["/posts/320179123/index.html","d45e839a1138ff3b91905ebd450cd417"],["/posts/3300469459/index.html","7ec4ce9efddc786c40725dd1b6affcbf"],["/posts/330870226/index.html","2366b140c5a298c5cb23653ef8d62e40"],["/posts/345507944/index.html","8d1edb50044223ac211646c6b003b29a"],["/posts/3459697331/index.html","38319a344bf9db575111045c010c877c"],["/posts/3489395119/index.html","d0733e2b9e478aa990954389a4ed0c42"],["/posts/3509330055/index.html","abc31b1158435db14d82cfcf1a3ee8b5"],["/posts/3525870963/index.html","2ce35877529e1031829b83ff11cf540c"],["/posts/3591144765/index.html","0b8f9a17d6e5111166e398a550373020"],["/posts/3602722865/index.html","042ee51dadf11e519f305bd671cccf15"],["/posts/3640780602/index.html","bcd9be2a77ac2afa5ddd0ff84dc37620"],["/posts/3679626959/index.html","9fe3217eea91335e24ffe19c4fbf638b"],["/posts/3699598685/index.html","f43f39922c65d7fc3b6af94cd3323951"],["/posts/3712900673/index.html","fd0185b1e478e3d4254674175717a064"],["/posts/3770599674/index.html","7809c7df31c1da35de298eaac90050ac"],["/posts/3788666127/index.html","56cf96fea1cf949bbc2b231078921223"],["/posts/3935350387/index.html","fc19140a35471bfda43b011423b3b280"],["/posts/3948778863/index.html","ccbc73acfe7173bb5ea4706c7ba3fe19"],["/posts/403803703/index.html","d6b3620432f88a25d139d4a8d499a132"],["/posts/4041933047/index.html","82f2e6f9bc6a810631e3bb51269b9da9"],["/posts/4083669729/index.html","3b1501df9c53e16eb92601a90b0a84f8"],["/posts/4110582124/index.html","fbef3d0742a382baef6af41b94fb7603"],["/posts/411074811/index.html","e1b374f531a57bf845aec0f213e3e400"],["/posts/4113963045/index.html","cbbd7b23efda3d2878cdb845bc6c858c"],["/posts/4158435381/index.html","a4d10f1040fdb3efa0df36744fc5061e"],["/posts/4163174813/index.html","760f77d5dfc04f5a8985ffab5d3a8bbd"],["/posts/4185022581/index.html","efa61bb17db16837a5f49781f8b73056"],["/posts/4192746113/index.html","75f48c25f0a170dd85774a6ea0feed3e"],["/posts/591853658/index.html","3be9d22bdefcbf16092b2c6eaad46caf"],["/posts/597050941/index.html","70dd964ad4ba46703207cf01c615cfde"],["/posts/719776913/index.html","dda10ab30d7be6c1ff150a0e39fb9925"],["/posts/741067372/index.html","e1d3a9685ab5e5fddd0e991d973670f7"],["/posts/776340048/index.html","ebf607aef39abf1a81b1105d1c435053"],["/posts/838031284/index.html","88a0d4a3e5fd63a1dee80b311179ab43"],["/posts/888354975/index.html","178306aaefece76bf252d07bb790eebb"],["/style.css","0864674c8807e489bf5a35bd1549339b"],["/sw-register.js","9a40279f8de07d7711b761dffb4caa06"],["/tags/index.html","9c8447755128a6851f072bf7d51263ec"],["/tags/中国往事/index.html","74fb5d0a945f958718285a6aca4b7c06"],["/tags/中国往事/page/2/index.html","e45240e756a6f511ec880f184d6637d9"],["/tags/中国往事/page/3/index.html","2c69a755ec57b8c74c1824e148b492df"],["/tags/中国往事/page/4/index.html","7d8bc061be5d4f722c0e22b23c362d67"],["/tags/冰与火之歌/index.html","209fe4b580136c687b498a544d2c5cc2"],["/tags/冰与火之歌/page/2/index.html","21be5568dc4fd0de7104d8c9dbab63ea"],["/tags/拍案惊奇/index.html","63476151bc6bb34ecdeb048c4df79b93"],["/tags/拍案惊奇/page/2/index.html","c20372c3c8afdabcd1661e4bdcef4e75"],["/tags/指珊/index.html","86ad4aab0d1df06505959b5ec24faa94"],["/tags/指珊/page/2/index.html","93ec0cb318109ddca1d61681bebbc2d9"],["/tags/摸鱼之作/index.html","7e550ce2c81a1eda599b5b81e0c00ee8"],["/tags/日常/index.html","daae2bd9eadbfd1771ac646b4b57e11c"],["/tags/日月凌空/index.html","0a9691eae8bca84f3c9b86e924c77dc5"],["/tags/柠梨/index.html","349075d4275b3f89dcb7c471671030f5"],["/tags/柠梨/page/10/index.html","8f7b4ce6c7c7444186254601aca1d9fc"],["/tags/柠梨/page/11/index.html","0927d7f9fc67992b83288947fb94aa5d"],["/tags/柠梨/page/12/index.html","dc7c1456c740b25116e51329d12443f6"],["/tags/柠梨/page/13/index.html","b048249735bbbd1dee5354518f61baa8"],["/tags/柠梨/page/2/index.html","fb3b57c46a7794fb5ee53e14c2a91fc0"],["/tags/柠梨/page/3/index.html","f70081ae9752f0944fd772ce2d8aa47a"],["/tags/柠梨/page/4/index.html","075c4ef2b8225a45c627897c8c658e63"],["/tags/柠梨/page/5/index.html","18fb320b758ad52acacbe56c5ba64670"],["/tags/柠梨/page/6/index.html","94e73752740a275f28216bf3688e3f7d"],["/tags/柠梨/page/7/index.html","6c2b4f1461bd7713006b453f76c7fc04"],["/tags/柠梨/page/8/index.html","af9e81fb48556fab593bb89897f8c03a"],["/tags/柠梨/page/9/index.html","da0bdd0033a342a71360cd1593acf35a"],["/tags/残酷法则/index.html","d1f488b9e8c60433d2295c56f97afa1b"],["/tags/残酷法则/page/2/index.html","c0f708d3eda49d64091f4be35ae045cc"],["/tags/残酷法则/page/3/index.html","37345f0ffc8aa56672f36e9ca94e34de"],["/tags/爱，青春与死亡/index.html","0052077d41174478becd5894ba833cfb"],["/tags/狂飙/index.html","6f9ebfe2a30f86ac2a9125a001f02415"],["/tags/都市传说/index.html","69919849c3bb34daa747cb7ddbd5fa2a"],["/tags/都市传说/page/2/index.html","4e2fe781c49b37b5fa8fe75b909e79e4"],["/tags/都市传说/page/3/index.html","3ec2d72a7fa10e21cde07c5a5c89bc2b"],["/tags/都市传说/page/4/index.html","ed85ae6161888f3960a6b7422b6499e3"],["/tags/都市传说/page/5/index.html","ad23ff47cbea68af5d0a193e5735024b"],["/tags/镛武侠/index.html","ee8e1a0490385bb13b3ced93a8b9b49e"]];
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
