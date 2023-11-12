import { EVENTS } from './constants/events';

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
      this.getDiscountByEvent(EVENTS['D-DAY'].NAME);
    }

    const dayType = this.getDayType();
    events.push(EVENTS[dayType].NAME);
    this.getDiscountByEvent(EVENTS[dayType].NAME);

    if (EVENTS['SPECIAL'].DATE.includes(this.visitDate)) {
      events.push(EVENTS['SPECIAL'].NAME);
      this.getDiscountByEvent(EVENTS['SPECIAL'].NAME);
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
}

export default EventPlanner;
