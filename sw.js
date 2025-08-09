/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","952185a4f5d98c9c711a6035d727b610"],["/about/index.html","4cf1f784b1726a124e7a22e3144f2d74"],["/archives/2024/07/index.html","71edda5ab967a68642b7c4bfd4b14d8e"],["/archives/2024/07/page/2/index.html","21005ce3538ccd5efdee1df8f782bd8a"],["/archives/2024/07/page/3/index.html","04e7f5ae5d0784dcfe33279bb83ea6d5"],["/archives/2024/07/page/4/index.html","72208d3d97db67f9f7b3959333dc267f"],["/archives/2024/07/page/5/index.html","63336f9025bc26273a3a60d8b2b2f4af"],["/archives/2024/07/page/6/index.html","e0887838b1800ff505c4340a455f34f6"],["/archives/2024/08/index.html","954e993137296ffea033a70306301612"],["/archives/2024/09/index.html","67c6ce2b7df76c8e5bd4d8ea6f144842"],["/archives/2024/10/index.html","dee7c06c72c26fc59510d5c17bed63d3"],["/archives/2024/11/index.html","0a996e8b0de220221c6e436f7536dcf5"],["/archives/2024/12/index.html","0718c3301d947bf9ccffa6a8c2418659"],["/archives/2024/index.html","7f105b98b27d4d5cde76155586a127b0"],["/archives/2024/page/2/index.html","669670c7d2d2418183fbe9d6a692e5ab"],["/archives/2024/page/3/index.html","6d287a09ca366eebd47d89ed5ee612a5"],["/archives/2024/page/4/index.html","82bc9f3dd30163c05aca4324a838a7c0"],["/archives/2024/page/5/index.html","4ea09c29d376cf5d445c58458552e571"],["/archives/2024/page/6/index.html","99000ed88366bbf8f97af4aba6f3630d"],["/archives/2024/page/7/index.html","e952143efb95d223cc075a717f8fb3f8"],["/archives/2024/page/8/index.html","fd551d8c70f00e3853f31693d5b38a03"],["/archives/2024/page/9/index.html","f07dc4caccb03dc327cacb239c45a6e3"],["/archives/2025/02/index.html","61492b167e034b811384e1e2e0367546"],["/archives/2025/03/index.html","e7c4430a82a2dd8a8d8759c1b6f71da1"],["/archives/2025/04/index.html","7b5ff2fca104600ce147f0489fbfbd7a"],["/archives/2025/05/index.html","9f6954425c2459302cb435862fbf6f74"],["/archives/2025/05/page/2/index.html","733ce4c735fe862b98862b8ccaab8cb9"],["/archives/2025/06/index.html","6c2334c5a8d155a8f325336e7342dadd"],["/archives/2025/08/index.html","22afbbed2a1afe3715a45f846174ee1d"],["/archives/2025/index.html","6a7418d1047b592162b09924675d48d1"],["/archives/2025/page/2/index.html","807d6a218caea7748fe5569a7443ee39"],["/archives/2025/page/3/index.html","2e52b2ece52c87e914fbeea9064dc681"],["/archives/2025/page/4/index.html","c60e4f05950db748226666761607812b"],["/archives/index.html","c170e1dd39780d09cb4834614d3dace9"],["/archives/page/10/index.html","ab42530a09848e577a299174f923b76a"],["/archives/page/11/index.html","3f974e660382b2769a1cb9ba6915fbf1"],["/archives/page/12/index.html","9bfa0f572aedafeb4194653c2ac87602"],["/archives/page/2/index.html","915cdbd9b04a4db21a99a2b369d54a55"],["/archives/page/3/index.html","c09f2da83631ea7afc3876cf3d28e739"],["/archives/page/4/index.html","811eca13a881e7e114415d2f02e4cd8e"],["/archives/page/5/index.html","5639f4616053031a1aab3c662f3c9703"],["/archives/page/6/index.html","b88bd37b28f1e280a450c043e80eeb7d"],["/archives/page/7/index.html","b88159569c923ee8888cc549359484bf"],["/archives/page/8/index.html","b02f55ae138e6a777d2d8dacb6ecf422"],["/archives/page/9/index.html","cdc879674320dd9b88b6e11c73a1e51b"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short11.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ly1.jpg","c798ae9035fe2d26036e82209e0ef727"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short16.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/assets/别和数据聊感情.html","bdfdd56ec4b7c8b243a0ffcb736e0e7e"],["/bundle.js","3b6e210d8226170628031a861f28c323"],["/categories/index.html","d7f60d6f27898551ca9dafa1a1805203"],["/categories/与敌同行/index.html","6787ff130ff29efbebf4498df3fc1e1e"],["/categories/与敌同行/page/2/index.html","73912c45f9516e5921468c40823ee532"],["/categories/与敌同行/page/3/index.html","1f2dfb066b155d91caf242c4b9f10f57"],["/categories/与敌同行/page/4/index.html","52175202db2aabcc85e75ddc97045a76"],["/categories/与敌同行/第一卷-双镜/index.html","b420e32410186e226b5634f8a92f6837"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","604bcb46508695104c552e731e969f88"],["/categories/与敌同行/第二卷-信天游/index.html","2ab1f06f0c442764d68c3ae63e71c2c2"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","8e817587200d1dd91ec1c5e687a96a51"],["/categories/乐园/index.html","fde1694482e6dd315e4275925306a699"],["/categories/嘲鸟之歌/index.html","e9e88361e8b2a44e7a6d3e2605ee16f0"],["/categories/失落的应许之地/index.html","2b3ce338f7e16416ff6962df172d41e4"],["/categories/失落的应许之地/page/2/index.html","4226f77b83a138099c1ce6aa214b5206"],["/categories/失落的应许之地/page/3/index.html","6cf2fa2ca69c7931a1071cfee20401eb"],["/categories/月照天山雪/index.html","d431b96abd2ff33882b07dbe9d7af38f"],["/categories/月照天山雪/page/2/index.html","5b4ca8ca30c9fcc81b88251c7ae7f32d"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","a34ef1f18bde5c2f1bd6adc84f9fbd79"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","2c86b29a4c9d35f0248cbbfb7c047ec8"],["/categories/狂飙，乱飙，发飙/index.html","06248026c3f18ba8ea6128978c4be5b5"],["/categories/短篇/index.html","90029675dcd688158283879a4b433cb9"],["/categories/破戒/index.html","9f74abd91a17704ae72ec1b0e7d6046a"],["/categories/繁城之下/index.html","a93ca77d8d784e78dd98e6c14eb0c1fa"],["/categories/长夜漫漫路迢迢/index.html","65161a2bc11e83dc4fcca5f7c46ff73c"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","275ac564c63c8426a15e9bc8ec67f7d7"],["/css/modify.css","823ac2f8754fa05c0dedbdbae29dbeeb"],["/css/var.css","458169e200bc80215f67ed99c1fb823a"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","81c8002c301f252c32e986107ec4da3f"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","fd7722f363edbd6ea02bc62a5177ff26"],["/page/2/index.html","70e37de40e855ac1fec9b38d22c5eb93"],["/page/3/index.html","9377e519c8ada12270c1a5860ce38dc5"],["/page/4/index.html","11a14142fd75682ca0b4f3edab204372"],["/page/5/index.html","ec968be5b9e03d0b258a621c903cef4b"],["/page/6/index.html","355a1073d9b9669a0c4254b2282a66e1"],["/page/7/index.html","d2054e45444b79f6d6511608ee4415da"],["/page/8/index.html","374e25af271ebfbdda8b129cf179dd67"],["/page/9/index.html","ddc7b65ee0cec6ffc31739248cfb332f"],["/posts/1083795192/index.html","6d7bb7fc24510349dc0ac074a7e5bcc4"],["/posts/1099216759/index.html","5f7f98282d7dc72c17e5cdbab1d305cf"],["/posts/1104021264/index.html","6132423c27c7bebbdf0e3a87765f8dda"],["/posts/1195093070/index.html","ff30c774bc73b9e9c1f4e152636dc553"],["/posts/12506394/index.html","6b9c602d1bdd54c4eba1f41ced7d8508"],["/posts/1304356361/index.html","9c3fa59be14d7495286dd8a3f3f5af8b"],["/posts/1315809802/index.html","86164d8064cf41e2ab1e180f271f85cc"],["/posts/1329165323/index.html","12b5fbb5a6cbeb4c13cbd1f3de985b49"],["/posts/1378666774/index.html","163d6d68afca3eb3bd893ef6d1ac6bfd"],["/posts/1400613118/index.html","cd976a45b1446df09577c9fbea775cba"],["/posts/1407316490/index.html","2c9d88e394d64c1053cb31558b0ceaac"],["/posts/1434824932/index.html","421f02817c505f546505d5b945f01961"],["/posts/1445707477/index.html","ad558eb392a2462cf600ca38f854e4df"],["/posts/1465373355/index.html","cfd92034c0c9027b967dd3931f462830"],["/posts/1681850936/index.html","9f9b1ea686799d3a8f98cad1a0c72916"],["/posts/1688557772/index.html","0f49d1f8ea095346e3d82270b6f7044b"],["/posts/1710373156/index.html","7fcc50bf73ffeb18f197fa6694f081b7"],["/posts/1720998546/index.html","bcd046494fedb7e5fd3da82d9193509f"],["/posts/173005120/index.html","3660dbb0cfd47a445102e64915170134"],["/posts/1766000773/index.html","b5e1130ab6757e78058eb00ca89e385e"],["/posts/1845581652/index.html","b2af0bd0322c3d6d78f31e07a682e73c"],["/posts/1988799958/index.html","57a0561dd38bd7ce6393236c0f338253"],["/posts/2192148155/index.html","91d6264a5020280669c1b8a8f07ac56e"],["/posts/2229302539/index.html","db89e71f5c92febd0e795bf3d5d17e00"],["/posts/2492968201/index.html","23344ae21ab8de45a356bc95742e1aad"],["/posts/2531300956/index.html","bfbbfa646db31f8f72907db4e3a66994"],["/posts/2949714254/index.html","f58696a8c98c3217d838911fbac86bd2"],["/posts/3002318373/index.html","370e1ea319c30b400af7c75454227c59"],["/posts/3076558902/index.html","1c1a3a7135ebe0ff48352d32da70d131"],["/posts/3147359483/index.html","abc55d27edd88fba911120990ee6f814"],["/posts/3191465731/index.html","feefee2e91423c36abe68fdaf28c64f0"],["/posts/320179123/index.html","84b6bb313a316a62f8d4cb810d707bda"],["/posts/3300469459/index.html","d852038d1f7c6fb88ef72ab53f58f241"],["/posts/3459697331/index.html","5c89a3e0c5ae14776a18f773d1e9c3f2"],["/posts/3489395119/index.html","d5777ffba6a82970b0b26839b1c146f2"],["/posts/3525870963/index.html","384382199dd88d0182b7d1fec99bf36e"],["/posts/3591144765/index.html","9c929606b0db274e59cefb1606c4a254"],["/posts/3602722865/index.html","01aa37f747e019608ee8604d3ee0bad3"],["/posts/3640780602/index.html","0440ee8d5aa1f5b40865915473bde9c5"],["/posts/3679626959/index.html","c078b431a57c22e307bbbea0ad59197d"],["/posts/3699598685/index.html","f88d249f5d682c5bf50a10fb18d831f8"],["/posts/3712900673/index.html","3439cd97b2a8ee739ee89d73eed340e3"],["/posts/3770599674/index.html","6a11838265324261b044ffbadf1e6df5"],["/posts/3935350387/index.html","a6ac7e00dddd10b6f47fbe48324e9699"],["/posts/3948778863/index.html","dfb0dcc1113dfb52297a0812343ba0e8"],["/posts/403803703/index.html","90076cd22b0023ae392083710a4a1808"],["/posts/4041933047/index.html","ea06b2165882d1ad52d081dd9a2b1a2c"],["/posts/4110582124/index.html","f383157fc33c2b5d4885c307820964a5"],["/posts/411074811/index.html","f17edf86f5670e0da0d0a6126c073f08"],["/posts/4113963045/index.html","aa4ccc4fe31b76026518d6844a0fa952"],["/posts/4163174813/index.html","a416e70631402536c756bb11a274fa41"],["/posts/4185022581/index.html","b206f7591e976947cfab84318c0bcb2b"],["/posts/4192746113/index.html","85299d100a20501c6bb75514a178edc6"],["/posts/597050941/index.html","0ff2754d9baecfc869850d91c52390cb"],["/posts/719776913/index.html","7bd9324b88279404d6c7e78c68cd5f29"],["/posts/741067372/index.html","6c099db5579052131dc205dd28151843"],["/posts/776340048/index.html","d1cb0721833b47034b89e1ba079b922f"],["/posts/888354975/index.html","163056ef92657372b15a17c01bfbeba5"],["/style.css","6a1ae209ff0f1d9ea1098fb30aebc3f6"],["/sw-register.js","059052c7fdf1a50e9fe3483762b73d4d"],["/tags/index.html","f34d1bdebbbcf6301ad8ad8078cfd015"],["/tags/冰与火之歌/index.html","1ef0e416ce9de799b8cce5906c7b4761"],["/tags/冰与火之歌/page/2/index.html","368dc781b9a2261b2bf4ee812e77a61c"],["/tags/指珊/index.html","6fff811064aa6f1ac72c2ec42ac984c5"],["/tags/指珊/page/2/index.html","94efa6ff5959a8286b99de253064888d"],["/tags/摸鱼之作/index.html","151a0339cc596c2faf9736cc9ee851a7"],["/tags/日常/index.html","bb54c39308f8a840b085e740b77e42a4"],["/tags/柠梨/index.html","400470e68b62a275871fa8ff3c52552a"],["/tags/柠梨/page/2/index.html","ccde9c6302cbedad2648c2062880a04a"],["/tags/柠梨/page/3/index.html","b29ac6924594a1708a3ad81ecf959def"],["/tags/柠梨/page/4/index.html","cc416e43c7191f9e1e0895226440b715"],["/tags/柠梨/page/5/index.html","c5888c15c64e6fa8b1d18c5ef0d29a1d"],["/tags/柠梨/page/6/index.html","812433864b49ff881555bee3a481c6e9"],["/tags/柠梨/page/7/index.html","d44e5cc178567e427760358758d4ff54"],["/tags/柠梨/page/8/index.html","54d8dafca9cd9708e0469df80b63b0f0"],["/tags/狂飙/index.html","ccdcb5ddec3be1eb6c89ec6e1e42525c"],["/tags/镛武侠/index.html","3aa8164e1b8896144e51880419adc255"]];
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
