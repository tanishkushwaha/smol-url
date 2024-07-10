import Form from "@/components/Form";
import WaveSVG from "@/components/WaveSVG";

export default function Home() {

  return (
    <>
      <div className="bg-primary px-12 flex justify-end items-center flex-col gap-12 box-border">
        <h1 className="mt-12 text-5xl text-secondary font-extralight box-border">Smol URL</h1>
        <Form />
      </div>
      <WaveSVG className="fill-primary" />
    </>
  );
}
