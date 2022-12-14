import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducers/modalSlice";
import "./otpVerifiedSuccess.css";

const OtpVerifiedSuccess = () => {
  const resRegDetails = useSelector((state: any) => state.regDetails);
  const dispatch = useDispatch();
  console.log(resRegDetails.data);

  return (
    <>
      <div className="otpVerifiedSuccessContainer">
        <div className="signUpClose">
          <div>
            <img
              src={require("../../assets/close_button.png")}
              alt=""
              onClick={() => dispatch(closeModal())}
            />
          </div>
        </div>
        <div className="otpSuccessContent">
          <div className="otpSuccessImage">
            <img
              src={require("../../assets/icn_register_success.png")}
              alt=""
              className="registerSuccess"
            />
          </div>
          <div className="registerSuccessText">
            <div className="successWelcomeText">{resRegDetails?.data.data}</div>
            <div className="successEmailText">
              We’ve sent you an email on abdulla.mohammad for verification.
            </div>
          </div>
          <div className="successBrowserButton">
            <input
              type="submit"
              value="Browse to start ordering"
              className="successBrowserText"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpVerifiedSuccess;
