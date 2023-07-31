import React from "react";

// const Card = (props) => {
    // const { name, email, id } = props;

    // This is the cleaned up version! <3

const Card = ({name, email, id}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                {/* <h2>{props.name}</h2> */}
                <h2>{name}</h2>
                {/* <h2>{props.email}</h2> */}
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;