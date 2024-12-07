function ProfileCard(props) {

    // function ProfileCard( { title, handle} )  #Solution 3

    // const title = props.title; #Solution 1
    // const handle = props.handle;

    const { title , handle, image, imageAlt, description } = props;
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt={imageAlt} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{ title }</p>
                    <p className="subtitle is-6">{ handle }</p>
                </div>
                <div className="content">{ description }</div>
            </div>
        </div>
    );
}

export default ProfileCard;
