// ============================================================
// === 骰评·经济版 — 时空经济体数据库（21条） ===
// ============================================================
const ECONOMY_DB = {

  // ── 国家战略 / 地缘经济（5 条）──

  "马歇尔计划": {
    economy: "西欧", period: "1948-1952",
    focus: "地缘政治财政化·战后重建",
    keywords: ["马歇尔计划","战后重建","欧洲复兴","美国援助"],
    structure_weights: { production:65, distribution:40, demand:55, pricing:30, finance:60, institution:90, narrative:75, cycle:50, external:90 },
    theory_fit: { institutional:5, keynesian:5, marx:3, neoclassical:2, behavioral:2 },
    key_conflicts: ["冷战地缘逻辑","财政转移与主权","复苏速度差异","西欧一体化萌芽"],
    key_actors: ["美国财政部","欧洲受援国","苏联（对立面）","OEEC"]
  },

  "日本战后经济奇迹": {
    economy: "日本", period: "1950-1973",
    focus: "通产省主导·出口导向工业化",
    keywords: ["日本经济奇迹","通产省","出口导向","高速增长","日本战后"],
    structure_weights: { production:90, distribution:50, demand:60, pricing:40, finance:75, institution:90, narrative:70, cycle:60, external:80 },
    theory_fit: { institutional:5, marx:3, keynesian:4, neoclassical:2, behavioral:2 },
    key_conflicts: ["政府主导vs市场","终身雇佣制","主银行体系","出口依赖"],
    key_actors: ["通产省","财阀","大藏省","美国市场"]
  },

  "韩国汉江奇迹": {
    economy: "韩国", period: "1961-1997",
    focus: "军事政权·财阀·五年计划",
    keywords: ["汉江奇迹","财阀","朴正熙","出口导向","韩国经济"],
    structure_weights: { production:90, distribution:40, demand:55, pricing:45, finance:80, institution:90, narrative:70, cycle:60, external:85 },
    theory_fit: { institutional:5, marx:3, keynesian:4, neoclassical:2, behavioral:2 },
    key_conflicts: ["威权发展与民主化","财阀垄断","劳动剥削","金融依赖"],
    key_actors: ["朴正熙","三星现代等财阀","美国援助","IMF"]
  },

  "一带一路": {
    economy: "中国/全球", period: "2013-现在",
    focus: "基础设施地缘经济·发展融资",
    keywords: ["一带一路","基础设施","亚投行","丝绸之路","发展融资"],
    structure_weights: { production:75, distribution:50, demand:60, pricing:50, finance:85, institution:85, narrative:80, cycle:40, external:90 },
    theory_fit: { institutional:5, marx:4, keynesian:4, neoclassical:3, behavioral:3 },
    key_conflicts: ["债务陷阱争议","基础设施主权","标准输出","地缘竞争"],
    key_actors: ["中国","亚投行","沿线国家","世界银行"]
  },

  "中国改革开放": {
    economy: "中国", period: "1978-1995",
    focus: "体制转型·双轨制·渐进改革",
    keywords: ["改革开放","市场经济","双轨制","特区","乡镇企业"],
    structure_weights: { production:85, distribution:80, demand:75, pricing:70, finance:60, institution:95, narrative:85, cycle:50, external:80 },
    theory_fit: { institutional:5, marx:4, neoclassical:4, keynesian:3, behavioral:3 },
    key_conflicts: ["计划与市场","价格闯关","地方竞争","政治约束与增长"],
    key_actors: ["邓小平","地方政府","乡镇企业","外资"]
  },

  // ── 金融危机 / 泡沫（5 条）──

  "大萧条": {
    economy: "美国/全球", period: "1929-1939",
    focus: "需求崩溃·银行危机·金本位陷阱",
    keywords: ["大萧条","股市崩盘","银行挤兑","新政","金本位"],
    structure_weights: { production:60, distribution:80, demand:90, pricing:80, finance:95, institution:80, narrative:85, cycle:95, external:70 },
    theory_fit: { keynesian:5, marx:4, behavioral:4, institutional:3, neoclassical:2 },
    key_conflicts: ["金本位约束","银行连锁倒闭","需求崩溃的正反馈","新政的争议"],
    key_actors: ["罗斯福","美联储","胡佛","失业者"]
  },

  "日本泡沫经济": {
    economy: "日本", period: "1985-1991",
    focus: "资产泡沫·银行超额放贷·广场协议",
    keywords: ["日本泡沫","资产泡沫","广场协议","失落的十年","日本银行"],
    structure_weights: { production:40, distribution:50, demand:60, pricing:75, finance:90, institution:60, narrative:70, cycle:85, external:80 },
    theory_fit: { keynesian:4, behavioral:5, institutional:5, marx:4, neoclassical:3 },
    key_conflicts: ["银行超额放贷","财阀交叉持股","日元升值冲击","泡沫破裂不衰退"],
    key_actors: ["日本银行","大藏省","财阀","土地投机者"]
  },

  "美国次贷危机": {
    economy: "美国/全球", period: "2003-2009",
    focus: "次贷证券化·评级失灵·系统性金融危机",
    keywords: ["次贷","金融危机","雷曼","CDO","房地产泡沫","量化宽松"],
    structure_weights: { production:30, distribution:70, demand:55, pricing:60, finance:95, institution:70, narrative:85, cycle:80, external:70 },
    theory_fit: { behavioral:5, neoclassical:4, institutional:4, marx:3, keynesian:4 },
    key_conflicts: ["次贷证券化","评级机构失灵","影子银行","大而不倒"],
    key_actors: ["投行","评级机构","美联储","房利美房地美"]
  },

  "欧元区债务危机": {
    economy: "欧元区", period: "2010-2015",
    focus: "单一货币·财政主权分裂·紧缩政策",
    keywords: ["欧债危机","希腊","主权债务","欧元","紧缩","救助"],
    structure_weights: { production:45, distribution:60, demand:55, pricing:50, finance:85, institution:90, narrative:80, cycle:75, external:85 },
    theory_fit: { institutional:5, keynesian:4, marx:3, neoclassical:3, behavioral:4 },
    key_conflicts: ["货币联盟无财政联盟","紧缩与增长之争","德国债权国立场","南欧被迫改革"],
    key_actors: ["欧央行","德国","希腊","IMF"]
  },

  "1997-1998 新兴市场风暴": {
    economy: "东南亚/韩国", period: "1997-1998",
    focus: "资本外逃·货币崩溃·IMF 救助条件",
    keywords: ["亚洲金融危机","泰铢","韩元","IMF","资本外逃"],
    structure_weights: { production:50, distribution:55, demand:50, pricing:75, finance:90, institution:70, narrative:80, cycle:85, external:90 },
    theory_fit: { behavioral:5, keynesian:4, institutional:4, neoclassical:3, marx:3 },
    key_conflicts: ["热钱进出","固定汇率压力","IMF 救助条件","政治社会代价"],
    key_actors: ["索罗斯","IMF","泰国央行","韩国财阀"]
  },

  // ── 货币体系 / 汇率（3 条）──

  "布雷顿森林体系": {
    economy: "全球", period: "1944-1973",
    focus: "美元锚定黄金·固定汇率·战后货币秩序",
    keywords: ["布雷顿森林","金本位","美元霸权","固定汇率","特里芬困境"],
    structure_weights: { production:40, distribution:50, demand:45, pricing:70, finance:80, institution:90, narrative:60, cycle:55, external:90 },
    theory_fit: { institutional:5, keynesian:4, neoclassical:3, marx:3, behavioral:2 },
    key_conflicts: ["特里芬两难","美元黄金可兑换崩溃","固定汇率僵化","通胀输出"],
    key_actors: ["美国财政部","IMF","各国央行","戴高乐"],
    related: ["广场协议","大萧条","石油危机"]
  },

  "广场协议": {
    economy: "美国/日本/德国", period: "1985",
    focus: "五国协调汇率·美元贬值·日元升值悲剧",
    keywords: ["广场协议","日元升值","汇率协调","贸易逆差","罗浮宫协议"],
    structure_weights: { production:50, distribution:45, demand:55, pricing:80, finance:75, institution:85, narrative:60, cycle:50, external:90 },
    theory_fit: { institutional:5, keynesian:4, neoclassical:3, marx:3, behavioral:2 },
    key_conflicts: ["汇率协调vs市场","日元升值产业冲击","日本泡沫的起点","美国竞争力"],
    key_actors: ["G5","贝克","竹下登","日本银行"],
    related: ["日本泡沫经济","布雷顿森林体系"]
  },

  "欧元创建": {
    economy: "欧盟", period: "1999-2012",
    focus: "货币统一·财政主权保留·结构性冲突",
    keywords: ["欧元","货币联盟","财政主权","最优货币区","统一货币"],
    structure_weights: { production:45, distribution:50, demand:50, pricing:65, finance:85, institution:90, narrative:75, cycle:70, external:80 },
    theory_fit: { institutional:5, keynesian:3, neoclassical:3, marx:2, behavioral:3 },
    key_conflicts: ["无财政联盟的货币统一","南北竞争力差距","德国主导的货币政策","最优货币区悖论"],
    key_actors: ["欧央行","德国","希腊","德拉吉"]
  },

  // ── 结构转型（2 条）──

  "四小龙崛起": {
    economy: "韩国/台湾/香港/新加坡", period: "1960-1997",
    focus: "出口导向工业化·发展型国家",
    keywords: ["四小龙","亚洲四小龙","台湾奇迹","新加坡模式","香港经济"],
    structure_weights: { production:85, distribution:50, demand:60, pricing:55, finance:70, institution:85, narrative:70, cycle:55, external:85 },
    theory_fit: { institutional:5, neoclassical:3, marx:3, keynesian:4, behavioral:2 },
    key_conflicts: ["国家vs市场","威权发展与民主","产业升级","价值链攀升"],
    key_actors: ["台湾","韩国","新加坡","香港"]
  },

  "苏东剧变与转型": {
    economy: "苏联/东欧", period: "1989-2000",
    focus: "休克疗法·体制崩溃·私有化",
    keywords: ["苏联解体","休克疗法","私有化","体制转型","寡头","东欧转型"],
    structure_weights: { production:80, distribution:90, demand:70, pricing:75, finance:55, institution:95, narrative:85, cycle:70, external:80 },
    theory_fit: { institutional:5, neoclassical:4, marx:4, keynesian:2, behavioral:4 },
    key_conflicts: ["快速vs渐进","私有化公平","寡头崛起","社会成本"],
    key_actors: ["盖达尔","丘拜斯","IMF","寡头"]
  },

  // ── 供给冲击 / 黑天鹅（2 条）──

  "石油危机": {
    economy: "全球", period: "1973-1979",
    focus: "供给冲击·滞胀·凯恩斯失效",
    keywords: ["石油危机","欧佩克","滞胀","能源危机","供给冲击"],
    structure_weights: { production:70, distribution:60, demand:65, pricing:95, finance:60, institution:65, narrative:75, cycle:85, external:90 },
    theory_fit: { keynesian:4, institutional:3, marx:4, neoclassical:4, behavioral:3 },
    key_conflicts: ["供给冲击vs需求管理","滞胀挑战传统理论","石油作为地缘武器","能源独立"],
    key_actors: ["欧佩克","美联储","油价","沃尔克"]
  },

  "新冠冲击": {
    economy: "全球", period: "2020-2022",
    focus: "供应链断裂·财政直升机·通胀回归",
    keywords: ["新冠","疫情","供应链","量化宽松","通胀","发钱"],
    structure_weights: { production:80, distribution:70, demand:85, pricing:80, finance:80, institution:75, narrative:85, cycle:80, external:85 },
    theory_fit: { keynesian:5, marx:4, behavioral:4, institutional:3, neoclassical:3 },
    key_conflicts: ["供应链vs全球化","财政刺激vs通胀","封锁vs经济","远程化"],
    key_actors: ["各国央行","政府","WHO","供应链"]
  },

  // ── 政策实验 / 脱钩（3 条）──

  "特朗普 1.0": {
    economy: "美国", period: "2017-2021",
    focus: "减税+去监管+贸易战 1.0",
    keywords: ["特朗普","减税","贸易战","去监管","美国优先"],
    structure_weights: { production:55, distribution:65, demand:70, pricing:50, finance:65, institution:85, narrative:85, cycle:40, external:80 },
    theory_fit: { neoclassical:5, institutional:4, keynesian:3, behavioral:3, marx:3 },
    key_conflicts: ["减税与赤字","关税与自由贸易","制造业回流","中美战略竞争"],
    key_actors: ["特朗普","共和党","中国","美联储"]
  },

  "特朗普 2.0": {
    economy: "美国", period: "2025-现在",
    focus: "行政扩权·全球关税·产业政策",
    keywords: ["特朗普2.0","关税","产业回流","行政命令","美国铁锈带"],
    structure_weights: { production:70, distribution:60, demand:65, pricing:75, finance:55, institution:95, narrative:90, cycle:50, external:90 },
    theory_fit: { institutional:5, marx:4, behavioral:3, keynesian:2, neoclassical:3 },
    key_conflicts: ["行政vs立法","关税通胀","供应链重构","美元-关税双锚"],
    key_actors: ["特朗普","白宫","关税","产业联盟"]
  },

  "英国脱欧": {
    economy: "英国/欧盟", period: "2016-2020",
    focus: "贸易壁垒·主权叙事·身份认同压倒成本收益",
    keywords: ["英国脱欧","脱欧","公投","主权","单一市场","北爱尔兰"],
    structure_weights: { production:55, distribution:50, demand:50, pricing:60, finance:60, institution:90, narrative:90, cycle:40, external:85 },
    theory_fit: { behavioral:5, institutional:5, marx:3, neoclassical:2, keynesian:3 },
    key_conflicts: ["主权vs经济理性","硬脱欧vs软脱欧","北爱尔兰边界","服务业衰退"],
    key_actors: ["保守党","欧盟","金融城","渔民"]
  },

  // ── 房地产（1 条）──

  "中国房价上涨": {
    economy: "中国", period: "2015-2020",
    focus: "土地财政·城镇化·金融化",
    keywords: ["房价","房地产","房价上涨","住房","中国房价","土地财政","房住不炒"],
    structure_weights: { production:40, distribution:80, demand:75, pricing:85, finance:60, institution:95, narrative:70, cycle:60, external:50 },
    theory_fit: { institutional:5, marx:4, behavioral:4, keynesian:3, neoclassical:1 },
    key_conflicts: ["土地财政依赖","居民杠杆","城镇化尾声","住房不炒与稳经济"],
    key_actors: ["地方政府","开发商","刚需族","央行"]
  }
};

// === 匹配引擎 ===
function matchEconomyEntry(userInput) {
  const lower = userInput.toLowerCase();
  let best = null;
  let bestScore = 0;

  for (const [name, entry] of Object.entries(ECONOMY_DB)) {
    let score = 0;
    const terms = [name, entry.economy, entry.period, entry.focus, ...(entry.keywords || [])];
    for (const t of terms) {
      if (lower.includes(t.toLowerCase())) score += 30;
    }
    // 经济体名部分匹配
    if (lower.includes(entry.economy)) score += 20;
    if (score > bestScore) { bestScore = score; best = { name, ...entry }; }
  }

  return bestScore > 0 ? best : null;
}
