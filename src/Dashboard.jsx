 import React from 'react';
import { Bell, BookOpen, Clock, FileText, BarChart3 } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        
     
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-2xl shadow-sm mb-8 gap-4 border border-gray-100">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Welcome back, Student!</h1>
            <p className="text-gray-500">Here's what's happening with your courses today.</p>
          </div>
          <div className="flex items-center gap-4 self-end md:self-auto">
            <div className="relative p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-all">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
              S
            </div>
          </div>
        </header>

 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={<BarChart3 className="text-emerald-600" />} label="Average Grade" value="88%" />
          <StatCard icon={<BookOpen className="text-blue-600" />} label="Courses" value="3" />
          <StatCard icon={<Clock className="text-rose-600" />} label="Study Hours" value="45h" />
          <StatCard icon={<FileText className="text-amber-600" />} label="Assignments" value="12" />
        </div>

   
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
     
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold mb-6">Course Progress</h2>
            <div className="space-y-8">
              <ProgressItem title="React Fundamentals" progress={75} next="Components & Props" instructor="Sarah Wilson" />
              <ProgressItem title="JavaScript Advanced" progress={45} next="Async/Await" instructor="Mike Johnson" />
              <ProgressItem title="UI/UX Design" progress={90} next="Color Theory" instructor="Emily Chen" />
            </div>
          </div>
 
          <div className="space-y-8">
            <UpcomingAssignments />
            <Announcements />
          </div>
          
        </div>
      </div>
    </div>
  );
};
 

const StatCard = ({ icon, label, value }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
    <div className="p-3 bg-gray-50 rounded-xl">{icon}</div>
    <div>
      <p className="text-gray-500 text-sm font-medium">{label}</p>
      <p className="text-2xl font-bold leading-none mt-1">{value}</p>
    </div>
  </div>
);

 const ProgressItem = ({ title, progress, next, instructor }) => (
  <div>
    <div className="flex justify-between mb-2 items-end">
      <span className="font-bold text-gray-700">{title}</span>
      <span className="text-gray-400 text-sm font-semibold">{progress}%</span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-2.5">
 
      <div 
        className="bg-gray-300 h-2.5 rounded-full transition-all duration-700" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
    <div className="flex justify-between text-[11px] text-gray-400 mt-2 font-medium">
      <span>Next: {next}</span>
      <span className="text-gray-500">{instructor}</span>
    </div>
  </div>
);
const UpcomingAssignments = () => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
    <h2 className="text-lg font-bold mb-4">Upcoming Assignments</h2>
    <div className="space-y-4">
      <AssignmentRow name="Build a Todo App" course="React Fundamentals" date="2024-03-20" status="pending" type="red" />
      <AssignmentRow name="API Integration" course="JavaScript Advanced" date="2024-03-18" status="completed" type="green" />
      <AssignmentRow name="Design System" course="UI/UX Design" date="2024-03-25" status="in-progress" type="yellow" />
    </div>
  </div>
);

const AssignmentRow = ({ name, course, date, status, type }) => {
  const styles = {
    red: "bg-red-50 text-red-600",
    green: "bg-green-50 text-green-600",
    yellow: "bg-yellow-50 text-yellow-600"
  };
  return (
    <div className="flex justify-between items-start border-b border-gray-50 pb-3 last:border-0 last:pb-0">
      <div>
        <p className="font-bold text-sm text-gray-800 leading-tight">{name}</p>
        <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider mt-0.5">{course}</p>
      </div>
      <div className="text-right">
        <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${styles[type]}`}>
          {status}
        </span>
        <p className="text-gray-400 text-[10px] mt-1 font-medium">Due {date}</p>
      </div>
    </div>
  );
};

const Announcements = () => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
    <h2 className="text-lg font-bold mb-4">Announcements</h2>
    <div className="space-y-5">
      <AnnouncementItem title="New Course Available" detail="Check out our new TypeScript course!" time="2 hours ago" />
      <AnnouncementItem title="Maintenance Notice" detail="Platform updates scheduled for tonight" time="5 hours ago" />
    </div>
  </div>
);

const AnnouncementItem = ({ title, detail, time }) => (
  <div className="border-l-4 border-indigo-600 pl-4 py-0.5">
    <p className="text-sm font-bold text-gray-800">{title}</p>
    <p className="text-xs text-gray-500 mt-0.5">{detail}</p>
    <p className="text-[10px] text-gray-400 mt-1 font-semibold">{time}</p>
  </div>
);

export default Dashboard;