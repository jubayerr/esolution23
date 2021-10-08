import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Admin.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admin = () => {
    const { register, handleSubmit } = useForm();

    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            image: imageURL
        }

        const url = `https://whispering-temple-56959.herokuapp.com/addEvent`

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
            <div className="admin">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>Menu</h2>
                            <ul>
                                <li>
                                    <Link to="/admin">Admin</Link>
                                </li>
                                <li><Link to="/orderlist">Order list</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h2 className="pb-5">Add New Service</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input name="name" {...register('name')} placeholder="Add new service" className="form-control" />
                                    <br />
                                    <input name="price" {...register('price')} placeholder="Service price" className="form-control" />
                                    <br />
                                    <input type="file" {...register("image")} onChange={handleImageUpload} className="form-control" />
                                    <br />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="submit" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Admin;