function Create() {
  return (
    <div>
      <div className="max-w-[60%] rounded-2xl mx-auto px-10 py-12 bg-purple border mb-24 border-white/40">
        <h1 className="text-3xl pb-1">Create Story</h1>
        <p className="text-xl">Start creating your story in simple steps</p>
        <div className="py-6 m-auto">
          <label>Story Title</label>
          <input
            type="text"
            placeholder="Aaron the Tiger"
            className="border-white/40 mb-6 border py-3 bg-transparent rounded-[10px] px-4 w-full focus-visible:outline-0"
          />
          <label>Prompt</label>
          <input
            type="text"
            placeholder="A tiger that carries people to space on a flying boat"
          />
          <label>Image AI Model</label>
          <div className="select">
            <select>
              <option value="1">SDXL</option>
              <option value="0">DreamShaper</option>
              <option value="2">Anime Pastel</option>
              <option value="3">3D Animation</option>
              <option value="4">RPG</option>
              <option value="5">Pixel Art</option>
              <option value="6">Deliberate</option>
            </select>
          </div>
          <label>Image AI Style</label>
          <div className="select">
            <select className="self-stretch flex-1 rounded-lg cursor-pointer">
              <option value="0">Regular</option>
              <option value="1">Colored Sketch</option>
              <option value="2">B&amp;W Sketch</option>
              <option value="3">Anime</option>
              <option value="4">3D Render</option>
              <option value="5">Children's Book Illustration</option>
              <option value="6">Illustration</option>
              <option value="7">Photography</option>
              <option value="8">Retro</option>
              <option value="9">Realistic</option>
              <option value="10">Sci-fi</option>
            </select>
          </div>
          <button className="w-fit">Generate Story</button>
        </div>
      </div>
    </div>
  );
}

export default Create;
