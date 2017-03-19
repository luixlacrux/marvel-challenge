import React from 'react'

function Loading (props) {
  let rows = []
  for (var i = 1; i < 13; i++) {
    rows.push(<div key={i} className={`sk-circle${i} sk-circle`}></div>)
  }

  return (
    <div className="sk-fading-circle">
      { rows }
    </div>
  )
}

export default Loading
