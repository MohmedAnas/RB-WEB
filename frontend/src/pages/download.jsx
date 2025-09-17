import React from "react";
import { Download as DownloadIcon } from "lucide-react";
import { Link } from "react-router-dom";

const BUSY_SETUP_URL = "/download/BusySetup.exe"; // Assumes 'BusySetup.exe' exists in 'public/download/' directory

const Download = () => (
  <div className="min-h-[75vh] flex flex-col items-center justify-center bg-gray-50 px-4 py-16">
    <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8 text-center border border-gray-100">
      <div className="flex items-center justify-center mb-4 text-orange-600">
        <DownloadIcon size={48} />
      </div>
      <h1 className="text-3xl font-bold mb-2 text-gray-900">
        Download Busy Setup
      </h1>
      <p className="text-gray-600 mb-6">
        Download the official Busy Accounting Software installation package.
        <br />
        After download, run the setup and follow the instructions.
      </p>
      <a
        href={BUSY_SETUP_URL}
        download
        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-orange-500 text-white font-semibold text-lg shadow hover:bg-orange-600 transition-colors"
      >
        <DownloadIcon className="mr-2" size={22} />
        Download Now
      </a>
      <div className="text-sm text-gray-400 mt-4">
        Version: Busy (Latest) &nbsp;|&nbsp; Size: ≈ 200 MB &nbsp;|&nbsp; © Busy Infotech
      </div>
      <p className="text-xs text-gray-400 mt-1">
        Problems or need help?{" "}
        <Link
          to="/contactus"
          className="text-orange-500 underline hover:text-orange-600"
        >
          Contact our support team
        </Link>
      </p>
    </div>
  </div>
);

export default Download;
