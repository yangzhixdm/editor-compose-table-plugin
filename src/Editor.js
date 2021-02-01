import React from 'react'
import E from 'wangeditor'

import AlertMenu from './plugin/plugin'
import ComposeMenu from './plugin/compose-plugin'

class Editor extends React.Component {

  render() {
    return <div style={{"margin": "100px", width: "800px"}}><div id='editor'></div></div>
  }

  componentDidMount () {
    const menuKey = 'alertMenuKey' 
    const composeKey = 'composeMenuKey'

    // 注册菜单
    E.registerMenu(menuKey, AlertMenu)
    E.registerMenu(composeKey, ComposeMenu)
    const editor = new E("#editor")
    editor.config.menus = [
      'bold',
      'head',
      'link',
      'italic',
      'underline'
    ]
    editor.create()
  }
}

export default Editor
