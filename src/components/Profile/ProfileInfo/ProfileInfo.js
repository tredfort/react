import React from "react";
import c from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus"
import userPhoto from "../../../assets/img/userPhoto.png";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    window.profile = props.profile;
    return (
        <div>
            <div className={c.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                {props.profile.fullName}
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}

export default ProfileInfo;