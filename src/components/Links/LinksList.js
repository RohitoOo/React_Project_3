import React from 'react';
import LinksListItem from './LinksListItem';

function LinksList({ links, onLinkExpired , doneFunction , editFunction }) {
    return (
        <ul className='list-group'>
            {links.map(link => <LinksListItem key={link.id} link={link} onLinkExpired={onLinkExpired} editFunction={editFunction}  doneFunction={doneFunction}/>)}
        </ul>
    )
}

export default LinksList
