import React from 'react';

const Card = (props) => {

    return (
        <>
        <div  className="col-md-4 col-10 mx-auto">
            <div class="card" >
                <img src={props.imgsrc} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <a href="#" class="btn btn-primary">Go to Course</a>
                </div>
                </div>
            </div>
        </>
    );

}

export default Card;