import { useEffect } from "react";
import Img from "../assets/img.jpg";
import Logo from "../assets/logo.svg";
import Image1 from "../assets/heroAssets/image1.png";
import Image2 from "../assets/heroAssets/image2.png";
import Image3 from "../assets/heroAssets/image3.png";
import Image4 from "../assets/heroAssets/image4.png";
import Image5 from "../assets/heroAssets/image5.png";
import Image6 from "../assets/heroAssets/image6.png";
import Image7 from "../assets/heroAssets/image7.png";
import Brush from "../assets/icons/brush.svg";
import Clapping from "../assets/icons/clapping.svg";
import Cursor from "../assets/icons/cursor.svg";
import Images from "../assets/icons/image.svg";
import Sparkle from "../assets/icons/sparkle.svg";
import Faq from "../components/Faq";

function Home() {
  useEffect(() => {
    const { hash } = window.location;

    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <div>
      <div className="py-8 md:py-16 h-full">
        <div className="md:max-w-[75] mx-auto text-center md:mt-8">
          <h1 className="text-5xl text-white pb-4 md:text-7xl">
            Collaborative Storytelling
            <br /> Powered by Your Imagination
          </h1>
          <p className="text-xl mx-auto md:max-w-[60%] pb-12">
            Craft Stories Alongside Collective Minds that Transcend the
            Ordinary, Unlocking Worlds of Creativity and Wonder for All to
            Explore and Share.
          </p>
          <button>Start Your Story</button>
        </div>
        <div className="flex gap-4 mt-32 overflow-x-clip">
          <div className="flex flex-col gap-4 -translate-y-20 min-w-fit">
            <img
              src={Image4}
              className="rounded-lg object-contain w-full"
              alt="image4"
            />
            <img
              src={Image5}
              className="rounded-lg object-contain w-full"
              alt="image5"
            />
          </div>
          <img
            src={Image3}
            className="rounded-lg object-contain w-full"
            alt="image3"
          />
          <img
            src={Image1}
            className="rounded-lg object-contain w-full"
            alt="image1"
          />
          <img
            src={Image2}
            className="rounded-lg object-contain w-full"
            alt="image2"
          />
          <div className="flex flex-col gap-4 min-w-fit -translate-y-16">
            <img
              src={Image6}
              className="rounded-lg object-contain w-full"
              alt="image6"
            />
            <img
              src={Image7}
              className="rounded-lg object-contain w-full"
              alt="image7"
            />
          </div>
        </div>
        <div className="px-16 text-center mt-36 mx-auto">
          <h1 className="pb-4">
            The Complete Toolkit for
            <br /> Imaginative Stories
          </h1>
          <p>
            Our platform is designed to empower storytellers and creators like
            you with a rich set of <br /> features that redefine collaborative
            storytelling.
          </p>
          <div className="flex flex-wrap gap-y-24 mt-24 justify-center">
            <div className="text-center max-w-[30%]">
              <div className="toolkit-icon mx-auto">
                <img src={Sparkle} className="h-6" alt="sparkle" />
              </div>
              <p className="text-xl mt-4 mb-1 text-white font-medium">
                AI-Powered Suggestions
              </p>
              <p className="text-center max-w-[75%] mx-auto">
                Get creative inspiration and suggestions from AI algorithms for
                your storytelling.
              </p>
            </div>
            <div className="text-center max-w-[30%]">
              <div className="toolkit-icon mx-auto">
                <img src={Clapping} className="h-6" alt="Clapping" />
              </div>
              <p className="text-xl mt-4 mb-1 text-white font-medium">
                Collaborative Storytelling
              </p>
              <p className="text-center max-w-[75%] mx-auto">
                Seamlessly collaborate with other users to co-create captivating
                narratives.
              </p>
            </div>
            <div className="text-center max-w-[30%]">
              <div className="toolkit-icon mx-auto">
                <img src={Brush} className="h-6" alt="Brush" />
              </div>
              <p className="text-xl mt-4 mb-1 text-white font-medium">
                Artwork Generation
              </p>
              <p className="text-center max-w-[75%] mx-auto">
                Use AI to generate stunning artwork and illustrations to
                complement your stories.
              </p>
            </div>
            <div className="text-center max-w-[30%]">
              <div className="toolkit-icon mx-auto">
                <img src={Images} className="h-6" alt="Images" />
              </div>
              <p className="text-xl mt-4 mb-1 text-white font-medium">
                NFT Story Pages
              </p>
              <p className="text-center max-w-[75%] mx-auto">
                Each story page becomes a unique NFT, allowing creators to
                monetize their content.
              </p>
            </div>
            <div className="text-center max-w-[30%]">
              <div className="toolkit-icon mx-auto">
                <img src={Cursor} className="h-6" alt="cursor" />
              </div>
              <p className="text-xl mt-4 mb-1 text-white font-medium">
                Interactive Storytelling
              </p>
              <p className="text-center max-w-[75%] mx-auto">
                Add interactive elements to your stories, making them engaging
                and immersive for readers.
              </p>
            </div>
          </div>
        </div>
        <div className="px-16 text-center mt-36 mx-auto">
          <h1 className="pb-4">
            Explore Our Range of
            <br /> Visual Art Styles
          </h1>
          <p>
            Immerse yourself in a world of artistic diversity as TaleBlox offers
            a spectrum of <br /> visual styles to complement and elevate your
            storytelling experience.
          </p>
          <div className="grid grid-cols-3 mt-24 gap-x-8 gap-y-4">
            <div className="col-span-1">
              <div className="bg-blue-200 h-[250px] mb-8 overflow-clip rounded-2xl relative">
                <img src={Img} className="object-cover w-full" alt="img" />
                <p className="absolute font-medium left-4 bottom-2">
                  3D Anime Pastel Art
                </p>
              </div>
              <div className="bg-green-200 h-[373px] overflow-clip rounded-2xl relative">
                <img src={Image2} className="object-cover w-full" alt="img" />
                <p className="absolute font-medium left-4 bottom-2">
                  3D Anime Pastel Art
                </p>
              </div>
            </div>
            <div className="col-span-1 row-span-2 bg-red-200 h-[655px] overflow-clip rounded-2xl relative">
              <img
                src={Image2}
                className="object-cover w-full h-full"
                alt="img"
              />
              <p className="absolute font-medium left-4 bottom-2">
                3D Anime Pastel Art
              </p>
            </div>
            <div className="col-span-1">
              <div className="bg-yellow-200 h-[373px] mb-8 overflow-clip rounded-2xl relative">
                <img src={Image2} className="object-cover w-full" alt="img" />
                <p className="absolute font-medium left-4 bottom-2">
                  3D Anime Pastel Art
                </p>
              </div>
              <div className="bg-purple-200 h-[250px] overflow-clip rounded-2xl relative">
                <img src={Image2} className="object-cover w-full" alt="img" />
                <p className="absolute font-medium left-4 bottom-2">
                  3D Anime Pastel Art
                </p>
              </div>
            </div>
            <div className="col-span-2 bg-indigo-200 h-[373px] overflow-clip rounded-2xl relative">
              <img src={Image2} className="object-cover w-full" alt="img" />
              <p className="absolute font-medium left-4 bottom-2">
                3D Anime Pastel Art
              </p>
            </div>
            <div className="col-span-1 bg-indigo-200 h-[373px] overflow-clip rounded-2xl relative">
              <img src={Image2} className="object-cover w-full" alt="img" />
              <p className="absolute font-medium left-4 bottom-2">
                3D Anime Pastel Art
              </p>
            </div>
          </div>
        </div>
        <div className="px-16 text-center mt-36 mx-auto">
          <h1 className="pb-4">
            Crafting Tales Made
            <br /> Easier than Ever
          </h1>
          <p>
            We make the process of transforming your imagination into <br />
            captivating stories seamless
          </p>
          <div className="mt-12 flex gap-12 flex-col max-w-[70%] mx-auto items-center justify-center">
            <div className="steps flex items-center h-full justify-center ">
              <div className="max-w-[60%] py-24">
                <div className="toolkit-icon text-3xl px-3 py-1 text-white mx-auto font-medium">
                  1
                </div>
                <p className="text-3xl my-3">Connect Your Wallet</p>
                <p>
                  Begin your creative journey by securely connecting your
                  digital wallet to TaleBlox. This step is essential for
                  unlocking the NFT features and monetizing your storytelling.
                </p>
              </div>
            </div>
            <div className="steps flex items-center h-full justify-center ">
              <div className="max-w-[60%] py-24">
                <div className="toolkit-icon text-3xl px-3 py-1 text-white mx-auto font-medium">
                  2
                </div>
                <p className="text-3xl my-3">Enter Your Prompt</p>
                <p>
                  Create a new story prompt or continue an existing one. With
                  the power of AI, your ideas come to life as the platform
                  generates content to weave into your narrative.
                </p>
              </div>
            </div>
            <div className="steps flex items-center h-full justify-center ">
              <div className="max-w-[60%] py-24">
                <div className="toolkit-icon text-3xl px-3 py-1 text-white mx-auto font-medium">
                  3
                </div>
                <p className="text-3xl my-3">Watch The Magic Happen</p>
                <p>
                  Sit back and watch the magic unfold. Collaborate with fellow
                  storytellers, harness the capabilities of AI, and witness your
                  tales transform into captivating narratives with stunning
                  artwork.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-16 text-center mt-36 mx-auto">
          <h1 className="pb-4">
            Everything You Need to <br /> Know About Taleblox
          </h1>
          <p>
            Explore our FAQ section to find answers to some common questions
            about TaleBlox
          </p>
          <Faq />
        </div>
        <div className="max-w-[65%] mx-auto steps-inner">
          <div className="py-32 steps grid-bg flex flex-col px-16 text-center mt-48 mb-24 mx-auto items-center h-full justify-center">
            <img src={Logo} className="h-14 mx-auto" alt="logo" />
            <p className="text-5xl mt-6">Ready to Craft Your Story?</p>
            <p className="my-4">
              Immerse Yourself in a World of Boundless Creativity and
              Collaborative Storytelling.
            </p>
            <button>Let's Begin</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
