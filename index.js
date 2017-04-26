import _ from 'lodash'

// 一级分类 二级分类  SPU 根据rank排序
function sortByRank(list) {
    if (!list) {
        return list;
    }
    const arr = _.partition(list, v => v.rank);
    return _.sortBy(arr[0], v => -v.rank).concat(arr[1]);
}

// 优先排营销分类， 之后一级分类 二级分类  SPU 根据rank排序
function sortByMarketingThenRank(list){
    if(!list){
        return list;
    }
    const arr = _.partition(list, v => v.id[0] === 'E');
    return sortByRank(arr[0]).concat(sortByRank(arr[1]));
}

// 下单添加商品搜索结果根据frequency排序
function skusSortByFrequency(list){
    if(!list){
        return list;
    }
    return _.sortBy(list, v => -v.frequency);
}

module.exports = {
    sortByRank,
    sortByMarketingThenRank,
    skusSortByFrequency
};