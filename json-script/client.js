{
  'use strict'

  let
    tableData

  let
    $tableData = document.getElementById('table-data')

  let
    hydrate = () => tableData = JSON.parse($tableData.textContent)

  hydrate()
  console.table(tableData)
}
