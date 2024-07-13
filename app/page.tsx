import Form from "@/components/Form";

export default function Home() {

  return (
    <>
      <div className="px-12 pt-24 pb-10 flex justify-center items-center flex-col gap-12">
        <h1 className="text-7xl text-black box-border">SmolURL</h1>
        <Form />
      </div>
    </>
  );
}
