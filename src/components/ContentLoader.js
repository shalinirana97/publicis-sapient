import React from 'react';
import { PulseLoader } from 'react-spinners';

const ContentLoader = (props) => {
    return (
        <PulseLoader
            sizeUnit="px"
            size={10}
            loading={props.loading}
        />
    )
}
export default ContentLoader;