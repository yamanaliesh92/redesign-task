import { useState } from "react";
import { skipData } from "../static/selectSkipData";

export default function SelectSkipPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <div>
      <div className="text-center py-0 sm:py-2">
        <h1 className="text-xl sm:text-2xl md:text-4xl mt-0 md:mt-2 font-bold text-gray-900 dark:text-white">Choose Your Skip</h1>
        <h2 className="text-sm sm:text-lg text-gray-700 dark:text-gray-400 mt-2">Select the skip size that best suits your needs</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {skipData.map((skip) => (
          <SkipCard key={skip.id} skip={skip} selectedId={selectedId} setSelectedId={setSelectedId} />
        ))}
      </div>
    </div>
  );
}
