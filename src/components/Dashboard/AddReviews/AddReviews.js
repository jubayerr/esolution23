import React, { useState } from 'react';
import './AddReviews.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const AddReviews = () => {
    const { register, handleSubmit } = useForm();

    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            title: data.title,
            desc: data.desc,
            image: imageURL
        }

        const url = `https://whispering-temple-56959.herokuapp.com/addReviews`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side responsed', res))
    }
    const handleImageUpload = event => {
        // console.log(event.target.files[0]);
        const imageData = new FormData()
        imageData.set('key', '17f8427538013c9995498fd25b5bee6a')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <Header />
            <div className="AddReviews">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>Menu</h2>
                            <ul>
                                <li><Link to="/dashboard/orders">Order List</Link></li>
                                <li><Link to="/dashboard/addReviews">Give Riview</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <textarea class="form-control" name="desc" {...register('desc')} rows="3" placeholder="Write your reviews..." />
                                    <br />
                                    <input name="name" {...register('name')} className="form-control" placeholder="Name" />
                                    <br />
                                    <input name="title" {...register('title')} className="form-control" placeholder="Occupation" />
                                    <br />
                                    <input type="file" {...register("image")} onChange={handleImageUpload} className="form-control" />
                                    <br />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddReviews;