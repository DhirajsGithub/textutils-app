import React from 'react'


function Alert1(props) {
    const capatalize = function (word){
        const lower = word.toLowerCase();
        return (lower.charAt(0).toUpperCase() + lower.slice(1))
    }
  return (
    <div style={{height: '50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-disissible fade show`} role="alert">
        {/* here props.alert initially is null hence succedding JSX won't work  */}
      <strong>{capatalize(props.alert.type)}</strong> : {props.alert.msg }
    </div>}
    </div>

  )
}

export default Alert1