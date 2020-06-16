import React from 'react';

import { IconButton } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudOffIcon from '@material-ui/icons/CloudOff';
import CloudDoneIcon from '@material-ui/icons/CloudDone';


type cloudBackupProps = {
    online: boolean,
    done?: boolean,
    badge?: string
}

const cloudBackup = ({ online, done, badge }: cloudBackupProps) => {
    let cloudStatusIcon = <CloudOffIcon fontSize="small" />;
    if (online) { cloudStatusIcon = <CloudUploadIcon fontSize="small"  /> }
    if (done) { cloudStatusIcon = <CloudDoneIcon fontSize="small"  /> }
    return(
        <IconButton edge="start" color="inherit" aria-label="cloud backup">
            {cloudStatusIcon}
        </IconButton>
    );
}

export default cloudBackup;