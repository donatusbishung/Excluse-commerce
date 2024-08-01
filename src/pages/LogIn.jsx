import GeneralHeader from "../components/GeneralHeader";
import Footer from "../components/Footer";
import signUp from "../assets/images/signup.png";
import LoginForm from "../components/Forms/LoginForm";
function LogIn() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <GeneralHeader />
      </div>
      {/* form section */}
      <div className="flex pt-[100px] flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <img
          src={signUp}
          alt="image for sign up"
          className="px-[10px] lg:px-0"
        />
        <div className="">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LogIn;
