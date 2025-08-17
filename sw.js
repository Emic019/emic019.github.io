/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4d34846b70967a7f686dc78d96f4b38d"],["/about/index.html","d6db9b69c9cc995cd891e268400d4a7a"],["/archives/2024/07/index.html","735b891510e820d528648c2b02b3ee13"],["/archives/2024/07/page/2/index.html","f07a70a34a90858364261782dc50b892"],["/archives/2024/07/page/3/index.html","fa189fed0799f14708f3a9baf6932555"],["/archives/2024/07/page/4/index.html","8c70fa10d170b649ba39622afff3e1ce"],["/archives/2024/07/page/5/index.html","04b9452668df648c95a57ba3ebe0b29b"],["/archives/2024/07/page/6/index.html","f710fdd511e37a5acc0906e2d01b5164"],["/archives/2024/08/index.html","fb28c4a90b1f47eebd932d4699f3c808"],["/archives/2024/09/index.html","8bee58602f6c9031753b46227a603467"],["/archives/2024/10/index.html","8be079725062f9129a7401b96cbea5f7"],["/archives/2024/11/index.html","64c9bb6b1e5294315f2bab84eac674a8"],["/archives/2024/12/index.html","7c3f8d81f15c2c66483e2c4e4b543e09"],["/archives/2024/index.html","401a4d6670b2755b7f0ad7f1c7aa22ec"],["/archives/2024/page/2/index.html","3ad21224892792c1fbc4c87920c3c799"],["/archives/2024/page/3/index.html","0fc41fcbbe5a126236bd5c5a1677f12e"],["/archives/2024/page/4/index.html","895754d5ac0b01515ae37b8ffa65d1cc"],["/archives/2024/page/5/index.html","7b76306ebb687b2046357051d9214ebf"],["/archives/2024/page/6/index.html","a081cd60571a172fd34e5b63ee4efa0b"],["/archives/2024/page/7/index.html","d4674920e989144921d912a882984880"],["/archives/2024/page/8/index.html","098d50cccf3627d4efd63bd69207b612"],["/archives/2024/page/9/index.html","b7b073e4da3bb5875aeaf40795067813"],["/archives/2025/02/index.html","9ce7e0447d41def59ddc6419456e411a"],["/archives/2025/03/index.html","c0683ece76f1ae2ccc23a6028beda992"],["/archives/2025/04/index.html","db504190b080c26d9973fdb71e7fcaec"],["/archives/2025/05/index.html","9517450aac689f904aea738c9b1e4c67"],["/archives/2025/05/page/2/index.html","c08ed6f52a7273f8386992b6b658f139"],["/archives/2025/06/index.html","675a85e5268877af69a93a38018a29b8"],["/archives/2025/08/index.html","f010466aa893adc9857c606fb7bf0eb4"],["/archives/2025/08/page/2/index.html","c65e11763c53674b9d5970e213960830"],["/archives/2025/index.html","fd24c728a0291d4136141087a5b9d435"],["/archives/2025/page/2/index.html","d263ed2ea6e358d15eaac6c94fc8565c"],["/archives/2025/page/3/index.html","73724d88fb4f33ba4de7041538d4bff9"],["/archives/2025/page/4/index.html","f7d86bcf5a42fc0643964108334846a1"],["/archives/index.html","bf7d709ecdb790eee008636d1632f687"],["/archives/page/10/index.html","fa8372067e94ad6c85d50d0034b292a5"],["/archives/page/11/index.html","269c692ca06da75c56487373af5116be"],["/archives/page/12/index.html","6c333e9e7487452d30a768ae1731f351"],["/archives/page/2/index.html","ad5f15e69272693863700dd2e499c36a"],["/archives/page/3/index.html","764cff5559fe246a95286141baeaed4c"],["/archives/page/4/index.html","cc70d5dd94bbc2c55c155563db71d805"],["/archives/page/5/index.html","e2af91a25c2c58c33b47d771a0031c6b"],["/archives/page/6/index.html","7785fe20da5155a2e5bbfea33816e2a4"],["/archives/page/7/index.html","b4dd3168d38e2b2fd2b20545e8bff287"],["/archives/page/8/index.html","883f1b1cb7a099e12540675beb9cc34e"],["/archives/page/9/index.html","2263ab97fd43014dd4ccfe19daa7bb0f"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short11.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ly1.jpg","c798ae9035fe2d26036e82209e0ef727"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short16.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","7cb9e04b015d6cb4f8d5712241b5d15d"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","10bf6a35462d140ea6d65baa2d2f6965"],["/categories/与敌同行/index.html","81511ef47b46f5e6efc6102bf4296184"],["/categories/与敌同行/page/2/index.html","477be8c9b55889f3e9ab684093c11836"],["/categories/与敌同行/page/3/index.html","91cf97934f2009fc0157510d16eaa843"],["/categories/与敌同行/page/4/index.html","9c997dad171df57f91eb137912a75913"],["/categories/与敌同行/第一卷-双镜/index.html","3dc3034ac9e0d931e661faf4b5cd43dc"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","258af53b475d2657ae663e6cce343ea6"],["/categories/与敌同行/第二卷-信天游/index.html","9eb1b84b0cce2bec527af09748923fd9"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","f94661b65ff97b7783dcca55bf9f2e04"],["/categories/乐园/index.html","8577cbfde62516aa67b5fe772b4583c0"],["/categories/嘲鸟之歌/index.html","c34462440836d7964344095f945bfb90"],["/categories/失落的应许之地/index.html","c5640fffc16680e9e3313453abf5f56a"],["/categories/失落的应许之地/page/2/index.html","1ab56c51c3b4a1b1d4e2c22fb7297b6b"],["/categories/失落的应许之地/page/3/index.html","e8d8236bcbb31fc444be77674d8e8ea1"],["/categories/月照天山雪/index.html","f153d1d952d25e770e6e10bbe367c90c"],["/categories/月照天山雪/page/2/index.html","ea0b7f46ff452d480f1ab6cfbaa1bdc7"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","a49d611ea5d29a5f39d9c066fa23207a"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","428d267207419262fab6931418259fba"],["/categories/狂飙，乱飙，发飙/index.html","c96c987ec69df26bfde886f51595f935"],["/categories/短篇/index.html","11997f4955c75019f98ae0854eafb1e5"],["/categories/繁城之下/index.html","9c41063e9d5a38e8e4f8133667f5b656"],["/categories/长夜漫漫路迢迢/index.html","0c5b83f508bca902650904a96aaad7fa"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e29bdbc856e4a569bcd2f5b818f04b21"],["/css/modify.css","9b3ae9c3f7bd27c4a46c2709153230e8"],["/css/var.css","ab7c868474dc49c8af8280fbbd2abd19"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","126f041a05b4a6e8a454d8e7034a2fba"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","d98140648e84e66ea4083474854700f5"],["/page/2/index.html","baf32598153e549462a1d45b6a226f88"],["/page/3/index.html","2bc63be16ff6a9fdc8de7c5a76b91a4c"],["/page/4/index.html","9b6ce81a4c773f6014b919f7bf6eea24"],["/page/5/index.html","d45f1554876d2b5beaf1baff291d649c"],["/page/6/index.html","598ca2446b425f1a9295c07d9a0a11a1"],["/page/7/index.html","7d649c5863a329dbc5c1a2e34a6b9c91"],["/page/8/index.html","591135d1aff4719753515cde79957a34"],["/page/9/index.html","d89c18b851a07d6939f00c5eb3c159ba"],["/posts/1083795192/index.html","1233abfbf0bfbed2c753974df2f86a16"],["/posts/1099216759/index.html","ba11f99e243cac1473a2ec1eede323bc"],["/posts/1104021264/index.html","4de9ceb9c17783bd1ed1b0350e3eb878"],["/posts/1195093070/index.html","c82dc79ae3c94d4fb85ea11b700d9987"],["/posts/12506394/index.html","8e9accd6197ce9c7745ac2afb24d7380"],["/posts/1304356361/index.html","2115143f9cd740439768697337e95d8d"],["/posts/1315809802/index.html","4727253c893a59e5d1caab616eff2e0a"],["/posts/1329165323/index.html","b78e3922bc3ada2a021d81eb48af747c"],["/posts/1378666774/index.html","159d718e5369988c629c0361ec5222f3"],["/posts/1400613118/index.html","3def2ddc216980bfe5065ffa21459424"],["/posts/1407316490/index.html","5762c9e54b45543ea13bc55b475231d9"],["/posts/1434824932/index.html","dd9b8eac8ad8102740fca5480a211cb7"],["/posts/1445707477/index.html","8069258e25950194df6193e5531818be"],["/posts/1465373355/index.html","49da0f8026c3ef7643f910471d7100f5"],["/posts/1681850936/index.html","adc0ae0e27209eb1708691fcaa720c13"],["/posts/1688557772/index.html","6e6b5bee0e744e52293e4a1c71ea30d8"],["/posts/1710373156/index.html","75c8f5a7fcb1ce6159a3cda0c37b1ba4"],["/posts/1720998546/index.html","39f709fe929be3cc2a479e66b31a7470"],["/posts/173005120/index.html","b6e3f7aef288103e41968b6fbbe4398f"],["/posts/1766000773/index.html","533d91991a7d20d99d026debe454aff5"],["/posts/1845581652/index.html","356c707b5efcf2e5643ad67f59b7eb9e"],["/posts/1988799958/index.html","f15a76e913464a0f6085ccb99ca84628"],["/posts/2080722358/index.html","5c240c82bd8e19107298c9ae0626354f"],["/posts/2192148155/index.html","044020a704daff75d9f6057737060aad"],["/posts/2229302539/index.html","09c223c03b7677785bbb188cc700cc2d"],["/posts/2492968201/index.html","2aec71c95e4dd8aaf70f37f07c52214b"],["/posts/2531300956/index.html","e7d52ba92f2074e21f9e7f13f324cffe"],["/posts/2949714254/index.html","cef7b47415c0fc25f9334b0554745f40"],["/posts/3002318373/index.html","a1b2c783ee78baa8b10be1b7e7a12e75"],["/posts/3076558902/index.html","2f2ce4e2d56a48e0b10bc3a59f0fa684"],["/posts/3147359483/index.html","b47f195e7f129521bd508f5abc459ecb"],["/posts/3191465731/index.html","ef296f2b024e1493f3eb3586b46016c1"],["/posts/320179123/index.html","9f56894728634da504b7ce12ac1653a7"],["/posts/3300469459/index.html","6c8291d694cbca3dbb47171a0e2adc2d"],["/posts/3459697331/index.html","502d3b1a4b59f62226b80658de63db71"],["/posts/3489395119/index.html","9de0065ba169772d2365ad06fa1868a6"],["/posts/3525870963/index.html","08a180bb615619379211a4a454031b79"],["/posts/3591144765/index.html","271616a39210d89f3ed97963a595fc11"],["/posts/3602722865/index.html","08f6588be9dc690ad40ab80238d44309"],["/posts/3640780602/index.html","538acfc0b1338e6a7888c076041b1b9b"],["/posts/3679626959/index.html","6640fa44ed7e703a960e3368c84b054e"],["/posts/3699598685/index.html","ef39d1d914c271c85cd12496d7554ac4"],["/posts/3712900673/index.html","3e7f6517aa5a71b59f7e55e78be92afe"],["/posts/3770599674/index.html","804ae332157e1b2be58cf2f98a92574a"],["/posts/3788666127/index.html","52556b65cceed0a687d43ace0afcc9c2"],["/posts/3935350387/index.html","04e2a0b84d66aa641a9926e868a33a10"],["/posts/3948778863/index.html","c6200cf6ba1b18ffa97e34187fae524e"],["/posts/403803703/index.html","6e80b3b55ff0c0f66820192da60f7e92"],["/posts/4041933047/index.html","ef2c7ff5ca7986473ce850431fb9ddb3"],["/posts/4110582124/index.html","c38f68b5314f11b72b2e58034d8b79c8"],["/posts/411074811/index.html","b96e86ecf7b9699291de012c289119f8"],["/posts/4113963045/index.html","a2ac36dca49d8a4e86cc4fe54543c4fc"],["/posts/4163174813/index.html","f5bd64e2e7ef9bd8face32ddd11bc8b7"],["/posts/4185022581/index.html","5fb9550cfa3d3e1236938118ae6b72c6"],["/posts/4192746113/index.html","814f68f153ccf27bf0ba5566a8ee36ae"],["/posts/597050941/index.html","a9967b6f38471cd0029e553bbbb549f4"],["/posts/719776913/index.html","43eecb79cce99d47e456e847f81130f5"],["/posts/741067372/index.html","ede89dfb0a10cca63b362afe135e680e"],["/posts/776340048/index.html","cfb13366e68f8b68cb0ffca8bb0f78dd"],["/posts/888354975/index.html","05fdf2f9a0488b40767d063ecd429566"],["/style.css","ae768b8ee490b5f7820a7e1cc10c039d"],["/sw-register.js","3be7c31754aaec5137d32797181f4a29"],["/tags/index.html","edf75c405f9a79d93b804fee93d3bbfc"],["/tags/冰与火之歌/index.html","bc610403f0301f001265364319037ca3"],["/tags/冰与火之歌/page/2/index.html","054dd666be44b90d75a0bbb927e11a93"],["/tags/指珊/index.html","77fff6fbb8717cb80fbe646e6ecf7e5b"],["/tags/指珊/page/2/index.html","17c0ead6c2dbc9d671723038bb3ce8c9"],["/tags/摸鱼之作/index.html","f42e4c6c603698266ae66a5eeedcd394"],["/tags/日常/index.html","e9bda14b70476e4070e2bd458fc2b20a"],["/tags/柠梨/index.html","bfb5465030b7defafe18b9d9d748894b"],["/tags/柠梨/page/2/index.html","d02b8d3382811068df81fcf8a2e647e1"],["/tags/柠梨/page/3/index.html","6ff3c02c58dc1da48cabe810a045b3c3"],["/tags/柠梨/page/4/index.html","443605814fb9ded9deb40352b22065a3"],["/tags/柠梨/page/5/index.html","963d12435bc4a0bb94859c52e4bdc914"],["/tags/柠梨/page/6/index.html","8bdcb24811249f33fba21a9c8e7dbc78"],["/tags/柠梨/page/7/index.html","b12f3b94e187e812e3473dac9b1e1775"],["/tags/柠梨/page/8/index.html","6398f3cf34a50b2759fa8c514d08e1f3"],["/tags/狂飙/index.html","171c374dcdd9e4fdcbab4f48ce63f34b"],["/tags/镛武侠/index.html","00e9e602bcfcb59837199207ddfade28"]];
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
