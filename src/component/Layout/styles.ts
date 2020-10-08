import styled from 'styled-components';

/**
 * Layout
 * MH = Main Header
 * AS = Aside
 * CT = Content
 */

export const Grid = styled.div`


 display: grid;
    grid-template-columns: 40px auto;
    grid-template-rows: 40px auto ;

    grid-template-areas:
    'MH MH'
    'MH CT';

    height: 100vh;
   

`;