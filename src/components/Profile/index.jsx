import React from 'react';

const Profile = () => {
    return (
        <div className="content">
        <div className="content__header-img">
          <img src="http://www.b17.ru/foto/uploaded/upl_1536215588_12069.jpg" alt=""/>
        </div>

        <div>
          ava+description
        </div>

        <div>
          My posts
          <div>New post</div>
          <div>
            <div>Post 1</div>
            <div>Post 2</div>
          </div> 
        </div>
      </div>
    )
}   

export default Profile;