import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    IconShoppingCart, // Corrected import
    IconCurrencyRupee,
    IconCloudUpload,
    IconMessage,
    IconGauge,
    IconShield,
    IconFileAnalytics,
    IconFileInvoice,
    IconDeviceMobile,
    IconBell,
    IconTransfer,
    IconCloud,
    IconSignature,
    IconChartBar,
    IconQuestionMark,
    IconChevronDown,
    IconApps,
    IconCheck // Added Check icon for consistency
} from '@tabler/icons-react';

// Import all the new MUI icons here
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import StoreIcon from '@mui/icons-material/Store';
import ScienceIcon from '@mui/icons-material/Science';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import SchoolIcon from '@mui/icons-material/School';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ComputerIcon from '@mui/icons-material/Computer';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import ArticleIcon from '@mui/icons-material/Article';
import FlightIcon from '@mui/icons-material/Flight';
import ChairIcon from '@mui/icons-material/Chair';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DiamondIcon from '@mui/icons-material/Diamond';

const industriesData = [
  { name: "Auto Parts", muiIcon: <DirectionsCarIcon />, page: '/autoparts'},
  { name: "Retail", muiIcon: <StoreIcon />, page: '/retail'},
  { name: "Chemical", muiIcon: <ScienceIcon />, page: '/chemical'},
  { name: "FMCG", muiIcon: <IconShoppingCart />, page: '/fmcg'}, // Corrected component
  { name: "Food & Beverage", muiIcon: <RestaurantIcon />, page: '/fb'}, 
  { name: "Computer Hardware", muiIcon: <ComputerIcon />, page: '/computerhardware'},
  { name: "Book Publishing", muiIcon: <AutoStoriesIcon />, page: '/bookpublishing'},
  { name: "Electrical Goods", muiIcon: <ElectricalServicesIcon />, page: '/electricalgoods'},
  { name: "Paper", muiIcon: <ArticleIcon />, page: '/papermill'},
  { name: "Travel", muiIcon: <FlightIcon />, page: '/travel'},
  { name: "Furniture", muiIcon: <ChairIcon />, page: '/furniture'},
  { name: "Pharma", muiIcon: <LocalPharmacyIcon />, page: '/pharmacy'},
  { name: "Paint", muiIcon: <ColorLensIcon />, page: '/paint'},
  { name: "Mobile & Electronics", muiIcon: <PhoneAndroidIcon />, page: '/mobile'},
  { name: "Garments", muiIcon: <CheckroomIcon />, page: '/garments'},
  { name: "Gems & Jewellery", muiIcon: <DiamondIcon />, page: '/jewellery'},
  { name: "Agriculture", muiIcon: <AgricultureIcon />, page: '/agriculture'},
  { name: "Stationery", muiIcon: <SchoolIcon />, page: '/stationery'}
];

const SupportedIndustries = () => {
    return (
        <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 pb-2 inline-block border-orange-500">Supported Industries</h2>
            <p className="text-lg text-gray-700 mb-8">
                Our tailored solutions are trusted by a wide range of businesses.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-12">
                {industriesData.map((industry, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-4 rounded-xl cursor-pointer group"
                    >
                        <Link to={industry.page} className="flex flex-col items-center w-full">
                            <div className="p-4 bg-gray-100 rounded-full mb-3 shadow-md">
                                {React.cloneElement(industry.muiIcon, {
                                    sx: { fontSize: 48 },
                                    className: "text-blue-500 group-hover:text-red-500 transition-colors"
                                })}
                            </div>
                            <span className="text-sm font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors">{industry.name}</span>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SupportedIndustries;
