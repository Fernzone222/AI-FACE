import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function UploadBox() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <div {...getRootProps()} className="border-2 border-dashed p-8 rounded-lg">
      <input {...getInputProps()} />
      <p>Dra & släpp dina selfies här, eller klicka för att välja filer</p>
    </div>
  );
}
