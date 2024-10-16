import { ChevronRight } from 'lucide-react';
import React from 'react';

export default function Steps() {
  return (
    <div className="p-8 md:p-16 bg-purple-100 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-center">
          Simplify Your Medical Device Maintenance
        </h2>

        {/* Steps for large and medium screens */}
        <div className="hidden sm:flex justify-center items-center gap-6">
          <p className="flex items-center justify-center border-2 rounded-full p-2 h-8 w-8 border-slate-600">1</p>
          <p>Upload Finance Details</p>
          <ChevronRight className="w-8 h-8" />
          <p className="flex items-center justify-center border-2 rounded-full p-2 h-8 w-8 border-slate-600">2</p>
          <p>Set Budget and Savings</p>
          <ChevronRight className="w-8 h-8" />
          <p className="flex items-center justify-center border-2 rounded-full p-2 h-8 w-8 border-slate-600">3</p>
          <p>Track Every Expense, Income and Budget</p>
        </div>

        {/* Steps for small screens */}
        <div className="flex flex-col sm:hidden gap-8">
          <div className="flex items-center gap-4">
            <p className="flex items-center justify-center border-2 rounded-full p-2 h-10 w-10 border-slate-600 text-lg font-bold">
              1
            </p>
            <p className="text-lg">Upload Inventory Details</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="flex items-center justify-center border-2 rounded-full p-2 h-10 w-10 border-slate-600 text-lg font-bold">
              2
            </p>
            <p className="text-lg">Select Maintenance Schedules</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="flex items-center justify-center border-2 rounded-full p-2 h-10 w-10 border-slate-600 text-lg font-bold">
              3
            </p>
            <p className="text-lg">Automate Maintenance Scheduling</p>
          </div>
        </div>
      </div>
    </div>
  );
}
