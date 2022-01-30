import { Button, Card, Input } from "@mui/material";
import { ContainerLayout } from "../../layouts/ContainerLayout";
import { encode } from "base-64";
import { useState } from "react";
import { useImage } from '../../hooks/images';

export default function Upload() {

  const [fileB64String, setFileB64String] = useState(null)
  const [nameFile, setNameFile] = useState("")
  const [formatFile, setFormatFile] = useState("")
  const [errorFile, setErrorFile] = useState(true)

  const [{ save, error }] = useImage()



  const uploadHandler = (e) => {
    const file = e.target.files;
    if (file.length != 1) return;
    setNameFile(file[0].name)
    setFormatFile(file[0].type)


    const reader = new FileReader();
    reader.onload = () => {
      const b64 = encode(reader.result.toString());
      setFileB64String(b64)
      setErrorFile(false)
    };

    reader.onerror = () => {
      setErrorFile(true)
    }

    reader.readAsBinaryString(file[0]);
  };


  const saveHandler = async () => {
    const data = { format: formatFile, name: nameFile, image_b64: fileB64String }
    await save(data)
    if (!error) alert("saved")
  }

  return (
    <ContainerLayout>
      <div className="flex justify-center">
        <div>
          <Card sx={{ minWidth: 500, maxWidth: 500 }}>
            <div>
              <div className="flex justify-center p-4">
                <h1 className="font-semibold text-2xl">Upload your image</h1>
              </div>

              <div className="flex justify-center pb-4">
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/png"
                    id="contained-button-file"
                    multiple
                    type="file"
                    className="hidden"
                    onChange={uploadHandler}
                  />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
              </div>

              <div className="p-2 flex justify-center">
                {errorFile ? <span>Select file</span> : (
                  <div>
                    <div>
                      <strong>Name file: </strong> <span> {nameFile} </span>
                    </div>

                    <div>
                      <strong>Format: </strong> <span> {formatFile} </span>
                    </div>
                  </div>
                )}
              </div>


              <div className="text-center">
                {error && <span>ERROR</span>}
              </div>

              <div className="p-6">
                <button className="bg-black text-white font-bold w-full h-11 rounded-lg" onClick={saveHandler}>Save</button>
              </div>

            </div>
          </Card>
        </div>
      </div>
    </ContainerLayout>
  );
}
