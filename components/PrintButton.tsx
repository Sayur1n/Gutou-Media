'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
    >
      Print Receipt
    </button>
  );
} 