const updateCount = (state = 0, action) => {
  switch (action.type) {
    case "ADD_COUNT":
      state += 1;
      return state;
      case "SUB_COUNT":
      if (state < 1) return 0;
      state -= 1;
      return state;
    case "RESET":
      return 0;
    case "ADD_BY":
      state += Number(action.count);
      return state;
    default:
      return state;
  }
};

export default updateCount;
