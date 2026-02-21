// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
  aidan: { api: 'http://lovedan.net', name: '艾旦影视' },
  aosika: { api: 'http://aosikazy.com', name: '奥斯卡资源网' },
  baidu2: { api: 'https://api.apibdzy.com', name: '百度|点播' },
  baofeng: { api: 'https://bfzyapi.com', name: '暴风|点播' },
  beidouxing: { api: 'http://m3u8.bdxzyapi.com', name: '北斗星资源' },
  citong: { api: 'http://ys9.cttv.vip', name: '刺桐|点播' },
  feifan: { api: 'http://cj.ffzyapi.com', name: '非凡|点播' },
  feisu1: { api: 'http://feisuzy.com', name: '飞速资源' },
  feisu2: { api: 'https://www.feisuzyapi.com', name: '飞速|点播' },
  guangsu: { api: 'http://api.guangsuapi.com', name: '光速资源' },
  guanwang: { api: 'http://gwcms.cttv.vip', name: '官网|点播' },
  haiwaikan2: { api: 'https://haiwaikan.com', name: '海外看|点播🪜' },
  haohua1: { api: 'https://hhzyapi.com', name: '豪华|点播' },
  heimuer: { api: 'https://www.heimuer.tv', name: '黑木耳|点播' },
  hongniu2: { api: 'https://www.hongniuzy2.com', name: '红牛|点播' },
  huaweiba: { api: 'https://hw8.live', name: '华为吧|点播' },
  huya: { api: 'https://www.huyaapi.com', name: '虎牙|点播' },
  ikun: { api: 'https://ikunzyapi.com', name: 'ikun|点播' },
  jinying: { api: 'http://jyzyapi.com', name: '金鹰资源' },
  jisu: { api: 'https://jszyapi.com', name: '极速|点播' },
  kaifang: { api: 'http://vod-demo.onrender.com', name: '開放電影' },
  kuache1: { api: 'http://caiji.kczyapi.com', name: '快车资源' },
  kuache2: { api: 'https://caiji.kczyapi.com', name: '快车|点播' },
  kuaibo: { api: 'http://www.kuaibozy.com', name: '快播资源' },
  kuaiikan: { api: 'https://www.kuaikan-api.com', name: '快看|点播' },
  kuaiyun: { api: 'https://www.kuaiyunzy.com', name: '快云|点播' },
  kudian2: { api: 'http://kudian10.com', name: '酷点资源' },
  kudian3: { api: 'http://api.kuapi.cc', name: '酷点资源' },
  liangzi2: { api: 'https://cj.lziapi.com', name: '量子|点播' },
  lehuo: { api: 'http://lehootv.com', name: '乐活影视' },
  laoya: { api: 'http://api.apilyzy.com', name: '老鸭资源采集' },
  modu: { api: 'https://caiji.moduapi.cc', name: '魔都|点播' },
  niuniu: { api: 'https://api.niuniuzy.me', name: '牛牛|点播' },
  piaoling: { api: 'https://p2100.net', name: '飘零|点播' },
  piaohua2: { api: 'http://www.ahjiuman.com', name: '飘花|点播' },
  piaohua1: { api: 'http://www.zzrhgg.com', name: '飘花电影' },
  qihu: { api: 'https://caiji.qhzyapi.com', name: '奇虎|点播' },
  qiqi: { api: 'https://www.qiqidys.com', name: '七七资源' },
  sanliuling: { api: 'https://360zy.com', name: '360|点播' },
  sanshijiu: { api: 'http://39kan.com', name: '39影視' },
  senlin: { api: 'http://slapibf.com', name: '森林资源' },
  shandian2: { api: 'http://sdzyapi.com', name: '闪电资源' },
  sijiu: { api: 'https://49zyw.com', name: '四九|点播' },
  siwa: { api: 'http://siwazyw.cc', name: '丝袜资源' },
  subo: { api: 'https://subocaiji.com', name: '速博|点播' },
  suoni: { api: 'https://suoniapi.com', name: '索尼|点播' },
  tangrenjie2: { api: 'http://tangrenjie.tv', name: '唐人街' },
  tantan: { api: 'http://apittzy.com', name: '探探资源' },
  tiankong: { api: 'http://m3u8.tiankongapi.com', name: '天空資源' },
  tiantang: { api: 'http://vipmv.cc', name: '天堂资源' },
  tianyi: { api: 'https://www.911ysw.top', name: '天翼|点播' },
  uku2: { api: 'https://api.ukuapi.com', name: 'U酷|点播' },
  wujin: { api: 'https://api.wujinapi.com', name: '无尽|点播' },
  wolong2: { api: 'https://collect.wolongzyw.com', name: '卧龙|点播' },
  wangmin: { api: 'http://prinevillesda.org', name: '网民电影' },
  xiaohuangren: { api: 'https://iqyi.xiaohuangrentv.com', name: '小黄人|点播' },
  xinlang: { api: 'https://api.xinlangapi.com', name: '新浪|点播' },
  xiongzhang: { api: 'https://xzcjz.com', name: '熊掌|点播' },
  yaya: { api: 'https://cj.yayazy.net', name: '丫丫|点播' },
  yeyu: { api: 'https://yyff.540734621.xyz', name: '业余|点播' },
  yinghua2: { api: 'https://m3u8.apiyhzy.com', name: '樱花|点播' },
  yingku: { api: 'http://api.ykapi.net', name: '影库资源网' },
  youzhi: { api: 'http://api.1080zyku.com', name: '优质资源库' },
  zuida: { api: 'http://zuidazy.me', name: '最大|点播' }
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
