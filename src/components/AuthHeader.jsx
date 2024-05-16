import { Link } from "react-router-dom"

import {Nav} from './AuthHeaderStyle'




export default function AuthHeader() {

  return (
    <Nav>
      <ul className="header-container">
        <li>
          <Link to={'/'} className="logo-cont">
            <img src={'logo.png'} alt="닭 브랜드 로고" />
            <span>SUPERDAK</span>
          </Link>
        </li>
      </ul>
    </Nav>
  )
}

