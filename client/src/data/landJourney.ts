export interface LandJourneyStage {
  id: string;
  era: string;
  period: string;
  principle: string;
  speech: string;
  outfit: string;
  book: string;
  scene: string;
}

// Short introductions derive from the existing landItems, not invented dialogue.
// Broad periods use a representative costume; paintings are interpretive scenes.
export const landJourney: LandJourneyStage[] = [
  {
    id: "land-1",
    era: "石器至商周",
    period: "公元前221年以前",
    principle: "从部落共有到王有观念",
    speech:
      "最早，土地由部落共同拥有。后来，家庭私耕逐步出现；到了商周，人们以“王土”理解土地归属。国家形成前，还没有成熟的土地制度。",
    outfit: "商周代表装束",
    book: "木竹简册（示意）",
    scene: "land-scene-1",
  },
  {
    id: "land-2",
    era: "楚国时期",
    period: "春秋战国 · 楚国统治时期",
    principle: "国君所有与多级占有",
    speech:
      "楚王掌握土地的最高支配权，也把土地封赏给大臣。国君所有与里社、领主、自耕农的土地占有并存，耕地开垦不断扩展。",
    outfit: "楚地深衣",
    book: "竹简",
    scene: "land-scene-2",
  },
  {
    id: "land-3",
    era: "秦汉",
    period: "公元前221年—公元220年",
    principle: "土地私有与籍册管理",
    speech:
      "秦代承认土地私有和买卖。西汉由土地所有者申报田亩等情况，再层层审核、登记造册，作为征收田租的依据。",
    outfit: "秦汉交领袍服",
    book: "田租简册",
    scene: "land-scene-3",
  },
  {
    id: "land-4",
    era: "三国两晋南北朝",
    period: "公元220年—589年",
    principle: "世族地主私有主导",
    speech:
      "这个时期，门阀世族的土地私有占据重要地位。土地买卖与兼并扩展，同时，湖南不同聚居地区仍保留各自的土地习惯。",
    outfit: "魏晋宽袖袍服",
    book: "纸卷",
    scene: "land-scene-4",
  },
  {
    id: "land-5",
    era: "隋唐五代",
    period: "公元589年—960年",
    principle: "从均田到租佃发展",
    speech:
      "隋至唐前期推行均田制，按不同人群规定授田标准。到了五代马楚时期，土地买卖、兼并和田庄发展，租佃关系也更为普遍。",
    outfit: "唐代圆领袍、幞头",
    book: "田令纸卷",
    scene: "land-scene-5",
  },
  {
    id: "land-6",
    era: "宋元",
    period: "公元960年—1368年",
    principle: "官私并行与土地流转",
    speech:
      "北宋保护土地私有，允许垦辟、占有和买卖，也保护垦荒权益。元代官田、私田并存。湖湘山区的耕地开发继续推进。",
    outfit: "宋代士人袍服",
    book: "纸本农书",
    scene: "land-scene-6",
  },
  {
    id: "land-7",
    era: "明清",
    period: "公元1368年—1912年",
    principle: "官民田制与鱼鳞图册",
    speech:
      "明清土地分为官田与民田。明代土地普查把湖南纳入鱼鳞图册编制，用来记录田地、厘清权属与征收赋税；清代湖南民田数量增加。",
    outfit: "明代士人代表装束",
    book: "田亩账册",
    scene: "land-scene-7",
  },
  {
    id: "land-8",
    era: "中华民国",
    period: "1912年—1949年",
    principle: "租佃关系的变革探索",
    speech:
      "民国时期，减租政策和农民运动推动土地关系调整。在湖南农民运动发达地区，人们尝试分田、平均佃权、清丈田亩等方式。",
    outfit: "民国长衫",
    book: "印刷资料册",
    scene: "land-scene-8",
  },
  {
    id: "land-9",
    era: "新中国成立至今",
    period: "1949年以后",
    principle: "土地改革、合作化与家庭承包",
    speech:
      "新中国成立后，湖南经历土地改革、农业合作化等阶段。此后家庭联产承包责任制推广，逐步形成统分结合的双层经营体制。",
    outfit: "中山装（阶段代表装束）",
    book: "土地资料册",
    scene: "land-scene-9",
  },
];
