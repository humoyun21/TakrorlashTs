import "./style.scss";
import { Footer } from "@components";
import { Container } from "@containers";

const index = () => {
  return (
    <>
      <main>
        <section className="pt-[150px]">
          <Container>
            <div className="flex items-center justify-between">
              <div className="w-[1000px]">
                <h1 className="text-[50px] font-bold  w-[750px] mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </h1>
                <p className="text-[18px] font-medium mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit corrupti, repellendus officiis eligendi doloremque
                  illo sunt rerum hic aliquam quo pariatur tenetur cum corporis
                  deleniti vel dolorum maiores adipisci consequuntur delectus
                  saepe doloribus mollitia officia ex? Illum minus molestias
                  quia quisquam nulla nihil maxime ab delectus at voluptas
                  numquam, totam blanditiis in, ullam explicabo libero amet!
                  Unde sed impedit qui eligendi debitis nihil repudiandae
                  asperiores minima saepe, tempore et laboriosam!
                </p>
                <button className="py-[10px] px-[20px] bg-black text-white rounded-[12px] active:bg-[#3d3d3d]">
                  Learn more
                </button>
              </div>
              <div className="w-[400px]">
                <img src="https://picsum.photos/id/123/400/400" alt="img" />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default index;
