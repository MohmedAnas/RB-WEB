import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconFilter, IconSortAscending, IconSortDescending, IconCheck, IconX, IconArrowDown } from '@tabler/icons-react';
import toast, { Toaster } from 'react-hot-toast';

const employeeList = ["Employee 1", "Employee 2", "Employee 3", "Employee 4"];
const dispositionOptions = ["Dropped - Price", "Dropped - Requirement Unmatched", "Dropped - Duplicate", "Dropped - Other"];
const statusOptions = ["Pending", "In Progress", "Completed", "Schedule", "Dropped"];
const enquiryTypeOptions = ["Query", "Demo", "Renewal"];
const dateOptions = ["Today", "Last Month", "Last 6 Months", "Last Year", "Custom"];
const API_URL = import.meta.env.VITE_API_URL;

const addDays = (date, days) => {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
};

const formatDate = d => (d ? new Date(d).toISOString().slice(0, 10) : '');

const InquiryUpdateForm = ({
  inquiry,
  onUpdate,
  statusOptions,
  dispositionOptions,
  employeeList,
  getStatusStyle,
  status,
  onStatusChange,
}) => {
  const [disposition, setDisposition] = useState(inquiry.disposition || "");
  const [assignedTo, setAssignedTo] = useState(inquiry.assignedTo || "");

  const handleSubmit = () => {
    const updatedData = {
      status,
      disposition,
      assignedTo,
    };
    if (status === "Completed") {
      updatedData.resolvedAt = new Date();
    } else {
      updatedData.resolvedAt = null;
    }
    onUpdate(updatedData);
  };

  return (
    <>
      <div className="bg-gray-50/80 rounded-xl p-5 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">Current Status:</span>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusStyle(status)}`}>{status}</span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Update Status</label>
          <select
            value={status}
            onChange={e => onStatusChange(e.target.value)}
            className="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 text-gray-800 p-3 bg-white"
          >
            {statusOptions.map((option, i) => (
              <option key={i} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Disposition</label>
          <select
            id="disposition"
            value={disposition}
            onChange={e => setDisposition(e.target.value)}
            disabled={status !== "Dropped"}
            className={`w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 text-gray-800 p-3 ${
              status !== "Dropped" ? "bg-gray-200 cursor-not-allowed" : "bg-white"
            }`}
          >
            <option value="">Select disposition...</option>
            {dispositionOptions.map((option, i) => (
              <option key={i} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Assign To</label>
          <select
            value={assignedTo}
            onChange={e => setAssignedTo(e.target.value)}
            className="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 text-gray-800 p-3 bg-white"
          >
            <option value="">Select employee...</option>
            {employeeList.map((employee, i) => (
              <option key={i} value={employee}>{employee}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full inline-flex items-center justify-center space-x-2 py-3 px-6 border border-transparent rounded-lg shadow-md text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] mt-6"
      >
        <IconCheck size={18} />
        <span>Update Inquiry</span>
      </button>
    </>
  );
};

const QueryPanel = ({ employeeToken }) => {
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('desc');
  const [error, setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // ENQUIRY TYPE filter
  const [enquiryTypeFilter, setEnquiryTypeFilter] = useState('All');
  // DATE filter, including custom
  const [dateFilter, setDateFilter] = useState('All');
  const [customStart, setCustomStart] = useState('');
  const [customEnd, setCustomEnd] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  // Schedule-panel states
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleDesc, setScheduleDesc] = useState("");
  const [scheduleLoading, setScheduleLoading] = useState(false);

  const getTimeTaken = (submittedAt, resolvedAt) => {
    const diffInMilliseconds = resolvedAt && submittedAt ? new Date(resolvedAt) - new Date(submittedAt) : 0;
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    let timeString = '';
    if (diffInDays > 0) timeString += `${diffInDays} day${diffInDays > 1 ? 's' : ''}, `;
    if (diffInHours % 24 > 0) timeString += `${diffInHours % 24} hour${diffInHours % 24 > 1 ? 's' : ''}, `;
    if (diffInMinutes % 60 > 0) timeString += `${diffInMinutes % 60} minute${diffInMinutes % 60 > 1 ? 's' : ''}`;
    return timeString.trim().replace(/,$/, '');
  };

  const fetchInquiries = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/inquiries`);
      if (!response.ok) throw new Error("Failed to fetch inquiries");
      const data = await response.json();
      setInquiries(data);
    } catch (error) {
      toast.error("Failed to load inquiries. Please try again later.");
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchInquiries(); }, []);

  const showDropReason = (inquiry) => {
    toast.error(`Reason: ${inquiry.disposition}`, {
      duration: 5000,
      style: { background: '#fef2f2', color: '#ef4444', border: '1px solid #fca5a5' }
    });
  };

  const getPriority = (submittedDate) => {
    const now = new Date();
    const submissionTime = new Date(submittedDate);
    const diffInHours = (now - submissionTime) / (1000 * 60 * 60);
    if (diffInHours < 6) return "Hot";
    if (diffInHours < 12) return "Recent";
    if (diffInHours < 24) return "Cold";
    return "Old";
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'Hot': return 'bg-gradient-to-r from-red-500 to-orange-500 text-white';
      case 'Recent': return 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white';
      case 'Cold': return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'Old': default: return 'bg-gradient-to-r from-gray-500 to-slate-500 text-white';
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      case 'In Progress': return 'bg-blue-100 text-blue-800 border border-blue-200';
      case 'Completed': return 'bg-green-100 text-green-800 border border-green-200';
      case 'Dropped': return 'bg-red-100 text-red-800 border border-red-200';
      default: return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  // ========= Save inquiry update to backend DB ===============
  const handleUpdate = async (updatedData) => {
    try {
      await fetch(`${API_URL}/api/inquiries/${selectedInquiry.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      setInquiries((prevInquiries) =>
        prevInquiries.map((inquiry) =>
          inquiry.id === selectedInquiry.id
            ? { ...inquiry, ...updatedData }
            : inquiry
        )
      );
      toast.success("Inquiry updated successfully!");
      setSelectedInquiry(null);
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Failed to update inquiry in database!");
    }
  };

  const openModal = (inquiry) => {
    setSelectedInquiry(inquiry);
    setFormStatus(inquiry.status);
    setScheduleDate("");
    setScheduleDesc("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedInquiry(null);
    setIsModalOpen(false);
  };

  // --- Filtering logic ---
  // Hide Completed/Dropped entries after 7 days
  const hideOldCompletedOrDropped = inquiry => {
    const now = new Date();
    if (inquiry.status === "Completed") {
      if (inquiry.resolvedAt) {
        const diff = (now - new Date(inquiry.resolvedAt)) / (1000 * 60 * 60 * 24);
        return diff > 7; // hide if older than 7 days
      }
    }
    if (inquiry.status === "Dropped") {
      if (inquiry.submittedAt) {
        const diff = (now - new Date(inquiry.submittedAt)) / (1000 * 60 * 60 * 24);
        return diff > 7; // hide if older than 7 days
      }
    }
    return false;
  };

  // Apply Enquiry Type/filter logic
  const matchEnquiryType = inquiry =>
    enquiryTypeFilter === "All" || inquiry.enquiryType === enquiryTypeFilter;

  // Date filter
  const matchDateFilter = inquiry => {
    if (dateFilter === "All") return true;
    const submitted = new Date(inquiry.submittedAt);
    const today = new Date();
    if (dateFilter === "Today") {
      return submitted.toDateString() === today.toDateString();
    }
    if (dateFilter === "Last Month") {
      const monthAgo = addDays(today, -30);
      return submitted >= monthAgo && submitted <= today;
    }
    if (dateFilter === "Last 6 Months") {
      const sixMonthsAgo = addDays(today, -180);
      return submitted >= sixMonthsAgo && submitted <= today;
    }
    if (dateFilter === "Last Year") {
      const yearAgo = addDays(today, -365);
      return submitted >= yearAgo && submitted <= today;
    }
    if (dateFilter === "Custom" && customStart && customEnd) {
      const start = new Date(customStart);
      const end = new Date(customEnd);
      submitted.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999); // end of day inclusive
      return submitted >= start && submitted <= end;
    }
    return true;
  };

  // Final filtered
  const filteredInquiries = inquiries.filter(
    inq =>
      !hideOldCompletedOrDropped(inq) &&
      matchEnquiryType(inq) &&
      matchDateFilter(inq)
  ).sort((a, b) => {
    const dateA = new Date(a.submittedAt);
    const dateB = new Date(b.submittedAt);
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  // --- Render
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Enquiry Management Dashboard</h1>
        <p className="text-gray-500 mb-10 text-lg">Manage and track customer inquiries with ease</p>
        {isLoading ? (
          <div className="text-center py-20 text-gray-500">
            <div className="animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent text-indigo-600 rounded-full mb-4"></div>
            <p>Loading inquiries...</p>
          </div>
        ) : error ? (
          <div className="p-6 text-center text-red-600"><p>{error}</p></div>
        ) : (
          <div className="animate-fade-in">
            {/* FILTER BAR */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
              <h2 className="text-2xl font-semibold text-gray-800">All Inquiries 
                <span className="ml-2 bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">{filteredInquiries.length}</span>
              </h2>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className="inline-flex items-center space-x-2 px-4 py-2.5 border border-gray-200 rounded-xl bg-white shadow-sm hover:bg-gray-50 transition-all duration-200"
                  >
                    <IconFilter className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-800 font-medium">Filters</span>
                    <IconArrowDown className="w-4 h-4 text-gray-400" />
                  </button>
                  <AnimatePresence>
                    {showFilters && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-12 right-0 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-20 p-4 space-y-4"
                      >
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Enquiry Type</label>
                          <select 
                            value={enquiryTypeFilter} 
                            onChange={e => setEnquiryTypeFilter(e.target.value)} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          >
                            <option value="All">All Types</option>
                            {enquiryTypeOptions.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                          <select 
                            value={dateFilter} 
                            onChange={e => {
                              setDateFilter(e.target.value);
                              if (e.target.value !== "Custom") {
                                setCustomStart("");
                                setCustomEnd("");
                              }
                            }} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          >
                            <option value="All">All Dates</option>
                            {dateOptions.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                          {dateFilter === "Custom" && (
                            <div className="mt-3 flex space-x-2">
                              <input
                                type="date"
                                value={customStart}
                                onChange={e => setCustomStart(e.target.value)}
                                max={customEnd || undefined}
                                className="border rounded px-2 py-1 flex-1"
                                placeholder="Start Date"
                              />
                              <input
                                type="date"
                                value={customEnd}
                                onChange={e => setCustomEnd(e.target.value)}
                                min={customStart || undefined}
                                className="border rounded px-2 py-1 flex-1"
                                placeholder="End Date"
                              />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <button 
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} 
                  className="p-2.5 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md flex items-center"
                >
                  {sortOrder === 'desc' ? <IconSortDescending size={18} /> : <IconSortAscending size={18} />}
                </button>
              </div>
            </div>
            {/**** Inquiry Cards ****/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredInquiries.map((inquiry, index) => (
                <div
                  key={inquiry.id || index}
                  onClick={() => openModal(inquiry)}
                  className="group relative p-6 rounded-2xl cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Ticket ID</p>
                      <p className="font-bold text-xl text-gray-900">{String(inquiry.id).slice(-6).padStart(6, "0")}</p>
                    </div>
                    <div className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-sm ${getPriorityStyle(getPriority(inquiry.submittedAt))}`}>{getPriority(inquiry.submittedAt)}</div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-lg font-semibold text-gray-800">{inquiry.name}</p>
                    <p className="text-sm text-gray-500 font-medium">{inquiry.phone}</p>
                    <p className="text-xs text-gray-400">{new Date(inquiry.submittedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(inquiry.status)}`}>{inquiry.status}</div>
                  </div>
                  {inquiry.assignedTo && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1.5 rounded-full text-xs font-medium text-center shadow-sm">
                        Assigned to {inquiry.assignedTo}
                      </div>
                    </div>
                  )}
                  {inquiry.status === "Dropped" && (
                    <button
                      onClick={e => { e.stopPropagation(); showDropReason(inquiry); }}
                      className="w-full mt-4 px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors"
                    >Reason</button>
                  )}
                  {inquiry.status === "Completed" && inquiry.resolvedAt && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500 font-medium">
                        Completed in {getTimeTaken(inquiry.submittedAt, inquiry.resolvedAt)} by {inquiry.assignedTo}
                      </p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        )}
        {/* MODAL */}
        <AnimatePresence>
          {selectedInquiry && isModalOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-gray-200/50 backdrop-blur-sm z-[90]"
                onClick={closeModal}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="fixed inset-0 flex items-center justify-center p-4 z-[100] pt-24 pb-8"
              >
                <motion.div
                  className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-4xl relative max-h-[90vh] overflow-y-auto"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Ticket Details</h2>
                    <button onClick={closeModal} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <IconX size={24} />
                    </button>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* LEFT: Customer Info Card */}
                    <div className="w-full lg:w-2/5">
                      <h3 className="text-lg font-bold">Customer Information</h3>
                      <div className="bg-gray-50/80 rounded-xl p-4 space-y-3">
                        <div className="grid grid-cols-[1fr_2fr] gap-x-4 gap-y-2 text-sm">
                          <span className="font-medium text-gray-600">Name:</span>
                          <span className="font-semibold text-gray-900">{selectedInquiry.name}</span>
                        </div>
                        <div className="grid grid-cols-[1fr_2fr] gap-x-4 gap-y-2 text-sm">
                          <span className="font-medium text-gray-600">Phone:</span>
                          <span className="font-mono text-gray-900">{selectedInquiry.phone}</span>
                        </div>
                        <div className="grid grid-cols-[1fr_2fr] gap-x-4 gap-y-2 text-sm">
                          <span className="font-medium text-gray-600">Email:</span>
                          <span className="text-gray-900">{selectedInquiry.email}</span>
                        </div>
                        <div className="grid grid-cols-[1fr_2fr] gap-x-4 gap-y-2 text-sm">
                          <span className="font-medium text-gray-600">Type:</span>
                          <span className="font-semibold text-gray-900">{selectedInquiry.enquiryType}</span>
                        </div>
                        <div className="grid grid-cols-[1fr_2fr] gap-x-4 gap-y-2 items-center text-sm">
                          <span className="font-medium text-gray-600">Priority:</span>
                          <span className={`px-2 py-1 text-xs font-bold rounded-full w-min ${getPriorityStyle(getPriority(selectedInquiry.submittedAt))}`}>
                            {getPriority(selectedInquiry.submittedAt)}
                          </span>
                        </div>
                        <div className="pt-2">
                          <span className="text-sm font-medium text-gray-600">Description:</span>
                          <p className="text-sm text-gray-900 font-semibold mt-1 rounded-md bg-indigo-50 p-2 border border-indigo-100 shadow-sm">{selectedInquiry.description}</p>
                        </div>
                        {/* SCHEDULE PANEL below DESCRIPTION */}
                        {formStatus === "Schedule" && (
                          <div className="mt-4 bg-indigo-50 p-5 rounded-xl border border-indigo-200 space-y-4">
                            <p className="font-semibold text-indigo-600 text-lg">Schedule Meeting / Demo</p>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Date/Time</label>
                              <input
                                type="datetime-local"
                                value={scheduleDate}
                                onChange={e => setScheduleDate(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                              <input
                                type="text"
                                value={scheduleDesc}
                                onChange={e => setScheduleDesc(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2"
                                placeholder="Enter meeting/demo agenda"
                              />
                            </div>
                            <button
                              onClick={async () => {
                                setScheduleLoading(true);
                                try {
                                  await fetch(`${API_URL}/api/schedule-meeting`, {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({
                                      inquiryId: selectedInquiry.id,
                                      to: selectedInquiry.email,
                                      scheduleDate,
                                      scheduleDesc,
                                      scheduledBy: selectedInquiry.assignedTo,
                                      customerName: selectedInquiry.name
                                    }),
                                  });
                                  toast.success("Meeting scheduled and email sent to customer!");
                                } catch (error) {
                                  toast.error("Failed to schedule meeting. Please try again.");
                                } finally {
                                  setScheduleLoading(false);
                                }
                              }}
                              disabled={scheduleLoading || !scheduleDate || !scheduleDesc}
                              className="w-full py-2 flex items-center justify-center text-white font-semibold rounded-lg bg-indigo-700 hover:bg-indigo-800 transition-all"
                            >
                              {scheduleLoading ? "Scheduling..." : "Schedule"}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* RIGHT: Inquiry Update Form */}
                    <div className="w-full lg:w-3/5">
                      <h3 className="text-lg font-bold">Update Inquiry</h3>
                      <div className="space-y-4">
                        <InquiryUpdateForm
                          inquiry={selectedInquiry}
                          onUpdate={handleUpdate}
                          statusOptions={statusOptions}
                          dispositionOptions={dispositionOptions}
                          employeeList={employeeList}
                          getStatusStyle={getStatusStyle}
                          status={formStatus}
                          onStatusChange={setFormStatus}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default QueryPanel;
