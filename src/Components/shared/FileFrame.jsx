import React from "react";
import { MdOutlineFileDownload } from "react-icons/md"; // File download icon
import { FaFilePdf, FaFileWord, FaFileExcel } from "react-icons/fa"; // File type icons (for example, PDF, Word, Excel)
import { useSelector } from "react-redux";
import { currentAccessToken } from "@/redux/features/auth/authSlice";

const FileFrame = ({ files }) => {
  // Function to determine the icon based on file type
  const getFileIcon = (fileName) => {
    if (fileName.endsWith(".pdf")) {
      return <FaFilePdf size={40} className="text-red-600" />;
    }
    if (fileName.endsWith(".docx") || fileName.endsWith(".doc")) {
      return <FaFileWord size={40} className="text-blue-600" />;
    }
    if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls")) {
      return <FaFileExcel size={40} className="text-green-600" />;
    }
    return <FaFilePdf size={40} className="text-gray-600" />; // Default to PDF icon if unknown
  };

  const accessToken = useSelector(currentAccessToken);

  return (
    <div className="container mx-auto text-white">
      <p className="text-center text-4xl font-bold pt-10">Files</p>
      <p className="text-center mt-2">Home/Files</p>

      {/* Files Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-2 md:px-0">
        {files?.length > 0 ? (
          files.map((file, i) => (
            <div
              key={i + 1}
              className="bg-[#242424] p-4 rounded-sm cursor-pointer shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="bg-[#1C1C1C] flex justify-center py-10">
                {/* File Icon */}
                {getFileIcon(file.title)}
              </div>

              {/* File Title */}
              <p className="mt-2 text-[20px] text-center font-semibold">
                {file.title}
              </p>

              {/* Download Button */}
              <a
                href={`${file.url}?token=${accessToken}`}
                target="__blank"
                download
                className="bg-[#22A59A] w-full mt-4 py-2 rounded-sm flex items-center justify-center gap-2 text-white"
              >
                <MdOutlineFileDownload size={20} />
                Download
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-400">
            No files to display.
          </p>
        )}
      </div>
    </div>
  );
};

export default FileFrame;
