import { FoodDetailItem, FoodListlItem } from "./types";

// 음식 더미 데이터
export const DUMMY_FOOD_LIST: { [key: string]: FoodListlItem[] } = {
  1: [
    {
      id: 1,
      thumbImg:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "[구성1위] 배부른 민지 set",
      desc: "떡볶이 + 커피 + 토스트 ",
      price: 11500,
    },
    {
      id: 2,
      thumbImg:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "[500원 D.C] 카페라떼x3",
      desc: "커피 + 토스트 + 1인용 떡볶이",
      price: 15000,
    },
    {
      id: 3,
      thumbImg:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "[구성1위] 배부른 민지 set 222",
      desc: "커피 + 토스트 + 1인용 떡볶이",
      price: 13500,
    },
    {
      id: 4,
      thumbImg:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "[구성1위] 배부른 민지 set 333",
      desc: "커피 + 토스트 + 1인용 떡볶이",
      price: 14500,
    },
  ],
  2: [
    {
      id: 5,
      thumbImg: "",
      title: "[구성1위] 배부른 민지 set",
      desc: "커피 + 토스트 + 1인용 떡볶이",
      price: 11500,
    },
    {
      id: 6,
      thumbImg: "",
      title: "[500원 D.C] 카페라떼x3",
      desc: "커피 + 토스트 + 1인용 떡볶이",
      price: 11500,
    },
    {
      id: 7,
      thumbImg: "",
      title: "[구성1위] 배부른 민지 set 222",
      desc: "커피 + 토스트 + 1인용 떡볶이",
      price: 11500,
    },
    {
      id: 8,
      thumbImg: "",
      title: "[구성1위] 배부른 민지 set 333",
      desc: "커피 + 토스트 + 1인용 떡볶이",
      price: 11500,
    },
  ],
  3: [
    {
      id: 9,
      thumbImg: "",
      title: "[구성1위] 배부른 민지 set",
      desc: "커피 + 토스트 + 1인용 떡볶이",
      price: 11500,
    },
    {
      id: 10,
      thumbImg: "",
      title: "[500원 D.C] 카페라떼x3",
      desc: "커피 + 토스트 + 1인용 떡볶이",
      price: 11500,
    },
    {
      id: 11,
      thumbImg: "",
      title: "[구성1위] 배부른 민지 set 222",
      desc: "커피 + 토스트 + 1인용 떡볶이",
      price: 11500,
    },
    {
      id: 12,
      thumbImg: "",
      title: "[구성1위] 배부른 민지 set 333",
      desc: "커피 + 토스트 + 1인용 떡볶이",
      price: 11500,
    },
  ],
  4: [
    {
      id: 13,
      thumbImg:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "[구성1위] 배부른 민지 set",
      desc: "커피 + 토스트 + 1인용 떡볶이",
      price: 11500,
    },
    {
      id: 14,
      thumbImg:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "[500원 D.C] 카페라떼x3",
      desc: "커피 + 토스트 + 1인용 떡볶이",
      price: 11500,
    },
    {
      id: 15,
      thumbImg:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "[구성1위] 배부른 민지 set 222",
      desc: "커피 + 토스트 + 1인용 떡볶이",
      price: 11500,
    },
    {
      id: 16,
      thumbImg: "",
      title: "[구성1위] 배부른 민지 set 333",
      desc: "커피 + 토스트 + 1인용 떡볶이",
      price: 11500,
    },
  ],
};

// 음식 상세 데이터
export const DUMMY_FOOD_DETAIL: {
  [key: number]: FoodDetailItem;
} = {
  1: {
    id: 1,
    thumbImg:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "[구성1위] 배부른 민지 set",
    desc: "떡볶이 + 커피 + 토스트 ",
    price: 11500,
    options: [
      { id: 1, title: "옵션A", price: 1000 },
      { id: 2, title: "옵션B", price: 2000 },
    ],
  },
  2: {
    id: 2,
    thumbImg:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "[500원 D.C] 카페라떼x3",
    desc: "커피 + 토스트 + 1인용 떡볶이",
    price: 15000,
    options: [
      { id: 3, title: "옵션A", price: 3000 },
      { id: 4, title: "옵션B", price: 4000 },
    ],
  },
  3: {
    id: 3,
    thumbImg:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "[구성1위] 배부른 민지 set 222",
    desc: "커피 + 토스트 + 1인용 떡볶이",
    price: 13500,
  },
  4: {
    id: 4,
    thumbImg:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "[구성1위] 배부른 민지 set 333",
    desc: "커피 + 토스트 + 1인용 떡볶이",
    price: 14500,
  },
};
