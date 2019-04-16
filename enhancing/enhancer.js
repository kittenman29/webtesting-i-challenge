module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement === 20) {
    return { ...item };
  } else {
    const enhancementPlus = item.enhancement + 1;
    return { ...item, enhancement: enhancementPlus };
  }
}

function fail(item) {
  if(item.enhancement < 15){
    const durabilityFail5 = item.durability - 5;
    return { ...item, durability: durabilityFail5};
  } else if(item.enhancement == 15){
    const durabilityFail10 = item.durability - 10;
    return { ...item, durability: durabilityFail10};
  } else if(item.enhancement >= 16){
    const highEnhancementFail = item.enhancement -1;
    const highEnhancementDurabilityFail = item.durability - 10;
    return { ...item, durability: highEnhancementDurabilityFail, enhancement: highEnhancementFail}
  }
}

function repair(item) {
  if(item.durability < 100) {
    const durabilityRepair = item.durability = 100;
    return { ...item, durability: durabilityRepair};
  } else {
    return { ...item }
  }
}

function get(item) {
  return { ...item };
}
