import React from "react";
import Utils from "@sitevision/api/server/Utils";
import  ImageRenderer from "@sitevision/api/server/ImageRenderer";

const PictureBox = (props) => {
    const imageScaler = Utils.getImageScaler(308, 188);
    ImageRenderer.setImageScaler(imageScaler),
    ImageRenderer.clearSourceSetMode(),
    ImageRenderer.forceUseImageScaler(),
    ImageRenderer.setImage(props.Picture)
    return(
        <div dangerouslySetInnerHTML={{__html: ImageRenderer.render()}} />
    )
}

export default PictureBox;