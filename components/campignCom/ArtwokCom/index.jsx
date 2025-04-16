import React, { useEffect, useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "@/firebase";
import { useSelector } from "react-redux";
import { Upload } from "antd";
import { Spinner } from "react-bootstrap";

const ArtworkCom = ({ mainFile, setMainFile, loader, setLoader }) => {
  const { viewDieline } = useSelector((state) => state.cart);
  const [uploadingFileId, setUploadingFileId] = useState(null);
  const fileInputRef = useRef(null);
  const artwork = viewDieline?.cart_data?.artwork
    ? JSON.parse(viewDieline?.cart_data?.artwork)
    : [];

  useEffect(() => {
    if (viewDieline) {
      // setMainFile(artwork)
    }
  }, [viewDieline]);

  let newDate = new Date();
  let year = newDate.getFullYear();
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthAlphabet = monthName[newDate.getMonth()];

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const id = mainFile?.length + 1;
      const id2 = mainFile?.length;
      const data = [...mainFile, { id: id, name: file.name, url: "" }];
      setMainFile((prev) => [...prev, { id: id, name: file.name, url: "" }]);
      setUploadingFileId(id);
      return new Promise((resolve, reject) => {
        setLoader(true);

        const storageRef = ref(
          storage,
          `artwork/${monthAlphabet}_${year}/${file.name + v4() + file.name}`
        );

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progressPercentage =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            // console.error("Error during upload:", error);
            setLoader(false);
            setUploadingFileId(null);
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                const filtered = data.filter((item) => item.id == id);
                const filtered2 = data.filter((item) => item.id !== id);
                const updated = [
                  ...filtered2,
                  { ...filtered?.[0], url: downloadURL },
                ];
                setMainFile(updated);
                setLoader(false);
                setUploadingFileId(null);
                resolve(downloadURL);
              })
              .catch((error) => {
                // console.error("Error getting download URL:", error);
                setLoader(false);
                setUploadingFileId(null);
                reject(error);
              });
          }
        );
        window.uploadTask = uploadTask;
      });
    }
  };


  const customRequest = ({ file, onSuccess, onError }) => {
    handleFileUpload(file)
      .then(() => onSuccess())
      .catch((error) => {
        onError(error);
      });
  };

  const handleRemove = (file) => {
    // Filter out the file to be removed from the fileList
    const updatedFileList = mainFile?.filter((item) => item.name !== file.name);
    setMainFile(updatedFileList);
  };

  const handleImageClick = () => {
    // if (!loader) {
    fileInputRef.current.click();
    // }
  };
  return (
    <div>
      {mainFile?.length === 0 && (
        <div className="upload">
          <label
            className="uploadLabel"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <input
                onChange={handleFileUpload}
                disabled={loader}
                accept=".ai, .pdf, .eps, .zip"
                type="file"
                className="uploadInput"
              />
              Upload Design{" "}
              <span style={{ fontSize: "10px", marginLeft: "10px" }}>
                {" "}
                (AI, PDF, EPS or ZIP)
              </span>
            </div>
            <div
              style={{ display: "flex", justifyContent: "end", width: "full" }}
            >
              <img src="/image/Icon feather-upload.png" alt="upload icon" />
            </div>
          </label>
        </div>
      )}
      <div className="mainUploadingFile">
        <div className="grid_view">
          {mainFile?.map((data, i) => {
            return (
              <div key={i} className="uploadingFile">
                <div className="icon">
                  {uploadingFileId === data.id && !data.url ? (
                    <div
                      style={{ display: "flex", justifyContent: "center" }}
                      className="loading-overlay"
                    >
                      <Spinner tip="Uploading..." />
                    </div>
                  ) : (
                    <img
                      src="/image/file-file-type-svgrepo-com (1).svg"
                      alt="file icon"
                    />
                  )}
                  <div
                    className={`${
                      uploadingFileId === data.id ? "previewText" : "addText"
                    }`}
                  >
                    <p>{uploadingFileId === data.id ? "Preview" : "Added"}</p>
                  </div>
                </div>

                <div className="main-hover-effect">
                  <div
                    className={`${
                      uploadingFileId === data.id ? "" : "hover-effect"
                    }`}
                  >
                    <p className="fileName">
                      {data?.name?.length > 15
                        ? data?.name?.slice(0, 15)
                        : data?.name}
                    </p>
                  <div className="del_img_div">
                    <img
                     onClick={() => handleRemove(data)}
                      className="image_del"
                      src="/image/delete _ic.png"
                      alt="delete icon"
                    />
                  </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {mainFile?.length > 0 && (
          <div
            className="upload_div"
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <div>
              <div style={{ fontSize: "12px" }}>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="uploadInput"
                  style={{ fontSize: "14px" }}
                  accept=".ai, .pdf, .eps, .zip"
                  disabled={loader}
                />
                Upload Design{" "}
              </div>
              <span style={{ fontSize: "10px" }}> (AI, PDF, EPS or ZIP)</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "end",
                width: "full",
                backgroundColor: "#E7E7E7",
                padding: "10px",
                border: "0.5px solid #707070",
                borderRadius: "100%",
                
              }}
              onClick={handleImageClick}
              className=""
            >
              <img src="/image/Icon feather-upload.png" alt="upload icon" />
            </div>
          </div>
        )}
      </div>
      {/* {loader && <div style={{display:"flex" , justifyContent:"center"}} className="loading-overlay"><Spinner tip="Uploading..." /></div>} */}
    </div>
  );
};

export default ArtworkCom;
