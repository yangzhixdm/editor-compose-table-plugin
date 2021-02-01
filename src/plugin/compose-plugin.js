import E from 'wangeditor' // npm 安装

const { PanelMenu, Panel } = E
// 第一，菜单 class ，Button 菜单继承 BtnMenu class
class ComposeMenu extends PanelMenu {
  constructor(editor) {
    // data-title属性表示当鼠标悬停在该按钮上时提示该按钮的功能简述
      const $elem = E.$(
        `<div class="w-e-menu" data-title="Custom Table">
          <i class="w-e-icon-custom-table">C</i>
        </div>`
      )
      super($elem, editor)
  }
  // 菜单点击事件
  clickHandler() {
    console.log('合并')
  }
  
  tryChangeActive() {
      // 激活菜单
      // 1. 菜单 DOM 节点会增加一个 .w-e-active 的 css class
      // 2. this.this.isActive === true
      this.active()

      // // 取消激活菜单
      // // 1. 菜单 DOM 节点会删掉 .w-e-active
      // // 2. this.this.isActive === false
      // this.unActive()
  }
}

export default ComposeMenu;