import React, { useEffect } from "react";
import {useRef, useState } from "react";
import {toast} from 'react-toastify';
import axios from "axios";
import "../assets/css/EditCard.css";
import SideBar from "../component/Dashboard/SideBar";
import Nav from "../component/Dashboard/Nav";
import { useAuthContext } from "../hooks/useAuthContext";

const NewEvent = () => {
  const {user}=useAuthContext()
  const [Places,setPlaces] = useState([])

  useEffect(()=>{


    fetch('http://localhost:5000/getPlaces',{
      method : 'GET',
    headers: {
      'Content-Type': 'application/json',
      'accestoken': user.token
  },
}
    )
    .then(res=>{
      return res.json()
    })
    .then (dat=>{
      setPlaces(dat)
      console.log(Places);
    })
    .catch(err=>{
      toast.error(err.message)
    })
    
  },[])

  const titleRef = useRef(null);
  const [state, setState] = useState('Alger');
  const [relative, setRelative] = useState('');
  const dateTime= useRef(null);
  const descriptionRef = useRef(null);
  const [images, setImages] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [imgs,setImgs]=useState([])

  async function handleClick(e) {
    console.log(images);
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
          event_title: titleRef.current.value,
          status: state,
         
          date : dateTime.current.value.split('T')[0],
          time:dateTime.current.value.split('T')[1],
          places: relative,
          description: descriptionRef.current.value,
          image: imgs[0]
      };

      if(data.place_title==='' || data.state==='' || data.datetime==='' || data.relative==='' || data.description==='' )
      {
          toast.error('Please Fill All the fields');
      }
      else if (images.length===0)
      {
        toast.error('Please upload some images');
      }
      else {
        console.log(data);
       fetch('http://localhost:5000/newEvent', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'accestoken': user.token
          },

          body: JSON.stringify(data),
      })
      .then((response)=>{
          if(!response.ok) throw Error ('Error occure');
          else{
             toast.success('the event is add successfully ');
            setImages([])
            setImgs([])
            }
      })
      .catch(err=>{toast.error(err.message)});
      
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
          <h2>New Event</h2>
          <div>
            <span>Fields marqued * are required</span>
            <div className="formBox">
              <div className="row20">
                <div className="inputBox">
                  <span>Event Title*</span>
                  <input
                    ref={titleRef}
                    type="text"
                    placeholder="Here you introduce your card"
                  />
                </div>
                <div className="inputBox">
                  <span>Date and time*</span>
                  <input
                    ref={dateTime}
                    type="datetime-local"
                    placeholder="Here you introduce the address"
                  />
                </div>
              </div>

              {/* <!-- la liste déroulente --> */}

              <div className="row40">
                <div className="dropdown">
                  <span>State*</span>
                  <select className="select" onChange={(e)=>{setState(e.target.value)}}>
                    <option className="selected">Now</option>
                    <option>Comming</option>
                  </select>
                </div>
              </div>

              <div className="row40">
                <div className="dropdown">
                  <span>Card relative to this events*</span>
                  <select className="select" onChange={(e)=>{setRelative(e.target.value)}}>
                  {
                    
                    Places.map((elem)=>{
                      return(<option className="" key={elem._id} value={elem._id} >{elem.place_title}</option>)
                    })
                  }

                  
                  </select>
                </div>
              </div>

              <div className="row80">
                <div className="inputBox">
                  <span>Description*</span>
                  <textarea placeholder="The description" ref={descriptionRef}></textarea>
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

              <div className="next">
                <div className="inputBox">
                  <input onClick={handleClick} type="submit" value="Next" id="submitForm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEvent;