import Form from "@/components/Form";
import WaveSVG from "@/components/WaveSVG";

export default function Home() {

  return (
    <>
      <div className="bg-primary px-12 pt-24 pb-10 flex justify-center items-center flex-col gap-12">
        <h1 className="text-5xl text-secondary font-extralight box-border">Smol URL</h1>
        <Form />
      </div>
      <WaveSVG className="fill-primary" />
    </>
  );
}
