import { useDropzone } from "react-dropzone";

function Dropzone(props: any) {
  const { getRootProps, getInputProps } = useDropzone();

  return (
    <div className="bg-red-400 p-20 text-center w-100" {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
}

export default Dropzone;
