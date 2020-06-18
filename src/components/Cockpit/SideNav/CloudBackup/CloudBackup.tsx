import React from 'react';

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
        <>
            {cloudStatusIcon}
        </>
    );
}

export default cloudBackup;