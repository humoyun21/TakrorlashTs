import "./style.scss";
import { Footer } from "@components";
import { Container } from "@containers";

const index = () => {
  return (
    <>
      <main>
            <section className="pt-[150px]">
                <Container>
                    <div className="w-[600px] mx-auto border rounded-xl p-[30px]">
                        <form>
                            <label className="block mb-[50px] border p-[15px] rounded-xl">
                                <input className=" font-medium w-full h-[30px] outline-none" type="text" placeholder="Enter your name" required/>
                            </label>
                            <label className="block mb-[50px] border p-[15px] rounded-xl">
                                <input className=" font-medium w-full h-[30px] outline-none" type="text" placeholder="Enter your Surname" required/>
                            </label>
                            <label className="block mb-[50px] border p-[15px] rounded-xl">
                                <input className=" font-medium w-full h-[30px] outline-none" type="email" placeholder="Enter your Email" required/>
                            </label>
                            <label className="block mb-[50px] border p-[15px] rounded-xl">
                                <input className=" font-medium w-full h-[30px] outline-none" type="password" placeholder="Enter your Password" required/>
                            </label>
                            <button className="block mx-auto py-[10px] px-[30px] rounded-2xl bg-[#140f29] text-white active:bg-[#32304d]">Submit</button>
                        </form>
                    </div>
                </Container>
            </section>
      </main>
      <Footer/>
    </>
  );
};

export default index;
