import React from "react";
import { ButtonCustom } from "../../components/button/";
import { ControlButton } from "../../components/button/ControlButton";
import { VolumeBar } from "../../components/volume";
import Icon from "../../utils/icomoon";
import "./songbar.scss";

import AlbumImg1 from "../../assests/images/song-1.png";

export const SongBar = () => {
  return (
    <div className="container">
      <div className="song-bar d-flex justify-content-between align-items-center">
        <div className="d-none d-md-block">
          <div className="d-flex align-items-center">
            <img src={AlbumImg1} alt="album" className="album-img" />
            <div className="ml-3">
              <h4 className="text-truncate">Senorita</h4>
              <p className="text-truncate">Shawn Mendis</p>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center w-25">
          <ButtonCustom type="ghost" btnClass="track-btn">
            <Icon icon="prev-fill" size={18} />
          </ButtonCustom>
          <ControlButton type="pause" />
          <ButtonCustom type="ghost" btnClass="track-btn">
            <Icon icon="next-fill" size={18} />
          </ButtonCustom>

          <VolumeBar />
        </div>

        <ButtonCustom type="secondary" btnClass="d-flex align-items-center">
          <Icon icon="music" size={18} className="mr-2" />
          <span className="d-none d-md-block">Set as Tone</span>
        </ButtonCustom>
      </div>
    </div>
  );
};

export default SongBar;
