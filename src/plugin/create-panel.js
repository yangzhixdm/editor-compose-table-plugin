
import { $ } from 'wangeditor'
import CreateTable from './create-table'

export default function createPanelConf (editor) {
  const createTable = new CreateTable(editor)

  let colVal = 5
  let rowVal = 5
  let colId = "colId"
  let rowId = "rowId"
  editor.txt.eventHooks.tableClickEvents.push((node)=> {
    console.log(node)
  })

  return {
    width: 300,
    height: 0,
    tabs: [
      {
        title: "插入自定义表格",
        tpl: `
          <div>
            <div class="w-e-up-custom-table-container">
              插入 <input style="width:30px;" type="text" id="colId" value="${colVal}"/> 行 <input style="width:30px;" id="rowId" type="text" value="${rowVal}"> 列 表格
            </div>
            <button id="insertId" class="insert-btn">插入</button>
          </div>
          `
        ,
        events: [
          // 插入视频
          {
            selector: '#insertId',
            type: 'click',
            fn: () => {
              const colValue = Number($('#' + colId).val())
              const rowValue = Number($('#' + rowId).val())
              //校验是否传值
              createTable.createAction(rowValue, colValue)
              return true
            },
          },
          {
            selector: 'td',
            type: 'hover',
            fn: () => {
              console.log('ss')
              return true
            }
          }
        ]
      }
    ]
  }
}