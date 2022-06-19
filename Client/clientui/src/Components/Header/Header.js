
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconSolid } from "../../util/FontAwesome/FontAwesome"
import style from "./Header.module.css"
import PlayTittleComp from "./PlayTittleComp/PlayTittleComp"
function Header({isHaveSearch,isHaveNavBar}) {
    return (
        <div className={`${style.HeaderContainer}`}>
            <div className={`${style.GroupIconHeader}`}>
                <FontAwesomeIcon className={`${style.IconHeader}`} icon={IconSolid.faAngleLeft} />
                <FontAwesomeIcon className={`${style.IconHeader}`} icon={IconSolid.faAngleRight} />
            </div>
            
          <PlayTittleComp />
        </div>
    )
}

export default Header
