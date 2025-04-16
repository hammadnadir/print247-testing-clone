import React, { useEffect, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { app, storage } from "@/firebase";
import { useSelector } from 'react-redux';

const ProductArtwork = ({ mainFile, setMainFile, loader, setLoader }) => {

    const [fileData, setFileData] = useState({ name: '', type: '' });
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);

    const { viewDieline } = useSelector((state) => state.cart);

    const artwork = viewDieline?.cart_data?.artwork ? JSON.parse(viewDieline?.cart_data?.artwork) : []

    const data = artwork?.map((item, i) => ({
        uid: i,
        name: item.name,
        status: 'done',
        url: item.url,
        thumbUrl: item.url,
    }));

    useEffect(() => {
        if (viewDieline) {
            setMainFile(artwork)
        }
    }, [viewDieline])

    const [fileList, setFileList] = useState(data);

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


    const handleFileUpload = (file) => {
        return new Promise((resolve, reject) => {
            setFileData({ name: file.name.split(".")[0], type: file.name.split(".")[1] });
            setFile(file);
            setLoader(true);

            const storageRef = ref(
                storage,
                `artwork/${monthAlphabet}_${year}/${file.name + v4() + file.name}`
            );

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progressPercentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progressPercentage);
                },
                (error) => {
                    // console.error("Error during upload:", error);
                    setLoader(false);
                    reject(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL) => {
                            setProgress(100);
                            const data = mainFile ? [...mainFile, { url: downloadURL, name: file?.name }] : [{ url: downloadURL, name: file?.name }]
                            setMainFile(data);
                            setLoader(false);
                            resolve(downloadURL);
                        })
                        .catch((error) => {
                            // console.error("Error getting download URL:", error);
                            setLoader(false);
                            reject(error);
                        });
                }
            );
            window.uploadTask = uploadTask;
        });
    };

    const customRequest = ({ file, onSuccess, onError }) => {
        handleFileUpload(file)
            .then(() => onSuccess())
            .catch((error) => {
                onError(error);
            });
    };

    const props = {
        customRequest,
        onChange(info) {
            if (info.file.status !== 'uploading') {
            }
        },
        progress: {
            strokeColor: {
                '0%': '#108ee9',
                '100%': '#87d068',
            },
            strokeWidth: 3,
            format: (percent) => percent && `100%`,
        },
    };

    const handleRemove = (file) => {
        // Filter out the file to be removed from the fileList
        const updatedFileList = mainFile?.filter(item => item.name !== file.name);
        setMainFile(updatedFileList);
    };

    return (
        <>
            <div className='product_page_artwork'>
                <Upload {...props}
                    onRemove={handleRemove}
                    listType="picture"
                    defaultFileList={fileList}
                    disabled={loader}
                    accept=".ai, .pdf, .eps, .zip">

                    {/* <Button style={{backgroundColor: "#00A1ED", color: "white", borderRadius: "10px", width: "121px", height: "36px"}} icon={<UploadOutlined />}>Upload</Button> */}

                    <div style={{paddingLeft: "10px",cursor: "pointer", border: "1px solid #707070", backgroundColor: "transparent", color: "black", borderRadius: "10px", width: "100%", height: "63px", display: "flex", alignItems: "center" }}>
                        {/* <UploadOutlined /> */}
                        <img src="/icons/artwork_icon.svg" alt="artwork icon" />
                        <div>
                            <Button style={{ backgroundColor: "transparent", color: "black", width: "100%", border: "none" }}>Upload Design</Button>
                            <span style={{ marginLeft: "15px", fontSize: "13px", pointerEvents: "none", cursor: "initial" }} className="formats_span">(AI, PDF, EPS or ZIP)</span>
                        </div>
                    </div>
                </Upload>
            </div>
        </>
    )
}

export default ProductArtwork;