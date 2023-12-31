import LearnButton from "@/components/LearnButton";
import Navbar from "@/components/Navbar";

export default function Learn() {
  const bg = "url('/learnbg.png')";

  return (
    <div className="w-full h-full py-20 max-w-md text-center relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: bg,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          // transform: "rotate(-12.49deg)",
          opacity: 0.1,
          zIndex: -1, // To place the pseudo-element behind the content
        }}
      />
      <h1
        className="text-4xl mt-10 font-bold font-sen leading-10 "
        style={{ color: "#262626" }}
      >
        Fast Fashion
      </h1>
      <div className="flex justify-center items-center h-full">
        <LearnButton />
      </div>
      <Navbar />
    </div>
  );
}
