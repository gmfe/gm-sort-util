import _ from 'lodash'

function sortByRank(list) {
    if (!list) {
        return list;
    }
    const arr = _.partition(list, v => v.rank);
    return _.sortBy(arr[0], v => -v.rank).concat(arr[1]);
}

module.exports = {
    sortByRank
};