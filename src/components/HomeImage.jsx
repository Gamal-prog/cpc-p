// function HomeImage() {

//     return (
//         <>
//             {/* <div className="flex flex-row mt-10"> */}
//                 <div className="card col-span-3">
//                     <div className="w-full h-64">
//                         <img className="w-full h-full object-cover rounded-md" src="/a.jpg" alt="Greating Image" />
//                     </div>
//                 </div>
//             {/* </div> */}
//         </>
//     );
// }

// export default HomeImage

function HomeImage() {
    return (
      <div className="card">
        <div className="w-full h-64">
          <img
            className="w-full h-full object-cover rounded-md"
            src="/a.jpg"
            alt="Greating Image"
          />
        </div>
      </div>
    );
  }
  
  export default HomeImage;
  