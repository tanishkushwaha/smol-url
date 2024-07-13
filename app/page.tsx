import Form from "@/components/Form";
import WaveSVG from "@/components/WaveSVG";

export default function Home() {

  return (
    <>
      <div className="px-12 pt-24 pb-10 flex justify-center items-center flex-col gap-12">
        <h1 className="text-7xl text-black box-border">smol url</h1>
        <Form />
      </div>
      {/* <WaveSVG className="fill-primary" /> */}
    </>
  );
}
