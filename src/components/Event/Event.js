import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.css'
import utils from '@sitevision/api/server/Utils';
import imageRenderer from '@sitevision/api/server/ImageRenderer';
import resourceLocatorUtil from '@sitevision/api/server/ResourceLocatorUtil';

const Event = ({event}) => {

    let picture = resourceLocatorUtil.getNodeByIdentifier(event.picture);

    const imageScaler = utils.getImageScaler(308, 188);
    imageRenderer.setImageScaler(imageScaler),
    imageRenderer.clearSourceSetMode(),
    imageRenderer.forceUseImageScaler(),
    imageRenderer.setImage(picture)

    let date;
    if(event.startDate === event.endDate){
        date = event.startDate
    }
    else {
        date = event.startDate + ' - ' + event.endDate
    }

    let samling = event.category,
    categoryString = "",
    i = 0,
    lastCategory = samling.length - 1;

    samling.map(category => {
        if(i === lastCategory) {
            return categoryString += category
        }
        else{
            i++
            return categoryString += category + " • "
        }
    })

    return (
        
           <div className={styles.supEventPuff}>
                <a href={event.url}>
                <div dangerouslySetInnerHTML={{__html: imageRenderer.render()}} />
                    <div className={styles.supEventPuff__dateBox}>
                        <time>
                            {date}
                        </time>
                    </div>
                    <div className={styles.supEventPuff__titleBox}>
                        {event.title}
                    </div>
                    <div className={styles.supEventPuff__categoryBox}>
                            {/* {samling.map(category => {
                                if(i === lastCategory) {
                                    return <span>{category}</span>
                                }
                                else{
                                    return
                                    <div>
                                    <span>{category}</span><span className={styles.supCatDot}></span>
                                    </div>
                                }
                            })} */}
                            {categoryString}
                    </div>
                </a>
            </div>
            );
  };

  Event.propTypes = {
    event: PropTypes.any,
  };
 
 export default Event;