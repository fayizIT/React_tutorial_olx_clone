import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { FirebaseContext, AuthContext } from "../../store/Context";
import { useHistory } from "react-router-dom";

const Create = () => {

  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {

    if(!user){
      
      alert("Please login to upload products");

      history.push("/login");

      return;

    }

    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref}) => {

      ref.getDownloadURL().then((url) => {

        let date = new Date()
        date = date.toDateString()

        firebase.firestore().collection("products").add({
          name: name,
          category: category,
          price: price,
          imageUrl: url,
          userId: user.uid,
          createdAt: date
        }).then(() => {

          history.push("/");

        }).catch((error) => {
          
          console.log(error);

        });

      }).catch((error) => {

        console.log(error);

      });

    });

  };

  return (


    <Fragment>

      <Header />

      <card>

        <div className="centerDiv">

          <label htmlFor="fname">Name</label>

          <br />

          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            defaultValue="John"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <label htmlFor="fname">Category</label>
          <br />

          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            defaultValue="John"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />

          <label htmlFor="fname">Price</label>
          <br />

          <input
            className="input"
            type="number"
            id="fname"
            name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />

          <br />

          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>

          <br />

          <input 
            type="file" 
            onChange={(e) => setImage(e.target.files[0])} 
          />

          <br />
          <button className="uploadBtn" onClick={handleSubmit} >upload and Submit</button>
        </div>

      </card>

    </Fragment>

  );

};

export default Create;
