import { assetService } from "@/services";

export function Topbar() {
  return (
    <section className="fixed w-full h-11 px-4 flex items-center bg-gray/50">
      <img
        src={assetService.getIcons("search-light")}
        width={16}
        alt="search-icon"
      />
    </section>
  );
}
