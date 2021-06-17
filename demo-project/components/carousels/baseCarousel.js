import styles from "../../styles/BaseCarousel.module.css";
import { useRef } from "react";

const BaseCarousel = () => {

  let ref = useRef();
  console.log(ref);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  }

  return (

    <div className={"card " + styles.outerCard}>
      <div className="card-title">
        <header>
<<<<<<< Updated upstream
          <div class="d-flex justify-content-start"><strong style={{fontSize:"22px"}}>Assesment</strong></div>
          <div class="d-flex justify-content-end"><div className="d-flex justify-content-end m-2">20% completed 
            <div className="d-flex justify-content-start progress  m-2 d-none d-sm-none d-md-none d-lg-block " style={{ height: "0.5rem", width: "9rem" }}>
              <div className=" progress-bar d-none d-lg-block " style={{ width: '30%',height: "0.5rem" }} >
              </div>
=======
          <div className="d-flex justify-content-start"><strong style={{fontSize:"22px"}}>Assesment</strong></div>
          <div className="d-flex justify-content-end"><div className="d-flex justify-content-end ">20% completed
            <div className="d-flex justify-content-start progress m-2 " style={{ height: "0.5rem", width: "9rem" }}>
              <div className="progress-bar" role="progressbar" style={{ width: '30%' }} />
>>>>>>> Stashed changes
            </div>
          </div></div>
        </header>
      </div>
      <div className="card-body">
        <section ref={ref}>
          <b className="arrow" onClick={() => scroll(-200)}><i className="fa fa-angle-left"></i></b>
          <div className="product">
            <picture>
              <img src="../../scrollImage/scroll1.png" alt="scroll_one" />
              <div className="text-wrapper">
                <h6>FACE</h6>
                <p>Content written here</p>
              </div>
            </picture>

          </div>
          <div className="product">
            <picture>
              <img src="../../scrollImage/scroll2.jpg" alt="scroll_two" />
              <div className="text-wrapper">
                <h6>MIO</h6>
                <p>Content written here</p>
              </div>
            </picture>

          </div>
          <div className="product">
            <picture>
              <img src="../../scrollImage/scroll3.jpg" alt="scroll_three" />
              <div className="text-wrapper">
                <h6>MTI</h6>
                <p>Content written here</p>
              </div>
            </picture>

          </div>
          <div className="product">
            <picture>
              <img src="../../scrollImage/scroll4.jpg" alt="scroll_four" />
              <div className="text-wrapper">
                <h6>VAK</h6>
                <p>Content written here</p>
              </div>
            </picture>
          </div>

          <div className="product">
            <picture>
              <img src="../../scrollImage/scroll1.png" alt="scroll_five" />
              <div className="text-wrapper">
                <h6>FACE</h6>
                <p>Content written here</p>
              </div>
            </picture>
          </div>
          <div className="product">
            <picture>
              <img src="../../scrollImage/scroll2.jpg" alt="scroll_six" />
              <div className="text-wrapper">
                <h6>MIO</h6>
                <p>Content written here</p>
              </div>
            </picture>

          </div>
          <div className="product">
            <picture>
              <img src="../../scrollImage/scroll3.jpg" alt="scroll_seven" />
              <div className="text-wrapper">
                <h6>MTI</h6>
                <p>Content written here</p>
              </div>
            </picture>

          </div>
          <div className="product">
            <picture>
              <img src="../../scrollImage/scroll4.jpg" alt="scroll_eight" />
              <div className="text-wrapper">
                <h6>MTI</h6>
                <p>Content written here</p>
              </div>
            </picture>
          </div>
          <div className="product">
            <picture>
              <img src="../../scrollImage/scroll1.png" alt="scroll_nine" />
              <div className="text-wrapper">
                <h6>YAK</h6>
                <p>Content written here</p>
              </div>
            </picture>
          </div>
          <div className="product">
            <picture>
              <img src="../../scrollImage/scroll2.jpg" alt="scroll_ten" />
              <div className="text-wrapper">
                <h6>FACE</h6>
                <p>Content written here</p>
              </div>
            </picture>
          </div>
          <div className="product">
            <picture>
              <img src="../../scrollImage/scroll3.jpg" alt="scroll_eleven" />
              <div className="text-wrapper">
                <h6>MIO</h6>
                <p>Content written here</p>
              </div>
            </picture>
          </div>
          <div className="product">
            <picture>
              <img src="../../scrollImage/scroll4.jpg" alt="scroll_twelve" />
              <div className="text-wrapper">
                <h6>MTI</h6>
                <p>Content written here</p>
              </div>
            </picture>
          </div>

          <b  className="arrow" style={{ right: "20px" }} onClick={() => scroll(200)}><i className="fa fa-angle-right "></i></b>

        </section>


      </div>

    </div>


  )
}

export default BaseCarousel;
