export type EraSlide = {
  src: string;
  caption: string;
  contain?: boolean;
};

// All images come from the project's existing historical material collection.
export const timelineSlides: Record<string, EraSlide[]> = {
  "timeline-1": [
    { src: "/materials/重要文物/炭化稻谷.png", caption: "炭化稻谷 · 稻作起源" },
    { src: "/manus-storage/point-yuchanyan.jpg", caption: "玉蟾岩遗址" },
    { src: "/manus-storage/point-chengtoushan.jpg", caption: "城头山遗址" },
  ],
  "timeline-2": [
    {
      src: "/materials/重要文物/铁质耕具.png",
      caption: "铁质耕具",
      contain: true,
    },
    { src: "/manus-storage/point-ziquejie.jpg", caption: "紫鹊界梯田（现状）" },
    {
      src: "/materials/土地制度/04长沙走马楼三国吴简记录的佃田课赋.png",
      caption: "三国吴简 · 佃田课赋",
      contain: true,
    },
  ],
  "timeline-3": [
    {
      src: "/materials/重要文物/坦山岩劝农碑.png",
      caption: "坦山岩劝农碑",
      contain: true,
    },
    {
      src: "/materials/土地制度/06陈旉农书.png",
      caption: "陈旉《农书》",
      contain: true,
    },
    {
      src: "/materials/重要文物/宋元明清各种文献典籍.png",
      caption: "宋元明清农耕文献",
      contain: true,
    },
  ],
  "timeline-4": [
    {
      src: "/materials/重要文物/太平天国田凭.png",
      caption: "太平天国田凭",
      contain: true,
    },
    {
      src: "/materials/重要文物/“义仓永定章程”石碑.png",
      caption: "“义仓永定章程”石碑",
      contain: true,
    },
    {
      src: "/materials/土地制度/08民国时期湖南省人口与耕地数.png",
      caption: "民国时期湖南人口与耕地资料",
      contain: true,
    },
  ],
  "timeline-5": [
    {
      src: "/manus-storage/point-hybrid-rice.jpg",
      caption: "杂交水稻 · 现代农业",
    },
    {
      src: "/materials/重要文物/土地改革布告.png",
      caption: "土地改革布告",
      contain: true,
    },
    {
      src: "/manus-storage/point-shibadong.jpg",
      caption: "十八洞村 · 乡村振兴",
    },
  ],
};
