import React from 'react'

export const Confirmation = ({handleYes,handleCancel}) => {
  return (
    <>
        <div className="containConfirm">
            <div className="para2">
                <span id='confirm'>Confirm?</span>
            </div>
            <div className="btn23">
                <input type="button" value="Cancel" onClick={handleCancel} id='cancel2' />
                <input type="button" value="Yes" onClick={handleYes} id='yes' />
            </div>
            
        </div>
    </>
  )
}
