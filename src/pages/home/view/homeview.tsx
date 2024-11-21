import Aside from "../component/tags&authors/tags-authors";
import Cards from "../component/card/cards";
import AvatarComp from "../component/avatar";

const handleAvatarSelect = (avatarSvg: string) => {
  console.log("Selected Avatar:", avatarSvg);
};

const Homeview = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl gap-4 px-8 pt-7">
      <div className="basis-2/3">
        <Cards />
      </div>
      <div className="basis-1/3 pl-2">
        <Aside />
        <AvatarComp onAvatarSelect={handleAvatarSelect} />
      </div>
    </div>
  );
};

export default Homeview;
