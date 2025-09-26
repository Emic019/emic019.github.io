/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","63bad18209ccb3c2afb8d1c9b3aa5f83"],["/about/index.html","fec2912f73abaa8927a9dd5b11a34ef1"],["/archives/2024/07/index.html","a582be3f81905b2298105e709f67619b"],["/archives/2024/07/page/2/index.html","30f53fe796e41f603442671a9dfb12bc"],["/archives/2024/07/page/3/index.html","09fd4ea0b0252fde2ace52d4d987e6e3"],["/archives/2024/07/page/4/index.html","e4b5f00df1de39355d5bd9d7b182909b"],["/archives/2024/07/page/5/index.html","c762def616540a48db0389e13290da22"],["/archives/2024/07/page/6/index.html","0eed3f2e3f631b82aeb7a3e59771cf70"],["/archives/2024/08/index.html","58ef411193bcc35e63834bfa85d32710"],["/archives/2024/09/index.html","2500111f5246e3c66002f6bd36ab9f65"],["/archives/2024/10/index.html","b828a818f016d399865b163fa4a3187e"],["/archives/2024/11/index.html","c774f2ba42d9335aef372044963a1d54"],["/archives/2024/12/index.html","91ea770cac032d9921a24c894b7333a6"],["/archives/2024/index.html","79d757436794ba90164371b21d75ca1d"],["/archives/2024/page/2/index.html","ff97cd8f7b7f1664fdb400cf83ef746b"],["/archives/2024/page/3/index.html","c7bd585579a45e8bced3d4764c4e2c50"],["/archives/2024/page/4/index.html","b2d78c063182a7093683ff307d2f2107"],["/archives/2024/page/5/index.html","c49e5bc5cb4c19f24cf0db13279b87e1"],["/archives/2024/page/6/index.html","26c32a4fa69988b14695b7833438bdd9"],["/archives/2024/page/7/index.html","b4cc9f9f33aa8640d7678b2f535ec9f8"],["/archives/2024/page/8/index.html","f2ecdc2020e8b5c0d66e03318ab104d5"],["/archives/2024/page/9/index.html","3a807869ba3f268a7a4406863e160c4a"],["/archives/2025/02/index.html","ff190cad380260cd589a22662e0fa213"],["/archives/2025/03/index.html","88427b82254c8a04314499996f1d81c8"],["/archives/2025/04/index.html","05f37d86cd51f05233742e0fefddf8c0"],["/archives/2025/05/index.html","00f23a97713c700552375586148e2b13"],["/archives/2025/05/page/2/index.html","1bbdd3e83e11b9a03b643ced671de8ef"],["/archives/2025/06/index.html","32b7026342e41ee1e3a8fd58a55a23fc"],["/archives/2025/08/index.html","f06ea8d60c1e3c56d0d939e972f5401e"],["/archives/2025/08/page/2/index.html","2f59415a8df7e71b619ce8b6553607f9"],["/archives/2025/09/index.html","f7811d0dec8caf78bf60d094b1aa80e4"],["/archives/2025/index.html","5e32248f4e0657dd2bc4e15d52ee7da9"],["/archives/2025/page/2/index.html","defef2042cddd2a961f2ab6a5ab144a2"],["/archives/2025/page/3/index.html","c046cb2d65628d115a09313565460eee"],["/archives/2025/page/4/index.html","1a1b0e625d45b38908ad371c15da5fe9"],["/archives/2025/page/5/index.html","863c8f05e48c4658e7d19e06114234e5"],["/archives/2025/page/6/index.html","5651a77f104fd562b4454c1280e101f1"],["/archives/index.html","ea778ef0f06301781d643401faab9833"],["/archives/page/10/index.html","cde2705f27a887532c53a9384d949ecd"],["/archives/page/11/index.html","e3ea357602653781c724ef616654db4e"],["/archives/page/12/index.html","ea71da33e69a19ad2cea8e7e4bfb1c09"],["/archives/page/13/index.html","5041262b41333b7d47b483d047fcf52d"],["/archives/page/14/index.html","52bdd3bc8e66cae953a734f61aaf1385"],["/archives/page/2/index.html","5e55e527e27b96160c5d0a16afd1d4fa"],["/archives/page/3/index.html","4dfb9772ded9caaf9ca2b7eb8462aef4"],["/archives/page/4/index.html","b427db7fe67ddfdbcf70a54f507e5a58"],["/archives/page/5/index.html","fa1bc9812411b7b5e9ea29ee0a3c7b58"],["/archives/page/6/index.html","f3ff7115a0aaaf2a7087de018f681706"],["/archives/page/7/index.html","ad8e781ac73e8ed0c070cfd276bea5e4"],["/archives/page/8/index.html","91d776c1db06f84f92d9e80cb0c5689e"],["/archives/page/9/index.html","fe6e077b9e3ba153125dad4823bdb627"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short11.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","0c786e1daae4590df70ee40984aa1e21"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short16.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","548791ca6dcf048ad0d030104d6d50a6"],["/categories/与敌同行/index.html","01f0cfa2ee43c7195fed8969afeba404"],["/categories/与敌同行/page/2/index.html","2761ef663013a16f589759867103d1ef"],["/categories/与敌同行/page/3/index.html","9927359676a8d7bd2623b31994e61073"],["/categories/与敌同行/page/4/index.html","91ed4ec88345c1cebd2b42f586fc5bf3"],["/categories/与敌同行/第一卷-双镜/index.html","f1a273b3484343617c77061051c347bf"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","554223212ba24834d753092167cec946"],["/categories/与敌同行/第二卷-信天游/index.html","2ee52c503c8eeae5dba4487a2e48dce6"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","74383aeb6872726c5ed480edad5f7a7b"],["/categories/乐园/index.html","77b53e5798658fb9bfa791b7c52419fa"],["/categories/乐园/page/2/index.html","8e7f19806969e21325a80b03f1b9b9cd"],["/categories/乐园/page/3/index.html","839458450712b1f851eccbf01ac4b9aa"],["/categories/嘲鸟之歌/index.html","489efff395e450e9227bfe009593432f"],["/categories/失落的应许之地/index.html","c5e7ae250170431d68b654d4d53f1d6a"],["/categories/失落的应许之地/page/2/index.html","b4991bd460b2f533a0dfbd1cf90d803c"],["/categories/失落的应许之地/page/3/index.html","419e8f77bf6a7ce8e42458585427aad0"],["/categories/月照天山雪/index.html","5366cd06f49c6bc2133f009537baa834"],["/categories/月照天山雪/page/2/index.html","475b60ec189ef45426d8b1b38358fdb0"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","f93eb17c472b5a7acf92ee85e64fd9c4"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","117ccb50fad3fdcf7b5cf191c1d83d43"],["/categories/狂飙，乱飙，发飙/index.html","fd5064dbc91680069f41c4db8e21bed2"],["/categories/短篇/index.html","42734207a795183fb26ea6e4021c83f2"],["/categories/繁城之下/index.html","28536eb36c87e5c5f9c99257629ba691"],["/categories/长夜漫漫路迢迢/index.html","2175833c20d42b98a523219ff92c2c1f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e32a4c9b4c71515c61793102b9338169"],["/css/modify.css","9bcb73ae7cc3a475d18aff154876338c"],["/css/var.css","b0d24834092aa9b886bdacc27d252264"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","60348a9002a298c7ad6c4339b987d383"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","899ae8bd02365eae79240defeed22adc"],["/page/11/index.html","bafe96529f744fd0aca4a01a90cd201b"],["/page/12/index.html","db744bc60e9c502e638d7b839eb89b7e"],["/page/2/index.html","64bbd1363658a644972be8c13b69a5fb"],["/page/3/index.html","9c6d711191e766f78b4fe0b7e906c85a"],["/page/4/index.html","c8344f0d40d87b31b5ac68d0d12c09a7"],["/page/5/index.html","c03e63f4791a04c2ce6736f49c081bd3"],["/page/6/index.html","5ab89e90e761aaf4ee9a359d981d91e8"],["/page/7/index.html","288b1dcd6b50dfa6f449db312c31a40a"],["/page/8/index.html","9c93c2ede2e68ab94471046ab2226c06"],["/page/9/index.html","8d7b1cc81ccb185eab5ccd67786095ef"],["/posts/103655302/index.html","553329d0351246a45cedf93c735912d6"],["/posts/1083795192/index.html","ab8fdc56746d7583e6e0a34273f17f7e"],["/posts/1099216759/index.html","2d38e665df753d0c0c71bab45e236b49"],["/posts/1104021264/index.html","83a968edfcd26221d1e6040d50dc88e3"],["/posts/1195093070/index.html","59629c3d028af6cedf87d852ecc8ed10"],["/posts/12506394/index.html","21fc8d0255b7091598cf135f6142aa7b"],["/posts/1272692100/index.html","cec9696a6a6921d274f215b2e5b01609"],["/posts/1304356361/index.html","375a4bc58684c0f583e8666a3c1e7812"],["/posts/1315809802/index.html","ba6aef16860f8aa178ddf77eacf9b9c6"],["/posts/1329165323/index.html","67644b653a521d01c1d05c64d739a00b"],["/posts/1378666774/index.html","07df37712c6e74e98ecbb59868fbd3e7"],["/posts/1400613118/index.html","21e0396c9275dfe9334f0ebfa32d69cf"],["/posts/1407316490/index.html","5d4ae94c9a83f12cad5f5f7dc265d852"],["/posts/1434824932/index.html","e3b4da1f750fde826217a09fe8eee9fe"],["/posts/1445707477/index.html","327f52656eedf489f67b7f216e9f8ee1"],["/posts/1465373355/index.html","702159170f992d7148ddaa326895cd0d"],["/posts/1500385898/index.html","1dd56820cde3aa897d9dd68c35ab27a2"],["/posts/1681850936/index.html","c72099629a9e8afdb714f5a2013540c1"],["/posts/1688557772/index.html","4734a032e51a38d5dd00898a293965d0"],["/posts/1710373156/index.html","e0f9f08ff892034c2a45c0f2b6f2b0ef"],["/posts/1720998546/index.html","253c34200304ed278f71e8791a7d5bf4"],["/posts/173005120/index.html","654a9eca0ded68ec082ffaf5d4e918b6"],["/posts/1766000773/index.html","7eeca669afe801b3c9d0160c6b571871"],["/posts/1845581652/index.html","1c306114272467d183f3c3dabc42ad8c"],["/posts/1988799958/index.html","f516fd9325a6d415008ea4fc870783b7"],["/posts/2080722358/index.html","a55cf5ef94a6009048231aa7b13da9d7"],["/posts/2192148155/index.html","4ebc2185a6f7447f98770b2edfe3c62f"],["/posts/2229302539/index.html","faf921129c89fc7115e7a9a6b0777872"],["/posts/2492968201/index.html","e91eaa1cf3060583eb18b8ed4a220da2"],["/posts/2531300956/index.html","644ac20681c78720a4b9a055620336fe"],["/posts/2869217975/index.html","b695449b02760f9e4586eca0416227eb"],["/posts/2888068877/index.html","2214c9e3dd2ab0e21ab8d0f27b3237b4"],["/posts/2949714254/index.html","03138c7fccc8c475b122d6647777a858"],["/posts/3002318373/index.html","4b7524bee1ae6e5a31e4d9a12ea930bd"],["/posts/3076558902/index.html","d81d17c45672157bcfaff9fc83d64a8d"],["/posts/3147359483/index.html","02f4ed17d97a3d77d1c8ff4b5471f32d"],["/posts/3191465731/index.html","f2ea361534324de67df323294ed83c79"],["/posts/320179123/index.html","dba839d8b409000454ad5ab4c8680730"],["/posts/3300469459/index.html","71cdca78eafe60b086c25ea6e8574800"],["/posts/330870226/index.html","8a7bdb62bd5820b0bda3b3ecd522cf91"],["/posts/345507944/index.html","d440e93adc5df26ae09d375f214348eb"],["/posts/3459697331/index.html","884db1c187bde9de71b8f23e2acf4288"],["/posts/3489395119/index.html","45dfc28cce3fb72be1e6ba59e52d8556"],["/posts/3525870963/index.html","efaccb3d6a7f201c6d0f263b2d4183fe"],["/posts/3591144765/index.html","98664d44928b3ed8c907990426441f69"],["/posts/3602722865/index.html","19bd96222df3342ea58ea428ead18a2d"],["/posts/3640780602/index.html","94c5ad515b9f8a48b3e3abc966d131b0"],["/posts/3679626959/index.html","0c84ea0563b083682bdc554e2e6c53e2"],["/posts/3699598685/index.html","8bfaf5b6f748e39ffd3323c2423d7283"],["/posts/3712900673/index.html","1f7409b8ebd659df99d9f9e71a27e76c"],["/posts/3770599674/index.html","5b633e0250dfcb6cc011e0c87a133e95"],["/posts/3788666127/index.html","257f5d4a522d63aca304aebe370fe6e4"],["/posts/3935350387/index.html","395d7a4fdcf3ae0ae03040ec59a7f351"],["/posts/3948778863/index.html","4f330ae9e35ad082798d5e475950a847"],["/posts/403803703/index.html","c91cdaff43b3e2f5bd8f4a923047f559"],["/posts/4041933047/index.html","e442e7871a05dd06779b6e77acbab599"],["/posts/4083669729/index.html","757fc04fd1bf61b0c329a76f851e3ff4"],["/posts/4110582124/index.html","b21909e051d6e768a05c1640b80d4b20"],["/posts/411074811/index.html","0eabb533418437c3082775d1b6c15faa"],["/posts/4113963045/index.html","6740e9217e91298740be81b49a2f52f9"],["/posts/4163174813/index.html","32ba1168ee62109b4a41643828e3837e"],["/posts/4185022581/index.html","78afa6e0757867a4f0ab1576dcf2a65f"],["/posts/4192746113/index.html","509f87d6ea8809c6ed73a4c0cc7511e9"],["/posts/597050941/index.html","241ac879187cf24243c4e8d4396e0f20"],["/posts/719776913/index.html","9ad63b12d5b234a25ba86a8134cd4902"],["/posts/741067372/index.html","abaad17f7ca9c2bc29ae862d6e11abcb"],["/posts/776340048/index.html","4c21d533050158b91610f3fb3ac65a1a"],["/posts/888354975/index.html","653f752c12acb4710e678a18f082a59f"],["/style.css","713fdc866eada48ff369fb075dd0a7ce"],["/sw-register.js","ec3fc73e001cf25f596aaa24cef4464f"],["/tags/index.html","706de7ed5423aa5eb8ba27eaa1f9343a"],["/tags/中国往事/index.html","e0cfc2af38a00ed69134a61b287ab3c9"],["/tags/中国往事/page/2/index.html","dc1a4311bea78a2952cd46177f0c93a2"],["/tags/中国往事/page/3/index.html","4791f2fe50d5351284d2c5f6c3c89491"],["/tags/中国往事/page/4/index.html","dbaf8eeee6b38fa0dabf3fe4900099ba"],["/tags/冰与火之歌/index.html","b62966ab2adf58576cdc10fd7ef85497"],["/tags/冰与火之歌/page/2/index.html","862e84e38295d3d2276b4671f6aea206"],["/tags/拍案惊奇/index.html","508f83768b338cb2b0c90976ca359920"],["/tags/指珊/index.html","2a5f7f32171c5ba5f3d973a105820967"],["/tags/指珊/page/2/index.html","00f97859aaf2ddd75986033ac5a29592"],["/tags/摸鱼之作/index.html","2fc8c1cd70157bdea2cff6f42c57ec14"],["/tags/日常/index.html","d98e896330e326c50b55d644b944c43f"],["/tags/日月凌空/index.html","16b9e733618eb78d1f3ca844a8550f4e"],["/tags/柠梨/index.html","8004015cca7de698a300ed0ef3050e26"],["/tags/柠梨/page/10/index.html","a4e6831695d8afe81ec9f65a18e81d34"],["/tags/柠梨/page/2/index.html","05c4add3cc3dc5b7d9576c405c20faac"],["/tags/柠梨/page/3/index.html","71ab064bebd2e2ca31e9dd9256163d13"],["/tags/柠梨/page/4/index.html","567f846a2245820a18701a1e998ee756"],["/tags/柠梨/page/5/index.html","578ba6ea7a3f154a5eac32289fe8f51a"],["/tags/柠梨/page/6/index.html","5fd87ea7b9d6f08d5a3056843fd68d6c"],["/tags/柠梨/page/7/index.html","a8f945c2aad93e0f692c97b6b8fad4e9"],["/tags/柠梨/page/8/index.html","8633a42fa32537bf13535bf739afad94"],["/tags/柠梨/page/9/index.html","40abb45b22c0869aa90df230f872f1e7"],["/tags/残酷法则/index.html","43e9492840fc7d4aada7bdf0c1d6f85a"],["/tags/残酷法则/page/2/index.html","2e5d3c51519d14f85e0e3d0b6e2977c3"],["/tags/残酷法则/page/3/index.html","e4c4bc7a4b5f154490ebca3c973abe9d"],["/tags/爱，青春与死亡/index.html","9cc720297b987f1ebb4681ca8e2e412c"],["/tags/狂飙/index.html","f78bd237eab7659897603f04db208a1f"],["/tags/都市传说/index.html","c403ee799d0356b6e926512bfdd3dcda"],["/tags/都市传说/page/2/index.html","47b57d050c1b4b489a6195a7e75c0271"],["/tags/都市传说/page/3/index.html","09ca6a0cef5bf46c8ccdcf3898a61783"],["/tags/镛武侠/index.html","433179e6f99a05c5a1a0eb21fc82e437"]];
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
