import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UnavailablePop from "../Modals/UnavailablePop";
import { handleIpPop } from "state/dashboard/actions";

const AnnouncementBar = () => {
  const dispatch = useDispatch();
  const { ipPop } = useSelector((state) => state.dashboard);

  const handleUnavailable = () => {
    dispatch(handleIpPop());
  };

  return (
    <>
      {ipPop && <UnavailablePop handleUnavailable={handleUnavailable} />}
      <section className="py-1" style={{ background: "#20ff45" }}>
        <div className="container">
          <div className="grid gap-3 grid-cols-12">
            <div className="col-span-12">
              <p
                className="m-0 text-dark text-center"
                onClick={handleUnavailable}
              >
                <b>Sorry, our DEX is unavailable in your location.</b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnnouncementBar;
