import React, { useEffect, useState } from "react";
import MediaCard from "../components/Cards/Cards";
import axios from "axios";
import { Navbar_Component } from "../components/Navbar_Component";
import { Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { set_products_data } from "../store/slices/Products_slice";
const SkeletonCard = () => {
  return (
    <div>
      <Skeleton variant="rectangular" width={345} height={240} />
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      <Skeleton variant="rectangular" height={100} />
      <Skeleton variant="text" width={"50%"} sx={{ fontSize: "2rem" }} />
      <Skeleton variant="text" width={"50%"} sx={{ fontSize: "2rem" }} />
    </div>
  );
};

const Products = () => {
  const data = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const get_data_handle = async () => {
    const response =  await axios.get('https://fakestoreapi.com/products')
    dispatch(set_products_data(response.data))
  }
  useEffect(()=>{
    get_data_handle()
  })

  return (
    <>
      <Navbar_Component />
      <div className="flex flex-wrap gap-3 mt-10 justify-center">
        {data.data.loading ? (
          <>
            <SkeletonCard /> <SkeletonCard /> <SkeletonCard />
            <SkeletonCard />
            {/* Add more SkeletonCards based on your layout */}
          </>
        ) : (
          data.data.map((pro, index) => (
            <>
              <MediaCard key={pro.id} data={pro} />
            </>
          ))
        )}{" "}
      </div>{" "}
    </>
  );
};

export default Products;
