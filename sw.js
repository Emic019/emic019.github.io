/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0a44c278c2603a4dd2f52adf3f617c22"],["/about/index.html","db8bd2280f2bcca576320ad60e42fd4f"],["/archives/2024/07/index.html","4ec106b56fbd5013753ff796ecc5c15c"],["/archives/2024/07/page/2/index.html","eb7b1fcffcba3d9b43856a3f7d952333"],["/archives/2024/07/page/3/index.html","096915adb322a0423e8c1d7178e7507a"],["/archives/2024/07/page/4/index.html","aa678c245940ddb350fc222f7bbd0886"],["/archives/2024/07/page/5/index.html","fb3c50a1ed96b189dd45fadcbffa5913"],["/archives/2024/07/page/6/index.html","273124c204416fa252e9d702349e7295"],["/archives/2024/08/index.html","2dac91fde1a8580c271acffd4be8fdae"],["/archives/2024/09/index.html","e4fc1199256e01e076f05f573e9fe7cb"],["/archives/2024/10/index.html","ce7064e4ae01fd032f6dd4e1a9460088"],["/archives/2024/11/index.html","8ee7e5fbab2d295811efc313451c2487"],["/archives/2024/12/index.html","60e90b9beb031e9c18550844fefb090c"],["/archives/2024/index.html","852a9bf9309b707fdff24bc5669f163f"],["/archives/2024/page/2/index.html","5189825f798f279a65210115048235a0"],["/archives/2024/page/3/index.html","89cd5d415409e04f8f55ae1551f0f9e5"],["/archives/2024/page/4/index.html","4a386c722bba50f18b5dd644451e1e0a"],["/archives/2024/page/5/index.html","0d81486256f979b72468160ae258a334"],["/archives/2024/page/6/index.html","79f8fef0f61ca734528589928f402a6d"],["/archives/2024/page/7/index.html","4f081022c6b11fee61f9f0b26c7794da"],["/archives/2024/page/8/index.html","c7e41b3f1c7bba0b520ec2a8013406ed"],["/archives/2024/page/9/index.html","c758fb260ad7b0228769a9131daf4df6"],["/archives/2025/02/index.html","5dbc3a1e9fc2ac4585396c08e1cf6663"],["/archives/2025/03/index.html","fb060646e0351650f4bde9e02dc4ae81"],["/archives/2025/04/index.html","246ffc08bc4dbf11a75a752d56bab96e"],["/archives/2025/05/index.html","3adb3dd3cd279349ac906c84217982a4"],["/archives/2025/05/page/2/index.html","a2ca20db5d9ea1fd7fe08dface407e67"],["/archives/2025/06/index.html","02fdc23cfe3ecd30b8f65ddb5c6c7eb9"],["/archives/2025/08/index.html","81095c346a6067c9f53bb82777133f77"],["/archives/2025/08/page/2/index.html","85105e88ce25ad0d6bcadf3a6a46ece9"],["/archives/2025/09/index.html","169788c7ced237ca4da2a42798b9c119"],["/archives/2025/10/index.html","7511d0069c7dd45e4a352cf98e4f6a19"],["/archives/2025/11/index.html","885803832c1600c4a29f994769adc83b"],["/archives/2025/index.html","e7c4a51ef397a57ec732fc3fd73551bd"],["/archives/2025/page/2/index.html","197d0bd11ec6ca6a373afcb9a0cc607b"],["/archives/2025/page/3/index.html","119ceae7da51bd0717aa72f40ef17569"],["/archives/2025/page/4/index.html","41f4b821fddee08a0a67c0047067f142"],["/archives/2025/page/5/index.html","2fc44892aa47b5d2be1c5f3bfa54ab27"],["/archives/2025/page/6/index.html","53a1eb0614da8f2b97844fc57ada6671"],["/archives/2025/page/7/index.html","18b45398a470ab2aefd0ae258d96f053"],["/archives/index.html","929a2c9c77496d94cb6897198e317afb"],["/archives/page/10/index.html","c0ea8399e2eda343ddcac6cd5879ab9f"],["/archives/page/11/index.html","ffb0a5fdfbbdb545d92feb77e1be6373"],["/archives/page/12/index.html","2a9e3df1c1e42c98c8761861e3a9a539"],["/archives/page/13/index.html","4dadf3904c9d82daf6e18ee907c2b491"],["/archives/page/14/index.html","7bc8a789e61a5e16620712d63c1c18bf"],["/archives/page/15/index.html","9ad92a20b73e19616f561fc62486376e"],["/archives/page/2/index.html","528a76c0dfe7a6af8d98a8359952b2d7"],["/archives/page/3/index.html","ee8721edfc9f826be93636243734f7c0"],["/archives/page/4/index.html","437999e72db9aa23b32beee1e32cffbe"],["/archives/page/5/index.html","e1ff89e7b2b37e4f5ecc3e7589d5311f"],["/archives/page/6/index.html","497556dc24e01240bb29f6e5f555337b"],["/archives/page/7/index.html","092d57a8b2b25bb37dbfa117ebc65e73"],["/archives/page/8/index.html","92806cc9f0f8bc227484c59615d63a57"],["/archives/page/9/index.html","f5e4f3cffe78f770e66b2d1f17997f13"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/sny3.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/sny4.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/sny5.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","0a0776acd551d0e8cd0f399b64c55cd6"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/sny1.jpg","92158f93aff91b4ea1b1ff8059f2e953"],["/assets/cover/sny2.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/sny3.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/sny4.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","91bb2aa4523f6e336add358cec66ddc4"],["/categories/index.html","ab85e3f7cc5fd83035e0af24a61e28e2"],["/categories/与敌同行/index.html","b78c51378fc8733b1722befec0d3de01"],["/categories/与敌同行/page/2/index.html","aafb81aa33b1e6e830d18c1628e76f2b"],["/categories/与敌同行/page/3/index.html","ff6b0f6796a79a6da91e63ca015821c3"],["/categories/与敌同行/page/4/index.html","a512a0b1c7bf38258787f1d59a152e46"],["/categories/与敌同行/第一卷-双镜/index.html","d3a33c9a624db9dd2d0c41db3a7905aa"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","272b3549af0e83579d1e54c47e97ce63"],["/categories/与敌同行/第二卷-信天游/index.html","61c1c0ec666980f35f895bf93c05760a"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","3e3af31a2d57422afe7f8babd4135c28"],["/categories/乐园/index.html","d3ba2524d5e67e5fbb3b4438ff389b1c"],["/categories/乐园/page/2/index.html","96a64661e5ddd09be23ddfb87b41297d"],["/categories/乐园/page/3/index.html","f12270b8070f1e8c3543f369ae4d4672"],["/categories/乐园/page/4/index.html","ca24c573c34992031b16bfd9a57eee99"],["/categories/嘲鸟之歌/index.html","9d35bea3aa51d4bc025006f95f0ab0ef"],["/categories/失落的应许之地/index.html","d2c0ab801206e927f4e83d6c994628a1"],["/categories/失落的应许之地/page/2/index.html","e0f853626f93b831d55559a3751f4ef1"],["/categories/失落的应许之地/page/3/index.html","b409b20f260e84ddcc5d92e0d7d2b339"],["/categories/月照天山雪/index.html","b07274d6a98da23e92c770cebbdc71ba"],["/categories/月照天山雪/page/2/index.html","11e4c7f8179d6e9307070061a978d780"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","aa986384cb8d8e6cc87b162535ffb088"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","75b0645aeeabe5a750b685fbf389f932"],["/categories/狂飙，乱飙，发飙/index.html","e3c125457c75d8e3c5e9f03739fd432a"],["/categories/短篇/index.html","a04a0798fc851e00d1728551b7acf5b3"],["/categories/繁城之下/index.html","104c28a40b777f204017595137e243e7"],["/categories/长夜漫漫路迢迢/index.html","a2d773c3c4bd9918a34eca1ff81bdfd9"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","fc3653867d379291d222a13210ebb580"],["/css/modify.css","6d71cd92c6bcaf0ae039ccb605ffa38a"],["/css/var.css","b5b84c413e111914d57ad25c9dc56f6e"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","d4091521514f8249a71ec263db59b7fd"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","9cc9dc8246cf743c6f5176ebf9eff613"],["/page/11/index.html","a23286a657fb23fd1086b1795e8374cd"],["/page/12/index.html","00fccb20a73d8a2dcee0fb53fb208123"],["/page/13/index.html","86ead6ebbce601f7a6878313ffa79723"],["/page/2/index.html","a68081a2faa7fd4eee1d697a1fe93088"],["/page/3/index.html","0ac7894c7587ff1f5cc677157c309917"],["/page/4/index.html","dbe82d92b57e7261b18bb3b9b10d8933"],["/page/5/index.html","568230ea2f0497aca8371afdb224b1c5"],["/page/6/index.html","7cec35408bc55c41707601a1a45a7a4d"],["/page/7/index.html","6710bbaac068aa868f5742054438148a"],["/page/8/index.html","dcaaad204a7b90260076c8739288fa6b"],["/page/9/index.html","fdf678ae25bd023f498188f07dde7464"],["/posts/103655302/index.html","0c8c44c67159f1304de3866d34913c64"],["/posts/1083795192/index.html","f9832dc4970c620134104a3b0367c2ad"],["/posts/1099216759/index.html","4060982452c45ec641999d1f99bfafa2"],["/posts/1104021264/index.html","cf5c3805e75a0bb368758ccac68ae3f0"],["/posts/1195093070/index.html","228107d0e79ba429b7139e24aab6aea6"],["/posts/12506394/index.html","d0288a3e0f61a3f75fb03e0bbe7c55f8"],["/posts/1272692100/index.html","f3dd0f41922273cfce715f198de68722"],["/posts/1304356361/index.html","a96f04e1429413a43356525c9af605f8"],["/posts/1315809802/index.html","755779deb0fa2d116baf64b3a3ed01d4"],["/posts/1329165323/index.html","f145d8974b8658ef8445f337dbea96a7"],["/posts/1378666774/index.html","4d747aa120244dea2ef0172bae85db1b"],["/posts/1400613118/index.html","1d1f96192092071ea3dbe3c2445f86ba"],["/posts/1407316490/index.html","2f88c107f01381f49a6ded631d473537"],["/posts/1434824932/index.html","49bcdbf42d8c4c71416ccf1d7669d18c"],["/posts/1445707477/index.html","4170f78f2fd8e116a453535fecafc49f"],["/posts/1465373355/index.html","a8785a5992bf6f4d1cd27d82a3e849e8"],["/posts/1500385898/index.html","b3db12a34cdb1ffb3735c71d4d734019"],["/posts/1681850936/index.html","e13876f16ef1e82b59f29f7f15f79ca9"],["/posts/1688557772/index.html","7dc086292f3def0c64ee1c27b447d00e"],["/posts/1710373156/index.html","064e307fee8cc1227c6ff72c402d5ae0"],["/posts/1720998546/index.html","5e308030e40e76b3bddc73a8fd5cb510"],["/posts/173005120/index.html","1ffa69294851a35830d6791fb6b425e6"],["/posts/1758837205/index.html","5e7ce87415f82cc3a8cbeebeca2d796e"],["/posts/1766000773/index.html","9a4a980b7fe4bb94dec4606d5cc44ff7"],["/posts/1845581652/index.html","040337a5d3948ce334e7c84106c9bacc"],["/posts/1859941397/index.html","0f102da9cda203b6d2d293db3195c854"],["/posts/1988799958/index.html","42e01da7e87068f62f3ecb413549d0e6"],["/posts/2080722358/index.html","1e1521676cc1dce70f97d073d77aa177"],["/posts/2192148155/index.html","694f9cab6843af6c7151e94c3161c026"],["/posts/2229302539/index.html","1feccd03820cf104c59744918fcb33d6"],["/posts/2303668433/index.html","548af31a03e8e9d7a6b8641341192c21"],["/posts/2492968201/index.html","c2ee17e902515a1a11ecd512d43c246f"],["/posts/2531300956/index.html","0bb5527db6acdb47241a29ea4a325dbb"],["/posts/2616893247/index.html","a8dd12ae07fe3fcf104ff488b8859bb5"],["/posts/2869217975/index.html","0d7c3868e06723ed6b024de5b35f8bc7"],["/posts/2888068877/index.html","8b73b7a883cda8e9b9befe0f7baf167b"],["/posts/2949714254/index.html","968f7fd3618ff4e46faf837ab7a42ff1"],["/posts/3002318373/index.html","35ebb7a6bfc858440de7b438c93969a4"],["/posts/3076558902/index.html","a13a7d3f15f68e6e2e5072828eb7d816"],["/posts/3147359483/index.html","b0029eba6dfbabca49cca83bd3882604"],["/posts/3191465731/index.html","b38a6832e40c04d5216df0e452042c6a"],["/posts/3197223139/index.html","ac1e240026b615cc587e47a02f933c14"],["/posts/320179123/index.html","25a0a6f12beeff17e59f68b90529d1e0"],["/posts/3300469459/index.html","a84d9006301ce52a8d1e694a3da69fae"],["/posts/330870226/index.html","de96b6c13c13b6dfc4882c52e39e9c82"],["/posts/345507944/index.html","08a1df4eb720a98006b20aea7800a213"],["/posts/3459697331/index.html","bb167598b7d086b122242d4a1a82e867"],["/posts/3489395119/index.html","1f2ce4c15b850a7563394c77f599a22d"],["/posts/3525870963/index.html","dc2bc616663d03dd763dd2edba59b3e8"],["/posts/3591144765/index.html","589ba2e92f7fd6a55d83d0962b48f23b"],["/posts/3602722865/index.html","f3f7530af9719fc50a40cb19722ec042"],["/posts/3640780602/index.html","d0ae323f79a4b1a11e5effa22475a8fe"],["/posts/3679626959/index.html","bf165d78488e8088a836ca0941a83340"],["/posts/3699598685/index.html","36501ba939bc6b852a88d00411e2b4fc"],["/posts/3712900673/index.html","c91347676dba9bf6be0323c7e3aa5e00"],["/posts/3770599674/index.html","1845b643e7fae64b9b59525510117775"],["/posts/3788666127/index.html","b5e3d4c17baf7ab24f2b2f112effa017"],["/posts/3935350387/index.html","55041b832297abe51f3aa9c063219b68"],["/posts/3948778863/index.html","529f8d3024670110e6462b5ccbaf65a5"],["/posts/403803703/index.html","e3c602d6a52913728764be8ed3e43200"],["/posts/4041933047/index.html","023cad37cc47a30111a3172ad98ebb3d"],["/posts/4083669729/index.html","a47096f6cb241d2ada2a2debaa5f339c"],["/posts/4110582124/index.html","1212d3b3359b42dab32af6e38509ebaf"],["/posts/411074811/index.html","3b479b0e258b205b0782bf01a7515da8"],["/posts/4113963045/index.html","126bb11bf483acab5122e595b897dc29"],["/posts/4163174813/index.html","00e6399f9d11f52582dc35de437a825b"],["/posts/4185022581/index.html","43652d63f55028102d7ea40aee4e524e"],["/posts/4192746113/index.html","752b8c13e9ec33bfa4acd876b529af14"],["/posts/591853658/index.html","7434fc515c352562bf90d6f9aa6ec9b6"],["/posts/597050941/index.html","b0ebe30176fa6fee2df3497d4006083e"],["/posts/719776913/index.html","e808f3bf1a6bffc255ad52d6a8aa3180"],["/posts/741067372/index.html","7ddff8010417cda43883696a11413bd4"],["/posts/776340048/index.html","7a2bf77b2909c6be752732e724ffca3b"],["/posts/888354975/index.html","0695b4e7cdeba3cc20b4d80415614649"],["/style.css","f8253d2d152739247aa017786b60cc0c"],["/sw-register.js","be3d8102065573c6a2ed64e443791336"],["/tags/index.html","fe792dd1e9e8e7c476e5b46520bfa3b1"],["/tags/中国往事/index.html","ba45c49807da9b4de518337cf396691b"],["/tags/中国往事/page/2/index.html","4210e868164e1779bbb53ec8f259a8e5"],["/tags/中国往事/page/3/index.html","a8e13fcbfd8b9d2a4436d93155e4675e"],["/tags/中国往事/page/4/index.html","9336bca635c86a57aa5b7948c7a805ca"],["/tags/冰与火之歌/index.html","fbcf5a918532619c58615e69648338cc"],["/tags/冰与火之歌/page/2/index.html","ba63f3c30261a7dde79dbd639100c3d2"],["/tags/拍案惊奇/index.html","ecb42f711bd044740052e120c5f09f41"],["/tags/指珊/index.html","43b634b02d64e9c26f315c41df42ba27"],["/tags/指珊/page/2/index.html","9650ebf345aaeafe7df9c6b7b4abe93d"],["/tags/摸鱼之作/index.html","9bcc66e2cb31f8f9c50407218e06df65"],["/tags/日常/index.html","c20ff658a60cc9a0ac78c100c1d85f2d"],["/tags/日月凌空/index.html","295035f837bfe4afe8a473ac82b8aec4"],["/tags/柠梨/index.html","49058432bc545ad2c2ba0f00044e2443"],["/tags/柠梨/page/10/index.html","f6775bf550ff900d982e97ae0e22b6ed"],["/tags/柠梨/page/11/index.html","ee60a80eefca9e193831926c988a9092"],["/tags/柠梨/page/2/index.html","998f5c82b38739f000c6952e7fa6e040"],["/tags/柠梨/page/3/index.html","6004334b87ec11d8d03829e738f5b9ba"],["/tags/柠梨/page/4/index.html","63742d652b4e15bb41d6a0a2888206fd"],["/tags/柠梨/page/5/index.html","7e2d32fbf05b5e4d95393ee3ebc9c567"],["/tags/柠梨/page/6/index.html","a3e0a1c266b2763bd97f912780c7d535"],["/tags/柠梨/page/7/index.html","2a4eea11ee7d4d4b6b1db21c9d4e3eb3"],["/tags/柠梨/page/8/index.html","076c89392e8626afb9825aad99ab19e3"],["/tags/柠梨/page/9/index.html","a4c19d6890a41cf676f893ec09f96c7e"],["/tags/残酷法则/index.html","9ab3d7dcac90cb2a0c7f7eafc912167b"],["/tags/残酷法则/page/2/index.html","66f59e2a3f6627735d187799de8d02bb"],["/tags/残酷法则/page/3/index.html","9a7aae2645c263b2d30593270e2bc915"],["/tags/爱，青春与死亡/index.html","75a0922353c3d3811f727881bc05013b"],["/tags/狂飙/index.html","770aa05a205b60fdf1c567dbb4096768"],["/tags/都市传说/index.html","e974422fb8857afdc3652e3d0219a563"],["/tags/都市传说/page/2/index.html","364659656570b36b43ef50c6c3e3e673"],["/tags/都市传说/page/3/index.html","aded6a07bb87eecb1e3337c7fcd32061"],["/tags/都市传说/page/4/index.html","e489d3860918d5cc605f5f1ff5c64add"],["/tags/镛武侠/index.html","d7178ed11b468a0b9912b3f96ae35b96"]];
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
