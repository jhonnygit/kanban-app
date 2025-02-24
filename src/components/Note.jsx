import React from 'react';

//version 1
/* export default ({task,onDelete}) => (
<div>
    <span>{task}</span>
    <button onClick={onDelete}>X</button>    
</div>
); */

//version 2
export default ({children,...props}) => (
    <div {...props}>
        {children}
    </div>
);
