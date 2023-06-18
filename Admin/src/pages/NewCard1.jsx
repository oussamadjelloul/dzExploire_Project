




import React, { useContext } from "react";
import {useRef, useState } from "react";
import {toast} from 'react-toastify';
import axios from "axios";
import "../assets/css/EditCard.css";
import SideBar from "../component/Dashboard/SideBar";
import Nav from "../component/Dashboard/Nav";
import { NewCardContext } from "../context/NewCard"
import { useNewCardContext } from "../hooks/useNewCardContext";
import { useNavigate } from "react-router-dom";

const NewCard = () => {
  const navigate = useNavigate()
  const {addCard,NewCard} = useNewCardContext()
  
    const [open, setOpen] = React.useState(false);

    const titleRef = useRef(null);
    const addressRef = useRef(null);
    const [state, setState] = useState('Alger');
    const [city, setCity] = useState('Alger');
    const [category, setCategory] = useState('Site historique');
    const [theme, setTheme] = useState('Patrimoine culturel');
    const openHourRef = useRef(null);
    const closeHourRef = useRef(null);
    const descriptionRef = useRef(null);
    const [images, setImages] = useState([]);
    const [imgs,setImgs]=useState([])
    const [transportAvailibity,setTransport] = useState(["NotAvailable","NotAvailable","NotAvailable","NotAvailable","NotAvailable"])

    function handleCheck(e) {
     // let tab=transportAvailibity ;
     // console.log(transportAvailibity);

       if(e.target.checked){
            transportAvailibity[Number(e.target.value)] = "Available";
            setTransport(transportAvailibity)
        } else {
            transportAvailibity[Number(e.target.value)] = "NotAvailable";
            setTransport(transportAvailibity)

        }
    }

    // Cloud Name : dwufdyiuk
    // Upload preset : ky_daoud  

    async function handleClick(e) {

       /* console.log(`Title = ${titleRef.current.value}`);
        console.log(`Address = ${addressRef.current.value}`);
        console.log(`Country = ${state}`);
        console.log(`City = ${city}`);
        console.log(`Category = ${category}`);
        console.log(`Theme = ${theme}`);
        console.log(`Open Hour = ${openHourRef.current.value}`);
        console.log(`Close Hour = ${closeHourRef.current.value}`);
        console.log(`Transports = ${transports}`);
        console.log(`Availibility = ${transportAvailibity}`);
        console.log(`Description = ${descriptionRef.current.value}`);
        console.log(images);*/

        if(images !== []) {
            const files = images;
            const formData = Array.from({length:files.length}, () => {
                    return new FormData();
            });
            for(let i=0; i<files.length; i++) {
                formData[i].append('file', files[i]);
                formData[i].append('upload_preset', 'ky_daoud');
                let response
                try {
                    response = await axios.post(
                        'https://api.cloudinary.com/v1_1/dwufdyiuk/image/upload',
                        formData[i]
                    );
                } catch (error) {
                    console.log(error);
                }
                if(response!=null) {
                  imgs[i] = response.data.secure_url;
                  
                }
            }
            //console.log(images);
        }

        const data = {
            place_title: titleRef.current.value,
            address: addressRef.current.value,
            state: state,
            category: category,
            opening_hour: openHourRef.current.value,
            closing_hour: closeHourRef.current.value,
            transport: transportAvailibity,
            city: city,
            theme: theme,
            description: descriptionRef.current.value,
            images: imgs
        };
        e.preventDefault();
       if(data.place_title==='' || data.address==='' || data.state==='' || data.category==='' || data.opening_hour==='' || data.closing_hour==='' || data.transport==='' || data.city==='' || data.theme==='' || data.description==='' )
        {
            toast.error('Please Fill All the fields');
        }
        else if (images.length===0)
        {
          toast.error('Please upload some images');
        }
        else {
          addCard(data)
          navigate('/new/card/location')
          //console.log(NewCard);
          /*  await fetch('http://localhost:5000/newPlace', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((response)=>{
                if(!response.ok) throw Error ('Error occure');
                else toast.success('the user is add successfully ');
            })
            .catch(err=>{toast.error(err.message)});*/
        }
    }

    return (
       <div>
        
      <Nav open={open} setOpen={setOpen} />
        <div className="ContactUs">
          <div className="sideBar">
            <SideBar open={open}
          setOpen={() => {
          setOpen(!open);
          }} />
        </div>
            <div className="contact form pt-28">
            <h2>New Card</h2>
            <div>
                <span>Fields marqued * are required</span>
                <div className="formBox">
                <div className="row20">
                    <div className="inputBox">
                    <span>Carde Title*</span>
                    <input
                        ref={titleRef}
                        type="text"
                        placeholder="Here you introduce your card"
                    />
                    </div>
                    <div className="inputBox">
                    <span>Address*</span>
                    <input
                        ref={addressRef}
                        type="text"
                        placeholder="Here you introduce the address"
                    />
                    </div>
                </div>

                <div className="row40">
                    <div className="dropdown">
                    <span>State*</span>
                    <select className="select" onChange={(e)=>{setState(e.target.value)}}>
                        <option className="selected">Alger</option>
                        <option>Constantine</option>
                        <option>Béjaïa</option>
                        <option>Batna</option>
                        <option>Sétif</option>
                        <option>Tipaza</option>
                        <option>Oran</option>
                        <option>Tamanrasset</option>
                        <option>Béchar</option>
                    </select>
                    </div>
                    <div className="dropdown">
                    <span>City*</span>
                    <select className="select" onChange={(e)=>{setCity(e.target.value)}}>
                        <option className="selected">Alger</option>
                        <option>Constantine</option>
                        <option>Béjaïa</option>
                        <option>Timgad</option>
                        <option>Djemila</option>
                        <option>Tipaza</option>
                        <option>Oran</option>
                        <option>Tamanrasset</option>
                        <option>Taghit</option>
                    </select>
                    </div>
                </div>

                <div className="row40">
                    <div className="dropdown">
                    <span>Categorie*</span>
                    <select className="select" onChange={(e)=>{setCategory(e.target.value)}}>
                        <option className="selected">Site historique</option>
                        <option>Site archéologique</option>
                        <option>Site religieux</option>
                        <option>Mémorial</option>
                        <option>Parc national</option>
                        <option>Parc</option>
                        <option>Pont</option>
                        <option>Site naturel</option>
                        <option>Plage</option>
                        <option>Oasis</option>
                    </select>
                    </div>

                    <div className="dropdown">
                    <span>Theme*</span>
                    <select className="select" onChange={(e)=>{setTheme(e.target.value)}}>
                        <option className="selected">Patrimoine culturel</option>
                        <option>Jardin botanique</option>
                        <option>Histoire et commémoration</option>
                        <option>Architecture et patrimoine</option>
                        <option>Nature et conservation</option>
                        <option>Histoire et patrimoine</option>
                        <option>Architecture religieuse</option>
                        <option>Nature et paysages</option>
                        <option>Détente et loisirs</option>
                        <option>Nature et patrimoine</option>
                        <option>Détente et nature</option>
                    </select>
                    </div>
                </div>

                <div className="row40">
                    <div className="inputBox">
                    <span>Open At*</span>
                    <input ref={openHourRef} type="text" placeholder="Opening Hours" />
                    </div>
                    <div className="inputBox">
                    <span>Close At*</span>
                    <input ref={closeHourRef} type="text" placeholder="Closing Hours" />
                    </div>
                </div>

                <div className="row60">
                    <span>
                    Transport* (Check the available transport in this place)
                    </span>
                    <div className="gridBox">
                    {/* <!-- ckeckbox --> */}
                    <div className="checkBox">
                        <input value="3" type="checkbox"  onChange={handleCheck}/>
                        <label>Tramway</label>
                    </div>
                    <div className="checkBox">
                        <input value="4" type="checkbox"  onChange={handleCheck}/>
                        <label>Train</label>
                    </div>
                    <div className="checkBox">
                        <input value="1" type="checkbox" onChange={handleCheck}/>
                        <label>Metro</label>
                    </div>
                    <div className="checkBox">
                        <input value="2" type="checkbox" onChange={handleCheck}/>
                        <label>Bus</label>
                    </div>
                    <div className="checkBox">
                        <input value="0" type="checkbox"  onChange={handleCheck}/>
                        <label>Cable Car</label>
                    </div>
                    </div>
                </div>

                <div className="row80">
                    <div className="inputBox">
                    <span>Description*</span>
                    <textarea ref={descriptionRef} placeholder="The description"></textarea>
                    </div>
                </div>

                <div className="row100">
                    {/* <!-- add images --> */}
                    <span>Upload image* </span>
                    <div className="imgBox">
                    <div id="addImg">
                        <span>&#43;</span>
                        <span>Upload New Image</span>
                        <input
                        type="file"
                        id="imageInput"
                        title=""
                        accept="image/png, image/jpg "
                        multiple
                        onChange={(event) => {
                            var imgs = [];
                            //console.log(event.target.files)
                            Array.from(event.target.files).forEach((file) => {
                                imgs.push(file);
                                //console.log(URL.createObjectURL(file));
                            });
                            setImages([...imgs, ...images]);
                        }}
                        />
                    </div>
                    {images &&
                        images.map((e, index) => {
                        return (
                            <div
                            className="relative"
                            key={index}
                            style={{backgroundImage: `url(${URL.createObjectURL(e)})`}}
                            >
                            <i
                                className="fas fa-trash-alt trash-icon bg-red-600"
                                onClick={() => {
                                    images.splice(index, 1);
                                    setImages([...images]);
                                }}
                            ></i>
                            </div>
                        );
                        })}
                    </div>
                </div>
                <div  onClick={handleClick} className="next">
                    <div className="inputBox">
                        <input  type="submit" value="Next" id="submitForm" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
      
    );
};

export default NewCard;