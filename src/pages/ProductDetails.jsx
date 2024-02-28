import { Button, Skeleton, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { set_product_details, set_products_data } from "../store/slices/Products_slice";

const SkeletonCard = () => {
  return (
    <div>
      <div className="container-fluid flex justify-center items-center mt-10">
        <div className=" container gap-10 row flex justify-center ">
          <div className="basis-1/2 flex justify-center w-1/2">
            <Skeleton variant="rectangular" width={768} height={768} />
          </div>
          <div className="basis-1/2 h-full">
            <div className="pr-content flex flex-col items-start gap-10">
              <Skeleton variant="rectangular" width="100%" height={35} />

              <Skeleton variant="rectangular" width="100%" height={72} />

              <Skeleton variant="rectangular" width="62px" height={32} />
              <Skeleton variant="rectangular" width="132px" height={40} />
              <Skeleton variant="rectangular" width="165px" height={40} />
              <Skeleton variant="rectangular" width="60px" height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.products);
  const { data: products, data_by_id,detail_pro_loading } = data;
  // const [product, setProduct] = useState("");
  // console.log(params.id)
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  
  const getData = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${params.id}`
    );

    dispatch(set_product_details(response.data));
  };
  return (
    <div>
      <div className="container-fluid bg-orange-500 h-[500px] gap-5 flex justify-center items-center flex-col">
    <h1 className="text-4xl font-bold">Product Details</h1>
    <p>
      <Link to={"/products"}>Products</Link> /{" "}
      <span className="font-bold">{data_by_id !== null ? data_by_id.title : "-"}</span>
    </p>
  </div>
  {detail_pro_loading ?(

    <SkeletonCard />
  ) : (
<>
    
    <div className="container-fluid flex justify-center items-center mt-10">
      <div className=" container gap-10 row flex justify-center ">
        <div className="basis-1/2 flex justify-center w-1/2">
          {/* <SwiperSlider images={product.image} /> */}

          <div className="main-img">
            <img src={data_by_id.image} className="" width={500} />
          </div>
        </div>
        <div className="basis-1/2 h-full">
          <div className="pr-content flex flex-col items-start gap-10">
            <h1 className="text-4xl">{data_by_id.title}</h1>
            <p>{data_by_id.description}</p>
            <h6 className="text-2xl">Rs. {data_by_id.price}</h6>
            <Button />
            <p>
              Category:{" "}
              <span className="bg-orange-500 px-5 py-2 rounded-full">
                {data_by_id.category}
              </span>
            </p>
            <p>SKU: {data_by_id.id}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
  

}
 
</div>
    
  );
};

export default ProductDetails;
