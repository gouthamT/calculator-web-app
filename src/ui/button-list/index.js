import React from 'react';
import { ButtonConfigurations } from '../../common/configurations';
import { Button } from './main';
import './styled.css';

export const ButtonList = () => (
  <div className="button-list">
    {
      ButtonConfigurations.map(([, btnConfig], key) => (
        <Button key={key} btnConfig={btnConfig} /> 
        ))
    }
  </div>
  );