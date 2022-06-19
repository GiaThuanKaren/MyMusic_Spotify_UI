import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { SetActivePlay } from "../../../Redux/Actions/Actions";
import { IconSolid } from "../../../util/FontAwesome/FontAwesome";
import style from "./PlayTittleComp.module.css";

function PlayTittleComp({ tittle }) {
  const GlobalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const SetStatusPlaying = function () {
    dispacth(SetActivePlay(!GlobalState.isPlaying));
  };
  return (
    <div className={`${style.PlayTitleComp}`}>
      <div className={`${style.PlayBtn}`}>
        {GlobalState.isPlaying ? (
          <FontAwesomeIcon
            onClick={() => {
              dispatch(SetActivePlay(!GlobalState.isPlaying));
            }}
            icon={IconSolid.faPause}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              dispatch(SetActivePlay(!GlobalState.isPlaying));
            }}
            icon={IconSolid.faPlay}
          />
        )}
      </div>
      <p>{tittle ? tittle : "Default Tittle"}</p>
    </div>
  );
}

export default PlayTittleComp;
