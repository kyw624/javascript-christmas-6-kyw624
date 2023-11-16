export const CATEGORIES = Object.freeze({
  APPETIZER: '애피타이저',
  MAIN: '메인',
  DESSERT: '디저트',
  DRINK: '음료',
});

export const FOODS = Object.freeze({
  MUSHROOM_SOUP: '양송이수프',
  TAPAS: '타파스',
  CAESAR_SALAD: '시저샐러드',

  TBONE_STEAK: '티본스테이크',
  BBQ_RIB: '바비큐립',
  SEAFOOD_PASTA: '해산물파스타',
  XMAS_PASTA: '크리스마스파스타',

  CHOCOLATE_CAKE: '초코케이크',
  ICECREAM: '아이스크림',

  ZERO_COKE: '제로콜라',
  RED_WINE: '레드와인',
  CHAMPAGNE: '샴페인',
});

export const PRICES = Object.freeze({
  [FOODS.MUSHROOM_SOUP]: 6000,
  [FOODS.TAPAS]: 5500,
  [FOODS.CAESAR_SALAD]: 8000,

  [FOODS.TBONE_STEAK]: 55000,
  [FOODS.BBQ_RIB]: 54000,
  [FOODS.SEAFOOD_PASTA]: 35000,
  [FOODS.XMAS_PASTA]: 25000,

  [FOODS.CHOCOLATE_CAKE]: 15000,
  [FOODS.ICECREAM]: 5000,

  [FOODS.ZERO_COKE]: 3000,
  [FOODS.RED_WINE]: 60000,
  [FOODS.CHAMPAGNE]: 25000,
});

export const MENU = Object.freeze({
  [FOODS.MUSHROOM_SOUP]: {
    category: CATEGORIES.APPETIZER,
    price: PRICES[FOODS.MUSHROOM_SOUP],
  },
  [FOODS.TAPAS]: {
    category: CATEGORIES.APPETIZER,
    price: PRICES[FOODS.TAPAS],
  },
  [FOODS.CAESAR_SALAD]: {
    category: CATEGORIES.APPETIZER,
    price: PRICES[FOODS.CAESAR_SALAD],
  },

  [FOODS.TBONE_STEAK]: {
    category: CATEGORIES.MAIN,
    price: PRICES[FOODS.TBONE_STEAK],
  },
  [FOODS.BBQ_RIB]: {
    category: CATEGORIES.MAIN,
    price: PRICES[FOODS.BBQ_RIB],
  },
  [FOODS.SEAFOOD_PASTA]: {
    category: CATEGORIES.MAIN,
    price: PRICES[FOODS.SEAFOOD_PASTA],
  },
  [FOODS.XMAS_PASTA]: {
    category: CATEGORIES.MAIN,
    price: PRICES[FOODS.XMAS_PASTA],
  },

  [FOODS.CHOCOLATE_CAKE]: {
    category: CATEGORIES.DESSERT,
    price: PRICES[FOODS.CHOCOLATE_CAKE],
  },
  [FOODS.ICECREAM]: {
    category: CATEGORIES.DESSERT,
    price: PRICES[FOODS.ICECREAM],
  },

  [FOODS.ZERO_COKE]: {
    category: CATEGORIES.DRINK,
    price: PRICES[FOODS.ZERO_COKE],
  },
  [FOODS.RED_WINE]: {
    category: CATEGORIES.DRINK,
    price: PRICES[FOODS.RED_WINE],
  },
  [FOODS.CHAMPAGNE]: {
    category: CATEGORIES.DRINK,
    price: PRICES[FOODS.CHAMPAGNE],
  },
});
