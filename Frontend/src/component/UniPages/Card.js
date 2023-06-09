import React from 'react'

// import image from '../../uniHomeImages/comsat/lhr.jpg'
import '../css/ProfileCard.css'
import PropTypes from 'prop-types';
// import lhr from '../../uniHomeImages/comsat/lhr.jpg'
export default function Card(props) {
    // const { imagePath } =props.imagePath;

    return (
        <>
        

                    <div className='col-10 col-md-3 d-flex pt-3 profile-card text-center align-items-center card '>

                        <h5 className="card-title">{props.title}</h5>
                        <img src={props.imgPath} className=" mt-2 img-fluid card-img-top avatar" alt="..." />
                        <div className="card-body">

                            <p className="card-text">{props.build}</p>
                            <a href={props.link} target='_blank' rel="noreferrer" className={props.btnColor}>{props.det}</a>
                        </div>

                    </div>

        </>

    )

} 

Card.propTypes = {
    title: PropTypes.string,
    imgPath:PropTypes.any,
    build:PropTypes.any,
    link:PropTypes.any,
    btnColor:PropTypes.any,
    det:PropTypes.any

  };