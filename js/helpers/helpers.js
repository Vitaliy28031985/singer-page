export const helpers = {
  count: 0,
  counterIncrement(maxCount) {
    if (this.count < maxCount) {
      this.count += 1;
    } else {
      this.count = 0;
    }
  },
  counterDecrement(count, maxCount) {
    this.count = count;
    if (this.count > 0) {
      this.count -= 1;
    } else {
      this.count = maxCount;
    }
  },
};