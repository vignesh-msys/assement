export function addCount(data) {
  return {
    type: "ADD_COUNT",
  };
}

export function subCount(data) {
  return {
    type: "SUB_COUNT",
  };
}

export function resetCount(data) {
  return {
    type: "RESET",
  };
}
export function addBy(data) {
  return {
    type: "ADD_BY",
    count: data,
  };
}
