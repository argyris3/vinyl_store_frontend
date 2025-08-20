import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_order_details } from "../../store/reducers/orderReducer";

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const { myOrder } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(get_order_details(orderId));
  }, [orderId]);

  return (
    <div className="bg-slate-200 p-5 ">
      <h2 className="text-slate-600 font-semibold">
        #{myOrder._id}, <span className="pl-1">{myOrder.date}</span>
      </h2>
      <div className="grid grid-cols-2 gap-3 ">
        <div className="flex flex-col gap-1 ">
          <h2 className="bg-slate-600 font-semibold font-sans">
            Delivery To:{myOrder.shippingInfo?.name}
          </h2>
          <p>
            <span className="bg-blue-300 text-blue-900 text-md font-medium mr-2 px-2 pr-2 rounded">
              Home
            </span>
            <span className="text-slate-600 text-sm">
              {myOrder.shippingInfo?.address}
            </span>
            <span className="text-slate-600 text-sm">
              {myOrder.shippingInfo?.province},{myOrder.shippingInfo?.city}
            </span>
          </p>
          <p className="text-slate-600 text-md font-semibold">
            Email To:{userInfo.email}
          </p>
        </div>
        <div className="text-slate-600">
          <h2 className="font-mono">Price:${myOrder.price} Include Shipping</h2>
          <p className="font-mono">
            Payment Status:{" "}
            <span
              className={`py-[1px] text-md px-3 ${
                myOrder.payment_status === "paid"
                  ? "bg-green-300 text-green-800"
                  : "bg-red-300 text-red-800"
              } rounded-md`}
            >
              {myOrder.payment_status}
            </span>
          </p>

          <p className="font-mono">
            Order Status:{" "}
            <span
              className={`py-[1px] text-md px-3 ${
                myOrder.delivery_status === "paid"
                  ? "bg-green-300 text-green-800"
                  : "bg-red-300 text-red-800"
              } rounded-md`}
            >
              {myOrder.delivery_status}
            </span>
          </p>
        </div>
      </div>
      {
        <div className="mt-4">
          <h2 className="text-slate-600 text-lg pb-2 font-sans">
            Records Ordered
          </h2>
          <div className="flex gap-5 flex-col ">
            {myOrder.products?.map((p, i) => (
              <div
                className="flex gap-5 justify-start items-center text-slate-600"
                key={i}
              >
                <div className="flex gap-2 ">
                  <img className="w-[55px] h-[55px]" src={p.images[0]} alt="" />
                  <div className="flex text-sm flex-col justify-start items-start">
                    <Link className="capitalize">{p.name}</Link>
                    <p>
                      <span>Band:{p.brand}</span>
                    </p>
                    <p>
                      <span>Quantity:{p.quantity}</span>
                    </p>
                  </div>
                </div>
                <div className="pl-4 flex flex-col">
                  <h2 className="text-md text-green-800">
                    ${p.price - Math.floor((p.price * p.discount) / 100)}
                  </h2>
                  <p className="line-through">{p.price}</p>
                  <p className="line-through">-{p.discount}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default OrderDetails;
