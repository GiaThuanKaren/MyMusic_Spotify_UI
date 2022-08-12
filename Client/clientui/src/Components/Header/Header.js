import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { IconSolid } from "../../util/FontAwesome/FontAwesome"
import style from "./Header.module.css"
import PlayTittleComp from "./PlayTittleComp/PlayTittleComp"
import { PublicRoute } from "../../Routes/PublicRoute"
import SearchComp from "./SearchComp/SearchComp"
import { useSelector } from "react-redux"
function Header({ isHaveSearch, isHaveNavBar }) {
  const { pathname } = useLocation()
  const { TittleSong } = useSelector(state => state)
  console.log(pathname)
  return (
    <div className={`${style.HeaderContainer}`}>
      <div className={`${style.GroupIconHeader}`}>
        <FontAwesomeIcon
          className={`${style.IconHeader}`}
          icon={IconSolid.faAngleLeft}
        />
        <FontAwesomeIcon
          className={`${style.IconHeader}`}
          icon={IconSolid.faAngleRight}
        />
      </div>
      {pathname == PublicRoute.Home && <PlayTittleComp tittle={TittleSong} />}
      {pathname == PublicRoute.Search && <SearchComp />}
      {pathname == PublicRoute.Show && <PlayTittleComp tittle={TittleSong} />}
    </div>
  )
}

export default Header
