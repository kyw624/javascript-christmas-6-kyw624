import { EVENTS } from './constants/events.js';
import { MENU } from './constants/menu.js';

class EventPlanner {
  constructor(date, menu) {
    this.visitDate = date;
    this.orderList = menu;
    this.events = null;
    this.benefits = {};
  }

  getEventsByDate() {
    let events = [];

    if (this.visitDate <= EVENTS['D-DAY'].MAX) {
      events.push(EVENTS['D-DAY'].NAME);
      this.discountDday();
    }

    const dayType = this.getDayType();
    events.push(EVENTS[dayType].NAME);
    this.discountWeekly(dayType);

    if (EVENTS['SPECIAL'].DATE.includes(this.visitDate)) {
      events.push(EVENTS['SPECIAL'].NAME);
      this.discountSpecialDate();
    }

    this.events = events || [];
  }

  getDayType() {
    const currentDate = new Date(`2023-12-${this.visitDate}`);
    const currentDay = currentDate.getDay();

    if (EVENTS['WEEKEND'].DAY.includes(currentDay)) {
      return EVENTS['WEEKEND'].NAME;
    }

    return EVENTS['WEEKDAY'].NAME;
  }

  discountDday() {
    this.benefits['D-DAY'] = {
      message: '크리스마스 디데이 할인: -',
      price: EVENTS['D-DAY'].DEFAULT + (this.visitDate - 1) * 100,
    };
  }

  discountWeekly(dayType) {
    const prefix = dayType === 'WEEKDAY' ? '평일' : '주말';
    const discountedCategory = EVENTS[dayType].TARGET;
    const discountedCount = this.orderList.reduce((total, order) => {
      const [food, count] = order.split('-');

      if (MENU[food].category === discountedCategory) {
        return total + Number(count);
      }
      return total;
    }, 0);

    if (discountedCount === 0) {
      return;
    }

    this.benefits[dayType] = {
      message: `${prefix} 할인: -`,
      price: discountedCount * 2023,
    };
  }

  discountSpecialDate() {
    this.benefits['SPECIAL'] = {
      message: '특별 할인: -',
      price: 1000,
    };
  }

  checkGiftEvent(totalAmount) {
    if (totalAmount >= 120000) {
      this.benefits['GIFT'] = {
        message: '증정 이벤트: -',
        price: MENU['샴페인'],
      };
    }
  }

  getBadge() {
    // 이벤트 뱃지
  }
}

export default EventPlanner;
