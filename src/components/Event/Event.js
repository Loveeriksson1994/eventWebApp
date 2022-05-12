import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.scss'
import utils from '@sitevision/api/server/Utils';
import imageRenderer from '@sitevision/api/server/ImageRenderer';
import resourceLocatorUtil from '@sitevision/api/server/ResourceLocatorUtil';

const Event = ({ event }) => {

    function displayPicture() {
        let picture = resourceLocatorUtil.getNodeByIdentifier(event.picture);
        if (picture) {
            const imageScaler = utils.getImageScaler(308, 188);
            imageRenderer.setImageScaler(imageScaler),
                imageRenderer.clearSourceSetMode(),
                imageRenderer.forceUseImageScaler(),
                imageRenderer.setImage(picture);
            return imageRenderer.render();
        }
    }

    function displayDate() {
        let date;
        if (event.startDate === event.endDate) {
            date = event.startDate
        }
        else {
            date = event.startDate + ' - ' + event.endDate
        }
        return date;
    }

    function displayCategory() {
        let categories = event.category,
            categoryString = "",
            i = 0,
            lastCategory = categories.length - 1;
        categories.map(category => {
            if (i === lastCategory) {
                categoryString += category
            }
            else {
                i++
                categoryString += category + " • "
            }
        })
        return categoryString;
    }

    return (

        <div className={styles.supEventPuff}>
            <a href={event.url}>
                <div dangerouslySetInnerHTML={{ __html: displayPicture() }} />
                <div className={styles.supEventPuff__dateBox}>
                    <time>
                        {displayDate()}
                    </time>
                </div>
                <div className={styles.supEventPuff__titleBox}>
                    {event.title}
                </div>
                <div className={styles.supEventPuff__categoryBox}>
                    {displayCategory()}
                </div>
            </a>
        </div>
    );
};

Event.propTypes = {
    event: PropTypes.object,
};

export default Event;