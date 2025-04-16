import React, { useEffect, useState } from 'react';
import { InboxOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { storage } from '@/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { setLoader, setMainFile } from '@/redux/quote';

const { Dragger } = Upload;

const QuoteDesignArtwork = () => {
  
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch()

  
  const { loader, customerDetails, mainFile, quantity, selectedData } = useSelector((state) => state.quote);

  const currentYear = new Date().getFullYear();
  const currentMonthName = new Date().toLocaleString('default', { month: 'long' });

  const handleFileUpload = (file) => {
    return new Promise((resolve, reject) => {
      dispatch(setLoader(true));

      const storageRef = ref(
        storage,
        `print247-quote/${currentMonthName}_${currentYear}/${file.name}_${uuidv4()}`
      );

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progressPercentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressPercentage);
        },
        (error) => {
          dispatch(setLoader(false));
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              const updatedFiles = [...mainFile, { url: downloadURL, name: file.name }];
              dispatch(setMainFile(updatedFiles));

              
              dispatch(setLoader(false));
              setProgress(100);
              resolve(downloadURL);
            })
            .catch((error) => {
              dispatch(setLoader(false));
              reject(error);
            });
        }
      );
    });
  };

  const customRequest = ({ file, onSuccess, onError }) => {
    handleFileUpload(file)
      .then(() => onSuccess())
      .catch(onError);
  };

  const handleRemove = (file) => {
    const updatedFileList = mainFile.filter((item) => item.name !== file.name);
    dispatch(setMainFile(updatedFileList));
  };

  const uploadProps = {
    customRequest,
    onChange(info) {
      if (info.file.status !== 'uploading') {
        // console.log(info.file, info.fileList);
      }
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => `${percent.toFixed(2)}%`,
    },
    onRemove: handleRemove,
    disabled: loader,
    accept: '.ai, .pdf, .eps, .zip',
  };

  return (
    <div className="quote_design_artwork">
      <Dragger {...uploadProps}>
        <div className="artwork_data">
          <p className="ant_upload_plus_icon">
            <PlusOutlined style={{ color: 'white' }} />
          </p>
          <div>
            <p className="ant_upload_text">Upload your artwork:</p>
            <p className="ant_upload_format">(AI, PDF, EPS, or ZIP)</p>
          </div>
        </div>
      </Dragger>
    </div>
  );
};

export default QuoteDesignArtwork;
