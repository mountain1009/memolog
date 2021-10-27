import type { NextComponentType } from 'next'
import styled from 'styled-components'
const Head = styled.header`
  background: ${({ theme }) => theme.colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.header.height};
    `;

const Title = styled.h1`
  color: white;
  font-size: 1.5rem;
    `;

const Header: NextComponentType = () =>{

    return(
        <Head>
            <Title>MemoLog</Title>
        </Head>
    )
}

export default Header
