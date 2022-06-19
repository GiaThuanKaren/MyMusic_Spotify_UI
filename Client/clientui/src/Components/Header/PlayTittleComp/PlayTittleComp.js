import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconSolid } from "../../../util/FontAwesome/FontAwesome";
import style from "./PlayTittleComp.module.css"

function PlayTittleComp({tittle}) {
  return (
    <div className={`${style.PlayTitleComp}`}>
      <div className={`${style.PlayBtn}`}>
        <FontAwesomeIcon icon={IconSolid.faPlay} />
      </div>
      <p>{tittle?  tittle : "Default Tittle"}</p>
    </div>
  );
}

export default PlayTittleComp;
