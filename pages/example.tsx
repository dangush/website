import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';

const Example = () => {
    return (
        <div>
            <Breadcrumbs
                containerClassName="font-semibold max-w-fit" //hover:cursor-pointer hover:bg-orange-400
                inactiveItemClassName="inline" 
                activeItemClassName='inline'
                rootLabel="~" 
                transformLabel={(title) => (title + " / ")}
                replaceCharacterList={[{from:'\n', to: ''}]}
            />
            <p>Wtf</p>
        </div>
    )
};

export default Example