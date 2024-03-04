import CaretDown from "../assets/caret-down.svg";
import CaretLeft from "../assets/icons/caret-left.svg";
import CaretDoubleLeft from "../assets/icons/caret-double-left.svg";
import BookMockup from "../assets/Book-mockup.png";
import Img from "../assets/img.jpg";

export default function Story() {
  return (
    <div className="p-24 pt-0">
      <div className="flex items-center mb-4">
        <div className="rotate-90 pb-0 pr-0.5 pt-3">
          <img src={CaretDown} alt="caret" />
        </div>
        <p>Back to All Stories</p>
      </div>
      <div className="story relative">
        <img src={BookMockup} className="h-[856px]" alt="Loading..." />
        <p className="absolute text-[21px] top-16 left-12 text-black">01</p>
        <p className="absolute text-[21px] top-16 left-[225px] text-black">
          Lost In the Wild
        </p>
        <p className="absolute top-28 text-black body-text">
          Aubree is a 6-year-old blonde girl with sparkling blue eyes. She has
          long, flowing hair that reaches down to her waist, which she often
          ties up in a high ponytail. Aubree has rosy cheeks and a bright smile
          that can light up a room. She is petite and has a curious and
          adventurous spirit. <br />
          <br /> Aubree grew up in a small town surrounded by lush green fields
          and towering mountains. She has always been fascinated by stories of
          her ancestors and their adventures in the Amazon forests. Her
          grandparents used to tell her tales of a long-lost medallion that was
          said to possess magical powers. Aubree's heart was filled with a
          burning desire to find this medallion and uncover the secrets of her
          family's past. <br />
          <br /> One sunny morning, Aubree woke up with excitement bubbling
          inside her. Today was the day she had been waiting for - the day she
          would embark on her journey to the Amazon forests. She had spent weeks
          preparing for this adventure, studying maps and learning about the
          flora and fauna of the dense jungle. With her backpack filled with
          supplies and a determined look on her face, Aubree set off on her
          quest. <br />
          <br /> As she ventured deeper into the forest, Aubree marveled at the
          towering trees and the symphony of sounds that surrounded her. She
          could hear the chirping of birds, the rustling of leaves, and the
          distant roar of a waterfall. The air was thick with humidity, but
          Aubree didn't mind. She was on a mission. <br /> Days turned into
          weeks, and Aubree's determination never wavered. She encountered
          various challenges along the way - treacherous terrains, wild animals,
          and unpredictable weather. But Aubree's spirit remained unbroken. She
          knew that her ancestors were guiding her, leading her closer to the
          medallion.
        </p>
        <div className="absolute top-16 h-[720px] right-12 story-image">
          <img src={Img} className="object-cover h-full w-full" alt="Img" />
        </div>
      </div>
      <div className="mt-8 flex gap-8 justify-center items-center">
        <div className="toolkit-icon rounded-full">
          <img src={CaretDoubleLeft} alt="caret" />
        </div>
        <div className="toolkit-icon rounded-full rotate-90">
          <img src={CaretLeft} alt="caret" />
        </div>
        <button disabled>Continue Story</button>
        <div className="rounded-full toolkit-icon rotate-[270deg]">
          <img src={CaretLeft} alt="caret" />
        </div>
        <div className="toolkit-icon rounded-full rotate-180">
          <img src={CaretDoubleLeft} alt="caret" />
        </div>
      </div>
    </div>
  );
}
