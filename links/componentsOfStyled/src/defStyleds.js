/* eslint no-unused-vars:0 */
/* eslint import/prefer-default-export:0 */

import React from 'react';
import styled from 'styled-components';


export const Box = styled.div`

`;

export const _imageConfig = styled.div`
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size:contain;
`;

export const Icon = _imageConfig.extend`
  background-image:url(${p => p.image});
  width:${p => p.width || '100%'};
  height:${p => p.height || '100%'};
`;

export const BlueButton = styled.button`
  display:flex;
  width:70%;
  color:#fff;
  margin-left:15%;
  margin-right:15%;
  height:44px;
  border-radius:4px;
  background-color:#4370EF;
  justify-content:center;
  align-items:center;
`;
