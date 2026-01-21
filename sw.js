/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b2613627433c5289b327fb66dbc91e54"],["/about/index.html","4d8b78450be23c1392371e9ff6c49862"],["/archives/2024/07/index.html","4eee9812f03758b33dff7003fd8d2efc"],["/archives/2024/07/page/2/index.html","a15230d2bb45d459d872886b887a92c8"],["/archives/2024/07/page/3/index.html","9c91ba23816bc07d94c998b830246e45"],["/archives/2024/07/page/4/index.html","404e05c951f78094a1cf8d2d7d68c69a"],["/archives/2024/07/page/5/index.html","f3cf9705c50d3037fbb14349a4d7a411"],["/archives/2024/07/page/6/index.html","ee8104af73507f501b2112e69353ccf1"],["/archives/2024/08/index.html","44fd4b8db7b13c5aca8be685a32176c9"],["/archives/2024/09/index.html","5f4e356430955aafdb08b6243ff24bfe"],["/archives/2024/10/index.html","af9f12252eef3f220d36fa41b6e34806"],["/archives/2024/11/index.html","8fc4cfe5da137140cdcbd806205d7c0e"],["/archives/2024/12/index.html","05fe0947507b7cfc72c4a1407882c0a7"],["/archives/2024/index.html","5f97ad4212c9dc509be6b7110366470c"],["/archives/2024/page/2/index.html","dcd8666304d507211b576b769a10ee7e"],["/archives/2024/page/3/index.html","97ba74a6bf27678fe436fe89c845185c"],["/archives/2024/page/4/index.html","81fdc387f80ee3e83136ad3b13b22641"],["/archives/2024/page/5/index.html","998f0154c4574ed056c57f38221790ff"],["/archives/2024/page/6/index.html","83d2212819bb3d94648c15d980cb98fd"],["/archives/2024/page/7/index.html","7b14a3624422af13762fb83193731189"],["/archives/2024/page/8/index.html","7a12ac922d5f93150be0cfd8b8afac6a"],["/archives/2024/page/9/index.html","fb819839a2b52e3004c5464b92d2f321"],["/archives/2025/02/index.html","84f410b7598547e58235598595022a45"],["/archives/2025/03/index.html","44df73779dfa2859011558132beb5fed"],["/archives/2025/04/index.html","aa2b2b9139a2a4374ad21c80fbce2633"],["/archives/2025/05/index.html","a0b801f7690d135390848a7aba521211"],["/archives/2025/05/page/2/index.html","850c0b27cd778c9817623951a244dfb4"],["/archives/2025/06/index.html","e385a15737103c9abe9af17e34b7c236"],["/archives/2025/08/index.html","54efa20cadc14b82906be1a4fdacd123"],["/archives/2025/08/page/2/index.html","1bbc7659f463324ffb805f11a1a064a9"],["/archives/2025/09/index.html","c85dbd22e860b6d669b1fea7cb693c30"],["/archives/2025/10/index.html","62bd6ca2b9fd4d2d87dd217ffb120429"],["/archives/2025/11/index.html","9feac2fa15c4592fb6715fc61ad1e681"],["/archives/2025/12/index.html","1036617490082ef5e3c3b1312c6da6ad"],["/archives/2025/index.html","90257607f676b8206c0944dbe98c004e"],["/archives/2025/page/2/index.html","a75349c90e115fdcf5267832326fadc9"],["/archives/2025/page/3/index.html","23dac9afee2a3bdd6f55238774973452"],["/archives/2025/page/4/index.html","53486d045e4f8c0e68a07a6e31586587"],["/archives/2025/page/5/index.html","b385a7ff2445a18d3001eed71d020a9e"],["/archives/2025/page/6/index.html","8f1f1aeb5367dc6ee44d41f4b22bf7ce"],["/archives/2025/page/7/index.html","e5a4176021e673fb2501cf9ac362ba3c"],["/archives/2025/page/8/index.html","008e86464eb2e98b383876b6b20d1e9b"],["/archives/2026/01/index.html","9be19586c72b474de21af34d5cbdfac8"],["/archives/2026/index.html","2ff2c864dea1e7bc31fb46e530216c88"],["/archives/index.html","242be066728b4d3457d6d3006871c23c"],["/archives/page/10/index.html","cc756b653cb6c2099b58894b62940e2c"],["/archives/page/11/index.html","67535665f2d3cced6a70ee3117c1a19c"],["/archives/page/12/index.html","2830fdf781e92536895ae9b502094b3c"],["/archives/page/13/index.html","71508ead484f4b6898265eeb3fb8af1e"],["/archives/page/14/index.html","a8a3e61d6be13bea71fe541f375356a8"],["/archives/page/15/index.html","3f819e3793d1a9740dfc4ac709a6f93e"],["/archives/page/16/index.html","d66ed0bace4ac212ff12f29283842bb4"],["/archives/page/2/index.html","a8e5910d8d9f1f6e630a78a91246d915"],["/archives/page/3/index.html","5877e4741e8d51c87329996498380235"],["/archives/page/4/index.html","ee8c115f03cdc3bcb68f5f53e27e9443"],["/archives/page/5/index.html","d29711eb898ff81e51a65535067adf1f"],["/archives/page/6/index.html","d89d1bb4b083d028380088333b801ce0"],["/archives/page/7/index.html","6fc5a06491711f5566c713a215c378aa"],["/archives/page/8/index.html","a899a957d2c063a6780a48102cd51daa"],["/archives/page/9/index.html","77a05fd554673ca329c99fc5c9c08659"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/jybhj.jpg","855051bdb32dac6b6b2214b662e3f784"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/sny3.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/sny4.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/sny5.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/sny6.jpg","12f4fac008c279f4a1f41506995d038e"],["/assets/banner/sny7.jpg","bf0d0ce9dfe8b32ea465559b903bac87"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","010ad2356f6b21b00768d28d71169151"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/jybhj.jpg","f074da0cdf315a64a5d3e8aa3896fea1"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/sny1.jpg","92158f93aff91b4ea1b1ff8059f2e953"],["/assets/cover/sny2.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/sny3.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/sny4.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/sny6.jpg","0e1b91307940debd8b8cf90e3517268d"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","91bb2aa4523f6e336add358cec66ddc4"],["/categories/index.html","bbf3f694f96103f5808ec73bd2fd966c"],["/categories/与敌同行/index.html","7813168620e26283a97aaf89ec7e5f2a"],["/categories/与敌同行/page/2/index.html","7bd6a3bd1b2bd6b1c3d085fd8474a4fd"],["/categories/与敌同行/page/3/index.html","5d0c4b52978e050fe66ad986287b4715"],["/categories/与敌同行/page/4/index.html","088d5007a2c446fbcb11fc0accacd910"],["/categories/与敌同行/第一卷-双镜/index.html","e62d40198ddd117faad31e2328b2bdf0"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","85f8b6da92f95ca0777655f2f0686b4f"],["/categories/与敌同行/第二卷-信天游/index.html","108a8b01b870192239ddae646741507f"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","a9be75edc96099544426aa37764d138e"],["/categories/乐园/index.html","c8f9e6f96bf5c676daf052ddfcfd3dd7"],["/categories/乐园/page/2/index.html","40a3104d9ff03c8aa37ef215b9ce0182"],["/categories/乐园/page/3/index.html","7812835d8de9070c0a57aa877b9a9b39"],["/categories/乐园/page/4/index.html","3ccbc37b93fa8758b56cbddb41addb26"],["/categories/嘲鸟之歌/index.html","e4b505eb87265c47bf10edf2c0d32713"],["/categories/失落的应许之地/index.html","9de9ea43e26e0062a1c9e173b637089b"],["/categories/失落的应许之地/page/2/index.html","56120d5839e23d3eb377bae94de49d27"],["/categories/失落的应许之地/page/3/index.html","6c64fba1e9ee8bb594641f30fc076a27"],["/categories/月照天山雪/index.html","740d34f873dc7c7e16f418c12d48a7f8"],["/categories/月照天山雪/page/2/index.html","658acc816ffa3f72057d70bf32d55f17"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","1ec88c5fb96ac939f7278a43dc5ef712"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","68952603abe35b2abec3550c7f028e2f"],["/categories/狂飙，乱飙，发飙/index.html","08c2200f30300e5d8a1743d2b686abd9"],["/categories/短篇/index.html","ce233d518b20562a6c81a58d41917806"],["/categories/繁城之下/index.html","33437d521c9d2611120433dc3b70ed97"],["/categories/繁城之下/page/2/index.html","4a1c4a771100c444d5759ba8747ff580"],["/categories/长夜漫漫路迢迢/index.html","1f03948e85baab486a47e628d9212062"],["/css/custom.css","36f0aa94fa94ae8a469cd369d91ebd5d"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","aba2b960b4eb87fdcc68cc85e3d3ec72"],["/css/modify.css","8d9c15dbe0d74c5359b60b10f9033e64"],["/css/var.css","99d9242558e3038987093577c6b1d196"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","6ccd038adbc51a320f7e55bfcadc3aa8"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","e66735dbc7c6270b3608a52b15f49b43"],["/page/11/index.html","67399be54c80727f5029ea8e54a661a8"],["/page/12/index.html","ee19bf0c3d307e1d1ce51bfeade2f247"],["/page/13/index.html","b5d8344bdd2956ec1684152ce5869e36"],["/page/14/index.html","f15d594d9c6476f486ac617272972caa"],["/page/2/index.html","861001bc0ba0d3394c908975be05005b"],["/page/3/index.html","4d2c1a8aad4180975e29f841554c6f29"],["/page/4/index.html","831ac4462ea37dfba2e0d9d76b5f16f0"],["/page/5/index.html","c5e21490ea7450ff849a13a89c043ecd"],["/page/6/index.html","c1ca34bd6c9f1ebd2612680c6955a21b"],["/page/7/index.html","3d6e9552c640d41932742196658f9c12"],["/page/8/index.html","9850ef1f5cae47272d592aa0c3cf211b"],["/page/9/index.html","26c529206aa76f59a9f8d80f521458ad"],["/posts/103655302/index.html","d0dde8de45a4caec22abb77d36c67ba3"],["/posts/1083795192/index.html","9a8a5e5f50fa43c2613cfb958e104a75"],["/posts/1099216759/index.html","83014a5584bf6309d644fcba0dfa12a5"],["/posts/1104021264/index.html","0860c13ed41a5df70c7d3f9711568ed5"],["/posts/1195093070/index.html","3992a52a412ec5acd75f9ec5c447e35d"],["/posts/12506394/index.html","a39153aa93c0b619b0bc80240fb8a325"],["/posts/1272692100/index.html","b218556ab0a818b3a19954b404c95968"],["/posts/1304356361/index.html","a2aecda51890793cb77ba6e2764c76f9"],["/posts/1315809802/index.html","af065df43dee4878b452a2b05f170434"],["/posts/1329165323/index.html","3a614b190be2a2e7dcf65ed5e4a0092f"],["/posts/1378666774/index.html","13d4da29284129e26f56c67a04b127cb"],["/posts/1400613118/index.html","a08b9079d853a5725bcf7f1246394f95"],["/posts/1407316490/index.html","28b9ca42475af84ba954c1adf4894702"],["/posts/1434824932/index.html","e8033c04cd38deb725542370228f0190"],["/posts/1445707477/index.html","0b1d1207e8187f15d08b5335a8d5b5b0"],["/posts/1465373355/index.html","05208056408c44327e2b16648af69278"],["/posts/1500385898/index.html","7c9a055be3c8294cfeb54299e1d5c8a9"],["/posts/1681850936/index.html","ee79140708f61d8185781d62bc7816f3"],["/posts/1688557772/index.html","4519c3067948dd206d50da291b37004c"],["/posts/1710373156/index.html","943eaa8060380d72560a66a1f1141e9f"],["/posts/1720998546/index.html","43fb6432c10ddb41d1ef1e08205a65de"],["/posts/173005120/index.html","274cf1d58aef544ec997c0322261e720"],["/posts/1758837205/index.html","5ff5a2fc2446dac8b2be959f0b771749"],["/posts/1766000773/index.html","d656a103043d97a3979394940b09a6ae"],["/posts/1843191030/index.html","be06463e6b872d2b996183f222c24ad3"],["/posts/1845581652/index.html","273449599c3e2897f2f46babf6ba7a67"],["/posts/1859941397/index.html","4e72b5b106811fe788f11155b76fcb8d"],["/posts/1988799958/index.html","25c07b22b7400081aad269298aaf0a21"],["/posts/2080722358/index.html","14bb12d3ed0c9f49136b5c626332b1ce"],["/posts/2142008032/index.html","6ccd0dd8ab098db85857b1b86b6b66b3"],["/posts/2192148155/index.html","b469c779f501cf57937ca364f5c45649"],["/posts/2229302539/index.html","f22ccf6e3dcc5611f8caf635b58179d4"],["/posts/2278904638/index.html","1241592a2c0bbea8c72c1b75d84d20fa"],["/posts/2303668433/index.html","bdee29582937d2b709e208783dec0073"],["/posts/2492968201/index.html","fb2192df6945c09180522b6fdb27d134"],["/posts/2531300956/index.html","763169e6fc10fc25c91618a4cf079f1d"],["/posts/2616893247/index.html","44115127a500318feefe76de41af2a43"],["/posts/2700096901/index.html","10665775434cc5ed73c3b2ae0ce68edd"],["/posts/2869217975/index.html","2fe79d82565a8ab188323ff602dd6de9"],["/posts/2888068877/index.html","1108ec04c1c06e9c48c0cfcc389ba75d"],["/posts/2949714254/index.html","1776302c1e7b8c540b75b19ce3e331f8"],["/posts/3002318373/index.html","09adf99346a84fb65c9fe879f36b9802"],["/posts/3076558902/index.html","dcbc490f20a987749e46aa84747102c8"],["/posts/3147359483/index.html","e7d53f6eaf1e080be20fc0690fe1efeb"],["/posts/3191465731/index.html","a0a59e1a2336e52987809c2db5432490"],["/posts/3197223139/index.html","25f2a73a035c95ff523f4c66cd00c2c5"],["/posts/320179123/index.html","87b393c2ccf2087897b2e65cce204b72"],["/posts/3300469459/index.html","a9771c2ed001f513ba3a8b51bb5e11b2"],["/posts/330870226/index.html","98383fcec2381c40229604ad3dd42e91"],["/posts/345507944/index.html","9751d2fdf46219c1b40a5e44dfc13c19"],["/posts/3459697331/index.html","3c36161ac9ee92b8c2ce190e5a619f2d"],["/posts/3489395119/index.html","82a9c57c9bed8febf96a8ed75032215a"],["/posts/3525870963/index.html","fdee8dcbb8b94fa5fa7f933454ad3d4e"],["/posts/3591144765/index.html","2e64ae9d0a7ff2f37dc9e918399eec1e"],["/posts/3602722865/index.html","e686f29e8454bf2a3bd90b6d27889e72"],["/posts/3640780602/index.html","d86d091637dadbcafe65cfd375ad8dd6"],["/posts/3679626959/index.html","0755f812a599c6e5e39a3a960a988ec1"],["/posts/3699598685/index.html","2373dffb6d88896c38522f0de5e25255"],["/posts/3712900673/index.html","bcaf03fac02b7c684096c0eac865d49b"],["/posts/3770599674/index.html","bf9764558db6366c909f4f74108338ff"],["/posts/3788666127/index.html","2e6b187ac4feea7bd00c6e907722470b"],["/posts/3935350387/index.html","8b436ffc0f06b9b5f6583a5efe667e0c"],["/posts/3948778863/index.html","0fd3168e03bf9003039c6343fe39a14d"],["/posts/403803703/index.html","4deae3667c9d1083f50dc7e0c99a2e33"],["/posts/4041933047/index.html","1b848479299554335c71fed375ebcb50"],["/posts/4083669729/index.html","2e3ae38ac6585dd834fcdb3fd3e63fa1"],["/posts/4110582124/index.html","9e5d45505f9345df10209bbb0048abbd"],["/posts/411074811/index.html","d8b5c1471e1a5c34b9ff663d8cf1528e"],["/posts/4113963045/index.html","65db1aa3d796c387e3c9c7eab01d2b69"],["/posts/4158435381/index.html","6a978232d672103aeb4691bbaf8f0896"],["/posts/4163174813/index.html","51c814ee1b6e7d5644695daf40f8379a"],["/posts/4185022581/index.html","992b1344de68fea65e184444ef7450d8"],["/posts/4192746113/index.html","c8e0e1b6da0fe92974adfbcb16f5d221"],["/posts/591853658/index.html","3a120449ebdea85be31bf03d56e629ef"],["/posts/597050941/index.html","7f514e5a4a11129c01be38a236cfb358"],["/posts/719776913/index.html","a416570d68abf657c84cfa56c1ffa5d9"],["/posts/741067372/index.html","1b7ff11eff4e0d8f4df7be5b6979578b"],["/posts/776340048/index.html","3f533de4b963ebe0bd3a6dfe172bae5e"],["/posts/838031284/index.html","7135075b5450badb846af51467b3ec1a"],["/posts/888354975/index.html","d919d7c0870ad064de0bd2f4125144c1"],["/style.css","0b823d05f55642296506237a91c13e8f"],["/sw-register.js","afd382f461ae8a3359749bd83acd6a10"],["/tags/index.html","dc76828ed4480484cbba710bd566cf86"],["/tags/中国往事/index.html","7906557c325568dd5c6b16395caf23dd"],["/tags/中国往事/page/2/index.html","9f35d595e12153a4b9a0127563c684f5"],["/tags/中国往事/page/3/index.html","bc1ff2129dc4449063982f7b09286b47"],["/tags/中国往事/page/4/index.html","48cb57bbc9be414341533dcdb89a528f"],["/tags/冰与火之歌/index.html","557a42471e17ed3f199f5ee3b54270c0"],["/tags/冰与火之歌/page/2/index.html","3113c332e97ea649b27f700a6728d87b"],["/tags/拍案惊奇/index.html","e64a95f6a1c872e1423eef22462cf148"],["/tags/拍案惊奇/page/2/index.html","308efd3bfe235116562eab0d58fa6c56"],["/tags/指珊/index.html","4b41b5c515bec06c719c0a1d39793683"],["/tags/指珊/page/2/index.html","2cc1521787d927708b5e13ace5bbaa91"],["/tags/摸鱼之作/index.html","7f7c234fddeac81da0cafd1994d23f47"],["/tags/日常/index.html","13f934431e16c682b65aa06f19c476f0"],["/tags/日月凌空/index.html","a691aa18b8bbc4f6e1d7b5b9736551f3"],["/tags/柠梨/index.html","4ad3d4ed5790775b79fcbd37a9006eb6"],["/tags/柠梨/page/10/index.html","6eebb6d19de0b4893a527d1ed9cc1919"],["/tags/柠梨/page/11/index.html","97520dfea488e0fcdbea8e2f4606cbed"],["/tags/柠梨/page/12/index.html","35c6f2d233e5a969d97adfca624a99e3"],["/tags/柠梨/page/2/index.html","bc3800414c2c31cb006685805e84ec43"],["/tags/柠梨/page/3/index.html","d46226188edff27af6fb5c71e92dbe17"],["/tags/柠梨/page/4/index.html","a12e648deac3092d978291e2aa30c2b2"],["/tags/柠梨/page/5/index.html","c1666787d5fca1586d0c968649eb2587"],["/tags/柠梨/page/6/index.html","2bf3e9080c3beecf742cb9dd726d5678"],["/tags/柠梨/page/7/index.html","c3bd123bc6824c6169c37e554e043dad"],["/tags/柠梨/page/8/index.html","adbceec4a466fd47dbdd805471337a8a"],["/tags/柠梨/page/9/index.html","f0adfafd712460fe73a742bf327e07b3"],["/tags/残酷法则/index.html","add071c47c03bee9cc0c083f71f5f08f"],["/tags/残酷法则/page/2/index.html","ce7b0500776946582713c6def827a6e6"],["/tags/残酷法则/page/3/index.html","dc5c756c41cf41eadaf44909bcb4215f"],["/tags/爱，青春与死亡/index.html","296491cd1518d5f299b657ceedeef0d4"],["/tags/狂飙/index.html","ea67a3e09ffb3e712aed7fe1787f126e"],["/tags/都市传说/index.html","65150a0aecd4c55c060ca8e56adfa98b"],["/tags/都市传说/page/2/index.html","4c51cc9334e38898453e9753dce7d9e0"],["/tags/都市传说/page/3/index.html","7d761f681414674b910dbe83d2bde143"],["/tags/都市传说/page/4/index.html","4a494c8a3ed69a3f699a2d2a1c8c7816"],["/tags/镛武侠/index.html","9a6d8123fbdc84976217b3ee67457766"]];
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
