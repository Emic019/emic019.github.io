/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5ec4eced28c7507a470ee43c3f361fb8"],["/about/index.html","45d60db73b236b5cfd4400627079c64c"],["/archives/2024/07/index.html","c867061ee0a1510d551d5b4e1b17b84a"],["/archives/2024/07/page/2/index.html","2d51674286efadde409cee52ef927258"],["/archives/2024/07/page/3/index.html","50a813b1ced466627edb3462b3fba64b"],["/archives/2024/07/page/4/index.html","fa4f2287fc018abb6d5b81f775ff5376"],["/archives/2024/07/page/5/index.html","06147c81edc2fd8a882d99b66605edba"],["/archives/2024/07/page/6/index.html","093fbdc60db0e6beb16473c36417b15d"],["/archives/2024/08/index.html","ca73efe92328088640999cfc49fc1066"],["/archives/2024/09/index.html","4581082dde5489a916855890e822d2f1"],["/archives/2024/10/index.html","9af9af137daebf4b055001f139fdecb7"],["/archives/2024/11/index.html","39b4b0df358bf1f223b4c811209a1140"],["/archives/2024/12/index.html","703bc302af84c485dc5c33cde1e73158"],["/archives/2024/index.html","e0de6f1d754e8bad738f58d09651a540"],["/archives/2024/page/2/index.html","5d8f43906b21a7253e0c03471d1668cf"],["/archives/2024/page/3/index.html","1ac2fd36f87698e9536eb9017e6dda47"],["/archives/2024/page/4/index.html","1111aded0417d855aa62389760c4c7e3"],["/archives/2024/page/5/index.html","af05759a0503117c93da63d0b11599f7"],["/archives/2024/page/6/index.html","cf7f56dd0d5b53e8b4c8e9b6292b0886"],["/archives/2024/page/7/index.html","77b561b1493a0556b830e58fe3d4e044"],["/archives/2024/page/8/index.html","f9767f69bfeddc9636d2ba9253e4b352"],["/archives/2024/page/9/index.html","3c51e69de2397ac659705121bf4e547d"],["/archives/2025/02/index.html","1256ed41b60d2ba5d581e45f07761ca0"],["/archives/2025/03/index.html","db9b8c3a10d703eb3bba2e8185051ef0"],["/archives/2025/04/index.html","627075b14e037d9d4779ea23a56f7fd6"],["/archives/2025/05/index.html","9cd73ae236f321ad1f5f268769a7ce26"],["/archives/2025/05/page/2/index.html","098845315e7063f8615fdf9efb1c3d0f"],["/archives/2025/06/index.html","1ab0484482cf79e8b2e42c8025b58c6c"],["/archives/2025/08/index.html","87bec8c469219204055dd026699e977f"],["/archives/2025/08/page/2/index.html","81346359823339e281aa57d33aa15c7d"],["/archives/2025/09/index.html","6dce22f7f6b5d916590443d515d723ab"],["/archives/2025/10/index.html","16bbf17e9d0ba6b0052f97b64f4ef77f"],["/archives/2025/11/index.html","d99d834fdb802226fd26cd69295e5488"],["/archives/2025/12/index.html","e27f549752f7c1962e52c5ed4147cd92"],["/archives/2025/index.html","9db066fdbfcd8e57b6c166cbe0450d37"],["/archives/2025/page/2/index.html","425522c4f6c3b750029af0c0de6ffd20"],["/archives/2025/page/3/index.html","bb47a173b46f274f1b9f606a0279c25c"],["/archives/2025/page/4/index.html","af84b1347635cf940b85b7c40c442584"],["/archives/2025/page/5/index.html","6ffbabe5fc955681c1d07677841ee86b"],["/archives/2025/page/6/index.html","23ebf9eef75dca53ed42c3bc9a683caf"],["/archives/2025/page/7/index.html","3180e484bd2a8c116d520f425d615d88"],["/archives/2025/page/8/index.html","28a97df4890592f599177657c398fb78"],["/archives/index.html","ade5e410c6b28662cfbd693609eb59c6"],["/archives/page/10/index.html","5d7d5b478a740b5bd96c0f50d1c61470"],["/archives/page/11/index.html","142d1b1eea639b231153559580fa4464"],["/archives/page/12/index.html","cd0e75ea1c3df90def95245490539c16"],["/archives/page/13/index.html","a80bb0b7ef1bdecbd9ab8aad65cf9293"],["/archives/page/14/index.html","af0b017df005282bb86a8c32abc20444"],["/archives/page/15/index.html","287e2fdb1dcc1d85f1d34f9fee7ad9ab"],["/archives/page/16/index.html","ed5e4b224a97237e4ced32cc92d4c9ef"],["/archives/page/2/index.html","4b9a239c8bc7df5b997cda7857cd340a"],["/archives/page/3/index.html","f6dee2929f09efda93a6fb341a8197d8"],["/archives/page/4/index.html","a1c66565ca596e6717d0620ee5917eb2"],["/archives/page/5/index.html","8339c7e72d1cdd1a0a3fc64eb79a2e66"],["/archives/page/6/index.html","abca177db3914b549b96b38104e4ebc6"],["/archives/page/7/index.html","679eeab92a3fe990318f3326d520bfe1"],["/archives/page/8/index.html","44575ade753adf57b369e8d27b6ab6dd"],["/archives/page/9/index.html","063f3e1ae570d914c78541f8985fbf56"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/sny3.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/sny4.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/sny5.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/sny6.jpg","12f4fac008c279f4a1f41506995d038e"],["/assets/banner/sny7.jpg","bf0d0ce9dfe8b32ea465559b903bac87"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","c448d2ed372f7dad8393f9910825e020"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/sny1.jpg","92158f93aff91b4ea1b1ff8059f2e953"],["/assets/cover/sny2.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/sny3.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/sny4.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/sny6.jpg","0e1b91307940debd8b8cf90e3517268d"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","91bb2aa4523f6e336add358cec66ddc4"],["/categories/index.html","8763b3582a8e6171d4b4ffa72b9f548e"],["/categories/与敌同行/index.html","da6bca6ee58009f35cfc39f3a5160900"],["/categories/与敌同行/page/2/index.html","94871c93f786d0bba2c5385afc8166ca"],["/categories/与敌同行/page/3/index.html","604b83d4954bc3fb9fac62dd961750d5"],["/categories/与敌同行/page/4/index.html","518f2ecc2630d7edbd3e4c74a29b3361"],["/categories/与敌同行/第一卷-双镜/index.html","3d8917511904c13f5de38d7e0f192870"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","54b27850e1ce26f4c2b4534b55bc7a5e"],["/categories/与敌同行/第二卷-信天游/index.html","95767d094a56e24c482c475cf281f10b"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","57faff71f139b54b62ded68f079555ec"],["/categories/乐园/index.html","53130cadeb3b11b1e6c49febcfc4a621"],["/categories/乐园/page/2/index.html","8bdf7707d0b6c122d6c97ebe912ff075"],["/categories/乐园/page/3/index.html","51a44ed519a1114690bae0513c83e86d"],["/categories/乐园/page/4/index.html","71b9055593bc2fb6130684343d9b998d"],["/categories/嘲鸟之歌/index.html","8f80f951fd7274f7d2de358be445cebb"],["/categories/失落的应许之地/index.html","8248b3da02ab985036c835d470cd7bec"],["/categories/失落的应许之地/page/2/index.html","d104adb46bd38be707c1417228b66949"],["/categories/失落的应许之地/page/3/index.html","f547d30d7818803a572ead1f9e4c9c96"],["/categories/月照天山雪/index.html","579f5382f00b968e3eae8213708a758c"],["/categories/月照天山雪/page/2/index.html","b99f723ff28021f5bcf6e45ea3cbfad9"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","0ca0154560187cf95620ff15430646dd"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","8aad81103916b203b6679bfdc89a7b09"],["/categories/狂飙，乱飙，发飙/index.html","b7b452be205105ae79d2dd84ef05a3ea"],["/categories/短篇/index.html","6b8d73f86b7185664ef3d468e1889fb4"],["/categories/繁城之下/index.html","555e97e5c6d092c4a4583c37dea53022"],["/categories/繁城之下/page/2/index.html","71ae56b4d9a3d93890cc430ddab338af"],["/categories/长夜漫漫路迢迢/index.html","4377b361a6a21c5d7d9aa21d894ae6d0"],["/css/custom.css","c4dea96a737140ece010dfd7ae571537"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e8dd32f5e4c3d823f655d57b21f0db9f"],["/css/modify.css","1918533910ae3bdf2caa973c1cb2fc60"],["/css/var.css","b5c222c33754cc04429f608fe6b3b553"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","8eae5c8bacc3198d5cc64c8b45e06454"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","53c80cb824659d81d637e6ff2139db6d"],["/page/11/index.html","a7276f19d3edbfaaafde576ce856e6be"],["/page/12/index.html","03d6531f9cba3afc3e5f253cb691ab19"],["/page/13/index.html","7ff0e649e84f770960f679a2e3ef423c"],["/page/2/index.html","5b812c9af03cb5c0bcf7686dccdcb91d"],["/page/3/index.html","488b37a912f88028eb1ac2f4515a4610"],["/page/4/index.html","52a1738361cfd278e6c62ae2364a7c4a"],["/page/5/index.html","9d7b7f552fb6632aef5bbfbd6696c9c8"],["/page/6/index.html","ff2d2328f1401ca0b50d2d6f872c7097"],["/page/7/index.html","881a87968b5a7b52e095d235fda93672"],["/page/8/index.html","f7d2a938880ca8745e4ebaf470b9d0ca"],["/page/9/index.html","00d959e35110346f3142ba62991f5493"],["/posts/103655302/index.html","55ebae0dcad29e4a834bab83baf2640c"],["/posts/1083795192/index.html","0179b1b861808fdf608d68189b444c22"],["/posts/1099216759/index.html","7c8b41990319812c184d6cc7eeb03419"],["/posts/1104021264/index.html","55df0a2b6cf90d7936d3d22162003d59"],["/posts/1195093070/index.html","b729dc93aa1679478046218965e9b119"],["/posts/12506394/index.html","c7220c788e99510dccaed69d926d992d"],["/posts/1272692100/index.html","f46168f166db65a344c319ce4b2c268b"],["/posts/1304356361/index.html","f889b22d53267975fa31203d34450486"],["/posts/1315809802/index.html","6fa490c5ddda47f8b2617bc9e4e3d2d9"],["/posts/1329165323/index.html","c94a36783d53b29ff7e3d9e5eec3af98"],["/posts/1378666774/index.html","4473657ca6408b887c7874942a6051ec"],["/posts/1400613118/index.html","0a5a5f40e348180cf31508d5a400b5b5"],["/posts/1407316490/index.html","5e774a5d789938c643299355afbf0b83"],["/posts/1434824932/index.html","700af6851ac49f7c0b5564a82715bc21"],["/posts/1445707477/index.html","639134b06d6d90884408110cc3d61533"],["/posts/1465373355/index.html","a0292cae6e98b7fd4814204d755ba5fb"],["/posts/1500385898/index.html","1fca34bc92d6632323ac696807891f7e"],["/posts/1681850936/index.html","ad655d329be2311d63df3b3f0c3ca9a1"],["/posts/1688557772/index.html","bc22e782e268cce9fef2cd290fce2421"],["/posts/1710373156/index.html","dc5f3d1b0866116b95315ea8d54a90f5"],["/posts/1720998546/index.html","e24909ef190bb58d1e85e7592d7676c6"],["/posts/173005120/index.html","cdf1935b90d93d88f58877bdd187c248"],["/posts/1758837205/index.html","bf97ee03947535ec472978f54aadabe4"],["/posts/1766000773/index.html","a49d60d1ef601155f8a0ed16cf5786a4"],["/posts/1845581652/index.html","f7b7af3a63d82d5d8d05d87d03ee4c3f"],["/posts/1859941397/index.html","a35e7441cd62cc771b966f3617f5b336"],["/posts/1988799958/index.html","bd2b4475d83fa8a60633b8e35651d6e4"],["/posts/2080722358/index.html","2fdfd262e8cd828d0496566aad620fd0"],["/posts/2142008032/index.html","36964b1a14affd0b0c19e63349e56029"],["/posts/2192148155/index.html","dfc1819e863ebb133e61486385f567f3"],["/posts/2229302539/index.html","65ba46ec09686c709853e61214e082cd"],["/posts/2278904638/index.html","397dab738f14c16ecb874f3925ae1c01"],["/posts/2303668433/index.html","39a7e2a5f9a1dfe5e042fcf2743b34bc"],["/posts/2492968201/index.html","350f681c82c32c9485854e7a6b9a990b"],["/posts/2531300956/index.html","d3617bd08281301743c2fdcb41db4f2d"],["/posts/2616893247/index.html","a796626627654a5af18264abcdf913cc"],["/posts/2700096901/index.html","9f425502ef146b7fc2597dd11f1e3e04"],["/posts/2869217975/index.html","2ebd5453012a2ec13605acc3bc798ae3"],["/posts/2888068877/index.html","7771ced5f80a6c922caa99fa8fdd02d6"],["/posts/2949714254/index.html","fbecd4ef99af736c33b054aa3afc929e"],["/posts/3002318373/index.html","a584e00259fc0b452d29d390787d8838"],["/posts/3076558902/index.html","5dec03d43b4e0ead26503a9d20a98293"],["/posts/3147359483/index.html","c97f2becd58a4fd3bce117eced2ea350"],["/posts/3191465731/index.html","2b3e3c17cd6d543cfb2354db3aed2013"],["/posts/3197223139/index.html","35cd3daa6cc232d89a7a3788bfe646f5"],["/posts/320179123/index.html","c1bbcfab8c4fa8a838b22fb2800ed420"],["/posts/3300469459/index.html","e9edf7971991d4fe7cefbe15f1cd1124"],["/posts/330870226/index.html","4736ecd4bb4897ad56f18226ceeac1b8"],["/posts/345507944/index.html","f80e0da25b7c3d3abc3b77d9953fcb9b"],["/posts/3459697331/index.html","976b965fc6ad5ce7ea0cc9335e56258b"],["/posts/3489395119/index.html","ce43f58c6368d240e7b1604429cd7a86"],["/posts/3525870963/index.html","cac8f5995851649f7cbe8019a2ef1d34"],["/posts/3591144765/index.html","f183ab1ddfbbb911764384fe9e564134"],["/posts/3602722865/index.html","ebd0da3690314683e72adc80bae9bd39"],["/posts/3640780602/index.html","437321716e64f035561d08039def8b1f"],["/posts/3679626959/index.html","b2ee8e222831ad2b2ff242c35a0eb393"],["/posts/3699598685/index.html","6c685bb7e4ce36fd7e960173d0a818af"],["/posts/3712900673/index.html","045174fb38bbcc06008b6dbc4df89b1f"],["/posts/3770599674/index.html","d550caeb771768fd20847d7d02647e08"],["/posts/3788666127/index.html","d89cc92657b33705747c6cc6dff447dc"],["/posts/3935350387/index.html","94e70c158b31e649b0ecf075f950468e"],["/posts/3948778863/index.html","5f7397b508a5cd326aaad3e94ad71bdd"],["/posts/403803703/index.html","7d045cb3e3fa1eaa47c03c937770f197"],["/posts/4041933047/index.html","78366dc9394517014e8152671802c8fa"],["/posts/4083669729/index.html","71c5d3124fae61dee4aeb88d589a4c38"],["/posts/4110582124/index.html","15a3dbc69f10477bb60520ebdf39227f"],["/posts/411074811/index.html","f240bc5a7c24914a8877785e409e6d58"],["/posts/4113963045/index.html","1de8513fc979caed0d319c6e0f170f7d"],["/posts/4158435381/index.html","69de960d314a2ccb301b79cbf212b370"],["/posts/4163174813/index.html","227948fda7d6227454d02ffb1c18737a"],["/posts/4185022581/index.html","9e488172d6eac1a3f2c81925a1ce5bb2"],["/posts/4192746113/index.html","b39517b4caa35247ceb5c18a389945c7"],["/posts/591853658/index.html","85b523996ffa0ce9d429e4b8156f1d56"],["/posts/597050941/index.html","5c773ba61cb492f00363257f7fe40958"],["/posts/719776913/index.html","11a2311f89d4fa4eeb2931907ed3c1b8"],["/posts/741067372/index.html","d50da92e9f14c0e08262daf37e601733"],["/posts/776340048/index.html","76b703c9e2f81082f433243b2001d72a"],["/posts/888354975/index.html","1cc6ad2d91ba929aeb4b105643617b96"],["/style.css","e98c1f263a174a42c0326dda920b1641"],["/sw-register.js","e97b8719b5c4560f44e7fe0009084c1c"],["/tags/index.html","17c0ef0f22af714cfa619387426553a0"],["/tags/中国往事/index.html","0ce023c202eb74927fc6087d03006bf2"],["/tags/中国往事/page/2/index.html","85280f406640fd2ac1391964b14e880b"],["/tags/中国往事/page/3/index.html","b565a3a4a5f545b5303f2b57220b41d0"],["/tags/中国往事/page/4/index.html","30a9e91598e26e3e7ba2505c5c6d56b9"],["/tags/冰与火之歌/index.html","25f284d8add47b6d954fec8681cd75bb"],["/tags/冰与火之歌/page/2/index.html","844076ab2a9bc735116c86df53c0a29b"],["/tags/拍案惊奇/index.html","f12c33c5a0bc03cedacfb7023eae008a"],["/tags/拍案惊奇/page/2/index.html","4ecbcd3c9c9710d13ae9536783414677"],["/tags/指珊/index.html","d7bc6562bdfffc1f7de9dc27a952e85c"],["/tags/指珊/page/2/index.html","f1282d74edae3f239086000ffdbe2f68"],["/tags/摸鱼之作/index.html","3ecdcb9875d657e1009b128c7a7bfe87"],["/tags/日常/index.html","39ddd7c6b3d4e8f89b5c2886821e7874"],["/tags/日月凌空/index.html","99f2556d48160019b4ad0ce3ea44771c"],["/tags/柠梨/index.html","27de1ed673034e59ab2127141d0aacbb"],["/tags/柠梨/page/10/index.html","ba861ee5c39bdb6b3b640214b0dd22b8"],["/tags/柠梨/page/11/index.html","46ecb4ac88986f5052e39d336b482103"],["/tags/柠梨/page/12/index.html","a32fbf22a5f8be17d62cca3e259b7bc8"],["/tags/柠梨/page/2/index.html","b8772c931a12062432bcf208854745f9"],["/tags/柠梨/page/3/index.html","82d0b31b7f66aef64457ce1b57a9345b"],["/tags/柠梨/page/4/index.html","221ca1d53500a07e080faeb3e109b5dc"],["/tags/柠梨/page/5/index.html","7c8ad14ffc07e7acdf7549fb4e73ee50"],["/tags/柠梨/page/6/index.html","25b2bd66278710413b16038f8184a88a"],["/tags/柠梨/page/7/index.html","db31c8be24ff8e2a2a689c4980cc5c16"],["/tags/柠梨/page/8/index.html","8cb0daa56410bbccc986df5625f5aa15"],["/tags/柠梨/page/9/index.html","8d926fea5f917e4dc6ea4f56318016f4"],["/tags/残酷法则/index.html","ac64c5990df4cce70b3874f63a04a331"],["/tags/残酷法则/page/2/index.html","986649a984126a192727ab6bb489ddd5"],["/tags/残酷法则/page/3/index.html","185d15e92f140eefba99ea7981e65091"],["/tags/爱，青春与死亡/index.html","ff9576db1421ec154cba178cde8b85d6"],["/tags/狂飙/index.html","7c3f6c4e1224b40f84d30fcf9ee1e406"],["/tags/都市传说/index.html","cd2884512b774525240330deac6c5e8b"],["/tags/都市传说/page/2/index.html","532892507cfd23a7e9134ae307112e3a"],["/tags/都市传说/page/3/index.html","b70af75219c3a5e7f7bfadf89b349f23"],["/tags/都市传说/page/4/index.html","87c0977de57c9c93f579845f23533288"],["/tags/镛武侠/index.html","129f9e131ae179043f70cb69c74ab327"]];
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
