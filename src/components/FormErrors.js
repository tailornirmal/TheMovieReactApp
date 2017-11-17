import React from 'react';

export const FormErrors = ({formErrors}) =>

<div className='formErrors'>
  {Object.keys(formErrors).map((fieldName, i) => {
    if(formErrors[fieldName].length > 0){
      return (
        <div class="alert alert-danger"><center><p key={i}>{fieldName} {formErrors[fieldName]}</p></center></div>
      )        
    } else {
      return '';
    }
  })}
</div>

export default FormErrors;