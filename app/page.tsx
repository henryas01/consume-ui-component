"use client";

import "henryas-component-ui-react/style.css";
import { Button, Select } from "henryas-component-ui-react";
import { useState } from "react";
import { IoGlobeOutline, IoCodeSlash } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const mockOptions = [
  { value: "1", label: "Technology" },
  { value: "2", label: "Creative Arts" },
  { value: "3", label: "Business Management" },
  { value: "4", label: "Health & Wellness" },
  { value: "5", label: "Social Sciences" },
  { value: "6", label: "Digital Marketing" },
];

export default function Home() {
  const [val, setVal] = useState<string[]>(["1"]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting to MAKYO...", val);
    alert(`Data submitted successfully: ${JSON.stringify(val)}`);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex items-center justify-center p-4 md:p-6 font-sans">
      <div className="w-full max-w-xl bg-white border border-slate-200 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
        {/* Header Section */}
        <div className="px-8 pt-10 pb-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 self-center sm:self-start px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider">
                Technical Assessment
              </span>
            </div>
            {/* <div className="text-[11px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
              v1.0.4-stable
            </div> */}
          </div>

          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
            Hello, Team <span className="text-indigo-600">MAKYO</span>!
          </h1>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md">
            I&apos;m{" "}
            <span className="font-semibold text-slate-800 underline decoration-indigo-200 underline-offset-4">
              Henryas
            </span>
            . This interface demonstrates the integration of my custom{" "}
            <a
              href="https://www.npmjs.com/package/henryas-component-ui-react"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-800 underline decoration-indigo-200 underline-offset-4"
            >
              <span className="text-indigo-600">
                {" "}
                henryas-component-ui-react
              </span>
            </a>{" "}
            component library.
          </p>

          {/* Contact Badges */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-8">
            <a
              href="https://www.linkedin.com/in/henry-albiri-salsabila-376b92151"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 shadow-sm"
            >
              <FaLinkedin className="text-lg text-slate-400 group-hover:text-indigo-600 transition-colors" />
              LinkedIn
            </a>
            <a
              href="https://henryas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 shadow-sm"
            >
              <IoGlobeOutline className="text-lg text-slate-400 group-hover:text-emerald-500 transition-colors" />
              Portfolio
            </a>
          </div>
        </div>

        {/* Implementation Area */}
        <div className="px-8 pb-10">
          <form
            onSubmit={onSubmit}
            className="p-6 md:p-8 bg-slate-50/50 border border-slate-100 rounded-3xl space-y-8"
          >
            <div className="space-y-1">
              <Select
                id="category_id"
                name="category_id"
                label="Project Categories"
                options={mockOptions}
                multiple
                value={val}
                onChange={setVal}
                withSearch
                searchwithfilter={false}
                placeholder="Select multiple options..."
              />
              <div className="flex items-center gap-2 px-1">
                <IoCodeSlash className="text-slate-400 text-xs" />
                <p className="text-[11px] text-slate-400 font-medium italic">
                  Features: Multi-select, Searchable, Custom Hooks
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4">
              <Button
                type="button"
                onClick={() => setVal([])}
                className="text-xs font-bold text-slate-400 hover:text-red-500 uppercase tracking-widest transition-colors"
                label={"Reset"}
              />
              <Button
                type="submit"
                className="px-10 py-3.5 bg-slate-900 text-white rounded-2xl text-xs font-bold hover:bg-indigo-600 active:scale-[0.97] transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-indigo-200"
                label={"Submit"}
              />
            </div>
          </form>
        </div>

        <div className="bg-[#0f172a] p-8 border-t border-slate-800">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="h-2 w-2 rounded-full bg-red-500/50" />
                <div className="h-2 w-2 rounded-full bg-amber-500/50" />
                <div className="h-2 w-2 rounded-full bg-emerald-500/50" />
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                Live Terminal
              </span>
            </div>
            <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-bold text-emerald-400 uppercase">
              Connected
            </div>
          </div>
          <div className="font-mono text-[12px] leading-relaxed">
            <span className="text-slate-500 block mb-1">
              Current state object
            </span>
            <pre className="text-emerald-400 bg-emerald-950/20 p-4 rounded-xl border border-emerald-900/30 overflow-x-auto">
              {JSON.stringify(
                {
                  author: "Henryas",
                  timestamp: new Date().toLocaleTimeString(),
                  data: { category_ids: val },
                },
                null,
                2,
              )}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
