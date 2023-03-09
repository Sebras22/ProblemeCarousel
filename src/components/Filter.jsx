import React, { useState } from 'react';
import { type } from '../scripts/globalVariables';

import './filter.scss'

const Filter = () => {
    const [filter, setFilter] = useState("")
    return (
        <div className='filtercard'>
              {type.map((type, i) => {
            return (
              <div onClick={() => {setFilter(type.type)}} className='cardfilter' key={i}>
                <div>
                <img src={type.src} alt={i} />
                </div>
                <p>{type.type}</p>
              </div>
            );
          })}
        </div>
    );
};

export default Filter;