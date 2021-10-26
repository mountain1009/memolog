import type { NextComponentType } from 'next'
import styled from 'styled-components'
import Link from "next/link";



const Header: NextComponentType = () =>{
    const Header = styled.header`
     background: red;
      display: flex;
      justify-content: space-around;
      align-items: center;
    `;

    const Title = styled.h1`
        color: white;
    `

    const Ul = styled.ul`
        display: flex;
    `

    const Li = styled.li`
        margin: 0 10px;
    `
    return(
        <Header>
            <Title>MemoLog</Title>
            <div>
                <nav>
                    <Ul>
                        <Li>
                            <Link href="/">Top</Link>
                        </Li>
                        <Li>
                            <Link href="/about">about</Link>
                        </Li>
                    </Ul>
                </nav>
            </div>
        </Header>
    )
}

export default Header
