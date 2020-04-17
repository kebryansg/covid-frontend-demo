import * as lodash from 'lodash'

function GroupByCount(rows: any[], columnGroupBy: string, columnsSum: string) {
  const groupBys = lodash.groupBy(rows, columnGroupBy);
  return lodash.transform(groupBys, (result, value, key) => {
    result.push({
      Columns: key,
      Count: value.length,
      Sum: lodash.sumBy(value, columnsSum)
    });
  }, []);
}

export {
  GroupByCount
}
