import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import axios from "axios";
const url = "https://phpwebdevelopmentservices.com/project-react-backend/api/edit-profile";

const EditProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [dob, setDob] = useState('');
    const [language, setLanguage] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name,email,phone)
        const authToken = sessionStorage.getItem('ltk');
        const editDetails = {
            "name": name,
            "email": email,
            "phone": phone,
            "about_me": aboutMe,
            "date_of_birth": dob,
            "language_id": language,
            "country_id": country,
            "state": state,
            "city": city,
            "password": currentPassword,
            "new_password": newPassword,
            "confirm_password": confPassword
        }
        try {
            let res = await axios.post(url, {
                params: editDetails
            },
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                })
            console.log(res)
        } catch (error) {
            console.log("error", error)
        }
    }
    return (
        <>
            <div className='wrapper'>
                <Header></Header>
                <section class="mainDasbordsec">
                    <div class="container">
                        <div class="mainDasbordInr">
                            <div class="row">
                                <div class="col-lg-3 col-md-12 col-sm-12 pl-0">
                                    <div class="dasbordLeftsec">
                                        <a href="#url" class="showmeu" data-toggle="collapse" data-target="#demo"><i class="fa fa-bars"></i>Show Menus</a>
                                        <div class="dasbordLeft ">
                                            <div class="profibx">
                                                <em><img src="assets/images/dachprofi.jpg" alt="" /></em>
                                                <strong>Rabin Mnna</strong>
                                                <ul>
                                                    <li><a href="#"><img src="assets/images/star1.png" alt="" /></a></li>
                                                    <li><a href="#"><img src="assets/images/star1.png" alt="" /></a></li>
                                                    <li><a href="#"><img src="assets/images/star1.png" alt="" /></a></li>
                                                    <li><a href="#"><img src="assets/images/star1.png" alt="" /></a></li>
                                                    <li><a href="#"><img src="assets/images/star2.png" alt="" /></a></li>
                                                    <li><span>(410)</span></li>
                                                </ul>
                                            </div>
                                            <div class="dasbordLeftlink">
                                                <ul>
                                                    <li><a href="#">
                                                        <span>
                                                            <img src="assets/images/dashico1.png" alt="" class="dashico1" />
                                                        </span>
                                                        Dashboard
                                                    </a></li>
                                                    <li><a href="#" class="activ">
                                                        <span>
                                                            <img src="assets/images/dashico2.png" alt="" class="dashico1" />
                                                        </span>
                                                        Edit Profile
                                                    </a></li>
                                                    <li><a href="#">
                                                        <span>
                                                            <img src="assets/images/dashico3.png" alt="" class="dashico1" />
                                                        </span>
                                                        My Order
                                                    </a></li>
                                                    <li><a href="#">
                                                        <span>
                                                            <img src="assets/images/dashico10.png" alt="" class="dashico1" />
                                                        </span>
                                                        My Favorite
                                                    </a></li>
                                                    <li><a href="#">
                                                        <span>
                                                            <img src="assets/images/dashico4.png" alt="" class="dashico1" />
                                                        </span>
                                                        Reviews
                                                    </a></li>

                                                    <li><a href="#">
                                                        <span>
                                                            <img src="assets/images/dashico7.png" alt="" class="dashico1" />
                                                        </span>
                                                        Messages<em>10</em>
                                                    </a></li>
                                                    <li><a href="#">
                                                        <span>
                                                            <img src="assets/images/dashico8.png" alt="" class="dashico1" />
                                                        </span>
                                                        Notifications
                                                        <em>14</em>
                                                    </a></li>
                                                    <li><a href="login.html">
                                                        <span>
                                                            <img src="assets/images/dashico9.png" alt="" class="dashico1" />
                                                        </span>
                                                        Log Out

                                                    </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-12 col-sm-12 pr-0">
                                    <div class="dasbordRightlink">
                                        <h1>Edit Profile</h1>
                                        <div class="dasbordRightBody">

                                            <div class="editProformBx">
                                                <form onSubmit={handleSubmit}>
                                                    <div class="editProformir">

                                                        <div class="row">
                                                            <div class="col-md-4 col-sm-12">
                                                                <div class="iputBx">
                                                                    <label>Name</label>
                                                                    <input type="text"
                                                                        placeholder="Enter here"
                                                                        name="name"
                                                                        id="name"
                                                                        value={name}
                                                                        onChange={(e) => setName(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 col-sm-12">
                                                                <div class="iputBx">
                                                                    <label>Email</label>
                                                                    <input type="text"
                                                                        placeholder="Enter here"
                                                                        name="email"
                                                                        id="email"
                                                                        value={email}
                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 col-sm-12">
                                                                <div class="iputBx">
                                                                    <label>Phone</label>
                                                                    <input type="text"
                                                                        placeholder="Enter here"
                                                                        name="phone"
                                                                        id="phone"
                                                                        value={phone}
                                                                        onChange={(e) => setPhone(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-12">
                                                                <div class="iputBx">
                                                                    <label>About me</label>
                                                                    <textarea placeholder="Enter your description here..."
                                                                        name='aboutMe'
                                                                        value={aboutMe}
                                                                        onChange={(e) => setAboutMe(e.target.value)}
                                                                    ></textarea>
                                                                </div>
                                                            </div>



                                                            <div class="col-md-5 col-sm-6">
                                                                <div class="iputBx">
                                                                    <label>Date of Birth</label>
                                                                    <input type="text"
                                                                        class="datepicker"
                                                                        placeholder="Enter here"
                                                                        name='dob'
                                                                        value={dob}
                                                                        onChange={(e) => setDob(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div class="col-md-4 col-sm-6">
                                                                <div class="genfil">
                                                                    <span>Gender</span>
                                                                    <ul>
                                                                        <li>
                                                                            <input type="radio" id="radio1" name="radios" value="all" checked />
                                                                            <label for="radio1">Male</label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="radio2" name="radios" value="all" />
                                                                            <label for="radio2">Female</label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-12">
                                                                <div class="form_group edt_checkk">
                                                                    <label class="search_label">Travel</label>
                                                                    <ul class="c_ul">
                                                                        <li>
                                                                            <label class="contect_container_checkBox">Bus
                                                                                <input type="checkbox" checked="" name="text" />
                                                                                <span class="contect_checkmark"></span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <label class="contect_container_checkBox">Car
                                                                                <input type="checkbox" name="text" />
                                                                                <span class="contect_checkmark"></span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <label class="contect_container_checkBox">Track
                                                                                <input type="checkbox" name="text" />
                                                                                <span class="contect_checkmark"></span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <label class="contect_container_checkBox">Walk
                                                                                <input type="checkbox" name="text" />
                                                                                <span class="contect_checkmark"></span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <label class="contect_container_checkBox">Scooter
                                                                                <input type="checkbox" name="text" />
                                                                                <span class="contect_checkmark"></span>
                                                                            </label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-12">
                                                                <div class="form_fild_area_m frm_grp arro">
                                                                    <label>Language </label>
                                                                    <select data-placeholder="Select"
                                                                        class="chosen-select"
                                                                        multiple tabindex="4"
                                                                        onChange={(e) => setLanguage(e.target.value)}
                                                                    >
                                                                        <option value=""></option>
                                                                        <option value="">Htmuyyiyyuyu uyytuyl</option>
                                                                        <option value="">Htmuyyiyyuyu uyytuyl</option>
                                                                        <option value="">Htmuyyiyyuyu uyytuyl</option><option value="">Htmuyyiyyuyu uyytuyl</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-12">
                                                                <div class="uplodimg">
                                                                    <span>Profile Image</span>
                                                                    <div class="uplodimgfil">
                                                                        <input type="file" name="file-1[]" id="file-1" class="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple />
                                                                        <label for="file-1">Click here to Upload Profile Image<img src="assets/images/clickhe.png" alt="" /></label>
                                                                    </div>
                                                                    <div class="uplodimgfilimg">
                                                                        <em><img src="assets/images/uplodimg.jpg" alt="" /></em>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>



                                                        <div class="locatioSec">
                                                            <h3>Location</h3>
                                                            <div class="row">
                                                                <div class="col-md-4 col-sm-6">
                                                                    <div class="iputBx">
                                                                        <label>Country</label>
                                                                        <select onChange={(e) => setCountry(e.target.value)}>
                                                                            <option value="1">Select</option>
                                                                            <option value="2">Select1</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 col-sm-6">
                                                                    <div class="iputBx">
                                                                        <label>State</label>
                                                                        <input type="text"
                                                                            placeholder="Enter here"
                                                                            name="state"
                                                                            value={state}
                                                                            onChange={(e) => setState(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 col-sm-12">
                                                                    <div class="iputBx">
                                                                        <label>City</label>
                                                                        <input type="text"
                                                                            placeholder="Enter your full address"
                                                                            name="city"
                                                                            value={city}
                                                                            onChange={(e) => setCity(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div class="locatioSec">
                                                            <h3>Change password</h3>
                                                            <div class="row">
                                                                <div class="col-md-4 col-sm-6">
                                                                    <div class="iputBx">
                                                                        <label>Current password</label>
                                                                        <input type="password"
                                                                            placeholder="Enter here"
                                                                            name="currentPassword"
                                                                            value={currentPassword}
                                                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 col-sm-6">
                                                                    <div class="iputBx">
                                                                        <label>New password</label>
                                                                        <input type="password"
                                                                            placeholder="Enter here"
                                                                            name="newPassword"
                                                                            value={newPassword}
                                                                            onChange={(e) => setNewPassword(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 col-sm-12">
                                                                    <div class="iputBx">
                                                                        <label>Confirm password</label>
                                                                        <input type="password"
                                                                            placeholder="Enter here"
                                                                            name=""
                                                                            value={confPassword}
                                                                            onChange={(e) => setConfPassword(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div class="footdashSec">
                                                            {/* <input type="submit" name="submit" value="Save all changes" class="subbtn" /> */}
                                                            <button type="submit" className="subbtn">Save all changes</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </>
    );
}

export default EditProfile;