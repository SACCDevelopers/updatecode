import React from 'react'
import { TextField } from '@mui/material';

const Profile_info = (props) => {
    return (
        <React.Fragment>
            <td>
                    <TextField
          id="standard-read-only-input"
          
          defaultValue={props.Value}
          
          style={{height:25}}
          InputProps={{
            readOnly: props.readonly,
            disableUnderline: true,
          
          }}
          variant="standard"
        />
        </td>
        </React.Fragment>
      );
}
 
export default Profile_info;