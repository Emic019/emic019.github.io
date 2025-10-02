/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","db29e58a34297e899e1f9e8ddc9383d1"],["/about/index.html","dfa29c94fe59b6188c51a82c90fb55c1"],["/archives/2024/07/index.html","db6b0cf841529682921415fb5284fc2b"],["/archives/2024/07/page/2/index.html","2340325f1b3cdb205678a9a337041175"],["/archives/2024/07/page/3/index.html","ea013dabc471f00e0ee9113602175e89"],["/archives/2024/07/page/4/index.html","667b1ef7199887d11ca6ed4a513ac8db"],["/archives/2024/07/page/5/index.html","75c716ac6194635888fffe139ea884a8"],["/archives/2024/07/page/6/index.html","0a7601e603baf88a7b7879c0d665d0b0"],["/archives/2024/08/index.html","e6ab1b7e11f65b7470cd386df2f291f8"],["/archives/2024/09/index.html","080146f5345329c0ea584d872d1edc9e"],["/archives/2024/10/index.html","550da310e27361e4a37f8da719f22fd6"],["/archives/2024/11/index.html","44cacf7f791042ea95bb0eaa3087b2b3"],["/archives/2024/12/index.html","47ef42fb13cc058c5ae48ee0d14045e5"],["/archives/2024/index.html","1f7006277dee50f3db84691c11268675"],["/archives/2024/page/2/index.html","4c119ea2238c4c08088c0bb1271e5732"],["/archives/2024/page/3/index.html","88e4ddad01306e914d57ef0aa9056958"],["/archives/2024/page/4/index.html","842d84ff55f8adf12313f6f6f9132153"],["/archives/2024/page/5/index.html","12e85fc29b44ae7fe949eae23c9dd3f8"],["/archives/2024/page/6/index.html","39fedc3c0b09354c92c9281504adfc20"],["/archives/2024/page/7/index.html","31e15f73f7e4d5008accfb847e6ae35d"],["/archives/2024/page/8/index.html","b42ae080b9b9e347e09acda687e57194"],["/archives/2024/page/9/index.html","271ff2818fa943e6ba861588836d393b"],["/archives/2025/02/index.html","6daf93f0a70909f17afc6797d71622f3"],["/archives/2025/03/index.html","6726d511f41c6b4d853f4290b468c1f2"],["/archives/2025/04/index.html","12656b7eb102a039896aaf371e3603e5"],["/archives/2025/05/index.html","be6f084566d99aba75a7101ae18534b2"],["/archives/2025/05/page/2/index.html","0d058e46848d1faa1376712151599a77"],["/archives/2025/06/index.html","7d40c828fc8da0e85168b7f384d0ad3e"],["/archives/2025/08/index.html","7932745159a00974bbfcf9059d335198"],["/archives/2025/08/page/2/index.html","a0591b885364772762dd607a3f465460"],["/archives/2025/09/index.html","f01dae8b46ca9c5493c8bc002695ecd4"],["/archives/2025/index.html","aa781a035a52c89a0b8de09e729e1542"],["/archives/2025/page/2/index.html","9e2dfa1929c78fc9a4287d1e37c8f0ff"],["/archives/2025/page/3/index.html","786af84efd89cfa02fc53ac94f2e4d7e"],["/archives/2025/page/4/index.html","058a5909ffddbe2a6d8b1902067da636"],["/archives/2025/page/5/index.html","281a39a15f2af2ac9812961d5abaf746"],["/archives/2025/page/6/index.html","09254cc6d22701a0ecc9e71292bf1046"],["/archives/index.html","4fbf09a01c1a63bf1edc4c8e2acd741e"],["/archives/page/10/index.html","90b06898107571bca7a2a2adff0c729b"],["/archives/page/11/index.html","66e87f97434dfabd84b3ce64ce0f3f4f"],["/archives/page/12/index.html","584968aa714b4a1432999b516122ce78"],["/archives/page/13/index.html","9714e7626a9ca5dec2d5e5040415f9c1"],["/archives/page/14/index.html","f75618eb747d77174a1fb08224fa16df"],["/archives/page/2/index.html","ae4a15773f29c0b19c0140970354a120"],["/archives/page/3/index.html","c882e2b8583cbd5331a911465eb83e2a"],["/archives/page/4/index.html","7ee26a062857c7ece6f96d28c75284bb"],["/archives/page/5/index.html","0c2cef009f235413c0b41ea908e8c7b7"],["/archives/page/6/index.html","014b7c6a2006558e3e378933ac37eb08"],["/archives/page/7/index.html","a59d41016630645aff5e5539e9609408"],["/archives/page/8/index.html","4937d6af5bac34b00c50343020e34594"],["/archives/page/9/index.html","85f91a31dc19f8e61bde02518645c09f"],["/assets/01omen.png","45a16af395c1d345a3eecafa23fa75b2"],["/assets/banner/bh19.jpg","1382397c53bc199efe9c667ca5c70640"],["/assets/banner/bh20.jpg","924832f7f0487ff3daeae12e12088f10"],["/assets/banner/bh21.jpg","ff70fa4f04d3f4ced594c84a49f134f0"],["/assets/banner/bh22.jpg","c71b6ff46990a9cd40d1203a99c3065d"],["/assets/banner/bh23.jpg","d883dede1c544e6075055426da4a8dfa"],["/assets/banner/bh4.jpg","e84d0aa6f72818fc0d8568dde31e9df5"],["/assets/banner/bh5.jpg","0cf28f8bd1e0b583845f6c7ed6b02161"],["/assets/banner/ly1.jpg","b1e4ce2f3901d7169ea3a594ad9cfff7"],["/assets/banner/ry1.jpg","a5b86ee8617cbe43ad6899dee4b2162a"],["/assets/banner/short1.jpg","a8c961b25988eba7619325b4c2c89173"],["/assets/banner/short11.jpg","15d94fde0b68b290df141942b562b6e8"],["/assets/banner/short12.jpg","94f449d34c68f6804b06b01b33a1fe33"],["/assets/banner/short13m.jpg","6b8442b666417d632061a188b3f57798"],["/assets/banner/short14.jpg","6d6bbe42631755eeac4c92dcecad302a"],["/assets/banner/short6.jpg","78c7956cf36ddbe7b23fe48faab12572"],["/assets/banner/ydtx2.jpg","ebc59260e73af65fe5f87b4be19c1d4e"],["/assets/banner/ydtx4.jpg","3c77545c3c5bfe228eda311471b1f00f"],["/assets/banner/ydtx5.jpg","162c0219571a7d6876628d05930374c1"],["/assets/banner/ydtx6.jpg","8ad365220dd0cd3fa926d5cee6dddeb9"],["/assets/banner/yxzd1.jpg","957453dcbe9542c2ec858c88bdf9a334"],["/assets/banner/yxzd16.jpg","ab7b5c1620add2816e89e30fefff35b0"],["/assets/banner/yxzd17.jpg","2550164020252ea2f930d00bad6ec1c5"],["/assets/banner/yxzd18.jpg","af591300295a92833dae68b88d56f609"],["/assets/banner/yxzd19.jpg","ca879acdd64fff9f5834b24318ba50b0"],["/assets/banner/yxzd24.jpg","c1f20d1191d77f198c695c6378773110"],["/assets/banner/yxzd25.jpg","4e37e489c4757b1888b85812dc8bbc6d"],["/assets/banner/yxzd4.jpg","38c9fccd11c0a311aeb669d6593faa6c"],["/assets/banner/yxzd6.jpg","7f52daae638ca4ea73ff3e61dd4a3cff"],["/assets/banner/yxzd7.jpg","09a8b604d30ca56af0287842625c1691"],["/assets/banner/yxzd8m.jpg","d807e9c94940ab82a317e2ce15e61422"],["/assets/bhsjlgq.html","9ce5c4c2907929c616b5a3b804fedfc1"],["/assets/cover/bh10.jpg","b6be0f3ce0764932f7f997bea7f214bf"],["/assets/cover/bh11.jpg","19b0e74453b7ae9f983f60a24ddcf2b2"],["/assets/cover/bh12.jpg","f27279658d25efb88e4fb1d82c426839"],["/assets/cover/bh13.jpg","021cd0e882789c8f970c7ae6d1102844"],["/assets/cover/bh14.jpg","dd28cfe145b8d78c372ad43336ba8477"],["/assets/cover/bh18.jpg","a3cf8dbfcc9853a1e027230c066c8db0"],["/assets/cover/bh6.jpg","6cb1ae519c1481f903a085a9f62503cc"],["/assets/cover/ry1.jpg","659fcdad987653e6d4017b50e991537c"],["/assets/cover/short1.jpg","d837b72a0ce4e88019316b450743513c"],["/assets/cover/short16.jpg","ccc13c0e3d616f186ee7cadc6e9d9c3e"],["/assets/cover/short17m.jpg","900978425f2a3940decd0cccaa4e5d28"],["/assets/cover/short18m.jpg","e3db837ab4c38e6c8c7daa0ea153fa52"],["/assets/cover/short19.jpg","3e9c9e72fe75c67b19fe37da8da3304c"],["/assets/cover/short7m.jpg","2cce46c1eddba0fbe79605579bc24cf6"],["/assets/cover/ydtx10.jpg","c36acb551c4160d02c0fc2de89974955"],["/assets/cover/ydtx11.jpg","174b32aaadb8fd360ef88f38f6a4e310"],["/assets/cover/ydtx12.jpg","9d31a98f3df34157a4a81d77becc791e"],["/assets/cover/ydtx13.jpg","513bc86dd5186f6f982b84132cdd3ab6"],["/assets/cover/ydtx14.jpg","8a708c380adbf4119bfe7b3179e3bc0d"],["/assets/cover/ydtx15.jpg","261361a244ad164c388d6ee48f37e517"],["/assets/cover/ydtx16.jpg","2dadc27a06b87bb7eb6b49e37493ed3a"],["/assets/cover/ydtx17.jpg","cf2eb86ea9021f2a7071f54e8f5011c8"],["/assets/cover/ydtx7.jpg","1cfb208284331e93e007888d41803085"],["/assets/cover/ydtx8.jpg","99909f2e14b9f15189884ad70b0a09dc"],["/assets/cover/ydtx9.jpg","7c949a59a2b27979a6390509d1022edc"],["/assets/cover/yxzd10s.jpg","a982f40cc1562de0478e8d53b4537e9c"],["/assets/cover/yxzd11m.jpg","35c6ae5a6c301032309f81ffde3383a1"],["/assets/cover/yxzd13m.jpg","1aaf6b17b726c8ce4305bb238f880009"],["/assets/cover/yxzd14.jpg","8d4fba486c1e83046c11bb0b522d7833"],["/assets/cover/yxzd15.jpg","4a7a2ffdce76325519f33360926e17a3"],["/assets/cover/yxzd21.jpg","870d6429e2965ed26f33ba4e778e49bf"],["/assets/cover/yxzd23.jpg","df80a0fb3686ff91c5f9fbf629b061e9"],["/assets/cover/yxzd26.jpg","f5532c2f689d4c6d04c87bc6ecb459fc"],["/assets/cover/yxzd9.jpg","f7df096e8fb7671c658a8bc2fcff786a"],["/bundle.js","91bb2aa4523f6e336add358cec66ddc4"],["/categories/index.html","79416f499b0b057b992e947888bcc0d6"],["/categories/与敌同行/index.html","8c6570b69289dfa1c25be5341bb83843"],["/categories/与敌同行/page/2/index.html","3499c5fd8e15ab2766bf3b37326eb137"],["/categories/与敌同行/page/3/index.html","7b7694780bc9450c17e8ee60c5b041bc"],["/categories/与敌同行/page/4/index.html","f330074dd030eb076c954c0f6737f116"],["/categories/与敌同行/第一卷-双镜/index.html","ca95f3110a80175776f7955c6fdffa80"],["/categories/与敌同行/第一卷-双镜/page/2/index.html","a4cdb0cc2d94d061cf2c90999a3c7c0b"],["/categories/与敌同行/第二卷-信天游/index.html","d7ddd771cd4b90b6c50a8c0d92fcddd0"],["/categories/与敌同行/第二卷-信天游/page/2/index.html","7f6cfaf89a5c555417d8c0901d91c6f3"],["/categories/乐园/index.html","979ce3f98b9bdab8593fb713a7bd1225"],["/categories/乐园/page/2/index.html","d7d02a0a0c62757bdd7ecb8a066f1363"],["/categories/乐园/page/3/index.html","90e6ff0c6e1b093236c7ee30ca7d4adb"],["/categories/嘲鸟之歌/index.html","45d00640b909d1bbfc9fa2d9c20de3bf"],["/categories/失落的应许之地/index.html","844e3b702b9999c72e43baab434ec02e"],["/categories/失落的应许之地/page/2/index.html","f5874b6d8d606548de0e1aa917eb99f0"],["/categories/失落的应许之地/page/3/index.html","fcd54c32336093ecb4f66a510a271082"],["/categories/月照天山雪/index.html","665072ff5fe4f488ec56dee7f99edc33"],["/categories/月照天山雪/page/2/index.html","470d83a74d80af2785efe0c8e9e7d18d"],["/categories/月照天山雪/第一卷-霜冷月迷/index.html","2b91091b1250cd95abab33343db021d5"],["/categories/月照天山雪/第二卷-江湖夜雨/index.html","84d46bb161765498f76cd528302373af"],["/categories/狂飙，乱飙，发飙/index.html","2c110a0f7ce66971a7e6f6a437e410ec"],["/categories/短篇/index.html","e2100057e937bb228f924ea8ba33e716"],["/categories/繁城之下/index.html","7e368afd3bf9edb7776959a620e98c3d"],["/categories/长夜漫漫路迢迢/index.html","c0be543d6771922b0ade3fc58feb1eb2"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b45ff3aeb2cef79464b4124bf3e701b4"],["/css/modify.css","eeb36ec70801603f1631e29679f41316"],["/css/var.css","f45e4278b41c8d5681ed3876da3d23a5"],["/img/01.jpg","21c68f2ac68d06ba3c8382317920b373"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/duihua150.png","8bd2915db4ff0473fa0c421b2a05dd5a"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/juanzhou120.png","cf740db817fcaa42af496bd0adb19621"],["/img/minisansa.jpg","9457e98e3b8e7f2c9b4889c4741bd52b"],["/img/morenBanner.jpg","545ce446268e6f69ae4ec1b6e940c5d9"],["/img/morenCover.jpg","5d21f02d465a145a1e10e65d62ecadfd"],["/img/morenCover02.jpg","c5f86a85e3d2aa1906b5d286f710984e"],["/img/sansa16x16.png","69a0d6640a79d42cec6f3d158c885a4c"],["/img/sansa180x180.png","dcbdeb8ebe3a5943385f3fea7f6d621c"],["/img/sansa32x32.png","353e52774fa4c3204d9cd9e0171a5a8b"],["/img/themetest.jpg","ccd3e51375f33eb84e773b71bc85ce2c"],["/index.html","073bb87652e720894606fe319245c36d"],["/js/main.js","0405cad955b0e2a66520e59bcd4ae6d8"],["/js/search/algolia.js","44848bf50caf33e4e9d1dbbf705ea5e2"],["/js/search/local-search.js","24eae077e5aa93a2da4d0aa6c9a11eab"],["/js/tw_cn.js","c01d09126567452460ca80a4341f5f99"],["/js/utils.js","e84a69b53c7dd1ff5b6b330d9fb2044f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/page/10/index.html","f4e5cd4d7ac19952f9be8a0ceef16bf2"],["/page/11/index.html","1e04f201f7f3e38153b461131b352528"],["/page/12/index.html","edfeee34e095f8a101c34ec9a7a47b55"],["/page/2/index.html","64a09455641ce5130c33cc8b461f3815"],["/page/3/index.html","5d93e9a8b6974d669b2cbec6e980c523"],["/page/4/index.html","f60c2db9abfcf402970a9c0947d86b36"],["/page/5/index.html","221634ac6a0b9f573e7f07ed434f8f5b"],["/page/6/index.html","13055f628a5a1e17545ac411fe752b09"],["/page/7/index.html","08b2a69a95a0739167cc08d1a0c464ff"],["/page/8/index.html","00115aaa82b2214052701b7f6e475f85"],["/page/9/index.html","1904f981f59acb682172b64386a445b7"],["/posts/103655302/index.html","f29984a7df5f7192835a056359d7835b"],["/posts/1083795192/index.html","b6e60f65b9a5b201dc4bb300bb6deef4"],["/posts/1099216759/index.html","43237fef5f2c528150fccd66702be6f1"],["/posts/1104021264/index.html","b6abc7b0263ace8bfce82ad2e0346e11"],["/posts/1195093070/index.html","ee3c5c0d5d8ccf911044fc63a606bed6"],["/posts/12506394/index.html","3eeb88af20fcedd60601cb04f31b1097"],["/posts/1272692100/index.html","744fb04228a1e3384da22054983db06a"],["/posts/1304356361/index.html","03f186e8ab02cf9a65381c656ad3b1b7"],["/posts/1315809802/index.html","631a277c2772835ed46080cfe00eed3c"],["/posts/1329165323/index.html","caba353efaa861e5d669010012a02b27"],["/posts/1378666774/index.html","bad109ef6d7a14700fcb451444f839aa"],["/posts/1400613118/index.html","a20f361e3a76894c552512382477d5eb"],["/posts/1407316490/index.html","a7a82e012c674dd0c269ae8f024cd9f3"],["/posts/1434824932/index.html","64d8111f02a4dfc71afa5594169ea6e5"],["/posts/1445707477/index.html","e46bef16906e8db3860cb6c059a66746"],["/posts/1465373355/index.html","c22f50e5f09d5cbe898ee7cab0389c0f"],["/posts/1500385898/index.html","497e9eb883353531189d50d7c0898332"],["/posts/1681850936/index.html","b376e4a301283965a51f452063223311"],["/posts/1688557772/index.html","9c21cd51d7450a2d7cb4aa0775f8b555"],["/posts/1710373156/index.html","e812df23b8d907cc5a425e989cce8e62"],["/posts/1720998546/index.html","8e3b3dd912fec1578125b214f393f74a"],["/posts/173005120/index.html","3f82b45bf579ac8ce4b22d1c6ba9bb4f"],["/posts/1766000773/index.html","d0dd2baf8c618ab35abfe79bec34d13f"],["/posts/1845581652/index.html","d8e0541f77e6e933819d653f6113146a"],["/posts/1988799958/index.html","75556fd288a15faf9bac826740b7ae53"],["/posts/2080722358/index.html","5a7ff1c2b2200d6b1e4a54f62213d7b6"],["/posts/2192148155/index.html","29a6333f2333d3aa5d2b066aabef62b7"],["/posts/2229302539/index.html","a73c7ca990d379a89665f033be071249"],["/posts/2492968201/index.html","f8921c9bfab69b7bcd74d218899d1b24"],["/posts/2531300956/index.html","0fcff1e9c1e14cdf6582541856bc83b7"],["/posts/2869217975/index.html","d0da141ab14301633b965dfaed27d724"],["/posts/2888068877/index.html","971498a0dba891efdf339a1d3f151529"],["/posts/2949714254/index.html","eb655877c3742eb48660964573410ff6"],["/posts/3002318373/index.html","8c48552efe19d65d4fe5c7b519eb2b35"],["/posts/3076558902/index.html","6cc581e90610cf682f79513e64ef32e7"],["/posts/3147359483/index.html","992720f529da63227197bef81be273ae"],["/posts/3191465731/index.html","8d5819dfeef51260806dfe7915e122c4"],["/posts/320179123/index.html","c8f79e21897be5ceb21c224ce38fbf87"],["/posts/3300469459/index.html","dfa2cb07bba0aa1a2796e1fc14a2e001"],["/posts/330870226/index.html","714965f709eb86e6bde7f744dc2201d5"],["/posts/345507944/index.html","66ac49695f70bf5db6f93e8f39d8958c"],["/posts/3459697331/index.html","bd43ff8ccf49c2c4d00c7bf6abe6ed48"],["/posts/3489395119/index.html","b1e2d8cdf59f4e9bf208b74022f66a8b"],["/posts/3525870963/index.html","8709b7cacdca206e986679bb71e6c735"],["/posts/3591144765/index.html","cb051ce3c1ab21510f1c409499a65b38"],["/posts/3602722865/index.html","77f63f06aef96ced65181cb9577d62f6"],["/posts/3640780602/index.html","783142eb5fb9f931fed7b819e17efc13"],["/posts/3679626959/index.html","2c15ef043a16dae16ce59f00c75f05a2"],["/posts/3699598685/index.html","05928597e91fff148fede17486073bf0"],["/posts/3712900673/index.html","2f8ce147672170ff9e27a45ffec57540"],["/posts/3770599674/index.html","bfaf6aefa20ff4881ad959913e62799c"],["/posts/3788666127/index.html","c784c7a1ba65506681900309a0c3d8d8"],["/posts/3935350387/index.html","72ec9a92197194c2e7d11d5feb5098a2"],["/posts/3948778863/index.html","0ec5aa0fc0ce623a039e3f0b07f99e1f"],["/posts/403803703/index.html","ef23679d8b91bbe64669803eac3ba406"],["/posts/4041933047/index.html","44236291ad6452ac9334ab61cbdf19bc"],["/posts/4083669729/index.html","3e6e08cf7463a5b7dbd839cfff4a9838"],["/posts/4110582124/index.html","13a8f743492a070c46cfe11717b2cc0f"],["/posts/411074811/index.html","f556b6f8329f87382a87421d561ce341"],["/posts/4113963045/index.html","89747653304a652dcbc142bd220157e5"],["/posts/4163174813/index.html","0bb3dfdc38b69f9f5dadf5c20382027b"],["/posts/4185022581/index.html","392aa28aea6e289fbe82d36f4b6db27e"],["/posts/4192746113/index.html","fb006a656bef11ced54a7b2caf167887"],["/posts/597050941/index.html","029661269292d869a02d1a3e6936e18b"],["/posts/719776913/index.html","f23f4786c7e8945bd638f1c2c83b2623"],["/posts/741067372/index.html","ee20dd8488b143b1fb8797f783c9f2d6"],["/posts/776340048/index.html","bfc038eb5abd33f870e2e27c2c1a18c3"],["/posts/888354975/index.html","b3a9aebd608191f9fb3626aa17151407"],["/style.css","e31c6526ac6ca5b92208f5cc11b97e42"],["/sw-register.js","297271c110d5af2b8f90325c21fddb16"],["/tags/index.html","4566b255ccd6365f78f583d0c52810b8"],["/tags/中国往事/index.html","002a42e1ed6c1dbaa7cd29e7b8a08de3"],["/tags/中国往事/page/2/index.html","d0ebea8f06708a3df42c531c5358210d"],["/tags/中国往事/page/3/index.html","fe688b9fa8530be1ecd3db0bca1e1831"],["/tags/中国往事/page/4/index.html","cbf1742a7334cd67d609d24fff345b36"],["/tags/冰与火之歌/index.html","b2732b476a8a45ad005980a7dcddf321"],["/tags/冰与火之歌/page/2/index.html","662046cf44ffb83cf3b005d813568190"],["/tags/拍案惊奇/index.html","008e732ca263e9ba66c819cffe759d14"],["/tags/指珊/index.html","cf5fc3fa9dd12ac16c9fea5106b1e45f"],["/tags/指珊/page/2/index.html","e937470adc11186ac3dfffb6b34e7718"],["/tags/摸鱼之作/index.html","3e702efec50d08e5e90102c04f9b4dca"],["/tags/日常/index.html","0b354fa8f8a019bd762986e44de1b814"],["/tags/日月凌空/index.html","6a0f01ee04e7e535a4c90903b1063073"],["/tags/柠梨/index.html","01813de29e5771c2e8cda100d084efd3"],["/tags/柠梨/page/10/index.html","05a3d6d9d6f4b259b1554341dc2178b6"],["/tags/柠梨/page/2/index.html","7b72e5284753490c43b478910db36b16"],["/tags/柠梨/page/3/index.html","36f7c8a272ebcacfa1b7fc62bddb4619"],["/tags/柠梨/page/4/index.html","d45d55a27781e5d00b312ef171e47714"],["/tags/柠梨/page/5/index.html","fa8af8cbf999d52c0669a5a128787fc6"],["/tags/柠梨/page/6/index.html","ef34436546abfcc6863505c562aad4f1"],["/tags/柠梨/page/7/index.html","93974285ef879433ff93c8060c203a57"],["/tags/柠梨/page/8/index.html","efa31eefd420b7f1c231284c43646185"],["/tags/柠梨/page/9/index.html","2ed7405cba29f52a448cb7456cc5031c"],["/tags/残酷法则/index.html","6e17d3d0bc662f043d734a9f3bf20167"],["/tags/残酷法则/page/2/index.html","5d5512c10369540e68f4254477e927f1"],["/tags/残酷法则/page/3/index.html","fe4747d37a122ec7bfa36f4d021fe139"],["/tags/爱，青春与死亡/index.html","579c53be0295e3f4a2d6e316112f5317"],["/tags/狂飙/index.html","95ae16c8c195193834902dbb9347b1b6"],["/tags/都市传说/index.html","d1c4bec579ac89321803c8057fedb290"],["/tags/都市传说/page/2/index.html","42e0eedb36c97c437d4594a6772f3821"],["/tags/都市传说/page/3/index.html","7fb4b6d313dacf8c7de3833f6b01d5fa"],["/tags/镛武侠/index.html","f02e15a7042f7d5035d609740c68fc89"]];
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
