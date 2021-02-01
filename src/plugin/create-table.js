/**
 * @description 创建tabel
 * @author lichunlin
 */

import { $ } from 'wangeditor'

class CreateTable {

    constructor(editor) {
        this.editor = editor
    }

    /**
     * 执行创建
     * @param rowValue 行数
     * @param colValue 列数
     */
    createAction (rowValue, colValue) {
        const editor = this.editor

        let $selectionElem = $(editor.selection.getSelectionContainerElem())
        const $ul = $($selectionElem.elems[0]).parentUntilEditor('UL', editor)
        const $ol = $($selectionElem.elems[0]).parentUntilEditor('OL', editor)
        if ($ul || $ol) {
            return
        }

        const tableDom = this.createTableHtml(rowValue, colValue)
        editor.cmd.do('insertHTML', tableDom)
    }

    /**
     * 创建table、行、列
     * @param rowValue 行数
     * @param colValue 列数
     */
    createTableHtml(rowValue, colValue): string {
      let rowStr = ''
      let colStr = ''
      for (let i = 0; i < rowValue; i++) {
          colStr = ''
          for (let j = 0; j < colValue; j++) {
              if (i === 0) {
                  colStr = colStr + '<th></th>'
              } else {
                  colStr = colStr + '<td></td>'
              }
          }
          rowStr = rowStr + '<tr>' + colStr + '</tr>'
      }
      const tableDom =
          `<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>` +
          rowStr +
          '</tbody></table><p><br></p>'
      return tableDom
    }
}

export default CreateTable
