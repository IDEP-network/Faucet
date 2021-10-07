import React from "react";
import styled from "styled-components";

const styledTypography = styled(
    ({variant, children, ...props}) => {
      if(variant !== 'p' && variant !== 'h1' && variant !== 'h2' && variant !==  'h3' && variant !==  'h4' && variant !==  'h5' && variant !==  'h6' && variant !== 'span') {
        variant = 'p'
        return React.createElement(variant, props, children)
      }
      return React.createElement(variant, props, children)
    }
)

export const Typography = styledTypography`
    ${props => props.variant === 'p' || 
      props.variant === 'span' 
    ? `
      font-size: ${props.$size || props.theme.fontSizes.medium};
      color: ${props.$color || props.theme.colors.black};
      font-weight: ${props.$fontWeight || '400'};
      ${props.$width ? `width: ${props.$width};` : ''}
      line-height: ${props.$lineH || 'normal'};
      margin: ${props.$margin || 0};
      padding: ${props.$padding || 0};
    `: ``}
`