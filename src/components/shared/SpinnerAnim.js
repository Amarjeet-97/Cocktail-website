import React from 'react';
import '../shared/SpinnerAnim.css'
const SpinnerAnim=()=>{
    return(
        <div className='custom-spinner'>
            <div className="d-flex justify-content-center ">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        </div>
    )
}
export default SpinnerAnim;