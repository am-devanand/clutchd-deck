import S3 from "../components/s3-steps";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white" style={{ minHeight: "calc(100vh - 65px)" }}>
      <S3 />
    </div>
  );
}
