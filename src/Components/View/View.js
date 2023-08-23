import React from 'react';
import { useEffect, useState, useContext } from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';



function View() {

  const [userDetails, setUserDetails] = useState(null);

  const {postDetails} = useContext(PostContext);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {

    const {userId} = postDetails;

    firebase.firestore().collection('users').where('id', '==', userId).get().then((response) => {

      response.forEach((doc)=>{

        setUserDetails(doc.data());

      })

    });

  }, []);



  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.imageUrl}
          alt={postDetails.name}
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails?.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>Posted On: {postDetails.createdAt}</span>
        </div>

        {userDetails && 

          <div className="contactDetails">

            <p>Seller details</p>
            <p>{userDetails.userName}</p>
            <p>Contact Number: {userDetails.userphone}</p>
            
          </div>

        }

      </div>
    </div>
  );
}
export default View;
