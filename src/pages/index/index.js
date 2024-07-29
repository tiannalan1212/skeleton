import { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

class Index extends PureComponent {
  render() {
    return <div>
             自动创建的页面
           </div>
  }
}

ReactDOM.render(<Index/>, document.querySelector('#container'))