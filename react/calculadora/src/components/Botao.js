import React from 'react'
import { Button } from 'antd'

import './Botao.css'

class Botao extends React.Component {
  render() {
    const { title, likes, description, photo, onLikeClick } = this.props

    let button = null
    if (likes < 10) {
      button = (
        <Button
          type="primary"
          shape="circle"
          icon="like"
          onClick={onLikeClick}
        />
      )
    }

    return (
      <div className="botao">
        
      </div>
    )
  }
}

export default Botao
