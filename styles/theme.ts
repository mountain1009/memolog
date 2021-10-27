import 'styled-components';
import {css, CSSObject, FlattenSimpleInterpolation, SimpleInterpolation} from 'styled-components';

export const theme = {
    header:{
        height: "60px"
    },
    colors:{
        base: "#17223b",
        main: "#6b778d",
        accent: "#ff6768",
    },
    media: {
        sp: (first: CSSObject | TemplateStringsArray, ...interpolations: SimpleInterpolation[]): FlattenSimpleInterpolation => css`
          @media (max-width: 560px) {
            ${css(first, ...interpolations)}
          }
        `,
        tab: (first: CSSObject | TemplateStringsArray, ...interpolations: SimpleInterpolation[]): FlattenSimpleInterpolation => css`
          @media (min-width: 561px) and (max-width: 1024px) {
            ${css(first, ...interpolations)}
          }
        `,
        pc: (first: CSSObject | TemplateStringsArray, ...interpolations: SimpleInterpolation[]): FlattenSimpleInterpolation => css`
          @media (min-width: 1025px) {
            ${css(first, ...interpolations)}
          }
        `,
    },
};
