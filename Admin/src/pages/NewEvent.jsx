import React from "react";
import {useRef, useState } from "react";
import {toast} from 'react-toastify';
import axios from "axios";
import "../assets/css/EditCard.css";
import SideBar from "../component/Dashboard/SideBar";
import Nav from "../component/Dashboard/Nav";

const NewEvent = () => {
  
  const titleRef = useRef(null);
  const [state, setState] = useState('Alger');
  const [relative, setRelative] = useState('Place 1 (title)');
  const dateTime= useRef(null);
  const descriptionRef = useRef(null);
  const [images, setImages] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [imgs,setImgs]=useState([])

  async function handleClick(e) {

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
      }

      const data = {
          place_title: titleRef.current.value,
          state: state,
          datetime: dateTime.current.value,
          relative: relative,
          description: descriptionRef.current.value,
          images: imgs
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
          <form>
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
                    <option className="selected">Place 1 (title)</option>
                    <option>Place 2 (title)</option>
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
                <span>Upload  Image * (you must upload one image) </span>
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
                      //   onChange={(e) => {
                      // handlerImages(e);
                      onChange={(event) => {
                        var imgs = [];
                        Array.from(event.target.files).forEach((file) => {
                          imgs.push(URL.createObjectURL(file));
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
                          style={{ backgroundImage: `url(${e})` }}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewEvent;