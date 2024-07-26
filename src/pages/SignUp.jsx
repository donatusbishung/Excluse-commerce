import TopHeader from "../components/TopHeader";
import GeneralHeader from "../components/GeneralHeader";
import Footer from "../components/Footer";
import signUp from "../assets/images/signup.png";
import SignUpForm from "../components/Forms/SignUpForm";

function SignUp() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <TopHeader />
        <GeneralHeader />
      </div>
      {/* form section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        <img
          src={signUp}
          alt="image for sign up"
          className="px-[10px] lg:px-0"
        />
        <div className="">
          <SignUpForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
