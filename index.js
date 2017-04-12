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
    return sortByRank(arr[0]).concat(arr[1]);
}

module.exports = {
    sortByRank,
    sortByMarketingThenRank
};