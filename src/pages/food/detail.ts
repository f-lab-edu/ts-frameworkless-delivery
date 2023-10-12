// import { Params } from "@/router/router";
import header from "@/components/header/header";
import styles from "./detail.scss";
import { getFoodDetailByIdx } from "@/apis/food/food";
import foodInfo from "@/components/food/foodInfo";
import foodOption from "@/components/food/foodOption";
import foodPrice from "@/components/food/foodPrice";
import Page from "@/core/Page";
import { selectedFoodInfo } from "@/apis/food/types";
import LocalStorageUtil from "@/core/LocalStorageUtil";
import { localStorageKey } from "@/core/constant";

const template = `{{__header__}}
  <div class='area'>
    {{__food_info__}}

    <div class=${styles["option-container"]}>
      <p class=${styles["title-option"]}>추가선택</p>
      {{__food_options__}}
    </div>

    <div class='divider-st1'></div>

    {{__bottom_sheet__}}
  </div>
  `;
export default class FoodDetailPage extends Page {
  private foodId: string | null;
  private optionId: string[];
  private totalPrice: number;
  private localStorage_key: string;

  constructor(containerId: string) {
    super(containerId, template);
    this.foodId = "";
    this.optionId = [];
    this.totalPrice = 0;
    this.localStorage_key = localStorageKey.CART_KEY;
  }

  defineEventMap() {
    return {
      "click #btn-add-cart": this.buttonClickHandler,
      "change #price-option": this.inputChangeHandler,
    };
  }

  // 장바구니 추가 로직
  buttonClickHandler() {
    // 로컬 스토리지에 추가
    const selectedInfo: selectedFoodInfo = {
      foodId: null,
      optionIds: [],
    };
    selectedInfo.foodId = this.foodId;
    selectedInfo.optionIds = this.optionId;

    /* 
    !!! 로컬스토리지 JSON.Parse 모듈화 !!!
    - 방어 코드 
    - 예외 처리
    - 단골 코스
    - 예외처리, 에러 상황에서 어떻게 처리할 것인지에 대해 고민 -> 개선하기
    */
    let cartItems = LocalStorageUtil.get<selectedFoodInfo[]>(
      this.localStorage_key,
      []
    );
    cartItems.push(selectedInfo);
    LocalStorageUtil.set(this.localStorage_key, cartItems);
    alert("장바구니에 추가했습니다.");
  }

  // 옵션 정보 업데이트
  inputChangeHandler(event: Event) {
    const target = event.target as HTMLInputElement;
    if (
      event.type === "change" &&
      target.closest("#price-option") &&
      target.type === "checkbox"
    ) {
      if (target.checked) {
        this.totalPrice += Number(target.value);
        this.optionId.push(target.id); // 옵션 ID 추가
      } else {
        this.totalPrice -= Number(target.value);
        const index = this.optionId.indexOf(target.id);
        if (index > -1) {
          this.optionId.splice(index, 1); // 옵션 ID 제거
        }
      }
      // 가격 정보 업데이트
      const totalPriceElement = document.getElementById("total-price");
      if (totalPriceElement) {
        totalPriceElement.textContent = this.totalPrice.toLocaleString();
      }
    }
  }

  async updateData(): Promise<void> {
    const idx = this.params?.["foodId"]! as string;
    this.foodId = idx;
    this.optionId = [];

    const headerElement = header({ title: "음식 상세", hasBack: true });

    const foodDetailRes = await getFoodDetailByIdx(Number(idx));
    this.totalPrice = foodDetailRes.price;
    const foodInfoElement = foodInfo(foodDetailRes);

    const optionInfoElement =
      foodDetailRes.options?.map((option) => foodOption(option)).join("") ??
      "<p>옵션이 없습니다.</p>";

    const SELECTED_PRICE = this.totalPrice;
    const bottomSheetElement = foodPrice({ price: SELECTED_PRICE });

    const data = [
      {
        key: "header",
        component: headerElement,
      },
      {
        key: "food_info",
        component: foodInfoElement,
      },
      {
        key: "food_options",
        component: optionInfoElement,
      },
      {
        key: "bottom_sheet",
        component: bottomSheetElement,
      },
    ];
    this.componentMap.push(...data);
  }
}
