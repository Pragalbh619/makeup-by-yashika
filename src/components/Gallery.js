// import React from "react";
// import Image from "./Image";

// const Gallery = (props) => {
//   return (
//     <div id="portfolio" className="text-center">
//       <div className="container">
//         <div className="section-title">
//           <h2>Gallery</h2>
//           <p>
//             Explore our stunning makeup transformations, from bridal elegance to party glam.
//           </p>
//         </div>
//         <div className="row">
//           <div className="portfolio-items">
//             {props.data
//               ? props.data.map((d, i) => (
//                 <div
//                   key={`${d.title}-${i}`}
//                   className="col-sm-6 col-md-4 col-lg-4"
//                 >
//                   <Image
//                     title={d.title}
//                     largeImage={d.largeImage}
//                     smallImage={d.smallImage}
//                   />
//                 </div>
//               ))
//               : "Loading..."}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery

import React from "react";
import Image from "./Image";

const Gallery = (props) => {
  // console.log("props", props?.data);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Explore our stunning makeup transformations, from bridal elegance to
            party glam.
          </p>
        </div>

       
        <div
          style={{
            display: "grid",
            gap: "16px",
          }}
           className="portfolio-items"
        >
          {props?.data?.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  width: "100%",
                  height: "500px" /* Set the fixed height you prefer */,
                }}
              >
                <img
                  src={item.smallImage}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px"  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
