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
    principle: "这片田，最早是谁的？",
    speech:
      "最早啊，田地是部落里大家一起拥有的。后来，慢慢有了自家耕种的田；到了商周，人们又把天下的土地看作“王土”。国家形成以前，还没有成套的土地制度。",
    outfit: "商周代表装束",
    book: "木竹简册（示意）",
    scene: "land-scene-1",
  },
  {
    id: "land-2",
    era: "楚国时期",
    period: "春秋战国 · 楚国统治时期",
    principle: "楚地的田，谁说了算？",
    speech:
      "在楚地，土地怎么分，楚王最有决定权。他也会把土地赏给大臣。不过，村社、领主和自耕农也各有占用的田地，大家还在不断开垦新田。",
    outfit: "楚地深衣",
    book: "竹简",
    scene: "land-scene-2",
  },
  {
    id: "land-3",
    era: "秦汉",
    period: "公元前221年—公元220年",
    principle: "自家的田，也得记清楚",
    speech:
      "到了秦代，土地可以归个人所有，也能买卖了。西汉时，有多少田、谁家的田，要先申报，再一层层核对、记进册子，收田租就照着这些记录来。",
    outfit: "秦汉交领袍服",
    book: "田租简册",
    scene: "land-scene-3",
  },
  {
    id: "land-4",
    era: "三国两晋南北朝",
    period: "公元220年—589年",
    principle: "大户人家的田，越来越多了",
    speech:
      "这个时候，世家大族手里有不少田，买田、把别家的田并到自己名下的事也越来越多。不过，在湖南，不同地方的人们，还沿用着各自的土地习惯。",
    outfit: "魏晋宽袖袍服",
    book: "纸卷",
    scene: "land-scene-4",
  },
  {
    id: "land-5",
    era: "隋唐五代",
    period: "公元589年—960年",
    principle: "先分田，后来租田也多了",
    speech:
      "隋朝到唐朝前期，朝廷按不同人的情况规定分田的标准，这就叫均田制。到了五代马楚，买卖田地、田庄经营越来越多，租别人家的田来种也更常见了。",
    outfit: "唐代圆领袍、幞头",
    book: "田令纸卷",
    scene: "land-scene-5",
  },
  {
    id: "land-6",
    era: "宋元",
    period: "公元960年—1368年",
    principle: "田能买卖，荒地也有人开",
    speech:
      "北宋时，自己占有、开垦和买卖的田地受到保护。到了元代，既有官田，也有私田。湖湘的山地也在继续开发，能种庄稼的地方渐渐多了。",
    outfit: "宋代士人袍服",
    book: "纸本农书",
    scene: "land-scene-6",
  },
  {
    id: "land-7",
    era: "明清",
    period: "公元1368年—1912年",
    principle: "田地记进册子，归谁就清楚了",
    speech:
      "明清的田地，分官田和民田。明代查田时，会把湖南的田地记进鱼鳞图册，方便看清田地归属、收取赋税。到了清代，湖南的民田更多了。",
    outfit: "明代士人代表装束",
    book: "田亩账册",
    scene: "land-scene-7",
  },
  {
    id: "land-8",
    era: "中华民国",
    period: "1912年—1949年",
    principle: "租田的规矩，人们想改一改",
    speech:
      "民国时，人们想减轻租田的负担，减租政策和农民运动推动着变化。在湖南一些农民运动活跃的地方，还试过分田、平均分配佃权、重新丈量田地。",
    outfit: "民国长衫",
    book: "印刷资料册",
    scene: "land-scene-8",
  },
  {
    id: "land-9",
    era: "新中国成立至今",
    period: "1949年以后",
    principle: "从分田到承包，种田的办法变了",
    speech:
      "新中国成立后，湖南先后经历了土地改革、农业合作化。后来，家庭联产承包责任制推广开来：田地由各家承包经营，有些事情则由集体统一来办。",
    outfit: "中山装（阶段代表装束）",
    book: "土地资料册",
    scene: "land-scene-9",
  },
];
