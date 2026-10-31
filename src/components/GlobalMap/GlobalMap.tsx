import { DefaultShowcaseGlobe } from "../ui/globe";

export default function GlobalMap() {
  return (
    <>
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium">Global map</h2>
        </div>

        <div className="relative grid h-81.5 place-items-center overflow-hidden rounded-3xl bg-[#1a1a1e]">
          <DefaultShowcaseGlobe
            globeSize={350}
            hideCenterTitle
            orbitPhrase=" "
          />
        </div>
      </div>
    </>
  );
}
