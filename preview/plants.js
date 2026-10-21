const libraryNotice = {
  "title": "使用这份图鉴前，请先了解",
  "summary": "任何植物都可能引起犬猫呕吐或肠胃不适。无毒不等于可以食用。",
  "paragraphs": [
    "本图鉴整理常见植物的猫狗风险资料，包含据报道可能引起全身性或明显胃肠道反应的植物，也收录资料列为无毒的条目。它并不涵盖所有植物；未收录不代表安全。实际植株可能与参考照片不同，请核对学名和植物身份。",
    "任何植物材料被犬猫摄入，都可能引起呕吐或肠胃不适。资料列为无毒、或通常仅引起轻微胃肠不适的植物，一般不预期造成危及生命的毒性反应；但这不是针对个体的安全保证，仍需考虑摄入量、异物、农药和保鲜剂等风险。",
    "如果你认为宠物生病、可能摄入有毒物质，或对条目的适用范围有疑问，请及时联系兽医。疑似高危接触不要等待症状或识别结果，不要自行催吐、喂药或强行喂水。"
  ],
  "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants",
  "attribution": "说明参考 ASPCA 植物列表，并结合花猫的收录范围整理；本项目并非 ASPCA 官方产品。"
}
;
const identities = [
  {"value":"cat","label":"养猫","title":"勤劳铲屎官","icon":"🐱"},
  {"value":"dog","label":"养狗","title":"风雪遛狗人","icon":"🐶"},
  {"value":"both","label":"猫狗都有","title":"猫狗双全大赢家","icon":"🐱🐶"}
]
;
// 原创中文摘要；来源访问日期与证据适用范围逐条保存。
const plants = [
  {
    "id": "lily",
    "name": "百合属 · 总览",
    "latin": "Lilium spp.",
    "aliases": [
      "百合",
      "百合花",
      "lily",
      "Lilium"
    ],
    "icon": "✳",
    "cat": "high",
    "dog": "caution",
    "summary": "一束花的浪漫，需要为猫咪多想一步。",
    "catHarm": "百合属植物可使猫发生急性肾损伤，少量接触后舔入花粉、摄入花瓶水也可能造成严重中毒。",
    "dogHarm": "犬通常不发生猫的百合相关肾毒性，但摄入可能引起胃肠不适；仍应避免啃食。",
    "avoid": "有猫家庭不要将百合带入室内。整株、花粉及花瓶水均需隔离；高处摆放不能可靠预防。",
    "feature": "球根花卉，花朵明显，常用于鲜切花。萱草也可致猫肾损伤；白掌、马蹄莲的毒性机制不同，不能凭“百合”俗名判断。",
    "light": "明亮光照，避免盛夏暴晒",
    "water": "土表干后浇透，避免球根积水",
    "temp": "喜凉爽、通风环境",
    "source": "https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination",
    "rank": "属级总览",
    "genus": "Lilium",
    "family": "百合科",
    "parentId": null,
    "evidenceScope": "属级风险建议；具体物种与品种见独立档案",
    "evidenceTaxon": "Lilium spp.",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-20",
    "careStatus": "RHS 属级养护参考，品种需求不同",
    "sources": [
      {
        "title": "FDA · 百合与猫",
        "url": "https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination",
        "kind": "toxicity",
        "accessed": "2026-10-20",
        "taxon": "Lilium spp."
      },
      {
        "title": "RHS · 百合养护",
        "url": "https://www.rhs.org.uk/plants/lilies/how-to-grow-lilies",
        "kind": "care",
        "accessed": "2026-10-20",
        "taxon": "Lilium spp."
      }
    ],
    "related": [
      "easter-lily",
      "tiger-lily",
      "stargazer",
      "asiatic",
      "daylily",
      "peace",
      "calla"
    ],
    "searchTerms": [],
    "identityNote": "此页是百合属的风险总览，不是具体品种鉴定。香水百合等商品名不能唯一确定物种或品种。",
    "scene": "鲜花与盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "百合",
      "百合花",
      "lily",
      "Lilium"
    ],
    "commonNamesText": "百合、百合花、lily、Lilium",
    "aliasSummary": "百合、百合花、lily 等",
    "scientificSynonymsText": ""
  },
  {
    "id": "sago",
    "name": "苏铁",
    "latin": "Cycas revoluta",
    "aliases": [
      "铁树",
      "sago palm"
    ],
    "icon": "♧",
    "cat": "high",
    "dog": "high",
    "summary": "四季常绿的姿态，也藏着严重的误食风险。",
    "catHarm": "误食可导致呕吐、腹泻、肝损伤、神经症状，严重时死亡。",
    "dogHarm": "误食可造成严重肝损伤，甚至死亡；种子尤其危险。",
    "avoid": "有猫狗家庭优先不种植。不要让宠物接触植株、种子及修剪废弃物。",
    "feature": "裸子植物，羽状硬叶，并非真正的棕榈。全株有毒。",
    "light": "明亮散射光，室内避开烈日灼伤",
    "water": "保持适度湿润，排水良好，避免过量浇水",
    "temp": "防霜冻，已成活植株可耐一定干旱",
    "source": "https://www.aspca.org/news/animal-poison-control-alert-beware-sago-palms",
    "rank": "物种",
    "genus": "Cycas",
    "family": "苏铁科",
    "parentId": null,
    "evidenceScope": "来源明确列出该物种",
    "evidenceTaxon": "Cycas revoluta",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-20",
    "careStatus": "已补 NC State 园艺来源，仍需按品种和环境调整",
    "sources": [
      {
        "title": "ASPCA · 毒性资料",
        "url": "https://www.aspca.org/news/animal-poison-control-alert-beware-sago-palms",
        "kind": "toxicity",
        "accessed": "2026-10-20",
        "taxon": "Cycas revoluta"
      },
      {
        "title": "NC State Extension · 分类与养护",
        "url": "https://plants.ces.ncsu.edu/plants/cycas-revoluta/",
        "kind": "care",
        "taxon": "Cycas revoluta",
        "accessed": "2026-10-21"
      }
    ],
    "related": [],
    "searchTerms": [],
    "identityNote": "先核对学名；外观和中文俗名不能单独确认物种。",
    "scene": "盆栽与庭院",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "铁树",
      "sago palm"
    ],
    "commonNamesText": "铁树、sago palm",
    "aliasSummary": "铁树、sago palm",
    "scientificSynonymsText": ""
  },
  {
    "id": "pothos",
    "name": "绿萝",
    "latin": "Epipremnum aureum",
    "aliases": [
      "黄金葛",
      "黄金藤",
      "golden pothos",
      "pothos"
    ],
    "icon": "❧",
    "cat": "toxic",
    "dog": "toxic",
    "summary": "好养的绿意，也需要与好奇的小嘴保持距离。",
    "catHarm": "不溶性草酸钙可引起口腔刺激、流涎、呕吐、吞咽困难。",
    "dogHarm": "咀嚼后可能口舌疼痛、流涎、呕吐及吞咽困难。",
    "avoid": "放在宠物无法进入的独立空间，收好下垂藤蔓和落叶；无法可靠隔离时更换植物。",
    "feature": "常绿攀援藤本，叶片心形，部分品种带黄色斑纹。",
    "light": "明亮散射光，可耐一定弱光",
    "water": "排水良好，浇水间让基质变干",
    "temp": "喜温暖，注意空气湿度及冬季低温",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/golden-pothos",
    "rank": "物种",
    "genus": "Epipremnum",
    "family": "天南星科",
    "parentId": null,
    "evidenceScope": "来源明确列出该物种",
    "evidenceTaxon": "Epipremnum aureum",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-20",
    "careStatus": "已补 NC State 园艺来源，仍需按品种和环境调整",
    "sources": [
      {
        "title": "ASPCA · 毒性资料",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/golden-pothos",
        "kind": "toxicity",
        "accessed": "2026-10-20",
        "taxon": "Epipremnum aureum"
      },
      {
        "title": "NC State Extension · 分类与养护",
        "url": "https://plants.ces.ncsu.edu/plants/epipremnum-aureum/",
        "kind": "care",
        "taxon": "Epipremnum aureum",
        "accessed": "2026-10-21"
      }
    ],
    "related": [],
    "searchTerms": [],
    "identityNote": "先核对学名；外观和中文俗名不能单独确认物种。",
    "scene": "盆栽与庭院",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "黄金葛",
      "黄金藤",
      "golden pothos",
      "pothos"
    ],
    "commonNamesText": "黄金葛、黄金藤、golden pothos、pothos",
    "aliasSummary": "黄金葛、黄金藤、golden pothos 等",
    "scientificSynonymsText": ""
  },
  {
    "id": "rose",
    "name": "月季 / 玫瑰",
    "latin": "Rosa spp.",
    "aliases": [
      "玫瑰",
      "月季",
      "蔷薇",
      "rose"
    ],
    "icon": "❀",
    "cat": "low",
    "dog": "low",
    "summary": "让花开在家里，也给毛孩子留一份温柔。",
    "catHarm": "蔷薇属被列为对猫无毒，但啃食仍可能引起胃肠不适；刺可造成外伤。",
    "dogHarm": "蔷薇属被列为对犬无毒；仍需注意刺、农药和花束保鲜剂。",
    "avoid": "清理枝刺和落枝，不让宠物饮用花瓶水，确认花束中没有百合等混搭植物。",
    "feature": "蔷薇属花卉，多有枝刺。沙漠玫瑰不是蔷薇属，不适用此结论。",
    "light": "喜充足日照与空气流通",
    "water": "土表干后浇透，避免盆内积水",
    "temp": "品种耐温不同，夏季注意通风",
    "source": "https://www.aspca.org/news/mothers-day-bouquets-whats-safe-pets",
    "rank": "属级总览",
    "genus": "Rosa",
    "family": "蔷薇科",
    "parentId": null,
    "evidenceScope": "来源针对 Rosa 属；不适用于所有名称带“玫瑰”的植物",
    "evidenceTaxon": "Rosa spp.",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-20",
    "careStatus": "RHS 属级参考，具体品种需求不同",
    "sources": [
      {
        "title": "ASPCA · 毒性资料",
        "url": "https://www.aspca.org/news/mothers-day-bouquets-whats-safe-pets",
        "kind": "toxicity",
        "accessed": "2026-10-20",
        "taxon": "Rosa spp."
      },
      {
        "title": "RHS · 蔷薇属养护",
        "url": "https://www.rhs.org.uk/plants/roses/growing-guide",
        "kind": "care",
        "taxon": "Rosa",
        "accessed": "2026-10-21"
      }
    ],
    "related": [],
    "searchTerms": [],
    "identityNote": "先核对学名；外观和中文俗名不能单独确认物种。",
    "scene": "鲜花与盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "玫瑰",
      "月季",
      "蔷薇",
      "rose"
    ],
    "commonNamesText": "玫瑰、月季、蔷薇、rose",
    "aliasSummary": "玫瑰、月季、蔷薇 等",
    "scientificSynonymsText": ""
  },
  {
    "id": "spider",
    "name": "吊兰",
    "latin": "Chlorophytum comosum",
    "aliases": [
      "金边吊兰",
      "spider plant"
    ],
    "icon": "✺",
    "cat": "low",
    "dog": "low",
    "summary": "垂下来的小森林，适合慢慢了解与照料。",
    "catHarm": "该物种被列为对猫无毒；大量啃食植物仍可能引起呕吐或胃肠不适。",
    "dogHarm": "该物种被列为对犬无毒；不建议作为宠物食物。",
    "avoid": "避免啃食，固定花盆并收好肥料；“无毒”不代表可随意食用。",
    "feature": "细长带状叶，匍匐茎上可长出小植株。注意不要与其他俗名含“吊兰”的植物混淆。",
    "light": "中等散射光，避免直射烈日",
    "water": "保持适度湿润，冬季减少浇水",
    "temp": "保持温和，避免受冻",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/spider-plant",
    "rank": "物种",
    "genus": "Chlorophytum",
    "family": "天门冬科",
    "parentId": null,
    "evidenceScope": "来源明确列出该物种",
    "evidenceTaxon": "Chlorophytum comosum",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-20",
    "careStatus": "已补 NC State 园艺来源，仍需按品种和环境调整",
    "sources": [
      {
        "title": "ASPCA · 毒性资料",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/spider-plant",
        "kind": "toxicity",
        "accessed": "2026-10-20",
        "taxon": "Chlorophytum comosum"
      },
      {
        "title": "NC State Extension · 分类与养护",
        "url": "https://plants.ces.ncsu.edu/plants/chlorophytum-comosum/",
        "kind": "care",
        "taxon": "Chlorophytum comosum",
        "accessed": "2026-10-21"
      }
    ],
    "related": [],
    "searchTerms": [],
    "identityNote": "先核对学名；外观和中文俗名不能单独确认物种。",
    "scene": "盆栽与庭院",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "金边吊兰",
      "spider plant"
    ],
    "commonNamesText": "金边吊兰、spider plant",
    "aliasSummary": "金边吊兰、spider plant",
    "scientificSynonymsText": ""
  },
  {
    "id": "easter-lily",
    "name": "麝香百合",
    "latin": "Lilium longiflorum",
    "aliases": [
      "复活节百合",
      "铁炮百合",
      "easter lily"
    ],
    "icon": "✳",
    "cat": "high",
    "dog": "caution",
    "summary": "先确认身份，再理解毒性证据。",
    "catHarm": "百合属植物可使猫发生急性肾损伤，少量接触后舔入花粉、摄入花瓶水也可能造成严重中毒。",
    "dogHarm": "犬通常不发生猫的百合相关肾毒性，但摄入可能引起胃肠不适；仍应避免啃食。",
    "avoid": "有猫家庭不要将百合带入室内。整株、花粉及花瓶水均需隔离；高处摆放不能可靠预防。",
    "feature": "白色喇叭状花；外观只能辅助辨别，需要核对标签及学名。",
    "light": "明亮光照，避免盛夏暴晒",
    "water": "土表干后浇透，避免球根积水",
    "temp": "喜凉爽、通风环境",
    "source": "https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination",
    "rank": "物种",
    "genus": "Lilium",
    "family": "百合科",
    "parentId": "lily",
    "evidenceScope": "来源明确列出该物种",
    "evidenceTaxon": "Lilium longiflorum",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-20",
    "careStatus": "RHS 属级养护参考，品种需求不同",
    "sources": [
      {
        "title": "FDA · 百合与猫",
        "url": "https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination",
        "kind": "toxicity",
        "accessed": "2026-10-20",
        "taxon": "Lilium longiflorum"
      },
      {
        "title": "RHS · 分类与特征",
        "url": "https://www.rhs.org.uk/plants/75002/lilium-longiflorum-ixb-a/details",
        "kind": "taxonomy",
        "accessed": "2026-10-20",
        "taxon": "Lilium longiflorum"
      },
      {
        "title": "RHS · 百合养护",
        "url": "https://www.rhs.org.uk/plants/lilies/how-to-grow-lilies",
        "kind": "care",
        "accessed": "2026-10-20",
        "taxon": "Lilium longiflorum"
      }
    ],
    "related": [
      "lily",
      "daylily",
      "peace",
      "calla"
    ],
    "searchTerms": [
      "百合",
      "百合花"
    ],
    "identityNote": "白色喇叭状花；外观只能辅助辨别，需要核对标签及学名。",
    "scene": "鲜花与盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "复活节百合",
      "铁炮百合",
      "easter lily"
    ],
    "commonNamesText": "复活节百合、铁炮百合、easter lily",
    "aliasSummary": "复活节百合、铁炮百合、easter lily",
    "scientificSynonymsText": ""
  },
  {
    "id": "tiger-lily",
    "name": "卷丹",
    "latin": "Lilium lancifolium",
    "aliases": [
      "卷丹百合",
      "虎皮百合",
      "tiger lily",
      "Lilium tigrinum"
    ],
    "icon": "✳",
    "cat": "high",
    "dog": "caution",
    "summary": "先确认身份，再理解毒性证据。",
    "catHarm": "百合属植物可使猫发生急性肾损伤，少量接触后舔入花粉、摄入花瓶水也可能造成严重中毒。",
    "dogHarm": "犬通常不发生猫的百合相关肾毒性，但摄入可能引起胃肠不适；仍应避免啃食。",
    "avoid": "有猫家庭不要将百合带入室内。整株、花粉及花瓶水均需隔离；高处摆放不能可靠预防。",
    "feature": "常见橙色斑点反卷花被；不能仅凭斑点认定物种。",
    "light": "明亮光照，避免盛夏暴晒",
    "water": "土表干后浇透，避免球根积水",
    "temp": "喜凉爽、通风环境",
    "source": "https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination",
    "rank": "物种",
    "genus": "Lilium",
    "family": "百合科",
    "parentId": "lily",
    "evidenceScope": "来源明确列出该物种",
    "evidenceTaxon": "Lilium lancifolium",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-20",
    "careStatus": "RHS 属级养护参考，品种需求不同",
    "sources": [
      {
        "title": "FDA · 百合与猫",
        "url": "https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination",
        "kind": "toxicity",
        "accessed": "2026-10-20",
        "taxon": "Lilium lancifolium"
      },
      {
        "title": "RHS · 分类与特征",
        "url": "https://www.rhs.org.uk/plants/lilies/how-to-grow-lilies",
        "kind": "taxonomy",
        "accessed": "2026-10-20",
        "taxon": "Lilium lancifolium"
      },
      {
        "title": "RHS · 百合养护",
        "url": "https://www.rhs.org.uk/plants/lilies/how-to-grow-lilies",
        "kind": "care",
        "accessed": "2026-10-20",
        "taxon": "Lilium lancifolium"
      }
    ],
    "related": [
      "lily",
      "daylily",
      "peace",
      "calla"
    ],
    "searchTerms": [
      "百合",
      "百合花"
    ],
    "identityNote": "常见橙色斑点反卷花被；不能仅凭斑点认定物种。",
    "scene": "鲜花与盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [
      "Lilium tigrinum"
    ],
    "commonNames": [
      "卷丹百合",
      "虎皮百合",
      "tiger lily"
    ],
    "commonNamesText": "卷丹百合、虎皮百合、tiger lily",
    "aliasSummary": "卷丹百合、虎皮百合、tiger lily",
    "scientificSynonymsText": "Lilium tigrinum"
  },
  {
    "id": "stargazer",
    "name": "观星者百合",
    "latin": "Lilium 'Stargazer'",
    "aliases": [
      "stargazer lily",
      "stargazer"
    ],
    "icon": "✳",
    "cat": "high",
    "dog": "caution",
    "summary": "先确认身份，再理解毒性证据。",
    "catHarm": "百合属植物可使猫发生急性肾损伤，少量接触后舔入花粉、摄入花瓶水也可能造成严重中毒。",
    "dogHarm": "犬通常不发生猫的百合相关肾毒性，但摄入可能引起胃肠不适；仍应避免啃食。",
    "avoid": "有猫家庭不要将百合带入室内。整株、花粉及花瓶水均需隔离；高处摆放不能可靠预防。",
    "feature": "东方百合群中的栽培品种；粉色花或香味不能证明是这个品种。",
    "light": "明亮光照，避免盛夏暴晒",
    "water": "土表干后浇透，避免球根积水",
    "temp": "喜凉爽、通风环境",
    "source": "https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination",
    "rank": "栽培品种",
    "genus": "Lilium",
    "family": "百合科",
    "parentId": "lily",
    "evidenceScope": "FDA 明确列出此杂交品种",
    "evidenceTaxon": "Lilium 'Stargazer'",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-20",
    "careStatus": "RHS 属级养护参考，品种需求不同",
    "sources": [
      {
        "title": "FDA · 百合与猫",
        "url": "https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination",
        "kind": "toxicity",
        "accessed": "2026-10-20",
        "taxon": "Lilium 'Stargazer'"
      },
      {
        "title": "RHS · 分类与特征",
        "url": "https://www.rhs.org.uk/plants/articles/graham-rice/perennials-and-bulbs/get-growing-lilies",
        "kind": "taxonomy",
        "accessed": "2026-10-20",
        "taxon": "Lilium 'Stargazer'"
      },
      {
        "title": "RHS · 百合养护",
        "url": "https://www.rhs.org.uk/plants/lilies/how-to-grow-lilies",
        "kind": "care",
        "accessed": "2026-10-20",
        "taxon": "Lilium 'Stargazer'"
      }
    ],
    "related": [
      "lily",
      "daylily",
      "peace",
      "calla"
    ],
    "searchTerms": [
      "百合",
      "百合花"
    ],
    "identityNote": "东方百合群中的栽培品种；粉色花或香味不能证明是这个品种。",
    "scene": "鲜花与盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "stargazer lily",
      "stargazer"
    ],
    "commonNamesText": "stargazer lily、stargazer",
    "aliasSummary": "stargazer lily、stargazer",
    "scientificSynonymsText": ""
  },
  {
    "id": "asiatic",
    "name": "亚洲百合杂交群",
    "latin": "Lilium Asiatic hybrids",
    "aliases": [
      "亚洲百合",
      "asiatic lily",
      "asiatic hybrids"
    ],
    "icon": "✳",
    "cat": "high",
    "dog": "caution",
    "summary": "先确认身份，再理解毒性证据。",
    "catHarm": "百合属植物可使猫发生急性肾损伤，少量接触后舔入花粉、摄入花瓶水也可能造成严重中毒。",
    "dogHarm": "犬通常不发生猫的百合相关肾毒性，但摄入可能引起胃肠不适；仍应避免啃食。",
    "avoid": "有猫家庭不要将百合带入室内。整株、花粉及花瓶水均需隔离；高处摆放不能可靠预防。",
    "feature": "这是园艺杂交群，不是一个植物种；不能按花色细分毒性。",
    "light": "明亮光照，避免盛夏暴晒",
    "water": "土表干后浇透，避免球根积水",
    "temp": "喜凉爽、通风环境",
    "source": "https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination",
    "rank": "园艺杂交群",
    "genus": "Lilium",
    "family": "百合科",
    "parentId": "lily",
    "evidenceScope": "FDA 明确列出亚洲百合及其杂交品种",
    "evidenceTaxon": "Lilium Asiatic hybrids",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-20",
    "careStatus": "RHS 属级养护参考，品种需求不同",
    "sources": [
      {
        "title": "FDA · 百合与猫",
        "url": "https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination",
        "kind": "toxicity",
        "accessed": "2026-10-20",
        "taxon": "Lilium Asiatic hybrids"
      },
      {
        "title": "RHS · 分类与特征",
        "url": "https://www.rhs.org.uk/plants/lilies/how-to-grow-lilies",
        "kind": "taxonomy",
        "accessed": "2026-10-20",
        "taxon": "Lilium Asiatic hybrids"
      },
      {
        "title": "RHS · 百合养护",
        "url": "https://www.rhs.org.uk/plants/lilies/how-to-grow-lilies",
        "kind": "care",
        "accessed": "2026-10-20",
        "taxon": "Lilium Asiatic hybrids"
      }
    ],
    "related": [
      "lily",
      "daylily",
      "peace",
      "calla"
    ],
    "searchTerms": [
      "百合",
      "百合花"
    ],
    "identityNote": "这是园艺杂交群，不是一个植物种；不能按花色细分毒性。",
    "scene": "鲜花与盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "亚洲百合",
      "asiatic lily",
      "asiatic hybrids"
    ],
    "commonNamesText": "亚洲百合、asiatic lily、asiatic hybrids",
    "aliasSummary": "亚洲百合、asiatic lily、asiatic hybrids",
    "scientificSynonymsText": ""
  },
  {
    "id": "daylily",
    "name": "萱草属 · 总览",
    "latin": "Hemerocallis spp.",
    "rank": "属级总览",
    "aliases": [
      "萱草",
      "daylily",
      "day lily"
    ],
    "icon": "❀",
    "genus": "Hemerocallis",
    "family": "阿福花科",
    "parentId": null,
    "cat": "high",
    "dog": "unknown",
    "catHarm": "萱草属对猫有严重肾毒性；疑似摄入应立即联系兽医。",
    "dogHarm": "本条尚未补齐针对犬的独立毒性依据，不从猫的结论推断犬风险；避免啃食。",
    "summary": "核对植物身份，让关爱有据可循。",
    "feature": "不属于百合属；英文 daylily 容易与 true lily 混淆。此页不鉴定具体萱草品种。",
    "identityNote": "不属于百合属；英文 daylily 容易与 true lily 混淆。此页不鉴定具体萱草品种。",
    "avoid": "有猫家庭避免种植或带入；收好所有植株和花材。",
    "light": "充足日照至半阴",
    "water": "生长季需水，排水良好",
    "temp": "不同园艺品种和当地气候条件不同",
    "source": "https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination",
    "sources": [
      {
        "title": "FDA · 百合与猫",
        "url": "https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination",
        "kind": "toxicity",
        "accessed": "2026-10-20",
        "taxon": "Hemerocallis spp."
      },
      {
        "title": "NC State Extension · 分类与养护",
        "url": "https://plants.ces.ncsu.edu/plants/hemerocallis/",
        "kind": "care",
        "taxon": "Hemerocallis spp.",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceScope": "属级资料，不能用于确认具体物种",
    "evidenceTaxon": "Hemerocallis spp.",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-20",
    "careStatus": "已补 NC State 园艺来源，仍需按品种和环境调整",
    "related": [
      "lily",
      "peace",
      "calla"
    ],
    "searchTerms": [
      "百合易混淆"
    ],
    "scene": "盆栽与庭院",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "萱草",
      "daylily",
      "day lily"
    ],
    "commonNamesText": "萱草、daylily、day lily",
    "aliasSummary": "萱草、daylily、day lily",
    "scientificSynonymsText": ""
  },
  {
    "id": "peace",
    "name": "白掌属 · 总览",
    "latin": "Spathiphyllum spp.",
    "rank": "属级总览",
    "aliases": [
      "白掌",
      "一帆风顺",
      "和平百合",
      "peace lily"
    ],
    "icon": "❀",
    "genus": "Spathiphyllum",
    "family": "天南星科",
    "parentId": null,
    "cat": "toxic",
    "dog": "toxic",
    "catHarm": "咀嚼时释放不溶性草酸钙结晶，可引起口腔疼痛、流涎、呕吐和吞咽困难。",
    "dogHarm": "咀嚼时释放不溶性草酸钙结晶，可引起口腔疼痛、流涎、呕吐和吞咽困难。",
    "summary": "核对植物身份，让关爱有据可循。",
    "feature": "属于天南星科，不是百合属；不能把百合属的肾毒性机制套用到本植物。白掌俗名不能确认具体物种。",
    "identityNote": "属于天南星科，不是百合属；不能把百合属的肾毒性机制套用到本植物。白掌俗名不能确认具体物种。",
    "avoid": "放在宠物不能进入的独立空间；出现吞咽或呼吸异常立即就医。",
    "light": "半阴或散射光，避免直晒",
    "water": "保持适度湿润，避免长期湿涝",
    "temp": "喜温暖，远离冷风",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/peace-lily",
    "sources": [
      {
        "title": "ASPCA · 植物毒性档案",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/peace-lily",
        "kind": "toxicity",
        "accessed": "2026-10-20",
        "taxon": "Spathiphyllum spp."
      },
      {
        "title": "NC State Extension · 分类与养护",
        "url": "https://plants.ces.ncsu.edu/plants/spathiphyllum/",
        "kind": "care",
        "taxon": "Spathiphyllum spp.",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceScope": "属级资料，不能用于确认具体物种",
    "evidenceTaxon": "Spathiphyllum spp.",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-20",
    "careStatus": "已补 NC State 园艺来源，仍需按品种和环境调整",
    "related": [
      "lily",
      "daylily"
    ],
    "searchTerms": [
      "百合易混淆"
    ],
    "scene": "盆栽与庭院",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "白掌",
      "一帆风顺",
      "和平百合",
      "peace lily"
    ],
    "commonNamesText": "白掌、一帆风顺、和平百合、peace lily",
    "aliasSummary": "白掌、一帆风顺、和平百合 等",
    "scientificSynonymsText": ""
  },
  {
    "id": "calla",
    "name": "白花马蹄莲",
    "latin": "Zantedeschia aethiopica",
    "rank": "物种",
    "aliases": [
      "马蹄莲",
      "calla lily"
    ],
    "icon": "❀",
    "genus": "Zantedeschia",
    "family": "天南星科",
    "parentId": null,
    "cat": "toxic",
    "dog": "toxic",
    "catHarm": "咀嚼时释放不溶性草酸钙结晶，可引起口腔疼痛、流涎、呕吐和吞咽困难。",
    "dogHarm": "咀嚼时释放不溶性草酸钙结晶，可引起口腔疼痛、流涎、呕吐和吞咽困难。",
    "summary": "核对植物身份，让关爱有据可循。",
    "feature": "属于天南星科，不是百合属；不能把百合属的肾毒性机制套用到本植物。彩色马蹄莲不一定属于这个物种。",
    "identityNote": "属于天南星科，不是百合属；不能把百合属的肾毒性机制套用到本植物。彩色马蹄莲不一定属于这个物种。",
    "avoid": "放在宠物不能进入的独立空间；出现吞咽或呼吸异常立即就医。",
    "light": "日照至半阴，炎热地区适当遮阴",
    "water": "喜湿润、富有机质基质",
    "temp": "寒冷或持续干旱时可能休眠，需按当地条件防寒",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/calla-lily",
    "sources": [
      {
        "title": "ASPCA · 植物毒性档案",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/calla-lily",
        "kind": "toxicity",
        "accessed": "2026-10-20",
        "taxon": "Zantedeschia aethiopica"
      },
      {
        "title": "NC State Extension · 分类与养护",
        "url": "https://plants.ces.ncsu.edu/plants/zantedeschia-aethiopica/",
        "kind": "care",
        "taxon": "Zantedeschia aethiopica",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceScope": "来源明确列出该物种",
    "evidenceTaxon": "Zantedeschia aethiopica",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-20",
    "careStatus": "已补 NC State 园艺来源，仍需按品种和环境调整",
    "related": [
      "lily",
      "daylily"
    ],
    "searchTerms": [
      "百合易混淆"
    ],
    "scene": "鲜花与盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "马蹄莲",
      "calla lily"
    ],
    "commonNamesText": "马蹄莲、calla lily",
    "aliasSummary": "马蹄莲、calla lily",
    "scientificSynonymsText": ""
  },
  {
    "id": "chrysanthemum",
    "name": "菊属 · 总览",
    "latin": "Chrysanthemum spp.",
    "rank": "属级总览",
    "aliases": [
      "菊花",
      "菊属",
      "mum",
      "chrysanthemum"
    ],
    "icon": "❀",
    "genus": "Chrysanthemum",
    "family": "菊科",
    "parentId": null,
    "cat": "toxic",
    "dog": "toxic",
    "catHarm": "菊属毒性资料列有呕吐、腹泻、流涎、步态不协调和皮肤炎症；不能据此给出某一品种的中毒剂量或严重程度。",
    "dogHarm": "菊属毒性资料列有呕吐、腹泻、流涎、步态不协调和皮肤炎症；不能据此给出某一品种的中毒剂量或严重程度。",
    "summary": "核对植物身份，让关爱有据可循。",
    "feature": "菊属与非洲菊属是不同分类单元。“菊科”或花名带“菊”，不足以判定毒性。",
    "identityNote": "菊属与非洲菊属是不同分类单元。“菊科”或花名带“菊”，不足以判定毒性。",
    "avoid": "避免宠物啃食花叶和接触修剪废弃物；疑似摄入或出现症状及时联系兽医。",
    "light": "喜充足日照；此指南主要适用于早花或耐寒园艺菊",
    "water": "生长期保持水分，避免完全干透及积水",
    "temp": "耐寒性因品种而异，冬季可能需要防霜",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/chrysanthemum",
    "sources": [
      {
        "title": "ASPCA · 植物毒性档案",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/chrysanthemum",
        "kind": "toxicity",
        "accessed": "2026-10-20",
        "taxon": "Chrysanthemum spp."
      },
      {
        "title": "RHS · 养护参考",
        "url": "https://www.rhs.org.uk/plants/chrysanthemum/growing-guide",
        "kind": "care",
        "accessed": "2026-10-20",
        "taxon": "Chrysanthemum spp."
      }
    ],
    "evidenceScope": "属级资料，不能用于确认具体物种",
    "evidenceTaxon": "Chrysanthemum spp.",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-20",
    "careStatus": "属级园艺参考，需按具体品种和气候调整",
    "related": [
      "florist-mum",
      "gerbera"
    ],
    "searchTerms": [],
    "scene": "鲜花与盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "菊花",
      "菊属",
      "mum",
      "chrysanthemum"
    ],
    "commonNamesText": "菊花、菊属、mum、chrysanthemum",
    "aliasSummary": "菊花、菊属、mum 等",
    "scientificSynonymsText": ""
  },
  {
    "id": "florist-mum",
    "name": "栽培菊（杂交类群）",
    "latin": "Chrysanthemum × morifolium",
    "rank": "杂交分类单元",
    "aliases": [
      "栽培菊",
      "Chrysanthemum x morifolium"
    ],
    "icon": "❀",
    "genus": "Chrysanthemum",
    "family": "菊科",
    "parentId": "chrysanthemum",
    "cat": "toxic",
    "dog": "toxic",
    "catHarm": "菊属毒性资料列有呕吐、腹泻、流涎、步态不协调和皮肤炎症；不能据此给出某一品种的中毒剂量或严重程度。",
    "dogHarm": "菊属毒性资料列有呕吐、腹泻、流涎、步态不协调和皮肤炎症；不能据此给出某一品种的中毒剂量或严重程度。",
    "summary": "核对植物身份，让关爱有据可循。",
    "feature": "复杂杂交来源的栽培菊。花型和商品名不等同于正式品种名称。",
    "identityNote": "乒乓菊、多头小菊等商品名不能单独证明属于此分类单元，也不能确认具体品种。",
    "avoid": "避免宠物啃食花叶和接触修剪废弃物；疑似摄入或出现症状及时联系兽医。",
    "light": "喜充足日照；此指南主要适用于早花或耐寒园艺菊",
    "water": "生长期保持水分，避免完全干透及积水",
    "temp": "耐寒性因品种而异，冬季可能需要防霜",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/chrysanthemum",
    "sources": [
      {
        "title": "ASPCA · 植物毒性档案",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/chrysanthemum",
        "kind": "toxicity",
        "accessed": "2026-10-20",
        "taxon": "Chrysanthemum spp.（属级参考）"
      },
      {
        "title": "RHS · 养护参考",
        "url": "https://www.rhs.org.uk/plants/chrysanthemum/growing-guide",
        "kind": "care",
        "accessed": "2026-10-20",
        "taxon": "Chrysanthemum × morifolium"
      },
      {
        "title": "Kew POWO · 杂交分类单元",
        "url": "https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A77111328-1/general-information",
        "kind": "taxonomy",
        "accessed": "2026-10-20",
        "taxon": "Chrysanthemum × morifolium"
      },
      {
        "title": "NParks · 栽培菊",
        "url": "https://www.nparks.gov.sg/florafaunaweb/flora/8/0/8018",
        "kind": "taxonomy",
        "accessed": "2026-10-20",
        "taxon": "Chrysanthemum × morifolium"
      }
    ],
    "evidenceScope": "参考菊属毒性资料；尚无本项目收录的该杂交类群或单一品种独立毒性证据",
    "evidenceTaxon": "Chrysanthemum spp.（属级参考）",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-20",
    "careStatus": "属级园艺参考，需按具体品种和气候调整",
    "related": [
      "chrysanthemum",
      "gerbera"
    ],
    "searchTerms": [
      "菊花",
      "乒乓菊",
      "多头小菊"
    ],
    "scene": "鲜花与盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [
      "Chrysanthemum x morifolium"
    ],
    "commonNames": [
      "栽培菊"
    ],
    "commonNamesText": "栽培菊",
    "aliasSummary": "栽培菊",
    "scientificSynonymsText": "Chrysanthemum x morifolium"
  },
  {
    "id": "gerbera",
    "name": "非洲菊（G. jamesonii）",
    "latin": "Gerbera jamesonii",
    "rank": "物种",
    "aliases": [
      "非洲菊",
      "扶郎花",
      "gerber daisy",
      "gerbera daisy"
    ],
    "icon": "❀",
    "genus": "Gerbera",
    "family": "菊科",
    "parentId": null,
    "cat": "low",
    "dog": "low",
    "catHarm": "ASPCA 将 Gerbera jamesonii 列为对猫犬无毒；这不是允许食用的结论，摄入植物仍可能引起胃肠不适。",
    "dogHarm": "ASPCA 将 Gerbera jamesonii 列为对猫犬无毒；这不是允许食用的结论，摄入植物仍可能引起胃肠不适。",
    "summary": "核对植物身份，让关爱有据可循。",
    "feature": "非洲菊属，与菊属不同。商业杂交非洲菊不应自动当作该物种，本结论仅限来源列出的分类单元。",
    "identityNote": "非洲菊属，与菊属不同。商业杂交非洲菊不应自动当作该物种，本结论仅限来源列出的分类单元。",
    "avoid": "确认学名，不因花名含“菊”而套用菊属结论；防止啃食及接触农药、保鲜剂。",
    "light": "明亮温暖位置，室内避免盛夏烈日灼伤",
    "water": "使用排水良好的基质，避免盆底长期积水",
    "temp": "多数类型怕霜，具体耐寒性需核对品种",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/gerber-daisy",
    "sources": [
      {
        "title": "ASPCA · 植物毒性档案",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/gerber-daisy",
        "kind": "toxicity",
        "accessed": "2026-10-20",
        "taxon": "Gerbera jamesonii"
      },
      {
        "title": "RHS · 养护参考",
        "url": "https://www.rhs.org.uk/plants/gerbera/growing-guide",
        "kind": "care",
        "accessed": "2026-10-20",
        "taxon": "Gerbera jamesonii"
      }
    ],
    "evidenceScope": "来源明确列出该物种",
    "evidenceTaxon": "Gerbera jamesonii",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-20",
    "careStatus": "属级园艺参考，需按具体品种和气候调整",
    "related": [
      "chrysanthemum",
      "florist-mum"
    ],
    "searchTerms": [
      "菊花易混淆"
    ],
    "scene": "鲜花与盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "非洲菊",
      "扶郎花",
      "gerber daisy",
      "gerbera daisy"
    ],
    "commonNamesText": "非洲菊、扶郎花、gerber daisy、gerbera daisy",
    "aliasSummary": "非洲菊、扶郎花、gerber daisy 等",
    "scientificSynonymsText": ""
  },
  {
    "id": "tulip",
    "name": "郁金香属 · 总览",
    "latin": "Tulipa spp.",
    "aliases": [
      "郁金香",
      "tulip"
    ],
    "family": "百合科",
    "genus": "Tulipa",
    "rank": "属级总览",
    "cat": "toxic",
    "dog": "toxic",
    "icon": "❀",
    "summary": "先核对学名，再了解猫狗风险与养护要求。",
    "catHarm": "可引起呕吐、精神沉郁、腹泻和流涎；鳞茎中毒性成分浓度较高。",
    "dogHarm": "可引起呕吐、精神沉郁、腹泻和流涎；鳞茎中毒性成分浓度较高。",
    "avoid": "把球根、花材和修剪垃圾与宠物隔离，防止犬刨食球根。",
    "feature": "球根花卉，园艺品种很多；重瓣、鹦鹉等花型不构成独立毒性结论。",
    "identityNote": "球根花卉，园艺品种很多；重瓣、鹦鹉等花型不构成独立毒性结论。",
    "light": "喜充足日照",
    "water": "生长期保持适度水分，基质排水良好",
    "temp": "喜冷凉生长条件，避免高温湿涝",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/tulip",
    "sources": [
      {
        "title": "ASPCA · tulip",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/tulip",
        "kind": "toxicity",
        "taxon": "Tulipa spp.",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 分类与特征",
        "url": "https://plants.ces.ncsu.edu/plants/tulipa/",
        "kind": "taxonomy",
        "taxon": "Tulipa spp.",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 养护参考",
        "url": "https://plants.ces.ncsu.edu/plants/tulipa/",
        "kind": "care",
        "taxon": "Tulipa spp.",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceTaxon": "Tulipa spp.",
    "evidenceScope": "属级资料，仅作该属参考，不是具体品种鉴定",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-21",
    "careStatus": "已附园艺来源，属级或物种级参考不保证覆盖每个品种及地区",
    "parentId": null,
    "related": [],
    "searchTerms": [],
    "scene": "鲜花与球根",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "郁金香",
      "tulip"
    ],
    "commonNamesText": "郁金香、tulip",
    "aliasSummary": "郁金香、tulip",
    "scientificSynonymsText": ""
  },
  {
    "id": "carnation",
    "name": "康乃馨",
    "latin": "Dianthus caryophyllus",
    "aliases": [
      "康乃馨",
      "香石竹",
      "carnation"
    ],
    "family": "石竹科",
    "genus": "Dianthus",
    "rank": "物种",
    "cat": "toxic",
    "dog": "toxic",
    "icon": "❀",
    "summary": "先核对学名，再了解猫狗风险与养护要求。",
    "catHarm": "资料列有较轻的胃肠不适及皮肤炎症；个体反应不能仅由标签预测。",
    "dogHarm": "资料列有较轻的胃肠不适及皮肤炎症；个体反应不能仅由标签预测。",
    "avoid": "避免啃食花叶，接触后出现不适及时咨询兽医。",
    "feature": "多年生石竹科花卉，可作鲜切花。不能覆盖所有石竹属植物。",
    "identityNote": "多年生石竹科花卉，可作鲜切花。不能覆盖所有石竹属植物。",
    "light": "喜日照",
    "water": "使用疏松、排水良好的基质，保持适度湿润",
    "temp": "更适合凉爽环境，避免持续高温",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/carnation",
    "sources": [
      {
        "title": "ASPCA · carnation",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/carnation",
        "kind": "toxicity",
        "taxon": "Dianthus caryophyllus",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 分类与特征",
        "url": "https://plants.ces.ncsu.edu/plants/dianthus-caryophyllus/",
        "kind": "taxonomy",
        "taxon": "Dianthus caryophyllus",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 养护参考",
        "url": "https://plants.ces.ncsu.edu/plants/dianthus-caryophyllus/",
        "kind": "care",
        "taxon": "Dianthus caryophyllus",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceTaxon": "Dianthus caryophyllus",
    "evidenceScope": "来源明确列出该分类单元；仍须确认植物身份",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-21",
    "careStatus": "已附园艺来源，属级或物种级参考不保证覆盖每个品种及地区",
    "parentId": null,
    "related": [],
    "searchTerms": [],
    "scene": "鲜花",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "香石竹",
      "carnation"
    ],
    "commonNamesText": "香石竹、carnation",
    "aliasSummary": "香石竹、carnation",
    "scientificSynonymsText": ""
  },
  {
    "id": "smooth-hydrangea",
    "name": "乔木绣球",
    "latin": "Hydrangea arborescens",
    "aliases": [
      "乔木绣球",
      "smooth hydrangea"
    ],
    "family": "绣球科",
    "genus": "Hydrangea",
    "rank": "物种",
    "cat": "toxic",
    "dog": "toxic",
    "icon": "❀",
    "summary": "先核对学名，再了解猫狗风险与养护要求。",
    "catHarm": "ASPCA 对此物种列有呕吐、精神沉郁和腹泻；说明氰化物中毒少见，常以胃肠不适为主。",
    "dogHarm": "ASPCA 对此物种列有呕吐、精神沉郁和腹泻；说明氰化物中毒少见，常以胃肠不适为主。",
    "avoid": "隔离花材与修剪枝叶；疑似摄入时保留标签和样本联系兽医。",
    "feature": "本条对应 H. arborescens，不是所有花店绣球。花球大小或颜色不能确认物种。",
    "identityNote": "本条对应 H. arborescens，不是所有花店绣球。花球大小或颜色不能确认物种。",
    "light": "喜半阴，日照强时需适当遮护",
    "water": "保持水分，土壤排水良好",
    "temp": "耐温因品种与栽培条件而异",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/hydrangea",
    "sources": [
      {
        "title": "ASPCA · hydrangea",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/hydrangea",
        "kind": "toxicity",
        "taxon": "Hydrangea arborescens",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 分类与特征",
        "url": "https://plants.ces.ncsu.edu/plants/hydrangea-arborescens/",
        "kind": "taxonomy",
        "taxon": "Hydrangea arborescens",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 养护参考",
        "url": "https://plants.ces.ncsu.edu/plants/hydrangea-arborescens/",
        "kind": "care",
        "taxon": "Hydrangea arborescens",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceTaxon": "Hydrangea arborescens",
    "evidenceScope": "来源明确列出该分类单元；仍须确认植物身份",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-21",
    "careStatus": "已附园艺来源，属级或物种级参考不保证覆盖每个品种及地区",
    "parentId": null,
    "related": [
      "bigleaf-hydrangea"
    ],
    "searchTerms": [
      "绣球",
      "绣球花"
    ],
    "scene": "鲜花与盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "smooth hydrangea"
    ],
    "commonNamesText": "smooth hydrangea",
    "aliasSummary": "smooth hydrangea",
    "scientificSynonymsText": ""
  },
  {
    "id": "bigleaf-hydrangea",
    "name": "大叶绣球",
    "latin": "Hydrangea macrophylla",
    "aliases": [
      "大叶绣球",
      "八仙花",
      "bigleaf hydrangea"
    ],
    "family": "绣球科",
    "genus": "Hydrangea",
    "rank": "物种",
    "cat": "toxic",
    "dog": "toxic",
    "icon": "❀",
    "summary": "先核对学名，再了解猫狗风险与养护要求。",
    "catHarm": "参考绣球属毒性资料：含氰苷类成分，摄入可能引起胃肠或其他中毒表现。属级资料不能提供本品种的具体剂量或严重程度。",
    "dogHarm": "参考绣球属毒性资料：含氰苷类成分，摄入可能引起胃肠或其他中毒表现。属级资料不能提供本品种的具体剂量或严重程度。",
    "avoid": "避免宠物接触花叶；不要用其他绣球物种的症状频率当作本种的独立证据。",
    "feature": "本物种有多种园艺品种与花型；花色与土壤条件有关，不能用来判断毒性。",
    "identityNote": "本物种有多种园艺品种与花型；花色与土壤条件有关，不能用来判断毒性。",
    "light": "喜散射光或半阴，避开强烈午后日晒",
    "water": "保持水分，避免排水不良",
    "temp": "不同品种耐寒和修剪方式有差异",
    "source": "https://www.petpoisonhelpline.com/poison/hydrangea/",
    "sources": [
      {
        "title": "Pet Poison Helpline · 绣球属",
        "url": "https://www.petpoisonhelpline.com/poison/hydrangea/",
        "kind": "toxicity",
        "taxon": "Hydrangea spp.",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 分类与特征",
        "url": "https://plants.ces.ncsu.edu/plants/hydrangea-macrophylla/",
        "kind": "taxonomy",
        "taxon": "Hydrangea macrophylla",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 养护参考",
        "url": "https://plants.ces.ncsu.edu/plants/hydrangea-macrophylla/",
        "kind": "care",
        "taxon": "Hydrangea macrophylla",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceTaxon": "Hydrangea spp.",
    "evidenceScope": "参考属级毒性资料；尚未收录本物种或具体品种的独立毒性证据",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-21",
    "careStatus": "已附园艺来源，属级或物种级参考不保证覆盖每个品种及地区",
    "parentId": null,
    "related": [
      "smooth-hydrangea"
    ],
    "searchTerms": [
      "绣球",
      "绣球花"
    ],
    "scene": "鲜花与盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "八仙花",
      "bigleaf hydrangea"
    ],
    "commonNamesText": "八仙花、bigleaf hydrangea",
    "aliasSummary": "八仙花、bigleaf hydrangea",
    "scientificSynonymsText": ""
  },
  {
    "id": "narcissus",
    "name": "水仙属 · 总览",
    "latin": "Narcissus spp.",
    "aliases": [
      "水仙",
      "洋水仙",
      "daffodil",
      "narcissus"
    ],
    "family": "石蒜科",
    "genus": "Narcissus",
    "rank": "属级总览",
    "cat": "toxic",
    "dog": "toxic",
    "icon": "❀",
    "summary": "先核对学名，再了解猫狗风险与养护要求。",
    "catHarm": "可引起呕吐、流涎、腹泻；大量摄入可伴抽搐、低血压、震颤和心律异常。鳞茎危险性较高。",
    "dogHarm": "可引起呕吐、流涎、腹泻；大量摄入可伴抽搐、低血压、震颤和心律异常。鳞茎危险性较高。",
    "avoid": "不要让宠物接触球根和水培容器；误食后联系兽医。",
    "feature": "水仙属含多个物种及园艺分组；中国水仙与洋水仙不是同一个具体品种。",
    "identityNote": "水仙属含多个物种及园艺分组；中国水仙与洋水仙不是同一个具体品种。",
    "light": "喜日照至半阴",
    "water": "生长期保持水分，栽培土需排水良好",
    "temp": "按实际物种和当地季节安排，勿套用固定日历",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/daffodil",
    "sources": [
      {
        "title": "ASPCA · daffodil",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/daffodil",
        "kind": "toxicity",
        "taxon": "Narcissus spp.",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 分类与特征",
        "url": "https://plants.ces.ncsu.edu/plants/narcissus/",
        "kind": "taxonomy",
        "taxon": "Narcissus spp.",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 养护参考",
        "url": "https://plants.ces.ncsu.edu/plants/narcissus/",
        "kind": "care",
        "taxon": "Narcissus spp.",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceTaxon": "Narcissus spp.",
    "evidenceScope": "属级资料，仅作该属参考，不是具体品种鉴定",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-21",
    "careStatus": "已附园艺来源，属级或物种级参考不保证覆盖每个品种及地区",
    "parentId": null,
    "related": [],
    "searchTerms": [],
    "scene": "鲜花与球根",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "水仙",
      "洋水仙",
      "daffodil",
      "narcissus"
    ],
    "commonNamesText": "水仙、洋水仙、daffodil、narcissus",
    "aliasSummary": "水仙、洋水仙、daffodil 等",
    "scientificSynonymsText": ""
  },
  {
    "id": "hyacinth",
    "name": "风信子",
    "latin": "Hyacinthus orientalis",
    "aliases": [
      "风信子",
      "hyacinth"
    ],
    "family": "天门冬科",
    "genus": "Hyacinthus",
    "rank": "物种",
    "cat": "toxic",
    "dog": "toxic",
    "icon": "❀",
    "summary": "先核对学名，再了解猫狗风险与养护要求。",
    "catHarm": "可出现剧烈呕吐、腹泻（偶有出血）、精神沉郁和震颤。",
    "dogHarm": "可出现剧烈呕吐、腹泻（偶有出血）、精神沉郁和震颤。",
    "avoid": "隔离球根与容器，避免宠物啃咬或饮用水培水。",
    "feature": "球根花卉，不与葡萄风信子等其他属植物混为一谈。",
    "identityNote": "球根花卉，不与葡萄风信子等其他属植物混为一谈。",
    "light": "喜日照至半阴",
    "water": "生长时保持适度水分，花后进入休眠逐渐减水",
    "temp": "不适合长期作为普通室内常绿盆栽",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/hyacinth",
    "sources": [
      {
        "title": "ASPCA · hyacinth",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/hyacinth",
        "kind": "toxicity",
        "taxon": "Hyacinthus orientalis",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 分类与特征",
        "url": "https://plants.ces.ncsu.edu/plants/hyacinthus-orientalis/",
        "kind": "taxonomy",
        "taxon": "Hyacinthus orientalis",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 养护参考",
        "url": "https://plants.ces.ncsu.edu/plants/hyacinthus-orientalis/",
        "kind": "care",
        "taxon": "Hyacinthus orientalis",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceTaxon": "Hyacinthus orientalis",
    "evidenceScope": "来源明确列出该分类单元；仍须确认植物身份",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-21",
    "careStatus": "已附园艺来源，属级或物种级参考不保证覆盖每个品种及地区",
    "parentId": null,
    "related": [],
    "searchTerms": [],
    "scene": "鲜花与球根",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "hyacinth"
    ],
    "commonNamesText": "hyacinth",
    "aliasSummary": "hyacinth",
    "scientificSynonymsText": ""
  },
  {
    "id": "aloe",
    "name": "库拉索芦荟",
    "latin": "Aloe vera",
    "aliases": [
      "库拉索芦荟",
      "aloe vera",
      "Aloe barbadensis"
    ],
    "family": "阿福花科",
    "genus": "Aloe",
    "rank": "物种",
    "cat": "toxic",
    "dog": "toxic",
    "icon": "❧",
    "summary": "先核对学名，再了解猫狗风险与养护要求。",
    "catHarm": "整株啃食可能引起呕吐、精神不振、腹泻；不要以芦荟胶的用途推断整株可供宠物食用。",
    "dogHarm": "整株啃食可能引起呕吐、精神不振、腹泻；不要以芦荟胶的用途推断整株可供宠物食用。",
    "avoid": "防止啃食和自行给宠物喂用植物汁液。",
    "feature": "肉质叶呈莲座状。芦荟有多个物种，不能凭俗名确认本种。",
    "identityNote": "肉质叶呈莲座状。芦荟有多个物种，不能凭俗名确认本种。",
    "light": "日照至半阴",
    "water": "基质干透后再浇，使用多肉用透水基质",
    "temp": "冬季减少浇水，避免霜冻",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/aloe",
    "sources": [
      {
        "title": "ASPCA · aloe",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/aloe",
        "kind": "toxicity",
        "taxon": "Aloe vera",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 分类与特征",
        "url": "https://plants.ces.ncsu.edu/plants/aloe-vera/",
        "kind": "taxonomy",
        "taxon": "Aloe vera",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 养护参考",
        "url": "https://plants.ces.ncsu.edu/plants/aloe-vera/",
        "kind": "care",
        "taxon": "Aloe vera",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceTaxon": "Aloe vera",
    "evidenceScope": "来源明确列出该分类单元；仍须确认植物身份",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-21",
    "careStatus": "已附园艺来源，属级或物种级参考不保证覆盖每个品种及地区",
    "parentId": null,
    "related": [],
    "searchTerms": [
      "芦荟"
    ],
    "scene": "盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [
      "Aloe barbadensis"
    ],
    "commonNames": [],
    "commonNamesText": "暂无其他已核对常用名",
    "aliasSummary": "",
    "scientificSynonymsText": "Aloe barbadensis"
  },
  {
    "id": "monstera",
    "name": "龟背竹",
    "latin": "Monstera deliciosa",
    "aliases": [
      "龟背竹",
      "monstera deliciosa"
    ],
    "family": "天南星科",
    "genus": "Monstera",
    "rank": "物种",
    "cat": "toxic",
    "dog": "toxic",
    "icon": "❧",
    "summary": "先核对学名，再了解猫狗风险与养护要求。",
    "catHarm": "不溶性草酸钙可引起口腔疼痛、流涎、呕吐和吞咽困难。",
    "dogHarm": "不溶性草酸钙可引起口腔疼痛、流涎、呕吐和吞咽困难。",
    "avoid": "隔离藤蔓、叶片和剪枝，不能只依靠高处摆放。",
    "feature": "成熟叶可有开裂及孔洞；幼株不一定有孔。其他龟背竹属物种不自动套用此页。",
    "identityNote": "成熟叶可有开裂及孔洞；幼株不一定有孔。其他龟背竹属物种不自动套用此页。",
    "light": "明亮散射光，避免强光灼伤",
    "water": "浇透后待表层部分基质干燥再浇",
    "temp": "喜温暖湿润，并提供稳固支撑",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/swiss-cheese-plant",
    "sources": [
      {
        "title": "ASPCA · swiss-cheese-plant",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/swiss-cheese-plant",
        "kind": "toxicity",
        "taxon": "Monstera deliciosa",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 分类与特征",
        "url": "https://plants.ces.ncsu.edu/plants/monstera-deliciosa/",
        "kind": "taxonomy",
        "taxon": "Monstera deliciosa",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 养护参考",
        "url": "https://plants.ces.ncsu.edu/plants/monstera-deliciosa/",
        "kind": "care",
        "taxon": "Monstera deliciosa",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceTaxon": "Monstera deliciosa",
    "evidenceScope": "来源明确列出该分类单元；仍须确认植物身份",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-21",
    "careStatus": "已附园艺来源，属级或物种级参考不保证覆盖每个品种及地区",
    "parentId": null,
    "related": [],
    "searchTerms": [],
    "scene": "盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [],
    "commonNamesText": "暂无其他已核对常用名",
    "aliasSummary": "",
    "scientificSynonymsText": ""
  },
  {
    "id": "snake",
    "name": "虎尾兰",
    "latin": "Dracaena trifasciata",
    "aliases": [
      "虎尾兰",
      "虎皮兰",
      "Sansevieria trifasciata",
      "snake plant"
    ],
    "family": "天门冬科",
    "genus": "Dracaena",
    "rank": "物种",
    "cat": "toxic",
    "dog": "toxic",
    "icon": "❧",
    "summary": "先核对学名，再了解猫狗风险与养护要求。",
    "catHarm": "含皂苷类成分，摄入可引起恶心、呕吐、腹泻。",
    "dogHarm": "含皂苷类成分，摄入可引起恶心、呕吐、腹泻。",
    "avoid": "防止啃食叶片；耐养不代表对宠物无毒。",
    "feature": "旧学名 Sansevieria trifasciata，现名 Dracaena trifasciata；保留旧名便于对应毒性来源。",
    "identityNote": "旧学名 Sansevieria trifasciata，现名 Dracaena trifasciata；保留旧名便于对应毒性来源。",
    "light": "可耐较弱光，宜明亮位置",
    "water": "浇水间让基质变干，避免积水烂根",
    "temp": "偏冷季节减少水分，避免受冻",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/snake-plant",
    "sources": [
      {
        "title": "ASPCA · snake-plant",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/snake-plant",
        "kind": "toxicity",
        "taxon": "Sansevieria trifasciata",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 分类与特征",
        "url": "https://plants.ces.ncsu.edu/plants/dracaena-trifasciata/",
        "kind": "taxonomy",
        "taxon": "Dracaena trifasciata；列有旧名 Sansevieria trifasciata",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 养护参考",
        "url": "https://plants.ces.ncsu.edu/plants/dracaena-trifasciata/",
        "kind": "care",
        "taxon": "Dracaena trifasciata",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceTaxon": "Sansevieria trifasciata",
    "evidenceScope": "来源明确列出该分类单元；仍须确认植物身份",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-21",
    "careStatus": "已附园艺来源，属级或物种级参考不保证覆盖每个品种及地区",
    "parentId": null,
    "related": [],
    "searchTerms": [],
    "scene": "盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [
      "Sansevieria trifasciata"
    ],
    "commonNames": [
      "虎皮兰",
      "snake plant"
    ],
    "commonNamesText": "虎皮兰、snake plant",
    "aliasSummary": "虎皮兰、snake plant",
    "scientificSynonymsText": "Sansevieria trifasciata"
  },
  {
    "id": "phalaenopsis",
    "name": "蝴蝶兰属 · 总览",
    "latin": "Phalaenopsis spp.",
    "aliases": [
      "蝴蝶兰",
      "moth orchid",
      "phalaenopsis"
    ],
    "family": "兰科",
    "genus": "Phalaenopsis",
    "rank": "属级总览",
    "cat": "low",
    "dog": "low",
    "icon": "❧",
    "summary": "先核对学名，再了解猫狗风险与养护要求。",
    "catHarm": "ASPCA 的蝴蝶兰条目列为对猫犬无毒；摄入植物仍可能引起胃肠不适，不能作为宠物食物。",
    "dogHarm": "ASPCA 的蝴蝶兰条目列为对猫犬无毒；摄入植物仍可能引起胃肠不适，不能作为宠物食物。",
    "avoid": "避免啃食花叶，收好肥料和植料，不让宠物接触保鲜剂。",
    "feature": "花像展翅的蛾。存在大量属内及属间杂交；不把所有兰花或属间杂交都纳入同一结论。",
    "identityNote": "花像展翅的蛾。存在大量属内及属间杂交；不把所有兰花或属间杂交都纳入同一结论。",
    "light": "柔和散射光，避免烈日",
    "water": "透气树皮等植料，浇后充分沥水，勿长期泡水",
    "temp": "喜温暖和较高空气湿度，保持通风",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/phalaenopsis-orchid",
    "sources": [
      {
        "title": "ASPCA · phalaenopsis-orchid",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/phalaenopsis-orchid",
        "kind": "toxicity",
        "taxon": "Phalaenopsis spp.",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 分类与特征",
        "url": "https://plants.ces.ncsu.edu/plants/phalaenopsis/",
        "kind": "taxonomy",
        "taxon": "Phalaenopsis spp.",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 养护参考",
        "url": "https://plants.ces.ncsu.edu/plants/phalaenopsis/",
        "kind": "care",
        "taxon": "Phalaenopsis spp.",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceTaxon": "Phalaenopsis spp.",
    "evidenceScope": "属级资料，仅作该属参考，不是具体品种鉴定",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-21",
    "careStatus": "已附园艺来源，属级或物种级参考不保证覆盖每个品种及地区",
    "parentId": null,
    "related": [],
    "searchTerms": [],
    "scene": "盆栽与花材",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "蝴蝶兰",
      "moth orchid",
      "phalaenopsis"
    ],
    "commonNamesText": "蝴蝶兰、moth orchid、phalaenopsis",
    "aliasSummary": "蝴蝶兰、moth orchid、phalaenopsis",
    "scientificSynonymsText": ""
  },
  {
    "id": "boston",
    "name": "波士顿蕨（Bostoniensis）",
    "latin": "Nephrolepis exaltata 'Bostoniensis'",
    "aliases": [
      "波士顿蕨",
      "boston fern",
      "Nephrolepis exaltata 'Bostoniensis'",
      "Nephrolepis exalta bostoniensis"
    ],
    "family": "肾蕨科",
    "genus": "Nephrolepis",
    "rank": "栽培品种",
    "cat": "low",
    "dog": "low",
    "icon": "❧",
    "summary": "先核对学名，再了解猫狗风险与养护要求。",
    "catHarm": "ASPCA 波士顿蕨条目列为对猫犬无毒；不意味着所有俗称“蕨”的植物无毒。",
    "dogHarm": "ASPCA 波士顿蕨条目列为对猫犬无毒；不意味着所有俗称“蕨”的植物无毒。",
    "avoid": "不要与文竹、天门冬等俗名带 fern 的植物混淆，仍避免宠物啃食。",
    "feature": "来源学名写作 Nephrolepis exalta bostoniensis；园艺来源对应 N. exaltata 的 Bostoniensis 品种，保留原写法以便人工复核。",
    "identityNote": "来源学名写作 Nephrolepis exalta bostoniensis；园艺来源对应 N. exaltata 的 Bostoniensis 品种，保留原写法以便人工复核。",
    "light": "明亮间接光",
    "water": "保持适度湿润，冬季减少水量并避免烂根",
    "temp": "喜温暖及较高空气湿度",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/boston-fern",
    "sources": [
      {
        "title": "ASPCA · boston-fern",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/boston-fern",
        "kind": "toxicity",
        "taxon": "Nephrolepis exalta bostoniensis（来源原文）",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 分类与特征",
        "url": "https://plants.ces.ncsu.edu/plants/nephrolepis-exaltata/",
        "kind": "taxonomy",
        "taxon": "Nephrolepis exaltata 及其品种",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 养护参考",
        "url": "https://plants.ces.ncsu.edu/plants/nephrolepis-exaltata/",
        "kind": "care",
        "taxon": "Nephrolepis exaltata（物种级参考）",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceTaxon": "Nephrolepis exalta bostoniensis（来源原文）",
    "evidenceScope": "来源名称写法与园艺名称存在差异，已保留原文，待人工专业复核",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-21",
    "careStatus": "已附园艺来源，属级或物种级参考不保证覆盖每个品种及地区",
    "parentId": null,
    "related": [],
    "searchTerms": [],
    "scene": "盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [
      {
        "id": "source-name-mapping",
        "status": "open",
        "message": "来源学名写法差异待人工复核"
      }
    ],
    "scientificSynonyms": [
      "Nephrolepis exalta bostoniensis"
    ],
    "commonNames": [
      "波士顿蕨",
      "boston fern"
    ],
    "commonNamesText": "波士顿蕨、boston fern",
    "aliasSummary": "波士顿蕨、boston fern",
    "scientificSynonymsText": "Nephrolepis exalta bostoniensis"
  },
  {
    "id": "parlor",
    "name": "袖珍椰子",
    "latin": "Chamaedorea elegans",
    "aliases": [
      "袖珍椰子",
      "parlor palm"
    ],
    "family": "棕榈科",
    "genus": "Chamaedorea",
    "rank": "物种",
    "cat": "low",
    "dog": "low",
    "icon": "❧",
    "summary": "先核对学名，再了解猫狗风险与养护要求。",
    "catHarm": "ASPCA 对本物种列为猫犬无毒；仍不建议啃食。",
    "dogHarm": "ASPCA 对本物种列为猫犬无毒；仍不建议啃食。",
    "avoid": "固定花盆，避免啃食或接触肥料；与苏铁分别核对。",
    "feature": "小型棕榈科植物，不能因苏铁外形也像棕榈而认为两者一样安全。",
    "identityNote": "小型棕榈科植物，不能因苏铁外形也像棕榈而认为两者一样安全。",
    "light": "明亮散射光，也可耐一定弱光",
    "water": "排水良好，浇水之间让表层略干",
    "temp": "避开冷风，保持温和环境",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/parlor-palm",
    "sources": [
      {
        "title": "ASPCA · parlor-palm",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/parlor-palm",
        "kind": "toxicity",
        "taxon": "Chamaedorea elegans",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 分类与特征",
        "url": "https://plants.ces.ncsu.edu/plants/chamaedorea-elegans/",
        "kind": "taxonomy",
        "taxon": "Chamaedorea elegans",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 养护参考",
        "url": "https://plants.ces.ncsu.edu/plants/chamaedorea-elegans/",
        "kind": "care",
        "taxon": "Chamaedorea elegans",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceTaxon": "Chamaedorea elegans",
    "evidenceScope": "来源明确列出该分类单元；仍须确认植物身份",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-21",
    "careStatus": "已附园艺来源，属级或物种级参考不保证覆盖每个品种及地区",
    "parentId": null,
    "related": [
      "sago"
    ],
    "searchTerms": [],
    "scene": "盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "parlor palm"
    ],
    "commonNamesText": "parlor palm",
    "aliasSummary": "parlor palm",
    "scientificSynonymsText": ""
  },
  {
    "id": "pachira",
    "name": "瓜栗（P. aquatica）",
    "latin": "Pachira aquatica",
    "aliases": [
      "Pachira aquatica",
      "guiana chestnut"
    ],
    "family": "锦葵科",
    "genus": "Pachira",
    "rank": "物种",
    "cat": "low",
    "dog": "low",
    "icon": "❧",
    "summary": "先核对学名，再了解猫狗风险与养护要求。",
    "catHarm": "ASPCA 对 Pachira aquatica 列为猫犬无毒，但仍列有恶心、呕吐和稀便等摄入后的不适表现。",
    "dogHarm": "ASPCA 对 Pachira aquatica 列为猫犬无毒，但仍列有恶心、呕吐和稀便等摄入后的不适表现。",
    "avoid": "先确认学名，不让宠物啃食或接触肥料与盆土添加物。",
    "feature": "发财树等商品名并不保证是本物种；不要与玉树、其他瓜栗属物种混淆。",
    "identityNote": "发财树等商品名并不保证是本物种；不要与玉树、其他瓜栗属物种混淆。",
    "light": "散射光，避免强光灼叶",
    "water": "使用排水良好的基质，不让盆底长期积水",
    "temp": "喜温暖湿润，避免冷害",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/money-tree",
    "sources": [
      {
        "title": "ASPCA · money-tree",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/money-tree",
        "kind": "toxicity",
        "taxon": "Pachira aquatica",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 分类与特征",
        "url": "https://plants.ces.ncsu.edu/plants/pachira-aquatica/",
        "kind": "taxonomy",
        "taxon": "Pachira aquatica",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 养护参考",
        "url": "https://plants.ces.ncsu.edu/plants/pachira-aquatica/",
        "kind": "care",
        "taxon": "Pachira aquatica",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceTaxon": "Pachira aquatica",
    "evidenceScope": "来源明确列出该分类单元；仍须确认植物身份",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-21",
    "careStatus": "已附园艺来源，属级或物种级参考不保证覆盖每个品种及地区",
    "parentId": null,
    "related": [],
    "searchTerms": [
      "发财树",
      "money tree",
      "money plant"
    ],
    "scene": "盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "guiana chestnut"
    ],
    "commonNamesText": "guiana chestnut",
    "aliasSummary": "guiana chestnut",
    "scientificSynonymsText": ""
  },
  {
    "id": "kalanchoe",
    "name": "长寿花",
    "latin": "Kalanchoe blossfeldiana",
    "aliases": [
      "长寿花",
      "kalanchoe blossfeldiana"
    ],
    "family": "景天科",
    "genus": "Kalanchoe",
    "rank": "物种",
    "cat": "toxic",
    "dog": "toxic",
    "icon": "❧",
    "summary": "先核对学名，再了解猫狗风险与养护要求。",
    "catHarm": "参考伽蓝菜属资料，摄入可引起呕吐、腹泻，少数可有心律异常。不能推导特定花色或重瓣品种的独立毒性剂量。",
    "dogHarm": "参考伽蓝菜属资料，摄入可引起呕吐、腹泻，少数可有心律异常。不能推导特定花色或重瓣品种的独立毒性剂量。",
    "avoid": "隔离花叶，不以少量接触后暂时无症状判断安全。",
    "feature": "肉质叶、成簇小花；这是物种档案，毒性依据为属级记录。",
    "identityNote": "肉质叶、成簇小花；这是物种档案，毒性依据为属级记录。",
    "light": "明亮散射光，避免长时间强烈午后日晒",
    "water": "透水多肉基质，干后再浇透",
    "temp": "不耐霜冻，喜温暖环境",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/kalanchoe",
    "sources": [
      {
        "title": "ASPCA · kalanchoe",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/kalanchoe",
        "kind": "toxicity",
        "taxon": "Kalanchoe spp.",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 分类与特征",
        "url": "https://plants.ces.ncsu.edu/plants/kalanchoe-blossfeldiana/",
        "kind": "taxonomy",
        "taxon": "Kalanchoe blossfeldiana",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 养护参考",
        "url": "https://plants.ces.ncsu.edu/plants/kalanchoe-blossfeldiana/",
        "kind": "care",
        "taxon": "Kalanchoe blossfeldiana",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceTaxon": "Kalanchoe spp.",
    "evidenceScope": "参考属级毒性资料；尚未收录本物种或具体品种的独立毒性证据",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-21",
    "careStatus": "已附园艺来源，属级或物种级参考不保证覆盖每个品种及地区",
    "parentId": null,
    "related": [],
    "searchTerms": [],
    "scene": "盆栽",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [],
    "commonNamesText": "暂无其他已核对常用名",
    "aliasSummary": "",
    "scientificSynonymsText": ""
  },
  {
    "id": "azalea",
    "name": "杜鹃属 · 总览",
    "latin": "Rhododendron spp.",
    "aliases": [
      "杜鹃",
      "杜鹃花",
      "azalea",
      "rhododendron"
    ],
    "family": "杜鹃花科",
    "genus": "Rhododendron",
    "rank": "属级总览",
    "cat": "high",
    "dog": "high",
    "icon": "❧",
    "summary": "先核对学名，再了解猫狗风险与养护要求。",
    "catHarm": "资料列有呕吐、腹泻、无力以及心功能异常；误食应及时联系兽医。",
    "dogHarm": "资料列有呕吐、腹泻、无力以及心功能异常；误食应及时联系兽医。",
    "avoid": "避免猫狗啃食花叶和接触修剪废弃物。",
    "feature": "含多种常绿、落叶物种和园艺品种。不能由花色或商品名判断风险大小。",
    "identityNote": "含多种常绿、落叶物种和园艺品种。不能由花色或商品名判断风险大小。",
    "light": "喜斑驳散射光，防强烈午后日晒",
    "water": "湿润但排水良好的偏酸性基质，避免过量浇水",
    "temp": "不同物种及品种耐寒耐热差异明显",
    "source": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/azalea",
    "sources": [
      {
        "title": "ASPCA · azalea",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/azalea",
        "kind": "toxicity",
        "taxon": "Rhododendron spp.",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 分类与特征",
        "url": "https://plants.ces.ncsu.edu/plants/rhododendron/",
        "kind": "taxonomy",
        "taxon": "Rhododendron spp.",
        "accessed": "2026-10-21"
      },
      {
        "title": "NC State Extension · 养护参考",
        "url": "https://plants.ces.ncsu.edu/plants/rhododendron/",
        "kind": "care",
        "taxon": "Rhododendron spp.",
        "accessed": "2026-10-21"
      }
    ],
    "evidenceTaxon": "Rhododendron spp.",
    "evidenceScope": "属级资料，仅作该属参考，不是具体品种鉴定",
    "reviewStatus": "已核对原始网页 · 未经兽医复核",
    "reviewedAt": "2026-10-21",
    "careStatus": "已附园艺来源，属级或物种级参考不保证覆盖每个品种及地区",
    "parentId": null,
    "related": [],
    "searchTerms": [],
    "scene": "盆栽与庭院",
    "review": {
      "veterinary": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      },
      "horticultural": {
        "status": "pending",
        "reviewer": "",
        "date": ""
      }
    },
    "photos": [],
    "photoStatus": "待取得可使用且物种可核对的实拍照片；目前符号不能作为鉴定依据",
    "releaseStatus": "待专业复核与配图",
    "openIssues": [],
    "scientificSynonyms": [],
    "commonNames": [
      "杜鹃",
      "杜鹃花",
      "azalea",
      "rhododendron"
    ],
    "commonNamesText": "杜鹃、杜鹃花、azalea、rhododendron",
    "aliasSummary": "杜鹃、杜鹃花、azalea 等",
    "scientificSynonymsText": ""
  }
];

const ambiguities = [
  {
    "terms": [
      "百合",
      "百合花",
      "lily",
      "香水百合",
      "无粉百合"
    ],
    "title": "“百合”还不足以确认具体植物",
    "message": "百合属有多个物种、杂交群和栽培品种；白掌、马蹄莲虽有 lily 英文名，却不是百合属。“香水”“无粉”等商品描述不能证明安全。猫疑似接触百合属或萱草时，不要等待鉴定完成才就医。",
    "ids": [
      "lily",
      "easter-lily",
      "tiger-lily",
      "stargazer",
      "asiatic",
      "daylily",
      "peace",
      "calla"
    ]
  },
  {
    "terms": [
      "菊",
      "菊花",
      "daisy",
      "小雏菊",
      "雏菊",
      "乒乓菊",
      "多头小菊",
      "洋甘菊",
      "玛格丽特",
      "洋牡丹菊"
    ],
    "title": "带“菊”的花，不一定属于同一个属",
    "message": "先核对学名和供货标签。菊属有毒，Gerbera jamesonii 有独立的无毒记录，二者不能互相替代。商品花型不是品种鉴定；未确认的雏菊、洋甘菊等仍是未知风险。下列档案只用于比较，不代表你的植物已被确认。",
    "ids": [
      "chrysanthemum",
      "florist-mum",
      "gerbera"
    ]
  },
  {
    "terms": [
      "马蹄莲",
      "calla lily"
    ],
    "title": "马蹄莲也有不同物种和杂交品种",
    "message": "白花马蹄莲档案仅对应 Zantedeschia aethiopica。彩色花材需另行核对分类单元，不能仅凭商品名称匹配。",
    "ids": [
      "calla"
    ]
  },
  {
    "terms": [
      "玫瑰",
      "rose",
      "沙漠玫瑰"
    ],
    "title": "先确认是否属于蔷薇属 Rosa",
    "message": "沙漠玫瑰不属于蔷薇属，不适用蔷薇属的无毒结论。本版没有沙漠玫瑰的毒性档案，不能据此判定安全。",
    "ids": [
      "rose"
    ]
  },
  {
    "terms": [
      "绣球",
      "绣球花",
      "hydrangea"
    ],
    "title": "绣球先分物种，再看证据",
    "message": "乔木绣球与大叶绣球是不同物种。ASPCA 的 Hydrangea 条目对应 H. arborescens；大叶绣球目前参考绣球属资料。不能按粉、蓝、白花判断毒性或物种。",
    "ids": [
      "smooth-hydrangea",
      "bigleaf-hydrangea"
    ]
  },
  {
    "terms": [
      "发财树",
      "money tree",
      "money plant"
    ],
    "title": "商品名“发财树”不能唯一确认物种",
    "message": "本版只收录 Pachira aquatica 的档案。类似商品名可能对应其他物种，不能自动套用无毒结论；请核对学名。",
    "ids": [
      "pachira"
    ]
  },
  {
    "terms": [
      "芦荟",
      "aloe"
    ],
    "title": "芦荟有多个物种",
    "message": "本版档案对应 Aloe vera；用于皮肤或食品的芦荟胶不代表整株对猫狗安全。",
    "ids": [
      "aloe"
    ]
  },
  {
    "terms": [
      "蕨",
      "fern",
      "兰花",
      "orchid"
    ],
    "title": "这个名称范围太大，暂时不能判断",
    "message": "请核对具体学名。“蕨”或“兰花”不代表某一个已确认的物种，下列条目只是比较入口。",
    "ids": [
      "boston",
      "phalaenopsis"
    ]
  }
];

const Huamao = (()=>{


const labels = {high:'高危 · 避免接触',toxic:'有毒 · 需要隔离',caution:'谨慎 · 避免啃食',low:'资料列为无毒',unknown:'证据不足 · 未知风险'};
const normalize = s => String(s || '').trim().toLowerCase().replace(/×/g,'x').replace(/\s+/g,' ');
function getAmbiguity(query) { return ambiguities.find(a=>a.terms.some(t=>normalize(t)===normalize(query))) || null; }
function search(query = '', pet = 'cat', risk = 'all', favorites = null, order = 'default') {
 const q = normalize(query), ambiguity = getAmbiguity(q);
 const result = plants.filter(p => (!q || (ambiguity && ambiguity.ids.includes(p.id)) || [p.name,p.latin,...p.aliases,...p.searchTerms].some(s=>normalize(s).includes(q))) && (risk === 'all' || (risk === 'risk' ? p[pet] !== 'low' : risk === 'toxic' ? ['high','toxic'].includes(p[pet]) : p[pet] === risk)) && (!favorites || favorites.includes(p.id))).map(p=>({...p,risk:p[pet],label:labels[p[pet]]}));
 if(order==='scientific')result.sort((a,b)=>a.latin.localeCompare(b.latin,'en'));
 if(order==='common')result.sort((a,b)=>a.name.localeCompare(b.name,'zh-Hans-CN'));
 return result;
}
function resolveCandidate(name) {
 const q=normalize(name), ambiguity=getAmbiguity(q);
 if(ambiguity)return {status:'ambiguous',message:ambiguity.message,candidates:ambiguity.ids.map(id=>plants.find(p=>p.id===id)).filter(Boolean)};
 const matches=plants.filter(p=>[p.name,p.latin,...p.aliases].some(n=>normalize(n)===q));
 if(matches.length!==1)return {status:matches.length?'ambiguous':'unknown',message:'未能唯一匹配已收录的分类单元，风险未知。',candidates:matches};
 return {status:'candidate',message:'仅为名称候选，尚未确认照片中的植物身份。请核对学名、标签及特征。',candidates:matches};
}
function matchCandidate(name) {const result=resolveCandidate(name);return result.status==='candidate'?result.candidates[0]:undefined;}
return { plants, labels, search, getAmbiguity, resolveCandidate, matchCandidate };

})();

const Experiences = (()=>{

const categories = ['养护心得','隔离防护','接触经历'];
const pets = ['猫咪','狗狗','猫狗家庭'];
function validate(input) {
 const nickname=String(input.nickname||'').trim()||'一位铲屎官';
 const content=String(input.content||'').trim();
 if(nickname.length>20)throw new Error('昵称请控制在20字以内');
 if(content.length<10||content.length>1000)throw new Error('请填写10至1000字的实际体验');
 if(!categories.includes(input.category)||!pets.includes(input.pet))throw new Error('请选择经验分类与宠物类型');
 return {nickname,content,category:input.category,pet:input.pet};
}
function create(input,plantId,now=Date.now(),random=Math.random()) {
 if(!plantId)throw new Error('缺少植物档案');
 const identity=identities.find(x=>x.value===input.identityType);
 return {...validate(input),identityType:identity?identity.value:'',identityTitle:identity?identity.title:'',plantId,id:now.toString(36)+'-'+random.toString(36).slice(2,10),createdAt:now,date:new Date(now+8*3600000).toISOString().slice(0,10),scope:'local'};
}
function list(records,plantId,category='全部') {
 return records.filter(x=>x.plantId===plantId&&(category==='全部'||x.category===category)).sort((a,b)=>b.createdAt-a.createdAt);
}
return {categories,pets,validate,create,list};

})();

const Growth = (()=>{
// Local learning milestones, never a qualification or evidence of plant safety.
function day(now=Date.now()){return new Date(now+8*3600000).toISOString().slice(0,10)}
function normalize(value={}){return {days:[...new Set((Array.isArray(value.days)?value.days:[]).filter(x=>/^\d{4}-\d{2}-\d{2}$/.test(x)))].sort(),learned:[...new Set((Array.isArray(value.learned)?value.learned:[]).filter(x=>typeof x==='string'))]}}
function checkIn(value,now=Date.now()){const s=normalize(value);return {...s,days:[...new Set([...s.days,day(now)])].sort()}}
function learn(value,id,validIds){const s=normalize(value);if(!validIds.includes(id))throw new Error('植物档案不存在');return {...s,learned:[...new Set([...s.learned,id])]}}
function summary(value,records,validIds,now=Date.now()){
 const s=normalize(value),today=day(now);const learned=s.learned.filter(id=>validIds.includes(id));const experiencePlants=[...new Set((Array.isArray(records)?records:[]).filter(r=>validIds.includes(r.plantId)&&String(r.content||'').trim().length>=10).map(r=>r.plantId))];
 let streak=0;let cursor=Date.parse(today+'T00:00:00+08:00');if(!s.days.includes(today))cursor-=86400000;while(s.days.includes(day(cursor))){streak++;cursor-=86400000}
 const tracks=[{key:'learn',label:'认识植物',unit:'份档案',count:learned.length,steps:[3,10,20,30],names:['初识花草','花间漫步','绿意同行','花猫探索家']},{key:'days',label:'每日打卡',unit:'天',count:s.days.filter(d=>d<=today).length,steps:[3,7,30],names:['三日之约','一周陪伴','长情花友']},{key:'experience',label:'记录经验',unit:'份植物档案',count:experiencePlants.length,steps:[1,3,10],names:['第一篇手记','生活观察员','花与它的记录者']}];
 const badges=tracks.flatMap(t=>t.steps.map((n,i)=>({id:t.key+'-'+n,title:t.names[i],requirement:t.label+' '+n+' '+t.unit,unlocked:t.count>=n,current:Math.min(t.count,n),target:n,percent:Math.min(100,Math.floor(t.count/n*100))})));
 return {today,checked:s.days.includes(today),streak,learnedCount:learned.length,dayCount:tracks[1].count,experienceCount:experiencePlants.length,badges,unlocked:badges.filter(b=>b.unlocked).length,next:badges.find(b=>!b.unlocked&&b.id.startsWith('learn-'))||null};
}
return {day,normalize,checkIn,learn,summary};

})();

const Community = (()=>{
const categories=['养花求助','养宠防护','经验分享','闲聊日常'];
function clean(value,max,min,label){const s=String(value||'').trim();if(s.length<min||s.length>max)throw new Error(label+'请填写'+min+'至'+max+'字');return s}
function author(profile){if(!profile||!profile.id)throw new Error('请先登录');return {authorId:profile.id,nickname:profile.nickname||'花猫铲屎官',identityType:profile.identityType||''}}
function create(input,profile,now=Date.now(),random=Math.random()){if(!categories.includes(input.category))throw new Error('请选择有效分类');return {...author(profile),id:now.toString(36)+'-'+random.toString(36).slice(2,10),title:clean(input.title,60,4,'标题'),content:clean(input.content,2000,10,'正文'),category:input.category,createdAt:now,date:new Date(now+8*3600000).toISOString().slice(0,10),replies:[],scope:'local'}}
function reply(post,input,profile,now=Date.now(),random=Math.random()){if(!post||!post.id)throw new Error('帖子不存在');const r={...author(profile),id:now.toString(36)+'-'+random.toString(36).slice(2,10),content:clean(input.content,1000,5,'回复'),createdAt:now,date:new Date(now+8*3600000).toISOString().slice(0,10)};return {...post,replies:[...(post.replies||[]),r]}}
function list(posts,category='全部',query=''){const q=String(query).trim().toLowerCase();return posts.filter(p=>(category==='全部'||p.category===category)&&(!q||(p.title+' '+p.content).toLowerCase().includes(q))).slice().sort((a,b)=>b.createdAt-a.createdAt)}
return {categories,create,reply,list};

})();
