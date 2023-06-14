import React from "react";
import "../assets/css/EditCard.css";
import SideBar from "../component/Dashboard/SideBar";
import Nav from "../component/Dashboard/Nav";

const EditEvent = () => {
  const [images, setImages] = React.useState([]);
  const [open, setOpen] = React.useState(false);

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
          <h2>Edit Event</h2>
          <form>
            <span>Fields marqued * are required</span>
            <div className="formBox">
              <div className="row20">
                <div className="inputBox">
                  <span>Event Title*</span>
                  <input
                    type="text"
                    placeholder="Here you introduce your card"
                  />
                </div>
                <div className="inputBox">
                  <span>Date and title*</span>
                  <input
                    type="datetime-local"
                    placeholder="Here you introduce the address"
                  />
                </div>
              </div>

              {/* <!-- la liste déroulente --> */}

              <div className="row40">
                <div className="dropdown">
                  <span>State*</span>
                  <select className="select">
                  <option className="selected">Now</option>
                    <option>Comming</option>
                  </select>
                </div>
              </div>

              <div className="row40">
                <div className="dropdown">
                  <span>Card relative to this events*</span>
                  <select className="select">
                    <option className="selected">Place 1 (title)</option>
                    <option>Place 2 (title)</option>
                  </select>
                </div>
              </div>

              <div className="row80">
                <div className="inputBox">
                  <span>Description*</span>
                  <textarea placeholder="The description"></textarea>
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
                  <input type="submit" value="Next" id="submitForm" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
