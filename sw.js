/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cb5c70bd4aadf75dc925ac8ffdbd7cd5"],["/about/index.html","98c5ccb99dc0c7a7ede9718bcf6d1cfb"],["/archives/2024/07/index.html","448f59117465df884725d1c3aa00812d"],["/archives/2024/07/page/2/index.html","3e7786efb3509b8ad94f23876c489ab9"],["/archives/2024/07/page/3/index.html","6f973a07a0e8eaee5b90762ea6dab9bd"],["/archives/2024/07/page/4/index.html","67873a4f211cd182336b1f1ee310d671"],["/archives/2024/07/page/5/index.html","ac9be40aa62f2b59c4bab8247c3008f6"],["/archives/2024/07/page/6/index.html","c63e706bd8a21f334f95c3bf5371abee"],["/archives/2024/08/index.html","df0b78166523661349cde77262957c73"],["/archives/2024/09/index.html","a1d19e76ffef0c5d70a7e9d20b6c9349"],["/archives/2024/10/index.html","66ed0cec8913d0f22650d02b02acdb0a"],["/archives/2024/11/index.html","5817516f3e4d0d236576213e6db86410"],["/archives/2024/12/index.html","bba0de1b1e6505ed07085dd5206bf419"],["/archives/2024/index.html","b2032a67766c9d952717f7c475ff480b"],["/archives/2024/page/2/index.html","845803f4d8b63b528669cafc18cd587d"],["/archives/2024/page/3/index.html","d2faee87baa894f63a70d40d930c41fe"],["/archives/2024/page/4/index.html","fab09897abacad5e9192a034192ebde7"],["/archives/2024/page/5/index.html","ec6b00f6a7f307fa7bf80ab5356bd88e"],["/archives/2024/page/6/index.html","217c286a7542d7ceba6771c502d866a3"],["/archives/2024/page/7/index.html","db35bbc0db646b06e4212e6fd7e7f97b"],["/archives/2024/page/8/index.html","f7cbffb1f4ec7c78a34e68bd5ac59dca"],["/archives/2025/02/index.html","4fb880d94eecfd1ce37a1bc9477ed4d6"],["/archives/2025/03/index.html","718230264af3fa35dffd57de03d6d67b"],["/archives/2025/04/index.html","ef9a60027d34e1f8c2e9e0b3d84cd4b0"],["/archives/2025/05/index.html","0a1d8f34d9de32df70340fc6d096565c"],["/archives/2025/05/page/2/index.html","4bd3861b15b379cac98ef0f4df9cbba8"],["/archives/2025/06/index.html","17222ac4ba9725cc98a2bd19b2cac126"],["/archives/2025/08/index.html","5161a29f9ab1a3ccbe699f5f86ef1c2c"],["/archives/2025/08/page/2/index.html","9f9a9ad4f7c84722634d3330ca0996b3"],["/archives/2025/09/index.html","2727177671421fdb3f949ed86779df65"],["/archives/2025/10/index.html","23d9f073a80eaa37c3fb6ac12031ba4b"],["/archives/2025/11/index.html","8278d011d123573ebd0e9d5d1d703f36"],["/archives/2025/12/index.html","19134d574ba6ae5d3cd75ec4a0b28357"],["/archives/2025/index.html","73f9f537fc35de440398d52d75a24d4d"],["/archives/2025/page/2/index.html","2e6e0f8813ed4b990cb387b7d81708f3"],["/archives/2025/page/3/index.html","d313df32261a677058d0d3e29aa97d1c"],["/archives/2025/page/4/index.html","166b450c1f5cd6b92d2a28eaa642cfa8"],["/archives/2025/page/5/index.html","aa6e571beed223f01b4adc49768cd782"],["/archives/2025/page/6/index.html","0f5d6800608acf2f7d75ad552eac85c3"],["/archives/2025/page/7/index.html","892757d4378c0860f7014bedaa41349b"],["/archives/2025/page/8/index.html","6784b6aa38e0e4b3e11e7590d6e5eee4"],["/archives/2026/01/index.html","67ab42ab05608f1a89cc10c5ddb691c9"],["/archives/2026/02/index.html","95dabb710be6eb7537adf11181c5c080"],["/archives/2026/03/index.html","105a10735370c014471da0b9467c9c9f"],["/archives/2026/index.html","0526ee2a320f42d9befdcdeb79215ae0"],["/archives/2026/page/2/index.html","a40f6450fcb02c5b41f96d9c14e43591"],["/archives/index.html","d7b4580c78bfbb654fb73520368eabdc"],["/archives/page/10/index.html","9bacf594ee346b0148f4ae8dee36ddda"],["/archives/page/11/index.html","56aa5ebc3f054732ef55fbe9a3324b8b"],["/archives/page/12/index.html","cb37d1b7112eb0dbf572ec04652a98fc"],["/archives/page/13/index.html","252ca75ffbf3d5083650665d97695241"],["/archives/page/14/index.html","830bb1ec32aa8491150e5cc5ad7251b9"],["/archives/page/15/index.html","a764e82a2a5036deb645c4ae738470dd"],["/archives/page/16/index.html","df0c22e1319f2dcbd9f55caac6f46944"],["/archives/page/17/index.html","3395f37526e59d49eb5523358efe41c6"],["/archives/page/2/index.html","66af35a68a3b7f6c8d10836104596244"],["/archives/page/3/index.html","fe60d5f4036c448e068f83ee20243415"],["/archives/page/4/index.html","51f4dd0c89b55f7f847b420f9bcf1bf6"],["/archives/page/5/index.html","53cc700e91485b74a06b79cb806d761f"],["/archives/page/6/index.html","9ff77407f49ae368ca2f8cce61374e5c"],["/archives/page/7/index.html","89b20b955619c692d27fe4accd273c86"],["/archives/page/8/index.html","19c1bd99c3c18e2a4eb0c2cf81048dc9"],["/archives/page/9/index.html","979f9b2f49df19d825a8b1ec9c651247"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/jybhj.jpg","855051bdb32dac6b6b2214b662e3f784"],["/assets/banner/lhj.jpg","343b0999baaaa6e0fdd600c03f2102e4"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/sny3.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/sny4.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/sny5.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/sny6.jpg","12f4fac008c279f4a1f41506995d038e"],["/assets/banner/sny7.jpg","bf0d0ce9dfe8b32ea465559b903bac87"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","2b2d22225fdcef535f5e227af48477b5"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/jybhj.jpg","f074da0cdf315a64a5d3e8aa3896fea1"],["/assets/cover/lhj.jpg","1afecd1268dc0d9779d5231b84bfbb19"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short2.jpg","84a851e0be682a3a37a2a3fc5165efc2"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/sny1.jpg","92158f93aff91b4ea1b1ff8059f2e953"],["/assets/cover/sny2.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/sny3.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/sny4.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/sny6.jpg","0e1b91307940debd8b8cf90e3517268d"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","bacb33b53ff2c3d1f312761306863b9a"],["/categories/index.html","a65fa5f758d6d6574feb26fe44818bc1"],["/categories/与敌同行/index.html","fda7005ee12f5c3546b3c8f231294f49"],["/categories/与敌同行/page/2/index.html","393ef6b3449913a2634ac08e72ab38f3"],["/categories/与敌同行/page/3/index.html","b0f07cd6c624c052e43d7fd86c6cce6f"],["/categories/与敌同行/page/4/index.html","2bb35200401a4878dbc0f46be9876832"],["/categories/与敌同行/第一卷-双镜/index.html","8ec36377bc54a88ccd47a97d15bdf15a"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","a97ae5560e7c8d3c7bfe081e926d0407"],["/categories/与敌同行/第二卷-信天游/index.html","d54ab96ff83e6ecdcb0866720f316112"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","cc1ce3cae9bd5c5e500539eb671b8c0d"],["/categories/乐园/index.html","71b0a0e178bd5c04f18a588c40bf1e72"],["/categories/乐园/page/2/index.html","b2e557f3a43833ec5f43c0b221a334be"],["/categories/乐园/page/3/index.html","c4ca07729698e5330973bd922af72532"],["/categories/乐园/page/4/index.html","7ddc964e90a736a874325377f155dbfe"],["/categories/嘲鸟之歌/index.html","e3630983a3fe4d76d7ef56d7a9459b9e"],["/categories/失落的应许之地/index.html","abb570dac85e4272fb7a46bf30874a74"],["/categories/失落的应许之地/page/2/index.html","061277231dc45bd0dc25f59e367d6ad5"],["/categories/失落的应许之地/page/3/index.html","eae1dffc71adea8642c99f950d848608"],["/categories/月照天山雪/index.html","2512124870218cbd119b11a75a15663c"],["/categories/月照天山雪/page/2/index.html","be14a3b81056cee3456db1078ffd9bbb"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","65e82c05e7cdd3de7b3fbe131ddd1fb0"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","a97716730891bb94f2522f32ae7ff0ba"],["/categories/狂飙，乱飙，发飙/index.html","ecbad53b7c0dff44ba64b3938e8a0559"],["/categories/短篇/index.html","36d087a76c0efdfbb621e4ef0d33aaca"],["/categories/繁城之下/index.html","54fa1bfeee46d7b671916857f81d9d4e"],["/categories/繁城之下/page/2/index.html","9b076d87d3a3dd0fe75ff7a2d5385d60"],["/categories/繁城之下/page/3/index.html","8d15b4e0ca8e4f32b3d48cc3528e0e23"],["/categories/繁城之下/世情篇/index.html","c4ef05a56af7b3d316342f01c016b027"],["/categories/繁城之下/世情篇/page/2/index.html","82a4bf28c44fc17341ec50fa356a1cb6"],["/categories/繁城之下/异闻篇/index.html","0da9a442b6a78bf1f5054a985c50445b"],["/categories/繁城之下/异闻篇/page/2/index.html","f59cdf9bf9b561f13daf1e1ff8734e2e"],["/categories/长夜漫漫路迢迢/index.html","3f858b6fffb0836e55f62ad11fda9953"],["/css/custom.css","ced04fc837e4b993e7356ed981248f66"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","95f54f47b18282392d91107e13c09367"],["/css/modify.css","b5e33d1c2512e72c292973587efda6cf"],["/css/var.css","c5aac7a7a8cba52df5ebc1e6a36cb894"],["/css/wiki.css","a3523deefeec9b17e60d6d9643a61a76"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/footer.jpg","ec252cde7c6d58359def0368b1a9a882"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","1106757e3a76626768e97e3630766316"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/theme.jpg","6fa6f8ecfe50d0b57187af9bf83254e8"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","4ff44bfd012242fee1f9b70091abd042"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/js/wiki.js","193ff94ce980e356f33402874cddee33"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","2ad0fb41e11b97f40181b6f793c2fa6e"],["/page/11/index.html","99ed0ce7f861f8d3a0efc3badbeeb9df"],["/page/12/index.html","5299fc6264d53bb4a0fd89c1d6b58bbb"],["/page/13/index.html","d88053e880f6c89df93701a8fac532e0"],["/page/14/index.html","f8c75663d180cb72b008a465fc919d69"],["/page/15/index.html","ef9bced134df82f9de7c6a15670a20d1"],["/page/2/index.html","23c132ee76989abea04ccf407342c8e7"],["/page/3/index.html","c0ce781760b0c41ddd74c5926b887207"],["/page/4/index.html","bcdf781067a264957b7da50f07f5cbf1"],["/page/5/index.html","d65ea7696d349dd5cad02f1f801e56a8"],["/page/6/index.html","8f9ad6c75da211ee922f141c4887fb65"],["/page/7/index.html","62c37407da54a0988d778d4a0ebd7374"],["/page/8/index.html","f96570ac6782725fbd0a3641ccc5981c"],["/page/9/index.html","040df61ddcd3941ce91d1a4a47a2ba4f"],["/posts/103655302/index.html","2a04de40036b5c49fb35e346b954b9c2"],["/posts/1083795192/index.html","bf920154b0641fe36fc87cc255caaa97"],["/posts/1099216759/index.html","ed848df09142341447324a5a065eff02"],["/posts/1104021264/index.html","99f147b7ac2bd5d09211774c332d15f6"],["/posts/1195093070/index.html","5d36658c4da65f0a2176f1d01d851921"],["/posts/12506394/index.html","1a6b56a65c3617dd6206ced6be6a8bcc"],["/posts/1272692100/index.html","b7069a1e0050831fbaa6adae6f8fda61"],["/posts/1304356361/index.html","335f0238cb25c7bca7ff46598defbd3f"],["/posts/1315809802/index.html","b7e6f8edae15ea5906d4da1cdfa64dab"],["/posts/1329165323/index.html","0d53af5193530c4d60bb274d85e5f1f4"],["/posts/1378666774/index.html","144fdbd5cbefbf2d9925b5527e3bd41f"],["/posts/1400613118/index.html","4624e18d44a29f6a658ba56aa03102f7"],["/posts/1407316490/index.html","8222663bc171cb5b57275f8ab0b642cf"],["/posts/1434824932/index.html","9560ca3b81456a1ea3e56e0d77e72bdc"],["/posts/1445707477/index.html","ac791846a310a209c6dd0ec6602986c7"],["/posts/1500385898/index.html","ade479f63765dc373c6b27ca44119747"],["/posts/1681850936/index.html","cd664dd51878d7e03912b9868d717172"],["/posts/1688557772/index.html","7056f97b39c8f0fff0b046eee7e13f98"],["/posts/1710373156/index.html","07a0ffbc1634faa1f2d29f83fea90b4e"],["/posts/1720998546/index.html","3450986f4f0013877674630417ff0288"],["/posts/173005120/index.html","b9f5e806fee79fc049b172a377d2dc03"],["/posts/1758837205/index.html","cea052c6b91972ce82974d32a7a3014f"],["/posts/1766000773/index.html","34c4e4e985db13a6e074029a1048e900"],["/posts/1771063266/index.html","3dfbf0b4b4c74dcce7260d1c4474cf75"],["/posts/1843191030/index.html","05fd3f888d5a86f94a1c57e82da555cf"],["/posts/1845581652/index.html","418354ebe9e1900956f390453c963c68"],["/posts/1859941397/index.html","ccb4afea7802341b9f18260a792fe68b"],["/posts/1988799958/index.html","d930b2c1d0548a7e463f07cdb64755a4"],["/posts/2080722358/index.html","c04366830850df18c38d098e3178f5ec"],["/posts/2142008032/index.html","a060f219f39481cc579b804efd5c890f"],["/posts/2192148155/index.html","63fae2c025c36796db142b2c2f94197e"],["/posts/2229302539/index.html","d828784ab83f7fe4e4172984c4d33137"],["/posts/2278904638/index.html","fee94c2b7161a74feff636ecbedb08fe"],["/posts/2303668433/index.html","78cd7aa7aba5b53e157dc4e6b6bf4473"],["/posts/2492968201/index.html","1b96fb8f349a7c1f3359c519da1e3624"],["/posts/2531300956/index.html","ea09179143f6e049af61c74cec433513"],["/posts/2616893247/index.html","db72d04d9d1dbef0e179701cc4eb1caf"],["/posts/263262350/index.html","80e6744553afab88ef6d1593270b94b4"],["/posts/2700096901/index.html","96183832e5c2bd37c257ee4bfe2d72fa"],["/posts/2869217975/index.html","793ba2edae0ba64640b20ccf6a4682f6"],["/posts/2888068877/index.html","9275db628903190b68d0dc331534cf85"],["/posts/2949714254/index.html","40cbedb210313489482dd8569a9ad0f4"],["/posts/3002318373/index.html","a0fd4b47717f33c6c4bd1e1783a86076"],["/posts/3071113195/index.html","b1567664f4b59ca71dbd4a92b2f460bc"],["/posts/3076558902/index.html","e89d1377450e1427ef7337a2cb0a9c5d"],["/posts/3147359483/index.html","a4ce00cb36cea248ce944cbae8eb587d"],["/posts/3191465731/index.html","f9c903c5056c7b2e73bc4213def7715a"],["/posts/3197223139/index.html","7c6193834c0b355ddbe6d8ac6d93f19c"],["/posts/320179123/index.html","cc728014ef989c854ab4dc1bc41fc2c5"],["/posts/3300469459/index.html","63eecf18c6a0e0a79241456ed2035dae"],["/posts/330870226/index.html","592a8f60ee1868ef8af289af91268d93"],["/posts/345507944/index.html","28940b9cae6cdc640dcaff6baf606b00"],["/posts/3459697331/index.html","41845ee52f85f9e28b4a4a763831df7b"],["/posts/3489395119/index.html","e959baf7fba9e5d503159f33393fbc46"],["/posts/3509330055/index.html","7850d9291ead31385f35d9bd59d98cbb"],["/posts/3525870963/index.html","f4bbeba80aca82af8a67b63aa2eff8d3"],["/posts/3591144765/index.html","32ffecec09020339b358f88842d4fa2c"],["/posts/3602722865/index.html","61c0834baa351c902396237b25517dd3"],["/posts/3640780602/index.html","1f90b04c6346b2e8e53fa8dd9faa28fc"],["/posts/3679626959/index.html","62e4a2f4be205771c202d2b744dc5256"],["/posts/3699598685/index.html","720d1e378ac4a6f1b38a1ae4522e1ecc"],["/posts/3712900673/index.html","35195bdca46617739d26a56df2744b5a"],["/posts/3770599674/index.html","12aa58bedc07946afcb79dee3c32d9e6"],["/posts/3788666127/index.html","b33286952d6696a44daa18a2d644cba8"],["/posts/3935350387/index.html","f45cceb5758f6d89577344d89a498f0f"],["/posts/3948778863/index.html","76d3256340f52595388a9f9fe8d985e7"],["/posts/403803703/index.html","c8959e675f70f8900f20a9c9f0ca0989"],["/posts/4041933047/index.html","fee5e8bf1ae5e640ce32b2900e3f8665"],["/posts/4083669729/index.html","3f6e2efca85dca5927b6c32f2bee18b6"],["/posts/4110582124/index.html","c052a5dd92324d05ae6adc1edd140a1e"],["/posts/411074811/index.html","f77bb23a36a08eb2b75fcc1bf1566e97"],["/posts/4113963045/index.html","1c3f33ed1894b9c21540d1776f6288f9"],["/posts/4158435381/index.html","abf0adbdaaa4174b97d09a75615855d1"],["/posts/4163174813/index.html","b32ccec13a2f1d09c53dcfb49e497506"],["/posts/4185022581/index.html","f7bf5ffde5c153b57d858522e9b3457e"],["/posts/4192746113/index.html","79e9cfd40b5e06bfe16eb4943f034e61"],["/posts/486850400/index.html","9ef6be39469e88aceff10c57048fa3bb"],["/posts/591853658/index.html","27fda38f776f6bce141df7f26889d209"],["/posts/597050941/index.html","d68c3294240138f31e746bfc651fe755"],["/posts/719776913/index.html","07016b630acc4673bfb7df602029252d"],["/posts/741067372/index.html","68b67bbc0df002d331bfd60c702f6290"],["/posts/754695723/index.html","93072ee9704c1909462f1b2898b1b9ad"],["/posts/776340048/index.html","14444eb4fce210e7ae1bf37fc399d158"],["/posts/838031284/index.html","258f89985a40fe2ac9df560dffe6f2d5"],["/posts/888354975/index.html","7e88c33fa6b4459e5f3ba6878f75665c"],["/style.css","50b27974f42458f15315fae28d86486f"],["/sw-register.js","ef063053ae7aab231620558cc171f08f"],["/tags/index.html","5c2453113ce677a890f3d65faeca1c8c"],["/tags/中国往事/index.html","953ac530a59e27b597e1b4df1af49593"],["/tags/中国往事/page/2/index.html","f2af9ef1a665df204436d06e7bd1170d"],["/tags/中国往事/page/3/index.html","37a8b1351114e2cf1ee9eff976d592df"],["/tags/中国往事/page/4/index.html","443906272988611813060b45b630dde1"],["/tags/冰与火之歌/index.html","9ff645e8794d7198901c65c19ffbedba"],["/tags/冰与火之歌/page/2/index.html","51e751dc090fca63e5440c36fefd773f"],["/tags/拍案惊奇/index.html","57ec6b722ed55024dfe83033601dc44e"],["/tags/拍案惊奇/page/2/index.html","5474ef39579c65037ee4d160c943b60a"],["/tags/指珊/index.html","a3a443cc6b6dc35751457067f33b7a05"],["/tags/指珊/page/2/index.html","2ab13e97839ba8167f4187e29d995f14"],["/tags/摸鱼之作/index.html","0a7f357dc031d303fce99613dc64ce52"],["/tags/日常/index.html","2b2c8e35e9e9fd161d2d68bd988cccd5"],["/tags/日月凌空/index.html","f993e3bf08cf139ab455f2f31e4e9de1"],["/tags/柠梨/index.html","a7810ca121434844667e9fdd325f52e3"],["/tags/柠梨/page/10/index.html","b7f6709c7393b9cd8d9e6d89c267c963"],["/tags/柠梨/page/11/index.html","e4c432fafc37b54d8cb3a236df85f400"],["/tags/柠梨/page/12/index.html","fbc1ab2181bf72c9da59ea8a16b6c86b"],["/tags/柠梨/page/13/index.html","260e751a44fde26afa20f5df84b28a25"],["/tags/柠梨/page/2/index.html","78a52f84adb4c6fdcd4d628a5ea78ba7"],["/tags/柠梨/page/3/index.html","6eef3286e2e8e3c7dd6db53107c77ccb"],["/tags/柠梨/page/4/index.html","a99c4269f13a0a435f08f1321d248c12"],["/tags/柠梨/page/5/index.html","f43d8236ab43e7a4d7afb49900519b4e"],["/tags/柠梨/page/6/index.html","69e109fd06d87291d5613f324b2c9d01"],["/tags/柠梨/page/7/index.html","45288feb3129c50aed37e7fdc2ae0238"],["/tags/柠梨/page/8/index.html","1d8ffa97afba36d3c02f5200b7c86df2"],["/tags/柠梨/page/9/index.html","22507fabd4562f83bee707d6aaca68dd"],["/tags/残酷法则/index.html","540dfa04f897df77e1ff416020a5a979"],["/tags/残酷法则/page/2/index.html","68106bc4c21acac5f03ff5f1eed0184d"],["/tags/残酷法则/page/3/index.html","c23d1fb092b4617281b4f85a2e80dab9"],["/tags/爱，青春与死亡/index.html","a3eb61ac04f9be5415db6c2fc13a4e2e"],["/tags/狂飙/index.html","de5b1ecdf36949f38e6ec5aff2b99b36"],["/tags/神神鬼鬼/index.html","166369891dea6b558a5f4171f7b98ad3"],["/tags/神神鬼鬼/page/2/index.html","21ec1373de6c08ff53671948a77b6650"],["/tags/都市传说/index.html","be89b11f78771b55dfec8cbeb201c8ca"],["/tags/都市传说/page/2/index.html","35e38d83a9115616dd025d473c5a0968"],["/tags/都市传说/page/3/index.html","c6db5fa7cfa363dfa7fd1591d3523dcc"],["/tags/都市传说/page/4/index.html","2f3dd6eb9f744d63de465a282054bfad"],["/tags/都市传说/page/5/index.html","484a0b7223d0bf29cf7f769928cea305"],["/tags/镛武侠/index.html","f0311fe5a41a0090fa819a671c823e84"],["/wiki/index.html","1b3278b2148db255d96395bc09ce8729"]];
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
