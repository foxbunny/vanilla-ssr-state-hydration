{
  'use strict'

  let
    tableData = []

  let
    $table = document.getElementById('table')

  let
    converters = {
      numeric: x => Number(x),
      string: x => x.trim(),
    },
    hydrate = () => {
      let columnConverters = Array.from($table.querySelectorAll('th')).map($th => converters[$th.dataset.type])
      for (let $tr of $table.lastElementChild.children) {
        tableData.push(Object.assign(
          columnConverters.map((fn, i) => fn($tr.children[i].textContent)),
          { $tr }
        ))
      }
    }

  hydrate()
  console.table(tableData)
}
