import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

// css
import styles from "./migrationPop.module.scss";

//helpers
import { useWallet } from "hooks/useWallet";
import Web3Intraction from "utils/web3Intraction";

const MigrationPop = ({ migration, setMigration, balance, getDetails }) => {
  const wallet = useWallet();
  const { currentNetwork } = useSelector((state) => state.dashboard);
  const [loading, setLoading] = useState(false);
  const [progressBar, setProgressBar] = useState(0);
  const [status, setStatus] = useState("Pending");

  const handleMigration = async (e) => {
    try {
      e.preventDefault();

      const web3 = new Web3Intraction(currentNetwork, wallet.provider);
      setLoading(true);

      if (balance <= 0) return;

      setProgressBar(20)
      setStatus("Waiting for contract approval!")
      let amountValue = await web3.checkAllowance(
        balance,
        "0x47c61F29B1458d234409Ebbe4B6a70F3b16528EF",
        web3.contractDetails.migrationAddress
      );

      setProgressBar(45)
      setStatus("Fund Transferring to your wallet...")

      await web3.unStakeFromMigration(amountValue, true);
      setProgressBar(75)
      setStatus("Staking in new contract...")
      await web3.tokenStake(balance);
      setProgressBar(100)
      toast.success("Amount Staked");
      getDetails();

      setMigration(false)
      setLoading(false);
    } catch (error) {
      console.log(error, "<====error");
      setLoading(false);
      toast.error(error);
    }
  };

  return (
    <>
      <div
        className={`${styles.StakePop} fixed inset-0 flex items-center justify-center cstmModal`}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className={`${styles.modalDialog} modalDialog p-2 mx-auto rounded-lg z-10 relative`}
        >
          <div className="top flex items-center justify-center gap-2 pt-2 px-3">
            <div className="left flex items-center justify-center gap-2 p-3">
              <p className="m-0   text-white font-bold text-lg">Migration</p>
            </div>

            <button
              onClick={(e) => setMigration(!migration)}
            type="button"
              className="m-0 border-0 p-0 transparent    text-gray-400 absolute top-2 right-1"
              disabled={loading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M20.425 2.5H9.5875C5.35 2.5 2.5 5.475 2.5 9.9V20.1125C2.5 24.525 5.35 27.5 9.5875 27.5H20.425C24.6625 27.5 27.5 24.525 27.5 20.1125V9.9C27.5 5.475 24.6625 2.5 20.425 2.5Z"
                  fill="#00FF00"
                />
                <path
                  d="M18.7697 17.2131L16.5459 14.9906L18.7684 12.7681C19.1959 12.3419 19.1959 11.6481 18.7684 11.2219C18.3409 10.7919 17.6497 10.7931 17.2222 11.2206L14.9984 13.4431L12.7747 11.2181C12.3472 10.7906 11.6547 10.7931 11.2272 11.2181C10.8009 11.6456 10.8009 12.3394 11.2272 12.7656L13.4522 14.9906L11.2322 17.2094C10.8047 17.6369 10.8047 18.3306 11.2322 18.7556C11.4459 18.9706 11.7247 19.0769 12.0047 19.0769C12.2859 19.0769 12.5647 18.9706 12.7784 18.7569L14.9984 16.5369L17.2234 18.7606C17.4372 18.9744 17.7159 19.0806 17.9959 19.0806C18.2759 19.0806 18.5559 18.9731 18.7697 18.7606C19.1972 18.3331 19.1972 17.6406 18.7697 17.2131Z"
                  fill="#00FF00"
                />
              </svg>
            </button>
          </div>
          <div className="modalBody py-2">
            <div className="inner p-3">
              <div className="grid gap-3 grid-cols-12">
                <div className="col-span-12 text-center">
                  <p className="m-0 text-white">
                    {" "}
                    <b>Balance: {balance} sGOB</b>
                  </p>
                </div>
                <div className="col-span-12">
                  <div className="flex items-center gap-2">
                    <div
                      className={`${styles.progressWrp} w-full progressWrp relative rounded-pill p-2  rounded-pill`}
                      style={{ background: "#000" }}
                    >
                      <div
                        className="absolute h-full w-full rounded-pill top-0 left-0"
                        style={{
                          background: "#00FF00",
                          width: `${progressBar}%`,
                        }}
                      ></div>
                    </div>
                    <p className="m-0 text-white">{progressBar}%</p>
                  </div>
                  <ul className="list-none pl-0 mb-0 flex items-center justify-end gap-2">
                    <li className="text-white font-semibold">Status: </li>
                    <li className="themeClr font-semibold"> {status}</li>
                  </ul>
                </div>
                <div className="col-span-12">
                  <div className="btnWrpper mt-4">
                    <button
                      type="button"
                      onClick={handleMigration}
                      disabled={loading || !balance}
                      className=" commonBtn    mx-auto flex items-center justify-center btn w-full"
                    >
                      {loading ? (
                        <div className="spinner">
                          <span className=""> Please wait...</span>
                        </div>
                      ) : (
                        "Migrate"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MigrationPop;
