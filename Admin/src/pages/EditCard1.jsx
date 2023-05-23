import React from "react";
import "../assets/css/EditCard.css";

const EditCard1 = () => {
  const [images, setImages] = React.useState([]);

  return (
    <div>
      <div className="ContactUs">
        <div class="sideBar"></div>
        <div className="contact form">
          <h2>Edit Card</h2>
          <form>
            <span>Fields marqued * are required</span>
            <div className="formBox">
              <div className="row20">
                <div className="inputBox">
                  <span>Carde Title*</span>
                  <input
                    type="text"
                    placeholder="Here you introduce your card"
                  />
                </div>
                <div className="inputBox">
                  <span>Adress*</span>
                  <input
                    type="text"
                    placeholder="Here you introduce the address"
                  />
                </div>
              </div>

              {/* <!-- la liste déroulente --> */}

              <div className="row40">
                <div className="dropdown">
                  <span>Country*</span>
                  <select className="select">
                    <option className="selected">Algeria</option>
                    <option>Afghanistan</option>
                    <option>Algeria</option>
                    <option>Tunisia</option>
                    <option>Moroco</option>
                    <option>Libya</option>
                    <option>Egypt</option>
                  </select>
                </div>
                <div className="dropdown">
                  <span>City*</span>
                  <select className="select">
                    <option className="selected">Medea</option>
                    <option>Ksar El Boukhari</option>
                    <option>Barouighia</option>
                    <option>Zoubayria</option>
                    <option>Omayria</option>
                    <option>Boughazoul</option>
                  </select>
                </div>
              </div>

              <div className="row40">
                <div className="dropdown">
                  <span>Categorie*</span>
                  <select className="select">
                    <option className="selected">Medea</option>
                    <option>Ksar El Boukhari</option>
                    <option>Barouighia</option>
                    <option>Zoubayria</option>
                    <option>Omayria</option>
                    <option>Boughazoul</option>
                  </select>
                </div>
                <div className="dropdown">
                  <span>Theme*</span>
                  <select className="select">
                    <option className="selected">Medea</option>
                    <option>Ksar El Boukhari</option>
                    <option>Barouighia</option>
                    <option>Zoubayria</option>
                    <option>Omayria</option>
                    <option>Boughazoul</option>
                  </select>
                </div>
              </div>

              <div className="row40">
                <div className="inputBox">
                  <span>Open At*</span>
                  <input type="text" placeholder="Opening Hours" />
                </div>
                <div className="inputBox">
                  <span>Close At*</span>
                  <input type="text" placeholder="Closing Hours" />
                </div>
              </div>

              <div className="row60">
                <span>
                  Transport* (Check the available transport in this place)
                </span>
                <div className="gridBox">
                  {/* <!-- ckeckbox --> */}
                  <div className="checkBox">
                    <input type="checkbox" />
                    <label>Tramway</label>
                  </div>
                  <div className="checkBox">
                    <input type="checkbox" />
                    <label>Train</label>
                  </div>
                  <div className="checkBox">
                    <input type="checkbox" />
                    <label>Metro</label>
                  </div>
                  <div className="checkBox">
                    <input type="checkbox" />
                    <label>Bus</label>
                  </div>
                  <div className="checkBox">
                    <input type="checkbox" />
                    <label>Cable Car</label>
                  </div>
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
                <span>Upload image* (you must upload at most 5 images)</span>
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
                        console.log(event.target.files);
                        if (event.target.files.length > 0) {
                          //   Array.from(event.target.files).forEach((e) => {

                          var test = URL.createObjectURL(event);

                          setImages([test, ...images]);
                        }
                        // setImages([event.target.files[0], ...images]);

                        // img.current.src = test;
                      }}
                      //   }}
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
                            className=" fas fa-trash-alt trash-icon "
                            onClick={() => {
                              images.splice(index, 1);
                              setImages([...images]);
                            }}
                          ></i>
                        </div>
                      );
                    }
                    )
                  }
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

export default EditCard1;
