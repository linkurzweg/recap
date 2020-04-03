import React from 'react';
import { Link as RouterLink } from 'react-router-dom'

const Link = (props) => {
    if (props.to && props.to.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
        return <RouterLink {...props} rel="nofollow noopener" target="_blank">
            {props.children}
        </RouterLink>
    }
    return <RouterLink {...props}>
        {props.children}
    </RouterLink>
};

export default Link;