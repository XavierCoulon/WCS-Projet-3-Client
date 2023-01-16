import Image from "next/image";

const getOneVideo = async (id: any) => {
  const res = await fetch(`${process.env.API_URL}/videos/${id}` || "apiurl", {
    credentials: "include",
  });
  const videoJson = await res.json();

  return videoJson;
};

export default async function Page({ params }) {
  const video = await getOneVideo(params.id);
  const changeDate = (dateISO) => {
    const date = new Date(dateISO);
    const jour = date.getDay();
    const mois = date.getMonth();
    const annee = date.getFullYear();
    return `${jour + 1}-${mois + 1}-${annee}`;
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      <div className="bg-primary_bg h-20"> </div>
      <div className="text-primary_font flex">
        <div className="flex flex-col w-1/2 p-4">
          <div className="text-xl pb-3 border-b border-primary_font flex items-center ">
            <Image
              src="/lock_full_logo.svg"
              alt="logo share"
              width="40"
              height="40"
            />
            Content reserved for discovery and Premium pass subscription.
          </div>
          <div className="text-xl py-2 flex justify-between">
            {video.title}{" "}
            <div className="flex">
              <Image
                src="/empty_heart_logo.svg"
                alt="logo share"
                width="40"
                height="40"
              />
              <Image
                src="/share_logo.svg"
                alt="logo share"
                width="40"
                height="40"
              />
            </div>
          </div>
          <div className="py-2 border-b border-primary_font">
            {video.description}{" "}
          </div>
          <div className="py-2">
            INFORMATIONS - published on {changeDate(video.updatedAt)}
          </div>
        </div>
        <div className="w-1/2 p-4">
          <video
            key={video.id}
            src={video.videoUrl}
            controls
            // controls={isAuth === false && video.isPublic === false}
          >
            {" "}
            <track kind="captions" />
          </video>
        </div>
      </div>
    </div>
  );
}
